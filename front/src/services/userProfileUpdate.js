const userProfileUpdate = async(token, newUsername) => {    
    let response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            "accept": "application/json",
            "content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            "userName": newUsername
        })
    })
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        return data;
    } else if (response.status === 400) {
        const error = await response.json();
        throw new Error(error.message);
    } else {
        throw new Error("An unidentified error occurred. Please, check the connection to the server and try again.");
    }
}

export default userProfileUpdate