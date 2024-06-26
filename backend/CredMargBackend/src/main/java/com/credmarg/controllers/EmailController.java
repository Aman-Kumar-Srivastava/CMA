package com.credmarg.controllers;

import com.credmarg.entities.Vendor;
import com.credmarg.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/email")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/sendEmailToVendors")
    public void sendEmailToVendors(@RequestBody List<Vendor> vendors, @RequestParam String templateMessage) {
        emailService.sendEmailToVendors(vendors, templateMessage);
    }
}
