import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';

const filters = ["All", "Websites", "Flayers", "Business Cards"];

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <Toolbar filters={filters}/>
      <ProjectList/>
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;