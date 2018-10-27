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
        const { votingsNew, votingsRecent } = this.props;
        return (
            <React.Fragment>
                <p>New votings</p>
                <ul>
                    {
                        (votingsNew && votingsNew.length)
                            ? votingsNew.map(({ topic }) => (<li>{topic}</li>))
                            : null
                    }
                </ul>
                <p>Recent votings</p>
                <ul>
                    {
                        (votingsRecent && votingsRecent.length)
                            ? votingsRecent.map(({ topic }) => (<li>{topic}</li>))
                            : null
                    }
                </ul>
            </React.Fragment>
        );
    }
}

export default NavSideBar;
