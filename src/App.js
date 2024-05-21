import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homes/home';
import Empresa from './components/pages/empresa';
import Projetos from './components/pages/projeto';
import Contatos from './components/pages/contatos';
import NovoProjeto from './components/pages/novoProj/newProjects';


import NavBar from "./components/layout/nav/navBar";
import Footer from "./components/layout/footer/footer";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projeto" element={<Projetos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contatos />} />
          <Route path="/newProjects" element={<NovoProjeto />} />
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}
export default App;