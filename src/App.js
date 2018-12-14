import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PopularPage from "./pages/PopularPage";

import { store, persistor } from "./shared/store";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <PopularPage />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
