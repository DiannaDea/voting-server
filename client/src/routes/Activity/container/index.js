import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ActivityContainer from '../components';

const mapStateToProps = state => ({
  email: state.user.fetchData.personalInfo.email,
  languageText: state.language.text.activity,
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityContainer));
