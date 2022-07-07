async function getCoordinates(locationName) {
  try {
    const location = await ymaps.geocode(locationName);
    return location.geoObjects.get(0).geometry.getCoordinates();
  } catch (error) {
    return null;
  }
}

async function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.753215, 37.622504],
    zoom: 4,
  });

  // ymaps.borders.load('001', {
  //   lang: 'ru',
  //   quality: 0,
  // }).then((RU) => {
  //   const regions = ymaps.geoQuery(RU);
  //   regions.addToMap(myMap);
  // });

  // async function createPlacemark(locationName, teaName) {
  // const coordinates = await getCoordinates(locationName);

  //   const placemark = new ymaps.Placemark(coordinates, {
  //     iconContent: `${teaName}`,
  //     hintContent: `${locationName}`,
  //     draggable: true,
  //   }, {
  //     preset: 'islands#oliveStretchyIcon',
  //   });
  //   myMap.geoObjects.add(placemark);
  // }

  async function createPlacemark(latitude, longitude, teaName, locationName) {
    if (latitude === null) {
      const coordinates = await getCoordinates(locationName);
      if (coordinates) {
        const placemark = new ymaps.Placemark([coordinates[0], coordinates[1]], {
          iconContent: `${teaName}`,
          hintContent: `${locationName}`,
          draggable: true,
        }, {
          preset: 'islands#oliveStretchyIcon',
        });
        myMap.geoObjects.add(placemark);
      }
    } else {
      const placemark = new ymaps.Placemark([latitude, longitude], {
        iconContent: `${teaName}`,
        hintContent: `${locationName}`,
        draggable: true,
      }, {
        preset: 'islands#oliveStretchyIcon',
      });
      myMap.geoObjects.add(placemark);
    }
  }

  const res = await fetch('/teapitie');
  if (res.ok) {
    const allTeas = await res.json();

    allTeas.forEach((el) => {
      createPlacemark(el.latitude, el.longitude, el.title, el.location);
    });
  }

  // createPlacemark(61.79, 34.36, 'франнцузский улун', 'москва');
  // createPlacemark(undefined, undefined, 'улу123213н', 'москва');
  // createPlacemark('москва', 'улун');
  // createPlacemark('лондон', 'элгрей');
  // createPlacemark('новая зеландия', 'молочный улун');

  myMap.geoObjects.events.add('click', async (e) => {
    const target = e.get('target');
    if (target) {
      const coordinates = target.geometry._coordinates;
      console.log(target.geometry._coordinates);

      // const response = await fetch(`http://localhost:3000/teapitie/${coordinates[0]}/${coordinates[1]}`);

      window.location.replace(`http://localhost:3000/teapitie/${coordinates[0]}/${coordinates[1]}`);

      // const response = await fetch(`/tea/${coordinates[0]}/${coordinates[1]}`);
      // if (response.ok) {
      //   console.log('ok');
      // }
      // const response = await fetch('/tea', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify({ target: target.properties._data.iconContent }),
      // });
      // if (response.ok) {
      //   const { data } = await response.json();
      //   console.log(data.title);
      // }
    }
  });
}

ymaps.ready(init);
