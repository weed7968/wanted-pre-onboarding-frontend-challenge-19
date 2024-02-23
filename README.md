# wanted-pre-onboarding-frontend-challenge-19

안녕하세요.
3월 프론트엔드 프리온보딩 과정을 위한 사전과제입니다.

먼저 안내 사항을 읽어보시고 사전과제를 수행한 뒤 제출하시면 됩니다.

과제 제출은 issues를 이용하시면 됩니다. 예시가 있으니 참고해주세요.

과제 채점 후 4명을 선발하여 이력서를 피드백 할 예정입니다.

과제는 할 수 있는 만큼 하시고 제출하시면 됩니다. 강의 중간에도 과제를 이용해 설명할 기회가 많으니 일단 할 수 있는 만큼 하시고 미완이더라도 제출하시는 편이 수강생분들께 도움이 될 것 같습니다.

개인 이력서 주소도 추가해주시면 감사하겠습니다.

이외 질문은 issue에 올려주세요.

제출 마감일: 3월 1일

## 목록

- 안내사항
- 과제 공통 세팅
- 과제 1
- 과제 2

## 안내사항

과제 세팅에 맞춰 과제를 수행해주세요. 세팅값에 맞지 않는 프로젝트는 과제 확인이 불가능합니다. 과제 제출 전에 확인하고 제출 부탁드립니다.

- [] create-react-app 혹은 vite으로 프로젝트를 생성합니다.
- [] 아래 과제 공통 세팅의 폴더 구조를 확인합니다.
- [] 과제를 제출하는 방법은 본인이 작업한 github repository 주소를 [issues](https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/issues)에 올리면 됩니다.
- [] 과제물은 main 브랜치에 올립니다.
- [] 프로젝트는 node version 20에서 실행할 수 있어야합니다.
- [] Settings -> Codespaces -> Configuration Select branch를 main 으로 하고 제출합니다.(codespace 확인용도)
- [] 함수형 컴포넌트를 사용해 코드를 짜주세요.

## 과제 공통 세팅

- cra로 과제를 수행하기 위해서는 node.js와 npm이 설치 되어있어야 합니다.
- 폴더 구조는 가능한 아래 양식을 맞춰주세요.
- 스타일은 tailwind, styled-component, scss등 자유롭게 설정하시면 됩니다.
- 아래 폴더와 파일은 필수 요소입니다. 나머지는 자유롭게 설정해주세요.

```
/src
  /components
    /List
  /store
  App.tsx
  index.tsx
```

## 과제 1 todo list 만들기

Add와 Delete 기능 2 가지를 만듭니다.

1. input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 뜹니다.
2. 각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제됩니다.

<img src="https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/blob/main/todoListAssignment.png" width="500" >

- 디자인은 자유롭게 해도 됩니다. 위의 2가지 버튼과 그에 따른 기능이 있으면 됩니다.
- 가능하면 컴포넌트를 만듭니다. (작은 단위라도 좋습니다.)
- 전역상태를 관리해주세요.(가능한 Redux나 Redux-toolkit을 이용해주세요.)
