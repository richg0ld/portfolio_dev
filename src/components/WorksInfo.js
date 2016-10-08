import React from 'react';

export default class WorksInfo extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <h2>{this.props.work.name}</h2>
                {/*<p><a href={this.props.work.url}>{this.props.work.url}</a></p>*/}
                {/*<dl>*/}
                    {/*<dt>작업기간</dt>*/}
                    {/*<dd>{this.props.work.workingDate.start} ~ {this.props.work.workingDate.finish}</dd>*/}
                {/*</dl>*/}
            </div>
        );
    }
}