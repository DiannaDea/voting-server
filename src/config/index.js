import dotenv from 'dotenv';
import devConfig from './devConfig';
import prodConfig from './prodConfig';

dotenv.config();

function getConfig() {
    return (process.env.ENV === 'stage')
        ? devConfig
        : prodConfig;
}

const appConfig = getConfig();

export default appConfig;
