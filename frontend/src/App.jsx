import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import Reserve from "./pages/reserve.jsx";
import SignIn from "./pages/signIn.jsx";
import Registration from "./pages/registration.jsx";


function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/reserve" element={<Reserve/>}/>
                <Route path="/register" element={<Registration/>}/>
            </Routes>
        </div>
    )
}

export default App
