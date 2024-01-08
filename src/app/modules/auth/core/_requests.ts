import axios from 'axios'
import { AuthModel, UserModel } from './_models'

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>('/auth/login', {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post('/auth/register', {
    email,
    username: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>('/forgot_password', {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>('/verify_token', {
    api_token: token,
  })
}
