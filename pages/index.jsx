import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function Home() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    if (
      e.target[0].value == "" ||
      e.target[1].value == "" ||
      e.target[2].value == ""
    ) {
      toast.error(
        "Merci de remplire la totalité des champs. Nous n'avons pas envoyée le mail.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else if (!validateEmail(e.target[1].value)) {
      toast.error("Merci d'entrer un mail valide.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      emailjs
        .sendForm(
          "service_3bge6eg",
          "template_8hosukd",
          form.current,
          "7SHoSo1DcFMX_KmwN"
        )
        .then((res) => {
          toast.success("Vous venez de contactez notre équipe avec succés !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Neurathom</title>
      </Head>
      <main>
        <h1>Notre technologie</h1>
        <p>
          Un outil révolutionaire indispensable a l'avancé de la médecine et au
          coeur des nouvelles avancées technologiques.
        </p>
        <Link style={{marginBottom: 200}} href="/about">
          <span>Plus d'information</span>
        </Link>
        {/* <div></div> */}
      </main>
      {/* <section className={styles.partners}>
        <h1>Nos partenaires</h1>
        <Image src="/partners-logos.svg" height={100} width={100}></Image>
        <p>Ouvert au partenariats</p>
      </section> */}
      <section className={styles.contact}>
        <div className={styles.left}>
          <h1>
            Vous
            <br />
            souhaitez
            <br />
            en savoir
            <br />
            plus ?
          </h1>
        </div>
        <div className={styles.right}>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your name"
              id="user_name"
              name="user_name"
            />
            <input
              type="text"
              placeholder="sophie@example.com"
              id="user_email"
              name="user_email"
            />
            <textarea
              type="text"
              placeholder="I want to contact us because..."
              id="message"
              name="message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}
