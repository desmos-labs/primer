import {Pool} from "pg";

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
    _pool = new Pool();

    /**
     * Inserts the Phase 1 data inside the proper tables.
     * @param userData {UserData} Data of the user to be inserted.
     * @private
     */
    async _insertPhase1Data(userData) {
        // Insert the user data
        const query = `INSERT INTO primer_phase_1 ("user", accepted_referral, created_post, liked_post) 
                       VALUES ($1, $2, $3, $4) 
                       ON CONFLICT ("user") DO UPDATE SET 
                            accepted_referral = excluded.accepted_referral, 
                            created_post = excluded.created_post, 
                            liked_post = excluded.liked_post`;

        await this._pool.query(query, [
            userData.user,
            userData.phase1.referredBy != null,
            userData.phase1.post != null,
            userData.phase1.like != null,
        ]);

        // Insert the referrals data
        await asyncForEach(userData.phase1.referrals, async (referral) => {
            const userQuery = `INSERT INTO primer_phase_1 ("user", accepted_referral, created_post, liked_post)
                               VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING`
            await this._pool.query(userQuery, [
                referral,
                false,
                false,
                false,
            ]);


            const referralQuery = `INSERT INTO primer_phase_1_referrals ("user", referred_user) 
                                   VALUES ($1, $2) ON CONFLICT DO NOTHING`;
            await this._pool.query(referralQuery, [
                userData.user,
                referral,
            ]);
        });
    }

    /**
     * Inserts the Phase 2 data inside the proper tables.
     * @param userData {UserData} Data of the user to be inserted.
     * @private
     */
    async _insertPhase2Data(userData) {
        const query = `INSERT INTO primer_phase_2 ("user", added_reaction, created_validator) 
                       VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`;
        await this._pool.query(query, [
            userData.user,
            userData.phase2.reaction != null,
            userData.phase2.validator != null,
        ]);
    }

    /**
     * Inserts the Phase 3 data inside the proper tables.
     * @param userData {UserData} Data of the user to be inserted.
     * @private
     */
    async _insertPhase3Data(userData) {
        const userQuery = `INSERT INTO primer_phase_3 ("user", created_poll, created_multimedia_post, answered_poll) 
                           VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING`;
        await this._pool.query(userQuery, [
            userData.user,
            userData.phase3.poll != null,
            userData.phase3.multimedia != null,
            userData.phase3.answer != null
        ]);

        if (userData.phase3.validator != null) {
            const validatorQuery = `INSERT INTO primer_phase_3_validators ("user", operator_address, precommits_signed) 
                                    VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`;
            await this._pool.query(validatorQuery, [
                userData.user,
                userData.phase3.validator,
                userData.phase3.precommits ?? 0,
            ]);
        }
    }

    /**
     * Inserts the Phase 4 data inside the proper tables.
     * @param userData {UserData} Data of the user to be inserted.
     * @private
     */
    async _insertPhase4Data(userData) {
        const userQuery = `INSERT INTO primer_phase_4 ("user", registered_reaction, created_account) 
                           VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`;
        await this._pool.query(userQuery, [
            userData.user,
            userData.phase4.reaction != null,
            userData.phase4.account != null,
        ]);

        if (userData.phase4.validator != null) {
            const validatorQuery = `INSERT INTO primer_phase_4_validators ("user", operator_address, precommits_signed) 
                                    VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`;
            await this._pool.query(validatorQuery, [
                userData.user,
                userData.phase4.validator,
                userData.phase4.precommits ?? 0,
            ]);
        }
    }

    /**
     * Inserts the Phase 5 data inside the proper tables.
     * @param userData {UserData} Data of the user to be inserted.
     * @private
     */
    async _insertPhase5Data(userData) {
        const userQuery = `INSERT INTO primer_phase_5 ("user", created_or_updated_profile, created_post_with_hashtag, created_post_with_tag, created_report) 
                           VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING`;
        await this._pool.query(userQuery, [
            userData.user,
            userData.phase5.profile != null,
            userData.phase5.hashtag != null,
            userData.phase5.tag != null,
            userData.phase5.report != null,
        ]);

        if (userData.phase5.validator != null) {
            const validatorQuery = `INSERT INTO primer_phase_5_validators ("user", operator_address, precommits_signed) 
                                    VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`;
            await this._pool.query(validatorQuery, [
                userData.user,
                userData.phase5.validator,
                userData.phase5.precommits ?? 0,
            ]);
        }
    }

    /**
     * Writes the user data into the PSQL database.
     * @param userData {UserData} User data to be written.
     */
    async writeUserData(userData) {
        await this._insertPhase1Data(userData);
        await this._insertPhase2Data(userData);
        await this._insertPhase3Data(userData);
        await this._insertPhase4Data(userData);
        await this._insertPhase5Data(userData);
    }
}
