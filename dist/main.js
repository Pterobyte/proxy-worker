!(function(n) {
  const e = {}
  function t(o) {
    if (e[o]) return e[o].exports
    const r = (e[o] = { i: o, l: !1, exports: {} })
    return n[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports
  }
  ;(t.m = n),
    (t.c = e),
    (t.d = function(n, e, o) {
      t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: o })
    }),
    (t.r = function(n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 })
    }),
    (t.t = function(n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n
      const o = Object.create(null)
      if (
        (t.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (const r in n)
          t.d(
            o,
            r,
            (e => {
              return n[e]
            }).bind(null, r)
          )
      return o
    }),
    (t.n = function(n) {
      const e =
        n && n.__esModule
          ? function() {
              return n.default
            }
          : function() {
              return n
            }
      return t.d(e, 'a', e), e
    }),
    (t.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e)
    }),
    (t.p = ''),
    t((t.s = 0))
})([
  function(n, e) {
    const t =
        '\n<!doctype html>\n<html>\n  <head>\n    <title>JT | Proxy</title>\n    <style>\n    body {\n      font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;\n      padding: 20px 20px 60px;\n      max-width: 680px;\n      margin: 0 auto;\n      font-size: 16px;\n      line-height: 1.65;\n      word-break: break-word;\n      font-kerning: auto;\n      font-variant: normal;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      text-rendering: optimizeLegibility;\n      hyphens: auto;\n      text-align: center;\n    }\n    \n    h2, h3, h4 {\n      margin-top: 1.5em;\n    }\n    \n    h1 {\n      margin-top: 70px; \n      text-align: center; \n      font-size: 45px; \n    } \n    \n    a {\n      cursor: pointer;\n      color: #0076FF;\n      text-decoration: none;\n      transition: all 0.2s ease;\n      border-bottom: 1px solid white;\n    }\n    \n    a:hover {\n      border-bottom: 1px solid #0076FF;\n    }\n    \n    code, pre {\n      font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;\n      font-size: .92em;\n      color: #D400FF;\n    }\n    \n    code:before, code:after {\n      content: \'`\';\n    }\n    \n    p {\n      text-align: center; \n      font-size: 16px; \n    } \n    </style>\n  </head>\n  <body>\n    <h1>Welcome my Proxy Worker</h1>\n    <h2>Deployed with <a href="https://workers.cloudflare.com/docs" target="_blank" rel="noreferrer noopener">Cloudflare Workers</a>!</h2>\n    <br />\n    <h3>Try proxying requests by adding URI-encoded URLs above 👆🏼</h3>\n    <br />\n    <h3>Or you can try out some links from down below 👇🏼</h3>\n    <ul>\n      <li><a target="_blank" href="https://proxy.terminallychill.workers.dev/https%3A%2F%2Fcnn.com">CNN</a></li>\n      <li><a target="_blank" href="https://proxy.terminallychill.workers.dev/https%3A%2F%2Fnytimes.com">NYTimes</a></li>\n      <li><a target="_blank" href="https://proxy.terminallychill.workers.dev/https%3A%2F%2Fbaidu.com">Baidu</a></li>\n    </ul>\n    <br />\n    <h3>Advanced: try running a POST request through the proxy as well!</h3>\n    \x3c!-- TODO: add video --\x3e\n\n    <script>\n      // TODO: encode URI from input and add to link\n      function main() {\n      }\n    </script>\n  </body>\n</html>\n',
      o = [
        'https://workers.houk.space/proxy/',
        'https://proxy.terminallychill.workers.dev/'
      ],
      r = (n, e) => {
        const [t] = n.filter(n => e.includes(n)),
          o = e.replace(t, '')
        return decodeURIComponent(o)
      },
      i = n =>
        new Response(n, {
          headers: { 'content-type': 'text/html;charset=UTF-8' }
        })
    addEventListener('fetch', n => {
      n.respondWith(
        (async function(n) {
          const e = {}
          try {
            const a = await n.json()
            ;(e.method = 'POST'), (e.body = JSON.stringify(a))
          } catch (n) {
            e.method = 'GET'
          } finally {
            const a = r(o, n.url)
            return '' === a || '/' === a ? i(t) : await fetch(a, e)
          }
        })(n.request)
      )
    })
  }
])
