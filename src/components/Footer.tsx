import { ReactElement } from "react";
import LocalizedText from "./LocalizedText.tsx";

function Footer(): ReactElement {
  return (
    <footer>
      <p>
        <a href="#top">
          <LocalizedText textId="Footer_BackToTop" />
        </a>
      </p>
      <p>
        <a
          className="secondary"
          href="https://github.com/yanek/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Source code
        </a>{" "}
        is available under the MIT License.
        <br />
        &copy;&nbsp;{new Date().getFullYear()}&nbsp;Noé Ksiazek
      </p>
    </footer>
  );
}

export default Footer;
