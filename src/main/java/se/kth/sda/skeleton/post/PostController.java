package se.kth.sda.skeleton.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<Post> getAll() {
            return postService.getALL();
        }

    @GetMapping("/{id}")
    public Post getByID(@PathVariable Long id) {
        return postService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Post create(@RequestBody Post newPost){
        String email = authService.getLoggedInUserEmail();
        System.out.println(email);
        User user = userService.findUserByEmail(email);

        newPost.setUser(user);
        return postService.create(newPost);
    }

    @PutMapping("")
    public Post update(@RequestBody Post updatedPost) {
        return postService.update(updatedPost);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        postService.delete(id);
    }

}
