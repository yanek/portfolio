import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

SocialMedia.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

function SocialMedia({ name, url, icon }) {
  return (
    <div className="socials-item">
      <FontAwesomeIcon icon={icon} />
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
}

export default SocialMedia;
