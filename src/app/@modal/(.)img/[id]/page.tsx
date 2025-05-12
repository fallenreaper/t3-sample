

// import {Modal} from "./modal";

import { getImageById } from "~/server/queries";

// This is specific to the MODAL, but not the route.  This allows for an INPAGE implementation
//   However, to make sure it routes correctly, it will need a dedicated route, which is located in:
//   src/app/img

export default async function PhotoModal({params}: {params: {id: string}}) {
  // The params object is gong to be a promise
  const {id} = await params;
  const photoId = Number(id);
  if (Number.isNaN(photoId)) {
    throw new Error("Invalid photo ID");
  }

  const image = await getImageById(photoId);
  // Gets the ID from params and assigns it to photoId
  return (
    // <Modal>{photoIdId}</Modal>
    <>
      <img src={image.url} alt={image.name || ""} className="w-96 h-96" />
    </>
  );

}