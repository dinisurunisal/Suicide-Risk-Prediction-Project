import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstPagePage } from './first-page.page';

describe('FirstPagePage', () => {
  let component: FirstPagePage;
  let fixture: ComponentFixture<FirstPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
