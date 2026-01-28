import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Agence from './Agence'
import Projects from './Projects'
import Header from '@/components/Header'
import FullScreenNav from '../components/Header/FullScreenNav'
const Index = () => {
    return (
        <>
            <Header />
            <FullScreenNav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/agence' element={<Agence />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </>
    )
}

export default Index