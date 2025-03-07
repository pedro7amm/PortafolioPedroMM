import React from 'react';
import { Link } from "react-router-dom";
import styles from "./MenuBar.module.css";

const MenuBar = () => {
    return (
        <nav className={styles["menu-bar"]}>
            <ul>
                <li><Link to="/Home" className={styles["menu-item"]}>HOME</Link></li>
                <li><Link to="/Experience" className={styles["menu-item"]}>EXPERIENCE</Link></li>
                <li><Link to="/Projects" className={styles["menu-item"]}>PROJECTS</Link></li>
                <li><Link to="/Contact" className={styles["menu-item"]}>CONTACT</Link></li>
            </ul>
        </nav>
    );
};

export default MenuBar;
