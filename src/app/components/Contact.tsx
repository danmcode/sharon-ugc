import React from 'react'

export const Contact = () => {
    return (
        <div className="bg-[#d9d1c7] w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold text-pink-500 mb-6">Contacto</h2>

            <p className="mb-4">¿Listo para trabajar juntos?</p>

            <div className="flex gap-4">
                <a href="https://wa.me/573148909291" className="bg-pink-500 text-white px-6 py-3 rounded-full">
                    WhatsApp
                </a>
                <a href="mailto:sharonpaniquitarueda@gmail.com" className="border border-pink-500 px-6 py-3 rounded-full">
                    Email
                </a>
            </div>
        </div>
    )
}
