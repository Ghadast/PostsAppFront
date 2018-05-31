import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  //Toujours 'root'
  providedIn: "root"
})
export class PostDetailsGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(next: ActivatedRouteSnapshot): boolean {
    let id = next.url[1].path; // Récuperer le second rgument de l'url et le reconvertir en int


    if (isNaN(+id) || +id < 1) {
      alert(
        `ATTENTION, le id ${id}  doit etre numerique,Redirection vers HOME PAGE ! `
      );
      this._router.navigate["/welcome"];
      return false;
    }
    return true;
  }
}
