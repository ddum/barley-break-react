import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BBActions from '../actions/BBActions';

import RestartButton from '../components/RestartButton';
import BbSteps from '../components/BbSteps';

class BoxGame extends Component {
  render () {
    const { steps, actions } = this.props;
    console.log(actions);
    return (
      <div className={classNames('bb', 'demo-card-square', 'mdl-card', 'mdl-shadow--2dp')}>
        <div className={classNames('mdl-card__title', 'mdl-color--indigo')}>
          <h2 className={classNames('mdl-card__title-text', 'mdl-color-text--white')}>Barley-Break</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="bb__cell">1</div>
          <div className="bb__cell">2</div>
          <div className="bb__cell">3</div>
          <div className="bb__cell">4</div>
          <div className="bb__cell">5</div>
          <div className="bb__cell">6</div>
          <div className="bb__cell">7</div>
          <div className="bb__cell">8</div>
          <div className="bb__cell">9</div>
          <div className="bb__cell">10</div>
          <div className="bb__cell">11</div>
          <div className="bb__cell">12</div>
          <div className="bb__cell">13</div>
          <div className="bb__cell">14</div>
          <div className="bb__cell">15</div>
          <div className={classNames('bb__cell', 'bb__cell_empty')}></div>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <RestartButton actions={actions}/>
          <BbSteps steps={steps}/>
        </div>
        <div className="mdl-card__menu">
          <button className={classNames('mdl-button', 'mdl-button--icon', 'mdl-color-text--white')}>
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    steps: state.barleyBreak.steps
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(BBActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(BoxGame);
