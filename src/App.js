import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './page/Home';
import {About} from './page/About';
import {Project} from './page/Project';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path ='/' />
      <Route element={<About />} path ='/about'/>
      <Route element={<Project />} path ='/project'/>
    </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
