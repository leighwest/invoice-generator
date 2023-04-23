# Invoice Generator Application (under construction)

This web application allows users to create styled .pdf invoices by submitting the required information through a web form. The front-end is built with React and the back-end is built with Node.

## Local Development Setup

### Client (todo)

Clone the repository and cd into the app/client directory.

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
