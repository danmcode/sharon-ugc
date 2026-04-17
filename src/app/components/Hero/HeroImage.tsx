import { motion } from "framer-motion";
import { fadeUp } from "./FadeUp";
import Image from "next/image";

export const HeroImage = () => {
    return (
        <div className="relative w-[320px] md:w-120 aspect-3/4">
            <div className="
                    absolute 
                    bottom-[10%] 
                    left-1/2 
                    -translate-x-1/2 
                    w-62.5 
                    h-62.5 
                    md:w-100 
                    md:h-100
                     bg-pink-400/40 
                     rounded-full 
                     blur-[80px] 
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
                    className="-rotate-12 drop-shadow-xl"
                />
            </motion.div>

            {/* Avene */}
            <motion.div
                {...fadeUp(0.5)}
                className="absolute top-[15%] right-[30%]"
            >
                <Image
                    src="/images/avene.png"
                    alt=""
                    width={45}
                    height={45}
                    className="rotate-12 drop-shadow-xl"
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
                    className="rotate-6 drop-shadow-xl"
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
                    className="rotate-12 drop-shadow-xl"
                />
            </motion.div>

        </div>
    )
}
