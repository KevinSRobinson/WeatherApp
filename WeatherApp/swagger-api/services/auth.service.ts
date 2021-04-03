/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LoginModelIn } from '../models/login-model-in';
import { RegisterModelIn } from '../models/register-model-in';
@Injectable({
  providedIn: 'root',
})
class AuthService extends __BaseService {
  static readonly postApiAuthLoginPath = '/api/auth/login';
  static readonly postApiAuthRegisterPath = '/api/auth/register';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   */
  postApiAuthLoginResponse(body?: LoginModelIn): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postApiAuthLogin(body?: LoginModelIn): __Observable<null> {
    return this.postApiAuthLoginResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiAuthRegisterResponse(body?: RegisterModelIn): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postApiAuthRegister(body?: RegisterModelIn): __Observable<null> {
    return this.postApiAuthRegisterResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AuthService {
}

export { AuthService }
