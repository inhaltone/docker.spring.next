package com.gendy.dockspring.uniengineers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/engineers")
@RequiredArgsConstructor
public class UniEngineerController {

    private final UniEngineerRepo repo;

    @GetMapping
    public PagedModel<UniEngineer> listEngineers(@ParameterObject Pageable pageable) {
        return new PagedModel<>(repo.findAll(pageable));
    }

    @GetMapping("/{id}")
    public UniEngineer getEngineer(@PathVariable Long id) {
        return repo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UniEngineer createEngineer(@Valid @RequestBody UniEngineer engineer) {
        if (repo.existsByEmailIgnoreCase(engineer.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email " + engineer.getEmail() + " is already registered");
        }
        return repo.save(engineer);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEngineer(@PathVariable Long id) {
        repo.delete(getEngineer(id));
    }
}
