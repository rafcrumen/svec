import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterList'})
export class FilterListPipe implements PipeTransform {    
  transform(value: any[], what: string) {
      if (value ) {
        return value.filter(e => String(e['descripcion']).indexOf(what || e['descripcion'])> -1);
      }
  }
}