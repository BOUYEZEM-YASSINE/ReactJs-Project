import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PR from './PageRecipe';
import PH from './PageHome';
import Detail from './DetailsPage/Detail';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Route exact path="/" component={PH}/>
        <Route exact path="/Recipes" component={PR}/>
        <Route exact path="/Detail/:login" component={Detail}/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
