package com.gendy.dockspring;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(info = @Info(title = "Docker Spring Next API", version = "1.0"))
@SpringBootApplication
public class DockSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(DockSpringApplication.class, args);
    }
}
