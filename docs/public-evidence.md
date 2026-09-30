# QA Portfolio 공개 근거 노트

이 문서는 외부 검수자가 사이트의 사례 설명과 공개 자료를 연결할 수 있도록 작성한 텍스트 노트입니다. PASS 사용 가이드 PDF 원본은 아래 링크에서 별도로 열람할 수 있습니다.

## Game QA

- 게임 QA 프로세스 문서(PPTX): [Production](https://qa-portfolio-web.vercel.app/work-samples/game-qa-process.pptx) · [GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/game-qa-process.pptx). 요구사항 리뷰, BAT, 공유 Skill Module의 영향 범위 확인 및 수정 후 재검증 사례.
- 소프트웨어 QA 협업 프로세스(PDF): [Production](https://qa-portfolio-web.vercel.app/work-samples/software-qa-collaboration-process.pdf) · [GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/software-qa-collaboration-process.pdf). 기획·개발·QA 역할과 결함 처리, 재검증 협업 흐름.
- 스쿼드 TC 공개용 사본(XLSX): [Production](https://qa-portfolio-web.vercel.app/work-samples/squad-test-cases-public.xlsx) · [GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/squad-test-cases-public.xlsx). `스쿼드 TC` 시트 30행의 미저장 변경, 83행의 빈 편성, 90행의 저장 편성·전투 대기 연동을 사이트에 소개했습니다. 원본의 결과 요약 수식 오류를 복구하고 빌드 식별값을 제외한 사본입니다. 원본 파일은 수정하지 않았습니다.

## PASS Automation Tool

근거 자료: [「PASS Automation Tool 사용 가이드」 PDF](https://qa-portfolio-web.vercel.app/work-samples/pass-automation-tool-guide.pdf) ([GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/pass-automation-tool-guide.pdf)) 1~2쪽의 반복 입력·환경 선택·실행 흐름, 8쪽의 False Positive 위험 및 수정 내용, 9쪽의 건당 소요 시간 비교.

1. 메뉴 선택 후 필요한 입력과 환경을 설정하고 실행·결과 확인까지 진행합니다.
2. 이전 테스트의 transaction ID가 메모리에 남으면 새 요청이 실패해도 이전 결과로 성공을 잘못 판정할 위험이 있었습니다.
3. 새 실행 시 관련 상태를 초기화하고, 앞 단계의 통신과 결과 해석이 정상 완료된 경우에만 다음 검증을 허용하도록 변경했습니다.
4. 가이드는 수기 입력·환경 전환 약 1분 30초와 원클릭 자동 주입·발송 5초 이내를 비교합니다. 이 수치는 해당 반복 흐름의 기록이며 전체 QA 생산성 지표가 아닙니다.

상세 판단 흐름: [PASS Automation Case Study](https://qa-portfolio-web.vercel.app/projects/pass-automation-tool/#validation).

## PASS AI Bot

근거 자료: [「PASS AI Bot 사용 가이드」 PDF](https://qa-portfolio-web.vercel.app/work-samples/pass-ai-bot-guide.pdf) ([GitHub](https://github.com/taerimmmm456-cell/qa-portfolio-web/blob/main/public/work-samples/pass-ai-bot-guide.pdf)) 1~3쪽의 도입 배경, TC 초안 엑셀 출력, 대화 맥락 관리 기능.

1. 기능명, 요구사항 또는 변경 내용을 입력합니다.
2. 가이드는 사전조건과 단계별 테스트 경로를 포함한 TC 초안을 XLSX로 출력하는 흐름을 설명합니다.
3. 새 작업 전 이전 대화의 맥락을 초기화하는 기능을 안내합니다. 이는 작업 간 지침 간섭을 줄이기 위한 운영 방식입니다.
4. 출력 파일의 형식과 TC의 검증 적합성은 별개입니다. QA가 기대 결과와 예외 조건을 검토해야 합니다.

가이드만으로 생성 TC의 품질, 시간 절감, 사용자 피드백은 확인할 수 없어 성과 수치로 제시하지 않습니다. 상세 내용: [PASS AI Bot Case Study](https://qa-portfolio-web.vercel.app/projects/pass-ai-bot/#flow).

최신 범위는 제공된 `PASS_AI_Bot_사용_가이드.md` 5장(QA Helper와 실무 질문 활용 가이드)을 기준으로 대조했습니다. Manual Tester / Technical QA / Quality Pipeline / Quality Problem Solver는 연차나 직급이 아닌 탐색 기준입니다. 공통 이론과 작성자의 실무 관점을 구분하며, Local 답변이 부족할 때 사용자가 AI 추가 분석을 선택합니다. Engineering Helper는 딥링크, Native → Flutter 전환, FE / BE / Common의 조사 시작 방향을 안내할 뿐 최종 원인이나 담당 조직을 확정하지 않습니다. 실제 요구사항·재현 결과·로그·API 응답과 대조해 QA가 최종 판단합니다.

현재 공개 PDF에는 이 최신 QA Helper 범위가 포함되지 않습니다. 기존 PDF 원본은 교체하지 않았으며, 위 PDF를 최신 기능의 근거로 제시하지 않습니다. 최신 MD는 이번 내용 대조에만 사용했고 별도 원본 파일로 게시하지 않았습니다.
