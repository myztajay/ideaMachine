import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

const ProjectCard = ({title, description, technologies}) =>{
  return(
    <Card className='small'
      header={<CardTitle image='./compare2.jpg'>{title}</CardTitle>}
      actions={[<a href='#'>This is a Link</a>]}>
      {description}
    </Card>
  )
}

export default ProjectCard

