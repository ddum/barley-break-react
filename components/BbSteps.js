import React, { PropTypes } from 'react';

const BbSteps = ({ steps }) => (
      <span className="bb__steps">{steps}</span>
);

BbSteps.propTypes = {
  steps: PropTypes.number.isRequired,
};

export default BbSteps;
