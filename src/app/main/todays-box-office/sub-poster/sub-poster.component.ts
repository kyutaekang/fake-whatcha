import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-poster',
  templateUrl: './sub-poster.component.html',
  styleUrls: ['./sub-poster.component.css']
})
export class SubPosterComponent implements OnInit {

  constructor() { }

  @Input() movie: any;

  ngOnInit() {
  }

}
