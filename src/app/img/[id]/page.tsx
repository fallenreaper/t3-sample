

// import {Modal} from "./modal";

export default async function PhotoModal({params}: {params: {id: string}}) {
  // The params object is gong to be a promise
  const {id: photoId} = await params;
  // Gets the ID from params and assigns it to photoId
  return (
    // <Modal>{photoIdId}</Modal>
    <>{photoId}</>
  );

}