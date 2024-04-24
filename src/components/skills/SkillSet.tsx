import LocalizedText from "../LocalizedText.tsx";
import { ReactElement } from "react";

interface Props {
  titleTextId: string;
  skills: Array<{ name: string; logo: string }>;
}

function SkillSet({ titleTextId, skills }: Props): ReactElement {
  return (
    <div className="card">
      <h3 className="card-title">
        <LocalizedText textId={titleTextId} />
      </h3>
      <div className="card-content skillset-grid">
        {skills.map((skill) => {
          return (
            <div className="skill tooltip-container" key={skill.name}>
              <div className="tooltip" aria-hidden>
                {skill.name}
              </div>
              <div className="interactive-icon interactive-icon-growing">
                <img src={skill.logo} alt={skill.name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillSet;
