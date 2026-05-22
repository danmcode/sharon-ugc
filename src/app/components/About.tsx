import React from 'react'
import Image from 'next/image'

export const About = () => {


    return (
        <section className="bg-[#F7F2EB] h-full flex items-center py-4 px-6 md:px-12 lg:px-20 text-[#332A25] overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

                {/* COLUMNA IZQUIERDA: TEXTO DEPURADO Y JERARQUIZADO */}
                <div className="lg:col-span-6 space-y-4 md:space-y-6">
                    <div className="space-y-3">
                        <span className="text-sm font-semibold tracking-widest uppercase text-[#E05297]">
                            Detrás de la cámara
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#332A25]">
                            Sobre <span className="text-[#E05297]">Mí</span>
                        </h2>
                    </div>

                    {/* El gran gancho de su perfil */}
                    <p className="text-lg md:text-xl font-serif italic text-[#E05297] leading-relaxed">
                        "Soy contadora de profesión, pero creativa por vocación."
                    </p>

                    <div className="space-y-3 text-sm md:text-base text-[#5C4E46] leading-relaxed">
                        <p>
                            Siempre he sido una persona curiosa que busca formas diferentes de hacer las cosas. Aunque mi formación pertenece al mundo de los números, encontré en la **creación de contenido** el espacio ideal para conectar conmigo: las ideas, los detalles y las historias me mueven.
                        </p>

                        <p>
                            Disfruto desde plasmar un concepto abstracto en un guion hasta verlo hecho realidad en un video dinámico. Para mí, el UGC no es solo grabar un producto; es <strong>construir un puente de confianza real</strong> con quien está al otro lado de la pantalla.
                        </p>

                        <p className="font-medium text-[#332A25] border-l-2 border-[#E05297] pl-4">
                            Creo firmemente en el equilibrio entre lo estructurado y lo creativo. De ahí nace mi propuesta de valor: contenido estético, estratégico y respaldado por métricas reales.
                        </p>
                    </div>
                </div>

                {/* COLUMNA DERECHA: COMPOSICIÓN VISUAL ESTILO COLLAGE LIMPIO */}
                <div className="hidden lg:flex lg:col-span-6 flex-col items-center justify-center relative min-h-[320px] md:min-h-[420px]">

                    {/* Mancha decorativa sutil de fondo para dar profundidad sin ensuciar */}
                    <div className="absolute w-80 h-80 bg-[#F1A7C4]/20 rounded-full blur-3xl top-1/4 left-1/4 -z-10" />

                    {/* FOTO 1: La Polaroid Principal (Sharon con su Diploma) */}
                    <div className="absolute z-30 top-0 right-4 md:right-12 transform rotate-3 bg-white p-3 pb-10 rounded-xl shadow-xl border border-gray-100 max-w-[180px] md:max-w-[220px] hover:rotate-0 hover:scale-105 transition-all duration-300">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
                                alt="Sharon recibiendo diploma"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="absolute bottom-3 left-0 right-0 text-center font-serif font-bold text-xl text-[#E05297] tracking-wider">
                            ¡HOLA! ✨
                        </span>
                    </div>

                    {/* FOTO 2: Recorte o foto casual izquierda (Superpuesta por debajo) */}
                    <div className="absolute z-20 bottom-12 left-4 md:left-12 transform -rotate-6 bg-white p-2 pb-6 rounded-xl shadow-lg border border-gray-100 max-w-[140px] md:max-w-[180px] hover:rotate-0 hover:scale-105 transition-all duration-300">
                        <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                                alt="Sharon retrato casual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* FOTO 3: El diploma de CapCut en formato limpio (Opcional o interactivo) */}
                    <div className="absolute z-10 top-24 left-0 md:left-8 transform -rotate-12 bg-white p-2 rounded-lg shadow-md border border-[#E8DFD5] max-w-[160px] opacity-80 hover:opacity-100 hover:rotate-0 transition-all duration-300">
                        <div className="aspect-[4/3] overflow-hidden rounded bg-gray-50">
                            {/* Aquí pones la foto del diploma recortada sin el fondo de corcho */}
                            <div className="w-full h-full flex items-center justify-center bg-[#332A25] text-white p-2 text-[10px] font-mono text-center">
                                [ Certificación CapCut Intermedio ]
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}