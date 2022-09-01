import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trịnh Công Sơn</title>
        <meta name="description" content="" />
      </Head>
      <div className={styles.search}>
        <div className={styles.searchContainer}>
          <form>
            <input type="text" placeholder="" className={styles.searchBar}/>
          </form>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
        </div>
        <div className={styles.titleContainer}>
          <div className={[styles.searchTitle,styles.titleLayer].join(" ")}>TRỊNH CÔNG SƠN</div>
          <div className={styles.searchTitle}>TRỊNH CÔNG SƠN</div> 
        </div> 
      </div>
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.blackBar}></div>
          <div className={styles.container}>
            <h1 style={{margin: 0}}>Thư tình gửi một người</h1>
            <div className={styles.containerRow}>
              <div className={styles.card}>
                <img src='/buc-thu-so-1.jfif' className={styles.cardImg}></img>
                <div className={styles.cardContent}>Bức thư số 01: 2.9.1964</div>
              </div>
              <div className={styles.card}>
                <img src='/buc-thu-so-2.jfif' className={styles.cardImg}></img>
                <div className={styles.cardContent}>Bức thư số 02: 3.9.1964</div>
              </div>
              <div className={styles.card}>
                <img src='/buc-thu-so-3.jfif' className={styles.cardImg}></img>
                <div className={styles.cardContent}>Bức thư số 03: 17.9.1964</div>
              </div>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.blackBar}></div>
          <div className={styles.container}>
            <h1 style={{margin: 0, fontSize: "40px"}}><FontAwesomeIcon icon={faMusic} /></h1>
            <div className={styles.containerRow}>
              <div className={styles.card}>
                <img src='/diem-xua.jfif' className={styles.cardImg}></img>
                <div className={styles.cardContent}>Diễm xưa</div>
              </div>
              <div className={styles.card}>
                <img src='/ta-thay-gi-dem-nay.jfif' className={styles.cardImg}></img>
                <div className={styles.cardContent}>Ta thấy gì đêm nay</div>
              </div>
              <div className={styles.card}>
                <img src='/nhin-nhung-mua-thu-di.jfif' className={styles.cardImg}></img>
                <div className={styles.cardContent}>Nhìn những mùa thu đi</div>
              </div>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.blackBar}></div>
          <div className={styles.container}>
            <h1 style={{margin: 0}}>CẢM</h1>
            <div className={styles.containerRow}>
              <div className={styles.card}>
                <img src='/em-va-trinh.jfif' className={styles.cardImg}></img>
                <div className={styles.cardContent}>Nói về: Em Và Trịnh</div>
              </div>
              <div className={styles.containerCol}>
                <div className={styles.card}>
                  <img src='/quan-van.png' className={styles.cardImg}></img>
                  <div className={styles.cardContent}>
                    <p style={{fontSize: "32px"}}>Quán văn</p>
                    <p style={{fontSize: "24px"}}>nói về quán văn - “bệ phóng” tiếng hát Khánh Ly và nhạc Trịnh Công Sơn</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src='/nguoi-nay-hat-nhac-nguoi-xua.jfif' className={styles.cardImg}></img>
                  <div className={styles.cardContent}>
                    <p style={{fontSize: "32px"}}>Người nay hát nhạc người xưa?</p>
                    <p style={{fontSize: "24px"}}>Tranh cãi từ dự án âm nhạc “Gen Z và Trịnh”: Những màn kết hợp lạc lối?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
