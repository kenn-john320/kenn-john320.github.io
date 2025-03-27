import {lazy, Suspense} from 'react'
import { ThemeProvider } from '@emotion/react'
import './App.css';
import { react } from '@babel/types';
import Title from './components/Sections/TitleSection/TitleSection';
import ProjectSection from './components/Sections/ProjectSection/ProjectSection';


// Lazy load non-critical components 
// NTS: Lazy loading -> Certain elements are loaded when 
//                      they are needed by the user
// const ProjectSection = lazy(() => import('./components/Sections/ProjectSection/ProjectSection'));
const Skills = lazy(() => import('./components/Sections/SkillSection/SkillSection'));
const Contact = lazy(() => import('./components/Sections/ContactSection/ContactSection'));


function App() {
  return (
    <div>
      Hello there!
      <Title/>
      <Skills/>
      <ProjectSection
        title="Project One"
      />
      <Contact/>

    </div>
  )
}

export default App;
