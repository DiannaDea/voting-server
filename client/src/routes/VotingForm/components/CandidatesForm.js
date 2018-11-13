import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class CandidatesForm extends Component {
    state = {
        candidateCounter: 0,
    }

    addCandidate = () => {
        const { candidateCounter } = this.state;

        this.setState({
            candidateCounter: candidateCounter+1,
        })
    }


    getCandidateForm = (index) => (
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
                                label='Description '
                            />
                        </TableCell>
                    </TableRow>
            </Fragment>
    );

    getCandidateFormArr = () => {
        const { candidateCounter } = this.state;

        let counter = 1; 
        const candidateForms = [];

        while (counter <= candidateCounter + 1) {
            candidateForms.push(this.getCandidateForm(counter));
            counter++;
        }
        return candidateForms;
    };

    render() {
        const candidateForms = this.getCandidateFormArr();

        return (
            <Fragment>
                <Table>
                <TableBody>{ candidateForms }</TableBody>
            </Table>
                <Button 
                    variant="contained"
                    color="primary" 
                    onClick={this.addCandidate}>Add candidate</Button>
            </Fragment>
        )
    }
}

export default CandidatesForm;