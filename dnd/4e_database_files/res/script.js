'use strict';
/**
 * https://github.com/LZMA-JS/LZMA-JS
 * Copyright 2016 Nathan Rugg <nmrugg@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
var e = function() {
    "use strict";

    function r(e, r) {
        postMessage({
            action: nr,
            cbn: r,
            result: e
        })
    }

    function o(e) {
        var r = [];
        return r[e - 1] = void 0, r
    }

    function n(e, r) {
        return i(e[0] + r[0], e[1] + r[1])
    }

    function t(e, r) {
        var o, n;
        return e[0] == r[0] && e[1] == r[1] ? 0 : (o = 0 > e[1], n = 0 > r[1], o && !n ? -1 : !o && n ? 1 : d(e, r)[1] < 0 ? -1 : 1)
    }

    function i(e, r) {
        var o, n;
        for (r %= 0x10000000000000000, e %= 0x10000000000000000, o = r % ir, n = Math.floor(e / ir) * ir, r = r - o + n, e = e - n + o; 0 > e;) e += ir, r -= ir;
        for (; e > 4294967295;) e -= ir, r += ir;
        for (r %= 0x10000000000000000; r > 0x7fffffff00000000;) r -= 0x10000000000000000;
        for (; - 0x8000000000000000 > r;) r += 0x10000000000000000;
        return [e, r]
    }

    function u(e) {
        return e >= 0 ? [e, 0] : [e + ir, -ir]
    }

    function s(e) {
        return e[0] >= 2147483648 ? ~~Math.max(Math.min(e[0] - ir, 2147483647), -2147483648) : ~~Math.max(Math.min(e[0], 2147483647), -2147483648)
    }

    function d(e, r) {
        return i(e[0] - r[0], e[1] - r[1])
    }

    function c(e, r) {
        return e.ab = r, e.cb = 0, e.O = r.length, e
    }

    function m(e) {
        return e.cb >= e.O ? -1 : 255 & e.ab[e.cb++]
    }

    function a(e) {
        return e.ab = o(32), e.O = 0, e
    }

    function _(e) {
        var r = e.ab;
        return r.length = e.O, r
    }

    function f(e, r, o, n) {
        p(r, o, e.ab, e.O, n), e.O += n
    }

    function p(e, r, o, n, t) {
        for (var i = 0; t > i; ++i) o[n + i] = e[r + i]
    }

    function D(e, r, o) {
        var n, t, i, s, d = "",
            c = [];
        for (t = 0; 5 > t; ++t) {
            if (i = m(r), -1 == i) throw Error("truncated input");
            c[t] = i << 24 >> 24
        }
        if (n = N({}), !z(n, c)) throw Error("corrupted input");
        for (t = 0; 64 > t; t += 8) {
            if (i = m(r), -1 == i) throw Error("truncated input");
            i = i.toString(16), 1 == i.length && (i = "0" + i), d = i + "" + d
        }
        /^0+$|^f+$/i.test(d) ? e.N = ur : (s = parseInt(d, 16), e.N = s > 4294967295 ? ur : u(s)), e.Q = B(n, r, o, e.N)
    }

    function l(e, r) {
        return e.S = a({}), D(e, c({}, r), e.S), e
    }

    function g(e, r, o) {
        var n = e.D - r - 1;
        for (0 > n && (n += e.c); 0 != o; --o) n >= e.c && (n = 0), e.x[e.D++] = e.x[n++], e.D >= e.c && w(e)
    }

    function v(e, r) {
        (null == e.x || e.c != r) && (e.x = o(r)), e.c = r, e.D = 0, e.w = 0
    }

    function w(e) {
        var r = e.D - e.w;
        r && (f(e.V, e.x, e.w, r), e.D >= e.c && (e.D = 0), e.w = e.D)
    }

    function R(e, r) {
        var o = e.D - r - 1;
        return 0 > o && (o += e.c), e.x[o]
    }

    function h(e, r) {
        e.x[e.D++] = r, e.D >= e.c && w(e)
    }

    function P(e) {
        w(e), e.V = null
    }

    function C(e) {
        return e -= 2, 4 > e ? e : 3
    }

    function S(e) {
        return 4 > e ? 0 : 10 > e ? e - 3 : e - 6
    }

    function M(e, r) {
        return e.h = r, e.bb = null, e.X = 1, e
    }

    function L(e) {
        if (!e.X) throw Error("bad state");
        if (e.bb) throw Error("No encoding");
        return y(e), e.X
    }

    function y(e) {
        var r = I(e.h);
        if (-1 == r) throw Error("corrupted input");
        e.$ = ur, e.Z = e.h.d, (r || t(e.h.U, sr) >= 0 && t(e.h.d, e.h.U) >= 0) && (w(e.h.b), P(e.h.b), e.h.a.K = null, e.X = 0)
    }

    function B(e, r, o, n) {
        return e.a.K = r, P(e.b), e.b.V = o, b(e), e.f = 0, e.l = 0, e.T = 0, e.R = 0, e._ = 0, e.U = n, e.d = sr, e.I = 0, M({}, e)
    }

    function I(e) {
        var r, o, i, d, c, m;
        if (m = s(e.d) & e.P, Q(e.a, e.q, (e.f << 4) + m)) {
            if (Q(e.a, e.E, e.f)) i = 0, Q(e.a, e.s, e.f) ? (Q(e.a, e.u, e.f) ? (Q(e.a, e.r, e.f) ? (o = e._, e._ = e.R) : o = e.R, e.R = e.T) : o = e.T, e.T = e.l, e.l = o) : Q(e.a, e.n, (e.f << 4) + m) || (e.f = 7 > e.f ? 9 : 11, i = 1), i || (i = x(e.o, e.a, m) + 2, e.f = 7 > e.f ? 8 : 11);
            else if (e._ = e.R, e.R = e.T, e.T = e.l, i = 2 + x(e.C, e.a, m), e.f = 7 > e.f ? 7 : 10, c = q(e.j[C(i)], e.a), c >= 4) {
                if (d = (c >> 1) - 1, e.l = (2 | 1 & c) << d, 14 > c) e.l += J(e.J, e.l - c - 1, e.a, d);
                else if (e.l += U(e.a, d - 4) << 4, e.l += F(e.t, e.a), 0 > e.l) return -1 == e.l ? 1 : -1
            } else e.l = c;
            if (t(u(e.l), e.d) >= 0 || e.l >= e.m) return -1;
            g(e.b, e.l, i), e.d = n(e.d, u(i)), e.I = R(e.b, 0)
        } else r = Z(e.k, s(e.d), e.I), e.I = 7 > e.f ? T(r, e.a) : $(r, e.a, R(e.b, e.l)), h(e.b, e.I), e.f = S(e.f), e.d = n(e.d, dr);
        return 0
    }

    function N(e) {
        e.b = {}, e.a = {}, e.q = o(192), e.E = o(12), e.s = o(12), e.u = o(12), e.r = o(12), e.n = o(192), e.j = o(4), e.J = o(114), e.t = K({}, 4), e.C = G({}), e.o = G({}), e.k = {};
        for (var r = 0; 4 > r; ++r) e.j[r] = K({}, 6);
        return e
    }

    function b(e) {
        e.b.w = 0, e.b.D = 0, X(e.q), X(e.n), X(e.E), X(e.s), X(e.u), X(e.r), X(e.J), H(e.k);
        for (var r = 0; 4 > r; ++r) X(e.j[r].B);
        A(e.C), A(e.o), X(e.t.B), V(e.a)
    }

    function z(e, r) {
        var o, n, t, i, u, s, d;
        if (5 > r.length) return 0;
        for (d = 255 & r[0], t = d % 9, s = ~~(d / 9), i = s % 5, u = ~~(s / 5), o = 0, n = 0; 4 > n; ++n) o += (255 & r[1 + n]) << 8 * n;
        return o > 99999999 || !W(e, t, i, u) ? 0 : O(e, o)
    }

    function O(e, r) {
        return 0 > r ? 0 : (e.z != r && (e.z = r, e.m = Math.max(e.z, 1), v(e.b, Math.max(e.m, 4096))), 1)
    }

    function W(e, r, o, n) {
        if (r > 8 || o > 4 || n > 4) return 0;
        E(e.k, o, r);
        var t = 1 << n;
        return k(e.C, t), k(e.o, t), e.P = t - 1, 1
    }

    function k(e, r) {
        for (; r > e.e; ++e.e) e.G[e.e] = K({}, 3), e.H[e.e] = K({}, 3)
    }

    function x(e, r, o) {
        if (!Q(r, e.M, 0)) return q(e.G[o], r);
        var n = 8;
        return n += Q(r, e.M, 1) ? 8 + q(e.L, r) : q(e.H[o], r)
    }

    function G(e) {
        return e.M = o(2), e.G = o(16), e.H = o(16), e.L = K({}, 8), e.e = 0, e
    }

    function A(e) {
        X(e.M);
        for (var r = 0; e.e > r; ++r) X(e.G[r].B), X(e.H[r].B);
        X(e.L.B)
    }

    function E(e, r, n) {
        var t, i;
        if (null == e.F || e.g != n || e.y != r)
            for (e.y = r, e.Y = (1 << r) - 1, e.g = n, i = 1 << e.g + e.y, e.F = o(i), t = 0; i > t; ++t) e.F[t] = j({})
    }

    function Z(e, r, o) {
        return e.F[((r & e.Y) << e.g) + ((255 & o) >>> 8 - e.g)]
    }

    function H(e) {
        var r, o;
        for (o = 1 << e.g + e.y, r = 0; o > r; ++r) X(e.F[r].v)
    }

    function T(e, r) {
        var o = 1;
        do o = o << 1 | Q(r, e.v, o); while (256 > o);
        return o << 24 >> 24
    }

    function $(e, r, o) {
        var n, t, i = 1;
        do
            if (t = o >> 7 & 1, o <<= 1, n = Q(r, e.v, (1 + t << 8) + i), i = i << 1 | n, t != n) {
                for (; 256 > i;) i = i << 1 | Q(r, e.v, i);
                break
            } while (256 > i);
        return i << 24 >> 24
    }

    function j(e) {
        return e.v = o(768), e
    }

    function K(e, r) {
        return e.A = r, e.B = o(1 << r), e
    }

    function q(e, r) {
        var o, n = 1;
        for (o = e.A; 0 != o; --o) n = (n << 1) + Q(r, e.B, n);
        return n - (1 << e.A)
    }

    function F(e, r) {
        var o, n, t = 1,
            i = 0;
        for (n = 0; e.A > n; ++n) o = Q(r, e.B, t), t <<= 1, t += o, i |= o << n;
        return i
    }

    function J(e, r, o, n) {
        var t, i, u = 1,
            s = 0;
        for (i = 0; n > i; ++i) t = Q(o, e, r + u), u <<= 1, u += t, s |= t << i;
        return s
    }

    function Q(e, r, o) {
        var n, t = r[o];
        return n = (e.i >>> 11) * t, (-2147483648 ^ n) > (-2147483648 ^ e.p) ? (e.i = n, r[o] = t + (2048 - t >>> 5) << 16 >> 16, -16777216 & e.i || (e.p = e.p << 8 | m(e.K), e.i <<= 8), 0) : (e.i -= n, e.p -= n, r[o] = t - (t >>> 5) << 16 >> 16, -16777216 & e.i || (e.p = e.p << 8 | m(e.K), e.i <<= 8), 1)
    }

    function U(e, r) {
        var o, n, t = 0;
        for (o = r; 0 != o; --o) e.i >>>= 1, n = e.p - e.i >>> 31, e.p -= e.i & n - 1, t = t << 1 | 1 - n, -16777216 & e.i || (e.p = e.p << 8 | m(e.K), e.i <<= 8);
        return t
    }

    function V(e) {
        e.p = 0, e.i = -1;
        for (var r = 0; 5 > r; ++r) e.p = e.p << 8 | m(e.K)
    }

    function X(e) {
        for (var r = e.length - 1; r >= 0; --r) e[r] = 1024
    }

    function Y(e) {
        for (var r, o, n, t = 0, i = 0, u = e.length, s = [], d = []; u > t; ++t, ++i) {
            if (r = 255 & e[t], 128 & r)
                if (192 == (224 & r)) {
                    if (t + 1 >= u) return e;
                    if (o = 255 & e[++t], 128 != (192 & o)) return e;
                    d[i] = (31 & r) << 6 | 63 & o
                } else {
                    if (224 != (240 & r)) return e;
                    if (t + 2 >= u) return e;
                    if (o = 255 & e[++t], 128 != (192 & o)) return e;
                    if (n = 255 & e[++t], 128 != (192 & n)) return e;
                    d[i] = (15 & r) << 12 | (63 & o) << 6 | 63 & n
                }
            else {
                if (!r) return e;
                d[i] = r
            }
            16383 == i && (s.push(String.fromCharCode.apply(String, d)), i = -1)
        }
        return i > 0 && (d.length = i, s.push(String.fromCharCode.apply(String, d))), s.join("")
    }

    function er(e) {
        return e[1] + e[0]
    }

    function rr(e, o, n) {
        function t() {
            try {
                for (var e, r = 0, u = (new Date).getTime(); L(c.d.Q);)
                    if (++r % 1e3 == 0 && (new Date).getTime() - u > 200) return s && (i = er(c.d.Q.h.d) / d, n(i)), tr(t, 0), 0;
                n(1), e = Y(_(c.d.S)), tr(o.bind(null, e), 0)
            } catch (m) {
                o(null, m)
            }
        }
        var i, u, s, d, c = {},
            m = void 0 === o && void 0 === n;
        if ("function" != typeof o && (u = o, o = n = 0), n = n || function(e) {
                return void 0 !== u ? r(s ? e : -1, u) : void 0
            }, o = o || function(e, r) {
                return void 0 !== u ? postMessage({
                    action: or,
                    cbn: u,
                    result: e,
                    error: r
                }) : void 0
            }, m) {
            for (c.d = l({}, e); L(c.d.Q););
            return Y(_(c.d.S))
        }
        try {
            c.d = l({}, e), d = er(c.d.N), s = d > -1, n(0)
        } catch (a) {
            return o(null, a)
        }
        tr(t, 0)
    }
    var or = 2,
        nr = 3,
        tr = "function" == typeof setImmediate ? setImmediate : setTimeout,
        ir = 4294967296,
        ur = [4294967295, -ir],
        sr = [0, 0],
        dr = [1, 0];
    return "undefined" == typeof onmessage || "undefined" != typeof window && void 0 !== window.document || ! function() {
        onmessage = function(r) {
            r && r.W && r.W.action == or && e.decompress(r.W.W, r.W.cbn)
        }
    }(), {
        decompress: rr
    }
}();
this.LZMA = this.LZMA_WORKER = e;
String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
        return t = t || 0, this.substr(t, e.length) === e
    }), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
        value: function(e) {
            if (this == null) throw new TypeError("this is null or not defined");
            var t = Object(this),
                n = t.length >>> 0,
                r = arguments[1],
                i = r >> 0,
                s = i < 0 ? Math.max(n + i, 0) : Math.min(i, n),
                o = arguments[2],
                u = o === undefined ? n : o >> 0,
                a = u < 0 ? Math.max(n + u, 0) : Math.min(u, n);
            while (s < a) t[s] = e, s++;
            return t
        }
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            if (this == null) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if (typeof e != "function") throw new TypeError("predicate must be a function");
            var r = arguments[1],
                i = 0;
            while (i < n) {
                var s = t[i];
                if (e.call(r, s, i, t)) return s;
                i++
            }
            return undefined
        }
    }),
    function(e) {
        typeof e.matches != "function" && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function(t) {
            var n = this,
                r = (n.document || n.ownerDocument).querySelectorAll(t),
                i = 0;
            while (r[i] && r[i] !== n) ++i;
            return Boolean(r[i])
        }), typeof e.closest != "function" && (e.closest = function(t) {
            var n = this;
            while (n && n.nodeType === 1) {
                if (n.matches(t)) return n;
                n = n.parentNode
            }
            return null
        })
    }(window.Element.prototype),
    function(t) {
        var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~",
            r = [];
        for (var i = 0, s = n.length; i < s; ++i) r[n.charCodeAt(i)] = i;
        var o = [1, 85, 7225, 614125, 52200625];
        t.Base85 = {
            decode: function(t) {
                var n = 5,
                    i = 0,
                    s = 0,
                    u = new Uint8Array(Math.ceil(t.length * .8) + 4);
                for (var a = 0, f = t.length; a < f; ++a) {
                    i += r[t.charCodeAt(a)] * o[--n];
                    if (n === 0) {
                        for (var l = 24; l >= 0; l -= 8) u[s++] = i >>> l & 255;
                        i = 0, n = 5
                    }
                }
                if (n < 5) {
                    i /= o[n];
                    for (var l = (3 - n) * 8; l >= 0; l -= 8) u[s++] = i >>> l & 255
                }
                return new Uint8Array(u, 0, s)
            }
        }
    }(this || window || global),
    function() {
        "use strict";
        var t = this,
            n = function(t, n) {
                n === undefined && (n = t, t = document);
                if (!n) return [t];
                if (n.indexOf(" ") > 0 || !/^[#.]?\w+$/.test(n)) return t.querySelectorAll(n);
                if (n.charAt(0) === "#") {
                    var r = t.getElementById(n.substr(1));
                    return r ? [r] : []
                }
                return n.charAt(0) === "." ? t.getElementsByClassName(n.substr(1)) : t.getElementsByTagName(n)
            };
        return t && (t._ = n), n.get = function(t) {
            return n.getd.apply(this, n.ary(arguments).concat(undefined))
        }, n.getd = function(t) {
            var n = t,
                r = arguments.length - 1,
                i = arguments[r];
            for (var s = 1; s < r; s++) {
                if (n === null || n === undefined) return n;
                n = Object(n);
                var o = arguments[s];
                if (Array.isArray(o)) {
                    for (var u in o) {
                        var a = o[u];
                        if (a in n) {
                            n = n[a], u = null;
                            break
                        }
                    }
                    if (u !== null) return i
                } else {
                    if (!(o in n)) return i;
                    n = n[o]
                }
            }
            return n
        }, n.ary = function(t, n, r) {
            return Array.isArray(t) ? n || r ? t : t.slice(n, r) : t === null || t === undefined ? t : typeof t == "string" || typeof t == "function" || typeof t.length != "number" ? [t] : t.length <= 0 ? [] : n || r ? Array.prototype.slice.call(t, n, r) : Array.from ? Array.from(t) : Array.prototype.slice.call(t)
        }, n.array = function(t, r, i) {
            return t === null || t === undefined ? [] : n.ary(t, r, i)
        }, n.forEach = function(t, n, r) {
            if (t === null || t === undefined || n === null || n === undefined) return;
            return t.forEach ? t.forEach(n, r) : Array.prototype.forEach.call(t, n, r)
        }, n.col = function(t, r) {
            return n.map(n.ary(t), r === undefined ? 0 : r)
        }, n.sorter = function(t, n) {
            var r = n ? -1 : 1,
                i = -r;
            return t === undefined || t === null ? function(t, n) {
                return t > n ? r : t < n ? i : 0
            } : typeof t == "function" ? function(n, s) {
                return n = t(n), s = t(s), n > s ? r : n < s ? i : 0
            } : function(n, s) {
                return n[t] > s[t] ? r : n[t] < s[t] ? i : 0
            }
        }, n.sorter.number = function(t, n) {
            var r = n ? -1 : 1,
                i = -r;
            return t === undefined || t === null ? function(t, n) {
                return +t > +n ? r : +t < +n ? i : 0
            } : function(n, s) {
                return +n[t] > +s[t] ? r : +n[t] < +s[t] ? i : 0
            }
        }, n.sort = function(t, r, i) {
            return n.ary(t).sort(n.sorter(r, i))
        }, n.mapper = function(t) {
            var r = arguments,
                i = r.length;
            return i <= 0 ? n.dummy() : i === 1 && typeof t == "string" ? function(n) {
                return n[t]
            } : function(t) {
                var s = [],
                    o = n.mapper._map;
                for (var u = 0; u < i; u++) s.push(o(t, r[u]));
                return i === 1 ? s[0] : s
            }
        }, n.mapper._map = function r(e, t) {
            if (n.is.literal(t)) return e[t];
            if (Array.isArray(t)) {
                for (var i = 0, s = t.length; i < s; i++) {
                    if (e === undefined || e === null) return e;
                    e = e[t[i]]
                }
                return e
            }
            var o = n.map();
            for (var u in t) o[u] = r(e, t[u]);
            return o
        }, n.map = function(t, r) {
            return arguments.length === 0 ? Object.create(null) : typeof r == "function" ? Array.prototype.map.call(t, r) : Array.prototype.map.apply(t, n.mapper.apply(null, n.ary(arguments, 1)))
        }, n.ucfirst = function(t) {
            return t ? String(t).substr(0, 1).toUpperCase() + t.substr(1) : t
        }, n.ucword = function(t) {
            return t ? String(t).split(/\b(?=[a-zA-Z])/g).map(n.ucfirst).join("") : t
        }, n.pref = function i(e, t) {
            function a(e, t) {
                var n = r.getItem(e);
                if (n && n.match(/^\t\n\r(?=\S).*(?:\S)\n\r\t$/)) try {
                    n = JSON.parse(n)
                } catch (i) {} else if (n === null) return t;
                return n
            }
            arguments.length <= 1 && (t = null);
            if (n.pref.hasStorage()) {
                var r = localStorage;
                if (e === undefined) return Array(r.length).fill(undefined).map(function(t, n) {
                    return r.key(n)
                });
                if (Array.isArray(e)) return n.extend(e.map(function(t) {
                    return i(t)
                }), t);
                if (n.is.object(e)) {
                    var s = {};
                    for (var o in e) {
                        var u = a(e[o]);
                        u !== undefined && (s[o] = u)
                    }
                    return n.extend(s, t)
                }
                return a(e, t)
            }
            return e === undefined ? [] : t
        }, n.pref.set = function s(e, t) {
            function o(e, t) {
                t === undefined ? r.removeItem(e) : (n.assert(n.is.literal(t) || t.__proto__ === null || t.__proto__ === Object.prototype || t instanceof Array, "Preference value must be literal or simple object."), typeof t != "string" && (n.is.literal(t) || n.is.object(t)) && (t = "	\n\r" + JSON.stringify(t) + "\n\r	"), r.setItem(e, t))
            }
            if (n.pref.hasStorage()) {
                var r = window.localStorage;
                if (n.is.literal(e)) o(e, t);
                else if (Array.isArray(e)) e.forEach(function(e, r) {
                    s(e, n.getd(t, r, t))
                });
                else {
                    if (!n.is.object(e)) throw "[sparrow.pref.set] Unknown key, must be string, array, or object.";
                    for (var i in e) o(i, e[i])
                }
            }
        }, n.pref.hasStorage = function() {
            try {
                return window.localStorage ? localStorage.removeItem("__dummy__") || !0 : !1
            } catch (t) {
                return !1
            }
        }, n.dummy = function() {}, n.echo = function(t) {
            return t
        }, n.call = function(t, r, i) {
            return t === undefined || t === null ? undefined : t.apply(r, n.ary(arguments, 2))
        }, n.callonce = function(t) {
            return t ? function() {
                if (!t) return;
                var n = t;
                return t = null, n.apply(this, arguments)
            } : n.dummy
        }, this && this.setImmediate ? (n.setImmediate = this.setImmediate.bind(this), n.clearImmediate = this.clearImmediate.bind(this)) : this && t.requestAnimationFrame ? (n.setImmediate = this.requestAnimationFrame.bind(this), n.clearImmediate = this.cancelAnimationFrame.bind(this)) : (n.setImmediate = function(t) {
            return setTimeout(t, 0)
        }, n.clearImmediate = this.clearTimeout), n.js = function(t, r) {
            function a(e, r) {
                if (u) return;
                u = !0, r && n.info(r), n.call(e, o, i, t), n.call(t.ondone || null, o, i, t), n.remove(o)
            }
            typeof t == "string" && (t = {
                url: t
            }), r !== undefined && (t.onload = r);
            if (t.validate && t.validate.call(null, i, t)) return n.setImmediate(function() {
                a(t.onload)
            });
            var i = t.url,
                s = {
                    src: i,
                    parent: document.body || document.head
                };
            t.charset && (s.charset = t.charset), t.type && (s.type = t.type), t.async && (s.async = t.async);
            var o = n.create("script", s);
            n.info("[JS] Load script: " + i);
            var u = !1;
            return o.addEventListener("load", function() {
                n.setImmediate(function() {
                    if (t.validate && !n.call(t.validate, o, i, t)) return a(t.onerror, "[JS] Script exists but fails to load or validate: " + i);
                    a(t.onload, "[JS] Script loaded: " + i)
                })
            }), o.addEventListener("error", function(n) {
                a(t.onerror, "[JS] Script error or not found: " + i)
            }), o
        }, n.is = {
            ie: function() {
                var t = /\bMSIE \d|\bTrident\/\d\b./.test(navigator.userAgent);
                return n.is.ie = function() {
                    return t
                }, t
            },
            firefox: function() {
                var t = /\bGecko\/\d{8}/.test(navigator.userAgent);
                return n.is.firefox = function() {
                    return t
                }, t
            },
            literal: function(t) {
                if (t === undefined || t === null) return t;
                var n = typeof t;
                return n === "boolean" || n === "number" || n === "string"
            },
            object: function(t) {
                if (t === undefined || t === null) return t;
                var n = typeof t;
                return n === "object" || n === "function"
            }
        }, n.html = function o(e, t) {
            if (t === undefined && typeof e == "string") {
                var r, i = o.range || (o.range = document.createRange());
                try {
                    r = i.createContextualFragment(e)
                } catch (s) {
                    r = i.createContextualFragment("<body>" + e + "</body>")
                }
                var u = r.children || r.childNodes;
                return u.length > 1 ? r : u[0]
            }
            n.forEach(n.domList(e), function(n) {
                n.innerHTML = t
            })
        }, n.html.contains = function(t, n) {
            return t === n || t.compareDocumentPosition(n) & 16
        }, n.log = function(r, i) {
            i === undefined && (i = r, r = "log"), t.console && (t.console[r] || (r = "log"), r === "log" && (t.console.table && Array.isArray(i) ? r = "table" : t.console.dir && n.is.object(i) && (r = "dir")), t.console[r](i))
        }, n.info = function(t) {
            n.log("info", t)
        }, n.warn = function(t) {
            n.log("warn", t)
        }, n.error = function(t) {
            n.log("error", t)
        }, n.alert = function(t) {
            n.alert.timeout || (n.alert.timeout = setTimeout(function() {
                n.alert.timeout = 0, alert(n.alert.log), n.alert.log = []
            }, 50)), n.alert.log.indexOf(t) < 0 && n.alert.log.push(t)
        }, n.alert.timeout = 0, n.alert.log = [], n.time = function(r) {
            var i = n.time,
                s = t.performance ? performance.now() : Date.now();
            if (r === undefined) return i.base = s, i.last = null, s;
            var o = Math.round((s - i.base) * 1e3) / 1e3,
                u = Math.round((s - i.last) * 1e3) / 1e3,
                a = i.last ? "ms,Δ" + u : "";
            return n.info(r + " (Σ" + o + a + "ms)"), i.last = s, [u, o]
        }, t.console && t.console.assert ? n.assert = t.console.assert.bind(t.console) : n.assert = n.dummy(), n.log.group = function(r) {
            return t.console && t.console.group ? t.console.group(r) : n.log(r)
        }, n.log.collapse = function(r) {
            return t.console && t.console.groupCollapsed ? t.console.groupCollapsed(r) : n.log(r)
        }, n.log.end = function() {
            if (t.console && t.console.groupEnd) return t.console.groupEnd()
        }, n.escHtml = function(t) {
            return /[<&'"]/.test(t) ? t.replace(/[&<"']/g, function(e) {
                return {
                    "&": "&amp;",
                    "<": "&lt;",
                    '"': "&quot;",
                    "'": "&#39;"
                } [e]
            }) : t
        }, n.escJs = function(t) {
            return t.replace(/\r?\n/g, "\\n").replace(/'"/g, "\\$0")
        }, n.escRegx = function(t) {
            return t.replace(/([()?*+.\\{}[\]])/g, "\\$1")
        }, n.btoa = function(t) {
            return btoa(encodeURIComponent(t))
        }, n.atob = function(t) {
            return decodeURIComponent(atob(t))
        }, n.round = function(t, n) {
            var r = Math.pow(10, ~~n);
            return Math.round(t *= r) / r
        }, n.si = function(t, r) {
            if (typeof t == "string") {
                if (!/^-?\d+(\.\d+)?[kmgtp]$/i.test(t)) return +t;
                var i = t.length - 1,
                    s = t.charAt(i).toLowerCase();
                return t.substr(0, i) * {
                    k: 1e3,
                    m: 1e6,
                    g: 1e9,
                    t: 1e12,
                    p: 1e15
                } [s]
            }
            var o = 0;
            while (t > 1e3 || t < -1e3) t /= 1e3, ++o;
            return n.round(t, r) + ["", "k", "M", "G", "T", "P"][o]
        }, n.extend = function(t, n) {
            var r = [],
                i = Object.getOwnPropertyNames(t);
            Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t)));
            for (var s = 1, o = arguments.length; s < o; s++) {
                var u = arguments[s];
                if (u === undefined || u === null) continue;
                var a = Object.getOwnPropertyNames(u);
                Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(u)));
                for (var s in a) {
                    var f = a[s];
                    i.indexOf(f) < 0 && (r[f] = Object.getOwnPropertyDescriptor(u, f), i.push(f))
                }
            }
            return r.length && Object.defineProperties(t, r), t
        }, n.prop = function(t, r, i) {
            t = n.domList(t), n.assert(n.is.object(r), "[sparrow.prop] Set target must be a map object."), n.assert(!(i && n.get(t, 0) instanceof Node), "[sparrow.prop] Property flags cannot be set on DOM elements");
            if (!i || i === "^" || !Object.defineProperties) var s = function(t) {
                for (var n in r) t[n] = r[n]
            };
            else {
                i = i.toLowerCase();
                var o = {},
                    u = i.indexOf("c") < 0,
                    a = i.indexOf("e") < 0,
                    f = i.indexOf("w") < 0;
                for (var l in r) o[l] = {
                    value: r[l],
                    configurable: u,
                    enumerable: a,
                    writable: f
                };
                var s = function(t) {
                    Object.defineProperties(t, prop)
                }
            }
            return n.forEach(t, s), t
        }, n.noDef = function(t) {
            return t && t.preventDefault && t.preventDefault(), !1
        }, n.parent = function(t, r) {
            if (!t) return t;
            if (typeof r == "string") {
                var i = n.array(n(r));
                r = function(e) {
                    return i.indexOf(e) >= 0
                }
            } else r === undefined && (r = function() {
                return !0
            });
            do t = t.parentNode; while (t !== null && !r(t));
            return t
        }, n.create = function(t, r) {
            var i = document.createElement(t);
            return r && (typeof r != "object" ? i.textContent = r : n.attr(i, r)), i
        }, n.domList = function(t) {
            return typeof t == "string" ? n(t) : t instanceof Element || t.length === undefined || t instanceof Window ? [t] : t
        }, n.attr = function(t, r, i) {
            var s = r;
            return n.is.literal(r) && (s = {}, s[r] = i), t = n.domList(t), n.forEach(t, function(t) {
                for (var r in s) {
                    var i = s[r];
                    switch (r) {
                        case "text":
                        case "textContent":
                            t.textContent = s.text;
                            break;
                        case "html":
                        case "innerHTML":
                            t.innerHTML = s.html;
                            break;
                        case "class":
                        case "className":
                            t.className = i;
                            break;
                        case "parent":
                        case "parentNode":
                            i && i.appendChild ? i.appendChild(t) : !i && t.parentNode && t.parentNode.removeChild(t);
                            break;
                        case "child":
                        case "children":
                            while (t.firstChild) t.removeChild(t.firstChild);
                            i && n.forEach(n.domList(i), function(n) {
                                n && t.appendChild(n)
                            });
                            break;
                        case "style":
                            if (typeof i == "object") {
                                n.style(t, i);
                                break
                            };
                        default:
                            r.substr(0, 2) === "on" ? t.addEventListener(r.substr(2), i) : r.substr(0, 5) === "data-" ? t.dataset[r.substr(5)] = i : i !== undefined ? t.setAttribute(r, i) : t.removeAttribute(r)
                    }
                }
            }), t
        }, n.style = function(t, r, i) {
            var s = r;
            return typeof s == "string" && (s = {}, s[r] = i), t = n.domList(t), n.forEach(t, function(t) {
                for (var n in s) s[n] !== undefined ? t.style[n] = s[n] : (t.style[n] = "", delete t.style[n])
            }), t
        }, n.show = function(t) {
            return n.style(t, "display", undefined)
        }, n.hide = function(t) {
            return n.style(t, "display", "none")
        }, n.visible = function(t, r) {
            return r ? n.show(t) : n.hide(t)
        }, n.clear = function(t) {
            return t = n.domList(t), n.forEach(t, function(t) {
                var n = t.firstChild;
                while (n) t.removeChild(n), n = t.firstChild
            }), t
        }, document.head.remove ? n.remove = function(t, r) {
            return r = r ? n(t, r) : t, r && n.forEach(n.domList(r), function(t) {
                t.remove()
            }), r
        } : n.remove = function(t, r) {
            return r = r ? n(t, r) : t, r && n.forEach(n.domList(r), function(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }), r
        }, n.l = function(t, r, i) {
            var s = n.l,
                o = s.getset(s.currentLocale, t, undefined);
            return o === undefined && (o = r !== undefined ? r : t), arguments.length > 2 ? arguments.length === 3 ? s.format("" + o, i) : s.format.apply(this, [o].concat(n.ary(arguments, 2))) : o
        }, n.l.format = function(t, n) {
            for (var r = 1, i = arguments.length; r < i; r++) t = t.replace("%" + r, arguments[r]);
            return t
        }, n.l.currentLocale = "en", n.l.fallbackLocale = "en", n.l.data = n.map(), n.l.saveKey = "sparrow.l.locale", n.l.setLocale = function(t) {
            if (!t) return;
            if (t === n.l.currentLocale) return;
            n.l.currentLocale = t
        }, n.l.saveLocale = function(t) {
            t ? (n.pref.set(n.l.saveKey, t), n.l.setLocale(t)) : n.pref.set(n.l.saveKey)
        }, n.l.detectLocale = function(t) {
            var r = n.l,
                i = n.pref(n.l.saveKey, n.get(window, "navigator", ["language", "userLanguage"]));
            return t && (r.fallbackLocale = t), i && r.setLocale(n.l.matchLocale(i, Object.keys(r.data))), r.currentLocale
        }, n.l.matchLocale = function(t, n) {
            if (n.indexOf(t) >= 0) return t;
            t = t.toLowerCase();
            var r = n.map(function(e) {
                    return e.toLowerCase()
                }),
                i = r.indexOf(t);
            return i >= 0 ? n[i] : (r = r.map(function(e) {
                return e.split("-")[0]
            }), i = r.indexOf(t.split("-")[0]), i >= 0 ? n[i] : null)
        }, n.l.getset = function(t, r, i) {
            var s = [t],
                o = n.l;
            r && (s = s.concat(r.split(".")));
            var u = s.pop(),
                a = o.data;
            for (var f = 0, l = s.length; f < l; f++) {
                var c = s[f];
                if (a[c] === undefined) {
                    if (i === undefined) return;
                    a[c] = n.map()
                }
                a = a[c]
            }
            if (i === undefined) return a[u] === undefined && t !== o.fallbackLocale ? o.getset(o.fallbackLocale, r, undefined) : a[u];
            a[u] = i
        }, n.l.set = function(t, r, i) {
            arguments.length == 2 && (i = r, r = t, t = n.l.currentLocale), n.l.getset(t, r, i)
        }, n.l.localise = function(t) {
            if (t === undefined) {
                t = document.documentElement;
                var r = n.l("title", null);
                typeof r == "string" && (document.title = r)
            }
            t.setAttribute("lang", n.l.currentLocale), n.forEach(n(t, ".i18n"), function(t) {
                var r = t.getAttribute("data-i18n");
                if (!r) {
                    switch (t.tagName.toUpperCase()) {
                        case "INPUT":
                            r = t.value;
                            break;
                        case "LINK":
                            r = t.getAttribute("title");
                            break;
                        case "MENUITEM":
                            r = t.getAttribute("label");
                            break;
                        default:
                            r = t.textContent
                    }
                    r && (r = r.trim());
                    if (!r) return t.classList.remove("i18n"), n.warn("i18 class without l10n key: " + t.tagName.toLowerCase() + (t.id ? "#" + t.id : "") + " / " + t.textContext);
                    r = r.trim(), t.setAttribute("data-i18n", r)
                }
                var i = n.l(r, r.split(".").pop());
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                        t.value = i;
                        break;
                    case "LINK":
                        t.setAttribute("title", i);
                        break;
                    case "MENUITEM":
                        t.setAttribute("label", i);
                        break;
                    default:
                        t.innerHTML = i
                }
            })
        }, n.info("[Sparrow] Sparrow loaded."), n.time(), n
    }.call(window || global || this), _.l.setLocale("en"), _.l.set("data", {
        category: {
            epicdestiny: "Epic Destiny",
            paragonpath: "Paragon Path",
            trap: "Trap / Terrain"
        },
        field: {
            _CatName: "Category",
            _TypeName: "Type",
            ActionType: "Action",
            ClassName: "Class",
            CombatRole: "Role",
            ComponentCost: "Component",
            CreatureType: "Type",
            DescriptionAttribute: "Attribute",
            GroupRole: "Group",
            KeyAbilities: "Abilities",
            KeySkillDescription: "Key Skill",
            PowerSourceText: "Power Source",
            RoleName: "Role",
            SourceBook: "Source",
            TierName: "Tier"
        }
    }), _.l.set("error", {
        old_format: "Data format is outdated. Please re-export this viewer."
    }), _.l.set("gui", {
        title: "4e Database",
        top: "Top",
        loading: "Loading...",
        loading1: "Loading %1",
        menu_view_highlight: "Highlight search terms",
        update: "New Version",
        ",": ", ",
        "?": "?",
        or: " or "
    }), _.l.set("action.list", {
        title: "4e Database",
        link_text: "Browse",
        result_summary: "Result",
        menu_filter_column: "Add %1 to filter",
        menu_filter_column_only: "Filter only %1",
        txt_search_name_placeholder: "Type name here and then select category.",
        txt_search_full_placeholder: 'Type search keywords here, e.g. ranger OR martial bonus -"feat bonus", and then select category.',
        btn_search_name: "<u>N</u>ame Search",
        btn_search_body: "<u>F</u>ull Search",
        a_all: "Everything",
        lbl_count: "%1",
        lbl_showing: "%1 result(s)",
        lbl_filter: "Filter left %1 result(s) out of %2",
        lbl_page: "%1 Page %2/%3",
        clear_search: "<a href='#' onclick='od.action.list.clear_search();'>Clear search</a>",
        clear_filter: "<a href='#' onclick='od.action.list.clear_filter();'>Clear filter</a>",
        switch_to_full_text: "<a href='#' onclick='od.action.list.search(\"full\");'>Switch to full search</a>",
        switch_to_all: "<a href='#' onclick='od.action.list.a_category();'>Search everything</a>",
        lbl_no_result: "No result. "
    }), _.l.set("action.view", {
        menu_quick_lookup: "Lookup …%1…",
        menu_name_search: "Name Search %1",
        menu_full_search: 'Full Search "%1"'
    }), _.l.set("action.about", {
        title: "Help",
        link_text: "Help",
        h_language: "Language",
        lbl_select_lang: ":",
        lbl_toggle_highlight: "Search term highlight:",
        opt_highlight_on: "On",
        opt_highlight_off: "Off",
        h_license: "License",
        p_license: "This program is free software and is licensed under GNU AGPL v3.<br/>This program does not collect any personal information.",
        a_github: "Homepage",
        a_email: "Email",
        p_nodata: "There is no data. Please fetch with <a href='https://github.com/Sheep-y/trpg-dnd-4e-db#readme'>downloader</a>.",
        h_intro: "What is this?",
        p_intro: "This is a fan remake of the official <a href='http://www.wizards.com/dndinsider/compendium/database.aspx'>D&amp;D Insider's Compendium</a> for powerful, offline search of 4<sup>th</sup> edition D&amp;D data. <br/><br/>Usage is simple: click on a category to select it and see listing, then / or input search term(s) and press enter or click a search button to search. <br/>Text that match the terms is highlighted by default, and the listing can be sorted by any column and filtered by each column. <br/>On Firefox (or any browser that supports <a href='https://davidwalsh.name/html5-context-menu'>HTML5 context menu</a>), you can also right click on a cell to set filter with it. <br/><br/>Click on a row to see the content of an entry, or Ctrl+Click to open in new tab. <br/>If the listing has multiple entries, you can use the left / right key or swipe to walk through the list. <br/> When viewing entry content, clicking any text will start a quick lookup.  If any matching entry is found, a list will pop up. <br/>You can use this feature to quickly lookup power keywords or rule terms like \"Burst\" or \"Regeneration\". <br/><br/>On most browsers, you can use the browser's forward and backward feaure to transverse browse history. <br/>(Chrome is the only exception, which <a href='https://bugs.chromium.org/p/chromium/issues/detail?id=301210'>does not allow</a> HTML file to manage its own history.)",
        h_search_data: "How to Search",
        p_search_data: "There are two types of search: name only search and full text search. <br/>Name search (default) is fast.  Full search is bigger and slower. <br/>A search will run faster if a category is selected before the search, to limit its scope. <br/><br/>Both searches find results that contains every terms, in any order, regardless of case. <br/>e.g. <a href='?list.full.power=fighter heal'><kbd>fighter heal</kbd></a> will search for data that contains <q>Fighter</q> and <q>Heal</q> or <q>Healing</q> or <q>Healer</q>. <br/><ul><li> To search for a multi-word term, surround it with double quotes <q>\"</q>. <br/> &nbsp; e.g. <a href='?list.full.theme=\"extra damage\"'><kbd>\"extra damage\"</kbd></a> matches the exact term <q>Extra damage</q>, instead of <q>Extra</q> and <q>Damage</q>. <br/><br/><li> To exclude a term from result, prefix it with minus <q>-</q>. <br/> &nbsp; e.g. <a href='?list.full.feat=\"bonus to attack roll\" -\"feat bonus\"'><kbd>-\"feat bonus\"</kbd></a> will exclude results containing the term <q>Feat bonus</q>. <br/><br/><li> To search for a whole word, prefix it with plus <q>+</q>. <br/> &nbsp; e.g. <a href='?list.name.power=%2Bpower'><kbd>+power</kbd></a> will include result containing the word <q>power</q>, <a href='?list.name.power=power'>but not</a> <q>empower</q> or <q>powerful</q>. <br/><br/><li> To specify an OR condition, use an uppercase <q>OR</q>. <br/> &nbsp; e.g. <a href='?list.full.power=ranger OR rogue blind'><kbd>ranger OR rogue blind</kbd></a> will search for results containing <q>Blind</q> and either <q>Ranger</q> or <q>Rogue</q>. <br/><br/><li> Use asterisk <q>*</q> as wild cast. <br/> &nbsp; e.g. <a href='?list.full.ritual=\"p* bonus\"'><kbd>\"p* bonus\"</kbd></a> matches both <q>Proficiency bonus</q> and <q>Power bonus</q>. <br/><br/><li> Number range is supported in level and cost column. <br/> &nbsp; e.g. <kbd>10-12</kbd> in the level field will yield results that is level 10, 11, or 12. <br/> &nbsp; e.g. <kbd><=5k</kbd> in the cost field will yield results that cost at most 5000. <br/><br/><li> NIL is empty <br/> &nbsp; e.g. <kbd>NIL</kbd> in the prerequisite field of feats will yield feats that has no requirements, or <kbd>-NIL</kbd> to exclude them. <br/><br/><li> If you know <a href='http://www.regular-expressions.info/quickstart.html'>regular expression</a>, you can use it as a term. <br/> &nbsp; e.g. <a href='?list.full.feat=/(martial|arcane) power( 2)?/ damage bonus'><kbd>/(martial|arcane) power( 2)?/ damage bonus</kbd></a>. </ul>",
        h_move_data: "Viewing on Mobile",
        p_move_data: "Acquired data are stored locally, in <q id='action_about_lbl_folder'></q> folder. You can copy this html file and the data folder together to USB drive or to smart phone. <br/>Default Android browser may be unable to browser offline file; you can use <a href='https://play.google.com/store/apps/details?id=com.opera.browser'>Opera</a> or <a href='https://play.google.com/store/apps/details?id=org.mozilla.firefox'>Firefox</a>. Chrome may NOT work.<br/> <br/>You can also upload it to Internet as a web site.  Enabling compression in the downloader will result in smaller data.",
        h_history: "Product History",
        lbl_english_only: "",
        h_version_history: "Version History",
        link_homepage: "Home"
    }), _.l.set("action.license", {
        title: "License",
        link_text: "View License"
    }), _.l.setLocale("zh"), _.l.set("data", {
        category: {
            armor: "護甲",
            background: "背景",
            "class": "職業",
            companion: "伙伴",
            deity: "神祇",
            disease: "疾病",
            epicdestiny: "史詩天命",
            feat: "專長",
            glossary: "詞目",
            item: "裝備",
            implement: "法器",
            monster: "怪物",
            paragonpath: "典範",
            poison: "蠱毒",
            power: "威能",
            race: "種族",
            ritual: "法式",
            theme: "主題",
            terrain: " 地型",
            trap: "陷阱 / 地型",
            weapon: "武器"
        },
        field: {
            _CatName: "類別",
            _TypeName: "類型",
            Action: "動作",
            ActionType: "動作",
            Alignment: "陣營",
            Benefit: "得益",
            Campaign: "戰役",
            Category: "類別",
            ClassName: "職業",
            CombatRole: "岡位",
            ComponentCost: "材料費",
            Cost: "價錢",
            CreatureType: "類型",
            DescriptionAttribute: "能力值",
            Domains: "領域",
            GroupRole: "地位",
            KeyAbilities: "主能力值",
            KeySkillDescription: "主技能",
            Keywords: "關鍵詞",
            Level: "等級",
            Name: "名稱",
            Origin: "始源",
            PowerSourceText: "力量源",
            Prerequisite: "前提要求",
            Price: "價格",
            Rarity: "稀有度",
            RoleName: "岡位",
            Size: "體型",
            Skills: "技能",
            SourceBook: "書目",
            Tier: "層級",
            TierName: "層級",
            Type: "類型"
        }
    }), _.l.set("error", {
        old_format: "數據版本過舊。請重新匯出此數據庫。"
    }), _.l.set("gui", {
        title: "四版資料庫",
        top: "頂部",
        loading: "載入中...",
        loading1: "載入 %1 中",
        menu_view_highlight: "高亮顯示搜尋匹配",
        update: "新版本",
        ",": "，",
        "?": "？",
        or: " 或 "
    }), _.l.set("action.list", {
        title: "四版資料庫",
        link_text: "瀏覽",
        result_summary: "結果",
        menu_filter_column: "新增過濾：%1 ",
        menu_filter_column_only: "只過濾：%1",
        txt_search_name_placeholder: "在此輸入名字，然後選擇分類。",
        txt_search_full_placeholder: '在此輸入搜尋關鍵詞。例： ranger OR martial bonus -"feat bonus"，然後選擇分類。',
        btn_search_name: "名字搜索",
        btn_search_body: "全文搜索",
        a_all: "全類別",
        lbl_count: "%1",
        lbl_showing: "%2 項結果",
        lbl_filter: "從 %2 項結果中過濾出 %1 項",
        lbl_page: "%1 頁 %2/%3",
        clear_search: "<a href='#' onclick='od.action.list.clear_search();'>清除搜尋</a>",
        clear_filter: "<a href='#' onclick='od.action.list.clear_filter();'>清除過濾</a>",
        switch_to_full_text: "<a href='#' onclick='od.action.list.search(\"full\");'>切換至全文搜索</a>",
        switch_to_all: "<a href='#' onclick='od.action.list.a_category();'>全類別搜尋</a>",
        lbl_no_result: "無結果。"
    }), _.l.set("action.view", {
        menu_quick_lookup: "檢索 …%1…",
        menu_name_search: "名字搜索 %1",
        menu_full_search: '全文搜索 "%1"'
    }), _.l.set("action.about", {
        title: "說明",
        link_text: "說明",
        h_language: "語言",
        lbl_select_lang: " 請選擇語言 :",
        lbl_toggle_highlight: "搜尋結果高亮：",
        opt_highlight_on: "顯示",
        opt_highlight_off: "不顯示",
        h_license: "授權及私隱聲明",
        p_license: "此程式稿免費開源，以 GNU AGPL v3 授權發佈。<br/>本應用不收集任何個人資訊。",
        a_github: "主頁",
        a_email: "電郵",
        p_nodata: "沒有數據。請用<a href='https://github.com/Sheep-y/trpg-dnd-4e-db#readme'>下載器</a>獲取數據。",
        h_intro: "這是甚麼？",
        p_intro: "這是個由同好者重制的 <a href='http://www.wizards.com/dndinsider/compendium/database.aspx'>D&amp;D Insider 數據庫</a>，以便離線地威力查找四代龍與地下城的資源。 <br/><br/>用法很簡單：點擊分類以選擇它，並顯示該分類的列表，然後可以輸入搜尋字詞，按 Enter 或點擊搜尋鍵就會進行搜尋。 <br/>符合搜尋的文字預設會高亮顯示。列表可以用任何欄排序，每個欄都可以進一步過濾結果。 <br/>如果你使用的是火狐（或任何支援 <a href='https://davidwalsh.name/html5-context-menu'>HTML5 關聯選單</a> 的瀏覽器），你也可以右按任一數據格去設定過濾。 <br/><br/>點擊列表的任一行可以檢視條目內文，按著 Ctrl 鍵點擊會開新分頁。 <br/>如列表有多項條目，用左右方向鍵或用手指左右劃掃都可以前後行進。 <br/> 當檢視條目內文時，點擊文字會自動進行快速查找。如有相符的條目會彈出顯示。 <br/>你可以用此功能去查找威能關鍵詞或規則字詞，例如 \"Burst\" 或 \"Regeneration\"。 <br/><br/>在大部分瀏覽器中，你可以用瀏覽器的前進/後退功能去遍歷瀏覽記錄。 <br/>（Chrome 是唯一的例外。它<a href='https://bugs.chromium.org/p/chromium/issues/detail?id=301210'>不允許</a> HTML 檔案管理自身的瀏覽記錄。）",
        h_search_data: "如何搜尋",
        p_search_data: "搜尋有兩種：名字搜尋和全文搜尋。預設是名字搜尋，速度快。全文搜尋則較慢。<br/>在搜尋前先選取分類的話，搜尋範圍縮窄了就會搜得較快。 <br/><br/>兩種搜尋都會找出包含所有字詞的結果，不論順序，不論大小寫。 <br/>例、<a href='?list.full.power=fighter heal'><kbd>fighter heal</kbd></a> 會找出同時包括 <q>Fighter</q> 和 <q>Heal</q> 或 <q>Healing</q> 或 <q>Healer</q> 的資料. <br/><ul><li> 要搜尋特定詞組，可以用半形雙引號 <q>\"</q> 包裹它。 <br/> &nbsp; 例、<a href='?list.full.theme=\"extra damage\"'><kbd>\"extra damage\"</kbd></a> 只符合詞組 <q>Extra damage</q>，而不是分成 <q>Extra</q> 和 <q>Damage</q>。 <br/><br/><li> 要自結果排除字詞，可以在前面加半型減號 <q>-</q>。 <br/> &nbsp; 例、<a href='?list.full.feat=\"bonus to attack roll\" -\"feat bonus\"'><kbd>-\"feat bonus\"</kbd></a> 會排除包含 <q>Feat bonus</q> 詞組的結果。 <br/><br/><li> 要搜尋獨立的單字，可以在前面加半型加減號 <q>+</q>。 <br/> &nbsp; 例、<a href='?list.name.power=%2Bpower'><kbd>+power</kbd></a> 會找出含 <q>power</q> 單字的結果，跳過 <q>empower</q>、<q>powerful</q> <a href='?list.name.power=power'>等字</a>。 <br/><br/><li> 要指定'或者'條件，可用大寫 <q>OR</q>. <br/> &nbsp; 例、 <a href='?list.full.power=ranger OR rogue blind'><kbd></a>ranger OR rogue blind</kbd> 會搜尋包含 <q>Blind</q> 以及 <q>Ranger</q> 或 <q>Rogue</q>。 <br/><br/><li> 用半型星號 <q>*</q> 作萬用字符。 <br/> &nbsp; 例、<a href='?list.full.ritual=\"p* bonus\"'><kbd>\"p* bonus\"</kbd></a> 同時符合 <q>Proficiency bonus</q> 和 <q>Power bonus</q>。 <br/><br/><li> 等級和價格欄可以施予數字範圍 <br/> &nbsp; 例、在等級欄中輸入 <kbd>10-12</kbd> 會得出等級 10, 11, 或 12 的結果。<br/> &nbsp; 例、在價格欄中輸入 <kbd><=5k</kbd> 會得出價格 5000 或以下的結果。<br/><br/><li> NIL 代表空白 <br/> &nbsp; 例、在專長的前提要求欄中輸入 <kbd>NIL</kbd> 會得出沒有任何前提要求的威能，或用 <kbd>-NIL</kbd> 排除它們。<br/><br/><li> 如果您會用<a href='https://atedev.wordpress.com/2007/11/23/%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%A4%BA%E5%BC%8F-regular-expression/'>正則表逹式</a>，您可以用它作為字詞進行搜尋。 <br/> &nbsp; 例、<a href='?list.full.feat=/(martial|arcane) power( 2)?/ damage bonus'><kbd>/(martial|arcane) power( 2)?/ damage bonus</kbd></a>。</ul>",
        h_move_data: "手機支援",
        p_move_data: "數據儲存在 <q id='action_about_lbl_folder'></q> 目錄內。您可以將本 HTML 和數據目錄一起複制到 USB 儲存裝置或智能電話。 <br/>預設的安卓瀏覽器可能無法瀏覽離線檔案；您可以用 <a href='https://play.google.com/store/apps/details?id=com.opera.browser'>Opera</a> 或 <a href='https://play.google.com/store/apps/details?id=org.mozilla.firefox'>Firefox</a>。Chrome 不一定能開。 <br/> <br/>你可以把全部檔案當成是一個網站上載到互聯網。在下載器中啓用壓縮可以減少數據量。",
        h_history: "產品歷史",
        lbl_english_only: "此節只有英文版本。",
        h_version_history: "版本歷史",
        link_homepage: "主頁"
    }), _.l.set("action.license", {
        title: "授權協議",
        link_text: "查看授權"
    }), od.config = {
        url: {
            catalog: function() {
                return od.data_path + "/catalog.js"
            },
            listing: function(t) {
                return od.data_path + "/" + t.toLowerCase() + "/_listing.js"
            },
            index: function(t) {
                return od.data_path + "/" + (t ? t.toLowerCase() + "/_index.js" : "index.js")
            },
            data: function(t, n) {
                var r = n.match(/(\d{1,2})$/) || [];
                return r[1] = ~~r[1] % 20, od.data_path + "/" + t.toLowerCase() + "/data" + r[1] + ".js"
            }
        },
        level_to_int: function(t) {
            typeof t == "object" && (t = t.text);
            if (!t) return 0;
            switch (t.toLowerCase()) {
                case "heroic":
                    return 5.5;
                case "paragon":
                    return 15.5;
                case "epic":
                    return 25.5
            }
            var n = t.replace(/\D+/g, "");
            return n === "0" ? .5 : +n
        },
        is_mc_column: function(t) {
            return ["SourceBook", "Origin", "Keywords", "DescriptionAttribute", "RoleName", "PowerSourceText", "KeyAbilities", "Size", "CreatureType"].indexOf(t) >= 0
        },
        is_num_column: function(t) {
            return ["Cost", "Price", "Level"].indexOf(t) >= 0
        },
        category_order: ["#LightGray", "{All}", "glossary", "#LightBlue", "race", "background", "theme", "#Gold", "class", "paragonpath", "epicdestiny", "#Coral", "power", "feat", "ritual", "#LightGreen", "item", "weapon", "implement", "armor", "#LightPink", "companion", "deity", "poison", "#Tan", "disease", "monster", "terrain", "trap", "#LightGrey"]
    }, od.gui = {
        build_time: '2017-12-31T10:11:15Z',
        act_id: null,
        action: null,
        initialized: [],
        hl_enabled: !0,
        hlp: null,
        row_per_page: 200,
        page: 0,
        total_page: 0,
        is_soft_keyboard: !1,
        min_swipe_x: 200,
        max_swipe_y: 50,
        max_swipe_ms: 2e3,
        last_touch_x: 0,
        last_touch_y: 0,
        last_touch_time: 0,
        init: function() {
            var t = od.gui;
            _.pref(_.l.saveKey) || _.l.setLocale("en"), _.l.detectLocale("en"), t.l10n(), t.go(), _.attr(window, {
                onpopstate: function() {
                    t.go()
                },
                onkeydown: function(n) {
                    if (n.altKey || n.ctrlKey || n.metaKey || n.shiftKey) return;
                    if (document.activeElement && document.activeElement.tagName === "INPUT" && document.activeElement.value) return;
                    switch (n.key) {
                        case "Left":
                        case "ArrowLeft":
                            var r = _("section[id^=action_][style*=block] > nav > .btn_prev:not([style*=none])")[0];
                            r && (r.click(), n.preventDefault());
                            break;
                        case "Right":
                        case "ArrowRight":
                            var i = _("section[id^=action_][style*=block] > nav > .btn_next:not([style*=none])")[0];
                            i && (i.click(), n.preventDefault());
                            break;
                        case "Esc":
                        case "Escape":
                            t.get_act_id().startsWith("view") && (t.action.btn_browse_click(), n.preventDefault())
                    }
                },
                ontouchstart: function(n) {
                    if (n.touches.length !== 1) return;
                    t.last_touch_x = n.touches[0].screenX, t.last_touch_y = n.touches[0].screenY, t.last_touch_time = (new Date).getTime()
                },
                ontouchend: function(n) {
                    if (n.touches.length !== 0) return;
                    var r = (new Date).getTime() - t.last_touch_time,
                        i = Math.abs(n.changedTouches[0].screenY - t.last_touch_y),
                        s = n.changedTouches[0].screenX - t.last_touch_x;
                    _.log("[GUI] Touch detection: delta x " + s + ", delta y " + i + ", delta ms " + r);
                    if (r > t.max_swipe_ms || Math.abs(s) < t.min_swipe_x || i > t.max_swipe_y) return;
                    var o = s > 0 ? "btn_prev" : "btn_next",
                        u = _("section[id^=action_][style*=block] > nav > ." + o + ":not([style*=none])")[0];
                    u && u.click()
                }
            }), t.check_update()
        },
        l10n: function() {
            _.l.localise(), od.gui.action && _.call(od.gui.action.l10n)
        },
        go: function(t) {
            var n = od.gui;
            t === undefined && (t = n.get_act_id());
            var r = od.action[t];
            _.info("[Action] Navigate to " + t);
            if (!r) {
                var i = _.ary(t.match(/^\w+/))[0];
                for (var s in od.action) {
                    var o = od.action[s];
                    if (i === s || o.url && o.url.test(t)) {
                        r = o, r.id || (r.id = s);
                        break
                    }
                }
            } else r.id || (r.id = t);
            if (!r) {
                if (t !== "list") return n.go("list");
                n.act_id = "list";
                return
            }
            n.pushState(t), n.switch_action(r)
        },
        pushState: function(t) {
            if (t !== location.search.substr(1)) try {
                history.pushState && history.pushState(null, null, "?" + t)
            } catch (n) {}
            od.gui.act_id = t
        },
        get_act_id: function() {
            return location.search ? location.search.substr(1) : "list"
        },
        switch_action: function(t) {
            var n = od.gui,
                r = n.action;
            if (!t) return _.warn("[Action] Null or undefined action.");
            if (t === r) {
                _.info("[Action] Already at " + t.id), _.call(t.setup, t, n.act_id);
                return
            }
            _.time();
            if (r) {
                _.time("[Action] Cleanup " + r.id);
                if (_.call(r.cleanup, r, t) === !1) return !1
            }
            _.style('body > section[id^="action_"]', "display", "");
            var i = _("#action_" + t.id)[0];
            i.style.display = "block", n.initialized.indexOf(t) < 0 && (_.time("[Action] Initialize " + t.id), n.initialized.push(t), _.call(t.initialize, t)), _.time("[Action] Setup & l10n " + t.id), _.call(t.setup, t), _.call(t.l10n, t), n.action = t, n.update_title(), _.time("[Action] Switched to " + t.id)
        },
        update_title: function(t) {
            t ? _("title")[0].textContent = t : _("title")[0].textContent = od.gui.action ? _("#action_" + od.gui.action.id + " h1")[0].textContent : _.l("gui.title", "4e Database")
        },
        set_highlight: function(t) {
            var n = od.gui;
            if (!t) return n.hlp = null;
            t = "((?:" + t.join(")|(?:") + "))(?![^<]*>)", n.hlp = new RegExp(t, "ig")
        },
        highlight: function(t, n) {
            return n || (n = od.gui.hlp), n ? t.replace(n, "<mark>$1</mark>").replace(/<\/mark>(\s+)<mark>/g, "$1") : t
        },
        toggle_highlight: function(t) {
            var n = od.gui;
            t === undefined ? n.hl_enabled = !n.hl_enabled : n.hl_enabled = t;
            var r = od.gui.hl_enabled ? "on" : "off";
            _.info("[Config] Toggle highlight " + r), document.body.classList[n.hl_enabled ? "remove" : "add"]("no_highlight"), _.prop("#action_about_rdo_highlight_" + r, {
                checked: !0
            }), _.prop(".menu_view_highlight", {
                checked: od.gui.hl_enabled
            })
        },
        check_update: function() {
            var t = new Date(_.pref("oddi_last_update_check", "2000-01-01"));
            if (!window.fetch || (new Date).getTime() - t.getTime() < 6048e5) return _.info("[Update] Skipping update check. Last check: " + t);
            _.info("[Update] Check update. Last check: " + t), fetch("https://api.github.com/repos/Sheep-y/trpg-dnd-4e-db/releases").then(function(e) {
                return e.json()
            }).then(function(e) {
                _.pref.set("oddi_last_update_check", (new Date).toISOString()), e.some(function(e) {
                    return !e.prerelease && new Date(e.published_at) - new Date(od.gui.build_time) > 864e5
                }) && (_.info("[Update] Update available"), _.attr("header .top", {
                    onclick: function() {
                        open("https://github.com/Sheep-y/trpg-dnd-4e-db/releases", "trpg-dnd-4e-db-upgrade")
                    },
                    "data-i18n": "gui.update"
                }), _.l.localise())
            }).catch(function(e) {
                return _.info("[Update] Cannot check update.")
            })
        },
        detect_soft_keyboard: function() {
            function s() {
                window.innerHeight > r ? r = window.innerHeight : window.innerHeight < r - 100 && (t.is_soft_keyboard = !0, _.info("[List] Soft keyboard detected."), n.forEach(clearTimeout)), n.shift()
            }
            var t = od.gui;
            if (t.is_soft_keyboard) return;
            var n = [],
                r = window.innerHeight;
            for (var i = 1; i <= 10; i++) n.push(setTimeout(s, i * 200))
        }
    },
    function() {
        od.data = {
            category: Object.create(null),
            index: null,
            get: function(t) {
                var n;
                if (t === undefined) {
                    n = [];
                    for (var r in this.category) n.push(this.category[r]);
                    return n
                }
                return n = this.category[t], n ? n : null
            },
            create: function(t) {
                var n = this.category[t];
                return n === undefined && (this.category[t] = n = new od.data.Category(t)), n
            },
            category_name_of: function(t) {
                var n = t.split(/[\.\d]/, 2)[0];
                switch (n) {
                    case "associate":
                        return "companion";
                    case "skill":
                        return "glossary";
                    case "terrain":
                        return "trap"
                }
                return n.toLowerCase()
            },
            list: function() {
                return Object.keys(this.category)
            },
            load_catalog: function(t, n) {
                od.reader.read_catalog(t, n)
            },
            load_name_index: function(t) {
                var n = 2,
                    r = function() {
                        --n === 0 && t()
                    };
                od.reader.read_catalog(r), od.reader.read_name_index(r)
            },
            load_all_index: function(t) {
                var n = this.list().length,
                    r = function() {
                        --n === 0 && t()
                    },
                    i = this.category;
                for (var s in i) i[s].load_index(r)
            },
            load_all_listing: function(t) {
                var n = this.list().length,
                    r = function() {
                        --n === 0 && t()
                    },
                    i = this.category;
                for (var s in i) i[s].load_listing(r)
            }
        }, od.data.Category = function(t) {
            this.name = t, this.count = 0, this.index = _.map(), this.columns = [], this.list = [], this.map = _.map(), this.data = _.map()
        }, od.data.Category.prototype = {
            name: "",
            count: 0,
            columns: [],
            list: [],
            index: {},
            map: {},
            data: {},
            getTitle: function() {
                return _.l("data.category." + this.name, _.ucfirst(this.name))
            },
            load_listing: function(t, n) {
                var r = this;
                od.reader.read_data_listing(this.name, function() {
                    _.call(t, r)
                }, _.callonce(n, r))
            },
            load_index: function(t, n) {
                od.reader.read_data_index(this.name, t, n)
            },
            load_data: function(t, n, r) {
                od.reader.read_data(this.name, t, n, r)
            },
            build_listing: function() {
                var t = this.list,
                    n = this.columns,
                    r = this.map = _.map(),
                    i = this.list = new Array(t.length),
                    s = _.ucfirst(this.name),
                    o = 2;
                ["Disease", "Poison", "Paragonpath", "Epicdestiny"].indexOf(s) >= 0 ? (s = _.ucword(s.replace(/(?=path$|destiny$)/, " ")), o = 0) : s === "Ritual" && (o = 5);
                var u = n.length;
                for (var a = 0, f = t.length; a < f; a++) {
                    var l = t[a],
                        c = {};
                    for (var h = 0; h < u; h++) {
                        var p = l[h];
                        !p || typeof p == "string" ? c[n[h]] = p : c[n[h]] = {
                            text: p[0],
                            set: p.slice(1)
                        }
                    }
                    c._category = this, c._CatName = s, s === "Monster" ? c._TypeName = c.GroupRole + " " + c.CombatRole : c._TypeName = o ? c[n[o]] : "", i[a] = c, r[l[0]] = c
                }
            }
        }
    }(), od.search = {
        cache: {
            type: "",
            category: {},
            count: {},
            term: "global search term"
        },
        search: function(t) {
            function a(e, n) {
                _.call(t.ondone, null, i, e, n, u.highlight)
            }

            function f() {
                function f(e) {
                    var t = u.regexp,
                        n = e.filter(function(n) {
                            return o !== "full" ? t.test(n.Name) : !u.hasExclude && t.test(n.Name) ? !0 : t.test(n._category.index[n.ID])
                        });
                    return n
                }
                var e = n.count,
                    i;
                r ? (i = n[r.name], i || (_.time("[Search] Search " + r.name + ": " + t.term), r.map[s] ? n[r.name] = i = [r.map[s]] : n[r.name] = i = f(r.list), e[r.name] = i.length, _.time("[Search] Search done, " + i.length + " result(s)."))) : (i = n[""], i || (_.time("[Search] Searching all categories: " + t.term), i = [], e[""] = 0, od.data.get().forEach(function(r) {
                    var o = n[r.name];
                    o || (r.map[s] ? n[r.name] = o = [r.map[s]] : n[r.name] = o = f(r.list), e[r.name] = o.length);
                    if (o.length <= 0) return;
                    i = i.concat(o), e[""] += o.length
                }), n[""] = i, _.time("[Search] Search done, " + i.length + " result(s)."))), a(i, e)
            }
            _.time();
            var n = od.search.cache,
                r = t.category,
                i, s = t.term,
                o = t.type;
            if (s !== n.term || n.type !== o) n = od.search.cache = {
                category: {},
                count: {},
                term: s,
                type: o
            };
            var u = t.term ? this.gen_search(t.term) : null;
            if (r) r.load_listing(function() {
                i = r.columns;
                if (!u) return _.call(t.ondone, null, i);
                o === "full" ? r.load_index(f) : f()
            });
            else {
                i = ["ID", "Name", "_CatName", "_TypeName", "Level", "SourceBook"];
                if (!u) return _.call(t.ondone, null, i);
                od.data.load_all_listing(function() {
                    o === "full" ? od.data.load_all_index(f) : f()
                })
            }
        },
        list_category: function(t, n) {
            _.time();
            var r = {
                columns: [],
                data: []
            };
            t ? (_.time("[Search] List " + t.name), t.load_listing(function() {
                _.call(n, null, t.columns, t.list.concat(), null, null)
            })) : (_.time("[Search] List all categories"), od.data.load_all_listing(function() {
                var t = [];
                od.data.get().forEach(function(n) {
                    t = t.concat(n.list)
                }), _.call(n, null, ["ID", "Name", "_CatName", "_TypeName", "Level", "SourceBook"], t, null, null)
            }))
        },
        filter_column: function(t, n) {
            if (!t) return;
            var r = t.trim().match(/^(?:(\d+[kmg]?)\s*-\s*(\d+[kmg]?)|([<>]=?)\s*(\d+[kmg]?)?|(\d+[kmg]?)([+-]?))$/i);
            if (!r) {
                var i = t ? od.search.gen_search(t) : null;
                if (!i) return;
                return function(t) {
                    var r = t[n];
                    return i.regexp.test(r.text ? r.text : r)
                }
            }
            if (t === "0") return function(t) {
                var r = t[n];
                return !r || r === "0" || r === "0 gp"
            };
            var s, o;
            if (r[1]) s = Math.min(_.si(r[1]), _.si(r[2])), o = Math.max(_.si(r[1]), _.si(r[2]));
            else if (r[3]) {
                if (!r[4]) return;
                var u = _.si(r[4]);
                r[3].substr(0, 1) === ">" ? (s = u, r[3].length === 1 && s++) : (o = u, r[3].length === 1 && o--)
            } else {
                var u = _.si(r[5]);
                r[6] ? r[6] === "+" ? s = u : o = u : s = o = u
            }
            return function(t) {
                var r = t[n];
                return r instanceof Object ? r = r.set : r = [~~r.replace(/[^\d.]/g, "")], r.find(function(e) {
                    return e === 0 ? !1 : o !== undefined && e > o ? !1 : s !== undefined && e < s ? !1 : !0
                }) ? !0 : !1
            }
        },
        sort_data: function(t, n, r) {
            var i, s = r === "asc" ? 1 : -1,
                o = s * -1;
            _.time("[Search] Sorting " + t.length + " results by " + n);
            switch (n) {
                case "Cost":
                case "Level":
                case "Price":
                    i = function(e, t) {
                        return e = od.config.level_to_int(e[n]), t = od.config.level_to_int(t[n]), e > t ? s : e < t ? o : 0
                    };
                    break;
                default:
                    i = function(e, t) {
                        return e = e[n], t = t[n], e > t ? s : e < t ? o : 0
                    }
            }
            return t.sort(i)
        },
        gen_search: function(t) {
            var n = [],
                r = !1,
                i = "^",
                s = t.trim().match(/(^| )\/.+\/(?= |$)|[+-]?(?:"[^"]+"|\S+)/g);
            if (!s) return null;
            _.info("[Search] Tokens: " + JSON.stringify(s));
            while (s.length > 0 && s[0] === "OR") s.splice(0, 1);
            var o = s.length;
            while (o > 0 && s[o - 1] === "OR") s.splice(--o, 1);
            for (var u = 0; u < o;) {
                var a = [];
                do {
                    var f = s[u].trim(),
                        l = "",
                        c = !1;
                    f.charAt(0) === "-" ? (f = f.substr(1), l += "(?!.*", r = !0) : (f.charAt(0) === "+" && (f = f.substr(1), c = !0), l += "(?=.*"), f && (/^\/.+\/$/.test(f) ? f = f.substr(1, f.length - 2) : /^"[^"]*"$/.test(f) ? (f = f.length > 2 ? _.escRegx(f.substr(1, f.length - 2)) : "", f = f.replace(/\\\*/g, "\\S+")) : f === "NIL" ? (f = "", l += "^$") : (f.charAt(0) === '"' && (f = f.substr(1)), f && (f = _.escRegx(f)), f = f.replace(/\\\*/g, "[^\\s<>]+")), f && (c && (f = "\\b" + f + "\\b"), l += f), l && (l.indexOf("(?=") === 0 && f && f.length > 2 && n.push(f), l += ".*)", a.push(l))), u++;
                    if (u >= o || s[u] !== "OR") break;
                    do ++u; while (u < o && s[u] === "OR")
                } while (u < o);
                a.length === 1 ? i += a[0] : a.length && (i += "(?:" + a.join("|") + ")")
            }
            return i === "^" ? null : (_.info("[Search] Regx: " + i), {
                regexp: RegExp(i, "i"),
                highlight: n.length ? n : null,
                hasExclude: r
            })
        }
    }, od.reader = {
        _read: function(t, n, r, i) {
            var s = i;
            i && typeof i == "string" && (s = function() {
                _.alert(i)
            }), _.js({
                url: t,
                validate: n,
                onload: r,
                onerror: s
            })
        },
        _inflate: function(t, n) {
            if (typeof n == "string" && n.startsWith("T>t<;")) try {
                _.time("[Reader] Decompressing " + t);
                var r = n.length;
                n = Base85.decode(n), n = LZMA.decompress(n);
                var i = n.length;
                n = JSON.parse(n), _.time("[Reader] Decompressed " + t + "(" + r + " -> " + i + ")")
            } catch (s) {
                throw s
            }
            return n
        },
        read_catalog: function(t, n) {
            var r = od.config.url.catalog();
            this._read(r, function() {
                return od.reader.read_catalog.read && od.data.list().length > 0
            }, t, n ? n : "Cannot read data catalog from " + r)
        },
        jsonp_catalog: function(t, n) {
            for (var r in n) od.data.create(r).count = n[r];
            od.reader.read_catalog.read = !0
        },
        read_name_index: function(t, n) {
            var r = od.config.url.index();
            this._read(r, function() {
                return od.data.index
            }, t, n)
        },
        jsonp_name_index: function(t, n) {
            od.data.index = od.reader._inflate("name index", n)
        },
        read_data_listing: function(t, n, r) {
            var i = od.config.url.listing(t);
            this._read(i, function() {
                return od.data.get(t).list.length > 0
            }, n, r ? r : "Cannot read " + t + " listing from " + i)
        },
        jsonp_data_listing: function(t, n, r, i) {
            if (t < 20130703 || t === 20140414) return _.alert(_.l("error.old_format"));
            var s = od.data.get(n);
            s.columns = r, s.list = od.reader._inflate("listing", i), s.build_listing()
        },
        jsonp_data_extended: function(t, n, r, i) {
            return _.alert(_.l("error.old_format"))
        },
        read_data_index: function(t, n, r) {
            var i = od.config.url.index(t);
            this._read(i, function() {
                return Object.keys(od.data.get(t).index).length > 0
            }, n, r ? r : "Cannot read " + t + " index from " + i)
        },
        jsonp_data_index: function(t, n, r) {
            if (t < 20130616) return _.alert(_.l("error.old_format"));
            var i = od.data.get(n);
            i.index = od.reader._inflate("text index", r)
        },
        read_data: function(t, n, r, i) {
            var s = od.config.url.data(t, n);
            this._read(s, function() {
                return od.data.get(t).data[n] ? !0 : !1
            }, r, i ? i : "Cannot read " + t + "." + n + " from " + s)
        },
        jsonp_data: function(t, n, r, i) {
            return _.alert(_.l("error.old_format"))
        },
        jsonp_batch_data: function(t, n, r) {
            if (t < 20160803) return _.alert(_.l("error.old_format"));
            var i = od.data.get(n);
            r = od.reader._inflate("data", r);
            for (var s in r) i.data[s] = r[s]
        }
    }