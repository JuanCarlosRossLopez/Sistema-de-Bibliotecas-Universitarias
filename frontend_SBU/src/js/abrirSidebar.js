export default function abrirSidebar() {
    console.log("Inicializando abrirSidebar...");
    
    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar");
    const btnSidebarToggler = document.getElementById("btnSidebarToggler");
    const navClosed = document.getElementById("navClosed");
    const navOpen = document.getElementById("navOpen");

    if (btnSidebarToggler) {
        console.log("Botón encontrado:", btnSidebarToggler);
        
        btnSidebarToggler.addEventListener("click", (e) => {
            e.preventDefault();

            if (sidebar) {
                console.log("Sidebar toggled. Antes:", sidebar.classList.value);

                // Lógica para abrir/cerrar el sidebar
                sidebar.classList.toggle("show");
                console.log("Sidebar toggled. Después:", sidebar.classList.value);

                if (navClosed && navOpen) {
                    navClosed.classList.toggle("hidden");
                    navOpen.classList.toggle("hidden");
                    console.log("Íconos actualizados: ", {
                        navClosedHidden: navClosed.classList.contains("hidden"),
                        navOpenHidden: navOpen.classList.contains("hidden"),
                    });
                } else {
                    console.error("Íconos no encontrados (navClosed o navOpen)");
                }
            } else {
                console.error("Sidebar no encontrado");
            }
        });
    } else {
        console.error("Botón no encontrado");
    }

    if (navbar && sidebar) {
        sidebar.style.top = `${navbar.clientHeight - 1}px`;
        console.log("Posición del sidebar ajustada:", sidebar.style.top);
    } else {
        console.error("Navbar o Sidebar no encontrados para ajustar la posición");
    }
}
