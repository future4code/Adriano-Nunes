export type user = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type friend = {
    id: string;
    name: string;
    email: string;
}

export interface UserInputDTO {
    name: string;
    email: string;
    password: string;
}

export interface LoginInputDTO {
    email: string;
    password: string;
}

export interface AuthenticationData {
    id: string;
}

  export interface GetUserProfileDTO {
    token: string;
}
  
  export interface UserProfileOutputDTO {
    id: string;
    email: string;
}