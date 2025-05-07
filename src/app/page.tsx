import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  const images = await db.query.images.findMany(
    {
      orderBy: ( model, { desc}) => desc(model.id)
    }
  );
  console.log("images", images);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        { [...images,...images,...images,...images].map( (img,index) => (
          <div key={img.id + "-" + index} className="w-48">
            <img src={img.url} alt="image" />
            <div className="text-center">
              <Link href={`/images/${img.id}`} className="text-blue-500 hover:underline">
                {img.name}
              </Link>
              </div>
          </div>
        ))}
      </div>
    </main>
  );
}
