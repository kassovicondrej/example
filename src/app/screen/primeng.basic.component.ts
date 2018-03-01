import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primeng-basic',
  templateUrl: './primeng.basic.component.html',
  styleUrls: ['./primeng.basic.component.scss']
})

export class PrimengBasicComponent implements OnInit {
  data: any[];
  selectedItems: any[];
  cols: any[];

  constructor(
    private activatedRoute: ActivatedRoute) {
  }



  ngOnInit() {
    this.data = [];
    this.selectedItems = [];
    this.cols = [
      { field: 'Col1', header: 'Col1', sortable: true },
      { field: 'Col2', header: 'Col2', sortable: true },
      { field: 'Col3', header: 'Col3', sortable: true },
    ];


    for (let i = 0; i < 5; i++) {
      let group: Number = 0;

      if (i > 24) { group = 1; }
      this.data.push({
        Col1: 'Value' + i, Col2: Math.round((Math.random() * 1000000000) % 1000000),
        Col3: Math.round((Math.random() * 1000000000) % 1000000)
      });
    }

  }


}
