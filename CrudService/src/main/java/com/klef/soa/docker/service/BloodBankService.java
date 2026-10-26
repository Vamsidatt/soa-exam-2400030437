package com.klef.soa.docker.service;

import java.util.List;
import com.klef.soa.docker.dto.BloodBankRequestDTO;
import com.klef.soa.docker.entity.BloodBank;

public interface BloodBankService {

    BloodBank add(BloodBankRequestDTO bloodBankDTO);

    List<BloodBank> displayAll();

    String delete(Long id);
}