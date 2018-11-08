import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TopicForm from './TopicForm';
import CoeffForm from './CoeffForm';
import CandidatesForm from './CandidatesForm';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Choose voting topic', 'Set coefficients', 'Add candidates'];
}


class VotingForm extends React.Component {
    state = {
      activeStep: 0,
      formData: {
        topic: '',
        dateStart: '',
        dateEnd: '',
        votersPercent: '',
      }
    };

    stepToComponentMap = {
      0: <TopicForm onChange={(event) => this.handleInputChange(event, 'topic')}/>,
      1: <CoeffForm/>,
      2: <CandidatesForm/>,
    }

    handleInputChange = (event, inputName) => {
      event.preventDefault();
      this.setState({
        [inputName]: event.target.value,
      })
    }

    handleNext = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep + 1,
      });
    };

    handleBack = () => {
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    };

    render() {
      const { classes } = this.props;
      const steps = getSteps();
      const { activeStep } = this.state;

      return (
        <div className={classes.root}>
          <Stepper activeStep={activeStep}>
            {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <Typography className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
            ) : (
              <div>
                {stepToComponentMap[activeStep] || 'Unknown step'}
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
}

export default withStyles(styles)(VotingForm);
