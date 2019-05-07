import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'   // that's the name of the pipe, that we use in the HMTL file
})
export class ReversePipe implements PipeTransform {

  // A pipe gets always a value. The other arguments are optional... 
  transform(value: any) {
    let reverseValue = value.split('').reverse().join('');
    return reverseValue;
  }

}
