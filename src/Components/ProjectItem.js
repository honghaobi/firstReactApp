import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ProjectItem extends Component {
  deleteProject = () =>{
    this.props.onDelete(this.props.project.id);
  }
  render() {
    return (
      //can only return one div/element.
      <li className="Project">
        <strong>{this.props.project.title}</strong> :  {this.props.project.category}
        <a href = '#' onClick={this.deleteProject}> X </a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
