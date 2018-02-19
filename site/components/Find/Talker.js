import React, { Component } from 'react'
import { Grid, Container, Button, Menu, Dropdown, Icon, Card, Column, Modal, Image, Divider } from 'semantic-ui-react'
import Navbar from '../Core/Navbar'
import axios from '../../lib/axios'

class ListFriendTalker extends Component {
    state = {
        open: false,
        talkers: []
    }

    async componentWillMount() {
        const talkers = await axios.get('/user/').then(data => data.data)
        this.setState({
            talkers
        })
      }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>
            <Navbar />
            <Container>
                <Grid.Column>
                    <Button.Group color='blue' attached='top' buttons={['Filter', 'Random', 'Friend']} />
                </Grid.Column>
            </Container>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            {
                                this.state.talkers.map((talker, index) => (
                                    <Card fluid key={index}>
                                        <Card.Content>
                                            <Image as='img' src='https://image.flaticon.com/icons/svg/371/371669.svg' size='mini' circular />
                                            <Card.Header as='a'>
                                                { talker.displayName }
                                            </Card.Header>
                                            <Card.Description>
                                                <b>Level:</b> { talker.level } | <b>Speech Hours:</b> { talker.speechHours }
                                            </Card.Description>
                                            <div>
                                                <Button.Group floated='right' vertical>
                                                    <Button basic color='blue' content='Add Friend' />
                                                    <Divider hidden />
                                                    <Button basic color='olive' onClick={this.show('tiny')} content='Request' />
                                                </Button.Group>

                                                <Modal size={size} open={open} onClose={this.close}>
                                                    <Modal.Header>Waiting for request</Modal.Header>
                                                    <Modal.Content>
                                                        <Image.Group size='tiny' circular>
                                                            <Image as='img' src='https://image.flaticon.com/icons/svg/371/371706.svg' />
                                                            <Image as='img' src='https://image.flaticon.com/icons/svg/371/371651.svg' />
                                                        </Image.Group>
                                                        <p>Kate calling Martin...</p>
                                                    </Modal.Content>
                                                    <Modal.Actions>
                                                        <Button basic color='red' onClick={this.close} content='Cancle' />
                                                    </Modal.Actions>
                                                </Modal>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                ))
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
        )
    }
}

export default ListFriendTalker
