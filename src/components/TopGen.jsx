import PhotoCard from "./PhotoCard";

const TopGen = async () => {
    const res = await fetch('https://assignment-08-rust.vercel.app/data.json')
    const photos = await res.json();
    console.log(photos);

    const topPhotos = photos.slice(0, 8);
    console.log(topPhotos);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">Top 8 Photos</h1>
            <div className="grid grid-cols-4 gap-5">
                {topPhotos.map((photos) => <PhotoCard key={photos.id} photos={photos} />)}
            </div>
        </div>
    );
};

export default TopGen;