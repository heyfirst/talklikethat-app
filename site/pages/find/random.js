import React from 'react'
import { Container, Button, Menu, Dropdown } from 'semantic-ui-react'

const Random = () => (
  <div>
    {/* Element */}
    <Menu borderless >
      <Container>
        <Menu.Item header as='h3'>Project Name</Menu.Item>
        <Menu.Item as='a'>Blog</Menu.Item>
        <Menu.Item as='a'>Articles</Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown text='Dropdown' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
    <Container>
      
      <Button>ClickME</Button>
    </Container>

    {/* Style */}
    <style jsx>{`

      .top {
        padding-top: 50px;
      }

    `}</style>
  </div>
)

export default Random