import { ReactElement } from "react";
import Markdown from "react-markdown";
import { useLocaleContext } from "../Hooks.tsx";
import reHypeRaw from "rehype-raw";

type Props = {
  textId: string;
};

function LocalizedText({ textId }: Props): ReactElement {
  const ctx = useLocaleContext();
  return (
    <Markdown
      disallowedElements={["p"]}
      unwrapDisallowed={true}
      rehypePlugins={[reHypeRaw]}
    >
      {ctx.locale.getText(textId)}
    </Markdown>
  );
}

export default LocalizedText;
