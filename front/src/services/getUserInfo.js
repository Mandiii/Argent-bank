const getUserInfo = async(token) => {    
    let result = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            "accept": "application/json",
            "content-Type": "application/json",
            "authorization": `Bearer ${token}`
        }
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data
    })
    console.log(result)
    return result
}

export default getUserInfo