package com.gendy.dockspring;

import com.gendy.dockspring.uniengineers.UniEngineer;
import com.gendy.dockspring.uniengineers.UniEngineerService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:3000")
public class ApiController {
    final UniEngineerService uniEngineerService;

    public ApiController(UniEngineerService uniEngineerService) {
        this.uniEngineerService = uniEngineerService;
    }

    @GetMapping("find-engineer-by-email")
    public ResponseEntity<UniEngineer> findUniEngineerByEmail(@RequestParam("email") String email) {
        System.out.println(email);

        return new ResponseEntity<>(uniEngineerService.findEngineerByEmail(email), HttpStatus.OK);
    }

    @GetMapping("find-user-by-id")
    public ResponseEntity<UniEngineer> findEngineerById(@RequestParam("id") String id) {
        System.out.println(id);

        return new ResponseEntity<>(uniEngineerService.findEngineerById(id), HttpStatus.OK);
    }

    @GetMapping("get-all-engineers")
    public ResponseEntity<Page<UniEngineer>> getAllUniEngineersPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page, size); // Create a Pageable object

        return new ResponseEntity<>(uniEngineerService.findAllEngineers(pageable), HttpStatus.OK);
    }

    @PostMapping("save-engineer")
    public UniEngineer saveEngineer(@RequestBody UniEngineer engineer) {
        return uniEngineerService.saveEngineer(engineer);
    }

    @PostMapping("delete-engineer")
    public void deleteEngineer(@RequestBody String id) {
        System.out.println("Engineer ID: " + id);
        uniEngineerService.deleteEngineerById(id);
    }
}