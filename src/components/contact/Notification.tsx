import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, MouseEvent, ReactElement } from "react";

interface Props {
  type: "text" | "success" | "error";
  onClose: (e: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}

function Notification({
  type = "text",
  onClose,
  children,
}: Props): ReactElement {
  return (
    <div className={`notify notify-${type}`}>
      <a className="close" onClick={onClose}>
        <FontAwesomeIcon icon={faX} />
      </a>
      <p>{children}</p>
    </div>
  );
}

export default Notification;
