import {  type SkillsProps as SkillsPropsType } from "./skills.types";

export const Skills = (props: SkillsPropsType) => {
    const {skills} = props;
    return (
        <div>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};
