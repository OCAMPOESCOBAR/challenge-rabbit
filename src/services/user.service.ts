import { Http } from '../libs/http';
import { TUser, TUserParams } from '../types/entities.type';

class UserServices {
  private http;
  constructor() {
    this.http = new Http().getInstance();
  }

  getMe(params: TUserParams | undefined): Promise<TUser> {
    return this.http.get('/api', {params});
  }
}

export const UserService = new UserServices();