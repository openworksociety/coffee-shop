<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Order</title>

<link rel="stylesheet" href="css/order.css">
<link rel="stylesheet" href="css/bootstrap.min.css">

<script src="js/order.js"></script>
<script src="js/bootstrap.min.js"></script>

<script src="jquery/jquery-3.6.0.min.js"></script>

<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
	rel="stylesheet">
<script>
	$(function() {
		$("#nav-placeholder").load("nav.html");
	});
</script>
</head>
<body>
	<!--Navigation bar-->
	<div id="nav-placeholder"></div>

	<form:form>
		<div class="container">
			<div class="contentbar">
				<!-- Start row -->
				<div class="row">
					<!-- Start col -->
					<div class="col-md-12 col-lg-12 col-xl-12">
						<div class="card m-b-30">
							<div class="card-header">
								<h5 class="card-title">ORDER SCREEN</h5>
							</div>
							<div class="card-body">
								<div class="row justify-content-center">
									<div class="col-lg-10 col-xl-8">
										<div class="cart-container">
											<div class="cart-head">
												<div class="table-responsive">
													<table class="table table-hover">
														<thead class="thead-light">
															<tr>
																<th scope="col">#</th>
																<th scope="col">Product</th>
																<th scope="col">Quantity</th>
																<th scope="col" >Price(Rs.)</th>
																<th scope="col" class="text-right">Total(Rs.)</th>
															</tr>
														</thead>
														<tbody id="mytable">
															<tr>
																<th>Loading...</th>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<div class="cart-body">
												<div class="row">
													<div class="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6">
														<div class="order-note">
															<form>
																<div class="form-group">
																	<div class="input-group">
																		<input id="customerName" type="text"
																			class="form-control" placeholder="Customer name"
																			aria-label="Search"
																			aria-describedby="button-addonTags">
																	</div>
																</div>

																<div class="form-group">
																	<div class="input-group">
																		<input id="contactNo" type="text" class="form-control"
																			placeholder="Contact number" aria-label="Search"
																			aria-describedby="button-addonTags">
																	</div>
																</div>

																<div class="form-group">
																	<label for="specialNotes">Special Note for this
																		order:</label>
																	<textarea class="form-control" name="specialNotes"
																		id="specialNotes" rows="3" placeholder="Message here"></textarea>
																</div>
															</form>
														</div>
													</div>
													<div class="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
														<div class="order-total table-responsive ">
															<table class="table table-borderless text-right">
																<tbody>
																	<tr>
																		<td>Sub Total :</td>
																		<td id="subTotal">$0</td>
																	</tr>
																	<tr>
																		<td>Tax(5%) :</td>
																		<td id="tax">$0</td>
																	</tr>
																	<tr>
																		<td class="f-w-7 font-18"><h4>Amount :</h4></td>
																		<td class="f-w-7 font-18" id="total"><h4>$0</h4></td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
											<div class="cart-footer text-right">
												<button type="button" onclick="confirmCheckout()"
													class="btn btn-success my-1">
													Proceed to Checkout<i class="ri-arrow-right-line ml-2"></i>
												</button>
												<!-- <a href="page-checkout.html" class="btn btn-success my-1">Proceed
													to Checkout<i class="ri-arrow-right-line ml-2"></i>
												</a> -->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- End col -->
				</div>
				<!-- End row -->
			</div>
		</div>
	</form:form>

	<script
		src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>