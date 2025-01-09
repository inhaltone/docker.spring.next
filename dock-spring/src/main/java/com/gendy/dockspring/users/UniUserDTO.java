package com.gendy.dockspring.uniengineers;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import io.swagger.v3.oas.annotations.media.Schema;

@Getter
@Setter
@NoArgsConstructor
@Schema(description = "UniUserDTO")
public class UniUserDTO {

    @Schema(description = "The unique ID of the user", example = "antonakis")
    private String name;

    @Schema(description = "The email of the user", example = "mail@mail.com")
    private String email;
}
