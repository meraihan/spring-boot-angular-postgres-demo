import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../_services/user.service';
import { BoardUserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


describe('BoardUserComponent', () => {
  let component: BoardUserComponent;
  let fixture: ComponentFixture<BoardUserComponent>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
