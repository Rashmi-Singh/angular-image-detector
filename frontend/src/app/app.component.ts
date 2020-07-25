import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as tf from '@tensorflow/tfjs';
// Adds the WASM backend to the global backend registry.
import '@tensorflow/tfjs-backend-wasm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  employeeData: JSON;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get<JSON>('/api/employees').subscribe((data) => {
      this.employeeData = data as JSON;
    });
  }

  async setBackend() {
    // Set the backend to WASM and wait for the module to be ready.
    tf.setBackend('wasm');
  }
}
