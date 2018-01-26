import express from 'express';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';
import webpack from 'webpack';

const port = 3000;
const app = express();
const compiler =webpack(config);

app.use(express.static('dist'))

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
