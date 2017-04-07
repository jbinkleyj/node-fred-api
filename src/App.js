import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Api from './components/Api/Api'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <Api />
            </MuiThemeProvider>
        );
    }
}

export default App;
