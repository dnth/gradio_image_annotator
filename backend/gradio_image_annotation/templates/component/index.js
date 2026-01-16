const {
  SvelteComponent: S_,
  assign: q_,
  create_slot: z_,
  detach: B_,
  element: D_,
  get_all_dirty_from_scope: L_,
  get_slot_changes: E_,
  get_spread_update: M_,
  init: R_,
  insert: A_,
  safe_not_equal: W_,
  set_dynamic_element_data: xo,
  set_style: Ye,
  toggle_class: st,
  transition_in: Qa,
  transition_out: xa,
  update_slot_base: X_
} = window.__gradio__svelte__internal;
function I_(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = z_(
    l,
    i,
    /*$$scope*/
    i[17],
    null
  );
  let s = [
    { "data-testid": (
      /*test_id*/
      i[7]
    ) },
    { id: (
      /*elem_id*/
      i[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      i[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < s.length; a += 1)
    r = q_(r, s[a]);
  return {
    c() {
      e = D_(
        /*tag*/
        i[14]
      ), o && o.c(), xo(
        /*tag*/
        i[14]
      )(e, r), st(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), st(
        e,
        "padded",
        /*padding*/
        i[6]
      ), st(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), st(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), st(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Ye(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Ye(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Ye(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Ye(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Ye(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Ye(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Ye(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      A_(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && X_(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? E_(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : L_(
          /*$$scope*/
          a[17]
        ),
        null
      ), xo(
        /*tag*/
        a[14]
      )(e, r = M_(s, [
        (!n || _ & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || _ & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || _ & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), st(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), st(
        e,
        "padded",
        /*padding*/
        a[6]
      ), st(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), st(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), st(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), _ & /*height*/
      1 && Ye(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && Ye(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && Ye(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && Ye(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && Ye(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && Ye(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Qa(o, a), n = !0);
    },
    o(a) {
      xa(o, a), n = !1;
    },
    d(a) {
      a && B_(e), o && o.d(a);
    }
  };
}
function Y_(i) {
  let e, t = (
    /*tag*/
    i[14] && I_(i)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, l) {
      t && t.m(n, l), e = !0;
    },
    p(n, [l]) {
      /*tag*/
      n[14] && t.p(n, l);
    },
    i(n) {
      e || (Qa(t, n), e = !0);
    },
    o(n) {
      xa(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function H_(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: f = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: w = null } = e, { min_width: p = 0 } = e, k = f === "fieldset" ? "fieldset" : "div";
  const B = (z) => {
    if (z !== void 0) {
      if (typeof z == "number")
        return z + "px";
      if (typeof z == "string")
        return z;
    }
  };
  return i.$$set = (z) => {
    "height" in z && t(0, o = z.height), "width" in z && t(1, s = z.width), "elem_id" in z && t(2, r = z.elem_id), "elem_classes" in z && t(3, a = z.elem_classes), "variant" in z && t(4, _ = z.variant), "border_mode" in z && t(5, c = z.border_mode), "padding" in z && t(6, u = z.padding), "type" in z && t(16, f = z.type), "test_id" in z && t(7, d = z.test_id), "explicit_call" in z && t(8, m = z.explicit_call), "container" in z && t(9, h = z.container), "visible" in z && t(10, g = z.visible), "allow_overflow" in z && t(11, b = z.allow_overflow), "scale" in z && t(12, w = z.scale), "min_width" in z && t(13, p = z.min_width), "$$scope" in z && t(17, l = z.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    d,
    m,
    h,
    g,
    b,
    w,
    p,
    k,
    B,
    f,
    l,
    n
  ];
}
class T_ extends S_ {
  constructor(e) {
    super(), R_(this, e, H_, Y_, W_, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: j_,
  attr: F_,
  create_slot: U_,
  detach: V_,
  element: O_,
  get_all_dirty_from_scope: N_,
  get_slot_changes: $_,
  init: P_,
  insert: K_,
  safe_not_equal: Z_,
  transition_in: G_,
  transition_out: J_,
  update_slot_base: Q_
} = window.__gradio__svelte__internal;
function x_(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = U_(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = O_("div"), l && l.c(), F_(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      K_(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && Q_(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? $_(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : N_(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (G_(l, o), t = !0);
    },
    o(o) {
      J_(l, o), t = !1;
    },
    d(o) {
      o && V_(e), l && l.d(o);
    }
  };
}
function ec(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class tc extends j_ {
  constructor(e) {
    super(), P_(this, e, ec, x_, Z_, {});
  }
}
const {
  SvelteComponent: nc,
  attr: es,
  check_outros: ic,
  create_component: lc,
  create_slot: oc,
  destroy_component: sc,
  detach: Pi,
  element: ac,
  empty: rc,
  get_all_dirty_from_scope: _c,
  get_slot_changes: cc,
  group_outros: uc,
  init: fc,
  insert: Ki,
  mount_component: dc,
  safe_not_equal: hc,
  set_data: mc,
  space: gc,
  text: bc,
  toggle_class: Dn,
  transition_in: ci,
  transition_out: Zi,
  update_slot_base: pc
} = window.__gradio__svelte__internal;
function ts(i) {
  let e, t;
  return e = new tc({
    props: {
      $$slots: { default: [wc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      lc(e.$$.fragment);
    },
    m(n, l) {
      dc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (ci(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Zi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      sc(e, n);
    }
  };
}
function wc(i) {
  let e;
  return {
    c() {
      e = bc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Ki(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && mc(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Pi(e);
    }
  };
}
function vc(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = oc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && ts(i)
  );
  return {
    c() {
      e = ac("span"), s && s.c(), t = gc(), r && r.c(), n = rc(), es(e, "data-testid", "block-info"), es(e, "class", "svelte-22c38v"), Dn(e, "sr-only", !/*show_label*/
      i[0]), Dn(e, "hide", !/*show_label*/
      i[0]), Dn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      Ki(a, e, _), s && s.m(e, null), Ki(a, t, _), r && r.m(a, _), Ki(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && pc(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? cc(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : _c(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || _ & /*show_label*/
      1) && Dn(e, "sr-only", !/*show_label*/
      a[0]), (!l || _ & /*show_label*/
      1) && Dn(e, "hide", !/*show_label*/
      a[0]), (!l || _ & /*info*/
      2) && Dn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, _), _ & /*info*/
      2 && ci(r, 1)) : (r = ts(a), r.c(), ci(r, 1), r.m(n.parentNode, n)) : r && (uc(), Zi(r, 1, 1, () => {
        r = null;
      }), ic());
    },
    i(a) {
      l || (ci(s, a), ci(r), l = !0);
    },
    o(a) {
      Zi(s, a), Zi(r), l = !1;
    },
    d(a) {
      a && (Pi(e), Pi(t), Pi(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function kc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class er extends nc {
  constructor(e) {
    super(), fc(this, e, kc, vc, hc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Cc,
  append: Bl,
  attr: Bi,
  create_component: yc,
  destroy_component: Sc,
  detach: qc,
  element: ns,
  init: zc,
  insert: Bc,
  mount_component: Dc,
  safe_not_equal: Lc,
  set_data: Ec,
  space: Mc,
  text: Rc,
  toggle_class: It,
  transition_in: Ac,
  transition_out: Wc
} = window.__gradio__svelte__internal;
function Xc(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ns("label"), t = ns("span"), yc(n.$$.fragment), l = Mc(), o = Rc(
        /*label*/
        i[0]
      ), Bi(t, "class", "svelte-9gxdi0"), Bi(e, "for", ""), Bi(e, "data-testid", "block-label"), Bi(e, "class", "svelte-9gxdi0"), It(e, "hide", !/*show_label*/
      i[2]), It(e, "sr-only", !/*show_label*/
      i[2]), It(
        e,
        "float",
        /*float*/
        i[4]
      ), It(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Bc(r, e, a), Bl(e, t), Dc(n, t, null), Bl(e, l), Bl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Ec(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && It(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && It(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && It(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && It(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (Ac(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Wc(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && qc(e), Sc(n);
    }
  };
}
function Ic(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class Yc extends Cc {
  constructor(e) {
    super(), zc(this, e, Ic, Xc, Lc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Hc,
  append: bo,
  attr: yt,
  bubble: Tc,
  create_component: jc,
  destroy_component: Fc,
  detach: tr,
  element: po,
  init: Uc,
  insert: nr,
  listen: Vc,
  mount_component: Oc,
  safe_not_equal: Nc,
  set_data: $c,
  set_style: Ln,
  space: Pc,
  text: Kc,
  toggle_class: ze,
  transition_in: Zc,
  transition_out: Gc
} = window.__gradio__svelte__internal;
function is(i) {
  let e, t;
  return {
    c() {
      e = po("span"), t = Kc(
        /*label*/
        i[1]
      ), yt(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      nr(n, e, l), bo(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && $c(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && tr(e);
    }
  };
}
function Jc(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && is(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = po("button"), a && a.c(), t = Pc(), n = po("div"), jc(l.$$.fragment), yt(n, "class", "svelte-1lrphxw"), ze(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), ze(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), ze(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], yt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), yt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), yt(
        e,
        "title",
        /*label*/
        i[1]
      ), yt(e, "class", "svelte-1lrphxw"), ze(
        e,
        "pending",
        /*pending*/
        i[3]
      ), ze(
        e,
        "padded",
        /*padded*/
        i[5]
      ), ze(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), ze(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Ln(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Ln(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Ln(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(_, c) {
      nr(_, e, c), a && a.m(e, null), bo(e, t), bo(e, n), Oc(l, n, null), o = !0, s || (r = Vc(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = is(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && ze(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && ze(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && ze(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && yt(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && yt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && yt(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && ze(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && ze(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && ze(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && ze(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), c & /*disabled, _color*/
      4224 && Ln(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[12] ? (
        /*_color*/
        _[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Ln(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      )), c & /*offset*/
      2048 && Ln(
        e,
        "margin-left",
        /*offset*/
        _[11] + "px"
      );
    },
    i(_) {
      o || (Zc(l.$$.fragment, _), o = !0);
    },
    o(_) {
      Gc(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && tr(e), a && a.d(), Fc(l), s = !1, r();
    }
  };
}
function Qc(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: f = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(w) {
    Tc.call(this, i, w);
  }
  return i.$$set = (w) => {
    "Icon" in w && t(0, l = w.Icon), "label" in w && t(1, o = w.label), "show_label" in w && t(2, s = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, _ = w.padded), "highlight" in w && t(6, c = w.highlight), "disabled" in w && t(7, u = w.disabled), "hasPopup" in w && t(8, f = w.hasPopup), "color" in w && t(13, d = w.color), "transparent" in w && t(9, m = w.transparent), "background" in w && t(10, h = w.background), "offset" in w && t(11, g = w.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    l,
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    m,
    h,
    g,
    n,
    d,
    b
  ];
}
class hl extends Hc {
  constructor(e) {
    super(), Uc(this, e, Qc, Jc, Nc, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      offset: 11
    });
  }
}
const {
  SvelteComponent: xc,
  append: eu,
  attr: Dl,
  binding_callbacks: tu,
  create_slot: nu,
  detach: iu,
  element: ls,
  get_all_dirty_from_scope: lu,
  get_slot_changes: ou,
  init: su,
  insert: au,
  safe_not_equal: ru,
  toggle_class: Yt,
  transition_in: _u,
  transition_out: cu,
  update_slot_base: uu
} = window.__gradio__svelte__internal;
function fu(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = nu(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ls("div"), t = ls("div"), o && o.c(), Dl(t, "class", "icon svelte-3w3rth"), Dl(e, "class", "empty svelte-3w3rth"), Dl(e, "aria-label", "Empty value"), Yt(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Yt(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Yt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Yt(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      au(s, e, r), eu(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && uu(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? ou(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : lu(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Yt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Yt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Yt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Yt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (_u(o, s), n = !0);
    },
    o(s) {
      cu(o, s), n = !1;
    },
    d(s) {
      s && iu(e), o && o.d(s), i[6](null);
    }
  };
}
function du(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(u) {
    var f;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: m } = ((f = u.parentElement) === null || f === void 0 ? void 0 : f.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(u) {
    tu[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return i.$$set = (u) => {
    "size" in u && t(0, s = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, o = u.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = _(a));
  }, [s, r, a, n, o, l, c];
}
class hu extends xc {
  constructor(e) {
    super(), su(this, e, du, fu, ru, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Ib,
  append: Yb,
  attr: Hb,
  detach: Tb,
  init: jb,
  insert: Fb,
  noop: Ub,
  safe_not_equal: Vb,
  svg_element: Ob
} = window.__gradio__svelte__internal, {
  SvelteComponent: Nb,
  append: $b,
  attr: Pb,
  detach: Kb,
  init: Zb,
  insert: Gb,
  noop: Jb,
  safe_not_equal: Qb,
  svg_element: xb
} = window.__gradio__svelte__internal, {
  SvelteComponent: e2,
  append: t2,
  attr: n2,
  detach: i2,
  init: l2,
  insert: o2,
  noop: s2,
  safe_not_equal: a2,
  svg_element: r2
} = window.__gradio__svelte__internal, {
  SvelteComponent: mu,
  append: os,
  attr: Be,
  detach: gu,
  init: bu,
  insert: pu,
  noop: Ll,
  safe_not_equal: wu,
  svg_element: El
} = window.__gradio__svelte__internal;
function vu(i) {
  let e, t, n;
  return {
    c() {
      e = El("svg"), t = El("path"), n = El("circle"), Be(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Be(n, "cx", "12"), Be(n, "cy", "13"), Be(n, "r", "4"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "100%"), Be(e, "height", "100%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "1.5"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-camera");
    },
    m(l, o) {
      pu(l, e, o), os(e, t), os(e, n);
    },
    p: Ll,
    i: Ll,
    o: Ll,
    d(l) {
      l && gu(e);
    }
  };
}
class ku extends mu {
  constructor(e) {
    super(), bu(this, e, null, vu, wu, {});
  }
}
const {
  SvelteComponent: _2,
  append: c2,
  attr: u2,
  detach: f2,
  init: d2,
  insert: h2,
  noop: m2,
  safe_not_equal: g2,
  svg_element: b2
} = window.__gradio__svelte__internal, {
  SvelteComponent: p2,
  append: w2,
  attr: v2,
  detach: k2,
  init: C2,
  insert: y2,
  noop: S2,
  safe_not_equal: q2,
  svg_element: z2
} = window.__gradio__svelte__internal, {
  SvelteComponent: B2,
  append: D2,
  attr: L2,
  detach: E2,
  init: M2,
  insert: R2,
  noop: A2,
  safe_not_equal: W2,
  svg_element: X2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cu,
  append: yu,
  attr: Qe,
  detach: Su,
  init: qu,
  insert: zu,
  noop: Ml,
  safe_not_equal: Bu,
  svg_element: ss
} = window.__gradio__svelte__internal;
function Du(i) {
  let e, t;
  return {
    c() {
      e = ss("svg"), t = ss("circle"), Qe(t, "cx", "12"), Qe(t, "cy", "12"), Qe(t, "r", "10"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "stroke-width", "1.5"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-circle");
    },
    m(n, l) {
      zu(n, e, l), yu(e, t);
    },
    p: Ml,
    i: Ml,
    o: Ml,
    d(n) {
      n && Su(e);
    }
  };
}
class Lu extends Cu {
  constructor(e) {
    super(), qu(this, e, null, Du, Bu, {});
  }
}
const {
  SvelteComponent: Eu,
  append: Rl,
  attr: xe,
  detach: Mu,
  init: Ru,
  insert: Au,
  noop: Al,
  safe_not_equal: Wu,
  set_style: at,
  svg_element: Di
} = window.__gradio__svelte__internal;
function Xu(i) {
  let e, t, n, l;
  return {
    c() {
      e = Di("svg"), t = Di("g"), n = Di("path"), l = Di("path"), xe(n, "d", "M18,6L6.087,17.913"), at(n, "fill", "none"), at(n, "fill-rule", "nonzero"), at(n, "stroke-width", "2px"), xe(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), xe(l, "d", "M4.364,4.364L19.636,19.636"), at(l, "fill", "none"), at(l, "fill-rule", "nonzero"), at(l, "stroke-width", "2px"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "version", "1.1"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), xe(e, "xml:space", "preserve"), xe(e, "stroke", "currentColor"), at(e, "fill-rule", "evenodd"), at(e, "clip-rule", "evenodd"), at(e, "stroke-linecap", "round"), at(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Au(o, e, s), Rl(e, t), Rl(t, n), Rl(e, l);
    },
    p: Al,
    i: Al,
    o: Al,
    d(o) {
      o && Mu(e);
    }
  };
}
class ir extends Eu {
  constructor(e) {
    super(), Ru(this, e, null, Xu, Wu, {});
  }
}
const {
  SvelteComponent: I2,
  append: Y2,
  attr: H2,
  detach: T2,
  init: j2,
  insert: F2,
  noop: U2,
  safe_not_equal: V2,
  svg_element: O2
} = window.__gradio__svelte__internal, {
  SvelteComponent: N2,
  append: $2,
  attr: P2,
  detach: K2,
  init: Z2,
  insert: G2,
  noop: J2,
  safe_not_equal: Q2,
  svg_element: x2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Iu,
  append: Yu,
  attr: ii,
  detach: Hu,
  init: Tu,
  insert: ju,
  noop: Wl,
  safe_not_equal: Fu,
  svg_element: as
} = window.__gradio__svelte__internal;
function Uu(i) {
  let e, t;
  return {
    c() {
      e = as("svg"), t = as("path"), ii(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), ii(t, "fill", "currentColor"), ii(e, "id", "icon"), ii(e, "xmlns", "http://www.w3.org/2000/svg"), ii(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      ju(n, e, l), Yu(e, t);
    },
    p: Wl,
    i: Wl,
    o: Wl,
    d(n) {
      n && Hu(e);
    }
  };
}
class Vu extends Iu {
  constructor(e) {
    super(), Tu(this, e, null, Uu, Fu, {});
  }
}
const {
  SvelteComponent: ep,
  append: tp,
  attr: np,
  detach: ip,
  init: lp,
  insert: op,
  noop: sp,
  safe_not_equal: ap,
  svg_element: rp
} = window.__gradio__svelte__internal, {
  SvelteComponent: _p,
  append: cp,
  attr: up,
  detach: fp,
  init: dp,
  insert: hp,
  noop: mp,
  safe_not_equal: gp,
  svg_element: bp
} = window.__gradio__svelte__internal, {
  SvelteComponent: pp,
  append: wp,
  attr: vp,
  detach: kp,
  init: Cp,
  insert: yp,
  noop: Sp,
  safe_not_equal: qp,
  svg_element: zp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ou,
  append: Nu,
  attr: En,
  detach: $u,
  init: Pu,
  insert: Ku,
  noop: Xl,
  safe_not_equal: Zu,
  svg_element: rs
} = window.__gradio__svelte__internal;
function Gu(i) {
  let e, t;
  return {
    c() {
      e = rs("svg"), t = rs("path"), En(t, "fill", "currentColor"), En(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), En(e, "xmlns", "http://www.w3.org/2000/svg"), En(e, "width", "100%"), En(e, "height", "100%"), En(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Ku(n, e, l), Nu(e, t);
    },
    p: Xl,
    i: Xl,
    o: Xl,
    d(n) {
      n && $u(e);
    }
  };
}
class Ju extends Ou {
  constructor(e) {
    super(), Pu(this, e, null, Gu, Zu, {});
  }
}
const {
  SvelteComponent: Qu,
  append: xu,
  attr: Mn,
  detach: ef,
  init: tf,
  insert: nf,
  noop: Il,
  safe_not_equal: lf,
  svg_element: _s
} = window.__gradio__svelte__internal;
function of(i) {
  let e, t;
  return {
    c() {
      e = _s("svg"), t = _s("path"), Mn(t, "d", "M5 8l4 4 4-4z"), Mn(e, "class", "dropdown-arrow svelte-145leq6"), Mn(e, "xmlns", "http://www.w3.org/2000/svg"), Mn(e, "width", "100%"), Mn(e, "height", "100%"), Mn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      nf(n, e, l), xu(e, t);
    },
    p: Il,
    i: Il,
    o: Il,
    d(n) {
      n && ef(e);
    }
  };
}
class Ho extends Qu {
  constructor(e) {
    super(), tf(this, e, null, of, lf, {});
  }
}
const {
  SvelteComponent: Bp,
  append: Dp,
  attr: Lp,
  detach: Ep,
  init: Mp,
  insert: Rp,
  noop: Ap,
  safe_not_equal: Wp,
  svg_element: Xp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ip,
  append: Yp,
  attr: Hp,
  detach: Tp,
  init: jp,
  insert: Fp,
  noop: Up,
  safe_not_equal: Vp,
  svg_element: Op
} = window.__gradio__svelte__internal, {
  SvelteComponent: Np,
  append: $p,
  attr: Pp,
  detach: Kp,
  init: Zp,
  insert: Gp,
  noop: Jp,
  safe_not_equal: Qp,
  svg_element: xp
} = window.__gradio__svelte__internal, {
  SvelteComponent: ew,
  append: tw,
  attr: nw,
  detach: iw,
  init: lw,
  insert: ow,
  noop: sw,
  safe_not_equal: aw,
  svg_element: rw
} = window.__gradio__svelte__internal, {
  SvelteComponent: _w,
  append: cw,
  attr: uw,
  detach: fw,
  init: dw,
  insert: hw,
  noop: mw,
  safe_not_equal: gw,
  svg_element: bw
} = window.__gradio__svelte__internal, {
  SvelteComponent: pw,
  append: ww,
  attr: vw,
  detach: kw,
  init: Cw,
  insert: yw,
  noop: Sw,
  safe_not_equal: qw,
  svg_element: zw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bw,
  append: Dw,
  attr: Lw,
  detach: Ew,
  init: Mw,
  insert: Rw,
  noop: Aw,
  safe_not_equal: Ww,
  svg_element: Xw
} = window.__gradio__svelte__internal, {
  SvelteComponent: sf,
  append: Yl,
  attr: de,
  detach: af,
  init: rf,
  insert: _f,
  noop: Hl,
  safe_not_equal: cf,
  svg_element: Li
} = window.__gradio__svelte__internal;
function uf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Li("svg"), t = Li("rect"), n = Li("circle"), l = Li("polyline"), de(t, "x", "3"), de(t, "y", "3"), de(t, "width", "18"), de(t, "height", "18"), de(t, "rx", "2"), de(t, "ry", "2"), de(n, "cx", "8.5"), de(n, "cy", "8.5"), de(n, "r", "1.5"), de(l, "points", "21 15 16 10 5 21"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "fill", "none"), de(e, "stroke", "currentColor"), de(e, "stroke-width", "1.5"), de(e, "stroke-linecap", "round"), de(e, "stroke-linejoin", "round"), de(e, "class", "feather feather-image");
    },
    m(o, s) {
      _f(o, e, s), Yl(e, t), Yl(e, n), Yl(e, l);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(o) {
      o && af(e);
    }
  };
}
let lr = class extends sf {
  constructor(e) {
    super(), rf(this, e, null, uf, cf, {});
  }
};
const {
  SvelteComponent: ff,
  append: df,
  attr: Ei,
  detach: hf,
  init: mf,
  insert: gf,
  noop: Tl,
  safe_not_equal: bf,
  svg_element: cs
} = window.__gradio__svelte__internal;
function pf(i) {
  let e, t;
  return {
    c() {
      e = cs("svg"), t = cs("path"), Ei(t, "fill", "currentColor"), Ei(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ei(e, "xmlns", "http://www.w3.org/2000/svg"), Ei(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      gf(n, e, l), df(e, t);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(n) {
      n && hf(e);
    }
  };
}
class or extends ff {
  constructor(e) {
    super(), mf(this, e, null, pf, bf, {});
  }
}
const {
  SvelteComponent: Yw,
  append: Hw,
  attr: Tw,
  detach: jw,
  init: Fw,
  insert: Uw,
  noop: Vw,
  safe_not_equal: Ow,
  svg_element: Nw
} = window.__gradio__svelte__internal, {
  SvelteComponent: $w,
  append: Pw,
  attr: Kw,
  detach: Zw,
  init: Gw,
  insert: Jw,
  noop: Qw,
  safe_not_equal: xw,
  svg_element: ev
} = window.__gradio__svelte__internal, {
  SvelteComponent: tv,
  append: nv,
  attr: iv,
  detach: lv,
  init: ov,
  insert: sv,
  noop: av,
  safe_not_equal: rv,
  svg_element: _v
} = window.__gradio__svelte__internal, {
  SvelteComponent: cv,
  append: uv,
  attr: fv,
  detach: dv,
  init: hv,
  insert: mv,
  noop: gv,
  safe_not_equal: bv,
  svg_element: pv
} = window.__gradio__svelte__internal, {
  SvelteComponent: wv,
  append: vv,
  attr: kv,
  detach: Cv,
  init: yv,
  insert: Sv,
  noop: qv,
  safe_not_equal: zv,
  svg_element: Bv
} = window.__gradio__svelte__internal, {
  SvelteComponent: wf,
  append: Mi,
  attr: he,
  detach: vf,
  init: kf,
  insert: Cf,
  noop: jl,
  safe_not_equal: yf,
  svg_element: li
} = window.__gradio__svelte__internal;
function Sf(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = li("svg"), t = li("path"), n = li("path"), l = li("line"), o = li("line"), he(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), he(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), he(l, "x1", "12"), he(l, "y1", "19"), he(l, "x2", "12"), he(l, "y2", "23"), he(o, "x1", "8"), he(o, "y1", "23"), he(o, "x2", "16"), he(o, "y2", "23"), he(e, "xmlns", "http://www.w3.org/2000/svg"), he(e, "width", "100%"), he(e, "height", "100%"), he(e, "viewBox", "0 0 24 24"), he(e, "fill", "none"), he(e, "stroke", "currentColor"), he(e, "stroke-width", "2"), he(e, "stroke-linecap", "round"), he(e, "stroke-linejoin", "round"), he(e, "class", "feather feather-mic");
    },
    m(s, r) {
      Cf(s, e, r), Mi(e, t), Mi(e, n), Mi(e, l), Mi(e, o);
    },
    p: jl,
    i: jl,
    o: jl,
    d(s) {
      s && vf(e);
    }
  };
}
class qf extends wf {
  constructor(e) {
    super(), kf(this, e, null, Sf, yf, {});
  }
}
const {
  SvelteComponent: Dv,
  append: Lv,
  attr: Ev,
  detach: Mv,
  init: Rv,
  insert: Av,
  noop: Wv,
  safe_not_equal: Xv,
  svg_element: Iv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Yv,
  append: Hv,
  attr: Tv,
  detach: jv,
  init: Fv,
  insert: Uv,
  noop: Vv,
  safe_not_equal: Ov,
  svg_element: Nv
} = window.__gradio__svelte__internal, {
  SvelteComponent: $v,
  append: Pv,
  attr: Kv,
  detach: Zv,
  init: Gv,
  insert: Jv,
  noop: Qv,
  safe_not_equal: xv,
  svg_element: e3
} = window.__gradio__svelte__internal, {
  SvelteComponent: t3,
  append: n3,
  attr: i3,
  detach: l3,
  init: o3,
  insert: s3,
  noop: a3,
  safe_not_equal: r3,
  svg_element: _3
} = window.__gradio__svelte__internal, {
  SvelteComponent: c3,
  append: u3,
  attr: f3,
  detach: d3,
  init: h3,
  insert: m3,
  noop: g3,
  safe_not_equal: b3,
  svg_element: p3
} = window.__gradio__svelte__internal, {
  SvelteComponent: w3,
  append: v3,
  attr: k3,
  detach: C3,
  init: y3,
  insert: S3,
  noop: q3,
  safe_not_equal: z3,
  svg_element: B3
} = window.__gradio__svelte__internal, {
  SvelteComponent: zf,
  append: us,
  attr: Ve,
  detach: Bf,
  init: Df,
  insert: Lf,
  noop: Fl,
  safe_not_equal: Ef,
  set_style: Mf,
  svg_element: Ul
} = window.__gradio__svelte__internal;
function Rf(i) {
  let e, t, n;
  return {
    c() {
      e = Ul("svg"), t = Ul("polyline"), n = Ul("path"), Ve(t, "points", "1 4 1 10 7 10"), Ve(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "2"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-rotate-ccw"), Mf(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      Lf(l, e, o), us(e, t), us(e, n);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(l) {
      l && Bf(e);
    }
  };
}
class Af extends zf {
  constructor(e) {
    super(), Df(this, e, null, Rf, Ef, {});
  }
}
const {
  SvelteComponent: D3,
  append: L3,
  attr: E3,
  detach: M3,
  init: R3,
  insert: A3,
  noop: W3,
  safe_not_equal: X3,
  svg_element: I3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y3,
  append: H3,
  attr: T3,
  detach: j3,
  init: F3,
  insert: U3,
  noop: V3,
  safe_not_equal: O3,
  svg_element: N3
} = window.__gradio__svelte__internal, {
  SvelteComponent: $3,
  append: P3,
  attr: K3,
  detach: Z3,
  init: G3,
  insert: J3,
  noop: Q3,
  safe_not_equal: x3,
  svg_element: e4
} = window.__gradio__svelte__internal, {
  SvelteComponent: t4,
  append: n4,
  attr: i4,
  detach: l4,
  init: o4,
  insert: s4,
  noop: a4,
  safe_not_equal: r4,
  svg_element: _4
} = window.__gradio__svelte__internal, {
  SvelteComponent: c4,
  append: u4,
  attr: f4,
  detach: d4,
  init: h4,
  insert: m4,
  noop: g4,
  safe_not_equal: b4,
  svg_element: p4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wf,
  append: Xf,
  attr: De,
  detach: If,
  init: Yf,
  insert: Hf,
  noop: Vl,
  safe_not_equal: Tf,
  svg_element: fs
} = window.__gradio__svelte__internal;
function jf(i) {
  let e, t;
  return {
    c() {
      e = fs("svg"), t = fs("rect"), De(t, "x", "3"), De(t, "y", "3"), De(t, "width", "18"), De(t, "height", "18"), De(t, "rx", "2"), De(t, "ry", "2"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "stroke-width", "1.5"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-square");
    },
    m(n, l) {
      Hf(n, e, l), Xf(e, t);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(n) {
      n && If(e);
    }
  };
}
class Ff extends Wf {
  constructor(e) {
    super(), Yf(this, e, null, jf, Tf, {});
  }
}
const {
  SvelteComponent: w4,
  append: v4,
  attr: k4,
  detach: C4,
  init: y4,
  insert: S4,
  noop: q4,
  safe_not_equal: z4,
  svg_element: B4
} = window.__gradio__svelte__internal, {
  SvelteComponent: D4,
  append: L4,
  attr: E4,
  detach: M4,
  init: R4,
  insert: A4,
  noop: W4,
  safe_not_equal: X4,
  svg_element: I4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y4,
  append: H4,
  attr: T4,
  detach: j4,
  init: F4,
  insert: U4,
  noop: V4,
  safe_not_equal: O4,
  svg_element: N4,
  text: $4
} = window.__gradio__svelte__internal, {
  SvelteComponent: P4,
  append: K4,
  attr: Z4,
  detach: G4,
  init: J4,
  insert: Q4,
  noop: x4,
  safe_not_equal: e5,
  svg_element: t5
} = window.__gradio__svelte__internal, {
  SvelteComponent: n5,
  append: i5,
  attr: l5,
  detach: o5,
  init: s5,
  insert: a5,
  noop: r5,
  safe_not_equal: _5,
  svg_element: c5
} = window.__gradio__svelte__internal, {
  SvelteComponent: Uf,
  append: ds,
  attr: Oe,
  detach: Vf,
  init: Of,
  insert: Nf,
  noop: Ol,
  safe_not_equal: $f,
  svg_element: Nl
} = window.__gradio__svelte__internal;
function Pf(i) {
  let e, t, n;
  return {
    c() {
      e = Nl("svg"), t = Nl("polyline"), n = Nl("path"), Oe(t, "points", "1 4 1 10 7 10"), Oe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Oe(e, "xmlns", "http://www.w3.org/2000/svg"), Oe(e, "width", "100%"), Oe(e, "height", "100%"), Oe(e, "viewBox", "0 0 24 24"), Oe(e, "fill", "none"), Oe(e, "stroke", "currentColor"), Oe(e, "stroke-width", "2"), Oe(e, "stroke-linecap", "round"), Oe(e, "stroke-linejoin", "round"), Oe(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      Nf(l, e, o), ds(e, t), ds(e, n);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(l) {
      l && Vf(e);
    }
  };
}
class Kf extends Uf {
  constructor(e) {
    super(), Of(this, e, null, Pf, $f, {});
  }
}
const {
  SvelteComponent: Zf,
  append: $l,
  attr: Ce,
  detach: Gf,
  init: Jf,
  insert: Qf,
  noop: Pl,
  safe_not_equal: xf,
  svg_element: Ri
} = window.__gradio__svelte__internal;
function ed(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ri("svg"), t = Ri("path"), n = Ri("polyline"), l = Ri("line"), Ce(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Ce(n, "points", "17 8 12 3 7 8"), Ce(l, "x1", "12"), Ce(l, "y1", "3"), Ce(l, "x2", "12"), Ce(l, "y2", "15"), Ce(e, "xmlns", "http://www.w3.org/2000/svg"), Ce(e, "width", "90%"), Ce(e, "height", "90%"), Ce(e, "viewBox", "0 0 24 24"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "2"), Ce(e, "stroke-linecap", "round"), Ce(e, "stroke-linejoin", "round"), Ce(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Qf(o, e, s), $l(e, t), $l(e, n), $l(e, l);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(o) {
      o && Gf(e);
    }
  };
}
let sr = class extends Zf {
  constructor(e) {
    super(), Jf(this, e, null, ed, xf, {});
  }
};
const {
  SvelteComponent: f5,
  append: d5,
  attr: h5,
  detach: m5,
  init: g5,
  insert: b5,
  noop: p5,
  safe_not_equal: w5,
  svg_element: v5
} = window.__gradio__svelte__internal, {
  SvelteComponent: k5,
  append: C5,
  attr: y5,
  detach: S5,
  init: q5,
  insert: z5,
  noop: B5,
  safe_not_equal: D5,
  svg_element: L5,
  text: E5
} = window.__gradio__svelte__internal, {
  SvelteComponent: M5,
  append: R5,
  attr: A5,
  detach: W5,
  init: X5,
  insert: I5,
  noop: Y5,
  safe_not_equal: H5,
  svg_element: T5,
  text: j5
} = window.__gradio__svelte__internal, {
  SvelteComponent: F5,
  append: U5,
  attr: V5,
  detach: O5,
  init: N5,
  insert: $5,
  noop: P5,
  safe_not_equal: K5,
  svg_element: Z5,
  text: G5
} = window.__gradio__svelte__internal, {
  SvelteComponent: J5,
  append: Q5,
  attr: x5,
  detach: ek,
  init: tk,
  insert: nk,
  noop: ik,
  safe_not_equal: lk,
  svg_element: ok
} = window.__gradio__svelte__internal, {
  SvelteComponent: td,
  append: hs,
  attr: Ht,
  detach: nd,
  init: id,
  insert: ld,
  noop: Kl,
  safe_not_equal: od,
  svg_element: Zl
} = window.__gradio__svelte__internal;
function sd(i) {
  let e, t, n;
  return {
    c() {
      e = Zl("svg"), t = Zl("path"), n = Zl("path"), Ht(t, "fill", "currentColor"), Ht(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Ht(n, "fill", "currentColor"), Ht(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Ht(e, "xmlns", "http://www.w3.org/2000/svg"), Ht(e, "width", "100%"), Ht(e, "height", "100%"), Ht(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      ld(l, e, o), hs(e, t), hs(e, n);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(l) {
      l && nd(e);
    }
  };
}
let ar = class extends td {
  constructor(e) {
    super(), id(this, e, null, sd, od, {});
  }
};
const ad = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], ms = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
ad.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: ms[e][t],
    secondary: ms[e][n]
  }
}), {});
class Gi extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function rd(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Gi("Must be on Spaces to share.");
  let t, n, l;
  t = _d(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
  const o = new File([t], l, { type: n }), s = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: o,
    headers: {
      "Content-Type": o.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!s.ok) {
    if ((a = s.headers.get("content-type")) != null && a.includes("application/json")) {
      const _ = await s.json();
      throw new Gi(`Upload failed: ${_.error}`);
    }
    throw new Gi("Upload failed.");
  }
  return await s.text();
}
function _d(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: cd,
  create_component: ud,
  destroy_component: fd,
  init: dd,
  mount_component: hd,
  safe_not_equal: md,
  transition_in: gd,
  transition_out: bd
} = window.__gradio__svelte__internal, { createEventDispatcher: pd } = window.__gradio__svelte__internal;
function wd(i) {
  let e, t;
  return e = new hl({
    props: {
      Icon: Vu,
      label: (
        /*i18n*/
        i[2]("common.share")
      ),
      pending: (
        /*pending*/
        i[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    i[5]
  ), {
    c() {
      ud(e.$$.fragment);
    },
    m(n, l) {
      hd(e, n, l), t = !0;
    },
    p(n, [l]) {
      const o = {};
      l & /*i18n*/
      4 && (o.label = /*i18n*/
      n[2]("common.share")), l & /*pending*/
      8 && (o.pending = /*pending*/
      n[3]), e.$set(o);
    },
    i(n) {
      t || (gd(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bd(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fd(e, n);
    }
  };
}
function vd(i, e, t) {
  const n = pd();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof Gi ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class kd extends cd {
  constructor(e) {
    super(), dd(this, e, vd, wd, md, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Cd,
  append: cn,
  attr: wo,
  check_outros: yd,
  create_component: rr,
  destroy_component: _r,
  detach: Ji,
  element: vo,
  group_outros: Sd,
  init: qd,
  insert: Qi,
  mount_component: cr,
  safe_not_equal: zd,
  set_data: ko,
  space: Co,
  text: ui,
  toggle_class: gs,
  transition_in: tl,
  transition_out: nl
} = window.__gradio__svelte__internal;
function Bd(i) {
  let e, t;
  return e = new sr({}), {
    c() {
      rr(e.$$.fragment);
    },
    m(n, l) {
      cr(e, n, l), t = !0;
    },
    i(n) {
      t || (tl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      nl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _r(e, n);
    }
  };
}
function Dd(i) {
  let e, t;
  return e = new or({}), {
    c() {
      rr(e.$$.fragment);
    },
    m(n, l) {
      cr(e, n, l), t = !0;
    },
    i(n) {
      t || (tl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      nl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _r(e, n);
    }
  };
}
function bs(i) {
  let e, t, n = (
    /*i18n*/
    i[1]("common.or") + ""
  ), l, o, s, r = (
    /*message*/
    (i[2] || /*i18n*/
    i[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = vo("span"), t = ui("- "), l = ui(n), o = ui(" -"), s = Co(), a = ui(r), wo(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      Qi(_, e, c), cn(e, t), cn(e, l), cn(e, o), Qi(_, s, c), Qi(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && ko(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && ko(a, r);
    },
    d(_) {
      _ && (Ji(e), Ji(s), Ji(a));
    }
  };
}
function Ld(i) {
  let e, t, n, l, o, s = (
    /*i18n*/
    i[1](
      /*defs*/
      i[5][
        /*type*/
        i[0]
      ] || /*defs*/
      i[5].file
    ) + ""
  ), r, a, _;
  const c = [Dd, Bd], u = [];
  function f(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = f(i), l = u[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && bs(i)
  );
  return {
    c() {
      e = vo("div"), t = vo("span"), l.c(), o = Co(), r = ui(s), a = Co(), d && d.c(), wo(t, "class", "icon-wrap svelte-kzcjhc"), gs(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), wo(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      Qi(m, e, h), cn(e, t), u[n].m(t, null), cn(e, o), cn(e, r), cn(e, a), d && d.m(e, null), _ = !0;
    },
    p(m, [h]) {
      let g = n;
      n = f(m), n !== g && (Sd(), nl(u[g], 1, 1, () => {
        u[g] = null;
      }), yd(), l = u[n], l || (l = u[n] = c[n](m), l.c()), tl(l, 1), l.m(t, null)), (!_ || h & /*hovered*/
      16) && gs(
        t,
        "hovered",
        /*hovered*/
        m[4]
      ), (!_ || h & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      m[1](
        /*defs*/
        m[5][
          /*type*/
          m[0]
        ] || /*defs*/
        m[5].file
      ) + "") && ko(r, s), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = bs(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      _ || (tl(l), _ = !0);
    },
    o(m) {
      nl(l), _ = !1;
    },
    d(m) {
      m && Ji(e), u[n].d(), d && d.d();
    }
  };
}
function Ed(i, e, t) {
  let { type: n = "file" } = e, { i18n: l } = e, { message: o = void 0 } = e, { mode: s = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return i.$$set = (_) => {
    "type" in _ && t(0, n = _.type), "i18n" in _ && t(1, l = _.i18n), "message" in _ && t(2, o = _.message), "mode" in _ && t(3, s = _.mode), "hovered" in _ && t(4, r = _.hovered);
  }, [n, l, o, s, r, a];
}
class ur extends Cd {
  constructor(e) {
    super(), qd(this, e, Ed, Ld, zd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: ak,
  attr: rk,
  create_slot: _k,
  detach: ck,
  element: uk,
  get_all_dirty_from_scope: fk,
  get_slot_changes: dk,
  init: hk,
  insert: mk,
  safe_not_equal: gk,
  toggle_class: bk,
  transition_in: pk,
  transition_out: wk,
  update_slot_base: vk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Md,
  append: Gl,
  attr: dt,
  check_outros: fi,
  create_component: ml,
  destroy_component: gl,
  detach: $n,
  element: Si,
  empty: Rd,
  group_outros: di,
  init: Ad,
  insert: Pn,
  listen: bl,
  mount_component: pl,
  safe_not_equal: Wd,
  space: Jl,
  toggle_class: Gt,
  transition_in: pe,
  transition_out: Le
} = window.__gradio__svelte__internal;
function ps(i) {
  let e, t = (
    /*sources*/
    i[1].includes("upload")
  ), n, l = (
    /*sources*/
    i[1].includes("microphone")
  ), o, s = (
    /*sources*/
    i[1].includes("webcam")
  ), r, a = (
    /*sources*/
    i[1].includes("clipboard")
  ), _, c = t && ws(i), u = l && vs(i), f = s && ks(i), d = a && Cs(i);
  return {
    c() {
      e = Si("span"), c && c.c(), n = Jl(), u && u.c(), o = Jl(), f && f.c(), r = Jl(), d && d.c(), dt(e, "class", "source-selection svelte-1jp3vgd"), dt(e, "data-testid", "source-select");
    },
    m(m, h) {
      Pn(m, e, h), c && c.m(e, null), Gl(e, n), u && u.m(e, null), Gl(e, o), f && f.m(e, null), Gl(e, r), d && d.m(e, null), _ = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && pe(c, 1)) : (c = ws(m), c.c(), pe(c, 1), c.m(e, n)) : c && (di(), Le(c, 1, 1, () => {
        c = null;
      }), fi()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? u ? (u.p(m, h), h & /*sources*/
      2 && pe(u, 1)) : (u = vs(m), u.c(), pe(u, 1), u.m(e, o)) : u && (di(), Le(u, 1, 1, () => {
        u = null;
      }), fi()), h & /*sources*/
      2 && (s = /*sources*/
      m[1].includes("webcam")), s ? f ? (f.p(m, h), h & /*sources*/
      2 && pe(f, 1)) : (f = ks(m), f.c(), pe(f, 1), f.m(e, r)) : f && (di(), Le(f, 1, 1, () => {
        f = null;
      }), fi()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && pe(d, 1)) : (d = Cs(m), d.c(), pe(d, 1), d.m(e, null)) : d && (di(), Le(d, 1, 1, () => {
        d = null;
      }), fi());
    },
    i(m) {
      _ || (pe(c), pe(u), pe(f), pe(d), _ = !0);
    },
    o(m) {
      Le(c), Le(u), Le(f), Le(d), _ = !1;
    },
    d(m) {
      m && $n(e), c && c.d(), u && u.d(), f && f.d(), d && d.d();
    }
  };
}
function ws(i) {
  let e, t, n, l, o;
  return t = new sr({}), {
    c() {
      e = Si("button"), ml(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Upload file"), Gt(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      Pn(s, e, r), pl(t, e, null), n = !0, l || (o = bl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $n(e), gl(t), l = !1, o();
    }
  };
}
function vs(i) {
  let e, t, n, l, o;
  return t = new qf({}), {
    c() {
      e = Si("button"), ml(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Record audio"), Gt(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      Pn(s, e, r), pl(t, e, null), n = !0, l || (o = bl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $n(e), gl(t), l = !1, o();
    }
  };
}
function ks(i) {
  let e, t, n, l, o;
  return t = new ar({}), {
    c() {
      e = Si("button"), ml(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Capture from camera"), Gt(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      Pn(s, e, r), pl(t, e, null), n = !0, l || (o = bl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $n(e), gl(t), l = !1, o();
    }
  };
}
function Cs(i) {
  let e, t, n, l, o;
  return t = new or({}), {
    c() {
      e = Si("button"), ml(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Paste from clipboard"), Gt(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      Pn(s, e, r), pl(t, e, null), n = !0, l || (o = bl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (pe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $n(e), gl(t), l = !1, o();
    }
  };
}
function Xd(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && ps(i)
  );
  return {
    c() {
      n && n.c(), e = Rd();
    },
    m(l, o) {
      n && n.m(l, o), Pn(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && pe(n, 1)) : (n = ps(l), n.c(), pe(n, 1), n.m(e.parentNode, e)) : n && (di(), Le(n, 1, 1, () => {
        n = null;
      }), fi());
    },
    i(l) {
      t || (pe(n), t = !0);
    },
    o(l) {
      Le(n), t = !1;
    },
    d(l) {
      l && $n(e), n && n.d(l);
    }
  };
}
function Id(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, h, g, b) {
    function w(p) {
      return p instanceof g ? p : new g(function(k) {
        k(p);
      });
    }
    return new (g || (g = Promise))(function(p, k) {
      function B(C) {
        try {
          v(b.next(C));
        } catch (E) {
          k(E);
        }
      }
      function z(C) {
        try {
          v(b.throw(C));
        } catch (E) {
          k(E);
        }
      }
      function v(C) {
        C.done ? p(C.value) : w(C.value).then(B, z);
      }
      v((b = b.apply(m, h || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function _(m) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, s = m), a(m);
    });
  }
  const c = () => _("upload"), u = () => _("microphone"), f = () => _("webcam"), d = () => _("clipboard");
  return i.$$set = (m) => {
    "sources" in m && t(1, o = m.sources), "active_source" in m && t(0, s = m.active_source), "handle_clear" in m && t(4, r = m.handle_clear), "handle_select" in m && t(5, a = m.handle_select);
  }, i.$$.update = () => {
    i.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    s,
    o,
    n,
    _,
    r,
    a,
    c,
    u,
    f,
    d
  ];
}
class Yd extends Md {
  constructor(e) {
    super(), Ad(this, e, Id, Xd, Wd, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Hn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function xi() {
}
const Hd = (i) => i;
function ys(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const fr = typeof window < "u";
let Ss = fr ? () => window.performance.now() : () => Date.now(), dr = fr ? (i) => requestAnimationFrame(i) : xi;
const Nn = /* @__PURE__ */ new Set();
function hr(i) {
  Nn.forEach((e) => {
    e.c(i) || (Nn.delete(e), e.f());
  }), Nn.size !== 0 && dr(hr);
}
function Td(i) {
  let e;
  return Nn.size === 0 && dr(hr), { promise: new Promise((t) => {
    Nn.add(e = { c: i, f: t });
  }), abort() {
    Nn.delete(e);
  } };
}
function jd(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function Fd(i, { delay: e = 0, duration: t = 400, easing: n = Hd } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function qs(i, { delay: e = 0, duration: t = 400, easing: n = jd, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [u, f] = ys(l), [d, m] = ys(o);
  return { delay: e, duration: t, easing: n, css: (h, g) => `
			transform: ${_} translate(${(1 - h) * u}${f}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}` };
}
const Rn = [];
function Ud(i, e = xi) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const _ = !Rn.length;
      for (const c of n) c[1](), Rn.push(c, i);
      if (_) {
        for (let c = 0; c < Rn.length; c += 2) Rn[c][0](Rn[c + 1]);
        Rn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = xi) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || xi), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function zs(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function yo(i, e, t, n) {
  if (typeof t == "number" || zs(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, zs(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => yo(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = yo(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function Bs(i, e = {}) {
  const t = Ud(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, u = 1, f = 0, d = !1;
  function m(g, b = {}) {
    c = g;
    const w = a = {};
    return i == null || b.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, s = Ss(), _ = g, t.set(i = c), Promise.resolve()) : (b.soft && (f = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), u = 0), r || (s = Ss(), d = !1, r = Td((p) => {
      if (d) return d = !1, r = null, !1;
      u = Math.min(u + f, 1);
      const k = { inv_mass: u, opts: h, settled: !0, dt: 60 * (p - s) / 1e3 }, B = yo(k, _, i, c);
      return s = p, _ = i, t.set(i = B), k.settled && (r = null), !k.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        w === a && p();
      });
    }));
  }
  const h = { set: m, update: (g, b) => m(g(c, i), b), subscribe: t.subscribe, stiffness: n, damping: l, precision: o };
  return h;
}
const {
  SvelteComponent: Vd,
  append: et,
  attr: K,
  component_subscribe: Ds,
  detach: Od,
  element: Nd,
  init: $d,
  insert: Pd,
  noop: Ls,
  safe_not_equal: Kd,
  set_style: Ai,
  svg_element: tt,
  toggle_class: Es
} = window.__gradio__svelte__internal, { onMount: Zd } = window.__gradio__svelte__internal;
function Gd(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f;
  return {
    c() {
      e = Nd("div"), t = tt("svg"), n = tt("g"), l = tt("path"), o = tt("path"), s = tt("path"), r = tt("path"), a = tt("g"), _ = tt("path"), c = tt("path"), u = tt("path"), f = tt("path"), K(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), K(l, "fill", "#FF7C00"), K(l, "fill-opacity", "0.4"), K(l, "class", "svelte-43sxxs"), K(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), K(o, "fill", "#FF7C00"), K(o, "class", "svelte-43sxxs"), K(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), K(s, "fill", "#FF7C00"), K(s, "fill-opacity", "0.4"), K(s, "class", "svelte-43sxxs"), K(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), K(r, "fill", "#FF7C00"), K(r, "class", "svelte-43sxxs"), Ai(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), K(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), K(_, "fill", "#FF7C00"), K(_, "fill-opacity", "0.4"), K(_, "class", "svelte-43sxxs"), K(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), K(c, "fill", "#FF7C00"), K(c, "class", "svelte-43sxxs"), K(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), K(u, "fill", "#FF7C00"), K(u, "fill-opacity", "0.4"), K(u, "class", "svelte-43sxxs"), K(f, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), K(f, "fill", "#FF7C00"), K(f, "class", "svelte-43sxxs"), Ai(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), K(t, "viewBox", "-1200 -1200 3000 3000"), K(t, "fill", "none"), K(t, "xmlns", "http://www.w3.org/2000/svg"), K(t, "class", "svelte-43sxxs"), K(e, "class", "svelte-43sxxs"), Es(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      Pd(d, e, m), et(e, t), et(t, n), et(n, l), et(n, o), et(n, s), et(n, r), et(t, a), et(a, _), et(a, c), et(a, u), et(a, f);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && Ai(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && Ai(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && Es(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Ls,
    o: Ls,
    d(d) {
      d && Od(e);
    }
  };
}
function Jd(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(d, m, h, g) {
    function b(w) {
      return w instanceof h ? w : new h(function(p) {
        p(w);
      });
    }
    return new (h || (h = Promise))(function(w, p) {
      function k(v) {
        try {
          z(g.next(v));
        } catch (C) {
          p(C);
        }
      }
      function B(v) {
        try {
          z(g.throw(v));
        } catch (C) {
          p(C);
        }
      }
      function z(v) {
        v.done ? w(v.value) : b(v.value).then(k, B);
      }
      z((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = Bs([0, 0]);
  Ds(i, r, (d) => t(1, n = d));
  const a = Bs([0, 0]);
  Ds(i, a, (d) => t(2, l = d));
  let _;
  function c() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return o(this, void 0, void 0, function* () {
      yield c(), _ || u();
    });
  }
  function f() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return Zd(() => (f(), () => _ = !0)), i.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, l, r, a];
}
class Qd extends Vd {
  constructor(e) {
    super(), $d(this, e, Jd, Gd, Kd, { margin: 0 });
  }
}
const {
  SvelteComponent: xd,
  append: un,
  attr: ot,
  binding_callbacks: Ms,
  check_outros: So,
  create_component: mr,
  create_slot: gr,
  destroy_component: br,
  destroy_each: pr,
  detach: U,
  element: ut,
  empty: Kn,
  ensure_array_like: il,
  get_all_dirty_from_scope: wr,
  get_slot_changes: vr,
  group_outros: qo,
  init: e1,
  insert: V,
  mount_component: kr,
  noop: zo,
  safe_not_equal: t1,
  set_data: Ze,
  set_style: Kt,
  space: Ke,
  text: ae,
  toggle_class: Pe,
  transition_in: lt,
  transition_out: ft,
  update_slot_base: Cr
} = window.__gradio__svelte__internal, { tick: n1 } = window.__gradio__svelte__internal, { onDestroy: i1 } = window.__gradio__svelte__internal, { createEventDispatcher: l1 } = window.__gradio__svelte__internal, o1 = (i) => ({}), Rs = (i) => ({}), s1 = (i) => ({}), As = (i) => ({});
function Ws(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Xs(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function a1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new hl({
    props: {
      Icon: ir,
      label: (
        /*i18n*/
        i[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    i[32]
  );
  const _ = (
    /*#slots*/
    i[30].error
  ), c = gr(
    _,
    i,
    /*$$scope*/
    i[29],
    Rs
  );
  return {
    c() {
      e = ut("div"), mr(t.$$.fragment), n = Ke(), l = ut("span"), s = ae(o), r = Ke(), c && c.c(), ot(e, "class", "clear-status svelte-16nch4a"), ot(l, "class", "error svelte-16nch4a");
    },
    m(u, f) {
      V(u, e, f), kr(t, e, null), V(u, n, f), V(u, l, f), un(l, s), V(u, r, f), c && c.m(u, f), a = !0;
    },
    p(u, f) {
      const d = {};
      f[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || f[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      u[1]("common.error") + "") && Ze(s, o), c && c.p && (!a || f[0] & /*$$scope*/
      536870912) && Cr(
        c,
        _,
        u,
        /*$$scope*/
        u[29],
        a ? vr(
          _,
          /*$$scope*/
          u[29],
          f,
          o1
        ) : wr(
          /*$$scope*/
          u[29]
        ),
        Rs
      );
    },
    i(u) {
      a || (lt(t.$$.fragment, u), lt(c, u), a = !0);
    },
    o(u) {
      ft(t.$$.fragment, u), ft(c, u), a = !1;
    },
    d(u) {
      u && (U(e), U(n), U(l), U(r)), br(t), c && c.d(u);
    }
  };
}
function r1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Is(i)
  );
  function u(p, k) {
    if (
      /*progress*/
      p[7]
    ) return u1;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return c1;
    if (
      /*queue_position*/
      p[2] === 0
    ) return _1;
  }
  let f = u(i), d = f && f(i), m = (
    /*timer*/
    i[5] && Ts(i)
  );
  const h = [m1, h1], g = [];
  function b(p, k) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = b(i)) && (s = g[o] = h[o](i));
  let w = !/*timer*/
  i[5] && $s(i);
  return {
    c() {
      c && c.c(), e = Ke(), t = ut("div"), d && d.c(), n = Ke(), m && m.c(), l = Ke(), s && s.c(), r = Ke(), w && w.c(), a = Kn(), ot(t, "class", "progress-text svelte-16nch4a"), Pe(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), Pe(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, k) {
      c && c.m(p, k), V(p, e, k), V(p, t, k), d && d.m(t, null), un(t, n), m && m.m(t, null), V(p, l, k), ~o && g[o].m(p, k), V(p, r, k), w && w.m(p, k), V(p, a, k), _ = !0;
    },
    p(p, k) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? c ? c.p(p, k) : (c = Is(p), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), f === (f = u(p)) && d ? d.p(p, k) : (d && d.d(1), d = f && f(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? m ? m.p(p, k) : (m = Ts(p), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!_ || k[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!_ || k[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let B = o;
      o = b(p), o === B ? ~o && g[o].p(p, k) : (s && (qo(), ft(g[B], 1, 1, () => {
        g[B] = null;
      }), So()), ~o ? (s = g[o], s ? s.p(p, k) : (s = g[o] = h[o](p), s.c()), lt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? w && (qo(), ft(w, 1, 1, () => {
        w = null;
      }), So()) : w ? (w.p(p, k), k[0] & /*timer*/
      32 && lt(w, 1)) : (w = $s(p), w.c(), lt(w, 1), w.m(a.parentNode, a));
    },
    i(p) {
      _ || (lt(s), lt(w), _ = !0);
    },
    o(p) {
      ft(s), ft(w), _ = !1;
    },
    d(p) {
      p && (U(e), U(t), U(l), U(r), U(a)), c && c.d(p), d && d.d(), m && m.d(), ~o && g[o].d(p), w && w.d(p);
    }
  };
}
function Is(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = ut("div"), ot(e, "class", "eta-bar svelte-16nch4a"), Kt(e, "transform", t);
    },
    m(n, l) {
      V(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Kt(e, "transform", t);
    },
    d(n) {
      n && U(e);
    }
  };
}
function _1(i) {
  let e;
  return {
    c() {
      e = ae("processing |");
    },
    m(t, n) {
      V(t, e, n);
    },
    p: zo,
    d(t) {
      t && U(e);
    }
  };
}
function c1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = ae("queue: "), n = ae(t), l = ae("/"), o = ae(
        /*queue_size*/
        i[3]
      ), s = ae(" |");
    },
    m(r, a) {
      V(r, e, a), V(r, n, a), V(r, l, a), V(r, o, a), V(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ze(n, t), a[0] & /*queue_size*/
      8 && Ze(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (U(e), U(n), U(l), U(o), U(s));
    }
  };
}
function u1(i) {
  let e, t = il(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Hs(Xs(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Kn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      V(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = il(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Xs(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Hs(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && U(e), pr(n, l);
    }
  };
}
function Ys(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? d1 : f1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = Ke(), n = ae(t), l = ae(" | "), s = ae(o);
    },
    m(c, u) {
      _.m(c, u), V(c, e, u), V(c, n, u), V(c, l, u), V(c, s, u);
    },
    p(c, u) {
      a === (a = r(c)) && _ ? _.p(c, u) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ze(n, t);
    },
    d(c) {
      c && (U(e), U(n), U(l), U(s)), _.d(c);
    }
  };
}
function f1(i) {
  let e = Hn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ae(e);
    },
    m(n, l) {
      V(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Hn(
        /*p*/
        n[41].index || 0
      ) + "") && Ze(t, e);
    },
    d(n) {
      n && U(t);
    }
  };
}
function d1(i) {
  let e = Hn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Hn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = ae(e), n = ae("/"), o = ae(l);
    },
    m(s, r) {
      V(s, t, r), V(s, n, r), V(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Hn(
        /*p*/
        s[41].index || 0
      ) + "") && Ze(t, e), r[0] & /*progress*/
      128 && l !== (l = Hn(
        /*p*/
        s[41].length
      ) + "") && Ze(o, l);
    },
    d(s) {
      s && (U(t), U(n), U(o));
    }
  };
}
function Hs(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Ys(i)
  );
  return {
    c() {
      t && t.c(), e = Kn();
    },
    m(n, l) {
      t && t.m(n, l), V(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = Ys(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && U(e), t && t.d(n);
    }
  };
}
function Ts(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = ae(
        /*formatted_timer*/
        i[20]
      ), n = ae(t), l = ae("s");
    },
    m(o, s) {
      V(o, e, s), V(o, n, s), V(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && Ze(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Ze(n, t);
    },
    d(o) {
      o && (U(e), U(n), U(l));
    }
  };
}
function h1(i) {
  let e, t;
  return e = new Qd({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      mr(e.$$.fragment);
    },
    m(n, l) {
      kr(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (lt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ft(e.$$.fragment, n), t = !1;
    },
    d(n) {
      br(e, n);
    }
  };
}
function m1(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && js(i)
  );
  return {
    c() {
      e = ut("div"), t = ut("div"), r && r.c(), n = Ke(), l = ut("div"), o = ut("div"), ot(t, "class", "progress-level-inner svelte-16nch4a"), ot(o, "class", "progress-bar svelte-16nch4a"), Kt(o, "width", s), ot(l, "class", "progress-bar-wrap svelte-16nch4a"), ot(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      V(a, e, _), un(e, t), r && r.m(t, null), un(e, n), un(e, l), un(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = js(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && Kt(o, "width", s);
    },
    i: zo,
    o: zo,
    d(a) {
      a && U(e), r && r.d(), i[31](null);
    }
  };
}
function js(i) {
  let e, t = il(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Ns(Ws(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Kn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      V(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = il(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Ws(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Ns(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && U(e), pr(n, l);
    }
  };
}
function Fs(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && g1()
  ), s = (
    /*p*/
    i[41].desc != null && Us(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && Vs()
  ), a = (
    /*progress_level*/
    i[14] != null && Os(i)
  );
  return {
    c() {
      o && o.c(), e = Ke(), s && s.c(), t = Ke(), r && r.c(), n = Ke(), a && a.c(), l = Kn();
    },
    m(_, c) {
      o && o.m(_, c), V(_, e, c), s && s.m(_, c), V(_, t, c), r && r.m(_, c), V(_, n, c), a && a.m(_, c), V(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = Us(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = Vs(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = Os(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && (U(e), U(t), U(n), U(l)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function g1(i) {
  let e;
  return {
    c() {
      e = ae(" /");
    },
    m(t, n) {
      V(t, e, n);
    },
    d(t) {
      t && U(e);
    }
  };
}
function Us(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = ae(e);
    },
    m(n, l) {
      V(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ze(t, e);
    },
    d(n) {
      n && U(t);
    }
  };
}
function Vs(i) {
  let e;
  return {
    c() {
      e = ae("-");
    },
    m(t, n) {
      V(t, e, n);
    },
    d(t) {
      t && U(e);
    }
  };
}
function Os(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ae(e), n = ae("%");
    },
    m(l, o) {
      V(l, t, o), V(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && Ze(t, e);
    },
    d(l) {
      l && (U(t), U(n));
    }
  };
}
function Ns(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Fs(i)
  );
  return {
    c() {
      t && t.c(), e = Kn();
    },
    m(n, l) {
      t && t.m(n, l), V(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = Fs(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && U(e), t && t.d(n);
    }
  };
}
function $s(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = gr(
    o,
    i,
    /*$$scope*/
    i[29],
    As
  );
  return {
    c() {
      e = ut("p"), t = ae(
        /*loading_text*/
        i[9]
      ), n = Ke(), s && s.c(), ot(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      V(r, e, a), un(e, t), V(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && Ze(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && Cr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? vr(
          o,
          /*$$scope*/
          r[29],
          a,
          s1
        ) : wr(
          /*$$scope*/
          r[29]
        ),
        As
      );
    },
    i(r) {
      l || (lt(s, r), l = !0);
    },
    o(r) {
      ft(s, r), l = !1;
    },
    d(r) {
      r && (U(e), U(n)), s && s.d(r);
    }
  };
}
function b1(i) {
  let e, t, n, l, o;
  const s = [r1, a1], r = [];
  function a(_, c) {
    return (
      /*status*/
      _[4] === "pending" ? 0 : (
        /*status*/
        _[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(i)) && (n = r[t] = s[t](i)), {
    c() {
      e = ut("div"), n && n.c(), ot(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), Pe(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), Pe(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), Pe(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), Pe(
        e,
        "border",
        /*border*/
        i[12]
      ), Kt(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Kt(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(_, c) {
      V(_, e, c), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(_, c) {
      let u = t;
      t = a(_), t === u ? ~t && r[t].p(_, c) : (n && (qo(), ft(r[u], 1, 1, () => {
        r[u] = null;
      }), So()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), lt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && ot(e, "class", l), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Pe(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Pe(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && Pe(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && Pe(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && Kt(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Kt(
        e,
        "padding",
        /*absolute*/
        _[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(_) {
      o || (lt(n), o = !0);
    },
    o(_) {
      ft(n), o = !1;
    },
    d(_) {
      _ && U(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var p1 = function(i, e, t, n) {
  function l(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(c) {
      try {
        _(n.next(c));
      } catch (u) {
        s(u);
      }
    }
    function a(c) {
      try {
        _(n.throw(c));
      } catch (u) {
        s(u);
      }
    }
    function _(c) {
      c.done ? o(c.value) : l(c.value).then(r, a);
    }
    _((n = n.apply(i, e || [])).next());
  });
};
let Wi = [], Ql = !1;
function w1(i) {
  return p1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Wi.push(e), !Ql) Ql = !0;
      else return;
      yield n1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Wi.length; l++) {
          const s = Wi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Ql = !1, Wi = [];
      });
    }
  });
}
function v1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = l1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: f = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: k = !1 } = e, { border: B = !1 } = e, { autoscroll: z } = e, v, C = !1, E = 0, q = 0, S = null, A = null, F = 0, X = null, ne, Z = null, re = !0;
  const I = () => {
    t(0, a = t(27, S = t(19, j = null))), t(25, E = performance.now()), t(26, q = 0), C = !0, $();
  };
  function $() {
    requestAnimationFrame(() => {
      t(26, q = (performance.now() - E) / 1e3), C && $();
    });
  }
  function R() {
    t(26, q = 0), t(0, a = t(27, S = t(19, j = null))), C && (C = !1);
  }
  i1(() => {
    C && R();
  });
  let j = null;
  function ee(W) {
    Ms[W ? "unshift" : "push"](() => {
      Z = W, t(16, Z), t(7, g), t(14, X), t(15, ne);
    });
  }
  const ge = () => {
    s("clear_status");
  };
  function ce(W) {
    Ms[W ? "unshift" : "push"](() => {
      v = W, t(13, v);
    });
  }
  return i.$$set = (W) => {
    "i18n" in W && t(1, r = W.i18n), "eta" in W && t(0, a = W.eta), "queue_position" in W && t(2, _ = W.queue_position), "queue_size" in W && t(3, c = W.queue_size), "status" in W && t(4, u = W.status), "scroll_to_output" in W && t(22, f = W.scroll_to_output), "timer" in W && t(5, d = W.timer), "show_progress" in W && t(6, m = W.show_progress), "message" in W && t(23, h = W.message), "progress" in W && t(7, g = W.progress), "variant" in W && t(8, b = W.variant), "loading_text" in W && t(9, w = W.loading_text), "absolute" in W && t(10, p = W.absolute), "translucent" in W && t(11, k = W.translucent), "border" in W && t(12, B = W.border), "autoscroll" in W && t(24, z = W.autoscroll), "$$scope" in W && t(29, o = W.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = S), a != null && S !== a && (t(28, A = (performance.now() - E) / 1e3 + a), t(19, j = A.toFixed(1)), t(27, S = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, F = A === null || A <= 0 || !q ? null : Math.min(q / A, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, re = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, X = g.map((W) => {
      if (W.index != null && W.length != null)
        return W.index / W.length;
      if (W.progress != null)
        return W.progress;
    })) : t(14, X = null), X ? (t(15, ne = X[X.length - 1]), Z && (ne === 0 ? t(16, Z.style.transition = "0", Z) : t(16, Z.style.transition = "150ms", Z))) : t(15, ne = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? I() : R()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && v && f && (u === "pending" || u === "complete") && w1(v, z), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = q.toFixed(1));
  }, [
    a,
    r,
    _,
    c,
    u,
    d,
    m,
    g,
    b,
    w,
    p,
    k,
    B,
    v,
    X,
    ne,
    Z,
    F,
    re,
    j,
    n,
    s,
    f,
    h,
    z,
    E,
    q,
    S,
    A,
    o,
    l,
    ee,
    ge,
    ce
  ];
}
class k1 extends xd {
  constructor(e) {
    super(), e1(
      this,
      e,
      v1,
      b1,
      t1,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: kk,
  add_render_callback: Ck,
  append: yk,
  attr: Sk,
  bubble: qk,
  check_outros: zk,
  create_component: Bk,
  create_in_transition: Dk,
  create_out_transition: Lk,
  destroy_component: Ek,
  detach: Mk,
  element: Rk,
  group_outros: Ak,
  init: Wk,
  insert: Xk,
  listen: Ik,
  mount_component: Yk,
  run_all: Hk,
  safe_not_equal: Tk,
  set_data: jk,
  space: Fk,
  stop_propagation: Uk,
  text: Vk,
  transition_in: Ok,
  transition_out: Nk
} = window.__gradio__svelte__internal, { createEventDispatcher: $k, onMount: Pk } = window.__gradio__svelte__internal, {
  SvelteComponent: Kk,
  append: Zk,
  attr: Gk,
  bubble: Jk,
  check_outros: Qk,
  create_animation: xk,
  create_component: e6,
  destroy_component: t6,
  detach: n6,
  element: i6,
  ensure_array_like: l6,
  fix_and_outro_and_destroy_block: o6,
  fix_position: s6,
  group_outros: a6,
  init: r6,
  insert: _6,
  mount_component: c6,
  noop: u6,
  safe_not_equal: f6,
  set_style: d6,
  space: h6,
  transition_in: m6,
  transition_out: g6,
  update_keyed_each: b6
} = window.__gradio__svelte__internal, { setContext: p6, getContext: C1 } = window.__gradio__svelte__internal, y1 = "WORKER_PROXY_CONTEXT_KEY";
function yr() {
  return C1(y1);
}
function S1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Sr(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function qr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!S1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function q1(i) {
  if (i == null || !qr(i))
    return i;
  const e = yr();
  if (e == null)
    return i;
  const n = new URL(i, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((l) => {
    if (l.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const o = new Blob([l.body], {
      type: Sr(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: z1,
  assign: ll,
  check_outros: zr,
  compute_rest_props: Ps,
  create_slot: To,
  detach: wl,
  element: Br,
  empty: Dr,
  exclude_internal_props: B1,
  get_all_dirty_from_scope: jo,
  get_slot_changes: Fo,
  get_spread_update: Lr,
  group_outros: Er,
  init: D1,
  insert: vl,
  listen: Mr,
  prevent_default: L1,
  safe_not_equal: E1,
  set_attributes: ol,
  transition_in: bn,
  transition_out: pn,
  update_slot_base: Uo
} = window.__gradio__svelte__internal, { createEventDispatcher: M1 } = window.__gradio__svelte__internal;
function R1(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = To(
    s,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      i[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      i[1]
    ) },
    /*$$restProps*/
    i[6]
  ], _ = {};
  for (let c = 0; c < a.length; c += 1)
    _ = ll(_, a[c]);
  return {
    c() {
      e = Br("a"), r && r.c(), ol(e, _);
    },
    m(c, u) {
      vl(c, e, u), r && r.m(e, null), n = !0, l || (o = Mr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Uo(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? Fo(
          s,
          /*$$scope*/
          c[7],
          u,
          null
        ) : jo(
          /*$$scope*/
          c[7]
        ),
        null
      ), ol(e, _ = Lr(a, [
        (!n || u & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || u & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        u & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ]));
    },
    i(c) {
      n || (bn(r, c), n = !0);
    },
    o(c) {
      pn(r, c), n = !1;
    },
    d(c) {
      c && wl(e), r && r.d(c), l = !1, o();
    }
  };
}
function A1(i) {
  let e, t, n, l;
  const o = [X1, W1], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Dr();
    },
    m(a, _) {
      s[e].m(a, _), vl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Er(), pn(s[c], 1, 1, () => {
        s[c] = null;
      }), zr(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (bn(t), l = !0);
    },
    o(a) {
      pn(t), l = !1;
    },
    d(a) {
      a && wl(n), s[e].d(a);
    }
  };
}
function W1(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = To(
    o,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let r = [
    /*$$restProps*/
    i[6],
    { href: (
      /*href*/
      i[0]
    ) }
  ], a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = ll(a, r[_]);
  return {
    c() {
      e = Br("a"), s && s.c(), ol(e, a);
    },
    m(_, c) {
      vl(_, e, c), s && s.m(e, null), t = !0, n || (l = Mr(e, "click", L1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && Uo(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? Fo(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : jo(
          /*$$scope*/
          _[7]
        ),
        null
      ), ol(e, a = Lr(r, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        _[6],
        (!t || c & /*href*/
        1) && { href: (
          /*href*/
          _[0]
        ) }
      ]));
    },
    i(_) {
      t || (bn(s, _), t = !0);
    },
    o(_) {
      pn(s, _), t = !1;
    },
    d(_) {
      _ && wl(e), s && s.d(_), n = !1, l();
    }
  };
}
function X1(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = To(
    t,
    i,
    /*$$scope*/
    i[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(l, o) {
      n && n.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o & /*$$scope*/
      128) && Uo(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? Fo(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : jo(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (bn(n, l), e = !0);
    },
    o(l) {
      pn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function I1(i) {
  let e, t, n, l, o;
  const s = [A1, R1], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && qr(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = Dr();
    },
    m(_, c) {
      r[t].m(_, c), vl(_, l, c), o = !0;
    },
    p(_, [c]) {
      let u = t;
      t = a(_, c), t === u ? r[t].p(_, c) : (Er(), pn(r[u], 1, 1, () => {
        r[u] = null;
      }), zr(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), bn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (bn(n), o = !0);
    },
    o(_) {
      pn(n), o = !1;
    },
    d(_) {
      _ && wl(l), r[t].d(_);
    }
  };
}
function Y1(i, e, t) {
  const n = ["href", "download"];
  let l = Ps(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(m, h, g, b) {
    function w(p) {
      return p instanceof g ? p : new g(function(k) {
        k(p);
      });
    }
    return new (g || (g = Promise))(function(p, k) {
      function B(C) {
        try {
          v(b.next(C));
        } catch (E) {
          k(E);
        }
      }
      function z(C) {
        try {
          v(b.throw(C));
        } catch (E) {
          k(E);
        }
      }
      function v(C) {
        C.done ? p(C.value) : w(C.value).then(B, z);
      }
      v((b = b.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = M1();
  let u = !1;
  const f = yr();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (f == null)
        throw new Error("Wasm worker proxy is not available.");
      const h = new URL(a, window.location.href).pathname;
      t(2, u = !0), f.httpRequest({
        method: "GET",
        path: h,
        headers: {},
        query_string: ""
      }).then((g) => {
        if (g.status !== 200)
          throw new Error(`Failed to get file ${h} from the Wasm worker.`);
        const b = new Blob(
          [g.body],
          {
            type: Sr(g.headers, "content-type")
          }
        ), w = URL.createObjectURL(b), p = document.createElement("a");
        p.href = w, p.download = _, p.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = ll(ll({}, e), B1(m)), t(6, l = Ps(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, _ = m.download), "$$scope" in m && t(7, s = m.$$scope);
  }, [
    a,
    _,
    u,
    c,
    f,
    d,
    l,
    s,
    o
  ];
}
class H1 extends z1 {
  constructor(e) {
    super(), D1(this, e, Y1, I1, E1, { href: 0, download: 1 });
  }
}
var T1 = Object.defineProperty, j1 = (i, e, t) => e in i ? T1(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, vt = (i, e, t) => (j1(i, typeof e != "symbol" ? e + "" : e, t), t), Rr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, oi = (i, e, t) => (Rr(i, e, "read from private field"), e.get(i)), F1 = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, U1 = (i, e, t, n) => (Rr(i, e, "write to private field"), e.set(i, t), t), Ot;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Ar(i, e) {
  return i.map(
    (t) => new V1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class V1 {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: l,
    blob: o,
    is_stream: s,
    mime_type: r,
    alt_text: a
  }) {
    vt(this, "path"), vt(this, "url"), vt(this, "orig_name"), vt(this, "size"), vt(this, "blob"), vt(this, "is_stream"), vt(this, "mime_type"), vt(this, "alt_text"), vt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class w6 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = oi(this, Ot) + t; ; ) {
          const l = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (l === -1 || l - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (l === -1)
            break;
          const s = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, s)), t = t.slice(l + 1);
        }
        U1(this, Ot, t);
      },
      flush: (t) => {
        if (oi(this, Ot) === "")
          return;
        const n = e.allowCR && oi(this, Ot).endsWith("\r") ? oi(this, Ot).slice(0, -1) : oi(this, Ot);
        t.enqueue(n);
      }
    }), F1(this, Ot, "");
  }
}
Ot = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: O1,
  append: Re,
  attr: rn,
  detach: Wr,
  element: _n,
  init: N1,
  insert: Xr,
  noop: Ks,
  safe_not_equal: $1,
  set_data: sl,
  set_style: xl,
  space: Bo,
  text: Tn,
  toggle_class: Zs
} = window.__gradio__svelte__internal, { onMount: P1, createEventDispatcher: K1, onDestroy: Z1 } = window.__gradio__svelte__internal;
function Gs(i) {
  let e, t, n, l, o = hi(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = _n("div"), t = _n("span"), n = _n("div"), l = _n("progress"), s = Tn(o), a = Bo(), _ = _n("span"), u = Tn(c), xl(l, "visibility", "hidden"), xl(l, "height", "0"), xl(l, "width", "0"), l.value = r = hi(
        /*file_to_display*/
        i[2]
      ), rn(l, "max", "100"), rn(l, "class", "svelte-cr2edf"), rn(n, "class", "progress-bar svelte-cr2edf"), rn(_, "class", "file-name svelte-cr2edf"), rn(e, "class", "file svelte-cr2edf");
    },
    m(f, d) {
      Xr(f, e, d), Re(e, t), Re(t, n), Re(n, l), Re(l, s), Re(e, a), Re(e, _), Re(_, u);
    },
    p(f, d) {
      d & /*file_to_display*/
      4 && o !== (o = hi(
        /*file_to_display*/
        f[2]
      ) + "") && sl(s, o), d & /*file_to_display*/
      4 && r !== (r = hi(
        /*file_to_display*/
        f[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      f[2].orig_name + "") && sl(u, c);
    },
    d(f) {
      f && Wr(e);
    }
  };
}
function G1(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, u = (
    /*file_to_display*/
    i[2] && Gs(i)
  );
  return {
    c() {
      e = _n("div"), t = _n("span"), n = Tn("Uploading "), o = Tn(l), s = Bo(), a = Tn(r), _ = Tn("..."), c = Bo(), u && u.c(), rn(t, "class", "uploading svelte-cr2edf"), rn(e, "class", "wrap svelte-cr2edf"), Zs(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(f, d) {
      Xr(f, e, d), Re(e, t), Re(t, n), Re(t, o), Re(t, s), Re(t, a), Re(t, _), Re(e, c), u && u.m(e, null);
    },
    p(f, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      f[0].length + "") && sl(o, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      f[0].length > 1 ? "files" : "file") && sl(a, r), /*file_to_display*/
      f[2] ? u ? u.p(f, d) : (u = Gs(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Zs(
        e,
        "progress",
        /*progress*/
        f[1]
      );
    },
    i: Ks,
    o: Ks,
    d(f) {
      f && Wr(e), u && u.d();
    }
  };
}
function hi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function J1(i) {
  let e = 0;
  return i.forEach((t) => {
    e += hi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Q1(i, e, t) {
  var n = this && this.__awaiter || function(h, g, b, w) {
    function p(k) {
      return k instanceof b ? k : new b(function(B) {
        B(k);
      });
    }
    return new (b || (b = Promise))(function(k, B) {
      function z(E) {
        try {
          C(w.next(E));
        } catch (q) {
          B(q);
        }
      }
      function v(E) {
        try {
          C(w.throw(E));
        } catch (q) {
          B(q);
        }
      }
      function C(E) {
        E.done ? k(E.value) : p(E.value).then(z, v);
      }
      C((w = w.apply(h, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, u, f = s.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = K1();
  function m(h, g) {
    t(0, f = f.map((b) => (b.orig_name === h && (b.progress += g), b)));
  }
  return P1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        _ || t(1, _ = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), Z1(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, o = h.root), "files" in h && t(5, s = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && J1(f), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || f[0]);
  }, [
    f,
    _,
    u,
    l,
    o,
    s,
    r,
    c
  ];
}
class x1 extends O1 {
  constructor(e) {
    super(), N1(this, e, Q1, G1, $1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: eh,
  append: Js,
  attr: ye,
  binding_callbacks: th,
  bubble: xt,
  check_outros: Ir,
  create_component: nh,
  create_slot: Yr,
  destroy_component: ih,
  detach: kl,
  element: Do,
  empty: Hr,
  get_all_dirty_from_scope: Tr,
  get_slot_changes: jr,
  group_outros: Fr,
  init: lh,
  insert: Cl,
  listen: He,
  mount_component: oh,
  prevent_default: en,
  run_all: sh,
  safe_not_equal: ah,
  set_style: Ur,
  space: rh,
  stop_propagation: tn,
  toggle_class: ve,
  transition_in: Zt,
  transition_out: wn,
  update_slot_base: Vr
} = window.__gradio__svelte__internal, { createEventDispatcher: _h, tick: ch } = window.__gradio__svelte__internal;
function uh(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const f = (
    /*#slots*/
    i[26].default
  ), d = Yr(
    f,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Do("button"), d && d.c(), t = rh(), n = Do("input"), ye(n, "aria-label", "file upload"), ye(n, "data-testid", "file-upload"), ye(n, "type", "file"), ye(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, ye(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), ye(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), ye(n, "class", "svelte-1s26xmt"), ye(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), ye(e, "class", "svelte-1s26xmt"), ve(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ve(
        e,
        "center",
        /*center*/
        i[4]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ve(
        e,
        "flex",
        /*flex*/
        i[5]
      ), ve(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), Ur(e, "height", "100%");
    },
    m(m, h) {
      Cl(m, e, h), d && d.m(e, null), Js(e, t), Js(e, n), i[34](n), _ = !0, c || (u = [
        He(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        He(e, "drag", tn(en(
          /*drag_handler*/
          i[27]
        ))),
        He(e, "dragstart", tn(en(
          /*dragstart_handler*/
          i[28]
        ))),
        He(e, "dragend", tn(en(
          /*dragend_handler*/
          i[29]
        ))),
        He(e, "dragover", tn(en(
          /*dragover_handler*/
          i[30]
        ))),
        He(e, "dragenter", tn(en(
          /*dragenter_handler*/
          i[31]
        ))),
        He(e, "dragleave", tn(en(
          /*dragleave_handler*/
          i[32]
        ))),
        He(e, "drop", tn(en(
          /*drop_handler*/
          i[33]
        ))),
        He(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        He(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        He(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        He(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!_ || h[0] & /*$$scope*/
      33554432) && Vr(
        d,
        f,
        m,
        /*$$scope*/
        m[25],
        _ ? jr(
          f,
          /*$$scope*/
          m[25],
          h,
          null
        ) : Tr(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!_ || h[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      m[16] || void 0)) && ye(n, "accept", l), (!_ || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = o), (!_ || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "directory" || void 0)) && ye(n, "webkitdirectory", s), (!_ || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && ye(n, "mozdirectory", r), (!_ || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && ye(e, "tabindex", a), (!_ || h[0] & /*hidden*/
      512) && ve(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!_ || h[0] & /*center*/
      16) && ve(
        e,
        "center",
        /*center*/
        m[4]
      ), (!_ || h[0] & /*boundedheight*/
      8) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!_ || h[0] & /*flex*/
      32) && ve(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!_ || h[0] & /*disable_click*/
      128) && ve(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      _ || (Zt(d, m), _ = !0);
    },
    o(m) {
      wn(d, m), _ = !1;
    },
    d(m) {
      m && kl(e), d && d.d(m), i[34](null), c = !1, sh(u);
    }
  };
}
function fh(i) {
  let e, t, n = !/*hidden*/
  i[9] && Qs(i);
  return {
    c() {
      n && n.c(), e = Hr();
    },
    m(l, o) {
      n && n.m(l, o), Cl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (Fr(), wn(n, 1, 1, () => {
        n = null;
      }), Ir()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && Zt(n, 1)) : (n = Qs(l), n.c(), Zt(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (Zt(n), t = !0);
    },
    o(l) {
      wn(n), t = !1;
    },
    d(l) {
      l && kl(e), n && n.d(l);
    }
  };
}
function dh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = Yr(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Do("button"), r && r.c(), ye(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), ye(e, "class", "svelte-1s26xmt"), ve(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ve(
        e,
        "center",
        /*center*/
        i[4]
      ), ve(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ve(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Ur(e, "height", "100%");
    },
    m(a, _) {
      Cl(a, e, _), r && r.m(e, null), n = !0, l || (o = He(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && Vr(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? jr(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : Tr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || _[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ye(e, "tabindex", t), (!n || _[0] & /*hidden*/
      512) && ve(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || _[0] & /*center*/
      16) && ve(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || _[0] & /*boundedheight*/
      8) && ve(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || _[0] & /*flex*/
      32) && ve(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Zt(r, a), n = !0);
    },
    o(a) {
      wn(r, a), n = !1;
    },
    d(a) {
      a && kl(e), r && r.d(a), l = !1, o();
    }
  };
}
function Qs(i) {
  let e, t;
  return e = new x1({
    props: {
      root: (
        /*root*/
        i[8]
      ),
      upload_id: (
        /*upload_id*/
        i[14]
      ),
      files: (
        /*file_data*/
        i[15]
      ),
      stream_handler: (
        /*stream_handler*/
        i[11]
      )
    }
  }), {
    c() {
      nh(e.$$.fragment);
    },
    m(n, l) {
      oh(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*root*/
      256 && (o.root = /*root*/
      n[8]), l[0] & /*upload_id*/
      16384 && (o.upload_id = /*upload_id*/
      n[14]), l[0] & /*file_data*/
      32768 && (o.files = /*file_data*/
      n[15]), l[0] & /*stream_handler*/
      2048 && (o.stream_handler = /*stream_handler*/
      n[11]), e.$set(o);
    },
    i(n) {
      t || (Zt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ih(e, n);
    }
  };
}
function hh(i) {
  let e, t, n, l;
  const o = [dh, fh, uh], s = [];
  function r(a, _) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] && /*show_progress*/
        a[10] ? 1 : 2
      )
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Hr();
    },
    m(a, _) {
      s[e].m(a, _), Cl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Fr(), wn(s[c], 1, 1, () => {
        s[c] = null;
      }), Ir(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Zt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Zt(t), l = !0);
    },
    o(a) {
      wn(t), l = !1;
    },
    d(a) {
      a && kl(n), s[e].d(a);
    }
  };
}
function mh(i, e, t) {
  if (!i || i === "*" || i === "file/*" || Array.isArray(i) && i.some((l) => l === "*" || l === "file/*"))
    return !0;
  let n;
  if (typeof i == "string")
    n = i.split(",").map((l) => l.trim());
  else if (Array.isArray(i))
    n = i;
  else
    return !1;
  return n.includes(e) || n.some((l) => {
    const [o] = l.split("/").map((s) => s.trim());
    return l.endsWith("/*") && t.startsWith(o + "/");
  });
}
function gh(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(L, T, N, Q) {
    function ue(Xe) {
      return Xe instanceof N ? Xe : new N(function(M) {
        M(Xe);
      });
    }
    return new (N || (N = Promise))(function(Xe, M) {
      function ht(Je) {
        try {
          Ge(Q.next(Je));
        } catch (Jt) {
          M(Jt);
        }
      }
      function Ie(Je) {
        try {
          Ge(Q.throw(Je));
        } catch (Jt) {
          M(Jt);
        }
      }
      function Ge(Je) {
        Je.done ? Xe(Je.value) : ue(Je.value).then(ht, Ie);
      }
      Ge((Q = Q.apply(L, T || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: f = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: w = !0 } = e, { max_file_size: p = null } = e, { upload: k } = e, { stream_handler: B } = e, z, v, C;
  const E = _h(), q = ["image", "video", "audio", "text", "file"], S = (L) => L.startsWith(".") || L.endsWith("/*") ? L : q.includes(L) ? L + "/*" : "." + L;
  function A() {
    t(20, r = !r);
  }
  function F() {
    navigator.clipboard.read().then((L) => o(this, void 0, void 0, function* () {
      for (let T = 0; T < L.length; T++) {
        const N = L[T].types.find((Q) => Q.startsWith("image/"));
        if (N) {
          L[T].getType(N).then((Q) => o(this, void 0, void 0, function* () {
            const ue = new File([Q], `clipboard.${N.replace("image/", "")}`);
            yield Z([ue]);
          }));
          break;
        }
      }
    }));
  }
  function X() {
    f || b && (t(2, b.value = "", b), b.click());
  }
  function ne(L) {
    return o(this, void 0, void 0, function* () {
      yield ch(), t(14, z = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const T = yield k(L, d, z, p ?? 1 / 0);
        return E("load", u === "single" ? T == null ? void 0 : T[0] : T), t(1, g = !1), T || [];
      } catch (T) {
        return E("error", T.message), t(1, g = !1), [];
      }
    });
  }
  function Z(L) {
    return o(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let T = L.map((N) => new File([N], N instanceof File ? N.name : "file", { type: N.type }));
      return t(15, v = yield Ar(T)), yield ne(v);
    });
  }
  function re(L) {
    return o(this, void 0, void 0, function* () {
      const T = L.target;
      if (T.files)
        if (h != "blob")
          yield Z(Array.from(T.files));
        else {
          if (u === "single") {
            E("load", T.files[0]);
            return;
          }
          E("load", T.files);
        }
    });
  }
  function I(L) {
    return o(this, void 0, void 0, function* () {
      var T;
      if (t(20, r = !1), !(!((T = L.dataTransfer) === null || T === void 0) && T.files)) return;
      const N = Array.from(L.dataTransfer.files).filter((Q) => {
        const ue = "." + Q.name.split(".").pop();
        return ue && mh(C, ue, Q.type) || (ue && Array.isArray(s) ? s.includes(ue) : ue === s) ? !0 : (E("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield Z(N);
    });
  }
  function $(L) {
    xt.call(this, i, L);
  }
  function R(L) {
    xt.call(this, i, L);
  }
  function j(L) {
    xt.call(this, i, L);
  }
  function ee(L) {
    xt.call(this, i, L);
  }
  function ge(L) {
    xt.call(this, i, L);
  }
  function ce(L) {
    xt.call(this, i, L);
  }
  function W(L) {
    xt.call(this, i, L);
  }
  function _e(L) {
    th[L ? "unshift" : "push"](() => {
      b = L, t(2, b);
    });
  }
  return i.$$set = (L) => {
    "filetype" in L && t(0, s = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, _ = L.center), "flex" in L && t(5, c = L.flex), "file_count" in L && t(6, u = L.file_count), "disable_click" in L && t(7, f = L.disable_click), "root" in L && t(8, d = L.root), "hidden" in L && t(9, m = L.hidden), "format" in L && t(21, h = L.format), "uploading" in L && t(1, g = L.uploading), "hidden_upload" in L && t(2, b = L.hidden_upload), "show_progress" in L && t(10, w = L.show_progress), "max_file_size" in L && t(22, p = L.max_file_size), "upload" in L && t(23, k = L.upload), "stream_handler" in L && t(11, B = L.stream_handler), "$$scope" in L && t(25, l = L.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, C = null) : typeof s == "string" ? t(16, C = S(s)) : (t(0, s = s.map(S)), t(16, C = s.join(", "))));
  }, [
    s,
    g,
    b,
    a,
    _,
    c,
    u,
    f,
    d,
    m,
    w,
    B,
    F,
    X,
    z,
    v,
    C,
    A,
    re,
    I,
    r,
    h,
    p,
    k,
    Z,
    l,
    n,
    $,
    R,
    j,
    ee,
    ge,
    ce,
    W,
    _e
  ];
}
class bh extends eh {
  constructor(e) {
    super(), lh(
      this,
      e,
      gh,
      hh,
      ah,
      {
        filetype: 0,
        dragging: 20,
        boundedheight: 3,
        center: 4,
        flex: 5,
        file_count: 6,
        disable_click: 7,
        root: 8,
        hidden: 9,
        format: 21,
        uploading: 1,
        hidden_upload: 2,
        show_progress: 10,
        max_file_size: 22,
        upload: 23,
        stream_handler: 11,
        paste_clipboard: 12,
        open_file_upload: 13,
        load_files: 24
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[12];
  }
  get open_file_upload() {
    return this.$$.ctx[13];
  }
  get load_files() {
    return this.$$.ctx[24];
  }
}
const {
  SvelteComponent: v6,
  append: k6,
  attr: C6,
  check_outros: y6,
  create_component: S6,
  destroy_component: q6,
  detach: z6,
  element: B6,
  group_outros: D6,
  init: L6,
  insert: E6,
  mount_component: M6,
  safe_not_equal: R6,
  set_style: A6,
  space: W6,
  toggle_class: X6,
  transition_in: I6,
  transition_out: Y6
} = window.__gradio__svelte__internal, { createEventDispatcher: H6 } = window.__gradio__svelte__internal, {
  SvelteComponent: T6,
  assign: j6,
  compute_rest_props: F6,
  detach: U6,
  element: V6,
  exclude_internal_props: O6,
  get_spread_update: N6,
  init: $6,
  insert: P6,
  noop: K6,
  safe_not_equal: Z6,
  set_attributes: G6,
  src_url_equal: J6,
  toggle_class: Q6
} = window.__gradio__svelte__internal, {
  SvelteComponent: x6,
  append: e8,
  attr: t8,
  bubble: n8,
  check_outros: i8,
  create_component: l8,
  destroy_component: o8,
  detach: s8,
  element: a8,
  empty: r8,
  group_outros: _8,
  init: c8,
  insert: u8,
  listen: f8,
  mount_component: d8,
  safe_not_equal: h8,
  space: m8,
  toggle_class: g8,
  transition_in: b8,
  transition_out: p8
} = window.__gradio__svelte__internal, { createEventDispatcher: w8 } = window.__gradio__svelte__internal, {
  SvelteComponent: ph,
  append: Xi,
  attr: eo,
  create_component: wh,
  destroy_component: vh,
  detach: kh,
  element: to,
  init: Ch,
  insert: yh,
  listen: Sh,
  mount_component: qh,
  noop: zh,
  safe_not_equal: Bh,
  set_style: Dh,
  space: Lh,
  text: Eh,
  transition_in: Mh,
  transition_out: Rh
} = window.__gradio__svelte__internal, { createEventDispatcher: Ah } = window.__gradio__svelte__internal;
function Wh(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new ar({}), {
    c() {
      e = to("button"), t = to("div"), n = to("span"), wh(l.$$.fragment), o = Lh(), r = Eh(s), eo(n, "class", "icon-wrap svelte-fjcd9c"), eo(t, "class", "wrap svelte-fjcd9c"), eo(e, "class", "svelte-fjcd9c"), Dh(e, "height", "100%");
    },
    m(u, f) {
      yh(u, e, f), Xi(e, t), Xi(t, n), qh(l, n, null), Xi(t, o), Xi(t, r), a = !0, _ || (c = Sh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: zh,
    i(u) {
      a || (Mh(l.$$.fragment, u), a = !0);
    },
    o(u) {
      Rh(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && kh(e), vh(l), _ = !1, c();
    }
  };
}
function Xh(i) {
  const e = Ah();
  return [e, () => e("click")];
}
class Ih extends ph {
  constructor(e) {
    super(), Ch(this, e, Xh, Wh, Bh, {});
  }
}
function Yh() {
  return navigator.mediaDevices.enumerateDevices();
}
function Hh(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function xs(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (Hh(o, e), o));
}
function Th(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: jh,
  action_destroyer: Fh,
  add_render_callback: Uh,
  append: Dt,
  attr: me,
  binding_callbacks: Vh,
  check_outros: bi,
  create_component: Zn,
  create_in_transition: Oh,
  destroy_component: Gn,
  destroy_each: Nh,
  detach: Ae,
  element: Ue,
  empty: Vo,
  ensure_array_like: ea,
  group_outros: pi,
  init: $h,
  insert: We,
  listen: al,
  mount_component: Jn,
  noop: Oo,
  run_all: Ph,
  safe_not_equal: Kh,
  set_data: Or,
  set_input_value: Lo,
  space: Ci,
  stop_propagation: Zh,
  text: Nr,
  toggle_class: Ii,
  transition_in: ke,
  transition_out: Se
} = window.__gradio__svelte__internal, { createEventDispatcher: Gh, onMount: Jh } = window.__gradio__svelte__internal;
function ta(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Qh(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const f = [tm, em], d = [];
  function m(b, w) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = f[n](i);
  let h = !/*recording*/
  i[8] && na(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && ia(i)
  );
  return {
    c() {
      e = Ue("div"), t = Ue("button"), l.c(), s = Ci(), h && h.c(), r = Ci(), g && g.c(), a = Vo(), me(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), me(t, "class", "svelte-8hqvb6"), me(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, w) {
      We(b, e, w), Dt(e, t), d[n].m(t, null), Dt(e, s), h && h.m(e, null), We(b, r, w), g && g.m(b, w), We(b, a, w), _ = !0, c || (u = al(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, w) {
      let p = n;
      n = m(b), n === p ? d[n].p(b, w) : (pi(), Se(d[p], 1, 1, () => {
        d[p] = null;
      }), bi(), l = d[n], l ? l.p(b, w) : (l = d[n] = f[n](b), l.c()), ke(l, 1), l.m(t, null)), (!_ || w[0] & /*mode*/
      2 && o !== (o = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && me(t, "aria-label", o), /*recording*/
      b[8] ? h && (pi(), Se(h, 1, 1, () => {
        h = null;
      }), bi()) : h ? (h.p(b, w), w[0] & /*recording*/
      256 && ke(h, 1)) : (h = na(b), h.c(), ke(h, 1), h.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, w), w[0] & /*options_open, selected_device*/
      1152 && ke(g, 1)) : (g = ia(b), g.c(), ke(g, 1), g.m(a.parentNode, a)) : g && (pi(), Se(g, 1, 1, () => {
        g = null;
      }), bi());
    },
    i(b) {
      _ || (ke(l), ke(h), ke(g), _ = !0);
    },
    o(b) {
      Se(l), Se(h), Se(g), _ = !1;
    },
    d(b) {
      b && (Ae(e), Ae(r), Ae(a)), d[n].d(), h && h.d(), g && g.d(b), c = !1, u();
    }
  };
}
function xh(i) {
  let e, t, n, l;
  return t = new Ih({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ue("div"), Zn(t.$$.fragment), me(e, "title", "grant webcam access");
    },
    m(o, s) {
      We(o, e, s), Jn(t, e, null), l = !0;
    },
    p: Oo,
    i(o) {
      l || (ke(t.$$.fragment, o), o && (n || Uh(() => {
        n = Oh(e, Fd, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Se(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Ae(e), Gn(t);
    }
  };
}
function em(i) {
  let e, t, n;
  return t = new ku({}), {
    c() {
      e = Ue("div"), Zn(t.$$.fragment), me(e, "class", "icon svelte-8hqvb6"), me(e, "title", "capture photo");
    },
    m(l, o) {
      We(l, e, o), Jn(t, e, null), n = !0;
    },
    p: Oo,
    i(l) {
      n || (ke(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Se(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ae(e), Gn(t);
    }
  };
}
function tm(i) {
  let e, t, n, l;
  const o = [im, nm], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Vo();
    },
    m(a, _) {
      s[e].m(a, _), We(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (pi(), Se(s[c], 1, 1, () => {
        s[c] = null;
      }), bi(), t = s[e], t || (t = s[e] = o[e](a), t.c()), ke(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ke(t), l = !0);
    },
    o(a) {
      Se(t), l = !1;
    },
    d(a) {
      a && Ae(n), s[e].d(a);
    }
  };
}
function nm(i) {
  let e, t, n;
  return t = new Lu({}), {
    c() {
      e = Ue("div"), Zn(t.$$.fragment), me(e, "class", "icon red svelte-8hqvb6"), me(e, "title", "start recording");
    },
    m(l, o) {
      We(l, e, o), Jn(t, e, null), n = !0;
    },
    i(l) {
      n || (ke(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Se(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ae(e), Gn(t);
    }
  };
}
function im(i) {
  let e, t, n;
  return t = new Ff({}), {
    c() {
      e = Ue("div"), Zn(t.$$.fragment), me(e, "class", "icon red svelte-8hqvb6"), me(e, "title", "stop recording");
    },
    m(l, o) {
      We(l, e, o), Jn(t, e, null), n = !0;
    },
    i(l) {
      n || (ke(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Se(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ae(e), Gn(t);
    }
  };
}
function na(i) {
  let e, t, n, l, o;
  return t = new Ho({}), {
    c() {
      e = Ue("button"), Zn(t.$$.fragment), me(e, "class", "icon svelte-8hqvb6"), me(e, "aria-label", "select input source");
    },
    m(s, r) {
      We(s, e, r), Jn(t, e, null), n = !0, l || (o = al(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: Oo,
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ae(e), Gn(t), l = !1, o();
    }
  };
}
function ia(i) {
  let e, t, n, l, o, s, r;
  n = new Ho({});
  function a(u, f) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? om : lm
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = Ue("select"), t = Ue("button"), Zn(n.$$.fragment), l = Ci(), c.c(), me(t, "class", "inset-icon svelte-8hqvb6"), me(e, "class", "select-wrap svelte-8hqvb6"), me(e, "aria-label", "select source");
    },
    m(u, f) {
      We(u, e, f), Dt(e, t), Jn(n, t, null), Dt(t, l), c.m(e, null), o = !0, s || (r = [
        al(t, "click", Zh(
          /*click_handler_2*/
          i[22]
        )),
        Fh(No.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        al(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], s = !0);
    },
    p(u, f) {
      _ === (_ = a(u)) && c ? c.p(u, f) : (c.d(1), c = _(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      o || (ke(n.$$.fragment, u), o = !0);
    },
    o(u) {
      Se(n.$$.fragment, u), o = !1;
    },
    d(u) {
      u && Ae(e), Gn(n), c.d(), s = !1, Ph(r);
    }
  };
}
function lm(i) {
  let e, t = ea(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = la(ta(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Vo();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      We(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = ea(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ta(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = la(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Ae(e), Nh(n, l);
    }
  };
}
function om(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ue("option"), n = Nr(t), e.__value = "", Lo(e, e.__value), me(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      We(l, e, o), Dt(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && Or(n, t);
    },
    d(l) {
      l && Ae(e);
    }
  };
}
function la(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = Ue("option"), n = Nr(t), l = Ci(), e.__value = o = /*device*/
      i[32].deviceId, Lo(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, me(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      We(r, e, a), Dt(e, n), Dt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Or(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, Lo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Ae(e);
    }
  };
}
function sm(i) {
  let e, t, n, l, o, s;
  const r = [xh, Qh], a = [];
  function _(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = Ue("div"), t = Ue("video"), n = Ci(), o.c(), me(t, "class", "svelte-8hqvb6"), Ii(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Ii(t, "hide", !/*webcam_accessed*/
      i[9]), me(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      We(c, e, u), Dt(e, t), i[19](t), Dt(e, n), a[l].m(e, null), s = !0;
    },
    p(c, u) {
      (!s || u[0] & /*mirror_webcam*/
      4) && Ii(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || u[0] & /*webcam_accessed*/
      512) && Ii(t, "hide", !/*webcam_accessed*/
      c[9]);
      let f = l;
      l = _(c), l === f ? a[l].p(c, u) : (pi(), Se(a[f], 1, 1, () => {
        a[f] = null;
      }), bi(), o = a[l], o ? o.p(c, u) : (o = a[l] = r[l](c), o.c()), ke(o, 1), o.m(e, null));
    },
    i(c) {
      s || (ke(o), s = !0);
    },
    o(c) {
      Se(o), s = !1;
    },
    d(c) {
      c && Ae(e), i[19](null), a[l].d();
    }
  };
}
function No(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function am(i, e, t) {
  var n = this && this.__awaiter || function(I, $, R, j) {
    function ee(ge) {
      return ge instanceof R ? ge : new R(function(ce) {
        ce(ge);
      });
    }
    return new (R || (R = Promise))(function(ge, ce) {
      function W(T) {
        try {
          L(j.next(T));
        } catch (N) {
          ce(N);
        }
      }
      function _e(T) {
        try {
          L(j.throw(T));
        } catch (N) {
          ce(N);
        }
      }
      function L(T) {
        T.done ? ge(T.value) : ee(T.value).then(W, _e);
      }
      L((j = j.apply(I, $ || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: f } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = Gh();
  Jh(() => r = document.createElement("canvas"));
  const b = (I) => n(void 0, void 0, void 0, function* () {
    const R = I.target.value;
    yield xs(d, l, R).then((j) => n(void 0, void 0, void 0, function* () {
      z = j, t(7, s = o.find((ee) => ee.deviceId === R) || null), t(10, A = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        xs(d, l).then((I) => n(this, void 0, void 0, function* () {
          t(9, q = !0), t(6, o = yield Yh()), z = I;
        })).then(() => Th(o)).then((I) => {
          t(6, o = I);
          const $ = z.getTracks().map((R) => {
            var j;
            return (j = R.getSettings()) === null || j === void 0 ? void 0 : j.deviceId;
          })[0];
          t(7, s = $ && I.find((R) => R.deviceId === $) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (I) {
        if (I instanceof DOMException && I.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw I;
      }
    });
  }
  function p() {
    var I = r.getContext("2d");
    (!a || a && k) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, I.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), f && (I.scale(-1, 1), I.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      ($) => {
        g(a ? "stream" : "capture", $);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, B = [], z, v, C;
  function E() {
    if (k) {
      C.stop();
      let I = new Blob(B, { type: v }), $ = new FileReader();
      $.onload = function(R) {
        return n(this, void 0, void 0, function* () {
          var j;
          if (R.target) {
            let ee = new File([I], "sample." + v.substring(6));
            const ge = yield Ar([ee]);
            let ce = ((j = yield h(ge, c)) === null || j === void 0 ? void 0 : j.filter(Boolean))[0];
            g("capture", ce), g("stop_recording");
          }
        });
      }, $.readAsDataURL(I);
    } else {
      g("start_recording"), B = [];
      let I = ["video/webm", "video/mp4"];
      for (let $ of I)
        if (MediaRecorder.isTypeSupported($)) {
          v = $;
          break;
        }
      if (v === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      C = new MediaRecorder(z, { mimeType: v }), C.addEventListener("dataavailable", function($) {
        B.push($.data);
      }), C.start(200);
    }
    t(8, k = !k);
  }
  let q = !1;
  function S() {
    u === "image" && a && t(8, k = !k), u === "image" ? p() : E(), !k && z && (z.getTracks().forEach((I) => I.stop()), t(5, l.srcObject = null, l), t(9, q = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !_ && p();
    },
    500
  );
  let A = !1;
  function F(I) {
    I.preventDefault(), I.stopPropagation(), t(10, A = !1);
  }
  function X(I) {
    Vh[I ? "unshift" : "push"](() => {
      l = I, t(5, l);
    });
  }
  const ne = async () => w(), Z = () => t(10, A = !0), re = () => t(10, A = !1);
  return i.$$set = (I) => {
    "streaming" in I && t(0, a = I.streaming), "pending" in I && t(15, _ = I.pending), "root" in I && t(16, c = I.root), "mode" in I && t(1, u = I.mode), "mirror_webcam" in I && t(2, f = I.mirror_webcam), "include_audio" in I && t(17, d = I.include_audio), "i18n" in I && t(3, m = I.i18n), "upload" in I && t(18, h = I.upload);
  }, [
    a,
    u,
    f,
    m,
    No,
    l,
    o,
    s,
    k,
    q,
    A,
    b,
    w,
    S,
    F,
    _,
    c,
    d,
    h,
    X,
    ne,
    Z,
    re
  ];
}
class rm extends jh {
  constructor(e) {
    super(), $h(
      this,
      e,
      am,
      sm,
      Kh,
      {
        streaming: 0,
        pending: 15,
        root: 16,
        mode: 1,
        mirror_webcam: 2,
        include_audio: 17,
        i18n: 3,
        upload: 18,
        click_outside: 4
      },
      null,
      [-1, -1]
    );
  }
  get click_outside() {
    return No;
  }
}
const {
  SvelteComponent: v8,
  attr: k8,
  create_component: C8,
  destroy_component: y8,
  detach: S8,
  element: q8,
  init: z8,
  insert: B8,
  mount_component: D8,
  noop: L8,
  safe_not_equal: E8,
  transition_in: M8,
  transition_out: R8
} = window.__gradio__svelte__internal, { createEventDispatcher: A8 } = window.__gradio__svelte__internal, {
  SvelteComponent: W8,
  add_flush_callback: X8,
  append: I8,
  attr: Y8,
  bind: H8,
  binding_callbacks: T8,
  bubble: j8,
  check_outros: F8,
  create_component: U8,
  create_slot: V8,
  destroy_component: O8,
  detach: N8,
  element: $8,
  empty: P8,
  get_all_dirty_from_scope: K8,
  get_slot_changes: Z8,
  group_outros: G8,
  init: J8,
  insert: Q8,
  listen: x8,
  mount_component: e7,
  noop: t7,
  safe_not_equal: n7,
  space: i7,
  toggle_class: l7,
  transition_in: o7,
  transition_out: s7,
  update_slot_base: a7
} = window.__gradio__svelte__internal, { createEventDispatcher: r7, tick: _7 } = window.__gradio__svelte__internal, {
  SvelteComponent: c7,
  attr: u7,
  check_outros: f7,
  create_component: d7,
  destroy_component: h7,
  detach: m7,
  element: g7,
  group_outros: b7,
  init: p7,
  insert: w7,
  mount_component: v7,
  safe_not_equal: k7,
  toggle_class: C7,
  transition_in: y7,
  transition_out: S7
} = window.__gradio__svelte__internal, {
  SvelteComponent: q7,
  add_flush_callback: z7,
  assign: B7,
  bind: D7,
  binding_callbacks: L7,
  check_outros: E7,
  create_component: M7,
  destroy_component: R7,
  detach: A7,
  empty: W7,
  flush: X7,
  get_spread_object: I7,
  get_spread_update: Y7,
  group_outros: H7,
  init: T7,
  insert: j7,
  mount_component: F7,
  safe_not_equal: U7,
  space: V7,
  transition_in: O7,
  transition_out: N7
} = window.__gradio__svelte__internal, {
  SvelteComponent: $7,
  append: P7,
  attr: K7,
  detach: Z7,
  init: G7,
  insert: J7,
  noop: Q7,
  safe_not_equal: x7,
  set_style: e9,
  svg_element: t9
} = window.__gradio__svelte__internal, {
  SvelteComponent: _m,
  append: Tt,
  attr: H,
  detach: cm,
  init: um,
  insert: fm,
  noop: no,
  safe_not_equal: dm,
  set_style: jt,
  svg_element: kt
} = window.__gradio__svelte__internal;
function hm(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = kt("svg"), t = kt("rect"), n = kt("rect"), l = kt("rect"), o = kt("rect"), s = kt("line"), r = kt("line"), a = kt("line"), _ = kt("line"), H(t, "x", "2"), H(t, "y", "2"), H(t, "width", "5"), H(t, "height", "5"), H(t, "rx", "1"), H(t, "ry", "1"), H(t, "stroke-width", "2"), H(t, "fill", "none"), H(n, "x", "17"), H(n, "y", "2"), H(n, "width", "5"), H(n, "height", "5"), H(n, "rx", "1"), H(n, "ry", "1"), H(n, "stroke-width", "2"), H(n, "fill", "none"), H(l, "x", "2"), H(l, "y", "17"), H(l, "width", "5"), H(l, "height", "5"), H(l, "rx", "1"), H(l, "ry", "1"), H(l, "stroke-width", "2"), H(l, "fill", "none"), H(o, "x", "17"), H(o, "y", "17"), H(o, "width", "5"), H(o, "height", "5"), H(o, "rx", "1"), H(o, "ry", "1"), H(o, "stroke-width", "2"), H(o, "fill", "none"), H(s, "x1", "7.5"), H(s, "y1", "4.5"), H(s, "x2", "16"), H(s, "y2", "4.5"), jt(s, "stroke-width", "2px"), H(r, "x1", "7.5"), H(r, "y1", "19.5"), H(r, "x2", "16"), H(r, "y2", "19.5"), jt(r, "stroke-width", "2px"), H(a, "x1", "4.5"), H(a, "y1", "8"), H(a, "x2", "4.5"), H(a, "y2", "16"), jt(a, "stroke-width", "2px"), H(_, "x1", "19.5"), H(_, "y1", "8"), H(_, "x2", "19.5"), H(_, "y2", "16"), jt(_, "stroke-width", "2px"), H(e, "width", "100%"), H(e, "height", "100%"), H(e, "viewBox", "0 0 24 24"), H(e, "version", "1.1"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), H(e, "xml:space", "preserve"), H(e, "stroke", "currentColor"), jt(e, "fill-rule", "evenodd"), jt(e, "clip-rule", "evenodd"), jt(e, "stroke-linecap", "round"), jt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      fm(c, e, u), Tt(e, t), Tt(e, n), Tt(e, l), Tt(e, o), Tt(e, s), Tt(e, r), Tt(e, a), Tt(e, _);
    },
    p: no,
    i: no,
    o: no,
    d(c) {
      c && cm(e);
    }
  };
}
class mm extends _m {
  constructor(e) {
    super(), um(this, e, null, hm, dm, {});
  }
}
const {
  SvelteComponent: gm,
  append: bm,
  attr: nt,
  detach: pm,
  init: wm,
  insert: vm,
  noop: io,
  safe_not_equal: km,
  set_style: Yi,
  svg_element: oa
} = window.__gradio__svelte__internal;
function Cm(i) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), nt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), nt(t, "fill", "none"), nt(t, "stroke-width", "2"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), Yi(e, "fill-rule", "evenodd"), Yi(e, "clip-rule", "evenodd"), Yi(e, "stroke-linecap", "round"), Yi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      vm(n, e, l), bm(e, t);
    },
    p: io,
    i: io,
    o: io,
    d(n) {
      n && pm(e);
    }
  };
}
class ym extends gm {
  constructor(e) {
    super(), wm(this, e, null, Cm, km, {});
  }
}
const {
  SvelteComponent: Sm,
  append: qm,
  attr: it,
  detach: zm,
  init: Bm,
  insert: Dm,
  noop: lo,
  safe_not_equal: Lm,
  set_style: Hi,
  svg_element: sa
} = window.__gradio__svelte__internal;
function Em(i) {
  let e, t;
  return {
    c() {
      e = sa("svg"), t = sa("path"), it(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), it(t, "fill", "none"), it(t, "stroke-width", "2"), it(e, "width", "100%"), it(e, "height", "100%"), it(e, "viewBox", "0 0 24 24"), it(e, "version", "1.1"), it(e, "xmlns", "http://www.w3.org/2000/svg"), it(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), it(e, "xml:space", "preserve"), it(e, "stroke", "currentColor"), Hi(e, "fill-rule", "evenodd"), Hi(e, "clip-rule", "evenodd"), Hi(e, "stroke-linecap", "round"), Hi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Dm(n, e, l), qm(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
    d(n) {
      n && zm(e);
    }
  };
}
class Mm extends Sm {
  constructor(e) {
    super(), Bm(this, e, null, Em, Lm, {});
  }
}
const {
  SvelteComponent: Rm,
  append: aa,
  attr: Ct,
  detach: Am,
  init: Wm,
  insert: Xm,
  noop: oo,
  safe_not_equal: Im,
  set_style: Ti,
  svg_element: so
} = window.__gradio__svelte__internal;
function Ym(i) {
  let e, t, n;
  return {
    c() {
      e = so("svg"), t = so("path"), n = so("path"), Ct(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Ct(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Ct(e, "width", "100%"), Ct(e, "height", "100%"), Ct(e, "viewBox", "0 0 24 24"), Ct(e, "xmlns", "http://www.w3.org/2000/svg"), Ct(e, "fill", "none"), Ct(e, "stroke", "currentColor"), Ct(e, "stroke-width", "2"), Ti(e, "fill-rule", "evenodd"), Ti(e, "clip-rule", "evenodd"), Ti(e, "stroke-linecap", "round"), Ti(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      Xm(l, e, o), aa(e, t), aa(e, n);
    },
    p: oo,
    i: oo,
    o: oo,
    d(l) {
      l && Am(e);
    }
  };
}
class Hm extends Rm {
  constructor(e) {
    super(), Wm(this, e, null, Ym, Im, {});
  }
}
const {
  SvelteComponent: Tm,
  append: jm,
  attr: Ft,
  detach: Fm,
  init: Um,
  insert: Vm,
  noop: ao,
  safe_not_equal: Om,
  set_style: ji,
  svg_element: ra
} = window.__gradio__svelte__internal;
function Nm(i) {
  let e, t;
  return {
    c() {
      e = ra("svg"), t = ra("path"), Ft(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "fill", "none"), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", "2"), ji(e, "fill-rule", "evenodd"), ji(e, "clip-rule", "evenodd"), ji(e, "stroke-linecap", "round"), ji(e, "stroke-linejoin", "round"), Ft(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      Vm(n, e, l), jm(e, t);
    },
    p: ao,
    i: ao,
    o: ao,
    d(n) {
      n && Fm(e);
    }
  };
}
class $m extends Tm {
  constructor(e) {
    super(), Um(this, e, null, Nm, Om, {});
  }
}
const {
  SvelteComponent: Pm,
  append: Km,
  attr: Ut,
  detach: Zm,
  init: Gm,
  insert: Jm,
  noop: ro,
  safe_not_equal: Qm,
  set_style: Fi,
  svg_element: _a
} = window.__gradio__svelte__internal;
function xm(i) {
  let e, t;
  return {
    c() {
      e = _a("svg"), t = _a("path"), Ut(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "fill", "none"), Ut(e, "stroke", "currentColor"), Ut(e, "stroke-width", "2"), Fi(e, "fill-rule", "evenodd"), Fi(e, "clip-rule", "evenodd"), Fi(e, "stroke-linecap", "round"), Fi(e, "stroke-linejoin", "round"), Ut(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      Jm(n, e, l), Km(e, t);
    },
    p: ro,
    i: ro,
    o: ro,
    d(n) {
      n && Zm(e);
    }
  };
}
class e0 extends Pm {
  constructor(e) {
    super(), Gm(this, e, null, xm, Qm, {});
  }
}
const {
  SvelteComponent: t0,
  append: ca,
  attr: _o,
  bubble: ua,
  create_component: n0,
  destroy_component: i0,
  detach: $r,
  element: fa,
  init: l0,
  insert: Pr,
  listen: co,
  mount_component: o0,
  run_all: s0,
  safe_not_equal: a0,
  set_data: r0,
  set_input_value: da,
  space: _0,
  text: c0,
  transition_in: u0,
  transition_out: f0
} = window.__gradio__svelte__internal, { createEventDispatcher: d0, afterUpdate: h0 } = window.__gradio__svelte__internal;
function m0(i) {
  let e;
  return {
    c() {
      e = c0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Pr(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && r0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && $r(e);
    }
  };
}
function g0(i) {
  let e, t, n, l, o, s, r;
  return t = new er({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [m0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = fa("label"), n0(t.$$.fragment), n = _0(), l = fa("input"), _o(l, "type", "color"), l.disabled = /*disabled*/
      i[3], _o(l, "class", "svelte-16l8u73"), _o(e, "class", "block");
    },
    m(a, _) {
      Pr(a, e, _), o0(t, e, null), ca(e, n), ca(e, l), da(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        co(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        co(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        co(
          l,
          "blur",
          /*blur_handler*/
          i[7]
        )
      ], s = !0);
    },
    p(a, [_]) {
      const c = {};
      _ & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), _ & /*info*/
      4 && (c.info = /*info*/
      a[2]), _ & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: _, ctx: a }), t.$set(c), (!o || _ & /*disabled*/
      8) && (l.disabled = /*disabled*/
      a[3]), _ & /*value*/
      1 && da(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (u0(t.$$.fragment, a), o = !0);
    },
    o(a) {
      f0(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && $r(e), i0(t), s = !1, s0(r);
    }
  };
}
function b0(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = d0();
  function c() {
    _("change", n), l || _("input");
  }
  h0(() => {
    t(5, l = !1);
  });
  function u(m) {
    ua.call(this, i, m);
  }
  function f(m) {
    ua.call(this, i, m);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return i.$$set = (m) => {
    "value" in m && t(0, n = m.value), "value_is_output" in m && t(5, l = m.value_is_output), "label" in m && t(1, o = m.label), "info" in m && t(2, s = m.info), "disabled" in m && t(3, r = m.disabled), "show_label" in m && t(4, a = m.show_label);
  }, i.$$.update = () => {
    i.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    o,
    s,
    r,
    a,
    l,
    u,
    f,
    d
  ];
}
class p0 extends t0 {
  constructor(e) {
    super(), l0(this, e, b0, g0, a0, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
const {
  SvelteComponent: n9,
  append: i9,
  attr: l9,
  component_subscribe: o9,
  detach: s9,
  element: a9,
  init: r9,
  insert: _9,
  noop: c9,
  safe_not_equal: u9,
  set_style: f9,
  svg_element: d9,
  toggle_class: h9
} = window.__gradio__svelte__internal, { onMount: m9 } = window.__gradio__svelte__internal, {
  SvelteComponent: g9,
  append: b9,
  attr: p9,
  binding_callbacks: w9,
  check_outros: v9,
  create_component: k9,
  create_slot: C9,
  destroy_component: y9,
  destroy_each: S9,
  detach: q9,
  element: z9,
  empty: B9,
  ensure_array_like: D9,
  get_all_dirty_from_scope: L9,
  get_slot_changes: E9,
  group_outros: M9,
  init: R9,
  insert: A9,
  mount_component: W9,
  noop: X9,
  safe_not_equal: I9,
  set_data: Y9,
  set_style: H9,
  space: T9,
  text: j9,
  toggle_class: F9,
  transition_in: U9,
  transition_out: V9,
  update_slot_base: O9
} = window.__gradio__svelte__internal, { tick: N9 } = window.__gradio__svelte__internal, { onDestroy: $9 } = window.__gradio__svelte__internal, {
  SvelteComponent: P9,
  add_render_callback: K9,
  append: Z9,
  attr: G9,
  bubble: J9,
  check_outros: Q9,
  create_component: x9,
  create_in_transition: eC,
  create_out_transition: tC,
  destroy_component: nC,
  detach: iC,
  element: lC,
  group_outros: oC,
  init: sC,
  insert: aC,
  listen: rC,
  mount_component: _C,
  run_all: cC,
  safe_not_equal: uC,
  set_data: fC,
  space: dC,
  stop_propagation: hC,
  text: mC,
  transition_in: gC,
  transition_out: bC
} = window.__gradio__svelte__internal, { createEventDispatcher: pC, onMount: wC } = window.__gradio__svelte__internal, {
  SvelteComponent: vC,
  append: kC,
  attr: CC,
  bubble: yC,
  check_outros: SC,
  create_animation: qC,
  create_component: zC,
  destroy_component: BC,
  detach: DC,
  element: LC,
  ensure_array_like: EC,
  fix_and_outro_and_destroy_block: MC,
  fix_position: RC,
  group_outros: AC,
  init: WC,
  insert: XC,
  mount_component: IC,
  noop: YC,
  safe_not_equal: HC,
  set_style: TC,
  space: jC,
  transition_in: FC,
  transition_out: UC,
  update_keyed_each: VC
} = window.__gradio__svelte__internal, {
  SvelteComponent: OC,
  attr: NC,
  detach: $C,
  element: PC,
  init: KC,
  insert: ZC,
  noop: GC,
  safe_not_equal: JC,
  set_style: QC,
  toggle_class: xC
} = window.__gradio__svelte__internal, {
  SvelteComponent: ey,
  add_flush_callback: ty,
  assign: ny,
  bind: iy,
  binding_callbacks: ly,
  create_component: oy,
  destroy_component: sy,
  detach: ay,
  flush: ry,
  get_spread_object: _y,
  get_spread_update: cy,
  init: uy,
  insert: fy,
  mount_component: dy,
  safe_not_equal: hy,
  space: my,
  transition_in: gy,
  transition_out: by
} = window.__gradio__svelte__internal;
var Kr = (i) => {
  throw TypeError(i);
}, Zr = (i, e, t) => e.has(i) || Kr("Cannot " + t), si = (i, e, t) => (Zr(i, e, "read from private field"), e.get(i)), w0 = (i, e, t) => e.has(i) ? Kr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), v0 = (i, e, t, n) => (Zr(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var Nt;
class py extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = si(this, Nt) + t; ; ) {
          const l = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (l === -1 || l - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (l === -1)
            break;
          const s = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, s)), t = t.slice(l + 1);
        }
        v0(this, Nt, t);
      },
      flush: (t) => {
        if (si(this, Nt) === "")
          return;
        const n = e.allowCR && si(this, Nt).endsWith("\r") ? si(this, Nt).slice(0, -1) : si(this, Nt);
        t.enqueue(n);
      }
    }), w0(this, Nt, "");
  }
}
Nt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: k0,
  append: Gr,
  attr: se,
  bubble: C0,
  check_outros: y0,
  create_slot: Jr,
  detach: qi,
  element: yl,
  empty: S0,
  get_all_dirty_from_scope: Qr,
  get_slot_changes: xr,
  group_outros: q0,
  init: z0,
  insert: zi,
  listen: B0,
  safe_not_equal: D0,
  set_style: Ee,
  space: e_,
  src_url_equal: rl,
  toggle_class: jn,
  transition_in: _l,
  transition_out: cl,
  update_slot_base: t_
} = window.__gradio__svelte__internal;
function L0(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && ha(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = Jr(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = yl("button"), r && r.c(), t = e_(), _ && _.c(), se(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), se(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], jn(e, "hidden", !/*visible*/
      i[2]), Ee(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ee(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ee(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, u) {
      zi(c, e, u), r && r.m(e, null), Gr(e, t), _ && _.m(e, null), l = !0, o || (s = B0(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = ha(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || u & /*$$scope*/
      2048) && t_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? xr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Qr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && se(e, "class", n), (!l || u & /*elem_id*/
      1) && se(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && jn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Ee(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Ee(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Ee(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (_l(_, c), l = !0);
    },
    o(c) {
      cl(_, c), l = !1;
    },
    d(c) {
      c && qi(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function E0(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && ma(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = Jr(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = yl("a"), o && o.c(), t = e_(), r && r.c(), se(
        e,
        "href",
        /*link*/
        i[6]
      ), se(e, "rel", "noopener noreferrer"), se(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), se(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), se(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), jn(e, "hidden", !/*visible*/
      i[2]), jn(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Ee(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ee(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Ee(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ee(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, _) {
      zi(a, e, _), o && o.m(e, null), Gr(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = ma(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && t_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? xr(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : Qr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && se(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && se(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && se(e, "class", n), (!l || _ & /*elem_id*/
      1) && se(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && jn(e, "hidden", !/*visible*/
      a[2]), (!l || _ & /*size, variant, elem_classes, disabled*/
      282) && jn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), _ & /*scale*/
      512 && Ee(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && Ee(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && Ee(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && Ee(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (_l(r, a), l = !0);
    },
    o(a) {
      cl(r, a), l = !1;
    },
    d(a) {
      a && qi(e), o && o.d(), r && r.d(a);
    }
  };
}
function ha(i) {
  let e, t, n;
  return {
    c() {
      e = yl("img"), se(e, "class", "button-icon svelte-8huxfn"), rl(e.src, t = /*icon*/
      i[7].url) || se(e, "src", t), se(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      zi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !rl(e.src, t = /*icon*/
      l[7].url) && se(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && se(e, "alt", n);
    },
    d(l) {
      l && qi(e);
    }
  };
}
function ma(i) {
  let e, t, n;
  return {
    c() {
      e = yl("img"), se(e, "class", "button-icon svelte-8huxfn"), rl(e.src, t = /*icon*/
      i[7].url) || se(e, "src", t), se(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      zi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !rl(e.src, t = /*icon*/
      l[7].url) && se(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && se(e, "alt", n);
    },
    d(l) {
      l && qi(e);
    }
  };
}
function M0(i) {
  let e, t, n, l;
  const o = [E0, L0], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = S0();
    },
    m(a, _) {
      s[e].m(a, _), zi(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (q0(), cl(s[c], 1, 1, () => {
        s[c] = null;
      }), y0(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), _l(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (_l(t), l = !0);
    },
    o(a) {
      cl(t), l = !1;
    },
    d(a) {
      a && qi(n), s[e].d(a);
    }
  };
}
function R0(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: f = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(b) {
    C0.call(this, i, b);
  }
  return i.$$set = (b) => {
    "elem_id" in b && t(0, o = b.elem_id), "elem_classes" in b && t(1, s = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, _ = b.size), "value" in b && t(5, c = b.value), "link" in b && t(6, u = b.link), "icon" in b && t(7, f = b.icon), "disabled" in b && t(8, d = b.disabled), "scale" in b && t(9, m = b.scale), "min_width" in b && t(10, h = b.min_width), "$$scope" in b && t(11, l = b.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    m,
    h,
    l,
    n,
    g
  ];
}
class Eo extends k0 {
  constructor(e) {
    super(), z0(this, e, R0, M0, D0, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      variant: 3,
      size: 4,
      value: 5,
      link: 6,
      icon: 7,
      disabled: 8,
      scale: 9,
      min_width: 10
    });
  }
}
const {
  SvelteComponent: wy,
  create_component: vy,
  destroy_component: ky,
  detach: Cy,
  init: yy,
  insert: Sy,
  mount_component: qy,
  safe_not_equal: zy,
  set_data: By,
  text: Dy,
  transition_in: Ly,
  transition_out: Ey
} = window.__gradio__svelte__internal, {
  SvelteComponent: A0,
  add_render_callback: n_,
  append: Ui,
  attr: je,
  binding_callbacks: ga,
  check_outros: W0,
  create_bidirectional_transition: ba,
  destroy_each: X0,
  detach: wi,
  element: ul,
  empty: I0,
  ensure_array_like: pa,
  group_outros: Y0,
  init: H0,
  insert: vi,
  listen: Mo,
  prevent_default: T0,
  run_all: j0,
  safe_not_equal: F0,
  set_data: U0,
  set_style: An,
  space: Ro,
  text: V0,
  toggle_class: rt,
  transition_in: uo,
  transition_out: wa
} = window.__gradio__svelte__internal, { createEventDispatcher: O0 } = window.__gradio__svelte__internal;
function va(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function ka(i) {
  let e, t, n, l, o, s = pa(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Ca(va(i, s, a));
  return {
    c() {
      e = ul("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      je(e, "class", "options svelte-yuohum"), je(e, "role", "listbox"), An(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), An(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), An(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, _) {
      vi(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = Mo(e, "mousedown", T0(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = pa(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const u = va(a, s, c);
          r[c] ? r[c].p(u, _) : (r[c] = Ca(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && An(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && An(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && An(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && n_(() => {
        n && (t || (t = ba(e, qs, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ba(e, qs, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && wi(e), X0(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Ca(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = ul("li"), t = ul("span"), t.textContent = "✓", n = Ro(), o = V0(l), s = Ro(), je(t, "class", "inner-item svelte-yuohum"), rt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), je(e, "class", "item svelte-yuohum"), je(e, "data-index", r = /*index*/
      i[26]), je(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), je(e, "data-testid", "dropdown-option"), je(e, "role", "option"), je(e, "aria-selected", _ = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), rt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), rt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), rt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), rt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      vi(c, e, u), Ui(e, t), Ui(e, n), Ui(e, o), Ui(e, s);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && rt(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && U0(o, l), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && je(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && je(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && je(e, "aria-selected", _), u & /*selected_indices, filtered_indices*/
      18 && rt(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && wi(e);
    }
  };
}
function N0(i) {
  let e, t, n, l, o;
  n_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && ka(i)
  );
  return {
    c() {
      e = ul("div"), t = Ro(), s && s.c(), n = I0(), je(e, "class", "reference");
    },
    m(r, a) {
      vi(r, e, a), i[20](e), vi(r, t, a), s && s.m(r, a), vi(r, n, a), l || (o = [
        Mo(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Mo(
          window,
          "resize",
          /*onwindowresize*/
          i[19]
        )
      ], l = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? s ? (s.p(r, a), a & /*show_options, disabled*/
      12 && uo(s, 1)) : (s = ka(r), s.c(), uo(s, 1), s.m(n.parentNode, n)) : s && (Y0(), wa(s, 1, 1, () => {
        s = null;
      }), W0());
    },
    i(r) {
      uo(s);
    },
    o(r) {
      wa(s);
    },
    d(r) {
      r && (wi(e), wi(t), wi(n)), i[20](null), s && s.d(r), l = !1, j0(o);
    }
  };
}
function $0(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, u, f, d, m, h, g, b, w, p;
  function k() {
    const { top: A, bottom: F } = h.getBoundingClientRect();
    t(16, u = A), t(17, f = p - F);
  }
  let B = null;
  function z() {
    r && (B !== null && clearTimeout(B), B = setTimeout(
      () => {
        k(), B = null;
      },
      10
    ));
  }
  const v = O0();
  function C() {
    t(11, p = window.innerHeight);
  }
  function E(A) {
    ga[A ? "unshift" : "push"](() => {
      h = A, t(6, h);
    });
  }
  const q = (A) => v("change", A);
  function S(A) {
    ga[A ? "unshift" : "push"](() => {
      g = A, t(7, g);
    });
  }
  return i.$$set = (A) => {
    "choices" in A && t(0, o = A.choices), "filtered_indices" in A && t(1, s = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, _ = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && _.length > 0) {
          let F = g.querySelectorAll("li");
          for (const X of Array.from(F))
            if (X.getAttribute("data-index") === _[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, X.offsetTop);
              break;
            }
        }
        k();
        const A = t(15, l = h.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, m = (A == null ? void 0 : A.width) || 0);
      }
      f > u ? (t(10, w = f), t(9, b = null)) : (t(9, b = `${f + d}px`), t(10, w = u - d));
    }
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    h,
    g,
    m,
    b,
    w,
    p,
    z,
    v,
    n,
    l,
    u,
    f,
    d,
    C,
    E,
    q,
    S
  ];
}
class P0 extends A0 {
  constructor(e) {
    super(), H0(this, e, $0, N0, F0, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function K0(i, e) {
  return (i % e + e) % e;
}
function ya(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function Z0(i, e, t) {
  i("change", e), t || i("input");
}
function G0(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[K0(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: My,
  append: Ry,
  attr: Ay,
  binding_callbacks: Wy,
  check_outros: Xy,
  create_component: Iy,
  destroy_component: Yy,
  destroy_each: Hy,
  detach: Ty,
  element: jy,
  ensure_array_like: Fy,
  group_outros: Uy,
  init: Vy,
  insert: Oy,
  listen: Ny,
  mount_component: $y,
  prevent_default: Py,
  run_all: Ky,
  safe_not_equal: Zy,
  set_data: Gy,
  set_input_value: Jy,
  space: Qy,
  text: xy,
  toggle_class: eS,
  transition_in: tS,
  transition_out: nS
} = window.__gradio__svelte__internal, { afterUpdate: iS, createEventDispatcher: lS } = window.__gradio__svelte__internal, {
  SvelteComponent: J0,
  append: nn,
  attr: Te,
  binding_callbacks: Q0,
  check_outros: x0,
  create_component: Ao,
  destroy_component: Wo,
  detach: $o,
  element: In,
  group_outros: eg,
  init: tg,
  insert: Po,
  listen: ai,
  mount_component: Xo,
  run_all: ng,
  safe_not_equal: ig,
  set_data: lg,
  set_input_value: Sa,
  space: fo,
  text: og,
  toggle_class: Wn,
  transition_in: Yn,
  transition_out: mi
} = window.__gradio__svelte__internal, { onMount: sg } = window.__gradio__svelte__internal, { createEventDispatcher: ag, afterUpdate: rg } = window.__gradio__svelte__internal;
function _g(i) {
  let e;
  return {
    c() {
      e = og(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Po(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && lg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && $o(e);
    }
  };
}
function qa(i) {
  let e, t, n;
  return t = new Ho({}), {
    c() {
      e = In("div"), Ao(t.$$.fragment), Te(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      Po(l, e, o), Xo(t, e, null), n = !0;
    },
    i(l) {
      n || (Yn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      mi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && $o(e), Wo(t);
    }
  };
}
function cg(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, m;
  t = new er({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [_g] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && qa();
  return u = new P0({
    props: {
      show_options: (
        /*show_options*/
        i[12]
      ),
      choices: (
        /*choices*/
        i[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        i[10]
      ),
      disabled: (
        /*disabled*/
        i[3]
      ),
      selected_indices: (
        /*selected_index*/
        i[11] === null ? [] : [
          /*selected_index*/
          i[11]
        ]
      ),
      active_index: (
        /*active_index*/
        i[14]
      )
    }
  }), u.$on(
    "change",
    /*handle_option_selected*/
    i[16]
  ), {
    c() {
      e = In("div"), Ao(t.$$.fragment), n = fo(), l = In("div"), o = In("div"), s = In("div"), r = In("input"), _ = fo(), h && h.c(), c = fo(), Ao(u.$$.fragment), Te(r, "role", "listbox"), Te(r, "aria-controls", "dropdown-options"), Te(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Te(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Te(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Te(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Wn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Te(s, "class", "secondary-wrap svelte-1m1zvyj"), Te(o, "class", "wrap-inner svelte-1m1zvyj"), Wn(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), Te(l, "class", "wrap svelte-1m1zvyj"), Te(e, "class", "svelte-1m1zvyj"), Wn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      Po(g, e, b), Xo(t, e, null), nn(e, n), nn(e, l), nn(l, o), nn(o, s), nn(s, r), Sa(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), nn(s, _), h && h.m(s, null), nn(l, c), Xo(u, l, null), f = !0, d || (m = [
        ai(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        ai(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        ai(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        ai(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        ai(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], d = !0);
    },
    p(g, b) {
      const w = {};
      b[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      g[4]), b[0] & /*info*/
      2 && (w.info = /*info*/
      g[1]), b[0] & /*label*/
      1 | b[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: b, ctx: g }), t.$set(w), (!f || b[0] & /*show_options*/
      4096) && Te(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!f || b[0] & /*label*/
      1) && Te(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!f || b[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!f || b[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), b[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && Sa(
        r,
        /*input_text*/
        g[9]
      ), (!f || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Wn(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (eg(), mi(h, 1, 1, () => {
        h = null;
      }), x0()) : h ? b[0] & /*disabled*/
      8 && Yn(h, 1) : (h = qa(), h.c(), Yn(h, 1), h.m(s, null)), (!f || b[0] & /*show_options*/
      4096) && Wn(
        o,
        "show_options",
        /*show_options*/
        g[12]
      );
      const p = {};
      b[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      g[12]), b[0] & /*choices*/
      4 && (p.choices = /*choices*/
      g[2]), b[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      g[10]), b[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      g[3]), b[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), b[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      g[14]), u.$set(p), (!f || b[0] & /*container*/
      32) && Wn(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      f || (Yn(t.$$.fragment, g), Yn(h), Yn(u.$$.fragment, g), f = !0);
    },
    o(g) {
      mi(t.$$.fragment, g), mi(h), mi(u.$$.fragment, g), f = !1;
    },
    d(g) {
      g && $o(e), Wo(t), i[29](null), h && h.d(), Wo(u), d = !1, ng(m);
    }
  };
}
function ug(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: u } = e, { container: f = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, b, w, p = "", k = "", B = !1, z = [], v = null, C = null, E;
  const q = ag();
  o ? (E = a.map((R) => R[1]).indexOf(o), C = E, C === -1 ? (s = o, C = null) : ([p, s] = a[C], k = p), A()) : a.length > 0 && (E = 0, C = 0, [p, o] = a[C], s = o, k = p);
  function S() {
    t(13, b = a.map((R) => R[0])), t(24, w = a.map((R) => R[1]));
  }
  function A() {
    S(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, C = null)) : w.includes(o) ? (t(9, p = b[w.indexOf(o)]), t(11, C = w.indexOf(o))) : d ? (t(9, p = o), t(11, C = null)) : (t(9, p = ""), t(11, C = null)), t(27, E = C);
  }
  function F(R) {
    if (t(11, C = parseInt(R.detail.target.dataset.index)), isNaN(C)) {
      t(11, C = null);
      return;
    }
    t(12, g = !1), t(14, v = null), h.blur();
  }
  function X(R) {
    t(10, z = a.map((j, ee) => ee)), t(12, g = !0), q("focus");
  }
  function ne() {
    d ? t(20, o = p) : t(9, p = b[w.indexOf(o)]), t(12, g = !1), t(14, v = null), q("blur");
  }
  function Z(R) {
    t(12, [g, v] = G0(R, v, z), g, (t(14, v), t(2, a), t(23, _), t(6, d), t(9, p), t(10, z), t(8, h), t(25, k), t(11, C), t(27, E), t(26, B), t(24, w))), R.key === "Enter" && (v !== null ? (t(11, C = v), t(12, g = !1), h.blur(), t(14, v = null)) : b.includes(p) ? (t(11, C = b.indexOf(p)), t(12, g = !1), t(14, v = null), h.blur()) : d && (t(20, o = p), t(11, C = null), t(12, g = !1), t(14, v = null), h.blur()), q("enter", o));
  }
  rg(() => {
    t(21, r = !1), t(26, B = !0);
  }), sg(() => {
    h.focus();
  });
  function re() {
    p = this.value, t(9, p), t(11, C), t(27, E), t(26, B), t(2, a), t(24, w);
  }
  function I(R) {
    Q0[R ? "unshift" : "push"](() => {
      h = R, t(8, h);
    });
  }
  const $ = (R) => q("key_up", { key: R.key, input_value: p });
  return i.$$set = (R) => {
    "label" in R && t(0, n = R.label), "info" in R && t(1, l = R.info), "value" in R && t(20, o = R.value), "value_is_output" in R && t(21, r = R.value_is_output), "choices" in R && t(2, a = R.choices), "disabled" in R && t(3, c = R.disabled), "show_label" in R && t(4, u = R.show_label), "container" in R && t(5, f = R.container), "allow_custom_value" in R && t(6, d = R.allow_custom_value), "filterable" in R && t(7, m = R.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && C !== E && C !== null && B && (t(9, [p, o] = a[C], p, (t(20, o), t(11, C), t(27, E), t(26, B), t(2, a), t(24, w))), t(27, E = C), q("select", {
      index: C,
      value: w[C],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (A(), Z0(q, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && S(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (d || A(), t(23, _ = a), t(10, z = ya(a, p)), !d && z.length > 0 && t(14, v = z[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== k && (t(10, z = ya(a, p)), t(25, k = p), !d && z.length > 0 && t(14, v = z[0]));
  }, [
    n,
    l,
    a,
    c,
    u,
    f,
    d,
    m,
    h,
    p,
    z,
    C,
    g,
    b,
    v,
    q,
    F,
    X,
    ne,
    Z,
    o,
    r,
    s,
    _,
    w,
    k,
    B,
    E,
    re,
    I,
    $
  ];
}
class fg extends J0 {
  constructor(e) {
    super(), tg(
      this,
      e,
      ug,
      cg,
      ig,
      {
        label: 0,
        info: 1,
        value: 20,
        value_is_output: 21,
        choices: 2,
        disabled: 3,
        show_label: 4,
        container: 5,
        allow_custom_value: 6,
        filterable: 7
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: oS,
  attr: sS,
  detach: aS,
  element: rS,
  init: _S,
  insert: cS,
  noop: uS,
  safe_not_equal: fS,
  toggle_class: dS
} = window.__gradio__svelte__internal, {
  SvelteComponent: hS,
  add_flush_callback: mS,
  assign: gS,
  bind: bS,
  binding_callbacks: pS,
  check_outros: wS,
  create_component: vS,
  destroy_component: kS,
  detach: CS,
  empty: yS,
  get_spread_object: SS,
  get_spread_update: qS,
  group_outros: zS,
  init: BS,
  insert: DS,
  mount_component: LS,
  safe_not_equal: ES,
  space: MS,
  transition_in: RS,
  transition_out: AS
} = window.__gradio__svelte__internal, {
  SvelteComponent: dg,
  append: Ne,
  attr: Fn,
  check_outros: Io,
  create_component: fn,
  destroy_component: dn,
  detach: Qn,
  element: _t,
  group_outros: Yo,
  init: hg,
  insert: xn,
  listen: mg,
  mount_component: hn,
  safe_not_equal: gg,
  set_style: Un,
  space: ri,
  text: Ko,
  toggle_class: za,
  transition_in: qe,
  transition_out: Fe
} = window.__gradio__svelte__internal, { createEventDispatcher: bg } = window.__gradio__svelte__internal, { onMount: pg } = window.__gradio__svelte__internal;
function Ba(i) {
  let e, t, n, l, o, s, r;
  const a = [vg, wg], _ = [];
  function c(u, f) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = _t("div"), t = _t("button"), l.c(), Fn(t, "class", "icon svelte-d9x7u0"), Fn(t, "aria-label", "Lock label detail"), za(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Un(e, "margin-right", "8px");
    },
    m(u, f) {
      xn(u, e, f), Ne(e, t), _[n].m(t, null), o = !0, s || (r = mg(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(u, f) {
      let d = n;
      n = c(u), n !== d && (Yo(), Fe(_[d], 1, 1, () => {
        _[d] = null;
      }), Io(), l = _[n], l || (l = _[n] = a[n](u), l.c()), qe(l, 1), l.m(t, null)), (!o || f & /*labelDetailLock*/
      4) && za(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      o || (qe(l), o = !0);
    },
    o(u) {
      Fe(l), o = !1;
    },
    d(u) {
      u && Qn(e), _[n].d(), s = !1, r();
    }
  };
}
function wg(i) {
  let e, t;
  return e = new e0({}), {
    c() {
      fn(e.$$.fragment);
    },
    m(n, l) {
      hn(e, n, l), t = !0;
    },
    i(n) {
      t || (qe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dn(e, n);
    }
  };
}
function vg(i) {
  let e, t;
  return e = new $m({}), {
    c() {
      fn(e.$$.fragment);
    },
    m(n, l) {
      hn(e, n, l), t = !0;
    },
    i(n) {
      t || (qe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      dn(e, n);
    }
  };
}
function kg(i) {
  let e;
  return {
    c() {
      e = Ko("Cancel");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function Da(i) {
  let e, t, n;
  return t = new Eo({
    props: {
      variant: "stop",
      $$slots: { default: [Cg] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = _t("div"), fn(t.$$.fragment), Un(e, "margin-right", "8px");
    },
    m(l, o) {
      xn(l, e, o), hn(t, e, null), n = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (qe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Fe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Qn(e), dn(t);
    }
  };
}
function Cg(i) {
  let e;
  return {
    c() {
      e = Ko("Remove");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function yg(i) {
  let e;
  return {
    c() {
      e = Ko("OK");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function Sg(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, m, h, g, b, w = !/*showRemove*/
  i[4] && Ba(i);
  s = new fg({
    props: {
      value: (
        /*currentLabel*/
        i[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        i[3]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    i[6]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    i[8]
  ), _ = new p0({
    props: {
      value: (
        /*currentColor*/
        i[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), _.$on(
    "change",
    /*onColorChange*/
    i[7]
  ), f = new Eo({
    props: {
      $$slots: { default: [kg] },
      $$scope: { ctx: i }
    }
  }), f.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && Da(i)
  );
  return g = new Eo({
    props: {
      variant: "primary",
      $$slots: { default: [yg] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = _t("div"), t = _t("div"), n = _t("span"), w && w.c(), l = ri(), o = _t("div"), fn(s.$$.fragment), r = ri(), a = _t("div"), fn(_.$$.fragment), c = ri(), u = _t("div"), fn(f.$$.fragment), d = ri(), p && p.c(), m = ri(), h = _t("div"), fn(g.$$.fragment), Un(o, "margin-right", "10px"), Un(a, "margin-right", "40px"), Un(a, "margin-bottom", "8px"), Un(u, "margin-right", "8px"), Fn(n, "class", "model-content svelte-d9x7u0"), Fn(t, "class", "modal-container svelte-d9x7u0"), Fn(e, "class", "modal svelte-d9x7u0"), Fn(e, "id", "model-box-edit");
    },
    m(k, B) {
      xn(k, e, B), Ne(e, t), Ne(t, n), w && w.m(n, null), Ne(n, l), Ne(n, o), hn(s, o, null), Ne(n, r), Ne(n, a), hn(_, a, null), Ne(n, c), Ne(n, u), hn(f, u, null), Ne(n, d), p && p.m(n, null), Ne(n, m), Ne(n, h), hn(g, h, null), b = !0;
    },
    p(k, [B]) {
      /*showRemove*/
      k[4] ? w && (Yo(), Fe(w, 1, 1, () => {
        w = null;
      }), Io()) : w ? (w.p(k, B), B & /*showRemove*/
      16 && qe(w, 1)) : (w = Ba(k), w.c(), qe(w, 1), w.m(n, l));
      const z = {};
      B & /*currentLabel*/
      1 && (z.value = /*currentLabel*/
      k[0]), B & /*choices*/
      8 && (z.choices = /*choices*/
      k[3]), s.$set(z);
      const v = {};
      B & /*currentColor*/
      2 && (v.value = /*currentColor*/
      k[1]), _.$set(v);
      const C = {};
      B & /*$$scope*/
      262144 && (C.$$scope = { dirty: B, ctx: k }), f.$set(C), /*showRemove*/
      k[4] ? p ? (p.p(k, B), B & /*showRemove*/
      16 && qe(p, 1)) : (p = Da(k), p.c(), qe(p, 1), p.m(n, m)) : p && (Yo(), Fe(p, 1, 1, () => {
        p = null;
      }), Io());
      const E = {};
      B & /*$$scope*/
      262144 && (E.$$scope = { dirty: B, ctx: k }), g.$set(E);
    },
    i(k) {
      b || (qe(w), qe(s.$$.fragment, k), qe(_.$$.fragment, k), qe(f.$$.fragment, k), qe(p), qe(g.$$.fragment, k), b = !0);
    },
    o(k) {
      Fe(w), Fe(s.$$.fragment, k), Fe(_.$$.fragment, k), Fe(f.$$.fragment, k), Fe(p), Fe(g.$$.fragment, k), b = !1;
    },
    d(k) {
      k && Qn(e), w && w.d(), dn(s), dn(_), dn(f), p && p.d(), dn(g);
    }
  };
}
function qg(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = bg();
  function f(B) {
    u("change", {
      label: l,
      color: a,
      lock: c,
      ret: B
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(B) {
    const { detail: z } = B;
    let v = z;
    Number.isInteger(v) ? (Array.isArray(s) && v < s.length && t(1, a = s[v]), Array.isArray(o) && v < o.length && t(0, l = o[v][0])) : t(0, l = v);
  }
  function m(B) {
    const { detail: z } = B;
    t(1, a = z);
  }
  function h(B) {
    d(B), f(1);
  }
  function g(B) {
    t(2, c = !c);
  }
  function b(B) {
    switch (B.key.toLowerCase()) {
      case "enter":
        f(1);
        break;
      case "escape":
        f(0);
        break;
    }
  }
  pg(() => (document.addEventListener("keydown", b), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const w = () => f(0), p = () => f(-1), k = () => f(1);
  return i.$$set = (B) => {
    "label" in B && t(10, n = B.label), "currentLabel" in B && t(0, l = B.currentLabel), "choices" in B && t(3, o = B.choices), "choicesColors" in B && t(11, s = B.choicesColors), "color" in B && t(12, r = B.color), "currentColor" in B && t(1, a = B.currentColor), "showRemove" in B && t(4, _ = B.showRemove), "labelDetailLock" in B && t(2, c = B.labelDetailLock);
  }, [
    l,
    a,
    c,
    o,
    _,
    f,
    d,
    m,
    h,
    g,
    n,
    s,
    r,
    w,
    p,
    k
  ];
}
class Zo extends dg {
  constructor(e) {
    super(), hg(this, e, qg, Sg, gg, {
      label: 10,
      currentLabel: 0,
      choices: 3,
      choicesColors: 11,
      color: 12,
      currentColor: 1,
      showRemove: 4,
      labelDetailLock: 2
    });
  }
}
const we = (i, e, t) => Math.min(Math.max(i, e), t);
function ho(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class mo {
  constructor(e, t, n, l, o, s, r, a, _, c, u, f, d, m = "rgb(255, 255, 255)", h = 0.5, g = 25, b = 8, w = 2, p = 4, k = 1, B = !0) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (z) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let v = (z.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, C = (z.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const E = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, q = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        v = we(v, -this._xmin, E - this._xmax), C = we(C, -this._ymin, q - this._ymax), this._xmin += v, this._ymin += C, this._xmax += v, this._ymax += C, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (z) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [v, C] = this.toBoxCoordinates(z.clientX, z.clientY);
        v = (v - this.offsetMouseX) / this.canvasWindow.scale, C = (C - this.offsetMouseY) / this.canvasWindow.scale, v > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = v, this.creatingAnchorX = "xmin") : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = v : v > this._xmin && v < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = v : v < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = v, this.creatingAnchorX = "xmax"), C > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = C, this.creatingAnchorY = "ymin") : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = C : C > this._ymin && C < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = C : C < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = C, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (z) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = we(this._xmin, 0, v - this.minSize), this._ymin = we(this._ymin, 0, C - this.minSize), this._xmax = we(this._xmax, this.minSize, v), this._ymax = we(this._ymax, this.minSize, C), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > v ? (this._xmin -= this._xmax - v, this._xmax = v) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > C ? (this._ymin -= this._ymax - C, this._ymax = C) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (z) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const v = z.clientX, C = z.clientY, E = (v - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, q = (C - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, A = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += E, this._ymin += q, this._xmin = we(this._xmin, 0, this._xmax - this.minSize), this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += E, this._ymin += q, this._xmax = we(this._xmax, this._xmin + this.minSize, S), this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += E, this._ymax += q, this._xmax = we(this._xmax, this._xmin + this.minSize, S), this._ymax = we(this._ymax, this._ymin + this.minSize, A);
            break;
          case 3:
            this._xmin += E, this._ymax += q, this._xmin = we(this._xmin, 0, this._xmax - this.minSize), this._ymax = we(this._ymax, this._ymin + this.minSize, A);
            break;
          case 4:
            this._ymin += q, this._ymin = we(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += E, this._xmax = we(this._xmax, this._xmin + this.minSize, S);
            break;
          case 6:
            this._ymax += q, this._ymax = we(this._ymax, this._ymin + this.minSize, A);
            break;
          case 7:
            this._xmin += E, this._xmin = we(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = k, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = u, this._xmax = f, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = w, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = h, this.showLabel = B, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this._xmin,
      ymin: this._ymin,
      xmax: this._xmax,
      ymax: this._ymax,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this._xmin = Math.round(this._xmin * t), this._ymin = Math.round(this._ymin * t), this._xmax = Math.round(this._xmax * t), this._ymax = Math.round(this._ymax * t), this.applyUserScale(), this.scaleFactor = e;
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, t = this.getWidth(), n = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  getArea() {
    return this.getWidth() * this.getHeight();
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  applyUserScale() {
    this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles();
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e) {
    let t, n;
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = ho(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = ho(this.color, 1), e.stroke(), e.closePath(), this.showLabel && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = ho(this.color, 1);
    for (const l of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(l.xmin, l.ymin), e.fillRect(
        t,
        n,
        l.xmax - l.xmin,
        l.ymax - l.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax;
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const l = this.resizeHandles[n];
      if (e >= l.xmin && e <= l.xmax && t >= l.ymin && t <= l.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  startCreating(e, t, n) {
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = n, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
    const [t, n, l, o] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - o, this._xmax = this.canvasWindow.imageWidth - l, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = l, this._xmax = o, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const ln = [
  "rgb(255, 168, 77)",
  "rgb(92, 172, 238)",
  "rgb(255, 99, 71)",
  "rgb(118, 238, 118)",
  "rgb(255, 145, 164)",
  "rgb(0, 191, 255)",
  "rgb(255, 218, 185)",
  "rgb(255, 69, 0)",
  "rgb(34, 139, 34)",
  "rgb(255, 240, 245)",
  "rgb(255, 193, 37)",
  "rgb(255, 193, 7)",
  "rgb(255, 250, 138)"
], Vi = (i, e, t) => Math.min(Math.max(i, e), t);
class zg {
  constructor(e, t) {
    this.stopDrag = () => {
      this.pointersCache.size === 0 ? (this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag)) : this.pointersCache.size === 1 && (this.isDragging = !0, this.startDragX = this.pointersCache.values().next().value.clientX, this.startDragY = this.pointersCache.values().next().value.clientY);
    }, this.handleDrag = (n) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        if (this.scale == 1) {
          this.offsetX = (this.canvasWidth - this.imageWidth) / 2, this.offsetY = 0, this.renderCallBack();
          return;
        }
        let l = n.clientX - this.startDragX, o = n.clientY - this.startDragY;
        this.imageWidth * this.scale > this.canvasWidth ? l = Vi(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = Vi(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = Vi(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = Vi(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.pointersCache = t, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX, this.startDragY = e.clientY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, l = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = l);
  }
}
const {
  SvelteComponent: Bg,
  append: $e,
  attr: oe,
  binding_callbacks: La,
  bubble: go,
  check_outros: Vn,
  create_component: qt,
  destroy_component: zt,
  detach: $t,
  element: ct,
  empty: Dg,
  group_outros: On,
  init: Lg,
  insert: Pt,
  listen: Me,
  mount_component: Bt,
  noop: i_,
  run_all: l_,
  safe_not_equal: Eg,
  set_style: Oi,
  space: St,
  toggle_class: Ni,
  transition_in: x,
  transition_out: fe
} = window.__gradio__svelte__internal, { onMount: Mg, createEventDispatcher: Rg } = window.__gradio__svelte__internal;
function Ea(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, m, h, g, b;
  n = new mm({}), s = new ym({});
  let w = (
    /*showRemoveButton*/
    i[1] && Ma(i)
  ), p = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && Ra(i);
  return u = new Kf({}), m = new Af({}), {
    c() {
      e = ct("span"), t = ct("button"), qt(n.$$.fragment), l = St(), o = ct("button"), qt(s.$$.fragment), r = St(), w && w.c(), a = St(), p && p.c(), _ = St(), c = ct("button"), qt(u.$$.fragment), f = St(), d = ct("button"), qt(m.$$.fragment), oe(t, "class", "icon svelte-1m8vz1h"), oe(t, "aria-label", "Create box"), oe(t, "title", "Create box (C)"), Ni(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].creation
      ), oe(o, "class", "icon svelte-1m8vz1h"), oe(o, "aria-label", "Drag boxes"), oe(o, "title", "Drag boxes (D)"), Ni(
        o,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].drag
      ), oe(c, "class", "icon svelte-1m8vz1h"), oe(c, "aria-label", "Rotate counterclockwise"), oe(c, "title", "Rotate counterclockwise"), oe(d, "class", "icon svelte-1m8vz1h"), oe(d, "aria-label", "Rotate clockwise"), oe(d, "title", "Rotate clockwise"), oe(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(k, B) {
      Pt(k, e, B), $e(e, t), Bt(n, t, null), $e(e, l), $e(e, o), Bt(s, o, null), $e(e, r), w && w.m(e, null), $e(e, a), p && p.m(e, null), $e(e, _), $e(e, c), Bt(u, c, null), $e(e, f), $e(e, d), Bt(m, d, null), h = !0, g || (b = [
        Me(
          t,
          "click",
          /*click_handler*/
          i[43]
        ),
        Me(
          o,
          "click",
          /*click_handler_1*/
          i[44]
        ),
        Me(
          c,
          "click",
          /*click_handler_4*/
          i[47]
        ),
        Me(
          d,
          "click",
          /*click_handler_5*/
          i[48]
        )
      ], g = !0);
    },
    p(k, B) {
      (!h || B[0] & /*mode, Mode*/
      4352) && Ni(
        t,
        "selected",
        /*mode*/
        k[12] === /*Mode*/
        k[8].creation
      ), (!h || B[0] & /*mode, Mode*/
      4352) && Ni(
        o,
        "selected",
        /*mode*/
        k[12] === /*Mode*/
        k[8].drag
      ), /*showRemoveButton*/
      k[1] ? w ? (w.p(k, B), B[0] & /*showRemoveButton*/
      2 && x(w, 1)) : (w = Ma(k), w.c(), x(w, 1), w.m(e, a)) : w && (On(), fe(w, 1, 1, () => {
        w = null;
      }), Vn()), !/*disableEditBoxes*/
      k[5] && /*labelDetailLock*/
      k[16] ? p ? (p.p(k, B), B[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && x(p, 1)) : (p = Ra(k), p.c(), x(p, 1), p.m(e, _)) : p && (On(), fe(p, 1, 1, () => {
        p = null;
      }), Vn());
    },
    i(k) {
      h || (x(n.$$.fragment, k), x(s.$$.fragment, k), x(w), x(p), x(u.$$.fragment, k), x(m.$$.fragment, k), h = !0);
    },
    o(k) {
      fe(n.$$.fragment, k), fe(s.$$.fragment, k), fe(w), fe(p), fe(u.$$.fragment, k), fe(m.$$.fragment, k), h = !1;
    },
    d(k) {
      k && $t(e), zt(n), zt(s), w && w.d(), p && p.d(), zt(u), zt(m), g = !1, l_(b);
    }
  };
}
function Ma(i) {
  let e, t, n, l, o;
  return t = new Mm({}), {
    c() {
      e = ct("button"), qt(t.$$.fragment), oe(e, "class", "icon svelte-1m8vz1h"), oe(e, "aria-label", "Remove box"), oe(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      Pt(s, e, r), Bt(t, e, null), n = !0, l || (o = Me(
        e,
        "click",
        /*click_handler_2*/
        i[45]
      ), l = !0);
    },
    p: i_,
    i(s) {
      n || (x(t.$$.fragment, s), n = !0);
    },
    o(s) {
      fe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $t(e), zt(t), l = !1, o();
    }
  };
}
function Ra(i) {
  let e, t, n, l, o;
  return t = new Hm({}), {
    c() {
      e = ct("button"), qt(t.$$.fragment), oe(e, "class", "icon svelte-1m8vz1h"), oe(e, "aria-label", "Edit label"), oe(e, "title", "Edit label");
    },
    m(s, r) {
      Pt(s, e, r), Bt(t, e, null), n = !0, l || (o = Me(
        e,
        "click",
        /*click_handler_3*/
        i[46]
      ), l = !0);
    },
    p: i_,
    i(s) {
      n || (x(t.$$.fragment, s), n = !0);
    },
    o(s) {
      fe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $t(e), zt(t), l = !1, o();
    }
  };
}
function Aa(i) {
  let e, t;
  return e = new Zo({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? vn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[26]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[51]
  ), {
    c() {
      qt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (x(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function Wa(i) {
  let e, t;
  return e = new Zo({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? vn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[16]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[27]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[52]
  ), {
    c() {
      qt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      65536 && (o.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(o);
    },
    i(n) {
      t || (x(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function Xa(i) {
  let e, t;
  return e = new Zo({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[11] >= 0 && /*selectedBox*/
        i[11] < /*value*/
        i[0].boxes.length ? vn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[16]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[28]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[53]
  ), {
    c() {
      qt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      2049 && (o.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      2049 && (o.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      65536 && (o.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(o);
    },
    i(n) {
      t || (x(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function Ag(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f = (
    /*interactive*/
    i[2] && Ea(i)
  ), d = (
    /*editModalVisible*/
    i[13] && Aa(i)
  ), m = (
    /*newModalVisible*/
    i[14] && Wa(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[15] && Xa(i)
  );
  return {
    c() {
      e = ct("div"), t = ct("div"), n = ct("canvas"), l = St(), f && f.c(), o = St(), d && d.c(), s = St(), m && m.c(), r = St(), h && h.c(), a = Dg(), Oi(
        n,
        "height",
        /*height*/
        i[6]
      ), Oi(
        n,
        "width",
        /*width*/
        i[7]
      ), oe(n, "class", "canvas-annotator svelte-1m8vz1h"), oe(t, "class", "canvas-container svelte-1m8vz1h"), oe(e, "class", "annotator-container"), oe(e, "tabindex", "0");
    },
    m(g, b) {
      Pt(g, e, b), $e(e, t), $e(t, n), i[42](n), $e(e, l), f && f.m(e, null), i[49](e), Pt(g, o, b), d && d.m(g, b), Pt(g, s, b), m && m.m(g, b), Pt(g, r, b), h && h.m(g, b), Pt(g, a, b), _ = !0, c || (u = [
        Me(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[17]
        ),
        Me(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[18]
        ),
        Me(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[20]
        ),
        Me(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[19]
        ),
        Me(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[25]
        ),
        Me(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[22]
        ),
        Me(
          e,
          "keydown",
          /*handleKeyPress*/
          i[21]
        ),
        Me(
          e,
          "click",
          /*click_handler_6*/
          i[50]
        )
      ], c = !0);
    },
    p(g, b) {
      (!_ || b[0] & /*height*/
      64) && Oi(
        n,
        "height",
        /*height*/
        g[6]
      ), (!_ || b[0] & /*width*/
      128) && Oi(
        n,
        "width",
        /*width*/
        g[7]
      ), /*interactive*/
      g[2] ? f ? (f.p(g, b), b[0] & /*interactive*/
      4 && x(f, 1)) : (f = Ea(g), f.c(), x(f, 1), f.m(e, null)) : f && (On(), fe(f, 1, 1, () => {
        f = null;
      }), Vn()), /*editModalVisible*/
      g[13] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      8192 && x(d, 1)) : (d = Aa(g), d.c(), x(d, 1), d.m(s.parentNode, s)) : d && (On(), fe(d, 1, 1, () => {
        d = null;
      }), Vn()), /*newModalVisible*/
      g[14] ? m ? (m.p(g, b), b[0] & /*newModalVisible*/
      16384 && x(m, 1)) : (m = Wa(g), m.c(), x(m, 1), m.m(r.parentNode, r)) : m && (On(), fe(m, 1, 1, () => {
        m = null;
      }), Vn()), /*editDefaultLabelVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*editDefaultLabelVisible*/
      32768 && x(h, 1)) : (h = Xa(g), h.c(), x(h, 1), h.m(a.parentNode, a)) : h && (On(), fe(h, 1, 1, () => {
        h = null;
      }), Vn());
    },
    i(g) {
      _ || (x(f), x(d), x(m), x(h), _ = !0);
    },
    o(g) {
      fe(f), fe(d), fe(m), fe(h), _ = !1;
    },
    d(g) {
      g && ($t(e), $t(o), $t(s), $t(r), $t(a)), i[42](null), f && f.d(), i[49](null), d && d.d(g), m && m.d(g), h && h.d(g), c = !1, l_(u);
    }
  };
}
const Ia = 100;
function $i(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function vn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function Wg(i, e, t) {
  var n;
  (function(y) {
    y[y.creation = 0] = "creation", y[y.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: l = null } = e, { interactive: o } = e, { boxAlpha: s = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: _ } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: f = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: m = !1 } = e, { height: h = "100%" } = e, { width: g = "100%" } = e, { singleBox: b = !1 } = e, { showRemoveButton: w = null } = e, { handlesCursor: p = !0 } = e, { useDefaultLabel: k = !1 } = e, { enableKeyboardShortcuts: B = !0 } = e, { showBoxLabels: z = !0 } = e;
  w === null && (w = m);
  let v, C, E, q = null, S = -1, A = n.drag, F = /* @__PURE__ */ new Map(), X = new zg(N, F);
  u !== null && u.boxes.length == 0 && (A = n.creation);
  let ne = 0, Z = 0, re = 0, I = 0, $ = 1, R = 0, j = 0, ee = !1, ge = !1, ce = !1, W = k, _e = { label: "", color: "" }, L = { x: 0, y: 0, distance: 0 };
  const T = Rg();
  function N() {
    if (E) {
      if (E.clearRect(0, 0, v.width, v.height), E.save(), E.translate(X.offsetX, X.offsetY), E.scale(X.scale, X.scale), q !== null) {
        switch (u.orientation) {
          case 0:
            E.drawImage(q, 0, 0, R, j);
            break;
          case 1:
            E.translate(R, 0), E.rotate(Math.PI / 2), E.drawImage(q, 0, 0, j, R);
            break;
          case 2:
            E.translate(R, j), E.rotate(Math.PI), E.drawImage(q, 0, 0, R, j);
            break;
          case 3:
            E.translate(0, j), E.rotate(-Math.PI / 2), E.drawImage(q, 0, 0, j, R);
            break;
        }
        E.restore();
      }
      for (const y of u.boxes.slice().reverse())
        y.render(E);
    }
  }
  function Q(y) {
    t(11, S = y), u.boxes.forEach((Y) => {
      Y.setSelected(!1);
    }), y >= 0 && y < u.boxes.length && u.boxes[y].setSelected(!0), N();
  }
  const ue = (y, Y) => {
    const O = Math.sqrt(Math.pow(y.clientX - Y.clientX, 2) + Math.pow(y.clientY - Y.clientY, 2));
    return O < Ia ? Ia : O;
  };
  function Xe(y) {
    if (o) {
      if (y.preventDefault(), v.setPointerCapture(y.pointerId), F.set(y.pointerId, y), F.size == 1)
        A === n.creation ? ql(y) : A === n.drag && M(y);
      else if (F.size == 2) {
        X.isDragging = !1, u.boxes.forEach((Xt) => {
          Xt.isCreating = !1, Xt.isDragging = !1, Xt.isResizing = !1;
        });
        const Y = Array.from(F.values()), O = Y[0], J = Y[1], ie = ue(O, J), te = v.getBoundingClientRect(), be = (O.clientX + J.clientX) / 2 - te.left, wt = (O.clientY + J.clientY) / 2 - te.top;
        L.distance = ie, L.x = be, L.y = wt;
      }
    }
  }
  function M(y) {
    const Y = v.getBoundingClientRect(), O = y.clientX - Y.left, J = y.clientY - Y.top;
    let ie = !1;
    for (const [te, be] of u.boxes.entries()) {
      const wt = be.indexOfPointInsideHandle(O, J);
      if (wt >= 0) {
        ie = !0, Q(te), be.startResize(wt, y);
        return;
      }
    }
    for (const [te, be] of u.boxes.entries())
      if (be.isPointInsideBox(O, J)) {
        ie = !0, Q(te), be.startDrag(y);
        return;
      }
    b || Q(-1), ie || X.startDrag(y);
  }
  function ht(y) {
    o && (F.delete(y.pointerId), v.releasePointerCapture(y.pointerId), T("change"));
  }
  function Ie(y) {
    o && (F.delete(y.pointerId), v.releasePointerCapture(y.pointerId), T("change"));
  }
  function Ge(y) {
    if (o)
      if (y.preventDefault(), y.pointerType === "mouse") {
        if (!p || u === null || A !== n.drag)
          return;
        const Y = v.getBoundingClientRect(), O = y.clientX - Y.left, J = y.clientY - Y.top;
        for (const [ie, te] of u.boxes.entries()) {
          const be = te.indexOfPointInsideHandle(O, J);
          if (be >= 0) {
            t(9, v.style.cursor = te.resizeHandles[be].cursor, v);
            return;
          }
        }
        t(9, v.style.cursor = "default", v);
      } else {
        if (!F.has(y.pointerId))
          return;
        if (F.set(y.pointerId, y), F.size === 2) {
          const Y = Array.from(F.values()), O = Y[0], J = Y[1], ie = ue(O, J), te = v.getBoundingClientRect(), be = (O.clientX + J.clientX) / 2 - te.left, wt = (O.clientY + J.clientY) / 2 - te.top, Xt = parseFloat((X.scale * (ie / L.distance)).toFixed(2)), Jo = Xt < 1 ? 1 : Xt, Qo = Jo / X.scale;
          X.offsetX = L.x - (L.x - X.offsetX) * Qo, X.offsetY = L.y - (L.y - X.offsetY) * Qo;
          const C_ = be - L.x, y_ = wt - L.y;
          X.offsetX += C_, X.offsetY += y_, X.scale = Jo, L.x = be, L.y = wt, L.distance = ie, N();
        }
      }
  }
  function Je() {
    const y = v.width / R, Y = v.height / j, O = Math.min(y, Y);
    X.scale = O, X.offsetX = (v.width - R * O) / 2, X.offsetY = (v.height - j * O) / 2, N();
  }
  function Jt(y) {
    if (!B || y.target !== C || !o)
      return;
    const Y = y.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "c", "d", "e", " "])).has(Y) && (y.preventDefault(), y.stopPropagation()), Y) {
      case "delete":
        Wt();
        break;
      case "c":
        Sn();
        break;
      case "d":
        qn();
        break;
      case "e":
        mt();
        break;
      case " ":
        Je();
        break;
    }
  }
  function ei() {
    setTimeout(
      () => {
        C == null || C.focus();
      },
      0
    );
  }
  function Sl(y) {
    if (!o)
      return;
    y.preventDefault();
    const Y = 1 / (1 + y.deltaY / 1e3 * 0.5), O = parseFloat((X.scale * Y).toFixed(2)), J = O < 1 ? 1 : O, ie = v.getBoundingClientRect(), te = y.clientX - ie.left, be = y.clientY - ie.top, wt = (te - X.offsetX) / X.scale, Xt = (be - X.offsetY) / X.scale;
    X.offsetX = te - wt * J, X.offsetY = be - Xt * J, X.scale = J, N();
  }
  function ql(y) {
    const Y = v.getBoundingClientRect(), O = (y.clientX - Y.left - X.offsetX) / $ / X.scale, J = (y.clientY - Y.top - X.offsetY) / $ / X.scale;
    let ie;
    d.length > 0 ? ie = $i(d[0]) : b ? u.boxes.length > 0 ? ie = u.boxes[0].color : ie = ln[0] : ie = ln[u.boxes.length % ln.length];
    let te = new mo(N, D, X, F, ne, Z, re, I, "", O, J, O, J, ie, s, r, a, _, c, $, z);
    te.startCreating(y, Y.left, Y.top), b ? t(0, u.boxes = [te], u) : t(0, u.boxes = [te, ...u.boxes], u), Q(0), N(), T("change");
  }
  function Sn() {
    t(12, A = n.creation), t(9, v.style.cursor = "crosshair", v);
  }
  function qn() {
    t(12, A = n.drag), t(9, v.style.cursor = "default", v);
  }
  function D() {
    S >= 0 && S < u.boxes.length && (u.boxes[S].getArea() < 1 ? Wt() : (m || (W ? Bn() : t(14, ge = !0)), b && qn()));
  }
  function mt() {
    S >= 0 && S < u.boxes.length && !m && t(13, ee = !0);
  }
  function gt(y) {
    o && mt();
  }
  function zn(y) {
    t(13, ee = !1), ei();
    const { detail: Y } = y;
    let O = Y.label, J = Y.color, ie = Y.ret;
    if (S >= 0 && S < u.boxes.length) {
      let te = u.boxes[S];
      ie == 1 ? (te.label = O, te.color = $i(J), N(), T("change")) : ie == -1 && Wt();
    }
  }
  function zl(y) {
    t(14, ge = !1), ei();
    const { detail: Y } = y;
    let O = Y.label, J = Y.color, ie = Y.ret, te = Y.lock;
    if (S >= 0 && S < u.boxes.length) {
      let be = u.boxes[S];
      ie == 1 ? (t(16, W = te), _e.label = O, _e.color = J, be.label = O, be.color = $i(J), N(), T("change")) : Wt();
    }
  }
  function Qt(y) {
    t(15, ce = !1), ei();
    const { detail: Y } = y;
    let O = Y.label, J = Y.color, ie = Y.ret, te = Y.lock;
    ie == 1 && (t(16, W = te), _e.label = O, _e.color = J);
  }
  function Bn() {
    if (S >= 0 && S < u.boxes.length) {
      let y = u.boxes[S];
      y.label = _e.label, _e.color !== "" && (y.color = $i(_e.color)), N(), T("change");
    }
  }
  function Wt() {
    S >= 0 && S < u.boxes.length && (u.boxes.splice(S, 1), Q(-1), b && Sn(), T("change"));
  }
  function ti(y) {
    t(0, u.orientation = ((u.orientation + y) % 4 + 4) % 4, u), X.orientation = u.orientation, bt();
    for (const Y of u.boxes)
      Y.onRotate(y);
    N();
  }
  function bt() {
    if (v) {
      if ($ = 1, t(9, v.width = v.clientWidth, v), X.setRotatedImage(q), q !== null) {
        if (X.imageRotatedWidth > v.width)
          $ = v.width / X.imageRotatedWidth, R = Math.round(X.imageRotatedWidth * $), j = Math.round(X.imageRotatedHeight * $), ne = 0, Z = 0, re = R, I = j, t(9, v.height = j, v);
        else {
          R = X.imageRotatedWidth, j = X.imageRotatedHeight;
          var y = (v.width - R) / 2;
          ne = y, Z = 0, re = y + R, I = j, t(9, v.height = j, v);
        }
        X.imageWidth = R, X.imageHeight = j;
      } else
        ne = 0, Z = 0, re = v.width, I = v.height, t(9, v.height = v.clientHeight, v);
      if (X.resize(v.width, v.height, ne, Z), re > 0 && I > 0)
        for (const Y of u.boxes)
          Y.canvasXmin = ne, Y.canvasYmin = Z, Y.canvasXmax = re, Y.canvasYmax = I, Y.setScaleFactor($);
      N(), T("change");
    }
  }
  const pt = new ResizeObserver(bt);
  function ni() {
    for (let y = 0; y < u.boxes.length; y++) {
      let Y = u.boxes[y];
      if (!(Y instanceof mo)) {
        let O = "", J = "";
        Y.hasOwnProperty("color") ? (O = Y.color, Array.isArray(O) && O.length === 3 && (O = `rgb(${O[0]}, ${O[1]}, ${O[2]})`)) : O = ln[y % ln.length], Y.hasOwnProperty("label") && (J = Y.label), Y = new mo(N, D, X, F, ne, Z, re, I, J, Y.xmin, Y.ymin, Y.xmax, Y.ymax, O, s, r, a, _, c, Y.scaleFactor || 1, z), t(0, u.boxes[y] = Y, u);
      }
    }
  }
  function Go() {
    l !== null && (q === null || q.src != l) && (q = new Image(), q.src = l, q.onload = function() {
      bt(), N();
    });
  }
  Mg(() => {
    if (Array.isArray(f) && f.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let y = 0; y < f.length; y++) {
          let Y = ln[y % ln.length];
          d.push(vn(Y));
        }
      _e.label = f[0][0], _e.color = d[0];
    }
    E = v.getContext("2d"), pt.observe(v), S < 0 && u !== null && u.boxes.length > 0 && Q(0), Go(), bt(), N();
  });
  function c_(y) {
    La[y ? "unshift" : "push"](() => {
      v = y, t(9, v);
    });
  }
  const u_ = () => Sn(), f_ = () => qn(), d_ = () => Wt(), h_ = () => t(15, ce = !0), m_ = () => ti(-1), g_ = () => ti(1);
  function b_(y) {
    La[y ? "unshift" : "push"](() => {
      C = y, t(10, C);
    });
  }
  const p_ = () => C.focus();
  function w_(y) {
    go.call(this, i, y);
  }
  function v_(y) {
    go.call(this, i, y);
  }
  function k_(y) {
    go.call(this, i, y);
  }
  return i.$$set = (y) => {
    "imageUrl" in y && t(31, l = y.imageUrl), "interactive" in y && t(2, o = y.interactive), "boxAlpha" in y && t(32, s = y.boxAlpha), "boxMinSize" in y && t(33, r = y.boxMinSize), "handleSize" in y && t(34, a = y.handleSize), "boxThickness" in y && t(35, _ = y.boxThickness), "boxSelectedThickness" in y && t(36, c = y.boxSelectedThickness), "value" in y && t(0, u = y.value), "choices" in y && t(3, f = y.choices), "choicesColors" in y && t(4, d = y.choicesColors), "disableEditBoxes" in y && t(5, m = y.disableEditBoxes), "height" in y && t(6, h = y.height), "width" in y && t(7, g = y.width), "singleBox" in y && t(37, b = y.singleBox), "showRemoveButton" in y && t(1, w = y.showRemoveButton), "handlesCursor" in y && t(38, p = y.handlesCursor), "useDefaultLabel" in y && t(39, k = y.useDefaultLabel), "enableKeyboardShortcuts" in y && t(40, B = y.enableKeyboardShortcuts), "showBoxLabels" in y && t(41, z = y.showBoxLabels);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (X.orientation = u.orientation, Go(), ni(), bt(), N());
  }, [
    u,
    w,
    o,
    f,
    d,
    m,
    h,
    g,
    n,
    v,
    C,
    S,
    A,
    ee,
    ge,
    ce,
    W,
    Xe,
    ht,
    Ie,
    Ge,
    Jt,
    Sl,
    Sn,
    qn,
    gt,
    zn,
    zl,
    Qt,
    Wt,
    ti,
    l,
    s,
    r,
    a,
    _,
    c,
    b,
    p,
    k,
    B,
    z,
    c_,
    u_,
    f_,
    d_,
    h_,
    m_,
    g_,
    b_,
    p_,
    w_,
    v_,
    k_
  ];
}
class Xg extends Bg {
  constructor(e) {
    super(), Lg(
      this,
      e,
      Wg,
      Ag,
      Eg,
      {
        imageUrl: 31,
        interactive: 2,
        boxAlpha: 32,
        boxMinSize: 33,
        handleSize: 34,
        boxThickness: 35,
        boxSelectedThickness: 36,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 37,
        showRemoveButton: 1,
        handlesCursor: 38,
        useDefaultLabel: 39,
        enableKeyboardShortcuts: 40,
        showBoxLabels: 41
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Ig,
  add_flush_callback: Yg,
  bind: Hg,
  binding_callbacks: Tg,
  create_component: jg,
  destroy_component: Fg,
  init: Ug,
  mount_component: Vg,
  safe_not_equal: Og,
  transition_in: Ng,
  transition_out: $g
} = window.__gradio__svelte__internal, { createEventDispatcher: Pg } = window.__gradio__svelte__internal;
function Kg(i) {
  let e, t, n;
  function l(s) {
    i[22](s);
  }
  let o = {
    interactive: (
      /*interactive*/
      i[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      i[2]
    ),
    choices: (
      /*labelList*/
      i[3]
    ),
    choicesColors: (
      /*labelColors*/
      i[4]
    ),
    height: (
      /*height*/
      i[8]
    ),
    width: (
      /*width*/
      i[9]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[5]
    ),
    handleSize: (
      /*handleSize*/
      i[6]
    ),
    boxThickness: (
      /*boxThickness*/
      i[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[10]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[11]
    ),
    singleBox: (
      /*singleBox*/
      i[12]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[13]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[14]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[15]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      i[16]
    ),
    showBoxLabels: (
      /*showBoxLabels*/
      i[17]
    ),
    imageUrl: (
      /*resolved_src*/
      i[18]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (o.value = /*value*/
    i[0]), e = new Xg({ props: o }), Tg.push(() => Hg(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[23]
    ), {
      c() {
        jg(e.$$.fragment);
      },
      m(s, r) {
        Vg(e, s, r), n = !0;
      },
      p(s, [r]) {
        const a = {};
        r & /*interactive*/
        2 && (a.interactive = /*interactive*/
        s[1]), r & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        s[2]), r & /*labelList*/
        8 && (a.choices = /*labelList*/
        s[3]), r & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        s[4]), r & /*height*/
        256 && (a.height = /*height*/
        s[8]), r & /*width*/
        512 && (a.width = /*width*/
        s[9]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        s[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        s[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        s[7]), r & /*boxSelectedThickness*/
        1024 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        s[10]), r & /*disableEditBoxes*/
        2048 && (a.disableEditBoxes = /*disableEditBoxes*/
        s[11]), r & /*singleBox*/
        4096 && (a.singleBox = /*singleBox*/
        s[12]), r & /*showRemoveButton*/
        8192 && (a.showRemoveButton = /*showRemoveButton*/
        s[13]), r & /*handlesCursor*/
        16384 && (a.handlesCursor = /*handlesCursor*/
        s[14]), r & /*useDefaultLabel*/
        32768 && (a.useDefaultLabel = /*useDefaultLabel*/
        s[15]), r & /*enableKeyboardShortcuts*/
        65536 && (a.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        s[16]), r & /*showBoxLabels*/
        131072 && (a.showBoxLabels = /*showBoxLabels*/
        s[17]), r & /*resolved_src*/
        262144 && (a.imageUrl = /*resolved_src*/
        s[18]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], Yg(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Ng(e.$$.fragment, s), n = !0);
      },
      o(s) {
        $g(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Fg(e, s);
      }
    }
  );
}
function Zg(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: u } = e, { width: f } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: w } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: k } = e, { showBoxLabels: B } = e, z, v;
  const C = Pg();
  function E(S) {
    m = S, t(0, m);
  }
  const q = () => C("change");
  return i.$$set = (S) => {
    "src" in S && t(20, n = S.src), "interactive" in S && t(1, l = S.interactive), "boxesAlpha" in S && t(2, o = S.boxesAlpha), "labelList" in S && t(3, s = S.labelList), "labelColors" in S && t(4, r = S.labelColors), "boxMinSize" in S && t(5, a = S.boxMinSize), "handleSize" in S && t(6, _ = S.handleSize), "boxThickness" in S && t(7, c = S.boxThickness), "height" in S && t(8, u = S.height), "width" in S && t(9, f = S.width), "boxSelectedThickness" in S && t(10, d = S.boxSelectedThickness), "value" in S && t(0, m = S.value), "disableEditBoxes" in S && t(11, h = S.disableEditBoxes), "singleBox" in S && t(12, g = S.singleBox), "showRemoveButton" in S && t(13, b = S.showRemoveButton), "handlesCursor" in S && t(14, w = S.handlesCursor), "useDefaultLabel" in S && t(15, p = S.useDefaultLabel), "enableKeyboardShortcuts" in S && t(16, k = S.enableKeyboardShortcuts), "showBoxLabels" in S && t(17, B = S.showBoxLabels);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    3145728) {
      t(18, z = n), t(21, v = n);
      const S = n;
      q1(S).then((A) => {
        v === S && t(18, z = A);
      });
    }
  }, [
    m,
    l,
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    h,
    g,
    b,
    w,
    p,
    k,
    B,
    z,
    C,
    n,
    v,
    E,
    q
  ];
}
class Gg extends Ig {
  constructor(e) {
    super(), Ug(this, e, Zg, Kg, Og, {
      src: 20,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      height: 8,
      width: 9,
      boxSelectedThickness: 10,
      value: 0,
      disableEditBoxes: 11,
      singleBox: 12,
      showRemoveButton: 13,
      handlesCursor: 14,
      useDefaultLabel: 15,
      enableKeyboardShortcuts: 16,
      showBoxLabels: 17
    });
  }
}
class Ya {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Jg,
  add_flush_callback: fl,
  append: Xn,
  attr: gi,
  bind: dl,
  binding_callbacks: yi,
  bubble: _i,
  check_outros: sn,
  create_component: Lt,
  create_slot: Qg,
  destroy_component: Et,
  detach: mn,
  element: ki,
  empty: xg,
  get_all_dirty_from_scope: eb,
  get_slot_changes: tb,
  group_outros: an,
  init: nb,
  insert: gn,
  mount_component: Mt,
  noop: ib,
  safe_not_equal: lb,
  space: on,
  toggle_class: Ha,
  transition_in: G,
  transition_out: le,
  update_slot_base: ob
} = window.__gradio__svelte__internal, { createEventDispatcher: sb, tick: ab } = window.__gradio__svelte__internal;
function Ta(i) {
  let e, t;
  return e = new H1({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [rb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), l[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      16777216 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function rb(i) {
  let e, t;
  return e = new hl({
    props: {
      Icon: Ju,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function ja(i) {
  let e, t;
  return e = new kd({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[40]
      ),
      value: (
        /*value*/
        i[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[41]
  ), e.$on(
    "error",
    /*error_handler*/
    i[42]
  ), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[0] & /*value*/
      2 && (o.value = /*value*/
      n[1]), e.$set(o);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Fa(i) {
  let e, t, n;
  return t = new hl({
    props: { Icon: ir, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[38]
  ), {
    c() {
      e = ki("div"), Lt(t.$$.fragment);
    },
    m(l, o) {
      gn(l, e, o), Mt(t, e, null), n = !0;
    },
    p: ib,
    i(l) {
      n || (G(t.$$.fragment, l), n = !0);
    },
    o(l) {
      le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && mn(e), Et(t);
    }
  };
}
function Ua(i) {
  let e;
  const t = (
    /*#slots*/
    i[39].default
  ), n = Qg(
    t,
    i,
    /*$$scope*/
    i[55],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(l, o) {
      n && n.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o[1] & /*$$scope*/
      16777216) && ob(
        n,
        t,
        l,
        /*$$scope*/
        l[55],
        e ? tb(
          t,
          /*$$scope*/
          l[55],
          o,
          null
        ) : eb(
          /*$$scope*/
          l[55]
        ),
        null
      );
    },
    i(l) {
      e || (G(n, l), e = !0);
    },
    o(l) {
      le(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function _b(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && Ua(i)
  );
  return {
    c() {
      n && n.c(), e = xg();
    },
    m(l, o) {
      n && n.m(l, o), gn(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[1] === null ? n ? (n.p(l, o), o[0] & /*value*/
      2 && G(n, 1)) : (n = Ua(l), n.c(), G(n, 1), n.m(e.parentNode, e)) : n && (an(), le(n, 1, 1, () => {
        n = null;
      }), sn());
    },
    i(l) {
      t || (G(n), t = !0);
    },
    o(l) {
      le(n), t = !1;
    },
    d(l) {
      l && mn(e), n && n.d(l);
    }
  };
}
function Va(i) {
  let e, t;
  return e = new rm({
    props: {
      root: (
        /*root*/
        i[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        i[8]
      ),
      upload: (
        /*upload*/
        i[33]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[47]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[48]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[49]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[50]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[51]
  ), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      4 && (o.upload = /*upload*/
      n[33]), e.$set(o);
    },
    i(n) {
      t || (G(e.$$.fragment, n), t = !0);
    },
    o(n) {
      le(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Et(e, n);
    }
  };
}
function Oa(i) {
  let e, t, n, l;
  function o(r) {
    i[52](r);
  }
  let s = {
    height: (
      /*height*/
      i[17]
    ),
    width: (
      /*width*/
      i[18]
    ),
    boxesAlpha: (
      /*boxesAlpha*/
      i[12]
    ),
    labelList: (
      /*labelList*/
      i[13]
    ),
    labelColors: (
      /*labelColors*/
      i[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[15]
    ),
    interactive: (
      /*interactive*/
      i[7]
    ),
    handleSize: (
      /*handleSize*/
      i[16]
    ),
    boxThickness: (
      /*boxThickness*/
      i[19]
    ),
    singleBox: (
      /*singleBox*/
      i[21]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[20]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[22]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[23]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[24]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[28]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      i[29]
    ),
    showBoxLabels: (
      /*showBoxLabels*/
      i[30]
    ),
    src: (
      /*value*/
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (s.value = /*value*/
    i[1]), t = new Gg({ props: s }), yi.push(() => dl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      i[53]
    ), {
      c() {
        e = ki("div"), Lt(t.$$.fragment), gi(e, "class", "image-frame svelte-1gjdske"), Ha(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        gn(r, e, a), Mt(t, e, null), l = !0;
      },
      p(r, a) {
        const _ = {};
        a[0] & /*height*/
        131072 && (_.height = /*height*/
        r[17]), a[0] & /*width*/
        262144 && (_.width = /*width*/
        r[18]), a[0] & /*boxesAlpha*/
        4096 && (_.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (_.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (_.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (_.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (_.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (_.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        524288 && (_.boxThickness = /*boxThickness*/
        r[19]), a[0] & /*singleBox*/
        2097152 && (_.singleBox = /*singleBox*/
        r[21]), a[0] & /*disableEditBoxes*/
        1048576 && (_.disableEditBoxes = /*disableEditBoxes*/
        r[20]), a[0] & /*showRemoveButton*/
        4194304 && (_.showRemoveButton = /*showRemoveButton*/
        r[22]), a[0] & /*handlesCursor*/
        8388608 && (_.handlesCursor = /*handlesCursor*/
        r[23]), a[0] & /*boxSelectedThickness*/
        16777216 && (_.boxSelectedThickness = /*boxSelectedThickness*/
        r[24]), a[0] & /*useDefaultLabel*/
        268435456 && (_.useDefaultLabel = /*useDefaultLabel*/
        r[28]), a[0] & /*enableKeyboardShortcuts*/
        536870912 && (_.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        r[29]), a[0] & /*showBoxLabels*/
        1073741824 && (_.showBoxLabels = /*showBoxLabels*/
        r[30]), a[0] & /*value*/
        2 && (_.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, _.value = /*value*/
        r[1], fl(() => n = !1)), t.$set(_), (!l || a[0] & /*selectable*/
        32) && Ha(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (G(t.$$.fragment, r), l = !0);
      },
      o(r) {
        le(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && mn(e), Et(t);
      }
    }
  );
}
function Na(i) {
  let e, t, n;
  function l(s) {
    i[54](s);
  }
  let o = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[38]
    ),
    handle_select: (
      /*handle_select_source*/
      i[37]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (o.active_source = /*active_source*/
    i[0]), e = new Yd({ props: o }), yi.push(() => dl(e, "active_source", l)), {
      c() {
        Lt(e.$$.fragment);
      },
      m(s, r) {
        Mt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], fl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (G(e.$$.fragment, s), n = !0);
      },
      o(s) {
        le(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Et(e, s);
      }
    }
  );
}
function cb(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new Yc({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: lr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Ta(i)
  ), w = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && ja(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && Fa(i)
  );
  function k(q) {
    i[44](q);
  }
  function B(q) {
    i[45](q);
  }
  let z = {
    hidden: (
      /*value*/
      i[1] !== null || /*active_source*/
      i[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      i[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      i[6]
    ),
    max_file_size: (
      /*max_file_size*/
      i[25]
    ),
    disable_click: !/*sources*/
    i[4].includes("upload"),
    upload: (
      /*cli_upload*/
      i[26]
    ),
    stream_handler: (
      /*stream_handler*/
      i[27]
    ),
    $$slots: { default: [_b] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[31] !== void 0 && (z.uploading = /*uploading*/
  i[31]), /*dragging*/
  i[32] !== void 0 && (z.dragging = /*dragging*/
  i[32]), _ = new bh({ props: z }), i[43](_), yi.push(() => dl(_, "uploading", k)), yi.push(() => dl(_, "dragging", B)), _.$on(
    "load",
    /*handle_upload*/
    i[34]
  ), _.$on(
    "error",
    /*error_handler_1*/
    i[46]
  );
  let v = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Va(i)
  ), C = (
    /*value*/
    i[1] !== null && Oa(i)
  ), E = h && Na(i);
  return {
    c() {
      Lt(e.$$.fragment), t = on(), n = ki("div"), b && b.c(), l = on(), w && w.c(), o = on(), p && p.c(), s = on(), r = ki("div"), a = ki("div"), Lt(_.$$.fragment), f = on(), v && v.c(), d = on(), C && C.c(), m = on(), E && E.c(), gi(n, "class", "icon-buttons svelte-1gjdske"), gi(a, "class", "upload-container svelte-1gjdske"), gi(r, "data-testid", "image"), gi(r, "class", "image-container svelte-1gjdske");
    },
    m(q, S) {
      Mt(e, q, S), gn(q, t, S), gn(q, n, S), b && b.m(n, null), Xn(n, l), w && w.m(n, null), Xn(n, o), p && p.m(n, null), gn(q, s, S), gn(q, r, S), Xn(r, a), Mt(_, a, null), Xn(a, f), v && v.m(a, null), Xn(a, d), C && C.m(a, null), Xn(r, m), E && E.m(r, null), g = !0;
    },
    p(q, S) {
      const A = {};
      S[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      q[3]), S[0] & /*label*/
      4 && (A.label = /*label*/
      q[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      q[10] && /*value*/
      q[1] !== null ? b ? (b.p(q, S), S[0] & /*showDownloadButton, value*/
      1026 && G(b, 1)) : (b = Ta(q), b.c(), G(b, 1), b.m(n, l)) : b && (an(), le(b, 1, 1, () => {
        b = null;
      }), sn()), /*showShareButton*/
      q[9] && /*value*/
      q[1] !== null ? w ? (w.p(q, S), S[0] & /*showShareButton, value*/
      514 && G(w, 1)) : (w = ja(q), w.c(), G(w, 1), w.m(n, o)) : w && (an(), le(w, 1, 1, () => {
        w = null;
      }), sn()), /*showClearButton*/
      q[11] && /*value*/
      q[1] !== null && /*interactive*/
      q[7] ? p ? (p.p(q, S), S[0] & /*showClearButton, value, interactive*/
      2178 && G(p, 1)) : (p = Fa(q), p.c(), G(p, 1), p.m(n, null)) : p && (an(), le(p, 1, 1, () => {
        p = null;
      }), sn());
      const F = {};
      S[0] & /*value, active_source*/
      3 && (F.hidden = /*value*/
      q[1] !== null || /*active_source*/
      q[0] === "webcam"), S[0] & /*active_source*/
      1 && (F.filetype = /*active_source*/
      q[0] === "clipboard" ? "clipboard" : "image/*"), S[0] & /*root*/
      64 && (F.root = /*root*/
      q[6]), S[0] & /*max_file_size*/
      33554432 && (F.max_file_size = /*max_file_size*/
      q[25]), S[0] & /*sources*/
      16 && (F.disable_click = !/*sources*/
      q[4].includes("upload")), S[0] & /*cli_upload*/
      67108864 && (F.upload = /*cli_upload*/
      q[26]), S[0] & /*stream_handler*/
      134217728 && (F.stream_handler = /*stream_handler*/
      q[27]), S[0] & /*value*/
      2 | S[1] & /*$$scope*/
      16777216 && (F.$$scope = { dirty: S, ctx: q }), !c && S[1] & /*uploading*/
      1 && (c = !0, F.uploading = /*uploading*/
      q[31], fl(() => c = !1)), !u && S[1] & /*dragging*/
      2 && (u = !0, F.dragging = /*dragging*/
      q[32], fl(() => u = !1)), _.$set(F), /*value*/
      q[1] === null && /*active_source*/
      q[0] === "webcam" ? v ? (v.p(q, S), S[0] & /*value, active_source*/
      3 && G(v, 1)) : (v = Va(q), v.c(), G(v, 1), v.m(a, d)) : v && (an(), le(v, 1, 1, () => {
        v = null;
      }), sn()), /*value*/
      q[1] !== null ? C ? (C.p(q, S), S[0] & /*value*/
      2 && G(C, 1)) : (C = Oa(q), C.c(), G(C, 1), C.m(a, null)) : C && (an(), le(C, 1, 1, () => {
        C = null;
      }), sn()), S[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (q[4].length > 1 || /*sources*/
      q[4].includes("clipboard")) && /*value*/
      q[1] === null && /*interactive*/
      q[7]), h ? E ? (E.p(q, S), S[0] & /*sources, value, interactive*/
      146 && G(E, 1)) : (E = Na(q), E.c(), G(E, 1), E.m(r, null)) : E && (an(), le(E, 1, 1, () => {
        E = null;
      }), sn());
    },
    i(q) {
      g || (G(e.$$.fragment, q), G(b), G(w), G(p), G(_.$$.fragment, q), G(v), G(C), G(E), g = !0);
    },
    o(q) {
      le(e.$$.fragment, q), le(b), le(w), le(p), le(_.$$.fragment, q), le(v), le(C), le(E), g = !1;
    },
    d(q) {
      q && (mn(t), mn(n), mn(s), mn(r)), Et(e, q), b && b.d(), w && w.d(), p && p.d(), i[43](null), Et(_), v && v.d(), C && C.d(), E && E.d();
    }
  };
}
function ub(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(D, mt, gt, zn) {
    function zl(Qt) {
      return Qt instanceof gt ? Qt : new gt(function(Bn) {
        Bn(Qt);
      });
    }
    return new (gt || (gt = Promise))(function(Qt, Bn) {
      function Wt(pt) {
        try {
          bt(zn.next(pt));
        } catch (ni) {
          Bn(ni);
        }
      }
      function ti(pt) {
        try {
          bt(zn.throw(pt));
        } catch (ni) {
          Bn(ni);
        }
      }
      function bt(pt) {
        pt.done ? Qt(pt.value) : zl(pt.value).then(Wt, ti);
      }
      bt((zn = zn.apply(D, mt || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: f } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: w } = e, { labelColors: p } = e, { boxMinSize: k } = e, { handleSize: B } = e, { height: z } = e, { width: v } = e, { boxThickness: C } = e, { disableEditBoxes: E } = e, { singleBox: q } = e, { showRemoveButton: S } = e, { handlesCursor: A } = e, { boxSelectedThickness: F } = e, { max_file_size: X = null } = e, { cli_upload: ne } = e, { stream_handler: Z } = e, { useDefaultLabel: re } = e, { enableKeyboardShortcuts: I } = e, { showBoxLabels: $ } = e, R, j = !1, { active_source: ee = null } = e;
  function ge({ detail: D }) {
    t(1, s = new Ya()), t(1, s.image = D, s), W("upload");
  }
  function ce(D) {
    return o(this, void 0, void 0, function* () {
      const mt = yield R.load_files([new File([D], "webcam.png")]), gt = (mt == null ? void 0 : mt[0]) || null;
      gt ? (t(1, s = new Ya()), t(1, s.image = gt, s)) : t(1, s = null), yield ab(), W("change");
    });
  }
  const W = sb();
  let _e = !1;
  function L(D) {
    return o(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          R.paste_clipboard();
          break;
      }
    });
  }
  function T() {
    t(1, s = null), W("clear"), W("change");
  }
  const N = async (D) => D === null ? "" : `<img src="${await rd(D.image)}" />`;
  function Q(D) {
    _i.call(this, i, D);
  }
  function ue(D) {
    _i.call(this, i, D);
  }
  function Xe(D) {
    yi[D ? "unshift" : "push"](() => {
      R = D, t(33, R);
    });
  }
  function M(D) {
    j = D, t(31, j);
  }
  function ht(D) {
    _e = D, t(32, _e);
  }
  function Ie(D) {
    _i.call(this, i, D);
  }
  const Ge = (D) => ce(D.detail), Je = (D) => ce(D.detail);
  function Jt(D) {
    _i.call(this, i, D);
  }
  function ei(D) {
    _i.call(this, i, D);
  }
  const Sl = (D) => ce(D.detail);
  function ql(D) {
    s = D, t(1, s);
  }
  const Sn = () => W("change");
  function qn(D) {
    ee = D, t(0, ee), t(4, _);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, s = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, _ = D.sources), "selectable" in D && t(5, c = D.selectable), "root" in D && t(6, u = D.root), "interactive" in D && t(7, f = D.interactive), "i18n" in D && t(8, d = D.i18n), "showShareButton" in D && t(9, m = D.showShareButton), "showDownloadButton" in D && t(10, h = D.showDownloadButton), "showClearButton" in D && t(11, g = D.showClearButton), "boxesAlpha" in D && t(12, b = D.boxesAlpha), "labelList" in D && t(13, w = D.labelList), "labelColors" in D && t(14, p = D.labelColors), "boxMinSize" in D && t(15, k = D.boxMinSize), "handleSize" in D && t(16, B = D.handleSize), "height" in D && t(17, z = D.height), "width" in D && t(18, v = D.width), "boxThickness" in D && t(19, C = D.boxThickness), "disableEditBoxes" in D && t(20, E = D.disableEditBoxes), "singleBox" in D && t(21, q = D.singleBox), "showRemoveButton" in D && t(22, S = D.showRemoveButton), "handlesCursor" in D && t(23, A = D.handlesCursor), "boxSelectedThickness" in D && t(24, F = D.boxSelectedThickness), "max_file_size" in D && t(25, X = D.max_file_size), "cli_upload" in D && t(26, ne = D.cli_upload), "stream_handler" in D && t(27, Z = D.stream_handler), "useDefaultLabel" in D && t(28, re = D.useDefaultLabel), "enableKeyboardShortcuts" in D && t(29, I = D.enableKeyboardShortcuts), "showBoxLabels" in D && t(30, $ = D.showBoxLabels), "active_source" in D && t(0, ee = D.active_source), "$$scope" in D && t(55, l = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[1] & /*uploading*/
    1 && j && T(), i.$$.dirty[1] & /*dragging*/
    2 && W("drag", _e), i.$$.dirty[0] & /*active_source, sources*/
    17 && !ee && _ && t(0, ee = _[0]);
  }, [
    ee,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    m,
    h,
    g,
    b,
    w,
    p,
    k,
    B,
    z,
    v,
    C,
    E,
    q,
    S,
    A,
    F,
    X,
    ne,
    Z,
    re,
    I,
    $,
    j,
    _e,
    R,
    ge,
    ce,
    W,
    L,
    T,
    n,
    N,
    Q,
    ue,
    Xe,
    M,
    ht,
    Ie,
    Ge,
    Je,
    Jt,
    ei,
    Sl,
    ql,
    Sn,
    qn,
    l
  ];
}
class fb extends Jg {
  constructor(e) {
    super(), nb(
      this,
      e,
      ub,
      cb,
      lb,
      {
        value: 1,
        label: 2,
        show_label: 3,
        sources: 4,
        selectable: 5,
        root: 6,
        interactive: 7,
        i18n: 8,
        showShareButton: 9,
        showDownloadButton: 10,
        showClearButton: 11,
        boxesAlpha: 12,
        labelList: 13,
        labelColors: 14,
        boxMinSize: 15,
        handleSize: 16,
        height: 17,
        width: 18,
        boxThickness: 19,
        disableEditBoxes: 20,
        singleBox: 21,
        showRemoveButton: 22,
        handlesCursor: 23,
        boxSelectedThickness: 24,
        max_file_size: 25,
        cli_upload: 26,
        stream_handler: 27,
        useDefaultLabel: 28,
        enableKeyboardShortcuts: 29,
        showBoxLabels: 30,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: db,
  attr: el,
  detach: o_,
  element: s_,
  init: hb,
  insert: a_,
  noop: $a,
  safe_not_equal: mb,
  src_url_equal: Pa,
  toggle_class: Vt
} = window.__gradio__svelte__internal;
function Ka(i) {
  let e, t;
  return {
    c() {
      e = s_("img"), Pa(e.src, t = /*value*/
      i[0].url) || el(e, "src", t), el(e, "alt", "");
    },
    m(n, l) {
      a_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Pa(e.src, t = /*value*/
      n[0].url) && el(e, "src", t);
    },
    d(n) {
      n && o_(e);
    }
  };
}
function gb(i) {
  let e, t = (
    /*value*/
    i[0] && Ka(i)
  );
  return {
    c() {
      e = s_("div"), t && t.c(), el(e, "class", "container svelte-1sgcyba"), Vt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Vt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Vt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Vt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      a_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Ka(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Vt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Vt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Vt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Vt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: $a,
    o: $a,
    d(n) {
      n && o_(e), t && t.d();
    }
  };
}
function bb(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class WS extends db {
  constructor(e) {
    super(), hb(this, e, bb, gb, mb, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: pb,
  add_flush_callback: Za,
  assign: wb,
  bind: Ga,
  binding_callbacks: Ja,
  check_outros: vb,
  create_component: kn,
  destroy_component: Cn,
  detach: r_,
  empty: kb,
  flush: P,
  get_spread_object: Cb,
  get_spread_update: yb,
  group_outros: Sb,
  init: qb,
  insert: __,
  mount_component: yn,
  safe_not_equal: zb,
  space: Bb,
  transition_in: Rt,
  transition_out: At
} = window.__gradio__svelte__internal;
function Db(i) {
  let e, t;
  return e = new hu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Mb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      32768 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Lb(i) {
  let e, t;
  return e = new ur({
    props: {
      i18n: (
        /*gradio*/
        i[33].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      4 && (o.i18n = /*gradio*/
      n[33].i18n), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Eb(i) {
  let e, t;
  return e = new ur({
    props: {
      i18n: (
        /*gradio*/
        i[33].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      4 && (o.i18n = /*gradio*/
      n[33].i18n), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Mb(i) {
  let e, t;
  return e = new lr({}), {
    c() {
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Rb(i) {
  let e, t, n, l;
  const o = [Eb, Lb, Db], s = [];
  function r(a, _) {
    return (
      /*active_source*/
      a[35] === "upload" ? 0 : (
        /*active_source*/
        a[35] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = kb();
    },
    m(a, _) {
      s[e].m(a, _), __(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Sb(), At(s[c], 1, 1, () => {
        s[c] = null;
      }), vb(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Rt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Rt(t), l = !0);
    },
    o(a) {
      At(t), l = !1;
    },
    d(a) {
      a && r_(n), s[e].d(a);
    }
  };
}
function Ab(i) {
  let e, t, n, l, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        i[33].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      i[33].i18n
    ) },
    /*loading_status*/
    i[1]
  ];
  let a = {};
  for (let f = 0; f < r.length; f += 1)
    a = wb(a, r[f]);
  e = new k1({ props: a });
  function _(f) {
    i[36](f);
  }
  function c(f) {
    i[37](f);
  }
  let u = {
    selectable: (
      /*_selectable*/
      i[10]
    ),
    root: (
      /*root*/
      i[7]
    ),
    sources: (
      /*sources*/
      i[14]
    ),
    interactive: (
      /*interactive*/
      i[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      i[15]
    ),
    showShareButton: (
      /*show_share_button*/
      i[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      i[17]
    ),
    i18n: (
      /*gradio*/
      i[33].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      i[19]
    ),
    height: (
      /*height*/
      i[8]
    ),
    width: (
      /*width*/
      i[9]
    ),
    labelList: (
      /*label_list*/
      i[20]
    ),
    labelColors: (
      /*label_colors*/
      i[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      i[22]
    ),
    label: (
      /*label*/
      i[5]
    ),
    show_label: (
      /*show_label*/
      i[6]
    ),
    max_file_size: (
      /*gradio*/
      i[33].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      i[33].client.upload
    ),
    stream_handler: (
      /*gradio*/
      i[33].client.stream
    ),
    handleSize: (
      /*handle_size*/
      i[23]
    ),
    boxThickness: (
      /*box_thickness*/
      i[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      i[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      i[26]
    ),
    singleBox: (
      /*single_box*/
      i[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      i[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      i[29]
    ),
    useDefaultLabel: (
      /*use_default_label*/
      i[30]
    ),
    enableKeyboardShortcuts: (
      /*enable_keyboard_shortcuts*/
      i[31]
    ),
    showBoxLabels: (
      /*show_box_labels*/
      i[32]
    ),
    $$slots: { default: [Rb] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[35] !== void 0 && (u.active_source = /*active_source*/
    i[35]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new fb({ props: u }), Ja.push(() => Ga(n, "active_source", _)), Ja.push(() => Ga(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      i[38]
    ), n.$on(
      "edit",
      /*edit_handler*/
      i[39]
    ), n.$on(
      "clear",
      /*clear_handler*/
      i[40]
    ), n.$on(
      "drag",
      /*drag_handler*/
      i[41]
    ), n.$on(
      "upload",
      /*upload_handler*/
      i[42]
    ), n.$on(
      "select",
      /*select_handler*/
      i[43]
    ), n.$on(
      "share",
      /*share_handler*/
      i[44]
    ), n.$on(
      "error",
      /*error_handler*/
      i[45]
    ), {
      c() {
        kn(e.$$.fragment), t = Bb(), kn(n.$$.fragment);
      },
      m(f, d) {
        yn(e, f, d), __(f, t, d), yn(n, f, d), s = !0;
      },
      p(f, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        4 ? yb(r, [
          d[1] & /*gradio*/
          4 && {
            autoscroll: (
              /*gradio*/
              f[33].autoscroll
            )
          },
          d[1] & /*gradio*/
          4 && { i18n: (
            /*gradio*/
            f[33].i18n
          ) },
          d[0] & /*loading_status*/
          2 && Cb(
            /*loading_status*/
            f[1]
          )
        ]) : {};
        e.$set(m);
        const h = {};
        d[0] & /*_selectable*/
        1024 && (h.selectable = /*_selectable*/
        f[10]), d[0] & /*root*/
        128 && (h.root = /*root*/
        f[7]), d[0] & /*sources*/
        16384 && (h.sources = /*sources*/
        f[14]), d[0] & /*interactive*/
        262144 && (h.interactive = /*interactive*/
        f[18]), d[0] & /*show_download_button*/
        32768 && (h.showDownloadButton = /*show_download_button*/
        f[15]), d[0] & /*show_share_button*/
        65536 && (h.showShareButton = /*show_share_button*/
        f[16]), d[0] & /*show_clear_button*/
        131072 && (h.showClearButton = /*show_clear_button*/
        f[17]), d[1] & /*gradio*/
        4 && (h.i18n = /*gradio*/
        f[33].i18n), d[0] & /*boxes_alpha*/
        524288 && (h.boxesAlpha = /*boxes_alpha*/
        f[19]), d[0] & /*height*/
        256 && (h.height = /*height*/
        f[8]), d[0] & /*width*/
        512 && (h.width = /*width*/
        f[9]), d[0] & /*label_list*/
        1048576 && (h.labelList = /*label_list*/
        f[20]), d[0] & /*label_colors*/
        2097152 && (h.labelColors = /*label_colors*/
        f[21]), d[0] & /*box_min_size*/
        4194304 && (h.boxMinSize = /*box_min_size*/
        f[22]), d[0] & /*label*/
        32 && (h.label = /*label*/
        f[5]), d[0] & /*show_label*/
        64 && (h.show_label = /*show_label*/
        f[6]), d[1] & /*gradio*/
        4 && (h.max_file_size = /*gradio*/
        f[33].max_file_size), d[1] & /*gradio*/
        4 && (h.cli_upload = /*gradio*/
        f[33].client.upload), d[1] & /*gradio*/
        4 && (h.stream_handler = /*gradio*/
        f[33].client.stream), d[0] & /*handle_size*/
        8388608 && (h.handleSize = /*handle_size*/
        f[23]), d[0] & /*box_thickness*/
        16777216 && (h.boxThickness = /*box_thickness*/
        f[24]), d[0] & /*box_selected_thickness*/
        33554432 && (h.boxSelectedThickness = /*box_selected_thickness*/
        f[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (h.disableEditBoxes = /*disable_edit_boxes*/
        f[26]), d[0] & /*single_box*/
        134217728 && (h.singleBox = /*single_box*/
        f[27]), d[0] & /*show_remove_button*/
        268435456 && (h.showRemoveButton = /*show_remove_button*/
        f[28]), d[0] & /*handles_cursor*/
        536870912 && (h.handlesCursor = /*handles_cursor*/
        f[29]), d[0] & /*use_default_label*/
        1073741824 && (h.useDefaultLabel = /*use_default_label*/
        f[30]), d[1] & /*enable_keyboard_shortcuts*/
        1 && (h.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        f[31]), d[1] & /*show_box_labels*/
        2 && (h.showBoxLabels = /*show_box_labels*/
        f[32]), d[1] & /*$$scope, gradio, active_source*/
        32788 && (h.$$scope = { dirty: d, ctx: f }), !l && d[1] & /*active_source*/
        16 && (l = !0, h.active_source = /*active_source*/
        f[35], Za(() => l = !1)), !o && d[0] & /*value*/
        1 && (o = !0, h.value = /*value*/
        f[0], Za(() => o = !1)), n.$set(h);
      },
      i(f) {
        s || (Rt(e.$$.fragment, f), Rt(n.$$.fragment, f), s = !0);
      },
      o(f) {
        At(e.$$.fragment, f), At(n.$$.fragment, f), s = !1;
      },
      d(f) {
        f && r_(t), Cn(e, f), Cn(n, f);
      }
    }
  );
}
function Wb(i) {
  let e, t;
  return e = new T_({
    props: {
      visible: (
        /*visible*/
        i[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        i[34] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        i[2]
      ),
      elem_classes: (
        /*elem_classes*/
        i[3]
      ),
      width: (
        /*width*/
        i[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        i[11]
      ),
      scale: (
        /*scale*/
        i[12]
      ),
      min_width: (
        /*min_width*/
        i[13]
      ),
      $$slots: { default: [Ab] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      kn(e.$$.fragment);
    },
    m(n, l) {
      yn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), l[1] & /*dragging*/
      8 && (o.border_mode = /*dragging*/
      n[34] ? "focus" : "base"), l[0] & /*elem_id*/
      4 && (o.elem_id = /*elem_id*/
      n[2]), l[0] & /*elem_classes*/
      8 && (o.elem_classes = /*elem_classes*/
      n[3]), l[0] & /*width*/
      512 && (o.width = /*width*/
      n[9]), l[0] & /*container*/
      2048 && (o.container = /*container*/
      n[11]), l[0] & /*scale*/
      4096 && (o.scale = /*scale*/
      n[12]), l[0] & /*min_width*/
      8192 && (o.min_width = /*min_width*/
      n[13]), l[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | l[1] & /*$$scope, gradio, enable_keyboard_shortcuts, show_box_labels, active_source, dragging*/
      32799 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cn(e, n);
    }
  };
}
function Xb(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: u } = e, { _selectable: f = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: p } = e, { show_clear_button: k } = e, { interactive: B } = e, { boxes_alpha: z } = e, { label_list: v } = e, { label_colors: C } = e, { box_min_size: E } = e, { handle_size: q } = e, { box_thickness: S } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: F } = e, { single_box: X } = e, { show_remove_button: ne } = e, { handles_cursor: Z } = e, { use_default_label: re } = e, { enable_keyboard_shortcuts: I } = e, { show_box_labels: $ } = e, { gradio: R } = e, j, ee = null;
  function ge(M) {
    ee = M, t(35, ee);
  }
  function ce(M) {
    s = M, t(0, s);
  }
  const W = () => R.dispatch("change"), _e = () => R.dispatch("edit"), L = () => {
    R.dispatch("clear");
  }, T = ({ detail: M }) => t(34, j = M), N = () => R.dispatch("upload"), Q = ({ detail: M }) => R.dispatch("select", M), ue = ({ detail: M }) => R.dispatch("share", M), Xe = ({ detail: M }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), R.dispatch("error", M);
  };
  return i.$$set = (M) => {
    "elem_id" in M && t(2, n = M.elem_id), "elem_classes" in M && t(3, l = M.elem_classes), "visible" in M && t(4, o = M.visible), "value" in M && t(0, s = M.value), "label" in M && t(5, r = M.label), "show_label" in M && t(6, a = M.show_label), "root" in M && t(7, _ = M.root), "height" in M && t(8, c = M.height), "width" in M && t(9, u = M.width), "_selectable" in M && t(10, f = M._selectable), "container" in M && t(11, d = M.container), "scale" in M && t(12, m = M.scale), "min_width" in M && t(13, h = M.min_width), "loading_status" in M && t(1, g = M.loading_status), "sources" in M && t(14, b = M.sources), "show_download_button" in M && t(15, w = M.show_download_button), "show_share_button" in M && t(16, p = M.show_share_button), "show_clear_button" in M && t(17, k = M.show_clear_button), "interactive" in M && t(18, B = M.interactive), "boxes_alpha" in M && t(19, z = M.boxes_alpha), "label_list" in M && t(20, v = M.label_list), "label_colors" in M && t(21, C = M.label_colors), "box_min_size" in M && t(22, E = M.box_min_size), "handle_size" in M && t(23, q = M.handle_size), "box_thickness" in M && t(24, S = M.box_thickness), "box_selected_thickness" in M && t(25, A = M.box_selected_thickness), "disable_edit_boxes" in M && t(26, F = M.disable_edit_boxes), "single_box" in M && t(27, X = M.single_box), "show_remove_button" in M && t(28, ne = M.show_remove_button), "handles_cursor" in M && t(29, Z = M.handles_cursor), "use_default_label" in M && t(30, re = M.use_default_label), "enable_keyboard_shortcuts" in M && t(31, I = M.enable_keyboard_shortcuts), "show_box_labels" in M && t(32, $ = M.show_box_labels), "gradio" in M && t(33, R = M.gradio);
  }, [
    s,
    g,
    n,
    l,
    o,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    m,
    h,
    b,
    w,
    p,
    k,
    B,
    z,
    v,
    C,
    E,
    q,
    S,
    A,
    F,
    X,
    ne,
    Z,
    re,
    I,
    $,
    R,
    j,
    ee,
    ge,
    ce,
    W,
    _e,
    L,
    T,
    N,
    Q,
    ue,
    Xe
  ];
}
class XS extends pb {
  constructor(e) {
    super(), qb(
      this,
      e,
      Xb,
      Wb,
      zb,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        value: 0,
        label: 5,
        show_label: 6,
        root: 7,
        height: 8,
        width: 9,
        _selectable: 10,
        container: 11,
        scale: 12,
        min_width: 13,
        loading_status: 1,
        sources: 14,
        show_download_button: 15,
        show_share_button: 16,
        show_clear_button: 17,
        interactive: 18,
        boxes_alpha: 19,
        label_list: 20,
        label_colors: 21,
        box_min_size: 22,
        handle_size: 23,
        box_thickness: 24,
        box_selected_thickness: 25,
        disable_edit_boxes: 26,
        single_box: 27,
        show_remove_button: 28,
        handles_cursor: 29,
        use_default_label: 30,
        enable_keyboard_shortcuts: 31,
        show_box_labels: 32,
        gradio: 33
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), P();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), P();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), P();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), P();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), P();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), P();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), P();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), P();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), P();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), P();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), P();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), P();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), P();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), P();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), P();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), P();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), P();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), P();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), P();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), P();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), P();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), P();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), P();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), P();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), P();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), P();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), P();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), P();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), P();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), P();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), P();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), P();
  }
  get show_box_labels() {
    return this.$$.ctx[32];
  }
  set show_box_labels(e) {
    this.$$set({ show_box_labels: e }), P();
  }
  get gradio() {
    return this.$$.ctx[33];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), P();
  }
}
export {
  WS as BaseExample,
  XS as default
};
