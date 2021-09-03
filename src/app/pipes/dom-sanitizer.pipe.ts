import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer){}
  transform(imageURL:any): any {
    let domImage = `url('${imageURL}')`;
    return this.domSanitizer.bypassSecurityTrustStyle( domImage );
  }

}
