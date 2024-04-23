import PropTypes from 'prop-types';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Notification.propTypes = {
  type: PropTypes.oneOf(['text', 'success', 'error']),
  onClose: PropTypes.func,
  children: PropTypes.node,
};

function Notification({ type = 'text', onClose, children }) {
  return (
    <div className={`notif notif-${type}`}>
      <a className="close" onClick={onClose}>
        <FontAwesomeIcon icon={faX} />
      </a>
      <p>{children}</p>
    </div>
  );
}

export default Notification;
