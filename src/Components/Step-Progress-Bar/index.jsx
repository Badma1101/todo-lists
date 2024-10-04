import React from "react";

function StepProgressBar({ steps, activeStep, setActiveStep }) {
  function handlePrevious() {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  function handleNext() {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  }

  function calaculateCurrentStepWidth() {
    return `${(100 / (steps.length - 1)) * activeStep}%`;
  }
  return (
    <div>
      <div className="step">
        {steps && steps.length > 0
          ? steps.map((stepItem, index) => (
              <div className={`step ${index <= activeStep ? 'active' :''}`} 
              style={{ width: calaculateCurrentStepWidth() }} key={index}>
                {stepItem}
              </div>
            ))
          : null}
      </div>
      <div className="step-buttons-wrapper">
        <button disabled={activeStep === 0} onClick={handlePrevious}>
          Previous Step
        </button>
        <button disabled={activeStep === steps.length - 1} onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepProgressBar;
