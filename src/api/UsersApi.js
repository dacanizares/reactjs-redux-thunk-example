const USERS_API_URL = 'https://randomuser.me/api/?lego&results=3';

export const findUsers = async () => {        
  const response = await fetch(USERS_API_URL)
  const usersJson = await response.json()
  return usersJson.results
}