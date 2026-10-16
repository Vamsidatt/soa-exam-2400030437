package com.klef.soa.exam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.soa.exam.entity.BloodBank;
import com.klef.soa.exam.repository.BloodBankRepository;

@Service
public class BloodBankServiceImpl implements BloodBankService {

    @Autowired
    private BloodBankRepository repo;

    @Override
    public BloodBank add(BloodBank bloodBank) {
        return repo.save(bloodBank);
    }

    @Override
    public List<BloodBank> displayAll() {
        return repo.findAll();
    }

    @Override
    public String delete(Long id) {
        repo.deleteById(id);
        return "Record ID deleted successfully: " + id;
    }
}