import Navbar from './components/Navbar/Navbar';
import { About } from './container';
import './App.css'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <About />
    </div>
  )
}

export default App;
