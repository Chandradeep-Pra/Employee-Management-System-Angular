<form name="employeeform" #form = "ngForm" autocomplete="off"
(ngSubmit) = "onSubmit(form)">
    
      <!-- Employee Id  -- AutoGenerate -->
      <input type="hidden" name="empId" [(ngModel)]= "employeesService.formEmpData.empId">

      <!-- EmployeeName -->
      <div class="form-group">
            <label>Employee Name</label>
            <input name="empName" #empName="ngModel"[(ngModel)]= "employeesService.formEmpData.empName"
            class="form-control" placeholder="Enter Employee Name" minlength="6" maxlength="25" required
            [ngClass] ="{'is-invalid': empName.touched  && empName.invalid}"
            />
            <div class="validation-error" *ngIf = "empName.touched  && empName.invalid">
                  <div *ngIf = "empName.errors.required" >
                        Employee Name should not be empty
                  </div>
            </div>
            </div>
         
     <!-- Designation  -->
      <div class="form-group">
            <label>Designation</label>
            <input name="designation" #designation="ngModel"[(ngModel)]= "employeesService.formEmpData.designation"
            class="form-control" placeholder="Enter Employee designation" minlength="6" maxlength="25" required
            [ngClass] ="{'is-invalid': designation.touched  && designation.invalid}"
            />
            <div class="validation-error" *ngIf = "designation.touched  && designation.invalid">
                  <div *ngIf = "designation.errors.required" >
                       Designation should not be empty
                  </div>
            </div>
            </div>

      <!-- DOJ -->
      <div class="form-group">
            <label>Date of Joining</label>
            <input type="date" name="doj" #doj="ngModel"[(ngModel)]= "employeesService.formEmpData.doj"
            class="form-control" placeholder="date" minlength="6" maxlength="25" required
            [ngClass] ="{'is-invalid': doj.touched  && doj.invalid}"
            />
            <div class="validation-error" *ngIf = "doj.touched  && doj.invalid">
                  <div *ngIf = "doj.errors.required" >
                       Select Date
                  </div>
            </div>
            </div>
     
      <!-- Salary  -->
      <div class="form-group">
            <label>Salary</label>
            <input name="salary" #salary="ngModel"[(ngModel)]= "employeesService.formEmpData.salary"
            class="form-control" placeholder="Enter Salary" minlength="6" maxlength="25" required
            [ngClass] ="{'is-invalid': salary.touched  && salary.invalid}"
            />
            <div class="validation-error" *ngIf = "salary.touched  && salary.invalid">
                  <div *ngIf = "salary.errors.required" >
                      Please Enter salary
                  </div>
            </div>
            </div>
     
      <!-- Phone No. -->
      <div class="form-group">
            <label>Phone</label>
            <input name="phone" #phone="ngModel"[(ngModel)]= "employeesService.formEmpData.phone"
            class="form-control" placeholder="Enter phone no." minlength="10" maxlength="10" required
            [ngClass] ="{'is-invalid': phone.touched  && phone.invalid}"
            />
            <div class="validation-error" *ngIf = "phone.touched  && phone.invalid">
                  <div *ngIf = "phone.errors.required" >
                      Please Enter Phone no.
                  </div>
            </div>
            </div>

          <!-- Department -->
          <div class="form-group">
            <label>Department</label>
            <select name="deptId" #deptId="ngModel" class="form-control" [(ngModel)]="employeesService.formEmpData.deptId"
            required [ngClass]="{'is-invalid': deptId.touched && deptId.invalid}">
                <option value="" selected disabled>Select Department</option>
                <option *ngFor="let dept of employeesService.departments" value="{{dept.deptId}}">{{dept.deptName}}</option>
            </select>
        </div>
        <div class="validation-error" *ngIf="deptId.touched && deptId.invalid">
            <div *ngIf="deptId.errors.required" style="color: red;">Department should not be empty</div>
        </div><br>

        <!-- Active -->
        <div class="form-group">
            <div class="form-check">
                  <label class="form-check-label">Is Active</label>
                  <input type="checkbox" name="active" id="active"
                  #active = "ngModel"
                  [(ngModel)] = "employeesService.formEmpData.active"
                  class="form-check-input" required>
            </div>
        </div>

      

      <!-- Submit Button  -->
       <br>
      <div class="form-group">
          <button type="submit" class="btn btn-primary" [disabled] ="!(form.valid && form.dirty)">
              Submit
          </button>
          &nbsp;
          <button type="reset" class="btn btn-secondary">
              Reset
          </button>
      </div>



</form>


