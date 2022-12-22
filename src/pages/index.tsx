import Head from "next/head";
import { useEffect } from "react";
import Roulette from "../components/Roulette";
import classes from "../styles/Home.module.scss";
import Snowfall from "react-snowfall";

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
                <ul className={classes["lightrope"]}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <Snowfall
                    radius={[1.0, 5.0]}
                    changeFrequency={400}
                    snowflakeCount={250}
                />
                <Roulette />
            </main>
        </>
    );
}
