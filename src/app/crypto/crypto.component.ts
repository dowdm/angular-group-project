import { Component } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css'],
  providers: [ ApiDataService ]
})
export class CryptoComponent {


  exchanges: any[]=null;
  rate: string = "";
  result: number = 0;
    constructor(private apiDataService: ApiDataService) { }

    triggerExchangeRequest(source: string, destination: string, amount: string) {
      this.apiDataService.getCurrencyExchangeRate(source, destination).subscribe(response => {
          this.exchanges = response.json();
          // this.rate = this.exchanges["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
          // console.log(typeof(amount))
          // this.result = (parseFloat(amount) * parseFloat(this.rate));
      });

    }

}
