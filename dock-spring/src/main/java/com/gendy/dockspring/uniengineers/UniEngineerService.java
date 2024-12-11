package com.gendy.dockspring.uniengineers;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UniEngineerService {
    private final UniEngineerRepo uniEngineerRepo;

    public UniEngineerService(UniEngineerRepo uniEngineerRepo) {
        this.uniEngineerRepo = uniEngineerRepo;
    }

    @Transactional(readOnly = true)
    public UniEngineer findEngineerById(final String id) {
        return uniEngineerRepo.findById(id).orElse(null);
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
