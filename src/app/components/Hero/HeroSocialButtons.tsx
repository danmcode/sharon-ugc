import { motion } from "framer-motion";
import { fadeUp } from "./FadeUp";
import Image from "next/image";

export const HeroSocialButtons = () => {
    return (
        <motion.div
            {...fadeUp(0.8)}
            className="
                        flex
                        w-fit 
                        mb-10
                        items-center
                        border-2
                        border-pink-500
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
    )
}
