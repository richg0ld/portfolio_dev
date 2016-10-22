import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Drawer
                    docked={false}
                    width={400}
                    open={this.props.open}
                    onRequestChange={this.props.toggleProfile}
                >
                    <MenuItem onTouchTap={this.props.toggleProfile}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.props.toggleProfile}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;