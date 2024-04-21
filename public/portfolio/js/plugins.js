(window.Modernizr = (function (a, b, c) {
  function x(a) {
    j.cssText = a;
  }
  function y(a, b) {
    return x(prefixes.join(a + ";") + (b || ""));
  }
  function z(a, b) {
    return typeof a === b;
  }
  function A(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function B(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function C(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function D(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + n.join(d + " ") + d).split(" ");
    return z(b, "string") || z(b, "undefined")
      ? B(e, b)
      : ((e = (a + " " + o.join(d + " ") + d).split(" ")), C(e, b, c));
  }
  var d = "2.6.2",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k,
    l = {}.toString,
    m = "Webkit Moz O ms",
    n = m.split(" "),
    o = m.toLowerCase().split(" "),
    p = {},
    q = {},
    r = {},
    s = [],
    t = s.slice,
    u,
    v = {}.hasOwnProperty,
    w;
  !z(v, "undefined") && !z(v.call, "undefined")
    ? (w = function (a, b) {
        return v.call(a, b);
      })
    : (w = function (a, b) {
        return b in a && z(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = t.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(t.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(t.call(arguments)));
          };
        return e;
      }),
    (p.csstransitions = function () {
      return D("transition");
    });
  for (var E in p)
    w(p, E) &&
      ((u = E.toLowerCase()), (e[u] = p[E]()), s.push((e[u] ? "" : "no-") + u));
  return (
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) w(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    x(""),
    (i = k = null),
    (function (a, b) {
      function k(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function l() {
        var a = r.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function m(a) {
        var b = i[a[g]];
        return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
      }
      function n(a, c, f) {
        c || (c = b);
        if (j) return c.createElement(a);
        f || (f = m(c));
        var g;
        return (
          f.cache[a]
            ? (g = f.cache[a].cloneNode())
            : e.test(a)
            ? (g = (f.cache[a] = f.createElem(a)).cloneNode())
            : (g = f.createElem(a)),
          g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        );
      }
      function o(a, c) {
        a || (a = b);
        if (j) return a.createDocumentFragment();
        c = c || m(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = l(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function p(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              l()
                .join()
                .replace(/\w+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(r, b.frag));
      }
      function q(a) {
        a || (a = b);
        var c = m(a);
        return (
          r.shivCSS &&
            !f &&
            !c.hasCSS &&
            (c.hasCSS = !!k(
              a,
              "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
            )),
          j || p(a, c),
          a
        );
      }
      var c = a.html5 || {},
        d =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f,
        g = "_html5shiv",
        h = 0,
        i = {},
        j;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (f = "hidden" in a),
            (j =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (f = !0), (j = !0);
        }
      })();
      var r = {
        elements:
          c.elements ||
          "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS !== !1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods !== !1,
        type: "default",
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o,
      };
      (a.html5 = r), q(b);
    })(this, b),
    (e._version = d),
    (e._domPrefixes = o),
    (e._cssomPrefixes = n),
    (e.testProp = function (a) {
      return B([a]);
    }),
    (e.testAllProps = D),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + s.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });
/*! jQuery.easing*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  },
  easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f + a;
    }
    return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin((f / g) * (Math.PI / 2)) + a;
  },
  easeInOutSine: function (e, f, a, h, g) {
    return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
  },
  easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
  },
  easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }
    if (f == g) {
      return a + h;
    }
    if ((f /= g / 2) < 1) {
      return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
    }
    return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
    }
    return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j)
      ) + e
    );
  },
  easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
      l +
      e
    );
  },
  easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k / 2) == 2) {
      return e + l;
    }
    if (!j) {
      j = k * (0.3 * 1.5);
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
        e
      );
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
        0.5 +
      l +
      e
    );
  },
  easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    if ((f /= h / 2) < 1) {
      return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }
    return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }
    return (
      jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    );
  },
});

/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!(function (a, b, c, d) {
  "use strict";
  function e(b, d) {
    if (
      ((this.el = b),
      (this.$el = a(b)),
      (this.s = a.extend({}, f, d)),
      this.s.dynamic &&
        "undefined" !== this.s.dynamicEl &&
        this.s.dynamicEl.constructor === Array &&
        !this.s.dynamicEl.length)
    )
      throw "When using dynamic mode, you must also define dynamicEl as an Array.";
    return (
      (this.modules = {}),
      (this.lGalleryOn = !1),
      (this.lgBusy = !1),
      (this.hideBartimeout = !1),
      (this.isTouch = "ontouchstart" in c.documentElement),
      this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
      this.s.dynamic
        ? (this.$items = this.s.dynamicEl)
        : "this" === this.s.selector
        ? (this.$items = this.$el)
        : "" !== this.s.selector
        ? this.s.selectWithin
          ? (this.$items = a(this.s.selectWithin).find(this.s.selector))
          : (this.$items = this.$el.find(a(this.s.selector)))
        : (this.$items = this.$el.children()),
      (this.$slide = ""),
      (this.$outer = ""),
      this.init(),
      this
    );
  }
  var f = {
    mode: "lg-slide",
    cssEasing: "ease",
    easing: "linear",
    speed: 600,
    height: "100%",
    width: "100%",
    addClass: "",
    startClass: "lg-start-zoom",
    backdropDuration: 150,
    hideBarsDelay: 6e3,
    useLeft: !1,
    closable: !0,
    loop: !0,
    escKey: !0,
    keyPress: !0,
    controls: !0,
    slideEndAnimatoin: !0,
    hideControlOnEnd: !1,
    mousewheel: !0,
    getCaptionFromTitleOrAlt: !0,
    appendSubHtmlTo: ".lg-sub-html",
    subHtmlSelectorRelative: !1,
    preload: 1,
    showAfterLoad: !0,
    selector: "",
    selectWithin: "",
    nextHtml: "",
    prevHtml: "",
    index: !1,
    iframeMaxWidth: "100%",
    download: !0,
    counter: !0,
    appendCounterTo: ".lg-toolbar",
    swipeThreshold: 50,
    enableSwipe: !0,
    enableDrag: !0,
    dynamic: !1,
    dynamicEl: [],
    galleryId: 1,
  };
  (e.prototype.init = function () {
    var c = this;
    c.s.preload > c.$items.length && (c.s.preload = c.$items.length);
    var d = b.location.hash;
    d.indexOf("lg=" + this.s.galleryId) > 0 &&
      ((c.index = parseInt(d.split("&slide=")[1], 10)),
      a("body").addClass("lg-from-hash"),
      a("body").hasClass("lg-on") ||
        (setTimeout(function () {
          c.build(c.index);
        }),
        a("body").addClass("lg-on"))),
      c.s.dynamic
        ? (c.$el.trigger("onBeforeOpen.lg"),
          (c.index = c.s.index || 0),
          a("body").hasClass("lg-on") ||
            setTimeout(function () {
              c.build(c.index), a("body").addClass("lg-on");
            }))
        : c.$items.on("click.lgcustom", function (b) {
            try {
              b.preventDefault(), b.preventDefault();
            } catch (a) {
              b.returnValue = !1;
            }
            c.$el.trigger("onBeforeOpen.lg"),
              (c.index = c.s.index || c.$items.index(this)),
              a("body").hasClass("lg-on") ||
                (c.build(c.index), a("body").addClass("lg-on"));
          });
  }),
    (e.prototype.build = function (b) {
      var c = this;
      c.structure(),
        a.each(a.fn.lightGallery.modules, function (b) {
          c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
        }),
        c.slide(b, !1, !1),
        c.s.keyPress && c.keyPress(),
        c.$items.length > 1 &&
          (c.arrow(),
          setTimeout(function () {
            c.enableDrag(), c.enableSwipe();
          }, 50),
          c.s.mousewheel && c.mousewheel()),
        c.counter(),
        c.closeGallery(),
        c.$el.trigger("onAfterOpen.lg"),
        c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
          c.$outer.removeClass("lg-hide-items"),
            clearTimeout(c.hideBartimeout),
            (c.hideBartimeout = setTimeout(function () {
              c.$outer.addClass("lg-hide-items");
            }, c.s.hideBarsDelay));
        });
    }),
    (e.prototype.structure = function () {
      var c,
        d = "",
        e = "",
        f = 0,
        g = "",
        h = this;
      for (
        a("body").append('<div class="lg-backdrop"></div>'),
          a(".lg-backdrop").css(
            "transition-duration",
            this.s.backdropDuration + "ms"
          ),
          f = 0;
        f < this.$items.length;
        f++
      )
        d += '<div class="lg-item"></div>';
      if (
        (this.s.controls &&
          this.$items.length > 1 &&
          (e =
            '<div class="lg-actions"><div class="lg-prev lg-icon">' +
            this.s.prevHtml +
            '</div><div class="lg-next lg-icon">' +
            this.s.nextHtml +
            "</div></div>"),
        ".lg-sub-html" === this.s.appendSubHtmlTo &&
          (g = '<div class="lg-sub-html"></div>'),
        (c =
          '<div class="lg-outer ' +
          this.s.addClass +
          " " +
          this.s.startClass +
          '"><div class="lg" style="width:' +
          this.s.width +
          "; height:" +
          this.s.height +
          '"><div class="lg-inner">' +
          d +
          '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' +
          e +
          g +
          "</div></div>"),
        a("body").append(c),
        (this.$outer = a(".lg-outer")),
        (this.$slide = this.$outer.find(".lg-item")),
        this.s.useLeft
          ? (this.$outer.addClass("lg-use-left"), (this.s.mode = "lg-slide"))
          : this.$outer.addClass("lg-use-css3"),
        h.setTop(),
        a(b).on("resize.lg orientationchange.lg", function () {
          setTimeout(function () {
            h.setTop();
          }, 100);
        }),
        this.$slide.eq(this.index).addClass("lg-current"),
        this.doCss()
          ? this.$outer.addClass("lg-css3")
          : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
        this.$outer.addClass(this.s.mode),
        this.s.enableDrag &&
          this.$items.length > 1 &&
          this.$outer.addClass("lg-grab"),
        this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
        this.doCss())
      ) {
        var i = this.$outer.find(".lg-inner");
        i.css("transition-timing-function", this.s.cssEasing),
          i.css("transition-duration", this.s.speed + "ms");
      }
      a(".lg-backdrop").addClass("in"),
        setTimeout(function () {
          h.$outer.addClass("lg-visible");
        }, this.s.backdropDuration),
        this.s.download &&
          this.$outer
            .find(".lg-toolbar")
            .append(
              '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
            ),
        (this.prevScrollTop = a(b).scrollTop());
    }),
    (e.prototype.setTop = function () {
      if ("100%" !== this.s.height) {
        var c = a(b).height(),
          d = (c - parseInt(this.s.height, 10)) / 2,
          e = this.$outer.find(".lg");
        c >= parseInt(this.s.height, 10)
          ? e.css("top", d + "px")
          : e.css("top", "0px");
      }
    }),
    (e.prototype.doCss = function () {
      var a = function () {
        var a = [
            "transition",
            "MozTransition",
            "WebkitTransition",
            "OTransition",
            "msTransition",
            "KhtmlTransition",
          ],
          b = c.documentElement,
          d = 0;
        for (d = 0; d < a.length; d++) if (a[d] in b.style) return !0;
      };
      return !!a();
    }),
    (e.prototype.isVideo = function (a, b) {
      var c;
      if (
        ((c = this.s.dynamic
          ? this.s.dynamicEl[b].html
          : this.$items.eq(b).attr("data-html")),
        !a && c)
      )
        return { html5: !0 };
      var d = a.match(
          /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
        ),
        e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
        f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
        g = a.match(
          /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
        );
      return d
        ? { youtube: d }
        : e
        ? { vimeo: e }
        : f
        ? { dailymotion: f }
        : g
        ? { vk: g }
        : void 0;
    }),
    (e.prototype.counter = function () {
      this.s.counter &&
        a(this.s.appendCounterTo).append(
          '<div id="lg-counter"><span id="lg-counter-current">' +
            (parseInt(this.index, 10) + 1) +
            '</span> / <span id="lg-counter-all">' +
            this.$items.length +
            "</span></div>"
        );
    }),
    (e.prototype.addHtml = function (b) {
      var c,
        d,
        e = null;
      if (
        (this.s.dynamic
          ? this.s.dynamicEl[b].subHtmlUrl
            ? (c = this.s.dynamicEl[b].subHtmlUrl)
            : (e = this.s.dynamicEl[b].subHtml)
          : ((d = this.$items.eq(b)),
            d.attr("data-sub-html-url")
              ? (c = d.attr("data-sub-html-url"))
              : ((e = d.attr("data-sub-html")),
                this.s.getCaptionFromTitleOrAlt &&
                  !e &&
                  (e = d.attr("title") || d.find("img").first().attr("alt")))),
        !c)
      )
        if ("undefined" != typeof e && null !== e) {
          var f = e.substring(0, 1);
          ("." !== f && "#" !== f) ||
            (e =
              this.s.subHtmlSelectorRelative && !this.s.dynamic
                ? d.find(e).html()
                : a(e).html());
        } else e = "";
      ".lg-sub-html" === this.s.appendSubHtmlTo
        ? c
          ? this.$outer.find(this.s.appendSubHtmlTo).load(c)
          : this.$outer.find(this.s.appendSubHtmlTo).html(e)
        : c
        ? this.$slide.eq(b).load(c)
        : this.$slide.eq(b).append(e),
        "undefined" != typeof e &&
          null !== e &&
          ("" === e
            ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html")
            : this.$outer
                .find(this.s.appendSubHtmlTo)
                .removeClass("lg-empty-html")),
        this.$el.trigger("onAfterAppendSubHtml.lg", [b]);
    }),
    (e.prototype.preload = function (a) {
      var b = 1,
        c = 1;
      for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
        this.loadContent(a + b, !1, 0);
      for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
        this.loadContent(a - c, !1, 0);
    }),
    (e.prototype.loadContent = function (c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = !1,
        n = function (c) {
          for (var d = [], e = [], f = 0; f < c.length; f++) {
            var h = c[f].split(" ");
            "" === h[0] && h.splice(0, 1), e.push(h[0]), d.push(h[1]);
          }
          for (var i = a(b).width(), j = 0; j < d.length; j++)
            if (parseInt(d[j], 10) > i) {
              g = e[j];
              break;
            }
        };
      if (l.s.dynamic) {
        if (
          (l.s.dynamicEl[c].poster && ((m = !0), (h = l.s.dynamicEl[c].poster)),
          (k = l.s.dynamicEl[c].html),
          (g = l.s.dynamicEl[c].src),
          l.s.dynamicEl[c].responsive)
        ) {
          var o = l.s.dynamicEl[c].responsive.split(",");
          n(o);
        }
        (i = l.s.dynamicEl[c].srcset), (j = l.s.dynamicEl[c].sizes);
      } else {
        if (
          (l.$items.eq(c).attr("data-poster") &&
            ((m = !0), (h = l.$items.eq(c).attr("data-poster"))),
          (k = l.$items.eq(c).attr("data-html")),
          (g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src")),
          l.$items.eq(c).attr("data-responsive"))
        ) {
          var p = l.$items.eq(c).attr("data-responsive").split(",");
          n(p);
        }
        (i = l.$items.eq(c).attr("data-srcset")),
          (j = l.$items.eq(c).attr("data-sizes"));
      }
      var q = !1;
      l.s.dynamic
        ? l.s.dynamicEl[c].iframe && (q = !0)
        : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);
      var r = l.isVideo(g, c);
      if (!l.$slide.eq(c).hasClass("lg-loaded")) {
        if (q)
          l.$slide
            .eq(c)
            .prepend(
              '<div class="lg-video-cont" style="max-width:' +
                l.s.iframeMaxWidth +
                '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                g +
                '"  allowfullscreen="true"></iframe></div></div>'
            );
        else if (m) {
          var s = "";
          (s =
            r && r.youtube
              ? "lg-has-youtube"
              : r && r.vimeo
              ? "lg-has-vimeo"
              : "lg-has-html5"),
            l.$slide
              .eq(c)
              .prepend(
                '<div class="lg-video-cont ' +
                  s +
                  ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                  h +
                  '" /></div></div>'
              );
        } else
          r
            ? (l.$slide
                .eq(c)
                .prepend(
                  '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                ),
              l.$el.trigger("hasVideo.lg", [c, g, k]))
            : l.$slide
                .eq(c)
                .prepend(
                  '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                    g +
                    '" /></div>'
                );
        if (
          (l.$el.trigger("onAferAppendSlide.lg", [c]),
          (f = l.$slide.eq(c).find(".lg-object")),
          j && f.attr("sizes", j),
          i)
        ) {
          f.attr("srcset", i);
          try {
            picturefill({ elements: [f[0]] });
          } catch (a) {
            console.error("Make sure you have included Picturefill version 2");
          }
        }
        ".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c),
          l.$slide.eq(c).addClass("lg-loaded");
      }
      l.$slide
        .eq(c)
        .find(".lg-object")
        .on("load.lg error.lg", function () {
          var b = 0;
          e && !a("body").hasClass("lg-from-hash") && (b = e),
            setTimeout(function () {
              l.$slide.eq(c).addClass("lg-complete"),
                l.$el.trigger("onSlideItemLoad.lg", [c, e || 0]);
            }, b);
        }),
        r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"),
        d === !0 &&
          (l.$slide.eq(c).hasClass("lg-complete")
            ? l.preload(c)
            : l.$slide
                .eq(c)
                .find(".lg-object")
                .on("load.lg error.lg", function () {
                  l.preload(c);
                }));
    }),
    (e.prototype.slide = function (b, c, d) {
      var e = this.$outer.find(".lg-current").index(),
        f = this;
      if (!f.lGalleryOn || e !== b) {
        var g = this.$slide.length,
          h = f.lGalleryOn ? this.s.speed : 0,
          i = !1,
          j = !1;
        if (!f.lgBusy) {
          if (this.s.download) {
            var k;
            (k = f.s.dynamic
              ? f.s.dynamicEl[b].downloadUrl !== !1 &&
                (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src)
              : "false" !== f.$items.eq(b).attr("data-download-url") &&
                (f.$items.eq(b).attr("data-download-url") ||
                  f.$items.eq(b).attr("href") ||
                  f.$items.eq(b).attr("data-src"))),
              k
                ? (a("#lg-download").attr("href", k),
                  f.$outer.removeClass("lg-hide-download"))
                : f.$outer.addClass("lg-hide-download");
          }
          if (
            (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]),
            (f.lgBusy = !0),
            clearTimeout(f.hideBartimeout),
            ".lg-sub-html" === this.s.appendSubHtmlTo &&
              setTimeout(function () {
                f.addHtml(b);
              }, h),
            this.arrowDisable(b),
            c)
          ) {
            var l = b - 1,
              m = b + 1;
            0 === b && e === g - 1
              ? ((m = 0), (l = g - 1))
              : b === g - 1 && 0 === e && ((m = 0), (l = g - 1)),
              this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),
              f.$slide.eq(l).addClass("lg-prev-slide"),
              f.$slide.eq(m).addClass("lg-next-slide"),
              f.$slide.eq(b).addClass("lg-current");
          } else
            f.$outer.addClass("lg-no-trans"),
              this.$slide.removeClass("lg-prev-slide lg-next-slide"),
              b < e
                ? ((j = !0),
                  0 !== b || e !== g - 1 || d || ((j = !1), (i = !0)))
                : b > e &&
                  ((i = !0),
                  b !== g - 1 || 0 !== e || d || ((j = !0), (i = !1))),
              j
                ? (this.$slide.eq(b).addClass("lg-prev-slide"),
                  this.$slide.eq(e).addClass("lg-next-slide"))
                : i &&
                  (this.$slide.eq(b).addClass("lg-next-slide"),
                  this.$slide.eq(e).addClass("lg-prev-slide")),
              setTimeout(function () {
                f.$slide.removeClass("lg-current"),
                  f.$slide.eq(b).addClass("lg-current"),
                  f.$outer.removeClass("lg-no-trans");
              }, 50);
          f.lGalleryOn
            ? (setTimeout(function () {
                f.loadContent(b, !0, 0);
              }, this.s.speed + 50),
              setTimeout(function () {
                (f.lgBusy = !1), f.$el.trigger("onAfterSlide.lg", [e, b, c, d]);
              }, this.s.speed))
            : (f.loadContent(b, !0, f.s.backdropDuration),
              (f.lgBusy = !1),
              f.$el.trigger("onAfterSlide.lg", [e, b, c, d])),
            (f.lGalleryOn = !0),
            this.s.counter && a("#lg-counter-current").text(b + 1);
        }
      }
    }),
    (e.prototype.goToNextSlide = function (a) {
      var b = this;
      b.lgBusy ||
        (b.index + 1 < b.$slide.length
          ? (b.index++,
            b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
            b.slide(b.index, a, !1))
          : b.s.loop
          ? ((b.index = 0),
            b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
            b.slide(b.index, a, !1))
          : b.s.slideEndAnimatoin &&
            (b.$outer.addClass("lg-right-end"),
            setTimeout(function () {
              b.$outer.removeClass("lg-right-end");
            }, 400)));
    }),
    (e.prototype.goToPrevSlide = function (a) {
      var b = this;
      b.lgBusy ||
        (b.index > 0
          ? (b.index--,
            b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
            b.slide(b.index, a, !1))
          : b.s.loop
          ? ((b.index = b.$items.length - 1),
            b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
            b.slide(b.index, a, !1))
          : b.s.slideEndAnimatoin &&
            (b.$outer.addClass("lg-left-end"),
            setTimeout(function () {
              b.$outer.removeClass("lg-left-end");
            }, 400)));
    }),
    (e.prototype.keyPress = function () {
      var c = this;
      this.$items.length > 1 &&
        a(b).on("keyup.lg", function (a) {
          c.$items.length > 1 &&
            (37 === a.keyCode && (a.preventDefault(), c.goToPrevSlide()),
            39 === a.keyCode && (a.preventDefault(), c.goToNextSlide()));
        }),
        a(b).on("keydown.lg", function (a) {
          c.s.escKey === !0 &&
            27 === a.keyCode &&
            (a.preventDefault(),
            c.$outer.hasClass("lg-thumb-open")
              ? c.$outer.removeClass("lg-thumb-open")
              : c.destroy());
        });
    }),
    (e.prototype.arrow = function () {
      var a = this;
      this.$outer.find(".lg-prev").on("click.lg", function () {
        a.goToPrevSlide();
      }),
        this.$outer.find(".lg-next").on("click.lg", function () {
          a.goToNextSlide();
        });
    }),
    (e.prototype.arrowDisable = function (a) {
      !this.s.loop &&
        this.s.hideControlOnEnd &&
        (a + 1 < this.$slide.length
          ? this.$outer
              .find(".lg-next")
              .removeAttr("disabled")
              .removeClass("disabled")
          : this.$outer
              .find(".lg-next")
              .attr("disabled", "disabled")
              .addClass("disabled"),
        a > 0
          ? this.$outer
              .find(".lg-prev")
              .removeAttr("disabled")
              .removeClass("disabled")
          : this.$outer
              .find(".lg-prev")
              .attr("disabled", "disabled")
              .addClass("disabled"));
    }),
    (e.prototype.setTranslate = function (a, b, c) {
      this.s.useLeft
        ? a.css("left", b)
        : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" });
    }),
    (e.prototype.touchMove = function (b, c) {
      var d = c - b;
      Math.abs(d) > 15 &&
        (this.$outer.addClass("lg-dragging"),
        this.setTranslate(this.$slide.eq(this.index), d, 0),
        this.setTranslate(
          a(".lg-prev-slide"),
          -this.$slide.eq(this.index).width() + d,
          0
        ),
        this.setTranslate(
          a(".lg-next-slide"),
          this.$slide.eq(this.index).width() + d,
          0
        ));
    }),
    (e.prototype.touchEnd = function (a) {
      var b = this;
      "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
        this.$slide
          .not(".lg-current, .lg-prev-slide, .lg-next-slide")
          .css("opacity", "0"),
        setTimeout(function () {
          b.$outer.removeClass("lg-dragging"),
            a < 0 && Math.abs(a) > b.s.swipeThreshold
              ? b.goToNextSlide(!0)
              : a > 0 && Math.abs(a) > b.s.swipeThreshold
              ? b.goToPrevSlide(!0)
              : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
            b.$slide.removeAttr("style");
        }),
        setTimeout(function () {
          b.$outer.hasClass("lg-dragging") ||
            "lg-slide" === b.s.mode ||
            b.$outer.removeClass("lg-slide");
        }, b.s.speed + 100);
    }),
    (e.prototype.enableSwipe = function () {
      var a = this,
        b = 0,
        c = 0,
        d = !1;
      a.s.enableSwipe &&
        a.isTouch &&
        a.doCss() &&
        (a.$slide.on("touchstart.lg", function (c) {
          a.$outer.hasClass("lg-zoomed") ||
            a.lgBusy ||
            (c.preventDefault(),
            a.manageSwipeClass(),
            (b = c.originalEvent.targetTouches[0].pageX));
        }),
        a.$slide.on("touchmove.lg", function (e) {
          a.$outer.hasClass("lg-zoomed") ||
            (e.preventDefault(),
            (c = e.originalEvent.targetTouches[0].pageX),
            a.touchMove(b, c),
            (d = !0));
        }),
        a.$slide.on("touchend.lg", function () {
          a.$outer.hasClass("lg-zoomed") ||
            (d
              ? ((d = !1), a.touchEnd(c - b))
              : a.$el.trigger("onSlideClick.lg"));
        }));
    }),
    (e.prototype.enableDrag = function () {
      var c = this,
        d = 0,
        e = 0,
        f = !1,
        g = !1;
      c.s.enableDrag &&
        !c.isTouch &&
        c.doCss() &&
        (c.$slide.on("mousedown.lg", function (b) {
          c.$outer.hasClass("lg-zoomed") ||
            ((a(b.target).hasClass("lg-object") ||
              a(b.target).hasClass("lg-video-play")) &&
              (b.preventDefault(),
              c.lgBusy ||
                (c.manageSwipeClass(),
                (d = b.pageX),
                (f = !0),
                (c.$outer.scrollLeft += 1),
                (c.$outer.scrollLeft -= 1),
                c.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
                c.$el.trigger("onDragstart.lg"))));
        }),
        a(b).on("mousemove.lg", function (a) {
          f &&
            ((g = !0),
            (e = a.pageX),
            c.touchMove(d, e),
            c.$el.trigger("onDragmove.lg"));
        }),
        a(b).on("mouseup.lg", function (b) {
          g
            ? ((g = !1), c.touchEnd(e - d), c.$el.trigger("onDragend.lg"))
            : (a(b.target).hasClass("lg-object") ||
                a(b.target).hasClass("lg-video-play")) &&
              c.$el.trigger("onSlideClick.lg"),
            f &&
              ((f = !1),
              c.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
        }));
    }),
    (e.prototype.manageSwipeClass = function () {
      var a = this.index + 1,
        b = this.index - 1,
        c = this.$slide.length;
      this.s.loop &&
        (0 === this.index ? (b = c - 1) : this.index === c - 1 && (a = 0)),
        this.$slide.removeClass("lg-next-slide lg-prev-slide"),
        b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
        this.$slide.eq(a).addClass("lg-next-slide");
    }),
    (e.prototype.mousewheel = function () {
      var a = this;
      a.$outer.on("mousewheel.lg", function (b) {
        b.deltaY &&
          (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
          b.preventDefault());
      });
    }),
    (e.prototype.closeGallery = function () {
      var b = this,
        c = !1;
      this.$outer.find(".lg-close").on("click.lg", function () {
        b.destroy();
      }),
        b.s.closable &&
          (b.$outer.on("mousedown.lg", function (b) {
            c = !!(
              a(b.target).is(".lg-outer") ||
              a(b.target).is(".lg-item ") ||
              a(b.target).is(".lg-img-wrap")
            );
          }),
          b.$outer.on("mouseup.lg", function (d) {
            (a(d.target).is(".lg-outer") ||
              a(d.target).is(".lg-item ") ||
              (a(d.target).is(".lg-img-wrap") && c)) &&
              (b.$outer.hasClass("lg-dragging") || b.destroy());
          }));
    }),
    (e.prototype.destroy = function (c) {
      var d = this;
      c || d.$el.trigger("onBeforeClose.lg"),
        a(b).scrollTop(d.prevScrollTop),
        c &&
          (d.s.dynamic || this.$items.off("click.lg click.lgcustom"),
          a.removeData(d.el, "lightGallery")),
        this.$el.off(".lg.tm"),
        a.each(a.fn.lightGallery.modules, function (a) {
          d.modules[a] && d.modules[a].destroy();
        }),
        (this.lGalleryOn = !1),
        clearTimeout(d.hideBartimeout),
        (this.hideBartimeout = !1),
        a(b).off(".lg"),
        a("body").removeClass("lg-on lg-from-hash"),
        d.$outer && d.$outer.removeClass("lg-visible"),
        a(".lg-backdrop").removeClass("in"),
        setTimeout(function () {
          d.$outer && d.$outer.remove(),
            a(".lg-backdrop").remove(),
            c || d.$el.trigger("onCloseAfter.lg");
        }, d.s.backdropDuration + 50);
    }),
    (a.fn.lightGallery = function (b) {
      return this.each(function () {
        if (a.data(this, "lightGallery"))
          try {
            a(this).data("lightGallery").init();
          } catch (a) {
            console.error("lightGallery has not initiated properly");
          }
        else a.data(this, "lightGallery", new e(this, b));
      });
    }),
    (a.fn.lightGallery.modules = {});
})(jQuery, window, document);
/*! lg-zoom - v1.0.4 - 2016-12-20
 * http://sachinchoolur.github.io/lightGallery
 * Copyright (c) 2016 Sachin N; Licensed GPLv3 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : b(jQuery);
})(this, function (a) {
  !(function () {
    "use strict";
    var b = function () {
        var a = !1,
          b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return b && parseInt(b[2], 10) < 54 && (a = !0), a;
      },
      c = {
        scale: 1,
        zoom: !0,
        actualSize: !0,
        enableZoomAfter: 300,
        useLeftForZoom: b(),
      },
      d = function (b) {
        return (
          (this.core = a(b).data("lightGallery")),
          (this.core.s = a.extend({}, c, this.core.s)),
          this.core.s.zoom &&
            this.core.doCss() &&
            (this.init(),
            (this.zoomabletimeout = !1),
            (this.pageX = a(window).width() / 2),
            (this.pageY = a(window).height() / 2 + a(window).scrollTop())),
          this
        );
      };
    (d.prototype.init = function () {
      var b = this,
        c =
          '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
      b.core.s.actualSize &&
        (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
        b.core.s.useLeftForZoom
          ? b.core.$outer.addClass("lg-use-left-for-zoom")
          : b.core.$outer.addClass("lg-use-transition-for-zoom"),
        this.core.$outer.find(".lg-toolbar").append(c),
        b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
          var f = b.core.s.enableZoomAfter + e;
          a("body").hasClass("lg-from-hash") && e
            ? (f = 0)
            : a("body").removeClass("lg-from-hash"),
            (b.zoomabletimeout = setTimeout(function () {
              b.core.$slide.eq(d).addClass("lg-zoomable");
            }, f + 30));
        });
      var d = 1,
        e = function (c) {
          var e,
            f,
            d = b.core.$outer.find(".lg-current .lg-image"),
            g = (a(window).width() - d.prop("offsetWidth")) / 2,
            h =
              (a(window).height() - d.prop("offsetHeight")) / 2 +
              a(window).scrollTop();
          (e = b.pageX - g), (f = b.pageY - h);
          var i = (c - 1) * e,
            j = (c - 1) * f;
          d
            .css("transform", "scale3d(" + c + ", " + c + ", 1)")
            .attr("data-scale", c),
            b.core.s.useLeftForZoom
              ? d
                  .parent()
                  .css({ left: -i + "px", top: -j + "px" })
                  .attr("data-x", i)
                  .attr("data-y", j)
              : d
                  .parent()
                  .css(
                    "transform",
                    "translate3d(-" + i + "px, -" + j + "px, 0)"
                  )
                  .attr("data-x", i)
                  .attr("data-y", j);
        },
        f = function () {
          d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(),
            d < 1 && (d = 1),
            e(d);
        },
        g = function (c, e, g, h) {
          var j,
            i = e.prop("offsetWidth");
          j = b.core.s.dynamic
            ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || i
            : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || i;
          var k;
          b.core.$outer.hasClass("lg-zoomed")
            ? (d = 1)
            : j > i && ((k = j / i), (d = k || 2)),
            h
              ? ((b.pageX = a(window).width() / 2),
                (b.pageY = a(window).height() / 2 + a(window).scrollTop()))
              : ((b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX),
                (b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY)),
            f(),
            setTimeout(function () {
              b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
            }, 10);
        },
        h = !1;
      b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
        var d = b.core.$slide.eq(c).find(".lg-image");
        d.on("dblclick", function (a) {
          g(a, d, c);
        }),
          d.on("touchstart", function (a) {
            h
              ? (clearTimeout(h), (h = null), g(a, d, c))
              : (h = setTimeout(function () {
                  h = null;
                }, 300)),
              a.preventDefault();
          });
      }),
        a(window).on(
          "resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",
          function () {
            (b.pageX = a(window).width() / 2),
              (b.pageY = a(window).height() / 2 + a(window).scrollTop()),
              e(d);
          }
        ),
        a("#lg-zoom-out").on("click.lg", function () {
          b.core.$outer.find(".lg-current .lg-image").length &&
            ((d -= b.core.s.scale), f());
        }),
        a("#lg-zoom-in").on("click.lg", function () {
          b.core.$outer.find(".lg-current .lg-image").length &&
            ((d += b.core.s.scale), f());
        }),
        a("#lg-actual-size").on("click.lg", function (a) {
          g(
            a,
            b.core.$slide.eq(b.core.index).find(".lg-image"),
            b.core.index,
            !0
          );
        }),
        b.core.$el.on("onBeforeSlide.lg.tm", function () {
          (d = 1), b.resetZoom();
        }),
        b.core.isTouch || b.zoomDrag(),
        b.core.isTouch && b.zoomSwipe();
    }),
      (d.prototype.resetZoom = function () {
        this.core.$outer.removeClass("lg-zoomed"),
          this.core.$slide
            .find(".lg-img-wrap")
            .removeAttr("style data-x data-y"),
          this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
          (this.pageX = a(window).width() / 2),
          (this.pageY = a(window).height() / 2 + a(window).scrollTop());
      }),
      (d.prototype.zoomSwipe = function () {
        var a = this,
          b = {},
          c = {},
          d = !1,
          e = !1,
          f = !1;
        a.core.$slide.on("touchstart.lg", function (c) {
          if (a.core.$outer.hasClass("lg-zoomed")) {
            var d = a.core.$slide.eq(a.core.index).find(".lg-object");
            (f =
              d.prop("offsetHeight") * d.attr("data-scale") >
              a.core.$outer.find(".lg").height()),
              (e =
                d.prop("offsetWidth") * d.attr("data-scale") >
                a.core.$outer.find(".lg").width()),
              (e || f) &&
                (c.preventDefault(),
                (b = {
                  x: c.originalEvent.targetTouches[0].pageX,
                  y: c.originalEvent.targetTouches[0].pageY,
                }));
          }
        }),
          a.core.$slide.on("touchmove.lg", function (g) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
              var i,
                j,
                h = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
              g.preventDefault(),
                (d = !0),
                (c = {
                  x: g.originalEvent.targetTouches[0].pageX,
                  y: g.originalEvent.targetTouches[0].pageY,
                }),
                a.core.$outer.addClass("lg-zoom-dragging"),
                (j = f
                  ? -Math.abs(h.attr("data-y")) + (c.y - b.y)
                  : -Math.abs(h.attr("data-y"))),
                (i = e
                  ? -Math.abs(h.attr("data-x")) + (c.x - b.x)
                  : -Math.abs(h.attr("data-x"))),
                (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) &&
                  (a.core.s.useLeftForZoom
                    ? h.css({ left: i + "px", top: j + "px" })
                    : h.css(
                        "transform",
                        "translate3d(" + i + "px, " + j + "px, 0)"
                      ));
            }
          }),
          a.core.$slide.on("touchend.lg", function () {
            a.core.$outer.hasClass("lg-zoomed") &&
              d &&
              ((d = !1),
              a.core.$outer.removeClass("lg-zoom-dragging"),
              a.touchendZoom(b, c, e, f));
          });
      }),
      (d.prototype.zoomDrag = function () {
        var b = this,
          c = {},
          d = {},
          e = !1,
          f = !1,
          g = !1,
          h = !1;
        b.core.$slide.on("mousedown.lg.zoom", function (d) {
          var f = b.core.$slide.eq(b.core.index).find(".lg-object");
          (h =
            f.prop("offsetHeight") * f.attr("data-scale") >
            b.core.$outer.find(".lg").height()),
            (g =
              f.prop("offsetWidth") * f.attr("data-scale") >
              b.core.$outer.find(".lg").width()),
            b.core.$outer.hasClass("lg-zoomed") &&
              a(d.target).hasClass("lg-object") &&
              (g || h) &&
              (d.preventDefault(),
              (c = { x: d.pageX, y: d.pageY }),
              (e = !0),
              (b.core.$outer.scrollLeft += 1),
              (b.core.$outer.scrollLeft -= 1),
              b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
        }),
          a(window).on("mousemove.lg.zoom", function (a) {
            if (e) {
              var j,
                k,
                i = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
              (f = !0),
                (d = { x: a.pageX, y: a.pageY }),
                b.core.$outer.addClass("lg-zoom-dragging"),
                (k = h
                  ? -Math.abs(i.attr("data-y")) + (d.y - c.y)
                  : -Math.abs(i.attr("data-y"))),
                (j = g
                  ? -Math.abs(i.attr("data-x")) + (d.x - c.x)
                  : -Math.abs(i.attr("data-x"))),
                b.core.s.useLeftForZoom
                  ? i.css({ left: j + "px", top: k + "px" })
                  : i.css(
                      "transform",
                      "translate3d(" + j + "px, " + k + "px, 0)"
                    );
            }
          }),
          a(window).on("mouseup.lg.zoom", function (a) {
            e &&
              ((e = !1),
              b.core.$outer.removeClass("lg-zoom-dragging"),
              !f ||
                (c.x === d.x && c.y === d.y) ||
                ((d = { x: a.pageX, y: a.pageY }), b.touchendZoom(c, d, g, h)),
              (f = !1)),
              b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
          });
      }),
      (d.prototype.touchendZoom = function (a, b, c, d) {
        var e = this,
          f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
          g = e.core.$slide.eq(e.core.index).find(".lg-object"),
          h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
          i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
          j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
          k = Math.abs(
            g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) -
              e.core.$outer.find(".lg").height() +
              j
          ),
          l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
          m = Math.abs(
            g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) -
              e.core.$outer.find(".lg").width() +
              l
          );
        (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) &&
          (d && (i <= -k ? (i = -k) : i >= -j && (i = -j)),
          c && (h <= -m ? (h = -m) : h >= -l && (h = -l)),
          d ? f.attr("data-y", Math.abs(i)) : (i = -Math.abs(f.attr("data-y"))),
          c ? f.attr("data-x", Math.abs(h)) : (h = -Math.abs(f.attr("data-x"))),
          e.core.s.useLeftForZoom
            ? f.css({ left: h + "px", top: i + "px" })
            : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
      }),
      (d.prototype.destroy = function () {
        var b = this;
        b.core.$el.off(".lg.zoom"),
          a(window).off(".lg.zoom"),
          b.core.$slide.off(".lg.zoom"),
          b.core.$el.off(".lg.tm.zoom"),
          b.resetZoom(),
          clearTimeout(b.zoomabletimeout),
          (b.zoomabletimeout = !1);
      }),
      (a.fn.lightGallery.modules.zoom = d);
  })();
});
/*!  lightGallery video */
!(function (e, o, i, l) {
  "use strict";
  var a = {
      videoMaxWidth: "855px",
      youtubePlayerParams: !1,
      vimeoPlayerParams: !1,
      dailymotionPlayerParams: !1,
      videojs: !1,
    },
    s = function (o) {
      return (
        (this.core = e(o).data("lightGallery")),
        (this.$el = e(o)),
        (this.core.s = e.extend({}, a, this.core.s)),
        (this.videoLoaded = !1),
        this.init(),
        this
      );
    };
  (s.prototype.init = function () {
    var o = this;
    o.core.$el.on("hasVideo.lg.tm", function (e, i, l, a) {
      if (
        (o.core.$slide
          .eq(i)
          .find(".lg-video")
          .append(o.loadVideo(l, "lg-object", !0, i, a)),
        a)
      )
        if (o.core.s.videojs)
          try {
            videojs(
              o.core.$slide.eq(i).find(".lg-html5").get(0),
              {},
              function () {
                o.videoLoaded || this.play();
              }
            );
          } catch (s) {
            console.error("Make sure you have included videojs");
          }
        else o.core.$slide.eq(i).find(".lg-html5").get(0).play();
    }),
      o.core.$el.on("onAferAppendSlide.lg.tm", function (e, i) {
        o.core.$slide
          .eq(i)
          .find(".lg-video-cont")
          .css("max-width", o.core.s.videoMaxWidth),
          (o.videoLoaded = !0);
      });
    var i = function (e) {
      if (
        e.find(".lg-object").hasClass("lg-has-poster") &&
        e.find(".lg-object").is(":visible")
      )
        if (e.hasClass("lg-has-video")) {
          var i = e.find(".lg-youtube").get(0),
            l = e.find(".lg-vimeo").get(0),
            a = e.find(".lg-dailymotion").get(0),
            s = e.find(".lg-html5").get(0);
          if (i)
            i.contentWindow.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              "*"
            );
          else if (l)
            try {
              $f(l).api("play");
            } catch (r) {
              console.error("Make sure you have included froogaloop2 js");
            }
          else if (a) a.contentWindow.postMessage("play", "*");
          else if (s)
            if (o.core.s.videojs)
              try {
                videojs(s).play();
              } catch (r) {
                console.error("Make sure you have included videojs");
              }
            else s.play();
          e.addClass("lg-video-palying");
        } else {
          e.addClass("lg-video-palying lg-has-video");
          var t,
            d,
            c = function (i, l) {
              if (
                (e
                  .find(".lg-video")
                  .append(o.loadVideo(i, "", !1, o.core.index, l)),
                l)
              )
                if (o.core.s.videojs)
                  try {
                    videojs(
                      o.core.$slide.eq(o.core.index).find(".lg-html5").get(0),
                      {},
                      function () {
                        this.play();
                      }
                    );
                  } catch (a) {
                    console.error("Make sure you have included videojs");
                  }
                else
                  o.core.$slide
                    .eq(o.core.index)
                    .find(".lg-html5")
                    .get(0)
                    .play();
            };
          o.core.s.dynamic
            ? ((t = o.core.s.dynamicEl[o.core.index].src),
              (d = o.core.s.dynamicEl[o.core.index].html),
              c(t, d))
            : ((t =
                o.core.$items.eq(o.core.index).attr("href") ||
                o.core.$items.eq(o.core.index).attr("data-src")),
              (d = o.core.$items.eq(o.core.index).attr("data-html")),
              c(t, d));
          var n = e.find(".lg-object");
          e.find(".lg-video").append(n),
            e.find(".lg-video-object").hasClass("lg-html5") ||
              (e.removeClass("lg-complete"),
              e.find(".lg-video-object").on("load.lg error.lg", function () {
                e.addClass("lg-complete");
              }));
        }
    };
    o.core.doCss() &&
    o.core.$items.length > 1 &&
    ((o.core.s.enableSwipe && o.core.isTouch) ||
      (o.core.s.enableDrag && !o.core.isTouch))
      ? o.core.$el.on("onSlideClick.lg.tm", function () {
          var e = o.core.$slide.eq(o.core.index);
          i(e);
        })
      : o.core.$slide.on("click.lg", function () {
          i(e(this));
        }),
      o.core.$el.on("onBeforeSlide.lg.tm", function (e, i, l) {
        var a = o.core.$slide.eq(i),
          s = a.find(".lg-youtube").get(0),
          r = a.find(".lg-vimeo").get(0),
          t = a.find(".lg-dailymotion").get(0),
          d = a.find(".lg-html5").get(0);
        if (s)
          s.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        else if (r)
          try {
            $f(r).api("pause");
          } catch (c) {
            console.error("Make sure you have included froogaloop2 js");
          }
        else if (t) t.contentWindow.postMessage("pause", "*");
        else if (d)
          if (o.core.s.videojs)
            try {
              videojs(d).pause();
            } catch (c) {
              console.error("Make sure you have included videojs");
            }
          else d.pause();
        var n;
        n = o.core.s.dynamic
          ? o.core.s.dynamicEl[l].src
          : o.core.$items.eq(l).attr("href") ||
            o.core.$items.eq(l).attr("data-src");
        var m = o.core.isVideo(n, l) || {};
        (m.youtube || m.vimeo || m.dailymotion) &&
          o.core.$outer.addClass("lg-hide-download");
      }),
      o.core.$el.on("onAfterSlide.lg.tm", function (e, i) {
        o.core.$slide.eq(i).removeClass("lg-video-palying");
      });
  }),
    (s.prototype.loadVideo = function (o, i, l, a, s) {
      var r = "",
        t = 1,
        d = "",
        c = this.core.isVideo(o, a) || {};
      if ((l && (t = this.videoLoaded ? 0 : 1), c.youtube))
        (d = "?wmode=opaque&autoplay=" + t + "&enablejsapi=1"),
          this.core.s.youtubePlayerParams &&
            (d = d + "&" + e.param(this.core.s.youtubePlayerParams)),
          (r =
            '<iframe class="lg-video-object lg-youtube ' +
            i +
            '" width="560" height="315" src="//www.youtube.com/embed/' +
            c.youtube[1] +
            d +
            '" frameborder="0" allowfullscreen></iframe>');
      else if (c.vimeo)
        (d = "?autoplay=" + t + "&api=1"),
          this.core.s.vimeoPlayerParams &&
            (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)),
          (r =
            '<iframe class="lg-video-object lg-vimeo ' +
            i +
            '" width="560" height="315"  src="http://player.vimeo.com/video/' +
            c.vimeo[1] +
            d +
            '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
      else if (c.dailymotion)
        (d = "?wmode=opaque&autoplay=" + t + "&api=postMessage"),
          this.core.s.dailymotionPlayerParams &&
            (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)),
          (r =
            '<iframe class="lg-video-object lg-dailymotion ' +
            i +
            '" width="560" height="315" src="//www.dailymotion.com/embed/video/' +
            c.dailymotion[1] +
            d +
            '" frameborder="0" allowfullscreen></iframe>');
      else if (c.html5) {
        var n = s.substring(0, 1);
        ("." === n || "#" === n) && (s = e(s).html()), (r = s);
      }
      return r;
    }),
    (s.prototype.destroy = function () {
      this.videoLoaded = !1;
    }),
    (e.fn.lightGallery.modules.video = s);
})(jQuery, window, document);
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
!(function (a) {
  function b() {}
  function c(a) {
    function c(b) {
      b.prototype.option ||
        (b.prototype.option = function (b) {
          a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b));
        });
    }
    function e(b, c) {
      a.fn[b] = function (e) {
        if ("string" == typeof e) {
          for (
            var g = d.call(arguments, 1), h = 0, i = this.length;
            i > h;
            h++
          ) {
            var j = this[h],
              k = a.data(j, b);
            if (k)
              if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                var l = k[e].apply(k, g);
                if (void 0 !== l) return l;
              } else f("no such method '" + e + "' for " + b + " instance");
            else
              f(
                "cannot call methods on " +
                  b +
                  " prior to initialization; attempted to call '" +
                  e +
                  "'"
              );
          }
          return this;
        }
        return this.each(function () {
          var d = a.data(this, b);
          d
            ? (d.option(e), d._init())
            : ((d = new c(this, e)), a.data(this, b, d));
        });
      };
    }
    if (a) {
      var f =
        "undefined" == typeof console
          ? b
          : function (a) {
              console.error(a);
            };
      return (
        (a.bridget = function (a, b) {
          c(b), e(a, b);
        }),
        a.bridget
      );
    }
  }
  var d = Array.prototype.slice;
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery.bridget", ["jquery"], c)
    : c("object" == typeof exports ? require("jquery") : a.jQuery);
})(window),
  (function (a) {
    function b(b) {
      var c = a.event;
      return (c.target = c.target || c.srcElement || b), c;
    }
    var c = document.documentElement,
      d = function () {};
    c.addEventListener
      ? (d = function (a, b, c) {
          a.addEventListener(b, c, !1);
        })
      : c.attachEvent &&
        (d = function (a, c, d) {
          (a[c + d] = d.handleEvent
            ? function () {
                var c = b(a);
                d.handleEvent.call(d, c);
              }
            : function () {
                var c = b(a);
                d.call(a, c);
              }),
            a.attachEvent("on" + c, a[c + d]);
        });
    var e = function () {};
    c.removeEventListener
      ? (e = function (a, b, c) {
          a.removeEventListener(b, c, !1);
        })
      : c.detachEvent &&
        (e = function (a, b, c) {
          a.detachEvent("on" + b, a[b + c]);
          try {
            delete a[b + c];
          } catch (d) {
            a[b + c] = void 0;
          }
        });
    var f = { bind: d, unbind: e };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", f)
      : "object" == typeof exports
      ? (module.exports = f)
      : (a.eventie = f);
  })(window),
  function () {
    "use strict";
    function a() {}
    function b(a, b) {
      for (var c = a.length; c--; ) if (a[c].listener === b) return c;
      return -1;
    }
    function c(a) {
      return function () {
        return this[a].apply(this, arguments);
      };
    }
    var d = a.prototype,
      e = this,
      f = e.EventEmitter;
    (d.getListeners = function (a) {
      var b,
        c,
        d = this._getEvents();
      if (a instanceof RegExp) {
        b = {};
        for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
      } else b = d[a] || (d[a] = []);
      return b;
    }),
      (d.flattenListeners = function (a) {
        var b,
          c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c;
      }),
      (d.getListenersAsObject = function (a) {
        var b,
          c = this.getListeners(a);
        return c instanceof Array && ((b = {}), (b[a] = c)), b || c;
      }),
      (d.addListener = function (a, c) {
        var d,
          e = this.getListenersAsObject(a),
          f = "object" == typeof c;
        for (d in e)
          e.hasOwnProperty(d) &&
            -1 === b(e[d], c) &&
            e[d].push(f ? c : { listener: c, once: !1 });
        return this;
      }),
      (d.on = c("addListener")),
      (d.addOnceListener = function (a, b) {
        return this.addListener(a, { listener: b, once: !0 });
      }),
      (d.once = c("addOnceListener")),
      (d.defineEvent = function (a) {
        return this.getListeners(a), this;
      }),
      (d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this;
      }),
      (d.removeListener = function (a, c) {
        var d,
          e,
          f = this.getListenersAsObject(a);
        for (e in f)
          f.hasOwnProperty(e) &&
            ((d = b(f[e], c)), -1 !== d && f[e].splice(d, 1));
        return this;
      }),
      (d.off = c("removeListener")),
      (d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b);
      }),
      (d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b);
      }),
      (d.manipulateListeners = function (a, b, c) {
        var d,
          e,
          f = a ? this.removeListener : this.addListener,
          g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
          for (d = c.length; d--; ) f.call(this, b, c[d]);
        else
          for (d in b)
            b.hasOwnProperty(d) &&
              (e = b[d]) &&
              ("function" == typeof e
                ? f.call(this, d, e)
                : g.call(this, d, e));
        return this;
      }),
      (d.removeEvent = function (a) {
        var b,
          c = typeof a,
          d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
          for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this;
      }),
      (d.removeAllListeners = c("removeEvent")),
      (d.emitEvent = function (a, b) {
        var c,
          d,
          e,
          f,
          g = this.getListenersAsObject(a);
        for (e in g)
          if (g.hasOwnProperty(e))
            for (d = g[e].length; d--; )
              (c = g[e][d]),
                c.once === !0 && this.removeListener(a, c.listener),
                (f = c.listener.apply(this, b || [])),
                f === this._getOnceReturnValue() &&
                  this.removeListener(a, c.listener);
        return this;
      }),
      (d.trigger = c("emitEvent")),
      (d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b);
      }),
      (d.setOnceReturnValue = function (a) {
        return (this._onceReturnValue = a), this;
      }),
      (d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (d._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (a.noConflict = function () {
        return (e.EventEmitter = f), a;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return a;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = a)
        : (e.EventEmitter = a);
  }.call(this),
  (function (a) {
    function b(a) {
      if (a) {
        if ("string" == typeof d[a]) return a;
        a = a.charAt(0).toUpperCase() + a.slice(1);
        for (var b, e = 0, f = c.length; f > e; e++)
          if (((b = c[e] + a), "string" == typeof d[b])) return b;
      }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
      d = document.documentElement.style;
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return b;
        })
      : "object" == typeof exports
      ? (module.exports = b)
      : (a.getStyleProperty = b);
  })(window),
  (function (a, b) {
    function c(a) {
      var b = parseFloat(a),
        c = -1 === a.indexOf("%") && !isNaN(b);
      return c && b;
    }
    function d() {}
    function e() {
      for (
        var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          b = 0,
          c = h.length;
        c > b;
        b++
      ) {
        var d = h[b];
        a[d] = 0;
      }
      return a;
    }
    function f(b) {
      function d() {
        if (!m) {
          m = !0;
          var d = a.getComputedStyle;
          if (
            ((j = (function () {
              var a = d
                ? function (a) {
                    return d(a, null);
                  }
                : function (a) {
                    return a.currentStyle;
                  };
              return function (b) {
                var c = a(b);
                return (
                  c ||
                    g(
                      "Style returned " +
                        c +
                        ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                    ),
                  c
                );
              };
            })()),
            (k = b("boxSizing")))
          ) {
            var e = document.createElement("div");
            (e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style[k] = "border-box");
            var f = document.body || document.documentElement;
            f.appendChild(e);
            var h = j(e);
            (l = 200 === c(h.width)), f.removeChild(e);
          }
        }
      }
      function f(a) {
        if (
          (d(),
          "string" == typeof a && (a = document.querySelector(a)),
          a && "object" == typeof a && a.nodeType)
        ) {
          var b = j(a);
          if ("none" === b.display) return e();
          var f = {};
          (f.width = a.offsetWidth), (f.height = a.offsetHeight);
          for (
            var g = (f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k])),
              m = 0,
              n = h.length;
            n > m;
            m++
          ) {
            var o = h[m],
              p = b[o];
            p = i(a, p);
            var q = parseFloat(p);
            f[o] = isNaN(q) ? 0 : q;
          }
          var r = f.paddingLeft + f.paddingRight,
            s = f.paddingTop + f.paddingBottom,
            t = f.marginLeft + f.marginRight,
            u = f.marginTop + f.marginBottom,
            v = f.borderLeftWidth + f.borderRightWidth,
            w = f.borderTopWidth + f.borderBottomWidth,
            x = g && l,
            y = c(b.width);
          y !== !1 && (f.width = y + (x ? 0 : r + v));
          var z = c(b.height);
          return (
            z !== !1 && (f.height = z + (x ? 0 : s + w)),
            (f.innerWidth = f.width - (r + v)),
            (f.innerHeight = f.height - (s + w)),
            (f.outerWidth = f.width + t),
            (f.outerHeight = f.height + u),
            f
          );
        }
      }
      function i(b, c) {
        if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
        var d = b.style,
          e = d.left,
          f = b.runtimeStyle,
          g = f && f.left;
        return (
          g && (f.left = b.currentStyle.left),
          (d.left = c),
          (c = d.pixelLeft),
          (d.left = e),
          g && (f.left = g),
          c
        );
      }
      var j,
        k,
        l,
        m = !1;
      return f;
    }
    var g =
        "undefined" == typeof console
          ? d
          : function (a) {
              console.error(a);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    "function" == typeof define && define.amd
      ? define(
          "get-size/get-size",
          ["get-style-property/get-style-property"],
          f
        )
      : "object" == typeof exports
      ? (module.exports = f(require("desandro-get-style-property")))
      : (a.getSize = f(a.getStyleProperty));
  })(window),
  (function (a) {
    function b(a) {
      "function" == typeof a && (b.isReady ? a() : g.push(a));
    }
    function c(a) {
      var c = "readystatechange" === a.type && "complete" !== f.readyState;
      b.isReady || c || d();
    }
    function d() {
      b.isReady = !0;
      for (var a = 0, c = g.length; c > a; a++) {
        var d = g[a];
        d();
      }
    }
    function e(e) {
      return (
        "complete" === f.readyState
          ? d()
          : (e.bind(f, "DOMContentLoaded", c),
            e.bind(f, "readystatechange", c),
            e.bind(a, "load", c)),
        b
      );
    }
    var f = a.document,
      g = [];
    (b.isReady = !1),
      "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], e)
        : "object" == typeof exports
        ? (module.exports = e(require("eventie")))
        : (a.docReady = e(a.eventie));
  })(window),
  (function (a) {
    "use strict";
    function b(a, b) {
      return a[g](b);
    }
    function c(a) {
      if (!a.parentNode) {
        var b = document.createDocumentFragment();
        b.appendChild(a);
      }
    }
    function d(a, b) {
      c(a);
      for (
        var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length;
        f > e;
        e++
      )
        if (d[e] === a) return !0;
      return !1;
    }
    function e(a, d) {
      return c(a), b(a, d);
    }
    var f,
      g = (function () {
        if (a.matches) return "matches";
        if (a.matchesSelector) return "matchesSelector";
        for (
          var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length;
          d > c;
          c++
        ) {
          var e = b[c],
            f = e + "MatchesSelector";
          if (a[f]) return f;
        }
      })();
    if (g) {
      var h = document.createElement("div"),
        i = b(h, "div");
      f = i ? b : e;
    } else f = d;
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return f;
        })
      : "object" == typeof exports
      ? (module.exports = f)
      : (window.matchesSelector = f);
  })(Element.prototype),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["doc-ready/doc-ready", "matches-selector/matches-selector"],
          function (c, d) {
            return b(a, c, d);
          }
        )
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("doc-ready"),
          require("desandro-matches-selector")
        ))
      : (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector));
  })(window, function (a, b, c) {
    var d = {};
    (d.extend = function (a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    }),
      (d.modulo = function (a, b) {
        return ((a % b) + b) % b;
      });
    var e = Object.prototype.toString;
    (d.isArray = function (a) {
      return "[object Array]" == e.call(a);
    }),
      (d.makeArray = function (a) {
        var b = [];
        if (d.isArray(a)) b = a;
        else if (a && "number" == typeof a.length)
          for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
        else b.push(a);
        return b;
      }),
      (d.indexOf = Array.prototype.indexOf
        ? function (a, b) {
            return a.indexOf(b);
          }
        : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
          }),
      (d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1);
      }),
      (d.isElement =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (a) {
              return a instanceof HTMLElement;
            }
          : function (a) {
              return (
                a &&
                "object" == typeof a &&
                1 == a.nodeType &&
                "string" == typeof a.nodeName
              );
            }),
      (d.setText = (function () {
        function a(a, c) {
          (b =
            b ||
            (void 0 !== document.documentElement.textContent
              ? "textContent"
              : "innerText")),
            (a[b] = c);
        }
        var b;
        return a;
      })()),
      (d.getParent = function (a, b) {
        for (; a != document.body; )
          if (((a = a.parentNode), c(a, b))) return a;
      }),
      (d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a;
      }),
      (d.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }),
      (d.filterFindElements = function (a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
          var h = a[f];
          if (d.isElement(h))
            if (b) {
              c(h, b) && e.push(h);
              for (
                var i = h.querySelectorAll(b), j = 0, k = i.length;
                k > j;
                j++
              )
                e.push(i[j]);
            } else e.push(h);
        }
        return e;
      }),
      (d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b],
          e = b + "Timeout";
        a.prototype[b] = function () {
          var a = this[e];
          a && clearTimeout(a);
          var b = arguments,
            f = this;
          this[e] = setTimeout(function () {
            d.apply(f, b), delete f[e];
          }, c || 100);
        };
      }),
      (d.toDashed = function (a) {
        return a
          .replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c;
          })
          .toLowerCase();
      });
    var f = a.console;
    return (
      (d.htmlInit = function (c, e) {
        b(function () {
          for (
            var b = d.toDashed(e),
              g = document.querySelectorAll(".js-" + b),
              h = "data-" + b + "-options",
              i = 0,
              j = g.length;
            j > i;
            i++
          ) {
            var k,
              l = g[i],
              m = l.getAttribute(h);
            try {
              k = m && JSON.parse(m);
            } catch (n) {
              f &&
                f.error(
                  "Error parsing " +
                    h +
                    " on " +
                    l.nodeName.toLowerCase() +
                    (l.id ? "#" + l.id : "") +
                    ": " +
                    n
                );
              continue;
            }
            var o = new c(l, k),
              p = a.jQuery;
            p && p.data(l, e, o);
          }
        });
      }),
      d
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
            "fizzy-ui-utils/utils",
          ],
          function (c, d, e, f) {
            return b(a, c, d, e, f);
          }
        )
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property"),
          require("fizzy-ui-utils")
        ))
      : ((a.Outlayer = {}),
        (a.Outlayer.Item = b(
          a,
          a.EventEmitter,
          a.getSize,
          a.getStyleProperty,
          a.fizzyUIUtils
        )));
  })(window, function (a, b, c, d, e) {
    "use strict";
    function f(a) {
      for (var b in a) return !1;
      return (b = null), !0;
    }
    function g(a, b) {
      a &&
        ((this.element = a),
        (this.layout = b),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function h(a) {
      return a.replace(/([A-Z])/g, function (a) {
        return "-" + a.toLowerCase();
      });
    }
    var i = a.getComputedStyle,
      j = i
        ? function (a) {
            return i(a, null);
          }
        : function (a) {
            return a.currentStyle;
          },
      k = d("transition"),
      l = d("transform"),
      m = k && l,
      n = !!d("perspective"),
      o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend",
      }[k],
      p = [
        "transform",
        "transition",
        "transitionDuration",
        "transitionProperty",
      ],
      q = (function () {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
          var e = p[b],
            f = d(e);
          f && f !== e && (a[e] = f);
        }
        return a;
      })();
    e.extend(g.prototype, b.prototype),
      (g.prototype._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }),
      (g.prototype.getSize = function () {
        this.size = c(this.element);
      }),
      (g.prototype.css = function (a) {
        var b = this.element.style;
        for (var c in a) {
          var d = q[c] || c;
          b[d] = a[c];
        }
      }),
      (g.prototype.getPosition = function () {
        var a = j(this.element),
          b = this.layout.options,
          c = b.isOriginLeft,
          d = b.isOriginTop,
          e = a[c ? "left" : "right"],
          f = a[d ? "top" : "bottom"],
          g = this.layout.size,
          h =
            -1 != e.indexOf("%")
              ? (parseFloat(e) / 100) * g.width
              : parseInt(e, 10),
          i =
            -1 != f.indexOf("%")
              ? (parseFloat(f) / 100) * g.height
              : parseInt(f, 10);
        (h = isNaN(h) ? 0 : h),
          (i = isNaN(i) ? 0 : i),
          (h -= c ? g.paddingLeft : g.paddingRight),
          (i -= d ? g.paddingTop : g.paddingBottom),
          (this.position.x = h),
          (this.position.y = i);
      }),
      (g.prototype.layoutPosition = function () {
        var a = this.layout.size,
          b = this.layout.options,
          c = {},
          d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
          e = b.isOriginLeft ? "left" : "right",
          f = b.isOriginLeft ? "right" : "left",
          g = this.position.x + a[d];
        (c[e] = this.getXValue(g)), (c[f] = "");
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
          i = b.isOriginTop ? "top" : "bottom",
          j = b.isOriginTop ? "bottom" : "top",
          k = this.position.y + a[h];
        (c[i] = this.getYValue(k)),
          (c[j] = ""),
          this.css(c),
          this.emitEvent("layout", [this]);
      }),
      (g.prototype.getXValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal
          ? (a / this.layout.size.width) * 100 + "%"
          : a + "px";
      }),
      (g.prototype.getYValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal
          ? (a / this.layout.size.height) * 100 + "%"
          : a + "px";
      }),
      (g.prototype._transitionTo = function (a, b) {
        this.getPosition();
        var c = this.position.x,
          d = this.position.y,
          e = parseInt(a, 10),
          f = parseInt(b, 10),
          g = e === this.position.x && f === this.position.y;
        if ((this.setPosition(a, b), g && !this.isTransitioning))
          return void this.layoutPosition();
        var h = a - c,
          i = b - d,
          j = {};
        (j.transform = this.getTranslate(h, i)),
          this.transition({
            to: j,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options;
        return (
          (a = c.isOriginLeft ? a : -a),
          (b = c.isOriginTop ? b : -b),
          n
            ? "translate3d(" + a + "px, " + b + "px, 0)"
            : "translate(" + a + "px, " + b + "px)"
        );
      }),
      (g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition();
      }),
      (g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo),
      (g.prototype.setPosition = function (a, b) {
        (this.position.x = parseInt(a, 10)),
          (this.position.y = parseInt(b, 10));
      }),
      (g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this);
      }),
      (g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to)
          (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
          this.css(a.from);
          var d = this.element.offsetHeight;
          d = null;
        }
        this.enableTransition(a.to),
          this.css(a.to),
          (this.isTransitioning = !0);
      });
    var r = "opacity," + h(q.transform || "transform");
    (g.prototype.enableTransition = function () {
      this.isTransitioning ||
        (this.css({
          transitionProperty: r,
          transitionDuration: this.layout.options.transitionDuration,
        }),
        this.element.addEventListener(o, this, !1));
    }),
      (g.prototype.transition =
        g.prototype[k ? "_transition" : "_nonTransition"]),
      (g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a);
      }),
      (g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a);
      });
    var s = {
      "-webkit-transform": "transform",
      "-moz-transform": "transform",
      "-o-transform": "transform",
    };
    (g.prototype.ontransitionend = function (a) {
      if (a.target === this.element) {
        var b = this._transn,
          c = s[a.propertyName] || a.propertyName;
        if (
          (delete b.ingProperties[c],
          f(b.ingProperties) && this.disableTransition(),
          c in b.clean &&
            ((this.element.style[a.propertyName] = ""), delete b.clean[c]),
          c in b.onEnd)
        ) {
          var d = b.onEnd[c];
          d.call(this), delete b.onEnd[c];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (g.prototype.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(o, this, !1),
          (this.isTransitioning = !1);
      }),
      (g.prototype._removeStyles = function (a) {
        var b = {};
        for (var c in a) b[c] = "";
        this.css(b);
      });
    var t = { transitionProperty: "", transitionDuration: "" };
    return (
      (g.prototype.removeTransitionStyles = function () {
        this.css(t);
      }),
      (g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (g.prototype.remove = function () {
        if (!k || !parseFloat(this.layout.options.transitionDuration))
          return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function () {
          a.removeElem();
        }),
          this.hide();
      }),
      (g.prototype.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var a = this.layout.options,
          b = {},
          c = this.getHideRevealTransitionEndProperty("visibleStyle");
        (b[c] = this.onRevealTransitionEnd),
          this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b,
          });
      }),
      (g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a];
        if (b.opacity) return "opacity";
        for (var c in b) return c;
      }),
      (g.prototype.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var a = this.layout.options,
          b = {},
          c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (b[c] = this.onHideTransitionEnd),
          this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b,
          });
      }),
      (g.prototype.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (g.prototype.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      g
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (c, d, e, f, g) {
            return b(a, c, d, e, f, g);
          }
        )
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("eventie"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (a.Outlayer = b(
          a,
          a.eventie,
          a.EventEmitter,
          a.getSize,
          a.fizzyUIUtils,
          a.Outlayer.Item
        ));
  })(window, function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      var c = e.getQueryElement(a);
      if (!c)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (c || a)
          )
        );
      (this.element = c),
        i && (this.$element = i(this.element)),
        (this.options = e.extend({}, this.constructor.defaults)),
        this.option(b);
      var d = ++k;
      (this.element.outlayerGUID = d),
        (l[d] = this),
        this._create(),
        this.options.isInitLayout && this.layout();
    }
    var h = a.console,
      i = a.jQuery,
      j = function () {},
      k = 0,
      l = {};
    return (
      (g.namespace = "outlayer"),
      (g.Item = f),
      (g.defaults = {
        containerStyle: { position: "relative" },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      }),
      e.extend(g.prototype, c.prototype),
      (g.prototype.option = function (a) {
        e.extend(this.options, a);
      }),
      (g.prototype._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          e.extend(this.element.style, this.options.containerStyle),
          this.options.isResizeBound && this.bindResize();
      }),
      (g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (g.prototype._itemize = function (a) {
        for (
          var b = this._filterFindItemElements(a),
            c = this.constructor.Item,
            d = [],
            e = 0,
            f = b.length;
          f > e;
          e++
        ) {
          var g = b[e],
            h = new c(g, this);
          d.push(h);
        }
        return d;
      }),
      (g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector);
      }),
      (g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)
          a.push(this.items[b].element);
        return a;
      }),
      (g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var a =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        this.layoutItems(this.items, a), (this._isLayoutInited = !0);
      }),
      (g.prototype._init = g.prototype.layout),
      (g.prototype._resetLayout = function () {
        this.getSize();
      }),
      (g.prototype.getSize = function () {
        this.size = d(this.element);
      }),
      (g.prototype._getMeasurement = function (a, b) {
        var c,
          f = this.options[a];
        f
          ? ("string" == typeof f
              ? (c = this.element.querySelector(f))
              : e.isElement(f) && (c = f),
            (this[a] = c ? d(c)[b] : f))
          : (this[a] = 0);
      }),
      (g.prototype.layoutItems = function (a, b) {
        (a = this._getItemsForLayout(a)),
          this._layoutItems(a, b),
          this._postLayout();
      }),
      (g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var e = a[c];
          e.isIgnored || b.push(e);
        }
        return b;
      }),
      (g.prototype._layoutItems = function (a, b) {
        if ((this._emitCompleteOnItems("layout", a), a && a.length)) {
          for (var c = [], d = 0, e = a.length; e > d; d++) {
            var f = a[d],
              g = this._getItemLayoutPosition(f);
            (g.item = f), (g.isInstant = b || f.isLayoutInstant), c.push(g);
          }
          this._processLayoutQueue(c);
        }
      }),
      (g.prototype._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          this._positionItem(d.item, d.x, d.y, d.isInstant);
        }
      }),
      (g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c);
      }),
      (g.prototype._postLayout = function () {
        this.resizeContainer();
      }),
      (g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
          var a = this._getContainerSize();
          a &&
            (this._setContainerMeasure(a.width, !0),
            this._setContainerMeasure(a.height, !1));
        }
      }),
      (g.prototype._getContainerSize = j),
      (g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
          var c = this.size;
          c.isBorderBox &&
            (a += b
              ? c.paddingLeft +
                c.paddingRight +
                c.borderLeftWidth +
                c.borderRightWidth
              : c.paddingBottom +
                c.paddingTop +
                c.borderTopWidth +
                c.borderBottomWidth),
            (a = Math.max(a, 0)),
            (this.element.style[b ? "width" : "height"] = a + "px");
        }
      }),
      (g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
          e.dispatchEvent(a + "Complete", null, [b]);
        }
        function d() {
          g++, g === f && c();
        }
        var e = this,
          f = b.length;
        if (!b || !f) return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
          var j = b[h];
          j.once(a, d);
        }
      }),
      (g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c;
        if ((this.emitEvent(a, d), i))
          if (((this.$element = this.$element || i(this.element)), b)) {
            var e = i.Event(b);
            (e.type = a), this.$element.trigger(e, c);
          } else this.$element.trigger(a, c);
      }),
      (g.prototype.ignore = function (a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0);
      }),
      (g.prototype.unignore = function (a) {
        var b = this.getItem(a);
        b && delete b.isIgnored;
      }),
      (g.prototype.stamp = function (a) {
        if ((a = this._find(a))) {
          this.stamps = this.stamps.concat(a);
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this.ignore(d);
          }
        }
      }),
      (g.prototype.unstamp = function (a) {
        if ((a = this._find(a)))
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            e.removeFrom(this.stamps, d), this.unignore(d);
          }
      }),
      (g.prototype._find = function (a) {
        return a
          ? ("string" == typeof a && (a = this.element.querySelectorAll(a)),
            (a = e.makeArray(a)))
          : void 0;
      }),
      (g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect();
          for (var a = 0, b = this.stamps.length; b > a; a++) {
            var c = this.stamps[a];
            this._manageStamp(c);
          }
        }
      }),
      (g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(),
          b = this.size;
        this._boundingRect = {
          left: a.left + b.paddingLeft + b.borderLeftWidth,
          top: a.top + b.paddingTop + b.borderTopWidth,
          right: a.right - (b.paddingRight + b.borderRightWidth),
          bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth),
        };
      }),
      (g.prototype._manageStamp = j),
      (g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(),
          c = this._boundingRect,
          e = d(a),
          f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom,
          };
        return f;
      }),
      (g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a);
      }),
      (g.prototype.bindResize = function () {
        this.isResizeBound ||
          (b.bind(a, "resize", this), (this.isResizeBound = !0));
      }),
      (g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, "resize", this),
          (this.isResizeBound = !1);
      }),
      (g.prototype.onresize = function () {
        function a() {
          b.resize(), delete b.resizeTimeout;
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100);
      }),
      (g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (g.prototype.needsResizeLayout = function () {
        var a = d(this.element),
          b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth;
      }),
      (g.prototype.addItems = function (a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b;
      }),
      (g.prototype.appended = function (a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b));
      }),
      (g.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
          var c = this.items.slice(0);
          (this.items = b.concat(c)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(b, !0),
            this.reveal(b),
            this.layoutItems(c);
        }
      }),
      (g.prototype.reveal = function (a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.reveal();
        }
      }),
      (g.prototype.hide = function (a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.hide();
        }
      }),
      (g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a);
        this.reveal(b);
      }),
      (g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a);
        this.hide(b);
      }),
      (g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b];
          if (d.element === a) return d;
        }
      }),
      (g.prototype.getItems = function (a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var f = a[c],
            g = this.getItem(f);
          g && b.push(g);
        }
        return b;
      }),
      (g.prototype.remove = function (a) {
        var b = this.getItems(a);
        if ((this._emitCompleteOnItems("remove", b), b && b.length))
          for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c];
            f.remove(), e.removeFrom(this.items, f);
          }
      }),
      (g.prototype.destroy = function () {
        var a = this.element.style;
        (a.height = ""), (a.position = ""), (a.width = "");
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b];
          d.destroy();
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e],
          delete this.element.outlayerGUID,
          i && i.removeData(this.element, this.constructor.namespace);
      }),
      (g.data = function (a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b];
      }),
      (g.create = function (a, b) {
        function c() {
          g.apply(this, arguments);
        }
        return (
          Object.create
            ? (c.prototype = Object.create(g.prototype))
            : e.extend(c.prototype, g.prototype),
          (c.prototype.constructor = c),
          (c.defaults = e.extend({}, g.defaults)),
          e.extend(c.defaults, b),
          (c.prototype.settings = {}),
          (c.namespace = a),
          (c.data = g.data),
          (c.Item = function () {
            f.apply(this, arguments);
          }),
          (c.Item.prototype = new f()),
          e.htmlInit(c, a),
          i && i.bridget && i.bridget(a, c),
          c
        );
      }),
      (g.Item = f),
      g
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("outlayer")))
      : ((a.Isotope = a.Isotope || {}), (a.Isotope.Item = b(a.Outlayer)));
  })(window, function (a) {
    "use strict";
    function b() {
      a.Item.apply(this, arguments);
    }
    (b.prototype = new a.Item()),
      (b.prototype._create = function () {
        (this.id = this.layout.itemGUID++),
          a.Item.prototype._create.call(this),
          (this.sortData = {});
      }),
      (b.prototype.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var a = this.layout.options.getSortData,
            b = this.layout._sorters;
          for (var c in a) {
            var d = b[c];
            this.sortData[c] = d(this.element, this);
          }
        }
      });
    var c = b.prototype.destroy;
    return (
      (b.prototype.destroy = function () {
        c.apply(this, arguments), this.css({ display: "" });
      }),
      b
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(require("get-size"), require("outlayer")))
      : ((a.Isotope = a.Isotope || {}),
        (a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)));
  })(window, function (a, b) {
    "use strict";
    function c(a) {
      (this.isotope = a),
        a &&
          ((this.options = a.options[this.namespace]),
          (this.element = a.element),
          (this.items = a.filteredItems),
          (this.size = a.size));
    }
    return (
      (function () {
        function a(a) {
          return function () {
            return b.prototype[a].apply(this.isotope, arguments);
          };
        }
        for (
          var d = [
              "_resetLayout",
              "_getItemLayoutPosition",
              "_manageStamp",
              "_getContainerSize",
              "_getElementOffset",
              "needsResizeLayout",
            ],
            e = 0,
            f = d.length;
          f > e;
          e++
        ) {
          var g = d[e];
          c.prototype[g] = a(g);
        }
      })(),
      (c.prototype.needsVerticalResizeLayout = function () {
        var b = a(this.isotope.element),
          c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight;
      }),
      (c.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (c.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (c.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (c.prototype.getSegmentSize = function (a, b) {
        var c = a + b,
          d = "outer" + b;
        if ((this._getMeasurement(c, d), !this[c])) {
          var e = this.getFirstItemSize();
          this[c] = (e && e[d]) || this.isotope.size["inner" + b];
        }
      }),
      (c.prototype.getFirstItemSize = function () {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element);
      }),
      (c.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (c.prototype.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (c.modes = {}),
      (c.create = function (a, b) {
        function d() {
          c.apply(this, arguments);
        }
        return (
          (d.prototype = new c()),
          b && (d.options = b),
          (d.prototype.namespace = a),
          (c.modes[a] = d),
          d
        );
      }),
      c
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "masonry/masonry",
          ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("outlayer"),
          require("get-size"),
          require("fizzy-ui-utils")
        ))
      : (a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils));
  })(window, function (a, b, c) {
    var d = a.create("masonry");
    return (
      (d.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--; ) this.colYs.push(0);
        this.maxY = 0;
      }),
      (d.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var a = this.items[0],
            c = a && a.element;
          this.columnWidth = (c && b(c).outerWidth) || this.containerWidth;
        }
        var d = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          f = e / d,
          g = d - (e % d),
          h = g && 1 > g ? "round" : "floor";
        (f = Math[h](f)), (this.cols = Math.max(f, 1));
      }),
      (d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth
            ? this.element.parentNode
            : this.element,
          c = b(a);
        this.containerWidth = c && c.innerWidth;
      }),
      (d.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth,
          d = b && 1 > b ? "round" : "ceil",
          e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (
          var f = this._getColGroup(e),
            g = Math.min.apply(Math, f),
            h = c.indexOf(f, g),
            i = { x: this.columnWidth * h, y: g },
            j = g + a.size.outerHeight,
            k = this.cols + 1 - f.length,
            l = 0;
          k > l;
          l++
        )
          this.colYs[h + l] = j;
        return i;
      }),
      (d.prototype._getColGroup = function (a) {
        if (2 > a) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
          var e = this.colYs.slice(d, d + a);
          b[d] = Math.max.apply(Math, e);
        }
        return b;
      }),
      (d.prototype._manageStamp = function (a) {
        var c = b(a),
          d = this._getElementOffset(a),
          e = this.options.isOriginLeft ? d.left : d.right,
          f = e + c.outerWidth,
          g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        (h -= f % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight,
            j = g;
          h >= j;
          j++
        )
          this.colYs[j] = Math.max(i, this.colYs[j]);
      }),
      (d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = { height: this.maxY };
        return (
          this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        );
      }),
      (d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; ) a++;
        return (this.cols - a) * this.columnWidth - this.gutter;
      }),
      (d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth;
      }),
      d
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : b(a.Isotope.LayoutMode, a.Masonry);
  })(window, function (a, b) {
    "use strict";
    function c(a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    }
    var d = a.create("masonry"),
      e = d.prototype._getElementOffset,
      f = d.prototype.layout,
      g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype),
      (d.prototype._getElementOffset = e),
      (d.prototype.layout = f),
      (d.prototype._getMeasurement = g);
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function () {
      (this.items = this.isotope.filteredItems), h.call(this);
    };
    var i = d.prototype._manageStamp;
    return (
      (d.prototype._manageStamp = function () {
        (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
          (this.options.isOriginTop = this.isotope.options.isOriginTop),
          i.apply(this, arguments);
      }),
      d
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("../layout-mode")))
      : b(a.Isotope.LayoutMode);
  })(window, function (a) {
    "use strict";
    var b = a.create("fitRows");
    return (
      (b.prototype._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter,
          c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && ((this.x = 0), (this.y = this.maxY));
        var d = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight)),
          (this.x += b),
          d
        );
      }),
      (b.prototype._getContainerSize = function () {
        return { height: this.maxY };
      }),
      b
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b)
      : "object" == typeof exports
      ? (module.exports = b(require("../layout-mode")))
      : b(a.Isotope.LayoutMode);
  })(window, function (a) {
    "use strict";
    var b = a.create("vertical", { horizontalAlignment: 0 });
    return (
      (b.prototype._resetLayout = function () {
        this.y = 0;
      }),
      (b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b =
            (this.isotope.size.innerWidth - a.size.outerWidth) *
            this.options.horizontalAlignment,
          c = this.y;
        return (this.y += a.size.outerHeight), { x: b, y: c };
      }),
      (b.prototype._getContainerSize = function () {
        return { height: this.y };
      }),
      b
    );
  }),
  (function (a, b) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h);
          }
        )
      : "object" == typeof exports
      ? (module.exports = b(
          a,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (a.Isotope = b(
          a,
          a.Outlayer,
          a.getSize,
          a.matchesSelector,
          a.fizzyUIUtils,
          a.Isotope.Item,
          a.Isotope.LayoutMode
        ));
  })(window, function (a, b, c, d, e, f, g) {
    function h(a, b) {
      return function (c, d) {
        for (var e = 0, f = a.length; f > e; e++) {
          var g = a[e],
            h = c.sortData[g],
            i = d.sortData[g];
          if (h > i || i > h) {
            var j = void 0 !== b[g] ? b[g] : b,
              k = j ? 1 : -1;
            return (h > i ? 1 : -1) * k;
          }
        }
        return 0;
      };
    }
    var i = a.jQuery,
      j = String.prototype.trim
        ? function (a) {
            return a.trim();
          }
        : function (a) {
            return a.replace(/^\s+|\s+$/g, "");
          },
      k = document.documentElement,
      l = k.textContent
        ? function (a) {
            return a.textContent;
          }
        : function (a) {
            return a.innerText;
          },
      m = b.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (m.Item = f),
      (m.LayoutMode = g),
      (m.prototype._create = function () {
        (this.itemGUID = 0),
          (this._sorters = {}),
          this._getSorters(),
          b.prototype._create.call(this),
          (this.modes = {}),
          (this.filteredItems = this.items),
          (this.sortHistory = ["original-order"]);
        for (var a in g.modes) this._initLayoutMode(a);
      }),
      (m.prototype.reloadItems = function () {
        (this.itemGUID = 0), b.prototype.reloadItems.call(this);
      }),
      (m.prototype._itemize = function () {
        for (
          var a = b.prototype._itemize.apply(this, arguments),
            c = 0,
            d = a.length;
          d > c;
          c++
        ) {
          var e = a[c];
          e.id = this.itemGUID++;
        }
        return this._updateItemsSortData(a), a;
      }),
      (m.prototype._initLayoutMode = function (a) {
        var b = g.modes[a],
          c = this.options[a] || {};
        (this.options[a] = b.options ? e.extend(b.options, c) : c),
          (this.modes[a] = new b(this));
      }),
      (m.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout
          ? void this.arrange()
          : void this._layout();
      }),
      (m.prototype._layout = function () {
        var a = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, a),
          (this._isLayoutInited = !0);
      }),
      (m.prototype.arrange = function (a) {
        function b() {
          d.reveal(c.needReveal), d.hide(c.needHide);
        }
        this.option(a), this._getIsInstant();
        var c = this._filter(this.items);
        this.filteredItems = c.matches;
        var d = this;
        this._bindArrangeComplete(),
          this._isInstant ? this._noTransition(b) : b(),
          this._sort(),
          this._layout();
      }),
      (m.prototype._init = m.prototype.arrange),
      (m.prototype._getIsInstant = function () {
        var a =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        return (this._isInstant = a), a;
      }),
      (m.prototype._bindArrangeComplete = function () {
        function a() {
          b &&
            c &&
            d &&
            e.dispatchEvent("arrangeComplete", null, [e.filteredItems]);
        }
        var b,
          c,
          d,
          e = this;
        this.once("layoutComplete", function () {
          (b = !0), a();
        }),
          this.once("hideComplete", function () {
            (c = !0), a();
          }),
          this.once("revealComplete", function () {
            (d = !0), a();
          });
      }),
      (m.prototype._filter = function (a) {
        var b = this.options.filter;
        b = b || "*";
        for (
          var c = [],
            d = [],
            e = [],
            f = this._getFilterTest(b),
            g = 0,
            h = a.length;
          h > g;
          g++
        ) {
          var i = a[g];
          if (!i.isIgnored) {
            var j = f(i);
            j && c.push(i),
              j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i);
          }
        }
        return { matches: c, needReveal: d, needHide: e };
      }),
      (m.prototype._getFilterTest = function (a) {
        return i && this.options.isJQueryFiltering
          ? function (b) {
              return i(b.element).is(a);
            }
          : "function" == typeof a
          ? function (b) {
              return a(b.element);
            }
          : function (b) {
              return d(b.element, a);
            };
      }),
      (m.prototype.updateSortData = function (a) {
        var b;
        a ? ((a = e.makeArray(a)), (b = this.getItems(a))) : (b = this.items),
          this._getSorters(),
          this._updateItemsSortData(b);
      }),
      (m.prototype._getSorters = function () {
        var a = this.options.getSortData;
        for (var b in a) {
          var c = a[b];
          this._sorters[b] = n(c);
        }
      }),
      (m.prototype._updateItemsSortData = function (a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.updateSortData();
        }
      });
    var n = (function () {
      function a(a) {
        if ("string" != typeof a) return a;
        var c = j(a).split(" "),
          d = c[0],
          e = d.match(/^\[(.+)\]$/),
          f = e && e[1],
          g = b(f, d),
          h = m.sortDataParsers[c[1]];
        return (a = h
          ? function (a) {
              return a && h(g(a));
            }
          : function (a) {
              return a && g(a);
            });
      }
      function b(a, b) {
        var c;
        return (c = a
          ? function (b) {
              return b.getAttribute(a);
            }
          : function (a) {
              var c = a.querySelector(b);
              return c && l(c);
            });
      }
      return a;
    })();
    (m.sortDataParsers = {
      parseInt: function (a) {
        return parseInt(a, 10);
      },
      parseFloat: function (a) {
        return parseFloat(a);
      },
    }),
      (m.prototype._sort = function () {
        var a = this.options.sortBy;
        if (a) {
          var b = [].concat.apply(a, this.sortHistory),
            c = h(b, this.options.sortAscending);
          this.filteredItems.sort(c),
            a != this.sortHistory[0] && this.sortHistory.unshift(a);
        }
      }),
      (m.prototype._mode = function () {
        var a = this.options.layoutMode,
          b = this.modes[a];
        if (!b) throw new Error("No layout mode: " + a);
        return (b.options = this.options[a]), b;
      }),
      (m.prototype._resetLayout = function () {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (m.prototype._getItemLayoutPosition = function (a) {
        return this._mode()._getItemLayoutPosition(a);
      }),
      (m.prototype._manageStamp = function (a) {
        this._mode()._manageStamp(a);
      }),
      (m.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (m.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (m.prototype.appended = function (a) {
        var b = this.addItems(a);
        if (b.length) {
          var c = this._filterRevealAdded(b);
          this.filteredItems = this.filteredItems.concat(c);
        }
      }),
      (m.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
          this._resetLayout(), this._manageStamps();
          var c = this._filterRevealAdded(b);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = c.concat(this.filteredItems)),
            (this.items = b.concat(this.items));
        }
      }),
      (m.prototype._filterRevealAdded = function (a) {
        var b = this._filter(a);
        return (
          this.hide(b.needHide),
          this.reveal(b.matches),
          this.layoutItems(b.matches, !0),
          b.matches
        );
      }),
      (m.prototype.insert = function (a) {
        var b = this.addItems(a);
        if (b.length) {
          var c,
            d,
            e = b.length;
          for (c = 0; e > c; c++)
            (d = b[c]), this.element.appendChild(d.element);
          var f = this._filter(b).matches;
          for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
          for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
          this.reveal(f);
        }
      });
    var o = m.prototype.remove;
    return (
      (m.prototype.remove = function (a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        o.call(this, a);
        var c = b && b.length;
        if (c)
          for (var d = 0; c > d; d++) {
            var f = b[d];
            e.removeFrom(this.filteredItems, f);
          }
      }),
      (m.prototype.shuffle = function () {
        for (var a = 0, b = this.items.length; b > a; a++) {
          var c = this.items[a];
          c.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (m.prototype._noTransition = function (a) {
        var b = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var c = a.call(this);
        return (this.options.transitionDuration = b), c;
      }),
      (m.prototype.getFilteredItemElements = function () {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)
          a.push(this.filteredItems[b].element);
        return a;
      }),
      m
    );
  });

(function () {
  function e() {}
  function t(e, t) {
    for (var n = e.length; n--; ) if (e[n].listener === t) return n;
    return -1;
  }
  function n(e) {
    return function () {
      return this[e].apply(this, arguments);
    };
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  (i.getListeners = function (e) {
    var t,
      n,
      i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
    } else t = i[e] || (i[e] = []);
    return t;
  }),
    (i.flattenListeners = function (e) {
      var t,
        n = [];
      for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
      return n;
    }),
    (i.getListenersAsObject = function (e) {
      var t,
        n = this.getListeners(e);
      return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
    }),
    (i.addListener = function (e, n) {
      var i,
        r = this.getListenersAsObject(e),
        o = "object" == typeof n;
      for (i in r)
        r.hasOwnProperty(i) &&
          -1 === t(r[i], n) &&
          r[i].push(o ? n : { listener: n, once: !1 });
      return this;
    }),
    (i.on = n("addListener")),
    (i.addOnceListener = function (e, t) {
      return this.addListener(e, { listener: t, once: !0 });
    }),
    (i.once = n("addOnceListener")),
    (i.defineEvent = function (e) {
      return this.getListeners(e), this;
    }),
    (i.defineEvents = function (e) {
      for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
      return this;
    }),
    (i.removeListener = function (e, n) {
      var i,
        r,
        o = this.getListenersAsObject(e);
      for (r in o)
        o.hasOwnProperty(r) &&
          ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
      return this;
    }),
    (i.off = n("removeListener")),
    (i.addListeners = function (e, t) {
      return this.manipulateListeners(!1, e, t);
    }),
    (i.removeListeners = function (e, t) {
      return this.manipulateListeners(!0, e, t);
    }),
    (i.manipulateListeners = function (e, t, n) {
      var i,
        r,
        o = e ? this.removeListener : this.addListener,
        s = e ? this.removeListeners : this.addListeners;
      if ("object" != typeof t || t instanceof RegExp)
        for (i = n.length; i--; ) o.call(this, t, n[i]);
      else
        for (i in t)
          t.hasOwnProperty(i) &&
            (r = t[i]) &&
            ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
      return this;
    }),
    (i.removeEvent = function (e) {
      var t,
        n = typeof e,
        i = this._getEvents();
      if ("string" === n) delete i[e];
      else if ("object" === n)
        for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
      else delete this._events;
      return this;
    }),
    (i.removeAllListeners = n("removeEvent")),
    (i.emitEvent = function (e, t) {
      var n,
        i,
        r,
        o,
        s = this.getListenersAsObject(e);
      for (r in s)
        if (s.hasOwnProperty(r))
          for (i = s[r].length; i--; )
            (n = s[r][i]),
              n.once === !0 && this.removeListener(e, n.listener),
              (o = n.listener.apply(this, t || [])),
              o === this._getOnceReturnValue() &&
                this.removeListener(e, n.listener);
      return this;
    }),
    (i.trigger = n("emitEvent")),
    (i.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(e, t);
    }),
    (i.setOnceReturnValue = function (e) {
      return (this._onceReturnValue = e), this;
    }),
    (i._getOnceReturnValue = function () {
      return this.hasOwnProperty("_onceReturnValue")
        ? this._onceReturnValue
        : !0;
    }),
    (i._getEvents = function () {
      return this._events || (this._events = {});
    }),
    (e.noConflict = function () {
      return (r.EventEmitter = o), e;
    }),
    "function" == typeof define && define.amd
      ? define("eventEmitter/EventEmitter", [], function () {
          return e;
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e)
      : (this.EventEmitter = e);
}).call(this),
  (function (e) {
    function t(t) {
      var n = e.event;
      return (n.target = n.target || n.srcElement || t), n;
    }
    var n = document.documentElement,
      i = function () {};
    n.addEventListener
      ? (i = function (e, t, n) {
          e.addEventListener(t, n, !1);
        })
      : n.attachEvent &&
        (i = function (e, n, i) {
          (e[n + i] = i.handleEvent
            ? function () {
                var n = t(e);
                i.handleEvent.call(i, n);
              }
            : function () {
                var n = t(e);
                i.call(e, n);
              }),
            e.attachEvent("on" + n, e[n + i]);
        });
    var r = function () {};
    n.removeEventListener
      ? (r = function (e, t, n) {
          e.removeEventListener(t, n, !1);
        })
      : n.detachEvent &&
        (r = function (e, t, n) {
          e.detachEvent("on" + t, e[t + n]);
          try {
            delete e[t + n];
          } catch (i) {
            e[t + n] = void 0;
          }
        });
    var o = { bind: i, unbind: r };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", o)
      : (e.eventie = o);
  })(this),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(
          ["eventEmitter/EventEmitter", "eventie/eventie"],
          function (n, i) {
            return t(e, n, i);
          }
        )
      : "object" == typeof exports
      ? (module.exports = t(
          e,
          require("wolfy87-eventemitter"),
          require("eventie")
        ))
      : (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
  })(window, function (e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function r(e) {
      return "[object Array]" === d.call(e);
    }
    function o(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
      else t.push(e);
      return t;
    }
    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      "string" == typeof e && (e = document.querySelectorAll(e)),
        (this.elements = o(e)),
        (this.options = i({}, this.options)),
        "function" == typeof t ? (n = t) : i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred());
      var r = this;
      setTimeout(function () {
        r.check();
      });
    }
    function f(e) {
      this.img = e;
    }
    function c(e) {
      (this.src = e), (v[e] = this);
    }
    var a = e.jQuery,
      u = e.console,
      h = u !== void 0,
      d = Object.prototype.toString;
    (s.prototype = new t()),
      (s.prototype.options = {}),
      (s.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
          var n = this.elements[e];
          "IMG" === n.nodeName && this.addImage(n);
          var i = n.nodeType;
          if (i && (1 === i || 9 === i || 11 === i))
            for (
              var r = n.querySelectorAll("img"), o = 0, s = r.length;
              s > o;
              o++
            ) {
              var f = r[o];
              this.addImage(f);
            }
        }
      }),
      (s.prototype.addImage = function (e) {
        var t = new f(e);
        this.images.push(t);
      }),
      (s.prototype.check = function () {
        function e(e, r) {
          return (
            t.options.debug && h && u.log("confirm", e, r),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
          );
        }
        var t = this,
          n = 0,
          i = this.images.length;
        if (((this.hasAnyBroken = !1), !i)) return this.complete(), void 0;
        for (var r = 0; i > r; r++) {
          var o = this.images[r];
          o.on("confirm", e), o.check();
        }
      }),
      (s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
          t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
        });
      }),
      (s.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
          if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
            var n = t.hasAnyBroken ? "reject" : "resolve";
            t.jqDeferred[n](t);
          }
        });
      }),
      a &&
        (a.fn.imagesLoaded = function (e, t) {
          var n = new s(this, e, t);
          return n.jqDeferred.promise(a(this));
        }),
      (f.prototype = new t()),
      (f.prototype.check = function () {
        var e = v[this.img.src] || new c(this.img.src);
        if (e.isConfirmed)
          return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return (
            this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0
          );
        var t = this;
        e.on("confirm", function (e, n) {
          return t.confirm(e.isLoaded, n), !0;
        }),
          e.check();
      }),
      (f.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emit("confirm", this, t);
      });
    var v = {};
    return (
      (c.prototype = new t()),
      (c.prototype.check = function () {
        if (!this.isChecked) {
          var e = new Image();
          n.bind(e, "load", this),
            n.bind(e, "error", this),
            (e.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (c.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (c.prototype.onload = function (e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e);
      }),
      (c.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
      }),
      (c.prototype.confirm = function (e, t) {
        (this.isConfirmed = !0),
          (this.isLoaded = e),
          this.emit("confirm", this, t);
      }),
      (c.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this);
      }),
      s
    );
  });
