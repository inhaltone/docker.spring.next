package com.gendy.dockspring.users;

import com.gendy.dockspring.uniengineers.UniEngineer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniUserRepo extends CrudRepository<UniEngineer, String> {
    Page<UniUser> findAll(Pageable pageable);
}
