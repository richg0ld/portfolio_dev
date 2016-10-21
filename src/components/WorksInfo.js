import React from 'react';

export default class WorksInfo extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <h2>{this.props.work.name}</h2>
            </div>
        );
    }
}

WorksInfo.propTypes = {
    work: React.PropTypes.object,
    onClick: React.PropTypes.func
};

WorksInfo.defaultProps = {
    work: {
        name: ''
    },
    onClick: () => new Error('Not onClick')
};