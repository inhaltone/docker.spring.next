package com.gendy.dockspring.uniengineers;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UniEngineerRepo extends CrudRepository<UniEngineer, String> {

    Optional<UniEngineer> findById(String id);

    Page<UniEngineer> findAll(Pageable pageable);

    void deleteById(String id);
}
