import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactElement } from "react";

interface Props {
  name: string;
  url: string;
  icon: IconProp;
}

function SocialMedia({ name, url, icon }: Props): ReactElement {
  return (
    <div className="socials-item">
      <FontAwesomeIcon icon={icon} />
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
}

export default SocialMedia;
