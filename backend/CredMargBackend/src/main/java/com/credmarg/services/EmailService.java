package com.credmarg.services;

import com.credmarg.entities.Email;
import com.credmarg.entities.Vendor;
import com.credmarg.repositories.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmailService {

    @Autowired
    private EmailRepository emailRepository;
    public void sendEmailToVendors(List<Vendor> vendors, String templateMessage) {
        for (Vendor vendor : vendors) {
            String emailContent = String.format(templateMessage, vendor.getName(), vendor.getUpi());
            // Mock sending email (printing out the content)
            System.out.println("Sending email to vendor " + vendor.getName() + " at UPI " + vendor.getUpi());
            System.out.println("Email content: " + emailContent);
            Email email=new Email(UUID.randomUUID().toString(), vendor.getEmail(), templateMessage);
            emailRepository.save(email);
        }
    }

    public List<Email> sentEmails() {
        return emailRepository.findAll();
    }
}
