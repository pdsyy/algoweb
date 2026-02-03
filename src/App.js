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
import {HelmetProvider} from "react-helmet-async";
import {LanguageProvider} from "./context/LanguageProvider";

function App() {
    useEffect(() => {
        if (!localStorage.getItem("algo_lang")) {
            localStorage.setItem("algo_lang", "UA")
        }
    }, [])


    const [activePopup, setActivePopup] = useState(false)

    return (
        <HelmetProvider>
            <ScrollProvider>
                <LanguageProvider>
                    <div className="App">

                        <Header/>
                        <ThxPopup activePopup={activePopup} setActivePopup={setActivePopup}/>

                        <Routes>
                            <Route path="/" element={<MainPage/>} index/>
                            <Route path="/terra" element={<TerraPage setActivePopup={setActivePopup}/>}/>
                            <Route path="/aero" element={<AeroPage setActivePopup={setActivePopup}/>}/>
                            <Route path="/hydro" element={<HydroPage setActivePopup={setActivePopup}/>}/>
                        </Routes>

                    </div>
                </LanguageProvider>
            </ScrollProvider>
        </HelmetProvider>
    );
}

export default App;
