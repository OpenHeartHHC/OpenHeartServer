# Server

## Installation

    npm install

## Running the server

    bin/www

Runs the server on port 3000 (by default)
Test: http://localhost:3000

# API

## Signal acquisition

    POST /api/signal

Posts signal data.

Testing with

    curl -H "Content-Type: application/json" -X POST -d '{"data1":"value1","data2":"value2"}' http://localhost:3000/api/signal
    
