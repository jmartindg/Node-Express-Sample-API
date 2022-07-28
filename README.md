# Users API

Sample REST API using Node.js and Express.js

## Install Dependencies

```
npm install
```

or

```
npm i
```

## Server

To run the local development server run this in your terminal. This will run on `http://localhost:5000/`

```
npm start
```

## Endpoints

**Note**: User data is only stored at `let users = []` array. There's no database linked to this sample project.

### Get All Users - GET

```
http://localhost:5000/users
```

### Get a Single User - GET

```
http://localhost:5000/users/:id
```

### Create a User - POST

```
http://localhost:5000/users
```

Then put the fields you want to create. For example:

```
{
	"firstName": "John",
	"lastName": "Doe",
	"age": 21
}
```

**Note**: This will automatically generate user id because uuid is installed.

### Update a User - PATCH

```
http://localhost:5000/users/:id
```

Then put the fields you want to update. For example:

```
{
	"firstName": "Jane",
	"lastName": "Doe",
	"age": 25
}
```

or you can update a single field

```
{
	"age": 20
}
```

### Delete a User - DELETE

```
http://localhost:5000/users/:id
```
