import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import StockModel from '../shared/data/models/stock';

@Injectable( {
  providedIn: 'root'
} )
export class DashboardService {

  constructor( private http: HttpClient ) { }

  public async getAllStocks(): Promise<Array<StockModel>> {
    return this.http.get<Array<StockModel>>( ( window.location.host == "localhost:4200" ? "http://localhost:8080/stock/get/all" : "/stock/get/all" ) ).toPromise();
  }
}
