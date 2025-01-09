export default class ApiRequestBuilder {
    queryParams: { page?: number, size?: number } = {};

    withPage(value: number): this {
        if (value >= 0) {
            this.queryParams.page = value;
        }

        return this
    }

    withSize(value: number): this {
        if (value >= 0) {
            this.queryParams.size = value;
        }

        return this
    }

    withPayload() {

    }
}