# Chat Application

A real-time chat application built with Node.js, Express, and Socket.IO.

## Features

- **Real-time Messaging**: Send and receive messages instantly using WebSocket connections
- **Multiple Users**: Support for multiple users connecting and chatting simultaneously
- **User Connection Tracking**: Server tracks connected and disconnected users

## Prerequisites

- Node.js (v12 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chat
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
node server.js
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

3. Start chatting! Open multiple tabs or windows to see real-time messaging in action.

## Project Structure

```
chat/
├── server.js          # Express server with Socket.IO setup
├── package.json       # Project metadata and dependencies
├── public/
│   └── index.html     # Client-side HTML and chat interface
└── README.md          # This file
```

## Dependencies

- **express** (^5.2.1): Web application framework
- **socket.io** (^4.8.1): Real-time bidirectional communication library

## How It Works

- The server listens on port 3000 (or the PORT environment variable)
- Clients connect via WebSocket and can send chat messages
- Messages are broadcasted to all connected clients in real-time
- Connection and disconnection events are logged to the console

## Environment Variables

- `PORT`: The port number to run the server on (default: 3000)

## License

ISC

## Author

Andres
