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
                    <p style={{fontSize: "24px"}}>nói về quán văn - 	&ldquo;bệ phóng&rdquo; tiếng hát Khánh Ly và nhạc Trịnh Công Sơn</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src='/nguoi-nay-hat-nhac-nguoi-xua.jfif' className={styles.cardImg}></img>
                  <div className={styles.cardContent}>
                    <p style={{fontSize: "32px"}}>Người nay hát nhạc người xưa?</p>
                    <p style={{fontSize: "24px"}}>Tranh cãi từ dự án âm nhạc &ldquo;Gen Z và Trịnh&rdquo;: Những màn kết hợp lạc lối?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.more}>
          Xem thêm
        </div>
        <div className={styles.diemXua}>
          <div className={styles.diemXuaTitle}><FontAwesomeIcon icon={faMusic}/>: &nbsp;&nbsp;&nbsp; DIỄM XƯA - MỐI TÌNH ĐẦU DAY DỨT CỦA TRỊNH CÔNG SƠN</div>
          <div className={styles.diemXuaLyrics}>
            <div className={styles.diemXuaLyricsTitle}>Lời bài hát</div>
            <div className={styles.diemXuaLyricsContainer}>
              <div>
                        Mưa vẫn mưa bay trên tầng tháp cổ<br />
                        Dài tay em mấy thuở mắt xanh xao<br />
                        Nghe lá thu mưa reo mòn gót nhỏ<br />
                        Đường dài hun hút cho mắt thêm sâu<br />
                        <br />
                        Mưa vẫn hay mưa trên hàng lá nhỏ<br />
                        Buổi chiều ngồi ngóng những chuyến mưa qua<br />
                        Trên bước chân em âm thầm lá đổ<br />
                        Chợt hồn xanh buốt cho mình xót xa<br />
                          <br />
                          Chiều nay còn mưa sao em không lại<br />
                          Nhớ mãi trong cơn đau vùi<br />
                          Làm sao có nhau, hằn lên nỗi đau<br />
                          Bước chân em xin về mau<br />
              </div>
              <div>
                      Mưa vẫn hay mưa cho đời biến động<br />
                      Làm sao em nhớ những vết chim di<br />
                      Xin hãy cho mưa qua miền đất rộng<br />
                      Để người phiêu lãng quên mình lãng du<br />
                      <br />
                      Chiều nay còn mưa sao em không lại<br />
                      Nhớ mãi trong cơn đau vùi<br />
                      Làm sao có nhau, hằn lên nỗi đau<br />
                      Bước chân em xin về mau<br />
                      <br />
                      Mưa vẫn hay mưa cho đời biến động<br />
                      Làm sao em biết bia đá không đau<br />
                      Xin hãy cho mưa qua miền đất rộng<br />
                      Ngày sau sỏi đá cũng cần có nhau<br />
              </div>
              <div className={styles.diemXuaLyricsImg}>
                <img src="/diem-xua-2.jfif" className={styles.img1}></img>
                <img src='/diem-xua-3.jfif' className={styles.img2}></img>
              </div>
            </div>
            <div className={styles.diemXuaMeaning}>
              <div className={styles.diemXuaMeaningTitle}>Ngô Vũ Bích Diễm - Thời Sinh Viên</div>
              <img src='/avatar.jfif' className={styles.diemXuaMeaningAvatar}></img>
              <div className={styles.diemXuaMeaningContainer}>
                <div className={styles.diemXuaMeaningContainerTitle}>Ý Nghĩa Ca Khúc</div>
                <div className={styles.diemXuaMeaningContainerPara}>Được sáng tác vào năm 1960, &ldquo;Diễm xưa&rdquo; được coi là một trong những ca khúc đầu tay trong sự nghiệp nhạc tình của nhạc sĩ Trịnh Công Sơn. Bài hát chất chứa một nỗi niềm rất thật của người nghệ sĩ, vừa tiếc nuối vừa trách móc, ưu thương. Với những người mộ điệu, họ cảm nhận được trong &ldquo;Diễm xưa&rdquo; hình ảnh một chàng trai đang mòn mỏi ngóng chờ những bước chân âm thầm của một cô gái &ldquo;chiều nay còn mưa sao em không lại&rdquo;. Trách móc đấy nhưng vẫn trông ngóng mãi một bóng hình.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quoteContainer}>
          <div className={styles.quote}>Có những ngày tuyệt vọng cùng cực, tôi và cuộc đời đã tha thứ cho nhau. Từ buổi con người sống quá rẻ rúng, tôi biết rằng vinh quang chỉ là điều dối trá. Tôi không còn gì để chiêm bái ngoài nỗi tuyệt vọng và lòng bao dung. Hãy đi đến tận cùng của tuyệt vọng để thấy tuyệt vọng cũng đẹp như một bông hoa.</div> 
          <img src='/cham-ngon.png' className={styles.quoteImg}></img>
          <FontAwesomeIcon icon={faMusic} className={styles.quoteIcon}/>
          <div className={styles.quoteTitle}>CHÂM NGÔN TRỊNH</div>
        </div>
      </main>
    </div>
  )
}
