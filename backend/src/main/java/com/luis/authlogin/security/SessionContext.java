package com.luis.authlogin.security;

import com.luis.authlogin.DTO.LoginDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;



public class SessionContext {
    @Getter
    private static String email;
    @Getter
    private static String token;

    public static LoginDTO setContext(final String email, final String token) {
        SessionContext.email = email;
        SessionContext.token = token;
        return new LoginDTO(email, token);
    }

    public static LoginDTO getContext() {
        return new LoginDTO(email, token);
    }

}
