import UsersComponent from '../components/UsersComponent';
import { fetchUsers } from '../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    usersData: state.users.usersData,
    loading: state.users.loading
})

const UsersContainer = connect(
    mapStateToProps,
    { fetchUsers }
)(UsersComponent)

export default UsersContainer