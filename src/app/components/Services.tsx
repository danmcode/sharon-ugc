import React from 'react'

export const Services = () => {
    const pricingPlans = [
        {
            name: "Paquete Básico",
            price: "$60.000 - $80.000",
            currency: "COP",
            features: [
                "1 Video UGC personalizado",
                "Grabación en alta definición",
                "Edición orgánica y dinámica",
                "2 horas de grabación estimadas",
                "2 horas de edición profesional",
            ],
            highlight: false,
            note: "Desplazamiento se cotiza por separado."
        },
        {
            name: "Paquete Intermedio",
            price: "$100.000 - $130.000",
            currency: "COP",
            features: [
                "2 Videos UGC de alto impacto",
                "Estrategia de ganchos (Hooks)",
                "Edición dinámica optimizada",
                "3 horas de grabación estimadas",
                "3-4 horas de edición en CapCut Pro",
            ],
            highlight: true,
            tag: "Más Popular",
            note: "Desplazamiento se cotiza por separado."
        },
        {
            name: "Paquete Premium",
            price: "$150.000 - $200.000",
            currency: "COP",
            features: [
                "3 Videos UGC listos para publicar",
                "Idea creativa y conceptualización",
                "Guiones estructurados incluidos",
                "4 horas de grabación estimadas",
                "4-5 horas de edición profesional",
            ],
            highlight: false,
            note: "Desplazamiento se cotiza por separado."
        }
    ];

    return (
        <section className="bg-[#F7F2EB] h-full flex flex-col justify-center py-4 px-6 md:px-12 lg:px-20 text-[#332A25] overflow-hidden">
            <div className="max-w-6xl mx-auto w-full space-y-4 md:space-y-6">

                {/* ENCABEZADO */}
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest uppercase text-[#E05297]">
                        Tarifas y Colaboraciones
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#332A25]">
                        Mis <span className="text-[#E05297]">Servicios</span>
                    </h2>
                    <p className="text-sm md:text-base text-[#5C4E46] leading-relaxed">
                        Ofrezco creación de contenido visual con un enfoque creativo y estratégico utilizando <span className="font-semibold text-[#332A25]">CapCut Pro</span>. Especializada en videos cortos que retienen la atención desde el primer segundo.
                    </p>
                </div>

                {/* CONTENEDOR DE TARJETAS DE PRECIOS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-[24px] p-4 md:p-6 flex flex-col justify-between border transition-all duration-300 ${plan.highlight
                                ? 'border-[#E05297] shadow-xl md:-translate-y-2'
                                : 'border-[#E8DFD5] shadow-sm hover:shadow-md'
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#E05297] text-white text-[11px] uppercase tracking-wider font-bold py-1 px-4 rounded-full shadow-sm">
                                    {plan.tag}
                                </span>
                            )}

                            <div className="space-y-6">
                                {/* Nombre y Precio */}
                                <div className="space-y-2 border-b border-gray-100 pb-4">
                                    <h3 className="text-lg font-bold text-[#332A25]">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl md:text-2xl font-extrabold text-[#E05297]">{plan.price}</span>
                                        <span className="text-xs font-semibold text-[#8A7A71]">{plan.currency}</span>
                                    </div>
                                </div>

                                {/* Lista de Features */}
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-[#5C4E46]">
                                            <svg className="w-4 h-4 text-[#E05297] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Nota inferior del Plan */}
                            <div className="pt-6 mt-6 border-t border-gray-50 text-[11px] text-[#8A7A71] italic">
                                {plan.note}
                            </div>
                        </div>
                    ))}
                </div>

                {/* SECCIÓN INFERIOR: EXTRAS Y ENVIAR PRODUCTO */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#E8DFD5] flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-sm text-[#332A25]">Hora de Grabación Adicional</h4>
                            <p className="text-xs text-[#5C4E46] mt-0.5">¿Necesitas tomas extras para tu equipo de edición?</p>
                        </div>
                        <span className="text-lg font-extrabold text-[#332A25] shrink-0 ml-4">$35.000 COP <span className="text-xs font-normal text-[#8A7A71]">/ hr</span></span>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#E8DFD5] space-y-2">
                        <h4 className="font-bold text-sm text-[#332A25]">Colaboración con Marcas (Envíos)</h4>
                        <p className="text-xs text-[#5C4E46] leading-relaxed">
                            Recibo productos directamente en casa para crear reseñas, demostraciones y unboxings con un enfoque nativo que se adapta 100% a la identidad de tu marca.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
}