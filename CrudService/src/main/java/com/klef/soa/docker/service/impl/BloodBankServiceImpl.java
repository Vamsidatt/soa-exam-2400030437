package com.klef.soa.docker.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.soa.docker.dto.BloodBankRequestDTO;
import com.klef.soa.docker.entity.BloodBank;
import com.klef.soa.docker.repository.BloodBankRepository;
import com.klef.soa.docker.service.BloodBankService;

@Service
public class BloodBankServiceImpl implements BloodBankService {

    @Autowired
    private BloodBankRepository repo;

    @Override
    public BloodBank add(BloodBankRequestDTO dto) {
        BloodBank bloodBank = BloodBank.builder()
                .bankName(dto.getBankName())
                .city(dto.getCity())
                .contactNumber(dto.getContactNumber())
                .unitsAvailable(dto.getUnitsAvailable())
                .build();
        return repo.save(bloodBank);
    }

    @Override
    public List<BloodBank> displayAll() {
        return repo.findAll();
    }

    @Override
    public String delete(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Record not found with ID: " + id);
        }
        repo.deleteById(id);
        return "Record ID deleted successfully: " + id;
    }
}