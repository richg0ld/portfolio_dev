import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './Header';
import Works from './Works';

const styles = {
    button:{
        position:'fixed',
        right: 20,
        bottom: 20,
        zIndex:100
    }
};

class App extends React.Component {
    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Header />
                    <Works />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;