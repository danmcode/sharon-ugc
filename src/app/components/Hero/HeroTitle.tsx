import { motion } from "framer-motion";
import { fadeUp } from "./FadeUp";

export const HeroTitle = () => {
    return (
        <div className="
            flex 
            flex-col 
            justify-center
            w-fit
            text-center
            md:text-left
            ">
            <motion.h1
                {...fadeUp(0.2)}
                className="
                    text-[42px] 
                    md:text-[80px] 
                    lg:text-[100px] 
                    font-bold 
                    text-pink-500 
                    leading-[0.9]"
            >
                Creadora <br /> de contenido
            </motion.h1>

            <motion.h2
                {...fadeUp(0.4)}
                className="
                    text-[70px] 
                    md:text-[110px] 
                    font-bold 
                    bg-linear-to-r 
                    from-pink-500 
                    via-orange-400 
                    to-yellow-400 
                    text-transparent 
                    bg-clip-text"
            >
                UGC
            </motion.h2>

            <motion.div
                {...fadeUp(0.6)}
                className="
                    flex
                    justify-end
                    text-pink-500 
                    text-lg 
                    md:text-xl
                    "
            >
                By: Sharon Paniquita
            </motion.div>
        </div>
    )
}
