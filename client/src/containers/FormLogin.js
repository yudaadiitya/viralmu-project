import { connect } from "react-redux";
import FormLogin from "../../components/LoginRegister/signin";
import { loginProcess } from '../../actions/users';

const mapDispatchToProps = (dispatch) => ({
    loginProcess: (email, password) => dispatch(loginProcess(email, password))
})

export default connect(
    null,
    mapDispatchToProps
)(FormLogin)