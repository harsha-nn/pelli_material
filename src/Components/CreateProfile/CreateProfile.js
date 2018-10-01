import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from './Step1';
import Step2 from "./Step2";
import Step3 from './Step3';


function getSteps() {
    return ['Your Details', 'Your Details Continued', 'Preferences'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return 'Uknown stepIndex';
    }
  }

class CreateProfile extends React.Component   {
    state = {
        activeStep: 0,
      };
    
      handleNext = () => {
        const { activeStep } = this.state;
        (this.state.activeStep === 2)
        ? this.props.history.push('/Dashboard')
        :this.setState({activeStep: activeStep + 1})
      };
    
      handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
          activeStep: activeStep - 1,
        });
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };

    render() {
        // const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
    
        return (
          <div>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {this.state.activeStep === steps.length ? (
                <div>
                  <Typography >All steps completed</Typography>
                  <Button onClick={this.handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <Typography >{getStepContent(activeStep)}</Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      
                    >
                      Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.handleNext}>
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

export default CreateProfile;