import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from "../../assets/images/logorivapark.png";

const NavBar = () => {

    const [open, setOpen] = useState(false)

    console.log(open)


    return (
        <nav className="w-full bg-[#e7e6e6] text-dark shadow-sm px-8 py-3 flex items-center relative">

       {/* Logo */}
            <NavLink to="/" className="flex items-center">
                <img
                    src={logo}
                    alt="Rivapark Logo"
                    className="h-16 w-auto object-contain"
                />
            </NavLink>
     

            {/* Mobile menu button */}

            <button
                className="ml-auto md:hidden text-2x1"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/*Menú desktop*/}

            <div className="hidden md:flex ml-auto gap-6">
                <NavLink className="hover:text-primary transition-colors duration-200 hidden md:flex ml-auto gap-4"
                    to="/"
                >Inicio</NavLink>

                <NavLink className="hover:text-primary transition-colors duration-200 hidden md:flex ml-auto gap-4"
                    to="/clases"
                >Clases</NavLink>

                <NavLink className="hover:text-primary transition-colors duration-200 hidden md:flex ml-auto"
                    to="/nosotros"
                    onClick={(e)=>e.preventDefault()}
                >Nosotros</NavLink>

                <NavLink className="hover:text-primary transition-colors duration-200 hidden md:flex ml-auto"
                    to="/galeria"
                >Galeria</NavLink>

                <NavLink className="bg-primary text-light px-4 rounded-md hover:bg-primaryDark transition-colors duration-200 hidden md:flex ml-auto"
                    to="/inscribirse"
                >Inscribirse</NavLink>

            </div>


            {/* Menú movil despegable */}

            {open && (
                <div className="absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 bg-[#e7e6e6] border-t border-soft md:hidden z-40">
                    <NavLink className="hover:text-primary transition-colors duration-200"
                        to="/"
                        onClick={() => setOpen(false)}
                    >Inicio</NavLink>

                    <NavLink className="hover:text-primary transition-colors duration-200"
                        to="/clases"
                        onClick={() => setOpen(false)}
                    >Clases</NavLink>

                    <NavLink className="hover:text-primary transition-colors duration-200"
                        to="/nosotros"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                        }}
                    >Nosotros</NavLink>

                    <NavLink className="hover:text-primary transition-colors duration-200"
                    to="/galeria"
                    onClick={() => setOpen(false)}
                >Galeria</NavLink>

                    <NavLink className="bg-primary text-light px-4 rounded-md hover:bg-primaryDark transition-colors duration-200"
                        to="/inscribirse"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                        }}
                    >Inscribirse</NavLink>

                </div>
            )}
        </nav>
    )
}

export default NavBar
