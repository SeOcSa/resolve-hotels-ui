import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from './auth.service';

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> {
    return this.auth
      .authenticatedChange()
      .pipe(tap((isAuth) => this.handleAuthorization(isAuth, state)));
  }

  private handleAuthorization(isAuthenticated: boolean,
                              state: RouterStateSnapshot): void {
    if (!isAuthenticated) {
      this.router
        .navigate(["/auth", "login"], { queryParams: { redirectTo: state.url } })
        .then();
    }
  }
}
