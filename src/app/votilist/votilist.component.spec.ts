import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotilistComponent } from './votilist.component';

describe('VotilistComponent', () => {
  let component: VotilistComponent;
  let fixture: ComponentFixture<VotilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
