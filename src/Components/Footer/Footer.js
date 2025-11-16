import "../../Stayls/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <h2>MakeWeb.<span>IT</span></h2>
                <p>MakeWeb.IT – web-dasturlashni o‘rganish va amaliyot qilish uchun platforma.</p>
            </div>

            <div className="footer-about">
                <h3>Platforma haqida</h3>
                <p>Qisqa vaqt ichida web-texnologiyalarni o‘rganing va amaliyot qiling. Har bir dars sizni rivojlantiradi 🚀</p>
            </div>

            <div className="footer-links">
                <h3>Ijtimoiy tarmoqlar</h3>
                <div className="social-links">
                    <a href="https://t.me/websitemake025"><i className="fa-brands fa-telegram"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
