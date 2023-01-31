package com.cinamatheque.cinamatheque.auth;


import com.cinamatheque.cinamatheque.model.Role;
import com.cinamatheque.cinamatheque.model.User;
import com.cinamatheque.cinamatheque.repository.UserRepository;
import com.cinamatheque.cinamatheque.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        String password;
        if (request.getProvider().isBlank()){
            password = request.getPassword();
        }else{
            password = "Mot de passe incraquable ! je vous le dis, essayez donc pour voir";
        }
            User user = new User(request.getUsername(), request.getFirstname(), request.getLastname(), request.getEmail(), passwordEncoder.encode(password));
            user.setRole(Role.USER);
            userRepository.save(user);
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticateRequest request) {
        String  password = request.getPassword();
        if (request.getProvider().isBlank()){

        } else {
           password = "Mot de passe incraquable ! je vous le dis, essayez donc pour voir";
        }
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        password
                )
        );
        var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}
