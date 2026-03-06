import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Footer from "./components/Footer";
import TerraPage from "./pages/Terra/TerraPage";
import AeroPage from "./pages/Aero/AeroPage";
import HydroPage from "./pages/Hydro/HydroPage";
import PopupBot from "./components/PopupBot";
import ThxPopup from "./components/ThxPopup";
import {ScrollProvider} from "./context/ScrollContext";

import {LanguageProvider} from "./context/LanguageProvider";
import PropPage from "./pages/Prop/PropPage";

function App() {


    const [activePopup, setActivePopup] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false)
    const [visibleHeader, setVisibleHeader] = useState(false)

    return (

            <ScrollProvider>
                <LanguageProvider>
                    <div className="App">

                        <Header dark={darkTheme} visibleHeader={visibleHeader} setVisibleHeader={setVisibleHeader}/>
                        <ThxPopup activePopup={activePopup} setActivePopup={setActivePopup} dark={darkTheme}/>

                        <Routes>
                            <Route path="/" element={<MainPage visibleHeader={visibleHeader} setVisibleHeader={setVisibleHeader}/>} index/>
                            <Route path="/terra" element={<TerraPage setActivePopup={setActivePopup}/>}/>
                            <Route path="/aero" element={<AeroPage setActivePopup={setActivePopup}/>}/>
                            <Route path="/prop" element={<PropPage setActivePopup={setActivePopup} setDarkTheme={setDarkTheme}/>}/>
                            <Route path="/hydro" element={<HydroPage setActivePopup={setActivePopup}/>}/>
                        </Routes>

                    </div>
                </LanguageProvider>
            </ScrollProvider>
    );
}

export default App;
