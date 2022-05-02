import Link from 'next/link';
import classes from './header-content.module.css';
function HeaderContent(){
    return (
      <div className={classes.header_content}>
        <h1>
          I am Mahesh The
          <span
            class="txt-type"
            data-words='["UI/UX Designer","Software Developer","Database Expert"]'
          ></span>
        </h1>
        <p class="lead">I specialize in Full Stack Software Development</p>
        <Link href="/work">
          <a class="btn-light">View My Work</a>
        </Link>
      </div>
    );
}
export default HeaderContent;