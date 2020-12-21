import {Pool} from "pg";

import {Phase1Data} from "./phases/phase-1";
import {Phase2Data} from "./phases/phase-2";
import {Phase3Data} from "./phases/phase-3";
import {Phase4Data} from "./phases/phase-4";
import {Phase5Data} from "./phases/phase-5";
import {Phase6Data} from "./phases/phase-6";

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
        const query = `INSERT INTO validators (user_name, operator_address, moniker)
                       VALUES ($1, $2, $3)
                       ON CONFLICT DO NOTHING`
        await this.pool.query(query, [user, operatorAddress, moniker]);
    }

    private async insertReferral(referringUser: String, referredUser: String, accepted: Boolean = false) {
        await this.insertUserIfNotExistent(referringUser);
        await this.insertUserIfNotExistent(referredUser);

        const referralQuery = `INSERT INTO referrals (referring_user, referred_user, accepted)
                               VALUES ($1, $2, $3)
                               ON CONFLICT (referring_user, referred_user) DO UPDATE
                                   SET accepted = (excluded.accepted OR referrals.accepted)`;
        await this.pool.query(referralQuery, [referringUser, referredUser, accepted]);
    }

    /**
     * Inserts the Phase 1 data inside the proper tables.
     */
    public async insertPhase1Data(data: Phase1Data) {
        await this.insertUserIfNotExistent(data.user);

        // Insert the user data
        const query = `INSERT INTO primer_phase_1 (username, created_post, liked_post, reward)
                       VALUES ($1, $2, $3, $4)
                       ON CONFLICT (username) DO UPDATE SET created_post = excluded.created_post,
                                                            liked_post   = excluded.liked_post,
                                                            reward       = excluded.reward`;
        await this.pool.query(query, [
            data.user,
            data.hasPost,
            data.hasLike,
            data.reward
        ]);

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
        const query = `INSERT INTO primer_phase_2 (username, added_reaction, created_validator, reward)
                       VALUES ($1, $2, $3, $4)
                       ON CONFLICT DO UPDATE SET added_reaction    = excluded.added_reaction,
                                                 created_validator = excluded.created_validator,
                                                 reward            = excluded.reward`;
        await this.pool.query(query, [
            data.user,
            data.hasReaction,
            data.createdValidator,
            data.reward,
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
                                                       validator_address, reward)
                           VALUES ($1, $2, $3, $4, $5, $6)
                           ON CONFLICT DO NOTHING`;
        await this.pool.query(userQuery, [
            data.user,
            data.hasPoll,
            data.hasMultimediaPost,
            data.hasPollAnswer,
            data.validatorAddress,
            data.reward,
        ])
        ;
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
                                                       validator_address, reward)
                           VALUES ($1, $2, $3, $4, $5)
                           ON CONFLICT DO UPDATE SET registered_reaction = excluded.registered_reaction,
                                                     created_account     = excluded.created_account,
                                                     validator_address   = excluded.validator_address,
                                                     reward              = excluded.reward`;
        await this.pool.query(userQuery, [
            data.user,
            data.hasReaction,
            data.hasAccount,
            data.validatorAddress,
            data.reward,
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
                                                       reward)
                           VALUES ($1, $2, $3, $4, $5, $6, $7)
                           ON CONFLICT DO UPDATE SET created_or_updated_profile = excluded.created_or_updated_profile,
                                                     created_post_with_hashtag  = excluded.created_post_with_hashtag,
                                                     created_post_with_tag      = excluded.created_post_with_tag,
                                                     created_report             = excluded.created_report,
                                                     validator_address          = excluded.validator_address,
                                                     reward                     = excluded.reward`;
        await this.pool.query(userQuery, [
            data.user,
            data.hasProfile,
            data.hasHashtag,
            data.hasTag,
            data.hasReport,
            data.validatorAddress,
            data.reward,
        ]);
    }

    /**
     * Inserts the Phase 6 data inside the proper tables.
     */
    public async insertPhase6Data(data: Phase6Data) {
        await this.insertUserIfNotExistent(data.user);

        const userQuery = `INSERT INTO primer_phase_6 (username, block_unblocked_user, changed_dtag,
                                                       created_relationships, edited_post, transferred_dtag, reward)
                           VALUES ($1, $2, $3, $4, $5, $6, $7)
                           ON CONFLICT DO NOTHING`;
        await this.pool.query(userQuery, [
            data.user,
            data.hasBlockedUnblockedUser,
            data.hasChangedDTag,
            data.hasCreatedRelationship,
            data.hasEditedPost,
            data.hasTransferredDTag,
            data.reward,
        ]);
    }
}
