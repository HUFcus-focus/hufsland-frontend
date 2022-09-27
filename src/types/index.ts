export interface Inputs {
  id: string;
  pw: string;
}

export interface LinkUserInfoParams extends Inputs {
  token: string;
}
