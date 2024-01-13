import React from 'react'
import './Skills.css'
const Skills = ({skillsData,image4}) => {
  return (
    <div>     
    <div className="skills-container">
            {skillsData.map((data, index) => (
                <div key={index} className="skill-category">
                    <h3>{data.category}:</h3>
                    <ul>
                        {data.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
            
        </div>
        {/* <img src={image4} alt="Skills Icon" />    */}
        </div>
  )
}

export default Skills
