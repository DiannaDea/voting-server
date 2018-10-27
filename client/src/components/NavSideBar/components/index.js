import React, { Component } from 'react';

class NavSideBar extends Component {
    componentDidUpdate(prevProps) {
        const {
            getNewVotings, getRecentVotings, curGroupId, userId,
        } = this.props;

        if (prevProps.curGroupId !== curGroupId) {
            getNewVotings(userId, curGroupId);
            getRecentVotings(userId, curGroupId);
        }
    }

    render() {
        return (
            <h1>Nav Side bar</h1>
        );
    }
}

export default NavSideBar;
