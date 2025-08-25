var APP_DATA = {
  "scenes": [
    {
      "id": "0-cot",
      "name": "Cot",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.003855964538441725,
        "pitch": 3.552713678800501e-15,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.3937358445995436,
          "pitch": -0.1805335825190486,
          "rotation": 1.5707963267948966,
          "target": "1-wardrobe--dressing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wardrobe--dressing",
      "name": "Wardrobe & Dressing",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.36880351832710545,
          "pitch": 0.5186145841290237,
          "rotation": 4.71238898038469,
          "target": "0-cot"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-room-view",
      "name": "Room View",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.351651364756016,
          "pitch": 0.16469300999586167,
          "rotation": 4.71238898038469,
          "target": "1-wardrobe--dressing"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
