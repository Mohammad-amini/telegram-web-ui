import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImogiCollectionComponent } from './imogi-collection.component';

describe('ImogiCollectionComponent', () => {
  let component: ImogiCollectionComponent;
  let fixture: ComponentFixture<ImogiCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImogiCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImogiCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
