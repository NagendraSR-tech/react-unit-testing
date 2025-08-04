import { useEffect, useState } from 'react'
import { type SkillsProps as SkillsPropsType } from './skills.types'

export const Skills = (props: SkillsPropsType) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1000)
  }, [])

  return (
    <div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}> Login </button>
      )}
    </div>
  )
}
