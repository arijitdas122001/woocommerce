import '../App.css'
import Slider from './Slider';
import Catagories from './catagories';
import Product from './Product';
import LogIn from './LogIn';
function Home() {
  return (
    <div className="App">
      <Slider/>
      <Catagories/>
      <Product/>
      <LogIn/>
    </div>
  );
}

export default Home;
