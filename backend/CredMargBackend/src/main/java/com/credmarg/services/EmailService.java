package com.credmarg.services;

import com.credmarg.entities.Vendor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailService {
    public void sendEmailToVendors(List<Vendor> vendors, String templateMessage) {
        for (Vendor vendor : vendors) {
            String emailContent = String.format(templateMessage, vendor.getName(), vendor.getUpi());
            // Mock sending email (print out the content)
            System.out.println("Sending email to vendor " + vendor.getName() + " at UPI " + vendor.getUpi());
            System.out.println("Email content: " + emailContent);
        }
    }
}
