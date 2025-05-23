import { createUploadthing, type FileRouter } from "uploadthing/server";
import { UploadThingError } from "uploadthing/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { ratelimit } from "~/server/ratelimit";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 40,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      console.log("middleware", req);
      // This code runs on your server before upload
      const user = await auth();
      console.log("user", user);

      // If you throw, the user will not be able to upload
      if (!user.userId) throw new UploadThingError("Unauthorized");

      // To get full user data, you need to establish the clerk client, then await a getUser call.
      const client = await clerkClient();
      const fullUserData = await client.users.getUser(user.userId);
      // On Clerk, you can set metadata for users. Given that, I created a quick private metadata object
      // { canUpload: true}
      // So my account can upload and anyone I want to give permissions to, just needs to have this prop set.
      // You can also write code that will manage user Metadata as well in an Admin Page of sorts.
      if( !fullUserData?.privateMetadata?.["canUpload"]){
        throw new UploadThingError("User does not have upload permissions");
      }

      // If the rate limit of the user is exceeded, throw an error
      const { success } = await ratelimit.limit(user.userId)
      if (!success) {
        throw new UploadThingError("Rate limit exceeded");
      }

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.ufsUrl);

      await db.insert(images).values({
        name: file.name,
        url: file.ufsUrl,
        userId: metadata.userId,
      });

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
