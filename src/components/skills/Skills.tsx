import { ReactElement, useId } from "react";
import LocalizedText from "../LocalizedText.tsx";
import SkillSet from "./SkillSet.tsx";
import SkillIcons from "./Icons.tsx";
import "./skills.scss";

function Skills(): ReactElement {
  const titleId: string = useId();

  return (
    <section id="skills" aria-labelledby={titleId}>
      <div className="section-content">
        <header>
          <h2 id={titleId}>
            <LocalizedText textId="Skills_Title" />
          </h2>
        </header>

        <SkillSet
          titleTextId="Skills_Category_Languages"
          skills={SkillIcons.languages}
        />
        <SkillSet
          titleTextId="Skills_Category_Libraries"
          skills={SkillIcons.libs}
        />
        <SkillSet
          titleTextId="Skills_Category_Other"
          skills={SkillIcons.other}
        />
      </div>
    </section>
  );
}

export default Skills;
