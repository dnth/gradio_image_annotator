const {
  SvelteComponent: kc,
  assign: yc,
  create_slot: Cc,
  detach: Sc,
  element: qc,
  get_all_dirty_from_scope: zc,
  get_slot_changes: Bc,
  get_spread_update: Dc,
  init: Mc,
  insert: Lc,
  safe_not_equal: Ec,
  set_dynamic_element_data: js,
  set_style: Ge,
  toggle_class: St,
  transition_in: Ur,
  transition_out: Pr,
  update_slot_base: Rc
} = window.__gradio__svelte__internal;
function Wc(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), o = Cc(
    i,
    l,
    /*$$scope*/
    l[17],
    null
  );
  let s = [
    { "data-testid": (
      /*test_id*/
      l[7]
    ) },
    { id: (
      /*elem_id*/
      l[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      l[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < s.length; a += 1)
    r = yc(r, s[a]);
  return {
    c() {
      e = qc(
        /*tag*/
        l[14]
      ), o && o.c(), js(
        /*tag*/
        l[14]
      )(e, r), St(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), St(
        e,
        "padded",
        /*padding*/
        l[6]
      ), St(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), St(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), St(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), Ge(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), Ge(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), Ge(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), Ge(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), Ge(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), Ge(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), Ge(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      Lc(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && Rc(
        o,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? Bc(
          i,
          /*$$scope*/
          a[17],
          _,
          null
        ) : zc(
          /*$$scope*/
          a[17]
        ),
        null
      ), js(
        /*tag*/
        a[14]
      )(e, r = Dc(s, [
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
      ])), St(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), St(
        e,
        "padded",
        /*padding*/
        a[6]
      ), St(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), St(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), St(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), _ & /*height*/
      1 && Ge(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && Ge(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && Ge(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && Ge(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && Ge(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && Ge(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Ur(o, a), n = !0);
    },
    o(a) {
      Pr(o, a), n = !1;
    },
    d(a) {
      a && Sc(e), o && o.d(a);
    }
  };
}
function Ac(l) {
  let e, t = (
    /*tag*/
    l[14] && Wc(l)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, i) {
      t && t.m(n, i), e = !0;
    },
    p(n, [i]) {
      /*tag*/
      n[14] && t.p(n, i);
    },
    i(n) {
      e || (Ur(t, n), e = !0);
    },
    o(n) {
      Pr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Xc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: f = !0 } = e, { type: u = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: h = !1 } = e, { container: m = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: v = null } = e, { min_width: p = 0 } = e, y = u === "fieldset" ? "fieldset" : "div";
  const q = (D) => {
    if (D !== void 0) {
      if (typeof D == "number")
        return D + "px";
      if (typeof D == "string")
        return D;
    }
  };
  return l.$$set = (D) => {
    "height" in D && t(0, o = D.height), "width" in D && t(1, s = D.width), "elem_id" in D && t(2, r = D.elem_id), "elem_classes" in D && t(3, a = D.elem_classes), "variant" in D && t(4, _ = D.variant), "border_mode" in D && t(5, c = D.border_mode), "padding" in D && t(6, f = D.padding), "type" in D && t(16, u = D.type), "test_id" in D && t(7, d = D.test_id), "explicit_call" in D && t(8, h = D.explicit_call), "container" in D && t(9, m = D.container), "visible" in D && t(10, g = D.visible), "allow_overflow" in D && t(11, b = D.allow_overflow), "scale" in D && t(12, v = D.scale), "min_width" in D && t(13, p = D.min_width), "$$scope" in D && t(17, i = D.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    f,
    d,
    h,
    m,
    g,
    b,
    v,
    p,
    y,
    q,
    u,
    i,
    n
  ];
}
class Yc extends kc {
  constructor(e) {
    super(), Mc(this, e, Xc, Ac, Ec, {
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
  SvelteComponent: Hc,
  attr: Ic,
  create_slot: jc,
  detach: Tc,
  element: $c,
  get_all_dirty_from_scope: Fc,
  get_slot_changes: Oc,
  init: xc,
  insert: Vc,
  safe_not_equal: Nc,
  transition_in: Uc,
  transition_out: Pc,
  update_slot_base: Kc
} = window.__gradio__svelte__internal;
function Zc(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = jc(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = $c("div"), i && i.c(), Ic(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      Vc(o, e, s), i && i.m(e, null), t = !0;
    },
    p(o, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && Kc(
        i,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Oc(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : Fc(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Uc(i, o), t = !0);
    },
    o(o) {
      Pc(i, o), t = !1;
    },
    d(o) {
      o && Tc(e), i && i.d(o);
    }
  };
}
function Gc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (o) => {
    "$$scope" in o && t(0, i = o.$$scope);
  }, [i, n];
}
class Jc extends Hc {
  constructor(e) {
    super(), xc(this, e, Gc, Zc, Nc, {});
  }
}
const {
  SvelteComponent: Qc,
  attr: Ts,
  check_outros: eu,
  create_component: tu,
  create_slot: nu,
  destroy_component: lu,
  detach: pi,
  element: iu,
  empty: ou,
  get_all_dirty_from_scope: su,
  get_slot_changes: au,
  group_outros: ru,
  init: _u,
  insert: wi,
  mount_component: cu,
  safe_not_equal: uu,
  set_data: fu,
  space: du,
  text: hu,
  toggle_class: On,
  transition_in: Ll,
  transition_out: vi,
  update_slot_base: mu
} = window.__gradio__svelte__internal;
function $s(l) {
  let e, t;
  return e = new Jc({
    props: {
      $$slots: { default: [gu] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      tu(e.$$.fragment);
    },
    m(n, i) {
      cu(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i & /*$$scope, info*/
      10 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Ll(e.$$.fragment, n), t = !0);
    },
    o(n) {
      vi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      lu(e, n);
    }
  };
}
function gu(l) {
  let e;
  return {
    c() {
      e = hu(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      wi(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && fu(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && pi(e);
    }
  };
}
function bu(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[2].default
  ), s = nu(
    o,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && $s(l)
  );
  return {
    c() {
      e = iu("span"), s && s.c(), t = du(), r && r.c(), n = ou(), Ts(e, "data-testid", "block-info"), Ts(e, "class", "svelte-22c38v"), On(e, "sr-only", !/*show_label*/
      l[0]), On(e, "hide", !/*show_label*/
      l[0]), On(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, _) {
      wi(a, e, _), s && s.m(e, null), wi(a, t, _), r && r.m(a, _), wi(a, n, _), i = !0;
    },
    p(a, [_]) {
      s && s.p && (!i || _ & /*$$scope*/
      8) && mu(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        i ? au(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : su(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || _ & /*show_label*/
      1) && On(e, "sr-only", !/*show_label*/
      a[0]), (!i || _ & /*show_label*/
      1) && On(e, "hide", !/*show_label*/
      a[0]), (!i || _ & /*info*/
      2) && On(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, _), _ & /*info*/
      2 && Ll(r, 1)) : (r = $s(a), r.c(), Ll(r, 1), r.m(n.parentNode, n)) : r && (ru(), vi(r, 1, 1, () => {
        r = null;
      }), eu());
    },
    i(a) {
      i || (Ll(s, a), Ll(r), i = !0);
    },
    o(a) {
      vi(s, a), vi(r), i = !1;
    },
    d(a) {
      a && (pi(e), pi(t), pi(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function pu(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [o, s, n, i];
}
class Kr extends Qc {
  constructor(e) {
    super(), _u(this, e, pu, bu, uu, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: wu,
  append: oo,
  attr: Nl,
  create_component: vu,
  destroy_component: ku,
  detach: yu,
  element: Fs,
  init: Cu,
  insert: Su,
  mount_component: qu,
  safe_not_equal: zu,
  set_data: Bu,
  space: Du,
  text: Mu,
  toggle_class: Jt,
  transition_in: Lu,
  transition_out: Eu
} = window.__gradio__svelte__internal;
function Ru(l) {
  let e, t, n, i, o, s;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = Fs("label"), t = Fs("span"), vu(n.$$.fragment), i = Du(), o = Mu(
        /*label*/
        l[0]
      ), Nl(t, "class", "svelte-9gxdi0"), Nl(e, "for", ""), Nl(e, "data-testid", "block-label"), Nl(e, "class", "svelte-9gxdi0"), Jt(e, "hide", !/*show_label*/
      l[2]), Jt(e, "sr-only", !/*show_label*/
      l[2]), Jt(
        e,
        "float",
        /*float*/
        l[4]
      ), Jt(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      Su(r, e, a), oo(e, t), qu(n, t, null), oo(e, i), oo(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Bu(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Jt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Jt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Jt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Jt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (Lu(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Eu(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && yu(e), ku(n);
    }
  };
}
function Wu(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, o, s, r];
}
class Au extends wu {
  constructor(e) {
    super(), Cu(this, e, Wu, Ru, zu, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Xu,
  append: is,
  attr: Ft,
  bubble: Yu,
  create_component: Hu,
  destroy_component: Iu,
  detach: Zr,
  element: os,
  init: ju,
  insert: Gr,
  listen: Tu,
  mount_component: $u,
  safe_not_equal: Fu,
  set_data: Ou,
  set_style: xn,
  space: xu,
  text: Vu,
  toggle_class: Te,
  transition_in: Nu,
  transition_out: Uu
} = window.__gradio__svelte__internal;
function Os(l) {
  let e, t;
  return {
    c() {
      e = os("span"), t = Vu(
        /*label*/
        l[1]
      ), Ft(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      Gr(n, e, i), is(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Ou(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Zr(e);
    }
  };
}
function Pu(l) {
  let e, t, n, i, o, s, r, a = (
    /*show_label*/
    l[2] && Os(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = os("button"), a && a.c(), t = xu(), n = os("div"), Hu(i.$$.fragment), Ft(n, "class", "svelte-1lrphxw"), Te(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), Te(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), Te(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], Ft(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), Ft(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), Ft(
        e,
        "title",
        /*label*/
        l[1]
      ), Ft(e, "class", "svelte-1lrphxw"), Te(
        e,
        "pending",
        /*pending*/
        l[3]
      ), Te(
        e,
        "padded",
        /*padded*/
        l[5]
      ), Te(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), Te(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), xn(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), xn(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), xn(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(_, c) {
      Gr(_, e, c), a && a.m(e, null), is(e, t), is(e, n), $u(i, n, null), o = !0, s || (r = Tu(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = Os(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Te(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && Te(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && Te(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && Ft(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && Ft(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && Ft(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && Te(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && Te(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && Te(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && Te(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), c & /*disabled, _color*/
      4224 && xn(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[12] ? (
        /*_color*/
        _[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && xn(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      )), c & /*offset*/
      2048 && xn(
        e,
        "margin-left",
        /*offset*/
        _[11] + "px"
      );
    },
    i(_) {
      o || (Nu(i.$$.fragment, _), o = !0);
    },
    o(_) {
      Uu(i.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && Zr(e), a && a.d(), Iu(i), s = !1, r();
    }
  };
}
function Ku(l, e, t) {
  let n, { Icon: i } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: f = !1 } = e, { hasPopup: u = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: m = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(v) {
    Yu.call(this, l, v);
  }
  return l.$$set = (v) => {
    "Icon" in v && t(0, i = v.Icon), "label" in v && t(1, o = v.label), "show_label" in v && t(2, s = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, _ = v.padded), "highlight" in v && t(6, c = v.highlight), "disabled" in v && t(7, f = v.disabled), "hasPopup" in v && t(8, u = v.hasPopup), "color" in v && t(13, d = v.color), "transparent" in v && t(9, h = v.transparent), "background" in v && t(10, m = v.background), "offset" in v && t(11, g = v.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    i,
    o,
    s,
    r,
    a,
    _,
    c,
    f,
    u,
    h,
    m,
    g,
    n,
    d,
    b
  ];
}
class Fl extends Xu {
  constructor(e) {
    super(), ju(this, e, Ku, Pu, Fu, {
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
  SvelteComponent: Zu,
  append: Gu,
  attr: so,
  binding_callbacks: Ju,
  create_slot: Qu,
  detach: ef,
  element: xs,
  get_all_dirty_from_scope: tf,
  get_slot_changes: nf,
  init: lf,
  insert: of,
  safe_not_equal: sf,
  toggle_class: Qt,
  transition_in: af,
  transition_out: rf,
  update_slot_base: _f
} = window.__gradio__svelte__internal;
function cf(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), o = Qu(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = xs("div"), t = xs("div"), o && o.c(), so(t, "class", "icon svelte-3w3rth"), so(e, "class", "empty svelte-3w3rth"), so(e, "aria-label", "Empty value"), Qt(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), Qt(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), Qt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), Qt(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(s, r) {
      of(s, e, r), Gu(e, t), o && o.m(t, null), l[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && _f(
        o,
        i,
        s,
        /*$$scope*/
        s[4],
        n ? nf(
          i,
          /*$$scope*/
          s[4],
          r,
          null
        ) : tf(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Qt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Qt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Qt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Qt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (af(o, s), n = !0);
    },
    o(s) {
      rf(o, s), n = !1;
    },
    d(s) {
      s && ef(e), o && o.d(s), l[6](null);
    }
  };
}
function uf(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(f) {
    var u;
    if (!f) return !1;
    const { height: d } = f.getBoundingClientRect(), { height: h } = ((u = f.parentElement) === null || u === void 0 ? void 0 : u.getBoundingClientRect()) || { height: d };
    return d > h + 2;
  }
  function c(f) {
    Ju[f ? "unshift" : "push"](() => {
      a = f, t(2, a);
    });
  }
  return l.$$set = (f) => {
    "size" in f && t(0, s = f.size), "unpadded_box" in f && t(1, r = f.unpadded_box), "$$scope" in f && t(4, o = f.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*el*/
    4 && t(3, n = _(a));
  }, [s, r, a, n, o, i, c];
}
class ff extends Zu {
  constructor(e) {
    super(), lf(this, e, uf, cf, sf, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Lp,
  append: Ep,
  attr: Rp,
  detach: Wp,
  init: Ap,
  insert: Xp,
  noop: Yp,
  safe_not_equal: Hp,
  svg_element: Ip
} = window.__gradio__svelte__internal, {
  SvelteComponent: jp,
  append: Tp,
  attr: $p,
  detach: Fp,
  init: Op,
  insert: xp,
  noop: Vp,
  safe_not_equal: Np,
  svg_element: Up
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pp,
  append: Kp,
  attr: Zp,
  detach: Gp,
  init: Jp,
  insert: Qp,
  noop: ew,
  safe_not_equal: tw,
  svg_element: nw
} = window.__gradio__svelte__internal, {
  SvelteComponent: df,
  append: Vs,
  attr: $e,
  detach: hf,
  init: mf,
  insert: gf,
  noop: ao,
  safe_not_equal: bf,
  svg_element: ro
} = window.__gradio__svelte__internal;
function pf(l) {
  let e, t, n;
  return {
    c() {
      e = ro("svg"), t = ro("path"), n = ro("circle"), $e(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), $e(n, "cx", "12"), $e(n, "cy", "13"), $e(n, "r", "4"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "fill", "none"), $e(e, "stroke", "currentColor"), $e(e, "stroke-width", "1.5"), $e(e, "stroke-linecap", "round"), $e(e, "stroke-linejoin", "round"), $e(e, "class", "feather feather-camera");
    },
    m(i, o) {
      gf(i, e, o), Vs(e, t), Vs(e, n);
    },
    p: ao,
    i: ao,
    o: ao,
    d(i) {
      i && hf(e);
    }
  };
}
class wf extends df {
  constructor(e) {
    super(), mf(this, e, null, pf, bf, {});
  }
}
const {
  SvelteComponent: lw,
  append: iw,
  attr: ow,
  detach: sw,
  init: aw,
  insert: rw,
  noop: _w,
  safe_not_equal: cw,
  svg_element: uw
} = window.__gradio__svelte__internal, {
  SvelteComponent: fw,
  append: dw,
  attr: hw,
  detach: mw,
  init: gw,
  insert: bw,
  noop: pw,
  safe_not_equal: ww,
  svg_element: vw
} = window.__gradio__svelte__internal, {
  SvelteComponent: kw,
  append: yw,
  attr: Cw,
  detach: Sw,
  init: qw,
  insert: zw,
  noop: Bw,
  safe_not_equal: Dw,
  svg_element: Mw
} = window.__gradio__svelte__internal, {
  SvelteComponent: vf,
  append: kf,
  attr: mt,
  detach: yf,
  init: Cf,
  insert: Sf,
  noop: _o,
  safe_not_equal: qf,
  svg_element: Ns
} = window.__gradio__svelte__internal;
function zf(l) {
  let e, t;
  return {
    c() {
      e = Ns("svg"), t = Ns("circle"), mt(t, "cx", "12"), mt(t, "cy", "12"), mt(t, "r", "10"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "stroke-width", "1.5"), mt(e, "stroke-linecap", "round"), mt(e, "stroke-linejoin", "round"), mt(e, "class", "feather feather-circle");
    },
    m(n, i) {
      Sf(n, e, i), kf(e, t);
    },
    p: _o,
    i: _o,
    o: _o,
    d(n) {
      n && yf(e);
    }
  };
}
class Bf extends vf {
  constructor(e) {
    super(), Cf(this, e, null, zf, qf, {});
  }
}
const {
  SvelteComponent: Df,
  append: co,
  attr: gt,
  detach: Mf,
  init: Lf,
  insert: Ef,
  noop: uo,
  safe_not_equal: Rf,
  set_style: qt,
  svg_element: Ul
} = window.__gradio__svelte__internal;
function Wf(l) {
  let e, t, n, i;
  return {
    c() {
      e = Ul("svg"), t = Ul("g"), n = Ul("path"), i = Ul("path"), gt(n, "d", "M18,6L6.087,17.913"), qt(n, "fill", "none"), qt(n, "fill-rule", "nonzero"), qt(n, "stroke-width", "2px"), gt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), gt(i, "d", "M4.364,4.364L19.636,19.636"), qt(i, "fill", "none"), qt(i, "fill-rule", "nonzero"), qt(i, "stroke-width", "2px"), gt(e, "width", "100%"), gt(e, "height", "100%"), gt(e, "viewBox", "0 0 24 24"), gt(e, "version", "1.1"), gt(e, "xmlns", "http://www.w3.org/2000/svg"), gt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), gt(e, "xml:space", "preserve"), gt(e, "stroke", "currentColor"), qt(e, "fill-rule", "evenodd"), qt(e, "clip-rule", "evenodd"), qt(e, "stroke-linecap", "round"), qt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Ef(o, e, s), co(e, t), co(t, n), co(e, i);
    },
    p: uo,
    i: uo,
    o: uo,
    d(o) {
      o && Mf(e);
    }
  };
}
class Jr extends Df {
  constructor(e) {
    super(), Lf(this, e, null, Wf, Rf, {});
  }
}
const {
  SvelteComponent: Lw,
  append: Ew,
  attr: Rw,
  detach: Ww,
  init: Aw,
  insert: Xw,
  noop: Yw,
  safe_not_equal: Hw,
  svg_element: Iw
} = window.__gradio__svelte__internal, {
  SvelteComponent: jw,
  append: Tw,
  attr: $w,
  detach: Fw,
  init: Ow,
  insert: xw,
  noop: Vw,
  safe_not_equal: Nw,
  svg_element: Uw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Af,
  append: Xf,
  attr: kl,
  detach: Yf,
  init: Hf,
  insert: If,
  noop: fo,
  safe_not_equal: jf,
  svg_element: Us
} = window.__gradio__svelte__internal;
function Tf(l) {
  let e, t;
  return {
    c() {
      e = Us("svg"), t = Us("path"), kl(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), kl(t, "fill", "currentColor"), kl(e, "id", "icon"), kl(e, "xmlns", "http://www.w3.org/2000/svg"), kl(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      If(n, e, i), Xf(e, t);
    },
    p: fo,
    i: fo,
    o: fo,
    d(n) {
      n && Yf(e);
    }
  };
}
class $f extends Af {
  constructor(e) {
    super(), Hf(this, e, null, Tf, jf, {});
  }
}
const {
  SvelteComponent: Pw,
  append: Kw,
  attr: Zw,
  detach: Gw,
  init: Jw,
  insert: Qw,
  noop: ev,
  safe_not_equal: tv,
  svg_element: nv
} = window.__gradio__svelte__internal, {
  SvelteComponent: lv,
  append: iv,
  attr: ov,
  detach: sv,
  init: av,
  insert: rv,
  noop: _v,
  safe_not_equal: cv,
  svg_element: uv
} = window.__gradio__svelte__internal, {
  SvelteComponent: fv,
  append: dv,
  attr: hv,
  detach: mv,
  init: gv,
  insert: bv,
  noop: pv,
  safe_not_equal: wv,
  svg_element: vv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ff,
  append: Of,
  attr: Vn,
  detach: xf,
  init: Vf,
  insert: Nf,
  noop: ho,
  safe_not_equal: Uf,
  svg_element: Ps
} = window.__gradio__svelte__internal;
function Pf(l) {
  let e, t;
  return {
    c() {
      e = Ps("svg"), t = Ps("path"), Vn(t, "fill", "currentColor"), Vn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Vn(e, "xmlns", "http://www.w3.org/2000/svg"), Vn(e, "width", "100%"), Vn(e, "height", "100%"), Vn(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Nf(n, e, i), Of(e, t);
    },
    p: ho,
    i: ho,
    o: ho,
    d(n) {
      n && xf(e);
    }
  };
}
class Kf extends Ff {
  constructor(e) {
    super(), Vf(this, e, null, Pf, Uf, {});
  }
}
const {
  SvelteComponent: Zf,
  append: Gf,
  attr: Nn,
  detach: Jf,
  init: Qf,
  insert: ed,
  noop: mo,
  safe_not_equal: td,
  svg_element: Ks
} = window.__gradio__svelte__internal;
function nd(l) {
  let e, t;
  return {
    c() {
      e = Ks("svg"), t = Ks("path"), Nn(t, "d", "M5 8l4 4 4-4z"), Nn(e, "class", "dropdown-arrow svelte-145leq6"), Nn(e, "xmlns", "http://www.w3.org/2000/svg"), Nn(e, "width", "100%"), Nn(e, "height", "100%"), Nn(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      ed(n, e, i), Gf(e, t);
    },
    p: mo,
    i: mo,
    o: mo,
    d(n) {
      n && Jf(e);
    }
  };
}
class qs extends Zf {
  constructor(e) {
    super(), Qf(this, e, null, nd, td, {});
  }
}
const {
  SvelteComponent: kv,
  append: yv,
  attr: Cv,
  detach: Sv,
  init: qv,
  insert: zv,
  noop: Bv,
  safe_not_equal: Dv,
  svg_element: Mv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Lv,
  append: Ev,
  attr: Rv,
  detach: Wv,
  init: Av,
  insert: Xv,
  noop: Yv,
  safe_not_equal: Hv,
  svg_element: Iv
} = window.__gradio__svelte__internal, {
  SvelteComponent: jv,
  append: Tv,
  attr: $v,
  detach: Fv,
  init: Ov,
  insert: xv,
  noop: Vv,
  safe_not_equal: Nv,
  svg_element: Uv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pv,
  append: Kv,
  attr: Zv,
  detach: Gv,
  init: Jv,
  insert: Qv,
  noop: e4,
  safe_not_equal: t4,
  svg_element: n4
} = window.__gradio__svelte__internal, {
  SvelteComponent: l4,
  append: i4,
  attr: o4,
  detach: s4,
  init: a4,
  insert: r4,
  noop: _4,
  safe_not_equal: c4,
  svg_element: u4
} = window.__gradio__svelte__internal, {
  SvelteComponent: f4,
  append: d4,
  attr: h4,
  detach: m4,
  init: g4,
  insert: b4,
  noop: p4,
  safe_not_equal: w4,
  svg_element: v4
} = window.__gradio__svelte__internal, {
  SvelteComponent: k4,
  append: y4,
  attr: C4,
  detach: S4,
  init: q4,
  insert: z4,
  noop: B4,
  safe_not_equal: D4,
  svg_element: M4
} = window.__gradio__svelte__internal, {
  SvelteComponent: ld,
  append: go,
  attr: be,
  detach: id,
  init: od,
  insert: sd,
  noop: bo,
  safe_not_equal: ad,
  svg_element: Pl
} = window.__gradio__svelte__internal;
function rd(l) {
  let e, t, n, i;
  return {
    c() {
      e = Pl("svg"), t = Pl("rect"), n = Pl("circle"), i = Pl("polyline"), be(t, "x", "3"), be(t, "y", "3"), be(t, "width", "18"), be(t, "height", "18"), be(t, "rx", "2"), be(t, "ry", "2"), be(n, "cx", "8.5"), be(n, "cy", "8.5"), be(n, "r", "1.5"), be(i, "points", "21 15 16 10 5 21"), be(e, "xmlns", "http://www.w3.org/2000/svg"), be(e, "width", "100%"), be(e, "height", "100%"), be(e, "viewBox", "0 0 24 24"), be(e, "fill", "none"), be(e, "stroke", "currentColor"), be(e, "stroke-width", "1.5"), be(e, "stroke-linecap", "round"), be(e, "stroke-linejoin", "round"), be(e, "class", "feather feather-image");
    },
    m(o, s) {
      sd(o, e, s), go(e, t), go(e, n), go(e, i);
    },
    p: bo,
    i: bo,
    o: bo,
    d(o) {
      o && id(e);
    }
  };
}
let Qr = class extends ld {
  constructor(e) {
    super(), od(this, e, null, rd, ad, {});
  }
};
const {
  SvelteComponent: _d,
  append: cd,
  attr: Kl,
  detach: ud,
  init: fd,
  insert: dd,
  noop: po,
  safe_not_equal: hd,
  svg_element: Zs
} = window.__gradio__svelte__internal;
function md(l) {
  let e, t;
  return {
    c() {
      e = Zs("svg"), t = Zs("path"), Kl(t, "fill", "currentColor"), Kl(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Kl(e, "xmlns", "http://www.w3.org/2000/svg"), Kl(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      dd(n, e, i), cd(e, t);
    },
    p: po,
    i: po,
    o: po,
    d(n) {
      n && ud(e);
    }
  };
}
class e_ extends _d {
  constructor(e) {
    super(), fd(this, e, null, md, hd, {});
  }
}
const {
  SvelteComponent: E4,
  append: R4,
  attr: W4,
  detach: A4,
  init: X4,
  insert: Y4,
  noop: H4,
  safe_not_equal: I4,
  svg_element: j4
} = window.__gradio__svelte__internal, {
  SvelteComponent: T4,
  append: $4,
  attr: F4,
  detach: O4,
  init: x4,
  insert: V4,
  noop: N4,
  safe_not_equal: U4,
  svg_element: P4
} = window.__gradio__svelte__internal, {
  SvelteComponent: K4,
  append: Z4,
  attr: G4,
  detach: J4,
  init: Q4,
  insert: e3,
  noop: t3,
  safe_not_equal: n3,
  svg_element: l3
} = window.__gradio__svelte__internal, {
  SvelteComponent: i3,
  append: o3,
  attr: s3,
  detach: a3,
  init: r3,
  insert: _3,
  noop: c3,
  safe_not_equal: u3,
  svg_element: f3
} = window.__gradio__svelte__internal, {
  SvelteComponent: d3,
  append: h3,
  attr: m3,
  detach: g3,
  init: b3,
  insert: p3,
  noop: w3,
  safe_not_equal: v3,
  svg_element: k3
} = window.__gradio__svelte__internal, {
  SvelteComponent: gd,
  append: Zl,
  attr: pe,
  detach: bd,
  init: pd,
  insert: wd,
  noop: wo,
  safe_not_equal: vd,
  svg_element: yl
} = window.__gradio__svelte__internal;
function kd(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = yl("svg"), t = yl("path"), n = yl("path"), i = yl("line"), o = yl("line"), pe(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), pe(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), pe(i, "x1", "12"), pe(i, "y1", "19"), pe(i, "x2", "12"), pe(i, "y2", "23"), pe(o, "x1", "8"), pe(o, "y1", "23"), pe(o, "x2", "16"), pe(o, "y2", "23"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "width", "100%"), pe(e, "height", "100%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "fill", "none"), pe(e, "stroke", "currentColor"), pe(e, "stroke-width", "2"), pe(e, "stroke-linecap", "round"), pe(e, "stroke-linejoin", "round"), pe(e, "class", "feather feather-mic");
    },
    m(s, r) {
      wd(s, e, r), Zl(e, t), Zl(e, n), Zl(e, i), Zl(e, o);
    },
    p: wo,
    i: wo,
    o: wo,
    d(s) {
      s && bd(e);
    }
  };
}
class yd extends gd {
  constructor(e) {
    super(), pd(this, e, null, kd, vd, {});
  }
}
const {
  SvelteComponent: y3,
  append: C3,
  attr: S3,
  detach: q3,
  init: z3,
  insert: B3,
  noop: D3,
  safe_not_equal: M3,
  svg_element: L3
} = window.__gradio__svelte__internal, {
  SvelteComponent: E3,
  append: R3,
  attr: W3,
  detach: A3,
  init: X3,
  insert: Y3,
  noop: H3,
  safe_not_equal: I3,
  svg_element: j3
} = window.__gradio__svelte__internal, {
  SvelteComponent: T3,
  append: $3,
  attr: F3,
  detach: O3,
  init: x3,
  insert: V3,
  noop: N3,
  safe_not_equal: U3,
  svg_element: P3
} = window.__gradio__svelte__internal, {
  SvelteComponent: K3,
  append: Z3,
  attr: G3,
  detach: J3,
  init: Q3,
  insert: e5,
  noop: t5,
  safe_not_equal: n5,
  svg_element: l5
} = window.__gradio__svelte__internal, {
  SvelteComponent: i5,
  append: o5,
  attr: s5,
  detach: a5,
  init: r5,
  insert: _5,
  noop: c5,
  safe_not_equal: u5,
  svg_element: f5
} = window.__gradio__svelte__internal, {
  SvelteComponent: d5,
  append: h5,
  attr: m5,
  detach: g5,
  init: b5,
  insert: p5,
  noop: w5,
  safe_not_equal: v5,
  svg_element: k5
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cd,
  append: Gs,
  attr: it,
  detach: Sd,
  init: qd,
  insert: zd,
  noop: vo,
  safe_not_equal: Bd,
  set_style: Dd,
  svg_element: ko
} = window.__gradio__svelte__internal;
function Md(l) {
  let e, t, n;
  return {
    c() {
      e = ko("svg"), t = ko("polyline"), n = ko("path"), it(t, "points", "1 4 1 10 7 10"), it(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), it(e, "xmlns", "http://www.w3.org/2000/svg"), it(e, "width", "100%"), it(e, "height", "100%"), it(e, "viewBox", "0 0 24 24"), it(e, "fill", "none"), it(e, "stroke", "currentColor"), it(e, "stroke-width", "2"), it(e, "stroke-linecap", "round"), it(e, "stroke-linejoin", "round"), it(e, "class", "feather feather-rotate-ccw"), Dd(e, "transform", "rotateY(180deg)");
    },
    m(i, o) {
      zd(i, e, o), Gs(e, t), Gs(e, n);
    },
    p: vo,
    i: vo,
    o: vo,
    d(i) {
      i && Sd(e);
    }
  };
}
class Ld extends Cd {
  constructor(e) {
    super(), qd(this, e, null, Md, Bd, {});
  }
}
const {
  SvelteComponent: y5,
  append: C5,
  attr: S5,
  detach: q5,
  init: z5,
  insert: B5,
  noop: D5,
  safe_not_equal: M5,
  svg_element: L5
} = window.__gradio__svelte__internal, {
  SvelteComponent: E5,
  append: R5,
  attr: W5,
  detach: A5,
  init: X5,
  insert: Y5,
  noop: H5,
  safe_not_equal: I5,
  svg_element: j5
} = window.__gradio__svelte__internal, {
  SvelteComponent: T5,
  append: $5,
  attr: F5,
  detach: O5,
  init: x5,
  insert: V5,
  noop: N5,
  safe_not_equal: U5,
  svg_element: P5
} = window.__gradio__svelte__internal, {
  SvelteComponent: K5,
  append: Z5,
  attr: G5,
  detach: J5,
  init: Q5,
  insert: ek,
  noop: tk,
  safe_not_equal: nk,
  svg_element: lk
} = window.__gradio__svelte__internal, {
  SvelteComponent: ik,
  append: ok,
  attr: sk,
  detach: ak,
  init: rk,
  insert: _k,
  noop: ck,
  safe_not_equal: uk,
  svg_element: fk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ed,
  append: Rd,
  attr: Fe,
  detach: Wd,
  init: Ad,
  insert: Xd,
  noop: yo,
  safe_not_equal: Yd,
  svg_element: Js
} = window.__gradio__svelte__internal;
function Hd(l) {
  let e, t;
  return {
    c() {
      e = Js("svg"), t = Js("rect"), Fe(t, "x", "3"), Fe(t, "y", "3"), Fe(t, "width", "18"), Fe(t, "height", "18"), Fe(t, "rx", "2"), Fe(t, "ry", "2"), Fe(e, "xmlns", "http://www.w3.org/2000/svg"), Fe(e, "width", "100%"), Fe(e, "height", "100%"), Fe(e, "viewBox", "0 0 24 24"), Fe(e, "stroke-width", "1.5"), Fe(e, "stroke-linecap", "round"), Fe(e, "stroke-linejoin", "round"), Fe(e, "class", "feather feather-square");
    },
    m(n, i) {
      Xd(n, e, i), Rd(e, t);
    },
    p: yo,
    i: yo,
    o: yo,
    d(n) {
      n && Wd(e);
    }
  };
}
class Id extends Ed {
  constructor(e) {
    super(), Ad(this, e, null, Hd, Yd, {});
  }
}
const {
  SvelteComponent: dk,
  append: hk,
  attr: mk,
  detach: gk,
  init: bk,
  insert: pk,
  noop: wk,
  safe_not_equal: vk,
  svg_element: kk
} = window.__gradio__svelte__internal, {
  SvelteComponent: yk,
  append: Ck,
  attr: Sk,
  detach: qk,
  init: zk,
  insert: Bk,
  noop: Dk,
  safe_not_equal: Mk,
  svg_element: Lk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ek,
  append: Rk,
  attr: Wk,
  detach: Ak,
  init: Xk,
  insert: Yk,
  noop: Hk,
  safe_not_equal: Ik,
  svg_element: jk,
  text: Tk
} = window.__gradio__svelte__internal, {
  SvelteComponent: $k,
  append: Fk,
  attr: Ok,
  detach: xk,
  init: Vk,
  insert: Nk,
  noop: Uk,
  safe_not_equal: Pk,
  svg_element: Kk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Zk,
  append: Gk,
  attr: Jk,
  detach: Qk,
  init: e6,
  insert: t6,
  noop: n6,
  safe_not_equal: l6,
  svg_element: i6
} = window.__gradio__svelte__internal, {
  SvelteComponent: jd,
  append: Qs,
  attr: ot,
  detach: Td,
  init: $d,
  insert: Fd,
  noop: Co,
  safe_not_equal: Od,
  svg_element: So
} = window.__gradio__svelte__internal;
function xd(l) {
  let e, t, n;
  return {
    c() {
      e = So("svg"), t = So("polyline"), n = So("path"), ot(t, "points", "1 4 1 10 7 10"), ot(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 24 24"), ot(e, "fill", "none"), ot(e, "stroke", "currentColor"), ot(e, "stroke-width", "2"), ot(e, "stroke-linecap", "round"), ot(e, "stroke-linejoin", "round"), ot(e, "class", "feather feather-rotate-ccw");
    },
    m(i, o) {
      Fd(i, e, o), Qs(e, t), Qs(e, n);
    },
    p: Co,
    i: Co,
    o: Co,
    d(i) {
      i && Td(e);
    }
  };
}
class Vd extends jd {
  constructor(e) {
    super(), $d(this, e, null, xd, Od, {});
  }
}
const {
  SvelteComponent: Nd,
  append: qo,
  attr: Be,
  detach: Ud,
  init: Pd,
  insert: Kd,
  noop: zo,
  safe_not_equal: Zd,
  svg_element: Gl
} = window.__gradio__svelte__internal;
function Gd(l) {
  let e, t, n, i;
  return {
    c() {
      e = Gl("svg"), t = Gl("path"), n = Gl("polyline"), i = Gl("line"), Be(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Be(n, "points", "17 8 12 3 7 8"), Be(i, "x1", "12"), Be(i, "y1", "3"), Be(i, "x2", "12"), Be(i, "y2", "15"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "90%"), Be(e, "height", "90%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "2"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Kd(o, e, s), qo(e, t), qo(e, n), qo(e, i);
    },
    p: zo,
    i: zo,
    o: zo,
    d(o) {
      o && Ud(e);
    }
  };
}
let t_ = class extends Nd {
  constructor(e) {
    super(), Pd(this, e, null, Gd, Zd, {});
  }
};
const {
  SvelteComponent: s6,
  append: a6,
  attr: r6,
  detach: _6,
  init: c6,
  insert: u6,
  noop: f6,
  safe_not_equal: d6,
  svg_element: h6
} = window.__gradio__svelte__internal, {
  SvelteComponent: m6,
  append: g6,
  attr: b6,
  detach: p6,
  init: w6,
  insert: v6,
  noop: k6,
  safe_not_equal: y6,
  svg_element: C6,
  text: S6
} = window.__gradio__svelte__internal, {
  SvelteComponent: q6,
  append: z6,
  attr: B6,
  detach: D6,
  init: M6,
  insert: L6,
  noop: E6,
  safe_not_equal: R6,
  svg_element: W6,
  text: A6
} = window.__gradio__svelte__internal, {
  SvelteComponent: X6,
  append: Y6,
  attr: H6,
  detach: I6,
  init: j6,
  insert: T6,
  noop: $6,
  safe_not_equal: F6,
  svg_element: O6,
  text: x6
} = window.__gradio__svelte__internal, {
  SvelteComponent: V6,
  append: N6,
  attr: U6,
  detach: P6,
  init: K6,
  insert: Z6,
  noop: G6,
  safe_not_equal: J6,
  svg_element: Q6
} = window.__gradio__svelte__internal, {
  SvelteComponent: Jd,
  append: ea,
  attr: en,
  detach: Qd,
  init: e1,
  insert: t1,
  noop: Bo,
  safe_not_equal: n1,
  svg_element: Do
} = window.__gradio__svelte__internal;
function l1(l) {
  let e, t, n;
  return {
    c() {
      e = Do("svg"), t = Do("path"), n = Do("path"), en(t, "fill", "currentColor"), en(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), en(n, "fill", "currentColor"), en(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), en(e, "xmlns", "http://www.w3.org/2000/svg"), en(e, "width", "100%"), en(e, "height", "100%"), en(e, "viewBox", "0 0 24 24");
    },
    m(i, o) {
      t1(i, e, o), ea(e, t), ea(e, n);
    },
    p: Bo,
    i: Bo,
    o: Bo,
    d(i) {
      i && Qd(e);
    }
  };
}
let n_ = class extends Jd {
  constructor(e) {
    super(), e1(this, e, null, l1, n1, {});
  }
};
const i1 = [
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
], ta = {
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
i1.reduce((l, { color: e, primary: t, secondary: n }) => ({
  ...l,
  [e]: {
    primary: ta[e][t],
    secondary: ta[e][n]
  }
}), {});
class ki extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function o1(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new ki("Must be on Spaces to share.");
  let t, n, i;
  t = s1(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
  const o = new File([t], i, { type: n }), s = await fetch("https://huggingface.co/uploads", {
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
      throw new ki(`Upload failed: ${_.error}`);
    }
    throw new ki("Upload failed.");
  }
  return await s.text();
}
function s1(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, o = new Uint8Array(i); i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: a1,
  create_component: r1,
  destroy_component: _1,
  init: c1,
  mount_component: u1,
  safe_not_equal: f1,
  transition_in: d1,
  transition_out: h1
} = window.__gradio__svelte__internal, { createEventDispatcher: m1 } = window.__gradio__svelte__internal;
function g1(l) {
  let e, t;
  return e = new Fl({
    props: {
      Icon: $f,
      label: (
        /*i18n*/
        l[2]("common.share")
      ),
      pending: (
        /*pending*/
        l[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[5]
  ), {
    c() {
      r1(e.$$.fragment);
    },
    m(n, i) {
      u1(e, n, i), t = !0;
    },
    p(n, [i]) {
      const o = {};
      i & /*i18n*/
      4 && (o.label = /*i18n*/
      n[2]("common.share")), i & /*pending*/
      8 && (o.pending = /*pending*/
      n[3]), e.$set(o);
    },
    i(n) {
      t || (d1(e.$$.fragment, n), t = !0);
    },
    o(n) {
      h1(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _1(e, n);
    }
  };
}
function b1(l, e, t) {
  const n = m1();
  let { formatter: i } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await i(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof ki ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (_) => {
    "formatter" in _ && t(0, i = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [i, o, s, r, n, a];
}
class p1 extends a1 {
  constructor(e) {
    super(), c1(this, e, b1, g1, f1, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: w1,
  append: Mn,
  attr: ss,
  check_outros: v1,
  create_component: l_,
  destroy_component: i_,
  detach: yi,
  element: as,
  group_outros: k1,
  init: y1,
  insert: Ci,
  mount_component: o_,
  safe_not_equal: C1,
  set_data: rs,
  space: _s,
  text: El,
  toggle_class: na,
  transition_in: zi,
  transition_out: Bi
} = window.__gradio__svelte__internal;
function S1(l) {
  let e, t;
  return e = new t_({}), {
    c() {
      l_(e.$$.fragment);
    },
    m(n, i) {
      o_(e, n, i), t = !0;
    },
    i(n) {
      t || (zi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Bi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      i_(e, n);
    }
  };
}
function q1(l) {
  let e, t;
  return e = new e_({}), {
    c() {
      l_(e.$$.fragment);
    },
    m(n, i) {
      o_(e, n, i), t = !0;
    },
    i(n) {
      t || (zi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Bi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      i_(e, n);
    }
  };
}
function la(l) {
  let e, t, n = (
    /*i18n*/
    l[1]("common.or") + ""
  ), i, o, s, r = (
    /*message*/
    (l[2] || /*i18n*/
    l[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = as("span"), t = El("- "), i = El(n), o = El(" -"), s = _s(), a = El(r), ss(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      Ci(_, e, c), Mn(e, t), Mn(e, i), Mn(e, o), Ci(_, s, c), Ci(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && rs(i, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && rs(a, r);
    },
    d(_) {
      _ && (yi(e), yi(s), yi(a));
    }
  };
}
function z1(l) {
  let e, t, n, i, o, s = (
    /*i18n*/
    l[1](
      /*defs*/
      l[5][
        /*type*/
        l[0]
      ] || /*defs*/
      l[5].file
    ) + ""
  ), r, a, _;
  const c = [q1, S1], f = [];
  function u(h, m) {
    return (
      /*type*/
      h[0] === "clipboard" ? 0 : 1
    );
  }
  n = u(l), i = f[n] = c[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && la(l)
  );
  return {
    c() {
      e = as("div"), t = as("span"), i.c(), o = _s(), r = El(s), a = _s(), d && d.c(), ss(t, "class", "icon-wrap svelte-kzcjhc"), na(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), ss(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, m) {
      Ci(h, e, m), Mn(e, t), f[n].m(t, null), Mn(e, o), Mn(e, r), Mn(e, a), d && d.m(e, null), _ = !0;
    },
    p(h, [m]) {
      let g = n;
      n = u(h), n !== g && (k1(), Bi(f[g], 1, 1, () => {
        f[g] = null;
      }), v1(), i = f[n], i || (i = f[n] = c[n](h), i.c()), zi(i, 1), i.m(t, null)), (!_ || m & /*hovered*/
      16) && na(
        t,
        "hovered",
        /*hovered*/
        h[4]
      ), (!_ || m & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      h[1](
        /*defs*/
        h[5][
          /*type*/
          h[0]
        ] || /*defs*/
        h[5].file
      ) + "") && rs(r, s), /*mode*/
      h[3] !== "short" ? d ? d.p(h, m) : (d = la(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(h) {
      _ || (zi(i), _ = !0);
    },
    o(h) {
      Bi(i), _ = !1;
    },
    d(h) {
      h && yi(e), f[n].d(), d && d.d();
    }
  };
}
function B1(l, e, t) {
  let { type: n = "file" } = e, { i18n: i } = e, { message: o = void 0 } = e, { mode: s = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return l.$$set = (_) => {
    "type" in _ && t(0, n = _.type), "i18n" in _ && t(1, i = _.i18n), "message" in _ && t(2, o = _.message), "mode" in _ && t(3, s = _.mode), "hovered" in _ && t(4, r = _.hovered);
  }, [n, i, o, s, r, a];
}
class s_ extends w1 {
  constructor(e) {
    super(), y1(this, e, B1, z1, C1, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: t8,
  attr: n8,
  create_slot: l8,
  detach: i8,
  element: o8,
  get_all_dirty_from_scope: s8,
  get_slot_changes: a8,
  init: r8,
  insert: _8,
  safe_not_equal: c8,
  toggle_class: u8,
  transition_in: f8,
  transition_out: d8,
  update_slot_base: h8
} = window.__gradio__svelte__internal, {
  SvelteComponent: D1,
  append: Mo,
  attr: Rt,
  check_outros: Rl,
  create_component: ji,
  destroy_component: Ti,
  detach: sl,
  element: Ol,
  empty: M1,
  group_outros: Wl,
  init: L1,
  insert: al,
  listen: $i,
  mount_component: Fi,
  safe_not_equal: E1,
  space: Lo,
  toggle_class: pn,
  transition_in: ye,
  transition_out: xe
} = window.__gradio__svelte__internal;
function ia(l) {
  let e, t = (
    /*sources*/
    l[1].includes("upload")
  ), n, i = (
    /*sources*/
    l[1].includes("microphone")
  ), o, s = (
    /*sources*/
    l[1].includes("webcam")
  ), r, a = (
    /*sources*/
    l[1].includes("clipboard")
  ), _, c = t && oa(l), f = i && sa(l), u = s && aa(l), d = a && ra(l);
  return {
    c() {
      e = Ol("span"), c && c.c(), n = Lo(), f && f.c(), o = Lo(), u && u.c(), r = Lo(), d && d.c(), Rt(e, "class", "source-selection svelte-1jp3vgd"), Rt(e, "data-testid", "source-select");
    },
    m(h, m) {
      al(h, e, m), c && c.m(e, null), Mo(e, n), f && f.m(e, null), Mo(e, o), u && u.m(e, null), Mo(e, r), d && d.m(e, null), _ = !0;
    },
    p(h, m) {
      m & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? c ? (c.p(h, m), m & /*sources*/
      2 && ye(c, 1)) : (c = oa(h), c.c(), ye(c, 1), c.m(e, n)) : c && (Wl(), xe(c, 1, 1, () => {
        c = null;
      }), Rl()), m & /*sources*/
      2 && (i = /*sources*/
      h[1].includes("microphone")), i ? f ? (f.p(h, m), m & /*sources*/
      2 && ye(f, 1)) : (f = sa(h), f.c(), ye(f, 1), f.m(e, o)) : f && (Wl(), xe(f, 1, 1, () => {
        f = null;
      }), Rl()), m & /*sources*/
      2 && (s = /*sources*/
      h[1].includes("webcam")), s ? u ? (u.p(h, m), m & /*sources*/
      2 && ye(u, 1)) : (u = aa(h), u.c(), ye(u, 1), u.m(e, r)) : u && (Wl(), xe(u, 1, 1, () => {
        u = null;
      }), Rl()), m & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("clipboard")), a ? d ? (d.p(h, m), m & /*sources*/
      2 && ye(d, 1)) : (d = ra(h), d.c(), ye(d, 1), d.m(e, null)) : d && (Wl(), xe(d, 1, 1, () => {
        d = null;
      }), Rl());
    },
    i(h) {
      _ || (ye(c), ye(f), ye(u), ye(d), _ = !0);
    },
    o(h) {
      xe(c), xe(f), xe(u), xe(d), _ = !1;
    },
    d(h) {
      h && sl(e), c && c.d(), f && f.d(), u && u.d(), d && d.d();
    }
  };
}
function oa(l) {
  let e, t, n, i, o;
  return t = new t_({}), {
    c() {
      e = Ol("button"), ji(t.$$.fragment), Rt(e, "class", "icon svelte-1jp3vgd"), Rt(e, "aria-label", "Upload file"), pn(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(s, r) {
      al(s, e, r), Fi(t, e, null), n = !0, i || (o = $i(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && pn(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && sl(e), Ti(t), i = !1, o();
    }
  };
}
function sa(l) {
  let e, t, n, i, o;
  return t = new yd({}), {
    c() {
      e = Ol("button"), ji(t.$$.fragment), Rt(e, "class", "icon svelte-1jp3vgd"), Rt(e, "aria-label", "Record audio"), pn(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(s, r) {
      al(s, e, r), Fi(t, e, null), n = !0, i || (o = $i(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && pn(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && sl(e), Ti(t), i = !1, o();
    }
  };
}
function aa(l) {
  let e, t, n, i, o;
  return t = new n_({}), {
    c() {
      e = Ol("button"), ji(t.$$.fragment), Rt(e, "class", "icon svelte-1jp3vgd"), Rt(e, "aria-label", "Capture from camera"), pn(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(s, r) {
      al(s, e, r), Fi(t, e, null), n = !0, i || (o = $i(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && pn(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && sl(e), Ti(t), i = !1, o();
    }
  };
}
function ra(l) {
  let e, t, n, i, o;
  return t = new e_({}), {
    c() {
      e = Ol("button"), ji(t.$$.fragment), Rt(e, "class", "icon svelte-1jp3vgd"), Rt(e, "aria-label", "Paste from clipboard"), pn(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(s, r) {
      al(s, e, r), Fi(t, e, null), n = !0, i || (o = $i(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && pn(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && sl(e), Ti(t), i = !1, o();
    }
  };
}
function R1(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && ia(l)
  );
  return {
    c() {
      n && n.c(), e = M1();
    },
    m(i, o) {
      n && n.m(i, o), al(i, e, o), t = !0;
    },
    p(i, [o]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, o), o & /*unique_sources*/
      4 && ye(n, 1)) : (n = ia(i), n.c(), ye(n, 1), n.m(e.parentNode, e)) : n && (Wl(), xe(n, 1, 1, () => {
        n = null;
      }), Rl());
    },
    i(i) {
      t || (ye(n), t = !0);
    },
    o(i) {
      xe(n), t = !1;
    },
    d(i) {
      i && sl(e), n && n.d(i);
    }
  };
}
function W1(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(h, m, g, b) {
    function v(p) {
      return p instanceof g ? p : new g(function(y) {
        y(p);
      });
    }
    return new (g || (g = Promise))(function(p, y) {
      function q(S) {
        try {
          M(b.next(S));
        } catch (C) {
          y(C);
        }
      }
      function D(S) {
        try {
          M(b.throw(S));
        } catch (C) {
          y(C);
        }
      }
      function M(S) {
        S.done ? p(S.value) : v(S.value).then(q, D);
      }
      M((b = b.apply(h, m || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function _(h) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, s = h), a(h);
    });
  }
  const c = () => _("upload"), f = () => _("microphone"), u = () => _("webcam"), d = () => _("clipboard");
  return l.$$set = (h) => {
    "sources" in h && t(1, o = h.sources), "active_source" in h && t(0, s = h.active_source), "handle_clear" in h && t(4, r = h.handle_clear), "handle_select" in h && t(5, a = h.handle_select);
  }, l.$$.update = () => {
    l.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    s,
    o,
    n,
    _,
    r,
    a,
    c,
    f,
    u,
    d
  ];
}
class A1 extends D1 {
  constructor(e) {
    super(), L1(this, e, W1, R1, E1, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Jn(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Si() {
}
const X1 = (l) => l;
function _a(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [l, "px"];
}
const a_ = typeof window < "u";
let ca = a_ ? () => window.performance.now() : () => Date.now(), r_ = a_ ? (l) => requestAnimationFrame(l) : Si;
const ll = /* @__PURE__ */ new Set();
function __(l) {
  ll.forEach((e) => {
    e.c(l) || (ll.delete(e), e.f());
  }), ll.size !== 0 && r_(__);
}
function Y1(l) {
  let e;
  return ll.size === 0 && r_(__), { promise: new Promise((t) => {
    ll.add(e = { c: l, f: t });
  }), abort() {
    ll.delete(e);
  } };
}
function H1(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function I1(l, { delay: e = 0, duration: t = 400, easing: n = X1 } = {}) {
  const i = +getComputedStyle(l).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * i };
}
function ua(l, { delay: e = 0, duration: t = 400, easing: n = H1, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [f, u] = _a(i), [d, h] = _a(o);
  return { delay: e, duration: t, easing: n, css: (m, g) => `
			transform: ${_} translate(${(1 - m) * f}${u}, ${(1 - m) * d}${h});
			opacity: ${a - c * g}` };
}
const Un = [];
function j1(l, e = Si) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(s) {
    if (a = s, ((r = l) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (l = s, t)) {
      const _ = !Un.length;
      for (const c of n) c[1](), Un.push(c, l);
      if (_) {
        for (let c = 0; c < Un.length; c += 2) Un[c][0](Un[c + 1]);
        Un.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    i(s(l));
  }
  return { set: i, update: o, subscribe: function(s, r = Si) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(i, o) || Si), s(l), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function fa(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function cs(l, e, t, n) {
  if (typeof t == "number" || fa(t)) {
    const i = n - t, o = (t - e) / (l.dt || 1 / 60), s = (o + (l.opts.stiffness * i - l.opts.damping * o) * l.inv_mass) * l.dt;
    return Math.abs(s) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, fa(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((i, o) => cs(l, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const i = {};
    for (const o in t) i[o] = cs(l, e[o], t[o], n[o]);
    return i;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function da(l, e = {}) {
  const t = j1(l), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = l, c = l, f = 1, u = 0, d = !1;
  function h(g, b = {}) {
    c = g;
    const v = a = {};
    return l == null || b.hard || m.stiffness >= 1 && m.damping >= 1 ? (d = !0, s = ca(), _ = g, t.set(l = c), Promise.resolve()) : (b.soft && (u = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), f = 0), r || (s = ca(), d = !1, r = Y1((p) => {
      if (d) return d = !1, r = null, !1;
      f = Math.min(f + u, 1);
      const y = { inv_mass: f, opts: m, settled: !0, dt: 60 * (p - s) / 1e3 }, q = cs(y, _, l, c);
      return s = p, _ = l, t.set(l = q), y.settled && (r = null), !y.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        v === a && p();
      });
    }));
  }
  const m = { set: h, update: (g, b) => h(g(c, l), b), subscribe: t.subscribe, stiffness: n, damping: i, precision: o };
  return m;
}
const {
  SvelteComponent: T1,
  append: bt,
  attr: ie,
  component_subscribe: ha,
  detach: $1,
  element: F1,
  init: O1,
  insert: x1,
  noop: ma,
  safe_not_equal: V1,
  set_style: Jl,
  svg_element: pt,
  toggle_class: ga
} = window.__gradio__svelte__internal, { onMount: N1 } = window.__gradio__svelte__internal;
function U1(l) {
  let e, t, n, i, o, s, r, a, _, c, f, u;
  return {
    c() {
      e = F1("div"), t = pt("svg"), n = pt("g"), i = pt("path"), o = pt("path"), s = pt("path"), r = pt("path"), a = pt("g"), _ = pt("path"), c = pt("path"), f = pt("path"), u = pt("path"), ie(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ie(i, "fill", "#FF7C00"), ie(i, "fill-opacity", "0.4"), ie(i, "class", "svelte-43sxxs"), ie(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ie(o, "fill", "#FF7C00"), ie(o, "class", "svelte-43sxxs"), ie(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ie(s, "fill", "#FF7C00"), ie(s, "fill-opacity", "0.4"), ie(s, "class", "svelte-43sxxs"), ie(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ie(r, "fill", "#FF7C00"), ie(r, "class", "svelte-43sxxs"), Jl(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), ie(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ie(_, "fill", "#FF7C00"), ie(_, "fill-opacity", "0.4"), ie(_, "class", "svelte-43sxxs"), ie(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ie(c, "fill", "#FF7C00"), ie(c, "class", "svelte-43sxxs"), ie(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ie(f, "fill", "#FF7C00"), ie(f, "fill-opacity", "0.4"), ie(f, "class", "svelte-43sxxs"), ie(u, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ie(u, "fill", "#FF7C00"), ie(u, "class", "svelte-43sxxs"), Jl(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), ie(t, "viewBox", "-1200 -1200 3000 3000"), ie(t, "fill", "none"), ie(t, "xmlns", "http://www.w3.org/2000/svg"), ie(t, "class", "svelte-43sxxs"), ie(e, "class", "svelte-43sxxs"), ga(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, h) {
      x1(d, e, h), bt(e, t), bt(t, n), bt(n, i), bt(n, o), bt(n, s), bt(n, r), bt(t, a), bt(a, _), bt(a, c), bt(a, f), bt(a, u);
    },
    p(d, [h]) {
      h & /*$top*/
      2 && Jl(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), h & /*$bottom*/
      4 && Jl(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), h & /*margin*/
      1 && ga(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: ma,
    o: ma,
    d(d) {
      d && $1(e);
    }
  };
}
function P1(l, e, t) {
  let n, i;
  var o = this && this.__awaiter || function(d, h, m, g) {
    function b(v) {
      return v instanceof m ? v : new m(function(p) {
        p(v);
      });
    }
    return new (m || (m = Promise))(function(v, p) {
      function y(M) {
        try {
          D(g.next(M));
        } catch (S) {
          p(S);
        }
      }
      function q(M) {
        try {
          D(g.throw(M));
        } catch (S) {
          p(S);
        }
      }
      function D(M) {
        M.done ? v(M.value) : b(M.value).then(y, q);
      }
      D((g = g.apply(d, h || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = da([0, 0]);
  ha(l, r, (d) => t(1, n = d));
  const a = da([0, 0]);
  ha(l, a, (d) => t(2, i = d));
  let _;
  function c() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function f() {
    return o(this, void 0, void 0, function* () {
      yield c(), _ || f();
    });
  }
  function u() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), f();
    });
  }
  return N1(() => (u(), () => _ = !0)), l.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, i, r, a];
}
class K1 extends T1 {
  constructor(e) {
    super(), O1(this, e, P1, U1, V1, { margin: 0 });
  }
}
const {
  SvelteComponent: Z1,
  append: Ln,
  attr: yt,
  binding_callbacks: ba,
  check_outros: us,
  create_component: c_,
  create_slot: u_,
  destroy_component: f_,
  destroy_each: d_,
  detach: U,
  element: Lt,
  empty: rl,
  ensure_array_like: Di,
  get_all_dirty_from_scope: h_,
  get_slot_changes: m_,
  group_outros: fs,
  init: G1,
  insert: P,
  mount_component: g_,
  noop: ds,
  safe_not_equal: J1,
  set_data: dt,
  set_style: hn,
  space: ft,
  text: he,
  toggle_class: ut,
  transition_in: kt,
  transition_out: Et,
  update_slot_base: b_
} = window.__gradio__svelte__internal, { tick: Q1 } = window.__gradio__svelte__internal, { onDestroy: eh } = window.__gradio__svelte__internal, { createEventDispatcher: th } = window.__gradio__svelte__internal, nh = (l) => ({}), pa = (l) => ({}), lh = (l) => ({}), wa = (l) => ({});
function va(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function ka(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function ih(l) {
  let e, t, n, i, o = (
    /*i18n*/
    l[1]("common.error") + ""
  ), s, r, a;
  t = new Fl({
    props: {
      Icon: Jr,
      label: (
        /*i18n*/
        l[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    l[32]
  );
  const _ = (
    /*#slots*/
    l[30].error
  ), c = u_(
    _,
    l,
    /*$$scope*/
    l[29],
    pa
  );
  return {
    c() {
      e = Lt("div"), c_(t.$$.fragment), n = ft(), i = Lt("span"), s = he(o), r = ft(), c && c.c(), yt(e, "class", "clear-status svelte-16nch4a"), yt(i, "class", "error svelte-16nch4a");
    },
    m(f, u) {
      P(f, e, u), g_(t, e, null), P(f, n, u), P(f, i, u), Ln(i, s), P(f, r, u), c && c.m(f, u), a = !0;
    },
    p(f, u) {
      const d = {};
      u[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      f[1]("common.clear")), t.$set(d), (!a || u[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      f[1]("common.error") + "") && dt(s, o), c && c.p && (!a || u[0] & /*$$scope*/
      536870912) && b_(
        c,
        _,
        f,
        /*$$scope*/
        f[29],
        a ? m_(
          _,
          /*$$scope*/
          f[29],
          u,
          nh
        ) : h_(
          /*$$scope*/
          f[29]
        ),
        pa
      );
    },
    i(f) {
      a || (kt(t.$$.fragment, f), kt(c, f), a = !0);
    },
    o(f) {
      Et(t.$$.fragment, f), Et(c, f), a = !1;
    },
    d(f) {
      f && (U(e), U(n), U(i), U(r)), f_(t), c && c.d(f);
    }
  };
}
function oh(l) {
  let e, t, n, i, o, s, r, a, _, c = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && ya(l)
  );
  function f(p, y) {
    if (
      /*progress*/
      p[7]
    ) return rh;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return ah;
    if (
      /*queue_position*/
      p[2] === 0
    ) return sh;
  }
  let u = f(l), d = u && u(l), h = (
    /*timer*/
    l[5] && qa(l)
  );
  const m = [fh, uh], g = [];
  function b(p, y) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = b(l)) && (s = g[o] = m[o](l));
  let v = !/*timer*/
  l[5] && Ra(l);
  return {
    c() {
      c && c.c(), e = ft(), t = Lt("div"), d && d.c(), n = ft(), h && h.c(), i = ft(), s && s.c(), r = ft(), v && v.c(), a = rl(), yt(t, "class", "progress-text svelte-16nch4a"), ut(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), ut(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(p, y) {
      c && c.m(p, y), P(p, e, y), P(p, t, y), d && d.m(t, null), Ln(t, n), h && h.m(t, null), P(p, i, y), ~o && g[o].m(p, y), P(p, r, y), v && v.m(p, y), P(p, a, y), _ = !0;
    },
    p(p, y) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? c ? c.p(p, y) : (c = ya(p), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), u === (u = f(p)) && d ? d.p(p, y) : (d && d.d(1), d = u && u(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? h ? h.p(p, y) : (h = qa(p), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!_ || y[0] & /*variant*/
      256) && ut(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!_ || y[0] & /*variant*/
      256) && ut(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let q = o;
      o = b(p), o === q ? ~o && g[o].p(p, y) : (s && (fs(), Et(g[q], 1, 1, () => {
        g[q] = null;
      }), us()), ~o ? (s = g[o], s ? s.p(p, y) : (s = g[o] = m[o](p), s.c()), kt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? v && (fs(), Et(v, 1, 1, () => {
        v = null;
      }), us()) : v ? (v.p(p, y), y[0] & /*timer*/
      32 && kt(v, 1)) : (v = Ra(p), v.c(), kt(v, 1), v.m(a.parentNode, a));
    },
    i(p) {
      _ || (kt(s), kt(v), _ = !0);
    },
    o(p) {
      Et(s), Et(v), _ = !1;
    },
    d(p) {
      p && (U(e), U(t), U(i), U(r), U(a)), c && c.d(p), d && d.d(), h && h.d(), ~o && g[o].d(p), v && v.d(p);
    }
  };
}
function ya(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Lt("div"), yt(e, "class", "eta-bar svelte-16nch4a"), hn(e, "transform", t);
    },
    m(n, i) {
      P(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && hn(e, "transform", t);
    },
    d(n) {
      n && U(e);
    }
  };
}
function sh(l) {
  let e;
  return {
    c() {
      e = he("processing |");
    },
    m(t, n) {
      P(t, e, n);
    },
    p: ds,
    d(t) {
      t && U(e);
    }
  };
}
function ah(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, o, s;
  return {
    c() {
      e = he("queue: "), n = he(t), i = he("/"), o = he(
        /*queue_size*/
        l[3]
      ), s = he(" |");
    },
    m(r, a) {
      P(r, e, a), P(r, n, a), P(r, i, a), P(r, o, a), P(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && dt(n, t), a[0] & /*queue_size*/
      8 && dt(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (U(e), U(n), U(i), U(o), U(s));
    }
  };
}
function rh(l) {
  let e, t = Di(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Sa(ka(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = rl();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      P(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      128) {
        t = Di(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ka(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Sa(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && U(e), d_(n, i);
    }
  };
}
function Ca(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, o = " ", s;
  function r(c, f) {
    return (
      /*p*/
      c[41].length != null ? ch : _h
    );
  }
  let a = r(l), _ = a(l);
  return {
    c() {
      _.c(), e = ft(), n = he(t), i = he(" | "), s = he(o);
    },
    m(c, f) {
      _.m(c, f), P(c, e, f), P(c, n, f), P(c, i, f), P(c, s, f);
    },
    p(c, f) {
      a === (a = r(c)) && _ ? _.p(c, f) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), f[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && dt(n, t);
    },
    d(c) {
      c && (U(e), U(n), U(i), U(s)), _.d(c);
    }
  };
}
function _h(l) {
  let e = Jn(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = he(e);
    },
    m(n, i) {
      P(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = Jn(
        /*p*/
        n[41].index || 0
      ) + "") && dt(t, e);
    },
    d(n) {
      n && U(t);
    }
  };
}
function ch(l) {
  let e = Jn(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = Jn(
    /*p*/
    l[41].length
  ) + "", o;
  return {
    c() {
      t = he(e), n = he("/"), o = he(i);
    },
    m(s, r) {
      P(s, t, r), P(s, n, r), P(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Jn(
        /*p*/
        s[41].index || 0
      ) + "") && dt(t, e), r[0] & /*progress*/
      128 && i !== (i = Jn(
        /*p*/
        s[41].length
      ) + "") && dt(o, i);
    },
    d(s) {
      s && (U(t), U(n), U(o));
    }
  };
}
function Sa(l) {
  let e, t = (
    /*p*/
    l[41].index != null && Ca(l)
  );
  return {
    c() {
      t && t.c(), e = rl();
    },
    m(n, i) {
      t && t.m(n, i), P(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = Ca(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && U(e), t && t.d(n);
    }
  };
}
function qa(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = he(
        /*formatted_timer*/
        l[20]
      ), n = he(t), i = he("s");
    },
    m(o, s) {
      P(o, e, s), P(o, n, s), P(o, i, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && dt(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && dt(n, t);
    },
    d(o) {
      o && (U(e), U(n), U(i));
    }
  };
}
function uh(l) {
  let e, t;
  return e = new K1({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      c_(e.$$.fragment);
    },
    m(n, i) {
      g_(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (kt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Et(e.$$.fragment, n), t = !1;
    },
    d(n) {
      f_(e, n);
    }
  };
}
function fh(l) {
  let e, t, n, i, o, s = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && za(l)
  );
  return {
    c() {
      e = Lt("div"), t = Lt("div"), r && r.c(), n = ft(), i = Lt("div"), o = Lt("div"), yt(t, "class", "progress-level-inner svelte-16nch4a"), yt(o, "class", "progress-bar svelte-16nch4a"), hn(o, "width", s), yt(i, "class", "progress-bar-wrap svelte-16nch4a"), yt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      P(a, e, _), Ln(e, t), r && r.m(t, null), Ln(e, n), Ln(e, i), Ln(i, o), l[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = za(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && hn(o, "width", s);
    },
    i: ds,
    o: ds,
    d(a) {
      a && U(e), r && r.d(), l[31](null);
    }
  };
}
function za(l) {
  let e, t = Di(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Ea(va(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = rl();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      P(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = Di(
          /*progress*/
          i[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = va(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Ea(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && U(e), d_(n, i);
    }
  };
}
function Ba(l) {
  let e, t, n, i, o = (
    /*i*/
    l[43] !== 0 && dh()
  ), s = (
    /*p*/
    l[41].desc != null && Da(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && Ma()
  ), a = (
    /*progress_level*/
    l[14] != null && La(l)
  );
  return {
    c() {
      o && o.c(), e = ft(), s && s.c(), t = ft(), r && r.c(), n = ft(), a && a.c(), i = rl();
    },
    m(_, c) {
      o && o.m(_, c), P(_, e, c), s && s.m(_, c), P(_, t, c), r && r.m(_, c), P(_, n, c), a && a.m(_, c), P(_, i, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = Da(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = Ma(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = La(_), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && (U(e), U(t), U(n), U(i)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function dh(l) {
  let e;
  return {
    c() {
      e = he(" /");
    },
    m(t, n) {
      P(t, e, n);
    },
    d(t) {
      t && U(e);
    }
  };
}
function Da(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = he(e);
    },
    m(n, i) {
      P(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && dt(t, e);
    },
    d(n) {
      n && U(t);
    }
  };
}
function Ma(l) {
  let e;
  return {
    c() {
      e = he("-");
    },
    m(t, n) {
      P(t, e, n);
    },
    d(t) {
      t && U(e);
    }
  };
}
function La(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = he(e), n = he("%");
    },
    m(i, o) {
      P(i, t, o), P(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && dt(t, e);
    },
    d(i) {
      i && (U(t), U(n));
    }
  };
}
function Ea(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && Ba(l)
  );
  return {
    c() {
      t && t.c(), e = rl();
    },
    m(n, i) {
      t && t.m(n, i), P(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = Ba(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && U(e), t && t.d(n);
    }
  };
}
function Ra(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), s = u_(
    o,
    l,
    /*$$scope*/
    l[29],
    wa
  );
  return {
    c() {
      e = Lt("p"), t = he(
        /*loading_text*/
        l[9]
      ), n = ft(), s && s.c(), yt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      P(r, e, a), Ln(e, t), P(r, n, a), s && s.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && dt(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!i || a[0] & /*$$scope*/
      536870912) && b_(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        i ? m_(
          o,
          /*$$scope*/
          r[29],
          a,
          lh
        ) : h_(
          /*$$scope*/
          r[29]
        ),
        wa
      );
    },
    i(r) {
      i || (kt(s, r), i = !0);
    },
    o(r) {
      Et(s, r), i = !1;
    },
    d(r) {
      r && (U(e), U(n)), s && s.d(r);
    }
  };
}
function hh(l) {
  let e, t, n, i, o;
  const s = [oh, ih], r = [];
  function a(_, c) {
    return (
      /*status*/
      _[4] === "pending" ? 0 : (
        /*status*/
        _[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(l)) && (n = r[t] = s[t](l)), {
    c() {
      e = Lt("div"), n && n.c(), yt(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), ut(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), ut(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), ut(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), ut(
        e,
        "border",
        /*border*/
        l[12]
      ), hn(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), hn(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(_, c) {
      P(_, e, c), ~t && r[t].m(e, null), l[33](e), o = !0;
    },
    p(_, c) {
      let f = t;
      t = a(_), t === f ? ~t && r[t].p(_, c) : (n && (fs(), Et(r[f], 1, 1, () => {
        r[f] = null;
      }), us()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), kt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && yt(e, "class", i), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && ut(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && ut(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && ut(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && ut(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && hn(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && hn(
        e,
        "padding",
        /*absolute*/
        _[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(_) {
      o || (kt(n), o = !0);
    },
    o(_) {
      Et(n), o = !1;
    },
    d(_) {
      _ && U(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var mh = function(l, e, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(c) {
      try {
        _(n.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        _(n.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function _(c) {
      c.done ? o(c.value) : i(c.value).then(r, a);
    }
    _((n = n.apply(l, e || [])).next());
  });
};
let Ql = [], Eo = !1;
function gh(l) {
  return mh(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ql.push(e), !Eo) Eo = !0;
      else return;
      yield Q1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < Ql.length; i++) {
          const s = Ql[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Eo = !1, Ql = [];
      });
    }
  });
}
function bh(l, e, t) {
  let n, { $$slots: i = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = th();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: f } = e, { scroll_to_output: u = !1 } = e, { timer: d = !0 } = e, { show_progress: h = "full" } = e, { message: m = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: y = !1 } = e, { border: q = !1 } = e, { autoscroll: D } = e, M, S = !1, C = 0, X = 0, I = null, w = null, L = 0, F = null, O, z = null, me = !0;
  const R = () => {
    t(0, a = t(27, I = t(19, x = null))), t(25, C = performance.now()), t(26, X = 0), S = !0, V();
  };
  function V() {
    requestAnimationFrame(() => {
      t(26, X = (performance.now() - C) / 1e3), S && V();
    });
  }
  function H() {
    t(26, X = 0), t(0, a = t(27, I = t(19, x = null))), S && (S = !1);
  }
  eh(() => {
    S && H();
  });
  let x = null;
  function _e(j) {
    ba[j ? "unshift" : "push"](() => {
      z = j, t(16, z), t(7, g), t(14, F), t(15, O);
    });
  }
  const se = () => {
    s("clear_status");
  };
  function ae(j) {
    ba[j ? "unshift" : "push"](() => {
      M = j, t(13, M);
    });
  }
  return l.$$set = (j) => {
    "i18n" in j && t(1, r = j.i18n), "eta" in j && t(0, a = j.eta), "queue_position" in j && t(2, _ = j.queue_position), "queue_size" in j && t(3, c = j.queue_size), "status" in j && t(4, f = j.status), "scroll_to_output" in j && t(22, u = j.scroll_to_output), "timer" in j && t(5, d = j.timer), "show_progress" in j && t(6, h = j.show_progress), "message" in j && t(23, m = j.message), "progress" in j && t(7, g = j.progress), "variant" in j && t(8, b = j.variant), "loading_text" in j && t(9, v = j.loading_text), "absolute" in j && t(10, p = j.absolute), "translucent" in j && t(11, y = j.translucent), "border" in j && t(12, q = j.border), "autoscroll" in j && t(24, D = j.autoscroll), "$$scope" in j && t(29, o = j.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = I), a != null && I !== a && (t(28, w = (performance.now() - C) / 1e3 + a), t(19, x = w.toFixed(1)), t(27, I = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, L = w === null || w <= 0 || !X ? null : Math.min(X / w, 1)), l.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, me = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, F = g.map((j) => {
      if (j.index != null && j.length != null)
        return j.index / j.length;
      if (j.progress != null)
        return j.progress;
    })) : t(14, F = null), F ? (t(15, O = F[F.length - 1]), z && (O === 0 ? t(16, z.style.transition = "0", z) : t(16, z.style.transition = "150ms", z))) : t(15, O = void 0)), l.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? R() : H()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && M && u && (f === "pending" || f === "complete") && gh(M, D), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = X.toFixed(1));
  }, [
    a,
    r,
    _,
    c,
    f,
    d,
    h,
    g,
    b,
    v,
    p,
    y,
    q,
    M,
    F,
    O,
    z,
    L,
    me,
    x,
    n,
    s,
    u,
    m,
    D,
    C,
    X,
    I,
    w,
    o,
    i,
    _e,
    se,
    ae
  ];
}
class ph extends Z1 {
  constructor(e) {
    super(), G1(
      this,
      e,
      bh,
      hh,
      J1,
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
  SvelteComponent: m8,
  add_render_callback: g8,
  append: b8,
  attr: p8,
  bubble: w8,
  check_outros: v8,
  create_component: k8,
  create_in_transition: y8,
  create_out_transition: C8,
  destroy_component: S8,
  detach: q8,
  element: z8,
  group_outros: B8,
  init: D8,
  insert: M8,
  listen: L8,
  mount_component: E8,
  run_all: R8,
  safe_not_equal: W8,
  set_data: A8,
  space: X8,
  stop_propagation: Y8,
  text: H8,
  transition_in: I8,
  transition_out: j8
} = window.__gradio__svelte__internal, { createEventDispatcher: T8, onMount: $8 } = window.__gradio__svelte__internal, {
  SvelteComponent: F8,
  append: O8,
  attr: x8,
  bubble: V8,
  check_outros: N8,
  create_animation: U8,
  create_component: P8,
  destroy_component: K8,
  detach: Z8,
  element: G8,
  ensure_array_like: J8,
  fix_and_outro_and_destroy_block: Q8,
  fix_position: e7,
  group_outros: t7,
  init: n7,
  insert: l7,
  mount_component: i7,
  noop: o7,
  safe_not_equal: s7,
  set_style: a7,
  space: r7,
  transition_in: _7,
  transition_out: c7,
  update_keyed_each: u7
} = window.__gradio__svelte__internal, { setContext: f7, getContext: wh } = window.__gradio__svelte__internal, vh = "WORKER_PROXY_CONTEXT_KEY";
function p_() {
  return wh(vh);
}
function kh(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function w_(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function v_(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!kh(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function yh(l) {
  if (l == null || !v_(l))
    return l;
  const e = p_();
  if (e == null)
    return l;
  const n = new URL(l, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const o = new Blob([i.body], {
      type: w_(i.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Ch,
  assign: Mi,
  check_outros: k_,
  compute_rest_props: Wa,
  create_slot: zs,
  detach: Oi,
  element: y_,
  empty: C_,
  exclude_internal_props: Sh,
  get_all_dirty_from_scope: Bs,
  get_slot_changes: Ds,
  get_spread_update: S_,
  group_outros: q_,
  init: qh,
  insert: xi,
  listen: z_,
  prevent_default: zh,
  safe_not_equal: Bh,
  set_attributes: Li,
  transition_in: An,
  transition_out: Xn,
  update_slot_base: Ms
} = window.__gradio__svelte__internal, { createEventDispatcher: Dh } = window.__gradio__svelte__internal;
function Mh(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[8].default
  ), r = zs(
    s,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      l[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      l[1]
    ) },
    /*$$restProps*/
    l[6]
  ], _ = {};
  for (let c = 0; c < a.length; c += 1)
    _ = Mi(_, a[c]);
  return {
    c() {
      e = y_("a"), r && r.c(), Li(e, _);
    },
    m(c, f) {
      xi(c, e, f), r && r.m(e, null), n = !0, i || (o = z_(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(c, f) {
      r && r.p && (!n || f & /*$$scope*/
      128) && Ms(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? Ds(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Bs(
          /*$$scope*/
          c[7]
        ),
        null
      ), Li(e, _ = S_(a, [
        (!n || f & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || f & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ]));
    },
    i(c) {
      n || (An(r, c), n = !0);
    },
    o(c) {
      Xn(r, c), n = !1;
    },
    d(c) {
      c && Oi(e), r && r.d(c), i = !1, o();
    }
  };
}
function Lh(l) {
  let e, t, n, i;
  const o = [Rh, Eh], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = C_();
    },
    m(a, _) {
      s[e].m(a, _), xi(a, n, _), i = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (q_(), Xn(s[c], 1, 1, () => {
        s[c] = null;
      }), k_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), An(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (An(t), i = !0);
    },
    o(a) {
      Xn(t), i = !1;
    },
    d(a) {
      a && Oi(n), s[e].d(a);
    }
  };
}
function Eh(l) {
  let e, t, n, i;
  const o = (
    /*#slots*/
    l[8].default
  ), s = zs(
    o,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let r = [
    /*$$restProps*/
    l[6],
    { href: (
      /*href*/
      l[0]
    ) }
  ], a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = Mi(a, r[_]);
  return {
    c() {
      e = y_("a"), s && s.c(), Li(e, a);
    },
    m(_, c) {
      xi(_, e, c), s && s.m(e, null), t = !0, n || (i = z_(e, "click", zh(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && Ms(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? Ds(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : Bs(
          /*$$scope*/
          _[7]
        ),
        null
      ), Li(e, a = S_(r, [
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
      t || (An(s, _), t = !0);
    },
    o(_) {
      Xn(s, _), t = !1;
    },
    d(_) {
      _ && Oi(e), s && s.d(_), n = !1, i();
    }
  };
}
function Rh(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = zs(
    t,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = !0;
    },
    p(i, o) {
      n && n.p && (!e || o & /*$$scope*/
      128) && Ms(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? Ds(
          t,
          /*$$scope*/
          i[7],
          o,
          null
        ) : Bs(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (An(n, i), e = !0);
    },
    o(i) {
      Xn(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Wh(l) {
  let e, t, n, i, o;
  const s = [Lh, Mh], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && v_(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = s[t](l), {
    c() {
      n.c(), i = C_();
    },
    m(_, c) {
      r[t].m(_, c), xi(_, i, c), o = !0;
    },
    p(_, [c]) {
      let f = t;
      t = a(_, c), t === f ? r[t].p(_, c) : (q_(), Xn(r[f], 1, 1, () => {
        r[f] = null;
      }), k_(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), An(n, 1), n.m(i.parentNode, i));
    },
    i(_) {
      o || (An(n), o = !0);
    },
    o(_) {
      Xn(n), o = !1;
    },
    d(_) {
      _ && Oi(i), r[t].d(_);
    }
  };
}
function Ah(l, e, t) {
  const n = ["href", "download"];
  let i = Wa(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(h, m, g, b) {
    function v(p) {
      return p instanceof g ? p : new g(function(y) {
        y(p);
      });
    }
    return new (g || (g = Promise))(function(p, y) {
      function q(S) {
        try {
          M(b.next(S));
        } catch (C) {
          y(C);
        }
      }
      function D(S) {
        try {
          M(b.throw(S));
        } catch (C) {
          y(C);
        }
      }
      function M(S) {
        S.done ? p(S.value) : v(S.value).then(q, D);
      }
      M((b = b.apply(h, m || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = Dh();
  let f = !1;
  const u = p_();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (f)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (u == null)
        throw new Error("Wasm worker proxy is not available.");
      const m = new URL(a, window.location.href).pathname;
      t(2, f = !0), u.httpRequest({
        method: "GET",
        path: m,
        headers: {},
        query_string: ""
      }).then((g) => {
        if (g.status !== 200)
          throw new Error(`Failed to get file ${m} from the Wasm worker.`);
        const b = new Blob(
          [g.body],
          {
            type: w_(g.headers, "content-type")
          }
        ), v = URL.createObjectURL(b), p = document.createElement("a");
        p.href = v, p.download = _, p.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, f = !1);
      });
    });
  }
  return l.$$set = (h) => {
    e = Mi(Mi({}, e), Sh(h)), t(6, i = Wa(e, n)), "href" in h && t(0, a = h.href), "download" in h && t(1, _ = h.download), "$$scope" in h && t(7, s = h.$$scope);
  }, [
    a,
    _,
    f,
    c,
    u,
    d,
    i,
    s,
    o
  ];
}
class Xh extends Ch {
  constructor(e) {
    super(), qh(this, e, Ah, Wh, Bh, { href: 0, download: 1 });
  }
}
var Yh = Object.defineProperty, Hh = (l, e, t) => e in l ? Yh(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, It = (l, e, t) => (Hh(l, typeof e != "symbol" ? e + "" : e, t), t), B_ = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, Cl = (l, e, t) => (B_(l, e, "read from private field"), e.get(l)), Ih = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, jh = (l, e, t, n) => (B_(l, e, "write to private field"), e.set(l, t), t), cn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function D_(l, e) {
  return l.map(
    (t) => new Th({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Th {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: i,
    blob: o,
    is_stream: s,
    mime_type: r,
    alt_text: a
  }) {
    It(this, "path"), It(this, "url"), It(this, "orig_name"), It(this, "size"), It(this, "blob"), It(this, "is_stream"), It(this, "mime_type"), It(this, "alt_text"), It(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class d7 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = Cl(this, cn) + t; ; ) {
          const i = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (i === -1 || i - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (i === -1)
            break;
          const s = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, s)), t = t.slice(i + 1);
        }
        jh(this, cn, t);
      },
      flush: (t) => {
        if (Cl(this, cn) === "")
          return;
        const n = e.allowCR && Cl(this, cn).endsWith("\r") ? Cl(this, cn).slice(0, -1) : Cl(this, cn);
        t.enqueue(n);
      }
    }), Ih(this, cn, "");
  }
}
cn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: $h,
  append: Ne,
  attr: Bn,
  detach: M_,
  element: Dn,
  init: Fh,
  insert: L_,
  noop: Aa,
  safe_not_equal: Oh,
  set_data: Ei,
  set_style: Ro,
  space: hs,
  text: Qn,
  toggle_class: Xa
} = window.__gradio__svelte__internal, { onMount: xh, createEventDispatcher: Vh, onDestroy: Nh } = window.__gradio__svelte__internal;
function Ya(l) {
  let e, t, n, i, o = Al(
    /*file_to_display*/
    l[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), f;
  return {
    c() {
      e = Dn("div"), t = Dn("span"), n = Dn("div"), i = Dn("progress"), s = Qn(o), a = hs(), _ = Dn("span"), f = Qn(c), Ro(i, "visibility", "hidden"), Ro(i, "height", "0"), Ro(i, "width", "0"), i.value = r = Al(
        /*file_to_display*/
        l[2]
      ), Bn(i, "max", "100"), Bn(i, "class", "svelte-cr2edf"), Bn(n, "class", "progress-bar svelte-cr2edf"), Bn(_, "class", "file-name svelte-cr2edf"), Bn(e, "class", "file svelte-cr2edf");
    },
    m(u, d) {
      L_(u, e, d), Ne(e, t), Ne(t, n), Ne(n, i), Ne(i, s), Ne(e, a), Ne(e, _), Ne(_, f);
    },
    p(u, d) {
      d & /*file_to_display*/
      4 && o !== (o = Al(
        /*file_to_display*/
        u[2]
      ) + "") && Ei(s, o), d & /*file_to_display*/
      4 && r !== (r = Al(
        /*file_to_display*/
        u[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      u[2].orig_name + "") && Ei(f, c);
    },
    d(u) {
      u && M_(e);
    }
  };
}
function Uh(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, _, c, f = (
    /*file_to_display*/
    l[2] && Ya(l)
  );
  return {
    c() {
      e = Dn("div"), t = Dn("span"), n = Qn("Uploading "), o = Qn(i), s = hs(), a = Qn(r), _ = Qn("..."), c = hs(), f && f.c(), Bn(t, "class", "uploading svelte-cr2edf"), Bn(e, "class", "wrap svelte-cr2edf"), Xa(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(u, d) {
      L_(u, e, d), Ne(e, t), Ne(t, n), Ne(t, o), Ne(t, s), Ne(t, a), Ne(t, _), Ne(e, c), f && f.m(e, null);
    },
    p(u, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      u[0].length + "") && Ei(o, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      u[0].length > 1 ? "files" : "file") && Ei(a, r), /*file_to_display*/
      u[2] ? f ? f.p(u, d) : (f = Ya(u), f.c(), f.m(e, null)) : f && (f.d(1), f = null), d & /*progress*/
      2 && Xa(
        e,
        "progress",
        /*progress*/
        u[1]
      );
    },
    i: Aa,
    o: Aa,
    d(u) {
      u && M_(e), f && f.d();
    }
  };
}
function Al(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function Ph(l) {
  let e = 0;
  return l.forEach((t) => {
    e += Al(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function Kh(l, e, t) {
  var n = this && this.__awaiter || function(m, g, b, v) {
    function p(y) {
      return y instanceof b ? y : new b(function(q) {
        q(y);
      });
    }
    return new (b || (b = Promise))(function(y, q) {
      function D(C) {
        try {
          S(v.next(C));
        } catch (X) {
          q(X);
        }
      }
      function M(C) {
        try {
          S(v.throw(C));
        } catch (X) {
          q(X);
        }
      }
      function S(C) {
        C.done ? y(C.value) : p(C.value).then(D, M);
      }
      S((v = v.apply(m, g || [])).next());
    });
  };
  let { upload_id: i } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, f, u = s.map((m) => Object.assign(Object.assign({}, m), { progress: 0 }));
  const d = Vh();
  function h(m, g) {
    t(0, u = u.map((b) => (b.orig_name === m && (b.progress += g), b)));
  }
  return xh(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(m) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(m.data);
        _ || t(1, _ = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), h(g.orig_name, g.chunk_size));
      });
    };
  })), Nh(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (m) => {
    "upload_id" in m && t(3, i = m.upload_id), "root" in m && t(4, o = m.root), "files" in m && t(5, s = m.files), "stream_handler" in m && t(6, r = m.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && Ph(u), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, f = c || u[0]);
  }, [
    u,
    _,
    f,
    i,
    o,
    s,
    r,
    c
  ];
}
class Zh extends $h {
  constructor(e) {
    super(), Fh(this, e, Kh, Uh, Oh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Gh,
  append: Ha,
  attr: De,
  binding_callbacks: Jh,
  bubble: kn,
  check_outros: E_,
  create_component: Qh,
  create_slot: R_,
  destroy_component: em,
  detach: Vi,
  element: ms,
  empty: W_,
  get_all_dirty_from_scope: A_,
  get_slot_changes: X_,
  group_outros: Y_,
  init: tm,
  insert: Ni,
  listen: Je,
  mount_component: nm,
  prevent_default: yn,
  run_all: lm,
  safe_not_equal: im,
  set_style: H_,
  space: om,
  stop_propagation: Cn,
  toggle_class: Se,
  transition_in: bn,
  transition_out: Yn,
  update_slot_base: I_
} = window.__gradio__svelte__internal, { createEventDispatcher: sm, tick: am } = window.__gradio__svelte__internal;
function rm(l) {
  let e, t, n, i, o, s, r, a, _, c, f;
  const u = (
    /*#slots*/
    l[26].default
  ), d = R_(
    u,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ms("button"), d && d.c(), t = om(), n = ms("input"), De(n, "aria-label", "file upload"), De(n, "data-testid", "file-upload"), De(n, "type", "file"), De(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = o = /*file_count*/
      l[6] === "multiple" || void 0, De(n, "webkitdirectory", s = /*file_count*/
      l[6] === "directory" || void 0), De(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), De(n, "class", "svelte-1s26xmt"), De(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), De(e, "class", "svelte-1s26xmt"), Se(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), Se(
        e,
        "center",
        /*center*/
        l[4]
      ), Se(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), Se(
        e,
        "flex",
        /*flex*/
        l[5]
      ), Se(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), H_(e, "height", "100%");
    },
    m(h, m) {
      Ni(h, e, m), d && d.m(e, null), Ha(e, t), Ha(e, n), l[34](n), _ = !0, c || (f = [
        Je(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        Je(e, "drag", Cn(yn(
          /*drag_handler*/
          l[27]
        ))),
        Je(e, "dragstart", Cn(yn(
          /*dragstart_handler*/
          l[28]
        ))),
        Je(e, "dragend", Cn(yn(
          /*dragend_handler*/
          l[29]
        ))),
        Je(e, "dragover", Cn(yn(
          /*dragover_handler*/
          l[30]
        ))),
        Je(e, "dragenter", Cn(yn(
          /*dragenter_handler*/
          l[31]
        ))),
        Je(e, "dragleave", Cn(yn(
          /*dragleave_handler*/
          l[32]
        ))),
        Je(e, "drop", Cn(yn(
          /*drop_handler*/
          l[33]
        ))),
        Je(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        Je(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        Je(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        Je(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], c = !0);
    },
    p(h, m) {
      d && d.p && (!_ || m[0] & /*$$scope*/
      33554432) && I_(
        d,
        u,
        h,
        /*$$scope*/
        h[25],
        _ ? X_(
          u,
          /*$$scope*/
          h[25],
          m,
          null
        ) : A_(
          /*$$scope*/
          h[25]
        ),
        null
      ), (!_ || m[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      h[16] || void 0)) && De(n, "accept", i), (!_ || m[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      h[6] === "multiple" || void 0)) && (n.multiple = o), (!_ || m[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      h[6] === "directory" || void 0)) && De(n, "webkitdirectory", s), (!_ || m[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      h[6] === "directory" || void 0)) && De(n, "mozdirectory", r), (!_ || m[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      h[9] ? -1 : 0)) && De(e, "tabindex", a), (!_ || m[0] & /*hidden*/
      512) && Se(
        e,
        "hidden",
        /*hidden*/
        h[9]
      ), (!_ || m[0] & /*center*/
      16) && Se(
        e,
        "center",
        /*center*/
        h[4]
      ), (!_ || m[0] & /*boundedheight*/
      8) && Se(
        e,
        "boundedheight",
        /*boundedheight*/
        h[3]
      ), (!_ || m[0] & /*flex*/
      32) && Se(
        e,
        "flex",
        /*flex*/
        h[5]
      ), (!_ || m[0] & /*disable_click*/
      128) && Se(
        e,
        "disable_click",
        /*disable_click*/
        h[7]
      );
    },
    i(h) {
      _ || (bn(d, h), _ = !0);
    },
    o(h) {
      Yn(d, h), _ = !1;
    },
    d(h) {
      h && Vi(e), d && d.d(h), l[34](null), c = !1, lm(f);
    }
  };
}
function _m(l) {
  let e, t, n = !/*hidden*/
  l[9] && Ia(l);
  return {
    c() {
      n && n.c(), e = W_();
    },
    m(i, o) {
      n && n.m(i, o), Ni(i, e, o), t = !0;
    },
    p(i, o) {
      /*hidden*/
      i[9] ? n && (Y_(), Yn(n, 1, 1, () => {
        n = null;
      }), E_()) : n ? (n.p(i, o), o[0] & /*hidden*/
      512 && bn(n, 1)) : (n = Ia(i), n.c(), bn(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (bn(n), t = !0);
    },
    o(i) {
      Yn(n), t = !1;
    },
    d(i) {
      i && Vi(e), n && n.d(i);
    }
  };
}
function cm(l) {
  let e, t, n, i, o;
  const s = (
    /*#slots*/
    l[26].default
  ), r = R_(
    s,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = ms("button"), r && r.c(), De(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), De(e, "class", "svelte-1s26xmt"), Se(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), Se(
        e,
        "center",
        /*center*/
        l[4]
      ), Se(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), Se(
        e,
        "flex",
        /*flex*/
        l[5]
      ), H_(e, "height", "100%");
    },
    m(a, _) {
      Ni(a, e, _), r && r.m(e, null), n = !0, i || (o = Je(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && I_(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? X_(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : A_(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || _[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && De(e, "tabindex", t), (!n || _[0] & /*hidden*/
      512) && Se(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || _[0] & /*center*/
      16) && Se(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || _[0] & /*boundedheight*/
      8) && Se(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || _[0] & /*flex*/
      32) && Se(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (bn(r, a), n = !0);
    },
    o(a) {
      Yn(r, a), n = !1;
    },
    d(a) {
      a && Vi(e), r && r.d(a), i = !1, o();
    }
  };
}
function Ia(l) {
  let e, t;
  return e = new Zh({
    props: {
      root: (
        /*root*/
        l[8]
      ),
      upload_id: (
        /*upload_id*/
        l[14]
      ),
      files: (
        /*file_data*/
        l[15]
      ),
      stream_handler: (
        /*stream_handler*/
        l[11]
      )
    }
  }), {
    c() {
      Qh(e.$$.fragment);
    },
    m(n, i) {
      nm(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      256 && (o.root = /*root*/
      n[8]), i[0] & /*upload_id*/
      16384 && (o.upload_id = /*upload_id*/
      n[14]), i[0] & /*file_data*/
      32768 && (o.files = /*file_data*/
      n[15]), i[0] & /*stream_handler*/
      2048 && (o.stream_handler = /*stream_handler*/
      n[11]), e.$set(o);
    },
    i(n) {
      t || (bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      em(e, n);
    }
  };
}
function um(l) {
  let e, t, n, i;
  const o = [cm, _m, rm], s = [];
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
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = W_();
    },
    m(a, _) {
      s[e].m(a, _), Ni(a, n, _), i = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Y_(), Yn(s[c], 1, 1, () => {
        s[c] = null;
      }), E_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (bn(t), i = !0);
    },
    o(a) {
      Yn(t), i = !1;
    },
    d(a) {
      a && Vi(n), s[e].d(a);
    }
  };
}
function fm(l, e, t) {
  if (!l || l === "*" || l === "file/*" || Array.isArray(l) && l.some((i) => i === "*" || i === "file/*"))
    return !0;
  let n;
  if (typeof l == "string")
    n = l.split(",").map((i) => i.trim());
  else if (Array.isArray(l))
    n = l;
  else
    return !1;
  return n.includes(e) || n.some((i) => {
    const [o] = i.split("/").map((s) => s.trim());
    return i.endsWith("/*") && t.startsWith(o + "/");
  });
}
function dm(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(W, $, ne, re) {
    function le(ge) {
      return ge instanceof ne ? ge : new ne(function(te) {
        te(ge);
      });
    }
    return new (ne || (ne = Promise))(function(ge, te) {
      function E(ht) {
        try {
          lt(re.next(ht));
        } catch (wn) {
          te(wn);
        }
      }
      function Ze(ht) {
        try {
          lt(re.throw(ht));
        } catch (wn) {
          te(wn);
        }
      }
      function lt(ht) {
        ht.done ? ge(ht.value) : le(ht.value).then(E, Ze);
      }
      lt((re = re.apply(W, $ || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: f = "single" } = e, { disable_click: u = !1 } = e, { root: d } = e, { hidden: h = !1 } = e, { format: m = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: v = !0 } = e, { max_file_size: p = null } = e, { upload: y } = e, { stream_handler: q } = e, D, M, S;
  const C = sm(), X = ["image", "video", "audio", "text", "file"], I = (W) => W.startsWith(".") || W.endsWith("/*") ? W : X.includes(W) ? W + "/*" : "." + W;
  function w() {
    t(20, r = !r);
  }
  function L() {
    navigator.clipboard.read().then((W) => o(this, void 0, void 0, function* () {
      for (let $ = 0; $ < W.length; $++) {
        const ne = W[$].types.find((re) => re.startsWith("image/"));
        if (ne) {
          W[$].getType(ne).then((re) => o(this, void 0, void 0, function* () {
            const le = new File([re], `clipboard.${ne.replace("image/", "")}`);
            yield z([le]);
          }));
          break;
        }
      }
    }));
  }
  function F() {
    u || b && (t(2, b.value = "", b), b.click());
  }
  function O(W) {
    return o(this, void 0, void 0, function* () {
      yield am(), t(14, D = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const $ = yield y(W, d, D, p ?? 1 / 0);
        return C("load", f === "single" ? $ == null ? void 0 : $[0] : $), t(1, g = !1), $ || [];
      } catch ($) {
        return C("error", $.message), t(1, g = !1), [];
      }
    });
  }
  function z(W) {
    return o(this, void 0, void 0, function* () {
      if (!W.length)
        return;
      let $ = W.map((ne) => new File([ne], ne instanceof File ? ne.name : "file", { type: ne.type }));
      return t(15, M = yield D_($)), yield O(M);
    });
  }
  function me(W) {
    return o(this, void 0, void 0, function* () {
      const $ = W.target;
      if ($.files)
        if (m != "blob")
          yield z(Array.from($.files));
        else {
          if (f === "single") {
            C("load", $.files[0]);
            return;
          }
          C("load", $.files);
        }
    });
  }
  function R(W) {
    return o(this, void 0, void 0, function* () {
      var $;
      if (t(20, r = !1), !(!(($ = W.dataTransfer) === null || $ === void 0) && $.files)) return;
      const ne = Array.from(W.dataTransfer.files).filter((re) => {
        const le = "." + re.name.split(".").pop();
        return le && fm(S, le, re.type) || (le && Array.isArray(s) ? s.includes(le) : le === s) ? !0 : (C("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield z(ne);
    });
  }
  function V(W) {
    kn.call(this, l, W);
  }
  function H(W) {
    kn.call(this, l, W);
  }
  function x(W) {
    kn.call(this, l, W);
  }
  function _e(W) {
    kn.call(this, l, W);
  }
  function se(W) {
    kn.call(this, l, W);
  }
  function ae(W) {
    kn.call(this, l, W);
  }
  function j(W) {
    kn.call(this, l, W);
  }
  function Ke(W) {
    Jh[W ? "unshift" : "push"](() => {
      b = W, t(2, b);
    });
  }
  return l.$$set = (W) => {
    "filetype" in W && t(0, s = W.filetype), "dragging" in W && t(20, r = W.dragging), "boundedheight" in W && t(3, a = W.boundedheight), "center" in W && t(4, _ = W.center), "flex" in W && t(5, c = W.flex), "file_count" in W && t(6, f = W.file_count), "disable_click" in W && t(7, u = W.disable_click), "root" in W && t(8, d = W.root), "hidden" in W && t(9, h = W.hidden), "format" in W && t(21, m = W.format), "uploading" in W && t(1, g = W.uploading), "hidden_upload" in W && t(2, b = W.hidden_upload), "show_progress" in W && t(10, v = W.show_progress), "max_file_size" in W && t(22, p = W.max_file_size), "upload" in W && t(23, y = W.upload), "stream_handler" in W && t(11, q = W.stream_handler), "$$scope" in W && t(25, i = W.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, S = null) : typeof s == "string" ? t(16, S = I(s)) : (t(0, s = s.map(I)), t(16, S = s.join(", "))));
  }, [
    s,
    g,
    b,
    a,
    _,
    c,
    f,
    u,
    d,
    h,
    v,
    q,
    L,
    F,
    D,
    M,
    S,
    w,
    me,
    R,
    r,
    m,
    p,
    y,
    z,
    i,
    n,
    V,
    H,
    x,
    _e,
    se,
    ae,
    j,
    Ke
  ];
}
class hm extends Gh {
  constructor(e) {
    super(), tm(
      this,
      e,
      dm,
      um,
      im,
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
  SvelteComponent: h7,
  append: m7,
  attr: g7,
  check_outros: b7,
  create_component: p7,
  destroy_component: w7,
  detach: v7,
  element: k7,
  group_outros: y7,
  init: C7,
  insert: S7,
  mount_component: q7,
  safe_not_equal: z7,
  set_style: B7,
  space: D7,
  toggle_class: M7,
  transition_in: L7,
  transition_out: E7
} = window.__gradio__svelte__internal, { createEventDispatcher: R7 } = window.__gradio__svelte__internal, {
  SvelteComponent: W7,
  assign: A7,
  compute_rest_props: X7,
  detach: Y7,
  element: H7,
  exclude_internal_props: I7,
  get_spread_update: j7,
  init: T7,
  insert: $7,
  noop: F7,
  safe_not_equal: O7,
  set_attributes: x7,
  src_url_equal: V7,
  toggle_class: N7
} = window.__gradio__svelte__internal, {
  SvelteComponent: U7,
  append: P7,
  attr: K7,
  bubble: Z7,
  check_outros: G7,
  create_component: J7,
  destroy_component: Q7,
  detach: e9,
  element: t9,
  empty: n9,
  group_outros: l9,
  init: i9,
  insert: o9,
  listen: s9,
  mount_component: a9,
  safe_not_equal: r9,
  space: _9,
  toggle_class: c9,
  transition_in: u9,
  transition_out: f9
} = window.__gradio__svelte__internal, { createEventDispatcher: d9 } = window.__gradio__svelte__internal, {
  SvelteComponent: mm,
  append: ei,
  attr: Wo,
  create_component: gm,
  destroy_component: bm,
  detach: pm,
  element: Ao,
  init: wm,
  insert: vm,
  listen: km,
  mount_component: ym,
  noop: Cm,
  safe_not_equal: Sm,
  set_style: qm,
  space: zm,
  text: Bm,
  transition_in: Dm,
  transition_out: Mm
} = window.__gradio__svelte__internal, { createEventDispatcher: Lm } = window.__gradio__svelte__internal;
function Em(l) {
  let e, t, n, i, o, s = "Click to Access Webcam", r, a, _, c;
  return i = new n_({}), {
    c() {
      e = Ao("button"), t = Ao("div"), n = Ao("span"), gm(i.$$.fragment), o = zm(), r = Bm(s), Wo(n, "class", "icon-wrap svelte-fjcd9c"), Wo(t, "class", "wrap svelte-fjcd9c"), Wo(e, "class", "svelte-fjcd9c"), qm(e, "height", "100%");
    },
    m(f, u) {
      vm(f, e, u), ei(e, t), ei(t, n), ym(i, n, null), ei(t, o), ei(t, r), a = !0, _ || (c = km(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), _ = !0);
    },
    p: Cm,
    i(f) {
      a || (Dm(i.$$.fragment, f), a = !0);
    },
    o(f) {
      Mm(i.$$.fragment, f), a = !1;
    },
    d(f) {
      f && pm(e), bm(i), _ = !1, c();
    }
  };
}
function Rm(l) {
  const e = Lm();
  return [e, () => e("click")];
}
class Wm extends mm {
  constructor(e) {
    super(), wm(this, e, Rm, Em, Sm, {});
  }
}
function Am() {
  return navigator.mediaDevices.enumerateDevices();
}
function Xm(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function ja(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((o) => (Xm(o, e), o));
}
function Ym(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Hm,
  action_destroyer: Im,
  add_render_callback: jm,
  append: Nt,
  attr: ve,
  binding_callbacks: Tm,
  check_outros: Hl,
  create_component: _l,
  create_in_transition: $m,
  destroy_component: cl,
  destroy_each: Fm,
  detach: Ue,
  element: nt,
  empty: Ls,
  ensure_array_like: Ta,
  group_outros: Il,
  init: Om,
  insert: Pe,
  listen: Ri,
  mount_component: ul,
  noop: Es,
  run_all: xm,
  safe_not_equal: Vm,
  set_data: j_,
  set_input_value: gs,
  space: $l,
  stop_propagation: Nm,
  text: T_,
  toggle_class: ti,
  transition_in: qe,
  transition_out: Le
} = window.__gradio__svelte__internal, { createEventDispatcher: Um, onMount: Pm } = window.__gradio__svelte__internal;
function $a(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function Km(l) {
  let e, t, n, i, o, s, r, a, _, c, f;
  const u = [Jm, Gm], d = [];
  function h(b, v) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = h(l), i = d[n] = u[n](l);
  let m = !/*recording*/
  l[8] && Fa(l), g = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && Oa(l)
  );
  return {
    c() {
      e = nt("div"), t = nt("button"), i.c(), s = $l(), m && m.c(), r = $l(), g && g.c(), a = Ls(), ve(t, "aria-label", o = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), ve(t, "class", "svelte-8hqvb6"), ve(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, v) {
      Pe(b, e, v), Nt(e, t), d[n].m(t, null), Nt(e, s), m && m.m(e, null), Pe(b, r, v), g && g.m(b, v), Pe(b, a, v), _ = !0, c || (f = Ri(
        t,
        "click",
        /*record_video_or_photo*/
        l[13]
      ), c = !0);
    },
    p(b, v) {
      let p = n;
      n = h(b), n === p ? d[n].p(b, v) : (Il(), Le(d[p], 1, 1, () => {
        d[p] = null;
      }), Hl(), i = d[n], i ? i.p(b, v) : (i = d[n] = u[n](b), i.c()), qe(i, 1), i.m(t, null)), (!_ || v[0] & /*mode*/
      2 && o !== (o = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && ve(t, "aria-label", o), /*recording*/
      b[8] ? m && (Il(), Le(m, 1, 1, () => {
        m = null;
      }), Hl()) : m ? (m.p(b, v), v[0] & /*recording*/
      256 && qe(m, 1)) : (m = Fa(b), m.c(), qe(m, 1), m.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, v), v[0] & /*options_open, selected_device*/
      1152 && qe(g, 1)) : (g = Oa(b), g.c(), qe(g, 1), g.m(a.parentNode, a)) : g && (Il(), Le(g, 1, 1, () => {
        g = null;
      }), Hl());
    },
    i(b) {
      _ || (qe(i), qe(m), qe(g), _ = !0);
    },
    o(b) {
      Le(i), Le(m), Le(g), _ = !1;
    },
    d(b) {
      b && (Ue(e), Ue(r), Ue(a)), d[n].d(), m && m.d(), g && g.d(b), c = !1, f();
    }
  };
}
function Zm(l) {
  let e, t, n, i;
  return t = new Wm({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = nt("div"), _l(t.$$.fragment), ve(e, "title", "grant webcam access");
    },
    m(o, s) {
      Pe(o, e, s), ul(t, e, null), i = !0;
    },
    p: Es,
    i(o) {
      i || (qe(t.$$.fragment, o), o && (n || jm(() => {
        n = $m(e, I1, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), i = !1;
    },
    d(o) {
      o && Ue(e), cl(t);
    }
  };
}
function Gm(l) {
  let e, t, n;
  return t = new wf({}), {
    c() {
      e = nt("div"), _l(t.$$.fragment), ve(e, "class", "icon svelte-8hqvb6"), ve(e, "title", "capture photo");
    },
    m(i, o) {
      Pe(i, e, o), ul(t, e, null), n = !0;
    },
    p: Es,
    i(i) {
      n || (qe(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Le(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ue(e), cl(t);
    }
  };
}
function Jm(l) {
  let e, t, n, i;
  const o = [e0, Qm], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = Ls();
    },
    m(a, _) {
      s[e].m(a, _), Pe(a, n, _), i = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (Il(), Le(s[c], 1, 1, () => {
        s[c] = null;
      }), Hl(), t = s[e], t || (t = s[e] = o[e](a), t.c()), qe(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (qe(t), i = !0);
    },
    o(a) {
      Le(t), i = !1;
    },
    d(a) {
      a && Ue(n), s[e].d(a);
    }
  };
}
function Qm(l) {
  let e, t, n;
  return t = new Bf({}), {
    c() {
      e = nt("div"), _l(t.$$.fragment), ve(e, "class", "icon red svelte-8hqvb6"), ve(e, "title", "start recording");
    },
    m(i, o) {
      Pe(i, e, o), ul(t, e, null), n = !0;
    },
    i(i) {
      n || (qe(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Le(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ue(e), cl(t);
    }
  };
}
function e0(l) {
  let e, t, n;
  return t = new Id({}), {
    c() {
      e = nt("div"), _l(t.$$.fragment), ve(e, "class", "icon red svelte-8hqvb6"), ve(e, "title", "stop recording");
    },
    m(i, o) {
      Pe(i, e, o), ul(t, e, null), n = !0;
    },
    i(i) {
      n || (qe(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Le(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ue(e), cl(t);
    }
  };
}
function Fa(l) {
  let e, t, n, i, o;
  return t = new qs({}), {
    c() {
      e = nt("button"), _l(t.$$.fragment), ve(e, "class", "icon svelte-8hqvb6"), ve(e, "aria-label", "select input source");
    },
    m(s, r) {
      Pe(s, e, r), ul(t, e, null), n = !0, i || (o = Ri(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: Es,
    i(s) {
      n || (qe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ue(e), cl(t), i = !1, o();
    }
  };
}
function Oa(l) {
  let e, t, n, i, o, s, r;
  n = new qs({});
  function a(f, u) {
    return (
      /*available_video_devices*/
      f[6].length === 0 ? n0 : t0
    );
  }
  let _ = a(l), c = _(l);
  return {
    c() {
      e = nt("select"), t = nt("button"), _l(n.$$.fragment), i = $l(), c.c(), ve(t, "class", "inset-icon svelte-8hqvb6"), ve(e, "class", "select-wrap svelte-8hqvb6"), ve(e, "aria-label", "select source");
    },
    m(f, u) {
      Pe(f, e, u), Nt(e, t), ul(n, t, null), Nt(t, i), c.m(e, null), o = !0, s || (r = [
        Ri(t, "click", Nm(
          /*click_handler_2*/
          l[22]
        )),
        Im(Rs.call(
          null,
          e,
          /*handle_click_outside*/
          l[14]
        )),
        Ri(
          e,
          "change",
          /*handle_device_change*/
          l[11]
        )
      ], s = !0);
    },
    p(f, u) {
      _ === (_ = a(f)) && c ? c.p(f, u) : (c.d(1), c = _(f), c && (c.c(), c.m(e, null)));
    },
    i(f) {
      o || (qe(n.$$.fragment, f), o = !0);
    },
    o(f) {
      Le(n.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Ue(e), cl(n), c.d(), s = !1, xm(r);
    }
  };
}
function t0(l) {
  let e, t = Ta(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = xa($a(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Ls();
    },
    m(i, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, o);
      Pe(i, e, o);
    },
    p(i, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = Ta(
          /*available_video_devices*/
          i[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = $a(i, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = xa(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Ue(e), Fm(n, i);
    }
  };
}
function n0(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = nt("option"), n = T_(t), e.__value = "", gs(e, e.__value), ve(e, "class", "svelte-8hqvb6");
    },
    m(i, o) {
      Pe(i, e, o), Nt(e, n);
    },
    p(i, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && j_(n, t);
    },
    d(i) {
      i && Ue(e);
    }
  };
}
function xa(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, o, s;
  return {
    c() {
      e = nt("option"), n = T_(t), i = $l(), e.__value = o = /*device*/
      l[32].deviceId, gs(e, e.__value), e.selected = s = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, ve(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Pe(r, e, a), Nt(e, n), Nt(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && j_(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, gs(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Ue(e);
    }
  };
}
function l0(l) {
  let e, t, n, i, o, s;
  const r = [Zm, Km], a = [];
  function _(c, f) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return i = _(l), o = a[i] = r[i](l), {
    c() {
      e = nt("div"), t = nt("video"), n = $l(), o.c(), ve(t, "class", "svelte-8hqvb6"), ti(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), ti(t, "hide", !/*webcam_accessed*/
      l[9]), ve(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, f) {
      Pe(c, e, f), Nt(e, t), l[19](t), Nt(e, n), a[i].m(e, null), s = !0;
    },
    p(c, f) {
      (!s || f[0] & /*mirror_webcam*/
      4) && ti(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || f[0] & /*webcam_accessed*/
      512) && ti(t, "hide", !/*webcam_accessed*/
      c[9]);
      let u = i;
      i = _(c), i === u ? a[i].p(c, f) : (Il(), Le(a[u], 1, 1, () => {
        a[u] = null;
      }), Hl(), o = a[i], o ? o.p(c, f) : (o = a[i] = r[i](c), o.c()), qe(o, 1), o.m(e, null));
    },
    i(c) {
      s || (qe(o), s = !0);
    },
    o(c) {
      Le(o), s = !1;
    },
    d(c) {
      c && Ue(e), l[19](null), a[i].d();
    }
  };
}
function Rs(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function i0(l, e, t) {
  var n = this && this.__awaiter || function(R, V, H, x) {
    function _e(se) {
      return se instanceof H ? se : new H(function(ae) {
        ae(se);
      });
    }
    return new (H || (H = Promise))(function(se, ae) {
      function j($) {
        try {
          W(x.next($));
        } catch (ne) {
          ae(ne);
        }
      }
      function Ke($) {
        try {
          W(x.throw($));
        } catch (ne) {
          ae(ne);
        }
      }
      function W($) {
        $.done ? se($.value) : _e($.value).then(j, Ke);
      }
      W((x = x.apply(R, V || [])).next());
    });
  };
  let i, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: f = "image" } = e, { mirror_webcam: u } = e, { include_audio: d } = e, { i18n: h } = e, { upload: m } = e;
  const g = Um();
  Pm(() => r = document.createElement("canvas"));
  const b = (R) => n(void 0, void 0, void 0, function* () {
    const H = R.target.value;
    yield ja(d, i, H).then((x) => n(void 0, void 0, void 0, function* () {
      D = x, t(7, s = o.find((_e) => _e.deviceId === H) || null), t(10, w = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        ja(d, i).then((R) => n(this, void 0, void 0, function* () {
          t(9, X = !0), t(6, o = yield Am()), D = R;
        })).then(() => Ym(o)).then((R) => {
          t(6, o = R);
          const V = D.getTracks().map((H) => {
            var x;
            return (x = H.getSettings()) === null || x === void 0 ? void 0 : x.deviceId;
          })[0];
          t(7, s = V && R.find((H) => H.deviceId === V) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", h("image.no_webcam_support"));
      } catch (R) {
        if (R instanceof DOMException && R.name == "NotAllowedError")
          g("error", h("image.allow_webcam_access"));
        else
          throw R;
      }
    });
  }
  function p() {
    var R = r.getContext("2d");
    (!a || a && y) && i.videoWidth && i.videoHeight && (r.width = i.videoWidth, r.height = i.videoHeight, R.drawImage(i, 0, 0, i.videoWidth, i.videoHeight), u && (R.scale(-1, 1), R.drawImage(i, -i.videoWidth, 0)), r.toBlob(
      (V) => {
        g(a ? "stream" : "capture", V);
      },
      "image/png",
      0.8
    ));
  }
  let y = !1, q = [], D, M, S;
  function C() {
    if (y) {
      S.stop();
      let R = new Blob(q, { type: M }), V = new FileReader();
      V.onload = function(H) {
        return n(this, void 0, void 0, function* () {
          var x;
          if (H.target) {
            let _e = new File([R], "sample." + M.substring(6));
            const se = yield D_([_e]);
            let ae = ((x = yield m(se, c)) === null || x === void 0 ? void 0 : x.filter(Boolean))[0];
            g("capture", ae), g("stop_recording");
          }
        });
      }, V.readAsDataURL(R);
    } else {
      g("start_recording"), q = [];
      let R = ["video/webm", "video/mp4"];
      for (let V of R)
        if (MediaRecorder.isTypeSupported(V)) {
          M = V;
          break;
        }
      if (M === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      S = new MediaRecorder(D, { mimeType: M }), S.addEventListener("dataavailable", function(V) {
        q.push(V.data);
      }), S.start(200);
    }
    t(8, y = !y);
  }
  let X = !1;
  function I() {
    f === "image" && a && t(8, y = !y), f === "image" ? p() : C(), !y && D && (D.getTracks().forEach((R) => R.stop()), t(5, i.srcObject = null, i), t(9, X = !1));
  }
  a && f === "image" && window.setInterval(
    () => {
      i && !_ && p();
    },
    500
  );
  let w = !1;
  function L(R) {
    R.preventDefault(), R.stopPropagation(), t(10, w = !1);
  }
  function F(R) {
    Tm[R ? "unshift" : "push"](() => {
      i = R, t(5, i);
    });
  }
  const O = async () => v(), z = () => t(10, w = !0), me = () => t(10, w = !1);
  return l.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, _ = R.pending), "root" in R && t(16, c = R.root), "mode" in R && t(1, f = R.mode), "mirror_webcam" in R && t(2, u = R.mirror_webcam), "include_audio" in R && t(17, d = R.include_audio), "i18n" in R && t(3, h = R.i18n), "upload" in R && t(18, m = R.upload);
  }, [
    a,
    f,
    u,
    h,
    Rs,
    i,
    o,
    s,
    y,
    X,
    w,
    b,
    v,
    I,
    L,
    _,
    c,
    d,
    m,
    F,
    O,
    z,
    me
  ];
}
class o0 extends Hm {
  constructor(e) {
    super(), Om(
      this,
      e,
      i0,
      l0,
      Vm,
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
    return Rs;
  }
}
const {
  SvelteComponent: h9,
  attr: m9,
  create_component: g9,
  destroy_component: b9,
  detach: p9,
  element: w9,
  init: v9,
  insert: k9,
  mount_component: y9,
  noop: C9,
  safe_not_equal: S9,
  transition_in: q9,
  transition_out: z9
} = window.__gradio__svelte__internal, { createEventDispatcher: B9 } = window.__gradio__svelte__internal, {
  SvelteComponent: D9,
  add_flush_callback: M9,
  append: L9,
  attr: E9,
  bind: R9,
  binding_callbacks: W9,
  bubble: A9,
  check_outros: X9,
  create_component: Y9,
  create_slot: H9,
  destroy_component: I9,
  detach: j9,
  element: T9,
  empty: $9,
  get_all_dirty_from_scope: F9,
  get_slot_changes: O9,
  group_outros: x9,
  init: V9,
  insert: N9,
  listen: U9,
  mount_component: P9,
  noop: K9,
  safe_not_equal: Z9,
  space: G9,
  toggle_class: J9,
  transition_in: Q9,
  transition_out: ey,
  update_slot_base: ty
} = window.__gradio__svelte__internal, { createEventDispatcher: ny, tick: ly } = window.__gradio__svelte__internal, {
  SvelteComponent: iy,
  attr: oy,
  check_outros: sy,
  create_component: ay,
  destroy_component: ry,
  detach: _y,
  element: cy,
  group_outros: uy,
  init: fy,
  insert: dy,
  mount_component: hy,
  safe_not_equal: my,
  toggle_class: gy,
  transition_in: by,
  transition_out: py
} = window.__gradio__svelte__internal, {
  SvelteComponent: wy,
  add_flush_callback: vy,
  assign: ky,
  bind: yy,
  binding_callbacks: Cy,
  check_outros: Sy,
  create_component: qy,
  destroy_component: zy,
  detach: By,
  empty: Dy,
  flush: My,
  get_spread_object: Ly,
  get_spread_update: Ey,
  group_outros: Ry,
  init: Wy,
  insert: Ay,
  mount_component: Xy,
  safe_not_equal: Yy,
  space: Hy,
  transition_in: Iy,
  transition_out: jy
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ty,
  append: $y,
  attr: Fy,
  detach: Oy,
  init: xy,
  insert: Vy,
  noop: Ny,
  safe_not_equal: Uy,
  set_style: Py,
  svg_element: Ky
} = window.__gradio__svelte__internal, {
  SvelteComponent: s0,
  append: tn,
  attr: T,
  detach: a0,
  init: r0,
  insert: _0,
  noop: Xo,
  safe_not_equal: c0,
  set_style: nn,
  svg_element: jt
} = window.__gradio__svelte__internal;
function u0(l) {
  let e, t, n, i, o, s, r, a, _;
  return {
    c() {
      e = jt("svg"), t = jt("rect"), n = jt("rect"), i = jt("rect"), o = jt("rect"), s = jt("line"), r = jt("line"), a = jt("line"), _ = jt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(i, "x", "2"), T(i, "y", "17"), T(i, "width", "5"), T(i, "height", "5"), T(i, "rx", "1"), T(i, "ry", "1"), T(i, "stroke-width", "2"), T(i, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), nn(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), nn(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), nn(a, "stroke-width", "2px"), T(_, "x1", "19.5"), T(_, "y1", "8"), T(_, "x2", "19.5"), T(_, "y2", "16"), nn(_, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), nn(e, "fill-rule", "evenodd"), nn(e, "clip-rule", "evenodd"), nn(e, "stroke-linecap", "round"), nn(e, "stroke-linejoin", "round");
    },
    m(c, f) {
      _0(c, e, f), tn(e, t), tn(e, n), tn(e, i), tn(e, o), tn(e, s), tn(e, r), tn(e, a), tn(e, _);
    },
    p: Xo,
    i: Xo,
    o: Xo,
    d(c) {
      c && a0(e);
    }
  };
}
class f0 extends s0 {
  constructor(e) {
    super(), r0(this, e, null, u0, c0, {});
  }
}
const {
  SvelteComponent: d0,
  append: h0,
  attr: wt,
  detach: m0,
  init: g0,
  insert: b0,
  noop: Yo,
  safe_not_equal: p0,
  set_style: ni,
  svg_element: Va
} = window.__gradio__svelte__internal;
function w0(l) {
  let e, t;
  return {
    c() {
      e = Va("svg"), t = Va("path"), wt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), wt(t, "fill", "none"), wt(t, "stroke-width", "2"), wt(e, "width", "100%"), wt(e, "height", "100%"), wt(e, "viewBox", "0 0 24 24"), wt(e, "version", "1.1"), wt(e, "xmlns", "http://www.w3.org/2000/svg"), wt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), wt(e, "xml:space", "preserve"), wt(e, "stroke", "currentColor"), ni(e, "fill-rule", "evenodd"), ni(e, "clip-rule", "evenodd"), ni(e, "stroke-linecap", "round"), ni(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      b0(n, e, i), h0(e, t);
    },
    p: Yo,
    i: Yo,
    o: Yo,
    d(n) {
      n && m0(e);
    }
  };
}
class v0 extends d0 {
  constructor(e) {
    super(), g0(this, e, null, w0, p0, {});
  }
}
const {
  SvelteComponent: k0,
  append: y0,
  attr: vt,
  detach: C0,
  init: S0,
  insert: q0,
  noop: Ho,
  safe_not_equal: z0,
  set_style: li,
  svg_element: Na
} = window.__gradio__svelte__internal;
function B0(l) {
  let e, t;
  return {
    c() {
      e = Na("svg"), t = Na("path"), vt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), vt(t, "fill", "none"), vt(t, "stroke-width", "2"), vt(e, "width", "100%"), vt(e, "height", "100%"), vt(e, "viewBox", "0 0 24 24"), vt(e, "version", "1.1"), vt(e, "xmlns", "http://www.w3.org/2000/svg"), vt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), vt(e, "xml:space", "preserve"), vt(e, "stroke", "currentColor"), li(e, "fill-rule", "evenodd"), li(e, "clip-rule", "evenodd"), li(e, "stroke-linecap", "round"), li(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      q0(n, e, i), y0(e, t);
    },
    p: Ho,
    i: Ho,
    o: Ho,
    d(n) {
      n && C0(e);
    }
  };
}
class D0 extends k0 {
  constructor(e) {
    super(), S0(this, e, null, B0, z0, {});
  }
}
const {
  SvelteComponent: M0,
  append: Ua,
  attr: Tt,
  detach: L0,
  init: E0,
  insert: R0,
  noop: Io,
  safe_not_equal: W0,
  set_style: ii,
  svg_element: jo
} = window.__gradio__svelte__internal;
function A0(l) {
  let e, t, n;
  return {
    c() {
      e = jo("svg"), t = jo("path"), n = jo("path"), Tt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Tt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 24 24"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "fill", "none"), Tt(e, "stroke", "currentColor"), Tt(e, "stroke-width", "2"), ii(e, "fill-rule", "evenodd"), ii(e, "clip-rule", "evenodd"), ii(e, "stroke-linecap", "round"), ii(e, "stroke-linejoin", "round");
    },
    m(i, o) {
      R0(i, e, o), Ua(e, t), Ua(e, n);
    },
    p: Io,
    i: Io,
    o: Io,
    d(i) {
      i && L0(e);
    }
  };
}
class X0 extends M0 {
  constructor(e) {
    super(), E0(this, e, null, A0, W0, {});
  }
}
const {
  SvelteComponent: Y0,
  append: H0,
  attr: ln,
  detach: I0,
  init: j0,
  insert: T0,
  noop: To,
  safe_not_equal: $0,
  set_style: oi,
  svg_element: Pa
} = window.__gradio__svelte__internal;
function F0(l) {
  let e, t;
  return {
    c() {
      e = Pa("svg"), t = Pa("path"), ln(t, "d", "M4 6h16M4 12h16M4 18h10"), ln(e, "width", "100%"), ln(e, "height", "100%"), ln(e, "viewBox", "0 0 24 24"), ln(e, "xmlns", "http://www.w3.org/2000/svg"), ln(e, "fill", "none"), ln(e, "stroke", "currentColor"), ln(e, "stroke-width", "2"), oi(e, "fill-rule", "evenodd"), oi(e, "clip-rule", "evenodd"), oi(e, "stroke-linecap", "round"), oi(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      T0(n, e, i), H0(e, t);
    },
    p: To,
    i: To,
    o: To,
    d(n) {
      n && I0(e);
    }
  };
}
class O0 extends Y0 {
  constructor(e) {
    super(), j0(this, e, null, F0, $0, {});
  }
}
const {
  SvelteComponent: x0,
  append: Ka,
  attr: st,
  detach: V0,
  init: N0,
  insert: U0,
  noop: $o,
  safe_not_equal: P0,
  set_style: si,
  svg_element: Fo
} = window.__gradio__svelte__internal;
function K0(l) {
  let e, t, n;
  return {
    c() {
      e = Fo("svg"), t = Fo("path"), n = Fo("line"), st(t, "d", "M4 6h16M4 12h16M4 18h10"), st(n, "x1", "2"), st(n, "y1", "2"), st(n, "x2", "22"), st(n, "y2", "22"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "fill", "none"), st(e, "stroke", "currentColor"), st(e, "stroke-width", "2"), si(e, "fill-rule", "evenodd"), si(e, "clip-rule", "evenodd"), si(e, "stroke-linecap", "round"), si(e, "stroke-linejoin", "round");
    },
    m(i, o) {
      U0(i, e, o), Ka(e, t), Ka(e, n);
    },
    p: $o,
    i: $o,
    o: $o,
    d(i) {
      i && V0(e);
    }
  };
}
class Z0 extends x0 {
  constructor(e) {
    super(), N0(this, e, null, K0, P0, {});
  }
}
const {
  SvelteComponent: G0,
  append: J0,
  attr: on,
  detach: Q0,
  init: eg,
  insert: tg,
  noop: Oo,
  safe_not_equal: ng,
  set_style: ai,
  svg_element: Za
} = window.__gradio__svelte__internal;
function lg(l) {
  let e, t;
  return {
    c() {
      e = Za("svg"), t = Za("path"), on(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), on(e, "width", "100%"), on(e, "height", "100%"), on(e, "viewBox", "0 0 24 24"), on(e, "fill", "none"), on(e, "stroke", "currentColor"), on(e, "stroke-width", "2"), ai(e, "fill-rule", "evenodd"), ai(e, "clip-rule", "evenodd"), ai(e, "stroke-linecap", "round"), ai(e, "stroke-linejoin", "round"), on(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      tg(n, e, i), J0(e, t);
    },
    p: Oo,
    i: Oo,
    o: Oo,
    d(n) {
      n && Q0(e);
    }
  };
}
class $_ extends G0 {
  constructor(e) {
    super(), eg(this, e, null, lg, ng, {});
  }
}
const {
  SvelteComponent: ig,
  append: og,
  attr: sn,
  detach: sg,
  init: ag,
  insert: rg,
  noop: xo,
  safe_not_equal: _g,
  set_style: ri,
  svg_element: Ga
} = window.__gradio__svelte__internal;
function cg(l) {
  let e, t;
  return {
    c() {
      e = Ga("svg"), t = Ga("path"), sn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), sn(e, "width", "100%"), sn(e, "height", "100%"), sn(e, "viewBox", "0 0 24 24"), sn(e, "fill", "none"), sn(e, "stroke", "currentColor"), sn(e, "stroke-width", "2"), ri(e, "fill-rule", "evenodd"), ri(e, "clip-rule", "evenodd"), ri(e, "stroke-linecap", "round"), ri(e, "stroke-linejoin", "round"), sn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      rg(n, e, i), og(e, t);
    },
    p: xo,
    i: xo,
    o: xo,
    d(n) {
      n && sg(e);
    }
  };
}
class ug extends ig {
  constructor(e) {
    super(), ag(this, e, null, cg, _g, {});
  }
}
const {
  SvelteComponent: fg,
  append: _i,
  attr: fe,
  detach: dg,
  init: hg,
  insert: mg,
  noop: Vo,
  safe_not_equal: gg,
  set_style: at,
  svg_element: Sl
} = window.__gradio__svelte__internal;
function bg(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = Sl("svg"), t = Sl("circle"), n = Sl("line"), i = Sl("line"), o = Sl("line"), fe(t, "cx", "9"), fe(t, "cy", "9"), fe(t, "r", "6"), at(t, "fill", "none"), at(t, "stroke-width", "2px"), fe(n, "x1", "13"), fe(n, "y1", "13"), fe(n, "x2", "20"), fe(n, "y2", "20"), at(n, "fill", "none"), at(n, "stroke-width", "2px"), fe(i, "x1", "6"), fe(i, "y1", "9"), fe(i, "x2", "12"), fe(i, "y2", "9"), at(i, "fill", "none"), at(i, "stroke-width", "2px"), fe(o, "x1", "9"), fe(o, "y1", "6"), fe(o, "x2", "9"), fe(o, "y2", "12"), at(o, "fill", "none"), at(o, "stroke-width", "2px"), fe(e, "width", "100%"), fe(e, "height", "100%"), fe(e, "viewBox", "0 0 24 24"), fe(e, "version", "1.1"), fe(e, "xmlns", "http://www.w3.org/2000/svg"), fe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), fe(e, "xml:space", "preserve"), fe(e, "stroke", "currentColor"), at(e, "fill-rule", "evenodd"), at(e, "clip-rule", "evenodd"), at(e, "stroke-linecap", "round"), at(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      mg(s, e, r), _i(e, t), _i(e, n), _i(e, i), _i(e, o);
    },
    p: Vo,
    i: Vo,
    o: Vo,
    d(s) {
      s && dg(e);
    }
  };
}
class pg extends fg {
  constructor(e) {
    super(), hg(this, e, null, bg, gg, {});
  }
}
const {
  SvelteComponent: wg,
  append: No,
  attr: ke,
  detach: vg,
  init: kg,
  insert: yg,
  noop: Uo,
  safe_not_equal: Cg,
  set_style: zt,
  svg_element: ci
} = window.__gradio__svelte__internal;
function Sg(l) {
  let e, t, n, i;
  return {
    c() {
      e = ci("svg"), t = ci("circle"), n = ci("line"), i = ci("line"), ke(t, "cx", "9"), ke(t, "cy", "9"), ke(t, "r", "6"), zt(t, "fill", "none"), zt(t, "stroke-width", "2px"), ke(n, "x1", "13"), ke(n, "y1", "13"), ke(n, "x2", "20"), ke(n, "y2", "20"), zt(n, "fill", "none"), zt(n, "stroke-width", "2px"), ke(i, "x1", "6"), ke(i, "y1", "9"), ke(i, "x2", "12"), ke(i, "y2", "9"), zt(i, "fill", "none"), zt(i, "stroke-width", "2px"), ke(e, "width", "100%"), ke(e, "height", "100%"), ke(e, "viewBox", "0 0 24 24"), ke(e, "version", "1.1"), ke(e, "xmlns", "http://www.w3.org/2000/svg"), ke(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ke(e, "xml:space", "preserve"), ke(e, "stroke", "currentColor"), zt(e, "fill-rule", "evenodd"), zt(e, "clip-rule", "evenodd"), zt(e, "stroke-linecap", "round"), zt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      yg(o, e, s), No(e, t), No(e, n), No(e, i);
    },
    p: Uo,
    i: Uo,
    o: Uo,
    d(o) {
      o && vg(e);
    }
  };
}
class qg extends wg {
  constructor(e) {
    super(), kg(this, e, null, Sg, Cg, {});
  }
}
const {
  SvelteComponent: zg,
  append: Po,
  attr: Oe,
  detach: Bg,
  init: Dg,
  insert: Mg,
  noop: Ko,
  safe_not_equal: Lg,
  set_style: Bt,
  svg_element: ui
} = window.__gradio__svelte__internal;
function Eg(l) {
  let e, t, n, i;
  return {
    c() {
      e = ui("svg"), t = ui("rect"), n = ui("path"), i = ui("path"), Oe(t, "x", "3"), Oe(t, "y", "3"), Oe(t, "width", "18"), Oe(t, "height", "18"), Bt(t, "fill", "none"), Bt(t, "stroke-width", "2px"), Oe(n, "d", "M 7 7 L 10 10 M 7 10 L 10 7"), Bt(n, "fill", "none"), Bt(n, "stroke-width", "2px"), Oe(i, "d", "M 14 17 L 17 14 M 14 14 L 17 17"), Bt(i, "fill", "none"), Bt(i, "stroke-width", "2px"), Oe(e, "width", "100%"), Oe(e, "height", "100%"), Oe(e, "viewBox", "0 0 24 24"), Oe(e, "version", "1.1"), Oe(e, "xmlns", "http://www.w3.org/2000/svg"), Oe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Oe(e, "xml:space", "preserve"), Oe(e, "stroke", "currentColor"), Bt(e, "fill-rule", "evenodd"), Bt(e, "clip-rule", "evenodd"), Bt(e, "stroke-linecap", "round"), Bt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Mg(o, e, s), Po(e, t), Po(e, n), Po(e, i);
    },
    p: Ko,
    i: Ko,
    o: Ko,
    d(o) {
      o && Bg(e);
    }
  };
}
class Rg extends zg {
  constructor(e) {
    super(), Dg(this, e, null, Eg, Lg, {});
  }
}
const {
  SvelteComponent: Wg,
  append: fi,
  attr: rt,
  detach: Ag,
  init: Xg,
  insert: Yg,
  noop: Zo,
  safe_not_equal: Hg,
  set_style: _t,
  svg_element: ql
} = window.__gradio__svelte__internal;
function Ig(l) {
  let e, t, n, i, o;
  return {
    c() {
      e = ql("svg"), t = ql("path"), n = ql("path"), i = ql("path"), o = ql("path"), rt(t, "d", "M8 3H5C3.89543 3 3 3.89543 3 5V8"), _t(t, "fill", "none"), _t(t, "stroke-width", "2px"), rt(n, "d", "M21 8V5C21 3.89543 20.1046 3 19 3H16"), _t(n, "fill", "none"), _t(n, "stroke-width", "2px"), rt(i, "d", "M16 21H19C20.1046 21 21 20.1046 21 19V16"), _t(i, "fill", "none"), _t(i, "stroke-width", "2px"), rt(o, "d", "M3 16V19C3 20.1046 3.89543 21 5 21H8"), _t(o, "fill", "none"), _t(o, "stroke-width", "2px"), rt(e, "width", "100%"), rt(e, "height", "100%"), rt(e, "viewBox", "0 0 24 24"), rt(e, "version", "1.1"), rt(e, "xmlns", "http://www.w3.org/2000/svg"), rt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), rt(e, "xml:space", "preserve"), rt(e, "stroke", "currentColor"), _t(e, "fill-rule", "evenodd"), _t(e, "clip-rule", "evenodd"), _t(e, "stroke-linecap", "round"), _t(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      Yg(s, e, r), fi(e, t), fi(e, n), fi(e, i), fi(e, o);
    },
    p: Zo,
    i: Zo,
    o: Zo,
    d(s) {
      s && Ag(e);
    }
  };
}
class Ja extends Wg {
  constructor(e) {
    super(), Xg(this, e, null, Ig, Hg, {});
  }
}
const {
  SvelteComponent: jg,
  append: Tg,
  attr: $t,
  detach: $g,
  init: Fg,
  insert: Og,
  noop: Go,
  safe_not_equal: xg,
  set_style: an,
  svg_element: Qa
} = window.__gradio__svelte__internal;
function Vg(l) {
  let e, t;
  return {
    c() {
      e = Qa("svg"), t = Qa("path"), $t(t, "d", "M8 3V8M8 8H3M21 8H16V3M16 21V16H21M3 16H8V21"), an(t, "fill", "none"), an(t, "stroke-width", "2px"), an(t, "stroke-linecap", "round"), an(t, "stroke-linejoin", "round"), $t(e, "width", "100%"), $t(e, "height", "100%"), $t(e, "viewBox", "0 0 24 24"), $t(e, "version", "1.1"), $t(e, "xmlns", "http://www.w3.org/2000/svg"), $t(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $t(e, "xml:space", "preserve"), $t(e, "stroke", "currentColor"), an(e, "fill-rule", "evenodd"), an(e, "clip-rule", "evenodd"), an(e, "stroke-linecap", "round"), an(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      Og(n, e, i), Tg(e, t);
    },
    p: Go,
    i: Go,
    o: Go,
    d(n) {
      n && $g(e);
    }
  };
}
class er extends jg {
  constructor(e) {
    super(), Fg(this, e, null, Vg, xg, {});
  }
}
const {
  SvelteComponent: Ng,
  append: tr,
  attr: Jo,
  bubble: nr,
  create_component: Ug,
  destroy_component: Pg,
  detach: F_,
  element: lr,
  init: Kg,
  insert: O_,
  listen: Qo,
  mount_component: Zg,
  run_all: Gg,
  safe_not_equal: Jg,
  set_data: Qg,
  set_input_value: ir,
  space: eb,
  text: tb,
  transition_in: nb,
  transition_out: lb
} = window.__gradio__svelte__internal, { createEventDispatcher: ib, afterUpdate: ob } = window.__gradio__svelte__internal;
function sb(l) {
  let e;
  return {
    c() {
      e = tb(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      O_(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && Qg(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && F_(e);
    }
  };
}
function ab(l) {
  let e, t, n, i, o, s, r;
  return t = new Kr({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [sb] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = lr("label"), Ug(t.$$.fragment), n = eb(), i = lr("input"), Jo(i, "type", "color"), i.disabled = /*disabled*/
      l[3], Jo(i, "class", "svelte-16l8u73"), Jo(e, "class", "block");
    },
    m(a, _) {
      O_(a, e, _), Zg(t, e, null), tr(e, n), tr(e, i), ir(
        i,
        /*value*/
        l[0]
      ), o = !0, s || (r = [
        Qo(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        Qo(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        Qo(
          i,
          "blur",
          /*blur_handler*/
          l[7]
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
      8) && (i.disabled = /*disabled*/
      a[3]), _ & /*value*/
      1 && ir(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (nb(t.$$.fragment, a), o = !0);
    },
    o(a) {
      lb(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && F_(e), Pg(t), s = !1, Gg(r);
    }
  };
}
function rb(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = ib();
  function c() {
    _("change", n), i || _("input");
  }
  ob(() => {
    t(5, i = !1);
  });
  function f(h) {
    nr.call(this, l, h);
  }
  function u(h) {
    nr.call(this, l, h);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (h) => {
    "value" in h && t(0, n = h.value), "value_is_output" in h && t(5, i = h.value_is_output), "label" in h && t(1, o = h.label), "info" in h && t(2, s = h.info), "disabled" in h && t(3, r = h.disabled), "show_label" in h && t(4, a = h.show_label);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    o,
    s,
    r,
    a,
    i,
    f,
    u,
    d
  ];
}
class _b extends Ng {
  constructor(e) {
    super(), Kg(this, e, rb, ab, Jg, {
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
  SvelteComponent: Zy,
  append: Gy,
  attr: Jy,
  component_subscribe: Qy,
  detach: eC,
  element: tC,
  init: nC,
  insert: lC,
  noop: iC,
  safe_not_equal: oC,
  set_style: sC,
  svg_element: aC,
  toggle_class: rC
} = window.__gradio__svelte__internal, { onMount: _C } = window.__gradio__svelte__internal, {
  SvelteComponent: cC,
  append: uC,
  attr: fC,
  binding_callbacks: dC,
  check_outros: hC,
  create_component: mC,
  create_slot: gC,
  destroy_component: bC,
  destroy_each: pC,
  detach: wC,
  element: vC,
  empty: kC,
  ensure_array_like: yC,
  get_all_dirty_from_scope: CC,
  get_slot_changes: SC,
  group_outros: qC,
  init: zC,
  insert: BC,
  mount_component: DC,
  noop: MC,
  safe_not_equal: LC,
  set_data: EC,
  set_style: RC,
  space: WC,
  text: AC,
  toggle_class: XC,
  transition_in: YC,
  transition_out: HC,
  update_slot_base: IC
} = window.__gradio__svelte__internal, { tick: jC } = window.__gradio__svelte__internal, { onDestroy: TC } = window.__gradio__svelte__internal, {
  SvelteComponent: $C,
  add_render_callback: FC,
  append: OC,
  attr: xC,
  bubble: VC,
  check_outros: NC,
  create_component: UC,
  create_in_transition: PC,
  create_out_transition: KC,
  destroy_component: ZC,
  detach: GC,
  element: JC,
  group_outros: QC,
  init: eS,
  insert: tS,
  listen: nS,
  mount_component: lS,
  run_all: iS,
  safe_not_equal: oS,
  set_data: sS,
  space: aS,
  stop_propagation: rS,
  text: _S,
  transition_in: cS,
  transition_out: uS
} = window.__gradio__svelte__internal, { createEventDispatcher: fS, onMount: dS } = window.__gradio__svelte__internal, {
  SvelteComponent: hS,
  append: mS,
  attr: gS,
  bubble: bS,
  check_outros: pS,
  create_animation: wS,
  create_component: vS,
  destroy_component: kS,
  detach: yS,
  element: CS,
  ensure_array_like: SS,
  fix_and_outro_and_destroy_block: qS,
  fix_position: zS,
  group_outros: BS,
  init: DS,
  insert: MS,
  mount_component: LS,
  noop: ES,
  safe_not_equal: RS,
  set_style: WS,
  space: AS,
  transition_in: XS,
  transition_out: YS,
  update_keyed_each: HS
} = window.__gradio__svelte__internal, {
  SvelteComponent: IS,
  attr: jS,
  detach: TS,
  element: $S,
  init: FS,
  insert: OS,
  noop: xS,
  safe_not_equal: VS,
  set_style: NS,
  toggle_class: US
} = window.__gradio__svelte__internal, {
  SvelteComponent: PS,
  add_flush_callback: KS,
  assign: ZS,
  bind: GS,
  binding_callbacks: JS,
  create_component: QS,
  destroy_component: eq,
  detach: tq,
  flush: nq,
  get_spread_object: lq,
  get_spread_update: iq,
  init: oq,
  insert: sq,
  mount_component: aq,
  safe_not_equal: rq,
  space: _q,
  transition_in: cq,
  transition_out: uq
} = window.__gradio__svelte__internal;
var x_ = (l) => {
  throw TypeError(l);
}, V_ = (l, e, t) => e.has(l) || x_("Cannot " + t), zl = (l, e, t) => (V_(l, e, "read from private field"), e.get(l)), cb = (l, e, t) => e.has(l) ? x_("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(l) : e.set(l, t), ub = (l, e, t, n) => (V_(l, e, "write to private field"), e.set(l, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var un;
class fq extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = zl(this, un) + t; ; ) {
          const i = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (i === -1 || i - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (i === -1)
            break;
          const s = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, s)), t = t.slice(i + 1);
        }
        ub(this, un, t);
      },
      flush: (t) => {
        if (zl(this, un) === "")
          return;
        const n = e.allowCR && zl(this, un).endsWith("\r") ? zl(this, un).slice(0, -1) : zl(this, un);
        t.enqueue(n);
      }
    }), cb(this, un, "");
  }
}
un = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: fb,
  append: N_,
  attr: de,
  bubble: db,
  check_outros: hb,
  create_slot: U_,
  detach: xl,
  element: Ui,
  empty: mb,
  get_all_dirty_from_scope: P_,
  get_slot_changes: K_,
  group_outros: gb,
  init: bb,
  insert: Vl,
  listen: pb,
  safe_not_equal: wb,
  set_style: Ve,
  space: Z_,
  src_url_equal: Wi,
  toggle_class: el,
  transition_in: Ai,
  transition_out: Xi,
  update_slot_base: G_
} = window.__gradio__svelte__internal;
function vb(l) {
  let e, t, n, i, o, s, r = (
    /*icon*/
    l[7] && or(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), _ = U_(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = Ui("button"), r && r.c(), t = Z_(), _ && _.c(), de(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), de(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], el(e, "hidden", !/*visible*/
      l[2]), Ve(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Ve(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Ve(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(c, f) {
      Vl(c, e, f), r && r.m(e, null), N_(e, t), _ && _.m(e, null), i = !0, o || (s = pb(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), o = !0);
    },
    p(c, f) {
      /*icon*/
      c[7] ? r ? r.p(c, f) : (r = or(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!i || f & /*$$scope*/
      2048) && G_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        i ? K_(
          a,
          /*$$scope*/
          c[11],
          f,
          null
        ) : P_(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && de(e, "class", n), (!i || f & /*elem_id*/
      1) && de(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!i || f & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!i || f & /*size, variant, elem_classes, visible*/
      30) && el(e, "hidden", !/*visible*/
      c[2]), f & /*scale*/
      512 && Ve(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), f & /*scale*/
      512 && Ve(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Ve(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      i || (Ai(_, c), i = !0);
    },
    o(c) {
      Xi(_, c), i = !1;
    },
    d(c) {
      c && xl(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function kb(l) {
  let e, t, n, i, o = (
    /*icon*/
    l[7] && sr(l)
  );
  const s = (
    /*#slots*/
    l[12].default
  ), r = U_(
    s,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = Ui("a"), o && o.c(), t = Z_(), r && r.c(), de(
        e,
        "href",
        /*link*/
        l[6]
      ), de(e, "rel", "noopener noreferrer"), de(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), de(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), de(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), el(e, "hidden", !/*visible*/
      l[2]), el(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), Ve(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Ve(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), Ve(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Ve(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(a, _) {
      Vl(a, e, _), o && o.m(e, null), N_(e, t), r && r.m(e, null), i = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = sr(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!i || _ & /*$$scope*/
      2048) && G_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        i ? K_(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : P_(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || _ & /*link*/
      64) && de(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || _ & /*disabled*/
      256) && de(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && de(e, "class", n), (!i || _ & /*elem_id*/
      1) && de(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || _ & /*size, variant, elem_classes, visible*/
      30) && el(e, "hidden", !/*visible*/
      a[2]), (!i || _ & /*size, variant, elem_classes, disabled*/
      282) && el(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), _ & /*scale*/
      512 && Ve(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && Ve(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && Ve(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && Ve(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      i || (Ai(r, a), i = !0);
    },
    o(a) {
      Xi(r, a), i = !1;
    },
    d(a) {
      a && xl(e), o && o.d(), r && r.d(a);
    }
  };
}
function or(l) {
  let e, t, n;
  return {
    c() {
      e = Ui("img"), de(e, "class", "button-icon svelte-8huxfn"), Wi(e.src, t = /*icon*/
      l[7].url) || de(e, "src", t), de(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      Vl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !Wi(e.src, t = /*icon*/
      i[7].url) && de(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && de(e, "alt", n);
    },
    d(i) {
      i && xl(e);
    }
  };
}
function sr(l) {
  let e, t, n;
  return {
    c() {
      e = Ui("img"), de(e, "class", "button-icon svelte-8huxfn"), Wi(e.src, t = /*icon*/
      l[7].url) || de(e, "src", t), de(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, o) {
      Vl(i, e, o);
    },
    p(i, o) {
      o & /*icon*/
      128 && !Wi(e.src, t = /*icon*/
      i[7].url) && de(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && de(e, "alt", n);
    },
    d(i) {
      i && xl(e);
    }
  };
}
function yb(l) {
  let e, t, n, i;
  const o = [kb, vb], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = mb();
    },
    m(a, _) {
      s[e].m(a, _), Vl(a, n, _), i = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (gb(), Xi(s[c], 1, 1, () => {
        s[c] = null;
      }), hb(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Ai(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Ai(t), i = !0);
    },
    o(a) {
      Xi(t), i = !1;
    },
    d(a) {
      a && xl(n), s[e].d(a);
    }
  };
}
function Cb(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: f = null } = e, { icon: u = null } = e, { disabled: d = !1 } = e, { scale: h = null } = e, { min_width: m = void 0 } = e;
  function g(b) {
    db.call(this, l, b);
  }
  return l.$$set = (b) => {
    "elem_id" in b && t(0, o = b.elem_id), "elem_classes" in b && t(1, s = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, _ = b.size), "value" in b && t(5, c = b.value), "link" in b && t(6, f = b.link), "icon" in b && t(7, u = b.icon), "disabled" in b && t(8, d = b.disabled), "scale" in b && t(9, h = b.scale), "min_width" in b && t(10, m = b.min_width), "$$scope" in b && t(11, i = b.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    f,
    u,
    d,
    h,
    m,
    i,
    n,
    g
  ];
}
class bs extends fb {
  constructor(e) {
    super(), bb(this, e, Cb, yb, wb, {
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
  SvelteComponent: dq,
  create_component: hq,
  destroy_component: mq,
  detach: gq,
  init: bq,
  insert: pq,
  mount_component: wq,
  safe_not_equal: vq,
  set_data: kq,
  text: yq,
  transition_in: Cq,
  transition_out: Sq
} = window.__gradio__svelte__internal, {
  SvelteComponent: Sb,
  add_render_callback: J_,
  append: di,
  attr: et,
  binding_callbacks: ar,
  check_outros: qb,
  create_bidirectional_transition: rr,
  destroy_each: zb,
  detach: jl,
  element: Yi,
  empty: Bb,
  ensure_array_like: _r,
  group_outros: Db,
  init: Mb,
  insert: Tl,
  listen: ps,
  prevent_default: Lb,
  run_all: Eb,
  safe_not_equal: Rb,
  set_data: Wb,
  set_style: Pn,
  space: ws,
  text: Ab,
  toggle_class: Dt,
  transition_in: es,
  transition_out: cr
} = window.__gradio__svelte__internal, { createEventDispatcher: Xb } = window.__gradio__svelte__internal;
function ur(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function fr(l) {
  let e, t, n, i, o, s = _r(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = dr(ur(l, s, a));
  return {
    c() {
      e = Yi("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      et(e, "class", "options svelte-yuohum"), et(e, "role", "listbox"), Pn(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Pn(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Pn(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, _) {
      Tl(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      l[22](e), n = !0, i || (o = ps(e, "mousedown", Lb(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = _r(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = ur(a, s, c);
          r[c] ? r[c].p(f, _) : (r[c] = dr(f), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && Pn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && Pn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && Pn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && J_(() => {
        n && (t || (t = rr(e, ua, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = rr(e, ua, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && jl(e), zb(r, a), l[22](null), a && t && t.end(), i = !1, o();
    }
  };
}
function dr(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = Yi("li"), t = Yi("span"), t.textContent = "✓", n = ws(), o = Ab(i), s = ws(), et(t, "class", "inner-item svelte-yuohum"), Dt(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), et(e, "class", "item svelte-yuohum"), et(e, "data-index", r = /*index*/
      l[26]), et(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), et(e, "data-testid", "dropdown-option"), et(e, "role", "option"), et(e, "aria-selected", _ = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Dt(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), Dt(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), Dt(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), Dt(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(c, f) {
      Tl(c, e, f), di(e, t), di(e, n), di(e, o), di(e, s);
    },
    p(c, f) {
      f & /*selected_indices, filtered_indices*/
      18 && Dt(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), f & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Wb(o, i), f & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && et(e, "data-index", r), f & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && et(e, "aria-label", a), f & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && et(e, "aria-selected", _), f & /*selected_indices, filtered_indices*/
      18 && Dt(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), f & /*filtered_indices, active_index*/
      34 && Dt(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && Dt(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && Dt(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && jl(e);
    }
  };
}
function Yb(l) {
  let e, t, n, i, o;
  J_(
    /*onwindowresize*/
    l[19]
  );
  let s = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && fr(l)
  );
  return {
    c() {
      e = Yi("div"), t = ws(), s && s.c(), n = Bb(), et(e, "class", "reference");
    },
    m(r, a) {
      Tl(r, e, a), l[20](e), Tl(r, t, a), s && s.m(r, a), Tl(r, n, a), i || (o = [
        ps(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        ps(
          window,
          "resize",
          /*onwindowresize*/
          l[19]
        )
      ], i = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? s ? (s.p(r, a), a & /*show_options, disabled*/
      12 && es(s, 1)) : (s = fr(r), s.c(), es(s, 1), s.m(n.parentNode, n)) : s && (Db(), cr(s, 1, 1, () => {
        s = null;
      }), qb());
    },
    i(r) {
      es(s);
    },
    o(r) {
      cr(s);
    },
    d(r) {
      r && (jl(e), jl(t), jl(n)), l[20](null), s && s.d(r), i = !1, Eb(o);
    }
  };
}
function Hb(l, e, t) {
  var n, i;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, f, u, d, h, m, g, b, v, p;
  function y() {
    const { top: w, bottom: L } = m.getBoundingClientRect();
    t(16, f = w), t(17, u = p - L);
  }
  let q = null;
  function D() {
    r && (q !== null && clearTimeout(q), q = setTimeout(
      () => {
        y(), q = null;
      },
      10
    ));
  }
  const M = Xb();
  function S() {
    t(11, p = window.innerHeight);
  }
  function C(w) {
    ar[w ? "unshift" : "push"](() => {
      m = w, t(6, m);
    });
  }
  const X = (w) => M("change", w);
  function I(w) {
    ar[w ? "unshift" : "push"](() => {
      g = w, t(7, g);
    });
  }
  return l.$$set = (w) => {
    "choices" in w && t(0, o = w.choices), "filtered_indices" in w && t(1, s = w.filtered_indices), "show_options" in w && t(2, r = w.show_options), "disabled" in w && t(3, a = w.disabled), "selected_indices" in w && t(4, _ = w.selected_indices), "active_index" in w && t(5, c = w.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && m) {
        if (g && _.length > 0) {
          let L = g.querySelectorAll("li");
          for (const F of Array.from(L))
            if (F.getAttribute("data-index") === _[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, F.offsetTop);
              break;
            }
        }
        y();
        const w = t(15, i = m.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (w == null ? void 0 : w.height) || 0), t(8, h = (w == null ? void 0 : w.width) || 0);
      }
      u > f ? (t(10, v = u), t(9, b = null)) : (t(9, b = `${u + d}px`), t(10, v = f - d));
    }
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    m,
    g,
    h,
    b,
    v,
    p,
    D,
    M,
    n,
    i,
    f,
    u,
    d,
    S,
    C,
    X,
    I
  ];
}
class Ib extends Sb {
  constructor(e) {
    super(), Mb(this, e, Hb, Yb, Rb, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function jb(l, e) {
  return (l % e + e) % e;
}
function hr(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Tb(l, e, t) {
  l("change", e), t || l("input");
}
function $b(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[jb(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: qq,
  append: zq,
  attr: Bq,
  binding_callbacks: Dq,
  check_outros: Mq,
  create_component: Lq,
  destroy_component: Eq,
  destroy_each: Rq,
  detach: Wq,
  element: Aq,
  ensure_array_like: Xq,
  group_outros: Yq,
  init: Hq,
  insert: Iq,
  listen: jq,
  mount_component: Tq,
  prevent_default: $q,
  run_all: Fq,
  safe_not_equal: Oq,
  set_data: xq,
  set_input_value: Vq,
  space: Nq,
  text: Uq,
  toggle_class: Pq,
  transition_in: Kq,
  transition_out: Zq
} = window.__gradio__svelte__internal, { afterUpdate: Gq, createEventDispatcher: Jq } = window.__gradio__svelte__internal, {
  SvelteComponent: Fb,
  append: Sn,
  attr: Qe,
  binding_callbacks: Ob,
  check_outros: xb,
  create_component: vs,
  destroy_component: ks,
  detach: Ws,
  element: Zn,
  group_outros: Vb,
  init: Nb,
  insert: As,
  listen: Bl,
  mount_component: ys,
  run_all: Ub,
  safe_not_equal: Pb,
  set_data: Kb,
  set_input_value: mr,
  space: ts,
  text: Zb,
  toggle_class: Kn,
  transition_in: Gn,
  transition_out: Xl
} = window.__gradio__svelte__internal, { onMount: Gb } = window.__gradio__svelte__internal, { createEventDispatcher: Jb, afterUpdate: Qb } = window.__gradio__svelte__internal;
function e2(l) {
  let e;
  return {
    c() {
      e = Zb(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      As(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Kb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Ws(e);
    }
  };
}
function gr(l) {
  let e, t, n;
  return t = new qs({}), {
    c() {
      e = Zn("div"), vs(t.$$.fragment), Qe(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, o) {
      As(i, e, o), ys(t, e, null), n = !0;
    },
    i(i) {
      n || (Gn(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Xl(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ws(e), ks(t);
    }
  };
}
function t2(l) {
  let e, t, n, i, o, s, r, a, _, c, f, u, d, h;
  t = new Kr({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [e2] },
      $$scope: { ctx: l }
    }
  });
  let m = !/*disabled*/
  l[3] && gr();
  return f = new Ib({
    props: {
      show_options: (
        /*show_options*/
        l[12]
      ),
      choices: (
        /*choices*/
        l[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        l[10]
      ),
      disabled: (
        /*disabled*/
        l[3]
      ),
      selected_indices: (
        /*selected_index*/
        l[11] === null ? [] : [
          /*selected_index*/
          l[11]
        ]
      ),
      active_index: (
        /*active_index*/
        l[14]
      )
    }
  }), f.$on(
    "change",
    /*handle_option_selected*/
    l[16]
  ), {
    c() {
      e = Zn("div"), vs(t.$$.fragment), n = ts(), i = Zn("div"), o = Zn("div"), s = Zn("div"), r = Zn("input"), _ = ts(), m && m.c(), c = ts(), vs(f.$$.fragment), Qe(r, "role", "listbox"), Qe(r, "aria-controls", "dropdown-options"), Qe(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), Qe(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), Qe(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], Qe(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], Kn(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), Qe(s, "class", "secondary-wrap svelte-1m1zvyj"), Qe(o, "class", "wrap-inner svelte-1m1zvyj"), Kn(
        o,
        "show_options",
        /*show_options*/
        l[12]
      ), Qe(i, "class", "wrap svelte-1m1zvyj"), Qe(e, "class", "svelte-1m1zvyj"), Kn(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(g, b) {
      As(g, e, b), ys(t, e, null), Sn(e, n), Sn(e, i), Sn(i, o), Sn(o, s), Sn(s, r), mr(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), Sn(s, _), m && m.m(s, null), Sn(i, c), ys(f, i, null), u = !0, d || (h = [
        Bl(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        Bl(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        Bl(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        Bl(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        Bl(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(g, b) {
      const v = {};
      b[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      g[4]), b[0] & /*info*/
      2 && (v.info = /*info*/
      g[1]), b[0] & /*label*/
      1 | b[1] & /*$$scope*/
      4 && (v.$$scope = { dirty: b, ctx: g }), t.$set(v), (!u || b[0] & /*show_options*/
      4096) && Qe(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!u || b[0] & /*label*/
      1) && Qe(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!u || b[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!u || b[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), b[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && mr(
        r,
        /*input_text*/
        g[9]
      ), (!u || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Kn(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? m && (Vb(), Xl(m, 1, 1, () => {
        m = null;
      }), xb()) : m ? b[0] & /*disabled*/
      8 && Gn(m, 1) : (m = gr(), m.c(), Gn(m, 1), m.m(s, null)), (!u || b[0] & /*show_options*/
      4096) && Kn(
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
      g[14]), f.$set(p), (!u || b[0] & /*container*/
      32) && Kn(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      u || (Gn(t.$$.fragment, g), Gn(m), Gn(f.$$.fragment, g), u = !0);
    },
    o(g) {
      Xl(t.$$.fragment, g), Xl(m), Xl(f.$$.fragment, g), u = !1;
    },
    d(g) {
      g && Ws(e), ks(t), l[29](null), m && m.d(), ks(f), d = !1, Ub(h);
    }
  };
}
function n2(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: f } = e, { container: u = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: h = !0 } = e, m, g = !1, b, v, p = "", y = "", q = !1, D = [], M = null, S = null, C;
  const X = Jb();
  o ? (C = a.map((H) => H[1]).indexOf(o), S = C, S === -1 ? (s = o, S = null) : ([p, s] = a[S], y = p), w()) : a.length > 0 && (C = 0, S = 0, [p, o] = a[S], s = o, y = p);
  function I() {
    t(13, b = a.map((H) => H[0])), t(24, v = a.map((H) => H[1]));
  }
  function w() {
    I(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, S = null)) : v.includes(o) ? (t(9, p = b[v.indexOf(o)]), t(11, S = v.indexOf(o))) : d ? (t(9, p = o), t(11, S = null)) : (t(9, p = ""), t(11, S = null)), t(27, C = S);
  }
  function L(H) {
    if (t(11, S = parseInt(H.detail.target.dataset.index)), isNaN(S)) {
      t(11, S = null);
      return;
    }
    t(12, g = !1), t(14, M = null), m.blur();
  }
  function F(H) {
    t(10, D = a.map((x, _e) => _e)), t(12, g = !0), X("focus");
  }
  function O() {
    d ? t(20, o = p) : t(9, p = b[v.indexOf(o)]), t(12, g = !1), t(14, M = null), X("blur");
  }
  function z(H) {
    t(12, [g, M] = $b(H, M, D), g, (t(14, M), t(2, a), t(23, _), t(6, d), t(9, p), t(10, D), t(8, m), t(25, y), t(11, S), t(27, C), t(26, q), t(24, v))), H.key === "Enter" && (M !== null ? (t(11, S = M), t(12, g = !1), m.blur(), t(14, M = null)) : b.includes(p) ? (t(11, S = b.indexOf(p)), t(12, g = !1), t(14, M = null), m.blur()) : d && (t(20, o = p), t(11, S = null), t(12, g = !1), t(14, M = null), m.blur()), X("enter", o));
  }
  Qb(() => {
    t(21, r = !1), t(26, q = !0);
  }), Gb(() => {
    m.focus();
  });
  function me() {
    p = this.value, t(9, p), t(11, S), t(27, C), t(26, q), t(2, a), t(24, v);
  }
  function R(H) {
    Ob[H ? "unshift" : "push"](() => {
      m = H, t(8, m);
    });
  }
  const V = (H) => X("key_up", { key: H.key, input_value: p });
  return l.$$set = (H) => {
    "label" in H && t(0, n = H.label), "info" in H && t(1, i = H.info), "value" in H && t(20, o = H.value), "value_is_output" in H && t(21, r = H.value_is_output), "choices" in H && t(2, a = H.choices), "disabled" in H && t(3, c = H.disabled), "show_label" in H && t(4, f = H.show_label), "container" in H && t(5, u = H.container), "allow_custom_value" in H && t(6, d = H.allow_custom_value), "filterable" in H && t(7, h = H.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && S !== C && S !== null && q && (t(9, [p, o] = a[S], p, (t(20, o), t(11, S), t(27, C), t(26, q), t(2, a), t(24, v))), t(27, C = S), X("select", {
      index: S,
      value: v[S],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (w(), Tb(X, o, r), t(22, s = o)), l.$$.dirty[0] & /*choices*/
    4 && I(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (d || w(), t(23, _ = a), t(10, D = hr(a, p)), !d && D.length > 0 && t(14, M = D[0]), m == document.activeElement && t(12, g = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== y && (t(10, D = hr(a, p)), t(25, y = p), !d && D.length > 0 && t(14, M = D[0]));
  }, [
    n,
    i,
    a,
    c,
    f,
    u,
    d,
    h,
    m,
    p,
    D,
    S,
    g,
    b,
    M,
    X,
    L,
    F,
    O,
    z,
    o,
    r,
    s,
    _,
    v,
    y,
    q,
    C,
    me,
    R,
    V
  ];
}
class l2 extends Fb {
  constructor(e) {
    super(), Nb(
      this,
      e,
      n2,
      t2,
      Pb,
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
  SvelteComponent: Qq,
  attr: ez,
  detach: tz,
  element: nz,
  init: lz,
  insert: iz,
  noop: oz,
  safe_not_equal: sz,
  toggle_class: az
} = window.__gradio__svelte__internal, {
  SvelteComponent: rz,
  add_flush_callback: _z,
  assign: cz,
  bind: uz,
  binding_callbacks: fz,
  check_outros: dz,
  create_component: hz,
  destroy_component: mz,
  detach: gz,
  empty: bz,
  get_spread_object: pz,
  get_spread_update: wz,
  group_outros: vz,
  init: kz,
  insert: yz,
  mount_component: Cz,
  safe_not_equal: Sz,
  space: qz,
  transition_in: zz,
  transition_out: Bz
} = window.__gradio__svelte__internal, {
  SvelteComponent: i2,
  append: ct,
  attr: tl,
  check_outros: Cs,
  create_component: En,
  destroy_component: Rn,
  detach: fl,
  element: Mt,
  group_outros: Ss,
  init: o2,
  insert: dl,
  listen: s2,
  mount_component: Wn,
  safe_not_equal: a2,
  set_style: nl,
  space: Dl,
  text: Xs,
  toggle_class: br,
  transition_in: Ee,
  transition_out: tt
} = window.__gradio__svelte__internal, { createEventDispatcher: r2 } = window.__gradio__svelte__internal, { onMount: _2 } = window.__gradio__svelte__internal;
function pr(l) {
  let e, t, n, i, o, s, r;
  const a = [u2, c2], _ = [];
  function c(f, u) {
    return (
      /*labelDetailLock*/
      f[2] ? 0 : 1
    );
  }
  return n = c(l), i = _[n] = a[n](l), {
    c() {
      e = Mt("div"), t = Mt("button"), i.c(), tl(t, "class", "icon svelte-d9x7u0"), tl(t, "aria-label", "Lock label detail"), br(
        t,
        "selected",
        /*labelDetailLock*/
        l[2] === !0
      ), nl(e, "margin-right", "8px");
    },
    m(f, u) {
      dl(f, e, u), ct(e, t), _[n].m(t, null), o = !0, s || (r = s2(
        t,
        "click",
        /*onLockClick*/
        l[9]
      ), s = !0);
    },
    p(f, u) {
      let d = n;
      n = c(f), n !== d && (Ss(), tt(_[d], 1, 1, () => {
        _[d] = null;
      }), Cs(), i = _[n], i || (i = _[n] = a[n](f), i.c()), Ee(i, 1), i.m(t, null)), (!o || u & /*labelDetailLock*/
      4) && br(
        t,
        "selected",
        /*labelDetailLock*/
        f[2] === !0
      );
    },
    i(f) {
      o || (Ee(i), o = !0);
    },
    o(f) {
      tt(i), o = !1;
    },
    d(f) {
      f && fl(e), _[n].d(), s = !1, r();
    }
  };
}
function c2(l) {
  let e, t;
  return e = new ug({}), {
    c() {
      En(e.$$.fragment);
    },
    m(n, i) {
      Wn(e, n, i), t = !0;
    },
    i(n) {
      t || (Ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rn(e, n);
    }
  };
}
function u2(l) {
  let e, t;
  return e = new $_({}), {
    c() {
      En(e.$$.fragment);
    },
    m(n, i) {
      Wn(e, n, i), t = !0;
    },
    i(n) {
      t || (Ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rn(e, n);
    }
  };
}
function f2(l) {
  let e;
  return {
    c() {
      e = Xs("Cancel");
    },
    m(t, n) {
      dl(t, e, n);
    },
    d(t) {
      t && fl(e);
    }
  };
}
function wr(l) {
  let e, t, n;
  return t = new bs({
    props: {
      variant: "stop",
      $$slots: { default: [d2] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[14]
  ), {
    c() {
      e = Mt("div"), En(t.$$.fragment), nl(e, "margin-right", "8px");
    },
    m(i, o) {
      dl(i, e, o), Wn(t, e, null), n = !0;
    },
    p(i, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      tt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && fl(e), Rn(t);
    }
  };
}
function d2(l) {
  let e;
  return {
    c() {
      e = Xs("Remove");
    },
    m(t, n) {
      dl(t, e, n);
    },
    d(t) {
      t && fl(e);
    }
  };
}
function h2(l) {
  let e;
  return {
    c() {
      e = Xs("OK");
    },
    m(t, n) {
      dl(t, e, n);
    },
    d(t) {
      t && fl(e);
    }
  };
}
function m2(l) {
  let e, t, n, i, o, s, r, a, _, c, f, u, d, h, m, g, b, v = !/*showRemove*/
  l[4] && pr(l);
  s = new l2({
    props: {
      value: (
        /*currentLabel*/
        l[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        l[3]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    l[6]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    l[8]
  ), _ = new _b({
    props: {
      value: (
        /*currentColor*/
        l[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), _.$on(
    "change",
    /*onColorChange*/
    l[7]
  ), u = new bs({
    props: {
      $$slots: { default: [f2] },
      $$scope: { ctx: l }
    }
  }), u.$on(
    "click",
    /*click_handler*/
    l[13]
  );
  let p = (
    /*showRemove*/
    l[4] && wr(l)
  );
  return g = new bs({
    props: {
      variant: "primary",
      $$slots: { default: [h2] },
      $$scope: { ctx: l }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    l[15]
  ), {
    c() {
      e = Mt("div"), t = Mt("div"), n = Mt("span"), v && v.c(), i = Dl(), o = Mt("div"), En(s.$$.fragment), r = Dl(), a = Mt("div"), En(_.$$.fragment), c = Dl(), f = Mt("div"), En(u.$$.fragment), d = Dl(), p && p.c(), h = Dl(), m = Mt("div"), En(g.$$.fragment), nl(o, "margin-right", "10px"), nl(a, "margin-right", "40px"), nl(a, "margin-bottom", "8px"), nl(f, "margin-right", "8px"), tl(n, "class", "model-content svelte-d9x7u0"), tl(t, "class", "modal-container svelte-d9x7u0"), tl(e, "class", "modal svelte-d9x7u0"), tl(e, "id", "model-box-edit");
    },
    m(y, q) {
      dl(y, e, q), ct(e, t), ct(t, n), v && v.m(n, null), ct(n, i), ct(n, o), Wn(s, o, null), ct(n, r), ct(n, a), Wn(_, a, null), ct(n, c), ct(n, f), Wn(u, f, null), ct(n, d), p && p.m(n, null), ct(n, h), ct(n, m), Wn(g, m, null), b = !0;
    },
    p(y, [q]) {
      /*showRemove*/
      y[4] ? v && (Ss(), tt(v, 1, 1, () => {
        v = null;
      }), Cs()) : v ? (v.p(y, q), q & /*showRemove*/
      16 && Ee(v, 1)) : (v = pr(y), v.c(), Ee(v, 1), v.m(n, i));
      const D = {};
      q & /*currentLabel*/
      1 && (D.value = /*currentLabel*/
      y[0]), q & /*choices*/
      8 && (D.choices = /*choices*/
      y[3]), s.$set(D);
      const M = {};
      q & /*currentColor*/
      2 && (M.value = /*currentColor*/
      y[1]), _.$set(M);
      const S = {};
      q & /*$$scope*/
      262144 && (S.$$scope = { dirty: q, ctx: y }), u.$set(S), /*showRemove*/
      y[4] ? p ? (p.p(y, q), q & /*showRemove*/
      16 && Ee(p, 1)) : (p = wr(y), p.c(), Ee(p, 1), p.m(n, h)) : p && (Ss(), tt(p, 1, 1, () => {
        p = null;
      }), Cs());
      const C = {};
      q & /*$$scope*/
      262144 && (C.$$scope = { dirty: q, ctx: y }), g.$set(C);
    },
    i(y) {
      b || (Ee(v), Ee(s.$$.fragment, y), Ee(_.$$.fragment, y), Ee(u.$$.fragment, y), Ee(p), Ee(g.$$.fragment, y), b = !0);
    },
    o(y) {
      tt(v), tt(s.$$.fragment, y), tt(_.$$.fragment, y), tt(u.$$.fragment, y), tt(p), tt(g.$$.fragment, y), b = !1;
    },
    d(y) {
      y && fl(e), v && v.d(), Rn(s), Rn(_), Rn(u), p && p.d(), Rn(g);
    }
  };
}
function g2(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const f = r2();
  function u(q) {
    f("change", {
      label: i,
      color: a,
      lock: c,
      ret: q
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(q) {
    const { detail: D } = q;
    let M = D;
    Number.isInteger(M) ? (Array.isArray(s) && M < s.length && t(1, a = s[M]), Array.isArray(o) && M < o.length && t(0, i = o[M][0])) : t(0, i = M);
  }
  function h(q) {
    const { detail: D } = q;
    t(1, a = D);
  }
  function m(q) {
    d(q), u(1);
  }
  function g(q) {
    t(2, c = !c);
  }
  function b(q) {
    switch (q.key.toLowerCase()) {
      case "enter":
        u(1);
        break;
      case "escape":
        u(0);
        break;
    }
  }
  _2(() => (document.addEventListener("keydown", b), t(0, i = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const v = () => u(0), p = () => u(-1), y = () => u(1);
  return l.$$set = (q) => {
    "label" in q && t(10, n = q.label), "currentLabel" in q && t(0, i = q.currentLabel), "choices" in q && t(3, o = q.choices), "choicesColors" in q && t(11, s = q.choicesColors), "color" in q && t(12, r = q.color), "currentColor" in q && t(1, a = q.currentColor), "showRemove" in q && t(4, _ = q.showRemove), "labelDetailLock" in q && t(2, c = q.labelDetailLock);
  }, [
    i,
    a,
    c,
    o,
    _,
    u,
    d,
    h,
    m,
    g,
    n,
    s,
    r,
    v,
    p,
    y
  ];
}
class Ys extends i2 {
  constructor(e) {
    super(), o2(this, e, g2, m2, a2, {
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
const Ce = (l, e, t) => Math.min(Math.max(l, e), t);
function ns(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, o] = t;
  return `rgba(${n}, ${i}, ${o}, ${e})`;
}
class hi {
  constructor(e, t, n, i, o, s, r, a, _, c, f, u, d, h = "rgb(255, 255, 255)", m = 0.5, g = 25, b = 8, v = 2, p = 4, y = 1, q = !0) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (D) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let M = (D.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, S = (D.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, X = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        M = Ce(M, -this._xmin, C - this._xmax), S = Ce(S, -this._ymin, X - this._ymax), this._xmin += M, this._ymin += S, this._xmax += M, this._ymax += S, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (D) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [M, S] = this.toBoxCoordinates(D.clientX, D.clientY);
        M = (M - this.offsetMouseX) / this.canvasWindow.scale, S = (S - this.offsetMouseY) / this.canvasWindow.scale, M > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = M, this.creatingAnchorX = "xmin") : M > this._xmin && M < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = M : M > this._xmin && M < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = M : M < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = M, this.creatingAnchorX = "xmax"), S > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = S, this.creatingAnchorY = "ymin") : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = S : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = S : S < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = S, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (D) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const M = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Ce(this._xmin, 0, M - this.minSize), this._ymin = Ce(this._ymin, 0, S - this.minSize), this._xmax = Ce(this._xmax, this.minSize, M), this._ymax = Ce(this._ymax, this.minSize, S), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > M ? (this._xmin -= this._xmax - M, this._xmax = M) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > S ? (this._ymin -= this._ymax - S, this._ymax = S) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (D) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const M = D.clientX, S = D.clientY, C = (M - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, X = (S - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, I = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, w = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += C, this._ymin += X, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize), this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += C, this._ymin += X, this._xmax = Ce(this._xmax, this._xmin + this.minSize, I), this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += C, this._ymax += X, this._xmax = Ce(this._xmax, this._xmin + this.minSize, I), this._ymax = Ce(this._ymax, this._ymin + this.minSize, w);
            break;
          case 3:
            this._xmin += C, this._ymax += X, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize), this._ymax = Ce(this._ymax, this._ymin + this.minSize, w);
            break;
          case 4:
            this._ymin += X, this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += C, this._xmax = Ce(this._xmax, this._xmin + this.minSize, I);
            break;
          case 6:
            this._ymax += X, this._ymax = Ce(this._ymax, this._ymin + this.minSize, w);
            break;
          case 7:
            this._xmin += C, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = i, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = y, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = v, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = h, this.alpha = m, this.showLabel = q, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
  setShowLabel(e) {
    this.showLabel = e;
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = ns(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = ns(this.color, 1), e.stroke(), e.closePath(), this.showLabel && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, i, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, i, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = ns(this.color, 1);
    for (const i of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        t,
        n,
        i.xmax - i.xmin,
        i.ymax - i.ymin
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
      const i = this.resizeHandles[n];
      if (e >= i.xmin && e <= i.xmax && t >= i.ymin && t <= i.ymax)
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
    const [t, n, i, o] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - o, this._xmax = this.canvasWindow.imageWidth - i, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = i, this._xmax = o, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const qn = [
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
], mi = (l, e, t) => Math.min(Math.max(l, e), t);
class b2 {
  constructor(e, t) {
    this.stopDrag = () => {
      this.pointersCache.size === 0 ? (this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag)) : this.pointersCache.size === 1 && (this.isDragging = !0, this.startDragX = this.pointersCache.values().next().value.clientX, this.startDragY = this.pointersCache.values().next().value.clientY);
    }, this.handleDrag = (n) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        if (this.scale == 1) {
          this.offsetX = (this.canvasWidth - this.imageWidth) / 2, this.offsetY = 0, this.renderCallBack();
          return;
        }
        let i = n.clientX - this.startDragX, o = n.clientY - this.startDragY;
        this.imageWidth * this.scale > this.canvasWidth ? i = mi(i, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : i = mi(i, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = mi(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = mi(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += i, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.pointersCache = t, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX, this.startDragY = e.clientY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, i = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = i);
  }
}
const {
  SvelteComponent: p2,
  append: we,
  attr: G,
  binding_callbacks: vr,
  bubble: ls,
  check_outros: Ot,
  create_component: Xe,
  destroy_component: Ye,
  detach: We,
  element: Me,
  empty: Q_,
  group_outros: xt,
  init: w2,
  insert: Ae,
  listen: ze,
  mount_component: He,
  noop: ec,
  run_all: Hs,
  safe_not_equal: v2,
  set_data: k2,
  set_style: gi,
  space: Re,
  text: kr,
  toggle_class: Vt,
  transition_in: K,
  transition_out: oe
} = window.__gradio__svelte__internal, { onMount: y2, createEventDispatcher: C2 } = window.__gradio__svelte__internal;
function yr(l) {
  let e, t, n, i, o, s, r, a, _, c, f, u, d, h, m, g, b, v, p, y, q, D, M, S, C, X, I, w, L = !/*readOnlyBoxes*/
  l[8] && Cr(l), F = (
    /*readOnlyBoxes*/
    l[8] && zr()
  );
  const O = [q2, S2], z = [];
  function me(R, V) {
    return (
      /*labelsVisible*/
      R[17] ? 0 : 1
    );
  }
  return o = me(l), s = z[o] = O[o](l), _ = new Vd({}), u = new Ld({}), m = new Rg({}), v = new qg({}), C = new pg({}), {
    c() {
      e = Me("span"), L && L.c(), t = Re(), F && F.c(), n = Re(), i = Me("button"), s.c(), r = Re(), a = Me("button"), Xe(_.$$.fragment), c = Re(), f = Me("button"), Xe(u.$$.fragment), d = Re(), h = Me("button"), Xe(m.$$.fragment), g = Re(), b = Me("button"), Xe(v.$$.fragment), p = Re(), y = Me("span"), q = kr(
        /*zoomLevel*/
        l[19]
      ), D = kr("%"), M = Re(), S = Me("button"), Xe(C.$$.fragment), G(i, "class", "icon svelte-bbigew"), G(i, "aria-label", "Toggle labels"), G(i, "title", "Toggle labels"), Vt(
        i,
        "active",
        /*labelsVisible*/
        l[17]
      ), G(a, "class", "icon svelte-bbigew"), G(a, "aria-label", "Rotate counterclockwise"), G(a, "title", "Rotate counterclockwise"), G(f, "class", "icon svelte-bbigew"), G(f, "aria-label", "Rotate clockwise"), G(f, "title", "Rotate clockwise"), G(h, "class", "icon svelte-bbigew"), G(h, "aria-label", "Reset zoom"), G(h, "title", "Reset zoom (Space)"), G(b, "class", "icon svelte-bbigew"), G(b, "aria-label", "Zoom out"), G(b, "title", "Zoom out"), G(y, "class", "zoom-level svelte-bbigew"), G(S, "class", "icon svelte-bbigew"), G(S, "aria-label", "Zoom in"), G(S, "title", "Zoom in"), G(e, "class", "canvas-control svelte-bbigew");
    },
    m(R, V) {
      Ae(R, e, V), L && L.m(e, null), we(e, t), F && F.m(e, null), we(e, n), we(e, i), z[o].m(i, null), we(e, r), we(e, a), He(_, a, null), we(e, c), we(e, f), He(u, f, null), we(e, d), we(e, h), He(m, h, null), we(e, g), we(e, b), He(v, b, null), we(e, p), we(e, y), we(y, q), we(y, D), we(e, M), we(e, S), He(C, S, null), X = !0, I || (w = [
        ze(
          i,
          "click",
          /*toggleLabels*/
          l[20]
        ),
        ze(
          a,
          "click",
          /*click_handler_4*/
          l[55]
        ),
        ze(
          f,
          "click",
          /*click_handler_5*/
          l[56]
        ),
        ze(
          h,
          "click",
          /*resetView*/
          l[25]
        ),
        ze(
          b,
          "click",
          /*zoomOut*/
          l[27]
        ),
        ze(
          S,
          "click",
          /*zoomIn*/
          l[26]
        )
      ], I = !0);
    },
    p(R, V) {
      /*readOnlyBoxes*/
      R[8] ? L && (xt(), oe(L, 1, 1, () => {
        L = null;
      }), Ot()) : L ? (L.p(R, V), V[0] & /*readOnlyBoxes*/
      256 && K(L, 1)) : (L = Cr(R), L.c(), K(L, 1), L.m(e, t)), /*readOnlyBoxes*/
      R[8] ? F ? V[0] & /*readOnlyBoxes*/
      256 && K(F, 1) : (F = zr(), F.c(), K(F, 1), F.m(e, n)) : F && (xt(), oe(F, 1, 1, () => {
        F = null;
      }), Ot());
      let H = o;
      o = me(R), o !== H && (xt(), oe(z[H], 1, 1, () => {
        z[H] = null;
      }), Ot(), s = z[o], s || (s = z[o] = O[o](R), s.c()), K(s, 1), s.m(i, null)), (!X || V[0] & /*labelsVisible*/
      131072) && Vt(
        i,
        "active",
        /*labelsVisible*/
        R[17]
      ), (!X || V[0] & /*zoomLevel*/
      524288) && k2(
        q,
        /*zoomLevel*/
        R[19]
      );
    },
    i(R) {
      X || (K(L), K(F), K(s), K(_.$$.fragment, R), K(u.$$.fragment, R), K(m.$$.fragment, R), K(v.$$.fragment, R), K(C.$$.fragment, R), X = !0);
    },
    o(R) {
      oe(L), oe(F), oe(s), oe(_.$$.fragment, R), oe(u.$$.fragment, R), oe(m.$$.fragment, R), oe(v.$$.fragment, R), oe(C.$$.fragment, R), X = !1;
    },
    d(R) {
      R && We(e), L && L.d(), F && F.d(), z[o].d(), Ye(_), Ye(u), Ye(m), Ye(v), Ye(C), I = !1, Hs(w);
    }
  };
}
function Cr(l) {
  let e, t, n, i, o, s, r, a, _, c, f;
  t = new f0({}), o = new v0({});
  let u = (
    /*showRemoveButton*/
    l[1] && Sr(l)
  ), d = !/*disableEditBoxes*/
  l[5] && /*labelDetailLock*/
  l[18] && qr(l);
  return {
    c() {
      e = Me("button"), Xe(t.$$.fragment), n = Re(), i = Me("button"), Xe(o.$$.fragment), s = Re(), u && u.c(), r = Re(), d && d.c(), a = Q_(), G(e, "class", "icon svelte-bbigew"), G(e, "aria-label", "Create box"), G(e, "title", "Create box (C)"), Vt(
        e,
        "selected",
        /*mode*/
        l[13] === /*Mode*/
        l[9].creation
      ), G(i, "class", "icon svelte-bbigew"), G(i, "aria-label", "Drag boxes"), G(i, "title", "Drag boxes (D)"), Vt(
        i,
        "selected",
        /*mode*/
        l[13] === /*Mode*/
        l[9].drag
      );
    },
    m(h, m) {
      Ae(h, e, m), He(t, e, null), Ae(h, n, m), Ae(h, i, m), He(o, i, null), Ae(h, s, m), u && u.m(h, m), Ae(h, r, m), d && d.m(h, m), Ae(h, a, m), _ = !0, c || (f = [
        ze(
          e,
          "click",
          /*click_handler*/
          l[51]
        ),
        ze(
          i,
          "click",
          /*click_handler_1*/
          l[52]
        )
      ], c = !0);
    },
    p(h, m) {
      (!_ || m[0] & /*mode, Mode*/
      8704) && Vt(
        e,
        "selected",
        /*mode*/
        h[13] === /*Mode*/
        h[9].creation
      ), (!_ || m[0] & /*mode, Mode*/
      8704) && Vt(
        i,
        "selected",
        /*mode*/
        h[13] === /*Mode*/
        h[9].drag
      ), /*showRemoveButton*/
      h[1] ? u ? (u.p(h, m), m[0] & /*showRemoveButton*/
      2 && K(u, 1)) : (u = Sr(h), u.c(), K(u, 1), u.m(r.parentNode, r)) : u && (xt(), oe(u, 1, 1, () => {
        u = null;
      }), Ot()), !/*disableEditBoxes*/
      h[5] && /*labelDetailLock*/
      h[18] ? d ? (d.p(h, m), m[0] & /*disableEditBoxes, labelDetailLock*/
      262176 && K(d, 1)) : (d = qr(h), d.c(), K(d, 1), d.m(a.parentNode, a)) : d && (xt(), oe(d, 1, 1, () => {
        d = null;
      }), Ot());
    },
    i(h) {
      _ || (K(t.$$.fragment, h), K(o.$$.fragment, h), K(u), K(d), _ = !0);
    },
    o(h) {
      oe(t.$$.fragment, h), oe(o.$$.fragment, h), oe(u), oe(d), _ = !1;
    },
    d(h) {
      h && (We(e), We(n), We(i), We(s), We(r), We(a)), Ye(t), Ye(o), u && u.d(h), d && d.d(h), c = !1, Hs(f);
    }
  };
}
function Sr(l) {
  let e, t, n, i, o;
  return t = new D0({}), {
    c() {
      e = Me("button"), Xe(t.$$.fragment), G(e, "class", "icon svelte-bbigew"), G(e, "aria-label", "Remove box"), G(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      Ae(s, e, r), He(t, e, null), n = !0, i || (o = ze(
        e,
        "click",
        /*click_handler_2*/
        l[53]
      ), i = !0);
    },
    p: ec,
    i(s) {
      n || (K(t.$$.fragment, s), n = !0);
    },
    o(s) {
      oe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && We(e), Ye(t), i = !1, o();
    }
  };
}
function qr(l) {
  let e, t, n, i, o;
  return t = new X0({}), {
    c() {
      e = Me("button"), Xe(t.$$.fragment), G(e, "class", "icon svelte-bbigew"), G(e, "aria-label", "Edit label"), G(e, "title", "Edit label");
    },
    m(s, r) {
      Ae(s, e, r), He(t, e, null), n = !0, i || (o = ze(
        e,
        "click",
        /*click_handler_3*/
        l[54]
      ), i = !0);
    },
    p: ec,
    i(s) {
      n || (K(t.$$.fragment, s), n = !0);
    },
    o(s) {
      oe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && We(e), Ye(t), i = !1, o();
    }
  };
}
function zr(l) {
  let e, t, n;
  return t = new $_({}), {
    c() {
      e = Me("button"), Xe(t.$$.fragment), G(e, "class", "icon svelte-bbigew"), G(e, "aria-label", "Boxes are read-only"), G(e, "title", "Boxes are read-only"), e.disabled = !0, Vt(e, "locked", !0);
    },
    m(i, o) {
      Ae(i, e, o), He(t, e, null), n = !0;
    },
    i(i) {
      n || (K(t.$$.fragment, i), n = !0);
    },
    o(i) {
      oe(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && We(e), Ye(t);
    }
  };
}
function S2(l) {
  let e, t;
  return e = new Z0({}), {
    c() {
      Xe(e.$$.fragment);
    },
    m(n, i) {
      He(e, n, i), t = !0;
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ye(e, n);
    }
  };
}
function q2(l) {
  let e, t;
  return e = new O0({}), {
    c() {
      Xe(e.$$.fragment);
    },
    m(n, i) {
      He(e, n, i), t = !0;
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ye(e, n);
    }
  };
}
function Br(l) {
  let e, t;
  return e = new Ys({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[12] >= 0 && /*selectedBox*/
        l[12] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[12]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[12] >= 0 && /*selectedBox*/
        l[12] < /*value*/
        l[0].boxes.length ? Hn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[12]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[33]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[59]
  ), {
    c() {
      Xe(e.$$.fragment);
    },
    m(n, i) {
      He(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      4097 && (o.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      4097 && (o.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? Hn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ye(e, n);
    }
  };
}
function Dr(l) {
  let e, t;
  return e = new Ys({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[12] >= 0 && /*selectedBox*/
        l[12] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[12]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[12] >= 0 && /*selectedBox*/
        l[12] < /*value*/
        l[0].boxes.length ? Hn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[12]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        l[18]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[34]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[60]
  ), {
    c() {
      Xe(e.$$.fragment);
    },
    m(n, i) {
      He(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      4097 && (o.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      4097 && (o.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? Hn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      262144 && (o.labelDetailLock = /*labelDetailLock*/
      n[18]), e.$set(o);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ye(e, n);
    }
  };
}
function Mr(l) {
  let e, t;
  return e = new Ys({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[12] >= 0 && /*selectedBox*/
        l[12] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[12]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[12] >= 0 && /*selectedBox*/
        l[12] < /*value*/
        l[0].boxes.length ? Hn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[12]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        l[18]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    l[35]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    l[61]
  ), {
    c() {
      Xe(e.$$.fragment);
    },
    m(n, i) {
      He(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      4097 && (o.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      4097 && (o.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? Hn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      262144 && (o.labelDetailLock = /*labelDetailLock*/
      n[18]), e.$set(o);
    },
    i(n) {
      t || (K(e.$$.fragment, n), t = !0);
    },
    o(n) {
      oe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ye(e, n);
    }
  };
}
function z2(l) {
  let e, t, n, i, o, s, r, a, _, c, f, u = (
    /*interactive*/
    l[2] && yr(l)
  ), d = (
    /*editModalVisible*/
    l[14] && Br(l)
  ), h = (
    /*newModalVisible*/
    l[15] && Dr(l)
  ), m = (
    /*editDefaultLabelVisible*/
    l[16] && Mr(l)
  );
  return {
    c() {
      e = Me("div"), t = Me("div"), n = Me("canvas"), i = Re(), u && u.c(), o = Re(), d && d.c(), s = Re(), h && h.c(), r = Re(), m && m.c(), a = Q_(), gi(
        n,
        "height",
        /*height*/
        l[6]
      ), gi(
        n,
        "width",
        /*width*/
        l[7]
      ), G(n, "class", "canvas-annotator svelte-bbigew"), Vt(
        n,
        "read-only",
        /*readOnlyBoxes*/
        l[8]
      ), G(t, "class", "canvas-container svelte-bbigew"), G(e, "class", "annotator-container"), G(e, "tabindex", "0");
    },
    m(g, b) {
      Ae(g, e, b), we(e, t), we(t, n), l[50](n), we(e, i), u && u.m(e, null), l[57](e), Ae(g, o, b), d && d.m(g, b), Ae(g, s, b), h && h.m(g, b), Ae(g, r, b), m && m.m(g, b), Ae(g, a, b), _ = !0, c || (f = [
        ze(
          n,
          "pointerdown",
          /*handlePointerDown*/
          l[21]
        ),
        ze(
          n,
          "pointerup",
          /*handlePointerUp*/
          l[22]
        ),
        ze(
          n,
          "pointermove",
          /*handlePointerMove*/
          l[24]
        ),
        ze(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          l[23]
        ),
        ze(
          n,
          "dblclick",
          /*handleDoubleClick*/
          l[32]
        ),
        ze(
          n,
          "wheel",
          /*handleMouseWheel*/
          l[29]
        ),
        ze(
          e,
          "keydown",
          /*handleKeyPress*/
          l[28]
        ),
        ze(
          e,
          "click",
          /*click_handler_6*/
          l[58]
        )
      ], c = !0);
    },
    p(g, b) {
      (!_ || b[0] & /*height*/
      64) && gi(
        n,
        "height",
        /*height*/
        g[6]
      ), (!_ || b[0] & /*width*/
      128) && gi(
        n,
        "width",
        /*width*/
        g[7]
      ), (!_ || b[0] & /*readOnlyBoxes*/
      256) && Vt(
        n,
        "read-only",
        /*readOnlyBoxes*/
        g[8]
      ), /*interactive*/
      g[2] ? u ? (u.p(g, b), b[0] & /*interactive*/
      4 && K(u, 1)) : (u = yr(g), u.c(), K(u, 1), u.m(e, null)) : u && (xt(), oe(u, 1, 1, () => {
        u = null;
      }), Ot()), /*editModalVisible*/
      g[14] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      16384 && K(d, 1)) : (d = Br(g), d.c(), K(d, 1), d.m(s.parentNode, s)) : d && (xt(), oe(d, 1, 1, () => {
        d = null;
      }), Ot()), /*newModalVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*newModalVisible*/
      32768 && K(h, 1)) : (h = Dr(g), h.c(), K(h, 1), h.m(r.parentNode, r)) : h && (xt(), oe(h, 1, 1, () => {
        h = null;
      }), Ot()), /*editDefaultLabelVisible*/
      g[16] ? m ? (m.p(g, b), b[0] & /*editDefaultLabelVisible*/
      65536 && K(m, 1)) : (m = Mr(g), m.c(), K(m, 1), m.m(a.parentNode, a)) : m && (xt(), oe(m, 1, 1, () => {
        m = null;
      }), Ot());
    },
    i(g) {
      _ || (K(u), K(d), K(h), K(m), _ = !0);
    },
    o(g) {
      oe(u), oe(d), oe(h), oe(m), _ = !1;
    },
    d(g) {
      g && (We(e), We(o), We(s), We(r), We(a)), l[50](null), u && u.d(), l[57](null), d && d.d(g), h && h.d(g), m && m.d(g), c = !1, Hs(f);
    }
  };
}
const Lr = 100;
function bi(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Hn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function B2(l, e, t) {
  let n;
  var i;
  (function(k) {
    k[k.creation = 0] = "creation", k[k.drag = 1] = "drag";
  })(i || (i = {}));
  let { imageUrl: o = null } = e, { interactive: s } = e, { boxAlpha: r = 0.5 } = e, { boxMinSize: a = 10 } = e, { handleSize: _ } = e, { boxThickness: c } = e, { boxSelectedThickness: f } = e, { value: u } = e, { choices: d = [] } = e, { choicesColors: h = [] } = e, { disableEditBoxes: m = !1 } = e, { height: g = "100%" } = e, { width: b = "100%" } = e, { singleBox: v = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: y = !0 } = e, { useDefaultLabel: q = !1 } = e, { enableKeyboardShortcuts: D = !0 } = e, { showBoxLabels: M = !0 } = e, { readOnlyBoxes: S = !1 } = e;
  p === null && (p = m);
  let C, X, I, w = null, L = -1, F = i.drag, O = /* @__PURE__ */ new Map(), z = new b2(te, O), me = null;
  u !== null && u.boxes.length == 0 && (F = i.creation);
  let R = 0, V = 0, H = 0, x = 0, _e = 1, se = 0, ae = 0, j = !1, Ke = !1, W = !1, $ = M, ne = q, re = { label: "", color: "" }, le = { x: 0, y: 0, distance: 0 };
  const ge = C2();
  function te() {
    if (I) {
      if (I.clearRect(0, 0, C.width, C.height), I.save(), I.translate(z.offsetX, z.offsetY), I.scale(z.scale, z.scale), w !== null) {
        switch (u.orientation) {
          case 0:
            I.drawImage(w, 0, 0, se, ae);
            break;
          case 1:
            I.translate(se, 0), I.rotate(Math.PI / 2), I.drawImage(w, 0, 0, ae, se);
            break;
          case 2:
            I.translate(se, ae), I.rotate(Math.PI), I.drawImage(w, 0, 0, se, ae);
            break;
          case 3:
            I.translate(0, ae), I.rotate(-Math.PI / 2), I.drawImage(w, 0, 0, ae, se);
            break;
        }
        I.restore();
      }
      for (const k of u.boxes.slice().reverse())
        k.render(I);
    }
  }
  function E(k) {
    S || (t(12, L = k), u.boxes.forEach((A) => {
      A.setSelected(!1);
    }), k >= 0 && k < u.boxes.length && u.boxes[k].setSelected(!0), te());
  }
  function Ze() {
    t(17, $ = !$);
    for (const k of u.boxes)
      k.setShowLabel($);
    te();
  }
  const lt = (k, A) => {
    const Y = Math.sqrt(Math.pow(k.clientX - A.clientX, 2) + Math.pow(k.clientY - A.clientY, 2));
    return Y < Lr ? Lr : Y;
  };
  function ht(k) {
    if (s) {
      if (k.preventDefault(), C.setPointerCapture(k.pointerId), O.set(k.pointerId, k), O.size == 1) {
        if (S) {
          z.startDrag(k);
          return;
        }
        F === i.creation ? to(k) : F === i.drag && wn(k);
      } else if (O.size == 2) {
        t(49, z.isDragging = !1, z), u.boxes.forEach((je) => {
          je.isCreating = !1, je.isDragging = !1, je.isResizing = !1;
        });
        const A = Array.from(O.values()), Y = A[0], N = A[1], Z = lt(Y, N), J = C.getBoundingClientRect(), ue = (Y.clientX + N.clientX) / 2 - J.left, Ie = (Y.clientY + N.clientY) / 2 - J.top;
        le.distance = Z, le.x = ue, le.y = Ie;
      }
    }
  }
  function wn(k) {
    if (S) {
      z.startDrag(k);
      return;
    }
    const A = C.getBoundingClientRect(), Y = k.clientX - A.left, N = k.clientY - A.top;
    let Z = !1;
    for (const [J, ue] of u.boxes.entries()) {
      const Ie = ue.indexOfPointInsideHandle(Y, N);
      if (Ie >= 0) {
        Z = !0, E(J), ue.startResize(Ie, k);
        return;
      }
    }
    for (const [J, ue] of u.boxes.entries())
      if (ue.isPointInsideBox(Y, N)) {
        Z = !0, E(J), ue.startDrag(k);
        return;
      }
    v || E(-1), Z || z.startDrag(k);
  }
  function Pi(k) {
    s && (O.delete(k.pointerId), C.releasePointerCapture(k.pointerId), ge("change"));
  }
  function Ki(k) {
    s && (O.delete(k.pointerId), C.releasePointerCapture(k.pointerId), ge("change"));
  }
  function Zi(k) {
    if (s)
      if (k.preventDefault(), k.pointerType === "mouse") {
        if (!y || u === null || F !== i.drag)
          return;
        const A = C.getBoundingClientRect(), Y = k.clientX - A.left, N = k.clientY - A.top;
        for (const [Z, J] of u.boxes.entries()) {
          const ue = J.indexOfPointInsideHandle(Y, N);
          if (ue >= 0) {
            t(10, C.style.cursor = J.resizeHandles[ue].cursor, C);
            return;
          }
        }
        t(10, C.style.cursor = "default", C);
      } else {
        if (!O.has(k.pointerId))
          return;
        if (O.set(k.pointerId, k), O.size === 2) {
          const A = Array.from(O.values()), Y = A[0], N = A[1], Z = lt(Y, N), J = C.getBoundingClientRect(), ue = (Y.clientX + N.clientX) / 2 - J.left, Ie = (Y.clientY + N.clientY) / 2 - J.top, je = parseFloat((z.scale * (Z / le.distance)).toFixed(2)), Gt = je < 1 ? 1 : je, wl = Gt / z.scale;
          t(49, z.offsetX = le.x - (le.x - z.offsetX) * wl, z), t(49, z.offsetY = le.y - (le.y - z.offsetY) * wl, z);
          const vl = ue - le.x, vc = Ie - le.y;
          t(49, z.offsetX += vl, z), t(49, z.offsetY += vc, z), t(49, z.scale = Gt, z), le.x = ue, le.y = Ie, le.distance = Z, te();
        }
      }
  }
  function hl() {
    const k = C.width / se, A = C.height / ae, Y = Math.min(k, A);
    t(49, z.scale = Y, z), t(49, z.offsetX = (C.width - se * Y) / 2, z), t(49, z.offsetY = (C.height - ae * Y) / 2, z), te();
  }
  function Gi() {
    const k = parseFloat((z.scale * 1.25).toFixed(2)), A = C.width / 2, Y = C.height / 2, N = (A - z.offsetX) / z.scale, Z = (Y - z.offsetY) / z.scale;
    t(49, z.offsetX = A - N * k, z), t(49, z.offsetY = Y - Z * k, z), t(49, z.scale = k, z), te();
  }
  function Ji() {
    const k = parseFloat((z.scale * 0.8).toFixed(2)), A = k < 1 ? 1 : k, Y = C.width / 2, N = C.height / 2, Z = (Y - z.offsetX) / z.scale, J = (N - z.offsetY) / z.scale;
    t(49, z.offsetX = Y - Z * A, z), t(49, z.offsetY = N - J * A, z), t(49, z.scale = A, z), te();
  }
  function Qi(k) {
    if (!D || k.target !== X || !s)
      return;
    const A = k.key.toLowerCase(), Y = k.ctrlKey || k.metaKey;
    if (((/* @__PURE__ */ new Set([
      "delete",
      "c",
      "d",
      "e",
      " ",
      "v",
      "arrowup",
      "arrowdown",
      "arrowleft",
      "arrowright"
    ])).has(A) || Y && (A === "c" || A === "v")) && (k.preventDefault(), k.stopPropagation()), S) {
      A === " " && hl();
      return;
    }
    if (Y && A === "c") {
      Ht();
      return;
    }
    if (Y && A === "v") {
      bl();
      return;
    }
    switch (A) {
      case "delete":
      case "q":
        Kt();
        break;
      case " ":
        hl();
        break;
      case "arrowup":
        Zt(0, -3);
        break;
      case "arrowdown":
        Zt(0, 3);
        break;
      case "arrowleft":
        Zt(-3, 0);
        break;
      case "arrowright":
        Zt(3, 0);
        break;
    }
  }
  function ml() {
    setTimeout(
      () => {
        X == null || X.focus();
      },
      0
    );
  }
  function eo(k) {
    if (!s)
      return;
    k.preventDefault();
    const A = 1 / (1 + k.deltaY / 1e3 * 0.5), Y = parseFloat((z.scale * A).toFixed(2)), N = Y < 1 ? 1 : Y, Z = C.getBoundingClientRect(), J = k.clientX - Z.left, ue = k.clientY - Z.top, Ie = (J - z.offsetX) / z.scale, je = (ue - z.offsetY) / z.scale;
    t(49, z.offsetX = J - Ie * N, z), t(49, z.offsetY = ue - je * N, z), t(49, z.scale = N, z), te();
  }
  function to(k) {
    const A = C.getBoundingClientRect(), Y = (k.clientX - A.left - z.offsetX) / _e / z.scale, N = (k.clientY - A.top - z.offsetY) / _e / z.scale;
    let Z;
    h.length > 0 ? Z = bi(h[0]) : v ? u.boxes.length > 0 ? Z = u.boxes[0].color : Z = qn[0] : Z = qn[u.boxes.length % qn.length];
    let J = new hi(te, Ct, z, O, R, V, H, x, "", Y, N, Y, N, Z, r, a, _, c, f, _e, M);
    J.startCreating(k, A.left, A.top), v ? t(0, u.boxes = [J], u) : t(0, u.boxes = [J, ...u.boxes], u), E(0), te(), ge("change");
  }
  function gl() {
    t(13, F = i.creation), t(10, C.style.cursor = "crosshair", C);
  }
  function B() {
    t(13, F = i.drag), t(10, C.style.cursor = "default", C);
  }
  function Ct() {
    L >= 0 && L < u.boxes.length && (u.boxes[L].getArea() < 1 ? Kt() : (m || (ne ? lo() : t(15, Ke = !0)), v && B()));
  }
  function Yt() {
    L >= 0 && L < u.boxes.length && !m && t(14, j = !0);
  }
  function $n(k) {
    s && Yt();
  }
  function no(k) {
    t(14, j = !1), ml();
    const { detail: A } = k;
    let Y = A.label, N = A.color, Z = A.ret;
    if (L >= 0 && L < u.boxes.length) {
      let J = u.boxes[L];
      Z == 1 ? (J.label = Y, J.color = bi(N), te(), ge("change")) : Z == -1 && Kt();
    }
  }
  function vn(k) {
    t(15, Ke = !1), ml();
    const { detail: A } = k;
    let Y = A.label, N = A.color, Z = A.ret, J = A.lock;
    if (L >= 0 && L < u.boxes.length) {
      let ue = u.boxes[L];
      Z == 1 ? (t(18, ne = J), re.label = Y, re.color = N, ue.label = Y, ue.color = bi(N), te(), ge("change")) : Kt();
    }
  }
  function Fn(k) {
    t(16, W = !1), ml();
    const { detail: A } = k;
    let Y = A.label, N = A.color, Z = A.ret, J = A.lock;
    Z == 1 && (t(18, ne = J), re.label = Y, re.color = N);
  }
  function lo() {
    if (L >= 0 && L < u.boxes.length) {
      let k = u.boxes[L];
      k.label = re.label, re.color !== "" && (k.color = bi(re.color)), te(), ge("change");
    }
  }
  function Kt() {
    L >= 0 && L < u.boxes.length && (u.boxes.splice(L, 1), E(-1), v && gl(), ge("change"));
  }
  function Zt(k, A) {
    if (L < 0 || L >= u.boxes.length)
      return;
    const Y = u.boxes[L], N = Y.canvasWindow.scale, Z = k / N, J = A / N, ue = Y.canvasWindow.imageWidth, Ie = Y.canvasWindow.imageHeight, je = Math.max(-Y._xmin, Math.min(Z, ue - Y._xmax)), Gt = Math.max(-Y._ymin, Math.min(J, Ie - Y._ymax));
    Y._xmin += je, Y._ymin += Gt, Y._xmax += je, Y._ymax += Gt, Y.applyUserScale(), te(), ge("change");
  }
  function Ht() {
    L >= 0 && L < u.boxes.length && (me = u.boxes[L].toJSON());
  }
  function bl() {
    if (me === null)
      return;
    const k = me, A = k.scaleFactor || 1, Y = 20 / A;
    let N = k.xmin + Y, Z = k.ymin + Y, J = k.xmax + Y, ue = k.ymax + Y;
    const Ie = (H - R) / z.scale, je = (x - V) / z.scale, Gt = J - N, wl = ue - Z;
    J > Ie && (N = Math.max(0, Ie - Gt), J = N + Gt), ue > je && (Z = Math.max(0, je - wl), ue = Z + wl);
    const vl = new hi(te, Ct, z, O, R, V, H, x, k.label, N, Z, J, ue, k.color, r, a, _, c, f, A, M);
    v ? t(0, u.boxes = [vl], u) : t(0, u.boxes = [vl, ...u.boxes], u), me = vl.toJSON(), E(0), te(), ge("change");
  }
  function io(k) {
    t(0, u.orientation = ((u.orientation + k) % 4 + 4) % 4, u), t(49, z.orientation = u.orientation, z), pl();
    for (const A of u.boxes)
      A.onRotate(k);
    te();
  }
  function pl() {
    if (C) {
      _e = 1;
      const k = C.clientWidth, A = C.clientHeight;
      if (t(10, C.width = k, C), t(10, C.height = A, C), z.setRotatedImage(w), w !== null) {
        const Y = k / z.imageRotatedWidth, N = A / z.imageRotatedHeight;
        _e = Math.min(Y, N, 1), se = Math.round(z.imageRotatedWidth * _e), ae = Math.round(z.imageRotatedHeight * _e);
        const Z = Math.round((k - se) / 2), J = Math.round((A - ae) / 2);
        R = Z, V = J, H = Z + se, x = J + ae, t(49, z.imageWidth = se, z), t(49, z.imageHeight = ae, z);
      } else
        R = 0, V = 0, H = C.width, x = C.height;
      if (z.resize(C.width, C.height, R, V), H > 0 && x > 0)
        for (const Y of u.boxes)
          Y.canvasXmin = R, Y.canvasYmin = V, Y.canvasXmax = H, Y.canvasYmax = x, Y.setScaleFactor(_e);
      te(), ge("change");
    }
  }
  const sc = new ResizeObserver(pl);
  function ac() {
    for (let k = 0; k < u.boxes.length; k++) {
      let A = u.boxes[k];
      if (!(A instanceof hi)) {
        let Y = "", N = "";
        A.hasOwnProperty("color") ? (Y = A.color, Array.isArray(Y) && Y.length === 3 && (Y = `rgb(${Y[0]}, ${Y[1]}, ${Y[2]})`)) : Y = qn[k % qn.length], A.hasOwnProperty("label") && (N = A.label), A = new hi(te, Ct, z, O, R, V, H, x, N, A.xmin, A.ymin, A.xmax, A.ymax, Y, r, a, _, c, f, A.scaleFactor || 1, M), t(0, u.boxes[k] = A, u);
      }
    }
  }
  function Is() {
    o !== null && (w === null || w.src != o) && (w = new Image(), w.src = o, w.onload = function() {
      pl(), te();
    });
  }
  y2(() => {
    if (Array.isArray(d) && d.length > 0) {
      if (!Array.isArray(h) || h.length == 0)
        for (let k = 0; k < d.length; k++) {
          let A = qn[k % qn.length];
          h.push(Hn(A));
        }
      re.label = d[0][0], re.color = h[0];
    }
    I = C.getContext("2d"), sc.observe(C), L < 0 && u !== null && u.boxes.length > 0 && E(0), Is(), pl(), te();
  });
  function rc(k) {
    vr[k ? "unshift" : "push"](() => {
      C = k, t(10, C);
    });
  }
  const _c = () => gl(), cc = () => B(), uc = () => Kt(), fc = () => t(16, W = !0), dc = () => io(-1), hc = () => io(1);
  function mc(k) {
    vr[k ? "unshift" : "push"](() => {
      X = k, t(11, X);
    });
  }
  const gc = () => X.focus();
  function bc(k) {
    ls.call(this, l, k);
  }
  function pc(k) {
    ls.call(this, l, k);
  }
  function wc(k) {
    ls.call(this, l, k);
  }
  return l.$$set = (k) => {
    "imageUrl" in k && t(38, o = k.imageUrl), "interactive" in k && t(2, s = k.interactive), "boxAlpha" in k && t(39, r = k.boxAlpha), "boxMinSize" in k && t(40, a = k.boxMinSize), "handleSize" in k && t(41, _ = k.handleSize), "boxThickness" in k && t(42, c = k.boxThickness), "boxSelectedThickness" in k && t(43, f = k.boxSelectedThickness), "value" in k && t(0, u = k.value), "choices" in k && t(3, d = k.choices), "choicesColors" in k && t(4, h = k.choicesColors), "disableEditBoxes" in k && t(5, m = k.disableEditBoxes), "height" in k && t(6, g = k.height), "width" in k && t(7, b = k.width), "singleBox" in k && t(44, v = k.singleBox), "showRemoveButton" in k && t(1, p = k.showRemoveButton), "handlesCursor" in k && t(45, y = k.handlesCursor), "useDefaultLabel" in k && t(46, q = k.useDefaultLabel), "enableKeyboardShortcuts" in k && t(47, D = k.enableKeyboardShortcuts), "showBoxLabels" in k && t(48, M = k.showBoxLabels), "readOnlyBoxes" in k && t(8, S = k.readOnlyBoxes);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (t(49, z.orientation = u.orientation, z), Is(), ac(), pl(), te()), l.$$.dirty[1] & /*canvasWindow*/
    262144 && t(19, n = Math.round(z.scale * 100));
  }, [
    u,
    p,
    s,
    d,
    h,
    m,
    g,
    b,
    S,
    i,
    C,
    X,
    L,
    F,
    j,
    Ke,
    W,
    $,
    ne,
    n,
    Ze,
    ht,
    Pi,
    Ki,
    Zi,
    hl,
    Gi,
    Ji,
    Qi,
    eo,
    gl,
    B,
    $n,
    no,
    vn,
    Fn,
    Kt,
    io,
    o,
    r,
    a,
    _,
    c,
    f,
    v,
    y,
    q,
    D,
    M,
    z,
    rc,
    _c,
    cc,
    uc,
    fc,
    dc,
    hc,
    mc,
    gc,
    bc,
    pc,
    wc
  ];
}
class D2 extends p2 {
  constructor(e) {
    super(), w2(
      this,
      e,
      B2,
      z2,
      v2,
      {
        imageUrl: 38,
        interactive: 2,
        boxAlpha: 39,
        boxMinSize: 40,
        handleSize: 41,
        boxThickness: 42,
        boxSelectedThickness: 43,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 44,
        showRemoveButton: 1,
        handlesCursor: 45,
        useDefaultLabel: 46,
        enableKeyboardShortcuts: 47,
        showBoxLabels: 48,
        readOnlyBoxes: 8
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: M2,
  add_flush_callback: L2,
  bind: E2,
  binding_callbacks: R2,
  create_component: W2,
  destroy_component: A2,
  init: X2,
  mount_component: Y2,
  safe_not_equal: H2,
  transition_in: I2,
  transition_out: j2
} = window.__gradio__svelte__internal, { createEventDispatcher: T2 } = window.__gradio__svelte__internal;
function $2(l) {
  let e, t, n;
  function i(s) {
    l[23](s);
  }
  let o = {
    interactive: (
      /*interactive*/
      l[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      l[2]
    ),
    choices: (
      /*labelList*/
      l[3]
    ),
    choicesColors: (
      /*labelColors*/
      l[4]
    ),
    height: (
      /*height*/
      l[8]
    ),
    width: (
      /*width*/
      l[9]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[5]
    ),
    handleSize: (
      /*handleSize*/
      l[6]
    ),
    boxThickness: (
      /*boxThickness*/
      l[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[10]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[11]
    ),
    singleBox: (
      /*singleBox*/
      l[12]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[13]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[14]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      l[15]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      l[16]
    ),
    showBoxLabels: (
      /*showBoxLabels*/
      l[17]
    ),
    readOnlyBoxes: (
      /*readOnlyBoxes*/
      l[18]
    ),
    imageUrl: (
      /*resolved_src*/
      l[19]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), e = new D2({ props: o }), R2.push(() => E2(e, "value", i)), e.$on(
      "change",
      /*change_handler*/
      l[24]
    ), {
      c() {
        W2(e.$$.fragment);
      },
      m(s, r) {
        Y2(e, s, r), n = !0;
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
        s[17]), r & /*readOnlyBoxes*/
        262144 && (a.readOnlyBoxes = /*readOnlyBoxes*/
        s[18]), r & /*resolved_src*/
        524288 && (a.imageUrl = /*resolved_src*/
        s[19]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], L2(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (I2(e.$$.fragment, s), n = !0);
      },
      o(s) {
        j2(e.$$.fragment, s), n = !1;
      },
      d(s) {
        A2(e, s);
      }
    }
  );
}
function F2(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: f } = e, { width: u } = e, { boxSelectedThickness: d } = e, { value: h } = e, { disableEditBoxes: m } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: v } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: y } = e, { showBoxLabels: q } = e, { readOnlyBoxes: D = !1 } = e, M, S;
  const C = T2();
  function X(w) {
    h = w, t(0, h);
  }
  const I = () => C("change");
  return l.$$set = (w) => {
    "src" in w && t(21, n = w.src), "interactive" in w && t(1, i = w.interactive), "boxesAlpha" in w && t(2, o = w.boxesAlpha), "labelList" in w && t(3, s = w.labelList), "labelColors" in w && t(4, r = w.labelColors), "boxMinSize" in w && t(5, a = w.boxMinSize), "handleSize" in w && t(6, _ = w.handleSize), "boxThickness" in w && t(7, c = w.boxThickness), "height" in w && t(8, f = w.height), "width" in w && t(9, u = w.width), "boxSelectedThickness" in w && t(10, d = w.boxSelectedThickness), "value" in w && t(0, h = w.value), "disableEditBoxes" in w && t(11, m = w.disableEditBoxes), "singleBox" in w && t(12, g = w.singleBox), "showRemoveButton" in w && t(13, b = w.showRemoveButton), "handlesCursor" in w && t(14, v = w.handlesCursor), "useDefaultLabel" in w && t(15, p = w.useDefaultLabel), "enableKeyboardShortcuts" in w && t(16, y = w.enableKeyboardShortcuts), "showBoxLabels" in w && t(17, q = w.showBoxLabels), "readOnlyBoxes" in w && t(18, D = w.readOnlyBoxes);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    6291456) {
      t(19, M = n), t(22, S = n);
      const w = n;
      yh(w).then((L) => {
        S === w && t(19, M = L);
      });
    }
  }, [
    h,
    i,
    o,
    s,
    r,
    a,
    _,
    c,
    f,
    u,
    d,
    m,
    g,
    b,
    v,
    p,
    y,
    q,
    D,
    M,
    C,
    n,
    S,
    X,
    I
  ];
}
class O2 extends M2 {
  constructor(e) {
    super(), X2(this, e, F2, $2, H2, {
      src: 21,
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
      showBoxLabels: 17,
      readOnlyBoxes: 18
    });
  }
}
class Er {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: x2,
  add_flush_callback: Hi,
  append: zn,
  attr: Yl,
  bind: Ii,
  binding_callbacks: ol,
  bubble: Ml,
  check_outros: fn,
  create_component: Wt,
  create_slot: V2,
  destroy_component: At,
  detach: mn,
  element: il,
  empty: N2,
  get_all_dirty_from_scope: U2,
  get_slot_changes: P2,
  group_outros: dn,
  init: K2,
  insert: gn,
  mount_component: Xt,
  noop: Z2,
  safe_not_equal: G2,
  space: rn,
  toggle_class: Rr,
  transition_in: ee,
  transition_out: ce,
  update_slot_base: J2
} = window.__gradio__svelte__internal, { onMount: Q2, createEventDispatcher: ep, tick: tp } = window.__gradio__svelte__internal;
function Wr(l) {
  let e, t;
  return e = new Xh({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [np] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, i) {
      Xt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      536870912 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function np(l) {
  let e, t;
  return e = new Fl({
    props: {
      Icon: Kf,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, i) {
      Xt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function Ar(l) {
  let e, t;
  return e = new p1({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[44]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[45]
  ), e.$on(
    "error",
    /*error_handler*/
    l[46]
  ), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, i) {
      Xt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[0] & /*value*/
      2 && (o.value = /*value*/
      n[1]), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function Xr(l) {
  let e, t, n;
  return t = new Fl({
    props: { Icon: Jr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[41]
  ), {
    c() {
      e = il("div"), Wt(t.$$.fragment);
    },
    m(i, o) {
      gn(i, e, o), Xt(t, e, null), n = !0;
    },
    p: Z2,
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ce(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && mn(e), At(t);
    }
  };
}
function Yr(l) {
  let e, t, n;
  return t = new Fl({
    props: {
      Icon: (
        /*isFullscreen*/
        l[35] ? er : Ja
      ),
      label: (
        /*isFullscreen*/
        l[35] ? "Exit Fullscreen" : "Enter Fullscreen"
      )
    }
  }), t.$on(
    "click",
    /*toggleFullscreen*/
    l[42]
  ), {
    c() {
      e = il("div"), Wt(t.$$.fragment);
    },
    m(i, o) {
      gn(i, e, o), Xt(t, e, null), n = !0;
    },
    p(i, o) {
      const s = {};
      o[1] & /*isFullscreen*/
      16 && (s.Icon = /*isFullscreen*/
      i[35] ? er : Ja), o[1] & /*isFullscreen*/
      16 && (s.label = /*isFullscreen*/
      i[35] ? "Exit Fullscreen" : "Enter Fullscreen"), t.$set(s);
    },
    i(i) {
      n || (ee(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ce(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && mn(e), At(t);
    }
  };
}
function Hr(l) {
  let e;
  const t = (
    /*#slots*/
    l[43].default
  ), n = V2(
    t,
    l,
    /*$$scope*/
    l[60],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), e = !0;
    },
    p(i, o) {
      n && n.p && (!e || o[1] & /*$$scope*/
      536870912) && J2(
        n,
        t,
        i,
        /*$$scope*/
        i[60],
        e ? P2(
          t,
          /*$$scope*/
          i[60],
          o,
          null
        ) : U2(
          /*$$scope*/
          i[60]
        ),
        null
      );
    },
    i(i) {
      e || (ee(n, i), e = !0);
    },
    o(i) {
      ce(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function lp(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && Hr(l)
  );
  return {
    c() {
      n && n.c(), e = N2();
    },
    m(i, o) {
      n && n.m(i, o), gn(i, e, o), t = !0;
    },
    p(i, o) {
      /*value*/
      i[1] === null ? n ? (n.p(i, o), o[0] & /*value*/
      2 && ee(n, 1)) : (n = Hr(i), n.c(), ee(n, 1), n.m(e.parentNode, e)) : n && (dn(), ce(n, 1, 1, () => {
        n = null;
      }), fn());
    },
    i(i) {
      t || (ee(n), t = !0);
    },
    o(i) {
      ce(n), t = !1;
    },
    d(i) {
      i && mn(e), n && n.d(i);
    }
  };
}
function Ir(l) {
  let e, t;
  return e = new o0({
    props: {
      root: (
        /*root*/
        l[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        l[8]
      ),
      upload: (
        /*upload*/
        l[34]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    l[51]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    l[52]
  ), e.$on(
    "error",
    /*error_handler_2*/
    l[53]
  ), e.$on(
    "drag",
    /*drag_handler*/
    l[54]
  ), e.$on(
    "upload",
    /*upload_handler*/
    l[55]
  ), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, i) {
      Xt(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), i[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), i[1] & /*upload*/
      8 && (o.upload = /*upload*/
      n[34]), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      At(e, n);
    }
  };
}
function jr(l) {
  let e, t, n, i;
  function o(r) {
    l[56](r);
  }
  let s = {
    height: (
      /*height*/
      l[17]
    ),
    width: (
      /*width*/
      l[18]
    ),
    boxesAlpha: (
      /*boxesAlpha*/
      l[12]
    ),
    labelList: (
      /*labelList*/
      l[13]
    ),
    labelColors: (
      /*labelColors*/
      l[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[15]
    ),
    interactive: (
      /*interactive*/
      l[7]
    ),
    handleSize: (
      /*handleSize*/
      l[16]
    ),
    boxThickness: (
      /*boxThickness*/
      l[19]
    ),
    singleBox: (
      /*singleBox*/
      l[21]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[20]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[22]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[23]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[24]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      l[28]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      l[29]
    ),
    showBoxLabels: (
      /*showBoxLabels*/
      l[30]
    ),
    readOnlyBoxes: (
      /*readOnlyBoxes*/
      l[31]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (s.value = /*value*/
    l[1]), t = new O2({ props: s }), ol.push(() => Ii(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      l[57]
    ), {
      c() {
        e = il("div"), Wt(t.$$.fragment), Yl(e, "class", "image-frame svelte-14g2qrl"), Rr(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        gn(r, e, a), Xt(t, e, null), i = !0;
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
        r[30]), a[1] & /*readOnlyBoxes*/
        1 && (_.readOnlyBoxes = /*readOnlyBoxes*/
        r[31]), a[0] & /*value*/
        2 && (_.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, _.value = /*value*/
        r[1], Hi(() => n = !1)), t.$set(_), (!i || a[0] & /*selectable*/
        32) && Rr(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (ee(t.$$.fragment, r), i = !0);
      },
      o(r) {
        ce(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && mn(e), At(t);
      }
    }
  );
}
function Tr(l) {
  let e, t, n;
  function i(s) {
    l[58](s);
  }
  let o = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*clear*/
      l[41]
    ),
    handle_select: (
      /*handle_select_source*/
      l[40]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (o.active_source = /*active_source*/
    l[0]), e = new A1({ props: o }), ol.push(() => Ii(e, "active_source", i)), {
      c() {
        Wt(e.$$.fragment);
      },
      m(s, r) {
        Xt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], Hi(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ee(e.$$.fragment, s), n = !0);
      },
      o(s) {
        ce(e.$$.fragment, s), n = !1;
      },
      d(s) {
        At(e, s);
      }
    }
  );
}
function ip(l) {
  let e, t, n, i, o, s, r, a, _, c, f, u, d, h, m, g = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), b;
  e = new Au({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: Qr,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let v = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Wr(l)
  ), p = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Ar(l)
  ), y = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Xr(l)
  ), q = (
    /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Yr(l)
  );
  function D(w) {
    l[48](w);
  }
  function M(w) {
    l[49](w);
  }
  let S = {
    hidden: (
      /*value*/
      l[1] !== null || /*active_source*/
      l[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      l[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      l[6]
    ),
    max_file_size: (
      /*max_file_size*/
      l[25]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[26]
    ),
    stream_handler: (
      /*stream_handler*/
      l[27]
    ),
    $$slots: { default: [lp] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[32] !== void 0 && (S.uploading = /*uploading*/
  l[32]), /*dragging*/
  l[33] !== void 0 && (S.dragging = /*dragging*/
  l[33]), c = new hm({ props: S }), l[47](c), ol.push(() => Ii(c, "uploading", D)), ol.push(() => Ii(c, "dragging", M)), c.$on(
    "load",
    /*handle_upload*/
    l[37]
  ), c.$on(
    "error",
    /*error_handler_1*/
    l[50]
  );
  let C = (
    /*value*/
    l[1] === null && /*active_source*/
    l[0] === "webcam" && Ir(l)
  ), X = (
    /*value*/
    l[1] !== null && jr(l)
  ), I = g && Tr(l);
  return {
    c() {
      Wt(e.$$.fragment), t = rn(), n = il("div"), v && v.c(), i = rn(), p && p.c(), o = rn(), y && y.c(), s = rn(), q && q.c(), r = rn(), a = il("div"), _ = il("div"), Wt(c.$$.fragment), d = rn(), C && C.c(), h = rn(), X && X.c(), m = rn(), I && I.c(), Yl(n, "class", "icon-buttons svelte-14g2qrl"), Yl(_, "class", "upload-container svelte-14g2qrl"), Yl(a, "data-testid", "image"), Yl(a, "class", "image-container svelte-14g2qrl");
    },
    m(w, L) {
      Xt(e, w, L), gn(w, t, L), gn(w, n, L), v && v.m(n, null), zn(n, i), p && p.m(n, null), zn(n, o), y && y.m(n, null), zn(n, s), q && q.m(n, null), gn(w, r, L), gn(w, a, L), zn(a, _), Xt(c, _, null), zn(_, d), C && C.m(_, null), zn(_, h), X && X.m(_, null), zn(a, m), I && I.m(a, null), l[59](a), b = !0;
    },
    p(w, L) {
      const F = {};
      L[0] & /*show_label*/
      8 && (F.show_label = /*show_label*/
      w[3]), L[0] & /*label*/
      4 && (F.label = /*label*/
      w[2] || "Image Annotator"), e.$set(F), /*showDownloadButton*/
      w[10] && /*value*/
      w[1] !== null ? v ? (v.p(w, L), L[0] & /*showDownloadButton, value*/
      1026 && ee(v, 1)) : (v = Wr(w), v.c(), ee(v, 1), v.m(n, i)) : v && (dn(), ce(v, 1, 1, () => {
        v = null;
      }), fn()), /*showShareButton*/
      w[9] && /*value*/
      w[1] !== null ? p ? (p.p(w, L), L[0] & /*showShareButton, value*/
      514 && ee(p, 1)) : (p = Ar(w), p.c(), ee(p, 1), p.m(n, o)) : p && (dn(), ce(p, 1, 1, () => {
        p = null;
      }), fn()), /*showClearButton*/
      w[11] && /*value*/
      w[1] !== null && /*interactive*/
      w[7] ? y ? (y.p(w, L), L[0] & /*showClearButton, value, interactive*/
      2178 && ee(y, 1)) : (y = Xr(w), y.c(), ee(y, 1), y.m(n, s)) : y && (dn(), ce(y, 1, 1, () => {
        y = null;
      }), fn()), /*value*/
      w[1] !== null && /*interactive*/
      w[7] ? q ? (q.p(w, L), L[0] & /*value, interactive*/
      130 && ee(q, 1)) : (q = Yr(w), q.c(), ee(q, 1), q.m(n, null)) : q && (dn(), ce(q, 1, 1, () => {
        q = null;
      }), fn());
      const O = {};
      L[0] & /*value, active_source*/
      3 && (O.hidden = /*value*/
      w[1] !== null || /*active_source*/
      w[0] === "webcam"), L[0] & /*active_source*/
      1 && (O.filetype = /*active_source*/
      w[0] === "clipboard" ? "clipboard" : "image/*"), L[0] & /*root*/
      64 && (O.root = /*root*/
      w[6]), L[0] & /*max_file_size*/
      33554432 && (O.max_file_size = /*max_file_size*/
      w[25]), L[0] & /*sources*/
      16 && (O.disable_click = !/*sources*/
      w[4].includes("upload")), L[0] & /*cli_upload*/
      67108864 && (O.upload = /*cli_upload*/
      w[26]), L[0] & /*stream_handler*/
      134217728 && (O.stream_handler = /*stream_handler*/
      w[27]), L[0] & /*value*/
      2 | L[1] & /*$$scope*/
      536870912 && (O.$$scope = { dirty: L, ctx: w }), !f && L[1] & /*uploading*/
      2 && (f = !0, O.uploading = /*uploading*/
      w[32], Hi(() => f = !1)), !u && L[1] & /*dragging*/
      4 && (u = !0, O.dragging = /*dragging*/
      w[33], Hi(() => u = !1)), c.$set(O), /*value*/
      w[1] === null && /*active_source*/
      w[0] === "webcam" ? C ? (C.p(w, L), L[0] & /*value, active_source*/
      3 && ee(C, 1)) : (C = Ir(w), C.c(), ee(C, 1), C.m(_, h)) : C && (dn(), ce(C, 1, 1, () => {
        C = null;
      }), fn()), /*value*/
      w[1] !== null ? X ? (X.p(w, L), L[0] & /*value*/
      2 && ee(X, 1)) : (X = jr(w), X.c(), ee(X, 1), X.m(_, null)) : X && (dn(), ce(X, 1, 1, () => {
        X = null;
      }), fn()), L[0] & /*sources, value, interactive*/
      146 && (g = /*sources*/
      (w[4].length > 1 || /*sources*/
      w[4].includes("clipboard")) && /*value*/
      w[1] === null && /*interactive*/
      w[7]), g ? I ? (I.p(w, L), L[0] & /*sources, value, interactive*/
      146 && ee(I, 1)) : (I = Tr(w), I.c(), ee(I, 1), I.m(a, null)) : I && (dn(), ce(I, 1, 1, () => {
        I = null;
      }), fn());
    },
    i(w) {
      b || (ee(e.$$.fragment, w), ee(v), ee(p), ee(y), ee(q), ee(c.$$.fragment, w), ee(C), ee(X), ee(I), b = !0);
    },
    o(w) {
      ce(e.$$.fragment, w), ce(v), ce(p), ce(y), ce(q), ce(c.$$.fragment, w), ce(C), ce(X), ce(I), b = !1;
    },
    d(w) {
      w && (mn(t), mn(n), mn(r), mn(a)), At(e, w), v && v.d(), p && p.d(), y && y.d(), q && q.d(), l[47](null), At(c), C && C.d(), X && X.d(), I && I.d(), l[59](null);
    }
  };
}
function op(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var o = this && this.__awaiter || function(B, Ct, Yt, $n) {
    function no(vn) {
      return vn instanceof Yt ? vn : new Yt(function(Fn) {
        Fn(vn);
      });
    }
    return new (Yt || (Yt = Promise))(function(vn, Fn) {
      function lo(Ht) {
        try {
          Zt($n.next(Ht));
        } catch (bl) {
          Fn(bl);
        }
      }
      function Kt(Ht) {
        try {
          Zt($n.throw(Ht));
        } catch (bl) {
          Fn(bl);
        }
      }
      function Zt(Ht) {
        Ht.done ? vn(Ht.value) : no(Ht.value).then(lo, Kt);
      }
      Zt(($n = $n.apply(B, Ct || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: f } = e, { interactive: u } = e, { i18n: d } = e, { showShareButton: h } = e, { showDownloadButton: m } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: v } = e, { labelColors: p } = e, { boxMinSize: y } = e, { handleSize: q } = e, { height: D } = e, { width: M } = e, { boxThickness: S } = e, { disableEditBoxes: C } = e, { singleBox: X } = e, { showRemoveButton: I } = e, { handlesCursor: w } = e, { boxSelectedThickness: L } = e, { max_file_size: F = null } = e, { cli_upload: O } = e, { stream_handler: z } = e, { useDefaultLabel: me } = e, { enableKeyboardShortcuts: R } = e, { showBoxLabels: V } = e, { readOnlyBoxes: H = !1 } = e, x, _e = !1, se = !1, ae, { active_source: j = null } = e;
  function Ke({ detail: B }) {
    t(1, s = new Er()), t(1, s.image = B, s), $("upload");
  }
  function W(B) {
    return o(this, void 0, void 0, function* () {
      const Ct = yield x.load_files([new File([B], "webcam.png")]), Yt = (Ct == null ? void 0 : Ct[0]) || null;
      Yt ? (t(1, s = new Er()), t(1, s.image = Yt, s)) : t(1, s = null), yield tp(), $("change");
    });
  }
  const $ = ep();
  let ne = !1;
  function re(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          x.paste_clipboard();
          break;
      }
    });
  }
  function le() {
    t(1, s = null), $("clear"), $("change");
  }
  function ge() {
    return o(this, void 0, void 0, function* () {
      if (ae) {
        if (!document.fullscreenEnabled) {
          console.warn("Fullscreen API is not available");
          return;
        }
        if (se)
          try {
            yield document.exitFullscreen();
          } catch (B) {
            console.error("Failed to exit fullscreen:", B);
          }
        else
          try {
            yield ae.requestFullscreen();
          } catch (B) {
            console.error("Failed to enter fullscreen:", B);
          }
      }
    });
  }
  function te() {
    t(35, se = !!document.fullscreenElement);
  }
  Q2(() => (document.addEventListener("fullscreenchange", te), () => {
    document.removeEventListener("fullscreenchange", te);
  }));
  const E = async (B) => B === null ? "" : `<img src="${await o1(B.image)}" />`;
  function Ze(B) {
    Ml.call(this, l, B);
  }
  function lt(B) {
    Ml.call(this, l, B);
  }
  function ht(B) {
    ol[B ? "unshift" : "push"](() => {
      x = B, t(34, x);
    });
  }
  function wn(B) {
    _e = B, t(32, _e);
  }
  function Pi(B) {
    ne = B, t(33, ne);
  }
  function Ki(B) {
    Ml.call(this, l, B);
  }
  const Zi = (B) => W(B.detail), hl = (B) => W(B.detail);
  function Gi(B) {
    Ml.call(this, l, B);
  }
  function Ji(B) {
    Ml.call(this, l, B);
  }
  const Qi = (B) => W(B.detail);
  function ml(B) {
    s = B, t(1, s);
  }
  const eo = () => $("change");
  function to(B) {
    j = B, t(0, j), t(4, _);
  }
  function gl(B) {
    ol[B ? "unshift" : "push"](() => {
      ae = B, t(36, ae);
    });
  }
  return l.$$set = (B) => {
    "value" in B && t(1, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, _ = B.sources), "selectable" in B && t(5, c = B.selectable), "root" in B && t(6, f = B.root), "interactive" in B && t(7, u = B.interactive), "i18n" in B && t(8, d = B.i18n), "showShareButton" in B && t(9, h = B.showShareButton), "showDownloadButton" in B && t(10, m = B.showDownloadButton), "showClearButton" in B && t(11, g = B.showClearButton), "boxesAlpha" in B && t(12, b = B.boxesAlpha), "labelList" in B && t(13, v = B.labelList), "labelColors" in B && t(14, p = B.labelColors), "boxMinSize" in B && t(15, y = B.boxMinSize), "handleSize" in B && t(16, q = B.handleSize), "height" in B && t(17, D = B.height), "width" in B && t(18, M = B.width), "boxThickness" in B && t(19, S = B.boxThickness), "disableEditBoxes" in B && t(20, C = B.disableEditBoxes), "singleBox" in B && t(21, X = B.singleBox), "showRemoveButton" in B && t(22, I = B.showRemoveButton), "handlesCursor" in B && t(23, w = B.handlesCursor), "boxSelectedThickness" in B && t(24, L = B.boxSelectedThickness), "max_file_size" in B && t(25, F = B.max_file_size), "cli_upload" in B && t(26, O = B.cli_upload), "stream_handler" in B && t(27, z = B.stream_handler), "useDefaultLabel" in B && t(28, me = B.useDefaultLabel), "enableKeyboardShortcuts" in B && t(29, R = B.enableKeyboardShortcuts), "showBoxLabels" in B && t(30, V = B.showBoxLabels), "readOnlyBoxes" in B && t(31, H = B.readOnlyBoxes), "active_source" in B && t(0, j = B.active_source), "$$scope" in B && t(60, i = B.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[1] & /*uploading*/
    2 && _e && le(), l.$$.dirty[1] & /*dragging*/
    4 && $("drag", ne), l.$$.dirty[0] & /*active_source, sources*/
    17 && !j && _ && t(0, j = _[0]);
  }, [
    j,
    s,
    r,
    a,
    _,
    c,
    f,
    u,
    d,
    h,
    m,
    g,
    b,
    v,
    p,
    y,
    q,
    D,
    M,
    S,
    C,
    X,
    I,
    w,
    L,
    F,
    O,
    z,
    me,
    R,
    V,
    H,
    _e,
    ne,
    x,
    se,
    ae,
    Ke,
    W,
    $,
    re,
    le,
    ge,
    n,
    E,
    Ze,
    lt,
    ht,
    wn,
    Pi,
    Ki,
    Zi,
    hl,
    Gi,
    Ji,
    Qi,
    ml,
    eo,
    to,
    gl,
    i
  ];
}
class sp extends x2 {
  constructor(e) {
    super(), K2(
      this,
      e,
      op,
      ip,
      G2,
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
        readOnlyBoxes: 31,
        active_source: 0
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: ap,
  attr: qi,
  detach: tc,
  element: nc,
  init: rp,
  insert: lc,
  noop: $r,
  safe_not_equal: _p,
  src_url_equal: Fr,
  toggle_class: _n
} = window.__gradio__svelte__internal;
function Or(l) {
  let e, t;
  return {
    c() {
      e = nc("img"), Fr(e.src, t = /*value*/
      l[0].url) || qi(e, "src", t), qi(e, "alt", "");
    },
    m(n, i) {
      lc(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !Fr(e.src, t = /*value*/
      n[0].url) && qi(e, "src", t);
    },
    d(n) {
      n && tc(e);
    }
  };
}
function cp(l) {
  let e, t = (
    /*value*/
    l[0] && Or(l)
  );
  return {
    c() {
      e = nc("div"), t && t.c(), qi(e, "class", "container svelte-1sgcyba"), _n(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), _n(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), _n(
        e,
        "selected",
        /*selected*/
        l[2]
      ), _n(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      lc(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = Or(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && _n(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && _n(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && _n(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && _n(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: $r,
    o: $r,
    d(n) {
      n && tc(e), t && t.d();
    }
  };
}
function up(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: o = !1 } = e;
  return l.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, i = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, i, o];
}
class Dz extends ap {
  constructor(e) {
    super(), rp(this, e, up, cp, _p, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: fp,
  add_flush_callback: xr,
  assign: dp,
  bind: Vr,
  binding_callbacks: Nr,
  check_outros: hp,
  create_component: In,
  destroy_component: jn,
  detach: ic,
  empty: mp,
  flush: Q,
  get_spread_object: gp,
  get_spread_update: bp,
  group_outros: pp,
  init: wp,
  insert: oc,
  mount_component: Tn,
  safe_not_equal: vp,
  space: kp,
  transition_in: Ut,
  transition_out: Pt
} = window.__gradio__svelte__internal;
function yp(l) {
  let e, t;
  return e = new ff({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [qp] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      In(e.$$.fragment);
    },
    m(n, i) {
      Tn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*$$scope*/
      65536 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jn(e, n);
    }
  };
}
function Cp(l) {
  let e, t;
  return e = new s_({
    props: {
      i18n: (
        /*gradio*/
        l[34].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      In(e.$$.fragment);
    },
    m(n, i) {
      Tn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*gradio*/
      8 && (o.i18n = /*gradio*/
      n[34].i18n), e.$set(o);
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jn(e, n);
    }
  };
}
function Sp(l) {
  let e, t;
  return e = new s_({
    props: {
      i18n: (
        /*gradio*/
        l[34].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      In(e.$$.fragment);
    },
    m(n, i) {
      Tn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[1] & /*gradio*/
      8 && (o.i18n = /*gradio*/
      n[34].i18n), e.$set(o);
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jn(e, n);
    }
  };
}
function qp(l) {
  let e, t;
  return e = new Qr({}), {
    c() {
      In(e.$$.fragment);
    },
    m(n, i) {
      Tn(e, n, i), t = !0;
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jn(e, n);
    }
  };
}
function zp(l) {
  let e, t, n, i;
  const o = [Sp, Cp, yp], s = [];
  function r(a, _) {
    return (
      /*active_source*/
      a[36] === "upload" ? 0 : (
        /*active_source*/
        a[36] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = s[e] = o[e](l), {
    c() {
      t.c(), n = mp();
    },
    m(a, _) {
      s[e].m(a, _), oc(a, n, _), i = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (pp(), Pt(s[c], 1, 1, () => {
        s[c] = null;
      }), hp(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Ut(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Ut(t), i = !0);
    },
    o(a) {
      Pt(t), i = !1;
    },
    d(a) {
      a && ic(n), s[e].d(a);
    }
  };
}
function Bp(l) {
  let e, t, n, i, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[34].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[34].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let a = {};
  for (let u = 0; u < r.length; u += 1)
    a = dp(a, r[u]);
  e = new ph({ props: a });
  function _(u) {
    l[37](u);
  }
  function c(u) {
    l[38](u);
  }
  let f = {
    selectable: (
      /*_selectable*/
      l[10]
    ),
    root: (
      /*root*/
      l[7]
    ),
    sources: (
      /*sources*/
      l[14]
    ),
    interactive: (
      /*interactive*/
      l[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      l[15]
    ),
    showShareButton: (
      /*show_share_button*/
      l[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      l[17]
    ),
    i18n: (
      /*gradio*/
      l[34].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      l[19]
    ),
    height: (
      /*height*/
      l[8]
    ),
    width: (
      /*width*/
      l[9]
    ),
    labelList: (
      /*label_list*/
      l[20]
    ),
    labelColors: (
      /*label_colors*/
      l[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      l[22]
    ),
    label: (
      /*label*/
      l[5]
    ),
    show_label: (
      /*show_label*/
      l[6]
    ),
    max_file_size: (
      /*gradio*/
      l[34].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[34].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[34].client.stream
    ),
    handleSize: (
      /*handle_size*/
      l[23]
    ),
    boxThickness: (
      /*box_thickness*/
      l[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      l[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      l[26]
    ),
    singleBox: (
      /*single_box*/
      l[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      l[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      l[29]
    ),
    useDefaultLabel: (
      /*use_default_label*/
      l[30]
    ),
    enableKeyboardShortcuts: (
      /*enable_keyboard_shortcuts*/
      l[31]
    ),
    showBoxLabels: (
      /*show_box_labels*/
      l[32]
    ),
    readOnlyBoxes: (
      /*read_only_boxes*/
      l[33]
    ),
    $$slots: { default: [zp] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[36] !== void 0 && (f.active_source = /*active_source*/
    l[36]), /*value*/
    l[0] !== void 0 && (f.value = /*value*/
    l[0]), n = new sp({ props: f }), Nr.push(() => Vr(n, "active_source", _)), Nr.push(() => Vr(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      l[39]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[40]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[41]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[42]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[43]
    ), n.$on(
      "select",
      /*select_handler*/
      l[44]
    ), n.$on(
      "share",
      /*share_handler*/
      l[45]
    ), n.$on(
      "error",
      /*error_handler*/
      l[46]
    ), {
      c() {
        In(e.$$.fragment), t = kp(), In(n.$$.fragment);
      },
      m(u, d) {
        Tn(e, u, d), oc(u, t, d), Tn(n, u, d), s = !0;
      },
      p(u, d) {
        const h = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        8 ? bp(r, [
          d[1] & /*gradio*/
          8 && {
            autoscroll: (
              /*gradio*/
              u[34].autoscroll
            )
          },
          d[1] & /*gradio*/
          8 && { i18n: (
            /*gradio*/
            u[34].i18n
          ) },
          d[0] & /*loading_status*/
          2 && gp(
            /*loading_status*/
            u[1]
          )
        ]) : {};
        e.$set(h);
        const m = {};
        d[0] & /*_selectable*/
        1024 && (m.selectable = /*_selectable*/
        u[10]), d[0] & /*root*/
        128 && (m.root = /*root*/
        u[7]), d[0] & /*sources*/
        16384 && (m.sources = /*sources*/
        u[14]), d[0] & /*interactive*/
        262144 && (m.interactive = /*interactive*/
        u[18]), d[0] & /*show_download_button*/
        32768 && (m.showDownloadButton = /*show_download_button*/
        u[15]), d[0] & /*show_share_button*/
        65536 && (m.showShareButton = /*show_share_button*/
        u[16]), d[0] & /*show_clear_button*/
        131072 && (m.showClearButton = /*show_clear_button*/
        u[17]), d[1] & /*gradio*/
        8 && (m.i18n = /*gradio*/
        u[34].i18n), d[0] & /*boxes_alpha*/
        524288 && (m.boxesAlpha = /*boxes_alpha*/
        u[19]), d[0] & /*height*/
        256 && (m.height = /*height*/
        u[8]), d[0] & /*width*/
        512 && (m.width = /*width*/
        u[9]), d[0] & /*label_list*/
        1048576 && (m.labelList = /*label_list*/
        u[20]), d[0] & /*label_colors*/
        2097152 && (m.labelColors = /*label_colors*/
        u[21]), d[0] & /*box_min_size*/
        4194304 && (m.boxMinSize = /*box_min_size*/
        u[22]), d[0] & /*label*/
        32 && (m.label = /*label*/
        u[5]), d[0] & /*show_label*/
        64 && (m.show_label = /*show_label*/
        u[6]), d[1] & /*gradio*/
        8 && (m.max_file_size = /*gradio*/
        u[34].max_file_size), d[1] & /*gradio*/
        8 && (m.cli_upload = /*gradio*/
        u[34].client.upload), d[1] & /*gradio*/
        8 && (m.stream_handler = /*gradio*/
        u[34].client.stream), d[0] & /*handle_size*/
        8388608 && (m.handleSize = /*handle_size*/
        u[23]), d[0] & /*box_thickness*/
        16777216 && (m.boxThickness = /*box_thickness*/
        u[24]), d[0] & /*box_selected_thickness*/
        33554432 && (m.boxSelectedThickness = /*box_selected_thickness*/
        u[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (m.disableEditBoxes = /*disable_edit_boxes*/
        u[26]), d[0] & /*single_box*/
        134217728 && (m.singleBox = /*single_box*/
        u[27]), d[0] & /*show_remove_button*/
        268435456 && (m.showRemoveButton = /*show_remove_button*/
        u[28]), d[0] & /*handles_cursor*/
        536870912 && (m.handlesCursor = /*handles_cursor*/
        u[29]), d[0] & /*use_default_label*/
        1073741824 && (m.useDefaultLabel = /*use_default_label*/
        u[30]), d[1] & /*enable_keyboard_shortcuts*/
        1 && (m.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        u[31]), d[1] & /*show_box_labels*/
        2 && (m.showBoxLabels = /*show_box_labels*/
        u[32]), d[1] & /*read_only_boxes*/
        4 && (m.readOnlyBoxes = /*read_only_boxes*/
        u[33]), d[1] & /*$$scope, gradio, active_source*/
        65576 && (m.$$scope = { dirty: d, ctx: u }), !i && d[1] & /*active_source*/
        32 && (i = !0, m.active_source = /*active_source*/
        u[36], xr(() => i = !1)), !o && d[0] & /*value*/
        1 && (o = !0, m.value = /*value*/
        u[0], xr(() => o = !1)), n.$set(m);
      },
      i(u) {
        s || (Ut(e.$$.fragment, u), Ut(n.$$.fragment, u), s = !0);
      },
      o(u) {
        Pt(e.$$.fragment, u), Pt(n.$$.fragment, u), s = !1;
      },
      d(u) {
        u && ic(t), jn(e, u), jn(n, u);
      }
    }
  );
}
function Dp(l) {
  let e, t;
  return e = new Yc({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[35] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        l[2]
      ),
      elem_classes: (
        /*elem_classes*/
        l[3]
      ),
      width: (
        /*width*/
        l[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        l[11]
      ),
      scale: (
        /*scale*/
        l[12]
      ),
      min_width: (
        /*min_width*/
        l[13]
      ),
      $$slots: { default: [Bp] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      In(e.$$.fragment);
    },
    m(n, i) {
      Tn(e, n, i), t = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), i[1] & /*dragging*/
      16 && (o.border_mode = /*dragging*/
      n[35] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (o.elem_id = /*elem_id*/
      n[2]), i[0] & /*elem_classes*/
      8 && (o.elem_classes = /*elem_classes*/
      n[3]), i[0] & /*width*/
      512 && (o.width = /*width*/
      n[9]), i[0] & /*container*/
      2048 && (o.container = /*container*/
      n[11]), i[0] & /*scale*/
      4096 && (o.scale = /*scale*/
      n[12]), i[0] & /*min_width*/
      8192 && (o.min_width = /*min_width*/
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | i[1] & /*$$scope, gradio, enable_keyboard_shortcuts, show_box_labels, read_only_boxes, active_source, dragging*/
      65599 && (o.$$scope = { dirty: i, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Ut(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jn(e, n);
    }
  };
}
function Mp(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: f } = e, { _selectable: u = !1 } = e, { container: d = !0 } = e, { scale: h = null } = e, { min_width: m = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: p } = e, { show_clear_button: y } = e, { interactive: q } = e, { boxes_alpha: D } = e, { label_list: M } = e, { label_colors: S } = e, { box_min_size: C } = e, { handle_size: X } = e, { box_thickness: I } = e, { box_selected_thickness: w } = e, { disable_edit_boxes: L } = e, { single_box: F } = e, { show_remove_button: O } = e, { handles_cursor: z } = e, { use_default_label: me } = e, { enable_keyboard_shortcuts: R } = e, { show_box_labels: V } = e, { read_only_boxes: H = !1 } = e, { gradio: x } = e, _e, se = null;
  function ae(E) {
    se = E, t(36, se);
  }
  function j(E) {
    s = E, t(0, s);
  }
  const Ke = () => x.dispatch("change"), W = () => x.dispatch("edit"), $ = () => {
    x.dispatch("clear");
  }, ne = ({ detail: E }) => t(35, _e = E), re = () => x.dispatch("upload"), le = ({ detail: E }) => x.dispatch("select", E), ge = ({ detail: E }) => x.dispatch("share", E), te = ({ detail: E }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), x.dispatch("error", E);
  };
  return l.$$set = (E) => {
    "elem_id" in E && t(2, n = E.elem_id), "elem_classes" in E && t(3, i = E.elem_classes), "visible" in E && t(4, o = E.visible), "value" in E && t(0, s = E.value), "label" in E && t(5, r = E.label), "show_label" in E && t(6, a = E.show_label), "root" in E && t(7, _ = E.root), "height" in E && t(8, c = E.height), "width" in E && t(9, f = E.width), "_selectable" in E && t(10, u = E._selectable), "container" in E && t(11, d = E.container), "scale" in E && t(12, h = E.scale), "min_width" in E && t(13, m = E.min_width), "loading_status" in E && t(1, g = E.loading_status), "sources" in E && t(14, b = E.sources), "show_download_button" in E && t(15, v = E.show_download_button), "show_share_button" in E && t(16, p = E.show_share_button), "show_clear_button" in E && t(17, y = E.show_clear_button), "interactive" in E && t(18, q = E.interactive), "boxes_alpha" in E && t(19, D = E.boxes_alpha), "label_list" in E && t(20, M = E.label_list), "label_colors" in E && t(21, S = E.label_colors), "box_min_size" in E && t(22, C = E.box_min_size), "handle_size" in E && t(23, X = E.handle_size), "box_thickness" in E && t(24, I = E.box_thickness), "box_selected_thickness" in E && t(25, w = E.box_selected_thickness), "disable_edit_boxes" in E && t(26, L = E.disable_edit_boxes), "single_box" in E && t(27, F = E.single_box), "show_remove_button" in E && t(28, O = E.show_remove_button), "handles_cursor" in E && t(29, z = E.handles_cursor), "use_default_label" in E && t(30, me = E.use_default_label), "enable_keyboard_shortcuts" in E && t(31, R = E.enable_keyboard_shortcuts), "show_box_labels" in E && t(32, V = E.show_box_labels), "read_only_boxes" in E && t(33, H = E.read_only_boxes), "gradio" in E && t(34, x = E.gradio);
  }, [
    s,
    g,
    n,
    i,
    o,
    r,
    a,
    _,
    c,
    f,
    u,
    d,
    h,
    m,
    b,
    v,
    p,
    y,
    q,
    D,
    M,
    S,
    C,
    X,
    I,
    w,
    L,
    F,
    O,
    z,
    me,
    R,
    V,
    H,
    x,
    _e,
    se,
    ae,
    j,
    Ke,
    W,
    $,
    ne,
    re,
    le,
    ge,
    te
  ];
}
class Mz extends fp {
  constructor(e) {
    super(), wp(
      this,
      e,
      Mp,
      Dp,
      vp,
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
        read_only_boxes: 33,
        gradio: 34
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Q();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Q();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Q();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Q();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Q();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Q();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), Q();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Q();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Q();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), Q();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Q();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Q();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Q();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Q();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), Q();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), Q();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), Q();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), Q();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), Q();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), Q();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), Q();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), Q();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), Q();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), Q();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), Q();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), Q();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), Q();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), Q();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), Q();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), Q();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), Q();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), Q();
  }
  get show_box_labels() {
    return this.$$.ctx[32];
  }
  set show_box_labels(e) {
    this.$$set({ show_box_labels: e }), Q();
  }
  get read_only_boxes() {
    return this.$$.ctx[33];
  }
  set read_only_boxes(e) {
    this.$$set({ read_only_boxes: e }), Q();
  }
  get gradio() {
    return this.$$.ctx[34];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Q();
  }
}
export {
  Dz as BaseExample,
  Mz as default
};
