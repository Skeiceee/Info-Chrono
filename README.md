# Info-Chrono
 Simple page to view [Chrono.gg](https://www.chrono.gg/) information of the new games to redeem and your account information instantly.
# Configuration
The format is pretty straightforward, the program only needs your Authorization Token in order to have access to your Chrono.gg session.

In order to obtain your Authorization Token, you must follow these steps:

* Head to [Chrono.gg](https://www.chrono.gg/) and login
* Right-click anywhere -> Inspect Element -> Go to the network tab -> Filter by XHR
* Keep the network tab open and refresh the page
* Some requests will appear, click "account" and copy the Authorization header under "Request Headers". It should start with "JWT",        followed by a train of characters. Make sure you copy all of it!

You only need to do this once because AutoChronoGG will remember your authorization token (if valid).
