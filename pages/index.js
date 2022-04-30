import Link from 'next/link';
function HomePage() {
  return (
    <div>
      <h1>My Home Page</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/work">Work</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/about">About</Link></li>

      </ul>
    </div>
  );
}
export default HomePage;
