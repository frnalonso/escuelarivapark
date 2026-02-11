import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logorivapark.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Rivapark Logo"
                        className="h-20 w-auto object-contain"
                    />
                </Link>


                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-dark font-medium">
                    <Link to="/" className="hover:text-primary transition">
                        Inicio
                    </Link>
                    <Link to="/clases" className="hover:text-primary transition">
                        Clases
                    </Link>
                    <Link to="/nosotros" className="hover:text-primary transition">
                        Nosotros
                    </Link>
                    <Link to="/contacto" className="hover:text-primary transition">
                        Contacto
                    </Link>

                    {/* CTA */}
                    <Link
                        to="/contacto"
                        className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primaryDark transition"
                    >
                        Inscribirse
                    </Link>
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-dark text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4 text-dark font-medium">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        Inicio
                    </Link>
                    <Link to="/clases" onClick={() => setIsOpen(false)}>
                        Clases
                    </Link>
                    <Link to="/nosotros" onClick={() => setIsOpen(false)}>
                        Nosotros
                    </Link>
                    <Link to="/contacto" onClick={() => setIsOpen(false)}>
                        Contacto
                    </Link>
                </div>
            )}
        </header>
    );
}
