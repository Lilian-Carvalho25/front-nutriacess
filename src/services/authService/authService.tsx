import { api } from "../../config/axios/axios";
import { TUser } from "../../contexts/authContext/authContext.types";
import {
  ISignInUser,
  TSignInUserResponse,
  TSignUpUserResponse,
} from "./authService.types";

export async function signUpUser(user: TUser): Promise<TSignUpUserResponse> {
  const response = await api.post("/cliente/cadastrar", user);
  return response.data;
}

export async function signInUser(
  user: ISignInUser
): Promise<TSignInUserResponse> {
  const response = await api.post("/cliente/conectar", user);

  api.defaults.headers.common.Authorization = `${response.data.token}`;

  return response.data;
}

export function getUser() {
  const user = localStorage.getItem("@user") as string;
  return JSON.parse(user);
}

export function getEsp() {
  const esp = localStorage.getItem("@esp") as string;
  return JSON.parse(esp);
}
