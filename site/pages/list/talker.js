import React from 'react'
import { Grid, Container, Button, Menu, Dropdown, Icon, Card, Column } from 'semantic-ui-react'

const ListFriendTalker = () => (
    <div>
        <Menu borderless>
            <Container>
                <Menu.Item header as='h3'><b>TalkLike</b>That</Menu.Item>

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

        <Container>
            <Grid.Column>
                <Button.Group attached='top' widths={3}>
                    <Button>Filter</Button>
                    <Button>Random</Button>
                    <Button>Friend</Button>
                </Button.Group>
            </Grid.Column>
        </Container>
        
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        {
                            [...Array(20)].map(e => (
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>KANISORN SUTHAM</Card.Header>
                                        <Card.Description>ABC</Card.Description>
                                    </Card.Content>
                                </Card>
                            ))
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div >
)

export default ListFriendTalker

