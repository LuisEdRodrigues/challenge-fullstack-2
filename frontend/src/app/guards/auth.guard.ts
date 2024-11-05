import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const token = sessionStorage.getItem('token');
  const router = inject(Router);

  if (token) {
    return true
  } else {
    router.navigate(['']);
    return false
  }
};
