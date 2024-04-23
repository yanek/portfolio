import { Fragment, useContext } from 'react';
import Markdown from 'react-markdown';
import { LocaleContext } from './App';
import { PropTypes } from 'prop-types';

LocalizedText.propTypes = {
  textId: PropTypes.string
};

/**
 * @param {{textId: string}} props 
 * @returns {ReactElement}
 */
function LocalizedText({textId}) {
  const ctx = useContext(LocaleContext);
  return <Markdown components={{p: Fragment}}>{ctx.locale.getText(textId)}</Markdown>;
}

export default LocalizedText;
