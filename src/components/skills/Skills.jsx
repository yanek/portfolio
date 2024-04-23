import { useId } from 'react';
import LocalizedText from '../LocalizedText';
import SkillSet from './SkillSet';
import SkillTables from './tables';
import './skills.scss';

function Skills() {
  const titleId = useId();

  return (
    <section id="skills" aria-labelledby={titleId}>
      <div className="section-content">
        <header>
          <h2 id={titleId}>
            <LocalizedText textId="Skills_Title" />
          </h2>
        </header>

        <SkillSet titleTextId="Skills_Category_Languages" skills={SkillTables.languages} />
        <SkillSet titleTextId="Skills_Category_Libraries" skills={SkillTables.libs} />
        <SkillSet titleTextId="Skills_Category_Other" skills={SkillTables.other} />
      </div>
    </section>
  );
}

export default Skills;
