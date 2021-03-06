import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../_services/auth.service';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignUp } from './signup';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: AuthService;
  let httpTestctrl : HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [FormsModule,HttpClientModule, HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService);
    fixture.detectChanges();
    httpTestctrl = TestBed.get(HttpTestingController);
  });

  it('should add user and return added user', () => {
    const newUser : SignUp = {username: 'Test Name', email: 'test@gmail.com', password: '2323'};
    service.register(newUser).subscribe((addUser)=>{
      expect(addUser).toBe(newUser);
    });

    const req = httpTestctrl.expectOne(service.AUTH_API+'signup');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(newUser);
    expect(component).toBeTruthy();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
