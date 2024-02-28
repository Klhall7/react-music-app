import { Link } from 'react-router-dom';
import styles from './footerStyles.module.css';

const FooterNav= () => {
    return (
        <>
        {/* set up routes and component pages for policy, credits, and copyright */}
        <footer className={styles.root}>
            <ul className={styles.internalLinks}>
                <li> <Link to='/faq'>FAQ</Link> </li>
                <li> <Link to='/privacy'>Privacy Policy</Link> </li>
                {/* need to create FAQ and policy page (disclaimers) */}
            </ul>

            <ul className={styles.externalLinks}>
                <li className={styles.copyright}>
                    <img src='/src/images/sound-logo.png'/>
                    <a 
                    href='https://thisisaplaceholder' 
                    target="_blank" 
                    rel="noopener noreferrer">© 2024 KyraH</a> 
                     {/* link to portfolio page */}
                </li>
                <li>
                    <a 
                    href='https://www.linkedin.com/in/kyra-hall-/' 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img src='' alt="Creator's LinkedIn"/>
                        {/* link to LinkedIn page & add icon image */}
                    </a>
                </li>  
                <li>
                    <a 
                    href='https://github.com/Klhall7' 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img src='' alt="Creator's Github"/>
                        {/* link to Github source code page & add icon image */}
                    </a>
                </li>
            </ul>
        </footer>
        </>
    )

}

export default FooterNav