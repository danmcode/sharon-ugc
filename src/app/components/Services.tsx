"use client"
import React, { useState } from 'react'

export const Services = () => {
    const [slide, setSlide] = useState(0);

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
            tag: "",
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
            tag: "",
            note: "Desplazamiento se cotiza por separado."
        }
    ];

    const card = (plan: typeof pricingPlans[0]) => (
        <div className={`relative bg-white rounded-[24px] p-4 md:p-6 flex flex-col justify-between border h-full transition-all duration-300 ${plan.highlight ? 'border-[#E05297] shadow-xl' : 'border-[#E8DFD5] shadow-sm hover:shadow-md'
            }`}>
            {plan.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E05297] text-white text-[11px] uppercase tracking-wider font-bold py-1 px-4 rounded-full shadow-sm">
                    {plan.tag}
                </span>
            )}
            <div className="space-y-4 md:space-y-6">
                <div className="space-y-2 border-b border-gray-100 pb-4">
                    <h3 className="text-base md:text-lg font-bold text-[#332A25]">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg md:text-2xl font-extrabold text-[#E05297]">{plan.price}</span>
                        <span className="text-xs font-semibold text-[#8A7A71]">{plan.currency}</span>
                    </div>
                </div>
                <ul className="space-y-2 md:space-y-3">
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
            <div className="pt-4 mt-4 border-t border-gray-50 text-[11px] text-[#8A7A71] italic">
                {plan.note}
            </div>
        </div>
    );

    return (
        <section className="bg-[#F7F2EB] h-full flex flex-col justify-center py-4 px-6 md:px-12 lg:px-20 text-[#332A25] overflow-hidden">
            <div className="max-w-6xl mx-auto w-full space-y-4 md:space-y-6">

                {/* ENCABEZADO */}
                <div className="text-center space-y-2 md:space-y-4 max-w-2xl mx-auto">
                    <span className="text-sm font-semibold tracking-widest uppercase text-[#E05297]">
                        Tarifas y Colaboraciones
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#332A25]">
                        Mis <span className="text-[#E05297]">Servicios</span>
                    </h2>
                    <p className="hidden md:block text-sm md:text-base text-[#5C4E46] leading-relaxed">
                        Ofrezco creación de contenido visual con un enfoque creativo y estratégico utilizando <span className="font-semibold text-[#332A25]">CapCut Pro</span>. Especializada en videos cortos que retienen la atención desde el primer segundo.
                    </p>
                </div>

                {/* MOBILE: CARRUSEL */}
                <div className="md:hidden">
                    <div className="overflow-x-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${slide * 100}%)` }}
                        >
                            {pricingPlans.map((plan, index) => (
                                <div key={index} className="min-w-full pt-4">
                                    {card(plan)}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Controles */}
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <button
                            onClick={() => setSlide(s => Math.max(0, s - 1))}
                            disabled={slide === 0}
                            className={`w-8 h-8 rounded-full border border-[#E8DFD5] bg-white flex items-center justify-center shadow-sm transition-opacity ${slide === 0 ? 'opacity-30' : 'opacity-100'}`}
                        >
                            <svg className="w-4 h-4 text-[#332A25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        {pricingPlans.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setSlide(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === slide ? 'w-6 bg-[#E05297]' : 'w-2 bg-[#E8DFD5]'}`}
                            />
                        ))}
                        <button
                            onClick={() => setSlide(s => Math.min(pricingPlans.length - 1, s + 1))}
                            disabled={slide === pricingPlans.length - 1}
                            className={`w-8 h-8 rounded-full border border-[#E8DFD5] bg-white flex items-center justify-center shadow-sm transition-opacity ${slide === pricingPlans.length - 1 ? 'opacity-30' : 'opacity-100'}`}
                        >
                            <svg className="w-4 h-4 text-[#332A25]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* DESKTOP: GRID */}
                <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={plan.highlight ? 'md:-translate-y-2' : ''}>
                            {card(plan)}
                        </div>
                    ))}
                </div>

                {/* EXTRAS (solo desktop) */}
                <div className="hidden md:grid grid-cols-2 gap-4 pt-2">
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