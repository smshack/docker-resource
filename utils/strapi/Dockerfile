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

# 환경 변수 (필요한 경우 .env 파일을 Docker로 전달하거나 아래처럼 정의)
# ENV NODE_ENV=production

# Strapi 개발 서버 실행
CMD ["yarn", "develop"]
