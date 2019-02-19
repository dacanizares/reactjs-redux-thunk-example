import withLoading from '../wrappers/withLoading';
import { fetchUsers } from '../actions'
import { connect } from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = (state) => ({
    usersData: state.users.usersData,
    loading: state.users.loading
})

const UsersContainer = connect(
    mapStateToProps,
    { fetchData: fetchUsers }
)(withLoading(Users))

export default UsersContainer