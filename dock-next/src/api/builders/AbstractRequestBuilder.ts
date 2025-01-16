export default class AbstractRequestBuilder<T> {
    protected params: Partial<T> = {};

    static builder<T>() {
        return new AbstractRequestBuilder<T>();
    }

    withParams<U extends Partial<T>>(params: U): this {
        this.params = { ...this.params, ...params };
        return this;
    }

    build(): T {
        return this.params as T;
    }
}