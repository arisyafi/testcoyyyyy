// api url
const api_url = "https://api.thingspeak.com/channels/2071805/feeds.json?api_key=FR8SH2U47X7SO134&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("field-1").innerHTML = obj.field1+" °C";
      document.getElementById("field-2").innerHTML = obj.field2+" %";
    });
}, 1000);
