import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import ArtworksList from './components/artworksList/ArtworksList.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Pagination from './components/pagination/Pagination.jsx';
import Footer from './components/footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
    <>
       <NavBar />
    <ArtworksList />
    <Footer />
    </>
 
)
