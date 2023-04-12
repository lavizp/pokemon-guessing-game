import './App.css'
import HomePage from './pages/homePage'
import BattlePage from './pages/battlePage';
import HistoryPage from './pages/historyPage';
import { Route,Routes } from 'react-router-dom';
function App() {

  return (
    <Routes>
    <Route path ="/" element={<HomePage/>}/>
    <Route path ="battle" element={<BattlePage/>}/>
    <Route path ="history" element={<HistoryPage/>}/>
    </Routes>
  )
}

export default App
