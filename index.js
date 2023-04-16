//npm init
//index.js as main
//npm install express

const fs = require('fs');

const express = require('express');
const req = require('express/lib/request');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;                                              //port definition

const server = express();
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'dist')));                          //static files

//-----------------------------------------------CLASS-EXAMPLE--------------------------------------------------------------

server.get(`^/$|index(.html)?`, async(request, response) => {
    //response.send('Helloooo');                                                  //send some string 
    response.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));  //send file by path
});

server.get(`/about(.html)?`, async(req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'about.html'));
});

server.get(`/users`, async(req, res) => {
    let users = [
        {id: 1, name: "kuku"},
        {id: 2, name: "lulu"}
    ];
    
    res.status(200).json(users);
});

server.get(`/users/:name`, async(req, res) => {
    let {name} = req.params;                                                 //let name = req.params.name;
    let users = [
        {id: 1, name: "kuku"},
        {id: 2, name: "lulu"}
    ];
    
    let user = users.find((u) => u.name == name);                          //if user exist
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({msg: 'user not found'});
    }
});

server.post(`/users/add`, async(req, res) => {
    let users = [];
    let {id, name} = req.body;                                            //get info from request
    let u = {id, name};                                                   //create object for user
    users.push(u);                                                        //add user to array
    res.status(201).json(users);                                          //send the array as status created
});


//------------------------------------------------HOMEWORK--------------------------------------------------------------

const stores = require('./db/stores.json');
const { json } = require('express/lib/response');

server.get(`/api/store`, async(req, res) => {                              //- 1 - get all stores and items
    res.status(200).json(stores);
});

server.get(`/api/store/:id`, async(req, res) => {                          //- 2 - get store by id
    let {id} = req.params;
    let store = stores.find((s) => s.id == id);
    if (store) {
        res.status(200).json(store);
    } else {
        res.status(400).json({msg: 'store not found'});
    }
});

server.get(`/api/stores/:store/:item`, async(req, res) => {               //- 3 - get an item from store
    let {store} = req.params;
    let {item} = req.params;
    
    let s = stores.find((s) => s.id == store);
    if (!s) {
        res.status(400).json({msg: 'store not found'});
        return;
    }
    
    let i = s.items.find((i) => i.id == item);
    if (!i) {
        res.status(400).json({msg: 'item not found'});
        return;
    }
    
    res.status(200).json(i);
});

server.post(`/api/store/add`, async(req, res) => {                       //- 4 - post new store to json file
    let { id, name, city, items } = req.body;
    let newStore = { id, name, city, items };
    stores.push(newStore);
    fs.writeFileSync(path.join(__dirname, 'db', 'stores.json'), JSON.stringify(stores, null, '\t') + '\n');
    res.status(201).json(stores);
});

server.post(`/api/store/:store/items/add`, async(req, res) => {         //- 5 - post new item in store
    let {store} = req.params;
    let { id, name, regularPrice, salePrice } = req.body;
    let newItem = { id, name, regularPrice, salePrice };
    let s = stores.find((s) => s.id == store);
    s.items.push(newItem);
    fs.writeFileSync(path.join(__dirname, 'db', 'stores.json'), JSON.stringify(stores, null, '\t') + '\n');
    res.status(201).json(stores);
});


// server.get(`/*`, async(req, res) => {                                       //if path not exist
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// }); 


server.get('/*', async (req, res) => {                                       //connect server to react
    try {
      res.status(200).sendFile(path.join(__dirname, 'dist', 'index.html'));
    } catch (error) {
      res.status(500).json({error});
    }
  });

server.listen(PORT, () => {                                               //opens port
    console.log(`http://localhost:${PORT}`);
});

