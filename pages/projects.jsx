import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Projects.module.css";
import Project from "../components/Project";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {OrbitControls} from "@react-three/drei";
import Prototype from "../components/Prototype";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects - Neurathom</title>
      </Head>

        <section className={styles.threed}>
            <Canvas style={{backgroundColor: "#003288"}} camera={{position: [25.46, 25.43, 10.15]}}>
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
