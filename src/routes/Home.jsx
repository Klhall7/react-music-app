import styles from './homeStyle.module.css'
import Navbar from '../components/Navbar'
function Home() {

    return (
        <>
        <Navbar />
        <div className={styles.root}>
            <main className={styles.main1}>
                <h1>Build <span>Your</span> Soundtrack</h1>
                <h2>Life is Better with Music</h2>
                <button>Toggle Mood</button> 
            </main>

            <main className={styles.main2}>
                <h2>App design highlights...steps to get started here</h2>
            </main>
        </div>
        </>
    )
}

export default Home