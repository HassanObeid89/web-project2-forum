package se.kth.sda.skeleton.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

@RestController
public class TestController {
    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public String userEmail() {

        return authService.getLoggedInUserEmail();
    }


    @GetMapping("/user/me")
    public User userData() {
        return userService.findUserByEmail(userEmail());

    }
}



