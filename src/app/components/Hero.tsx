"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    transition: {
        delay,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
});

export default function HeroUGC() {
    return (
        <section className="relative w-full min-h-screen bg-[#f4ebe1] overflow-hidden flex flex-col md:flex-row">

            {/* LEFT */}
            <div className="relative w-full md:w-1/2 h-[60vh] md:h-screen flex items-end justify-center">

                {/* CANVAS CONTROLADO */}
                <div className="relative w-[320px] md:w-120 aspect-3/4">

                    {/* Glow */}
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

                    {/* Sharon (base SIEMPRE centrada) */}
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
            </div>

            {/* RIGHT */}
            <div className="
            w-full 
            md:w-1/2 
            flex 
            flex-col 
            justify-center 
            px-6 
            md:px-3 
            text-center md:text-left">

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

                {/* Botones */}
                <motion.div
                    {...fadeUp(0.8)}
                    className="
                        flex
                        w-fit 
                        mb-10
                        items-center
                        border
                        rounded-xl
                    "
                >
                    <a className=" px-4 py-2">
                        <Image
                            src="/images/tik-tok.png"
                            alt=""
                            width={40}
                            height={40}
                        />
                    </a>
                    <a className=" px-4 py-2">
                        <Image
                            src="/images/instagram.png"
                            alt=""
                            width={40}
                            height={40}
                        />
                    </a>
                    <a className=" px-4 py-2">
                        <Image
                            src="/images/social.png"
                            alt=""
                            width={40}
                            height={40}
                        />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}