// package com.myths.artifact_myths.user.validation;

// import jakarta.validation.Constraint;
// import jakarta.validation.Payload;
// import java.lang.annotation.ElementType;
// import java.lang.annotation.Retention;
// import java.lang.annotation.RetentionPolicy;
// import java.lang.annotation.Target;

// @Constraint(validatedBy = { UniqueEmailValidator.class })

// @Target({ ElementType.FIELD })
// @Retention(RetentionPolicy.RUNTIME)
// public @interface UniqueEmail {
// String message() default "Email already exists";

// Class<?>[] groups() default {}; // Make sure to add () after groups

// Class<? extends Payload>[] payload() default {}; // Make sure to add () after
// payload

// }
