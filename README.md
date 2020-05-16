# Home-Automation-API
HTTP  |  	/devices	        | /device/light             
------|:-------------------:|:-----------------
GET	  | fetch all device	  | fetches light device
PUSH  | 	create new device	|        -
PUSH  | 	      -           |  updates the light device
PATCH |	       -	          |updates the light device
DELETE|	delete all device	  |delete the light device

### list all devices
**Definition**

`GET /devices`

**Response**

- `200 OK` on success
```json
[
    {
        "device": "smartTV",
        "status": "off",
    },
    {
        "device": "lock",
        "name": "on",
    }
]
```
DELETE /devices

**Response**

device added sucessfully
DELETE /devices Response

devices deleted sucessfully
GET /devices/:device
```json
[
    {
        "device": :device,
        "status": "off",
    },
]
```
DELETE /devices/:device Response

device deleted sucessfully

PUT/PATCH devices/:device
```json
[
    {
        "device": :device(any),
        "status": "off/on",
    },
]
```
**Response**

device updated sucessfully
for starting this API project

start one server in API folder itself
### command:npx nodemon app.js
- start second server inside folder axios-crash-master/axios-demo

### command:npm start
after POST mthod mongoDB will be updated and all device name will be visible on localhost:3000/ withcheck button

another server will be start on port no :3001 localhost:3001/

here you get web console for our home automation API you can make GET/POST/PUSH/PATCH/DELETE/ERROR HANDLING request

when you check in/out on button on localhost:3000 it will be reflected on localhost:3001 with device status property on/off when you click on GET button
