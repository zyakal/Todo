(function () {
  "use strict";
  var o = {
      7082: function (o, t, e) {
        var n = e(9242),
          d = e(3396);
        const a = { id: "app" };
        function r(o, t, e, n, r, s) {
          const l = (0, d.up)("TodoHeader"),
            i = (0, d.up)("TodoInput"),
            c = (0, d.up)("TodoList"),
            u = (0, d.up)("TodoFooter"),
            h = (0, d.up)("AlertModal");
          return (
            (0, d.wg)(),
            (0, d.iD)(
              d.HY,
              null,
              [
                (0, d._)("div", a, [
                  (0, d.Wm)(l),
                  (0, d.Wm)(
                    i,
                    { onChildAddTodo: s.addTodo, onNoInputValue: s.showModal },
                    null,
                    8,
                    ["onChildAddTodo", "onNoInputValue"]
                  ),
                  (0, d.Wm)(
                    c,
                    {
                      propsItems: r.todoItems,
                      onChildRemoveTodo: s.removeTodo,
                    },
                    null,
                    8,
                    ["propsItems", "onChildRemoveTodo"]
                  ),
                  (0, d.Wm)(u, { onClearTodo: s.clearTodo }, null, 8, [
                    "onClearTodo",
                  ]),
                ]),
                (0, d.Wm)(
                  h,
                  {
                    show: r.modalShow,
                    header: "알림창",
                    body: "내용을 입력해 주세요.",
                    onClose: s.hiddenModal,
                  },
                  null,
                  8,
                  ["show", "onClose"]
                ),
              ],
              64
            )
          );
        }
        const s = (o) => (
            (0, d.dD)("data-v-04c28f72"), (o = o()), (0, d.Cn)(), o
          ),
          l = s(() => (0, d._)("h1", null, "TODO it!", -1)),
          i = [l];
        function c(o, t) {
          return (0, d.wg)(), (0, d.iD)("header", null, i);
        }
        var u = e(89);
        const h = {},
          p = (0, u.Z)(h, [
            ["render", c],
            ["__scopeId", "data-v-04c28f72"],
          ]);
        var m = p;
        const f = (o) => (
            (0, d.dD)("data-v-6b6c105e"), (o = o()), (0, d.Cn)(), o
          ),
          v = { class: "inputBox shadow" },
          T = f(() =>
            (0, d._)(
              "i",
              { class: "addBtn fas fa-plus", "aria-hidden": "true" },
              null,
              -1
            )
          ),
          w = [T];
        function _(o, t, e, a, r, s) {
          return (
            (0, d.wg)(),
            (0, d.iD)("div", v, [
              (0, d.wy)(
                (0, d._)(
                  "input",
                  {
                    type: "text",
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (o) => (r.newTodoItem = o)),
                    onKeyup:
                      t[1] ||
                      (t[1] = (0, n.D2)(
                        (...o) => s.addTodo && s.addTodo(...o),
                        ["enter"]
                      )),
                    placeholder: "Type what you have to do",
                  },
                  null,
                  544
                ),
                [[n.nr, r.newTodoItem]]
              ),
              (0, d._)(
                "span",
                {
                  class: "addContainer",
                  onClick:
                    t[2] || (t[2] = (...o) => s.addTodo && s.addTodo(...o)),
                },
                w
              ),
            ])
          );
        }
        var g = {
          data() {
            return { newTodoItem: "" };
          },
          methods: {
            addTodo() {
              if ("" === this.newTodoItem.trim()) this.$emit("noInputValue");
              else {
                const o = this.newTodoItem.trim();
                this.$emit("childAddTodo", o);
              }
              this.newTodoItem = "";
            },
          },
        };
        const I = (0, u.Z)(g, [
          ["render", _],
          ["__scopeId", "data-v-6b6c105e"],
        ]);
        var y = I,
          b = e(7139);
        const C = (o) => (
            (0, d.dD)("data-v-77a3a615"), (o = o()), (0, d.Cn)(), o
          ),
          k = C(() =>
            (0, d._)(
              "i",
              { class: "checkBtn fas fa-check", "aria-hidden": "true" },
              null,
              -1
            )
          ),
          O = { class: "grow_1 d-flex flex-col justify_content_evenly" },
          x = { class: "ctnt" },
          D = { class: "small_text" },
          A = ["onClick"],
          j = C(() =>
            (0, d._)(
              "i",
              { class: "far fa-trash-alt", "aria-hidden": "true" },
              null,
              -1
            )
          ),
          W = [j];
        function $(o, t, e, a, r, s) {
          return (
            (0, d.wg)(),
            (0, d.iD)("section", null, [
              (0, d.Wm)(
                n.W3,
                { name: "list", tag: "ul" },
                {
                  default: (0, d.w5)(() => [
                    ((0, d.wg)(!0),
                    (0, d.iD)(
                      d.HY,
                      null,
                      (0, d.Ko)(
                        e.propsItems,
                        (o) => (
                          (0, d.wg)(),
                          (0, d.iD)("li", { key: o.itodo, class: "shadow" }, [
                            k,
                            (0, d._)("div", O, [
                              (0, d._)("div", x, (0, b.zw)(o.todo), 1),
                              (0, d._)("div", D, (0, b.zw)(o.created_at), 1),
                            ]),
                            (0, d._)(
                              "span",
                              {
                                class: "removeBtn",
                                type: "button",
                                onClick: (t) => s.removeTodo(o.itodo),
                              },
                              W,
                              8,
                              A
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var M = {
          props: { propsItems: Array },
          methods: {
            removeTodo(o) {
              this.$emit("childRemoveTodo", o);
            },
          },
        };
        const S = (0, u.Z)(M, [
          ["render", $],
          ["__scopeId", "data-v-77a3a615"],
        ]);
        var B = S;
        const H = { class: "clearAllContainer" };
        function Z(o, t, e, n, a, r) {
          return (
            (0, d.wg)(),
            (0, d.iD)("div", H, [
              (0, d._)(
                "span",
                {
                  class: "clearAllBtn",
                  onClick:
                    t[0] || (t[0] = (...o) => r.clearTodo && r.clearTodo(...o)),
                },
                "Clear All"
              ),
            ])
          );
        }
        var z = {
          methods: {
            clearTodo() {
              this.$emit("clearTodo");
            },
          },
        };
        const V = (0, u.Z)(z, [["render", Z]]);
        var E = V;
        const F = { key: 0, class: "modal-mask" },
          K = { class: "modal-header" },
          R = { class: "modal-body" },
          U = { class: "modal-footer" };
        function L(o, t, e, a, r, s) {
          return (
            (0, d.wg)(),
            (0, d.j4)(
              n.uT,
              { name: "modal" },
              {
                default: (0, d.w5)(() => [
                  e.show
                    ? ((0, d.wg)(),
                      (0, d.iD)("div", F, [
                        (0, d._)(
                          "div",
                          {
                            class: "modal-wrapper",
                            style: { "z-index": "10" },
                            onClick: t[2] || (t[2] = (t) => o.$emit("close")),
                          },
                          [
                            (0, d._)(
                              "div",
                              {
                                class: "modal-container",
                                onClick:
                                  t[1] ||
                                  (t[1] = (0, n.iM)(() => {}, ["stop"])),
                              },
                              [
                                (0, d._)("div", K, [
                                  (0, d.WI)(o.$slots, "header", {}, () => [
                                    (0, d.Uk)((0, b.zw)(e.header), 1),
                                  ]),
                                ]),
                                (0, d._)("div", R, [
                                  (0, d.WI)(o.$slots, "body", {}, () => [
                                    (0, d.Uk)((0, b.zw)(e.body), 1),
                                  ]),
                                ]),
                                (0, d._)("div", U, [
                                  (0, d.WI)(o.$slots, "footer", {}, () => [
                                    (0, d._)(
                                      "button",
                                      {
                                        class: "modal-default-button",
                                        onClick:
                                          t[0] ||
                                          (t[0] = (t) => o.$emit("close")),
                                      },
                                      "OK"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ]))
                    : (0, d.kq)("", !0),
                ]),
                _: 3,
              }
            )
          );
        }
        var N = {
          name: "AlertModal",
          props: { show: Boolean, header: String, body: String },
        };
        const P = (0, u.Z)(N, [["render", L]]);
        var Y = P,
          q = e(6265),
          G = e.n(q),
          J = {
            getTimestamp: function (o) {
              return (
                o.setHours(o.getHours() + 9),
                o.toISOString().replace("T", " ").substring(0, 19)
              );
            },
          },
          Q = {
            name: "App",
            data() {
              return { todoItems: [], modalShow: !1 };
            },
            methods: {
              showModal() {
                this.modalShow = !0;
              },
              hiddenModal() {
                this.modalShow = !1;
              },
              addTodo(o) {
                const t = { todo: o };
                G()
                  .post("/todo/index", t)
                  .then((t) => {
                    if ((console.log(t), 200 === t.status && t.data)) {
                      const e = {
                        itodo: t.data.result,
                        todo: o,
                        created_at: J.getTimestamp(new Date()),
                      };
                      this.todoItems.push(e);
                    }
                  });
              },
              removeTodo(o) {
                this.todoItems.forEach((t, e) => {
                  t.itodo === o &&
                    (this.todoItems.splice(e, 1),
                    G()
                      ["delete"](`/todo/index/${t.itodo}`)
                      .then((o) => {
                        console.log(o);
                      }));
                });
              },
              clearTodo() {
                G()
                  ["delete"]("/todo/index")
                  .then((o) => {
                    200 === o.status &&
                      o.data.result &&
                      this.todoItems.splice(0);
                  });
              },
            },
            components: {
              TodoHeader: m,
              TodoInput: y,
              TodoList: B,
              TodoFooter: E,
              AlertModal: Y,
            },
            created() {
              G()
                .get("/todo/index")
                .then((o) => {
                  200 === o.status &&
                    o.data.length > 0 &&
                    o.data.forEach((o) => {
                      this.todoItems.push(o);
                    }),
                    console.log(o);
                });
            },
          };
        const X = (0, u.Z)(Q, [["render", r]]);
        var oo = X;
        (0, n.ri)(oo).mount("#app");
      },
    },
    t = {};
  function e(n) {
    var d = t[n];
    if (void 0 !== d) return d.exports;
    var a = (t[n] = { exports: {} });
    return o[n](a, a.exports, e), a.exports;
  }
  (e.m = o),
    (function () {
      var o = [];
      e.O = function (t, n, d, a) {
        if (!n) {
          var r = 1 / 0;
          for (c = 0; c < o.length; c++) {
            (n = o[c][0]), (d = o[c][1]), (a = o[c][2]);
            for (var s = !0, l = 0; l < n.length; l++)
              (!1 & a || r >= a) &&
              Object.keys(e.O).every(function (o) {
                return e.O[o](n[l]);
              })
                ? n.splice(l--, 1)
                : ((s = !1), a < r && (r = a));
            if (s) {
              o.splice(c--, 1);
              var i = d();
              void 0 !== i && (t = i);
            }
          }
          return t;
        }
        a = a || 0;
        for (var c = o.length; c > 0 && o[c - 1][2] > a; c--) o[c] = o[c - 1];
        o[c] = [n, d, a];
      };
    })(),
    (function () {
      e.n = function (o) {
        var t =
          o && o.__esModule
            ? function () {
                return o["default"];
              }
            : function () {
                return o;
              };
        return e.d(t, { a: t }), t;
      };
    })(),
    (function () {
      e.d = function (o, t) {
        for (var n in t)
          e.o(t, n) &&
            !e.o(o, n) &&
            Object.defineProperty(o, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (o) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (o, t) {
        return Object.prototype.hasOwnProperty.call(o, t);
      };
    })(),
    (function () {
      var o = { 143: 0 };
      e.O.j = function (t) {
        return 0 === o[t];
      };
      var t = function (t, n) {
          var d,
            a,
            r = n[0],
            s = n[1],
            l = n[2],
            i = 0;
          if (
            r.some(function (t) {
              return 0 !== o[t];
            })
          ) {
            for (d in s) e.o(s, d) && (e.m[d] = s[d]);
            if (l) var c = l(e);
          }
          for (t && t(n); i < r.length; i++)
            (a = r[i]), e.o(o, a) && o[a] && o[a][0](), (o[a] = 0);
          return e.O(c);
        },
        n = (self["webpackChunkvue_project"] =
          self["webpackChunkvue_project"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = e.O(void 0, [998], function () {
    return e(7082);
  });
  n = e.O(n);
})();
//# sourceMappingURL=app.cda7e2ef.js.map
