/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZEBComponent } from './ZEB.component';

describe('ZEBComponent', () => {
  let component: ZEBComponent;
  let fixture: ComponentFixture<ZEBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZEBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
