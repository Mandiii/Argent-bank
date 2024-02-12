const userLogin = async(username, password) => {    
    let result = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            "accept": "application/json",
            "content-Type": "application/json"
            
        },
        body: JSON.stringify({
            "email": username,
            "password": password
        })
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data.body.token
    })
    .catch(error => {
        console.log("error")
    })
    console.log(result)
    return result
}

export default userLogin