const express = require("express");
const redis = require("redis");

// redis client 생성
const client = redis.createClient({
    host:"redis-server",    // 도커 환경에서는 https://redis.com이 아닌, redis-server 사용
    port: 6379  // 레디스의 기본 포트
})

const app = express();

// 숫자는 0부터 시작합니다.
client.set("number", 0);
app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        // 현재 숫자를 가져온 후에 1씩 올려준다.
        client.set("number", parseInt(number) + 1);
        res.send("숫자가 1씩 올라갑니다. 숫자 : " + number);
    })
})

app.listen(8080);
console.log("Server is running");