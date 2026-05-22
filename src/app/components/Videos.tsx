"use client";
import Image from 'next/image';
import { useState } from 'react';
import profilePic from "../../../public/images/profile_photo.jpeg";

interface VideoProject {
    title: string;
    videoUrl: string;
    thumbnail: string;
}

interface NicheData {
    id: string;
    title: string;
    tagline: string;
    bgImage: string; // Una foto estética de fondo para el botón/tarjeta
    metrics: {
        views: string;
        likes: string;
        interactions: string;
    };
    videos: VideoProject[];
}

export const Videos = () => {
    const [activeNiche, setActiveNiche] = useState<NicheData | null>(null);

    const niches: NicheData[] = [
        {
            id: 'beauty',
            title: 'Beauty, Unboxing & Skincare',
            tagline: 'Rutinas, reseñas de productos y estética limpia.',
            bgImage: '/images/sharon_ugc_beauty.png',
            metrics: { views: '25.4K', likes: '1.2K', interactions: '+45%' },
            videos: [
                { title: 'Unboxing', videoUrl: 'https://sharonpaniquitacreadorac.my.canva.site/_assets/video/5437a07e99021597e4624219b6fee794.mp4', thumbnail: '/images/sharon_ugc_unboxing.jpg' },
                { title: 'Make UP', videoUrl: '#', thumbnail: '/images/makeup_valentines_day_image.jpg' },
                { title: 'Skin Care', videoUrl: '#', thumbnail: '/images/sharon_ugc_skincare.jpg' },
            ]
        },
        {
            id: 'lifestyle',
            title: 'Lifestyle & Storytelling',
            tagline: 'Vlogs dinámicos y conexiones cotidianas reales.',
            bgImage: '/images/sharon_ugc_mini_vlog.jpg',
            metrics: { views: '17.8K', likes: '847', interactions: '+32%' },
            videos: [
                { title: 'Mini Vlog', videoUrl: '#', thumbnail: '/images/sharon_ugc_mini_vlog.jpg' }
            ]
        },
        {
            id: 'travel',
            title: 'Viajes & Reseñas de Comida',
            tagline: 'Experiencias visuales, spots gastronómicos y aventura.',
            bgImage: '/images/sharon_ugc_viajes.jpg',
            metrics: { views: '42.1K', likes: '3.1K', interactions: '+58%' },
            videos: [
                { title: 'Food Review', videoUrl: '#', thumbnail: '/images/sharon_ugc_resenas.jpg' }
            ]
        }
    ];

    return (
        <section className="bg-[#F7F2EB] h-full flex flex-col justify-center py-4 px-6 md:px-12 text-[#332A25] overflow-hidden">
            <div className="max-w-6xl mx-auto w-full space-y-6 md:space-y-8">

                {/* ENCABEZADO */}
                <div className="text-center space-y-3">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-[#E05297]">
                        Categorías de Contenido
                    </h2>
                    <p className="text-[#5C4E46] max-w-xl mx-auto text-sm md:text-base">
                        Explora muestras de mi trabajo y sus métricas de impacto seleccionando cualquiera de mis nichos principales.
                    </p>
                </div>

                {/* BOTONES / TARJETAS DE SELECCIÓN */}
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {niches.map((niche) => (
                        <button
                            key={niche.id}
                            onClick={() => setActiveNiche(niche)}
                            className="group relative h-28 md:h-56 lg:h-64 w-full rounded-3xl overflow-hidden text-left bg-[#332A25] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Imagen de Fondo con Overlay */}
                            <img
                                src={niche.bgImage}
                                alt={niche.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#332A25] via-[#332A25]/40 to-transparent" />

                            {/* Contenido de la Tarjeta */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end space-y-2 z-10">
                                <h3 className="text-xs md:text-xl font-bold text-white group-hover:text-[#F1A7C4] transition-colors">
                                    {niche.title}
                                </h3>
                                <p className="hidden md:block text-xs text-gray-200 line-clamp-2">
                                    {niche.tagline}
                                </p>
                                <span className="hidden md:inline-flex items-center text-xs font-semibold text-[#F1A7C4] pt-2">
                                    Ver ejemplos
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* MODAL INTERACTIVO */}
            {activeNiche && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300">

                    {/* Contenedor del Modal */}
                    <div className="bg-[#F7F2EB] w-full max-w-5xl rounded-[32px] overflow-hidden max-h-[90vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">

                        {/* Botón Cerrar */}
                        <button
                            onClick={() => setActiveNiche(null)}
                            className="absolute top-4 right-4 bg-[#332A25] text-white p-2 rounded-full hover:bg-[#E05297] transition-colors z-50"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Header del Modal */}
                        <div className="p-6 md:p-8 bg-white border-b border-[#E8DFD5]">
                            <h3 className="text-2xl font-serif font-bold text-[#E05297]">
                                {activeNiche.title}
                            </h3>
                            <p className="text-sm text-[#5C4E46] mt-1">{activeNiche.tagline}</p>
                        </div>

                        {/* Cuerpo del Modal (Scrollable si es necesario) */}
                        <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                            {/* Bloque Izquierdo: Galería de Videos en formato Teléfono */}
                            <div className="lg:col-span-8 space-y-4">
                                <h4 className="text-sm font-bold tracking-wider uppercase text-[#5C4E46]">
                                    Videos Demostrativos
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {activeNiche.videos.map((video, idx) => (
                                        <div key={idx} className="space-y-2 text-center">
                                            <span className="text-xs font-medium text-[#332A25]">{video.title}</span>
                                            {/* Marco de Teléfono */}
                                            <div className="relative aspect-[9/16] bg-[#1A1A1A] rounded-[40px] border-[10px] border-[#332A25] overflow-hidden shadow-2xl group">
                                                {/* Notch / cámara */}
                                                <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-center z-30 pointer-events-none">
                                                    <div className="w-20 h-4 bg-[#332A25] rounded-b-xl" />
                                                </div>

                                                {video.videoUrl !== '#' ? (
                                                    <>
                                                        <video
                                                            src={video.videoUrl}
                                                            poster={video.thumbnail}
                                                            controls
                                                            playsInline
                                                            preload="metadata"
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <img
                                                            src={video.thumbnail}
                                                            alt={video.title}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 pointer-events-none" />
                                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                                            <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#E05297] group-hover:scale-110 transition-transform">
                                                                <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                                                                    <path d="M8 5v14l11-7z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-4 left-3 right-3 z-20 text-white space-y-1">
                                                            <div className="flex items-center gap-1.5">
                                                                <Image
                                                                    src={profilePic}
                                                                    alt="Sharon Paniquita"
                                                                    width={32}
                                                                    height={32}
                                                                    className="w-8 h-8 rounded-full object-cover border border-white shrink-0"
                                                                />
                                                                <span className="text-[11px] font-semibold">@ssharon.paniquita</span>
                                                            </div>
                                                            <p className="text-[10px] text-gray-200 line-clamp-2">{video.title} ✨ #ugccreator</p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bloque Derecho: Métricas de Impacto */}
                            <div className="lg:col-span-4 space-y-6 bg-white p-6 rounded-2xl border border-[#E8DFD5] h-fit">
                                <h4 className="text-sm font-bold tracking-wider uppercase text-[#5C4E46]">
                                    Métricas de este Nicho
                                </h4>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                        <span className="text-sm text-[#5C4E46]">Visualizaciones:</span>
                                        <span className="text-lg font-bold text-[#332A25]">{activeNiche.metrics.views}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                                        <span className="text-sm text-[#5C4E46]">Likes totales:</span>
                                        <span className="text-lg font-bold text-[#332A25]">{activeNiche.metrics.likes}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-[#5C4E46]">Engagement Promedio:</span>
                                        <span className="text-lg font-bold text-[#E05297]">{activeNiche.metrics.interactions}</span>
                                    </div>
                                </div>

                                {/* Nota de valor */}
                                <div className="bg-[#F7F2EB] p-4 rounded-xl text-xs text-[#5C4E46] leading-relaxed">
                                    <strong>Análisis de Conversión:</strong> Este contenido orgánico prioriza la retención en los primeros 3 segundos, ideal para campañas de pauta o posicionamiento de marca.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}