/*!
 * Packery layout mode PACKAGED v1.1.3
 * sub-classes Packery
 * http://packery.metafizzy.co
 */

!(function (a) {
  function b(a) {
    return new RegExp("(^|\\s+)" + a + "(\\s+|$)");
  }
  function c(a, b) {
    var c = d(a, b) ? f : e;
    c(a, b);
  }
  var d, e, f;
  "classList" in document.documentElement
    ? ((d = function (a, b) {
        return a.classList.contains(b);
      }),
      (e = function (a, b) {
        a.classList.add(b);
      }),
      (f = function (a, b) {
        a.classList.remove(b);
      }))
    : ((d = function (a, c) {
        return b(c).test(a.className);
      }),
      (e = function (a, b) {
        d(a, b) || (a.className = a.className + " " + b);
      }),
      (f = function (a, c) {
        a.className = a.className.replace(b(c), " ");
      }));
  var g = {
    hasClass: d,
    addClass: e,
    removeClass: f,
    toggleClass: c,
    has: d,
    add: e,
    remove: f,
    toggle: c,
  };
  "function" == typeof define && define.amd
    ? define("classie/classie", g)
    : "object" == typeof exports
    ? (module.exports = g)
    : (a.classie = g);
})(window),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define("packery/js/rect", b)
      : "object" == typeof exports
      ? (module.exports = b())
      : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
  })(window, function () {
    function a(b) {
      for (var c in a.defaults) this[c] = a.defaults[c];
      for (c in b) this[c] = b[c];
    }
    var b = (window.Packery = function () {});
    return (
      (b.Rect = a),
      (a.defaults = { x: 0, y: 0, width: 0, height: 0 }),
      (a.prototype.contains = function (a) {
        var b = a.width || 0,
          c = a.height || 0;
        return (
          this.x <= a.x &&
          this.y <= a.y &&
          this.x + this.width >= a.x + b &&
          this.y + this.height >= a.y + c
        );
      }),
      (a.prototype.overlaps = function (a) {
        var b = this.x + this.width,
          c = this.y + this.height,
          d = a.x + a.width,
          e = a.y + a.height;
        return this.x < d && b > a.x && this.y < e && c > a.y;
      }),
      (a.prototype.getMaximalFreeRects = function (b) {
        if (!this.overlaps(b)) return !1;
        var c,
          d = [],
          e = this.x + this.width,
          f = this.y + this.height,
          g = b.x + b.width,
          h = b.y + b.height;
        return (
          this.y < b.y &&
            ((c = new a({
              x: this.x,
              y: this.y,
              width: this.width,
              height: b.y - this.y,
            })),
            d.push(c)),
          e > g &&
            ((c = new a({
              x: g,
              y: this.y,
              width: e - g,
              height: this.height,
            })),
            d.push(c)),
          f > h &&
            ((c = new a({ x: this.x, y: h, width: this.width, height: f - h })),
            d.push(c)),
          this.x < b.x &&
            ((c = new a({
              x: this.x,
              y: this.y,
              width: b.x - this.x,
              height: this.height,
            })),
            d.push(c)),
          d
        );
      }),
      (a.prototype.canFit = function (a) {
        return this.width >= a.width && this.height >= a.height;
      }),
      a
    );
  }),
  (function (a, b) {
    if ("function" == typeof define && define.amd)
      define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof exports) module.exports = b(require("./rect"));
    else {
      var c = (a.Packery = a.Packery || {});
      c.Packer = b(c.Rect);
    }
  })(window, function (a) {
    function b(a, b, c) {
      (this.width = a || 0),
        (this.height = b || 0),
        (this.sortDirection = c || "downwardLeftToRight"),
        this.reset();
    }
    (b.prototype.reset = function () {
      (this.spaces = []), (this.newSpaces = []);
      var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
      this.spaces.push(b),
        (this.sorter = c[this.sortDirection] || c.downwardLeftToRight);
    }),
      (b.prototype.pack = function (a) {
        for (var b = 0, c = this.spaces.length; c > b; b++) {
          var d = this.spaces[b];
          if (d.canFit(a)) {
            this.placeInSpace(a, d);
            break;
          }
        }
      }),
      (b.prototype.placeInSpace = function (a, b) {
        (a.x = b.x), (a.y = b.y), this.placed(a);
      }),
      (b.prototype.placed = function (a) {
        for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
          var e = this.spaces[c],
            f = e.getMaximalFreeRects(a);
          f ? b.push.apply(b, f) : b.push(e);
        }
        (this.spaces = b), this.mergeSortSpaces();
      }),
      (b.prototype.mergeSortSpaces = function () {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
      }),
      (b.prototype.addSpace = function (a) {
        this.spaces.push(a), this.mergeSortSpaces();
      }),
      (b.mergeRects = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          if (d) {
            var e = a.slice(0);
            e.splice(b, 1);
            for (var f = 0, g = 0, h = e.length; h > g; g++) {
              var i = e[g],
                j = b > g ? 0 : 1;
              d.contains(i) && (a.splice(g + j - f, 1), f++);
            }
          }
        }
        return a;
      });
    var c = {
      downwardLeftToRight: function (a, b) {
        return a.y - b.y || a.x - b.x;
      },
      rightwardTopToBottom: function (a, b) {
        return a.x - b.x || a.y - b.y;
      },
    };
    return b;
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(
          "packery/js/item",
          [
            "get-style-property/get-style-property",
            "outlayer/outlayer",
            "./rect",
          ],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("desandro-get-style-property"),
          require("outlayer"),
          require("./rect")
        ))
      : (a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect));
  })(window, function (a, b, c) {
    var d = a("transform"),
      e = function () {
        b.Item.apply(this, arguments);
      };
    e.prototype = new b.Item();
    var f = e.prototype._create;
    return (
      (e.prototype._create = function () {
        f.call(this), (this.rect = new c()), (this.placeRect = new c());
      }),
      (e.prototype.dragStart = function () {
        this.getPosition(),
          this.removeTransitionStyles(),
          this.isTransitioning && d && (this.element.style[d] = "none"),
          this.getSize(),
          (this.isPlacing = !0),
          (this.needsPositioning = !1),
          this.positionPlaceRect(this.position.x, this.position.y),
          (this.isTransitioning = !1),
          (this.didDrag = !1);
      }),
      (e.prototype.dragMove = function (a, b) {
        this.didDrag = !0;
        var c = this.layout.size;
        (a -= c.paddingLeft), (b -= c.paddingTop), this.positionPlaceRect(a, b);
      }),
      (e.prototype.dragStop = function () {
        this.getPosition();
        var a = this.position.x != this.placeRect.x,
          b = this.position.y != this.placeRect.y;
        (this.needsPositioning = a || b), (this.didDrag = !1);
      }),
      (e.prototype.positionPlaceRect = function (a, b, c) {
        (this.placeRect.x = this.getPlaceRectCoord(a, !0)),
          (this.placeRect.y = this.getPlaceRectCoord(b, !1, c));
      }),
      (e.prototype.getPlaceRectCoord = function (a, b, c) {
        var d = b ? "Width" : "Height",
          e = this.size["outer" + d],
          f = this.layout[b ? "columnWidth" : "rowHeight"],
          g = this.layout.size["inner" + d];
        b ||
          ((g = Math.max(g, this.layout.maxY)),
          this.layout.rowHeight || (g -= this.layout.gutter));
        var h;
        if (f) {
          (f += this.layout.gutter),
            (g += b ? this.layout.gutter : 0),
            (a = Math.round(a / f));
          var i;
          i = this.layout.options.isHorizontal
            ? b
              ? "ceil"
              : "floor"
            : b
            ? "floor"
            : "ceil";
          var j = Math[i](g / f);
          (j -= Math.ceil(e / f)), (h = j);
        } else h = g - e;
        return (a = c ? a : Math.min(a, h)), (a *= f || 1), Math.max(0, a);
      }),
      (e.prototype.copyPlaceRectPosition = function () {
        (this.rect.x = this.placeRect.x), (this.rect.y = this.placeRect.y);
      }),
      (e.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.layout.packer.addSpace(this.rect),
          this.emitEvent("remove", [this]);
      }),
      e
    );
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(
          "packery/js/packery",
          [
            "classie/classie",
            "get-size/get-size",
            "outlayer/outlayer",
            "./rect",
            "./packer",
            "./item",
          ],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("desandro-classie"),
          require("get-size"),
          require("outlayer"),
          require("./rect"),
          require("./packer"),
          require("./item")
        ))
      : (a.Packery = b(
          a.classie,
          a.getSize,
          a.Outlayer,
          a.Packery.Rect,
          a.Packery.Packer,
          a.Packery.Item
        ));
  })(window, function (a, b, c, d, e, f) {
    function g(a, b) {
      return a.position.y - b.position.y || a.position.x - b.position.x;
    }
    function h(a, b) {
      return a.position.x - b.position.x || a.position.y - b.position.y;
    }
    d.prototype.canFit = function (a) {
      return this.width >= a.width - 1 && this.height >= a.height - 1;
    };
    var i = c.create("packery");
    return (
      (i.Item = f),
      (i.prototype._create = function () {
        c.prototype._create.call(this),
          (this.packer = new e()),
          this.stamp(this.options.stamped);
        var a = this;
        (this.handleDraggabilly = {
          dragStart: function () {
            a.itemDragStart(this.element);
          },
          dragMove: function () {
            a.itemDragMove(this.element, this.position.x, this.position.y);
          },
          dragEnd: function () {
            a.itemDragEnd(this.element);
          },
        }),
          (this.handleUIDraggable = {
            start: function (b) {
              a.itemDragStart(b.currentTarget);
            },
            drag: function (b, c) {
              a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
            },
            stop: function (b) {
              a.itemDragEnd(b.currentTarget);
            },
          });
      }),
      (i.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurements();
        var a = this.packer;
        this.options.isHorizontal
          ? ((a.width = Number.POSITIVE_INFINITY),
            (a.height = this.size.innerHeight + this.gutter),
            (a.sortDirection = "rightwardTopToBottom"))
          : ((a.width = this.size.innerWidth + this.gutter),
            (a.height = Number.POSITIVE_INFINITY),
            (a.sortDirection = "downwardLeftToRight")),
          a.reset(),
          (this.maxY = 0),
          (this.maxX = 0);
      }),
      (i.prototype._getMeasurements = function () {
        this._getMeasurement("columnWidth", "width"),
          this._getMeasurement("rowHeight", "height"),
          this._getMeasurement("gutter", "width");
      }),
      (i.prototype._getItemLayoutPosition = function (a) {
        return this._packItem(a), a.rect;
      }),
      (i.prototype._packItem = function (a) {
        this._setRectSize(a.element, a.rect),
          this.packer.pack(a.rect),
          this._setMaxXY(a.rect);
      }),
      (i.prototype._setMaxXY = function (a) {
        (this.maxX = Math.max(a.x + a.width, this.maxX)),
          (this.maxY = Math.max(a.y + a.height, this.maxY));
      }),
      (i.prototype._setRectSize = function (a, c) {
        var d = b(a),
          e = d.outerWidth,
          f = d.outerHeight;
        (e || f) &&
          ((e = this._applyGridGutter(e, this.columnWidth)),
          (f = this._applyGridGutter(f, this.rowHeight))),
          (c.width = Math.min(e, this.packer.width)),
          (c.height = Math.min(f, this.packer.height));
      }),
      (i.prototype._applyGridGutter = function (a, b) {
        if (!b) return a + this.gutter;
        b += this.gutter;
        var c = a % b,
          d = c && 1 > c ? "round" : "ceil";
        return (a = Math[d](a / b) * b);
      }),
      (i.prototype._getContainerSize = function () {
        return this.options.isHorizontal
          ? { width: this.maxX - this.gutter }
          : { height: this.maxY - this.gutter };
      }),
      (i.prototype._manageStamp = function (a) {
        var b,
          c = this.getItem(a);
        if (c && c.isPlacing) b = c.placeRect;
        else {
          var e = this._getElementOffset(a);
          b = new d({
            x: this.options.isOriginLeft ? e.left : e.right,
            y: this.options.isOriginTop ? e.top : e.bottom,
          });
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
      }),
      (i.prototype.sortItemsByPosition = function () {
        var a = this.options.isHorizontal ? h : g;
        this.items.sort(a);
      }),
      (i.prototype.fit = function (a, b, c) {
        var d = this.getItem(a);
        d &&
          (this._getMeasurements(),
          this.stamp(d.element),
          d.getSize(),
          (d.isPlacing = !0),
          (b = void 0 === b ? d.rect.x : b),
          (c = void 0 === c ? d.rect.y : c),
          d.positionPlaceRect(b, c, !0),
          this._bindFitEvents(d),
          d.moveTo(d.placeRect.x, d.placeRect.y),
          this.layout(),
          this.unstamp(d.element),
          this.sortItemsByPosition(),
          (d.isPlacing = !1),
          d.copyPlaceRectPosition());
      }),
      (i.prototype._bindFitEvents = function (a) {
        function b() {
          d++, 2 == d && c.emitEvent("fitComplete", [a]);
        }
        var c = this,
          d = 0;
        a.on("layout", function () {
          return b(), !0;
        }),
          this.on("layoutComplete", function () {
            return b(), !0;
          });
      }),
      (i.prototype.resize = function () {
        var a = b(this.element),
          c = this.size && a,
          d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
        (c && a[d] == this.size[d]) || this.layout();
      }),
      (i.prototype.itemDragStart = function (a) {
        this.stamp(a);
        var b = this.getItem(a);
        b && b.dragStart();
      }),
      (i.prototype.itemDragMove = function (a, b, c) {
        function d() {
          f.layout(), delete f.dragTimeout;
        }
        var e = this.getItem(a);
        e && e.dragMove(b, c);
        var f = this;
        this.clearDragTimeout(), (this.dragTimeout = setTimeout(d, 40));
      }),
      (i.prototype.clearDragTimeout = function () {
        this.dragTimeout && clearTimeout(this.dragTimeout);
      }),
      (i.prototype.itemDragEnd = function (b) {
        var c,
          d = this.getItem(b);
        if (
          (d && ((c = d.didDrag), d.dragStop()),
          !d || (!c && !d.needsPositioning))
        )
          return void this.unstamp(b);
        a.add(d.element, "is-positioning-post-drag");
        var e = this._getDragEndLayoutComplete(b, d);
        d.needsPositioning
          ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y))
          : d && d.copyPlaceRectPosition(),
          this.clearDragTimeout(),
          this.on("layoutComplete", e),
          this.layout();
      }),
      (i.prototype._getDragEndLayoutComplete = function (b, c) {
        var d = c && c.needsPositioning,
          e = 0,
          f = d ? 2 : 1,
          g = this;
        return function () {
          return (
            e++,
            e != f
              ? !0
              : (c &&
                  (a.remove(c.element, "is-positioning-post-drag"),
                  (c.isPlacing = !1),
                  c.copyPlaceRectPosition()),
                g.unstamp(b),
                g.sortItemsByPosition(),
                d && g.emitEvent("dragItemPositioned", [c]),
                !0)
          );
        };
      }),
      (i.prototype.bindDraggabillyEvents = function (a) {
        a.on("dragStart", this.handleDraggabilly.dragStart),
          a.on("dragMove", this.handleDraggabilly.dragMove),
          a.on("dragEnd", this.handleDraggabilly.dragEnd);
      }),
      (i.prototype.bindUIDraggableEvents = function (a) {
        a.on("dragstart", this.handleUIDraggable.start)
          .on("drag", this.handleUIDraggable.drag)
          .on("dragstop", this.handleUIDraggable.stop);
      }),
      (i.Rect = d),
      (i.Packer = e),
      i
    );
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(
          ["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("isotope-layout/js/layout-mode"),
          require("packery"),
          require("get-size")
        ))
      : b(a.Isotope.LayoutMode, a.Packery, a.getSize);
  })(window, function (a, b, c) {
    function d(a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    }
    var e = a.create("packery"),
      f = e.prototype._getElementOffset,
      g = e.prototype._getMeasurement;
    d(e.prototype, b.prototype),
      (e.prototype._getElementOffset = f),
      (e.prototype._getMeasurement = g);
    var h = e.prototype._resetLayout;
    e.prototype._resetLayout = function () {
      (this.packer = this.packer || new b.Packer()), h.apply(this, arguments);
    };
    var i = e.prototype._getItemLayoutPosition;
    e.prototype._getItemLayoutPosition = function (a) {
      return (a.rect = a.rect || new b.Rect()), i.call(this, a);
    };
    var j = e.prototype._manageStamp;
    return (
      (e.prototype._manageStamp = function () {
        (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
          (this.options.isOriginTop = this.isotope.options.isOriginTop),
          j.apply(this, arguments);
      }),
      (e.prototype.needsResizeLayout = function () {
        var a = c(this.element),
          b = this.size && a,
          d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
        return b && a[d] != this.size[d];
      }),
      e
    );
  });
/**
 * jQuery.share - social media sharing plugin
 * ---
 * @author Carol Skelly (http://in1.com)
 * @version 1.0
 * @license MIT license (http://opensource.org/licenses/mit-license.php)
 * ---
 */

!(function (t, e) {
  var s = e.document;
  (t.fn.share = function (i) {
    var r = {
        init: function (i) {
          this.share.settings = t.extend({}, this.share.defaults, i);
          var r = (this.share.settings, this.share.settings.networks),
            o = this.share.settings.theme,
            a = this.share.settings.orientation,
            u = this.share.settings.affix,
            h = this.share.settings.margin,
            l = this.share.settings.title || t(s).attr("title"),
            c = this.share.settings.urlToShare || t(location).attr("href"),
            p = "";
          return (
            t.each(t(s).find('meta[name="description"]'), function (e, s) {
              p = t(s).attr("content");
            }),
            this.each(function () {
              var s,
                i = t(this),
                m = i.attr("id"),
                d = encodeURIComponent(c),
                f = l.replace("|", ""),
                g = p.substring(0, 250);
              r.forEach(function (e) {
                (s = n.networkDefs[e].url),
                  (s = s
                    .replace("|u|", d)
                    .replace("|t|", f)
                    .replace("|d|", g)
                    .replace("|140|", f.substring(0, 130))),
                  t(
                    "<a href='" +
                      s +
                      "'   class='pop share-" +
                      o +
                      " share-" +
                      o +
                      "-" +
                      e +
                      "'></a>"
                  ).appendTo(i);
              }),
                t("#" + m + ".share-" + o).css("margin", h),
                "horizontal" != a
                  ? t("#" + m + " a.share-" + o).css("display", "block")
                  : t("#" + m + " a.share-" + o).css("display", "inline-block"),
                "undefined" != typeof u &&
                  (i.addClass("share-affix"),
                  -1 != u.indexOf("right")
                    ? (i.css("left", "auto"),
                      i.css("right", "0px"),
                      -1 != u.indexOf("center") && i.css("top", "40%"))
                    : -1 != u.indexOf("left center") && i.css("top", "40%"),
                  -1 != u.indexOf("bottom") &&
                    (i.css("bottom", "0px"),
                    i.css("top", "auto"),
                    -1 != u.indexOf("center") && i.css("left", "40%"))),
                t(".pop").click(function () {
                  return (
                    e.open(
                      t(this).attr("href"),
                      "t",
                      "toolbar=0,resizable=1,status=0,width=640,height=528"
                    ),
                    !1
                  );
                });
            })
          );
        },
      },
      n = {
        networkDefs: {
          facebook: { url: "http://www.facebook.com/share.php?u=|u|" },
          twitter: { url: "https://twitter.com/share?via=in1.com&text=|140|" },
          linkedin: {
            url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com",
          },
          in1: { url: "http://www.in1.com/cast?u=|u|", w: "490", h: "529" },
          tumblr: { url: "http://www.tumblr.com/share?v=3&u=|u|" },
          digg: { url: "http://digg.com/submit?url=|u|&title=|t|" },
          googleplus: {
            url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|",
          },
          reddit: { url: "http://reddit.com/submit?url=|u|" },
          pinterest: {
            url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|",
          },
          posterous: { url: "http://posterous.com/share?linkto=|u|&title=|t|" },
          stumbleupon: {
            url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|",
          },
          email: { url: "mailto:?subject=|t|" },
        },
      };
    return r[i]
      ? r[i].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof i && i
      ? void t.error('Method "' + i + '" does not exist in social plugin')
      : r.init.apply(this, arguments);
  }),
    (t.fn.share.defaults = {
      networks: ["in1", "facebook", "twitter", "linkedin"],
      theme: "icon",
      autoShow: !0,
      margin: "3px",
      orientation: "horizontal",
      useIn1: !0,
    }),
    (t.fn.share.settings = {});
})(jQuery, window);
/** video**/
"function" != typeof Object.create &&
  (Object.create = function (e) {
    function t() {}
    return (t.prototype = e), new t();
  }),
  (function (e, t, o) {
    var a = function (e) {
        var t = o.createElement("script"),
          a = o.getElementsByTagName("head")[0];
        (t.src = location.protocol + "//www.youtube.com/iframe_api"),
          a.appendChild(t),
          (a = null),
          (t = null),
          n(e);
      },
      n = function (o) {
        "undefined" == typeof YT && "undefined" == typeof t.loadingPlayer
          ? ((t.loadingPlayer = !0),
            (t.dfd = e.Deferred()),
            (t.onYouTubeIframeAPIReady = function () {
              (t.onYouTubeIframeAPIReady = null), t.dfd.resolve("John"), o();
            }))
          : t.dfd.done(function (e) {
              o();
            });
      };
    (YTPlayer = {
      player: null,
      defaults: {
        ratio: 16 / 9,
        videoId: "LSmgKRx5pBo",
        mute: !0,
        repeat: !0,
        width: e(t).width(),
        playButtonClass: "YTPlayer-play",
        pauseButtonClass: "YTPlayer-pause",
        muteButtonClass: "YTPlayer-mute",
        volumeUpClass: "YTPlayer-volume-up",
        volumeDownClass: "YTPlayer-volume-down",
        start: 0,
        pauseOnScroll: !1,
        fitToBackground: !0,
        playerVars: {
          modestbranding: 1,
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          wmode: "transparent",
          branding: 0,
          rel: 0,
          autohide: 0,
          origin: t.location.origin,
        },
        events: null,
      },
      init: function (o, n) {
        var i = this;
        return (
          (i.userOptions = n),
          (i.$body = e("body")),
          (i.$node = e(o)),
          (i.$window = e(t)),
          (i.defaults.events = {
            onReady: function (e) {
              i.onPlayerReady(e),
                i.options.pauseOnScroll && i.pauseOnScroll(),
                "function" == typeof i.options.callback &&
                  i.options.callback.call(this);
            },
            onStateChange: function (e) {
              1 === e.data
                ? i.$node.addClass("loaded")
                : 0 === e.data &&
                  i.options.repeat &&
                  i.player.seekTo(i.options.start);
            },
          }),
          (i.options = e.extend(!0, {}, i.defaults, i.userOptions)),
          (i.ID = new Date().getTime()),
          (i.holderID = "YTPlayer-ID-" + i.ID),
          i.options.fitToBackground
            ? i.createBackgroundVideo()
            : i.createContainerVideo(),
          i.$window.on("resize.YTplayer" + i.ID, function () {
            i.resize(i);
          }),
          a(i.onYouTubeIframeAPIReady.bind(i)),
          i.resize(i),
          i
        );
      },
      pauseOnScroll: function () {
        var e = this;
        e.$window.on("scroll.YTplayer" + e.ID, function () {
          var t = e.player.getPlayerState();
          1 === t && e.player.pauseVideo();
        }),
          e.$window.scrollStopped(function () {
            var t = e.player.getPlayerState();
            2 === t && e.player.playVideo();
          });
      },
      createContainerVideo: function () {
        var t = this,
          o = e(
            '<div id="ytplayer-container' +
              t.ID +
              '" >                                    <div id="' +
              t.holderID +
              '" class="ytplayer-player"></div>                                     </div>                                     <div id="ytplayer-shield"></div>'
          );
        t.$node.append(o), (t.$YTPlayerString = o), (o = null);
      },
      createBackgroundVideo: function () {
        var t = this,
          o = e(
            '<div id="ytplayer-container' +
              t.ID +
              '" class="ytplayer-container background">                                    <div id="' +
              t.holderID +
              '" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield"></div>'
          );
        t.$node.append(o), (t.$YTPlayerString = o), (o = null);
      },
      resize: function (t) {
        var o = e(".media-container");
        t.options.fitToBackground || (o = t.$node);
        var a,
          n,
          i = o.width(),
          r = o.height(),
          l = e("#" + t.holderID);
        i / t.options.ratio < r
          ? ((a = Math.ceil(r * t.options.ratio)),
            l
              .width(a)
              .height(r)
              .css({ left: (i - a) / 2, top: 0 }))
          : ((n = Math.ceil(i / t.options.ratio)),
            l.width(i).height(n).css({ left: 0, top: 0 })),
          (l = null),
          (o = null);
      },
      onYouTubeIframeAPIReady: function () {
        var e = this;
        e.player = new t.YT.Player(e.holderID, {
          width: e.options.width,
          height: Math.ceil(e.options.width / e.options.ratio),
          videoId: e.options.videoId,
          playerVars: e.options.playerVars,
          events: e.options.events,
        });
      },
      onPlayerReady: function (e) {
        this.options.mute && e.target.mute(), e.target.playVideo();
      },
      getPlayer: function () {
        return this.player;
      },
      destroy: function () {
        var o = this;
        o.$node
          .removeData("yt-init")
          .removeData("ytPlayer")
          .removeClass("loaded"),
          o.$YTPlayerString.remove(),
          e(t).off("resize.YTplayer" + o.ID),
          e(t).off("scroll.YTplayer" + o.ID),
          (o.$body = null),
          (o.$node = null),
          (o.$YTPlayerString = null),
          o.player.destroy(),
          (o.player = null);
      },
    }),
      (e.fn.scrollStopped = function (t) {
        var o = e(this),
          a = this;
        o.scroll(function () {
          o.data("scrollTimeout") && clearTimeout(o.data("scrollTimeout")),
            o.data("scrollTimeout", setTimeout(t, 250, a));
        });
      }),
      (e.fn.YTPlayer = function (t) {
        return this.each(function () {
          var o = this;
          e(o).data("yt-init", !0);
          var a = Object.create(YTPlayer);
          a.init(o, t), e.data(o, "ytPlayer", a);
        });
      });
  })(jQuery, window, document);
/**
 *  Parallax Scrolling Library
 *
 */
(function (e) {
  "function" === typeof define && define.amd
    ? define(["jquery"], e)
    : "undefined" !== typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  function W(a) {
    if (console && console.warn) console.warn("Scrollax: " + a);
    else throw "Scrollax: " + a;
  }
  function ka(a) {
    var g = !!("pageYOffset" in a);
    return {
      width: g
        ? window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        : a.offsetWidth,
      height: g
        ? window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        : a.offsetHeight,
      left: a[g ? "pageXOffset" : "scrollLeft"],
      top: a[g ? "pageYOffset" : "scrollTop"],
    };
  }
  function X(a) {
    return ((a = a.data("scrollax")) && eval("({" + a + "})")) || {};
  }
  function Y(a) {
    var g, c;
    return !!(
      a &&
      "object" === typeof a &&
      "object" === typeof a.window &&
      a.window == a &&
      a.setTimeout &&
      a.alert &&
      (g = a.document) &&
      "object" === typeof g &&
      (c = g.defaultView || g.parentWindow) &&
      "object" === typeof c &&
      c == a
    );
  }
  var v = Array.prototype,
    C = v.push,
    Z = v.splice,
    aa = Object.prototype.hasOwnProperty,
    la = /[-+]?\d+(\.\d+)?/g,
    ma =
      "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(
        " "
      ),
    ba = e(window),
    ca = e(document.body),
    da,
    ea,
    L,
    M,
    N,
    q = function (a, g, c) {
      function k() {
        O = fa ? ca.find(ga) : P.find(ga);
        x.length = 0;
        r = !!t.horizontal;
        O.each(na);
        d();
        t.performanceTrick && (F = fa ? ca : P);
        u("load");
        return f;
      }
      function l() {
        G && (G = clearTimeout(G));
        G = setTimeout(function () {
          f.reload();
        });
      }
      function d() {
        var ha = x.length;
        t.performanceTrick &&
          F &&
          (clearTimeout(ia),
          Q || (F.addClass("scrollax-performance"), (Q = !0)),
          (ia = setTimeout(function () {
            F.removeClass("scrollax-performance");
            Q = !1;
          }, 100)));
        if (ha) {
          H = ka(a);
          for (var c = 0; c < ha; c++)
            (I = x[c]),
              (y = L(I.element, a)),
              0 > y[r ? "right" : "bottom"] ||
                y[r ? "left" : "top"] > H[r ? "width" : "height"] ||
                ((ja = I.options),
                (R = ja.offset || t.offset || 0),
                (J = y[r ? "right" : "bottom"]),
                (z = y[r ? "width" : "height"]),
                (A = (z - J + R) / z),
                0 > A &&
                  ((J = y[r ? "left" : "top"]),
                  (z = H[r ? "width" : "height"]),
                  (A = -1 + (z - J + R) / z)),
                1 < A || -1 > A || b(I, A, r));
          u("scroll", H);
        }
      }
      function b(a, b) {
        S = a.parallaxElements;
        var c = S.length;
        if (c)
          for (var f = 0; f < c; f++) {
            T = S[f];
            var g = (oa = T.element),
              d = b;
            U =
              T.properties ||
              (r ? { translateX: "100%" } : { translateY: "100%" });
            D = "";
            for (B in U) {
              n = U[B];
              if ("number" === typeof n) n *= d;
              else if ("string" === typeof n)
                for (K = n.match(la), m = 0, E = K.length; m < E; m++)
                  n = n.replace(K[m], parseFloat(K[m] * d));
              if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";
              else {
                var k = g.style,
                  l = B,
                  h;
                "opacity" === B
                  ? ((h = 0 > d ? 1 + n : 1 - n),
                    (h = 0 > h ? 0 : 1 < h ? 1 : h))
                  : (h = n);
                k[l] = h;
              }
            }
            D && (g.style[da] = ea + D);
          }
      }
      function pa(a) {
        return "undefined" !== typeof a
          ? ("number" !== typeof a && "string" !== typeof a) ||
            "" === a ||
            isNaN(a)
            ? O.index(a)
            : 0 <= a && a < x.length
            ? a
            : -1
          : -1;
      }
      function u(a, b) {
        if (h[a]) {
          E = h[a].length;
          for (m = V.length = 0; m < E; m++) C.call(V, h[a][m]);
          for (m = 0; m < E; m++) V[m].call(f, a, b);
        }
      }
      function p(a, b) {
        for (var c = 0, f = h[a].length; c < f; c++)
          if (h[a][c] === b) return c;
        return -1;
      }
      var f = this,
        P = (a && e(a).eq(0)) || ba,
        w = q.instances,
        v = null;
      a = P[0];
      e.each(w, function (b, c) {
        b && b.frame === a && (v = !0);
      });
      if (!a || v)
        v
          ? W("Scrollax: Scrollax has been initialized for this frame!")
          : W("Scrollax: Frame is not available!");
      else {
        var t = e.extend({}, q.defaults, g),
          x = [],
          O = null,
          ga = t.parentSelector || "[data-scrollax-parent]",
          qa = t.elementsSelector || "[data-scrollax]",
          h = {},
          V = [],
          G,
          fa = Y(a),
          m,
          E,
          F,
          ia,
          Q,
          H,
          r,
          R,
          y,
          I,
          ja,
          A,
          J,
          z,
          S,
          T,
          oa,
          U,
          B,
          n,
          D,
          K;
        f.frame = a;
        f.options = t;
        f.parents = x;
        f.initialized = !1;
        f.reload = k;
        var na = function (a, b) {
          var c = e(b),
            f = X(e(b)),
            d = {};
          d.element = b;
          d.options = f;
          d.parallaxElements = [];
          c.find(qa).each(function (a, b) {
            var c = X(e(b));
            c.element = b;
            C.call(d.parallaxElements, c);
          });
          C.call(x, d);
        };
        f.scroll = d;
        f.getIndex = pa;
        f.one = function (a, b) {
          function c() {
            b.apply(f, arguments);
            f.off(a, c);
          }
          f.on(a, c);
          return f;
        };
        f.on = function (a, b) {
          if ("object" === typeof a)
            for (var c in a) {
              if (aa.call(a, c)) f.on(c, a[c]);
            }
          else if ("function" === typeof b) {
            c = a.split(" ");
            for (var d = 0, g = c.length; d < g; d++)
              (h[c[d]] = h[c[d]] || []),
                -1 === p(c[d], b) && C.call(h[c[d]], b);
          } else if ("array" === typeof b)
            for (c = 0, d = b.length; c < d; c++) f.on(a, b[c]);
          return f;
        };
        f.off = function (a, c) {
          if (c instanceof Array)
            for (var b = 0, d = c.length; b < d; b++) f.off(a, c[b]);
          else
            for (var b = a.split(" "), d = 0, g = b.length; d < g; d++)
              if (((h[b[d]] = h[b[d]] || []), "undefined" === typeof c))
                h[b[d]].length = 0;
              else {
                var k = p(b[d], c);
                -1 !== k && Z.call(h[b[d]], k, 1);
              }
          return f;
        };
        f.set = function (a, b) {
          e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
          k();
          return f;
        };
        f.destroy = function () {
          N(window, "resize", l);
          N(a, "scroll", d);
          e.each(w, function (b, c) {
            b && b.frame === a && Z.call(q.instances, c, 1);
          });
          x.length = 0;
          f.initialized = !1;
          u("destroy");
          return f;
        };
        f.init = function () {
          if (!f.initialized)
            return (
              f.on(c),
              k(),
              M(window, "resize", l),
              M(a, "scroll", d),
              C.call(q.instances, f),
              (f.initialized = !0),
              u("initialized"),
              f
            );
        };
      }
    };
  q.instances = [];
  (function () {
    var a, g, c, k, l, d, b, e;
    L = function (u, p) {
      g = u.ownerDocument || u;
      c = g.documentElement;
      k = Y(p) ? p : g.defaultView || window;
      p = p && p !== g ? p : c;
      l = (k.pageYOffset || c.scrollTop) - c.clientTop;
      d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
      b = { top: 0, left: 0 };
      if (u && u.getBoundingClientRect) {
        var f = {},
          q = u.getBoundingClientRect();
        for (a in q) f[a] = q[a];
        b = f;
        b.width = b.right - b.left;
        b.height = b.bottom - b.top;
      } else return null;
      if (p === k) return b;
      b.top += l;
      b.left += d;
      b.right += d;
      b.bottom += l;
      if (p === c) return b;
      e = L(p);
      b.left -= e.left;
      b.right -= e.left;
      b.top -= e.top;
      b.bottom -= e.top;
      return b;
    };
  })();
  (function () {
    function a() {
      this.returnValue = !1;
    }
    function g() {
      this.cancelBubble = !0;
    }
    M = window.addEventListener
      ? function (a, g, e, d) {
          a.addEventListener(g, e, d || !1);
          return e;
        }
      : function (c, e, l) {
          var d = e + l;
          c[d] =
            c[d] ||
            function () {
              var b = window.event;
              b.target = b.srcElement;
              b.preventDefault = a;
              b.stopPropagation = g;
              l.call(c, b);
            };
          c.attachEvent("on" + e, c[d]);
          return l;
        };
    N = window.removeEventListener
      ? function (a, g, e, d) {
          a.removeEventListener(g, e, d || !1);
          return e;
        }
      : function (a, g, e) {
          var d = g + e;
          a.detachEvent("on" + g, a[d]);
          try {
            delete a[d];
          } catch (b) {
            a[d] = void 0;
          }
          return e;
        };
  })();
  (function () {
    function a(a) {
      for (var e = 0, d = g.length; e < d; e++) {
        var b = g[e] ? g[e] + a.charAt(0).toUpperCase() + a.slice(1) : a;
        if (null != c.style[b]) return b;
      }
    }
    var g = ["", "webkit", "moz", "ms", "o"],
      c = document.createElement("div");
    da = a("transform");
    ea = a("perspective") ? "translateZ(0) " : "";
  })();
  q.defaults = {
    horizontal: !1,
    offset: 0,
    parentSelector: null,
    elementsSelector: null,
    performanceTrick: !1,
  };
  window.Scrollax = q;
  e.fn.Scrollax = function (a, g) {
    var c, k;
    if (!e.isPlainObject(a)) {
      if ("string" === typeof a || !1 === a)
        (c = !1 === a ? "destroy" : a), (k = slice.call(arguments, 1));
      a = {};
    }
    return this.each(function (l, d) {
      var b = e.data(d, "scrollax");
      b || c
        ? b && c && b[c] && b[c].apply(b, k)
        : e.data(d, "scrollax", new q(d, a, g).init());
    });
  };
  e.Scrollax = function (a, e) {
    ba.Scrollax(a, e);
  };
  var v = document.head || document.getElementsByTagName("head")[0],
    w = document.createElement("style");
  w.type = "text/css";
  w.styleSheet
    ? (w.styleSheet.cssText =
        ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };")
    : w.appendChild(
        document.createTextNode(
          ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"
        )
      );
  v.appendChild(w);
  return q;
});
// appear
(function ($) {
  $.fn.appear = function (f, o) {
    var s = $.extend({ one: true }, o);
    return this.each(function () {
      var t = $(this);
      t.appeared = false;
      if (!f) {
        t.trigger("appear", s.data);
        return;
      }
      var w = $(window);
      var c = function () {
        if (!t.is(":visible")) {
          t.appeared = false;
          return;
        }
        var a = w.scrollLeft();
        var b = w.scrollTop();
        var o = t.offset();
        var x = o.left;
        var y = o.top;
        if (
          y + t.height() >= b &&
          y <= b + w.height() &&
          x + t.width() >= a &&
          x <= a + w.width()
        ) {
          if (!t.appeared) t.trigger("appear", s.data);
        } else {
          t.appeared = false;
        }
      };
      var m = function () {
        t.appeared = true;
        if (s.one) {
          w.unbind("scroll", c);
          var i = $.inArray(c, $.fn.appear.checks);
          if (i >= 0) $.fn.appear.checks.splice(i, 1);
        }
        f.apply(this, arguments);
      };
      if (s.one) t.one("appear", s.data, m);
      else t.bind("appear", s.data, m);
      w.scroll(c);
      $.fn.appear.checks.push(c);
      c();
    });
  };
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function () {
      var l = $.fn.appear.checks.length;
      if (l > 0) while (l--) $.fn.appear.checks[l]();
    },
    run: function () {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    },
  });
  $.each(
    [
      "append",
      "prepend",
      "after",
      "before",
      "attr",
      "removeAttr",
      "addClass",
      "removeClass",
      "toggleClass",
      "remove",
      "css",
      "show",
      "hide",
    ],
    function (i, n) {
      var u = $.fn[n];
      if (u) {
        $.fn[n] = function () {
          var r = u.apply(this, arguments);
          $.fn.appear.run();
          return r;
        };
      }
    }
  );
})(jQuery);

