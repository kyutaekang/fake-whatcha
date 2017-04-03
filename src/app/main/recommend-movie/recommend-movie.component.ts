import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-recommend-movie',
  templateUrl: './recommend-movie.component.html',
  styleUrls: ['./recommend-movie.component.css']
})
export class RecommendMovieComponent implements OnInit {

  // @ViewChild('input') movieName: ElementRef;

  constructor(private angularFire: AngularFire) { }

  userUID: string;

  movieList$: FirebaseListObservable<any>;

  ngOnInit() {
    this.angularFire.auth.subscribe((data) => {
      if(data) {
        this.userUID = data.auth.uid;

        this.movieList$ = this.angularFire.database.list('/movie-list/recommend');
      }
      else {
        this.userUID = null;
      }
      console.log(data);
    });
  }

  saveMovieName(movieName): void {
    this.movieList$.push({ movieName : movieName, uid: this.userUID });
  }
  updateMovieName(key, movieName) {
    this.movieList$.update(key, { movieName : movieName });
  }
  deleteMovieName(key) {
    this.movieList$.remove(key);
  }

}
