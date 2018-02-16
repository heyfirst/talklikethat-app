import React from 'react'
import { Grid, Container, Button, Menu, Dropdown, Icon, Card, Column, Feed } from 'semantic-ui-react'

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
                            [...Array(10)].map(e => (
                                <Card fluid>
                                    <Card.Content>
                                        <Feed>
                                            <Feed.Event>
                                                <Feed.Label>
                                                <img size='mini' src='https://image.flaticon.com/icons/svg/371/371669.svg' />
                                                </Feed.Label>
                                            </Feed.Event>
                                        </Feed>
                                        <Card.Header floated='right'>Name</Card.Header>
                                        <Card.Description floated='right'>Level</Card.Description>
                                        <Button basic color='olive'>Request</Button>
                                        <Button basic color='blue'>Add Friend</Button>
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

