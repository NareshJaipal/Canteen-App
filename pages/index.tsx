import Head from "next/head";
import NavBar from "../components/navbar/navbar";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Dummy from "../components/dummy/dummy";
import Menu from "../components/menu/menu";
import About from "../components/about/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Canteen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div id="home" className={styles.header}>
          <NavBar />
          <Banner />
        </div>

        <div className={styles.menuWrapper} id="menu">
          <Menu />
        </div>
        <div className={styles.aboutWrapper}>
          <About />
        </div>
        {/* <Dummy /> */}
        <Dummy />
      </main>
    </>
  );
}
