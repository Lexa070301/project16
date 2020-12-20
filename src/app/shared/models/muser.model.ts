export interface Muser {
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
  birth: any;
  department: number;
  id?: number;
}
export enum MyWorkerDepartment {
  it_department,
  sells_department,
  delivery_department,
  legal_department,
}
