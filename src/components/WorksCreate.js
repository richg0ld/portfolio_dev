import React from 'react';

export default class WorksCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            url:'',
            startDate:0,
            finishDate:0
        };
        this.handleChangeCreate = this.handleChangeCreate.bind(this);
        this.handleClickCreate = this.handleClickCreate.bind(this);
    }

    handleChangeCreate(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClickCreate() {
        const work = {
            name: this.state.name,
            url: this.state.url,
            startDate:this.state.startDate,
            finishDate:this.state.finishDate
        };
        this.props.onCreate(work);
    }

    render(){
        return (
            <div>
                <h2>add Work</h2>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        value={this.state.name}
                        onChange={this.handleChangeCreate}
                    />
                    <input
                        type="text"
                        name="url"
                        placeholder="링크"
                        value={this.state.url}
                        onChange={this.handleChangeCreate}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="WorkDate"
                        placeholder="시작날짜"
                        value={this.state.startDate}
                        onChange={this.handleChangeCreate}
                    />
                    <input
                        type="text"
                        name="finishDate"
                        placeholder="끝날짜"
                        value={this.state.finishDate}
                        onChange={this.handleChangeCreate}
                    />
                </p>
                <button onClick={this.handleClickCreate}>Create</button>
            </div>
        );
    }
}

WorksCreate.propTypes = {
    onCreate: React.PropTypes.func
};

WorksCreate.defaultProps = {
    onCreate: () => console.error('Not onCreate')
};