import footerStyle from "../styles/Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className={footerStyle.footer}>
            <div className={footerStyle.aboutUs}>
                <div className={footerStyle.title}>ABOUT US</div>
                <div className={footerStyle.content}>&ldquo;Trịnh công sơn&rdquo; là một dự án được thành lập bởi học sinh sinh viên yêu và cảm nhạc trịnh trên cả nước với mong muốn đem màu nhạc xưa, những lời ca nét bút ủa cố nhạc sĩ hay chỉ đơn giản là những mảnh chuyện nhỏ về cuộc đời ông đến thính/độc giả</div>
            </div>
            <div className={footerStyle.contactUs}>
                <div className={footerStyle.title}>CONTACT US</div>
                <div className={footerStyle.content}>
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook} size="2x"/> TSCCPTER</li>
                        <li><FontAwesomeIcon icon={faInstagram} size="2x"/> TSCCPTER</li>
                        <li><FontAwesomeIcon icon={faYoutube} size="2x"/> TSCCPTER</li>
                        <li><FontAwesomeIcon icon={faPhone} size="2x"/> 0341200622</li>
                    </ul>
                </div>
            </div>
            <div className={footerStyle.bar}>

            </div>
            <div className={footerStyle.user}>
                <ul className={footerStyle.containerUser}>
                    <li className={footerStyle.login}>Đăng nhập</li>
                    <li className={footerStyle.signup}>Đăng ký</li>
                </ul>
            </div> 
        </footer>
    );
}

export default Footer;