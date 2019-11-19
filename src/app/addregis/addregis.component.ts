
import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Students } from '../students';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addregis',
  templateUrl: './addregis.component.html',
  styleUrls: ['./addregis.component.css']
})
export class AddregisComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, 
    private _studentService: StudentsService,
    private router: Router) { 

 }

 addForm: FormGroup;
 ngOnInit() {
   this.addForm = this.formBuilder.group({
     id_record: [],
     id_student: ['',Validators.required],
     id_subject: ['',Validators.required],
     grade: ['',Validators.required,]
   });
 }

 onSubmit(){
 //  console.log(this.addForm.value);
   this._studentService.createRegis(this.addForm.value)
   .subscribe(data => {
       this.router.navigate(['view']);
   })
 }


}
