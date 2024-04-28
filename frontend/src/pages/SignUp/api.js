import axios from "axios";

export const signUp = async (username, email, password) => {
    return await axios.post('/api/v1/user', username, email, password );
}
