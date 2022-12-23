import Head from "next/head";
import styles from "../styles/Tech.module.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from '@react-three/drei';
import Prototype from '../components/Prototype';
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
          la technologie de Neurathom est une techniques qui est dite non
          invasives consistent à placer les électrodes sur le cuir chevelu ,
          afin de produire un électroencéphalogramme.
        </p>
      </section>

      <section className={styles.sectionTwo}>
        <div className={styles.right}>
          <h1>Moyen de communication</h1>
          <p>
            Il s’agit du P300 speller, qui est couramment utilisé dans le
            domaine des BCI. Il s’agit d’un système synchrone qui se présente
            sous la forme d’un tableau où dans chaque case se trouve une lettre.
            Si l’utilisateur veut écrire « bonjour » par exemple. Il devra se
            concentrer sur la lettre B dans un premier temps. Le système va
            ensuite mettre en surbrillance alternativement les différentes
            colonnes puis les différentes lignes .
          </p>
        </div>
        <div className={styles.left}>
          <h1>Le casque</h1>
          <p>
            Le casque EEG souple et confortable conçus sera doté d'Électrodes à
            contact sec. Les électrodes sont dotées de pointes à ressort qui
            permettent à l’électrode de se conformer à la courbure de la tête,
            ce qui entraîne une usure plus confortable par rapport aux
            électrodes à contact sec standard. Le Casque EEG offre 37 positions
            où les électrodes peuvent être placées à l’aide d’un mécanisme
            d’écrêtage facile à utiliser. Les postes suivent le système standard
            10-20.
          </p>
        </div>
      </section>
      <section className={styles.sectionTwoReverse}>
        <div className={styles.right}>
          <h1>Le boitier</h1>
          <p>
            Le boitier TAC de Neurathom comporte un adaptateur USB Bluetooth
            4.2, qui est utilisé pour communiquer et diffuser des données à
            l’ordinateur. La batterie de l’appareil peut être chargée via un
            port micro-USB à l’aide de chargeurs 5V standard tels que des
            chargeurs de téléphone portable avec prise micro-USB. Le chargeur
            est capable de fournir au moins 600 mA de courant. L’appareil peut
            être utilisé lors de la charge à partir d’une banque d’alimentation.
          </p>
        </div>
        <div className={styles.left}>
          <h1>Comprendre le cerveau</h1>
          <p>
            Le potentiel d’action est une explosion de électrique activité créée
            par un courant dépolarisant. Cela signifie qu’un événement (un
            stimulus) provoque le repos potentiel pour aller vers 0 mV. Lorsque
            la dépolarisation atteint environ -55 mV a neurone va tirer un
            potentiel d’action.
            <br /> Aussi, comment le premier potentiel d’action est-il généré ?
            <br /> L’initiation de Potentiels d’action (le « déclenchement »
            neuronal) à partir d’événements non neuronaux est appelé «
            transduction sensorielle ». Lorsque les neurones s’activent les uns
            les autres, cela se produit parce que les molécules de
            neurotransmetteur libérées par une cellule se lient aux
            neurorécepteurs d’une autre cellule, ouvrant les portes de ses
            canaux ioniques et chargeant la cellule
          </p>
        </div>
      </section>
      <section className={styles.threed}>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight
              intensity={1}
              angle={1}
              penumbra={0.9}
              position={[-2000, -2000, -2000]}
              color={"#f5f5f5"}
              castShadow
            />
            <spotLight
              intensity={1}
              angle={1}
              penumbra={1}
              position={[2000, 2000, 2000]}
              color={"#fff"}
              castShadow
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
            <Prototype />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
}
