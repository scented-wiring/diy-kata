const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find(n => n.name === employeeName);

  return employee.role;
};

module.exports = getEmployerRole;
