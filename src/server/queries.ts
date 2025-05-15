import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect, RedirectType } from "next/navigation";
import analyticsServerClient from "./analytics";

export async function getMyImages() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    where: (img, { eq }) => eq(img.userId, userId),
  });

  return images;
}

export async function getImageById(id: number) {
  const user = await auth();
  if (!user.userId) {
    throw new Error("User not authenticated");
  }
  const image = await db.query.images.findFirst({
    where: (img, { eq }) => eq(img.id, id),
  });

  if (!image) {
    throw new Error("Image not found");
  }

  if (image.userId !== user.userId) {
    throw new Error("You do not have permission to view this image");
  }

  return image;
}

export async function deleteImageById(id: number) {
  const user = await auth();
  if (!user.userId) {
    throw new Error("User not authenticated");
  }
  const image = await db.query.images.findFirst({
    where: (img, { eq }) => eq(img.id, id),
  });

  console.log("What is the image?", image);

  if (!image) {
    throw new Error("Image not found");
  }

  if (image.userId !== user.userId) {
    throw new Error("You do not have permission to delete this image");
  }

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));
  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
      imageId: id,
    },
  });

  redirect("/", RedirectType.replace);
  // window.location.href = "/"; // This is a workaround for the redirect not working in server actions
}
