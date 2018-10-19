import schedule from 'node-schedule';
import moment from 'moment-timezone';
import Voting from '../models/Voting';

export default class VotingCron {
    constructor() {
        this.cronStartVoting = null;
    }

    start() {
        this.cronStartVoting = schedule.scheduleJob('*/1 * * * *', async () => {
            const now = moment().tz('Europe/Zaporozhye');
            const hourAgo = moment().tz('Europe/Zaporozhye').subtract({ hour: 1 });
            console.log(now, hourAgo);

            const votings = await Voting.find({
                dateStart: {
                    $gt: hourAgo,
                    $lt: now,
                },
            });
            console.log('HERE', votings);
        });
    }

    cancel() {
        this.votingCron.cancel();
    }
}
