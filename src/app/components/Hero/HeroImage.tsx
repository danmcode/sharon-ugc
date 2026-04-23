import { motion } from "framer-motion";
import { fadeUp } from "./FadeUp";
import Image from "next/image";

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
                    src="/images/sharon.png"
                    alt="Sharon"
                    width={500}
                    height={500}
                    loading="eager"
                    className="w-80 md:w-500 lg:w-500 h-auto"
                />
            </motion.div>

            {/* Atenea */}
            <motion.div
                {...fadeUp(0.3)}
                className="absolute top-[18%] left-[15%]"
            >
                <Image
                    src="/images/atenea.png"
                    alt=""
                    width={80}
                    height={80}
                    loading="eager"
                    className="-rotate-12 drop-shadow-xl w-auto h-auto"
                />
            </motion.div>

            {/* Avene */}
            <motion.div
                {...fadeUp(0.5)}
                className="absolute top-[20%] right-[30%]"
            >
                <Image
                    src="/images/avene.png"
                    alt=""
                    width={45}
                    height={45}
                    loading="eager"
                    className="rotate-12 drop-shadow-xl w-auto h-auto"
                />
            </motion.div>

            {/* Ancestral */}
            <motion.div
                {...fadeUp(0.7)}
                className="absolute top-[36%] right-[2%]"
            >
                <Image
                    src="/images/ancestral.png"
                    alt=""
                    width={70}
                    height={70}
                    loading="eager"
                    className="w-auto h-auto"
                />
            </motion.div>


            {/* Brochas */}
            <motion.div
                {...fadeUp(1.1)}
                className="absolute bottom-[0%] right-[0%]"
            >
                <Image
                    src="/images/brochas.png"
                    alt=""
                    width={90}
                    height={90}
                    loading="eager"
                    className="rotate-12 drop-shadow-xl w-auto h-auto"
                />
            </motion.div>

        </div>
    )
}
