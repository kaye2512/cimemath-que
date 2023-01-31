package com.cinamatheque.cinamatheque.auth;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register (
            @RequestBody RegisterRequest request
    ) throws Exception {
        if (request.getPassword().isBlank() && !request.getProvider().isBlank()){
             request.setPassword("Mot de passe incraquable ! je vous le dis, essayez donc pour voir");
        }

        return ResponseEntity.ok(
                authenticationService.register(request)
        );
    }


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate (
            @RequestBody AuthenticateRequest request
    ){
        if (request.getPassword().isBlank() && !request.getProvider().isBlank()){
            request.setPassword("Mot de passe incraquable ! je vous le dis, essayez donc pour voir");
        }
        return ResponseEntity.ok(
                authenticationService.authenticate(request)
        );
    }
}
