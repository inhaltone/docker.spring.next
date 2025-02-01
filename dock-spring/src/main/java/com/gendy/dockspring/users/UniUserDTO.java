package com.gendy.dockspring.users;

import jakarta.validation.constraints.Pattern;
import lombok.*;
import io.swagger.v3.oas.annotations.media.Schema;

@Getter
@Setter
@RequiredArgsConstructor
@Data
@AllArgsConstructor
@Schema(description = "UniUserDTO")
public class UniUserDTO {

    @Schema(description = "The unique ID of the user", example = "antonakis")
    private String name;

    @Schema(
            description = "The email of the hero.",
            format = "email",
            example = "hero@example.com"
    )
    private String email;

    @Schema(description = "Role of the user")
    private UserRoleEnum role;

}
