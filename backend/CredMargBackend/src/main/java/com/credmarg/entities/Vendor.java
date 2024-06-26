package com.credmarg.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Vendor {
    @Id
    private String id;

    private String name;

    @Column(unique = true)
    private String email;

    private String upi;

}
