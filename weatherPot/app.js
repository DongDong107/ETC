let latitude;
let longitude;
navigator.geolocation.getCurrentPosition((position)=>{
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(position.coords.latitude, position.coords.longitude);
})

console.log(latitude, longitude);

const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=JEhDmCwhRn8qnYcdy51GNHZ73w%2FOjY25glFUFhUYizJfsdJVcbmRqYTBihA87eMuYrovbfBWPiDRF1bQ0dANzw%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=20231212&base_time=0500&nx=60&ny=127`;

let rData;
let wData = fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(JSON.parse(data).body));

console.log(wData);