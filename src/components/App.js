import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
            themeNum: 0,
            themes:[lightBaseTheme, darkBaseTheme]
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
            themeNum:parseInt(Math.random()*2, 10)
        });
    }

    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(this.state.themes[this.state.themeNum])}>
                <div>
                    <FloatingActionButton onClick={this.setThemeNum} mini={true} style={styles.button}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <Header changeSelectType={this.changeSelectType}/>
                    <Works selectedType={this.state.selectedType}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;