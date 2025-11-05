import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center ">
        <h1 className="fw-bold text-primary">About TextUtils</h1>
        <p className="lead text-dark my-5">
          Smart, fast, and developer-focused — a modern way to edit, analyze, and enhance text.
        </p>
      </div>

      <div className="card shadow-lg border-0 rounded-4 p-4">
        <div className="card-body">
          <h3 className="text-primary mb-3">🚀 Our Vision</h3>
          <p className="fs-5">
            <strong>TextUtils</strong> is designed for efficiency. It allows users to perform
            powerful text transformations — like upper/lower casing, punctuation removal,
            formatting, and analysis — instantly.  
            The goal is simple: **save time and make text handling effortless**.
          </p>

          <h3 className="text-primary mt-4 mb-3">🧠 Key Features</h3>
          <ul className="fs-5">
            <li>Instant <strong>Uppercase</strong> / <strong>Lowercase</strong> conversions</li>
            <li><strong>Copy</strong> text to clipboard in one click</li>
            <li><strong>Remove punctuation</strong> and unwanted spaces</li>
            <li>Sort or reverse text intelligently</li>
            <li>Word count, character count, and reading time estimation</li>
          </ul>

          <h3 className="text-primary mt-4 mb-3">🛠️ Technology Stack</h3>
          <p className="fs-5">
            Built with <strong>React.js</strong> and styled using <strong>Bootstrap 5</strong>,
            deployed on <strong>Vercel</strong>. TextUtils follows modern web engineering
            principles — component reusability, clean state management, and optimized rendering.
          </p>

          <h3 className="text-primary mt-4 mb-3">👨‍💻 About the Developer</h3>
          <p className="fs-5">
            I’m <strong>Younas Khan</strong> — a passionate Front-End Developer currently
            exploring the advanced world of web technologies.  
            Inspired by engineers at <strong>Google</strong> and <strong>Meta</strong>,
            I focus on building scalable, elegant, and user-centered web apps.
          </p>
          <p className="fs-5">
            My goal is to deliver digital experiences that balance **performance, design,
            and clarity** — the kind of applications developers love to use.
          </p>

          <h3 className="text-primary mt-4 mb-3">🌱 Coming Soon</h3>
          <ul className="fs-5">
            <li>AI-assisted text enhancement and grammar tools</li>
            <li>Dark mode with system sync</li>
            <li>Multi-language support</li>
            <li>Voice-to-text input tools</li>
          </ul>

          <div className="text-center mt-5">
            <h5 className="fw-bold text-primary">💬 Let’s Connect</h5>
            <p className="text-muted fs-6">
              Check out my work on{" "}
              <a
                href="https://github.com/younaskhan-dev"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-semibold"
              >
                GitHub
              </a>{" "}
              or share feedback — collaboration drives innovation!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
