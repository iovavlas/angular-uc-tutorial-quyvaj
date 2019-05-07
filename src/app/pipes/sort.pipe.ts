import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',   // that's the name of the pipe, that we use in the HMTL file
  pure: false     /* Pipes will not re-run automatically by default, if the data change 
  (e.g. if we add manually a server). That would be bad for the performance. 
  We can ovverride the default behaviour with 'pure: false' */ 
})
export class SortPipe implements PipeTransform {

  // A pipe gets always a value. The other arguments are optional... 
  // The argument 'value' is the Array of servers, that wil be passed through... 
  transform(value: any) {
    return value.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
