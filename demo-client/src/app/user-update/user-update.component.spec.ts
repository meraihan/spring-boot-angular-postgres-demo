import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserUpdateComponent } from './user-update.component';
import {UserService} from '../_services/user.service';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


describe('UserUpdateComponent', () => {
  let component: UserUpdateComponent;
  let fixture: ComponentFixture<UserUpdateComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdateComponent ],
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [UserService]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
