"use client"

import React, { useState, useEffect } from 'react';

const menuItems = [
    { label: 'Inicio', id: 'hero' },
    { label: '¿Por qué UGC?', id: 'why-ugc' },
    { label: 'Videos', id: 'videos' },
    { label: 'Estadísticas', id: 'statistics' },
    { label: 'Sobre mí', id: 'about' },
    { label: 'Servicios', id: 'services' },
    { label: 'Contacto', id: 'contact' },
];

// IDs de todas las secciones para el IntersectionObserver
const allSectionIds = ['hero', 'why-ugc', 'videos', 'statistics', 'about', 'services', 'contact'];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        setIsScrolled(entry.target.id !== 'hero');
                    }
                });
            },
            { threshold: 0.5 }
        );

        allSectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const goTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#F7F2EB]/80 backdrop-blur-md border-b border-[#E8DFD5] py-4 shadow-sm'
                : 'bg-transparent py-6'
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* LOGOTIPO */}
                    <button onClick={() => goTo('hero')} className="group flex flex-col text-left shrink-0">
                        <span className="font-serif font-bold text-lg lg:text-2xl text-[#332A25] tracking-wide transition-colors group-hover:text-[#E05297]">
                            Sharon Paniquita
                        </span>
                        <span className="text-[9px] font-semibold tracking-widest uppercase text-[#E05297] -mt-1">
                            UGC Creator
                        </span>
                    </button>

                    {/* MENÚ DESKTOP */}
                    <div className="hidden md:flex items-center gap-3 lg:gap-6">
                        <ul className="flex items-center gap-1 lg:gap-5 text-xs lg:text-sm font-medium text-[#5C4E46]">
                            {menuItems.map((item, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => goTo(item.id)}
                                        className={`relative py-2 whitespace-nowrap transition-colors group ${activeSection === item.id
                                            ? 'text-[#E05297]'
                                            : 'hover:text-[#E05297]'
                                            }`}
                                    >
                                        {item.label}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-[#E05297] transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`} />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => goTo('contact')}
                            className="shrink-0 bg-[#332A25] hover:bg-[#E05297] text-white font-medium text-xs py-2 px-3 lg:py-2.5 lg:px-5 rounded-full transition-colors duration-300 shadow-sm whitespace-nowrap"
                        >
                            Trabajemos juntos
                        </button>
                    </div>

                    {/* BOTÓN HAMBURGUESA */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-[#332A25] focus:outline-none z-50"
                        aria-label="Abrir menú"
                    >
                        <span className="bg-current h-0.5 w-6 rounded" />
                        <span className="bg-current h-0.5 w-6 rounded my-1" />
                        <span className="bg-current h-0.5 w-6 rounded" />
                    </button>

                </div>

            </nav>

            {/* MENÚ MÓVIL — fuera del nav para evitar el stacking context de z-50 */}
            <div className={`fixed inset-0 bg-[#F7F2EB] z-[200] flex flex-col overflow-y-auto transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                <div className="absolute w-64 h-64 bg-[#F1A7C4]/10 rounded-full blur-3xl -top-10 -right-10 pointer-events-none" />
                <div className="absolute w-72 h-72 bg-[#E05297]/5 rounded-full blur-3xl -bottom-10 -left-10 pointer-events-none" />

                {/* Botón cerrar */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-6 text-[#332A25] hover:text-[#E05297] transition-colors"
                    aria-label="Cerrar menú"
                >
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col justify-center items-center min-h-full py-20 gap-8">
                    <ul className="flex flex-col gap-3 text-center text-lg font-serif font-bold text-[#332A25]">
                        {menuItems.map((item, idx) => (
                            <li
                                key={idx}
                                className={`transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                style={{ transitionDelay: isOpen ? `${idx * 75}ms` : '0ms' }}
                            >
                                <button
                                    onClick={() => goTo(item.id)}
                                    className={`block px-4 py-2 transition-colors ${activeSection === item.id ? 'text-[#E05297]' : 'hover:text-[#E05297]'}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div
                        className={`transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        style={{ transitionDelay: isOpen ? '500ms' : '0ms' }}
                    >
                        <button
                            onClick={() => goTo('contact')}
                            className="bg-[#E05297] text-white font-medium text-sm py-3 px-8 rounded-full shadow-md hover:bg-[#332A25] transition-colors"
                        >
                            Contratar UGC
                        </button>
                    </div>
                </div>
            </div>

            {/* BOTÓN FLOTANTE: VOLVER AL INICIO */}
            <button
                onClick={() => goTo('hero')}
                aria-label="Volver al inicio"
                className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#E05297] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#332A25] hover:scale-110 ${activeSection === 'hero' ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'
                    }`}
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </>
    );
}

