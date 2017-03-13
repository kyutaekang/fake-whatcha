import { Component, OnInit } from '@angular/core';
import { MovieIF } from './movie.interface';

@Component({
  selector: 'app-todays-box-office',
  templateUrl: './todays-box-office.component.html',
  styleUrls: ['./todays-box-office.component.css']
})
export class TodaysBoxOfficeComponent implements OnInit {

  constructor() { }

  rankingList: Array<MovieIF> = [];
  mainPoster: MovieIF;
  subPosterList: Array<MovieIF> = [];

  ngOnInit() {
    this.rankingList = [
      { imageUrl: 'http://cfile29.uf.tistory.com/image/122AE7394F2B1C430E6BE3', title: '미녀와 야수'},
      { imageUrl: 'http://cfile29.uf.tistory.com/image/122AE7394F2B1C430E6BE3', title: '콩: 스컬 아일랜드'},
      { imageUrl: 'http://cfile29.uf.tistory.com/image/122AE7394F2B1C430E6BE3', title: '로건'},
      { imageUrl: 'http://cfile29.uf.tistory.com/image/122AE7394F2B1C430E6BE3', title: '프로즌'},
      { imageUrl: 'http://cfile29.uf.tistory.com/image/122AE7394F2B1C430E6BE3', title: '보통사람'},
      { imageUrl: 'http://cfile29.uf.tistory.com/image/122AE7394F2B1C430E6BE3', title: '비정규직 특수요원'},
      { imageUrl: 'http://cfile29.uf.tistory.com/image/122AE7394F2B1C430E6BE3', title: '히든 피겨스'},
      { title: '이미지없다'},
    ];

    this.mainPoster = this.rankingList[0];
    this.subPosterList = this.rankingList.slice(1, this.rankingList.length-1);
  }

}
