import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemeService } from './meme.service';
import { MemeData } from './model/meme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}


