This directory contains a client using React and a server written in Node. It 
requires yarn dependency manager to run.

Yarn: https://yarnpkg.com/

To run the program, checkout the repository and build the departure-board and
dependencies with 

>npm install
>yarn

the command line enter "yarn run dev". Per the package.json file, this will 
concurrently run a server (code in server.js) on port 5000 and a client
(code in /client directory) on port 3000.

The server has one endpoint, which gets the departure data for the upcoming trains
and returns it as JSON. 

The client consumes this data and uses react-table to render the data with sortable
columns.

react-table: https://react-table.js.org

There are some unit tests that ensure the client/util.js functions that format
data for display function properly. To run these tests, enter "yarn run test"
from the /departure-board directory.