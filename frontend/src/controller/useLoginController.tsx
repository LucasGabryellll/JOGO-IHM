import { LoginFetch } from "./fetch/loginFetch";

const controller = {
  useFetch: LoginFetch
}

export function useLoginController() {
  return {
    loginController: () => controller.useFetch()
  }
}