package com.credmarg.services;

import com.credmarg.entities.Employee;

import java.util.List;

public interface EmployeeService {
    public List<Employee> getAllEmployees();

    public Employee createEmployee(Employee employee);
}
