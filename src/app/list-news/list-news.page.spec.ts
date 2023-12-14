import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListNewsPage } from './list-news.page';

describe('ListNewsPage', () => {
  let component: ListNewsPage;
  let fixture: ComponentFixture<ListNewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
