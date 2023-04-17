import './App.css'
import HomePage from './pages/homePage'
import BattlePage from './pages/battlePage';
import HistoryPage from './pages/historyPage';
import PokedexPage from './pages/pokedexPage';
import { Route,Routes } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="battle" element={<BattlePage/>}/>
      <Route path ="history" element={<HistoryPage/>}/>
      <Route path ="pokedex" element={<PokedexPage/>}/>

      </Routes>
    </QueryClientProvider>
  )
}

export default App
