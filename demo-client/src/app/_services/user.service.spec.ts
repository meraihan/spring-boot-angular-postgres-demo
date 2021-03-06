import {TestBed, ComponentFixture} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from './user.service';
import {User} from '../user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('UserService', () => {
  let service : UserService;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<UserService>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService, HttpClient]
    })
    //service = fixture.componentInstance;
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });


  //Test case 1
  it('be able to retrive users list from API bia GET', () => {
      const dummyUsers: User[] = [
        {
          id: 1,
          username: 'Abdul Hamid',
          email: 'hamid@gmail.com'
        },{
          id: 2,
          username: 'Abdul Korim',
          email: 'korim@gmail.com'
        }];
        service.getUserList().subscribe(users =>{
          expect(users.length).toBe(2);
          expect(users).toEqual(dummyUsers);
        });
  });

    //Test case 2


  afterEach(() => {
    // httpMock.verify();
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
