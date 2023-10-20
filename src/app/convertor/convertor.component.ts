import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-convertor',
  templateUrl : './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  currencies = ['USD', 'COP', 'EU', 'GBP'];
  selectedCurrencie = this.currencies[0];

  constructor(){}

  ngOnInit(): void {
    
  }
}
