import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

const Toolbar = (props) => {
  const {filters, selected, onSelectFilter} = props;

  return (
    <ul className="toolbar">
      {filters.map(filter => <li className="toolbar__item">{filter}</li>)}
    </ul>
  );
};

Toolbar.propTypes = {};

export default Toolbar;