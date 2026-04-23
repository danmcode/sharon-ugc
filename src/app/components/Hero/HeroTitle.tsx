import { motion } from "framer-motion";
import { fadeUp } from "./FadeUp";
import { HeroSocialButtons } from "./HeroSocialButtons";

export const HeroTitle = () => {
    return (
        <div className="flex flex-col min-h-screen
            ">
            <motion.h1
                {...fadeUp(0.2)}
                className="
                    text-[42px]
                    text-center
                    mt-5
                    md:text-[110px]
                    md:text-left
                    font-bold 
                    text-pink-500 
                    leading-[0.8]"
            >
                Creadora de <br /> contenido
            </motion.h1>

            <motion.div
                {...fadeUp(0.4)}
                className="
                flex
                items-end
                text-[70px]
                justify-center 
                md:text-[120px]
                md:justify-end
                md:ml-16
                font-bold 
                bg-linear-to-r 
                from-pink-500 
                via-orange-400 
                to-yellow-400 
                text-transparent 
                bg-red-500
                bg-clip-text"
            >
                UGC
            </motion.div>

            <motion.div
                {...fadeUp(0.6)}
                className="
                    flex
                    justify-center
                    md:justify-end
                    text-pink-500 
                    text-lg 
                    md:text-xl
                    "
            >
                By: Sharon Paniquita
            </motion.div>

            <div className="hidden md:flex mt-65 justify-end">
                <HeroSocialButtons />
            </div>
        </div>
    )
}
