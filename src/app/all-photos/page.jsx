import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async () => {
    const res = await fetch('https://assignment-08-rust.vercel.app/data.json')
    const photos = await res.json();
    // console.log(photos);
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Photos</h1>
            <div className='grid grid-cols-4 gap-5'>
                {photos.map((photos) => <PhotoCard key={photos.id} photo={photos} />)}
            </div>
        </div >
    );
};

export default AllPhotosPage;