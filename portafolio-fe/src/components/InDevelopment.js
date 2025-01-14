import React from 'react';
import {Spinner} from "react-bootstrap";

const InDevelopment = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-semibold text-gray-800">Page under construction!</h1>
                {/* Spinner's container */}
                <div className="flex justify-center">
                    <Spinner animation="border" role="status" className="text-blue-500"/>
                </div>

                <p className="text-lg text-gray-600">We are working for you, come back soon.</p>
            </div>
        </div>
    );
};

export default InDevelopment;
