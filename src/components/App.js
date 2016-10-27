import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Cached from 'material-ui/svg-icons/action/cached';
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
    constructor(props){
        super(props);
        this.state={
            selectedType:'A',
            themeNum: true
        };
        this.changeSelectType = this.changeSelectType.bind(this);
        this.setThemeNum = this.setThemeNum.bind(this);
    }

    changeSelectType(type){
        this.setState({
            selectedType:type
        })
    }

    setThemeNum(){
        this.setState({
            themeNum: !this.state.themeNum
        });
    }

    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(this.state.themeNum ? lightBaseTheme : darkBaseTheme)}>
                <div>
                    <FloatingActionButton onClick={this.setThemeNum} style={styles.button}>
                        <Cached />
                    </FloatingActionButton>
                    <Header changeSelectType={this.changeSelectType}/>
                    <Works selectedType={this.state.selectedType}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;