/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */

// Utility
if (typeof Object.create !== "function") {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
(function ($, window, document, undefined) {
  "use strict";
  var SinglePageNav = {
    init: function (options, container) {
      this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
      this.container = container;
      this.$container = $(container);
      this.$links = this.$container.find("a");
      if (this.options.filter !== "") {
        this.$links = this.$links.filter(this.options.filter);
      }
      this.$window = $(window);
      this.$htmlbody = $("html, body");
      this.$links.on("click.singlePageNav", $.proxy(this.handleClick, this));
      this.didScroll = false;
      this.checkPosition();
      this.setTimer();
    },
    handleClick: function (e) {
      var self = this,
        link = e.currentTarget,
        $elem = $(link.hash);
      e.preventDefault();
      if ($elem.length) {
        self.clearTimer();
        if (typeof self.options.beforeStart === "function") {
          self.options.beforeStart();
        }
        self.setActiveLink(link.hash);
        self.scrollTo($elem, function () {
          if (self.options.updateHash && history.pushState) {
            history.pushState(null, null, link.hash);
          }
          self.setTimer();
          if (typeof self.options.onComplete === "function") {
            self.options.onComplete();
          }
        });
      }
    },
    scrollTo: function ($elem, callback) {
      var self = this;
      var target = self.getCoords($elem).top;
      var called = false;
      self.$htmlbody.stop().animate(
        { scrollTop: target },
        {
          duration: self.options.speed,
          easing: self.options.easing,
          complete: function () {
            if (typeof callback === "function" && !called) {
              callback();
            }
            called = true;
          },
        }
      );
    },
    setTimer: function () {
      var self = this;
      self.$window.on("scroll.singlePageNav", function () {
        self.didScroll = true;
      });
      self.timer = setInterval(function () {
        if (self.didScroll) {
          self.didScroll = false;
          self.checkPosition();
        }
      }, 250);
    },
    clearTimer: function () {
      clearInterval(this.timer);
      this.$window.off("scroll.singlePageNav");
      this.didScroll = false;
    },
    checkPosition: function () {
      var scrollPos = this.$window.scrollTop();
      var currentSection = this.getCurrentSection(scrollPos);
      if (currentSection !== null) {
        this.setActiveLink(currentSection);
      }
    },
    getCoords: function ($elem) {
      return { top: Math.round($elem.offset().top) - this.options.offset };
    },
    setActiveLink: function (href) {
      var $activeLink = this.$container.find("a[href$='" + href + "']");
      if (!$activeLink.hasClass(this.options.currentClass)) {
        this.$links.removeClass(this.options.currentClass);
        $activeLink.addClass(this.options.currentClass);
        if ($(".scroll-nav  a").hasClass("act-link"))
          $(".scroll-nav  a.act-link").each(function () {
            var a = $(this).data("bgscr"),
              b = $(this).data("bgtex");
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
              $(".bg-title span").html(b);
            }
            setTimeout(function () {}, 700);
          });
      }
    },
    getCurrentSection: function (scrollPos) {
      var i, hash, coords, section;
      for (i = 0; i < this.$links.length; i++) {
        hash = this.$links[i].hash;
        if ($(hash).length) {
          coords = this.getCoords($(hash));
          if (scrollPos >= coords.top - this.options.threshold) {
            section = hash;
          }
        }
      }
      return section || (this.$links.length === 0 ? null : this.$links[0].hash);
    },
  };
  $.fn.singlePageNav = function (options) {
    return this.each(function () {
      var singlePageNav = Object.create(SinglePageNav);
      singlePageNav.init(options, this);
    });
  };
  $.fn.singlePageNav.defaults = {
    offset: 0,
    threshold: 120,
    speed: 400,
    currentClass: "current",
    easing: "swing",
    updateHash: false,
    filter: "",
    onComplete: false,
    beforeStart: false,
  };
})(jQuery, window, document);
// ScrollToFixed
(function (a) {
  a.isScrollToFixed = function (b) {
    return !!a(b).data("ScrollToFixed");
  };
  a.ScrollToFixed = function (d, i) {
    var l = this;
    l.$el = a(d);
    l.el = d;
    l.$el.data("ScrollToFixed", l);
    var c = false;
    var G = l.$el;
    var H;
    var E;
    var e;
    var y;
    var D = 0;
    var q = 0;
    var j = -1;
    var f = -1;
    var t = null;
    var z;
    var g;
    function u() {
      G.trigger("preUnfixed.ScrollToFixed");
      k();
      G.trigger("unfixed.ScrollToFixed");
      f = -1;
      D = G.offset().top;
      q = G.offset().left;
      if (l.options.offsets) {
        q += G.offset().left - G.position().left;
      }
      if (j == -1) {
        j = q;
      }
      H = G.css("position");
      c = true;
      if (l.options.bottom != -1) {
        G.trigger("preFixed.ScrollToFixed");
        w();
        G.trigger("fixed.ScrollToFixed");
      }
    }
    function n() {
      var I = l.options.limit;
      if (!I) {
        return 0;
      }
      if (typeof I === "function") {
        return I.apply(G);
      }
      return I;
    }
    function p() {
      return H === "fixed";
    }
    function x() {
      return H === "absolute";
    }
    function h() {
      return !(p() || x());
    }
    function w() {
      if (!p()) {
        t.css({
          display: G.css("display"),
          width: G.outerWidth(true),
          height: G.outerHeight(true),
          float: G.css("float"),
        });
        cssOptions = {
          "z-index": l.options.zIndex,
          position: "fixed",
          top: l.options.bottom == -1 ? s() : "",
          bottom: l.options.bottom == -1 ? "" : l.options.bottom,
          "margin-left": "0px",
        };
        if (!l.options.dontSetWidth) {
          cssOptions.width = G.width();
        }
        G.css(cssOptions);
        G.addClass(l.options.baseClassName);
        if (l.options.className) {
          G.addClass(l.options.className);
        }
        H = "fixed";
      }
    }
    function b() {
      var J = n();
      var I = q;
      if (l.options.removeOffsets) {
        I = "";
        J = J - D;
      }
      cssOptions = {
        position: "absolute",
        top: J,
        left: I,
        "margin-left": "0px",
        bottom: "",
      };
      if (!l.options.dontSetWidth) {
        cssOptions.width = G.width();
      }
      G.css(cssOptions);
      H = "absolute";
    }
    function k() {
      if (!h()) {
        f = -1;
        t.css("display", "none");
        G.css({
          "z-index": y,
          width: "",
          position: E,
          left: "",
          top: e,
          "margin-left": "",
        });
        G.removeClass("scroll-to-fixed-fixed");
        if (l.options.className) {
          G.removeClass(l.options.className);
        }
        H = null;
      }
    }
    function v(I) {
      if (I != f) {
        G.css("left", q - I);
        f = I;
      }
    }
    function s() {
      var I = l.options.marginTop;
      if (!I) {
        return 0;
      }
      if (typeof I === "function") {
        return I.apply(G);
      }
      return I;
    }
    function A() {
      if (!a.isScrollToFixed(G)) {
        return;
      }
      var K = c;
      if (!c) {
        u();
      } else {
        if (h()) {
          D = G.offset().top;
          q = G.offset().left;
        }
      }
      var I = a(window).scrollLeft();
      var L = a(window).scrollTop();
      var J = n();
      if (l.options.minWidth && a(window).width() < l.options.minWidth) {
        if (!h() || !K) {
          o();
          G.trigger("preUnfixed.ScrollToFixed");
          k();
          G.trigger("unfixed.ScrollToFixed");
        }
      } else {
        if (l.options.maxWidth && a(window).width() > l.options.maxWidth) {
          if (!h() || !K) {
            o();
            G.trigger("preUnfixed.ScrollToFixed");
            k();
            G.trigger("unfixed.ScrollToFixed");
          }
        } else {
          if (l.options.bottom == -1) {
            if (J > 0 && L >= J - s()) {
              if (!x() || !K) {
                o();
                G.trigger("preAbsolute.ScrollToFixed");
                b();
                G.trigger("unfixed.ScrollToFixed");
              }
            } else {
              if (L >= D - s()) {
                if (!p() || !K) {
                  o();
                  G.trigger("preFixed.ScrollToFixed");
                  w();
                  f = -1;
                  G.trigger("fixed.ScrollToFixed");
                }
                v(I);
              } else {
                if (!h() || !K) {
                  o();
                  G.trigger("preUnfixed.ScrollToFixed");
                  k();
                  G.trigger("unfixed.ScrollToFixed");
                }
              }
            }
          } else {
            if (J > 0) {
              if (
                L + a(window).height() - G.outerHeight(true) >=
                J - (s() || -m())
              ) {
                if (p()) {
                  o();
                  G.trigger("preUnfixed.ScrollToFixed");
                  if (E === "absolute") {
                    b();
                  } else {
                    k();
                  }
                  G.trigger("unfixed.ScrollToFixed");
                }
              } else {
                if (!p()) {
                  o();
                  G.trigger("preFixed.ScrollToFixed");
                  w();
                }
                v(I);
                G.trigger("fixed.ScrollToFixed");
              }
            } else {
              v(I);
            }
          }
        }
      }
    }
    function m() {
      if (!l.options.bottom) {
        return 0;
      }
      return l.options.bottom;
    }
    function o() {
      var I = G.css("position");
      if (I == "absolute") {
        G.trigger("postAbsolute.ScrollToFixed");
      } else {
        if (I == "fixed") {
          G.trigger("postFixed.ScrollToFixed");
        } else {
          G.trigger("postUnfixed.ScrollToFixed");
        }
      }
    }
    var C = function (I) {
      if (G.is(":visible")) {
        c = false;
        A();
      }
    };
    var F = function (I) {
      !!window.requestAnimationFrame ? requestAnimationFrame(A) : A();
    };
    var B = function () {
      var J = document.body;
      if (document.createElement && J && J.appendChild && J.removeChild) {
        var L = document.createElement("div");
        if (!L.getBoundingClientRect) {
          return null;
        }
        L.innerHTML = "x";
        L.style.cssText = "position:fixed;top:100px;";
        J.appendChild(L);
        var M = J.style.height,
          N = J.scrollTop;
        J.style.height = "3000px";
        J.scrollTop = 500;
        var I = L.getBoundingClientRect().top;
        J.style.height = M;
        var K = I === 100;
        J.removeChild(L);
        J.scrollTop = N;
        return K;
      }
      return null;
    };
    var r = function (I) {
      I = I || window.event;
      if (I.preventDefault) {
        I.preventDefault();
      }
      I.returnValue = false;
    };
    l.init = function () {
      l.options = a.extend({}, a.ScrollToFixed.defaultOptions, i);
      y = G.css("z-index");
      l.$el.css("z-index", l.options.zIndex);
      t = a("<div />");
      H = G.css("position");
      E = G.css("position");
      e = G.css("top");
      if (h()) {
        l.$el.after(t);
      }
      a(window).bind("resize.ScrollToFixed", C);
      a(window).bind("scroll.ScrollToFixed", F);
      if ("ontouchmove" in window) {
        a(window).bind("touchmove.ScrollToFixed", A);
      }
      if (l.options.preFixed) {
        G.bind("preFixed.ScrollToFixed", l.options.preFixed);
      }
      if (l.options.postFixed) {
        G.bind("postFixed.ScrollToFixed", l.options.postFixed);
      }
      if (l.options.preUnfixed) {
        G.bind("preUnfixed.ScrollToFixed", l.options.preUnfixed);
      }
      if (l.options.postUnfixed) {
        G.bind("postUnfixed.ScrollToFixed", l.options.postUnfixed);
      }
      if (l.options.preAbsolute) {
        G.bind("preAbsolute.ScrollToFixed", l.options.preAbsolute);
      }
      if (l.options.postAbsolute) {
        G.bind("postAbsolute.ScrollToFixed", l.options.postAbsolute);
      }
      if (l.options.fixed) {
        G.bind("fixed.ScrollToFixed", l.options.fixed);
      }
      if (l.options.unfixed) {
        G.bind("unfixed.ScrollToFixed", l.options.unfixed);
      }
      if (l.options.spacerClass) {
        t.addClass(l.options.spacerClass);
      }
      G.bind("resize.ScrollToFixed", function () {
        t.height(G.height());
      });
      G.bind("scroll.ScrollToFixed", function () {
        G.trigger("preUnfixed.ScrollToFixed");
        k();
        G.trigger("unfixed.ScrollToFixed");
        A();
      });
      G.bind("detach.ScrollToFixed", function (I) {
        r(I);
        G.trigger("preUnfixed.ScrollToFixed");
        k();
        G.trigger("unfixed.ScrollToFixed");
        a(window).unbind("resize.ScrollToFixed", C);
        a(window).unbind("scroll.ScrollToFixed", F);
        G.unbind(".ScrollToFixed");
        t.remove();
        l.$el.removeData("ScrollToFixed");
      });
      C();
    };
    l.init();
  };
  a.ScrollToFixed.defaultOptions = {
    marginTop: 0,
    limit: 0,
    bottom: -1,
    zIndex: 1000,
    baseClassName: "scroll-to-fixed-fixed",
  };
  a.fn.scrollToFixed = function (b) {
    return this.each(function () {
      new a.ScrollToFixed(this, b);
    });
  };
})(jQuery);
// count
(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};
    return $(this).each(function () {
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("num"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals"),
        },
        options
      );
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};
      $self.data("countTo", data);
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      render(value);
      function updateTimer() {
        value += increment;
        loopCount++;
        render(value);
        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }
        if (loopCount >= loops) {
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;
          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.text(formattedValue);
      }
    });
  };
  $.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 2500,
    refreshInterval: 100,
    decimals: 0,
    formatter: formatter,
    onUpdate: null,
    onComplete: null,
  };
  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

