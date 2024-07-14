package com.hemant.smad.socialmediaaccount;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<SocialMediaAccount, Long> {
    List<SocialMediaAccount> findByUserId(Long userId);
}
