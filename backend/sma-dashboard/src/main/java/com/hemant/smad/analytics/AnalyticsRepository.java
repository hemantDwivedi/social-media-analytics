package com.hemant.smad.analytics;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AnalyticsRepository extends JpaRepository<Analytics, Long> {
    Analytics findBySocialAccountId(Long accountId);
}
