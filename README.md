This directory contains a client using React and a server written in Node. It 
requires yarn dependency manager to run.

Yarn: https://yarnpkg.com/

To run the program, checkout the repository and build the departure-board and
dependencies with 

>yarn installDepartureBoard

This command will install the dependencies for the server and the client applications.
To run the project use

>yarn run dev

from the departure-board directory. This will concurrently run a server (code in 
server.js) on port 5000 and a client (code in /client/ directory) on port 3000. The
client should open a tab in your browser automatically, but if it does not you can
view the application at http://localhost:3000.

The server has one endpoint, which gets the departure data for the upcoming trains
and returns it as JSON. You can see the output of this call directly by making a GET
request to http://localhost:5000/schedules/departures

The server uses get-csv to fetch and parse the CSV data:
get-csv: https://www.npmjs.com/package/get-csv

The client consumes this data and uses react-table to render the data with sortable
columns, custom column widths, and pagination:
react-table: https://react-table.js.org

There are some unit tests that ensure the client/util.js functions that format
data for display function properly. To run these tests, enter

>yarn test

from the /departure-board directory.

Design notes: on this board, the time will always display as HH:MM in 24 hour time. Lateness
will be displayed as nothing if less than 60 seconds, a number of minutes if between 1 and 60
minutes (e.g. "2 min"), or "1hr +" if the train is over an hour late. Each column can be sorted
by clicking its header, and shift+click will sort by multiple columns.

