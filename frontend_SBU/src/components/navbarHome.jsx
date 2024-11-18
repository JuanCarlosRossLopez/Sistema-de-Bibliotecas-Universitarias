


function NavbarHome() {
    return (
        <nav class="bg-transparent py-9 fixed top-0 left-0 w-full">
        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-12">
          <div class="relative flex h-16 items-center justify-stretch">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
               
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className=" flex-col pe-2 md:pe-24 md:ps-10 xl:pe-64">
                <div class="flex shrink-0 items-center">
                <img class=" h-20 w-20" src="/img/logoBlanco 2.svg" alt="Your Company"/>
                <p className="font-serif text-base md:text-lg lg:text-xl xl:text-4xl text-white pl-3">Big Library</p>
              </div>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex py-6">
                    <a href="" class=" px-3 py-2 lg:text-3xl md:text-xl sm:text-lg font-serif text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" aria-current="page">Inicio</a>
                    <div className="h-13 w-0.5 bg-slate-200"></div>
                    <a href="#" class=" px-6 py-2 lg:text-3xl md:text-xl sm:text-lg text-white font-serif transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Catalogo</a>
                    <div className="h-13 w-0.5 bg-slate-200"></div>
                    <a href="/nosotros" class=" px-4 py-2 lg:text-3xl md:text-xl sm:text-lg text-white font-serif transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Acerda de</a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>

              {/* el siguiente div es para el menu de las opciones en el perfil */}
              <div class="relative ml-3">
                <div>
                  <a href={`/Signin`} type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    
                  </a>
                  
                  
                </div>
              </div>


            </div>
          </div>

          
        </div>


        {/* el div de abajo es para cuando esta en movil */}
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Inicio</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Catalogo</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Acerda de</a>
          </div>
        </div>
      </nav>
    );
}

export default NavbarHome;