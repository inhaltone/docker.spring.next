export const getBasicAuth = () => {
    const username = 'admin';
    const password = 'admin';
    const auth = btoa(`${username}:${password}`)

    return `Basic ${auth}`;
}