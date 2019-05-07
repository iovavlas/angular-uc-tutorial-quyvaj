import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'   // that's the name of the pipe, that we use in the HMTL file
})
export class ShortenPipe implements PipeTransform {

  // A pipe gets always a value. The other arguments are optional... 
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }

}
