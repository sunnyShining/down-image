
const request = require('request');
const fs = require('fs');
// const readline = require(‘readline’);

const imgUrl = 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=4c3b2306ba51f819e5280b09b2dd2098/8718367adab44aed5b5a1bc9b91c8701a18bfb83.jpg';
const filename = 'test.png';
request.head(imgUrl,function(err,res,body){
    if(err){
        console.log(err);
        return;
    }
    request(imgUrl).pipe(fs.createWriteStream('./img/'+ filename));
});

