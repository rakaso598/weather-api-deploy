## Next.js를 활용한 날씨정보 데이터 대쉬보드 프로그램 배포 (Vercel)

- 실제 날씨정보 데이터가 아닌 임의로 생성된 가상의 날씨정보 데이터를 사용합니다.

- Next.js의 API Routes(API 라우트) 기능을 사용합니다.

- json-server를 사용하여 weather.json을 임시 데이터베이스로 사용합니다. (npm run json-server로 서버 실행, PORT 3001 사용)

---

- `localhost:3000`: 홈화면

- `localhost:3000/api/weather`: 날씨정보 전체조회

- `localhost:3000/api/weather/create`: 날씨정보 생성 (weather.http에 POST Request 작성)

- `localhost:3000/api/weather/:id/delete`: 날씨정보 삭제 구현 예정
