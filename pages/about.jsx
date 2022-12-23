import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About() {
    return (
      <div className={styles.container}>
        <Head>
          <title>About - Neurathom</title>
        </Head>

        <div className={styles.topSection}>
          <h1 className={styles.Title}>Qui sommes-nous ?</h1>
          <p className={styles.Description}>
            Neurathom est une start-up qui a pour but de miniaturisé une micro
            interface-cerveau-ordinateur dans le but de combler des lésions
            neuronales.
          </p>
        </div>

        <div className={styles.PeoplesSection}>
          <h1 className={styles.TeamTitle}>Notre équipe</h1>
          <div className={styles.Peoples}>
            <div
              style={{ height: 250 }}
              className={styles.withoutPaddingAndMargin}
            >
              <h2 className={styles.withoutPaddingAndMargin}>Marc Akliouche</h2>
              <p className={styles.withoutPaddingAndMargin}>
                Fondateur de l'entreprise
              </p>
              <p
                style={{ marginRight: 800, marginLeft: 800 }}
                className={styles.withoutPaddingAndMargin}
              >
                passionné de mathématiques appliquées à l’informatique. J’ai
                créé Neurathom dans le but d’aider les personnes atteintes de
                difficultés motrice et neurophysiologique a pouvoir communiquer
                avec leurs environnements et des objets connectés , j’espère
                lancer la startup d’ici juillet 2023 .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
