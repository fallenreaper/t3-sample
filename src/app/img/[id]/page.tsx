
import { FullScreenImagePage } from "~/app/_components/full-screen-image-page";

export default function PhotoModal({params}: {params: {id: string}}) {

  const photoId = Number(params.id);
  if (Number.isNaN(photoId)) {
    throw new Error("Invalid photo ID");
  }
  return (
    <div className="h-full">
      <FullScreenImagePage id={photoId} />
    </div>
  );

}