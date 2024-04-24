import { useId } from "react";
import LocalizedText from "../LocalizedText.tsx";
import SocialMedia from "./SocialMedia";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./contact.scss";

function Contact() {
  const titleId = useId();

  return (
    <section
      id="contact"
      aria-labelledby={titleId}
      className="section-alt-color"
    >
      <div className="section-content">
        <header>
          <h2 id={titleId}>
            <LocalizedText textId="Contact_Title" />
          </h2>
        </header>
        <p>
          <LocalizedText textId="Contact_Content" />
        </p>
        <hr />
        <ul className="socials">
          <li>
            <SocialMedia
              name="in/noe-ksiazek"
              url="https://www.linkedin.com/in/noe-ksiazek/"
              icon={faLinkedin}
            />
          </li>
          <li>
            <SocialMedia
              name="@yanek"
              url="https://github.com/yanek"
              icon={faGithub}
            />
          </li>
        </ul>
        {/* <ContactForm /> */}
      </div>
    </section>
  );
}

export default Contact;
