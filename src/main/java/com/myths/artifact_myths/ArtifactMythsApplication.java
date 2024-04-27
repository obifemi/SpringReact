package com.myths.artifact_myths;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {
   SecurityAutoConfiguration.class,
    org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class}
    )
public class ArtifactMythsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ArtifactMythsApplication.class, args);
    }

}
