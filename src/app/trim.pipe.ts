import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const transformedDate = value.replace(/ +/g,'_') // Replace Whitespace with Underscore
    return transformedDate;
  }

}
