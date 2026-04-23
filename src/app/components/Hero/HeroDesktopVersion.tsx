import { HeroImage } from "./HeroImage"
import { HeroTitle } from "./HeroTitle"
import { HeroSocialButtons } from './HeroSocialButtons';


export const HeroDesktopVersion = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#f5eee9] px-20 pt-24">

            <div className="absolute top-24 right-20 z-20">
                <HeroTitle />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                <HeroImage />
            </div>

            <div className="absolute right-20 bottom-32 z-20">
                <HeroSocialButtons />
            </div>

        </section>
    )
}
