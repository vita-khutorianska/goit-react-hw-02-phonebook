import { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [],
    name: '',
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
  render() {
    const { name, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterNamePhoneBook = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <ContactForm value={name} onSubmit={this.addContact} />

        <Filter value={filter} onChange={this.filterChange} />
        <ContactList
          onDeleteContact={this.deleteContact}
          contacts={filterNamePhoneBook}
        />
      </div>
    );
  }
}

export default App;
