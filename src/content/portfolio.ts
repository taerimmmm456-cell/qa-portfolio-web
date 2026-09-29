export type Project = {
  number: string;
  status: 'Completed' | 'In Progress';
  name: string;
  problem: string;
  change: string;
  result?: string;
  roles: string[];
  cta: string;
  href: string;
};

export const projects: Project[] = [
  {
    number: '01',
    status: 'Completed',
    name: 'PASS Automation Tool',
    problem: '반복적인 Test Page 접근과 파라미터 입력, 환경 전환에 반복 공수가 발생',
    change: '반복 검증 흐름을 하나의 QA Tool로 통합',
    result: '건당 약 1분 30초 → 5초 이내',
    roles: ['반복 작업 정의', '사용 흐름 설계', '실행·결과 검증', '실사용 개선'],
    cta: '검증 사례 보기 →',
    href: '/projects/pass-automation-tool/',
  },
  {
    number: '02',
    status: 'Completed',
    name: 'PASS AI Bot',
    problem: 'TC 작성, 문서화, 정보 탐색 같은 사전 작업 공수가 남아 있음',
    change: 'Telegram에서 QA 질문, TC 초안 생성, 문서/정보 탐색을 지원하는 QA Assistant 구성',
    roles: ['TC 초안 요구사항', '대화 흐름', '출력 검토'],
    cta: '사용 사례 보기 →',
    href: '/projects/pass-ai-bot/',
  },
  {
    number: '03',
    status: 'In Progress',
    name: 'On-prem QA Assistant',
    problem: '실제 업무 명세 / 민감정보를 Cloud LLM에 넣기 어려운 제약',
    change: '내부 환경에서 QA Assistant를 사용할 수 있을지 검증 중',
    roles: ['검토 범위', '실패 흐름', '적용 기준'],
    cta: '진행 범위 보기 →',
    href: '/projects/on-prem-qa-assistant/',
  },
];

export const evidence = [
  {
    number: '01',
    title: 'QA Process & Career',
    message: '기획 문서의 충돌을 QA 전에 확인하고, BAT Crash와 스킬 연동 영향을 검증한 사례',
    keywords: ['Requirement Review', 'BAT', 'Risk-based Testing'],
    href: '/evidence/qa-process-career/',
    cta: '사례 보기 →',
  },
  {
    number: '02',
    title: 'Game QA',
    message: '공유 스킬 모듈의 영향 범위 판단과 스쿼드 편성의 상태·예외 검증 사례',
    keywords: ['System Interaction', 'State / Exception', 'Risk-based Testing'],
    href: '/evidence/game-qa/',
    cta: '사례 보기 →',
  },
];

export const qaDomains = ['Game', 'HW / SW Integration', 'E-Commerce', 'Fintech / Auth'];

export const qaCoverage = [
  'Requirement Review',
  'Test Planning',
  'Execution',
  'Defect / Regression',
  'Result / Live QA',
];
