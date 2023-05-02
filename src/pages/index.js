import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import CardContainer from "../components/CardContainer";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [mainElements, setMainElements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://valorantgame.com.tr/api/ana-sayfa?populate=*");
      const data = await response.json();
      setMainElements(data.data.attributes.main_element);
    }

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.Label}>
        <h1 className={styles.Title}>Valorant</h1>
      </div>
      <SideBar />
      <CardContainer />

      {/* Diğer bileşenler */}
    </div>
  );
}
