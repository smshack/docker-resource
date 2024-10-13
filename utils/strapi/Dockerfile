# Node.js LTS 버전 사용
FROM node:18.18-alpine3.17

# 작업 디렉토리 생성
WORKDIR /usr/src/app

RUN npm install -g node-gyp
# 필요한 파일 복사
COPY package.json ./

# 의존성 설치
RUN yarn install


# Strapi 프로젝트의 나머지 소스 복사
COPY . .

# Strapi 실행 명령어 (node_modules의 Strapi CLI 실행)
CMD ["yarn", "develop"]

# 포트 노출
EXPOSE 1337