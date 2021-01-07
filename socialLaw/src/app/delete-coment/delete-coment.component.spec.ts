import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComentComponent } from './delete-coment.component';

describe('DeleteComentComponent', () => {
  let component: DeleteComentComponent;
  let fixture: ComponentFixture<DeleteComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
