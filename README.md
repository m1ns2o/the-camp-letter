# the-camp-letter
군인 인터넷편지 전달 서비스
> :warning: 이 서비스는는 더 캠프 서비스의 공식 서비스가 아닙니다. 정상적인 작동을 보장하지 않습니다.


## service url
http://www.m1ns2o.kro.kr/

## npm

<!-- - ```npm install``` npm 패키지 설치
- ```npm run serve``` vue.js front 실행 -->

- `npm install` npm 패키지 설치
- `pm2 -i max start app.js` express 서버 실행

## .env

```
DB_URL=mongodb://localhost/YOUR_MONGODB_URL
ID = 더캠프 아이디
PW = 더캠프 비밀번호
NAME = 이름
BIRTH = 생년월일
ENTERDATE = 입대일
CLASSNAME = 예비군인/훈련병 //신분
GROUPNAME = 육군 //군종
UNITNAME = 입영부대
```
## 참고

https://github.com/m1ns2o/the-camp-lib
