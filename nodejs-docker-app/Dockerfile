# 베이스 이미지를 명시해준다.
# alpine이 아닌 node를 사용하는 이유는, alpine에는 아래의 RUN 명령어인 npm이 없기 때문
FROM node:10

# sh를 통해 ls를 하면 카피된 애들만 보임. 그래서 dev, lib, bin 등은 보이지 않음. cd / 해야 기존 애들 보임.
WORKDIR /usr/src/app

# npm install할 때 package.json이 필요하므로, 아래 코드 추가
COPY package.json ./

# 추가적으로 필요한 파일들을 다운로드 받는다.
RUN npm install

# 로컬 폴더 안에 있는 package.json, server.js를 도커 컨테이너 안에 추가 (모든 파일 전체를 복사해 넣기 위해 ./ 사용)
# COPY package.json ./
COPY ./ ./

# 컨테이너 시작 시 실행될 명령어를 명시해준다.
# node server.js를 통해 실행하기 위해, 아래처럼 명령어 설정
CMD [ "node", "server.js" ]