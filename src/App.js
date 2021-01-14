import React, { Component } from 'react';
import shortid from 'shortid';

import Form from './components/Form';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';

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
    const nameId = shortid.generate();
    const duplicate = this.state.contacts.find(
      contact => contact.name === name,
    );

    duplicate
      ? alert(`${name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, { name: name, id: nameId, number: number }],
        }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter),
    );
  };

  changeFiltr = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const { filter } = this.state;
    const foundName = this.filterContact();

    return (
      <div>
        <h3>Phonebook</h3>
        <Form onSubmit={this.addContact} />
        <h3>Contacts</h3>
        <Filter value={filter} onChange={this.changeFiltr} />
        <ContactsList contacts={foundName} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
