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
