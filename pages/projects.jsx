import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Projects.module.css";
import Project from "../components/Project";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects - Neurathom</title>
      </Head>

      <div className={styles.topSection}>
        <h1>Nos projets</h1>
        <p>
          Et si on vous disaient qu'il ne s'agissait pas du seule projets que
          nous avons ? Eh oui, Neurathom souhaite se lencée de manière générale
          dans la neurologie.
        </p>
      </div>

      <div className={styles.projectsSection}>
        <div className={styles.projects}>
          <h1>Nous n'avons de projets en vu pour l'instant. Restez à l'affut de nos projets !</h1>
        </div>
      </div>
    </div>
  );
}
