import { SimplerCopyDirective } from './simpler-copy.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `
    <div>
      <div #myCopy="simplerCopy" (copied)="onCopy($event)" simplerCopy>
        {{ currentPhoneNumber }}
      </div>
      <button (click)="myCopy.copy(currentPhoneNumber)">copy</button>
    </div>
  `,
})
class TestComponent {
  currentPhoneNumber = '6287782965883';
  newPhoneNumber = '9999999999';
  resultText: string;

  onCopy($event: any): void {
    this.resultText = $event;
  }
}

describe('SimplerCopyDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SimplerCopyDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  xit('should success copy value from copy method', async () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const copyEl: HTMLElement = debugEl.querySelector('button');

    //
    copyEl.click();
    fixture.detectChanges();

    // todo: navigator need permission, i dont like it
    // navigator.clipboard.readText();
    // const result = await navigator.clipboard.readText()
    //   .then((text) => {
    //   expect(component.resultText).toBe(text);
    // });
  });

  it('should return value same as input from copy method', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const copyEl: HTMLElement = debugEl.querySelector('button');

    copyEl.click();
    fixture.detectChanges();
    expect(component.resultText).toBe(component.currentPhoneNumber);
  });
});
