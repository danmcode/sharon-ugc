"use client";

import { HeroDesktopVersion } from "./Hero/HeroDesktopVersion";
import { HeroMobileVersion } from "./Hero/HeroMobileVersion";

export default function HeroUGC() {
    return (
        <section className="
            relative w-full 
            min-h-screen 
            bg-[#f4ebe1] 
            overflow-hidden 
            flex 
            flex-col
        ">
            <div className="relative">
                <div className="block md:hidden">
                    <HeroMobileVersion />
                </div>

                <div className="hidden md:block">
                    <HeroDesktopVersion />
                </div>
            </div>
        </section >
    );
}