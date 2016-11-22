import React from 'react';

import { connect } from 'react-redux';
import { transformLayout } from '../actions';

import { GridList } from 'material-ui/GridList';

import WorksInfo from './WorksInfo';
import WorksDetail from './WorksDetail';

const styles = {
    works:{
        paddingTop:64
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: "100%",
        height: "auto",
        overflowY: 'auto',
    }
};

class Works extends React.Component {
    componentDidMount() {
        window.addEventListener("resize", ()=>{
            this.props.transformLayout();
        });
    }
    render(){
        const mapToComponents = data => {
            data = data.filter((work, index)=> {
                work.idx = index;
                return work.type.indexOf(this.props.selectedType) > -1 || this.props.selectedType === 'A';
            });
            return data.map((work, i) => {
                return (
                    <WorksInfo
                        work={work}
                        key={i}
                        workIdx={work.idx}
                    />
                );
            });
        };
        return (
            <div style={styles.works}>
                <div style={styles.root}>
                    <GridList
                        cols={this.props.cols}
                        cellHeight={230}
                        padding={1}
                        style={styles.gridList}
                    >
                        {mapToComponents(this.props.worksData)}
                    </GridList>
                </div>
                <WorksDetail />
            </div>
        );
    }
}

WorksInfo.propTypes = {
    selectedType: React.PropTypes.string,
    transformLayout: React.PropTypes.func
};

WorksInfo.defaultProps = {
    selectedType: 'A',
    transformLayout: () => console.error('Not working transformLayout')
};


let mapStateToProps = state => {
    return {
        selectedType: state.pageControl.selectedType,
        selectedKey: state.pageControl.selectedKey,
        cols: state.pageLayout.cols,
        worksData: state.pageLayout.worksData
    };
};

let mapDispatchToProps = dispatch => {
    return {
        transformLayout: () => dispatch(transformLayout())
    }
};

Works = connect(mapStateToProps, mapDispatchToProps)(Works);

export default Works;