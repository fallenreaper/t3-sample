import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

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