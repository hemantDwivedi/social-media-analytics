package com.hemant.smad.auth;

import jakarta.validation.constraints.*;

public class AuthDtos {

    public record SignupRequest(
        @NotBlank @Size(min = 2) String name,
        @Email @NotBlank String email,
        @Size(min = 8) String password
    ) {}

    public record LoginRequest(
        @Email @NotBlank String email,
        @Size(min = 8) String password
    ) {}

    public record AuthResponse(
        String token,
        UserView user
    ) {}

    public record UserView(Long id, String name, String email) {}
}