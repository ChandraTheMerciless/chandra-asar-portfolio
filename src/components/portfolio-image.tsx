'use client';

import Image from 'next/image';
import portfolio from '@/assets/images/Chandra_Asar_headshot_dark.png';

export default function PortfolioImage() {
    return (
        // <div className="z-0 left-0 top-10 fixed">
        //     <Image src={portfolio} className="w-full lg:w-1/2" alt="Chandra Asar" />
        // </div>
        // <div className="">
            <Image src={portfolio} className="w-full max-w-xs md:max-w-xs rounded-lg shadow-xl object-cover" alt="Chandra Asar" />
        // </div>
    )
}