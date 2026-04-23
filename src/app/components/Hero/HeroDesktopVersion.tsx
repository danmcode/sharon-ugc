import Image from "next/image"
import { HeroImage } from "./HeroImage"
import { HeroTitle } from "./HeroTitle"


export const HeroDesktopVersion = () => {
    return (
        <section className="relative w-fill h-screen overflow-hidden">
            <Image
                src="/images/heart_lines.svg"
                alt="background left"
                fill
                className="
                    absolute
                    top-0
                    -rotate-20
                    origin-top-right
                    translate-y-20
                    z-0
                    pointer-events-none
                "
            />
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-170 z-20">
                <HeroTitle />
            </div>

            <div className="absolute bottom-0 left-1/3 -translate-x-1/2 z-10">
                <HeroImage />
            </div>

            <Image
                src="/images/heart_lines.svg"
                alt="background right"
                fill
                className="
                    absolute
                    bottom-0
                    right-0
                    -rotate-20
                    origin-bottom-right
                    -translate-y-135
                    -translate-x-135
                    z-0
                    pointer-events-none
                "
            />
        </section>
    )
}
