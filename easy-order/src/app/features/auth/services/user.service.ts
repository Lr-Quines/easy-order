import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _HTTP_CLIENT = inject(HttpClient);

  public insert(): Observable<Object> {
    return this._HTTP_CLIENT.post('http://localhost:3000/users', 'TESTE');
  }

}
