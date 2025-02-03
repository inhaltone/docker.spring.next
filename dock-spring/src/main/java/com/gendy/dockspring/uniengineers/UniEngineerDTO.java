package com.gendy.dockspring.uniengineers;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class UniEngineerDTO {

    @NotNull
    private Long uniEngineerId;

    @Schema(
            format = "date",
            description = "Date in the format dd/MM/yyyy",
            example = "31/01/2025",
            pattern = "^\\d{2}/\\d{2}/\\d{4}$",
            defaultValue = "21/12/1989"
    )
    @NotNull
    private String dateRegistered;

    @NotBlank
    private Boolean hasExperience;

    @Schema(
            minLength = 2,
            maxLength = 100
    )
    private String nickName;

    @Schema(
            description = "The age of the EngineerDTO",
            minimum = "15",
            maximum = "55",
            example = "30"
    )
    private Integer age;

    @Schema(
            format = "email",
            description = "email of EngineerDTO",
            example = "mail@mail.com"
    )
    @NotNull
    private String email;


}
