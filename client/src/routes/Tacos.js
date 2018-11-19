import React from 'react';
import connect from 'react-redux/es/connect/connect';

const Tacos = ({ languageText }) => <h1>{languageText}</h1>;

const mapStateToProps = state => ({
  languageText: state.language.text.welcome,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Tacos);
