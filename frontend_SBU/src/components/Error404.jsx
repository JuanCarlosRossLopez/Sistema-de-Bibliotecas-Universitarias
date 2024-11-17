function Error() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen"
            style={{ backgroundColor: '#FFEFE5' }}
        >
            <iframe
                src="https://lottie.host/embed/2f919884-0396-4bc1-bce5-45918d23a4a7/lkDKdr8rcd.json"
                style={{
                    width: '300px',
                    height: '300px',
                    border: 'none',
                    marginBottom: '20px',
                }}
                title="Error Animation"
            ></iframe>
            <h1 className="text-black text-2xl font-bold mb-4">Hubo un error</h1>
            <p className="text-black text-lg mb-6">
                Puedes regresar a la pestaña anterior con este botón:
            </p>
            <button
                className="px-6 py-2 text-white bg-yellow-900 rounded-md hover:bg-yellow-800"
                onClick={() => window.history.back()}
            >
                Regresar
            </button>
        </div>
    );
}

export default Error;
