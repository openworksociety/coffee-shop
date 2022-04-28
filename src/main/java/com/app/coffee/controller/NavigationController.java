package com.app.coffee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.app.coffee.model.Item;

@Controller
public class NavigationController {

	@Autowired
	private OrderController orderController;

	@RequestMapping(value = { "/order" }, method = RequestMethod.GET)
	public String order(Model model) {
		List<Item> items = orderController.getItems();
		model.addAttribute("items", items);
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

	@RequestMapping(value = { "/master" }, method = RequestMethod.GET)
	public String master(Model model) {
		return "master";
	}

}
