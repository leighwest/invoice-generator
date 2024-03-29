# Invoice Generator Application (under construction)

This web application allows users to create styled .pdf invoices by submitting the required information through a web form. The front-end is built with React and the back-end is built with Node.

## Local Development Setup

### MongoDB Atlas

(TODO: write steps for creating a DB, whitelisting IP addresses etc.)

Create a `.env` file in the `server` root directory

In the Mongodb Atlas web application, under Deployment > Database > Click Connect > Under Connect to your application > Click Drivers

Select Node.js as the driver and 2.2.12 or later as the version.

Copy the connection string, replacing <password> with the user's password.

Store this connection string as the variable `MONGO_URL` in your `.env` file.

### Client

Clone the repository and cd into the app/client directory.

Create a `.env` file in the `client` root directory

Add the following to this file:

```
REACT_APP_NEW_USER_URL=http://localhost:5000/users/signup

REACT_APP_EXISTING_USER_URL=http://localhost:5000/users/login
```

Build the Docker image:

```
docker build . -t <your username>/invoice-generator-client
```

Run the Docker image:

```
docker run --name invoice-generator-client -p 3000:3000 -it <your username>/invoice-generator-client
```

### Server

cd into the app/server directory.

Build the Docker image:

```
docker build . -t <your username>/invoice-generator-server
```

Run the Docker image:

```
docker run --name invoice-generator-server -p 5000:5000 -d <your username>/invoice-generator-server
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
	},
	"dateIssued": "05/06/2023",
	"dateDue": "12/06/2023",
	"service": [
		{
			"description": "Some service",
			"cost": "65"
		}
	]
}
```

Send the POST request to: http://localhost:5000/invoice

### Expected response

201 Created

The invoice will be returned as a .pdf file
