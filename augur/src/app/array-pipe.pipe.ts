import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayPipe'
})
export class ArrayPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return new Array(value);
  }

}
