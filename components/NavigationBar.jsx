import navStyle from "../styles/NavigationBar.module.scss";


const NavigationBar = () => {
    return (
        <nav className={navStyle.navBar}>
            <i className="bi bi-music-note-beamed"></i>
            <ul className={navStyle.containerMenu}>
                <li>Tiểu sử</li>
                <li>Mục lục</li>
                <li>Tìm kiếm</li>
                <li>Liên hệ</li>
            </ul>
            <div className={navStyle.user}>
                <ul className={navStyle.containerUser}>
                    <li className={navStyle.login}>Đăng nhập</li>
                    <li className={navStyle.signup}>Đăng ký</li>
                </ul>
            </div> 
        </nav>
    );
}
export default NavigationBar;