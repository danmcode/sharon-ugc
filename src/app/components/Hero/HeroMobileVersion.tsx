import { HeroImage } from "./HeroImage"
import { HeroSocialButtons } from "./HeroSocialButtons"
import { HeroTitle } from "./HeroTitle"

export const HeroMobileVersion = () => {
    return (
        <>
            <div className="
            flex
            flex-col
            items-center
            min-h-full
            mt-15
            ">
                <HeroImage />
                <HeroTitle />
                <div className="mt-20">
                    <HeroSocialButtons />
                </div>
            </div>
        </>
    )
}
