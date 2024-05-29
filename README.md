# Abhiwan
# Tournament Management System

## Description
This project is a Tournament Management System developed using Node.js, Express.js, and MongoDB. It allows users to create tournaments, add rooms to tournaments, join tournaments, and declare winners based on player scores.

## Installation
1. Clone the repository: 
    git clone https://github.com/bpn1604/abhiwan.git

2. Install dependencies:
   npm install 
   
3. Set up MongoDB:
- Install MongoDB locally or use a cloud-based MongoDB service.
- Update the MongoDB connection string in the `server.js` file to point to your MongoDB instance.

4. Start the server:

5. The server will start running at `http://localhost:8080`.

## Usage
1. Create a tournament:

5. The server will start running at `http://localhost:8080`.



### techStack used
  - Express
  - MongoDB
  - Node.js


#### Default route

```http
  GET /
 
```

```http
  Response: "Welcome to our Tournament"

```
#### Create Tournament

```http
  POST /tournament/create
```

```http
 success Response: {
  "tournament_name": "test",
  "creator_name": "bipin",
  "_id": "6656c2ef293c3754705481d7",
  "rooms": [],
  "createdAt": "2024-05-29T05:53:51.954Z",
  "updatedAt": "2024-05-29T05:53:51.954Z",
  "__v": 0
}
 

```
#### Create Room

```http
  Add rooms to a tournament:
   /add-room/:tournament_name
```

```http
 success Response:  {
  "_id": "6656c2ef293c3754705481d7",
  "tournament_name": "test",
  "creator_name": "bipin",
  "rooms": [
    {
      "players": [],
      "_id": "6656c32a293c3754705481db"
    }
  ],
  "createdAt": "2024-05-29T05:53:51.954Z",
  "updatedAt": "2024-05-29T05:54:50.573Z",
  "__v": 0
}
 

```


#### Join a tournament
```http
 /join-tournament
   response - <br />
   {
   tournament_name :"test"
   }
```
####   winner

```http
   Declare winner for a room:
   /declare-winner/:tournament_name/:room_id
   response- <br />
  { 
    winner :"player1"
  }
```

