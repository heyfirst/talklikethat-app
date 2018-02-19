import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ModalExampleSize extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        return (
            <div>
                <Button basic color='blue' onClick={this.show('tiny')}>Add Friend</Button>
                <Button basic color='olive' onClick={this.show('tiny')}>Request</Button>

                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Content>
                        <img size='medium' circular src='https://image.flaticon.com/icons/svg/371/371669.svg' />
                        <p>Waiting</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic negative color='olive' content='Cancel'/>
                        <Button basic positive color='red' content='Yes'/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ModalExampleSize
