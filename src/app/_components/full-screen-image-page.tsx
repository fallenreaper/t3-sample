import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/app/_components/shadcn/button";
import { deleteImageById, getImageById } from "~/server/queries";

export async function FullScreenImagePage(props: { id: number }) {
  let image;
  try{
    image = await getImageById(props.id);
  }catch(e){
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-2xl">Image not found</h1>
      </div>
    )
  }
  const uploadedBy = await (await clerkClient()).users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center">
      <div className="flex-skrink">
        <img
          src={image.url}
          alt={image.name || ""}
          className="object-contain"
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l">
        <h1 className="border-b p-2 text-center text-lg">{image.name}</h1>

        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{uploadedBy.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded at:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col p-2">
          <form action={ async () => {
            "use server";

            await deleteImageById(props.id);
          }}>
            <Button type="submit" variant="destructive">Button</Button>
          </form>
        </div>

      </div>
    </div>
  );
}
