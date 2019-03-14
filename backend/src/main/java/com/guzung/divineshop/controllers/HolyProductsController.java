package com.guzung.divineshop.controllers;

import com.guzung.divineshop.entities.HolyProduct;
import com.guzung.divineshop.repositories.HolyProductsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
public class HolyProductsController {

    @Autowired
    private HolyProductsRepository holyProductsRepository;

    @RequestMapping(value = "/get-all-products", method = RequestMethod.GET)
    public ResponseEntity<List<HolyProduct>> getAllProducts() {
        List<HolyProduct> products = holyProductsRepository.findAll();
        return new ResponseEntity<>(holyProductsRepository.findAll(), HttpStatus.OK);
    }
}
