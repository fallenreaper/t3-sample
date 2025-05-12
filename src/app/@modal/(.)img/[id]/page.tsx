

// import {Modal} from "./modal";

// Next.js Parallel Routes
// This is a parallel route, which means it will be rendered in parallel with the other routes

import { FullScreenImagePage } from "~/app/_components/full-screen-image-page";
import { Modal } from "~/app/_components/modal";

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
  return (
    <Modal>
      <FullScreenImagePage id={photoId} />
    </Modal>
  );

}