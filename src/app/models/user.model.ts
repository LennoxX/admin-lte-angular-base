import { BaseResourceModel } from './base-resource-model.model';

export class User extends BaseResourceModel {
    constructor(
        public Username?: string,
        public Password?: string,
        public Role?: string
    ) {
        super();
    }

    static fromJson(jsonData: any): User {
        return Object.assign(new User(), jsonData);
    }
}