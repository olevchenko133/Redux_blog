import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class UserHeader extends Component {
    componentDidMount() {

        this.props.fetchUser(this.props.userID)
    }
    render() {

        const user = this.props.users.find(user => user.id === this.props.userID)
        if (!user) {
            return null
        }
        return (
            <div className="header">
                {user.name}

            </div>
        )
    }
}
// class UserHeader extends React {
//     render() {
//         const { user } = this.props;

//         if (!user) {
//             return null;
//         }

//         return <div className="header">{user.name}</div>;
//     }
// }
const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)
