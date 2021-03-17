import Link from 'next/link';

function About() {
  return (
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about">
          About this project
        </Link>
      </li>
    </ul>
  );
}

export default About;
