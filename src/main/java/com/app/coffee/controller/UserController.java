package com.app.coffee.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = { "/api/users" })
public class UserController {

	@GetMapping("/fetch")
	public String login() {
		return "test";
	}

}
