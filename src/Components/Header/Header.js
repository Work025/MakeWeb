import { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../Stayls/Header.css";
import { LanguageContext } from "../../Servic/LanguageContent";

function Header() {
  const navigate = useNavigate();
  const { selectedLang, changeLanguage, HeaderLang } = useContext(LanguageContext);

  const [openLang, setOpenLang] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingLang, setPendingLang] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageClick = (lang) => {
    if (lang.code === "ko") {
      // 🔥 Agar ko‘cha tili tanlansa — so‘rov chiqadi
      setPendingLang(lang);
      setShowConfirm(true);
    } else {
      changeLanguage(lang.code);
      setOpenLang(false);
    }
  };

  const handleConfirm = (agree) => {
    if (agree && pendingLang) {
      changeLanguage(pendingLang.code);
    }
    setShowConfirm(false);
    setPendingLang(null);
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <div className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-data">
          <div
            className="header-logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <h1 className="header-h1">
              MakeWeb.<span>IT</span>
            </h1>
          </div>

          <div className={`header-wrapper ${menuOpen ? "active" : ""}`}>
            <ul className="header-ul">
              <li className="items-menu">
                <NavLink to="/" onClick={handleLinkClick}>
                  {selectedLang.header.menu.home}
                </NavLink>
              </li>
              <li className="items-menu">
                <NavLink to="/div" onClick={handleLinkClick}>
                  {selectedLang.header.menu.div}
                </NavLink>
              </li>
              <li className="items-menu">
                <NavLink to="/lesson" onClick={handleLinkClick}>
                  {selectedLang.header.menu.lesson}
                </NavLink>
              </li>

              {/* 🌐 Til tanlash */}
              <div
                className="lang-dropdown"
                ref={dropdownRef}
                onClick={() => setOpenLang(!openLang)}
              >
                <div className="selected-lang">
                  {selectedLang.header.flag} {selectedLang.header.name}
                  <i className={`fas fa-chevron-${openLang ? "up" : "down"}`}></i>
                </div>

                {openLang && (
                  <ul className="lang-options">
                    {HeaderLang.map((lang) => (
                      <li
                        key={lang.code}
                        className={`lang-option ${lang.code === selectedLang.header.code ? "active" : ""
                          }`}
                        onClick={() => handleLanguageClick(lang)}
                      >
                        {lang.flag} {lang.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ul>
          </div>

          <div className="header-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`header-bars ${menuOpen ? "open" : ""}`}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>

      {/* 🆕 So‘rovchi modal */}
      {showConfirm && (
        <div className="street-modal">
          <div className="street-modal-content">
            <h2>Siz bu gaplarni ko‘tara olasizmi?</h2>
            <p>So‘rovni tanlang!</p>
            <div className="street-modal-buttons">
              <button className="yes-btn" onClick={() => handleConfirm(true)}>
                Ha (aniqmi)!
              </button>
              <button className="no-btn" onClick={() => handleConfirm(false)}>
                Yo‘q
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
