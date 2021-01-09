import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/createEvent'>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content='Crete Event'
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: '0.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
