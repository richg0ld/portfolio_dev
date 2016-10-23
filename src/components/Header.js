import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';
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

    constructor(props) {
        super(props);
        this.state = {
            profileOpen: false
        };

        this.toggleProfile = this.toggleProfile.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.changeSelectType = this.changeSelectType.bind(this);
    }

    toggleProfile(){
        this.setState({
            profileOpen: !this.state.profileOpen
        })
    }

    handleChangeSearch(e) {
        this.setState({
            keyword:[e.target.value]
        });
    }

    changeSelectType(proxy, value){
        this.props.changeSelectType(value);
    }

    render(){
        return (
            <div style={styles.header}>
                <AppBar
                    zDepth={5}
                    title={<span style={{cursor:'pointer'}} onClick={ ()=> window.location.reload() }>Richg0ld</span>}
                    onLeftIconButtonTouchTap={this.toggleProfile}
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
                            <MenuItem primaryText='Event' value='E' />
                            <MenuItem primaryText='Mobile' value='M' />
                        </IconMenu>
                    }
                />

                {/*<AutoComplete*/}
                    {/*hintText="입력"*/}
                    {/*dataSource={this.state.keyword}*/}
                    {/*onChange={this.handleChangeSearch}*/}
                    {/*floatingLabelText="프로젝트명을 검색하세요"*/}
                    {/*fullWidth={true}*/}
                {/*/>*/}

                <HeaderProfile
                    open={this.state.profileOpen}
                    toggleProfile={this.toggleProfile}
                />
            </div>
        );
    }
}

export default Header;