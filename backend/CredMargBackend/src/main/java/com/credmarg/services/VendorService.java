package com.credmarg.services;

import com.credmarg.entities.Vendor;
import com.credmarg.repositories.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class VendorService {

    @Autowired
    private VendorRepository vendorRepository;

    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    public Vendor createVendor(Vendor vendor) {
        String randomUserId = UUID.randomUUID().toString();
        vendor.setId(randomUserId);
        return vendorRepository.save(vendor);
    }
}
