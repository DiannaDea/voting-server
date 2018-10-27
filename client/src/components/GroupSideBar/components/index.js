import React, { Component } from 'react';
import {
    GroupSideBarContainer,
    CircleGroup,
    CircleGroupShadow,
    CircleGroupText
} from './styled';

class GroupSideBar extends Component {
    changeCurrentGroup = (newCurGroupId) => {
        const { changeCurrentGroup, } = this.props;
        changeCurrentGroup(newCurGroupId);
    };

    componentDidMount() {
        const { getUserGroups } = this.props;
        getUserGroups('1');
    }

    render() {
        const { groups, curGroupId } = this.props;
        return (
            <GroupSideBarContainer>
                {
                    (groups && groups.length)
                        ? groups.map(({ _id, name }) => (
                            <CircleGroup
                                onClick={this.changeCurrentGroup.bind(this, _id)}
                                key={_id}>
                                { (_id !== curGroupId) ? <CircleGroupShadow /> : null}
                                <CircleGroupText>{name}</CircleGroupText>
                            </CircleGroup>
                        ))
                        : null
                }
            </GroupSideBarContainer>
        );
    }
}

export default GroupSideBar;
