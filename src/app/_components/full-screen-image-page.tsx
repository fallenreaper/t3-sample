import { getImageById } from "~/server/queries";


export async function FullScreenImagePage(props:{id: number}) {

    const image = await getImageById(props.id);

    return (
        <div className="flex w-full bg-green h-full items-center justify-center">
            <img src={image.url} alt={image.name || ""} className="w-96 h-96 object-contain" />
        </div>
    )
}