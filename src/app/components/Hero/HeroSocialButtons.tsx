"use client"

import { motion } from "framer-motion";
import { fadeUp } from "./FadeUp";
import Image from "next/image";
import tikTokImg from "../../../../public/images/tik-tok.png";
import instagramImg from "../../../../public/images/instagram.png";
import socialImg from "../../../../public/images/social.png";

export const HeroSocialButtons = () => {
    return (
        <motion.div {...fadeUp(0.8)}>
            <div className="text-center font-bold text-[#f45999] text-lg">
                <span> Mis Redes Sociales </span>
            </div>
            <div className="
                        flex
                        w-fit 
                        mb-10
                        items-center
                        border-2
                        border-pink-500
                        rounded-xl
                    "
            >
                <a
                    href="https://www.tiktok.com/@ssharon.paniquita?_r=1&_t=ZS-94we6CCaRrp"
                    className="px-4 py-2 hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={tikTokImg}
                        alt=""
                        width={40}
                        height={40}
                    />
                </a>
                <a
                    href="https://www.instagram.com/sharon_paniquita"
                    className="px-4 py-2 hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={instagramImg}
                        alt=""
                        width={40}
                        height={40}
                    />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=573148909291&text=Hola%20Sharon%20Vengo%20de%20tu%20portafolio"
                    className="px-4 py-2 hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={socialImg}
                        alt=""
                        width={40}
                        height={40}
                    />
                </a>
            </div>
        </motion.div>
    )
}
