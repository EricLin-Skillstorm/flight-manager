import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AppNav } from './components/Nav';
import { Center } from './components/Formatting';
import { Landing, Flights, Error, CreateFlight, } from './pages';
import logo from './Assets/azurAirLogo.png'
const App = () =>{
    return(
        <BrowserRouter>
            <div className="App">
                <img src = {logo} alt ="logo" height = {50} width = {75}/>
                <header>
                    <div><b>Azur Airlines</b></div>
                </header>       
            </div>
            <Center><div><AppNav /></div></Center>
            <Routes>
                <Route path="/" element={<Landing />} />
                    <Route path="/flights" element={<Flights />} />
                    <Route path="/createflight" element={<CreateFlight />} />
                    <Route path="*" element={<Error />} />
            </Routes>
                
        </BrowserRouter>
    );
}

export default App;