import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import HomePage from './pages/Home';
import CatalogPage from './pages/Catalog';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
