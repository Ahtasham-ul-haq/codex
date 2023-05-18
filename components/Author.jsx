import React from 'react'
import Image from 'next/image'
import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
            <div className='absolute mx-auto -top-14'>
                <Image
                    src={author.photo.url}
                    alt={author.name}
                    loader={grpahCMSImageLoader}
                    unoptimized
                    width={100}
                    height={100}
                    className='align-middle rounded-full'
                />
            </div>
            <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-white text-lg'>{author.bio}</p>
        </div>
    )
}
export default Author 