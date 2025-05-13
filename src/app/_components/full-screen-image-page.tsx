import { getImageById } from "~/server/queries";


export async function FullScreenImagePage(props:{id: number}) {

    const image = await getImageById(props.id);

    return (
        <div className="flex w-full h-full items-center justify-center min-w-0">
            <div className="flex-skrink">
                <img src={image.url} alt={image.name || ""} className="object-contain" />
            </div>

            <div className="w-48 flex flex-col flex-shrink-0 border-l">
                <h1 className="text-2xl font-bold">{image.name}</h1>
            </div>
        </div>
    )
}