/*********************************************************************
 *  #### Twitter Post Fetcher v17.0.3 ####
 *  Coded by Jason Mayes 2015. A present to all the developers out there.
 *  www.jasonmayes.com
 *  Please keep this disclaimer with my code if you use it. Thanks. :-)
 *  Got feedback or questions, ask here:
 *  http://www.jasonmayes.com/projects/twitterApi/
 *  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
 *  Updates will be posted to this site.
 *********************************************************************/
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    factory();
  }
})(this, function () {
  var domNode = "";
  var maxTweets = 20;
  var parseLinks = true;
  var queue = [];
  var inProgress = false;
  var printTime = true;
  var printUser = true;
  var formatterFunction = null;
  var supportsClassName = true;
  var showRts = true;
  var customCallbackFunction = null;
  var showInteractionLinks = true;
  var showImages = false;
  var useEmoji = false;
  var targetBlank = true;
  var lang = "en";
  var permalinks = true;
  var dataOnly = false;
  var script = null;
  var scriptAdded = false;
  function handleTweets(tweets) {
    if (customCallbackFunction === null) {
      var x = tweets.length;
      var n = 0;
      var element = document.getElementById(domNode);
      var html = "<ul>";
      while (n < x) {
        html += "<li>" + tweets[n] + "</li>";
        n++;
      }
      html += "</ul>";
      element.innerHTML = html;
    } else {
      customCallbackFunction(tweets);
    }
  }
  function strip(data) {
    return data
      .replace(/<b[^>]*>(.*?)<\/b>/gi, function (a, s) {
        return s;
      })
      .replace(
        /class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,
        ""
      );
  }
  function targetLinksToNewWindow(el) {
    var links = el.getElementsByTagName("a");
    for (var i = links.length - 1; i >= 0; i--) {
      links[i].setAttribute("target", "_blank");
    }
  }
  function getElementsByClassName(node, classname) {
    var a = [];
    var regex = new RegExp("(^| )" + classname + "( |$)");
    var elems = node.getElementsByTagName("*");
    for (var i = 0, j = elems.length; i < j; i++) {
      if (regex.test(elems[i].className)) {
        a.push(elems[i]);
      }
    }
    return a;
  }
  function extractImageUrl(image_data) {
    if (
      image_data !== undefined &&
      image_data.innerHTML.indexOf("data-image") >= 0
    ) {
      var data_src = image_data.innerHTML.match(
        /data-image=\"([A-z0-9]+:\/\/[A-z0-9]+\.[A-z0-9]+\.[A-z0-9]+\/[A-z0-9]+\/[A-z0-9\-]+)/i
      )[1];
      return decodeURIComponent(data_src) + ".jpg";
    }
  }
  var twitterFetcher = {
    fetch: function (config) {
      if (config.maxTweets === undefined) {
        config.maxTweets = 20;
      }
      if (config.enableLinks === undefined) {
        config.enableLinks = true;
      }
      if (config.showUser === undefined) {
        config.showUser = true;
      }
      if (config.showTime === undefined) {
        config.showTime = true;
      }
      if (config.dateFunction === undefined) {
        config.dateFunction = "default";
      }
      if (config.showRetweet === undefined) {
        config.showRetweet = true;
      }
      if (config.customCallback === undefined) {
        config.customCallback = null;
      }
      if (config.showInteraction === undefined) {
        config.showInteraction = true;
      }
      if (config.showImages === undefined) {
        config.showImages = false;
      }
      if (config.useEmoji === undefined) {
        config.useEmoji = false;
      }
      if (config.linksInNewWindow === undefined) {
        config.linksInNewWindow = true;
      }
      if (config.showPermalinks === undefined) {
        config.showPermalinks = true;
      }
      if (config.dataOnly === undefined) {
        config.dataOnly = false;
      }
      if (inProgress) {
        queue.push(config);
      } else {
        inProgress = true;
        domNode = config.domId;
        maxTweets = config.maxTweets;
        parseLinks = config.enableLinks;
        printUser = config.showUser;
        printTime = config.showTime;
        showRts = config.showRetweet;
        formatterFunction = config.dateFunction;
        customCallbackFunction = config.customCallback;
        showInteractionLinks = config.showInteraction;
        showImages = config.showImages;
        useEmoji = config.useEmoji;
        targetBlank = config.linksInNewWindow;
        permalinks = config.showPermalinks;
        dataOnly = config.dataOnly;
        var head = document.getElementsByTagName("head")[0];
        if (script !== null) {
          head.removeChild(script);
        }
        script = document.createElement("script");
        script.type = "text/javascript";
        if (config.list !== undefined) {
          script.src =
            "https://syndication.twitter.com/timeline/list?" +
            "callback=__twttrf.callback&dnt=false&list_slug=" +
            config.list.listSlug +
            "&screen_name=" +
            config.list.screenName +
            "&suppress_response_codes=true&lang=" +
            (config.lang || lang) +
            "&rnd=" +
            Math.random();
        } else if (config.profile !== undefined) {
          script.src =
            "https://syndication.twitter.com/timeline/profile?" +
            "callback=__twttrf.callback&dnt=false" +
            "&screen_name=" +
            config.profile.screenName +
            "&suppress_response_codes=true&lang=" +
            (config.lang || lang) +
            "&rnd=" +
            Math.random();
        } else if (config.likes !== undefined) {
          script.src =
            "https://syndication.twitter.com/timeline/likes?" +
            "callback=__twttrf.callback&dnt=false" +
            "&screen_name=" +
            config.likes.screenName +
            "&suppress_response_codes=true&lang=" +
            (config.lang || lang) +
            "&rnd=" +
            Math.random();
        } else {
          script.src =
            "https://cdn.syndication.twimg.com/widgets/timelines/" +
            config.id +
            "?&lang=" +
            (config.lang || lang) +
            "&callback=__twttrf.callback&" +
            "suppress_response_codes=true&rnd=" +
            Math.random();
        }
        head.appendChild(script);
      }
    },
    callback: function (data) {
      if (data === undefined || data.body === undefined) {
        inProgress = false;
        if (queue.length > 0) {
          twitterFetcher.fetch(queue[0]);
          queue.splice(0, 1);
        }
        return;
      }
      if (!useEmoji) {
        data.body = data.body.replace(
          /(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,
          ""
        );
      }
      if (!showImages) {
        data.body = data.body.replace(
          /(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,
          ""
        );
      }
      if (!printUser) {
        data.body = data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, "");
      }
      var div = document.createElement("div");
      div.innerHTML = data.body;
      if (typeof div.getElementsByClassName === "undefined") {
        supportsClassName = false;
      }
      function swapDataSrc(element) {
        var avatarImg = "";
        return element;
      }
      var tweets = [];
      var authors = [];
      var times = [];
      var images = [];
      var rts = [];
      var tids = [];
      var permalinksURL = [];
      var x = 0;
      if (supportsClassName) {
        var tmp = div.getElementsByClassName("timeline-Tweet");
        while (x < tmp.length) {
          if (
            tmp[x].getElementsByClassName("timeline-Tweet-retweetCredit")
              .length > 0
          ) {
            rts.push(true);
          } else {
            rts.push(false);
          }
          if (!rts[x] || (rts[x] && showRts)) {
            tweets.push(
              tmp[x].getElementsByClassName("timeline-Tweet-text")[0]
            );
            tids.push(tmp[x].getAttribute("data-tweet-id"));
            if (printUser) {
              authors.push(
                swapDataSrc(
                  tmp[x].getElementsByClassName("timeline-Tweet-author")[0]
                )
              );
            }
            times.push(tmp[x].getElementsByClassName("dt-updated")[0]);
            permalinksURL.push(
              tmp[x].getElementsByClassName("timeline-Tweet-timestamp")[0]
            );
            if (
              tmp[x].getElementsByClassName("timeline-Tweet-media")[0] !==
              undefined
            ) {
              images.push(
                tmp[x].getElementsByClassName("timeline-Tweet-media")[0]
              );
            } else {
              images.push(undefined);
            }
          }
          x++;
        }
      } else {
        var tmp = getElementsByClassName(div, "timeline-Tweet");
        while (x < tmp.length) {
          if (
            getElementsByClassName(tmp[x], "timeline-Tweet-retweetCredit")
              .length > 0
          ) {
            rts.push(true);
          } else {
            rts.push(false);
          }
          if (!rts[x] || (rts[x] && showRts)) {
            tweets.push(
              getElementsByClassName(tmp[x], "timeline-Tweet-text")[0]
            );
            tids.push(tmp[x].getAttribute("data-tweet-id"));
            if (printUser) {
              authors.push(
                swapDataSrc(
                  getElementsByClassName(tmp[x], "timeline-Tweet-author")[0]
                )
              );
            }
            times.push(getElementsByClassName(tmp[x], "dt-updated")[0]);
            permalinksURL.push(
              getElementsByClassName(tmp[x], "timeline-Tweet-timestamp")[0]
            );
            if (
              getElementsByClassName(tmp[x], "timeline-Tweet-media")[0] !==
              undefined
            ) {
              images.push(
                getElementsByClassName(tmp[x], "timeline-Tweet-media")[0]
              );
            } else {
              images.push(undefined);
            }
          }
          x++;
        }
      }
      if (tweets.length > maxTweets) {
        tweets.splice(maxTweets, tweets.length - maxTweets);
        authors.splice(maxTweets, authors.length - maxTweets);
        times.splice(maxTweets, times.length - maxTweets);
        rts.splice(maxTweets, rts.length - maxTweets);
        images.splice(maxTweets, images.length - maxTweets);
        permalinksURL.splice(maxTweets, permalinksURL.length - maxTweets);
      }
      var arrayTweets = [];
      var x = tweets.length;
      var n = 0;
      if (dataOnly) {
        while (n < x) {
          arrayTweets.push({
            tweet: tweets[n].innerHTML,
            author: authors[n] ? authors[n].innerHTML : "Unknown Author",
            author_data: {
              profile_url: authors[n]
                ? authors[n].querySelector('[data-scribe="element:user_link"]')
                    .href
                : null,
              profile_image: authors[n]
                ? authors[n]
                    .querySelector('[data-scribe="element:avatar"]')
                    .getAttribute("data-src-1x")
                : null,
              profile_image_2x: authors[n]
                ? authors[n]
                    .querySelector('[data-scribe="element:avatar"]')
                    .getAttribute("data-src-2x")
                : null,
              screen_name: authors[n]
                ? authors[n].querySelector(
                    '[data-scribe="element:screen_name"]'
                  ).title
                : null,
              name: authors[n]
                ? authors[n].querySelector('[data-scribe="element:name"]').title
                : null,
            },
            time: times[n].textContent,
            timestamp: times[n]
              .getAttribute("datetime")
              .replace("+0000", "Z")
              .replace(/([\+\-])(\d\d)(\d\d)/, "$1$2:$3"),
            image: extractImageUrl(images[n]),
            rt: rts[n],
            tid: tids[n],
            permalinkURL:
              permalinksURL[n] === undefined ? "" : permalinksURL[n].href,
          });
          n++;
        }
      } else {
        while (n < x) {
          if (typeof formatterFunction !== "string") {
            var datetimeText = times[n].getAttribute("datetime");
            var newDate = new Date(
              times[n]
                .getAttribute("datetime")
                .replace(/-/g, "/")
                .replace("T", " ")
                .split("+")[0]
            );
            var dateString = formatterFunction(newDate, datetimeText);
            times[n].setAttribute("aria-label", dateString);
            if (tweets[n].textContent) {
              if (supportsClassName) {
                times[n].textContent = dateString;
              } else {
                var h = document.createElement("p");
                var t = document.createTextNode(dateString);
                h.appendChild(t);
                h.setAttribute("aria-label", dateString);
                times[n] = h;
              }
            } else {
              times[n].textContent = dateString;
            }
          }
          var op = "";
          if (parseLinks) {
            if (targetBlank) {
              targetLinksToNewWindow(tweets[n]);
              if (printUser) {
                targetLinksToNewWindow(authors[n]);
              }
            }
            if (printUser) {
              op +=
                '<div class="user">' + strip(authors[n].innerHTML) + "</div>";
            }
            op += '<p class="tweet">' + strip(tweets[n].innerHTML) + "</p>";
            if (printTime) {
              if (permalinks) {
                op +=
                  '<p class="timePosted"><a href="' +
                  permalinksURL[n] +
                  '">' +
                  times[n].getAttribute("aria-label") +
                  "</a></p>";
              } else {
                op +=
                  '<p class="timePosted">' +
                  times[n].getAttribute("aria-label") +
                  "</p>";
              }
            }
          } else {
            if (tweets[n].textContent) {
              if (printUser) {
                op += '<p class="user">' + authors[n].textContent + "</p>";
              }
              op += '<p class="tweet">' + tweets[n].textContent + "</p>";
              if (printTime) {
                op += '<p class="timePosted">' + times[n].textContent + "</p>";
              }
            } else {
              if (printUser) {
                op += '<p class="user">' + authors[n].textContent + "</p>";
              }
              op += '<p class="tweet">' + tweets[n].textContent + "</p>";
              if (printTime) {
                op += '<p class="timePosted">' + times[n].textContent + "</p>";
              }
            }
          }
          if (showInteractionLinks) {
            op +=
              '<p class="interact"><a href="https://twitter.com/intent/' +
              "tweet?in_reply_to=" +
              tids[n] +
              '" class="twitter_reply_icon"' +
              (targetBlank ? ' target="_blank">' : ">") +
              'Reply</a><a href="https://twitter.com/intent/retweet?' +
              "tweet_id=" +
              tids[n] +
              '" class="twitter_retweet_icon"' +
              (targetBlank ? ' target="_blank">' : ">") +
              "Retweet</a>" +
              '<a href="https://twitter.com/intent/favorite?tweet_id=' +
              tids[n] +
              '" class="twitter_fav_icon"' +
              (targetBlank ? ' target="_blank">' : ">") +
              "Favorite</a></p>";
          }
          if (
            showImages &&
            images[n] !== undefined &&
            extractImageUrl(images[n]) !== undefined
          ) {
            op +=
              '<div class="media">' +
              '<img src="' +
              extractImageUrl(images[n]) +
              '" alt="Image from tweet" />' +
              "</div>";
          }
          if (showImages) {
            arrayTweets.push(op);
          } else if (!showImages && tweets[n].textContent.length) {
            arrayTweets.push(op);
          }
          n++;
        }
      }
      handleTweets(arrayTweets);
      inProgress = false;
      if (queue.length > 0) {
        twitterFetcher.fetch(queue[0]);
        queue.splice(0, 1);
      }
    },
  };
  window.__twttrf = twitterFetcher;
  window.twitterFetcher = twitterFetcher;
  return twitterFetcher;
});
/* jQuery SelectBox Styler v1.0.1 | (c) Dimox | http://dimox.name/styling-select-boxes-using-jquery-css/ */
(function ($) {
  $.fn.selectbox = function () {
    $(this).each(function () {
      var select = $(this);
      if (select.prev("span.selectbox").length < 1) {
        function doSelect() {
          var option = select.find("option");
          var optionSelected = option.filter(":selected");
          var optionText = option.filter(":first").text();
          if (optionSelected.length) optionText = optionSelected.text();
          var ddlist = "";
          for (i = 0; i < option.length; i++) {
            var selected = "";
            var disabled = ' class="disabled"';
            if (option.eq(i).is(":selected"))
              selected = ' class="selected sel"';
            if (option.eq(i).is(":disabled")) selected = disabled;
            ddlist += "<li" + selected + ">" + option.eq(i).text() + "</li>";
          }
          var selectbox = $(
            '<span class="selectbox" style="display:inline-block;position:relative">' +
              '<div class="select" style="float:left;position:relative;z-index:10000"><div class="text">' +
              optionText +
              "</div>" +
              '<b class="trigger"><i class="arrow"></i></b>' +
              "</div>" +
              '<div class="dropdown" style="position:absolute;z-index:9999;overflow:auto;overflow-x:hidden;list-style:none">' +
              "<ul>" +
              ddlist +
              "</ul>" +
              "</div>" +
              "</span>"
          );
          select.before(selectbox).css({ position: "absolute", top: -9999 });
          var divSelect = selectbox.find("div.select");
          var divText = selectbox.find("div.text");
          var dropdown = selectbox.find("div.dropdown");
          var li = dropdown.find("li");
          var selectHeight = selectbox.outerHeight();
          if (dropdown.css("left") == "auto") dropdown.css({ left: 0 });
          if (dropdown.css("top") == "auto")
            dropdown.css({ top: selectHeight });
          var liHeight = li.outerHeight();
          var position = dropdown.css("top");
          dropdown.hide();
          divSelect.click(function () {
            var topOffset = selectbox.offset().top;
            var bottomOffset =
              $(window).height() -
              selectHeight -
              (topOffset - $(window).scrollTop());
            if (bottomOffset < 0 || bottomOffset < liHeight * 6) {
              dropdown.height("auto").css({ top: "auto", bottom: position });
              if (
                dropdown.outerHeight() >
                topOffset - $(window).scrollTop() - 20
              ) {
                dropdown.height(
                  Math.floor(
                    (topOffset - $(window).scrollTop() - 20) / liHeight
                  ) * liHeight
                );
              }
            } else if (bottomOffset > liHeight * 6) {
              dropdown.height("auto").css({ bottom: "auto", top: position });
              if (dropdown.outerHeight() > bottomOffset - 20) {
                dropdown.height(
                  Math.floor((bottomOffset - 20) / liHeight) * liHeight
                );
              }
            }
            $("span.selectbox").css({ zIndex: 1 }).removeClass("focused");
            selectbox.css({ zIndex: 2 });
            if (dropdown.is(":hidden")) {
              $("div.dropdown:visible").hide();
              dropdown.show();
            } else {
              dropdown.hide();
            }
            return false;
          });
          li.hover(function () {
            $(this).siblings().removeClass("selected");
          });
          var selectedText = li.filter(".selected").text();
          li.filter(":not(.disabled)").click(function () {
            var liText = $(this).text();
            if (selectedText != liText) {
              $(this)
                .addClass("selected sel")
                .siblings()
                .removeClass("selected sel");
              option
                .removeAttr("selected")
                .eq($(this).index())
                .attr("selected", true);
              selectedText = liText;
              divText.text(liText);
              select.change();
            }
            dropdown.hide();
          });
          dropdown.mouseout(function () {
            dropdown.find("li.sel").addClass("selected");
          });
          select
            .focus(function () {
              $("span.selectbox").removeClass("focused");
              selectbox.addClass("focused");
            })
            .keyup(function () {
              divText.text(option.filter(":selected").text());
              li.removeClass("selected sel")
                .eq(option.filter(":selected").index())
                .addClass("selected sel");
            });
          $(document).on("click", function (e) {
            if (!$(e.target).parents().hasClass("selectbox")) {
              dropdown.hide().find("li.sel").addClass("selected");
              selectbox.removeClass("focused");
            }
          });
        }
        doSelect();
        select.on("refresh", function () {
          select.prev().remove();
          doSelect();
        });
      }
    });
  };
})(jQuery);
/**
 * downCount: Simple Countdown clock with offset
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 */

(function ($) {
  $.fn.downCount = function (options, callback) {
    var settings = $.extend({ date: null, offset: null }, options);
    if (!settings.date) {
      $.error("Date is not defined.");
    }
    if (!Date.parse(settings.date)) {
      $.error(
        "Incorrect date format, it should look like this, 12/24/2012 12:00:00."
      );
    }
    var container = this;
    var currentDate = function () {
      var date = new Date();
      var utc = date.getTime() + date.getTimezoneOffset() * 60000;
      var new_date = new Date(utc + 3600000 * settings.offset);
      return new_date;
    };
    function countdown() {
      var target_date = new Date(settings.date),
        current_date = currentDate();
      var difference = target_date - current_date;
      if (difference < 0) {
        clearInterval(interval);
        if (callback && typeof callback === "function") callback();
        return;
      }
      var _second = 1000,
        _minute = _second * 60,
        _hour = _minute * 60,
        _day = _hour * 24;
      var days = Math.floor(difference / _day),
        hours = Math.floor((difference % _day) / _hour),
        minutes = Math.floor((difference % _hour) / _minute),
        seconds = Math.floor((difference % _minute) / _second);
      days = String(days).length >= 2 ? days : "0" + days;
      hours = String(hours).length >= 2 ? hours : "0" + hours;
      minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
      seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
      var ref_days = days === 1 ? "day" : "days",
        ref_hours = hours === 1 ? "hour" : "hours",
        ref_minutes = minutes === 1 ? "minute" : "minutes",
        ref_seconds = seconds === 1 ? "second" : "seconds";
      container.find(".days").text(days);
      container.find(".hours").text(hours);
      container.find(".minutes").text(minutes);
      container.find(".seconds").text(seconds);
      container.find(".days_ref").text(ref_days);
      container.find(".hours_ref").text(ref_hours);
      container.find(".minutes_ref").text(ref_minutes);
      container.find(".seconds_ref").text(ref_seconds);
    }
    var interval = setInterval(countdown, 1000);
  };
})(jQuery);
/**
	/*
	 *
	 *	jQuery Sliding Menu Plugin
	 *	Mobile app list-style navigation in the browser
	 *
	 *	Written by Ali Zahid
	 *	http://alizahid.github.io/jquery-sliding-menu/
	 *
	 */
(function ($) {
  var usedIds = [];
  $.fn.menu = function (options) {
    var selector = this.selector;
    var settings = $.extend({ dataJSON: false, backLabel: "" }, options);
    return this.each(function () {
      var self = this,
        menu = $(self),
        data;
      if (menu.hasClass("sliding-menu")) {
        return;
      }
      var menuWidth = menu.width();
      if (settings.dataJSON) {
        data = processJSON(settings.dataJSON);
      } else {
        data = process(menu);
      }
      menu.empty().addClass("sliding-menu");
      var rootPanel;
      if (settings.dataJSON) {
        $(data).each(function (index, item) {
          var panel = $("<ul></ul>");
          if (item.root) {
            rootPanel = "#" + item.id;
          }
          panel.attr("id", item.id);
          panel.addClass("menu-panel");
          panel.width(menuWidth);
          $(item.children).each(function (index, item) {
            var link = $("<a></a>");
            link.attr("class", item.styleClass);
            link.attr("href", item.href);
            link.text(item.label);
            var li = $("<li></li>");
            li.append(link);
            panel.append(li);
          });
          menu.append(panel);
        });
      } else {
        $(data).each(function (index, item) {
          var panel = $(item);
          if (panel.hasClass("menu-panel-root")) {
            rootPanel = "#" + panel.attr("id");
          }
          panel.width(menuWidth);
          menu.append(item);
        });
      }
      rootPanel = $(rootPanel);
      rootPanel.addClass("menu-panel-root");
      var currentPanel = rootPanel;
      menu.height(rootPanel.height());
      var wrapper = $("<div></div>")
        .addClass("sliding-menu-wrapper")
        .width(data.length * menuWidth);
      menu.wrapInner(wrapper);
      wrapper = $(".sliding-menu-wrapper", menu);
      $("a", self).on("click", function (e) {
        var href = $(this).attr("href"),
          label = $(this).text();
        if (wrapper.is(":animated")) {
          e.preventDefault();
          return;
        }
        if (href == "#") {
          e.preventDefault();
        } else if (href.indexOf("#menu-panel") == 0) {
          var target = $(href),
            isBack = $(this).hasClass("back"),
            marginLeft = parseInt(wrapper.css("margin-left"));
          if (isBack) {
            if (href == "#menu-panel-back") {
              target = currentPanel.prev();
            }
            wrapper
              .stop(true, true)
              .animate({ marginLeft: marginLeft + menuWidth }, "fast");
          } else {
            target.insertAfter(currentPanel);
            if (settings.backLabel === true) {
              $(".back", target).text(label);
            } else {
              $(".back", target).text(settings.backLabel);
            }
            wrapper
              .stop(true, true)
              .animate({ marginLeft: marginLeft - menuWidth }, "fast");
          }
          currentPanel = target;
          menu.stop(true, true).animate({ height: target.height() }, "fast");
          e.preventDefault();
        }
      });
      return this;
    });
    function process(data) {
      var ul = $("ul", data),
        panels = [];
      $(ul).each(function (index, item) {
        var panel = $(item),
          handler = panel.prev(),
          id = getNewId();
        if (handler.length == 1) {
          handler.addClass("nav").attr("href", "#menu-panel-" + id);
        }
        panel.attr("id", "menu-panel-" + id);
        if (index == 0) {
          panel.addClass("menu-panel-root");
        } else {
          panel.addClass("menu-panel");
          var li = $("<li></li>"),
            back = $("<a></a>")
              .addClass("back")
              .attr("href", "#menu-panel-back");
          panel.prepend(back);
        }
        panels.push(item);
      });
      return panels;
    }
    function processJSON(data, parent) {
      var root = {
          id: "menu-panel-" + getNewId(),
          children: [],
          root: parent ? false : true,
        },
        panels = [];
      if (parent) {
        root.children.push({ styleClass: "back", href: "#" + parent.id });
      }
      $(data).each(function (index, item) {
        root.children.push(item);
        if (item.children) {
          var panel = processJSON(item.children, root);
          item.href = "#" + panel[0].id;
          item.styleClass = "nav";
          panels = panels.concat(panel);
        }
      });
      return [root].concat(panels);
    }
    function getNewId() {
      var id;
      do {
        id = Math.random().toString(36).substring(3, 8);
      } while (usedIds.indexOf(id) >= 0);
      usedIds.push(id);
      return id;
    }
  };
})(jQuery);

/*global jQuery */
/*!
 * Lettering.JS 0.7.0
 *
 * Copyright 2010, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Thanks to Paul Irish - http://paulirish.com - for the feedback.
 *
 * Date: Mon Sep 20 17:14:00 2010 -0600
 */
!(function (t) {
  function n(n, e, i, r) {
    var a = n.text(),
      o = a.split(e),
      c = "";
    o.length &&
      (t(o).each(function (t, n) {
        c +=
          '<span class="' +
          i +
          (t + 1) +
          '" aria-hidden="true">' +
          n +
          "</span>" +
          r;
      }),
      n.attr("aria-label", a).empty().append(c));
  }
  var e = {
    init: function () {
      return this.each(function () {
        n(t(this), "", "char", "");
      });
    },
    words: function () {
      return this.each(function () {
        n(t(this), " ", "word", " ");
      });
    },
    lines: function () {
      return this.each(function () {
        var e = "eefec303079ad17405c889e092e105b0";
        n(t(this).children("br").replaceWith(e).end(), e, "line", "");
      });
    },
  };
  t.fn.lettering = function (n) {
    return n && e[n]
      ? e[n].apply(this, [].slice.call(arguments, 1))
      : "letters" !== n && n
      ? (t.error("Method " + n + " does not exist on jQuery.lettering"), this)
      : e.init.apply(this, [].slice.call(arguments, 0));
  };
})(jQuery),
  (function (t) {
    t.fn.fitText = function (n, e) {
      var i = n || 1,
        r = t.extend(
          {
            minFontSize: Number.NEGATIVE_INFINITY,
            maxFontSize: Number.POSITIVE_INFINITY,
          },
          e
        );
      return this.each(function () {
        var n = t(this),
          e = function () {
            n.css(
              "font-size",
              Math.max(
                Math.min(n.width() / (10 * i), parseFloat(r.maxFontSize)),
                parseFloat(r.minFontSize)
              )
            );
          };
        e(), t(window).on("resize.fittext orientationchange.fittext", e);
      });
    };
  })(jQuery);
/* perfect-scrollbar v0.6.10 */
!(function t(e, n, r) {
  function o(l, s) {
    if (!n[l]) {
      if (!e[l]) {
        var a = "function" == typeof require && require;
        if (!s && a) return a(l, !0);
        if (i) return i(l, !0);
        var c = new Error("Cannot find module '" + l + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var u = (n[l] = { exports: {} });
      e[l][0].call(
        u.exports,
        function (t) {
          var n = e[l][1][t];
          return o(n ? n : t);
        },
        u,
        u.exports,
        t,
        e,
        n,
        r
      );
    }
    return n[l].exports;
  }
  for (
    var i = "function" == typeof require && require, l = 0;
    l < r.length;
    l++
  )
    o(r[l]);
  return o;
})(
  {
    1: [
      function (t, e, n) {
        "use strict";
        function r(t) {
          t.fn.perfectScrollbar = function (e) {
            return this.each(function () {
              if ("object" == typeof e || "undefined" == typeof e) {
                var n = e;
                i.get(this) || o.initialize(this, n);
              } else {
                var r = e;
                "update" === r
                  ? o.update(this)
                  : "destroy" === r && o.destroy(this);
              }
              return t(this);
            });
          };
        }
        var o = t("../main"),
          i = t("../plugin/instances");
        if ("function" == typeof define && define.amd) define(["jquery"], r);
        else {
          var l = window.jQuery ? window.jQuery : window.$;
          "undefined" != typeof l && r(l);
        }
        e.exports = r;
      },
      { "../main": 7, "../plugin/instances": 18 },
    ],
    2: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          var n = t.className.split(" ");
          n.indexOf(e) < 0 && n.push(e), (t.className = n.join(" "));
        }
        function o(t, e) {
          var n = t.className.split(" "),
            r = n.indexOf(e);
          r >= 0 && n.splice(r, 1), (t.className = n.join(" "));
        }
        (n.add = function (t, e) {
          t.classList ? t.classList.add(e) : r(t, e);
        }),
          (n.remove = function (t, e) {
            t.classList ? t.classList.remove(e) : o(t, e);
          }),
          (n.list = function (t) {
            return t.classList
              ? Array.prototype.slice.apply(t.classList)
              : t.className.split(" ");
          });
      },
      {},
    ],
    3: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          return window.getComputedStyle(t)[e];
        }
        function o(t, e, n) {
          return (
            "number" == typeof n && (n = n.toString() + "px"),
            (t.style[e] = n),
            t
          );
        }
        function i(t, e) {
          for (var n in e) {
            var r = e[n];
            "number" == typeof r && (r = r.toString() + "px"), (t.style[n] = r);
          }
          return t;
        }
        var l = {};
        (l.e = function (t, e) {
          var n = document.createElement(t);
          return (n.className = e), n;
        }),
          (l.appendTo = function (t, e) {
            return e.appendChild(t), t;
          }),
          (l.css = function (t, e, n) {
            return "object" == typeof e
              ? i(t, e)
              : "undefined" == typeof n
              ? r(t, e)
              : o(t, e, n);
          }),
          (l.matches = function (t, e) {
            return "undefined" != typeof t.matches
              ? t.matches(e)
              : "undefined" != typeof t.matchesSelector
              ? t.matchesSelector(e)
              : "undefined" != typeof t.webkitMatchesSelector
              ? t.webkitMatchesSelector(e)
              : "undefined" != typeof t.mozMatchesSelector
              ? t.mozMatchesSelector(e)
              : "undefined" != typeof t.msMatchesSelector
              ? t.msMatchesSelector(e)
              : void 0;
          }),
          (l.remove = function (t) {
            "undefined" != typeof t.remove
              ? t.remove()
              : t.parentNode && t.parentNode.removeChild(t);
          }),
          (l.queryChildren = function (t, e) {
            return Array.prototype.filter.call(t.childNodes, function (t) {
              return l.matches(t, e);
            });
          }),
          (e.exports = l);
      },
      {},
    ],
    4: [
      function (t, e, n) {
        "use strict";
        var r = function (t) {
          (this.element = t), (this.events = {});
        };
        (r.prototype.bind = function (t, e) {
          "undefined" == typeof this.events[t] && (this.events[t] = []),
            this.events[t].push(e),
            this.element.addEventListener(t, e, !1);
        }),
          (r.prototype.unbind = function (t, e) {
            var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function (r) {
              return n && r !== e
                ? !0
                : (this.element.removeEventListener(t, r, !1), !1);
            }, this);
          }),
          (r.prototype.unbindAll = function () {
            for (var t in this.events) this.unbind(t);
          });
        var o = function () {
          this.eventElements = [];
        };
        (o.prototype.eventElement = function (t) {
          var e = this.eventElements.filter(function (e) {
            return e.element === t;
          })[0];
          return (
            "undefined" == typeof e &&
              ((e = new r(t)), this.eventElements.push(e)),
            e
          );
        }),
          (o.prototype.bind = function (t, e, n) {
            this.eventElement(t).bind(e, n);
          }),
          (o.prototype.unbind = function (t, e, n) {
            this.eventElement(t).unbind(e, n);
          }),
          (o.prototype.unbindAll = function () {
            for (var t = 0; t < this.eventElements.length; t++)
              this.eventElements[t].unbindAll();
          }),
          (o.prototype.once = function (t, e, n) {
            var r = this.eventElement(t),
              o = function (t) {
                r.unbind(e, o), n(t);
              };
            r.bind(e, o);
          }),
          (e.exports = o);
      },
      {},
    ],
    5: [
      function (t, e, n) {
        "use strict";
        e.exports = (function () {
          function t() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1);
          }
          return function () {
            return (
              t() +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              "-" +
              t() +
              t() +
              t()
            );
          };
        })();
      },
      {},
    ],
    6: [
      function (t, e, n) {
        "use strict";
        var r = t("./class"),
          o = t("./dom");
        (n.toInt = function (t) {
          return parseInt(t, 10) || 0;
        }),
          (n.clone = function (t) {
            if (null === t) return null;
            if ("object" == typeof t) {
              var e = {};
              for (var n in t) e[n] = this.clone(t[n]);
              return e;
            }
            return t;
          }),
          (n.extend = function (t, e) {
            var n = this.clone(t);
            for (var r in e) n[r] = this.clone(e[r]);
            return n;
          }),
          (n.isEditable = function (t) {
            return (
              o.matches(t, "input,[contenteditable]") ||
              o.matches(t, "select,[contenteditable]") ||
              o.matches(t, "textarea,[contenteditable]") ||
              o.matches(t, "button,[contenteditable]")
            );
          }),
          (n.removePsClasses = function (t) {
            for (var e = r.list(t), n = 0; n < e.length; n++) {
              var o = e[n];
              0 === o.indexOf("ps-") && r.remove(t, o);
            }
          }),
          (n.outerWidth = function (t) {
            return (
              this.toInt(o.css(t, "width")) +
              this.toInt(o.css(t, "paddingLeft")) +
              this.toInt(o.css(t, "paddingRight")) +
              this.toInt(o.css(t, "borderLeftWidth")) +
              this.toInt(o.css(t, "borderRightWidth"))
            );
          }),
          (n.startScrolling = function (t, e) {
            r.add(t, "ps-in-scrolling"),
              "undefined" != typeof e
                ? r.add(t, "ps-" + e)
                : (r.add(t, "ps-x"), r.add(t, "ps-y"));
          }),
          (n.stopScrolling = function (t, e) {
            r.remove(t, "ps-in-scrolling"),
              "undefined" != typeof e
                ? r.remove(t, "ps-" + e)
                : (r.remove(t, "ps-x"), r.remove(t, "ps-y"));
          }),
          (n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch:
              "ontouchstart" in window ||
              (window.DocumentTouch &&
                document instanceof window.DocumentTouch),
            supportsIePointer: null !== window.navigator.msMaxTouchPoints,
          });
      },
      { "./class": 2, "./dom": 3 },
    ],
    7: [
      function (t, e, n) {
        "use strict";
        var r = t("./plugin/destroy"),
          o = t("./plugin/initialize"),
          i = t("./plugin/update");
        e.exports = { initialize: o, update: i, destroy: r };
      },
      {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21,
      },
    ],
    8: [
      function (t, e, n) {
        "use strict";
        e.exports = {
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          stopPropagationOnClick: !0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipePropagation: !0,
          useBothWheelAxes: !1,
          useKeyboard: !0,
          useSelectionScroll: !1,
          wheelPropagation: !1,
          wheelSpeed: 1,
          theme: "default",
        };
      },
      {},
    ],
    9: [
      function (t, e, n) {
        "use strict";
        var r = t("../lib/dom"),
          o = t("../lib/helper"),
          i = t("./instances");
        e.exports = function (t) {
          var e = i.get(t);
          e &&
            (e.event.unbindAll(),
            r.remove(e.scrollbarX),
            r.remove(e.scrollbarY),
            r.remove(e.scrollbarXRail),
            r.remove(e.scrollbarYRail),
            o.removePsClasses(t),
            i.remove(t));
        };
      },
      { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 },
    ],
    10: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n(t) {
            return t.getBoundingClientRect();
          }
          var r = window.Event.prototype.stopPropagation.bind;
          e.settings.stopPropagationOnClick &&
            e.event.bind(e.scrollbarY, "click", r),
            e.event.bind(e.scrollbarYRail, "click", function (r) {
              var i = o.toInt(e.scrollbarYHeight / 2),
                a =
                  e.railYRatio *
                  (r.pageY - window.pageYOffset - n(e.scrollbarYRail).top - i),
                c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
                u = a / c;
              0 > u ? (u = 0) : u > 1 && (u = 1),
                s(t, "top", (e.contentHeight - e.containerHeight) * u),
                l(t),
                r.stopPropagation();
            }),
            e.settings.stopPropagationOnClick &&
              e.event.bind(e.scrollbarX, "click", r),
            e.event.bind(e.scrollbarXRail, "click", function (r) {
              var i = o.toInt(e.scrollbarXWidth / 2),
                a =
                  e.railXRatio *
                  (r.pageX - window.pageXOffset - n(e.scrollbarXRail).left - i),
                c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
                u = a / c;
              0 > u ? (u = 0) : u > 1 && (u = 1),
                s(
                  t,
                  "left",
                  (e.contentWidth - e.containerWidth) * u -
                    e.negativeScrollAdjustment
                ),
                l(t),
                r.stopPropagation();
            });
        }
        var o = t("../../lib/helper"),
          i = t("../instances"),
          l = t("../update-geometry"),
          s = t("../update-scroll");
        e.exports = function (t) {
          var e = i.get(t);
          r(t, e);
        };
      },
      {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    11: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n(n) {
            var o = r + n * e.railXRatio,
              i =
                Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) +
                e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
            0 > o
              ? (e.scrollbarXLeft = 0)
              : o > i
              ? (e.scrollbarXLeft = i)
              : (e.scrollbarXLeft = o);
            var s =
              l.toInt(
                (e.scrollbarXLeft * (e.contentWidth - e.containerWidth)) /
                  (e.containerWidth - e.railXRatio * e.scrollbarXWidth)
              ) - e.negativeScrollAdjustment;
            c(t, "left", s);
          }
          var r = null,
            o = null,
            s = function (e) {
              n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault();
            },
            u = function () {
              l.stopScrolling(t, "x"),
                e.event.unbind(e.ownerDocument, "mousemove", s);
            };
          e.event.bind(e.scrollbarX, "mousedown", function (n) {
            (o = n.pageX),
              (r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio),
              l.startScrolling(t, "x"),
              e.event.bind(e.ownerDocument, "mousemove", s),
              e.event.once(e.ownerDocument, "mouseup", u),
              n.stopPropagation(),
              n.preventDefault();
          });
        }
        function o(t, e) {
          function n(n) {
            var o = r + n * e.railYRatio,
              i =
                Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) +
                e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
            0 > o
              ? (e.scrollbarYTop = 0)
              : o > i
              ? (e.scrollbarYTop = i)
              : (e.scrollbarYTop = o);
            var s = l.toInt(
              (e.scrollbarYTop * (e.contentHeight - e.containerHeight)) /
                (e.containerHeight - e.railYRatio * e.scrollbarYHeight)
            );
            c(t, "top", s);
          }
          var r = null,
            o = null,
            s = function (e) {
              n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault();
            },
            u = function () {
              l.stopScrolling(t, "y"),
                e.event.unbind(e.ownerDocument, "mousemove", s);
            };
          e.event.bind(e.scrollbarY, "mousedown", function (n) {
            (o = n.pageY),
              (r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio),
              l.startScrolling(t, "y"),
              e.event.bind(e.ownerDocument, "mousemove", s),
              e.event.once(e.ownerDocument, "mouseup", u),
              n.stopPropagation(),
              n.preventDefault();
          });
        }
        var i = t("../../lib/dom"),
          l = t("../../lib/helper"),
          s = t("../instances"),
          a = t("../update-geometry"),
          c = t("../update-scroll");
        e.exports = function (t) {
          var e = s.get(t);
          r(t, e), o(t, e);
        };
      },
      {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    12: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n(n, r) {
            var o = t.scrollTop;
            if (0 === n) {
              if (!e.scrollbarYActive) return !1;
              if (
                (0 === o && r > 0) ||
                (o >= e.contentHeight - e.containerHeight && 0 > r)
              )
                return !e.settings.wheelPropagation;
            }
            var i = t.scrollLeft;
            if (0 === r) {
              if (!e.scrollbarXActive) return !1;
              if (
                (0 === i && 0 > n) ||
                (i >= e.contentWidth - e.containerWidth && n > 0)
              )
                return !e.settings.wheelPropagation;
            }
            return !0;
          }
          var r = !1;
          e.event.bind(t, "mouseenter", function () {
            r = !0;
          }),
            e.event.bind(t, "mouseleave", function () {
              r = !1;
            });
          var l = !1;
          e.event.bind(e.ownerDocument, "keydown", function (c) {
            if (!c.isDefaultPrevented || !c.isDefaultPrevented()) {
              var u =
                i.matches(e.scrollbarX, ":focus") ||
                i.matches(e.scrollbarY, ":focus");
              if (r || u) {
                var d = document.activeElement
                  ? document.activeElement
                  : e.ownerDocument.activeElement;
                if (d) {
                  for (; d.shadowRoot; ) d = d.shadowRoot.activeElement;
                  if (o.isEditable(d)) return;
                }
                var p = 0,
                  f = 0;
                switch (c.which) {
                  case 37:
                    p = -30;
                    break;
                  case 38:
                    f = 30;
                    break;
                  case 39:
                    p = 30;
                    break;
                  case 40:
                    f = -30;
                    break;
                  case 33:
                    f = 90;
                    break;
                  case 32:
                    f = c.shiftKey ? 90 : -90;
                    break;
                  case 34:
                    f = -90;
                    break;
                  case 35:
                    f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                    break;
                  case 36:
                    f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                    break;
                  default:
                    return;
                }
                a(t, "top", t.scrollTop - f),
                  a(t, "left", t.scrollLeft + p),
                  s(t),
                  (l = n(p, f)),
                  l && c.preventDefault();
              }
            }
          });
        }
        var o = t("../../lib/helper"),
          i = t("../../lib/dom"),
          l = t("../instances"),
          s = t("../update-geometry"),
          a = t("../update-scroll");
        e.exports = function (t) {
          var e = l.get(t);
          r(t, e);
        };
      },
      {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    13: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n(n, r) {
            var o = t.scrollTop;
            if (0 === n) {
              if (!e.scrollbarYActive) return !1;
              if (
                (0 === o && r > 0) ||
                (o >= e.contentHeight - e.containerHeight && 0 > r)
              )
                return !e.settings.wheelPropagation;
            }
            var i = t.scrollLeft;
            if (0 === r) {
              if (!e.scrollbarXActive) return !1;
              if (
                (0 === i && 0 > n) ||
                (i >= e.contentWidth - e.containerWidth && n > 0)
              )
                return !e.settings.wheelPropagation;
            }
            return !0;
          }
          function r(t) {
            var e = t.deltaX,
              n = -1 * t.deltaY;
            return (
              ("undefined" == typeof e || "undefined" == typeof n) &&
                ((e = (-1 * t.wheelDeltaX) / 6), (n = t.wheelDeltaY / 6)),
              t.deltaMode && 1 === t.deltaMode && ((e *= 10), (n *= 10)),
              e !== e && n !== n && ((e = 0), (n = t.wheelDelta)),
              [e, n]
            );
          }
          function o(e, n) {
            var r = t.querySelector("textarea:hover");
            if (r) {
              var o = r.scrollHeight - r.clientHeight;
              if (
                o > 0 &&
                !((0 === r.scrollTop && n > 0) || (r.scrollTop === o && 0 > n))
              )
                return !0;
              var i = r.scrollLeft - r.clientWidth;
              if (
                i > 0 &&
                !(
                  (0 === r.scrollLeft && 0 > e) ||
                  (r.scrollLeft === i && e > 0)
                )
              )
                return !0;
            }
            return !1;
          }
          function s(s) {
            var c = r(s),
              u = c[0],
              d = c[1];
            o(u, d) ||
              ((a = !1),
              e.settings.useBothWheelAxes
                ? e.scrollbarYActive && !e.scrollbarXActive
                  ? (d
                      ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed)
                      : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed),
                    (a = !0))
                  : e.scrollbarXActive &&
                    !e.scrollbarYActive &&
                    (u
                      ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)
                      : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed),
                    (a = !0))
                : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed),
                  l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)),
              i(t),
              (a = a || n(u, d)),
              a && (s.stopPropagation(), s.preventDefault()));
          }
          var a = !1;
          "undefined" != typeof window.onwheel
            ? e.event.bind(t, "wheel", s)
            : "undefined" != typeof window.onmousewheel &&
              e.event.bind(t, "mousewheel", s);
        }
        var o = t("../instances"),
          i = t("../update-geometry"),
          l = t("../update-scroll");
        e.exports = function (t) {
          var e = o.get(t);
          r(t, e);
        };
      },
      { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
    ],
    14: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          e.event.bind(t, "scroll", function () {
            i(t);
          });
        }
        var o = t("../instances"),
          i = t("../update-geometry");
        e.exports = function (t) {
          var e = o.get(t);
          r(t, e);
        };
      },
      { "../instances": 18, "../update-geometry": 19 },
    ],
    15: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          function n() {
            var t = window.getSelection
              ? window.getSelection()
              : document.getSelection
              ? document.getSelection()
              : "";
            return 0 === t.toString().length
              ? null
              : t.getRangeAt(0).commonAncestorContainer;
          }
          function r() {
            c ||
              (c = setInterval(function () {
                return i.get(t)
                  ? (s(t, "top", t.scrollTop + u.top),
                    s(t, "left", t.scrollLeft + u.left),
                    void l(t))
                  : void clearInterval(c);
              }, 50));
          }
          function a() {
            c && (clearInterval(c), (c = null)), o.stopScrolling(t);
          }
          var c = null,
            u = { top: 0, left: 0 },
            d = !1;
          e.event.bind(e.ownerDocument, "selectionchange", function () {
            t.contains(n()) ? (d = !0) : ((d = !1), a());
          }),
            e.event.bind(window, "mouseup", function () {
              d && ((d = !1), a());
            }),
            e.event.bind(window, "mousemove", function (e) {
              if (d) {
                var n = { x: e.pageX, y: e.pageY },
                  i = {
                    left: t.offsetLeft,
                    right: t.offsetLeft + t.offsetWidth,
                    top: t.offsetTop,
                    bottom: t.offsetTop + t.offsetHeight,
                  };
                n.x < i.left + 3
                  ? ((u.left = -5), o.startScrolling(t, "x"))
                  : n.x > i.right - 3
                  ? ((u.left = 5), o.startScrolling(t, "x"))
                  : (u.left = 0),
                  n.y < i.top + 3
                    ? (i.top + 3 - n.y < 5 ? (u.top = -5) : (u.top = -20),
                      o.startScrolling(t, "y"))
                    : n.y > i.bottom - 3
                    ? (n.y - i.bottom + 3 < 5 ? (u.top = 5) : (u.top = 20),
                      o.startScrolling(t, "y"))
                    : (u.top = 0),
                  0 === u.top && 0 === u.left ? a() : r();
              }
            });
        }
        var o = t("../../lib/helper"),
          i = t("../instances"),
          l = t("../update-geometry"),
          s = t("../update-scroll");
        e.exports = function (t) {
          var e = i.get(t);
          r(t, e);
        };
      },
      {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20,
      },
    ],
    16: [
      function (t, e, n) {
        "use strict";
        function r(t, e, n, r) {
          function s(n, r) {
            var o = t.scrollTop,
              i = t.scrollLeft,
              l = Math.abs(n),
              s = Math.abs(r);
            if (s > l) {
              if (
                (0 > r && o === e.contentHeight - e.containerHeight) ||
                (r > 0 && 0 === o)
              )
                return !e.settings.swipePropagation;
            } else if (
              l > s &&
              ((0 > n && i === e.contentWidth - e.containerWidth) ||
                (n > 0 && 0 === i))
            )
              return !e.settings.swipePropagation;
            return !0;
          }
          function a(e, n) {
            l(t, "top", t.scrollTop - n), l(t, "left", t.scrollLeft - e), i(t);
          }
          function c() {
            Y = !0;
          }
          function u() {
            Y = !1;
          }
          function d(t) {
            return t.targetTouches ? t.targetTouches[0] : t;
          }
          function p(t) {
            return t.targetTouches && 1 === t.targetTouches.length
              ? !0
              : t.pointerType &&
                "mouse" !== t.pointerType &&
                t.pointerType !== t.MSPOINTER_TYPE_MOUSE
              ? !0
              : !1;
          }
          function f(t) {
            if (p(t)) {
              w = !0;
              var e = d(t);
              (v.pageX = e.pageX),
                (v.pageY = e.pageY),
                (g = new Date().getTime()),
                null !== y && clearInterval(y),
                t.stopPropagation();
            }
          }
          function h(t) {
            if (!Y && w && p(t)) {
              var e = d(t),
                n = { pageX: e.pageX, pageY: e.pageY },
                r = n.pageX - v.pageX,
                o = n.pageY - v.pageY;
              a(r, o), (v = n);
              var i = new Date().getTime(),
                l = i - g;
              l > 0 && ((m.x = r / l), (m.y = o / l), (g = i)),
                s(r, o) && (t.stopPropagation(), t.preventDefault());
            }
          }
          function b() {
            !Y &&
              w &&
              ((w = !1),
              clearInterval(y),
              (y = setInterval(function () {
                return o.get(t)
                  ? Math.abs(m.x) < 0.01 && Math.abs(m.y) < 0.01
                    ? void clearInterval(y)
                    : (a(30 * m.x, 30 * m.y), (m.x *= 0.8), void (m.y *= 0.8))
                  : void clearInterval(y);
              }, 10)));
          }
          var v = {},
            g = 0,
            m = {},
            y = null,
            Y = !1,
            w = !1;
          n &&
            (e.event.bind(window, "touchstart", c),
            e.event.bind(window, "touchend", u),
            e.event.bind(t, "touchstart", f),
            e.event.bind(t, "touchmove", h),
            e.event.bind(t, "touchend", b)),
            r &&
              (window.PointerEvent
                ? (e.event.bind(window, "pointerdown", c),
                  e.event.bind(window, "pointerup", u),
                  e.event.bind(t, "pointerdown", f),
                  e.event.bind(t, "pointermove", h),
                  e.event.bind(t, "pointerup", b))
                : window.MSPointerEvent &&
                  (e.event.bind(window, "MSPointerDown", c),
                  e.event.bind(window, "MSPointerUp", u),
                  e.event.bind(t, "MSPointerDown", f),
                  e.event.bind(t, "MSPointerMove", h),
                  e.event.bind(t, "MSPointerUp", b)));
        }
        var o = t("../instances"),
          i = t("../update-geometry"),
          l = t("../update-scroll");
        e.exports = function (t, e, n) {
          var i = o.get(t);
          r(t, i, e, n);
        };
      },
      { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 },
    ],
    17: [
      function (t, e, n) {
        "use strict";
        var r = t("../lib/class"),
          o = t("../lib/helper"),
          i = t("./instances"),
          l = t("./update-geometry"),
          s = t("./handler/click-rail"),
          a = t("./handler/drag-scrollbar"),
          c = t("./handler/keyboard"),
          u = t("./handler/mouse-wheel"),
          d = t("./handler/native-scroll"),
          p = t("./handler/selection"),
          f = t("./handler/touch");
        e.exports = function (t, e) {
          (e = "object" == typeof e ? e : {}), r.add(t, "ps-container");
          var n = i.add(t);
          (n.settings = o.extend(n.settings, e)),
            r.add(t, "ps-theme-" + n.settings.theme),
            s(t),
            a(t),
            u(t),
            d(t),
            n.settings.useSelectionScroll && p(t),
            (o.env.supportsTouch || o.env.supportsIePointer) &&
              f(t, o.env.supportsTouch, o.env.supportsIePointer),
            n.settings.useKeyboard && c(t),
            l(t);
        };
      },
      {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19,
      },
    ],
    18: [
      function (t, e, n) {
        "use strict";
        function r(t) {
          function e() {
            s.add(t, "ps-focus");
          }
          function n() {
            s.remove(t, "ps-focus");
          }
          var r = this;
          (r.settings = p.clone(c)),
            (r.containerWidth = null),
            (r.containerHeight = null),
            (r.contentWidth = null),
            (r.contentHeight = null),
            (r.isRtl = "rtl" === a.css(t, "direction")),
            (r.isNegativeScroll = (function () {
              var e = t.scrollLeft,
                n = null;
              return (
                (t.scrollLeft = -1),
                (n = t.scrollLeft < 0),
                (t.scrollLeft = e),
                n
              );
            })()),
            (r.negativeScrollAdjustment = r.isNegativeScroll
              ? t.scrollWidth - t.clientWidth
              : 0),
            (r.event = new u()),
            (r.ownerDocument = t.ownerDocument || document),
            (r.scrollbarXRail = a.appendTo(
              a.e("div", "ps-scrollbar-x-rail"),
              t
            )),
            (r.scrollbarX = a.appendTo(
              a.e("div", "ps-scrollbar-x"),
              r.scrollbarXRail
            )),
            r.scrollbarX.setAttribute("tabindex", 0),
            r.event.bind(r.scrollbarX, "focus", e),
            r.event.bind(r.scrollbarX, "blur", n),
            (r.scrollbarXActive = null),
            (r.scrollbarXWidth = null),
            (r.scrollbarXLeft = null),
            (r.scrollbarXBottom = p.toInt(a.css(r.scrollbarXRail, "bottom"))),
            (r.isScrollbarXUsingBottom =
              r.scrollbarXBottom === r.scrollbarXBottom),
            (r.scrollbarXTop = r.isScrollbarXUsingBottom
              ? null
              : p.toInt(a.css(r.scrollbarXRail, "top"))),
            (r.railBorderXWidth =
              p.toInt(a.css(r.scrollbarXRail, "borderLeftWidth")) +
              p.toInt(a.css(r.scrollbarXRail, "borderRightWidth"))),
            a.css(r.scrollbarXRail, "display", "block"),
            (r.railXMarginWidth =
              p.toInt(a.css(r.scrollbarXRail, "marginLeft")) +
              p.toInt(a.css(r.scrollbarXRail, "marginRight"))),
            a.css(r.scrollbarXRail, "display", ""),
            (r.railXWidth = null),
            (r.railXRatio = null),
            (r.scrollbarYRail = a.appendTo(
              a.e("div", "ps-scrollbar-y-rail"),
              t
            )),
            (r.scrollbarY = a.appendTo(
              a.e("div", "ps-scrollbar-y"),
              r.scrollbarYRail
            )),
            r.scrollbarY.setAttribute("tabindex", 0),
            r.event.bind(r.scrollbarY, "focus", e),
            r.event.bind(r.scrollbarY, "blur", n),
            (r.scrollbarYActive = null),
            (r.scrollbarYHeight = null),
            (r.scrollbarYTop = null),
            (r.scrollbarYRight = p.toInt(a.css(r.scrollbarYRail, "right"))),
            (r.isScrollbarYUsingRight =
              r.scrollbarYRight === r.scrollbarYRight),
            (r.scrollbarYLeft = r.isScrollbarYUsingRight
              ? null
              : p.toInt(a.css(r.scrollbarYRail, "left"))),
            (r.scrollbarYOuterWidth = r.isRtl
              ? p.outerWidth(r.scrollbarY)
              : null),
            (r.railBorderYWidth =
              p.toInt(a.css(r.scrollbarYRail, "borderTopWidth")) +
              p.toInt(a.css(r.scrollbarYRail, "borderBottomWidth"))),
            a.css(r.scrollbarYRail, "display", "block"),
            (r.railYMarginHeight =
              p.toInt(a.css(r.scrollbarYRail, "marginTop")) +
              p.toInt(a.css(r.scrollbarYRail, "marginBottom"))),
            a.css(r.scrollbarYRail, "display", ""),
            (r.railYHeight = null),
            (r.railYRatio = null);
        }
        function o(t) {
          return "undefined" == typeof t.dataset
            ? t.getAttribute("data-ps-id")
            : t.dataset.psId;
        }
        function i(t, e) {
          "undefined" == typeof t.dataset
            ? t.setAttribute("data-ps-id", e)
            : (t.dataset.psId = e);
        }
        function l(t) {
          "undefined" == typeof t.dataset
            ? t.removeAttribute("data-ps-id")
            : delete t.dataset.psId;
        }
        var s = t("../lib/class"),
          a = t("../lib/dom"),
          c = t("./default-setting"),
          u = t("../lib/event-manager"),
          d = t("../lib/guid"),
          p = t("../lib/helper"),
          f = {};
        (n.add = function (t) {
          var e = d();
          return i(t, e), (f[e] = new r(t)), f[e];
        }),
          (n.remove = function (t) {
            delete f[o(t)], l(t);
          }),
          (n.get = function (t) {
            return f[o(t)];
          });
      },
      {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8,
      },
    ],
    19: [
      function (t, e, n) {
        "use strict";
        function r(t, e) {
          return (
            t.settings.minScrollbarLength &&
              (e = Math.max(e, t.settings.minScrollbarLength)),
            t.settings.maxScrollbarLength &&
              (e = Math.min(e, t.settings.maxScrollbarLength)),
            e
          );
        }
        function o(t, e) {
          var n = { width: e.railXWidth };
          e.isRtl
            ? (n.left =
                e.negativeScrollAdjustment +
                t.scrollLeft +
                e.containerWidth -
                e.contentWidth)
            : (n.left = t.scrollLeft),
            e.isScrollbarXUsingBottom
              ? (n.bottom = e.scrollbarXBottom - t.scrollTop)
              : (n.top = e.scrollbarXTop + t.scrollTop),
            l.css(e.scrollbarXRail, n);
          var r = { top: t.scrollTop, height: e.railYHeight };
          e.isScrollbarYUsingRight
            ? e.isRtl
              ? (r.right =
                  e.contentWidth -
                  (e.negativeScrollAdjustment + t.scrollLeft) -
                  e.scrollbarYRight -
                  e.scrollbarYOuterWidth)
              : (r.right = e.scrollbarYRight - t.scrollLeft)
            : e.isRtl
            ? (r.left =
                e.negativeScrollAdjustment +
                t.scrollLeft +
                2 * e.containerWidth -
                e.contentWidth -
                e.scrollbarYLeft -
                e.scrollbarYOuterWidth)
            : (r.left = e.scrollbarYLeft + t.scrollLeft),
            l.css(e.scrollbarYRail, r),
            l.css(e.scrollbarX, {
              left: e.scrollbarXLeft,
              width: e.scrollbarXWidth - e.railBorderXWidth,
            }),
            l.css(e.scrollbarY, {
              top: e.scrollbarYTop,
              height: e.scrollbarYHeight - e.railBorderYWidth,
            });
        }
        var i = t("../lib/class"),
          l = t("../lib/dom"),
          s = t("../lib/helper"),
          a = t("./instances"),
          c = t("./update-scroll");
        e.exports = function (t) {
          var e = a.get(t);
          (e.containerWidth = t.clientWidth),
            (e.containerHeight = t.clientHeight),
            (e.contentWidth = t.scrollWidth),
            (e.contentHeight = t.scrollHeight);
          var n;
          t.contains(e.scrollbarXRail) ||
            ((n = l.queryChildren(t, ".ps-scrollbar-x-rail")),
            n.length > 0 &&
              n.forEach(function (t) {
                l.remove(t);
              }),
            l.appendTo(e.scrollbarXRail, t)),
            t.contains(e.scrollbarYRail) ||
              ((n = l.queryChildren(t, ".ps-scrollbar-y-rail")),
              n.length > 0 &&
                n.forEach(function (t) {
                  l.remove(t);
                }),
              l.appendTo(e.scrollbarYRail, t)),
            !e.settings.suppressScrollX &&
            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
              ? ((e.scrollbarXActive = !0),
                (e.railXWidth = e.containerWidth - e.railXMarginWidth),
                (e.railXRatio = e.containerWidth / e.railXWidth),
                (e.scrollbarXWidth = r(
                  e,
                  s.toInt((e.railXWidth * e.containerWidth) / e.contentWidth)
                )),
                (e.scrollbarXLeft = s.toInt(
                  ((e.negativeScrollAdjustment + t.scrollLeft) *
                    (e.railXWidth - e.scrollbarXWidth)) /
                    (e.contentWidth - e.containerWidth)
                )))
              : (e.scrollbarXActive = !1),
            !e.settings.suppressScrollY &&
            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
              ? ((e.scrollbarYActive = !0),
                (e.railYHeight = e.containerHeight - e.railYMarginHeight),
                (e.railYRatio = e.containerHeight / e.railYHeight),
                (e.scrollbarYHeight = r(
                  e,
                  s.toInt((e.railYHeight * e.containerHeight) / e.contentHeight)
                )),
                (e.scrollbarYTop = s.toInt(
                  (t.scrollTop * (e.railYHeight - e.scrollbarYHeight)) /
                    (e.contentHeight - e.containerHeight)
                )))
              : (e.scrollbarYActive = !1),
            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
              (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
              (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
            o(t, e),
            e.scrollbarXActive
              ? i.add(t, "ps-active-x")
              : (i.remove(t, "ps-active-x"),
                (e.scrollbarXWidth = 0),
                (e.scrollbarXLeft = 0),
                c(t, "left", 0)),
            e.scrollbarYActive
              ? i.add(t, "ps-active-y")
              : (i.remove(t, "ps-active-y"),
                (e.scrollbarYHeight = 0),
                (e.scrollbarYTop = 0),
                c(t, "top", 0));
        };
      },
      {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20,
      },
    ],
    20: [
      function (t, e, n) {
        "use strict";
        var r,
          o,
          i = t("./instances"),
          l = document.createEvent("Event"),
          s = document.createEvent("Event"),
          a = document.createEvent("Event"),
          c = document.createEvent("Event"),
          u = document.createEvent("Event"),
          d = document.createEvent("Event"),
          p = document.createEvent("Event"),
          f = document.createEvent("Event"),
          h = document.createEvent("Event"),
          b = document.createEvent("Event");
        l.initEvent("ps-scroll-up", !0, !0),
          s.initEvent("ps-scroll-down", !0, !0),
          a.initEvent("ps-scroll-left", !0, !0),
          c.initEvent("ps-scroll-right", !0, !0),
          u.initEvent("ps-scroll-y", !0, !0),
          d.initEvent("ps-scroll-x", !0, !0),
          p.initEvent("ps-x-reach-start", !0, !0),
          f.initEvent("ps-x-reach-end", !0, !0),
          h.initEvent("ps-y-reach-start", !0, !0),
          b.initEvent("ps-y-reach-end", !0, !0),
          (e.exports = function (t, e, n) {
            if ("undefined" == typeof t)
              throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof e)
              throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof n)
              throw "You must provide a value to the update-scroll function";
            "top" === e &&
              0 >= n &&
              ((t.scrollTop = n = 0), t.dispatchEvent(h)),
              "left" === e &&
                0 >= n &&
                ((t.scrollLeft = n = 0), t.dispatchEvent(p));
            var v = i.get(t);
            "top" === e &&
              n >= v.contentHeight - v.containerHeight &&
              ((t.scrollTop = n = v.contentHeight - v.containerHeight),
              t.dispatchEvent(b)),
              "left" === e &&
                n >= v.contentWidth - v.containerWidth &&
                ((t.scrollLeft = n = v.contentWidth - v.containerWidth),
                t.dispatchEvent(f)),
              r || (r = t.scrollTop),
              o || (o = t.scrollLeft),
              "top" === e && r > n && t.dispatchEvent(l),
              "top" === e && n > r && t.dispatchEvent(s),
              "left" === e && o > n && t.dispatchEvent(a),
              "left" === e && n > o && t.dispatchEvent(c),
              "top" === e && ((t.scrollTop = r = n), t.dispatchEvent(u)),
              "left" === e && ((t.scrollLeft = o = n), t.dispatchEvent(d));
          });
      },
      { "./instances": 18 },
    ],
    21: [
      function (t, e, n) {
        "use strict";
        var r = t("../lib/dom"),
          o = t("../lib/helper"),
          i = t("./instances"),
          l = t("./update-geometry"),
          s = t("./update-scroll");
        e.exports = function (t) {
          var e = i.get(t);
          e &&
            ((e.negativeScrollAdjustment = e.isNegativeScroll
              ? t.scrollWidth - t.clientWidth
              : 0),
            r.css(e.scrollbarXRail, "display", "block"),
            r.css(e.scrollbarYRail, "display", "block"),
            (e.railXMarginWidth =
              o.toInt(r.css(e.scrollbarXRail, "marginLeft")) +
              o.toInt(r.css(e.scrollbarXRail, "marginRight"))),
            (e.railYMarginHeight =
              o.toInt(r.css(e.scrollbarYRail, "marginTop")) +
              o.toInt(r.css(e.scrollbarYRail, "marginBottom"))),
            r.css(e.scrollbarXRail, "display", "none"),
            r.css(e.scrollbarYRail, "display", "none"),
            l(t),
            s(t, "top", t.scrollTop),
            s(t, "left", t.scrollLeft),
            r.css(e.scrollbarXRail, "display", ""),
            r.css(e.scrollbarYRail, "display", ""));
        };
      },
      {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20,
      },
    ],
  },
  {},
  [1]
);

