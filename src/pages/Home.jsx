import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import styles from "../styles/home.module.css";

export default function Home() {
  const navigate = useNavigate();
  return <>
    <style>{`

      @media (max-width: 480px) {
        .titleSmall {
          font-size: 2.5rem !important;
        }
        
        .subtitleSmall {
          font-size: 1.1rem !important;
        }
        
        .decorationHidden {
          display: none !important;
        }
      }
    `}
    </style>
    <Navbar />
    <div className={styles.container}>
      
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.titleSection}>
            <h1 className={`${styles.title} titleMobile titleSmall`}>
              Carros e IA
            </h1>
            
            <p className={`${styles.subtitle} subtitleSmall`}>
              Acompanhe nesse site as últimas notícias do mundo relacionadas ao uso de IA no meio automobilistico.
            </p>
          </div>
          
          <div className={`${styles.buttonActions} buttonActionsMobile`}>
            <button 
              className={`${styles.btnPrimary} btnPrimary btnFull`}
              onClick={() => navigate('/saiba-mais')}
            >
              Descubra mais
            </button>
            
            <button 
              className={`${styles.btnSecondary} btnSecondary btnFull`}
              onClick={() => navigate('/noticias')}
            >
              Últimas notícias
              <svg style={{width: '16px', height: '16px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  </>
}