import {lazy, Suspense} from 'react'
import { ThemeProvider } from '@emotion/react'
import './App.css';
import { react } from '@babel/types';


// Lazy load non-critical components 
// NTS: Lazy loading -> Certain elements are loaded when 
//                      they are needed by the user
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Contact = lazy(() => import('./components/sections/Contact'));


function App() {
  return (
    <div>
      Hello there!
    </div>
  )
}

export default App;
