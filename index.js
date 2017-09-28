const express  	= require('express');
const path 		= require('path');
const app 		= express();

app.use(express.static(path.join(__dirname,'client/public')));

app.get('/api/*',(req,res) => {
	// res.send('hello world');
	res.json([
			{
				id:1,
				artist: "Prince",
				title: "Purple Rain",
				genre: "funk",
				released: 1984
			},
			{
				id:2,
				artist: "Rachel Platten",
				title: "Fight Song",
				genre: "pop",
				released: 2014
			}
		]);
});

// const port = process.env.PORT || 3001;
const port = 3001;
// React default is 3000, set to alt
app.listen(port,() => {
	console.log("server running");
});