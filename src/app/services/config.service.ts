import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CONFIG_SERVER_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService implements CanActivate {

  public serverConfig: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  canActivate(): boolean | Promise<boolean> | Observable<boolean>  {
    return new Promise((resolve, reject) => {
      this.getConfigServer()
      .then((result) => {
        this.serverConfig = result;
        resolve(true);
      },
      msg => {
        reject(msg);
      }
    );
    });
  }

  private getConfigServer(): Promise<any> {
    return this.httpClient
      .get(CONFIG_SERVER_URL)
      .map(res => res)
      .toPromise();
  }
}
