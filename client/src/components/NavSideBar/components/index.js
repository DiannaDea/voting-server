import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { Badge } from 'reactstrap';

const GroupContainer = styled.div`
    width: 100%;
    padding: 6% 4% 0 4%;
`;

const NavList = styled(List)`
    padding-top: 0px !important;
`;

const ItemText = styled(ListItemText)`
    padding: 0 !important;
`;

const SubItemText = styled(ListItemText)`
    padding-left: 30px !important;
`;

class NavSideBar extends Component {
    state = {
        openNew: true,
        openRecent: false,
    };

    toggleVotings = (type) => {
        (type === 'new')
            ? this.setState(state => ({ openNew: !state.openNew }))
            : this.setState(state => ({ openRecent: !state.openRecent }))
    };

    componentDidUpdate(prevProps) {
        const {
            getNewVotings, getRecentVotings, curGroupId, userId,
        } = this.props;

        if (prevProps.curGroupId !== curGroupId) {
            getNewVotings(userId, curGroupId);
            getRecentVotings(userId, curGroupId);

            if(!this.state.openNew) this.toggleVotings('new');
            if(this.state.openRecent) this.toggleVotings('recent');
        }
    }

    chooseArrowForCollapse = (isOpen) => {
        return (isOpen)
            ? <ExpandLess />
            : <ExpandMore />
    };

    getVotingsForRender = (votings) => {
        return (votings && votings.length)
            ? votings.map(({ topic }) => (
                <ListItem button>
                    <SubItemText inset primary={`# ${topic}`} />
                </ListItem>))
            : null
    };

    render() {
        const { votingsNew, votingsRecent, groups, curGroupId } = this.props;
        const currentGroup = groups.find((group) => group._id === curGroupId);

        return (
            <React.Fragment>
                <GroupContainer>
                    <h2>{ (currentGroup) ? currentGroup.name : '' }</h2>
                    <h5>Diana Baburina</h5>
                    <hr/>
                </GroupContainer>
                <NavList>
                    <ListItem button onClick={this.toggleVotings.bind(this, 'new')}>
                        <ItemText inset primary='New votings' />
                        <Badge color="primary">
                            {
                                (votingsNew && votingsNew.length > 0)
                                    ? `+ ${votingsNew.length}`
                                    : 0
                            }
                            </Badge>
                    </ListItem>
                    <Collapse in={this.state.openNew} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            { this.getVotingsForRender(votingsNew) }
                        </List>
                    </Collapse>
                    <ListItem button onClick={this.toggleVotings.bind(this, 'recent')}>
                        <ItemText inset primary='Recent votings' />
                        {this.chooseArrowForCollapse(this.state.openRecent)}
                    </ListItem>
                    <Collapse in={this.state.openRecent} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            { this.getVotingsForRender(votingsRecent) }
                        </List>
                    </Collapse>
                    <ListItem button>
                        <ItemText inset primary='All votings' />
                    </ListItem>
                    <ListItem button>
                        <ItemText inset primary='Group members' />
                    </ListItem>
                </NavList>
            </React.Fragment>
        );
    }
}

export default NavSideBar;
