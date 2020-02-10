import React, {Component} from 'react';

export class UserForm extends Component {
    state = {
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        accupation: '',
        city: '',
        bio: '',
    }

    // Step to next 
    nextStep = () => { 
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back prev 
    prevStep = () => { 
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    render() {
        return (
            <div></div>
        )
    }
}
export default UserForm