import React from 'react';

import { connect } from 'react-redux';

import { GridList } from 'material-ui/GridList';

import { worksData } from './worksData'
import WorksInfo from './WorksInfo';
import WorksDetail from './WorksDetail';
// import WorksCreate from './WorksCreate';
import update from 'react-addons-update';


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

const getCols = (()=>{
    let cols;
    return ()=>{
        if(window.innerWidth > 1116){
            cols = 5;
        }else if(window.innerWidth > 912){
            cols = 4;
        }else if(window.innerWidth > 712){
            cols = 3;
        }else if(window.innerWidth > 412){
            cols = 2;
        }else{
            cols = 1;
        }
        return cols;
    }
})();

class Works extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            selectedKey: -1,
            keyword: '',
            worksData: worksData.sort(),
            cols: getCols()
        };

        this.handleCreateWork = this.handleCreateWork.bind(this);
        this.handleRemoveWork = this.handleRemoveWork.bind(this);
        this.imageLoaded = this.imageLoaded.bind(this);

    }
    componentDidMount() {
        window.addEventListener("resize", ()=>{
            this.setState({
                cols: getCols()
            })
        });
    }

    imageLoaded(){
        this.setState({
            worksData: update(this.state.worksData,{
                [this.props.selectedKey]:{
                    $merge: {imageLoaded: true}
                }
            })
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
                        cols={this.state.cols}
                        cellHeight={230}
                        padding={1}
                        style={styles.gridList}
                    >
                        {mapToComponents(this.state.worksData)}
                    </GridList>
                </div>
                <WorksDetail
                    isSelected={this.props.selectedKey !== -1}
                    work={this.state.worksData[this.props.selectedKey]}
                    onRemove={this.handleRemoveWork}
                    open={this.props.open}
                    onImageLoaded={this.imageLoaded}
                />
            </div>
        );
    }
}

WorksInfo.propTypes = {
    selectedType: React.PropTypes.string
};

WorksInfo.defaultProps = {
    selectedType: 'A'
};


let mapStateToProps = state => {
    return {
        selectedType: state.pageControl.selectedType,
        selectedKey: state.pageControl.selectedKey,
        open: state.pageControl.open
    };
};

Works = connect(mapStateToProps)(Works);

export default Works;