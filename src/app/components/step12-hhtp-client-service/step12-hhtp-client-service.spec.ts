import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step12HhtpClientService } from './step12-hhtp-client-service';

describe('Step12HhtpClientService', () => {
  let component: Step12HhtpClientService;
  let fixture: ComponentFixture<Step12HhtpClientService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step12HhtpClientService],
    }).compileComponents();

    fixture = TestBed.createComponent(Step12HhtpClientService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
