export default function About() {
  return (
    <>
      <header className="page-header">
        <p className="section-label">INTRO</p>
        <h1 className="page-title">About</h1>
      </header>

      <div className="page-content">
        <p className="about-intro">
          {/* About 페이지 상단 소개 (선택) */}
        </p>

        <section className="about-education">
          <h2 className="about-block-title">EDUCATION</h2>
          <ul className="education-list">
          <li className="education-item">
              <span className="education-period">2025-2027</span>
              <h3 className="education-school">한국디지털미디어고등학교</h3>
              <p className="education-major">해킹방어과</p>
              <p className="education-desc">
                {/* 부가 설명 (선택) */}
              </p>
            </li>
            <li className="education-item">
              <span className="education-period">2024 - 2026</span>
              <h3 className="education-school">서울여자대학교 정보보호영재교육원</h3>
              <p className="education-major">중등-심화</p>
              <p className="education-major">고등-전문 CTF</p>
              <p className="education-major">고등-전문 RnE</p>

              <p className="education-desc">
                {/* 학적·활동 등 부가 설명 (선택) */}
              </p>
            </li>

          </ul>
        </section>

        <div className="about-grid">
          <div>
            <h2 className="about-block-title">VALUES</h2>
            <div className="value-grid" style={{ marginTop: 0 }}>
              <article className="value-card">
                <h3 className="value-card-title">BREVITY</h3>
                <p className="value-card-desc">
                  간결하고 효율적인 코드를 추구합니다.
                </p>
              </article>
              <article className="value-card">
                <h3 className="value-card-title">CONTINUOUS LEARNING</h3>
                <p className="value-card-desc">
                  지속적인 발전과 학습을 지향합니다.
                </p>
              </article>
              <article className="value-card">
                <h3 className="value-card-title">FLEXIBILITY</h3>
                <p className="value-card-desc">
                  융통성을 중요시합니다.
                </p>
              </article>
              <article className="value-card">
                <h3 className="value-card-title">DIVERSITY</h3>
                <p className="value-card-desc">
                  다양한 면모를 가진 사람을 존중합니다.
                </p>
              </article>
            </div>
          </div>

          <div>
            <h2 className="about-block-title">SKILLS</h2>
            <div className="skills-grid">
              <span className="skill-chip">Python</span>
              <span className="skill-chip">C / C++</span>
              <span className="skill-chip">Javascript</span>
              <span className="skill-chip">React</span>
              <span className="skill-chip">HTML / CSS</span>
              <span className="skill-chip">Git</span>
              <span className="skill-chip">Figma</span>
              <span className="skill-chip">Databases</span>
              <span className="skill-chip">Docker</span>
              <span className="skill-chip">Security</span>
              <span className="skill-chip">Game development</span>
              <span className="skill-chip">Flutter</span>
            </div>
          </div>
        </div>

        <div className="about-direction">
          <h2 className="about-block-title">DIRECTION</h2>
          <p>
            감정과 이성, 창의와 실용, 안정과 도전, 상반된 가치들의 조화를 추구하는 개발자가 되고 싶습니다.
          </p>
        </div>
      </div>
    </>
  );
}
