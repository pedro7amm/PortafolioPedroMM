import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';
import logoCircle from '../../assets/images/logo-circular.png'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <div className={styles.footerColumn}>
                    <ul>
                        <li>Portfolio</li>
                        <l>Personal Project</l>
                        <li>v 0.1 - 01/2025</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <img src={logoCircle} alt="logo circular"/>
                </div>
                <div className={styles.footerColumn}>
                    <ul>
                        <li>Pedro Meléndez Miranda</li>
                        <li><FaEnvelope/> pedrolendez7@gmail.com</li>
                        <li>Software & Web Developer</li>
                    </ul>
                </div>
            </div>

            <div className={styles.SocialList}>
                <a href="https://github.com/pedro7amm" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/pedromelendezm/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://www.instagram.com/pedro7amm/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <p>&copy; Pedro7amm Dev.</p>
            </div>
        </div>
    );
};

export default Footer;
