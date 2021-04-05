import { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    // console.log("this.state.contacts",this.state.contacts)
    const sameName = this.state.contacts.some(item => item.name === name);
    console.log('sameName', sameName);

    if (sameName) {
      window.alert(`LocalHost:3000 says ${name} is already in contact`);
      return;
    }
    let contact = {
      name,
      number: number,
      id: shortid.generate(),
    };

    this.setState(preState => {
      return {
        contacts: [contact, ...preState.contacts],
      };
    });
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { name, filter } = this.state;
    const ContactFormFilter = this.state.filter.toLowerCase();
    const filterNamePhoneBook = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(ContactFormFilter),
    );

    return (
      <div>
        <div title="Phonebook">
          <ContactForm value={name} onSubmit={this.addContact} />
        </div>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList
          onDeleteContact={this.deleteContact}
          contacts={filterNamePhoneBook}
        />{' '}
      </div>
    );
  }
}

export default App;
