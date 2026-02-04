
```
ecom project
├─ .idea
│  ├─ compiler.xml
│  └─ workspace.xml
├─ admin-frontend
│  ├─ .idea
│  │  ├─ admin-frontend.iml
│  │  ├─ inspectionProfiles
│  │  │  └─ Project_Default.xml
│  │  ├─ misc.xml
│  │  ├─ modules.xml
│  │  └─ workspace.xml
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ components
│  │  │  ├─ AdminNavbar.css
│  │  │  ├─ AdminNavbar.jsx
│  │  │  └─ OrderDetails.css
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  └─ pages
│  │     ├─ AddProduct.css
│  │     ├─ AddProduct.jsx
│  │     ├─ AdminDashboard.css
│  │     ├─ AdminDashboard.jsx
│  │     ├─ AdminUserDetails.css
│  │     ├─ AdminUserDetails.jsx
│  │     ├─ ManageOrders.css
│  │     ├─ ManageOrders.jsx
│  │     ├─ ManageProducts.css
│  │     ├─ ManageProducts.jsx
│  │     ├─ ManageUsers.jsx
│  │     ├─ OrderDetails.jsx
│  │     ├─ Product.css
│  │     ├─ Product.jsx
│  │     ├─ UpdateProduct.css
│  │     └─ UpdateProduct.jsx
│  └─ vite.config.js
├─ backend
│  ├─ .idea
│  │  ├─ compiler.xml
│  │  ├─ dataSources
│  │  ├─ dataSources.local.xml
│  │  ├─ dataSources.xml
│  │  ├─ ecom project.iml
│  │  ├─ encodings.xml
│  │  ├─ inspectionProfiles
│  │  │  └─ Project_Default.xml
│  │  ├─ jarRepositories.xml
│  │  ├─ misc.xml
│  │  └─ workspace.xml
│  ├─ .mvn
│  │  └─ wrapper
│  │     └─ maven-wrapper.properties
│  ├─ HELP.md
│  ├─ mvnw
│  ├─ mvnw.cmd
│  ├─ pom.xml
│  ├─ src
│  │  ├─ main
│  │  │  ├─ java
│  │  │  │  └─ com
│  │  │  │     └─ example
│  │  │  │        └─ ecom
│  │  │  │           ├─ BCryptGenerator.java
│  │  │  │           ├─ controller
│  │  │  │           │  ├─ AdminOrderController.java
│  │  │  │           │  ├─ AdminUserController.java
│  │  │  │           │  ├─ AuthController.java
│  │  │  │           │  ├─ OrderController.java
│  │  │  │           │  └─ ProductController.java
│  │  │  │           ├─ dto
│  │  │  │           │  ├─ AddressRequest.java
│  │  │  │           │  ├─ AddressResponse.java
│  │  │  │           │  ├─ AdminUserListResponse.java
│  │  │  │           │  ├─ asdf
│  │  │  │           │  ├─ LoginRequest.java
│  │  │  │           │  ├─ LoginResponse.java
│  │  │  │           │  ├─ OrderItemRequest.java
│  │  │  │           │  ├─ OrderRequest.java
│  │  │  │           │  ├─ OrderUpdateRequest.java
│  │  │  │           │  ├─ PaymentMethodRequest.java
│  │  │  │           │  ├─ PaymentMethodResponse.java
│  │  │  │           │  ├─ RegisterRequest.java
│  │  │  │           │  ├─ UpdateUserRequest.java
│  │  │  │           │  └─ UserProfileResponse.java
│  │  │  │           ├─ EcomApplication.java
│  │  │  │           ├─ GlobalExceptionHandler.java
│  │  │  │           ├─ model
│  │  │  │           │  ├─ Address.java
│  │  │  │           │  ├─ Order.java
│  │  │  │           │  ├─ OrderItem.java
│  │  │  │           │  ├─ PaymentMethod.java
│  │  │  │           │  ├─ Product.java
│  │  │  │           │  └─ User.java
│  │  │  │           ├─ repository
│  │  │  │           │  ├─ AddressRepository.java
│  │  │  │           │  ├─ OrderRepository.java
│  │  │  │           │  ├─ PaymentMethodRepository.java
│  │  │  │           │  ├─ ProductRepo.java
│  │  │  │           │  └─ UserRepository.java
│  │  │  │           ├─ security
│  │  │  │           │  ├─ CustomUserDetailsService.java
│  │  │  │           │  ├─ JwtAuthFilter.java
│  │  │  │           │  ├─ JwtService.java
│  │  │  │           │  ├─ JwtUtil.java
│  │  │  │           │  ├─ PasswordConfig.java
│  │  │  │           │  └─ SecurityConfig.java
│  │  │  │           └─ service
│  │  │  │              ├─ ProductService.java
│  │  │  │              └─ UserService.java
│  │  │  └─ resources
│  │  │     ├─ application.properties
│  │  │     ├─ static
│  │  │     └─ templates
│  │  └─ test
│  │     └─ java
│  │        └─ com
│  │           └─ example
│  │              └─ ecom
│  │                 ├─ controller
│  │                 │  └─ OrderControllerIntegrationTest.java
│  │                 └─ EcomApplicationTests.java
│  └─ target
│     ├─ classes
│     │  ├─ application.properties
│     │  └─ com
│     │     └─ example
│     │        └─ ecom
│     │           ├─ BCryptGenerator.class
│     │           ├─ controller
│     │           │  ├─ AdminOrderController.class
│     │           │  ├─ AdminUserController.class
│     │           │  ├─ AuthController$ApiResponse.class
│     │           │  ├─ AuthController.class
│     │           │  ├─ OrderController.class
│     │           │  └─ ProductController.class
│     │           ├─ dto
│     │           │  ├─ AddressRequest.class
│     │           │  ├─ AddressResponse.class
│     │           │  ├─ AdminUserListResponse.class
│     │           │  ├─ LoginRequest.class
│     │           │  ├─ LoginResponse.class
│     │           │  ├─ OrderItemRequest.class
│     │           │  ├─ OrderRequest.class
│     │           │  ├─ OrderUpdateRequest.class
│     │           │  ├─ PaymentMethodRequest.class
│     │           │  ├─ PaymentMethodResponse.class
│     │           │  ├─ RegisterRequest.class
│     │           │  ├─ UpdateUserRequest.class
│     │           │  └─ UserProfileResponse.class
│     │           ├─ EcomApplication.class
│     │           ├─ GlobalExceptionHandler.class
│     │           ├─ model
│     │           │  ├─ Address.class
│     │           │  ├─ Order.class
│     │           │  ├─ OrderItem.class
│     │           │  ├─ PaymentMethod.class
│     │           │  ├─ Product.class
│     │           │  └─ User.class
│     │           ├─ repository
│     │           │  ├─ AddressRepository.class
│     │           │  ├─ OrderRepository.class
│     │           │  ├─ PaymentMethodRepository.class
│     │           │  ├─ ProductRepo.class
│     │           │  └─ UserRepository.class
│     │           ├─ security
│     │           │  ├─ CustomUserDetailsService.class
│     │           │  ├─ JwtAuthFilter.class
│     │           │  ├─ JwtService.class
│     │           │  ├─ JwtUtil.class
│     │           │  ├─ PasswordConfig.class
│     │           │  └─ SecurityConfig.class
│     │           └─ service
│     │              ├─ ProductService.class
│     │              └─ UserService.class
│     ├─ generated-sources
│     │  └─ annotations
│     ├─ generated-test-sources
│     │  └─ test-annotations
│     ├─ maven-status
│     │  └─ maven-compiler-plugin
│     │     ├─ compile
│     │     │  └─ default-compile
│     │     │     ├─ createdFiles.lst
│     │     │     └─ inputFiles.lst
│     │     └─ testCompile
│     │        └─ default-testCompile
│     │           ├─ createdFiles.lst
│     │           └─ inputFiles.lst
│     └─ test-classes
│        └─ com
│           └─ example
│              └─ ecom
│                 └─ EcomApplicationTests.class
├─ frontend
│  ├─ .idea
│  │  ├─ frontend.iml
│  │  ├─ inspectionProfiles
│  │  │  └─ Project_Default.xml
│  │  ├─ misc.xml
│  │  ├─ modules.xml
│  │  └─ workspace.xml
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ admin
│  │  │  ├─ AddProduct.jsx
│  │  │  ├─ AdminApp.jsx
│  │  │  ├─ AdminDashboard.jsx
│  │  │  ├─ AdminNavbar.css
│  │  │  ├─ AdminNavbar.jsx
│  │  │  ├─ DeleteProduct.jsx
│  │  │  ├─ ManageOrders.jsx
│  │  │  ├─ ManageProducts.jsx
│  │  │  ├─ ManageUsers.jsx
│  │  │  ├─ OrderDetails.jsx
│  │  │  └─ UpdateProduct.jsx
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ react.svg
│  │  │  └─ unplugged.png
│  │  ├─ axios.jsx
│  │  ├─ components
│  │  │  ├─ Account.css
│  │  │  ├─ Account.jsx
│  │  │  ├─ AddProduct.css
│  │  │  ├─ AddProduct.jsx
│  │  │  ├─ Address.css
│  │  │  ├─ Address.jsx
│  │  │  ├─ Auth.css
│  │  │  ├─ Auth.jsx
│  │  │  ├─ Button.css
│  │  │  ├─ Cart.css
│  │  │  ├─ Cart.jsx
│  │  │  ├─ CheckOutPopup.jsx
│  │  │  ├─ Home.css
│  │  │  ├─ Home.jsx
│  │  │  ├─ Navbar.css
│  │  │  ├─ NavBar.jsx
│  │  │  ├─ OrderConfirmed.css
│  │  │  ├─ OrderConfirmed.jsx
│  │  │  ├─ OrderDetails.css
│  │  │  ├─ OrderDetails.jsx
│  │  │  ├─ Payment.css
│  │  │  ├─ Payment.jsx
│  │  │  ├─ Product.css
│  │  │  ├─ Product.jsx
│  │  │  ├─ SearchResults.jsx
│  │  │  ├─ UpdateProduct.css
│  │  │  └─ UpdateProduct.jsx
│  │  ├─ context
│  │  │  └─ Context.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  └─ vite.config.js
└─ package-lock.json

```