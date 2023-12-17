// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '123 Main St',
  };
  
  // Function to update employee non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property from employee destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Tests
  describe('employees', function () {
    describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
      beforeEach(function () {
        for (const key in employee) {
          delete employee[key];
        }
  
        employee.name = 'Sam';
      });
  
      it('returns an employee with the original key value pairs and the new key value pair', function () {
        expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
          name: 'Sam',
          streetAddress: '11 Broadway',
        });
      });
  
      it('it does not modify the original employee, but rather returns a clone with the new data', function () {
        updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
  
        expect(employee['streetAddress']).to.equal(undefined);
      });
    });
  
    describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
      it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
        expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
          name: 'Sam',
          streetAddress: '12 Broadway',
        });
  
        expect(employee).to.eql({
          name: 'Sam',
          streetAddress: '12 Broadway',
        });
      });
    });
  
    describe('deleteFromEmployeeByKey(employee, key)', function () {
      it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function () {
        let newEmployee = deleteFromEmployeeByKey(employee, 'name');
  
        expect(newEmployee['name']).to.equal(undefined);
        expect(typeof newEmployee).to.equal('object');
      });
  
      it('does not modify the original employee (it is non-destructive)', function () {
        deleteFromEmployeeByKey(employee, 'name');
  
        expect(employee['name']).to.equal('Sam');
      });
    });
  
    describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
      it('returns employee without the deleted key/value pair', function () {
        let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  
        expect(newEmployee['name']).to.equal(undefined);
      });
  
      it('modifies the original employee', function () {
        let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  
        expect(employee['name']).to.equal(undefined);
        expect(employee).to.equal(newEmployee);
      });
    });
  });
  