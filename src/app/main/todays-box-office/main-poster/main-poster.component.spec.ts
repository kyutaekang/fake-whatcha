/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainPosterComponent } from './main-poster.component';

describe('MainPosterComponent', () => {
  let component: MainPosterComponent;
  let fixture: ComponentFixture<MainPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
