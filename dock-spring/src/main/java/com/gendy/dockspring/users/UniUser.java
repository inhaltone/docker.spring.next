package com.gendy.dockspring.users;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class UniUser {

    @Id
    private Long id;
    private String name;
    private String email;
    private UserRoleEnum role;
}
