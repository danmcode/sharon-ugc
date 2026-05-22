import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import Image from 'next/image'

export const MenuPage = () => {
    return (
        <section className="
            relative 
            w-full 
            h-full
            bg-[#ffacc7] 
            overflow-hidden
            pt-20
        ">
            <Image
                src="/images/menu-bg-right.png"
                alt="background right"
                width={100}
                height={100}
                className="
                absolute
                top-22
                -right-7
                md:top-23
                md:-right-15
                w-48
                md:w-90
                h-auto
                rotate-270
                z-0
                pointer-events-none
                "
            />

            <Image
                src="/images/menu-bg-left.png"
                alt="background left"
                width={100}
                height={100}
                className="
                absolute
                bottom-0
                left-0
                w-48
                md:w-90
                h-auto
                z-0
                pointer-events-none
                "
            />
            <div className="relative z-10">
                <div className="flex md:hidden h-full w-full justify-center">
                    <MobileMenu />
                </div>

                <div className="hidden md:block items-center justify-center">
                    <DesktopMenu />
                </div>
            </div>
        </section>
    )
}
