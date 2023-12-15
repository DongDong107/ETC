let latitude;
let longitude;
navigator.geolocation.getCurrentPosition((position)=>{
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(position.coords.latitude, position.coords.longitude);
})

console.log(latitude, longitude);

const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=JEhDmCwhRn8qnYcdy51GNHZ73w%2FOjY25glFUFhUYizJfsdJVcbmRqYTBihA87eMuYrovbfBWPiDRF1bQ0dANzw%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=20231215&base_time=0500&nx=60&ny=127`;

let arr = [];
async function loadWeather () {
  let arr = [];
  await fetch(url)
  .then((response) => response.json())
  .then((data) => {
    arr = data.response.body.items.item;
  })
  .then(()=> {
    arr.filter(i => i.fcstDate === "20231215") ?
    console.log('test') : '';
  })
}

loadWeather(arr);

/* var months = [
  {'id': 12, 'name': 'December'}, {'id': 1, 'name': 'January'},
  {'id': 2, 'name': 'February'}, {'id': 3, 'name': 'March'},
  {'id': 4, 'name': 'April'}
];
(months.filter(i => i.name === 'April').length) ?
    console.log('April month found') :
    console.log('Not found');
(months.find(i => i.name === 'January') != {}) ?
    console.log('January month found') :
    console.log('Not found');
(months.findIndex(i => i.name === 'April') > -1) ?
    console.log('April month found') :
    console.log('Not found'); */