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

const LoginActivity = ({ authActivity, classes, languageText }) => (
  <Fragment>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {
            languageText.loginHeaders.map(title => <DataCell>{title}</DataCell>)
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {authActivity.map((activity) => {
          return (
            <TableRow key={activity._id}>
              <DataCell numeric>{moment(activity.date).format('MMMM Do YYYY, h:mm:ss a')}</DataCell>
              <DataCell numeric>{activity.ip}</DataCell>
              <DataCell numeric>{activity.browser}</DataCell>
              <DataCell numeric>{activity.os}</DataCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Fragment>
);

export default withStyles(styles)(LoginActivity);
