import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable,} from "rxjs";
import { AuthSessionModel } from "../models/auth-session.model";
import { map } from "rxjs/operators";
import { LocalStorageService } from "ngx-webstorage";
import { UserApiService } from "./user-api.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  public static SessionStorageKey = "auth";

  private readonly sessionSubject: BehaviorSubject<AuthSessionModel>;
  private cachedSession!: AuthSessionModel;

  constructor(private localSt: LocalStorageService,
              private userApi: UserApiService) {
    this.sessionSubject = new BehaviorSubject<AuthSessionModel>(localSt.retrieve(AuthService.SessionStorageKey));
    localSt
      .observe(AuthService.SessionStorageKey)
      .subscribe(this.sessionSubject);

    this.sessionSubject.subscribe((value) => {
      this.cachedSession = value;
      if (!this.cachedSession) {
        return;
      }
      this.cachedSession.refreshToken.expiration = new Date(this.cachedSession.refreshToken.expiration);
      this.cachedSession.accessToken.expiration = new Date(this.cachedSession.accessToken.expiration);
    });
  }

  public authenticatedChange(): Observable<boolean> {
    return this.sessionSubject.pipe(map((session) => {
      return !!session;
    }));
  }

  public get isAuthenticated(): boolean {
    return !!this.getSession();
  }

  public getUsername(): Observable<string> {
    return this.sessionSubject.pipe(map((session) => {
      return session?.profile?.username;
    }));
  }

  public getSession(): AuthSessionModel {
    return this.cachedSession;
  }

  public async logout(): Promise<void> {
    if (!this.isAuthenticated) return;

    try {
      const refreshToken = this.getSession().refreshToken;
      if (refreshToken.expiration > new Date())
        await this.userApi.revoke(refreshToken.token);
    } catch {
    }

    this.localSt.clear(AuthService.SessionStorageKey);
  }
}
