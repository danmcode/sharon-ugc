import React from 'react'

export const Contact = () => {
    return (
        <section className="bg-[#F7F2EB] h-full flex items-center justify-center py-4 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* COLUMNA IZQUIERDA: TEXTO */}
                <div className="space-y-6 text-[#332A25]">
                    <div className="space-y-3">
                        <span className="text-sm font-semibold tracking-widest uppercase text-[#E05297]">
                            Hablemos
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                            ¿Lista para <span className="text-[#E05297]">trabajar</span> juntos?
                        </h2>
                    </div>

                    <p className="text-base md:text-lg text-[#5C4E46] leading-relaxed">
                        Escríbeme para agendar tu proyecto o solicitar una cotización a medida.
                        Creo contenido que <span className="font-semibold text-[#332A25]">conecta, convierte y fideliza</span>.
                    </p>

                    {/* Extras de servicios */}
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-3 bg-white/70 border border-[#E8DFD5] rounded-2xl px-5 py-3">
                            <span className="text-[#E05297] text-lg">📦</span>
                            <div>
                                <p className="text-sm font-semibold text-[#332A25]">Colaboración con Marcas (Envíos)</p>
                                <p className="text-xs text-[#5C4E46]">Recibo productos en casa para unboxings y reseñas nativas.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/70 border border-[#E8DFD5] rounded-2xl px-5 py-3">
                            <span className="text-[#E05297] text-lg">🎬</span>
                            <div>
                                <p className="text-sm font-semibold text-[#332A25]">Hora de Grabación Adicional</p>
                                <p className="text-xs text-[#5C4E46]">Tomas extras para tu equipo de edición — <strong>$35.000 COP / hr</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: CTA */}
                <div className="bg-gradient-to-br from-[#E05297] to-[#F1A7C4] rounded-[32px] p-8 md:p-10 text-white space-y-8 shadow-xl">
                    <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold">
                            ¡Vamos a crear algo increíble!
                        </h3>
                        <p className="text-sm opacity-90 leading-relaxed">
                            Cuéntame sobre tu marca y te respondo lo antes posible con una propuesta personalizada.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a
                            href="https://wa.me/573148909291"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-white text-[#E05297] font-bold text-sm py-4 px-6 rounded-full transition-all hover:bg-gray-50 hover:scale-[1.02] shadow-md"
                        >
                            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.174.001 6.161 1.24 8.402 3.485 2.242 2.246 3.476 5.237 3.475 8.411-.004 6.595-5.34 11.944-11.892 11.944-2.008-.001-3.983-.515-5.733-1.493L0 24zm6.59-4.846c1.666.988 3.311 1.542 5.29 1.543 5.432 0 9.853-4.41 9.856-9.836.002-2.628-1.02-5.1-2.873-6.958C16.993 2.046 14.52 1.02 11.942 1.02c-5.436 0-9.859 4.412-9.863 9.839-.001 1.93.504 3.535 1.464 5.105l-.973 3.548 3.638-.954z" />
                            </svg>
                            WhatsApp: 314 890 9291
                        </a>
                        <a
                            href="mailto:sharonpaniquitarueda@gmail.com"
                            className="flex items-center justify-center gap-3 w-full bg-[#332A25] hover:bg-[#241D1A] text-white font-medium text-sm py-4 px-6 rounded-full transition-all hover:scale-[1.02] shadow-md"
                        >
                            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            sharonpaniquitarueda@gmail.com
                        </a>
                    </div>

                    <p className="text-xs opacity-75 text-center">
                        Tiempo de respuesta habitual: menos de 24 horas ✨
                    </p>
                </div>

            </div>
        </section>
    )
}
