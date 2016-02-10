import React, { PropTypes } from 'react';
import classNames from 'classnames';

const BbCell = ({ number }) => (
  <div className={ 
        classNames({
          'bb__cell': true,
          'bb__cell_empty': !number
        })
      }>
    { number }
  </div>
)

BbCell.propTypes = {
  number: PropTypes.number.isRequired,
}

export default BbCell;
