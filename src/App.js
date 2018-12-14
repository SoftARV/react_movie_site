import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PopularPage from "./pages/PopularPage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetailPage from "./pages/MovieDetailPage";

import { store, persistor } from "./shared/store";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div className="App">
              <Navbar />
              <div className="content">
                <Route exact path="/" component={PopularPage} />
                <Route exact path="/favorites" component={FavoritesPage} />
                <Route path="/movie/:id" component={MovieDetailPage} />
              </div>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
