<div align="center">
<img src="https://user-images.githubusercontent.com/95121282/216301859-08ef8827-70ab-4207-9aee-386a62ee6939.png" width="300" height="auto">
</div>



# 소분소분
이웃과 대여, 판매, 나눔을 하기 위한 웹 서비스
  


---
  
## :pushpin: 프로젝트 설명
 
:computer: 개발환경  
* IDE  


&emsp;<img src="https://img.shields.io/badge/Sts4-6DB33F?style=flat&logo=Sts4&logoColor=white"/>

* Frontend  


&emsp;<img src="https://img.shields.io/badge/Html5-E34F26?style=flat&logo=Html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>   <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jQuery&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=Bootstrap&logoColor=white"/>



* Backend  


&emsp;<img src="https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=Spring&logoColor=white"/> <img src="https://img.shields.io/badge/JAVA-ff0000?style=flat&logo=JAVA&logoColor=white"/> <img src="https://img.shields.io/badge/Jsp-000000?style=flat&logo=Jsp&logoColor=white"/> <img src="https://img.shields.io/badge/Mybatis-000000?style=flat&logo=Mybatis&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Socket.io-0110101?style=flat&logo=Socket.io&logoColor=white"/>


* DB  


&emsp;<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>


* etc  


&emsp;<img src="https://img.shields.io/badge/Git-4479A1?style=flat&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Sourcetree-0052CC?style=flat&logo=Sourcetree&logoColor=white"/>
                
:runner: 팀원  
<div align="center">
<img src="https://user-images.githubusercontent.com/95121282/216303827-eb594da8-dcf1-4f27-b5ec-cbc339d84780.PNG" width="800" height="auto">
</div>


---
  
