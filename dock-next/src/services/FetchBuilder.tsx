type QueryParams = {
    page?: number | null;
    size?: number | null;
};

class FetchBuilder {

    queryParams: QueryParams = {};

    withPage(value: number): void {
        if (value >= 0) {
            this.queryParams.page = value;
        }
    }

    withSize(value: number): void {
        if (value >= 0) {
            this.queryParams.size = value;
        }
    }
}