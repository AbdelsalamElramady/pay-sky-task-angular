import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {FirebaseAuthService} from "../../shared/services/auth/firebase-auth.service";

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

    constructor(private firebaseAuthService: FirebaseAuthService, private router: Router) {
    }

    private checkAuth(): Observable<boolean> {
        return this.firebaseAuthService.isAuthorized().pipe(map(authorized => {
            if (authorized) {
                this.router.navigate(['/checkout']);
                return false;
            }
            return true;
        }));
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkAuth();
    }
}
