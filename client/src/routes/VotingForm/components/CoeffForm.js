import React, {Fragment, Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class CoeffForm extends Component {
    state = {
        coeffCounter: 0,
    };

    addCoefficientForm = () => {
        const {coeffCounter} = this.state;

        this.setState({
            coeffCounter: coeffCounter+1,
        })
    };

    getCoeffForm = (index) => (
        <Fragment>
            <TableRow key={index}>
                       <TableCell component="th" scope="row">
                            {index}
                        </TableCell>
                        <TableCell>
                            <TextField
                                label='Name'
                            />
                        </TableCell>
                        <TableCell numeric>
                            <TextField
                                label='Cost'
                            />
                        </TableCell>
                        <TableCell numeric>
                            <TextField
                                label='Question'
                            />
                        </TableCell>
                    </TableRow>
            </Fragment>
    );

    getCoeffFormArr = () => {
        const { coeffCounter } = this.state;

        let counter = 1; 
        const coeffForms = [];

        while (counter <= coeffCounter + 1) {
            coeffForms.push(this.getCoeffForm(counter));
            counter++;
        }
        return coeffForms;
    };

    render() {
        const coeffForms = this.getCoeffFormArr();

        return (
            <Fragment>
                <Table>
                <TableBody>{ coeffForms }</TableBody>
            </Table>
                <Button onClick={this.addCoefficientForm}>Add coefficcient</Button>
            </Fragment>
        )
    }
}

export default CoeffForm;