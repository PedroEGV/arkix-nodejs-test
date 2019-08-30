Arkix NodeJS Test
=================

How to run MongoDB
------------------

We will use docker for running MongoDB like this:

```
docker run -p 27017:27017 mongo:latest
```

How to use test-requests
------------------------

First we need to get into the dorectory:

```
cd test-requests
```

Then we have to authenticate:

```
./auth.sh
```

The result will be something like this:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDY5MzFhNzZhZWNkNTIzZDYwM2YyMjUiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NjcxOTYzNTcsImV4cCI6MTU3MDc5NjM1N30.eK-97e9mkHRCwL4yy9XlM9W_i60IR5D-eqz_SZ3UbCk"
}
```

We copy the token to ```token.txt``` file.

Then we can use the other scripts like this:

```
./user/create.sh
./users/list.sh
./posts/create.sh
./posts/list.sh
```

API Reference
-------------

### Users

#### GET /api/v1/users

Response:

```
[
  {
    "id": "5d6931a76aecd523d603f225",
    "email": "test@test.com",
    "name": "Fulanito de Tal",
    "createdAt": "2019-08-30T14:25:00.263Z",
    "updatedAt": "2019-08-30T14:25:00.263Z"
  }
]
```

#### GET /api/v1/users/{id}

Response:

```
{
  "id": "5d6931a76aecd523d603f225",
  "email": "test@test.com",
  "name": "Fulanito de Tal",
  "createdAt": "2019-08-30T14:25:00.263Z",
  "updatedAt": "2019-08-30T14:25:00.263Z"
}
```

#### POST /api/v1/users/

Request:

```
{
  "email": "test@test.com",
  "name": "Fulanito de Tal",
  "password": "12345678"
}
```

The response is the same as GET /api/v1/users/{id}.

#### DELETE /api/v1/users/{id}

The response is the same as GET /api/v1/users/{id}.

### Posts

#### GET /api/v1/posts?page={page}&perPage={perPage}&search={search}

Parameters:

* page (optional) default 0
* perPage (optional) default 10
* search (optional)

Response:

```
[
  {
    "id": "5d697f507c79464061fa8822",
    "title": "Post",
    "content": "Content",
    "author": "5d6931a76aecd523d603f225",
    "createdAt": "2019-08-30T19:57:11.168Z",
    "updatedAt": "2019-08-30T19:57:11.168Z"
  }
]
```

#### GET /api/v1/posts/{id}

Response:

```
{
  "id": "5d697f507c79464061fa8822",
  "title": "Post",
  "content": "Content",
  "author": "5d6931a76aecd523d603f225",
  "createdAt": "2019-08-30T19:57:11.168Z",
  "updatedAt": "2019-08-30T19:57:11.168Z"
}
```

#### POST /api/v1/posts/

Request:

```
{
  "title": "Post",
  "content": "Content"
}
```

The response is the same as GET /api/v1/posts/{id}.

#### DELETE /api/v1/posts/{id}

The response is the same as GET /api/v1/posts/{id}.

