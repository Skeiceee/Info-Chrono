## ⚠️ Chrono.gg ended this service, this remains as a memory. ⚠️

### Info-Chrono
 Simple page to view [Chrono.gg](https://www.chrono.gg/) information of the new games to redeem and your account information instantly.
### Configuration

The format is pretty straightforward, the program only needs your Authorization Token in order to have access to your Chrono.gg session.



In order to obtain your Authorization Token, you must follow these steps:

* Head to [Chrono.gg](https://www.chrono.gg/) and login
* Right-click anywhere
* Inspect Element
* Go to the network tab
* Filter for "Account"
* Keep the network tab open and refresh the page
* Some requests will appear, click "account" with initiator '(index)' and copy the Authorization header under "Request Headers". It should start with "JWT", followed by a train of characters. Make sure you copy all of it!
* Insert token in the following line of code without '{}':

```javascript
    h.append('Authorization','Insert here token')
```

You only need to do this once because Info-Chrono will remember your authorization token (if valid).

### [Demo](https://infochrono.netlify.com/)
