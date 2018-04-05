import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  url: any;

  constructor(public http: Http) {
    this.url = "http://172.16.130.64/CapDev/";
  }

  selectAllStudents() {
    let fullUrl = this.url + 'API/SelectAllStudents';
    return this.http.get(fullUrl).map(res => res.json());
  }

  insertStudent(Firstname, Lastname) {
    let params = { Firstname: Firstname, Lastname: Lastname };
    let fullUrl = this.url + 'API/InsertStudent';
    return this.http.post(fullUrl,params).map(res => res.json());
  }

  updateStudent(Id, Firstname, Lastname) {
    let params = { Id: Id, Firstname: Firstname, Lastname: Lastname };
    let fullUrl = this.url + 'API/UpdateStudent';
    return this.http.post(fullUrl,params).map(res => res.json());
  }

  deleteStudent(Id) {
    let params = { Id: Id };
    let fullUrl = this.url + 'API/DeleteStudent';
    return this.http.post(fullUrl,params).map(res => res.json());
  }

}
