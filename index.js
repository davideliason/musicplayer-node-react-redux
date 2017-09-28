const express  	= require('express');
const path 		= require('path');
const app 		= express();

// server static files from React app
app.use(express.static(path.join(__dirname,'client/public')));

// all API endpoints
app.get('/api/music',(req,res) => {
	// res.send('hello world');
	   res.json(["one","two","three"]);
	// res.json([
	// 		{
	// 			id:1,
	// 			artist: "Prince",
	// 			title: "Purple Rain",
	// 			genre: "funk",
	// 			released: 1984
	// 		},
	// 		{
	// 			id:2,
	// 			artist: "Rachel Platten",
	// 			title: "Fight Song",
	// 			genre: "pop",
	// 			released: 2014
	// 		},
	// 		{
	// 			id:3,
	// 			artist: "Michael Jackson",
	// 			title: "Annie Are You Ok",
	// 			genre: "pop",
	// 			released: 1987
	// 		}
	// 	]);
});

// handles any request not specifically for API music
app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

// const port = process.env.PORT || 3001;
const port = 3001;
// React default is 3000, set to alt
app.listen(port,() => {
	console.log("server running");
});