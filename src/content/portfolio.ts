export type Project = {
  number: string;
  status: 'Completed' | 'In Progress';
  name: string;
  problem: string;
  change: string;
  roles: string[];
  technology: string[];
  cta: string;
  href?: string;
};

export const projects: Project[] = [
  {
    number: '01',
    status: 'Completed',
    name: 'PASS Automation Tool',
    problem: '반복적인 Test Page 접근과 파라미터 입력, 환경 전환에 반복 공수가 발생',
    change: '반복 검증 흐름을 하나의 QA Tool로 통합',
    roles: ['Problem Definition', 'Workflow Design', 'QA / Validation', 'Usage Feedback'],
    technology: ['Selenium', 'Python'],
    cta: 'Case Study →',
    href: '/projects/pass-automation-tool/',
  },
  {
    number: '02',
    status: 'Completed',
    name: 'PASS AI Bot',
    problem: 'TC 작성, 문서화, 정보 탐색 같은 사전 작업 공수가 남아 있음',
    change: 'Telegram에서 QA 질문, TC 초안 생성, 문서/정보 탐색을 지원하는 QA Assistant 구성',
    roles: ['Problem Definition', 'Use Flow', 'Prompt / Output Requirements', 'QA / Validation', 'Usage Feedback'],
    technology: ['Telegram Bot', 'LLM API', 'Excel Output'],
    cta: 'Case Study →',
  },
  {
    number: '03',
    status: 'In Progress',
    name: 'On-prem AI PoC',
    problem: '실제 업무 명세 / 민감정보를 Cloud LLM에 넣기 어려운 제약',
    change: 'Local LLM 기반 QA Assistant의 소규모 실사용 가능성을 검증하는 PoC 진행',
    roles: ['Problem Definition', 'Scope', 'UX / Failure Flow', 'Validation Criteria', 'PoC Decision'],
    technology: ['Local LLM', 'FastAPI'],
    cta: 'In Progress →',
  },
];

export const evidence = [
  {
    number: '01',
    title: 'QA Process & Career',
    message: '요구사항 리뷰부터 결과 보고와 사후관리까지 실제 QA lifecycle에서 수행한 판단과 개선 사례',
    keywords: ['Requirement Review', 'BAT', 'Defect / Regression', 'Live QA'],
  },
  {
    number: '02',
    title: 'Game QA',
    message: '게임 경험을 시스템 분석 → 리스크 → TC → 실제 수행 결과로 전환한 Evidence',
    keywords: ['System Interaction', 'State / Exception', 'Risk-based Testing'],
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
