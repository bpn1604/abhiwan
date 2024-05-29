# abhiwan
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

## Usage
1. Create a tournament:
   /create-tournament

2. Add rooms to a tournament:
   /add-room/:tournament_name

3. Join a tournament:
   /join-tournament

4. Declare winner for a room:
   /declare-winner/:tournament_name/:room_id



## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
