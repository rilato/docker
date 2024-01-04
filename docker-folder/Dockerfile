# 베이스 이미지를 명시해준다.
# hello를 출력하는 기능은 사이즈가 작은 alpine 베이스 이미지 사용
FROM alpine

# 추가적으로 필요한 파일들을 다운로드 받는다.
# hello 문자 출력을 위해 echo를 사용해야하는데, alpine 안에 echo를 사용하게 할 수 있는 파일이 있으므로 RUN 생략
# RUN command

# 컨테이너 시작 시 실행 될 명령어를 명시해준다.
# CMD [ "executable" ]
CMD [ "echo", "hello" ]