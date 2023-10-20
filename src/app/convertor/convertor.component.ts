import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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

  constructor(){}

  ngOnInit(): void {
    this.selectedCurrency = this.currencies[0]
  }

  changeCurrency(currency: string) {
    this.selectedCurrency = currency
    this.changeCurrencyEvent.emit(currency)
  }

}
