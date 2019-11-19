import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Students } from '../students';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, 
    private _studentService: StudentsService,
    private router: Router,
    private routes: ActivatedRoute) { 

 }

  addForm: FormGroup;

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;

   // console.log(routeParams.id)
    
   

    this.addForm = this.formBuilder.group({
     sId: [''],
      fName: ['',Validators.required],
      lName: ['',[Validators.required, Validators.maxLength(12)]],
      email: ['',[Validators.required, Validators.maxLength(30)]]
    });

    this._studentService.getById(routeParams.id)
    .subscribe((data: any) => {
      //console.log(data)
      this.addForm.patchValue(data);
    });

  }

  update(){
    //console.log(this.addForm.value);
    this._studentService.updateStudent(this.addForm.value).subscribe(() => {
    this.router.navigate(['view']);
    },
      error => {
        console.log(error);
        // alert(error);
      });
  }

}
