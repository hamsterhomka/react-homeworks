import React from 'react';
import PropTypes from 'prop-types';
import './ProjectList.css';

const ProjectList = (props) => {
  const {projects} = props;

  return (
    <div className={'project-list'}>
      {/* Тут не знаю какой key сделать чтобы он был уникальным, т. к. img повторяется, а id не дано */}
      {projects.map(project => <img className={'project-list__img'} src={project.img} alt=""/>)}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;