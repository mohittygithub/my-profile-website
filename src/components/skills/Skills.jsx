import React from 'react'
import PageHeader from '../pageHeader/PageHeader'
import classes from './Skills.module.css'
import codeThinking from '../../images/undraw_Code_thinking_re_gka2.svg'

const Skills = () => {
  const listTitleStyle = {
    fontWeight: 900,
    color: '#9B1FE8',
    marginBottom: '4px',
  }
  const frontEndSkills = (
    <ul>
      <li style={listTitleStyle}>FRONTEND</li>
      <li>ReactJs - Redux - HTML5 - CSS3</li>
    </ul>
  )
  const backEndSkills = (
    <ul>
      <li style={listTitleStyle}>BACKEND</li>
      <li>Java - NodeJS - SQL - MongoDB</li>
      <li>Spring Boot - Express - REST</li>
    </ul>
  )

  const otherSkills = (
    <ul>
      <li style={listTitleStyle}>OTHER</li>
      <li>Git - JSON - XML</li>
      <li>Azure - Heroku - Netlify - Firebase</li>
    </ul>
  )

  const totalSkills = [frontEndSkills, backEndSkills, otherSkills]
  return (
    <div className={classes.skills} id='skills'>
      <PageHeader title={'What about the skills?'} />
      <p>
        These are some of the skills I have aquired while working on projects
        personally and officially. I got the chance to put my hands on many
        technologies and some serious functionalities like integrations while
        working with my current employer. These are some skills I feel
        comfortable in..
      </p>
      <div className={classes.container}>
        <img src={codeThinking} alt='code thinking' />
        {totalSkills.map((skill) => {
          return <div className={classes.list}>{skill}</div>
        })}
      </div>
    </div>
  )
}
export default Skills
