import Head from "next/head";
import styles from "../styles/Tech.module.css";
import {useRef} from "react";

export default function Technologie() {
    const ref = useRef()

    return (
        <div className={styles.container}>
            <Head>
                <title>Technologie - Neurathom</title>
            </Head>

            <section className={styles.topSection}>
                <h1>Comment notre technologie fonctionne ?</h1>
                <p>
                    La technique de Neurathom est une technique non invasive qui consiste à placer des électrodes sur le
                    cuir chevelu du patient afin de collecter des signaux electroencephalographiques pour obtenir des
                    potentiels d'actions.
                </p>
            </section>

            <section className={styles.sectionTwo}>
                <div className={styles.right}>
                    <h1>Moyen de communication</h1>
                    <p>
                        Il s'agit du P300 speller, un système communément utilisé dans le domaine des interfaces
                        cerveau-ordinateur (BCI). Il s'agit d'un système synchrone qui se présente sous la forme d'un
                        tableau de lettres. Si l'utilisateur souhaite écrire "bonjour", par exemple, il devra se
                        concentrer sur la lettre B en premier. Le système mettra alors en surbrillance alternativement
                        les différentes colonnes puis les différentes lignes.
                    </p>
                    <img src="moyen_de_communication.png" width="100%"></img>
                </div>
                <div className={styles.left}>
                    <h1>Le casque</h1>
                    <p>
                        Le casque EEG souple et confortable sera équipé d'électrodes à contact sec avec des pointes à
                        ressort qui permettent de s'adapter à la forme de la tête, ce qui rend leur utilisation plus
                        confortable que les électrodes à contact sec traditionnelles. Le casque EEG offre 37 positions
                        d'électrodes qui peuvent être facilement ajustées grâce à un mécanisme de serrage. Les positions
                        suivent le système standard 10-20.
                    </p>
                    <img src="casque.png" width="100%"></img>
                </div>
            </section>
            <section className={styles.sectionTwoReverse}>
                <div className={styles.right}>
                    <h1>Le boitier</h1>
                    <p>
                        Le boîtier SOC de Neurathom est équipé d'un adaptateur Bluetooth 4.2 qui permet de communiquer
                        et de transférer des données à l'ordinateur. La batterie de l'appareil peut être rechargée via
                        un port micro-USB en utilisant des chargeurs 5V standard, comme ceux utilisés pour les
                        téléphones portables avec une prise micro-USB. Le chargeur doit être capable de fournir au moins
                        600 mA de courant. L'appareil peut être utilisé pendant la charge à partir d'une banque
                        d'alimentation.
                    </p>
                    <img src="boitier.png" width="100%"></img>
                </div>
                <div className={styles.left}>
                    <h1>Comprendre le cerveau</h1>
                    <p>
                        Le potentiel d'action est une activité électrique explosive causée par un courant dépolarisant.
                        Cela signifie qu'un stimulus provoque le potentiel de repos de la cellule à passer à 0 mV.
                        Lorsque la dépolarisation atteint environ -55 mV, la cellule produit un potentiel d'action.
                        Comment le premier potentiel d'action est-il généré ? L'initiation des potentiels d'action (le
                        "déclenchement" neuronal) par des événements non neuronaux est appelée "transduction
                        sensorielle". Lorsque les neurones s'activent les uns les autres, cela se produit parce que les
                        molécules de neurotransmetteur libérées par une cellule se lient aux neurorécepteurs d'une autre
                        cellule, ouvrant les portes de ses canaux ioniques et chargeant la cellule.
                    </p>
                    <img src="comprendre_le_cerveau.png" width={"100%"}></img>
                </div>
            </section>

        </div>
    );
}
