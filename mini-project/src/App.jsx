import './App.css'
import Weather from './weather';


function App() {
  // const [count, setCount] = useState(0);

  let handleClick = () =>{
    console.log("button click");
  }

return (
<div className='root'>
<Weather />
</div>
 )
}

export default App
