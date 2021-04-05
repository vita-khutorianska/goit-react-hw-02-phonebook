import shortid from 'shortid';
import { Component } from 'react';
import styles from './FormPhonebook.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    // console.log(this.props);
  };

  render() {
    return (
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor={this.nameId}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameId}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Tel</span>
            <input
              className={styles.input}
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
