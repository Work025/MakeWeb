import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../Servic/LanguageContent";
import langData from "../../Data/MainLang.json";
import "../../Stayls/Main.css";
import Section from "./Section"

function Main() {
    const navigate = useNavigate();
    const { selectedLang } = useContext(LanguageContext);
    const [flipped, setFlipped] = useState(false);

    // Tanlangan tilga mos JSON obyektini topamiz
    const currentLang =
        langData.find((lang) => lang.code === selectedLang.header.code) ||
        langData[0];

    return (
        <div className="main">
            <div className="main-about">
                <motion.div
                    className="home-hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="home-title">
                        MakeWeb.<span>IT</span> {currentLang.welcome}
                    </h1>
                    <p className="home-subtitle">{currentLang.subtitle}</p>

                    <motion.button
                        className={`home-btn ${flipped ? "flipped" : ""}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setFlipped(true)}
                        onHoverEnd={() => setFlipped(false)}
                        onClick={() => navigate("/lesson")}
                    >
                        <span className="front">{currentLang.btnStart}</span>
                        <span className="back">
                            {currentLang.btnStartflip} <i className="fas fa-caret-right"></i>
                        </span>
                    </motion.button>
                </motion.div>

                <div className="home-cards">
                    {currentLang.features.map((item, index) => (
                        <div className="home-card" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <button>
                                {currentLang.btndata} <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* <---Syat yartish joyi ---> */}
            <Section />
        </div>
    );
}

export default Main;
