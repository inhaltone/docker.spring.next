import {SaveEngineerRequest, UniEngineer} from "@/api/openapi";

export default class UniEngineerBuilder {
    private payload: UniEngineer = {};

    static builder(): UniEngineerBuilder {
        return new UniEngineerBuilder();
    }

    withEmail(value: string): UniEngineerBuilder {
        if (typeof value !== 'undefined') {
            this.payload.email = value;
        }

        return this;
    }

    withFirstName(value: string): UniEngineerBuilder {
        if (typeof value !== 'undefined') {
            this.payload.firstName = value;
        }

        return this;
    }

    build(): SaveEngineerRequest {
        return {
            uniEngineer: this.payload
        }
    }
}