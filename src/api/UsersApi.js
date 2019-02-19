const USERS_API_URL = 'https://randomuser.me/api/?lego&results=3';

export const findUsers = async () => {        
  let response = await fetch(USERS_API_URL)
  let usersJson = await response.json()
  return usersJson.results 
}