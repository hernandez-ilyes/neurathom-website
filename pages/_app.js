import Layout from "../layouts/Layout";
import React, {useEffect, useRef, useState} from 'react';
import "../styles/globals.css";
import styles from "../styles/loader.module.css"
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import {gsap} from 'gsap'

function MyApp({Component, pageProps}) {
    const [loaded, setLoaded] = useState(false)
    const loadingBar = useRef()

    useEffect(() => {
        gsap.to(loadingBar.current, {
            width: "25%",
        }).duration(2)
        gsap.to(loadingBar.current, {
            width: "75%"
        }).duration(2).delay(1)
        gsap.to(loadingBar.current, {
            width: "100%"
        }).duration(2).delay(1)
        setTimeout(() => {
            setLoaded(true)
        }, 4000)
    }, [])

    return (
        <>
            <div>
                {!loaded && (
                    <div className={styles.loader}
                         style={{
                             backgroundImage: "url('loader.png')",
                             backgroundPosition: "center",
                             backgroundSize: "cover"
                         }}>
                        <h1>Bienvenue !</h1>
                        <div className={styles.bgLoader}>
                            <div ref={loadingBar}
                                 style={{width: "0%", height: "100%", backgroundColor: "blue", borderRadius: 25}}>
                            </div>
                        </div>
                    </div>
                )}
                {loaded && (
                    <div>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                        <ToastContainer/>
                    </div>
                )}
            </div>
        </>
    );
}

export default MyApp;
