package com.app.coffee.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class NavigationController {

	@RequestMapping(value = { "/order" }, method = RequestMethod.GET)
	public String order(Model model) {
		return "order";
	}

	@RequestMapping(value = { "/stock" }, method = RequestMethod.GET)
	public String stock(Model model) {
		return "stock";
	}

	@RequestMapping(value = { "/user" }, method = RequestMethod.GET)
	public String user(Model model) {
		return "user";
	}

	@RequestMapping(value = { "/report" }, method = RequestMethod.GET)
	public String report(Model model) {
		return "report";
	}

	@RequestMapping(value = { "/index" }, method = RequestMethod.GET)
	public String index(Model model) {
		return "index";
	}

}
