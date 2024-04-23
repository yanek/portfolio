import PropTypes from 'prop-types';
import LocalizedText from '../LocalizedText';

SkillSet.propTypes = {
  titleTextId: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

function SkillSet({ titleTextId, skills }) {
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
