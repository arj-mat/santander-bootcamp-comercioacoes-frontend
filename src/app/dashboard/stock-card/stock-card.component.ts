import { Component, Input, OnInit } from '@angular/core';
import StockModel from 'src/app/shared/data/models/stock';

@Component( {
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: [ './stock-card.component.css' ]
} )
export class StockCardComponent implements OnInit {

  @Input()
  public stock: StockModel = new StockModel();

  constructor() { }

  ngOnInit(): void {
  }

  public formatStockVariation(): string {
    return `${this.stock.variation.toLocaleString()}%`;
  }

  public getStockVariationIconName(): string {
    if ( this.stock.variation == 0 ) {
      return `trending_flat`;
    } else if ( this.stock.variation > 0 ) {
      return `trending_up`;
    } else {
      return `trending_down`;
    }
  }
}
