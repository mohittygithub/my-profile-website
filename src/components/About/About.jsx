import React from 'react'
import PageHeader from '../pageHeader/PageHeader'
import classes from './About.module.css'
import me from '../../images/profile2.jpg'

const About = () => {
  return (
    <div className={classes.aboutme} id='about'>
      <PageHeader title={'About Me'} />
      <div className={classes.container}>
        <div className={classes.text}>
          <h2>Hi! I'm Mohit Tyagi</h2>
          <p>
            I am a full stack developer currently working in iBirds Software
            Services Pvt. Ltd, Ajmer, India. I have worked in many projects
            including technologies like Java, Node Js, React JS, LWC, HTML, CSS,
            Salesforce, PostgreSQL, MySQL, MongoDB, Azure, Hiroku, Firebase and
            what not
            <span style={{ fontSize: '100%' }}>&#128517;</span>.
          </p>
          <br />
          <p>
            I like to learn about new technologies. I LOVE to play online games
            like Lineage2 and Elder Scrolls Online.
          </p>
        </div>
        <div className={classes.photo}>
          <img className={classes.me} src={me} alt='me' />
        </div>
      </div>
    </div>
  )
}
export default About
