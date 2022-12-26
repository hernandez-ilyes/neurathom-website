import Head from "next/head";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import {useRef, useState} from "react";
import {toast} from "react-toastify";

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default function Contact() {
    const [success, setSuccess] = useState(false);
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        if (e.target[0].value == "" || e.target[1].value == "" || e.target[2].value == "") {
            toast.error(
                "Merci de remplir la totalité des champs. Nous n'avons pas envoyé le mail.",
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
                    toast.success(
                        "Vous venez de contacter notre équipe avec succés !",
                        {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        }
                    );
                })
                .catch((err) => console.log(err));
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Contact - Neurathom</title>
            </Head>

            <div className={styles.topSection}>
                <h1>Contactez-nous</h1>
                <p>
                    Vous voulez nous contacter pour nous proposer une offre? Remplissez le formulaire ci-dessous pour
                    nous envoyer un message.
                </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className={styles.contactSection}>
                <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    placeholder="Your name"
                />
                <input id="user_email" name="user_email" placeholder="Your email"/>
                <textarea
                    id="message"
                    name="message"
                    placeholder="I want to contact us because....."
                    cols="30"
                    rows="10"
                />
                <button type="submit">Send</button>
                <div style={{margin: 0, padding: 0}}>
                    <p style={{color: "black", height: 10, padding: 0, margin: 0}}><a
                        style={{color: "whitesmoke", margin: 0, padding: 0}}
                        href={"https://discord.gg/ksnGmUQP"}>Discord</a> - <a
                        style={{color: "whitesmoke", margin: 0, padding: 0}}
                        href={"https://instagram.com/neurathom?igshid=YmMyMTA2M2Y="}>Instagram</a></p>
                </div>
            </form>

        </div>
    );
}
