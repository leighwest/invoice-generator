# Invoice Generator Application (under construction)

This web application allows users to create styled .pdf invoices by submitting the required information through a web form.  The front-end is built with React and the back-end is built with Node.

## Local Development Setup

### Client (todo)

The application uses the Google Firebase Auth REST API for user sign-up and login authentication (docs: https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password). You will need a Firebase Realtime Database to store and access login credentials.
The application accesses these credentials using the project's API key which can be accessed by clicking the settings cog icon next to Project Overview in the Firebase Console, and then clicking Project Settings.
In your React application, create a .env file in the root directory of the *client* and create two variables:
	`REACT_APP_EXISTING_USER_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]`
	`REACT_APP_NEW_USER_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]`
	
Replace [API_KEY] with the API key obtained from the Project Settings

### Server

Clone the repository and cd into the app/server directory.

Build the Docker image:
```
docker build . -t <your username>/invoice-generator-server
```

Run the Docker image:
```    
docker run -p 49160:8080 -d <your username>/invoice-generator-server
```


## Using the API

Using your favourite API client (i.e. Postman, Insomnia) create a POST request with the following headers:
```
Content-type application/json
Accept application/json
```

In the body of your JSON request, submit the following data:
```
{
	"address": {
		"recipient": "Mr Joe Smith",
		"streetAddress": "123 Example Ave",
		"suburb": "Exampleton",
		"state": "VIC"
	}
}
```

Send the POST request to: http://localhost:49160/invoice

### Expected response

201 Created
```
{
	"message": "Invoice created successfully!",
	"post": {
		"id": "2022-06-14T08:45:32.273Z",
		"title": "test title",
		"content": "some content"
	}
}
```

