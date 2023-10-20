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

  USD = 0;
  COP = 0;
  EUR = 0;
  GBP = 0;

  value = 0;
  rates: any;
  dataList: { currencyCode: string; exchangeRate: number }[] = [];

  selectedCurrency!: string;

  constructor(private service:ServiceService){}
  listData = [];
  ngOnInit(): void {
    this.selectedCurrency = this.currencies[0]
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.service.convert(this.selectedCurrency).subscribe(
    data=>{      
      this.rates = data.rates;
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

convertCurrencie(): void {
  for (const currencyCode in this.rates) {
    if (this.rates.hasOwnProperty(currencyCode)) {
      this.dataList.push({
        currencyCode: currencyCode,
        exchangeRate: this.rates[currencyCode]
      });
    }
  }
  this.dataList.forEach((country) => {
    if (country.currencyCode === "COP"){
      this.COP = this.value * country.exchangeRate;
    }
    if (country.currencyCode === "USD"){
      this.USD = this.value * country.exchangeRate;
    }
    if (country.currencyCode === "EUR"){
      this.EUR = this.value * country.exchangeRate;
    }
    if (country.currencyCode === "GBP"){
      this.GBP = this.value * country.exchangeRate;
    }
  })
}
}