import Navbar from "../components/NavBar";
import styles from "../styles/saiba-mais.module.css";
import { useState } from "react";

export default function SaibaMais() {
const [phase, setPhase] = useState(0);

  const imageUrl = 'https://static01.nyt.com/images/2018/03/19/business/self-driving-car-illustration-1521499338405/self-driving-car-illustration-1521499338405-superJumbo.png';

  const sensors = [
    {
      title: 'Câmeras',
      desc: 'Captam imagens e vídeos, permitindo a leitura de placas de trânsito, semáforos, faixas na pista e a identificação de objetos (como pedestres, ciclistas e outros carros). Funcionam como os "olhos" do carro.'
    },
    {
      title: 'LIDAR (Light Detection and Ranging)',
      desc: 'Emite pulsos de laser para criar um mapa 3D de alta precisão do ambiente. Ele mede distâncias com exatidão, identificando o contorno e a profundidade dos objetos, mesmo no escuro.'
    },
    {
      title: 'Radar (Radio Detection and Ranging)',
      desc: 'Usa ondas de rádio para detectar a velocidade e a distância de objetos em movimento (como o carro à frente), sendo eficaz em condições climáticas adversas (chuva, neblina).'
    },
    {
      title: 'Sensores Ultrassônicos',
      desc: 'São usados para curtas distâncias, principalmente em manobras de estacionamento e para detectar obstáculos muito próximos.'
    },
    {
      title: 'GPS e Unidade de Medição Inercial (IMU)',
      desc: 'Fornecem a localização global do veículo e rastreiam seu movimento (aceleração, rotação), essenciais para a navegação.'
    },
  ];

  const levels = [
    {
      title: 'Nível 0 (Sem Automação)',
      desc: 'O humano controla tudo.'
    },
    {
      title: 'Nível 1 (Assistência ao Motorista)',
      desc: 'Sistemas como Cruise Control Adaptativo ou Assistente de Faixa ajudam em uma função.'
    },
    {
      title: 'Nível 2 (Automação Parcial)',
      desc: 'O carro pode controlar both steering and acceleration/deceleration simultaneously, mas o motorista deve permanecer sempre atento e com as mãos no volante (ex.: Tesla Autopilot, GM Super Cruise).'
    },
    {
      title: 'Nível 3 (Automação Condicional)',
      desc: 'Em condições específicas, o carro pode assumir toda a condução. O motorista pode desviar a atenção, mas deve estar preparado para retomar o controle quando solicitado.'
    },
    {
      title: 'Nível 4 (Alta Automação)',
      desc: 'O carro é totalmente autônomo em áreas geograficamente delimitadas ou em condições específicas (ex.: um táxi robotizado em um distrito central da cidade). Pode não ter volante.'
    },
    {
      title: 'Nível 5 (Automação Total)',
      desc: 'O carro é totalmente autônomo em qualquer lugar e em qualquer condição, igual ou superior a um motorista humano. Não requer intervenção humana e, muitas vezes, não tem volante ou pedais.'
    },
  ];

  const phases = [
    {
      title: 'Percepção do Ambiente (SENSE - "Os Sentidos")',
      content: (
        <>
          <p>Esta é a fase de coleta de dados. O carro precisa "ver" e "entender" tudo ao seu redor em tempo real. Para isso, utiliza um conjunto de sensores que se complementam:</p>
          <div className={styles.cardsRow}>
            {sensors.slice(0, 3).map((sensor, index) => (
              <div key={index} className={styles.card}>
                <h4>{sensor.title}</h4>
                <p>{sensor.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.cardsRow}>
            {sensors.slice(3, 5).map((sensor, index) => (
              <div key={index} className={styles.card}>
                <h4>{sensor.title}</h4>
                <p>{sensor.desc}</p>
              </div>
            ))}
          </div>
          <p>A fusão de sensores é a chave aqui: o sistema combina os dados de todos esses sensores para criar uma representação única, robusta e precisa do ambiente, compensando as limitações de cada sensor individual.</p>
        </>
      )
    },
    {
      title: 'Processamento e Tomada de Decisão (PLAN - "O Cérebro")',
      content: (
        <>
          <p>Esta é a fase da inteligência. Com os dados do ambiente captados, o sistema de IA do carro precisa interpretá-los e decidir o que fazer.</p>
          <h4>Localização e Mapeamento</h4>
          <p>O carro precisa saber exatamente onde está no mapa (com precisão centimétrica) e também entender o mapa da rodovia, incluindo curvas, interseções e limites de velocidade.</p>
          <h4>Detecção e Classificação de Objetos</h4>
          <p>Usando algoritmos de visão computacional e aprendizado de máquina, o sistema identifica o que cada objeto é (um carro, um pedestre, um cachorro) e prevê seu comportamento provável (o pedestre vai atravessar? O carro na via ao lado vai mudar de faixa?).</p>
          <h4>Planejamento de Trajetória</h4>
          <p>Com base na rota definida e nos objetos detectados, o sistema planeja a trajetória ideal. Ele decide quando acelerar, frear, fazer uma curva ou mudar de faixa, garantindo uma viagem segura, suave e eficiente.</p>
        </>
      )
    },
    {
      title: 'Atuação no Mundo Físico (ACT - "Os Músculos")',
      content: (
        <>
          <p style={{ lineHeight: '1.2', marginBottom: '0.8rem' }}>Depois que a decisão é tomada pelo "cérebro", ela precisa ser executada no mundo real. O sistema de direção autônoma envia comandos eletrônicos para os atuadores do carro:</p>
          <h4 style={{ lineHeight: '1.2', margin: '0.5rem 0 0.25rem 0' }}>Aceleração</h4>
          <p style={{ lineHeight: '1.2', marginTop: '0.5rem' }}>Controla o motor ou motor elétrico.</p>
          <h4 style={{ lineHeight: '1.2', margin: '0.5rem 0 0.25rem 0' }}>Freio</h4>
          <p style={{ lineHeight: '1.2', marginTop: '0.5rem' }}>Aciona o sistema de frenagem.</p>
          <h4 style={{ lineHeight: '1.2', margin: '0.5rem 0 0.25rem 0' }}>Direção</h4>
          <p style={{ lineHeight: '1.2', marginTop: '0.5rem' }}>Vira o volante.</p>
          <p style={{ lineHeight: '1.2', marginBottom: '0' }}>Esses sistemas devem ser altamente confiáveis e responsivos para executar com precisão as manobras planejadas.</p>
        </>
      )
    }
  ];

  const handleNext = () => {
    setPhase((prev) => (prev + 1) % phases.length);
  };

  const handlePrev = () => {
    setPhase((prev) => (prev - 1 + phases.length) % phases.length);
  };

  return (
    <div style={{overflow: 'auto', height: '100vh', scrollbarWidth: 'none',
  msOverflowStyle: 'none'}}>
    <Navbar />
    <div className={styles.container}>
      
      <h1>Definição de Carros Autônomos</h1>
      <div className={styles.definition}>
        <div className={styles.definitionText}>
          <p>Um carro autônomo (também conhecido como veículo autônomo ou self-driving car) é um veículo capaz de perceber o ambiente ao seu redor e navegar sem intervenção humana. Para isso, ele utiliza uma combinação de sensores, câmeras, radar, inteligência artificial (IA) e sistemas de geoposicionamento (como GPS).</p>
          <p>Em suma, é um robô móvel projetado para transportar pessoas ou cargas, tomando todas as decisões de condução de forma automatizada.</p>
        </div>
        <img src={imageUrl} alt="Ilustração de carro autônomo" className={styles.definitionImage} />
      </div>

      <h1>O que faz um carro autônomo ser autônomo: Os Pilares Fundamentais</h1>
      <p>Para ser considerado verdadeiramente autônomo, um carro não pode ser apenas um assistente de direção. Ele deve replicar e superar as capacidades de um motorista humano. Isso é alcançado através de um ciclo contínuo de quatro processos principais, conhecido como "Sense - Plan - Act" (Perceber - Planear - Agir).</p>
      <p>Aqui está o que torna um carro autônomo:</p>

      <div className={styles.phasesContainer}>
        <div 
          className={`${styles.arrow} ${styles.left}`} 
          onClick={handlePrev}
        >
          &lt;
        </div>
        <div className={styles.phaseContent}>
          <h2>{phases[phase].title}</h2>
          {phases[phase].content}
        </div>
        <div 
          className={`${styles.arrow} ${styles.right}`} 
          onClick={handleNext}
        >
          &gt;
        </div>
      </div>

      <h1>O Elemento Final: Os Níveis de Autonomia (SAE J3016)</h1>
      <p>A definição de "autonomia" é graduada. A SAE International estabeleceu 6 níveis que ajudam a entender o grau de intervenção humana necessária:</p>
      <div className={`${styles.cardsRow} ${styles.levelsCardsRow}`}>
        {levels.slice(0, 3).map((level, index) => (
          <div key={index} className={`${styles.card} ${styles.levelCard}`}>
            <h4>{level.title}</h4>
            <p>{level.desc}</p>
          </div>
        ))}
      </div>
      <div className={`${styles.cardsRow} ${styles.levelsCardsRow}`}>
        {levels.slice(3, 6).map((level, index) => (
          <div key={index} className={`${styles.card} ${styles.levelCard}`}>
            <h4>{level.title}</h4>
            <p>{level.desc}</p>
          </div>
        ))}
      </div>

    <h1>Conclusão</h1>
    <p>Um carro autônomo é, portanto, a integração perfeita de:</p>
    <ol className={styles.rectangleList}>
      <li>Sensores (para perceber o ambiente),</li>
      <li>Inteligência Artificial (para processar dados e tomar decisões),</li>
      <li>Atuadores (para executar as ações),</li>
      <li>Operando em alto nível de autonomia (Nível 3+), onde a intervenção humana contínua não é mais necessária.</li>
    </ol>
    <p>Essa combinação permite que a máquina substitua completamente o motorista humano nas funções de percepção, decisão e ação.</p>    </div>  
    </div> 
  );
};