import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/home' element={<Home></Home>} />
                <Route path='/blogs' element={<Blogs></Blogs>} />
                <Route path='/reviews' element={<Reviews></Reviews>} />
                <Route path='/dashboard' element={<Dashboard></Dashboard>} />
                <Route path='/about' element={<About></About>} />
                <Route path='*' element={<NotFound></NotFound>} />
            </Routes>
        </div>
    );
}

export default App;
