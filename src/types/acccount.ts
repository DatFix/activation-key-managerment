export interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  username: string;
  password: string;
}

export interface Errors {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  message?:string;
  emailOrUsername?:string
}

export interface FormDataLogin {
  emailOrUsername: string;
  password: string;
}
