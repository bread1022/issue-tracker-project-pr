package issuetracker.issuetracker.domain.user;

import issuetracker.issuetracker.domain.user.dto.AssigneeDTO;
import issuetracker.issuetracker.domain.user.dto.AuthorFilterDTO;
import issuetracker.issuetracker.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserRepository repository;

    @GetMapping("/assignees")
    public List<AssigneeDTO> getAssignees() {
        return repository.findPopupAssignee();
    }

    @GetMapping("/authors")
    public List<AuthorFilterDTO> getAuthorFilter() {
        return repository.getAuthorFilter();
    }

}
