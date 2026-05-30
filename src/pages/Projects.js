export default function Projects() {
  return (
    <>
      <header className="page-header">
        <p className="section-label">WORK</p>
        <h1 className="page-title">Project</h1>
      </header>

      <div className="page-content">
        <p className="section-body" style={{ marginBottom: "3rem" }}>
          GitHub에 올린 개인·팀·해커톤 프로젝트 중 대표 작업을 정리했습니다.
          각 저장소에서 더 자세한 코드와 기록을 확인할 수 있습니다.
        </p>

        <div className="project-list">
          

          <article className="project-card">
            <div className="project-meta">
              <span className="project-tag accent">Personal</span>
              <span className="project-tag">2025</span>
            </div>

            <h2 className="project-name">WordMaster React</h2>
            <p className="project-summary">
              드래그 앤 드롭과 스와이프로 학습하는 React 기반 어휘 앱.
            </p>

            <a
              href="https://github.com/gina1021/wordmaster-react"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              github.com/gina1021/wordmaster-react
            </a>

            <div className="stack-list">
              <span className="stack-item">React</span>
              <span className="stack-item">react-dnd</span>
              <span className="stack-item">react-swipeable</span>
              <span className="stack-item">sql.js</span>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">PROBLEM</p>
              <p className="project-detail-text">
                단순 암기형 UI는 반복 학습 동기를 유지하기 어렵습니다.
              </p>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">SOLUTION</p>
              <p className="project-detail-text">
                드래그·스와이프 인터랙션과 브라우저 로컬 DB(sql.js)를 활용해
                학습 흐름을 게임처럼 설계했습니다.
              </p>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">HIGHLIGHTS</p>
              <ul className="highlight-list">
                <li>react-dnd로 데스크톱·터치 입력 모두 지원</li>
                <li>sql.js 기반 클라이언트 사이드 데이터 관리</li>
                <li>react-swipeable로 모바일 친화적 학습 UX</li>
              </ul>
            </div>
          </article>

          <article className="project-card">
            <div className="project-meta">
              <span className="project-tag accent">Hackathon</span>
              <span className="project-tag">2024</span>
            </div>

            <h2 className="project-name">Literacy App</h2>
            <p className="project-summary">
              한국코드페어 해커톤 출품작 — 문해력이 부족한 사용자를 돕는
              Flutter 앱.
            </p>

            <a
              href="https://github.com/gina1021/literacy-app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              github.com/gina1021/literacy-app
            </a>
            <a
              href="https://github.com/gina1021/literacy-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              github.com/gina1021/literacy-backend
            </a>

            <div className="stack-list">
              <span className="stack-item">Flutter</span>
              <span className="stack-item">Dart</span>
              <span className="stack-item">Python</span>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">PROBLEM</p>
              <p className="project-detail-text">
                문해력 부족으로 일상 정보에 접근하기 어려운 사용자층이
                존재합니다.
              </p>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">SOLUTION</p>
              <p className="project-detail-text">
                모바일 앱과 Python 백엔드를 연동해 맞춤형 문해력 학습 경험을
                제공하는 해커톤 프로토타입을 구현했습니다.
              </p>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">HIGHLIGHTS</p>
              <ul className="highlight-list">
                <li>한국코드페어 해커톤 출품</li>
                <li>literacy-app / literacy-backend 분리 구조</li>
                <li>Flutter로 크로스플랫폼 UI 구현</li>
              </ul>
            </div>
          </article>
          <article className="project-card">
            <div className="project-meta">
              <span className="project-tag accent">Team</span>
              <span className="project-tag">2025</span>
            </div>

            <h2 className="project-name">범람 (bumram)</h2>
            <p className="project-summary">
              TTL 14번째 앨범 《범람》 프로모션 웹사이트. 앨범 컨셉을 담은
              인터랙티브 랜딩 페이지.
            </p>

            <a
              href="https://github.com/gina1021/bumram"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              github.com/gina1021/bumram
            </a>
            <a
              href="https://gina1021.github.io/bumram/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              gina1021.github.io/bumram
            </a>

            <div className="stack-list">
              <span className="stack-item">React</span>
              <span className="stack-item">React Router</span>
              <span className="stack-item">liquid-glass-react</span>
              <span className="stack-item">react-awesome-reveal</span>
              <span className="stack-item">gh-pages</span>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">PROBLEM</p>
              <p className="project-detail-text">
                앨범의 분위기와 스토리를 단순 정보 페이지만으로는 충분히 전달하기
                어려웠습니다.
              </p>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">SOLUTION</p>
              <p className="project-detail-text">
                스크롤 애니메이션, 글래스모피즘 UI, 타입 애니메이션을 결합해 앨범
                컨셉을 웹 경험으로 확장했습니다.
              </p>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">HIGHLIGHTS</p>
              <ul className="highlight-list">
                <li>GitHub Pages 배포 및 SPA 라우팅 대응</li>
                <li>react-type-animation 기반 타이포 인터랙션</li>
                <li>liquid-glass-react로 앨범 무드에 맞는 UI 구현</li>
              </ul>
            </div>
          </article>
          <article className="project-card">
            <div className="project-meta">
              <span className="project-tag accent">Team</span>
              <span className="project-tag">2024</span>
            </div>

            <h2 className="project-name">Reamember</h2>
            <p className="project-summary">
              국어 어휘를 쉽게 외우기 위한 예문 생성 앱. API와 클라이언트를
              분리해 구현.
            </p>

            <a
              href="https://github.com/gina1021/reamember-api"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              github.com/gina1021/reamember-api
            </a>
            <a
              href="https://github.com/gina1021/reamember-app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              github.com/gina1021/reamember-app
            </a>

            <div className="stack-list">
              <span className="stack-item">Python</span>
              <span className="stack-item">Flutter</span>
              <span className="stack-item">REST API</span>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">PROBLEM</p>
              <p className="project-detail-text">
                맥락 없는 어휘 암기는 오래 기억에 남지 않습니다.
              </p>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">SOLUTION</p>
              <p className="project-detail-text">
                예문 생성 API(reamember-api)와 학습 앱(reamember-app)을 분리
                설계해, 단어에 맞는 예문 기반 학습 흐름을 만들었습니다.
              </p>
            </div>

            <div className="project-detail-block">
              <p className="project-detail-label">HIGHLIGHTS</p>
              <ul className="highlight-list">
                <li>어휘 학습 도메인에 특화된 API·앱 구조</li>
                <li>Python 백엔드와 Flutter 클라이언트 연동</li>
                <li>팀 협업으로 프론트·백 역할 분리</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
