import React, { Fragment, Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';

class GroupMembers extends Component {
  componentDidMount() {
    const { getMembers, match } = this.props;
    const { id } = match.params;

    getMembers({
      groupId: id,
    });
  }

  render() {
    const { members, languageText } = this.props;
    return (
      <Fragment>
        <h5>{languageText.title}</h5>
        {
          (!members || !members.length)
            ? <p>{languageText.noMembers}</p>
            : (
              <List>
                {
                  members.map((member, index) => {
                    const {
                      firstName, lastName, nickname, _id,
                    } = member;
                    return (
                      <Fragment key={_id}>
                        <ListItem>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                          <ListItemText primary={`${firstName} ${lastName}`} secondary={`@${nickname}`} />
                        </ListItem>
                        { (index !== members.length - 1) ? (
                          <Divider inset component='li' />
                        ) : null}
                      </Fragment>
                    );
                  })
                }
              </List>
            )
        }

      </Fragment>
    );
  }
}

export default GroupMembers;
