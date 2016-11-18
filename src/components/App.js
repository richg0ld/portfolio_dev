import React from 'react';

import { connect } from 'react-redux';
import { changeTheme } from '../actions';

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
        super(props)
    }
    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(this.props.themeValue ? lightBaseTheme : darkBaseTheme)}>
                <div>
                    <div className="ㅋㅋㅋㅋ">{this.props.themeValue ? "true" : "false" }</div>
                    <FloatingActionButton onClick={this.props.changeTheme} style={styles.button}>
                        <Cached />
                    </FloatingActionButton>
                    <Header />
                    <Works />
                </div>
            </MuiThemeProvider>
        );
    }
}

let mapStateToProps = state => {
    return {
        themeValue: state.pageControl.themeValue
    };
};

let mapDispatchToProps = dispatch => {
    return {
        changeTheme: () => dispatch(changeTheme())
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;