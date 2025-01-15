package com.gendy.dockspring;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(
		info = @Info(title = "DockerSpring POC", version = "1.0", description = "My API Documentation")
)
@SpringBootApplication
public class DockSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(DockSpringApplication.class, args);
	}

}

