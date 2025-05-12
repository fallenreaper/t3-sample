import { getImageById } from "~/server/queries";


export async function FullScreenImagePage(props:{id: number}) {

    const image = await getImageById(props.id);

    return (
        <img src={image.url} alt={image.name || ""} className="w-96 h-96" />
    )
}