import React from 'react';

import { connect } from 'react-redux';
import { closeWork, imageLoadingComplete } from '../actions';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    img: {
        width: '100%',
        height:'auto',
        minHeight: '200px',
        cursor:'pointer'
    },
    customContentStyle: {
        width: '90%',
        maxWidth: 'none'
    },
    info:{
        marginTop:30,
        fontSize:14
    },
    infoTerm:{
        marginTop:15
    },
    infoDesc:{
    }
};

class WorksDetail extends React.Component {
    render(){

        const actionsButton = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.props.closeWork}
            />,
            <FlatButton
                label="Go to link"
                primary={true}
                href={this.props.work.url}
                target="blank"
            />
        ];

        return (
            <Dialog
                title={this.props.work.name}
                actions={actionsButton}
                modal={false}
                contentStyle={styles.customContentStyle}
                open={this.props.modalOpen}
                onRequestClose={this.props.closeWork}
                autoScrollBodyContent={true}
            >
                <div style={{minHeight:600}}>
                    <div style={{textAlign:"center",position:'relative'}}>
                        <div style={{position:'absolute',top:50,width:'100%'}}>
                            <CircularProgress size={60} thickness={7} style={ this.props.work.imageLoaded ? {display:'none'} : {display:'inline-block'}}/>
                        </div>
                        <img
                            src={this.props.work.img || require('./../images/nara.gif')}
                            style={styles.img}
                            onLoad={this.props.imageLoadingComplete}
                            onClick={ () => window.open(this.props.work.url) }
                        />
                    </div>
                    <dl style={styles.info}>
                        <dt style={styles.infoTerm}>역할</dt>
                        <dd style={styles.infoDesc}>{this.props.work.role}</dd>
                        <dt style={styles.infoTerm}>내용</dt>
                        <dd style={styles.infoDesc}>{this.props.work.desc}</dd>
                        <dt style={styles.infoTerm}>작업기간</dt>
                        <dd style={styles.infoDesc}>{this.props.work.startDate} ~ {this.props.work.finishDate}</dd>
                    </dl>
                </div>
            </Dialog>
        );
    }
}

WorksDetail.propTypes = {
    work: React.PropTypes.object,
    modalOpen: React.PropTypes.bool,
    closeWork: React.PropTypes.func,
    imageLoadingComplete: React.PropTypes.func
};

WorksDetail.defaultProps = {
    work: {
        desc: "",
        finishDate: 0,
        idx: 0,
        img: require('./../images/nara2.png'),
        name: "",
        role: "",
        startDate: 0,
        thumbImg: require('./../images/nara2.png'),
        type: "",
        url: ""
    },
    modalOpen: false,
    closeWork: () => console.error('Not working closeWork'),
    imageLoadingComplete: () => console.error('Not working imageLoadingComplete'),
};

let mapStateToProps = state => {
    return {
        work: state.modalControl,
        modalOpen: state.pageControl.modalOpen
    }
};

let mapDispatchToProps = dispatch => {
    return {
        closeWork: () => dispatch(closeWork()),
        imageLoadingComplete: () => dispatch(imageLoadingComplete())
    }
};

WorksDetail = connect(mapStateToProps, mapDispatchToProps)(WorksDetail);

export default WorksDetail;