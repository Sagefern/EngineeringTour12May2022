var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2686289370460777,
        "pitch": 0,
        "fov": 1.214324136526405
      },
      "linkHotspots": [
        {
          "yaw": -0.05038797486212765,
          "pitch": -0.26781828246034145,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.29018146615435114,
          "pitch": -0.1109576139106192,
          "title": "Sign",
          "text": "Welcome to the Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3065394881532306,
        "pitch": -0.1744260049634203,
        "fov": 1.2144486395263976
      },
      "linkHotspots": [
        {
          "yaw": 0.03237880445508701,
          "pitch": -0.011233141657477574,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7268327866348319,
          "pitch": -0.06978037831164663,
          "rotation": 10.210176124166829,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2296363908376406,
          "pitch": -0.3872277595708056,
          "title": "Sculpture",
          "text": "Looks nice"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.950192099196066,
        "pitch": 0.10177841982933344,
        "fov": 1.214324136526405
      },
      "linkHotspots": [
        {
          "yaw": -2.900367147591357,
          "pitch": 0.05243781483032528,
          "rotation": 5.497787143782138,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2107713507148787,
          "pitch": -0.1966970472223899,
          "title": "Stall",
          "text": "Get your coffee fix here"
        }
      ]
    }
  ],
  "name": "WTM - Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
