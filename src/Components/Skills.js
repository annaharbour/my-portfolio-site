import React, {useState} from 'react';
import useToggleState from '../hooks/useToggleState';
import { skills } from './SkillData';
import { courses } from './CourseData';

function Skills() {
  const [selectedCourses, toggleSelectedCourse] = useToggleState({});
  const [selectedSections, toggleSection] = useToggleState();

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
        {courses.map((course) => (
          <div key={course.platform} className='platform'>
            {/* Calls onClick function to render courses for each platform */}
            <h2 onClick={() => toggleSelectedCourse(course.platform)}>
              {course.platform}
              {course.courses && (
                     <i className={`fa-solid fa-caret-${selectedCourses[course.platform] ? 'up' : 'down'}`}></i>
                    )
                  }
            </h2>
            {/* Renders courses for each platform */}
            {course.platform && selectedCourses[course.platform] && (
              <ul>
              {course.courses.map((subCourse) => (
                <li key={subCourse.title} 
                onClick={() => toggleSection(subCourse.title)}
                >
                  {subCourse.title}
                  {subCourse.sections && (
                     <i className={`fa-solid fa-caret-${selectedSections[subCourse.title] ? 'up' : 'down'}`}></i>
                    )
                  }
                  {subCourse.sections && selectedSections[subCourse.title] && (
                    <ul>
                      {subCourse.sections.map((section, sectionIndex) => (
                        <li key={sectionIndex}>{section}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
