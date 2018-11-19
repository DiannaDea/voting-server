import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import styled from 'styled-components';
import ImageIcon from '../../../../node_modules/@material-ui/icons/AvTimer';
import activityList from '../../../constants/activity';

const ActivityRoot = styled.div`
  width: 100%;
  height: 80vh !important;
  overflow-y: scroll
`;

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ActivityContainer extends Component {
    state = {
      expanded: null,
    };

    handleChange = panel => (event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false,
      });
    };

    render() {
      const { classes, email, languageText } = this.props;
      const { expanded } = this.state;

      return (
        <ActivityRoot>
          <h5>{languageText.title}</h5>
          {
            (email && email === 'dianababurina74@gmail.com')
              ? activityList.map((activity, index) => {
                const geoCountStr = (activity.timePeriods.length > 1) ? languageText.plural : languageText.single;

                return (
                  <ExpansionPanel expanded={expanded === `panel${index}`} onChange={this.handleChange(`panel${index}`)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>{activity.place}</Typography>
                      <Typography className={classes.secondaryHeading}>{`${activity.timePeriods.length} ${geoCountStr}, ${activity.dateFrom}`}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <List>
                        {
                          activity.timePeriods.map(timePeriod => (
                            <Fragment>
                              <ListItem>
                                <Avatar>
                                  <ImageIcon />
                                </Avatar>
                                <ListItemText primary={timePeriod.period} secondary={`${timePeriod.dateFrom} — ${timePeriod.dateTo}`} />
                              </ListItem>
                              { (index !== activity.timePeriods.length - 1) ? (
                                <Divider inset component='li' />
                              ) : null}
                            </Fragment>
                          ))
                        }
                      </List>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })
              : 'Sorry'
          }
        </ActivityRoot>
      );
    }
}


export default withStyles(styles)(ActivityContainer);
