import Layout from "../layouts/Layout";
import React, {useState, useEffect, useRef} from 'react';
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {gsap} from 'gsap'

function MyApp({ Component, pageProps }) {
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
                <div style={{height: "100vh", fontSize: "3rem",paddingBottom: 50, paddingLeft: 100, backgroundImage: "url('loader.png')", backgroundSize: "cover", display: "flex", alignItems: "left", justifyContent: "center", flexDirection: "column"}}>
                    <h1>Bienvenue !</h1>
                    <div style={{backgroundColor: "black", height: 25, width: 500, borderRadius: 25}}>
                        <div ref={loadingBar} style={{width: "0%", height: "100%", backgroundColor: "#000DFF", borderRadius: 25}}>

                        </div>
                    </div>
                </div>
            )}
            {loaded && (
                <div>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    <ToastContainer />
                </div>
                )}
        </div>
    </>
  );
}

export default MyApp;
