import { createRoot } from 'react-dom/client'

function App(): JSX.Element {
  return (
    <div className="container">
      <header className="hero">
        <div className="left">
          <img src="/assets/logo.svg" alt="Sidera Path" className="logo" />
          <h1 className="title">Sidera Path</h1>
          <p className="tag">Daily cosmic insights, friend feeds, and personalised guidance.</p>
          <div className="badges">
            <a className="btn" href="#" aria-label="Download on the App Store">
              <img src="/assets/app-store.svg" alt="Apple" style={{height:20}} />
              App Store
            </a>
            <a className="btn" href="#" aria-label="Get it on Google Play">
              <img src="/assets/play-store.svg" alt="Google" style={{height:20}} />
              Google Play
            </a>
          </div>
        </div>
        <div className="right">
          <img src="/assets/screenshot-1.png" alt="App preview" style={{width:260,borderRadius:16}} />
        </div>
      </header>

      <section className="features">
        <div className="card">
          <h3>Daily Readings</h3>
          <p>Short, actionable guidance tailored to your profile.</p>
        </div>
        <div className="card">
          <h3>Friends Feed</h3>
          <p>Share and compare insights with friends and discover trends.</p>
        </div>
        <div className="card">
          <h3>Fast & Private</h3>
          <p>Minimal permissions, privacy-focused defaults.</p>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Sidera Path — <a href="privacy.html">Privacy</a> • <a href="support.html">Support</a></p>
      </footer>
    </div>
  )
}

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
