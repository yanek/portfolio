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
      Actuellement à la recherche d&apos;un{" "}
      <em>contrat de professionnalisation</em> à partir du mois de{" "}
      <em>janvier 2025</em>.
      <br />
      N&apos;hésitez-pas à <a href="#contact">me contacter</a> !
    </div>
  );
}

export default Banner;
