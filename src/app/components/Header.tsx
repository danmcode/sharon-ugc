"use client"
export const Header = () => {

    const goTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="fixed top-0 w-full bg-white/70 backdrop-blur z-50">
            <nav className="flex justify-center gap-8 py-4 font-medium">
                <button onClick={() => goTo("hero")}>Inicio</button>
                <button onClick={() => goTo("about")}>Sobre mí</button>
                <button onClick={() => goTo("services")}>Servicios</button>
                <button onClick={() => goTo("contact")}>Contacto</button>
            </nav>
        </header>
    )
}
