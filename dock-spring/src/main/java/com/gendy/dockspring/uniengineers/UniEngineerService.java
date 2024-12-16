package com.gendy.dockspring.uniengineers;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UniEngineerService {
    private final UniEngineerRepo uniEngineerRepo;


    public Optional<UniEngineer> findEngineerById(final String id) {

        return uniEngineerRepo.findById(id);
    }

    public Optional<UniEngineer> findEngineerByEmail(final String email) {

        return uniEngineerRepo.findByEmail(email);
    }

    @Transactional(readOnly = true)
    public Page<UniEngineer> findAllEngineers(Pageable pageable) {
        return uniEngineerRepo.findAll(pageable);
    }

    public UniEngineer saveEngineer(final UniEngineer uniEngineer) {
        return uniEngineerRepo.save(uniEngineer);
    }

    public void deleteEngineerById(String id) {
        uniEngineerRepo.deleteById(id);
    }
}
