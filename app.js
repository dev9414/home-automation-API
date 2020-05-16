const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/API", { useNewUrlParser: true });

const deviceSchema = {
  device: String,
  status: String,
};

const Device = mongoose.model("Device", deviceSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
///////////////////////////////////////Request Targeting all devices//////////////////////////////////////////
app
  .route("/devices")
  .get(function (req, res) {
    Device.find(function (err, foundDevices) {
      var output = [];
      for (var i = 0; i < foundDevices.length; i++) {
        output.push(foundDevices[i]["device"]);
      }
      //console.log(foundDevices);
      if (!err) {
        res.send(output);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    const newDevice = new Device({
      device: req.body.device,
      status: req.body.status,
    });
    newDevice.save(function (err) {
      if (!err) {
        res.send("Sucessfully added a new article");
      } else {
        res.send(err);
      }
    });
  })
  .delete(function (req, res) {
    Device.deleteMany(function (err) {
      if (!err) {
        res.send("sucessfully deleted all devices!!");
      } else {
        res.send(err);
      }
    });
  });
///////////////////////////////////////Request Targeting a Specific devices//////////////////////////////////////////

app
  .route("/devices/:device")
  .get(function (req, res) {
    Device.findOne({ device: req.params.device }, function (err, foundDevice) {
      if (foundDevice) {
        res.send(foundDevice);
      } else {
        res.send("No Device found matching given name");
      }
    });
  })
  .put(function (req, res) {
    Device.update(
      { device: req.params.device },
      { device: req.body.device, status: req.body.status },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send("database updated sucefully!!");
        }
      }
    );
  })

  .patch(function (req, res) {
    Device.update({ device: req.params.device }, { $set: req.body }, function (
      err
    ) {
      if (!err) {
        res.send("sucessfully updated device!!!");
      } else {
        res.send(err);
      }
    });
  })

  .delete(function (req, res) {
    Device.deleteOne({ device: req.params.device }, function (err) {
      if (!err) {
        res.send("deleted device sucessfully!!");
      } else {
        res.send(err);
      }
    });
  });

app.use(express.static("public"));

app.listen(3000, function () {
  console.log("server started on port 3000 sucessfully!!!!");
});
