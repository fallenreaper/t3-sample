import { SignedOut, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

// This is used to force the page to be dynamic and not static
// This is useful for pages that need to be updated frequently
// or that need to be revalidated on every request
export const dynamic = "force-dynamic";

const Images = async () => {

  const images = await getMyImages();
  
  console.log("images", images);
  return (
    <div className="flex flex-wrap gap-4 justify-center p-5">
      {images.map((img) => (
        <div key={img.id} className="w-48 h-48">
          <div className="text-center">
            <Link
              href={`/img/${img.id}`}
              shallow={true}
            >
            <Image 
              src={img.url} 
              alt="image" 
              width={480}
              height={480}
              style={{objectFit: "contain"}} />
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
