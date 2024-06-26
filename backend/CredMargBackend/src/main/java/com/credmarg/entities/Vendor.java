package com.credmarg.entities;

//import jakarta.persistence.*;
import lombok.*;

//@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Vendor {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String name;

//    @Column(unique = true)
    private String email;

    private String upi;

}
