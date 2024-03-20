const userLogin = async(username, password) => {

    let response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            "accept": "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": username,
            "password": password
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data.body.token;
    } else if (response.status === 400) {
        const error = await response.json();
        throw new Error(error.message);
    } else {
        throw new Error("An unidentified error occurred. Please, check the connection to the server and try again.");
    }
}
export default userLogin;