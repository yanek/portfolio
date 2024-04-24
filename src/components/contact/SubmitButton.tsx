import { useLocaleContext } from "../Hooks.tsx";
import { ReactElement } from "react";
import { Locale } from "../LocaleContext.tsx";

interface Props {
  isBusy: boolean;
}

function SubmitButton({ isBusy }: Props): ReactElement {
  const l: Locale = useLocaleContext().locale;
  const progress: ReactElement | null = isBusy ? <progress /> : null;

  return (
    <div className="button-wrapper">
      <button type="submit">{l.getText("Contact_Send")}</button>
      {progress}
    </div>
  );
}

export default SubmitButton;
