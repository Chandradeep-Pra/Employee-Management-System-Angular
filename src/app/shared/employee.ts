import { Department } from "./department";

// private int empId;
// 	private String empName;
// 	private String designation;
// 	private LocalDate doj;
// 	private double salary;
// 	private boolean isActive;
// 	private long phone;
export class Employee {
    empId: number=0;
    empName: String='';
    designation: String='';
    doj:Date;
    salary:number;
    isActive:boolean=false;
    phone:number;
    department:Department;
}
