package com.credmarg.entities;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Employee {
    private String id;

    private String name;

    private String designation;

    private double ctc;

    private String email;

}
