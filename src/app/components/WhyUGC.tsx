import React from 'react'

export const WhyUGC = () => {
    const stats = [
        {
            percentage: "92%",
            text: "de los consumidores confía más en el contenido orgánico de personas reales que en la publicidad tradicional."
        },
        {
            percentage: "79%",
            text: "de las personas afirma que el UGC influye directamente en su decisión de compra final."
        },
        {
            percentage: "28%",
            text: "más de engagement logran las campañas que integran UGC en comparación con los anuncios estándar."
        }
    ];

    return (
        <section className="bg-[#F7F2EB] h-full flex items-center py-4 px-6 md:px-12 lg:px-20 text-[#332A25] overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">

                {/* COLUMNA IZQUIERDA: TEXTO Y CONTENIDO */}
                <div className="lg:col-span-7 space-y-4 md:space-y-6">
                    <div className="space-y-4">
                        <span className="text-sm font-semibold tracking-widest uppercase text-[#E05297]">
                            Estadísticas Clave
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#E05297] leading-tight">
                            ¿Por qué UGC?
                        </h2>
                    </div>

                    <p className="text-base md:text-lg text-[#5C4E46] leading-relaxed max-w-2xl">
                        En un mundo saturado de publicidad tradicional, los consumidores ya no buscan perfección,{" "}
                        <span className="font-semibold text-[#E05297]">buscan conexión</span>. El contenido generado por usuarios (UGC) es el puente de confianza entre tu marca y tu audiencia.
                        <span className="block mt-3 font-medium text-[#332A25]">
                            No se siente como un anuncio, se siente como la recomendación de una amiga o amigo.
                        </span>
                    </p>

                    {/* CONTENEDOR DE ESTADÍSTICAS (BENTO STYLE) */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 pt-3 md:pt-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/60 backdrop-blur-sm p-2 md:p-4 rounded-2xl border border-[#E8DFD5] shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <span className="block text-2xl md:text-4xl font-extrabold text-[#E05297] mb-1 md:mb-2">
                                    {stat.percentage}
                                </span>
                                <p className="text-[11px] md:text-sm text-[#5C4E46] leading-snug">
                                    {stat.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* FUENTES */}
                    <p className="text-xs text-[#8A7A71] italic pt-2">
                        Fuentes: Nielsen Global Report, Stackla Consumer Review & SocialMedia.org
                    </p>
                </div>

                {/* COLUMNA DERECHA: MOCKUP DE VIDEO (EL PRODUCTO) */}
                <div className="hidden lg:flex lg:col-span-5 justify-center relative">
                    {/* Elementos decorativos flotantes de fondo */}
                    <div className="absolute w-72 h-72 bg-[#E05297]/10 rounded-full blur-3xl -top-10 -left-10 z-0 animate-pulse" />
                    <div className="absolute w-60 h-60 bg-[#F1A7C4]/20 rounded-full blur-3xl -bottom-10 -right-10 z-0" />

                    {/* Contenedor del Teléfono / Video */}
                    <div className="relative z-10 w-full max-w-[220px] md:max-w-[260px] aspect-[9/16] bg-[#1A1A1A] rounded-[40px] shadow-2xl border-[10px] border-[#332A25] overflow-hidden group">
                        {/* Cámara/Notch simulado */}
                        <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-center z-30">
                            <div className="w-24 h-4 bg-[#332A25] rounded-b-xl" />
                        </div>

                        {/* Aquí iría el componente de Video real o un placeholder interactivo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none" />

                        {/* Imagen/Video de la creadora (Reemplazar src por video real) */}
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                            alt="Creadora de contenido UGC en acción"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Interfaz Simulada de Red Social */}
                        <div className="absolute bottom-6 left-4 right-4 z-20 text-white space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm border border-white" />
                                <span className="text-xs font-semibold">@creadora_ugc</span>
                            </div>
                            <p className="text-[11px] text-gray-200 line-clamp-2">
                                Creando conexiones reales que convierten más que cualquier anuncio tradicional. ✨ #ugccreator #marketing
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
