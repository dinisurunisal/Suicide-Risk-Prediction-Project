import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultHomePage } from './result-home.page';

describe('ResultHomePage', () => {
  let component: ResultHomePage;
  let fixture: ComponentFixture<ResultHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
