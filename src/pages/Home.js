import { Link } from "react-router-dom";
import ScrollSection from "../components/ScrollSection";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <h1 className="hero-keyword">Concept to Code </h1>
        <h1 className="hero-keyword">Vision to Reality </h1>
        <h1 className="hero-keyword">Ideas to Impact </h1>

        {/* <h1 className="hero-keyword">Entire Journey</h1> */}
        {/* <h1 className="hero-keyword">
          never ends
        </h1> */}
        <p className="hero-greeting">
          
        </p>
      </section>

      <ScrollSection>
        <div className="home-hello-block">
          <h2 className="home-subtitle">Hello!</h2>
          <p className="home-intro">
            안녕하세요, 개발자 김지나입니다.
            {/* 여기에 간단한 자기소개를 적어 주세요. */}
          </p>
        </div>
      </ScrollSection>

      <ScrollSection>
        <p className="section-label">OVERVIEW</p>
        <h2 className="section-title">My Portfolio</h2>
        {/* <p className="section-body">
          Project 페이지에는 개인 및 팀 프로젝트와 직무에서 진행한 프로젝트의 결과가 담겨
          있습니다. 이 과정에서 고민했던 점, 해결 방법, 관련 공부 기록, 그리고 구현한
          기능들을 통해 저의 기술 스택과 문제 해결 능력을 깊이 있게 확인하실 수 있습니다.
          About 페이지에서는 제 경험과 가치관, 그리고 앞으로 프론트엔드 개발자로서 나아가고
          싶은 방향을 간략히 소개하고 있습니다.
        </p> */}

        <div className="overview-links">
          <Link to="/projects" className="overview-link">
            <h3 className="overview-link-title">Project</h3>
            <p className="overview-link-desc">
              My Projects
            </p>
          </Link>
          <Link to="/about" className="overview-link">
            <h3 className="overview-link-title">About</h3>
            <p className="overview-link-desc">
              About Me
            </p>
          </Link>
        </div>
      </ScrollSection>
    </main>
  );
}
