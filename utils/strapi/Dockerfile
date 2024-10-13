# Node.js LTS 버전 사용 (최소 v18 이상 권장)
FROM node:18

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 필요한 파일 복사 (package.json과 yarn.lock 또는 package-lock.json)
COPY package*.json ./

# 의존성 설치
RUN yarn install

# 나머지 소스 코드 복사
COPY . .

# Strapi가 사용할 포트 설정
EXPOSE 1337

# 개발 서버 실행 명령어 (node_modules 내에서 실행되도록 설정)
CMD ["yarn", "strapi", "develop"]
