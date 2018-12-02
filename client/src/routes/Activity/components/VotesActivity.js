import React, { Fragment } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const DataCell = styled(TableCell)`
  text-align: left !important;
`;

const VotesActivity = ({ votesActivity, classes, languageText }) => (
  <Fragment>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {
            languageText.votesHeaders.map(title => <DataCell>{title}</DataCell>)
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {votesActivity.map((activity) => {
          return (
            <TableRow key={activity._id}>
              <DataCell numeric>{moment(activity.dateVoting).format('MMMM Do YYYY, h:mm:ss a')}</DataCell>
              <DataCell numeric>{activity.votingTopic}</DataCell>
              <DataCell numeric>{activity.candidateName}</DataCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Fragment>
);

export default withStyles(styles)(VotesActivity);
