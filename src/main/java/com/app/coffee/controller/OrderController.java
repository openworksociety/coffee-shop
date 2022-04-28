package com.app.coffee.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.app.coffee.model.Item;

@Controller
public class OrderController {

	@RequestMapping(value = { "/getItems" }, method = RequestMethod.GET)
	public List<Item> getItems() {
		List<Item> items = new LinkedList<Item>();
		for (int i = 1; i <= 5; i++) {
			items.add(addItem(i));
		}
		return items;
	}

	private Item addItem(int itemNo) {
		Item item = new Item();
		item.setId(Long.valueOf(itemNo));
		item.setName("Coffee" + itemNo);
		item.setPrice(10.0 * itemNo);
		return item;
	}

}
