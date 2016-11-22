import React from 'react';

import { connect } from 'react-redux';
import { selectType, toggleProfile } from '../actions';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import HeaderProfile from './HeaderProfile'

const styles = {
    header:{
        position:'fixed',
        left:0,
        top:0,
        width:'100%',
        zIndex:1000
    }
};

class Header extends React.Component {
    constructor(props){
        super(props);
        this.changeSelectType = this.changeSelectType.bind(this);
    }
    changeSelectType(proxy, type){
        this.props.changeSelectType(type);
    }
    render(){
        return (
            <div style={styles.header}>
                <AppBar
                    zDepth={5}
                    title={<span style={{cursor:'pointer'}} onClick={ ()=> window.location.reload() }>Richg0ld</span>}
                    onLeftIconButtonTouchTap={this.props.toggleProfile}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            onChange = { this.changeSelectType }
                        >
                            <MenuItem primaryText='All' value='A' />
                            <MenuItem primaryText='Website' value='W' />
                            <MenuItem primaryText='Promotion' value='P' />
                            <MenuItem primaryText='Mobile' value='M' />
                            <MenuItem primaryText='Etc' value='E' />
                        </IconMenu>
                    }
                />
                <HeaderProfile
                />
            </div>
        );
    }
}

HeaderProfile.propTypes = {
    changeSelectType: React.PropTypes.func
};

HeaderProfile.defaultProps = {
    changeSelectType: () => console.error('Not working changeSelectType')
};

let mapDispatchToProps = dispatch => {
    return {
        changeSelectType: type => dispatch(selectType(type)),
        toggleProfile: () => dispatch(toggleProfile())
    }
};

Header = connect(null, mapDispatchToProps)(Header);

export default Header;