import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthSessionModel } from "../models/auth-session.model";
import { AuthService } from "./auth.service";
import { LocalStorageService } from "ngx-webstorage";

@Injectable()
export class UserApiService {
  constructor(@Inject("BASE_API_URL") private baseUrl: string,
              private http: HttpClient,
              private localSt: LocalStorageService) {
  }

  public async login(model: {
    email?: string;
    password?: string;
  }): Promise<LoginResult> {
    const url = `${this.baseUrl}auth/login`;
    try {
      const session = await this.http
        .post<AuthSessionModel>(url, model)
        .toPromise();

      this.localSt.store(AuthService.SessionStorageKey, session);

      return { success: true , errorMessage: ""};
    } catch (e) {
      console.error(e);
      return {
        success: false,
        errorMessage:"A apărut o eroare neașteptată. Încearcă din nou."
      };
    }
  }

  public revoke(token: string): Promise<void> {
    const url = this.baseUrl + "auth/logout";
    return this.http.post<void>(url, { token }).toPromise();
  }
}

export interface LoginResult {
  success: boolean;
  errorMessage: string;
}
