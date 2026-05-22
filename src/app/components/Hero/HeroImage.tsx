import { motion } from "framer-motion";
import { fadeUp } from "./FadeUp";
import Image from "next/image";
import sharonImg from "../../../../public/images/sharon.png";
import ateneaImg from "../../../../public/images/atenea.png";
import aveneImg from "../../../../public/images/avene.png";
import ancestralImg from "../../../../public/images/ancestral.png";
import brochasImg from "../../../../public/images/brochas.png";

export const HeroImage = () => {
    return (
        <div className="relative w-[320px] md:w-120 aspect-3/4">
            <div className="
                    absolute 
                    bottom-[0%] 
                    rotate-8
                    w-100 
                    h-100 
                    md:w-100
                    md:h-125
                     bg-pink-400/40 
                     rounded-3xl
                     blur-[60px] 
                     z-0"
            />

            <motion.div
                {...fadeUp(0)}
                className="absolute bottom-0 z-5"
            >
                <Image
                    src={sharonImg}
                    alt="Sharon"
                    width={500}
                    height={500}
                    loading="eager"
                    className="w-80 md:w-500 h-auto"
                />
            </motion.div>

            {/* Atenea */}
            <motion.div
                {...fadeUp(0.3)}
                className="absolute top-[18%] left-[15%]"
            >
                <Image
                    src={ateneaImg}
                    alt=""
                    width={80}
                    height={80}
                    loading="eager"
                    className="w-20 md:w-25 -rotate-12 drop-shadow-xl h-auto"
                />
            </motion.div>

            {/* Avene */}
            <motion.div
                {...fadeUp(0.5)}
                className="absolute top-[20%] right-[30%]"
            >
                <Image
                    src={aveneImg}
                    alt=""
                    width={45}
                    height={45}
                    loading="eager"
                    className="w-10 md:w-12 rotate-12 drop-shadow-xl h-auto"
                />
            </motion.div>

            {/* Ancestral */}
            <motion.div
                {...fadeUp(0.7)}
                className="absolute top-[36%] right-[2%]"
            >
                <Image
                    src={ancestralImg}
                    alt=""
                    width={70}
                    height={70}
                    loading="eager"
                    className="w-16 md:w-20 h-auto"
                />
            </motion.div>


            {/* Brochas */}
            <motion.div
                {...fadeUp(1.1)}
                className="absolute bottom-[0%] right-[0%]"
            >
                <Image
                    src={brochasImg}
                    alt=""
                    width={90}
                    height={90}
                    loading="eager"
                    className="w-15 md:w-25 rotate-12 drop-shadow-xl h-auto"
                />
            </motion.div>

        </div>
    )
}
