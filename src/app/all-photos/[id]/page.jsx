import Image from "next/image";

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch('https://assignment-08-rust.vercel.app/data.json')
    const photos = await res.json();
    // console.log(photos);

    const photo = photos.find((p) => p.id == id);
    console.log(photo);

    return (
        <div>
            <h1 className='text-2xl font-bold my-4'>{photo.title}</h1>
            <p>{photo.prompt}</p>
            <div className="relative w-full aspect-square">
                <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover" />
            </div>
        </div>
    );
};

export default PhotoDetailsPage;