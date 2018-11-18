import connect from 'react-redux/es/connect/connect';
import GroupMembers from '../components';

import { getMembersInit } from '../modules/actions';

const mapStateToProps = state => ({
  members: state.groups.curGroupMembers,
  languageText: state.language.text.groupMembers,
});

const mapDispatchToProps = dispatch => ({
  getMembers: payload => dispatch(getMembersInit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupMembers);
