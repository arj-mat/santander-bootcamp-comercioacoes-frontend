import { Component, OnInit } from '@angular/core';
import StockModel from 'src/app/shared/data/models/stock';
import { DashboardService } from '../dashboard.service';

@Component( {
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: [ './dashboard-page.component.css' ]
} )
export class DashboardPageComponent implements OnInit {

  public stocks: Array<StockModel> = [];

  constructor( private dashboardService: DashboardService ) { }

  ngOnInit(): void {
    this.fetchAllStocks();
  }

  public async fetchAllStocks() {
    this.stocks = await this.dashboardService.getAllStocks();
  }
}
