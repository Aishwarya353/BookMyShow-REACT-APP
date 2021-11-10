import "./App.css";
import Header from "./components/Header/Header";
import SliderImages from "./components/SliderImages";
import CardsSlider from "./components/CardsSlider";
import Premieres from "./components/Premieres";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import AllMovies from "./components/AllMovies";
// import SingleMovie from "./components/SingleMovie";
import AllMoviesFetch from "./components/AllMoviesFetch";
import SingleMovieFetch from "./components/SingleMovieFetch";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/">
            <SliderImages />
            <CardsSlider />
            <Premieres />
          </Route>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
