import { Fragment, useContext } from 'react';
import Markdown from 'react-markdown';
import { LocaleContext } from './App';
import { PropTypes } from 'prop-types';
import rehypeRaw from 'rehype-raw';

LocalizedText.propTypes = {
  textId: PropTypes.string,
};

/**
 * @param {{textId: string}} props
 * @returns {ReactElement}
 */
function LocalizedText({ textId }) {
  const ctx = useContext(LocaleContext);
  return (
    <Markdown components={{ p: Fragment }} rehypePlugins={[rehypeRaw]}>
      {ctx.locale.getText(textId)}
    </Markdown>
  );
}

export default LocalizedText;
