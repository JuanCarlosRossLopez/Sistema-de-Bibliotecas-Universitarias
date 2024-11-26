import { Link } from "react-router-dom";



function NavbarHome() {
    return (
        <nav className="bg-transparent py-9 fixed top-0 left-0 w-full">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-12">
          <div className="relative flex h-16 items-center justify-stretch">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
               
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className=" flex-col pe-2 md:pe-24 md:ps-10 xl:pe-64">
                <div className="flex shrink-0 items-center">
                <img className=" h-20 w-20" src="/img/logoBlanco 2.svg" alt="Your Company"/>
                <p className="font-serif text-base md:text-lg lg:text-xl xl:text-4xl text-white pl-3">Big Library</p>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex py-6 items-end">
                    <a href="/nosotros" class=" px-4 py-2 lg:text-3xl md:text-xl sm:text-lg text-white font-serif transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Acerda de nosotros</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


              {/* el siguiente div es para el menu de las opciones en el perfil */}



            </div>
          </div>

          
        </div>


        {/* el div de abajo es para cuando esta en movil */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Inicio</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Catalogo</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Acerda de</a>
          </div>
        </div>
      </nav>
    );
}

export default NavbarHome;