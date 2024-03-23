
import './App.css'
import ReusableFrom from './Components/reusableFrom/ReusableFrom'
// import HookForm from './Components/HookForm/HookForm'
// import RefFrom from './Components/RefFrom/RefFrom'
// import StatefullForm from './StatefullForm/StatefullForm'

// import SimpleFrom from './Components/SimpleForm/SimpleFrom'

function App() {


  return (
   <div>

    {/* way one to get value from a input form */}
    {/* <SimpleFrom></SimpleFrom> */}

    {/* way two */}
    {/* <StatefullForm></StatefullForm> */}

    {/* useRef Hook */}
    {/* <RefFrom></RefFrom> */}

    {/* use custom hook  */}
    {/* <HookForm></HookForm> */}
    <ReusableFrom></ReusableFrom>


   </div>
  )
}

export default App
