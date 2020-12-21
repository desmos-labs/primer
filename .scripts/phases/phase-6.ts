import {Utils} from "./common";

const path = require('path');
const PHASE_6_SUBMISSIONS = path.join(__dirname, `../../phase-6/submissions`);

/**
 * Returns the list of all the Primer Phase 5 entries.
 */
export async function getPhase6Data(): Promise<Array<Phase6Data>> {
    const blockedUsers = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_6_SUBMISSIONS}/block-user`));
    const unblockedUsers = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_6_SUBMISSIONS}/unblock-user`));
    const dTagChanges = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_6_SUBMISSIONS}/change-dtag`));
    const relationships = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_6_SUBMISSIONS}/create-relationship`));
    const editedPosts = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_6_SUBMISSIONS}/edit-post`));
    const dTagTransfers = await Utils.takeNonEmpty(await Utils.getFilesContents(`${PHASE_6_SUBMISSIONS}/transfer-dtag`));

    const users = new Set<String>([
        ...blockedUsers.keys(),
        ...dTagChanges.keys(),
        ...relationships.keys(),
        ...editedPosts.keys(),
        ...dTagTransfers.keys(),
        ...unblockedUsers.keys(),
    ]);

    return Array.from(users).map((user) => {
        return new Phase6Data(
            user,
            blockedUsers.get(user),
            unblockedUsers.get(user),
            dTagChanges.get(user),
            relationships.get(user),
            editedPosts.get(user),
            dTagTransfers.get(user),
        );
    });
}

/**
 * Contains the data for Desmos Primer Phase 5, for a single user.
 */
export class Phase6Data {
    public user: String;

    public blockUser: String;
    public unblockUser: String;
    public get hasBlockedUnblockedUser(): boolean {
        return this.blockUser != null && this.unblockUser != null;
    }

    public changeDTag: String;
    public get hasChangedDTag(): boolean {
        return this.changeDTag != null;
    }

    public createRelationship: String;
    public get hasCreatedRelationship(): boolean {
        return this.createRelationship != null;
    }

    public editPost: String;
    public get hasEditedPost(): boolean {
        return this.editPost != null;
    }

    public transferDTag: Array<String>;
    public get hasTransferredDTag(): boolean {
        return this.transferDTag != null && this.transferDTag.length == 2;
    }

    public get reward(): number {
        return (this.hasEditedPost ? 50 : 0) +
            (this.hasCreatedRelationship ? 23 : 0) +
            (this.hasBlockedUnblockedUser ? 50 : 0) +
            (this.hasChangedDTag ? 25 : 0) +
            (this.hasTransferredDTag ? 100 : 0);
    }

    constructor(
        user: String, blockUser: String, unblockUser: String, changeDTag: String, createRelationship: String,
        editPost: String, transferDTag: Array<String>,
    ) {
        this.user = user;

        this.blockUser = blockUser;
        this.unblockUser = unblockUser;
        this.changeDTag = changeDTag;
        this.createRelationship = createRelationship;
        this.editPost = editPost;
        this.transferDTag = transferDTag;
    }
}
