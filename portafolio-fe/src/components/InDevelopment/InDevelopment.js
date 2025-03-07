import React from 'react';
import { Spinner } from "react-bootstrap";
import styles from "./InDevelopment.module.css";

const InDevelopment = () => {
    return (
        <div className={`${styles.divContainer} min-h-screen`}>
            <div className="text-center">
                <h1>Page under construction!</h1>
                <Spinner animation="border" role="status"/>
                <p>We are working for you, come back soon.</p>
            </div>
        </div>
    );
};

export default InDevelopment;