/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
!(function (t, e, o) {
  "use strict";
  (t.HoverDir = function (e, o) {
    (this.$el = t(o)), this._init(e);
  }),
    (t.HoverDir.defaults = {
      speed: 300,
      easing: "ease",
      hoverDelay: 0,
      inverse: !1,
    }),
    (t.HoverDir.prototype = {
      _init: function (e) {
        (this.options = t.extend(!0, {}, t.HoverDir.defaults, e)),
          (this.transitionProp =
            "all " + this.options.speed + "ms " + this.options.easing),
          (this.support = Modernizr.csstransitions),
          this._loadEvents();
      },
      _loadEvents: function () {
        var e = this;
        this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (o) {
          var i = t(this),
            n = i.find("div.hd-box"),
            s = e._getDir(i, { x: o.pageX, y: o.pageY }),
            r = e._getStyle(s);
          "mouseenter" === o.type
            ? (n.hide().css(r.from),
              clearTimeout(e.tmhover),
              (e.tmhover = setTimeout(function () {
                n.show(0, function () {
                  var o = t(this);
                  e.support && o.css("transition", e.transitionProp),
                    e._applyAnimation(o, r.to, e.options.speed);
                });
              }, e.options.hoverDelay)))
            : (e.support && n.css("transition", e.transitionProp),
              clearTimeout(e.tmhover),
              e._applyAnimation(n, r.from, e.options.speed));
        });
      },
      _getDir: function (t, e) {
        var o = t.width(),
          i = t.height(),
          n = (e.x - t.offset().left - o / 2) * (o > i ? i / o : 1),
          s = (e.y - t.offset().top - i / 2) * (i > o ? o / i : 1),
          r =
            Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4;
        return r;
      },
      _getStyle: function (t) {
        var e,
          o,
          i = { left: "0px", top: "-100%" },
          n = { left: "0px", top: "100%" },
          s = { left: "-100%", top: "0px" },
          r = { left: "100%", top: "0px" },
          a = { top: "0px" },
          p = { left: "0px" };
        switch (t) {
          case 0:
            (e = this.options.inverse ? n : i), (o = a);
            break;
          case 1:
            (e = this.options.inverse ? s : r), (o = p);
            break;
          case 2:
            (e = this.options.inverse ? i : n), (o = a);
            break;
          case 3:
            (e = this.options.inverse ? r : s), (o = p);
        }
        return { from: e, to: o };
      },
      _applyAnimation: function (e, o, i) {
        (t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate),
          e.stop().applyStyle(o, t.extend(!0, [], { duration: i + "ms" }));
      },
    });
  var i = function (t) {
    e.console && e.console.error(t);
  };
  t.fn.hoverdir = function (e) {
    var o = t.data(this, "hoverdir");
    if ("string" == typeof e) {
      var n = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        return o
          ? t.isFunction(o[e]) && "_" !== e.charAt(0)
            ? void o[e].apply(o, n)
            : void i("no such method '" + e + "' for hoverdir instance")
          : void i(
              "cannot call methods on hoverdir prior to initialization; attempted to call method '" +
                e +
                "'"
            );
      });
    } else
      this.each(function () {
        o ? o._init() : (o = t.data(this, "hoverdir", new t.HoverDir(e, this)));
      });
    return o;
  };
})(jQuery, window);

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.1
 **/
