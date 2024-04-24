import PropTypes from "prop-types";
import { useContext } from "react";
import { LocaleState } from "../App.tsx";

SubmitButton.propTypes = {
  isBusy: PropTypes.bool.isRequired,
};

function SubmitButton({ isBusy }) {
  const l = useContext(LocaleContext).locale;
  const progress = isBusy ? <progress /> : null;

  return (
    <div className="button-wrapper">
      <button type="submit">{l.getText("Contact_Send")}</button>
      {progress}
    </div>
  );
}

export default SubmitButton;
