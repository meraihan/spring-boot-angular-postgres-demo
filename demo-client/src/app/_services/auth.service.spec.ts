import {TestBed, ComponentFixture} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

describe('AuthService', () => {
  let service : AuthService;
  let httpMock: HttpTestingController;

  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, FormsModule],
    providers: [AuthService, HttpClient]
  })

  service  = TestBed.get(AuthService);
  httpMock = TestBed.get(HttpTestingController);

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});

/*
let location: Location;
let router: Router;

beforeEach(() => {
  fixture = TestBed.createComponent(HomepageComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();

  router = TestBed.get(Router);
  location = TestBed.get(Location);
  router.initialNavigation();
});

*/
