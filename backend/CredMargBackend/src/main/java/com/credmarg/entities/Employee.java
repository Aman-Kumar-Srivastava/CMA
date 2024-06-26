package com.credmarg.entities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Employee {
    @Id
    private String id;

    private String name;

    private String designation;

    private double ctc;

    @Column(unique = true)
    private String email;

}
