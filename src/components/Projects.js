import React, { Component } from 'react'
import ProjectCard from '../common/ProjectCard'
import './Projects.css';

class Projects extends Component{
  render(){
    return(
      <div className='main'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    )
  }
}

export default Projects;