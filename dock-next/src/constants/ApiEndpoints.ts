export default class ApiEndpoints {
    private static BASE_URL = typeof window !== 'undefined'  ? `${process.env.NEXT_PUBLIC_API_URL_CLIENT}/api` : `${process.env.NEXT_PUBLIC_API_URL_SERVER}/api`;
    // private static BASE_URL = "http://dns-dock-spring-1:8080/api";

    public static GET_ALL_ENGINEERS = ApiEndpoints.BASE_URL + '/get-all-engineers';
    public static FIND_ENGINEER_BY_ID = ApiEndpoints.BASE_URL + '/find-user-by-id';
    public static SAVE_ENGINEER = ApiEndpoints.BASE_URL + '/save-engineer';
    public static DELETE_ENGINEER = ApiEndpoints.BASE_URL + '/delete-engineer';
}