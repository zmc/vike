import React from 'react'
import './Features.css'
import iconChevron from '../icons/chevron.svg'
import { assert } from '../utils'
import Control from './Control.mdx'
import DeployAnywhere from './DeployAnywhere.mdx'
import Scalable from './Scalable.mdx'
// import { updateSidePanelScroll } from '../SidePanel'

export { Features }

function Features() {
  return (
    <div id="features">
      <HorizontalLine style={{ paddingBottom: 45 }} />
      <div id="features-row-top">
        <Feature name="control" isExpandable={true}>
          <h2>{String.fromCodePoint(0x1f527)} Control</h2>
          <p>
            You control how your pages are rendered; you can use <b>any view framework</b> (React, Vue, ...) and{' '}
            <b>any tool</b> (Vuex/Redux, GraphQL, Service Workers, ...) you want.
          </p>
          <p>
            Integrating tools is <b>simple</b> and <b>natural</b>.
          </p>
        </Feature>
        <Feature>
          <h2>{String.fromCodePoint(0x1f9be)} Full-fledged</h2>
          <p>
            <b>Filesystem Routing</b>, <b>Data fetching</b>, <b>pre-rendering</b> (<b>SSG</b>), <b>HMR</b>,{' '}
            <b>Client-side Routing</b> (faster/animated page transitions) or <b>Server-side Routing</b> (simple
            architecture).
          </p>
          <p>
            Render pages with <b>SSR</b>, as <b>SPA</b>, or to <b>HTML-only</b>.
          </p>
        </Feature>
        <Feature>
          <h2>{String.fromCodePoint(0x1faa8)} Rock-solid</h2>
          <p>
            The source code of <code>vite-plugin-ssr</code> has <b>no known bug</b>.
          </p>
          <p>
            Every release is assailed against a heavy suite of <b>automated tests</b>.
          </p>
          <p>
            <b>Used in production</b> by many comp&shy;anies.
          </p>
          <p></p>
        </Feature>
      </div>
      <LearnMore name="control">
        <Control />
      </LearnMore>
      <div id="features-row-bottom">
        <Feature name="deploy-anywhere" isExpandable={true}>
          <h2>{String.fromCodePoint(0x1f30d)} Deploy Anywhere</h2>
          <p>
            Use <b>any server environement</b> you want (Cloudflare Workers, EC2 instance, AWS lambda, Firebase,
            Express.js, Fastify, Hapi, ...).
          </p>
          <p>
            <b>Pre-render</b> your app and deploy to <b>any static host</b> (Netlify, GitHub Pages, Cloudflare Pages,
            ...).
          </p>
        </Feature>
        <Feature>
          <h2>{String.fromCodePoint(0x26a1)} Fast</h2>
          <p>
            <b>Browser-side code splitting</b>: each page loads only the code it needs. Lighthouse score of 100%.
          </p>
          <p>
            <b>Fast Node.js cold start</b>: your pages are lazy-loaded so that adding pages doesn't increase the cold
            start of your serverless functions.
          </p>
        </Feature>
      </div>
      <LearnMore name="deploy-anywhere">
        <DeployAnywhere />
      </LearnMore>
      <div id="features-row-bottom">
        <Feature name="scalable" isExpandable={true}>
          <h2>{String.fromCodePoint(0x1f680)} Scalable</h2>
          <p>
            Scale to 100 kLOCs while dev speed and <b>HMR stays fast.</b>
          </p>
          <p>
            <b>SSR architecture that scales</b> from small hobby projects to large-scale enterprise projects with highly{' '}
            <b>custom precise SSR needs</b>.
          </p>
        </Feature>
        <Feature>
          <h2>
            <span style={{ fontFamily: 'reset' }}>{String.fromCodePoint(0x2764)}</span> Craft
          </h2>
          <p>
            Crafted with <b>attention to details</b> and <b>care for simplicity</b>.
          </p>
          <p>
            <b>Upsteam contributions</b> to Vite and others.
          </p>
          <p>
            GitHub and Discord <b>conversations are welcome</b>.
          </p>
        </Feature>
      </div>
      <LearnMore name="scalable">
        <Scalable />
        {/*
<div id="container"></div>
 <script src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
 <script dangerouslySetInnerHTML={{__html: `
console.log(11)
twttr.widgets.createTweet(
  '1398240747661533184',
  document.getElementById('container'),
  {
    theme: 'dark'
  }
);
console.log(12)
`}}/>
*/}
      </LearnMore>
    </div>
  )
}

function Feature({ children, name, isExpandable }: { name?: string; isExpandable?: true; children: any }) {
  assert(!!name === !!isExpandable)
  return (
    <div
      className="feature"
      id={name && `feature-${name}`}
      onClick={isExpandable && onClick}
      style={{ cursor: isExpandable && 'pointer' }}
    >
      {children}
      <div style={{ textAlign: 'center' }}>
        {isExpandable && <img src={iconChevron} height="12" style={{ marginRight: 20 }} />}
      </div>
    </div>
  )

  function onClick() {
    const selected = 'selected'
    const learnId = 'learn-more-' + name
    const featureId = 'feature-' + name
    const learnEl = document.getElementById(learnId)
    assert(learnEl)
    const learnEls: HTMLElement[] = [
      ...(document.querySelectorAll('.learn-more') as any),
      ...(document.querySelectorAll('.feature') as any)
    ]
    learnEls.forEach((el) => {
      if (el.id === learnId || el.id === featureId) {
        el.classList.toggle(selected)
      } else {
        // el.classList.remove(selected)
      }
    })
    updateSidePanelScroll()
  }
}
function LearnMore({ children, name }: { name: string; children: any }) {
  return (
    <div style={{}} className="learn-more" id={`learn-more-${name}`}>
      {children}
    </div>
  )
}

function HorizontalLine(props: { style?: React.CSSProperties }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <hr
        style={{
          display: 'inline-block',
          margin: 0,
          border: 0,
          borderTop: '1px solid #eee',
          width: 500,
          ...props.style
        }}
      />
    </div>
  )
}
