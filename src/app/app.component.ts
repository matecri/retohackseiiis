import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackaseiiis';

  currencies = ['USD', 'COP', 'EUR', 'GBP'];
  selectedCurrency = this.currencies[0];

  onCurrencyChange(currency: string) {
    this.selectedCurrency = currency
  }
}