(function (e, t) {
  if (typeof exports === "object") {
    module.exports = t(require("jquery"));
  } else if (typeof define === "function" && define.amd) {
    define("EasyPieChart", ["jquery"], t);
  } else {
    t(e.jQuery);
  }
})(this, function (e) {
  var t = function (e, t) {
    var n;
    var r = document.createElement("canvas");
    if (typeof G_vmlCanvasManager !== "undefined") {
      G_vmlCanvasManager.initElement(r);
    }
    var i = r.getContext("2d");
    r.width = r.height = t.size;
    e.appendChild(r);
    var s = 1;
    if (window.devicePixelRatio > 1) {
      s = window.devicePixelRatio;
      r.style.width = r.style.height = [t.size, "px"].join("");
      r.width = r.height = t.size * s;
      i.scale(s, s);
    }
    i.translate(t.size / 2, t.size / 2);
    i.rotate((-1 / 2 + t.rotate / 180) * Math.PI);
    var o = (t.size - t.lineWidth) / 2;
    if (t.scaleColor && t.scaleLength) {
      o -= t.scaleLength + 2;
    }
    Date.now =
      Date.now ||
      function () {
        return +new Date();
      };
    var u = function (e, t, n) {
      n = Math.min(Math.max(0, n || 1), 1);
      i.beginPath();
      i.arc(0, 0, o, 0, Math.PI * 2 * n, false);
      i.strokeStyle = e;
      i.lineWidth = t;
      i.stroke();
    };
    var a = function () {
      var e;
      var n;
      var r = 24;
      i.lineWidth = 1;
      i.fillStyle = t.scaleColor;
      i.save();
      for (var r = 24; r > 0; --r) {
        if (r % 6 === 0) {
          n = t.scaleLength;
          e = 0;
        } else {
          n = t.scaleLength * 0.6;
          e = t.scaleLength - n;
        }
        i.fillRect(-t.size / 2 + e, 0, n, 1);
        i.rotate(Math.PI / 12);
      }
      i.restore();
    };
    var f = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (e) {
          window.setTimeout(e, 1e3 / 60);
        }
      );
    })();
    var l = function () {
      t.scaleColor && a();
      t.trackColor && u(t.trackColor, t.lineWidth);
    };
    this.clear = function () {
      i.clearRect(t.size / -2, t.size / -2, t.size, t.size);
    };
    this.draw = function (e) {
      if (!!t.scaleColor || !!t.trackColor) {
        if (i.getImageData && i.putImageData) {
          if (!n) {
            l();
            n = i.getImageData(0, 0, t.size * s, t.size * s);
          } else {
            i.putImageData(n, 0, 0);
          }
        } else {
          this.clear();
          l();
        }
      } else {
        this.clear();
      }
      i.lineCap = t.lineCap;
      var r;
      if (typeof t.barColor === "function") {
        r = t.barColor(e);
      } else {
        r = t.barColor;
      }
      if (e > 0) {
        u(r, t.lineWidth, e / 100);
      }
    }.bind(this);
    this.animate = function (e, n) {
      var r = Date.now();
      t.onStart(e, n);
      var i = function () {
        var s = Math.min(Date.now() - r, t.animate);
        var o = t.easing(this, s, e, n - e, t.animate);
        this.draw(o);
        t.onStep(e, n, o);
        if (s >= t.animate) {
          t.onStop(e, n);
        } else {
          f(i);
        }
      }.bind(this);
      f(i);
    }.bind(this);
  };
  var n = function (e, n) {
    var r = {
      barColor: "#F54A4B",
      trackColor: "#ccc",
      scaleColor: "#ccc",
      scaleLength: 0,
      lineCap: "round",
      lineWidth: 10,
      size: 152,
      rotate: 0,
      animate: 4e3,
      easing: function (e, t, n, r, i) {
        t = t / (i / 2);
        if (t < 1) {
          return (r / 2) * t * t + n;
        }
        return (-r / 2) * (--t * (t - 2) - 1) + n;
      },
      onStart: function (e, t) {
        return;
      },
      onStep: function (e, t, n) {
        return;
      },
      onStop: function (e, t) {
        return;
      },
    };
    if (typeof t !== "undefined") {
      r.renderer = t;
    } else if (typeof SVGRenderer !== "undefined") {
      r.renderer = SVGRenderer;
    } else {
      throw new Error("Please load either the SVG- or the CanvasRenderer");
    }
    var i = {};
    var s = 0;
    var o = function () {
      this.el = e;
      this.options = i;
      for (var t in r) {
        if (r.hasOwnProperty(t)) {
          i[t] = n && typeof n[t] !== "undefined" ? n[t] : r[t];
          if (typeof i[t] === "function") {
            i[t] = i[t].bind(this);
          }
        }
      }
      if (
        typeof i.easing === "string" &&
        typeof jQuery !== "undefined" &&
        jQuery.isFunction(jQuery.easing[i.easing])
      ) {
        i.easing = jQuery.easing[i.easing];
      } else {
        i.easing = r.easing;
      }
      this.renderer = new i.renderer(e, i);
      this.renderer.draw(s);
      if (e.dataset && e.dataset.percent) {
        this.update(parseFloat(e.dataset.percent));
      } else if (e.getAttribute && e.getAttribute("data-percent")) {
        this.update(parseFloat(e.getAttribute("data-percent")));
      }
    }.bind(this);
    this.update = function (e) {
      e = parseFloat(e);
      if (i.animate) {
        this.renderer.animate(s, e);
      } else {
        this.renderer.draw(e);
      }
      s = e;
      return this;
    }.bind(this);
    o();
  };
  e.fn.easyPieChart = function (t) {
    return this.each(function () {
      if (!e.data(this, "easyPieChart")) {
        e.data(this, "easyPieChart", new n(this, t));
      }
    });
  };
});

