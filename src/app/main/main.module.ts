import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CarouselModule } from 'ng2-bootstrap';

import { MainComponent } from './main.component';

import { SliderComponent } from './slider/slider.component';
import { TodaysBoxOfficeComponent } from './todays-box-office/todays-box-office.component';
import { RankingComponent } from './todays-box-office/ranking/ranking.component';
import { MainPosterComponent } from './todays-box-office/main-poster/main-poster.component';
import { SubPosterComponent } from './todays-box-office/sub-poster/sub-poster.component';
import { CategoryMoviesComponent } from './category-movies/category-movies.component';
import { CategoryListComponent } from './category-movies/category-list/category-list.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { WhatchaNewMovieComponent } from './new-movies/whatcha-new-movie/whatcha-new-movie.component';
import { BoxOfficeNewMovieComponent } from './new-movies/box-office-new-movie/box-office-new-movie.component';
import { RecommendMovieComponent } from './recommend-movie/recommend-movie.component';

@NgModule({
  imports: [
    CommonModule,
    // CarouselModule.forRoot(),
  ],
  declarations: [
    MainComponent,
    BannerComponent,
    SliderComponent, TodaysBoxOfficeComponent, RankingComponent, MainPosterComponent, SubPosterComponent, CategoryMoviesComponent, CategoryListComponent, NewMoviesComponent, WhatchaNewMovieComponent, BoxOfficeNewMovieComponent, RecommendMovieComponent,
  ],
  exports: [
    MainComponent,
    BannerComponent,
    SliderComponent, TodaysBoxOfficeComponent, RankingComponent, MainPosterComponent, SubPosterComponent, CategoryMoviesComponent, CategoryListComponent, NewMoviesComponent, WhatchaNewMovieComponent, BoxOfficeNewMovieComponent, RecommendMovieComponent,
  ]
})
export class MainModule { }
