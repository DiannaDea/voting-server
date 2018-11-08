import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class CoeffForm extends Component {
  state = {
    weightCounter: 0,
  };

  addCoefficientForm = () => this.setState(state => ({
    weightCounter: state.weightCounter + 1,
  }))

  getCoeffForm = ({ index, onChange }) => (
    <Fragment>
      <TableRow key={index}>
        <TableCell component='th' scope='row'>
          {index}
        </TableCell>
        <TableCell>
          <TextField
            label='Name'
            onChange={onChange('name')}
          />
        </TableCell>
        <TableCell numeric>
          <TextField
            label='Cost'
            onChange={onChange('cost')}
          />
        </TableCell>
        <TableCell numeric>
          <TextField
            label='Question'
            onChange={onChange('question')}
          />
        </TableCell>
      </TableRow>
    </Fragment>
  );

    getCoeffFormArr = () => {
      const { weightCounter } = this.state;

      let counter = 1;
      const coeffForms = [];

      while (counter <= weightCounter + 1) {
        coeffForms.push(this.getCoeffForm(counter));
        counter += 1;
      }
      return coeffForms;
    };

    render() {
      const coeffForms = this.getCoeffFormArr();

      return (
        <Fragment>
          <Table>
            <TableBody><CoeffForms /></TableBody>
          </Table>
          <Button
            variant='contained'
            color='primary'
            onClick={this.addCoefficientForm}
          >
            Add coefficcient
          </Button>
        </Fragment>
      );
    }
}

export default CoeffForm;
