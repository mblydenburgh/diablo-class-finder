const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT,()=>console.log(`Now serving fools on port ${PORT}`));