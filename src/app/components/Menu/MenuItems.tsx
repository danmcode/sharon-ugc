interface MenuItem {
    label: string,
    link: string
}

const menuItems: MenuItem[] = [
    {
        label: '¿Por qué UGC?',
        link: '/ugc'
    },
    {
        label: 'Videos UGC',
        link: '/videos-ugc'
    },
    {
        label: 'Alcance y estadísticas',
        link: '/alcance-estadisticas'
    },
    {
        label: 'Sobre Mi',
        link: '/sobre-mi'
    },
    {
        label: 'Servicios y contacto',
        link: '/servicios-contacto'
    },
]

export const MenuItems = () => {
    return (
        <div className='flex flex-col gap-2'>
            {
                menuItems.map((item, index) => (
                    <a
                        className='
                                hover:cursor-pointer
                                bg-[#634444]
                                border-[#634444]/20
                                font-bold
                                text-lg
                                text-white
                                text-center
                                p-3
                                px-6
                                rounded-full
                                '
                        key={index}
                        href={item.link}
                    >
                        {item.label}
                    </a>
                ))
            }
        </div>
    )
}
