import PropTypes from 'prop-types';
import { ListItemText, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

export const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <ListItem>
      <ListItemText primary={`${name}: ${number}`} />
      <IconButton
        disabled={isLoading}
        onClick={() => deleteContact(id)}
        edge="end"
        aria-label="delete"
        size="small"
      >
        DELETE
      </IconButton>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
