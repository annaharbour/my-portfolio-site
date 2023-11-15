// import React from 'react'
// import useToggleState from '../hooks/useToggleState';
// import {skills} from './SkillData'


// import {courses} from './CourseData'


// function Skills() {
//   const [selectedCourse, toggleSelectedCourse] = useToggleState(false);

//   return (
//     <div>
//       <div className='segment'>
//           <h1>Skills</h1>
//           {skills.map((skill) => (
//               <div key={skill.title} className="skill">
//                   <i className={skill.icon}></i>
//                   <br></br><h3>{skill.title}</h3>
//               </div>
//           ))}
//       </div>
      
//       <div className='courses'>
//         {courses.map((course) => {
//           return(
//           <div key={course.platform} className='platform'>
//             <h2 onClick={() => toggleSelectedCourse(course.platform)}>
//               {course.platform}
//             </h2>
//             {console.log('selectedcourse:', selectedCourse)}
//             {console.log('course.platform:', course.platform)}

//             {/* {selectedCourse && selectedCourse === course.platform && (
//               <ul>
//                 {course.courses.map((subCourse) => (
//                   <li key={subCourse.title} onClick={() => toggleSelectedCourse(subCourse.title)}>
//                   {subCourse.title}
//                   {subCourse.sections && (
//                     <ul>
//                       {subCourse.sections.map((section, sectionIndex) => (
//                         <li key={sectionIndex}>{section}</li>
//                       ))}
//                     </ul>
//                   )}
//                   </li>
//                 ))}
//               </ul>
//             )} */}
//           {selectedCourse[course.platform] === course.platform && (
//               <p>Here's where I'm going to render the courses</p>
//             )}
//           </div>
//           );
//         })}
//       </div>

//     </div>
//   )
// }

// export default Skills
import React from 'react';
import useToggleState from '../hooks/useToggleState';
import { skills } from './SkillData';
import { courses } from './CourseData';

function Skills() {
  const [selectedCourses, toggleSelectedCourse] = useToggleState({});

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
            <h2 onClick={() => toggleSelectedCourse(course.platform)}>
              {course.platform}
            </h2>
            {console.log('selectedCourses:', selectedCourses)}
            {console.log('course.platform:', course.platform)}

            {selectedCourses[course.platform] && (
              <ul>
                {course.courses.map((subCourse) => (
                  <li key={subCourse.title} onClick={() => toggleSelectedCourse(subCourse.title)}>
                    {subCourse.title}
                    {subCourse.sections && (
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
