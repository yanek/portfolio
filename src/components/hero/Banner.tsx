import { ReactElement } from "react";
import { useLocaleContext } from "../Hooks.tsx";

interface Props {
  lang?: string;
}

function Banner({ lang }: Props): ReactElement | null {
  const localeState = useLocaleContext();

  if (lang && lang != localeState.locale.id) {
    return null;
  }

  return (
    <div className="information-banner">
      Actuellement à la recherche d&apos;un stage du{" "}
      <em>05&nbsp;septembre&nbsp;2024</em> au <em>25&nbsp;octobre&nbsp;2024</em>{" "}
      (8 semaines).
      <br />
      N&apos;hésitez-pas à <a href="#contact">me contacter</a> !
    </div>
  );
}

export default Banner;
