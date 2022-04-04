export interface AuthSessionModel {
  profile: AuthProfile;
  accessToken: TokenModel;
  refreshToken: TokenModel;
}

export interface TokenModel {
  token: string;
  tokenType: string;
  expiration: Date;
}

export interface AuthProfile {
  id: string;
  email: string;
  username: string;
  name: string;
  roles: string[];
}
