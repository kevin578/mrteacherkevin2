const http = require("http");


function getUserLocationString(user) {
  return new Promise((resolve)=> {
    if (!user.last_ip_address) {
      resolve("");
    } else {
      getUserLocation(user).then((location)=> {
        if (!location) resolve("");
        const {country_name, region_name, city, country_flag_emoji} =  location;
        resolve(`${city}, ${region_name} ${country_name} ${country_flag_emoji}`);
      });
    }
  });
}

function getUserLocation(user) {
  return new Promise((resolve)=> {
    getLocationFromIp(user.last_ip_address).then(location=> {
      resolve(location);
    });
  });
}

function getLocationFromIp(ipAddress) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.ipstack.com",
      path: `${ipAddress}?access_key=${process.env.IP_STACK_ACCESS_KEY}`,
      method: "GET",
    };

    const req = http.request(options, (res) => {
      res.on("data", (d) => {
        try {
          resolve(JSON.parse(d.toString()));
        } catch {
          resolve("");
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
}

module.exports = {
  getUserLocationString,
  getUserLocation,
  getLocationFromIp
};
