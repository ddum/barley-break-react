import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import BoxGame              from './BoxGame';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BoxGame />
      </Provider>
    );
  }
}
