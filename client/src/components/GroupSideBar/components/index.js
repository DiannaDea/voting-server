import React, { Component } from 'react';
import {
  GroupSideBarContainer,
  CircleGroup,
  CircleGroupShadow,
  CircleGroupText,
} from './styled';

class GroupSideBar extends Component {
  componentDidMount() {
    const { getUserGroups, userId } = this.props;
    getUserGroups({ userId });
  }

    changeCurrentGroup = (newCurGroupId) => {
      const { changeCurrentGroup } = this.props;
      changeCurrentGroup({ newCurGroupId });
    };


    render() {
      const { groups, curGroupId } = this.props;
      return (
        <GroupSideBarContainer>
          {
            (groups && groups.length)
              ? groups.map(({ _id, name }) => (
                <CircleGroup
                  onClick={() => this.changeCurrentGroup(_id)}
                  key={_id}
                >
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
