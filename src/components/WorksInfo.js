import React from 'react';

import { connect } from 'react-redux';
import { selectWork } from '../actions';

import { GridTile } from 'material-ui/GridList';

const styles = {
    img: {
        width: "100%",
        height: "auto",
        minWidth: 300,
        minHeight:230
    }
};

class WorksInfo extends React.Component {

    render() {

        return (
            <GridTile
                key={this.props.key}
                title={this.props.work.name}
                subtitle={<span><b>{this.props.work.startDate+" - "+this.props.work.finishDate}</b></span>}
                onClick={()=> this.props.selectWork(this.props.work, this.props.workIdx)}
                style={{cursor:'pointer'}}
            >
                <img src={this.props.work.thumbImg || require('./../images/nara.gif')} style={styles.img}/>
            </GridTile>
        );
    }
}

WorksInfo.propTypes = {
    work: React.PropTypes.object,
    workIdx: React.PropTypes.number,
    selectWork: React.PropTypes.func
};

WorksInfo.defaultProps = {
    work: {
        name: '',
        startDate: 0,
        finishDate: 0,
        thumbImg: require('./../images/nara2.png')
    },
    workIdx: -1,
    selectWork: () => console.error('Not working selectWork')
};


let mapDispatchToProps = dispatch => {
    return {
        selectWork: (work, key) => dispatch(selectWork(work, key))
    }
};

WorksInfo = connect(null, mapDispatchToProps)(WorksInfo);

export default WorksInfo;