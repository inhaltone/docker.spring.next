export default class PageableBuilder {
    private params: { page?: number, size?: number } = {};

    static builder() {
        return new PageableBuilder();
    }

    withPage(value: number): PageableBuilder {
        if (typeof value !== "undefined" && value >= 0) {
            this.params.page = value;
        }
        return this;
    }

    withSize(value: number): PageableBuilder {
        if (typeof value !== "undefined" && value >= 0) {
            this.params.size = value;
        }

        return this;
    }

    build() {
        return this.params;
    }
}