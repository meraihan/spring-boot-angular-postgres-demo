package com.saniibs.demobackend.repository;

import com.saniibs.demobackend.model.Role;
import com.saniibs.demobackend.model.User;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @author Sayed Mahmud Raihan
 * @Project demo-backend
 * @Created 21/02/2021
 */
@Slf4j
@SpringBootTest
@RunWith(SpringRunner.class)
public class UserRepositoryTest {

    private @Resource
    UserRepository userRepository;

    PasswordEncoder bCryptPassword = new BCryptPasswordEncoder();

    @Test
    public void add() {
        User user = new User();
        user.setUsername("meraihan");
        user.setPassword(bCryptPassword.encode("aaaaa@"));
        user.setEmail("sayedmahmudraihan@gmail.com");
        Set<Role> roles = new HashSet<>();
        Role role = new Role();
        role.setRoleName(Role.RoleName.ROLE_ADMIN);
        roles.add(role);
        user.setRoles(roles);

        User savedUser = userRepository.save(user);
        log.info("User successfully Saved with id: {}", savedUser.getId());
    }


    @Test
    public void findById() {
        Long userId = 1L;
        Optional<User> user = userRepository.findById(userId);
        log.info("Find User: {} By ID: {}", user.get(), userId);
    }

    @Test
    public void findByUserName() {
        String userName = "meraihan";
        Optional<User> user = userRepository.findByUsername(userName);
        assertThat(user.get().getUsername())
                .isEqualTo(user.get().getUsername());
        log.info("Find User: {} By UserName: {}", user.get(), userName);
    }

    @Test
    public void findAll() {
        List<User> users = userRepository.findAll();
        assertThat(users).isNotNull().isNotEmpty();
        log.info("Total Users: {}", users.size());
    }

    @Test
    public void delete() {
        User user = new User();
        user.setId(1L);
        userRepository.delete(user);
        log.info("User Deleted Successfully");
    }

}
