import connect from 'react-redux/es/connect/connect';
import SelectLang from '../components';
import { changeLanguage } from '../../../l10n/modules/actions';

const mapStateToProps = state => ({
  languageText: state.language.text.header,
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: payload => dispatch(changeLanguage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectLang);
