import Link from "next/link";
import classes from './header.module.css';
function HeaderComponent() {
  return (
    <header id="header-home">
      <div class="container">
        <nav id="main-nav">
          <img src="img/logo.png" alt="My Portfolio" id="logo"></img>
          <ul>
            <li>
              <Link href="/"><a class="current">Home</a></Link>
            </li>
            <li>
              <Link href="/blog"><a>Blog</a></Link>
            </li>
            <li>
              <Link href="/work"><a>Work</a></Link>
            </li>
            <li>
              <Link href="/contact"><a>Contact</a></Link>
            </li>
            <li>
              <Link href="/about"><a>About</a></Link>
            </li>
          </ul>
        </nav>
        <div class="header-content">
          <h1>
            I am Mahesh The
            <span
              class="txt-type"
              data-words='["UI/UX Designer","Software Developer","Database Expert"]'
            ></span>
          </h1>
          <p class="lead">I specialize in Full Stack Software Development</p>
          <Link href="work.html" class="btn-light">
            View My Work
          </Link>
        </div>
      </div>
    </header>
  );
}
export default HeaderComponent;
