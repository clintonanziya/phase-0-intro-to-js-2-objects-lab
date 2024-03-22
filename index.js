// Initialize employee object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
  };
  
  // Function to update employee with key and value (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update employee with key and value (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    let newObj = { ...employee };
    delete newObj[key];
    return newObj;
  }
  
  // Function to delete property from employee (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Export functions
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  