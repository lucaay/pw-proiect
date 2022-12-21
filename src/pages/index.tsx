import Head from "next/head";
import Roulette from "../components/Roulette";
import classes from "../styles/Home.module.scss";
export default function Home() {
    return (
        <>
            <Head>
                <title>Ruleta Craciun ACIEE</title>
                <meta
                    name="description"
                    content="Proiect Curs Programare Web UGAL"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={classes["main"]}>
                <Roulette/>
            </main>
        </>
    );
}
