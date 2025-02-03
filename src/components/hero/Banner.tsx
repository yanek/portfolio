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
      Disponible de suite pour un contrat de professionnalisation en alternance de 12 mois.
      <br />
      N&apos;hésitez-pas à <a href="#contact">me contacter</a> !
    </div>
  );
}

export default Banner;
