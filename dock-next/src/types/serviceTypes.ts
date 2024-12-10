export interface PageParams {
    page: number;
    size: number;
}

interface PageObject {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
}

export interface PageResponse {
    totalElements: number;
    totalPages: number;
    numberOfElements: number;
    empty: boolean;
    pageable: PageObject;
}