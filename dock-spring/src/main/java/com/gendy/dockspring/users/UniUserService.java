package com.gendy.dockspring.users;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UniUserService {
    private final UniUserRepo uniUserRepo;

    @Transactional(readOnly = true)
    public Page<UniUser> findAllEngineers(Pageable pageable) {
        return uniUserRepo.findAll(pageable);
    }
}
