const express = require('express');

const bootCtrl = require('./controllers/bootCtrl');

const app = express();
const port = 5050;


app.use(express.json());

// contorller enpoints
app.get('/api/available-boots', bootCtrl.getAvailibleBoots);

app.get('/api/collected-boots', bootCtrl.getCollectedBoots);
app.post('/api/collected-boots', bootCtrl.postBootToCollection);
app.put('/api/collected-boots/:id', bootCtrl.addCC);
app.put('/api/collected-boots/:id', bootCtrl.addWear);
app.delete('/api/collected-boots/:id', bootCtrl.deleteBoots);



app.listen(port, () => console.log('server is running on 5051'));