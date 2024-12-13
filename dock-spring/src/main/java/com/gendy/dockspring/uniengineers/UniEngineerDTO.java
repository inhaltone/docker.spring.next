package com.gendy.dockspring.uniengineers;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UniEngineerDTO {
    private Long uniEngineerId;

    public UniEngineerDTO(Long uniEngineerId) {
        this.uniEngineerId = uniEngineerId;
    }

}
