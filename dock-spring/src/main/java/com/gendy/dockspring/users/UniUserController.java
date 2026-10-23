package com.gendy.dockspring.users;

import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UniUserController {

    private final UniUserRepo repo;

    @GetMapping
    public PagedModel<UniUser> listUsers(@ParameterObject Pageable pageable) {
        return new PagedModel<>(repo.findAll(pageable));
    }
}
