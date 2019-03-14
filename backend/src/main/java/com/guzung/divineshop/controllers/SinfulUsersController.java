package com.guzung.divineshop.controllers;

import com.guzung.divineshop.Constants;
import com.guzung.divineshop.entities.SinfulUser;
import com.guzung.divineshop.repositories.SinfulUserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.Optional;

@Slf4j
@RestController
public class SinfulUsersController {
    @Autowired
    SinfulUserRepository sinfulUserRepository;

    @RequestMapping("/login")
    public Integer login(@RequestBody SinfulUser user) {
        Optional<SinfulUser> sinlessUser = sinfulUserRepository.findByUsername(user.getUsername());
        return sinlessUser
                .map(u -> u.getPassword().equals(user.getPassword()) ? Constants.SIGN_IN_SUCCESS : Constants.INCORRECT_MANTRA)
                .orElse(Constants.TOO_SINFUL_USER);
    }

    @RequestMapping("/signin")
    public Integer signin(@RequestBody SinfulUser user) {
        Optional<SinfulUser> sinlessUser = sinfulUserRepository.findByUsername(user.getUsername());
        return sinlessUser
                .map(u -> Constants.USER_EXIST)
                .orElseGet(()-> {
                    try {
                        sinfulUserRepository.save(user);
                    } catch (IllegalArgumentException e) {
                        return Constants.DATE_INCORECTE;
                    }
                    return Constants.USER_CREATED;
                });
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }
}