!(function (e) {
  "use strict";
  var t, n;
  (n = {}),
    (e.fn.jParticle = function (n) {
      return (
        this.each(function (i, a) {
          "object" == typeof a.sandbox && e(a).removeJParticle(),
            (a.sandbox = t(a, n));
        }),
        this
      );
    }),
    (e.fn.removeJParticle = function () {
      return (
        this.each(function (e, t) {
          t.sandbox && (t.sandbox.remove(), delete t.sandbox);
        }),
        this
      );
    }),
    (e.fn.freezeJParticle = function () {
      return (
        this.each(function (e, t) {
          t.sandbox && t.sandbox.freeze();
        }),
        this
      );
    }),
    (e.fn.unfreezeJParticle = function () {
      return (
        this.each(function (e, t) {
          t.sandbox && t.sandbox.unfreeze();
        }),
        this
      );
    }),
    (t = function (t, i) {
      var a, o;
      return (
        (a = {}),
        (a.canvas = {}),
        (a.mouse = {}),
        (a.particles = []),
        (a.isAnimated = !1),
        (a.initialize = function (e, t) {
          a.initParams(t),
            a.initHTML(e),
            a.initParticles(),
            a.initEvents(),
            a.initAnimation();
        }),
        (a.initParams = function (t) {
          t &&
            t.color &&
            (!t.particle || (t.particle && !t.particle.color)) &&
            (t.particle || (t.particle = {}), (t.particle.color = t.color)),
            (a.params = e.extend(
              {
                particlesNumber: 100,
                linkDist: 50,
                createLinkDist: 150,
                disableLinks: !1,
                disableMouse: !1,
                background: "black",
                color: "white",
                width: null,
                height: null,
                linksWidth: 1,
              },
              t
            ));
        }),
        (a.initHTML = function (t) {
          var n;
          (n = a.canvas),
            (n.container = e(t)),
            (n.element = e("<canvas/>")),
            (n.context = n.element.get(0).getContext("2d")),
            n.container.append(n.element),
            n.element.css("display", "block"),
            (n.element.get(0).width = a.params.width
              ? a.params.width
              : n.container.width()),
            (n.element.get(0).height = a.params.height
              ? a.params.height
              : n.container.height()),
            n.element.css("background", a.params.background);
        }),
        (a.resize = function (e, t) {
          e && (canvas.element.get(0).width = e),
            t && (canvas.element.get(0).height = t);
        }),
        (a.initParticles = function () {
          var e, t;
          for (e = 0, t = a.params.particlesNumber; t > e; e += 1)
            a.particles.push(o(a.canvas.element.get(0), a.params.particle));
        }),
        (a.initEvents = function () {
          a.canvas.element.mouseenter(function () {
            (a.mouse.hoverCanvas = !0), a.isAnimated || a.draw();
          }),
            a.canvas.element.mouseleave(function () {
              a.mouse.hoverCanvas = !1;
            }),
            a.canvas.element.mousemove(function (t) {
              a.mouse = e.extend(
                a.mouse,
                n.getMousePosition(t, a.canvas.element[0])
              );
            });
        }),
        (a.initAnimation = function () {
          (window.requestAnimFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.ORequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e) {
              setTimeOut(e, 1e3 / 60);
            }),
            (a.isAnimated = !0),
            a.draw();
        }),
        (a.draw = function () {
          var e, t, n, i, o, r;
          for (
            e = 0,
              n = a.particles.length,
              i = a.canvas,
              i.context.clearRect(
                0,
                0,
                i.element.get(0).width,
                i.element.get(0).height
              );
            n > e;
            e += 1
          )
            if (
              ((o = a.particles[e]),
              a.isAnimated && o.update(),
              o.draw(),
              !a.params.disableMouse &&
                a.mouse.hoverCanvas &&
                a.drawLink(
                  o.getPosition("x"),
                  o.getPosition("y"),
                  a.mouse.x,
                  a.mouse.y
                ),
              !a.params.disableLinks)
            )
              for (t = e + 1; n > t; t += 1)
                (r = a.particles[t]),
                  a.drawLink(
                    o.getPosition("x"),
                    o.getPosition("y"),
                    r.getPosition("x"),
                    r.getPosition("y")
                  );
          a.requestID = window.requestAnimFrame(a.draw);
        }),
        (a.drawLink = function (e, t, i, o) {
          var r;
          n.getDistance(e, t, i, o) <= a.params.createLinkDist &&
            ((r = a.canvas.context),
            r.save(),
            r.beginPath(),
            (r.lineWidth = a.params.linksWidth),
            r.moveTo(e, t),
            r.lineTo(i, o),
            (r.globalAlpha = a.getOpacityLink(e, t, i, o)),
            (r.strokeStyle = a.params.color),
            (r.lineCap = "round"),
            r.stroke(),
            r.closePath(),
            r.restore());
        }),
        (a.getOpacityLink = function (e, t, i, o) {
          var r, s, c, u;
          return (
            (r = n.getDistance(e, t, i, o)),
            (c = a.params.linkDist),
            (u = a.params.createLinkDist),
            (s = c >= r ? 1 : r > u ? 0 : 1 - (100 * (r - c)) / (u - c) / 100)
          );
        }),
        (a.freeze = function () {
          a.isAnimated && (a.isAnimated = !1);
        }),
        (a.unfreeze = function () {
          a.isAnimated || (a.isAnimated = !0);
        }),
        (a.remove = function () {
          a.canvas.element.remove();
        }),
        (o = function (t, i) {
          var a;
          return (
            (a = {}),
            (a.canvas = {}),
            (a.vector = {}),
            (a.initialize = function (t, n) {
              (a.params = e.extend(
                { color: "white", minSize: 2, maxSize: 4, speed: 60 },
                n
              )),
                a.setCanvasContext(t),
                a.initSize(),
                a.initPosition(),
                a.initVectors();
            }),
            (a.initPosition = function () {
              (a.x = n.getRandNumber(
                0 + a.radius,
                a.canvas.element.width - a.radius
              )),
                (a.y = n.getRandNumber(
                  0 + a.radius,
                  a.canvas.element.height - a.radius
                ));
            }),
            (a.initSize = function () {
              (a.size = n.getRandNumber(a.params.minSize, a.params.maxSize)),
                (a.radius = a.size / 2);
            }),
            (a.initVectors = function () {
              do
                (a.vector.x = n.getRandNumber(
                  -a.params.speed / 60,
                  a.params.speed / 60,
                  !1
                )),
                  (a.vector.y = n.getRandNumber(
                    -a.params.speed / 60,
                    a.params.speed / 60,
                    !1
                  ));
              while (0 == a.vector.x || 0 == a.vector.y);
            }),
            (a.setCanvasContext = function (e) {
              var t;
              if (
                ((a.canvas.element = e),
                (t = e.getContext("2d")),
                "object" != typeof t || "object" != typeof t.canvas)
              )
                throw "Error: Can't set canvas context to Particle because context isn't a CanvasRenderingContext2D object.";
              a.canvas.context = t;
            }),
            (a.draw = function () {
              var e = a.canvas.context;
              e.beginPath(),
                e.arc(a.x, a.y, a.size / 2, 0, 2 * Math.PI),
                (e.fillStyle = a.params.color),
                e.fill(),
                e.closePath();
            }),
            (a.update = function () {
              (a.x += a.vector.x),
                (a.y += a.vector.y),
                (0 > a.x - a.radius ||
                  a.x + a.radius > a.canvas.element.width) &&
                  (a.vector.x = -a.vector.x),
                (0 > a.y - a.radius ||
                  a.y + a.radius > a.canvas.element.height) &&
                  (a.vector.y = -a.vector.y);
            }),
            (a.getPosition = function (e) {
              return (
                "string" == typeof e && "x" != e && "y" != e && (e = null),
                "string" == typeof e ? a[e] : { x: a.x, y: a.y }
              );
            }),
            a.initialize(t, i),
            { getPosition: a.getPosition, update: a.update, draw: a.draw }
          );
        }),
        a.initialize(t, i),
        {
          remove: a.remove,
          freeze: a.freeze,
          unfreeze: a.unfreeze,
          resize: a.resize,
        }
      );
    }),
    (n.getRandNumber = function (e, t, n) {
      var i;
      return (
        null == e && (e = 0),
        null == t && (t = 10),
        null == n && (n = !0),
        (i = Math.random() * (t - e) + e),
        n ? Math.round(i) : i
      );
    }),
    (n.getDistance = function (e, t, n, i) {
      return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2));
    }),
    (n.getMousePosition = function (t, n) {
      var i;
      return (
        "undefined" == typeof n && (n = e("body")[0]),
        (i = n.getBoundingClientRect()),
        { x: t.clientX - i.left, y: t.clientY - i.top }
      );
    });
})(jQuery);
/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */

