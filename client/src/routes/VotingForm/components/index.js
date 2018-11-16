import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import TopicForm from './TopicForm';
import ArrayOfObjects from './ArrayOfObjects';

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

class VotingForm extends React.Component {
    state = {
      activeStep: 0,
      voting: {
        topic: '',
        dateStart: moment(new Date()).format('YYYY-MM-DDTkk:mm'),
        dateEnd: '',
        votersPercent: '',
      },
      weights: [],
      candidates: [],
    };

    steps = ['Choose voting topic', 'Set coefficients', 'Add candidates'];

    changeArrayValue = namespace => index => inputName => ({ target: { value } }) => this.setState((state) => {
      const newNamespaceValue = [
        ...state[namespace].slice(0, index),
        { ...state[namespace][index], [inputName]: value },
        ...state[namespace].slice(index + 1),
      ];

      return {
        ...state,
        [namespace]: newNamespaceValue,
      };
    });

    addItemToArray = (namespace, initialValue) => () => this.setState((state) => {
      return {
        ...state,
        [namespace]: [...state[namespace], initialValue],
      };
    });

    objectChange = namespace => inputName => ({ target: { value } }) => this.setState(state => ({
      ...state,
      [namespace]: {
        ...state[namespace],
        [inputName]: value,
      },
    }));

    stepForward = () => {
      const {
        activeStep, voting, weights, candidates,
      } = this.state;
      const {
        createVoting, groupId, userId, lastVoting, addCandidates,
      } = this.props;

      if (activeStep === 1) {
        createVoting({
          groupId,
          creatorId: userId,
          coefficients: weights.map((w, index) => ({ _id: index, ...w })),
          ...voting,
        });
      }

      if (activeStep === 2 && lastVoting && lastVoting.data) {
        addCandidates({
          candidates: candidates.map(candidate => ({
            votingId: lastVoting.data._id,
            ...candidate,
          })),
        });
      }

      this.setState({
        activeStep: activeStep + 1,
      });
    };

    stepBack = () => {
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    };

    render() {
      const { state, props, steps } = this;
      const { classes, language } = props;

      const { activeStep } = state;

      const stepToComponentMap = [
        <TopicForm
          onChange={this.objectChange('voting')}
          voting={state.voting}
          language={language}
        />,
        <ArrayOfObjects
          onChange={this.changeArrayValue('weights')}
          addItemToArray={this.addItemToArray('weights', { name: '', cost: '', question: '' })}
          array={state.weights}
          fields={[
            { label: 'Name', value: 'name' },
            { label: 'Cost', value: 'cost' },
            { label: 'question', value: 'question' },
          ]}
          buttonText='Add Weight'
        />,
        <ArrayOfObjects
          onChange={this.changeArrayValue('candidates')}
          addItemToArray={this.addItemToArray('candidates', { name: '', description: '' })}
          array={state.candidates}
          fields={[
            { label: 'Name', value: 'name' },
            { label: 'Description', value: 'description' },
          ]}
          buttonText='Add candidate'
        />,
      ];

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
                All steps completed - you are finished
              </Typography>
            ) : (
              <div>
                {stepToComponentMap[activeStep] || 'Unknown step'}
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.stepBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={this.stepForward}
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
