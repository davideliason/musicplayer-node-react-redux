const express  	= require('express');
const path 		= require('path');
const app 		= express();

app.use(express.static(path.join(__dirname,'client/public')));

const port = process.env.PORT || 3001;
// React default is 3000, set to alt
app.listen(port,() => {
	console.log("server running");
});