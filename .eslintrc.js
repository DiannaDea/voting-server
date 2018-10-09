module.exports = {
    'extends': 'airbnb-base',
    'rules': {
        'max-len': ['error', {'code': 120}],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'no-underscore-dangle': ['error', { 'allow': ['_id'] }]
    }
};
