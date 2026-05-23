# Ray Reich — Developer Portfolio

Personal portfolio site for Ray Reich, musician and self-taught developer.

Built with hand-authored HTML and CSS. No framework, no build step, no dependencies beyond two Google Fonts. The site itself is an instance of the Musical Interval Typography System documented within it.

## Structure

```
index.html          Portfolio landing page
docs/
  astrocal.html     AstroCal — astronomical calendar
  cms.html          Custom CMS & Admin Panel
  edutone.html      EduToneBox — real-time educational synthesizer
  typography.html   Musical Interval Typography System
```

## Projects

- **AstroCal** — Astronomical calendar with lunar phases, solar and lunar eclipses, hemisphere awareness, timezone support, and Zmanim. Vanilla JS, Astronomy Engine, Hebcal. [Live](https://bachtogauss.com/calendar/)
- **Custom CMS & Admin Panel** — Bespoke full-stack content management system. Python standard-library HTTP server, dual-mode SQLite/JSON storage, modular handlers, pytest and Jest test suites.
- **EduToneBox** — Real-time educational synthesizer. C++17 DSP engine, Qt6/QML interface, CoreAudio/ALSA backends, OSC/UDP IPC, Raspberry Pi deployment. In development.
- **Musical Interval Typography System** — A fluid CSS type scale derived from a musical interval ratio. Zero dependencies, two media queries. [Live](https://bachtogauss.com/about/#about-site) · CC BY-NC 4.0

## Typography System

All sizing on this site — font sizes, margins, padding, line heights, vertical rhythm — is governed by a single CSS custom property:

```css
--fontRatio: calc(32 / 27);
```

The minor third interval, applied multiplicatively across a scale of twelve notes. Documented in full at [bachtogauss.com/about/#about-site](https://bachtogauss.com/about/#about-site).

## Contact

[bachtogauss.com](https://bachtogauss.com) &nbsp;·&nbsp; ray@bachtogauss.com
