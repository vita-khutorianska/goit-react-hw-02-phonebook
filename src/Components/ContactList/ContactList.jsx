import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ onDeleteContact, contacts }) => (
  <div className={styles.contact}>
    ContactList
    <ul className={styles.contact_list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={styles.contact_item} key={id}>
            <span className={styles.contact_item_name}>{name}:</span>
            <span className={styles.contact_item_tel}>{number}</span>{' '}
            <button
              type="submit"
              className={styles.contact_btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>{' '}
  </div>
);
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
export default ContactList;
