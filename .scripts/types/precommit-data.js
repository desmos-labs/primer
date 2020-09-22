/**
 * Represents a single validator data.
 * @property operatorAddress {String} Operator address of the validator.
 * @property moniker {String} Moniker of the validator.
 * @property precommitsSigned {int}
 */
export class PrecommitData {
    /**
     * Public constructor.
     * @param operatorAddress {String}
     * @param moniker {String}
     * @param precommitsSigned {int}
     */
    constructor(operatorAddress, moniker, precommitsSigned) {
        this.operatorAddress = operatorAddress;
        this.moniker = moniker;
        this.precommitsSigned = precommitsSigned;
    }
}
