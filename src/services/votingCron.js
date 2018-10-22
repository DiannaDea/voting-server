import schedule from 'node-schedule';
import moment from 'moment';

import Voting from '../models/Voting';
import VotingController from '../controllers/VotingController';

export default class VotingCron {
    constructor() {
        this.cronStartVoting = null;
        this.cronEndVoting = null;
    }

    startVoting() {
        this.cronStartVoting = schedule.scheduleJob('* */1 * * *', async () => {
            const now = moment().utc();
            const hourAgo = moment().subtract({ hour: 1 }).utc();

            await Voting.updateMany({
                status: 'created',
                dateStart: {
                    $gt: hourAgo,
                    $lt: now,
                },
            }, {
                status: 'pending',
            });
        });
    }

    endVoting() {
        this.cronEndVoting = schedule.scheduleJob('* */1 * * *', async () => {
            const now = moment().utc();
            const hourAgo = moment().subtract({ hour: 1 }).utc();

            const votings = await Voting.find({
                status: 'pending',
                dateEnd: {
                    $gt: hourAgo,
                    $lt: now,
                },
            });

            await Promise.all(votings.map(async ({ _id }) => {
                await VotingController.createVotingResults(_id);
                await Voting.updateOne({
                    _id,
                }, {
                    status: 'finished',
                });
            }));
        });
    }

    cancelStartVoting() {
        this.cronStartVoting.cancel();
    }

    cancelEndVoting() {
        this.cronEndVoting.cancel();
    }
}
