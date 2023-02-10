import React from 'react'
import {skills} from './SkillData'
import { codecademy } from './CourseData'
import { udemy } from './CourseData'
import { freecodecamp } from './CourseData'
import {books} from './CourseData'

function Skills() {
  return (
    <div>
      <div className='segment'>
          <h1>Skills</h1>
          {skills.map((skill) => (
              <div key={skill.title} className="skill">
                  <i className={skill.icon}></i>
                  <br></br><h3>{skill.title}</h3>
              </div>
          ))}
      </div>
      
      <div className='courses'>
      
      
        <div className='platform'>
          <h2>Books</h2>
          {books.map((book) => (
                <div key={book.title} className="book">
                    <h3>{book.title}</h3>
                    <h6>{book.author}</h6>
                </div>
            ))}
        </div>
        <div className='platform'>
        <h2>Codecademy</h2>
          {codecademy.map((course) => (
                <div key={course.title} className="course">
                    <h3>{course.title}</h3>
                </div>
            ))}
        </div>
        <div className='platform'>
        <h2>Udemy</h2>
          {udemy.map((course) => (
                <div key={course.title} className="course">
                    <h3>{course.title}</h3>
                    <h6>{course.instructors}</h6>
                </div>
              ))}
        </div>
        <div className='platform'>
        <h2>FreeCodeCamp</h2>
          {freecodecamp.map((course) => (
                <div key={course.title} className="course">
                    <h3>{course.title}</h3>
                </div>
            ))}
        </div>
      </div>
    </div>

  )
}

export default Skills