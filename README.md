#  <img width="24" alt="logo" src="https://user-images.githubusercontent.com/90392240/180437693-14283fbd-c33a-4b20-bf7c-dad8a40ca31f.png">  Electron Market(5조) 

> **admin 접근**
- 회원가입시 이메일에 admin이 포함되는 이메일만 admin페이지에 접근할 수 있습니다.
- 예) `electron@admin.com`

> **프로젝트 진행 노션 링크**
- [노션](https://crystal-iridium-e5c.notion.site/Electron-Market-5-ee3e572d9ad342249c627c89fae1c648)
- [저장소](https://github.com/cham9994/team5)

## 📑 과제 ****요구사항 분석****

- 제공받은 [API 분석](https://velog.io/@0seo8/vue-%EA%B7%B8%EB%A3%B9-%EA%B3%BC%EC%A0%9C)한 후 인증, 계좌, 제품(사용자/관리자) API에 따른 데이터 처리 플로우 및 [유저플로우](https://files.slack.com/files-pri/T037VJK5UJE-F03LE6VC0F6/_______________________________2022-06-20______________7.14.59.png) 이해
- vue 프레임 워크를 사용한 웹 페이지 개발

## ****🤲 함께한 멤버****
|<img src="https://ifh.cc/g/WA6smO.jpg" width="100">|<img src="https://user-images.githubusercontent.com/96939562/180461086-da6f1274-799c-411c-bf62-cbcb133b6a5e.png"  width="100">|<img src="https://user-images.githubusercontent.com/96939562/180471277-a6c8c214-142a-40ef-8dca-82d26f1b8ff0.png" height="100">|<img src="https://user-images.githubusercontent.com/96939562/180461628-dab196b8-693d-4fc9-86e9-c2cf58bb494c.png" height="100">|
|:---:|:---:|:---:|:---:|
|**[장경찬](https://www.notion.so/84282eb5faf64e36b615a9532b4997ac)** |**[노영서](https://www.notion.so/9655821a935746a5bb492b813a4f608e)**|**[최효근](https://www.notion.so/dd1b512b55214cc5bc39cb7c68dfd192)**|**[김신협](https://www.notion.so/9c5a9c8b3c52409ab8616a82f4eb38f3)**

## ✨ 팀 프로젝트 결과

### 배포 주소

[DEMO](https://strong-bonbon-5bceeb.netlify.app/)

### 저장소 주소

[](https://github.com/cham9994/team5/tree/develop)

### 🗓 프로젝트 기간

2022년 6월 20일 - 7월 21일 

## **📌 담당한 일(조장)**

### 관리자 페이지

> **관리자 대시보드**
> 
- **판매 데이터를 한 눈에 볼 수 있는 대시보드 페이지**
    
    ![스크린샷 2022-07-22 오후 4 17 48](https://user-images.githubusercontent.com/90392240/180655657-78bdcc87-30f8-47cd-823f-45452321c7a0.png)
    
    - 차트
        - 거래 데이터에 따라 동적으로 차트 데이터가 변경됩니다.
        - **제품별 판매량** → 막대그래프
        - **매출액 대비 제품 비중** → 파이차트
    - 전체 매출, 전체 주문 수 , 전체 제품 수, 거래내역 데이터를 한 번에 볼 수 있습니다.
    - 모든 거래내역 데이터 pagination 구현했습니다.

    

> **제품 추가 페이지**
> 
- 이미지 base64 처리하여 API 요청
- SweetAlerts2를 적용하여 알림창 모달 띄우기

![제품추가](https://user-images.githubusercontent.com/90392240/180655651-b236b1fa-d772-4a3c-8abd-ede33373129b.gif)

> **제품 목록 페이지**
> 
- table을 이용하여 데이터 추가했습니다.

![스크린샷 2022-07-22 오후 4 36 29](https://user-images.githubusercontent.com/90392240/180655835-288dfb4d-8472-4535-aa22-9ecf71fc7c90.png)

> **제품 수정 페이지**
> 
- dropdown 메뉴
    - 수정 페이지로 이동
    - 제품 삭제

![제품수정](https://user-images.githubusercontent.com/90392240/180655648-68229323-cd81-4b46-9332-bae98e762718.gif)

> **전체적인 스타일링**
> 
- 로그인 파트
- 제품 목록
