import PropTypes from 'prop-types';
import Box from 'components/Box';

export default function Notification({ message }) {
  return (
    <Box as="p" m={0} color={'muted'}>
      {message}
    </Box>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
