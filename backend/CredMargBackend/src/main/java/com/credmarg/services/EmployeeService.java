package com.credmarg.services;

import com.credmarg.entities.Employee;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {

    List<Employee> employees = new ArrayList<>();
    public List<Employee> getAllEmployees() {
        return employees;
    }

    public Employee createEmployee(Employee employee) {
        employee.setId(UUID.randomUUID().toString());
        employees.add(employee);
        return employee;
    }

    // Add other CRUD methods as needed
}
