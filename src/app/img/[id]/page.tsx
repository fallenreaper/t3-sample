

// import {Modal} from "./modal";

import { FullScreenImagePage } from "~/app/_components/full-screen-image-page";

export default function PhotoModal({params}: {params: {id: string}}) {

  const photoId = Number(params.id);
  if (Number.isNaN(photoId)) {
    throw new Error("Invalid photo ID");
  }
  // Gets the ID from params and assigns it to photoId
  return (
    <FullScreenImagePage id={photoId} />
  );

}