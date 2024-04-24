import { useWindowDimensions, WindowDimensions } from "../Hooks.tsx";
import { ReactElement } from "react";

function HeroBackground(): ReactElement {
  const { width, height }: WindowDimensions = useWindowDimensions();
  const length: number = (width / 12) * (height / 12);

  let text: string = "";
  for (let i: number = 0; i < length; i++) {
    text += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }

  return (
    <div className="code-background" aria-hidden="true" lang="zxx">
      {text}
    </div>
  );
}

export default HeroBackground;
