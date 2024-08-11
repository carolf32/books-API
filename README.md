# 📚 Book's API

API to manage a book collection using Typescript. Methodology TDD (Test Driven Development). 
Each book contains:
|key|type|
|---|----|
|id|number|
|name|text|
|pages|number|
|category|text(optional)|
|createdAt|date|
|updatedAt|date|

## Routes

|type|adress|description|
|----|------|-----------|
|POST|/|Create book route|
|GET|/|Read books route|
|GET|/:id|Read book route|
|PATCH|/:id|Update book route|
|DELETE|/:id|Delete book route|

## Requests and responses
### POST/books
#### Request template
```
{
	"name": "Harry Potter",
	"pages": 123,
	"category": "fantasia" 
}
```
#### Response template (STATUS CODE 201)
```
{
	"id": 1,
	"name": "Harry Potter",
	"pages": 123,
	"category": "fantasia",
	"createdAt": "2023-10-06T13:14:21.752Z",
	"updatedAt": "2023-10-06T13:14:21.752Z"
}
```

#### Possible error (STATUS CODE 409)
```
{
	"error": "Book already registered."
}
```

### GET/books
#### Response template (STATUS CODE 200)
```
[
	{
		"id": 1,
		"name": "Harry Potter",
		"pages": 123,
		"category": "fantasia",
		"createdAt": "2023-10-06T13:14:21.752Z",
		"updatedAt": "2023-10-06T13:14:21.752Z"
	}
]
```

### GET/book/:id
#### Response template (STATUS CODE 200)
```
{
	"id": 1,
	"name": "Harry Potter",
	"pages": 123,
	"category": "fantasia",
	"createdAt": "2023-10-06T13:14:21.752Z",
	"updatedAt": "2023-10-06T13:14:21.752Z"
}
```

#### Possible error (STATUS CODE 404)
```
{
	"error": "Book not found."
}
```

### PATCH/book/:id
All keys optional
#### Request template
```
{
	"name": "Harry Potter 2",
	"pages": 321,
	"category": "fantasia" 
}
```
#### Response template (STATUS CODE 200)
```
{
	"id": 1,
	"name": "Harry Potter 2",
	"pages": 321,
	"category": "fantasia",
	"createdAt": "2023-10-06T13:14:21.752Z",
	"updatedAt": "2023-10-06T14:37:34.101Z"
}
```
#### Possible error (STATUS CODE 404)
```
{
	"error": "Book not found."
}
```
#### Possible error (STATUS CODE 409)
```
{
	"error": "Book already registered."
}
```

### DELETE/book/:id
There's no response body.
#### Response template (STATUS CODE 204)
#### Possible error (STATUS CODE 404)
```
{
	"error": "Book not found."
}
```
