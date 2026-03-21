import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__logo" href="#hero">
          <span className="footer__logo-bracket">&lt;</span>
          GO
          <span className="footer__logo-bracket">/&gt;</span>
        </a>

        <p className="footer__copy">
          © {year} Gustav Osswald. Built with React & Vite.
        </p>

        <p className="footer__made">
          Designed &amp; built by{' '}
          <a href="#hero" className="footer__accent">Gustav Osswald</a>
        </p>
      </div>
    </footer>
  )
}
