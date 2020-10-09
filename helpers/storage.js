
export const appKey = "kid_BkOsrz3jH";
export const appSecret = "679c6e03a4664f4abecad50efd95d871";

function saveData(key, value) {
  localStorage.setItem(key+appKey, JSON.stringify(value));
}

export function getData(key){
  return localStorage.getItem(key+appKey);
}

export function saveUser(data){
  saveData("userInfo",data);
  saveData("authToken", data._kmd.authtoken);
}

export function removeUser(){
  localStorage.clear();
}