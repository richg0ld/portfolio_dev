import React from 'react';

export default class WorksDetail extends React.Component {

    render(){

        const detail = (
            <div>
                <strong>{this.props.work.name}</strong>
                <a href={this.props.work.url}>{this.props.work.url}</a>
                <dl>
                    <dt>작업기간</dt>
                    <dd>{this.props.work.workingDate.start} ~ {this.props.work.workingDate.finish}</dd>
                </dl>
            </div>
        );
        const blank = (<div>Not</div>);

        return (
            <div>
                <h3>WorksDetail</h3>
                <div>
                    {this.props.isSelected ? detail : blank}
                </div>
            </div>
        )
    }
}

WorksDetail.defaultProps = {
    work: {
        name: '',
        url: '',
        workingDate:{
            start:0,
            finish:0
        }
    }
};