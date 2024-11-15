function Error () {

    return (
        <div className="place-items-center text-center">
            <h1 className="text-black ">Hubo un error</h1>
            <p className="">Puedes regresar a la pestaña anterior con este boton</p>
            <button className="btn btn-primary bg-yellow-900" onClick={() => window.history.back()}>Regresar</button>
        </div>
    );
}

export default Error;