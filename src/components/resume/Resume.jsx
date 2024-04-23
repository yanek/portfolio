import LocalizedText from '../LocalizedText';
import { useId } from 'react';
import resumeFile from '../../assets/resume.pdf';
import signature from '../../assets/signature.svg';
import './resume.scss';

function Contact() {
  const titleId = useId();

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
          <button onClick={() => window.open(resumeFile, '_blank')}>
            <LocalizedText id={titleId} textId="Resume_Get" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
