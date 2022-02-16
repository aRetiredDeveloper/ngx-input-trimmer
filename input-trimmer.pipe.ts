import {
DefaultValueAccessor,
NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Directive, Input, HostListener } from '@angular/core';

type trimSpaceInterface = {
  [key: string]: RegExp
}

@Directive({
selector: 'input[InputTrimmer], textarea[InputTrimmer]',
providers: [
  { provide: NG_VALUE_ACCESSOR, useExisting: NgxInputTrimmer, multi: true }
]
})
export class NgxInputTrimmer extends DefaultValueAccessor {
  trimSpacesCase: trimSpaceInterface = { left: /^\s+/, right: /\s+$/, both: /^\s+|\s+$/g };
  @Input() removeSpaces: string = 'both';

  @Input()
  set InputTrimmer(val: string) {
    this.writeValue(val);
  }

  @HostListener('input', ['$event.target.value'])
  ngOnChange = (val: string) => {
    this.writeValue(val);
  };

  override writeValue(value: any): void {
    if (typeof value === 'string') {
      const trimSpacesCase =
        this.removeSpaces && this.trimSpacesCase[this.removeSpaces]
          ? this.trimSpacesCase[this.removeSpaces]
          : this.trimSpacesCase['both'];
      value = value.replace(trimSpacesCase, '');
    }
    super.writeValue(value);
  }
}