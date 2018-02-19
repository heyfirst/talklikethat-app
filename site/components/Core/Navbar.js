import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <Menu borderless>
          <Container>
              <Menu.Item header as='h3'>TalkLikeThat</Menu.Item>
              <Menu.Menu position='right'>
                  <Menu.Item as='a'>RANKING</Menu.Item>
                  <Menu.Item as='a'><Icon name='search' />FIND TALKER</Menu.Item>
                  <Menu.Item as='a'><Icon name='alarm' /></Menu.Item>
                  <Dropdown text='Kate' pointing className='link item'>
                      <Dropdown.Menu>
                          <Dropdown.Item>My Profile</Dropdown.Item>
                          <Dropdown.Item>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </Menu.Menu>
          </Container>
      </Menu>
    )
  }
}