package com.hemant.smad.socialmediaaccount;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/accounts")
@RequiredArgsConstructor
public class AccountController {
    private final AccountRepository accountRepository;

    @GetMapping("/{userId}")
    public ResponseEntity<List<SocialMediaAccount>> findAll(@PathVariable Long userId){
        return ResponseEntity.ok(accountRepository.findByUserId(userId));
    }
}
