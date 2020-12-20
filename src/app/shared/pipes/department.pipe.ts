import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'department'
})
export class DepartmentPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0:
        return 'IT отдел';
        break;
      case 1:
        return 'Отдел продаж';
        break;
      case 2:
        return 'Отдел доставки';
        break;
      case 3:
        return 'Юридический отдел';
        break;
      default:
        return 'Неизвестный отдел';
        break;
    }
  }
}
