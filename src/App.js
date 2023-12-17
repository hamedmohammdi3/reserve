import Navabar from "./pages/navbar/Navbar";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from "./Create";
import RepairDetails from "./RepairDetails";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.rtl.css";
import "bootstrap/js/dist/button";
import "./index.css";
import Footer from "./pages/footer/Footer";
import DefineAndEditSection from "./pages/configuration/DefineAndEditSection";
function App() {
  return (
      <Router>
    <div className="App" style={{ fontFamily: 'B Nazanin' }}>
        <Navabar/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/create">
                <Create />
            </Route>
            <Route exact path="/DefineAndEditSection">
                <DefineAndEditSection />
            </Route>
            <Route path="/repair/:id">
                <RepairDetails />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </div>
      </Router>

  );
}

export default App;