## :pushpin: 목차  
[1. 개발 로그](#개발-로그)  
[2. 프로젝트 사용 방법](#프로젝트-사용-방법)  
[3. 참고 자료](#참고-자료)

---
  
## 개발 로그


## dependencies  
```
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-jdbc'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter:2.2.2'
	developmentOnly 'org.springframework.boot:spring-boot-devtools'
	runtimeOnly 'mysql:mysql-connector-java'
	providedRuntime 'org.springframework.boot:spring-boot-starter-tomcat'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
	
	// Tomcat
	implementation 'org.apache.tomcat.embed:tomcat-embed-jasper:9.0.60'
	// JSTL
	implementation 'javax.servlet:jstl:1.2'
	// javax Inject
	implementation 'javax.inject:javax.inject:1'

	
	// 파일 업로드 하는 라이브러리 추가
	// https://mvnrepository.com/artifact/commons-fileupload/commons-fileupload
	implementation 'commons-fileupload:commons-fileupload:1.4'
	// https://mvnrepository.com/artifact/commons-io/commons-io
	implementation 'commons-io:commons-io:2.11.0'

	// ajax
	// https://mvnrepository.com/artifact/com.google.code.gson/gson
	implementation 'com.google.code.gson:gson:2.8.5'
	
	//핸드폰번호 인증 라이브러리
	// https://mvnrepository.com/artifact/net.nurigo/javaSDK
	implementation 'net.nurigo:javaSDK:2.2'
	
	//이메일보내기
	implementation 'org.springframework.boot:spring-boot-starter-mail'
}
```

## DB
![DB](https://user-images.githubusercontent.com/95121282/216303932-c2aa224f-567d-40bf-bebe-e4fa0f04b9b2.png)




---


## 프로젝트 사용 방법
### 프로젝트 시작 방법  
sts Boot Dashboard 탭에서 시작 버튼으로 실행  
![project_start](https://user-images.githubusercontent.com/95121282/216060960-448aaa69-725b-4a30-a120-2ee278aff78b.png)  

### 메인페이지  
  * 서비스 슬로건 타이핑 형식으로 DOM에 구현 및 이미지와 동시에 바뀌도록 setInterval 함수 적용  
  * header의 탭에 대한 설명과 함께 해당 페이지로 이동할 수 있는 버튼 역할의 카드 배치  
  * 지역이 선택되면 해당 지역의 모든 카테고리의 게시물을 최근 순으로 배치  
  * 모든 페이지에서 우측 하단의 채팅 버튼을 켜 기존에 활성화 된 채팅 이용 가능
  
  
![메인1](https://user-images.githubusercontent.com/95121282/216304274-502e30a6-31ce-410e-ba44-377c51914495.JPG)
![메인2](https://user-images.githubusercontent.com/95121282/216304279-2d65d7f0-66ab-4776-82fd-246bcac84b1f.jpg)
![그림3](https://user-images.githubusercontent.com/95121282/216304268-99909658-9a95-4f70-be4f-c1de2fb02aa3.png)
![채팅](https://user-images.githubusercontent.com/95121282/216304827-7a5bc925-f771-470c-8e00-8548160b7ef0.JPG)


### 로그인, 회원가입
  * 카카오톡 회원가입 및 페이지 자체 회원가입 유효성 구현 
  * 등록한 이메일로 아이디 및 비밀번호 찾기 구현
  
  
![회원가입](https://user-images.githubusercontent.com/95121282/216304955-a63efeb2-4e7b-40f5-b34e-4481f59093bd.JPG)
![로그인](https://user-images.githubusercontent.com/95121282/216304952-28f0ce84-3edf-4a54-b0fd-6c54621b3bc9.JPG)
![아이디, 비밀번호 찾기](https://user-images.githubusercontent.com/95121282/216305209-8afa7e9a-dd97-4adf-abc0-68b6cc60a1b0.JPG)


### 게시물 리스트, 작성, 수정, 
  * 대여, 판매, 나눔, 요청 각 탭에 맞는 데이터를 JSON 형식으로 받아와 가공하여 카드형식으로 리스트에 배치
  * 게시물의 이미지, 작성자, 주소, 내용 확인 및 댓글 작성 가능 / 찜하기 버튼과 채팅하기 버튼으로 각 기능 수행되도록 구현
  * 신고하기 버튼을 눌러 50자 내외로 관리자에게 신고하기 구현
  * 글 등록 수정 ckEditor 사용 및 유효성 검사 
  
  
![그림4](https://user-images.githubusercontent.com/95121282/216305652-ee268886-8ab9-4f8a-8385-a18573fffcf8.png)
![게시글 디테일](https://user-images.githubusercontent.com/95121282/216305648-dd10ff87-22d0-4a68-9400-6bd484d07a15.png)
![신고하기](https://user-images.githubusercontent.com/95121282/216305626-650bfa3a-7839-4058-9596-f11e5e23282f.JPG)
![게시글 댓글](https://user-images.githubusercontent.com/95121282/216305636-4c0c65a5-764b-4f02-a542-31ddd532f728.png)
![게시글 등록 수정](https://user-images.githubusercontent.com/95121282/216305645-2c6fff64-a665-4903-9602-b515ed07383a.png)


### 마이페이지
* CSS display로 탭 이동 구현
* 각 계정의 게시물 확인 가능 및 회원정보 수정, 삭제 가능


![마이페이지_개인정보수정](https://user-images.githubusercontent.com/95121282/216306447-559cdaf5-70ea-4df2-9673-2106de6f7a56.JPG)
![마이페이지_내가쓴글보기](https://user-images.githubusercontent.com/95121282/216306456-fad59a1c-1c37-4238-b6e6-8f2d1ff6e821.JPG)



### 관리자 페이지
* ajax로 비동기 탭 이동 구현
* 모든 계정, 게시물을 확인 가능하며 신고 된 계정과 계시물을 최상단에 두어 관리자가 확인하고 처리할 수 있도록 구현


![그림5](https://user-images.githubusercontent.com/95121282/216306470-b75cb748-7d03-491b-8dd4-cff1409daddc.png)


---
## 참고 자료
* ckEditor : [https://ckeditor.com/docs/ckeditor4/latest/](https://ckeditor.com/docs/ckeditor4/latest/)
* socket.io 채팅 구현 : [https://itseminar.tistory.com/29](https://itseminar.tistory.com/29)
