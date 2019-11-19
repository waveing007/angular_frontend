import { Regis } from './../regis';
import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
    registration: Regis[];
    _id: any;
   
  
    constructor(private _studentsService: StudentsService,
                private router: Router) { }
  
    ngOnInit() {
      
      this._studentsService.getRegis()
      .subscribe((data: Regis[]) => {
        this.registration = data;
        console.log(this.registration);
  
      });
    }
  
  delete(registration: Regis): void{
   
    this._studentsService.deleteRegis(registration.id_record)
        .subscribe(data=> {
          this.registration = this.registration.filter(u => u !== registration);
        });
  }
  
  edit(registration: Regis){
    this._id = registration.id_record;
    this.router.navigate(['reg/edit/'+ this._id]);
  }
  
  }