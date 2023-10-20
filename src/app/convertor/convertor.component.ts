import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-convertor',
  templateUrl : './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  @Input()
  currencies!: string[];

  @Output() changeCurrencyEvent = new EventEmitter<string>();

  selectedCurrency!: string;

  constructor(private service:ServiceService){}
  list=undefined
  ngOnInit(): void {
    this.selectedCurrency = this.currencies[0]
    this.cargarDatos();
    console.log(this.list)
  }

  cargarDatos(): void {
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

  changeCurrency(currency: string) {
    this.selectedCurrency = currency
    this.changeCurrencyEvent.emit(currency)
  }

}
