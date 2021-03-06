import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../_services/user.service';
import { BoardUserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('BoardUserComponent', () => {
  let component: BoardUserComponent;
  let fixture: ComponentFixture<BoardUserComponent>;
  let service: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardUserComponent ],
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test 1
  it('should delete the product from the products array within the component', () => {
    component.users = [
      {
        id: 1,
        username: 'Abdul Hamid',
        email: 'hamid@gmail.com'
      },{
        id: 2,
        username: 'Abdul Korim',
        email: 'korim@gmail.com'
      }
    ];

    const productId = 0;
    component.deleteUser(productId);

    const index = component.users.findIndex(
      product => product.id === productId
    );
    expect(index).toBeLessThan(0);
  });






  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
