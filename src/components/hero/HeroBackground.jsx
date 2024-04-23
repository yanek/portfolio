import { useWindowDimensions } from '../hooks';

/**
 * @returns {ReactElement}
 */
function HeroBackground() {
  const { width, height } = useWindowDimensions();
  const length = (width / 12) * (height / 12);

  let text = '';
  for (let i = 0; i < length; i++) {
    text += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }

  return (
    <div className="code-background" aria-hidden="true" lang="zxx">
      {text}
    </div>
  );
}

export default HeroBackground;
