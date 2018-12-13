import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MovieList from "./components/MovieList/MovieList";

import { store, persistor } from "./shared/store";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <MovieList />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
