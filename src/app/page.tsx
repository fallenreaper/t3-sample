import { SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

// This is used to force the page to be dynamic and not static
// This is useful for pages that need to be updated frequently
// or that need to be revalidated on every request
export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    // where: (img, { eq }) => eq(img.userId, user.id), ),
  });
  console.log("images", images);
  return (
    <div className="flex flex-wrap gap-4 content-center">
      {images.map((img) => (
        <div key={img.id} className="w-48">
          <img src={img.url} alt="image" />
          <div className="text-center">
            <Link
              href={`/images/${img.id}`}
              className="text-blue-500 hover:underline"
            >
              {img.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl">Sign in to view Photos!</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
