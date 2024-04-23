import LocalizedText from '../LocalizedText';
import { useId } from 'react';
import signature from '../../assets/signature.svg';
import './resume.scss';

function Resume() {
  const titleId = useId();
  const resumeUrl = 'https://drive.google.com/file/d/1-MSMnA3453SBtk9dtlKAu3Rh0AM-Xu_u/view';

  return (
    <section id="resume" aria-labelledby={titleId} className="section-alt-color">
      <div className="section-content">
        <header>
          <h2 id={titleId}>
            <LocalizedText textId="Resume_Title" />
          </h2>
        </header>
        <div className="resume-wrapper">
          <p>
            <LocalizedText id={titleId} textId="Resume_Whoami" />
          </p>

          <img className="signature" src={signature} alt="" />
          <button onClick={() => window.open(resumeUrl, '_blank')}>
            <LocalizedText id={titleId} textId="Resume_Get" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
