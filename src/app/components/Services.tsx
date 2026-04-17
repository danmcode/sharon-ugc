import React from 'react'

export const Services = () => {
    return (
        <div className="bg-pink-300 w-full h-full flex flex-col justify-center px-6">
            <h2 className="text-center text-5xl font-bold text-white mb-10">Servicios</h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {["Básico", "Intermedio", "Premium"].map((plan, i) => (
                    <div key={i} className={`bg-white p-6 rounded-xl shadow ${i === 1 && "scale-105 border-4 border-pink-500"}`}>
                        <h3 className="text-pink-500 font-bold text-xl mb-2">{plan}</h3>
                        <p className="text-2xl font-bold mb-4">Precio</p>
                        <ul className="text-gray-600 space-y-2">
                            <li>Contenido UGC</li>
                            <li>Edición profesional</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
