import { useEffect } from "react";

const UserLogin = () => {
    useEffect(() => {
        fetch('http://localhost:3001/user/login', {
            method: 'POST'
        })
        .then((res) => {
            res.json()
        })
        .then((data) => {
            console.log(data)
        })
    })
}