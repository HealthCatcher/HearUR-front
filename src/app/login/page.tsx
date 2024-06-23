"use client";
import React from "react";
import "./login.css"

const onNaverLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver";
}
const onGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
}
const getData = () => {
    fetch("http://localhost:8080/my", {
        method: "GET",
        credentials: "include",
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data);
        }).catch((error) =>  alert(error));
}

const Page = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={onNaverLogin}>Sign In with Naver</button>
            <button onClick={onGoogleLogin}>Sign In with Google</button>
            <button onClick={getData}>Get Data</button>
        </div>
    );
}

export default Page;