export function CreamOrbit() {
  return (
    <svg className="abstract-tech" viewBox="0 0 420 360" fill="none" aria-hidden="true">
      <circle cx="210" cy="180" r="150" stroke="rgba(0,121,121,0.16)" strokeWidth="1.5" />
      <circle cx="210" cy="180" r="104" stroke="#24B1B1" strokeWidth="1.5" opacity="0.7" />
      <circle cx="210" cy="180" r="58" fill="#007979" opacity="0.12" />
      <circle cx="210" cy="180" r="18" fill="#007979" />
      <circle cx="86" cy="120" r="8" fill="#24B1B1" />
      <circle cx="330" cy="96" r="10" fill="#FFE0C5" />
      <circle cx="338" cy="250" r="7" fill="#24B1B1" />
      <circle cx="92" cy="268" r="11" fill="#007979" />
      <path d="M86 120L210 180L330 96M210 180L338 250M210 180L92 268" stroke="#007979" strokeOpacity="0.35" />
    </svg>
  );
}

export function AbstractTech() {
  return (
    <svg className="abstract-tech" viewBox="0 0 420 360" fill="none" aria-hidden="true">
      <circle cx="210" cy="180" r="150" stroke="rgba(255,224,197,0.28)" strokeWidth="1.5" />
      <circle cx="210" cy="180" r="104" stroke="#24B1B1" strokeWidth="1.5" opacity="0.7" />
      <circle cx="210" cy="180" r="58" fill="#007979" opacity="0.35" />
      <circle cx="210" cy="180" r="18" fill="#FFE0C5" />
      <circle cx="86" cy="120" r="8" fill="#24B1B1" />
      <circle cx="330" cy="96" r="10" fill="#FFE0C5" />
      <circle cx="338" cy="250" r="7" fill="#24B1B1" />
      <circle cx="92" cy="268" r="11" fill="#FFF0E4" />
      <path d="M86 120L210 180L330 96M210 180L338 250M210 180L92 268" stroke="#FFF0E4" strokeOpacity="0.45" />
    </svg>
  );
}

export function AIWorkflowVisual() {
  return (
    <div className="mini-flow">
      {["Signal", "Model", "Decision", "Workflow"].map((step, index) => (
        <div className="mini-step" key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}

export function SystemDiagram() {
  const nodes = ["Forms", "Email", "CRM", "Database", "Tools", "Notify", "Docs"];
  return (
    <div className="system-diagram">
      <div className="system-core">SoftTell</div>
      {nodes.map((node) => (
        <span key={node} className="system-node">
          {node}
        </span>
      ))}
    </div>
  );
}

export function AssistantUI() {
  return (
    <div className="assistant-ui">
      <div className="assistant-top">
        <span className="assistant-status" />
        SoftTell Assistant
      </div>
      <div className="bubble in">How can we qualify this inquiry?</div>
      <div className="bubble out">I can gather context, score intent, and draft a response for review.</div>
      <div className="bubble in">Share the next best action.</div>
    </div>
  );
}

export function DataPipeline() {
  const stages = ["Collect", "Clean", "Transform", "Analyze", "Action"];
  return (
    <ol className="data-pipe">
      {stages.map((stage) => (
        <li key={stage}>
          <span />
          {stage}
        </li>
      ))}
    </ol>
  );
}

export function BrowserMock() {
  return (
    <div className="browser-mock">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <em>softtell.example</em>
      </div>
      <div className="browser-body">
        <div className="browser-hero-line" />
        <div className="browser-hero-line short" />
        <div className="browser-cards">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export function CustomSystemVisual() {
  return (
    <div className="custom-system">
      <div>AI layer</div>
      <div>Automation</div>
      <div>Data fabric</div>
      <div>Experience</div>
    </div>
  );
}

export function ContactVisual() {
  return (
    <svg className="contact-visual" viewBox="0 0 420 340" fill="none" aria-hidden="true">
      <circle cx="210" cy="170" r="120" fill="#007979" opacity="0.18" />
      <circle cx="210" cy="170" r="70" fill="#24B1B1" opacity="0.28" />
      <path d="M70 90L210 170L350 80M80 250L210 170L340 260" stroke="#007979" strokeWidth="2" />
      <circle cx="70" cy="90" r="9" fill="#FFE0C5" />
      <circle cx="350" cy="80" r="11" fill="#24B1B1" />
      <circle cx="80" cy="250" r="8" fill="#24B1B1" />
      <circle cx="340" cy="260" r="10" fill="#FFE0C5" />
      <circle cx="210" cy="170" r="16" fill="#073B3B" />
    </svg>
  );
}
