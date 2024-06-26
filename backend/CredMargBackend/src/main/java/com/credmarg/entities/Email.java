package com.credmarg.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Email {
    @Id
    private String id;

    @Column(unique = true)
    private String vendorEmailId;

    private String emailMessage;
}
