package com.klef.soa.exam.service;

import java.util.List;

import com.klef.soa.exam.entity.BloodBank;

public interface BloodBankService {

    BloodBank add(BloodBank bloodBank);

    List<BloodBank> displayAll();

    String delete(Long id);
}