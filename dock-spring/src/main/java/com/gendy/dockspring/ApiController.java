package com.gendy.dockspring;

import com.gendy.dockspring.uniengineers.UniEngineer;
import com.gendy.dockspring.uniengineers.UniEngineerAlreadyExistsException;
import com.gendy.dockspring.uniengineers.UniEngineerDTO;
import com.gendy.dockspring.uniengineers.UniEngineerService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ApiController {
    final UniEngineerService uniEngineerService;


    @GetMapping("find-user-by-id")
    public ResponseEntity<Optional<UniEngineer>> findEngineerById(@RequestParam("engineerId") String id) {
        System.out.println(id);

        return new ResponseEntity<>(uniEngineerService.findEngineerById(id), HttpStatus.OK);
    }

    @GetMapping("get-all-engineers")
    public ResponseEntity<Page<UniEngineer>> getAllUniEngineersPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return new ResponseEntity<>(uniEngineerService.findAllEngineers(pageable), HttpStatus.OK);
    }

    @PostMapping("save-engineer")
    public UniEngineer saveEngineer(@RequestBody UniEngineer engineer) {
        Optional<UniEngineer> existingEngineer = uniEngineerService.findEngineerByEmail(engineer.getEmail());

        if (existingEngineer.isPresent()) {
            // TODO: Impl a global exception handler
            throw new UniEngineerAlreadyExistsException("Oups!! This engine already exists!");
        }

        return uniEngineerService.saveEngineer(engineer);
    }

    @PostMapping("delete-engineer")
    public void deleteEngineer(@RequestBody UniEngineerDTO engineerDTO) {
        System.out.println("Engineer ID: " + engineerDTO.getUniEngineerId());
        Optional<UniEngineer> existingEngineer = uniEngineerService.findEngineerById(engineerDTO.getUniEngineerId().toString());

        if (existingEngineer.isEmpty()) {
            throw new UniEngineerAlreadyExistsException("Oups!! There is no user matching this id!");
        }

        uniEngineerService.deleteEngineerById(engineerDTO.getUniEngineerId().toString());
    }
}