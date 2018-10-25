module.exports = {
    extends: 'airbnb',
    rules: {
        'max-len': ['error', {'code': 120}],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/prop-types': 0,
        'jsx-quotes': ["error", "prefer-single"],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
    }
};
