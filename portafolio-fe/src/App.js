import './App.css';
import React from "react";
import { Spinner } from "react-bootstrap"; // Si quieres usar Bootstrap

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-semibold text-gray-800">¡Sitio en construcción!</h1>

                {/* Contenedor para el spinner */}
                <div className="flex justify-center">
                    <Spinner animation="border" role="status" className="text-blue-500" />
                </div>

                <p className="text-lg text-gray-600">Estamos trabajando para ti, vuelve pronto</p>
            </div>
        </div>
    );
}

export default App;
