import Image from 'next/image'
import { MenuItems } from './MenuItems'
// Importa MenuItems si es necesario

export const DesktopMenu = () => {
    return (
        <div className='w-full max-w-6xl mx-auto px-10'>
            <div className='grid grid-cols-12 gap-8 items-center'>

                {/* Columna de la Imagen: Ocupa 5 de 12 espacios */}
                <div className='col-span-5 flex justify-end'>
                    <div className="relative">
                        <Image
                            src="/images/sharon-white.png"
                            alt="sharon"
                            width={500}
                            height={700}
                            className='relative z-10 w-300 h-auto drop-shadow-2xl'
                            priority
                        />
                    </div>
                </div>

                {/* Columna del Contenido: Ocupa 7 de 12 espacios */}
                <div className='col-span-7 flex flex-col text-center'>
                    <h1 className='
                        text-[#634444]
                        text-5xl 
                        text-center
                        font-serif
                        mb-10
                        tracking-tight
                    '>
                        ¿Qué quieres ver?
                    </h1>

                    <div className="w-full max-w-md">
                        <MenuItems />
                    </div>
                </div>

            </div>
        </div>
    )
}