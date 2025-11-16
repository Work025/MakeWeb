import React, { useState } from "react";
import "../../Stayls/Section.css";

function Section() {
    const [selected, setSelected] = useState("Header");
    const [open, setOpen] = useState(false);
    const [activeIcon, setActiveIcon] = useState("folder");
    const [bgMode, setBgMode] = useState("img"); // bg-img yoki bg-color uchun

    return (
        <div className="section">
            <div className="stn-webmaker">
                <h2>Bu yerda siz o'zingiz istalgancha sayt tuzulishini yaratishingiz mumkin</h2>
            </div>

            <div className="stn-header">
                <div className="devloper">
                    <div className="header-devloper">
                        <div className="h-size">
                            {/* Width */}
                            <div className="h-size-w">
                                <h4 style={{ marginRight: "4px" }}>Width</h4>
                                <input placeholder="Enter..." />
                                <select>
                                    <option>px</option>
                                    <option>%</option>
                                    <option>rem</option>
                                    <option>vw</option>
                                    <option>em</option>
                                    <option>vh</option>
                                </select>
                            </div>

                            {/* Height */}
                            <div className="h-size-w">
                                <h4>Height</h4>
                                <input placeholder="Enter..." />
                                <select>
                                    <option>px</option>
                                    <option>%</option>
                                    <option>rem</option>
                                    <option>vw</option>
                                    <option>em</option>
                                    <option>vh</option>
                                </select>
                            </div>

                            {/* BG options */}
                            <div className="h-size-bg">
                                <div className="h-size-btn">
                                    <button
                                        className={bgMode === "img" ? "active" : ""}
                                        onClick={() => setBgMode("img")}
                                    >
                                        BG-img
                                    </button>
                                    <button
                                        className={bgMode === "color" ? "active" : ""}
                                        onClick={() => setBgMode("color")}
                                    >
                                        BG-color
                                    </button>
                                </div>

                                <div className="h-size-type">
                                    {bgMode === "color" ? (
                                        <div className="hst-color">
                                            <input type="color" />
                                        </div>
                                    ) : (
                                        <div className="hst-bg">
                                            <input type="file" id="fileInput" accept="image/*" hidden />
                                            <label htmlFor="fileInput" className="upload-btn">
                                                <i className="fas fa-download"></i> Rasm yuklash
                                            </label>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Tanlangan element turini tanlash --- */}
                <div className="select-view">
                    <div className="select-content">
                        <select
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            <option value="Header">Header (Tepadagi bosh qism)</option>
                            <option value="Nav">Nav (Navigatsiya menyusi)</option>
                            <option value="Section">Section (Asosiy bo‘lim)</option>
                            <option value="Active">Active (O'z haqida axborot)</option>
                            <option value="Banner">Banner (E’lon qismi)</option>
                            <option value="Hero">Hero (Katta ochilish bloki)</option>
                            <option value="Article">Article (Maqola bloki)</option>
                            <option value="Aside">Aside (Yon panel "reklama")</option>
                            <option value="Footer">Footer (Pastki qism)</option>
                        </select>
                    </div>

                    {/* --- Tanlangan turga qarab div ko‘rinadi --- */}
                    <div className="select-div">
                        {selected === "Header" && (
                            <div className="div-header">
                                <div className="header-box">
                                    <p>Header box</p>
                                    <ul className="header-box-ul">
                                        <a>(1)box</a>
                                        <a>(2)box</a>
                                        <a>(3)box</a>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {selected === "Nav" && (
                            <div className="div-nav">
                                <div className="nav-box">
                                    Nav box
                                    <ul className="nav-box-ul">
                                        <a>1list</a>
                                        <a>2list</a>
                                        <a>3list</a>
                                        <a>4list</a>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {selected === "Section" && (
                            <div className="div-section">
                                <div className="section-box">
                                    <div className="section-box-text">
                                        <p>Section box</p>
                                        <span>about section text</span>
                                        <button>button</button>
                                    </div>
                                    <div className="section-box-img">img...</div>
                                </div>
                            </div>
                        )}
                        {selected === "Active" && (
                            <div className="div-active">
                                <div className="active-box">
                                    Active box
                                    <div className="active-box-data">
                                        <input placeholder="Input..." />
                                        <button>Button</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selected === "Banner" && (
                            <div className="div-banner">
                                <div className={`banner-box ${open ? "open" : ""}`}>
                                    <i
                                        className="fas fa-chevron-left"
                                        onClick={() => setOpen(!open)}
                                    ></i>
                                    <span>Banner box</span>
                                </div>
                            </div>
                        )}
                        {selected === "Hero" && (
                            <div className="div-hero">
                                <div className="hero-box">Hero box (1)</div>
                                <div className="hero-box">Hero box (2)</div>
                                <div className="hero-box">Hero box (3)</div>
                                <div className="hero-box">Hero box (4)</div>
                            </div>
                        )}
                        {selected === "Footer" && (
                            <div className="div-footer">
                                <div className="footer-box">
                                    Footer box
                                    <i className="fas fa-info-circle"></i>
                                    <div className="footer-box-link">
                                        <i className="fas fa-circle"></i>
                                        <i className="fas fa-circle"></i>
                                        <i className="fas fa-circle"></i>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <section>
                <header>
                    <h2>
                        Function.<span>WEB</span>
                    </h2>
                    <div className="choose-type">
                        <i
                            className={`fas fa-folder ${activeIcon === "folder" ? "active" : ""}`}
                            onClick={() => setActiveIcon("folder")}
                        ></i>
                        <i
                            className={`fas fa-code ${activeIcon === "code" ? "active" : ""}`}
                            onClick={() => setActiveIcon("code")}
                        ></i>
                    </div>
                </header>
                <main>{/* |--- sayt ko‘rinishi chiqadi ---| */}</main>
            </section>
        </div>
    );
}

export default Section;
