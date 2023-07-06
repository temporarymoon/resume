import "./app.css";

function Commented(props: any) {
  return <> </>;
}

export function App() {
  return (
    <div id="root">
      <div class="cell" id="name-cell">
        <div id="big-name">matei adriel rafael</div>
      </div>
      <div class="cell" id="contact">
        <div class="contact-icon">
          <i class="fa fa-github"></i>
        </div>
        <a href="https://github.com/Mateiadrielrafael">
          github.com/Mateiadrielrafael
        </a>
        <div class="contact-icon">
          <i class="fa fa-envelope"></i>
        </div>
        <a href="mailto:rafaeladriel11@gmail.com">rafaeladriel11@gmail.com</a>
      </div>
      <div class="cell">
        <div class="container">
          <div class="header">Personal Projects</div>
          <div class="element">
            <div class="element-title">
              <a href="https://github.com/Mateiadrielrafael/million-prescient-trees">
                Million prescient trees
              </a>
            </div>
            <div class="element-content">
              MPT is an AI for the card game "echo", and the project I am currently hacking on. Written in{" "}
              <strong> rust</strong>, MPT makes use of tehniques such as custom
              allocators to try and achieve peak performance. Furthermore, echo is a hidden
              information game with a surprisingly large game tree. To tackle 
              these challenges, I had to learn about (and implement) <strong>counterfactual
              regret minimization</strong>, together with a series of novel domain-specific optimizations.
            </div>
          </div>
          <div class="element">
            <div class="element-title">
              <a href="https://github.com/lunarcast/lunarbox">Lunarbox</a>
            </div>
            <div class="element-content">
              Lunarbox is a{" "}
              <strong>
                strongly-typed visual functional programming langauge
              </strong>{" "}
              I made in Purescript. It features an interactive editor, type
              inference, a basic linter & optimizer, a color-encoding of types,
              cloud sync, an admin interface and an example & tutorial system.
            </div>
          </div>
          <div class="element">
            <div class="element-title">
              <a href="https://github.com/lunarcast/lunarflow">Lunarflow</a>
            </div>
            <div class="element-content">
              LunarFlow is a <strong>lambda calculus visualizer</strong> written
              in PureScript using concur and algebraic effects via free monads.
              During it's development I researched and implemented multiple tree
              transformation algorithms based on recursion schemes, including a
              size annotator, shape-preserving (eta) reduction and a layout
              generation algorithm.
            </div>
          </div>
          <div class="element">
            <div class="element-title">
              <a href="https://github.com/Mateiadrielrafael/logicGateSimulator">
                Logic gate simulator
              </a>
            </div>
            <div class="element-content">
              During the summer of 2019 I developed a web editor and simulator
              for logic gates using <strong>TypeScript</strong> with{" "}
              <strong>react</strong> and <strong>rxjs</strong>. The simulator
              featured an extensive interactive editor (drag and drop,
              selections, clipboard operations, etc), integrated circuits
              (custom components encapsulating a piece of logic), up to 32 bits
              per pin, support for multiple languages and locales, and
              configurable components which enables extensibility from the user.
            </div>
          </div>
          <div class="element">
            <div class="element-title">
              <a href="https://github.com/Mateiadrielrafael/doffycup">
                Doffycup
              </a>
            </div>
            <div class="element-content">
              Doffycup is a{" "}
              <strong>interactive programming teaching tool</strong> me and a
              friend developed in the final round of the infoeducatie contest.
              The project combines a live-updating, scratch-like, read-only code
              interface with a cup guessing game in order to create an unique
              experience that has been tested on a number of kids with great
              success.
            </div>
          </div>
          <div class="element">
            <div class="element-title">
              <a href="https://github.com/lunarcast/lunarlog">
                Lunarlog & moonlog
              </a>
            </div>
            <div class="element-content">
              Moonlog is a simple implementation of an indentation-based logic
              programming langauge using PureScript. During the summer of 2021,
              I went a step further and created Lunarlog — a{" "}
              <strong>visual logic based programming language</strong>{" "}
              implemented using a handmade purescript graphics library.
            </div>
          </div>
          <Commented>
            <div class="element">
              <div class="element-title">
                <a href="https://github.com/lunarcast/lunarpie">
                  Type system implementations
                </a>
              </div>
              <div class="element-content">
                I have spent a significant amount of time learning about the
                implementation of type systems for programming languages. I have
                implemented various such systems, ranging from Hindley–Milner
                type inference, rank-n types, up to basic dependently typed
                systems with implicit arguments.
              </div>
            </div>
          </Commented>
        </div>
        <div class="spacing" />
      </div>
      <div class="cell">
        <div class="container">
          <div class="header">Work experience</div>
          <div class="element">
            <div class="element-title">Wargame arena</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              Spring of 2022
            </div>
            <div class="element-content">
              As a <strong>Purescipt</strong> freelancer, I worked on the
              development of an interactive ui for a wargame playing platform. I
              solved tasks ranging from bringing mockup UIs to reality using{" "}
              <strong>Halogen</strong> and <strong>CSS</strong>, to implementing
              Firebase-based authentication and interacting with a server using
              websockets.
            </div>
          </div>
          <div class="element">
            <div class="element-title">Visonum</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              June 2022 – April 2023
            </div>
            <div class="element-content">
              As a <strong>Purescript</strong> software engineer, I worked on
              multiple projects related to network quality testing. I learnt a
              lot about writing quality unit tests, processing streams of data
              and integrating PureScript into existing Javascript codebases.
            </div>
          </div>
        </div>
        <div class="container" id="education">
          <div class="header">Education</div>
          <div class="element">
            <div class="element-title">Math and Computer Science</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              September 2018 – June 2022
            </div>
            <div class="element-content">Stefan Demetrescu high school</div>
          </div>
          <div class="element">
            <div class="element-title">BSC Mathematics</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              September 2022 – present
            </div>
            <div class="element-content">University of Groningen</div>
          </div>
        </div>
        <div class="container">
          <div class="header">Skills</div>
          <div id="skills">
            <div class="skill-level">Proeficient</div>
            <div class="skill-contents">
              Purescript – TypeScript – NodeJs – Neovim
            </div>
            <div class="skill-level">Intermediate</div>
            <div class="skill-contents">
              Rust – Elm – Nix – Haskell – Latex - Python – Lua
            </div>
            <div class="skill-level">Beginner</div>
            <div class="skill-contents">F# – Lean – Idris</div>
          </div>
        </div>
        <div class="container">
          <div class="header">Activities</div>
          <div class="element">
            <div class="element-title">Infoeducatie</div>
            <div class="element-content">
              Infoeducatie is a country-wide programming contest in Romania. The
              contestants create a project they present to a group of judges
              across multiple phases. The top 5 contestants across a list of
              predefined categories get to compete in a 24h hackaton. I have
              competed and <strong>won second place 3 years in a row</strong>.
            </div>
          </div>
        </div>
        <div class="spacing" />
      </div>
    </div>
  );
}
