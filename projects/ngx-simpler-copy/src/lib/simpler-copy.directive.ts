import { Directive, EventEmitter, Output } from '@angular/core';
import { simplerCopyText } from './simpler-copy-text';

@Directive({
  selector: '[simplerCopy]',
  exportAs: 'simplerCopy',
})
export class SimplerCopyDirective {
  @Output() copied: EventEmitter<unknown> = new EventEmitter<unknown>();

  /**
   * run command to copy a text and send emitter
   */
  copy(value): void {
    simplerCopyText(value);
    this.copied.emit(value);
  }
}
