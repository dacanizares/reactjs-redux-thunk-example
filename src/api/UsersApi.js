const USERS_API_URL = 'https://randomuser.me/api/?lego&results=3';

class UsersAPI {
    async find() {        
        let response = await fetch(USERS_API_URL);
        let usersJson = await response.json();
        return usersJson.results;
    }
}

export default UsersAPI;