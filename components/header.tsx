"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";


const NavList: React.FC<{ handleScroll: (id: string) => void }> = ({ handleScroll }) => (
  <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
    <li>
      <Button
        onClick={() => handleScroll("quienes")}
        variant="outlined"
        size="sm"
        className="normal-case text-white border-white rounded-md px-4 py-2 
                  hover:bg-white hover:text-[#113c61]"
      >
        ¿Quiénes somos?
      </Button>
    </li>
    <li>
      <Button
        onClick={() => handleScroll("servicios")}
        variant="outlined"
        size="sm"
        className="normal-case text-white border-white rounded-md px-4 py-2 
                  hover:bg-white hover:text-[#113c61]"
      >
        Servicios
      </Button>
    </li>
    <li>
      <Button
        onClick={() => handleScroll("info")}
        variant="outlined"
        size="sm"
        className="normal-case text-white border-white rounded-md px-4 py-2 
                  hover:bg-white hover:text-[#113c61]"
      >
        Información metrológica
      </Button>
    </li>
    <li>

      <Button
        size="sm"
        className="normal-case bg-white text-[#003366] rounded-md px-4 py-2 
                    hover:bg-[#113c61] hover:text-white hover:border-[#113c61] shadow-md"
      >
        Portal para clientes
      </Button>

    </li>
  </ul>
);

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);


  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const offset = 120;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }


    setOpenNav(false);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-1 z-50">
      <div className="mx-2 lg:mx-2">
        <Navbar
          className="w-full max-w-none rounded-lg py-2 shadow-lg"
          style={{ backgroundColor: "#337599", opacity: 0.95 }}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between text-white px-2 lg:px-4">
            {/* Logo + nombre */}
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/images/logoRCJ.png"
                width={45}
                height={45}
                alt="Logo"
                priority
              />
              <Typography className="font-bold" aria-label="Nombre empresa">
                R.C.J. SERVICES C.A
              </Typography>
            </div>

            {/* Navegación */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <NavList handleScroll={handleScroll} />
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                aria-label={openNav ? "Cerrar menú" : "Abrir menú"}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>

          {/* Menú en mobile */}
          <MobileNav open={openNav}>
            <NavList handleScroll={handleScroll} />
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
}
