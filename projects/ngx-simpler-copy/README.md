# Ngx Simpler Copy

Just for copy text to clipboard, only that !!!


### how to:
1. import `NgxSimplerCopyModule`:
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxSimplerCopyModule } from 'ngx-simpler-copy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSimplerCopyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. use directive or exist function:
```
import { Component } from '@angular/core';
import { simplerCopyText } from 'ngx-simpler-copy';

@Component({
  selector: 'app-root',
  templates: `
  <div>
    <p #mySimpler="simplerCopy" simplerCopy>
        08111111111111
    </p>
    <div>
        <button (click)="mySimpler.copy('08111111111111')">
        Copy
        </button>
        &nbsp;
        <button (click)="copyHiThere('Hi, There !!!')">
        Copy "Hi, There !!!"
        </button>
    </div>
  </div>
  `,
  styles: [``]
})
export class AppComponent {
  copyHiThere(text: string): void {
    simplerCopyText(text);
  }
}

```

### Contributes:
- agung96tm ( [github](https://github.com/agung96tm) | [website](https://agung96tm.com/) )
