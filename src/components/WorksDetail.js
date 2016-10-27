import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    img: {
        width: '100%',
        height:'auto',
        minHeight: '200px'
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

export default class WorksDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false
        };
        this.handleToggleEdit = this.handleToggleEdit.bind(this);
    }

    handleToggleEdit(){
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    render(){

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.props.onClose}
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
                actions={actions}
                modal={false}
                contentStyle={styles.customContentStyle}
                open={this.props.open}
                onRequestClose={this.props.onClose}
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
                            onLoad={this.props.onImageLoaded}
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
    isSelected: React.PropTypes.bool,
    onRemove: React.PropTypes.func,
    onImageLoaded: React.PropTypes.func
};

WorksDetail.defaultProps = {
    work: {
        name: '',
        url: '',
        startDate:0,
        finishDate:0
    },
    isSelected: false,
    onRemove: () => new Error('Not onRemove'),
    onImageLoaded: () => new Error('Not onImageLoaded')
};