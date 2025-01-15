package com.gendy.dockspring.users;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api")
public class UniUserController {

    final UniUserService uniUserService;

    @GetMapping("/users")
    public ResponseEntity<Page<UniUserDTO>> getUsers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Page<UniUserDTO> dtoPage = uniUserService.findAllEngineers(pageable)
                .map(user -> new UniUserDTO(user.getName(), user.getEmail(), user.getRole())); // Example mapping

        return new ResponseEntity<>(dtoPage, HttpStatus.OK);
    }
}
