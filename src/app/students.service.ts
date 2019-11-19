import { Students } from './students';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regis } from './regis';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<Students[]>("http://localhost/Angular7PHPCrud/list.php");
  }

  getRegis(){
    return this.http.get<Regis[]>('http://localhost/angular7phpcrud/list-regis.php');
  }


  deleteStudent(id:number){
    return this.http.delete<Students[]>('http://localhost/Angular7PHPCrud/delete.php?id='+ id);
  }
  deleteRegis(id:number){
    return this.http.delete<Regis[]>('http://localhost/Angular7PHPCrud/deleteregis.php?id='+ id);
  }

  createStudent(student: Students){
    return this.http.post('http://localhost/Angular7PHPCrud/insert.php',student);
  }

  createRegis(regis: Regis){
    return this.http.post('http://localhost/angular7phpcrud/insertRegis.php',regis);
  }

  getById(id:number){
    return this.http.get<Students[]>('http://localhost/Angular7PHPCrud/getById.php?id='+ id);
  }

  getRegId(id:number){
    return this.http.get<Regis[]>('http://localhost/Angular7PHPCrud/getRegId.php?id='+ id);
  }

  updateStudent(student: Students){
    return this.http.put('http://localhost/Angular7PHPCrud/update.php'+'?id=' + student.sId, student);
  }

  updateRegis(regis: Regis){
    return this.http.put('http://localhost/Angular7PHPCrud/updateregis.php'+'?id=' + regis.id_record, regis);
  }

}
