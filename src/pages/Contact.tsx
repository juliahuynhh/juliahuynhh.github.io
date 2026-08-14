import './Contact.css'

export default function Contact() {
  return (
    <div className="page-container contact-page">
      <article className="contact-paper">
        <img
          src="/icons/paper.png"
          alt=""
          className="contact-paper-bg"
          aria-hidden="true"
        />

        <div className="contact-paper-content">
          <h1 className="contact-heading">want to talk to me?</h1>

          <p className="contact-line">
            email me at{' '}
            <a href="mailto:juliamaihuynh@utexas.edu" className="contact-link">
              juliamaihuynh@utexas.edu
            </a>
          </p>

          <p className="contact-or">OR</p>

          <p className="contact-line">
            <a
              href="https://www.linkedin.com/in/juliamaihuynh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              contact me on linkedin!
            </a>
          </p>
        </div>
      </article>
    </div>
  )
}
