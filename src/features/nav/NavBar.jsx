import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu inverted fixed='tup'>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo' style={{marginRight: 15}} />
        </Menu.Item>
        <Menu.Item name='Events' />
        <Menu.Item>
          <Button positive inverted content='Crete Event' />
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
