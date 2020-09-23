import {Pool} from "pg";
import {Phase1Data} from "./phases/phase-1";
import {Phase2Data} from "./phases/phase-2";
import {Phase3Data} from "./phases/phase-3";
import {Phase4Data} from "./phases/phase-4";
import {Phase5Data} from "./phases/phase-5";
import {PrecommitData} from "./types/precommit-data";

async function asyncForEach(array, callback) {
    if (array == null) return;

    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

/**
 * Allows to write a user's data into a PSQL database.
 */
export class PsqlWriter {
    private pool = new Pool();

    constructor() {
        this.pool.on('error', (err, _) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        })
    }

    /**
     * Inserts the given user inside the users table if it does not exist yet.
     */
    private async insertUserIfNotExistent(user: String) {
        const query = `INSERT INTO users (username)
                       VALUES ($1)
                       ON CONFLICT DO NOTHING`;
        await this.pool.query(query, [user]);
    }

    /**
     * Inserts the validator having the given data if it does not exist yet.
     */
    private async insertValidatorIfNotExistent(user: String, operatorAddress: String, moniker: String = null) {
        const query = `INSERT INTO validators (operator_address, moniker)
                       VALUES ($1, $2)
                       ON CONFLICT DO NOTHING`
        await this.pool.query(query, [operatorAddress, moniker]);

        if (user != null) {
            const userQuery = `INSERT INTO users (username, validator_address)
                               VALUES ($1, $2)
                               ON CONFLICT (username) DO UPDATE SET validator_address = excluded.validator_address`
            await this.pool.query(userQuery, [user, operatorAddress]);
        }
    }

    private async insertReferral(referringUser: String, referredUser: String, accepted: Boolean = false) {
        await this.insertUserIfNotExistent(referringUser);
        await this.insertUserIfNotExistent(referredUser);

        const referralQuery = `INSERT INTO referrals (referring_user, referred_user, accepted)
                               VALUES ($1, $2, $3)
                               ON CONFLICT (referring_user, referred_user) DO UPDATE SET accepted = (excluded.accepted OR referrals.accepted)`;
        await this.pool.query(referralQuery, [referringUser, referredUser, accepted]);
    }

    /**
     * Inserts the Phase 1 data inside the proper tables.
     */
    public async insertPhase1Data(data: Phase1Data) {
        await this.insertUserIfNotExistent(data.user);

        // Insert the user data
        const query = `INSERT INTO primer_phase_1 (username, created_post, liked_post)
                       VALUES ($1, $2, $3)
                       ON CONFLICT (username) DO UPDATE SET created_post = excluded.created_post,
                                                            liked_post   = excluded.liked_post`;
        await this.pool.query(query, [data.user, data.post != null, data.like != null,]);

        // Update the referral if existing
        if (data.acceptedReferral != null) {
            await this.insertReferral(data.acceptedReferral, data.user, true);
        }

        // Insert the referrals data
        await asyncForEach(data.referrals, async (referral) => {
            await this.insertReferral(data.user, referral);
        });
    }

    /**
     * Inserts the Phase 2 data inside the proper tables.
     */
    public async insertPhase2Data(data: Phase2Data) {
        await this.insertUserIfNotExistent(data.user);
        if (data.validatorOperatorAddress != null) {
            await this.insertValidatorIfNotExistent(data.user, data.validatorOperatorAddress)
        }

        const query = `INSERT INTO primer_phase_2 (username, added_reaction, created_validator)
                       VALUES ($1, $2, $3)
                       ON CONFLICT DO NOTHING`;
        await this.pool.query(query, [
            data.user,
            data.reaction != null,
            data.validatorOperatorAddress != null,
        ]);
    }

    /**
     * Inserts the Phase 3 data inside the proper tables.
     */
    public async insertPhase3Data(data: Phase3Data) {
        await this.insertUserIfNotExistent(data.user);
        if (data.precommitData != null) {
            await this.insertValidatorIfNotExistent(
                data.user,
                data.precommitData.operatorAddress,
                data.precommitData.moniker,
            )
        }

        const userQuery = `INSERT INTO primer_phase_3 (username, created_poll, created_multimedia_post, answered_poll,
                                                       validator_address, precommits_signed)
                           VALUES ($1, $2, $3, $4, $5, $6)
                           ON CONFLICT DO NOTHING`;
        await this.pool.query(userQuery, [
            data.user,
            data.poll != null,
            data.multimediaPost != null,
            data.pollAnswer != null,
            data.precommitData?.operatorAddress,
            data.precommitData?.precommitsSigned ?? 0,
        ]);
    }

    /**
     * Inserts the Phase 4 data inside the proper tables.
     */
    public async insertPhase4Data(data: Phase4Data) {
        await this.insertUserIfNotExistent(data.user);
        if (data.precommitData != null) {
            await this.insertValidatorIfNotExistent(
                data.user,
                data.precommitData.operatorAddress,
                data.precommitData.moniker,
            );
        }

        const userQuery = `INSERT INTO primer_phase_4 (username, registered_reaction, created_account,
                                                       validator_address, precommits_signed)
                           VALUES ($1, $2, $3, $4, $5)
                           ON CONFLICT DO NOTHING`;
        await this.pool.query(userQuery, [
            data.user,
            data.reaction != null,
            data.account != null,
            data.precommitData?.operatorAddress,
            data.precommitData?.precommitsSigned ?? 0,
        ]);
    }

    /**
     * Inserts the Phase 5 data inside the proper tables.
     */
    public async insertPhase5Data(data: Phase5Data) {
        await this.insertUserIfNotExistent(data.user);
        if (data.precommitData != null) {
            await this.insertValidatorIfNotExistent(
                data.user,
                data.precommitData.operatorAddress,
                data.precommitData.moniker,
            );
        }

        const userQuery = `INSERT INTO primer_phase_5 (username, created_or_updated_profile, created_post_with_hashtag,
                                                       created_post_with_tag, created_report, validator_address,
                                                       precommits_signed)
                           VALUES ($1, $2, $3, $4, $5, $6, $7)
                           ON CONFLICT DO NOTHING`;
        await this.pool.query(userQuery, [
            data.user,
            data.profile != null,
            data.hashtag != null,
            data.tag != null,
            data.report != null,
            data.precommitData?.operatorAddress,
            data.precommitData?.precommitsSigned ?? 0,
        ]);
    }

    /**
     * Inserts the Validating Summer data inside the proper tables.
     */
    public async insertValidatingSummerData(data: PrecommitData) {
        await this.insertValidatorIfNotExistent(null, data.operatorAddress, data.moniker);

        const userQuery = `INSERT INTO validating_summer (validator_address, precommits_signed)
                           VALUES ($1, $2)
                           ON CONFLICT DO NOTHING`;
        await this.pool.query(userQuery, [
            data.operatorAddress,
            data.precommitsSigned,
        ]);
    }
}
