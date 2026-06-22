package com.hemant.smad.auth;

import com.hemant.smad.auth.AuthDtos.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository users;
    private final PasswordEncoder encoder;
    private final JwtService jwt;

    public AuthDtos.AuthResponse signup(AuthDtos.SignupRequest req) {
        if (users.existsByEmail(req.email())) {
            throw new IllegalArgumentException("An account with this email already exists.");
        }
        User user = new User(req.name(), req.email(), encoder.encode(req.password()));
        users.save(user);
        return buildResponse(user);
    }

    public AuthResponse login(LoginRequest req) {
        User user = users.findByEmail(req.email())
            .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
        if (!encoder.matches(req.password(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password.");
        }
        return buildResponse(user);
    }

    private AuthResponse buildResponse(User user) {
        String token = jwt.generateToken(user.getEmail());
        return new AuthResponse(token,
            new UserView(user.getId(), user.getName(), user.getEmail()));
    }
}