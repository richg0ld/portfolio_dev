import React from 'react';

export default class WorksDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            url: '',
            startDate:0,
            finishDate:0
        };
        this.handleToggleEdit = this.handleToggleEdit.bind(this);
    }

    handleToggleEdit(){
        this.setState({
            isEdit: !this.state.isEdit
        });
        console.log(this.state.isEdit);
    }

    render(){
        const detail = (
            <div>
                <strong>{this.props.work.name}</strong>
                <a href={this.props.work.url}>{this.props.work.url}</a>
                <dl>
                    <dt>작업기간</dt>
                    <dd>{this.props.work.startDate} ~ {this.props.work.finishDate}</dd>
                </dl>
            </div>
        );

        const blank = (<div>Not</div>);

        return (
            <div>
                <h2>WorksDetail</h2>
                <div>
                    {this.props.isSelected ? detail : blank}
                    <p>
                        <button onClick={this.handleToggleEdit}>Edit</button>
                        <button onClick={this.props.onRemove}>Remove</button>
                        <button> 버튼잼</button>
                    </p>
                </div>
            </div>
        )
    }
}

WorksDetail.propTypes = {
    work: React.PropTypes.object,
    isSelected: React.PropTypes.bool,
    onRemove: React.PropTypes.func
};

WorksDetail.defaultProps = {
    work: {
        name: '',
        url: '',
        startDate:0,
        finishDate:0
    },
    isSelected: false,
    onRemove: () => console.error("Not onRemove")
};