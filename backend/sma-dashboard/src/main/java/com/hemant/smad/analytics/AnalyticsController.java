package com.hemant.smad.analytics;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/analytics")
@RequiredArgsConstructor
public class AnalyticsController {
    private final AnalyticsRepository analyticsRepository;

    @GetMapping("/{accountId}")
    public ResponseEntity<Analytics> findById(@PathVariable Long accountId){
        Analytics analytics = analyticsRepository.findBySocialAccountId(accountId);
        return ResponseEntity.ok(analytics);
    }
}
