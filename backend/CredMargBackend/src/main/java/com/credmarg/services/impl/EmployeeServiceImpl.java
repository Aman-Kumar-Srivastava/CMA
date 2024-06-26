package com.credmarg.services.impl;

import com.credmarg.entities.Employee;
import com.credmarg.repositories.EmployeeRepository;
import com.credmarg.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee createEmployee(Employee employee) {
        employee.setId(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }
}
