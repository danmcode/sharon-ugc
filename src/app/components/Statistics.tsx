import React from 'react'

export const Statistics = () => {

    const mainMetrics = [
        { label: "Visualizaciones de publicaciones", value: "108K", color: "text-[#E05297]" },
        { label: "Me gusta recibidos", value: "11K", color: "text-[#332A25]" },
        { label: "Veces compartido", value: "279", color: "text-[#332A25]" },
        { label: "Visualizaciones de perfil", value: "757", color: "text-[#332A25]" },
    ];

    return (
        <section className="bg-[#F7F2EB] h-full flex items-center py-4 px-6 md:px-12 lg:px-20 text-[#332A25] overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">

                {/* COLUMNA IZQUIERDA: TEXTO Y MEDIOS */}
                <div className="lg:col-span-5 space-y-6">
                    <span className="text-sm font-semibold tracking-widest uppercase text-[#E05297]">
                        Rendimiento Comprobado
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#E05297] leading-none">
                        Alcance y <br />
                        <span className="text-[#332A25]">Estadísticas</span>
                    </h2>

                    <p className="text-base md:text-lg text-[#5C4E46] leading-relaxed">
                        Mis videos han alcanzado <span className="font-semibold text-[#E05297]">más de 108.000 visualizaciones totales</span>,
                        logrando captar la atención de potenciales clientes de forma 100% orgánica.
                    </p>

                    <p className="text-sm md:text-base text-[#5C4E46] border-l-2 border-[#E05297] pl-4 italic">
                        Me especializo en crear contenido que no solo entretiene de forma auténtica, sino que también
                        <span className="font-semibold text-[#332A25]"> impulsa la intención de compra</span> y fortalece la
                        <span className="font-semibold text-[#332A25]"> presencia digital</span> de las marcas.
                    </p>
                </div>

                {/* COLUMNA DERECHA: DASHBOARD DE MÉTRICAS (BENTO GRID) */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">

                    {/* TARJETA PRINCIPAL: HISTORAL ACUMULADO */}
                    <div className="md:col-span-4 bg-white p-6 rounded-[28px] border border-[#E8DFD5] shadow-sm flex flex-col justify-between space-y-6">
                        <div>
                            <span className="text-xs font-bold text-[#8A7A71] uppercase tracking-wider">Métricas Clave Anuales</span>
                            <h4 className="text-xs text-gray-400 mt-0.5">Datos verificados de creador</h4>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {mainMetrics.map((metric, idx) => (
                                <div key={idx} className="space-y-1">
                                    <span className={`block text-3xl md:text-4xl font-extrabold ${metric.color}`}>
                                        {metric.value}
                                    </span>
                                    <p className="text-xs font-medium text-[#5C4E46] leading-tight">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TARJETA SECUNDARIA: EL GRÁFICO DE VIRALIDAD */}
                    <div className="hidden md:col-span-2 md:flex flex-col justify-between items-center text-center bg-gradient-to-br from-[#E05297] to-[#F1A7C4] p-6 rounded-[28px] text-white shadow-md min-h-[240px]">
                        <span className="text-xs font-semibold uppercase tracking-wider opacity-90">
                            Poder Viral
                        </span>

                        {/* Gráfico de Anillo Simulado en CSS Puro */}
                        <div className="relative w-28 h-28 flex items-center justify-center my-2">
                            <div className="absolute inset-0 rounded-full border-[10px] border-white/20" />
                            <div className="absolute inset-0 rounded-full border-[10px] border-white border-t-transparent border-l-transparent transform rotate-45" />
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-2xl font-black leading-none">94%</span>
                                <span className="text-[9px] uppercase tracking-tighter opacity-80">No Seguidores</span>
                            </div>
                        </div>

                        <p className="text-xs leading-snug font-medium opacity-95">
                            Capacidad crítica para descubrir nuevas audiencias orgánicamente.
                        </p>
                    </div>

                    {/* TARJETA INFERIOR: MUESTRA DE REEL INDIVIDUAL */}
                    <div className="hidden md:col-span-6 md:flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-[#E8DFD5] gap-4 text-xs">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                            <p className="text-[#5C4E46]">
                                <strong className="text-[#332A25]">Rendimiento destacado por video:</strong> Promedio de 17.8K reproducciones en formatos de Skincare y Unboxing.
                            </p>
                        </div>
                        {/* Botón sutil por si el cliente quiere ver las capturas originales como prueba real */}
                        <button className="text-[#E05297] font-semibold hover:underline shrink-0 whitespace-nowrap">
                            Ver capturas de respaldo →
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}