import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BBActions from '../actions/BBActions';
import * as types from '../constants/ActionTypes';

import RestartButton from '../components/RestartButton';
import BbSteps from '../components/BbSteps';
import BbCell from '../components/BbCell';
import BbStatus from '../components/BbStatus';

class BoxGame extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  render () {
    const { steps, gameMap, gameEnd, actions } = this.props;
    return (
      <div className={classNames('bb', 'demo-card-square', 'mdl-card', 'mdl-shadow--2dp')}>
        <div className={classNames('mdl-card__title', 'mdl-color--indigo')}>
          <h2 className={classNames('mdl-card__title-text', 'mdl-color-text--white')}>Barley-Break</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {
            gameMap.map(row =>
              row.map(number =>
                <BbCell number={number}/>
              )
            )
          }
          { (gameEnd)? <BbStatus/> : ""}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <RestartButton actions={actions}/>
          <BbSteps steps={steps}/>
        </div>
        <div className="mdl-card__menu">
          <button className={classNames('mdl-button', 'mdl-button--icon', 'mdl-color-text--white')}>
            <a href="https://github.com/ddum/barley-break-react">
              <i className={classNames('material-icons', 'github')}></i>
            </a>
          </button>
        </div>
      </div>
    );
  }

  handleKeyUp(e) {
    e.preventDefault();
    var idKey = e.which;
    if(typeof types.ARR_KEY[idKey] != 'undefined' && !this.props.gameEnd){
      this.props.actions.clickKey(idKey);
    }
  }
}

function mapState(state) {
  return {
    steps   : state.barleyBreak.steps,
    gameMap : state.barleyBreak.game.map,
    gameEnd : state.barleyBreak.gameEnd,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(BBActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(BoxGame);
