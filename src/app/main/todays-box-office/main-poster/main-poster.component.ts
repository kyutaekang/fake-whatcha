import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-poster',
  templateUrl: './main-poster.component.html',
  styleUrls: ['./main-poster.component.css']
})
export class MainPosterComponent implements OnInit {

  constructor() { }

  @Input() movie: any;

  ngOnInit() {
  }

}
