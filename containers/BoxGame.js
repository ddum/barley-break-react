import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BBActions from '../actions/BBActions';

import RestartButton from '../components/RestartButton';
import BbSteps from '../components/BbSteps';
import BbCell from '../components/BbCell';

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
    console.log(this.props);
    const { state, actions } = this.props;
    return (
      <div className={classNames('bb', 'demo-card-square', 'mdl-card', 'mdl-shadow--2dp')}>
        <div className={classNames('mdl-card__title', 'mdl-color--indigo')}>
          <h2 className={classNames('mdl-card__title-text', 'mdl-color-text--white')}>Barley-Break</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {
            state.map.map(row =>
              row.map(number =>
                <BbCell number={number}/>
              )
            )
          }
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <RestartButton actions={actions}/>
          <BbSteps steps={state.steps}/>
        </div>
        <div className="mdl-card__menu">
          <button className={classNames('mdl-button', 'mdl-button--icon', 'mdl-color-text--white')}>
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>
    );
  }

  handleKeyUp(e) {
    e.preventDefault();
    var idKey = e.which;
    if([37, 38, 39, 40].findIndex(x => x == idKey) != -1){
      this.props.actions.clickKey(idKey);
    }
  }
}

function mapState(state) {
  return {
    state: state.barleyBreak
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(BBActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(BoxGame);
