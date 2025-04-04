

# 🧪 Cypress Tests – Tricentis Demo Web Shop

This project contains an end-to-end test automation suite for the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com/), implemented using **Cypress**.

It covers key user journeys including registration, login, cart management, checkout, search, and order history — with over **40 test cases** developed using the Page Object Model pattern.

---

## 🚀 Features Tested

### 🔐 Registration & Login
- Valid and invalid registrations
- Login with valid/invalid/blank credentials
- Forgot password flow
- Logout and session validation

### 🛒 Cart & Checkout
- Add/remove products to/from cart
- Checkout as guest and registered user
- Update quantity and verify total
- Apply invalid/valid discount codes

### 🔍 Product Search & Filters
- Search by keyword
- Filter by category
- Sort by price and name
- Product detail view

### 📦 Orders
- Submit order and verify confirmation
- View and reorder from order history
- Attempt checkout with empty cart

---

## 🛠 Tech Stack

| Tool        | Description                           |
|-------------|---------------------------------------|
| [Cypress](https://www.cypress.io/) | JavaScript end-to-end testing framework |
| Mocha + Chai | Test runner and assertion library     |
| GitHub Actions (optional) | CI for running tests on push/PR  |
| Page Object Model | For reusability and maintenance |

---

## 📁 Project Structure

