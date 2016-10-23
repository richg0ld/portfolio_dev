import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './Header';
import Works from './Works';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedType:'A'
        };
        this.changeSelectType = this.changeSelectType.bind(this);
    }

    changeSelectType(type){
        this.setState({
            selectedType:type
        })
    }

    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Header changeSelectType={this.changeSelectType}/>
                    <Works selectedType={this.state.selectedType}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;