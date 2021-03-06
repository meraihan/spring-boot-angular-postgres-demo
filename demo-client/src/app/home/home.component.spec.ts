import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../_services/user.service';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
