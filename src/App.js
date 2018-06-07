import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DataView from './views/DataView';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from "./reducers";


const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers,middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
            <DataView />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
