import React from 'react';

import { GridTile } from 'material-ui/GridList';

const styles = {
    img: {
        width: "100%",
        height: "auto",
        minWidth: 300,
        minHeight:230
    }
};

export default class WorksInfo extends React.Component {

    render() {

        return (
            <GridTile
                title={this.props.work.name}
                subtitle={<span><b>{this.props.work.startDate+" - "+this.props.work.finishDate}</b></span>}
                onClick={this.props.onClick}
                style={{cursor:'pointer'}}
            >
                <img src={this.props.work.thumbImg || require('./../images/nara.gif')} style={styles.img}/>
            </GridTile>
        );
    }
}

WorksInfo.propTypes = {
    work: React.PropTypes.object,
    onClick: React.PropTypes.func
};

WorksInfo.defaultProps = {
    work: {
        name: ''
    },
    onClick: () => new Error('Not onClick')
};