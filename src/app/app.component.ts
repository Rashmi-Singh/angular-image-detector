import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
// Adds the WASM backend to the global backend registry.
import '@tensorflow/tfjs-backend-wasm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //   this.httpClient.get<any>(`/api/items?page=${2}`).subscribe(x => {
    //     const pager = x.pager;
    //     const pageOfItems = x.pageOfItems;

    //     alert(`${pager} and ${pageOfItems}`);
    // });
  }

  async setBackend() {
    // Set the backend to WASM and wait for the module to be ready.
    tf.setBackend('wasm');
  }
}
