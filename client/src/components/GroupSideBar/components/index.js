import React, { Component } from 'react';


class GroupSideBar extends Component {
    componentDidMount() {
        const { getUserGroups } = this.props;
        getUserGroups('1');
    }

    render() {
        return (
            <h1>Group Side Bar</h1>
        );
    }
}

export default GroupSideBar;
