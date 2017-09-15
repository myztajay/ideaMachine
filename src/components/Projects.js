import React, { Component } from 'react'
import ProjectCard from '../common/ProjectCard'
import './Projects.css';
import data from '../data/data.json'

class Projects extends Component{
  constructor(props){
    super(props)
      this.state={
        projects: data.projects
    }
  }
  
  renderProjects(){
    return this.state.projects.map((project)=>{
      return <ProjectCard 
      title= {project.title} 
      description={project.description}
      technologies={project.technologies}
      />
    })
  }
  
  render(){
    return(
      <div className='main'>
        {this.renderProjects()}
      </div>
    )
  }
}

export default Projects;