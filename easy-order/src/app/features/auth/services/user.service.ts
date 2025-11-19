import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _HTTP_CLIENT = inject(HttpClient);

  private readonly _DEFAULT_URL = 'http://localhost:3000/users';

  public create(user: User): Observable<Object> {
    return this._HTTP_CLIENT.post(this._DEFAULT_URL, user);
  }

  public readByUsername(username: string): Observable<User | undefined> {
    return this._HTTP_CLIENT.get<User[]>(`${this._DEFAULT_URL}?username=${username}`)
      .pipe(map(users => users.length > 0 ? users[0] : undefined));
  }

}
