import React from "react";
import Navbar from "../components/NavBar";
import styles from "../styles/pro-con.module.css";
import { Check, X } from "lucide-react";

export default function ProCon() {
        
    const comparisons = [
    {
        title: 'Preocupações com Segurança e Confiabilidade',
        subtitle: '',
        cons: 'A segurança é uma das principais preocupações para qualquer nova tecnologia, especialmente aquela que remove o elemento humano de uma tarefa complexa, como a condução de um veículo. As empresas de veículos autónomos (VA) enfrentam a difícil tarefa de garantir que seus sistemas sejam infalíveis em uma ampla gama de situações potenciais na estrada. No entanto, incidentes de alto perfil envolvendo veículos autônomos tornaram o público cético, e a ausência de benchmarks padronizados para medir a segurança desses veículos aumenta a complexidade do processo de desenvolvimento.',
        pros: 'Para abordar as preocupações com a segurança, é necessário o aprimoramento contínuo de tecnologias de sensoriamento, como LIDAR, radar e câmeras. Quando combinadas com algoritmos sofisticados de inteligência artificial, essas melhorias podem levar a uma percepção e a uma tomada de decisão mais confiáveis. Além disso, o estabelecimento de padrões e protocolos de segurança universais, como o Safety First for Automated Driving (SaFAD)[2], pode orientar os fabricantes e tranquilizar o público sobre a segurança da condução autónoma.'
    },
    {
        title: 'Questões Regulatórias e Legais',
        subtitle: '',
        cons: 'Os regulamentos para veículos autónomos variam muito de país para país, dificultando a implantação internacional de carros autónomos pelas empresas. Por exemplo, o Japão permite VAs de Nível 4 se estes cumprirem seus rigorosos padrões de segurança, enquanto os EUA têm uma abordagem estadual, onde alguns estados, como o Arizona, são muito abertos aos testes com VAs. Na China, o governo é agressivo em relação aos VAs, pressionando pelo avanço rápido com regulamentos permissivos. Enquanto isso, a Alemanha e a UE em geral estão a desenvolver estruturas cautelosas, mas favoráveis à inovação em VAs.',
        pros: 'Para navegar por este mosaico regulatório, as empresas de VA devem trabalhar com governos e organismos internacionais para estabelecer diretrizes federais e acordos internacionais que promovam a coesão regulatória e criem um ambiente mais previsível para inovação e expansão. A colaboração com a indústria de seguros pode ajudar a abordar questões de responsabilidade e risco relacionados aos VAs.'
    },
    {
        title: 'Limitações Tecnológicas e Desafios Éticos',
        subtitle: '',
        cons: 'Desenvolver software de condução totalmente autônomo é uma tarefa imensamente complexa. Os sistemas devem analisar vastas quantidades de dados de sensores em tempo real e tomar decisões em frações de segundo, apresentando dilemas éticos difíceis — como priorizar passageiros ou peões em situações críticas. Esses dilemas variam culturalmente e não possuem respostas universais.',
        pros: 'O caminho a seguir envolve machine learning avançado, simulações de alta fidelidade e validações robustas com milhões de quilómetros virtuais. Empresas de VA devem partilhar dados de forma ética, promover discussões abertas com legisladores e eticistas, e estabelecer quadros éticos claros para orientar decisões em situações críticas.'
    },
    {
        title: 'Escalabilidade e Adaptação da Infraestrutura',
        subtitle: '',
        cons: 'Outro desafio fundamental para os carros autónomos é o investimento significativo e os ajustes de infraestrutura necessários para escalar o seu desenvolvimento de protótipos para a produção em massa. Adaptar estradas e cidades planejadas para humanos é extremamente complexo.',
        pros: 'Parcerias entre governos, montadoras e empresas de tecnologia são essenciais. Modernizar rodovias com semáforos inteligentes, faixas exclusivas e comunicação V2X pode facilitar a adoção dos veículos autónomos.'
    },
    {
        title: 'Perceção Pública e Aceitação do Consumidor',
        subtitle: '',
        cons: 'Superar a hesitação do consumidor é um grande desafio. Existe medo de perda de empregos, falta de confiança em máquinas para decisões críticas e aumento da perceção de risco devido a incidentes amplamente divulgados.',
        pros: 'É necessária transparência, educação e envolvimento contínuo. As empresas devem mostrar benefícios reais, oferecer experiências práticas e adotar uma comunicação empática para transformar ceticismo em aceitação.'
    },
    {
        title: 'Preocupações com Segurança de Dados e Privacidade',
        subtitle: '',
        cons: 'Veículos autónomos dependem de grandes quantidades de dados, tornando-se vulneráveis a ciberataques e levantando preocupações sobre privacidade. A conexão crescente aumenta riscos e exige sistemas resilientes.',
        pros: 'Empresas devem priorizar cibersegurança desde o início: encriptação, atualizações contínuas, testes de penetração, monitorização e políticas transparentes de privacidade. A criação de padrões unificados fortalece a confiança pública.'
    }
    ];

  return (
    <div style={{overflow: 'auto', height: '100vh', scrollbarWidth: 'none',
  msOverflowStyle: 'none'}}>
    <Navbar />
    <h1 style={{
        fontSize: '3rem', 
        textAlign: 'center', 
        marginTop: '2rem', 
        marginBottom: '2rem'
    }}>Desafios e Soluções para o avanço da IA no meio automotivo</h1>
    <div className={styles.wrapper} >
      {comparisons.map((comparison, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h2 className={styles.title}>{comparison.title}</h2>
              <p className={styles.subtitle}>{comparison.subtitle}</p>
            </div>
            
            <div className={styles.content}>
            {/* Desafios (antes Contras) */}
            <div className={styles.cons}>
                <div className={styles.heading}>
                <div className={styles.iconWrapper}>
                    <X className={styles.icon} />
                </div>
                <h3>Desafio</h3>
                </div>
                <p className={styles.text}>{comparison.cons}</p>
            </div>

            {/* Soluções (antes Prós) */}
            <div className={styles.pros}>
                <div className={styles.heading}>
                <div className={styles.iconWrapper}>
                    <Check className={styles.icon} />
                </div>
                <h3>Soluções</h3>
                </div>
                <p className={styles.text}>{comparison.pros}</p>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}