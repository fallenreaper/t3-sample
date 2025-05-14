import { FullScreenImagePage } from "~/app/_components/full-screen-image-page";

export default async function PhotoModal({ params }: { params: { id: string } }) {
  const {id}  = await params;
  const photoId = Number(id);
  if (Number.isNaN(photoId)) {
    throw new Error("Invalid photo ID");
  }
  return (
    <div className="h-full">
      <FullScreenImagePage id={photoId} />
    </div>
  );
}
