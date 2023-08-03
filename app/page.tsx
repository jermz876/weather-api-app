import Image from "next/image";
import styles from "./page.module.css";
import FormSearch from "./components/FormSearch";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.background}>
                <h1>Weather App</h1>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <h2>Get The Weather</h2>
                        <FormSearch />
                    </div>
                </div>
            </div>
        </main>
    );
}
