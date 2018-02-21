import React, { Component } from 'react'
import { Grid, Container, Button, Menu, Dropdown, Icon, Card, Column, Modal, Image, Divider } from 'semantic-ui-react'
import Navbar from '../Core/Navbar'
import axios from '../../lib/axios'
import withFirebase from '../../lib/withFirebase'

class ListFriendTalker extends Component {
    state = {
        callingOpen: false,
        requestOpen: false,
        talkers: [],
        user: {},
        requestee: {},
        requester: {}
    }

    async componentWillMount() {
        const talkers = await axios.get('/user/').then(data => data.data)
        this.setState({
            talkers
        })
    }

    async componentDidMount() {
        const firebase = await withFirebase()
        firebase.database().ref(`/requesting`).on('value', async (snapshot) => {
            const data = snapshot.val();
            const requesteeID = +data.requestee
            if ( requesteeID !== this.state.user.id) return
            
            const requesterID = +data.requester
            const requester = await axios.get(`/user/id?id=${requesterID}`).then(data => data.data)
            this.setField('requester', requester)
            this.setField('requestOpen', true)
        })
    }

    setField = (field, value) => this.setState({ [field]: value })

    requestTalker = async id => {
        
        const requestee = await axios.get(`/user/id?id=${id}`).then(data => data.data)
        const firebase = await withFirebase()
        firebase.database().ref(`/requesting`).set({
            requestee: id,
            requester: this.state.user.id,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        })

        this.setField('requestee', requestee)
        this.setField('callingOpen', true)
    }

    setUser = user => this.setState({ user })

    accept = () => {
        console.log('hi')
    }

    render() {
        const { callingOpen, requestOpen, size } = this.state

        return (
            <div>
            <Navbar setUser={this.setUser} user={this.state.user}/>
            <Container style={{marginTop: '5em'}}>
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
                                                    <Button basic color='olive' onClick={() => this.requestTalker(talker.id)} content='Request' />
                                                </Button.Group>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                ))
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <Modal size={'tiny'} open={callingOpen} onClose={this.close}>
                <Modal.Header>{`Waiting for accept request.`}</Modal.Header>
                <Modal.Content>
                    <Image.Group size='tiny' circular>
                        <Image as='img' src='https://image.flaticon.com/icons/svg/371/371706.svg' />
                        <Image as='img' src='https://image.flaticon.com/icons/svg/371/371651.svg' />
                    </Image.Group>
                    <p>{`You calling to ${this.state.requestee.name}`}</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={() => this.setField('callingOpen', false)} content='Cancle' />
                </Modal.Actions>
            </Modal>
            <Modal size={'tiny'} open={requestOpen} onClose={this.close}>
                <Modal.Header>{`Waiting for your acceptance.`}</Modal.Header>
                <Modal.Content>
                    <Image.Group size='tiny' circular>
                        <Image as='img' src='https://image.flaticon.com/icons/svg/371/371706.svg' />
                        <Image as='img' src='https://image.flaticon.com/icons/svg/371/371651.svg' />
                    </Image.Group>
                    <p>{`${this.state.requester.name} calling to You`}</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={() => this.setField('requestOpen', false)} content='Cancle' />
                    <Button basic primary onClick={() => this.accept()} content='Accept' />
                </Modal.Actions>
            </Modal>
        </div>
        )
    }
}

export default ListFriendTalker
