import Navbar from "./Navbar/Navbar";
import styles from './Home.module.css';
import TopBar from "./TopBar/TopBar";

function Home() {
    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.main}>
                <Navbar />
                <div className={styles.subContainer}>

                </div>
            </div>
        </div>
    )
}

export default Home;