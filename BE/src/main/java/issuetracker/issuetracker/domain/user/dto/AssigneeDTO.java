package issuetracker.issuetracker.domain.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AssigneeDTO {
    private long id;
    private String name;
    private String profile_url;
}
