# ComOn

## 협업 가이드라인

### 공통

1. 백로그는 다른 사람이 알아볼 수 있게 명확히 작성한다. 그렇지 않으면 백로그를 삭제하고 다시 작성하거나 수정한다.

2. 개발에 관하여 '할 일'이 생기면 무조건 백로그로 만들어 관리한다.

   ("진홍아, 너가 만든 페이지 오른쪽 상단에 보면 좀 깨지던데 수정해줄래?" 라는 말을 들으면 김진홍은 Jira에 "동아리 소개 페이지 오른쪽 상단 깨짐 현상 수정" 이라는 백로그를 즉시 생성한다)

3. 막히는 부분이 생기면 반드시 다른 부원 또는 운영진에게 도움을 요청한다. 혼자 끙끙 앓다가 벼락치기하지 않는다.

4. 백로그 추가/수정/삭제는 자유롭게 해도 된다. 다만 스프린트에 영향이 간다면, 즉 일주일동안 할 일을 늘이거나 줄일 필요가 있다고 생각되면 먼저 멘토에게 상담한다.

### 월요일까지

1. 자신의 이름으로 브랜치를 만들어 작업한다.
2. Commit 메시지 앞에 [YJB-1] 과 같이 Jira 이슈 코드를 같이 적는다.
   (예시: [YJB-1] 헤더와 푸터 만들었음. 근데 헤더 약간 이상해서 추가 수정 필요)
3. 스프린트에 담긴 모든 작업이 끝나면 자신의 브랜치를 Pull Request하여 main에 Merge 한다.

### 화요일에

1. 일주일동안 해온 스프린트에 대해 피드백을 나눈다
2. 다음 스프린트를 계획한다.
3. 남은 시간동안은 개발을 진행한다.
