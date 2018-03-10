import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Store } from './store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storeData:Store[] = [];
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getStoreData();
  }

  getStoreData(){
    this.storeService.getStoreData().subscribe(
      storeData => this.storeData = storeData
    );
  }

}
