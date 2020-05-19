// import React from "react";
// import axios from "axios";

const TOKEN: string = "token";
const USER_ID: string = "user_id";

export function getToken() {
   return localStorage.getItem(TOKEN);
}

export function setToken(token: string) {
   localStorage.setItem(TOKEN, token);
}

export function clearToken() {
   localStorage.removeItem(TOKEN);
}

export function getUserId() {
   return Number(localStorage.getItem(USER_ID));
}

export function setUserId(id: number) {
   localStorage.setItem(USER_ID, String(id));
}

export function clearUserId() {
   localStorage.removeItem(USER_ID);
}
