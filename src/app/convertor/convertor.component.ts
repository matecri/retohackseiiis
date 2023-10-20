import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-convertor',
  templateUrl : './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  currencies = ['USD', 'COP', 'EU', 'GBP'];
  selectedCurrencie = this.currencies[0];

  constructor(private service:ServiceService){}
  list=undefined
  ngOnInit(): void {
    this.cargarDatos();
    console.log(this.list)
  }
  cargarDatos():void{
    this.service.convert("USD").subscribe(
    data=>{
      this.list=data.rates;
      console.log(data.rates)
    },
    err=>{
     console.log(err.console.error.mensaje)
      }
     
    );
}
}