(function (e) {
  function t(e) {
    var t = "";
    if (e == "lowerLetter") {
      t = "abcdefghijklmnopqrstuvwxyz0123456789";
    } else if (e == "upperLetter") {
      t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (e == "symbol") {
      t = ",.?/\\(^)![]{}*&^%$#'\"";
    }
    var n = t.split("");
    return n[Math.floor(Math.random() * n.length)];
  }
  e.fn.shuffleLetters = function (n) {
    var r = e.extend(
      { step: 12, fps: 25, text: "", callback: function () {} },
      n
    );
    return this.each(function () {
      var n = e(this),
        i = "";
      if (n.data("animated")) {
        return true;
      }
      n.data("animated", true);
      if (r.text) {
        i = r.text.split("");
      } else {
        i = n.text().split("");
      }
      var s = [],
        o = [];
      for (var u = 0; u < i.length; u++) {
        var a = i[u];
        if (a == " ") {
          s[u] = "space";
          continue;
        } else if (/[a-z]/.test(a)) {
          s[u] = "lowerLetter";
        } else if (/[A-Z]/.test(a)) {
          s[u] = "upperLetter";
        } else {
          s[u] = "symbol";
        }
        o.push(u);
      }
      n.html("");
      (function f(e) {
        var u,
          a = o.length,
          l = i.slice(0);
        if (e > a) {
          n.data("animated", false);
          r.callback(n);
          return;
        }
        for (u = Math.max(e, 0); u < a; u++) {
          if (u < e + r.step) {
            l[o[u]] = t(s[o[u]]);
          } else {
            l[o[u]] = "";
          }
        }
        n.text(l.join(""));
        setTimeout(function () {
          f(e + 1);
        }, 1e3 / r.fps);
      })(-r.step);
    });
  };
})(jQuery);
// slick=============================================
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
// A cross-browser javascript shim for html5 audio
!(function (e, t, a) {
  var s,
    n = (function () {
      for (
        var e = new RegExp("audio(.min)?.js.*"),
          t = document.getElementsByTagName("script"),
          a = 0,
          s = t.length;
        a < s;
        a++
      ) {
        var n = t[a].getAttribute("src");
        if (e.test(n)) return n.replace(e, "");
      }
    })();
  (a[e] = {
    instanceCount: 0,
    instances: {},
    flashSource:
      '      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance=' +
      e +
      '.instances[\'$1\']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance=' +
      e +
      '.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always">       </object>',
    settings: {
      autoplay: !1,
      loop: !1,
      preload: !0,
      imageLocation: n + "player-graphics.gif",
      swfLocation: n + "audiojs.swf",
      useFlash:
        ((s = document.createElement("audio")),
        !(s.canPlayType && s.canPlayType("audio/mpeg;").replace(/no/, ""))),
      hasFlash: (function () {
        if (
          navigator.plugins &&
          navigator.plugins.length &&
          navigator.plugins["Shockwave Flash"]
        )
          return !0;
        if (navigator.mimeTypes && navigator.mimeTypes.length) {
          var e = navigator.mimeTypes["application/x-shockwave-flash"];
          return e && e.enabledPlugin;
        }
        try {
          new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          return !0;
        } catch (e) {}
        return !1;
      })(),
      createPlayer: {
        markup:
          '          <div class="play-pause">             <p class="play"></p>             <p class="pause"></p>             <p class="loading"></p>             <p class="error"></p>           </div>           <div class="scrubber">             <div class="progress"></div>             <div class="loaded"></div>           </div>           <div class="time">             <em class="played">00:00</em>/<strong class="duration">00:00</strong>           </div>           <div class="error-message"></div>',
        playPauseClass: "play-pause",
        scrubberClass: "scrubber",
        progressClass: "progress",
        loaderClass: "loaded",
        timeClass: "time",
        durationClass: "duration",
        playedClass: "played",
        errorMessageClass: "error-message",
        playingClass: "playing",
        loadingClass: "loading",
        errorClass: "error",
      },
      css: "",
      trackEnded: function (e) {},
      flashError: function () {
        var t = this.settings.createPlayer,
          s = r(t.errorMessageClass, this.wrapper),
          n =
            'Missing <a href="http://get.adobe.com/flashplayer/">flash player</a> plugin.';
        this.mp3 &&
          (n += ' <a href="' + this.mp3 + '">Download audio file</a>.'),
          a[e].helpers.removeClass(this.wrapper, t.loadingClass),
          a[e].helpers.addClass(this.wrapper, t.errorClass),
          (s.innerHTML = n);
      },
      loadError: function (t) {
        var s = this.settings.createPlayer,
          n = r(s.errorMessageClass, this.wrapper);
        a[e].helpers.removeClass(this.wrapper, s.loadingClass),
          a[e].helpers.addClass(this.wrapper, s.errorClass),
          (n.innerHTML = 'Error loading: "' + this.mp3 + '"');
      },
      init: function () {
        var t = this.settings.createPlayer;
        a[e].helpers.addClass(this.wrapper, t.loadingClass);
      },
      loadStarted: function () {
        var t = this.settings.createPlayer,
          s = r(t.durationClass, this.wrapper),
          n = Math.floor(this.duration / 60),
          i = Math.floor(this.duration % 60);
        a[e].helpers.removeClass(this.wrapper, t.loadingClass),
          (s.innerHTML =
            (n < 10 ? "0" : "") + n + ":" + (i < 10 ? "0" : "") + i);
      },
      loadProgress: function (e) {
        var t = this.settings.createPlayer,
          a = r(t.scrubberClass, this.wrapper);
        r(t.loaderClass, this.wrapper).style.width = a.offsetWidth * e + "px";
      },
      playPause: function () {
        this.playing ? this.settings.play() : this.settings.pause();
      },
      play: function () {
        var t = this.settings.createPlayer;
        a[e].helpers.addClass(this.wrapper, t.playingClass);
      },
      pause: function () {
        var t = this.settings.createPlayer;
        a[e].helpers.removeClass(this.wrapper, t.playingClass);
      },
      updatePlayhead: function (e) {
        var t = this.settings.createPlayer,
          a = r(t.scrubberClass, this.wrapper);
        r(t.progressClass, this.wrapper).style.width = a.offsetWidth * e + "px";
        var s = r(t.playedClass, this.wrapper),
          n = this.duration * e,
          i = Math.floor(n / 60),
          l = Math.floor(n % 60);
        s.innerHTML = (i < 10 ? "0" : "") + i + ":" + (l < 10 ? "0" : "") + l;
      },
    },
    create: function (e, t) {
      t = t || {};
      return e.length ? this.createAll(t, e) : this.newInstance(e, t);
    },
    createAll: function (e, t) {
      var a = t || document.getElementsByTagName("audio"),
        s = [];
      e = e || {};
      for (var n = 0, r = a.length; n < r; n++)
        s.push(this.newInstance(a[n], e));
      return s;
    },
    newInstance: function (e, s) {
      e = e;
      var n = this.helpers.clone(this.settings),
        r = "audiojs" + this.instanceCount,
        i = "audiojs_wrapper" + this.instanceCount;
      this.instanceCount++;
      null != e.getAttribute("autoplay") && (n.autoplay = !0),
        null != e.getAttribute("loop") && (n.loop = !0),
        "none" == e.getAttribute("preload") && (n.preload = !1),
        s && this.helpers.merge(n, s),
        n.createPlayer.markup
          ? (e = this.createPlayer(e, n.createPlayer, i))
          : e.parentNode.setAttribute("id", i);
      var l = new a[t](e, n);
      return (
        n.css && this.helpers.injectCss(l, n.css),
        n.useFlash && n.hasFlash
          ? (this.injectFlash(l, r), this.attachFlashEvents(l.wrapper, l))
          : n.useFlash && !n.hasFlash && this.settings.flashError.apply(l),
        (!n.useFlash || (n.useFlash && n.hasFlash)) &&
          this.attachEvents(l.wrapper, l),
        (this.instances[r] = l),
        l
      );
    },
    createPlayer: function (e, t, a) {
      var s = document.createElement("div"),
        n = e.cloneNode(!0);
      return (
        s.setAttribute("class", "audiojs"),
        s.setAttribute("className", "audiojs"),
        s.setAttribute("id", a),
        n.outerHTML && !document.createElement("audio").canPlayType
          ? ((n = this.helpers.cloneHtml5Node(e)),
            (s.innerHTML = t.markup),
            s.appendChild(n),
            (e.outerHTML = s.outerHTML),
            (s = document.getElementById(a)))
          : (s.appendChild(n),
            (s.innerHTML = s.innerHTML + t.markup),
            e.parentNode.replaceChild(s, e)),
        s.getElementsByTagName("audio")[0]
      );
    },
    attachEvents: function (t, s) {
      if (s.settings.createPlayer) {
        var n = s.settings.createPlayer,
          i = r(n.playPauseClass, t),
          l = r(n.scrubberClass, t);
        a[e].events.addListener(i, "click", function (e) {
          s.playPause.apply(s);
        }),
          a[e].events.addListener(l, "click", function (e) {
            var t =
              e.clientX -
              (function (e) {
                var t = 0;
                if (e.offsetParent)
                  do {
                    t += e.offsetLeft;
                  } while ((e = e.offsetParent));
                return t;
              })(this);
            s.skipTo(t / l.offsetWidth);
          }),
          s.settings.useFlash ||
            (a[e].events.trackLoadProgress(s),
            a[e].events.addListener(s.element, "timeupdate", function (e) {
              s.updatePlayhead.apply(s);
            }),
            a[e].events.addListener(s.element, "ended", function (e) {
              s.trackEnded.apply(s);
            }),
            a[e].events.addListener(s.source, "error", function (e) {
              clearInterval(s.readyTimer),
                clearInterval(s.loadTimer),
                s.settings.loadError.apply(s);
            }));
      }
    },
    attachFlashEvents: function (e, t) {
      (t.swfReady = !1),
        (t.load = function (e) {
          (t.mp3 = e), t.swfReady && t.element.load(e);
        }),
        (t.loadProgress = function (e, a) {
          (t.loadedPercent = e),
            (t.duration = a),
            t.settings.loadStarted.apply(t),
            t.settings.loadProgress.apply(t, [e]);
        }),
        (t.skipTo = function (e) {
          e > t.loadedPercent ||
            (t.updatePlayhead.call(t, [e]), t.element.skipTo(e));
        }),
        (t.updatePlayhead = function (e) {
          t.settings.updatePlayhead.apply(t, [e]);
        }),
        (t.play = function () {
          t.settings.preload ||
            ((t.settings.preload = !0), t.element.init(t.mp3)),
            (t.playing = !0),
            t.element.pplay(),
            t.settings.play.apply(t);
        }),
        (t.pause = function () {
          (t.playing = !1), t.element.ppause(), t.settings.pause.apply(t);
        }),
        (t.setVolume = function (e) {
          t.element.setVolume(e);
        }),
        (t.loadStarted = function () {
          (t.swfReady = !0),
            t.settings.preload && t.element.init(t.mp3),
            t.settings.autoplay && t.play.apply(t);
        });
    },
    injectFlash: function (e, t) {
      var a = this.flashSource.replace(/\$1/g, t);
      a = (a = a.replace(/\$2/g, e.settings.swfLocation)).replace(
        /\$3/g,
        +new Date() + Math.random()
      );
      var s = e.wrapper.innerHTML,
        n = document.createElement("div");
      (n.innerHTML = a + s),
        (e.wrapper.innerHTML = n.innerHTML),
        (e.element = this.helpers.getSwf(t));
    },
    helpers: {
      merge: function (e, t) {
        for (attr in t)
          (e.hasOwnProperty(attr) || t.hasOwnProperty(attr)) &&
            (e[attr] = t[attr]);
      },
      clone: function (e) {
        if (null == e || "object" != typeof e) return e;
        var t = new e.constructor();
        for (var a in e) t[a] = arguments.callee(e[a]);
        return t;
      },
      addClass: function (e, t) {
        new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) ||
          (e.className += " " + t);
      },
      removeClass: function (e, t) {
        var a = new RegExp("(\\s|^)" + t + "(\\s|$)");
        e.className = e.className.replace(a, " ");
      },
      injectCss: function (e, t) {
        for (
          var a = "",
            s = document.getElementsByTagName("style"),
            n = t.replace(/\$1/g, e.settings.imageLocation),
            r = 0,
            i = s.length;
          r < i;
          r++
        ) {
          var l = s[r].getAttribute("title");
          if (l && ~l.indexOf("audiojs")) {
            if ((p = s[r]).innerHTML === n) return;
            a = p.innerHTML;
            break;
          }
        }
        var o = document.getElementsByTagName("head")[0],
          d = o.firstChild,
          p = document.createElement("style");
        o &&
          (p.setAttribute("type", "text/css"),
          p.setAttribute("title", "audiojs"),
          p.styleSheet
            ? (p.styleSheet.cssText = a + n)
            : p.appendChild(document.createTextNode(a + n)),
          d ? o.insertBefore(p, d) : o.appendChild(styleElement));
      },
      cloneHtml5Node: function (e) {
        var t = document.createDocumentFragment(),
          a = t.createElement ? t : document;
        a.createElement("audio");
        var s = a.createElement("div");
        return t.appendChild(s), (s.innerHTML = e.outerHTML), s.firstChild;
      },
      getSwf: function (e) {
        var t = document[e] || window[e];
        return t.length > 1 ? t[t.length - 1] : t;
      },
    },
    events: {
      memoryLeaking: !1,
      listeners: [],
      addListener: function (t, s, n) {
        t.addEventListener
          ? t.addEventListener(s, n, !1)
          : t.attachEvent &&
            (this.listeners.push(t),
            this.memoryLeaking ||
              (window.attachEvent("onunload", function () {
                if (this.listeners)
                  for (var t = 0, s = this.listeners.length; t < s; t++)
                    a[e].events.purge(this.listeners[t]);
              }),
              (this.memoryLeaking = !0)),
            t.attachEvent("on" + s, function () {
              n.call(t, window.event);
            }));
      },
      trackLoadProgress: function (e) {
        if (e.settings.preload) {
          e = e;
          var t,
            a,
            s = /(ipod|iphone|ipad)/i.test(navigator.userAgent);
          (t = setInterval(function () {
            e.element.readyState > -1 && (s || e.init.apply(e)),
              e.element.readyState > 1 &&
                (e.settings.autoplay && e.play.apply(e),
                clearInterval(t),
                (a = setInterval(function () {
                  e.loadProgress.apply(e),
                    e.loadedPercent >= 1 && clearInterval(a);
                })));
          }, 10)),
            (e.readyTimer = t),
            (e.loadTimer = a);
        }
      },
      purge: function (e) {
        var t,
          a = e.attributes;
        if (a)
          for (t = 0; t < a.length; t += 1)
            "function" == typeof e[a[t].name] && (e[a[t].name] = null);
        if ((a = e.childNodes))
          for (t = 0; t < a.length; t += 1) purge(e.childNodes[t]);
      },
      ready: function (e) {
        var t = window,
          a = !1,
          s = !0,
          n = t.document,
          r = n.documentElement,
          i = n.addEventListener ? "addEventListener" : "attachEvent",
          l = n.addEventListener ? "removeEventListener" : "detachEvent",
          o = n.addEventListener ? "" : "on",
          d = function (s) {
            ("readystatechange" == s.type && "complete" != n.readyState) ||
              (("load" == s.type ? t : n)[l](o + s.type, d, !1),
              !a && (a = !0) && e.call(t, s.type || s));
          },
          p = function () {
            try {
              r.doScroll("left");
            } catch (e) {
              return void setTimeout(p, 50);
            }
            d("poll");
          };
        if ("complete" == n.readyState) e.call(t, "lazy");
        else {
          if (n.createEventObject && r.doScroll) {
            try {
              s = !t.frameElement;
            } catch (e) {}
            s && p();
          }
          n[i](o + "DOMContentLoaded", d, !1),
            n[i](o + "readystatechange", d, !1),
            t[i](o + "load", d, !1);
        }
      },
    },
  }),
    (a[t] = function (e, t) {
      var a, s;
      (this.element = e),
        (this.wrapper = e.parentNode),
        (this.source = e.getElementsByTagName("source")[0] || e),
        (this.mp3 =
          ((s = (a = e).getElementsByTagName("source")[0]),
          a.getAttribute("src") || (s ? s.getAttribute("src") : null))),
        (this.settings = t),
        (this.loadStartedCalled = !1),
        (this.loadedPercent = 0),
        (this.duration = 1),
        (this.playing = !1);
    }),
    (a[t].prototype = {
      updatePlayhead: function () {
        var e = this.element.currentTime / this.duration;
        this.settings.updatePlayhead.apply(this, [e]);
      },
      skipTo: function (e) {
        e > this.loadedPercent ||
          ((this.element.currentTime = this.duration * e),
          this.updatePlayhead());
      },
      load: function (t) {
        (this.loadStartedCalled = !1),
          this.source.setAttribute("src", t),
          this.element.load(),
          (this.mp3 = t),
          a[e].events.trackLoadProgress(this);
      },
      loadError: function () {
        this.settings.loadError.apply(this);
      },
      init: function () {
        this.settings.init.apply(this);
      },
      loadStarted: function () {
        if (!this.element.duration) return !1;
        (this.duration = this.element.duration),
          this.updatePlayhead(),
          this.settings.loadStarted.apply(this);
      },
      loadProgress: function () {
        if (null != this.element.buffered && this.element.buffered.length) {
          this.loadStartedCalled ||
            (this.loadStartedCalled = this.loadStarted());
          var e = this.element.buffered.end(this.element.buffered.length - 1);
          (this.loadedPercent = e / this.duration),
            this.settings.loadProgress.apply(this, [this.loadedPercent]);
        }
      },
      playPause: function () {
        this.playing ? this.pause() : this.play();
      },
      play: function () {
        /(ipod|iphone|ipad)/i.test(navigator.userAgent) &&
          0 == this.element.readyState &&
          this.init.apply(this),
          this.settings.preload ||
            ((this.settings.preload = !0),
            this.element.setAttribute("preload", "auto"),
            a[e].events.trackLoadProgress(this)),
          (this.playing = !0),
          this.element.play(),
          this.settings.play.apply(this);
      },
      pause: function () {
        (this.playing = !1),
          this.element.pause(),
          this.settings.pause.apply(this);
      },
      setVolume: function (e) {
        this.element.volume = e;
      },
      trackEnded: function (e) {
        this.skipTo.apply(this, [0]),
          this.settings.loop || this.pause.apply(this),
          this.settings.trackEnded.apply(this);
      },
    });
  var r = function (e, t) {
    var a = [];
    if ((t = t || document).getElementsByClassName)
      a = t.getElementsByClassName(e);
    else {
      var s,
        n,
        r = t.getElementsByTagName("*"),
        i = new RegExp("(^|\\s)" + e + "(\\s|$)");
      for (s = 0, n = r.length; s < n; s++)
        i.test(r[s].className) && a.push(r[s]);
    }
    return a.length > 1 ? a : a[0];
  };
})("audiojs", "audiojsInstance", this);
/**
 * jquery.matchHeight.js master
 * http://brm.io/jquery-match-height/
 * License: MIT
 */

!(function (t) {
  var e = -1,
    a = -1,
    o = function (t) {
      return parseFloat(t) || 0;
    },
    i = function (e) {
      var a = t(e),
        i = null,
        n = [];
      return (
        a.each(function () {
          var e = t(this),
            a = e.offset().top - o(e.css("margin-top")),
            r = n.length > 0 ? n[n.length - 1] : null;
          null === r
            ? n.push(e)
            : Math.floor(Math.abs(i - a)) <= 1
            ? (n[n.length - 1] = r.add(e))
            : n.push(e),
            (i = a);
        }),
        n
      );
    },
    n = function (e) {
      var a = { byRow: !0, property: "height", target: null, remove: !1 };
      return "object" == typeof e
        ? t.extend(a, e)
        : ("boolean" == typeof e
            ? (a.byRow = e)
            : "remove" === e && (a.remove = !0),
          a);
    },
    r = (t.fn.matchHeight = function (e) {
      var a = n(e);
      if (a.remove) {
        var o = this;
        return (
          this.css(a.property, ""),
          t.each(r._groups, function (t, e) {
            e.elements = e.elements.not(o);
          }),
          this
        );
      }
      return this.length <= 1 && !a.target
        ? this
        : (r._groups.push({ elements: this, options: a }),
          r._apply(this, a),
          this);
    });
  (r.version = "master"),
    (r._groups = []),
    (r._throttle = 80),
    (r._maintainScroll = !1),
    (r._beforeUpdate = null),
    (r._afterUpdate = null),
    (r._rows = i),
    (r._parse = o),
    (r._parseOptions = n),
    (r._apply = function (e, a) {
      var s = n(a),
        h = t(e),
        c = [h],
        l = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        d = h.parents().filter(":hidden");
      return (
        d.each(function () {
          var e = t(this);
          e.data("style-cache", e.attr("style"));
        }),
        d.css("display", "block"),
        s.byRow &&
          !s.target &&
          (h.each(function () {
            var e = t(this),
              a = e.css("display");
            "inline-block" !== a && "inline-flex" !== a && (a = "block"),
              e.data("style-cache", e.attr("style")),
              e.css({
                display: a,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden",
              });
          }),
          (c = i(h)),
          h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "");
          })),
        t.each(c, function (e, a) {
          var i = t(a),
            n = 0;
          if (s.target) n = s.target.outerHeight(!1);
          else {
            if (s.byRow && i.length <= 1) return void i.css(s.property, "");
            i.each(function () {
              var e = t(this),
                a = e.css("display");
              "inline-block" !== a && "inline-flex" !== a && (a = "block");
              var o = { display: a };
              (o[s.property] = ""),
                e.css(o),
                e.outerHeight(!1) > n && (n = e.outerHeight(!1)),
                e.css("display", "");
            });
          }
          i.each(function () {
            var e = t(this),
              a = 0;
            (s.target && e.is(s.target)) ||
              ("border-box" !== e.css("box-sizing") &&
                ((a +=
                  o(e.css("border-top-width")) +
                  o(e.css("border-bottom-width"))),
                (a += o(e.css("padding-top")) + o(e.css("padding-bottom")))),
              e.css(s.property, n - a + "px"));
          });
        }),
        d.each(function () {
          var e = t(this);
          e.attr("style", e.data("style-cache") || null);
        }),
        r._maintainScroll &&
          t(window).scrollTop((l / p) * t("html").outerHeight(!0)),
        this
      );
    }),
    (r._applyDataApi = function () {
      var e = {};
      t("[data-match-height], [data-mh]").each(function () {
        var a = t(this),
          o = a.attr("data-mh") || a.attr("data-match-height");
        e[o] = o in e ? e[o].add(a) : a;
      }),
        t.each(e, function () {
          this.matchHeight(!0);
        });
    });
  var s = function (e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups),
      t.each(r._groups, function () {
        r._apply(this.elements, this.options);
      }),
      r._afterUpdate && r._afterUpdate(e, r._groups);
  };
  (r._update = function (o, i) {
    if (i && "resize" === i.type) {
      var n = t(window).width();
      if (n === e) return;
      e = n;
    }
    o
      ? -1 === a &&
        (a = setTimeout(function () {
          s(i), (a = -1);
        }, r._throttle))
      : s(i);
  }),
    t(r._applyDataApi),
    t(window).bind("load", function (t) {
      r._update(!1, t);
    }),
    t(window).bind("resize orientationchange", function (t) {
      r._update(!0, t);
    });
})(jQuery);
(function ($) {
  $.fn.extend({
    rotaterator: function (options) {
      var defaults = {
        fadeSpeed: 500,
        pauseSpeed: 100,
        child: null,
      };

      var options = $.extend(defaults, options);

      return this.each(function () {
        var o = options;
        var obj = $(this);
        var items = $(obj.children(), obj);
        items.each(function () {
          $(this).hide();
        });
        if (!o.child) {
          var next = $(obj).children(":first");
        } else {
          var next = o.child;
        }
        $(next).fadeIn(o.fadeSpeed, function () {
          $(next)
            .delay(o.pauseSpeed)
            .fadeOut(o.fadeSpeed, function () {
              var next = $(this).next();
              if (next.length == 0) {
                next = $(obj).children(":first");
              }
              $(obj).rotaterator({
                child: next,
                fadeSpeed: o.fadeSpeed,
                pauseSpeed: o.pauseSpeed,
              });
            });
        });
      });
    },
  });
})(jQuery);
/*!
Mailchimp Ajax Submit
jQuery Plugin

*/
(function ($) {
  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5,
    },
    translations: { en: null },
    init: function (selector, options) {
      $(selector).ajaxChimp(options);
    },
  };
  $.fn.ajaxChimp = function (options) {
    $(this).each(function (i, elem) {
      var form = $(elem);
      var email = form.find("input[type=text]");
      var label = form.find("label[for=" + email.attr("id") + "]");
      var settings = $.extend(
        { url: form.attr("action"), language: "en" },
        options
      );
      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");
      form.submit(function () {
        var msg;
        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid");
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;
            try {
              var parts = resp.msg.split(" - ", 2);
              if (parts[1] === undefined) {
                msg = resp.msg;
              } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1];
                } else {
                  index = -1;
                  msg = resp.msg;
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg;
            }
          }
          if (
            settings.language !== "en" &&
            $.ajaxChimp.responses[msg] !== undefined &&
            $.ajaxChimp.translations &&
            $.ajaxChimp.translations[settings.language] &&
            $.ajaxChimp.translations[settings.language][
              $.ajaxChimp.responses[msg]
            ]
          ) {
            msg =
              $.ajaxChimp.translations[settings.language][
                $.ajaxChimp.responses[msg]
              ];
          }
          label.html(msg);
          label.show(2e3);
          if (settings.callback) {
            settings.callback(resp);
          }
        }
        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value;
        });
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function (resp, text) {
            console.log("mailchimp ajax submit error: " + text);
          },
        });
        var submitMsg = "Submitting...";
        if (
          settings.language !== "en" &&
          $.ajaxChimp.translations &&
          $.ajaxChimp.translations[settings.language] &&
          $.ajaxChimp.translations[settings.language]["submit"]
        ) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"];
        }
        label.html(submitMsg).show(2e3);
        return false;
      });
    });
    return this;
  };
})(jQuery);
