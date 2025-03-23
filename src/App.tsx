import {lazy, Suspense} from 'react'
import { ThemeProvider } from '@emotion/react'
import './App.css';
import { react } from '@babel/types';
import Title from './components/sections/TitleSection/TitleSection';


// Lazy load non-critical components 
// NTS: Lazy loading -> Certain elements are loaded when 
//                      they are needed by the user
const Projects = lazy(() => import('./components/sections/ProjectSection'));
const Skills = lazy(() => import('./components/sections/SkillSection'));
const Contact = lazy(() => import('./components/sections/ContactSection'));


function App() {
  return (
    <div>
      Hello there!
      <Title/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App;
