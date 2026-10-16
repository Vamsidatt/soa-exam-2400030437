package com.klef.soa.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.soa.exam.entity.BloodBank;
import com.klef.soa.exam.service.BloodBankService;

@RestController
public class BloodBankController {

    @Autowired
    private BloodBankService service;

    @GetMapping("/")
    public ResponseEntity<String> root() {
        return new ResponseEntity<>("CRUD Service is running successfully", HttpStatus.OK);
    }

    @PostMapping("/Add")
    public ResponseEntity<BloodBank> add(@RequestBody BloodBank bloodBank) {
        BloodBank saved = service.add(bloodBank);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping("/DisplayAll")
    public ResponseEntity<List<BloodBank>> displayAll() {
        List<BloodBank> list = service.displayAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        String message = service.delete(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}