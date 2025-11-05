import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-5 py-5 bg-secondary text-muted border-top border-dark ">
      <div className="container ">
        <p className="mb-1">
          © {new Date().getFullYear()} <strong>TextUtils</strong> | Built with ❤️ using{" "}
          <strong>React.js</strong> & <strong>Bootstrap</strong> by{" "}
          <span className="text-dark fw-semibold">Younas Khan</span>
        </p>
        <p className="small mb-0">
          <a
            href="https://github.com/younaskhan-dev"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark fs-6 fw-bold"
          >
            GitHub
          </a>{" "}
          •{" "}
          <a
             href="mailto:younaskhan1822@gmail.com"
            className="text-decoration-none text-dark fs-6 fw-bold"
          >
            Email : younaskhan1822@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

