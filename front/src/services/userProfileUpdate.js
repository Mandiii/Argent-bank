const userProfileUpdate = async(token, newUsername) => {    
    let result = await fetch('http://localhost:3001/api/v1/user/profile', {
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
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data
    })
    .catch(error => {
        console.log(error)
        return "error"
    })
    console.log(result)
    return result
}

export default userProfileUpdate