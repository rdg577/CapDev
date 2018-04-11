import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  url: any;

  constructor(public http: Http) {
    this.url = "http://172.16.130.64/CapDev/";
  }

  selectAllStudents() {
    let fullUrl = this.url + 'API/SelectAllStudents';
    let headers = new Headers({'Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({headers: headers});
    return this.http.get(fullUrl, options).map(res => res.json());
  }

  insertStudent(Firstname, Lastname) {
    let params = { Firstname: Firstname, Lastname: Lastname };
    let fullUrl = this.url + 'API/InsertStudent';
    let headers = new Headers({'Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(fullUrl,params,options).map(res => res.json());
  }

  updateStudent(Id, Firstname, Lastname) {
    let params = { Id: Id, Firstname: Firstname, Lastname: Lastname };
    let fullUrl = this.url + 'API/UpdateStudent';
    let headers = new Headers({'Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(fullUrl,params,options).map(res => res.json());
  }

  deleteStudent(Id) {
    let params = { Id: Id };
    let fullUrl = this.url + 'API/DeleteStudent';
    let headers = new Headers({'Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(fullUrl,params,options).map(res => res.json());
  }

}
