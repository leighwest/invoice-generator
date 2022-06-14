# Invoice Generator Application (under construction)

This web application allows users to create styled .pdf invoices by submitting the required information through a web form.  The front-end is built with React and the back-end is built with Node.

## Local Development Setup

### Client (todo)

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
	"title": "test title",
	"content": "some content"
}
```

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

