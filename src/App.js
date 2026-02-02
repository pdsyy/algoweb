import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header";
import {useEffect} from "react";
import Footer from "./components/Footer";
import TerraPage from "./pages/Terra/TerraPage";
import AeroPage from "./pages/Aero/AeroPage";
import HydroPage from "./pages/Hydro/HydroPage";
import PopupBot from "./components/PopupBot";
import ThxPopup from "./components/ThxPopup";

function App() {
    useEffect(() => {
        if (!localStorage.getItem("algo_lang")) {
            localStorage.setItem("algo_lang", "UA")
        }
    }, [])

    return (
        <div className="App">
            <Header/>
            <ThxPopup/>

            <Routes>
                <Route path="/" element={<MainPage/>} index/>
                <Route path="/terra" element={<TerraPage/>}/>
                <Route path="/aero" element={<AeroPage/>}/>
                <Route path="/hydro" element={<HydroPage/>}/>
            </Routes>

        </div>
    );
}

export default App;
