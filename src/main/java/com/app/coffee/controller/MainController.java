package com.app.coffee.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.app.coffee.model.Person;

@Controller
public class MainController {

	private static List<Person> persons = new ArrayList<Person>();

	static {
		persons.add(new Person("Bill", "Gates"));
		persons.add(new Person("Steve", "Jobs"));
	}

	@RequestMapping(value = { "/", "/login" }, method = RequestMethod.GET)
	public String login(Model model) {
		return "login";
	}

	@RequestMapping(value = { "/index" }, method = RequestMethod.GET)
	public String index(Model model) {
		String message = "Hello Spring Boot + JSP";
		model.addAttribute("message", message);
		return "index";
	}

	@RequestMapping(value = { "/register" }, method = RequestMethod.POST)
	public String register(Model model) {
		model.addAttribute("message", "User registered Successfully.");
		return "welcome";
	}
}
