import Head from 'next/head'
import styles from '../styles/About.module.css'
import Accordion from "../components/accordion";

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About - Neurathom</title>
            </Head>

            <div className={styles.topSection}>
                <h1 className={styles.Title}>Qui sommes-nous ?</h1>
                <p className={styles.Description}>
                    Neurathom est une start-up qui a pour but de miniaturiser une micro
                    Interface cerveau ordinateur dans le but de combler des lésions
                    neuronales.
                </p>
            </div>

            <section className={styles.AccordionSection}>
                <div style={{width: 1000}}>
                    <Accordion text="Pour qui ?">
                        <p className={styles.AccordionContent}>Le but de l'entreprise est avant tout de cibler une
                            clientèle souffrant de lésions neurophysiologiques sévères ou légères, mais aussi de
                            proposer nos services à des établissements publics tels que les petits hôpitaux ayant des
                            ressources en matière de technologie très limitées Pour leur fournir ainsi un accès à une
                            technique gratuite au début qui pourrait aider certains patients atteints de troubles
                            neurophysiologiques lors de leurs rééducations notamment.</p>
                    </Accordion>
                    <Accordion text="Quand ?">
                        <p className={styles.AccordionContent}>Le projet a commencé il y a 5 mois. Nous avons prévu 3
                            étapes : une phase de conception de logiciel qui est terminée, une phase de conception de
                            matériel qui débutera bientôt, et une phase de test qui suivra pour essayer de lancer la
                            startup sous forme physique d'ici le mois de juillet 2023</p>
                    </Accordion>
                    <Accordion text="Pourquoi ?">
                        <p className={styles.AccordionContent}>Nous nous sommes lancés dans ce projet pour 3 bonnes
                            raisons. La première est que cela pourrait faciliter le quotidien de milliers voire millions
                            de personnes paraplégiques et tétraplégiques dans le monde et cela est plus qu'encourageant
                            de changer positivement le quotidien de ces personnes. La seconde raison est que nous
                            croyons que cette technologie pourrait être particulièrement utile pour les patients
                            souffrant de troubles neurophysiologiques, qui pourraient bénéficier de cette aide pour leur
                            rééducation. Elle pourrait également faciliter la communication en société pour les enfants
                            souffrant de trisomie et toutes personnes ayant une difficulté à communiquer avec des objets
                            connectés. Enfin, le marché des interfaces cerveau ordinateur est tout nouveau et
                            représentera d'ici 2030 plus de 30 milliards, il y a donc quelque chose à faire !</p>
                    </Accordion>
                    <Accordion text="Qui ?">
                        <p className={styles.AccordionContent}>Je m'appelle Marc et j'ai 19 ans. Je suis le fondateur de
                            la startup Neurathom et j'ai décidé de combiner ma passion pour la programmation et les
                            mathématiques en mettant mes compétences au service d'un collectif avec une idée innovante.
                            Je suis passionné de mathématiques, informatique, sciences de l'ingénierie et physique. Je
                            suis actuellement en train d'étudier les sciences dures, l'économie et la gestion dans le
                            cadre de mon parcours scolaire.</p>
                    </Accordion>
                </div>
            </section>

        </div>
    );
}
