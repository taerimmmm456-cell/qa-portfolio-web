# QA Portfolio 공개 근거 노트

이 문서는 외부 검수자가 사이트의 사례 설명과 공개 자료를 연결할 수 있도록 작성한 텍스트 노트입니다. PASS 사용 가이드 PDF 원본은 아래 링크에서 별도로 열람할 수 있습니다.

## Game QA

- 게임 QA 프로세스 문서(PPTX): [Production](https://qa-portfolio-web.vercel.app/work-samples/game-qa-process.pptx) · [GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/game-qa-process.pptx). 요구사항 리뷰, BAT, 공유 Skill Module의 영향 범위 확인 및 수정 후 재검증 사례.
- 소프트웨어 QA 협업 프로세스(PDF): [Production](https://qa-portfolio-web.vercel.app/work-samples/software-qa-collaboration-process.pdf) · [GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/software-qa-collaboration-process.pdf). 기획·개발·QA 역할과 결함 처리, 재검증 협업 흐름.
- 스쿼드 TC 공개용 사본(XLSX): [Production](https://qa-portfolio-web.vercel.app/work-samples/squad-test-cases-public.xlsx) · [GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/squad-test-cases-public.xlsx). `스쿼드 TC` 시트 30행의 미저장 변경, 83행의 빈 편성, 90행의 저장 편성·전투 대기 연동을 사이트에 소개했습니다. 원본의 결과 요약 수식 오류를 복구하고 빌드 식별값을 제외한 사본입니다. 원본 파일은 수정하지 않았습니다.

## PASS Automation Tool

근거 자료: [「PASS Automation Tool 사용 가이드」 PDF](https://qa-portfolio-web.vercel.app/work-samples/pass-automation-tool-guide.pdf) ([GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/pass-automation-tool-guide.pdf)) 1~2쪽의 반복 입력·환경 선택·실행 흐름. 공개 가이드는 FAQ까지의 5쪽이며, 뒤에 포함됐던 하위 기술 보고서는 제거했습니다. 아래 False Positive 판단과 시간 비교는 기존 Case Study에 정리된 기록으로, 현재 공개 가이드에 해당 상세 기록이 포함된 것은 아닙니다.

1. 메뉴 선택 후 필요한 입력과 환경을 설정하고 실행·결과 확인까지 진행합니다.
2. 이전 테스트의 transaction ID가 메모리에 남으면 새 요청이 실패해도 이전 결과로 성공을 잘못 판정할 위험이 있었습니다.
3. 새 실행 시 관련 상태를 초기화하고, 앞 단계의 통신과 결과 해석이 정상 완료된 경우에만 다음 검증을 허용하도록 변경했습니다.
4. 기존 Case Study의 시간 비교는 Test Page 입력·환경 전환·발송 단계 기준입니다. 수기 입력·환경 전환 약 1분 30초와 원클릭 자동 주입·발송 5초 이내를 비교합니다.

상세 판단 흐름: [PASS Automation Case Study](https://qa-portfolio-web.vercel.app/projects/pass-automation-tool/#validation).

## PASS AI Bot

근거 자료: [「PASS AI Bot 사용 가이드」 PDF](https://qa-portfolio-web.vercel.app/work-samples/pass-ai-bot-guide.pdf) ([GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/pass-ai-bot-guide.pdf)) 1~3쪽의 도입 배경, TC 초안 엑셀 출력, 대화 맥락 관리 기능.

1. 기능명, 요구사항 또는 변경 내용을 입력합니다.
2. 사전조건과 단계별 테스트 경로를 포함한 TC 초안을 XLSX로 출력합니다.
3. 새 작업 전 이전 대화의 맥락을 초기화해 작업 간 지침 간섭을 줄입니다.
4. QA는 생성된 TC의 기대 결과와 예외 조건을 실제 요구사항에 대조해 검토합니다.

공개 PDF의 범위는 TC 초안·맥락 관리·문서 입력과 안정성 설계입니다. API quota에는 대체 키 전환·쿨다운을 적용하고, 맥락은 Atomic File Write로 저장합니다. 상세 내용: [PASS AI Bot Case Study](https://qa-portfolio-web.vercel.app/projects/pass-ai-bot/#flow).

최신 범위의 출처는 제공된 `PASS_AI_Bot_사용_가이드.md` 5장(QA Helper와 실무 질문 활용 가이드)입니다. Manual Tester / Technical QA / Quality Pipeline / Quality Problem Solver는 공식 QA 성숙도 모델이나 역량 등급이 아닌, QA 질문과 확인 범위를 넓히기 위한 탐색 관점입니다. 공통 이론과 작성자의 실무 관점을 구분하며, Local 답변이 부족할 때 사용자가 AI 추가 분석을 선택합니다. Engineering Helper는 딥링크, Native → Flutter 전환, FE / BE / Common의 조사 시작 방향을 제안합니다. QA는 실제 요구사항·재현 결과·로그·API 응답을 대조해 원인 조사와 담당 영역 판단을 이어갑니다.

현재 공개 PDF에는 이 최신 QA Helper 범위가 포함되지 않습니다. PDF의 가이드 본문은 유지하고 하단 하위 페이지 링크만 제거했으며, 위 PDF를 최신 기능의 근거로 제시하지 않습니다. 최신 MD는 내용 대조에만 사용했고 별도 원본 파일로 게시하지 않았습니다. 최신 MD에서도 하단 하위 페이지 안내를 제거했습니다.
