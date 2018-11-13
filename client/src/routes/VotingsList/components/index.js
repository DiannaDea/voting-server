import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import moment from 'moment';
import Button from '@material-ui/core/Button';

const VotingsList = ({ votingsNew, votingsRecent }) => {
  console.log('HERE', votingsNew, votingsRecent);
  return (
    <Fragment>
      <List>
        {
          (votingsNew.length && votingsRecent.length)
            ? ([
              ...votingsNew,
              ...votingsRecent,
            ].map(({
              _id, topic, dateStart, dateEnd, status,
            }) => {
              const dateFrom = moment(dateStart).format('MMMM Do YYYY');
              const dateTo = moment(dateEnd).format('MMMM Do YYYY');

              return (
                <ListItem key={_id}>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary={topic} secondary={`${dateFrom} - ${dateTo}`} />
                  {
                    (status === 'finished')
                      ? (
                        <Button
                          variant='contained'
                          color='primary'
                        >
                          Results
                        </Button>
                      )
                      : null
                  }
                </ListItem>
              );
            }))
            : null
        }
      </List>
    </Fragment>
  );
};

export default VotingsList;
