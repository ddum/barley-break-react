import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


class BbCell extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.number !== this.props.number;
  }

  render(){
    const { number } = this.props;

    return(
      <div className={
          classNames({
            'bb__cell': true,
            'bb__cell_empty': !number
          })
        }>
        { number }
      </div>

    );
  }
}

BbCell.propTypes = {
  number: PropTypes.number.isRequired,
};

export default BbCell;
