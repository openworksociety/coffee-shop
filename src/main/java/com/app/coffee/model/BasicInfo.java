package com.app.coffee.model;

import java.io.Serializable;
import java.time.LocalDate;

public class BasicInfo implements Serializable {

	private static final long serialVersionUID = -4171315579132763457L;

	private LocalDate createdDate;
	private LocalDate modifiedDate;
	private boolean isDeactivated;

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDate getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(LocalDate modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public boolean isDeactivated() {
		return isDeactivated;
	}

	public void setDeactivated(boolean isDeactivated) {
		this.isDeactivated = isDeactivated;
	}

}
