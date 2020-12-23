import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemUnicaComponent } from './postagem-unica.component';

describe('PostagemUnicaComponent', () => {
  let component: PostagemUnicaComponent;
  let fixture: ComponentFixture<PostagemUnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemUnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
