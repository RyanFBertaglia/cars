import Navbar from "../components/NavBar";
import styles from "../styles/etica.module.css";

export default function Etica() {
    return <>
    <Navbar />
    <div className={styles.container} style={{overflow: 'auto', height: '80vh', scrollbarWidth: 'none',
  msOverflowStyle: 'none'}}>
    <h1>Questões Éticas - O que deve ser levado em consideração</h1>
    <main className={styles.mainContent}>
    <div className={styles.contentWrapper}>
    <section id="utilitarismo" className={styles.section}>
    <h2 className={styles.titleSmall}>Perspectiva Utilitarista</h2>
    <p className={styles.text}>O Utilitarismo afirma que a ação moral correta é a que minimiza danos e maximiza o bem-estar geral.</p>
    <p className={styles.text}>Aplicado a carros autônomos, o veículo faria um “cálculo moral” entre opções, escolhendo a que reduz o total de vítimas.</p>
    <p className={styles.textHighlight}>Problema: trata indivíduos como meios para um fim. Quem compraria um carro que pode sacrificar seu passageiro?</p>
    </section>


    <section id="deontologia" className={styles.section}>
    <h2 className={styles.titleSmall}>Perspectiva Deontológica</h2>
    <p className={styles.text}>Baseada em regras e deveres, argumenta que certas ações são sempre erradas, independentemente do resultado.</p>
    <p className={styles.text}>Desviar para matar intencionalmente seria pior do que manter o curso original e perder mais vidas — ação vs. omissão.</p>
    <p className={styles.textHighlight}>Problema: seguir regras rígidas pode gerar resultados irracionais.</p>
    </section>


    <section id="legal" className={styles.section}>
    <h2 className={styles.titleSmall}>A Abordagem Legal</h2>
    <p className={styles.text}>A sociedade define as regras. A Alemanha criou diretrizes que priorizam a vida humana, proíbem discriminação e impedem sacrifícios intencionais.</p>
    <p className={styles.textHighlight}>Equilíbrio: fortemente deontológico, impedindo que o carro "conte vidas".</p>
    </section>


    <section id="mercado" className={styles.section}>
    <h2 className={styles.titleSmall}>A Abordagem de Mercado</h2>
    <p className={styles.text}>Fabricantes tendem a priorizar o passageiro — o cliente. Um carro que sacrifica seu dono não seria vendido.</p>
    </section>


    <section id="ponderacao" className={styles.section}>
    <h2 className={styles.titleSmall}>A Abordagem de Ponderação</h2>
    <p className={styles.text}>Mistura pesos: número de vidas, risco, culpa e até cultura. Porém, é complexa e tendenciosa.</p>
    </section>


    <section id="prevencao" className={styles.section}>
    <h2 className={styles.titleSmall}>A Verdadeira Solução: Prevenção</h2>
    <p className={styles.text}>Indústria foca em evitar o dilema: sensores melhores, IA preditiva e comunicação entre veículos.</p>
    <p className={styles.textHighlight}>Se o carro chegar a um dilema moral inevitável, já ocorreu uma falha de segurança.</p>
    </section>
    </div>
    </main>
    </div>
</>
}