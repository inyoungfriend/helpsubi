// const express = require('express') 옛날 방식 => commonjs
import express from 'express'


const app = express()

app.get('/boards', function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    { number: 1, writter: "철수", title: "제목입니다~~", contents: "내용이에요!!!" },
    { number: 2, writter: "영희", title: "제목입니다~~", contents: "영희이에요!!!" },
    { number: 3, writter: "훈이", title: "제목입니다~~", contents: "훈이이에요!!!" },
  ]

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result)
})

app.post('/boards', function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("========")
  console.log(req.body)

  // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send('게시물 등록에 성공하였습니다.')
})

app.listen(3000)