# Abhiwan
# Tournament Management System

## Description
This project is a Tournament Management System developed using Node.js, Express.js, and MongoDB. It allows users to create tournaments, add rooms to tournaments, join tournaments, and declare winners based on player scores.

## Installation
1. Clone the repository: 
    ```bash
    git clone https://github.com/bpn1604/abhiwan.git
    ```

2. Install dependencies:
    ```bash
    npm install 
    ```

3. Set up MongoDB:
    - Install MongoDB locally or use a cloud-based MongoDB service.
    - Update the MongoDB connection string in the `server.js` file to point to your MongoDB instance.

4. Start the server:
    ```bash
    npm start
    ```

5. The server will start running at `http://localhost:8080`.

## Usage
1. Create a tournament:

    ```http
    POST /tournament/create
    ```

    **Success Response:**
    ```json
    {
      "tournament_name": "test",
      "creator_name": "bipin",
      "_id": "6656c2ef293c3754705481d7",
      "rooms": [],
      "createdAt": "2024-05-29T05:53:51.954Z",
      "updatedAt": "2024-05-29T05:53:51.954Z",
      "__v": 0
    }
    ```

2. Add rooms to a tournament:
    ```http
    POST /add-room/:tournament_name
    ```

    **Success Response:**
    ```json
    {
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

3. Join a tournament:
    ```http
    POST /join-tournament
    ```
    
    **Request Body:**
    ```json
    {
      "tournament_name": "test",
      "room_id": "60d5ec48e1d4c643dcadab9a",
      "player_name": "Player1",
      "score": 10
    }
    ```

4. Declare winner for a room:
    ```http
    POST /declare-winner/:tournament_name/:room_id
    ```

    **Success Response:**
    ```json
    { 
      "winner": "player1"
    }
    ```

## Default Route
```http
GET / Welcome to our Tournament
