import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Display from './Display'
import Model from './components/Model'
import Control from './components/Control'

function App() {
 return(
  <div className="px-4 py-5 my-5 text-center">
    <Model>
   <Header/>
    <div className="col-lg-6 mx-auto">
    <Display/>
    <Control/>
    </div>
    </Model>
  </div>
   
  )
}

export default App
