import NavbarHome from "../../components/navbarHome";

function Home() {
    return (
        <div className="h-screen w-full">
            <NavbarHome />

            <img 
            src="/img/libros home.jpg" 
            alt="imagen" 
            className="h-full w-full object-cover"
        />
        </div>
        
    );
}

export default Home;