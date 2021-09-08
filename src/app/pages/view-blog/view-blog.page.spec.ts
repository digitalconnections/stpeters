import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBlogPage } from './view-blog.page';

describe('ViewBlogPage', () => {
  let component: ViewBlogPage;
  let fixture: ComponentFixture<ViewBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
