package com.hemant.smad.profile;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileRepository profileRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Profile> findById(@PathVariable Long id){
        Optional<Profile> user = profileRepository.findById(id);
        if (user.isPresent()) return ResponseEntity.ok(user.get());
        throw new RuntimeException("Profile not found");
    }

    @GetMapping
    public ResponseEntity<List<Profile>> findAll(){
        return ResponseEntity.ok(profileRepository.findAll());
    }
}
