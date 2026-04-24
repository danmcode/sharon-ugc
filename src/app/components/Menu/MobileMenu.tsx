import Image from 'next/image'
import { MenuItems } from './MenuItems'

export const MobileMenu = () => {
    return (
        <>
            <div className='
            flex
            flex-col
            items-center
            gap-2
            mt-10
            '>
                <h1 className='
                text-[#634444]
                font-black
                text-3xl
                '>
                    ¿Que quieres ver?
                </h1>

                <Image
                    src="/images/sharon-white.png"
                    alt="sharon"
                    width={100}
                    height={100}
                    className='w-auto h-auto'
                />

                <MenuItems />

            </div>
        </>
    )
}
