import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Students } from '../students';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './editregis.component.html',
  styleUrls: ['./editregis.component.css']
})
export class EditRegisComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, 
    private _studentService: StudentsService,
    private router: Router,
    private routes: ActivatedRoute) { 

 }

  editReg: FormGroup;

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;

   // console.log(routeParams.id)
    
   

    this.editReg = this.formBuilder.group({
      id_record: [''],
      id_student: ['',Validators.required],
      id_subject: ['',[Validators.required, Validators.maxLength(12)]],
      grade: ['',[Validators.required, Validators.maxLength(30)]]
    });

    this._studentService.getRegId(routeParams.id)
    .subscribe((data: any) => {
      console.log(data)
      this.editReg.patchValue(data);

    });

  }

  update(){
    //console.log(this.editReg.value);
    this._studentService.updateRegis(this.editReg.value).subscribe(() => {
    this.router.navigate(['regis']);
    },
      error => {
        console.log(error);
        // alert(error);
      });
  }

}
