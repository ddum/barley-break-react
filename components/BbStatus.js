import React, { PropTypes } from 'react';
import classNames from 'classnames';

const BbStatus = () => (
  <div className="mdl-dialog__overlay">
    <dialog className={classNames("mdl-dialog", "bb__status")}>
      <span>GAME OVER</span>
    </dialog>
  </div>
);

export default BbStatus;
