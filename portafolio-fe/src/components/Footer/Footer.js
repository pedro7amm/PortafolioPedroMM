import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerColumn}>
                <img src="/logo-circular.png" alt="logo circular logo"/>
            </div>
            <div className={styles.footerColumn}>
            <ul>
                    <li>Portfolio</li>
                    <li>v 0.1 - 01/2025</li>
                    <li>&copy; Pedro7amm Dev.</li>
                </ul>
            </div>

            <div className={styles.footerColumn}>
                <ul>
                    <li>Github</li>
                    <li>LinkedIn</li>
                    <li>pedrolendez7@gmail.com</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
