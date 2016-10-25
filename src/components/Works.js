import React from 'react';

import { GridList } from 'material-ui/GridList';

import { worksData } from './worksData'
import WorksInfo from './WorksInfo';
import WorksDetail from './WorksDetail';
import WorksCreate from './WorksCreate';
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

export default class Works extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            selectedKey: -1,
            keyword:'',
            worksData: worksData
        };

        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleClickWorkTitle = this. handleClickWorkTitle.bind(this);

        this.handleCreateWork = this.handleCreateWork.bind(this);
        this.handleRemoveWork = this.handleRemoveWork.bind(this);
        this.handleEditWork = this.handleEditWork.bind(this);
        this.handleCloseDetail =this.handleCloseDetail.bind(this);
    }

    handleChangeSearch(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClickWorkTitle(key){
        this.setState({
            open: true,
            selectedKey: key
        });
    }

    handleCloseDetail(){
        this.setState({
            open: false
        });
    }

    handleCreateWork(work){

        this.setState({
            worksData: update(this.state.worksData, {
                $push: [work]
            })
        });
    }

    handleRemoveWork(){
        if(this.state.selectedKey < 0){
            return;
        }

        this.setState({
            worksData: update(this.state.worksData, {
                $splice: [[this.state.selectedKey, 1]]
            }),
            selectedKey: -1
        });
    }

    handleEditWork(name, url){
        this.setState({
            worksData: update(this.state.worksData,{
                [this.state.selectedKey]:{
                    name: {$set: name},
                    url: {$set: url},
                }
            })
        });
    }

    render(){
        const mapToComponents = data => {
            // data = data.filter(work => {
            //     return work.name.toLowerCase().indexOf(this.state.keyword) > -1;
            // });
            data = data.filter(work => {
                return work.type.indexOf(this.props.selectedType) > -1 || this.props.selectedType === 'A';
            });
            return data.map((work, i) => {
                return (
                    <WorksInfo
                        work={work}
                        key={i}
                        onClick={ () => this.handleClickWorkTitle(i) }
                    />
                );
            });
        };
        return (
            <div style={styles.works}>
                {/*<input*/}
                    {/*type="text"*/}
                    {/*name="keyword"*/}
                    {/*placeholder="Search"*/}
                    {/*value={this.state.keyword}*/}
                    {/*onChange={this.handleChangeSearch}*/}
                {/*/>*/}
                <div style={styles.root}>
                    <GridList
                        cols={3}
                        cellHeight={230}
                        padding={1}
                        style={styles.gridList}
                    >
                        {mapToComponents(this.state.worksData)}
                    </GridList>
                </div>
                <WorksDetail
                    isSelected={this.state.selectedKey !== -1}
                    work={this.state.worksData[this.state.selectedKey]}
                    onClose={this.handleCloseDetail}
                    onRemove={this.handleRemoveWork}
                    open={this.state.open}
                />
                {/*<WorksCreate*/}
                    {/*onCreate={this.handleCreateWork}*/}
                {/*/>*/}
            </div>
        );
    }
}