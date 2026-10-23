package com.gendy.dockspring.uniengineers;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UniEngineerRepo extends JpaRepository<UniEngineer, Long> {

    boolean existsByEmailIgnoreCase(String email);
}
