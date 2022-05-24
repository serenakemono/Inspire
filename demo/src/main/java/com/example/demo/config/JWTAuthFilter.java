package com.example.demo.config;

import com.example.demo.services.AppUserServices;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTAuthFilter extends OncePerRequestFilter {

    private AppUserServices userServices;
    private JWTTokenHelper jwtTokenHelper;

    public JWTAuthFilter(
            AppUserServices userServices,
            JWTTokenHelper jwtTokenHelper) {
        this.userServices = userServices;
        this.jwtTokenHelper = jwtTokenHelper;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {
        String authToken = jwtTokenHelper.getToken(request);

        if (authToken != null) {
            String username = jwtTokenHelper.getUsernameFromToken(authToken);
            if (username != null) {
                UserDetails userDetails = userServices.loadUserByUsername(username);
                if (jwtTokenHelper.validateToken(authToken, userDetails)) {
                    UsernamePasswordAuthenticationToken auth
                            = new UsernamePasswordAuthenticationToken(
                                    userDetails, null, null);
                    SecurityContextHolder.getContext().setAuthentication(auth);
                }
            }
        }

        filterChain.doFilter(request, response);
    }
}
