package com.saniibs.demobackend.controller;

import com.saniibs.demobackend.AbstractTest;
import com.saniibs.demobackend.model.Role;
import com.saniibs.demobackend.model.User;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.annotation.Resource;

import java.util.HashSet;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * @author Sayed Mahmud Raihan
 * @Project demo-backend
 * @Created 28/02/2021
 */
public class UserControllerTest extends AbstractTest {

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    PasswordEncoder bCryptPassword = new BCryptPasswordEncoder();
    private @Resource
    MockMvc mvc;

    @Test
    public void createUser() throws Exception {
        String uri = "/api/test/users";
        User user = new User();
        user.setUsername("meraihan");
        user.setPassword(bCryptPassword.encode("aaaaa@"));
        user.setEmail("sayedmahmudraihan@gmail.com");
        Set<Role> roles = new HashSet<>();
        Role role = new Role();
        role.setRoleName(Role.RoleName.ROLE_ADMIN);
        roles.add(role);
        user.setRoles(roles);

        String inputJson = super.mapToJson(user);
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri, super.authentication)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, "User is created successfully");
    }

    @Test
    public void updateUser() throws Exception {
        String uri = "/api/test/users/1";
        User user = new User();
        user.setUsername("sanibs");
        user.setPassword(bCryptPassword.encode("aaaaa@"));
        user.setEmail("sanibs@gmail.com");
        Set<Role> roles = new HashSet<>();
        Role role = new Role();
        role.setRoleName(Role.RoleName.ROLE_ADMIN);
        roles.add(role);
        user.setRoles(roles);

        String inputJson = super.mapToJson(user);
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri, super.authentication)
                .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, "User is updated successfully");
    }

    @Test
    public void getUserList() throws Exception {
        String uri = "/users";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        User[] users = super.mapFromJson(content, User[].class);
        assertTrue(users.length > 0);
    }
}
