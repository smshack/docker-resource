# Node.js LTS 버전 이미지 사용
FROM node:18.19.0


RUN yarn global add @strapi/strapi@4.25.11
RUN mkdir -p /usr/src/app && chown 1000:1000 -R /usr/src/app
# 앱 의존성 복사 및 설치
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh && ln -s /usr/local/bin/docker-entrypoint.sh
# 작업 디렉토리 생성
WORKDIR /usr/src/app
COPY . .
RUN yarn install

# 사용할 포트 노출
EXPOSE 1337

# 애플리케이션 실행 명령어
CMD ["yarn", "develop"]
