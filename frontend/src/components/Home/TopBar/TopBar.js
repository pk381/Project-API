
import styles from './TopBar.module.css';
import Search from './Search/Search';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
            </div>
            <div className={styles.mainContainer}>
                <Search />
                <div className={styles.buttons}>
                    <Link className={styles.links} to="#">HOME</Link>
                    <Link className={styles.links} to="#">Pricing</Link>
                    <Link className={styles.links} to="#">Contact Us</Link>
                    <Button name='Login' />
                </div>
            </div>
        </div>
    );
}

export default TopBar;