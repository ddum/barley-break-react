import React, { PropTypes } from 'react';
import classNames from 'classnames';

const RestartButton = ({ actions }) => (
  <a className={classNames('mdl-button', 'mdl-button--colored', 'mdl-button--raised')} onClick={actions.restartGame}>
    Restart
  </a>
);

RestartButton.propTypes = {
  actions: PropTypes.object.isRequired
};

export default RestartButton;
