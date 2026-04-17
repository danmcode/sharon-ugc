import React from 'react'
import Image from 'next/image'

export const About = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 px-10 bg-[#d9d1c7] w-full h-full items-center">
            <div>
                <h2 className="text-5xl font-bold text-pink-500 mb-6">Sobre mí</h2>
                <p className="mb-4 text-gray-700">Soy contadora de profesión, pero creativa por vocación.</p>
                <div className="space-y-2 text-pink-500">
                    <p>✦ Crear y comunicar</p>
                    <p>✦ Convertir ideas en contenido</p>
                    <p>✦ Aprendizaje constante</p>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="rotate-6 bg-white p-4 shadow-xl">
                    <Image src="/images/about.jpg" alt="Sharon" width={256} height={256} className="w-64" />
                    <p className="text-center text-pink-500 font-bold mt-2">SOBRE MI</p>
                </div>
            </div>
        </div>
    )
}
