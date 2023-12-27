import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from "./components";
import Home from "./pages/Home";
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex relative">
        <Sidebar />
        <main className='w-full h-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project1' element={<Project1 />} />
            <Route path='/project2' element={<Project2 />} />
            <Route path='/project3' element={<Project3 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
