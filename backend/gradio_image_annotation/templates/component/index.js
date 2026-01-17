const {
  SvelteComponent: _c,
  assign: cc,
  create_slot: fc,
  detach: uc,
  element: dc,
  get_all_dirty_from_scope: hc,
  get_slot_changes: mc,
  get_spread_update: gc,
  init: bc,
  insert: pc,
  safe_not_equal: wc,
  set_dynamic_element_data: Ds,
  set_style: Ge,
  toggle_class: yt,
  transition_in: Rr,
  transition_out: Wr,
  update_slot_base: vc
} = window.__gradio__svelte__internal;
function kc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = fc(
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
    r = cc(r, s[a]);
  return {
    c() {
      e = dc(
        /*tag*/
        i[14]
      ), o && o.c(), Ds(
        /*tag*/
        i[14]
      )(e, r), yt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), yt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), yt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), yt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), yt(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Ge(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Ge(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Ge(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Ge(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Ge(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Ge(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Ge(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      pc(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && vc(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? mc(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : hc(
          /*$$scope*/
          a[17]
        ),
        null
      ), Ds(
        /*tag*/
        a[14]
      )(e, r = gc(s, [
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
      ])), yt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), yt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), yt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), yt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), yt(e, "hide-container", !/*explicit_call*/
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
      n || (Rr(o, a), n = !0);
    },
    o(a) {
      Wr(o, a), n = !1;
    },
    d(a) {
      a && uc(e), o && o.d(a);
    }
  };
}
function yc(i) {
  let e, t = (
    /*tag*/
    i[14] && kc(i)
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
      e || (Rr(t, n), e = !0);
    },
    o(n) {
      Wr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Cc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: f = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: h = !1 } = e, { container: m = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: w = null } = e, { min_width: p = 0 } = e, q = f === "fieldset" ? "fieldset" : "div";
  const M = (D) => {
    if (D !== void 0) {
      if (typeof D == "number")
        return D + "px";
      if (typeof D == "string")
        return D;
    }
  };
  return i.$$set = (D) => {
    "height" in D && t(0, o = D.height), "width" in D && t(1, s = D.width), "elem_id" in D && t(2, r = D.elem_id), "elem_classes" in D && t(3, a = D.elem_classes), "variant" in D && t(4, _ = D.variant), "border_mode" in D && t(5, c = D.border_mode), "padding" in D && t(6, u = D.padding), "type" in D && t(16, f = D.type), "test_id" in D && t(7, d = D.test_id), "explicit_call" in D && t(8, h = D.explicit_call), "container" in D && t(9, m = D.container), "visible" in D && t(10, g = D.visible), "allow_overflow" in D && t(11, b = D.allow_overflow), "scale" in D && t(12, w = D.scale), "min_width" in D && t(13, p = D.min_width), "$$scope" in D && t(17, l = D.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    d,
    h,
    m,
    g,
    b,
    w,
    p,
    q,
    M,
    f,
    l,
    n
  ];
}
class Sc extends _c {
  constructor(e) {
    super(), bc(this, e, Cc, yc, wc, {
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
  SvelteComponent: qc,
  attr: zc,
  create_slot: Bc,
  detach: Dc,
  element: Lc,
  get_all_dirty_from_scope: Mc,
  get_slot_changes: Ec,
  init: Rc,
  insert: Wc,
  safe_not_equal: Ac,
  transition_in: Xc,
  transition_out: Yc,
  update_slot_base: Ic
} = window.__gradio__svelte__internal;
function Hc(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = Bc(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Lc("div"), l && l.c(), zc(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      Wc(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && Ic(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Ec(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : Mc(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Xc(l, o), t = !0);
    },
    o(o) {
      Yc(l, o), t = !1;
    },
    d(o) {
      o && Dc(e), l && l.d(o);
    }
  };
}
function jc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class Tc extends qc {
  constructor(e) {
    super(), Rc(this, e, jc, Hc, Ac, {});
  }
}
const {
  SvelteComponent: Fc,
  attr: Ls,
  check_outros: Oc,
  create_component: $c,
  create_slot: xc,
  destroy_component: Nc,
  detach: fl,
  element: Uc,
  empty: Vc,
  get_all_dirty_from_scope: Pc,
  get_slot_changes: Kc,
  group_outros: Zc,
  init: Gc,
  insert: ul,
  mount_component: Jc,
  safe_not_equal: Qc,
  set_data: ef,
  space: tf,
  text: nf,
  toggle_class: In,
  transition_in: yi,
  transition_out: dl,
  update_slot_base: lf
} = window.__gradio__svelte__internal;
function Ms(i) {
  let e, t;
  return e = new Tc({
    props: {
      $$slots: { default: [of] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      $c(e.$$.fragment);
    },
    m(n, l) {
      Jc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (yi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Nc(e, n);
    }
  };
}
function of(i) {
  let e;
  return {
    c() {
      e = nf(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      ul(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && ef(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && fl(e);
    }
  };
}
function sf(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = xc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Ms(i)
  );
  return {
    c() {
      e = Uc("span"), s && s.c(), t = tf(), r && r.c(), n = Vc(), Ls(e, "data-testid", "block-info"), Ls(e, "class", "svelte-22c38v"), In(e, "sr-only", !/*show_label*/
      i[0]), In(e, "hide", !/*show_label*/
      i[0]), In(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      ul(a, e, _), s && s.m(e, null), ul(a, t, _), r && r.m(a, _), ul(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && lf(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? Kc(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : Pc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || _ & /*show_label*/
      1) && In(e, "sr-only", !/*show_label*/
      a[0]), (!l || _ & /*show_label*/
      1) && In(e, "hide", !/*show_label*/
      a[0]), (!l || _ & /*info*/
      2) && In(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, _), _ & /*info*/
      2 && yi(r, 1)) : (r = Ms(a), r.c(), yi(r, 1), r.m(n.parentNode, n)) : r && (Zc(), dl(r, 1, 1, () => {
        r = null;
      }), Oc());
    },
    i(a) {
      l || (yi(s, a), yi(r), l = !0);
    },
    o(a) {
      dl(s, a), dl(r), l = !1;
    },
    d(a) {
      a && (fl(e), fl(t), fl(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function af(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class Ar extends Fc {
  constructor(e) {
    super(), Gc(this, e, af, sf, Qc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: rf,
  append: Zl,
  attr: Ti,
  create_component: _f,
  destroy_component: cf,
  detach: ff,
  element: Es,
  init: uf,
  insert: df,
  mount_component: hf,
  safe_not_equal: mf,
  set_data: gf,
  space: bf,
  text: pf,
  toggle_class: Kt,
  transition_in: wf,
  transition_out: vf
} = window.__gradio__svelte__internal;
function kf(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Es("label"), t = Es("span"), _f(n.$$.fragment), l = bf(), o = pf(
        /*label*/
        i[0]
      ), Ti(t, "class", "svelte-9gxdi0"), Ti(e, "for", ""), Ti(e, "data-testid", "block-label"), Ti(e, "class", "svelte-9gxdi0"), Kt(e, "hide", !/*show_label*/
      i[2]), Kt(e, "sr-only", !/*show_label*/
      i[2]), Kt(
        e,
        "float",
        /*float*/
        i[4]
      ), Kt(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      df(r, e, a), Zl(e, t), hf(n, t, null), Zl(e, l), Zl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && gf(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Kt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Kt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Kt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Kt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (wf(n.$$.fragment, r), s = !0);
    },
    o(r) {
      vf(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && ff(e), cf(n);
    }
  };
}
function yf(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class Cf extends rf {
  constructor(e) {
    super(), uf(this, e, yf, kf, mf, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Sf,
  append: Vo,
  attr: It,
  bubble: qf,
  create_component: zf,
  destroy_component: Bf,
  detach: Xr,
  element: Po,
  init: Df,
  insert: Yr,
  listen: Lf,
  mount_component: Mf,
  safe_not_equal: Ef,
  set_data: Rf,
  set_style: Hn,
  space: Wf,
  text: Af,
  toggle_class: Fe,
  transition_in: Xf,
  transition_out: Yf
} = window.__gradio__svelte__internal;
function Rs(i) {
  let e, t;
  return {
    c() {
      e = Po("span"), t = Af(
        /*label*/
        i[1]
      ), It(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Yr(n, e, l), Vo(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Rf(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Xr(e);
    }
  };
}
function If(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && Rs(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = Po("button"), a && a.c(), t = Wf(), n = Po("div"), zf(l.$$.fragment), It(n, "class", "svelte-1lrphxw"), Fe(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Fe(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Fe(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], It(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), It(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), It(
        e,
        "title",
        /*label*/
        i[1]
      ), It(e, "class", "svelte-1lrphxw"), Fe(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Fe(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Fe(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Fe(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Hn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Hn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Hn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(_, c) {
      Yr(_, e, c), a && a.m(e, null), Vo(e, t), Vo(e, n), Mf(l, n, null), o = !0, s || (r = Lf(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = Rs(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Fe(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && Fe(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && Fe(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && It(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && It(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && It(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && Fe(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && Fe(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && Fe(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && Fe(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), c & /*disabled, _color*/
      4224 && Hn(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[12] ? (
        /*_color*/
        _[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Hn(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      )), c & /*offset*/
      2048 && Hn(
        e,
        "margin-left",
        /*offset*/
        _[11] + "px"
      );
    },
    i(_) {
      o || (Xf(l.$$.fragment, _), o = !0);
    },
    o(_) {
      Yf(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && Xr(e), a && a.d(), Bf(l), s = !1, r();
    }
  };
}
function Hf(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: f = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: h = !1 } = e, { background: m = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(w) {
    qf.call(this, i, w);
  }
  return i.$$set = (w) => {
    "Icon" in w && t(0, l = w.Icon), "label" in w && t(1, o = w.label), "show_label" in w && t(2, s = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, _ = w.padded), "highlight" in w && t(6, c = w.highlight), "disabled" in w && t(7, u = w.disabled), "hasPopup" in w && t(8, f = w.hasPopup), "color" in w && t(13, d = w.color), "transparent" in w && t(9, h = w.transparent), "background" in w && t(10, m = w.background), "offset" in w && t(11, g = w.offset);
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
    h,
    m,
    g,
    n,
    d,
    b
  ];
}
class Rl extends Sf {
  constructor(e) {
    super(), Df(this, e, Hf, If, Ef, {
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
  SvelteComponent: jf,
  append: Tf,
  attr: Gl,
  binding_callbacks: Ff,
  create_slot: Of,
  detach: $f,
  element: Ws,
  get_all_dirty_from_scope: xf,
  get_slot_changes: Nf,
  init: Uf,
  insert: Vf,
  safe_not_equal: Pf,
  toggle_class: Zt,
  transition_in: Kf,
  transition_out: Zf,
  update_slot_base: Gf
} = window.__gradio__svelte__internal;
function Jf(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = Of(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = Ws("div"), t = Ws("div"), o && o.c(), Gl(t, "class", "icon svelte-3w3rth"), Gl(e, "class", "empty svelte-3w3rth"), Gl(e, "aria-label", "Empty value"), Zt(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Zt(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Zt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Zt(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      Vf(s, e, r), Tf(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Gf(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? Nf(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : xf(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Zt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Zt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Zt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Zt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (Kf(o, s), n = !0);
    },
    o(s) {
      Zf(o, s), n = !1;
    },
    d(s) {
      s && $f(e), o && o.d(s), i[6](null);
    }
  };
}
function Qf(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(u) {
    var f;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: h } = ((f = u.parentElement) === null || f === void 0 ? void 0 : f.getBoundingClientRect()) || { height: d };
    return d > h + 2;
  }
  function c(u) {
    Ff[u ? "unshift" : "push"](() => {
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
class eu extends jf {
  constructor(e) {
    super(), Uf(this, e, Qf, Jf, Pf, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: lp,
  append: op,
  attr: sp,
  detach: ap,
  init: rp,
  insert: _p,
  noop: cp,
  safe_not_equal: fp,
  svg_element: up
} = window.__gradio__svelte__internal, {
  SvelteComponent: dp,
  append: hp,
  attr: mp,
  detach: gp,
  init: bp,
  insert: pp,
  noop: wp,
  safe_not_equal: vp,
  svg_element: kp
} = window.__gradio__svelte__internal, {
  SvelteComponent: yp,
  append: Cp,
  attr: Sp,
  detach: qp,
  init: zp,
  insert: Bp,
  noop: Dp,
  safe_not_equal: Lp,
  svg_element: Mp
} = window.__gradio__svelte__internal, {
  SvelteComponent: tu,
  append: As,
  attr: Oe,
  detach: nu,
  init: iu,
  insert: lu,
  noop: Jl,
  safe_not_equal: ou,
  svg_element: Ql
} = window.__gradio__svelte__internal;
function su(i) {
  let e, t, n;
  return {
    c() {
      e = Ql("svg"), t = Ql("path"), n = Ql("circle"), Oe(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Oe(n, "cx", "12"), Oe(n, "cy", "13"), Oe(n, "r", "4"), Oe(e, "xmlns", "http://www.w3.org/2000/svg"), Oe(e, "width", "100%"), Oe(e, "height", "100%"), Oe(e, "viewBox", "0 0 24 24"), Oe(e, "fill", "none"), Oe(e, "stroke", "currentColor"), Oe(e, "stroke-width", "1.5"), Oe(e, "stroke-linecap", "round"), Oe(e, "stroke-linejoin", "round"), Oe(e, "class", "feather feather-camera");
    },
    m(l, o) {
      lu(l, e, o), As(e, t), As(e, n);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(l) {
      l && nu(e);
    }
  };
}
class au extends tu {
  constructor(e) {
    super(), iu(this, e, null, su, ou, {});
  }
}
const {
  SvelteComponent: Ep,
  append: Rp,
  attr: Wp,
  detach: Ap,
  init: Xp,
  insert: Yp,
  noop: Ip,
  safe_not_equal: Hp,
  svg_element: jp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Tp,
  append: Fp,
  attr: Op,
  detach: $p,
  init: xp,
  insert: Np,
  noop: Up,
  safe_not_equal: Vp,
  svg_element: Pp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Kp,
  append: Zp,
  attr: Gp,
  detach: Jp,
  init: Qp,
  insert: ew,
  noop: tw,
  safe_not_equal: nw,
  svg_element: iw
} = window.__gradio__svelte__internal, {
  SvelteComponent: ru,
  append: _u,
  attr: dt,
  detach: cu,
  init: fu,
  insert: uu,
  noop: eo,
  safe_not_equal: du,
  svg_element: Xs
} = window.__gradio__svelte__internal;
function hu(i) {
  let e, t;
  return {
    c() {
      e = Xs("svg"), t = Xs("circle"), dt(t, "cx", "12"), dt(t, "cy", "12"), dt(t, "r", "10"), dt(e, "xmlns", "http://www.w3.org/2000/svg"), dt(e, "width", "100%"), dt(e, "height", "100%"), dt(e, "viewBox", "0 0 24 24"), dt(e, "stroke-width", "1.5"), dt(e, "stroke-linecap", "round"), dt(e, "stroke-linejoin", "round"), dt(e, "class", "feather feather-circle");
    },
    m(n, l) {
      uu(n, e, l), _u(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && cu(e);
    }
  };
}
class mu extends ru {
  constructor(e) {
    super(), fu(this, e, null, hu, du, {});
  }
}
const {
  SvelteComponent: gu,
  append: to,
  attr: ht,
  detach: bu,
  init: pu,
  insert: wu,
  noop: no,
  safe_not_equal: vu,
  set_style: Ct,
  svg_element: Fi
} = window.__gradio__svelte__internal;
function ku(i) {
  let e, t, n, l;
  return {
    c() {
      e = Fi("svg"), t = Fi("g"), n = Fi("path"), l = Fi("path"), ht(n, "d", "M18,6L6.087,17.913"), Ct(n, "fill", "none"), Ct(n, "fill-rule", "nonzero"), Ct(n, "stroke-width", "2px"), ht(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), ht(l, "d", "M4.364,4.364L19.636,19.636"), Ct(l, "fill", "none"), Ct(l, "fill-rule", "nonzero"), Ct(l, "stroke-width", "2px"), ht(e, "width", "100%"), ht(e, "height", "100%"), ht(e, "viewBox", "0 0 24 24"), ht(e, "version", "1.1"), ht(e, "xmlns", "http://www.w3.org/2000/svg"), ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ht(e, "xml:space", "preserve"), ht(e, "stroke", "currentColor"), Ct(e, "fill-rule", "evenodd"), Ct(e, "clip-rule", "evenodd"), Ct(e, "stroke-linecap", "round"), Ct(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      wu(o, e, s), to(e, t), to(t, n), to(e, l);
    },
    p: no,
    i: no,
    o: no,
    d(o) {
      o && bu(e);
    }
  };
}
class Ir extends gu {
  constructor(e) {
    super(), pu(this, e, null, ku, vu, {});
  }
}
const {
  SvelteComponent: lw,
  append: ow,
  attr: sw,
  detach: aw,
  init: rw,
  insert: _w,
  noop: cw,
  safe_not_equal: fw,
  svg_element: uw
} = window.__gradio__svelte__internal, {
  SvelteComponent: dw,
  append: hw,
  attr: mw,
  detach: gw,
  init: bw,
  insert: pw,
  noop: ww,
  safe_not_equal: vw,
  svg_element: kw
} = window.__gradio__svelte__internal, {
  SvelteComponent: yu,
  append: Cu,
  attr: hi,
  detach: Su,
  init: qu,
  insert: zu,
  noop: io,
  safe_not_equal: Bu,
  svg_element: Ys
} = window.__gradio__svelte__internal;
function Du(i) {
  let e, t;
  return {
    c() {
      e = Ys("svg"), t = Ys("path"), hi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), hi(t, "fill", "currentColor"), hi(e, "id", "icon"), hi(e, "xmlns", "http://www.w3.org/2000/svg"), hi(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      zu(n, e, l), Cu(e, t);
    },
    p: io,
    i: io,
    o: io,
    d(n) {
      n && Su(e);
    }
  };
}
class Lu extends yu {
  constructor(e) {
    super(), qu(this, e, null, Du, Bu, {});
  }
}
const {
  SvelteComponent: yw,
  append: Cw,
  attr: Sw,
  detach: qw,
  init: zw,
  insert: Bw,
  noop: Dw,
  safe_not_equal: Lw,
  svg_element: Mw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ew,
  append: Rw,
  attr: Ww,
  detach: Aw,
  init: Xw,
  insert: Yw,
  noop: Iw,
  safe_not_equal: Hw,
  svg_element: jw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Tw,
  append: Fw,
  attr: Ow,
  detach: $w,
  init: xw,
  insert: Nw,
  noop: Uw,
  safe_not_equal: Vw,
  svg_element: Pw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Mu,
  append: Eu,
  attr: jn,
  detach: Ru,
  init: Wu,
  insert: Au,
  noop: lo,
  safe_not_equal: Xu,
  svg_element: Is
} = window.__gradio__svelte__internal;
function Yu(i) {
  let e, t;
  return {
    c() {
      e = Is("svg"), t = Is("path"), jn(t, "fill", "currentColor"), jn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), jn(e, "xmlns", "http://www.w3.org/2000/svg"), jn(e, "width", "100%"), jn(e, "height", "100%"), jn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Au(n, e, l), Eu(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
    d(n) {
      n && Ru(e);
    }
  };
}
class Iu extends Mu {
  constructor(e) {
    super(), Wu(this, e, null, Yu, Xu, {});
  }
}
const {
  SvelteComponent: Hu,
  append: ju,
  attr: Tn,
  detach: Tu,
  init: Fu,
  insert: Ou,
  noop: oo,
  safe_not_equal: $u,
  svg_element: Hs
} = window.__gradio__svelte__internal;
function xu(i) {
  let e, t;
  return {
    c() {
      e = Hs("svg"), t = Hs("path"), Tn(t, "d", "M5 8l4 4 4-4z"), Tn(e, "class", "dropdown-arrow svelte-145leq6"), Tn(e, "xmlns", "http://www.w3.org/2000/svg"), Tn(e, "width", "100%"), Tn(e, "height", "100%"), Tn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Ou(n, e, l), ju(e, t);
    },
    p: oo,
    i: oo,
    o: oo,
    d(n) {
      n && Tu(e);
    }
  };
}
class hs extends Hu {
  constructor(e) {
    super(), Fu(this, e, null, xu, $u, {});
  }
}
const {
  SvelteComponent: Kw,
  append: Zw,
  attr: Gw,
  detach: Jw,
  init: Qw,
  insert: ev,
  noop: tv,
  safe_not_equal: nv,
  svg_element: iv
} = window.__gradio__svelte__internal, {
  SvelteComponent: lv,
  append: ov,
  attr: sv,
  detach: av,
  init: rv,
  insert: _v,
  noop: cv,
  safe_not_equal: fv,
  svg_element: uv
} = window.__gradio__svelte__internal, {
  SvelteComponent: dv,
  append: hv,
  attr: mv,
  detach: gv,
  init: bv,
  insert: pv,
  noop: wv,
  safe_not_equal: vv,
  svg_element: kv
} = window.__gradio__svelte__internal, {
  SvelteComponent: yv,
  append: Cv,
  attr: Sv,
  detach: qv,
  init: zv,
  insert: Bv,
  noop: Dv,
  safe_not_equal: Lv,
  svg_element: Mv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ev,
  append: Rv,
  attr: Wv,
  detach: Av,
  init: Xv,
  insert: Yv,
  noop: Iv,
  safe_not_equal: Hv,
  svg_element: jv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Tv,
  append: Fv,
  attr: Ov,
  detach: $v,
  init: xv,
  insert: Nv,
  noop: Uv,
  safe_not_equal: Vv,
  svg_element: Pv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Kv,
  append: Zv,
  attr: Gv,
  detach: Jv,
  init: Qv,
  insert: e4,
  noop: t4,
  safe_not_equal: n4,
  svg_element: i4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Nu,
  append: so,
  attr: be,
  detach: Uu,
  init: Vu,
  insert: Pu,
  noop: ao,
  safe_not_equal: Ku,
  svg_element: Oi
} = window.__gradio__svelte__internal;
function Zu(i) {
  let e, t, n, l;
  return {
    c() {
      e = Oi("svg"), t = Oi("rect"), n = Oi("circle"), l = Oi("polyline"), be(t, "x", "3"), be(t, "y", "3"), be(t, "width", "18"), be(t, "height", "18"), be(t, "rx", "2"), be(t, "ry", "2"), be(n, "cx", "8.5"), be(n, "cy", "8.5"), be(n, "r", "1.5"), be(l, "points", "21 15 16 10 5 21"), be(e, "xmlns", "http://www.w3.org/2000/svg"), be(e, "width", "100%"), be(e, "height", "100%"), be(e, "viewBox", "0 0 24 24"), be(e, "fill", "none"), be(e, "stroke", "currentColor"), be(e, "stroke-width", "1.5"), be(e, "stroke-linecap", "round"), be(e, "stroke-linejoin", "round"), be(e, "class", "feather feather-image");
    },
    m(o, s) {
      Pu(o, e, s), so(e, t), so(e, n), so(e, l);
    },
    p: ao,
    i: ao,
    o: ao,
    d(o) {
      o && Uu(e);
    }
  };
}
let Hr = class extends Nu {
  constructor(e) {
    super(), Vu(this, e, null, Zu, Ku, {});
  }
};
const {
  SvelteComponent: Gu,
  append: Ju,
  attr: $i,
  detach: Qu,
  init: ed,
  insert: td,
  noop: ro,
  safe_not_equal: nd,
  svg_element: js
} = window.__gradio__svelte__internal;
function id(i) {
  let e, t;
  return {
    c() {
      e = js("svg"), t = js("path"), $i(t, "fill", "currentColor"), $i(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), $i(e, "xmlns", "http://www.w3.org/2000/svg"), $i(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      td(n, e, l), Ju(e, t);
    },
    p: ro,
    i: ro,
    o: ro,
    d(n) {
      n && Qu(e);
    }
  };
}
class jr extends Gu {
  constructor(e) {
    super(), ed(this, e, null, id, nd, {});
  }
}
const {
  SvelteComponent: o4,
  append: s4,
  attr: a4,
  detach: r4,
  init: _4,
  insert: c4,
  noop: f4,
  safe_not_equal: u4,
  svg_element: d4
} = window.__gradio__svelte__internal, {
  SvelteComponent: h4,
  append: m4,
  attr: g4,
  detach: b4,
  init: p4,
  insert: w4,
  noop: v4,
  safe_not_equal: k4,
  svg_element: y4
} = window.__gradio__svelte__internal, {
  SvelteComponent: C4,
  append: S4,
  attr: q4,
  detach: z4,
  init: B4,
  insert: D4,
  noop: L4,
  safe_not_equal: M4,
  svg_element: E4
} = window.__gradio__svelte__internal, {
  SvelteComponent: R4,
  append: W4,
  attr: A4,
  detach: X4,
  init: Y4,
  insert: I4,
  noop: H4,
  safe_not_equal: j4,
  svg_element: T4
} = window.__gradio__svelte__internal, {
  SvelteComponent: F4,
  append: O4,
  attr: $4,
  detach: x4,
  init: N4,
  insert: U4,
  noop: V4,
  safe_not_equal: P4,
  svg_element: K4
} = window.__gradio__svelte__internal, {
  SvelteComponent: ld,
  append: xi,
  attr: pe,
  detach: od,
  init: sd,
  insert: ad,
  noop: _o,
  safe_not_equal: rd,
  svg_element: mi
} = window.__gradio__svelte__internal;
function _d(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = mi("svg"), t = mi("path"), n = mi("path"), l = mi("line"), o = mi("line"), pe(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), pe(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), pe(l, "x1", "12"), pe(l, "y1", "19"), pe(l, "x2", "12"), pe(l, "y2", "23"), pe(o, "x1", "8"), pe(o, "y1", "23"), pe(o, "x2", "16"), pe(o, "y2", "23"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "width", "100%"), pe(e, "height", "100%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "fill", "none"), pe(e, "stroke", "currentColor"), pe(e, "stroke-width", "2"), pe(e, "stroke-linecap", "round"), pe(e, "stroke-linejoin", "round"), pe(e, "class", "feather feather-mic");
    },
    m(s, r) {
      ad(s, e, r), xi(e, t), xi(e, n), xi(e, l), xi(e, o);
    },
    p: _o,
    i: _o,
    o: _o,
    d(s) {
      s && od(e);
    }
  };
}
class cd extends ld {
  constructor(e) {
    super(), sd(this, e, null, _d, rd, {});
  }
}
const {
  SvelteComponent: Z4,
  append: G4,
  attr: J4,
  detach: Q4,
  init: e3,
  insert: t3,
  noop: n3,
  safe_not_equal: i3,
  svg_element: l3
} = window.__gradio__svelte__internal, {
  SvelteComponent: o3,
  append: s3,
  attr: a3,
  detach: r3,
  init: _3,
  insert: c3,
  noop: f3,
  safe_not_equal: u3,
  svg_element: d3
} = window.__gradio__svelte__internal, {
  SvelteComponent: h3,
  append: m3,
  attr: g3,
  detach: b3,
  init: p3,
  insert: w3,
  noop: v3,
  safe_not_equal: k3,
  svg_element: y3
} = window.__gradio__svelte__internal, {
  SvelteComponent: C3,
  append: S3,
  attr: q3,
  detach: z3,
  init: B3,
  insert: D3,
  noop: L3,
  safe_not_equal: M3,
  svg_element: E3
} = window.__gradio__svelte__internal, {
  SvelteComponent: R3,
  append: W3,
  attr: A3,
  detach: X3,
  init: Y3,
  insert: I3,
  noop: H3,
  safe_not_equal: j3,
  svg_element: T3
} = window.__gradio__svelte__internal, {
  SvelteComponent: F3,
  append: O3,
  attr: $3,
  detach: x3,
  init: N3,
  insert: U3,
  noop: V3,
  safe_not_equal: P3,
  svg_element: K3
} = window.__gradio__svelte__internal, {
  SvelteComponent: fd,
  append: Ts,
  attr: lt,
  detach: ud,
  init: dd,
  insert: hd,
  noop: co,
  safe_not_equal: md,
  set_style: gd,
  svg_element: fo
} = window.__gradio__svelte__internal;
function bd(i) {
  let e, t, n;
  return {
    c() {
      e = fo("svg"), t = fo("polyline"), n = fo("path"), lt(t, "points", "1 4 1 10 7 10"), lt(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), lt(e, "xmlns", "http://www.w3.org/2000/svg"), lt(e, "width", "100%"), lt(e, "height", "100%"), lt(e, "viewBox", "0 0 24 24"), lt(e, "fill", "none"), lt(e, "stroke", "currentColor"), lt(e, "stroke-width", "2"), lt(e, "stroke-linecap", "round"), lt(e, "stroke-linejoin", "round"), lt(e, "class", "feather feather-rotate-ccw"), gd(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      hd(l, e, o), Ts(e, t), Ts(e, n);
    },
    p: co,
    i: co,
    o: co,
    d(l) {
      l && ud(e);
    }
  };
}
class pd extends fd {
  constructor(e) {
    super(), dd(this, e, null, bd, md, {});
  }
}
const {
  SvelteComponent: Z3,
  append: G3,
  attr: J3,
  detach: Q3,
  init: e5,
  insert: t5,
  noop: n5,
  safe_not_equal: i5,
  svg_element: l5
} = window.__gradio__svelte__internal, {
  SvelteComponent: o5,
  append: s5,
  attr: a5,
  detach: r5,
  init: _5,
  insert: c5,
  noop: f5,
  safe_not_equal: u5,
  svg_element: d5
} = window.__gradio__svelte__internal, {
  SvelteComponent: h5,
  append: m5,
  attr: g5,
  detach: b5,
  init: p5,
  insert: w5,
  noop: v5,
  safe_not_equal: k5,
  svg_element: y5
} = window.__gradio__svelte__internal, {
  SvelteComponent: C5,
  append: S5,
  attr: q5,
  detach: z5,
  init: B5,
  insert: D5,
  noop: L5,
  safe_not_equal: M5,
  svg_element: E5
} = window.__gradio__svelte__internal, {
  SvelteComponent: R5,
  append: W5,
  attr: A5,
  detach: X5,
  init: Y5,
  insert: I5,
  noop: H5,
  safe_not_equal: j5,
  svg_element: T5
} = window.__gradio__svelte__internal, {
  SvelteComponent: wd,
  append: vd,
  attr: $e,
  detach: kd,
  init: yd,
  insert: Cd,
  noop: uo,
  safe_not_equal: Sd,
  svg_element: Fs
} = window.__gradio__svelte__internal;
function qd(i) {
  let e, t;
  return {
    c() {
      e = Fs("svg"), t = Fs("rect"), $e(t, "x", "3"), $e(t, "y", "3"), $e(t, "width", "18"), $e(t, "height", "18"), $e(t, "rx", "2"), $e(t, "ry", "2"), $e(e, "xmlns", "http://www.w3.org/2000/svg"), $e(e, "width", "100%"), $e(e, "height", "100%"), $e(e, "viewBox", "0 0 24 24"), $e(e, "stroke-width", "1.5"), $e(e, "stroke-linecap", "round"), $e(e, "stroke-linejoin", "round"), $e(e, "class", "feather feather-square");
    },
    m(n, l) {
      Cd(n, e, l), vd(e, t);
    },
    p: uo,
    i: uo,
    o: uo,
    d(n) {
      n && kd(e);
    }
  };
}
class zd extends wd {
  constructor(e) {
    super(), yd(this, e, null, qd, Sd, {});
  }
}
const {
  SvelteComponent: F5,
  append: O5,
  attr: $5,
  detach: x5,
  init: N5,
  insert: U5,
  noop: V5,
  safe_not_equal: P5,
  svg_element: K5
} = window.__gradio__svelte__internal, {
  SvelteComponent: Z5,
  append: G5,
  attr: J5,
  detach: Q5,
  init: ek,
  insert: tk,
  noop: nk,
  safe_not_equal: ik,
  svg_element: lk
} = window.__gradio__svelte__internal, {
  SvelteComponent: ok,
  append: sk,
  attr: ak,
  detach: rk,
  init: _k,
  insert: ck,
  noop: fk,
  safe_not_equal: uk,
  svg_element: dk,
  text: hk
} = window.__gradio__svelte__internal, {
  SvelteComponent: mk,
  append: gk,
  attr: bk,
  detach: pk,
  init: wk,
  insert: vk,
  noop: kk,
  safe_not_equal: yk,
  svg_element: Ck
} = window.__gradio__svelte__internal, {
  SvelteComponent: Sk,
  append: qk,
  attr: zk,
  detach: Bk,
  init: Dk,
  insert: Lk,
  noop: Mk,
  safe_not_equal: Ek,
  svg_element: Rk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bd,
  append: Os,
  attr: ot,
  detach: Dd,
  init: Ld,
  insert: Md,
  noop: ho,
  safe_not_equal: Ed,
  svg_element: mo
} = window.__gradio__svelte__internal;
function Rd(i) {
  let e, t, n;
  return {
    c() {
      e = mo("svg"), t = mo("polyline"), n = mo("path"), ot(t, "points", "1 4 1 10 7 10"), ot(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), ot(e, "xmlns", "http://www.w3.org/2000/svg"), ot(e, "width", "100%"), ot(e, "height", "100%"), ot(e, "viewBox", "0 0 24 24"), ot(e, "fill", "none"), ot(e, "stroke", "currentColor"), ot(e, "stroke-width", "2"), ot(e, "stroke-linecap", "round"), ot(e, "stroke-linejoin", "round"), ot(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      Md(l, e, o), Os(e, t), Os(e, n);
    },
    p: ho,
    i: ho,
    o: ho,
    d(l) {
      l && Dd(e);
    }
  };
}
class Wd extends Bd {
  constructor(e) {
    super(), Ld(this, e, null, Rd, Ed, {});
  }
}
const {
  SvelteComponent: Ad,
  append: go,
  attr: De,
  detach: Xd,
  init: Yd,
  insert: Id,
  noop: bo,
  safe_not_equal: Hd,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function jd(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ni("svg"), t = Ni("path"), n = Ni("polyline"), l = Ni("line"), De(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), De(n, "points", "17 8 12 3 7 8"), De(l, "x1", "12"), De(l, "y1", "3"), De(l, "x2", "12"), De(l, "y2", "15"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "90%"), De(e, "height", "90%"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "2"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Id(o, e, s), go(e, t), go(e, n), go(e, l);
    },
    p: bo,
    i: bo,
    o: bo,
    d(o) {
      o && Xd(e);
    }
  };
}
let Tr = class extends Ad {
  constructor(e) {
    super(), Yd(this, e, null, jd, Hd, {});
  }
};
const {
  SvelteComponent: Ak,
  append: Xk,
  attr: Yk,
  detach: Ik,
  init: Hk,
  insert: jk,
  noop: Tk,
  safe_not_equal: Fk,
  svg_element: Ok
} = window.__gradio__svelte__internal, {
  SvelteComponent: $k,
  append: xk,
  attr: Nk,
  detach: Uk,
  init: Vk,
  insert: Pk,
  noop: Kk,
  safe_not_equal: Zk,
  svg_element: Gk,
  text: Jk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qk,
  append: e6,
  attr: t6,
  detach: n6,
  init: i6,
  insert: l6,
  noop: o6,
  safe_not_equal: s6,
  svg_element: a6,
  text: r6
} = window.__gradio__svelte__internal, {
  SvelteComponent: _6,
  append: c6,
  attr: f6,
  detach: u6,
  init: d6,
  insert: h6,
  noop: m6,
  safe_not_equal: g6,
  svg_element: b6,
  text: p6
} = window.__gradio__svelte__internal, {
  SvelteComponent: w6,
  append: v6,
  attr: k6,
  detach: y6,
  init: C6,
  insert: S6,
  noop: q6,
  safe_not_equal: z6,
  svg_element: B6
} = window.__gradio__svelte__internal, {
  SvelteComponent: Td,
  append: $s,
  attr: Gt,
  detach: Fd,
  init: Od,
  insert: $d,
  noop: po,
  safe_not_equal: xd,
  svg_element: wo
} = window.__gradio__svelte__internal;
function Nd(i) {
  let e, t, n;
  return {
    c() {
      e = wo("svg"), t = wo("path"), n = wo("path"), Gt(t, "fill", "currentColor"), Gt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Gt(n, "fill", "currentColor"), Gt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Gt(e, "xmlns", "http://www.w3.org/2000/svg"), Gt(e, "width", "100%"), Gt(e, "height", "100%"), Gt(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      $d(l, e, o), $s(e, t), $s(e, n);
    },
    p: po,
    i: po,
    o: po,
    d(l) {
      l && Fd(e);
    }
  };
}
let Fr = class extends Td {
  constructor(e) {
    super(), Od(this, e, null, Nd, xd, {});
  }
};
const Ud = [
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
], xs = {
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
Ud.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: xs[e][t],
    secondary: xs[e][n]
  }
}), {});
class hl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Vd(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new hl("Must be on Spaces to share.");
  let t, n, l;
  t = Pd(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new hl(`Upload failed: ${_.error}`);
    }
    throw new hl("Upload failed.");
  }
  return await s.text();
}
function Pd(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Kd,
  create_component: Zd,
  destroy_component: Gd,
  init: Jd,
  mount_component: Qd,
  safe_not_equal: e1,
  transition_in: t1,
  transition_out: n1
} = window.__gradio__svelte__internal, { createEventDispatcher: i1 } = window.__gradio__svelte__internal;
function l1(i) {
  let e, t;
  return e = new Rl({
    props: {
      Icon: Lu,
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
      Zd(e.$$.fragment);
    },
    m(n, l) {
      Qd(e, n, l), t = !0;
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
      t || (t1(e.$$.fragment, n), t = !0);
    },
    o(n) {
      n1(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Gd(e, n);
    }
  };
}
function o1(i, e, t) {
  const n = i1();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof hl ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class s1 extends Kd {
  constructor(e) {
    super(), Jd(this, e, o1, l1, e1, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: a1,
  append: kn,
  attr: Ko,
  check_outros: r1,
  create_component: Or,
  destroy_component: $r,
  detach: ml,
  element: Zo,
  group_outros: _1,
  init: c1,
  insert: gl,
  mount_component: xr,
  safe_not_equal: f1,
  set_data: Go,
  space: Jo,
  text: Ci,
  toggle_class: Ns,
  transition_in: wl,
  transition_out: vl
} = window.__gradio__svelte__internal;
function u1(i) {
  let e, t;
  return e = new Tr({}), {
    c() {
      Or(e.$$.fragment);
    },
    m(n, l) {
      xr(e, n, l), t = !0;
    },
    i(n) {
      t || (wl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      vl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $r(e, n);
    }
  };
}
function d1(i) {
  let e, t;
  return e = new jr({}), {
    c() {
      Or(e.$$.fragment);
    },
    m(n, l) {
      xr(e, n, l), t = !0;
    },
    i(n) {
      t || (wl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      vl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $r(e, n);
    }
  };
}
function Us(i) {
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
      e = Zo("span"), t = Ci("- "), l = Ci(n), o = Ci(" -"), s = Jo(), a = Ci(r), Ko(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      gl(_, e, c), kn(e, t), kn(e, l), kn(e, o), gl(_, s, c), gl(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && Go(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && Go(a, r);
    },
    d(_) {
      _ && (ml(e), ml(s), ml(a));
    }
  };
}
function h1(i) {
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
  const c = [d1, u1], u = [];
  function f(h, m) {
    return (
      /*type*/
      h[0] === "clipboard" ? 0 : 1
    );
  }
  n = f(i), l = u[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && Us(i)
  );
  return {
    c() {
      e = Zo("div"), t = Zo("span"), l.c(), o = Jo(), r = Ci(s), a = Jo(), d && d.c(), Ko(t, "class", "icon-wrap svelte-kzcjhc"), Ns(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Ko(e, "class", "wrap svelte-kzcjhc");
    },
    m(h, m) {
      gl(h, e, m), kn(e, t), u[n].m(t, null), kn(e, o), kn(e, r), kn(e, a), d && d.m(e, null), _ = !0;
    },
    p(h, [m]) {
      let g = n;
      n = f(h), n !== g && (_1(), vl(u[g], 1, 1, () => {
        u[g] = null;
      }), r1(), l = u[n], l || (l = u[n] = c[n](h), l.c()), wl(l, 1), l.m(t, null)), (!_ || m & /*hovered*/
      16) && Ns(
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
      ) + "") && Go(r, s), /*mode*/
      h[3] !== "short" ? d ? d.p(h, m) : (d = Us(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(h) {
      _ || (wl(l), _ = !0);
    },
    o(h) {
      vl(l), _ = !1;
    },
    d(h) {
      h && ml(e), u[n].d(), d && d.d();
    }
  };
}
function m1(i, e, t) {
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
class Nr extends a1 {
  constructor(e) {
    super(), c1(this, e, m1, h1, f1, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: L6,
  attr: M6,
  create_slot: E6,
  detach: R6,
  element: W6,
  get_all_dirty_from_scope: A6,
  get_slot_changes: X6,
  init: Y6,
  insert: I6,
  safe_not_equal: H6,
  toggle_class: j6,
  transition_in: T6,
  transition_out: F6,
  update_slot_base: O6
} = window.__gradio__svelte__internal, {
  SvelteComponent: g1,
  append: vo,
  attr: Mt,
  check_outros: Si,
  create_component: Wl,
  destroy_component: Al,
  detach: Qn,
  element: Yi,
  empty: b1,
  group_outros: qi,
  init: p1,
  insert: ei,
  listen: Xl,
  mount_component: Yl,
  safe_not_equal: w1,
  space: ko,
  toggle_class: _n,
  transition_in: Ce,
  transition_out: Ne
} = window.__gradio__svelte__internal;
function Vs(i) {
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
  ), _, c = t && Ps(i), u = l && Ks(i), f = s && Zs(i), d = a && Gs(i);
  return {
    c() {
      e = Yi("span"), c && c.c(), n = ko(), u && u.c(), o = ko(), f && f.c(), r = ko(), d && d.c(), Mt(e, "class", "source-selection svelte-1jp3vgd"), Mt(e, "data-testid", "source-select");
    },
    m(h, m) {
      ei(h, e, m), c && c.m(e, null), vo(e, n), u && u.m(e, null), vo(e, o), f && f.m(e, null), vo(e, r), d && d.m(e, null), _ = !0;
    },
    p(h, m) {
      m & /*sources*/
      2 && (t = /*sources*/
      h[1].includes("upload")), t ? c ? (c.p(h, m), m & /*sources*/
      2 && Ce(c, 1)) : (c = Ps(h), c.c(), Ce(c, 1), c.m(e, n)) : c && (qi(), Ne(c, 1, 1, () => {
        c = null;
      }), Si()), m & /*sources*/
      2 && (l = /*sources*/
      h[1].includes("microphone")), l ? u ? (u.p(h, m), m & /*sources*/
      2 && Ce(u, 1)) : (u = Ks(h), u.c(), Ce(u, 1), u.m(e, o)) : u && (qi(), Ne(u, 1, 1, () => {
        u = null;
      }), Si()), m & /*sources*/
      2 && (s = /*sources*/
      h[1].includes("webcam")), s ? f ? (f.p(h, m), m & /*sources*/
      2 && Ce(f, 1)) : (f = Zs(h), f.c(), Ce(f, 1), f.m(e, r)) : f && (qi(), Ne(f, 1, 1, () => {
        f = null;
      }), Si()), m & /*sources*/
      2 && (a = /*sources*/
      h[1].includes("clipboard")), a ? d ? (d.p(h, m), m & /*sources*/
      2 && Ce(d, 1)) : (d = Gs(h), d.c(), Ce(d, 1), d.m(e, null)) : d && (qi(), Ne(d, 1, 1, () => {
        d = null;
      }), Si());
    },
    i(h) {
      _ || (Ce(c), Ce(u), Ce(f), Ce(d), _ = !0);
    },
    o(h) {
      Ne(c), Ne(u), Ne(f), Ne(d), _ = !1;
    },
    d(h) {
      h && Qn(e), c && c.d(), u && u.d(), f && f.d(), d && d.d();
    }
  };
}
function Ps(i) {
  let e, t, n, l, o;
  return t = new Tr({}), {
    c() {
      e = Yi("button"), Wl(t.$$.fragment), Mt(e, "class", "icon svelte-1jp3vgd"), Mt(e, "aria-label", "Upload file"), _n(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      ei(s, e, r), Yl(t, e, null), n = !0, l || (o = Xl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && _n(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (Ce(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ne(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Qn(e), Al(t), l = !1, o();
    }
  };
}
function Ks(i) {
  let e, t, n, l, o;
  return t = new cd({}), {
    c() {
      e = Yi("button"), Wl(t.$$.fragment), Mt(e, "class", "icon svelte-1jp3vgd"), Mt(e, "aria-label", "Record audio"), _n(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      ei(s, e, r), Yl(t, e, null), n = !0, l || (o = Xl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && _n(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (Ce(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ne(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Qn(e), Al(t), l = !1, o();
    }
  };
}
function Zs(i) {
  let e, t, n, l, o;
  return t = new Fr({}), {
    c() {
      e = Yi("button"), Wl(t.$$.fragment), Mt(e, "class", "icon svelte-1jp3vgd"), Mt(e, "aria-label", "Capture from camera"), _n(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      ei(s, e, r), Yl(t, e, null), n = !0, l || (o = Xl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && _n(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (Ce(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ne(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Qn(e), Al(t), l = !1, o();
    }
  };
}
function Gs(i) {
  let e, t, n, l, o;
  return t = new jr({}), {
    c() {
      e = Yi("button"), Wl(t.$$.fragment), Mt(e, "class", "icon svelte-1jp3vgd"), Mt(e, "aria-label", "Paste from clipboard"), _n(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      ei(s, e, r), Yl(t, e, null), n = !0, l || (o = Xl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && _n(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (Ce(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ne(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Qn(e), Al(t), l = !1, o();
    }
  };
}
function v1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Vs(i)
  );
  return {
    c() {
      n && n.c(), e = b1();
    },
    m(l, o) {
      n && n.m(l, o), ei(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && Ce(n, 1)) : (n = Vs(l), n.c(), Ce(n, 1), n.m(e.parentNode, e)) : n && (qi(), Ne(n, 1, 1, () => {
        n = null;
      }), Si());
    },
    i(l) {
      t || (Ce(n), t = !0);
    },
    o(l) {
      Ne(n), t = !1;
    },
    d(l) {
      l && Qn(e), n && n.d(l);
    }
  };
}
function k1(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(h, m, g, b) {
    function w(p) {
      return p instanceof g ? p : new g(function(q) {
        q(p);
      });
    }
    return new (g || (g = Promise))(function(p, q) {
      function M(k) {
        try {
          C(b.next(k));
        } catch (y) {
          q(y);
        }
      }
      function D(k) {
        try {
          C(b.throw(k));
        } catch (y) {
          q(y);
        }
      }
      function C(k) {
        k.done ? p(k.value) : w(k.value).then(M, D);
      }
      C((b = b.apply(h, m || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function _(h) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, s = h), a(h);
    });
  }
  const c = () => _("upload"), u = () => _("microphone"), f = () => _("webcam"), d = () => _("clipboard");
  return i.$$set = (h) => {
    "sources" in h && t(1, o = h.sources), "active_source" in h && t(0, s = h.active_source), "handle_clear" in h && t(4, r = h.handle_clear), "handle_select" in h && t(5, a = h.handle_select);
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
class y1 extends g1 {
  constructor(e) {
    super(), p1(this, e, k1, v1, w1, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Vn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function bl() {
}
const C1 = (i) => i;
function Js(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Ur = typeof window < "u";
let Qs = Ur ? () => window.performance.now() : () => Date.now(), Vr = Ur ? (i) => requestAnimationFrame(i) : bl;
const Jn = /* @__PURE__ */ new Set();
function Pr(i) {
  Jn.forEach((e) => {
    e.c(i) || (Jn.delete(e), e.f());
  }), Jn.size !== 0 && Vr(Pr);
}
function S1(i) {
  let e;
  return Jn.size === 0 && Vr(Pr), { promise: new Promise((t) => {
    Jn.add(e = { c: i, f: t });
  }), abort() {
    Jn.delete(e);
  } };
}
function q1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function z1(i, { delay: e = 0, duration: t = 400, easing: n = C1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function ea(i, { delay: e = 0, duration: t = 400, easing: n = q1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [u, f] = Js(l), [d, h] = Js(o);
  return { delay: e, duration: t, easing: n, css: (m, g) => `
			transform: ${_} translate(${(1 - m) * u}${f}, ${(1 - m) * d}${h});
			opacity: ${a - c * g}` };
}
const Fn = [];
function B1(i, e = bl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const _ = !Fn.length;
      for (const c of n) c[1](), Fn.push(c, i);
      if (_) {
        for (let c = 0; c < Fn.length; c += 2) Fn[c][0](Fn[c + 1]);
        Fn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = bl) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || bl), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function ta(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Qo(i, e, t, n) {
  if (typeof t == "number" || ta(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, ta(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Qo(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Qo(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function na(i, e = {}) {
  const t = B1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, u = 1, f = 0, d = !1;
  function h(g, b = {}) {
    c = g;
    const w = a = {};
    return i == null || b.hard || m.stiffness >= 1 && m.damping >= 1 ? (d = !0, s = Qs(), _ = g, t.set(i = c), Promise.resolve()) : (b.soft && (f = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), u = 0), r || (s = Qs(), d = !1, r = S1((p) => {
      if (d) return d = !1, r = null, !1;
      u = Math.min(u + f, 1);
      const q = { inv_mass: u, opts: m, settled: !0, dt: 60 * (p - s) / 1e3 }, M = Qo(q, _, i, c);
      return s = p, _ = i, t.set(i = M), q.settled && (r = null), !q.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        w === a && p();
      });
    }));
  }
  const m = { set: h, update: (g, b) => h(g(c, i), b), subscribe: t.subscribe, stiffness: n, damping: l, precision: o };
  return m;
}
const {
  SvelteComponent: D1,
  append: mt,
  attr: ne,
  component_subscribe: ia,
  detach: L1,
  element: M1,
  init: E1,
  insert: R1,
  noop: la,
  safe_not_equal: W1,
  set_style: Ui,
  svg_element: gt,
  toggle_class: oa
} = window.__gradio__svelte__internal, { onMount: A1 } = window.__gradio__svelte__internal;
function X1(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f;
  return {
    c() {
      e = M1("div"), t = gt("svg"), n = gt("g"), l = gt("path"), o = gt("path"), s = gt("path"), r = gt("path"), a = gt("g"), _ = gt("path"), c = gt("path"), u = gt("path"), f = gt("path"), ne(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ne(l, "fill", "#FF7C00"), ne(l, "fill-opacity", "0.4"), ne(l, "class", "svelte-43sxxs"), ne(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ne(o, "fill", "#FF7C00"), ne(o, "class", "svelte-43sxxs"), ne(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ne(s, "fill", "#FF7C00"), ne(s, "fill-opacity", "0.4"), ne(s, "class", "svelte-43sxxs"), ne(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ne(r, "fill", "#FF7C00"), ne(r, "class", "svelte-43sxxs"), Ui(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ne(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ne(_, "fill", "#FF7C00"), ne(_, "fill-opacity", "0.4"), ne(_, "class", "svelte-43sxxs"), ne(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ne(c, "fill", "#FF7C00"), ne(c, "class", "svelte-43sxxs"), ne(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ne(u, "fill", "#FF7C00"), ne(u, "fill-opacity", "0.4"), ne(u, "class", "svelte-43sxxs"), ne(f, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ne(f, "fill", "#FF7C00"), ne(f, "class", "svelte-43sxxs"), Ui(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ne(t, "viewBox", "-1200 -1200 3000 3000"), ne(t, "fill", "none"), ne(t, "xmlns", "http://www.w3.org/2000/svg"), ne(t, "class", "svelte-43sxxs"), ne(e, "class", "svelte-43sxxs"), oa(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, h) {
      R1(d, e, h), mt(e, t), mt(t, n), mt(n, l), mt(n, o), mt(n, s), mt(n, r), mt(t, a), mt(a, _), mt(a, c), mt(a, u), mt(a, f);
    },
    p(d, [h]) {
      h & /*$top*/
      2 && Ui(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), h & /*$bottom*/
      4 && Ui(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), h & /*margin*/
      1 && oa(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: la,
    o: la,
    d(d) {
      d && L1(e);
    }
  };
}
function Y1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(d, h, m, g) {
    function b(w) {
      return w instanceof m ? w : new m(function(p) {
        p(w);
      });
    }
    return new (m || (m = Promise))(function(w, p) {
      function q(C) {
        try {
          D(g.next(C));
        } catch (k) {
          p(k);
        }
      }
      function M(C) {
        try {
          D(g.throw(C));
        } catch (k) {
          p(k);
        }
      }
      function D(C) {
        C.done ? w(C.value) : b(C.value).then(q, M);
      }
      D((g = g.apply(d, h || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = na([0, 0]);
  ia(i, r, (d) => t(1, n = d));
  const a = na([0, 0]);
  ia(i, a, (d) => t(2, l = d));
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
  return A1(() => (f(), () => _ = !0)), i.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, l, r, a];
}
class I1 extends D1 {
  constructor(e) {
    super(), E1(this, e, Y1, X1, W1, { margin: 0 });
  }
}
const {
  SvelteComponent: H1,
  append: yn,
  attr: vt,
  binding_callbacks: sa,
  check_outros: es,
  create_component: Kr,
  create_slot: Zr,
  destroy_component: Gr,
  destroy_each: Jr,
  detach: N,
  element: Dt,
  empty: ti,
  ensure_array_like: kl,
  get_all_dirty_from_scope: Qr,
  get_slot_changes: e_,
  group_outros: ts,
  init: j1,
  insert: U,
  mount_component: t_,
  noop: ns,
  safe_not_equal: T1,
  set_data: ft,
  set_style: an,
  space: ct,
  text: he,
  toggle_class: _t,
  transition_in: wt,
  transition_out: Lt,
  update_slot_base: n_
} = window.__gradio__svelte__internal, { tick: F1 } = window.__gradio__svelte__internal, { onDestroy: O1 } = window.__gradio__svelte__internal, { createEventDispatcher: $1 } = window.__gradio__svelte__internal, x1 = (i) => ({}), aa = (i) => ({}), N1 = (i) => ({}), ra = (i) => ({});
function _a(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function ca(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function U1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new Rl({
    props: {
      Icon: Ir,
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
  ), c = Zr(
    _,
    i,
    /*$$scope*/
    i[29],
    aa
  );
  return {
    c() {
      e = Dt("div"), Kr(t.$$.fragment), n = ct(), l = Dt("span"), s = he(o), r = ct(), c && c.c(), vt(e, "class", "clear-status svelte-16nch4a"), vt(l, "class", "error svelte-16nch4a");
    },
    m(u, f) {
      U(u, e, f), t_(t, e, null), U(u, n, f), U(u, l, f), yn(l, s), U(u, r, f), c && c.m(u, f), a = !0;
    },
    p(u, f) {
      const d = {};
      f[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || f[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      u[1]("common.error") + "") && ft(s, o), c && c.p && (!a || f[0] & /*$$scope*/
      536870912) && n_(
        c,
        _,
        u,
        /*$$scope*/
        u[29],
        a ? e_(
          _,
          /*$$scope*/
          u[29],
          f,
          x1
        ) : Qr(
          /*$$scope*/
          u[29]
        ),
        aa
      );
    },
    i(u) {
      a || (wt(t.$$.fragment, u), wt(c, u), a = !0);
    },
    o(u) {
      Lt(t.$$.fragment, u), Lt(c, u), a = !1;
    },
    d(u) {
      u && (N(e), N(n), N(l), N(r)), Gr(t), c && c.d(u);
    }
  };
}
function V1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && fa(i)
  );
  function u(p, q) {
    if (
      /*progress*/
      p[7]
    ) return Z1;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return K1;
    if (
      /*queue_position*/
      p[2] === 0
    ) return P1;
  }
  let f = u(i), d = f && f(i), h = (
    /*timer*/
    i[5] && ha(i)
  );
  const m = [eh, Q1], g = [];
  function b(p, q) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = b(i)) && (s = g[o] = m[o](i));
  let w = !/*timer*/
  i[5] && ka(i);
  return {
    c() {
      c && c.c(), e = ct(), t = Dt("div"), d && d.c(), n = ct(), h && h.c(), l = ct(), s && s.c(), r = ct(), w && w.c(), a = ti(), vt(t, "class", "progress-text svelte-16nch4a"), _t(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), _t(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, q) {
      c && c.m(p, q), U(p, e, q), U(p, t, q), d && d.m(t, null), yn(t, n), h && h.m(t, null), U(p, l, q), ~o && g[o].m(p, q), U(p, r, q), w && w.m(p, q), U(p, a, q), _ = !0;
    },
    p(p, q) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? c ? c.p(p, q) : (c = fa(p), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), f === (f = u(p)) && d ? d.p(p, q) : (d && d.d(1), d = f && f(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? h ? h.p(p, q) : (h = ha(p), h.c(), h.m(t, null)) : h && (h.d(1), h = null), (!_ || q[0] & /*variant*/
      256) && _t(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!_ || q[0] & /*variant*/
      256) && _t(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let M = o;
      o = b(p), o === M ? ~o && g[o].p(p, q) : (s && (ts(), Lt(g[M], 1, 1, () => {
        g[M] = null;
      }), es()), ~o ? (s = g[o], s ? s.p(p, q) : (s = g[o] = m[o](p), s.c()), wt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? w && (ts(), Lt(w, 1, 1, () => {
        w = null;
      }), es()) : w ? (w.p(p, q), q[0] & /*timer*/
      32 && wt(w, 1)) : (w = ka(p), w.c(), wt(w, 1), w.m(a.parentNode, a));
    },
    i(p) {
      _ || (wt(s), wt(w), _ = !0);
    },
    o(p) {
      Lt(s), Lt(w), _ = !1;
    },
    d(p) {
      p && (N(e), N(t), N(l), N(r), N(a)), c && c.d(p), d && d.d(), h && h.d(), ~o && g[o].d(p), w && w.d(p);
    }
  };
}
function fa(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Dt("div"), vt(e, "class", "eta-bar svelte-16nch4a"), an(e, "transform", t);
    },
    m(n, l) {
      U(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && an(e, "transform", t);
    },
    d(n) {
      n && N(e);
    }
  };
}
function P1(i) {
  let e;
  return {
    c() {
      e = he("processing |");
    },
    m(t, n) {
      U(t, e, n);
    },
    p: ns,
    d(t) {
      t && N(e);
    }
  };
}
function K1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = he("queue: "), n = he(t), l = he("/"), o = he(
        /*queue_size*/
        i[3]
      ), s = he(" |");
    },
    m(r, a) {
      U(r, e, a), U(r, n, a), U(r, l, a), U(r, o, a), U(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && ft(n, t), a[0] & /*queue_size*/
      8 && ft(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (N(e), N(n), N(l), N(o), N(s));
    }
  };
}
function Z1(i) {
  let e, t = kl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = da(ca(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ti();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      U(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = kl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ca(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = da(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && N(e), Jr(n, l);
    }
  };
}
function ua(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? J1 : G1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = ct(), n = he(t), l = he(" | "), s = he(o);
    },
    m(c, u) {
      _.m(c, u), U(c, e, u), U(c, n, u), U(c, l, u), U(c, s, u);
    },
    p(c, u) {
      a === (a = r(c)) && _ ? _.p(c, u) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && ft(n, t);
    },
    d(c) {
      c && (N(e), N(n), N(l), N(s)), _.d(c);
    }
  };
}
function G1(i) {
  let e = Vn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = he(e);
    },
    m(n, l) {
      U(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Vn(
        /*p*/
        n[41].index || 0
      ) + "") && ft(t, e);
    },
    d(n) {
      n && N(t);
    }
  };
}
function J1(i) {
  let e = Vn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Vn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = he(e), n = he("/"), o = he(l);
    },
    m(s, r) {
      U(s, t, r), U(s, n, r), U(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Vn(
        /*p*/
        s[41].index || 0
      ) + "") && ft(t, e), r[0] & /*progress*/
      128 && l !== (l = Vn(
        /*p*/
        s[41].length
      ) + "") && ft(o, l);
    },
    d(s) {
      s && (N(t), N(n), N(o));
    }
  };
}
function da(i) {
  let e, t = (
    /*p*/
    i[41].index != null && ua(i)
  );
  return {
    c() {
      t && t.c(), e = ti();
    },
    m(n, l) {
      t && t.m(n, l), U(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = ua(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && N(e), t && t.d(n);
    }
  };
}
function ha(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = he(
        /*formatted_timer*/
        i[20]
      ), n = he(t), l = he("s");
    },
    m(o, s) {
      U(o, e, s), U(o, n, s), U(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && ft(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && ft(n, t);
    },
    d(o) {
      o && (N(e), N(n), N(l));
    }
  };
}
function Q1(i) {
  let e, t;
  return e = new I1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Kr(e.$$.fragment);
    },
    m(n, l) {
      t_(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (wt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Gr(e, n);
    }
  };
}
function eh(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && ma(i)
  );
  return {
    c() {
      e = Dt("div"), t = Dt("div"), r && r.c(), n = ct(), l = Dt("div"), o = Dt("div"), vt(t, "class", "progress-level-inner svelte-16nch4a"), vt(o, "class", "progress-bar svelte-16nch4a"), an(o, "width", s), vt(l, "class", "progress-bar-wrap svelte-16nch4a"), vt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      U(a, e, _), yn(e, t), r && r.m(t, null), yn(e, n), yn(e, l), yn(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = ma(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && an(o, "width", s);
    },
    i: ns,
    o: ns,
    d(a) {
      a && N(e), r && r.d(), i[31](null);
    }
  };
}
function ma(i) {
  let e, t = kl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = va(_a(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ti();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      U(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = kl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = _a(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = va(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && N(e), Jr(n, l);
    }
  };
}
function ga(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && th()
  ), s = (
    /*p*/
    i[41].desc != null && ba(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && pa()
  ), a = (
    /*progress_level*/
    i[14] != null && wa(i)
  );
  return {
    c() {
      o && o.c(), e = ct(), s && s.c(), t = ct(), r && r.c(), n = ct(), a && a.c(), l = ti();
    },
    m(_, c) {
      o && o.m(_, c), U(_, e, c), s && s.m(_, c), U(_, t, c), r && r.m(_, c), U(_, n, c), a && a.m(_, c), U(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = ba(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = pa(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = wa(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && (N(e), N(t), N(n), N(l)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function th(i) {
  let e;
  return {
    c() {
      e = he(" /");
    },
    m(t, n) {
      U(t, e, n);
    },
    d(t) {
      t && N(e);
    }
  };
}
function ba(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = he(e);
    },
    m(n, l) {
      U(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && ft(t, e);
    },
    d(n) {
      n && N(t);
    }
  };
}
function pa(i) {
  let e;
  return {
    c() {
      e = he("-");
    },
    m(t, n) {
      U(t, e, n);
    },
    d(t) {
      t && N(e);
    }
  };
}
function wa(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = he(e), n = he("%");
    },
    m(l, o) {
      U(l, t, o), U(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && ft(t, e);
    },
    d(l) {
      l && (N(t), N(n));
    }
  };
}
function va(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && ga(i)
  );
  return {
    c() {
      t && t.c(), e = ti();
    },
    m(n, l) {
      t && t.m(n, l), U(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = ga(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && N(e), t && t.d(n);
    }
  };
}
function ka(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Zr(
    o,
    i,
    /*$$scope*/
    i[29],
    ra
  );
  return {
    c() {
      e = Dt("p"), t = he(
        /*loading_text*/
        i[9]
      ), n = ct(), s && s.c(), vt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      U(r, e, a), yn(e, t), U(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && ft(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && n_(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? e_(
          o,
          /*$$scope*/
          r[29],
          a,
          N1
        ) : Qr(
          /*$$scope*/
          r[29]
        ),
        ra
      );
    },
    i(r) {
      l || (wt(s, r), l = !0);
    },
    o(r) {
      Lt(s, r), l = !1;
    },
    d(r) {
      r && (N(e), N(n)), s && s.d(r);
    }
  };
}
function nh(i) {
  let e, t, n, l, o;
  const s = [V1, U1], r = [];
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
      e = Dt("div"), n && n.c(), vt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), _t(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), _t(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), _t(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), _t(
        e,
        "border",
        /*border*/
        i[12]
      ), an(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), an(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(_, c) {
      U(_, e, c), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(_, c) {
      let u = t;
      t = a(_), t === u ? ~t && r[t].p(_, c) : (n && (ts(), Lt(r[u], 1, 1, () => {
        r[u] = null;
      }), es()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), wt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && vt(e, "class", l), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && _t(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && _t(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && _t(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && _t(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && an(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && an(
        e,
        "padding",
        /*absolute*/
        _[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(_) {
      o || (wt(n), o = !0);
    },
    o(_) {
      Lt(n), o = !1;
    },
    d(_) {
      _ && N(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var ih = function(i, e, t, n) {
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
let Vi = [], yo = !1;
function lh(i) {
  return ih(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Vi.push(e), !yo) yo = !0;
      else return;
      yield F1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Vi.length; l++) {
          const s = Vi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), yo = !1, Vi = [];
      });
    }
  });
}
function oh(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = $1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: f = !1 } = e, { timer: d = !0 } = e, { show_progress: h = "full" } = e, { message: m = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: q = !1 } = e, { border: M = !1 } = e, { autoscroll: D } = e, C, k = !1, y = 0, B = 0, A = null, S = null, Y = 0, F = null, J, z = null, me = !0;
  const R = () => {
    t(0, a = t(27, A = t(19, O = null))), t(25, y = performance.now()), t(26, B = 0), k = !0, $();
  };
  function $() {
    requestAnimationFrame(() => {
      t(26, B = (performance.now() - y) / 1e3), k && $();
    });
  }
  function I() {
    t(26, B = 0), t(0, a = t(27, A = t(19, O = null))), k && (k = !1);
  }
  O1(() => {
    k && I();
  });
  let O = null;
  function _e(j) {
    sa[j ? "unshift" : "push"](() => {
      z = j, t(16, z), t(7, g), t(14, F), t(15, J);
    });
  }
  const Z = () => {
    s("clear_status");
  };
  function re(j) {
    sa[j ? "unshift" : "push"](() => {
      C = j, t(13, C);
    });
  }
  return i.$$set = (j) => {
    "i18n" in j && t(1, r = j.i18n), "eta" in j && t(0, a = j.eta), "queue_position" in j && t(2, _ = j.queue_position), "queue_size" in j && t(3, c = j.queue_size), "status" in j && t(4, u = j.status), "scroll_to_output" in j && t(22, f = j.scroll_to_output), "timer" in j && t(5, d = j.timer), "show_progress" in j && t(6, h = j.show_progress), "message" in j && t(23, m = j.message), "progress" in j && t(7, g = j.progress), "variant" in j && t(8, b = j.variant), "loading_text" in j && t(9, w = j.loading_text), "absolute" in j && t(10, p = j.absolute), "translucent" in j && t(11, q = j.translucent), "border" in j && t(12, M = j.border), "autoscroll" in j && t(24, D = j.autoscroll), "$$scope" in j && t(29, o = j.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = A), a != null && A !== a && (t(28, S = (performance.now() - y) / 1e3 + a), t(19, O = S.toFixed(1)), t(27, A = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, Y = S === null || S <= 0 || !B ? null : Math.min(B / S, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, me = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, F = g.map((j) => {
      if (j.index != null && j.length != null)
        return j.index / j.length;
      if (j.progress != null)
        return j.progress;
    })) : t(14, F = null), F ? (t(15, J = F[F.length - 1]), z && (J === 0 ? t(16, z.style.transition = "0", z) : t(16, z.style.transition = "150ms", z))) : t(15, J = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? R() : I()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && C && f && (u === "pending" || u === "complete") && lh(C, D), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = B.toFixed(1));
  }, [
    a,
    r,
    _,
    c,
    u,
    d,
    h,
    g,
    b,
    w,
    p,
    q,
    M,
    C,
    F,
    J,
    z,
    Y,
    me,
    O,
    n,
    s,
    f,
    m,
    D,
    y,
    B,
    A,
    S,
    o,
    l,
    _e,
    Z,
    re
  ];
}
class sh extends H1 {
  constructor(e) {
    super(), j1(
      this,
      e,
      oh,
      nh,
      T1,
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
  SvelteComponent: $6,
  add_render_callback: x6,
  append: N6,
  attr: U6,
  bubble: V6,
  check_outros: P6,
  create_component: K6,
  create_in_transition: Z6,
  create_out_transition: G6,
  destroy_component: J6,
  detach: Q6,
  element: e8,
  group_outros: t8,
  init: n8,
  insert: i8,
  listen: l8,
  mount_component: o8,
  run_all: s8,
  safe_not_equal: a8,
  set_data: r8,
  space: _8,
  stop_propagation: c8,
  text: f8,
  transition_in: u8,
  transition_out: d8
} = window.__gradio__svelte__internal, { createEventDispatcher: h8, onMount: m8 } = window.__gradio__svelte__internal, {
  SvelteComponent: g8,
  append: b8,
  attr: p8,
  bubble: w8,
  check_outros: v8,
  create_animation: k8,
  create_component: y8,
  destroy_component: C8,
  detach: S8,
  element: q8,
  ensure_array_like: z8,
  fix_and_outro_and_destroy_block: B8,
  fix_position: D8,
  group_outros: L8,
  init: M8,
  insert: E8,
  mount_component: R8,
  noop: W8,
  safe_not_equal: A8,
  set_style: X8,
  space: Y8,
  transition_in: I8,
  transition_out: H8,
  update_keyed_each: j8
} = window.__gradio__svelte__internal, { setContext: T8, getContext: ah } = window.__gradio__svelte__internal, rh = "WORKER_PROXY_CONTEXT_KEY";
function i_() {
  return ah(rh);
}
function _h(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function l_(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function o_(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!_h(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function ch(i) {
  if (i == null || !o_(i))
    return i;
  const e = i_();
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
      type: l_(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: fh,
  assign: yl,
  check_outros: s_,
  compute_rest_props: ya,
  create_slot: ms,
  detach: Il,
  element: a_,
  empty: r_,
  exclude_internal_props: uh,
  get_all_dirty_from_scope: gs,
  get_slot_changes: bs,
  get_spread_update: __,
  group_outros: c_,
  init: dh,
  insert: Hl,
  listen: f_,
  prevent_default: hh,
  safe_not_equal: mh,
  set_attributes: Cl,
  transition_in: Dn,
  transition_out: Ln,
  update_slot_base: ps
} = window.__gradio__svelte__internal, { createEventDispatcher: gh } = window.__gradio__svelte__internal;
function bh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = ms(
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
    _ = yl(_, a[c]);
  return {
    c() {
      e = a_("a"), r && r.c(), Cl(e, _);
    },
    m(c, u) {
      Hl(c, e, u), r && r.m(e, null), n = !0, l || (o = f_(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && ps(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? bs(
          s,
          /*$$scope*/
          c[7],
          u,
          null
        ) : gs(
          /*$$scope*/
          c[7]
        ),
        null
      ), Cl(e, _ = __(a, [
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
      n || (Dn(r, c), n = !0);
    },
    o(c) {
      Ln(r, c), n = !1;
    },
    d(c) {
      c && Il(e), r && r.d(c), l = !1, o();
    }
  };
}
function ph(i) {
  let e, t, n, l;
  const o = [vh, wh], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = r_();
    },
    m(a, _) {
      s[e].m(a, _), Hl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (c_(), Ln(s[c], 1, 1, () => {
        s[c] = null;
      }), s_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Dn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Dn(t), l = !0);
    },
    o(a) {
      Ln(t), l = !1;
    },
    d(a) {
      a && Il(n), s[e].d(a);
    }
  };
}
function wh(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = ms(
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
    a = yl(a, r[_]);
  return {
    c() {
      e = a_("a"), s && s.c(), Cl(e, a);
    },
    m(_, c) {
      Hl(_, e, c), s && s.m(e, null), t = !0, n || (l = f_(e, "click", hh(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && ps(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? bs(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : gs(
          /*$$scope*/
          _[7]
        ),
        null
      ), Cl(e, a = __(r, [
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
      t || (Dn(s, _), t = !0);
    },
    o(_) {
      Ln(s, _), t = !1;
    },
    d(_) {
      _ && Il(e), s && s.d(_), n = !1, l();
    }
  };
}
function vh(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = ms(
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
      128) && ps(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? bs(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : gs(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (Dn(n, l), e = !0);
    },
    o(l) {
      Ln(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function kh(i) {
  let e, t, n, l, o;
  const s = [ph, bh], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && o_(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = r_();
    },
    m(_, c) {
      r[t].m(_, c), Hl(_, l, c), o = !0;
    },
    p(_, [c]) {
      let u = t;
      t = a(_, c), t === u ? r[t].p(_, c) : (c_(), Ln(r[u], 1, 1, () => {
        r[u] = null;
      }), s_(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), Dn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (Dn(n), o = !0);
    },
    o(_) {
      Ln(n), o = !1;
    },
    d(_) {
      _ && Il(l), r[t].d(_);
    }
  };
}
function yh(i, e, t) {
  const n = ["href", "download"];
  let l = ya(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(h, m, g, b) {
    function w(p) {
      return p instanceof g ? p : new g(function(q) {
        q(p);
      });
    }
    return new (g || (g = Promise))(function(p, q) {
      function M(k) {
        try {
          C(b.next(k));
        } catch (y) {
          q(y);
        }
      }
      function D(k) {
        try {
          C(b.throw(k));
        } catch (y) {
          q(y);
        }
      }
      function C(k) {
        k.done ? p(k.value) : w(k.value).then(M, D);
      }
      C((b = b.apply(h, m || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = gh();
  let u = !1;
  const f = i_();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (f == null)
        throw new Error("Wasm worker proxy is not available.");
      const m = new URL(a, window.location.href).pathname;
      t(2, u = !0), f.httpRequest({
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
            type: l_(g.headers, "content-type")
          }
        ), w = URL.createObjectURL(b), p = document.createElement("a");
        p.href = w, p.download = _, p.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (h) => {
    e = yl(yl({}, e), uh(h)), t(6, l = ya(e, n)), "href" in h && t(0, a = h.href), "download" in h && t(1, _ = h.download), "$$scope" in h && t(7, s = h.$$scope);
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
class Ch extends fh {
  constructor(e) {
    super(), dh(this, e, yh, kh, mh, { href: 0, download: 1 });
  }
}
var Sh = Object.defineProperty, qh = (i, e, t) => e in i ? Sh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, At = (i, e, t) => (qh(i, typeof e != "symbol" ? e + "" : e, t), t), u_ = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, gi = (i, e, t) => (u_(i, e, "read from private field"), e.get(i)), zh = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Bh = (i, e, t, n) => (u_(i, e, "write to private field"), e.set(i, t), t), on;
new Intl.Collator(0, { numeric: 1 }).compare;
async function d_(i, e) {
  return i.map(
    (t) => new Dh({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Dh {
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
    At(this, "path"), At(this, "url"), At(this, "orig_name"), At(this, "size"), At(this, "blob"), At(this, "is_stream"), At(this, "mime_type"), At(this, "alt_text"), At(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class F8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = gi(this, on) + t; ; ) {
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
        Bh(this, on, t);
      },
      flush: (t) => {
        if (gi(this, on) === "")
          return;
        const n = e.allowCR && gi(this, on).endsWith("\r") ? gi(this, on).slice(0, -1) : gi(this, on);
        t.enqueue(n);
      }
    }), zh(this, on, "");
  }
}
on = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Lh,
  append: Ve,
  attr: wn,
  detach: h_,
  element: vn,
  init: Mh,
  insert: m_,
  noop: Ca,
  safe_not_equal: Eh,
  set_data: Sl,
  set_style: Co,
  space: is,
  text: Pn,
  toggle_class: Sa
} = window.__gradio__svelte__internal, { onMount: Rh, createEventDispatcher: Wh, onDestroy: Ah } = window.__gradio__svelte__internal;
function qa(i) {
  let e, t, n, l, o = zi(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = vn("div"), t = vn("span"), n = vn("div"), l = vn("progress"), s = Pn(o), a = is(), _ = vn("span"), u = Pn(c), Co(l, "visibility", "hidden"), Co(l, "height", "0"), Co(l, "width", "0"), l.value = r = zi(
        /*file_to_display*/
        i[2]
      ), wn(l, "max", "100"), wn(l, "class", "svelte-cr2edf"), wn(n, "class", "progress-bar svelte-cr2edf"), wn(_, "class", "file-name svelte-cr2edf"), wn(e, "class", "file svelte-cr2edf");
    },
    m(f, d) {
      m_(f, e, d), Ve(e, t), Ve(t, n), Ve(n, l), Ve(l, s), Ve(e, a), Ve(e, _), Ve(_, u);
    },
    p(f, d) {
      d & /*file_to_display*/
      4 && o !== (o = zi(
        /*file_to_display*/
        f[2]
      ) + "") && Sl(s, o), d & /*file_to_display*/
      4 && r !== (r = zi(
        /*file_to_display*/
        f[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      f[2].orig_name + "") && Sl(u, c);
    },
    d(f) {
      f && h_(e);
    }
  };
}
function Xh(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, u = (
    /*file_to_display*/
    i[2] && qa(i)
  );
  return {
    c() {
      e = vn("div"), t = vn("span"), n = Pn("Uploading "), o = Pn(l), s = is(), a = Pn(r), _ = Pn("..."), c = is(), u && u.c(), wn(t, "class", "uploading svelte-cr2edf"), wn(e, "class", "wrap svelte-cr2edf"), Sa(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(f, d) {
      m_(f, e, d), Ve(e, t), Ve(t, n), Ve(t, o), Ve(t, s), Ve(t, a), Ve(t, _), Ve(e, c), u && u.m(e, null);
    },
    p(f, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      f[0].length + "") && Sl(o, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      f[0].length > 1 ? "files" : "file") && Sl(a, r), /*file_to_display*/
      f[2] ? u ? u.p(f, d) : (u = qa(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Sa(
        e,
        "progress",
        /*progress*/
        f[1]
      );
    },
    i: Ca,
    o: Ca,
    d(f) {
      f && h_(e), u && u.d();
    }
  };
}
function zi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function Yh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += zi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Ih(i, e, t) {
  var n = this && this.__awaiter || function(m, g, b, w) {
    function p(q) {
      return q instanceof b ? q : new b(function(M) {
        M(q);
      });
    }
    return new (b || (b = Promise))(function(q, M) {
      function D(y) {
        try {
          k(w.next(y));
        } catch (B) {
          M(B);
        }
      }
      function C(y) {
        try {
          k(w.throw(y));
        } catch (B) {
          M(B);
        }
      }
      function k(y) {
        y.done ? q(y.value) : p(y.value).then(D, C);
      }
      k((w = w.apply(m, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, u, f = s.map((m) => Object.assign(Object.assign({}, m), { progress: 0 }));
  const d = Wh();
  function h(m, g) {
    t(0, f = f.map((b) => (b.orig_name === m && (b.progress += g), b)));
  }
  return Rh(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(m) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(m.data);
        _ || t(1, _ = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), h(g.orig_name, g.chunk_size));
      });
    };
  })), Ah(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (m) => {
    "upload_id" in m && t(3, l = m.upload_id), "root" in m && t(4, o = m.root), "files" in m && t(5, s = m.files), "stream_handler" in m && t(6, r = m.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && Yh(f), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class Hh extends Lh {
  constructor(e) {
    super(), Mh(this, e, Ih, Xh, Eh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: jh,
  append: za,
  attr: Le,
  binding_callbacks: Th,
  bubble: fn,
  check_outros: g_,
  create_component: Fh,
  create_slot: b_,
  destroy_component: Oh,
  detach: jl,
  element: ls,
  empty: p_,
  get_all_dirty_from_scope: w_,
  get_slot_changes: v_,
  group_outros: k_,
  init: $h,
  insert: Tl,
  listen: Je,
  mount_component: xh,
  prevent_default: un,
  run_all: Nh,
  safe_not_equal: Uh,
  set_style: y_,
  space: Vh,
  stop_propagation: dn,
  toggle_class: qe,
  transition_in: rn,
  transition_out: Mn,
  update_slot_base: C_
} = window.__gradio__svelte__internal, { createEventDispatcher: Ph, tick: Kh } = window.__gradio__svelte__internal;
function Zh(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const f = (
    /*#slots*/
    i[26].default
  ), d = b_(
    f,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = ls("button"), d && d.c(), t = Vh(), n = ls("input"), Le(n, "aria-label", "file upload"), Le(n, "data-testid", "file-upload"), Le(n, "type", "file"), Le(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, Le(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), Le(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Le(n, "class", "svelte-1s26xmt"), Le(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Le(e, "class", "svelte-1s26xmt"), qe(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), qe(
        e,
        "center",
        /*center*/
        i[4]
      ), qe(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), qe(
        e,
        "flex",
        /*flex*/
        i[5]
      ), qe(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), y_(e, "height", "100%");
    },
    m(h, m) {
      Tl(h, e, m), d && d.m(e, null), za(e, t), za(e, n), i[34](n), _ = !0, c || (u = [
        Je(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Je(e, "drag", dn(un(
          /*drag_handler*/
          i[27]
        ))),
        Je(e, "dragstart", dn(un(
          /*dragstart_handler*/
          i[28]
        ))),
        Je(e, "dragend", dn(un(
          /*dragend_handler*/
          i[29]
        ))),
        Je(e, "dragover", dn(un(
          /*dragover_handler*/
          i[30]
        ))),
        Je(e, "dragenter", dn(un(
          /*dragenter_handler*/
          i[31]
        ))),
        Je(e, "dragleave", dn(un(
          /*dragleave_handler*/
          i[32]
        ))),
        Je(e, "drop", dn(un(
          /*drop_handler*/
          i[33]
        ))),
        Je(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Je(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Je(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Je(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(h, m) {
      d && d.p && (!_ || m[0] & /*$$scope*/
      33554432) && C_(
        d,
        f,
        h,
        /*$$scope*/
        h[25],
        _ ? v_(
          f,
          /*$$scope*/
          h[25],
          m,
          null
        ) : w_(
          /*$$scope*/
          h[25]
        ),
        null
      ), (!_ || m[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      h[16] || void 0)) && Le(n, "accept", l), (!_ || m[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      h[6] === "multiple" || void 0)) && (n.multiple = o), (!_ || m[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      h[6] === "directory" || void 0)) && Le(n, "webkitdirectory", s), (!_ || m[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      h[6] === "directory" || void 0)) && Le(n, "mozdirectory", r), (!_ || m[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      h[9] ? -1 : 0)) && Le(e, "tabindex", a), (!_ || m[0] & /*hidden*/
      512) && qe(
        e,
        "hidden",
        /*hidden*/
        h[9]
      ), (!_ || m[0] & /*center*/
      16) && qe(
        e,
        "center",
        /*center*/
        h[4]
      ), (!_ || m[0] & /*boundedheight*/
      8) && qe(
        e,
        "boundedheight",
        /*boundedheight*/
        h[3]
      ), (!_ || m[0] & /*flex*/
      32) && qe(
        e,
        "flex",
        /*flex*/
        h[5]
      ), (!_ || m[0] & /*disable_click*/
      128) && qe(
        e,
        "disable_click",
        /*disable_click*/
        h[7]
      );
    },
    i(h) {
      _ || (rn(d, h), _ = !0);
    },
    o(h) {
      Mn(d, h), _ = !1;
    },
    d(h) {
      h && jl(e), d && d.d(h), i[34](null), c = !1, Nh(u);
    }
  };
}
function Gh(i) {
  let e, t, n = !/*hidden*/
  i[9] && Ba(i);
  return {
    c() {
      n && n.c(), e = p_();
    },
    m(l, o) {
      n && n.m(l, o), Tl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (k_(), Mn(n, 1, 1, () => {
        n = null;
      }), g_()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && rn(n, 1)) : (n = Ba(l), n.c(), rn(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (rn(n), t = !0);
    },
    o(l) {
      Mn(n), t = !1;
    },
    d(l) {
      l && jl(e), n && n.d(l);
    }
  };
}
function Jh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = b_(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = ls("button"), r && r.c(), Le(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Le(e, "class", "svelte-1s26xmt"), qe(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), qe(
        e,
        "center",
        /*center*/
        i[4]
      ), qe(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), qe(
        e,
        "flex",
        /*flex*/
        i[5]
      ), y_(e, "height", "100%");
    },
    m(a, _) {
      Tl(a, e, _), r && r.m(e, null), n = !0, l || (o = Je(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && C_(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? v_(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : w_(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || _[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Le(e, "tabindex", t), (!n || _[0] & /*hidden*/
      512) && qe(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || _[0] & /*center*/
      16) && qe(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || _[0] & /*boundedheight*/
      8) && qe(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || _[0] & /*flex*/
      32) && qe(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (rn(r, a), n = !0);
    },
    o(a) {
      Mn(r, a), n = !1;
    },
    d(a) {
      a && jl(e), r && r.d(a), l = !1, o();
    }
  };
}
function Ba(i) {
  let e, t;
  return e = new Hh({
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
      Fh(e.$$.fragment);
    },
    m(n, l) {
      xh(e, n, l), t = !0;
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
      t || (rn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Mn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Oh(e, n);
    }
  };
}
function Qh(i) {
  let e, t, n, l;
  const o = [Jh, Gh, Zh], s = [];
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
      t.c(), n = p_();
    },
    m(a, _) {
      s[e].m(a, _), Tl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (k_(), Mn(s[c], 1, 1, () => {
        s[c] = null;
      }), g_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), rn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (rn(t), l = !0);
    },
    o(a) {
      Mn(t), l = !1;
    },
    d(a) {
      a && jl(n), s[e].d(a);
    }
  };
}
function em(i, e, t) {
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
function tm(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(W, x, oe, se) {
    function le(ge) {
      return ge instanceof oe ? ge : new oe(function(te) {
        te(ge);
      });
    }
    return new (oe || (oe = Promise))(function(ge, te) {
      function E(ut) {
        try {
          it(se.next(ut));
        } catch (cn) {
          te(cn);
        }
      }
      function Ze(ut) {
        try {
          it(se.throw(ut));
        } catch (cn) {
          te(cn);
        }
      }
      function it(ut) {
        ut.done ? ge(ut.value) : le(ut.value).then(E, Ze);
      }
      it((se = se.apply(W, x || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: f = !1 } = e, { root: d } = e, { hidden: h = !1 } = e, { format: m = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: w = !0 } = e, { max_file_size: p = null } = e, { upload: q } = e, { stream_handler: M } = e, D, C, k;
  const y = Ph(), B = ["image", "video", "audio", "text", "file"], A = (W) => W.startsWith(".") || W.endsWith("/*") ? W : B.includes(W) ? W + "/*" : "." + W;
  function S() {
    t(20, r = !r);
  }
  function Y() {
    navigator.clipboard.read().then((W) => o(this, void 0, void 0, function* () {
      for (let x = 0; x < W.length; x++) {
        const oe = W[x].types.find((se) => se.startsWith("image/"));
        if (oe) {
          W[x].getType(oe).then((se) => o(this, void 0, void 0, function* () {
            const le = new File([se], `clipboard.${oe.replace("image/", "")}`);
            yield z([le]);
          }));
          break;
        }
      }
    }));
  }
  function F() {
    f || b && (t(2, b.value = "", b), b.click());
  }
  function J(W) {
    return o(this, void 0, void 0, function* () {
      yield Kh(), t(14, D = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const x = yield q(W, d, D, p ?? 1 / 0);
        return y("load", u === "single" ? x == null ? void 0 : x[0] : x), t(1, g = !1), x || [];
      } catch (x) {
        return y("error", x.message), t(1, g = !1), [];
      }
    });
  }
  function z(W) {
    return o(this, void 0, void 0, function* () {
      if (!W.length)
        return;
      let x = W.map((oe) => new File([oe], oe instanceof File ? oe.name : "file", { type: oe.type }));
      return t(15, C = yield d_(x)), yield J(C);
    });
  }
  function me(W) {
    return o(this, void 0, void 0, function* () {
      const x = W.target;
      if (x.files)
        if (m != "blob")
          yield z(Array.from(x.files));
        else {
          if (u === "single") {
            y("load", x.files[0]);
            return;
          }
          y("load", x.files);
        }
    });
  }
  function R(W) {
    return o(this, void 0, void 0, function* () {
      var x;
      if (t(20, r = !1), !(!((x = W.dataTransfer) === null || x === void 0) && x.files)) return;
      const oe = Array.from(W.dataTransfer.files).filter((se) => {
        const le = "." + se.name.split(".").pop();
        return le && em(k, le, se.type) || (le && Array.isArray(s) ? s.includes(le) : le === s) ? !0 : (y("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield z(oe);
    });
  }
  function $(W) {
    fn.call(this, i, W);
  }
  function I(W) {
    fn.call(this, i, W);
  }
  function O(W) {
    fn.call(this, i, W);
  }
  function _e(W) {
    fn.call(this, i, W);
  }
  function Z(W) {
    fn.call(this, i, W);
  }
  function re(W) {
    fn.call(this, i, W);
  }
  function j(W) {
    fn.call(this, i, W);
  }
  function ke(W) {
    Th[W ? "unshift" : "push"](() => {
      b = W, t(2, b);
    });
  }
  return i.$$set = (W) => {
    "filetype" in W && t(0, s = W.filetype), "dragging" in W && t(20, r = W.dragging), "boundedheight" in W && t(3, a = W.boundedheight), "center" in W && t(4, _ = W.center), "flex" in W && t(5, c = W.flex), "file_count" in W && t(6, u = W.file_count), "disable_click" in W && t(7, f = W.disable_click), "root" in W && t(8, d = W.root), "hidden" in W && t(9, h = W.hidden), "format" in W && t(21, m = W.format), "uploading" in W && t(1, g = W.uploading), "hidden_upload" in W && t(2, b = W.hidden_upload), "show_progress" in W && t(10, w = W.show_progress), "max_file_size" in W && t(22, p = W.max_file_size), "upload" in W && t(23, q = W.upload), "stream_handler" in W && t(11, M = W.stream_handler), "$$scope" in W && t(25, l = W.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, k = null) : typeof s == "string" ? t(16, k = A(s)) : (t(0, s = s.map(A)), t(16, k = s.join(", "))));
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
    h,
    w,
    M,
    Y,
    F,
    D,
    C,
    k,
    S,
    me,
    R,
    r,
    m,
    p,
    q,
    z,
    l,
    n,
    $,
    I,
    O,
    _e,
    Z,
    re,
    j,
    ke
  ];
}
class nm extends jh {
  constructor(e) {
    super(), $h(
      this,
      e,
      tm,
      Qh,
      Uh,
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
  SvelteComponent: O8,
  append: $8,
  attr: x8,
  check_outros: N8,
  create_component: U8,
  destroy_component: V8,
  detach: P8,
  element: K8,
  group_outros: Z8,
  init: G8,
  insert: J8,
  mount_component: Q8,
  safe_not_equal: e7,
  set_style: t7,
  space: n7,
  toggle_class: i7,
  transition_in: l7,
  transition_out: o7
} = window.__gradio__svelte__internal, { createEventDispatcher: s7 } = window.__gradio__svelte__internal, {
  SvelteComponent: a7,
  assign: r7,
  compute_rest_props: _7,
  detach: c7,
  element: f7,
  exclude_internal_props: u7,
  get_spread_update: d7,
  init: h7,
  insert: m7,
  noop: g7,
  safe_not_equal: b7,
  set_attributes: p7,
  src_url_equal: w7,
  toggle_class: v7
} = window.__gradio__svelte__internal, {
  SvelteComponent: k7,
  append: y7,
  attr: C7,
  bubble: S7,
  check_outros: q7,
  create_component: z7,
  destroy_component: B7,
  detach: D7,
  element: L7,
  empty: M7,
  group_outros: E7,
  init: R7,
  insert: W7,
  listen: A7,
  mount_component: X7,
  safe_not_equal: Y7,
  space: I7,
  toggle_class: H7,
  transition_in: j7,
  transition_out: T7
} = window.__gradio__svelte__internal, { createEventDispatcher: F7 } = window.__gradio__svelte__internal, {
  SvelteComponent: im,
  append: Pi,
  attr: So,
  create_component: lm,
  destroy_component: om,
  detach: sm,
  element: qo,
  init: am,
  insert: rm,
  listen: _m,
  mount_component: cm,
  noop: fm,
  safe_not_equal: um,
  set_style: dm,
  space: hm,
  text: mm,
  transition_in: gm,
  transition_out: bm
} = window.__gradio__svelte__internal, { createEventDispatcher: pm } = window.__gradio__svelte__internal;
function wm(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new Fr({}), {
    c() {
      e = qo("button"), t = qo("div"), n = qo("span"), lm(l.$$.fragment), o = hm(), r = mm(s), So(n, "class", "icon-wrap svelte-fjcd9c"), So(t, "class", "wrap svelte-fjcd9c"), So(e, "class", "svelte-fjcd9c"), dm(e, "height", "100%");
    },
    m(u, f) {
      rm(u, e, f), Pi(e, t), Pi(t, n), cm(l, n, null), Pi(t, o), Pi(t, r), a = !0, _ || (c = _m(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: fm,
    i(u) {
      a || (gm(l.$$.fragment, u), a = !0);
    },
    o(u) {
      bm(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && sm(e), om(l), _ = !1, c();
    }
  };
}
function vm(i) {
  const e = pm();
  return [e, () => e("click")];
}
class km extends im {
  constructor(e) {
    super(), am(this, e, vm, wm, um, {});
  }
}
function ym() {
  return navigator.mediaDevices.enumerateDevices();
}
function Cm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Da(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (Cm(o, e), o));
}
function Sm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: qm,
  action_destroyer: zm,
  add_render_callback: Bm,
  append: Ft,
  attr: ve,
  binding_callbacks: Dm,
  check_outros: Li,
  create_component: ni,
  create_in_transition: Lm,
  destroy_component: ii,
  destroy_each: Mm,
  detach: Pe,
  element: nt,
  empty: ws,
  ensure_array_like: La,
  group_outros: Mi,
  init: Em,
  insert: Ke,
  listen: ql,
  mount_component: li,
  noop: vs,
  run_all: Rm,
  safe_not_equal: Wm,
  set_data: S_,
  set_input_value: os,
  space: Ai,
  stop_propagation: Am,
  text: q_,
  toggle_class: Ki,
  transition_in: ze,
  transition_out: Ee
} = window.__gradio__svelte__internal, { createEventDispatcher: Xm, onMount: Ym } = window.__gradio__svelte__internal;
function Ma(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Im(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const f = [Tm, jm], d = [];
  function h(b, w) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = h(i), l = d[n] = f[n](i);
  let m = !/*recording*/
  i[8] && Ea(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Ra(i)
  );
  return {
    c() {
      e = nt("div"), t = nt("button"), l.c(), s = Ai(), m && m.c(), r = Ai(), g && g.c(), a = ws(), ve(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ve(t, "class", "svelte-8hqvb6"), ve(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, w) {
      Ke(b, e, w), Ft(e, t), d[n].m(t, null), Ft(e, s), m && m.m(e, null), Ke(b, r, w), g && g.m(b, w), Ke(b, a, w), _ = !0, c || (u = ql(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, w) {
      let p = n;
      n = h(b), n === p ? d[n].p(b, w) : (Mi(), Ee(d[p], 1, 1, () => {
        d[p] = null;
      }), Li(), l = d[n], l ? l.p(b, w) : (l = d[n] = f[n](b), l.c()), ze(l, 1), l.m(t, null)), (!_ || w[0] & /*mode*/
      2 && o !== (o = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && ve(t, "aria-label", o), /*recording*/
      b[8] ? m && (Mi(), Ee(m, 1, 1, () => {
        m = null;
      }), Li()) : m ? (m.p(b, w), w[0] & /*recording*/
      256 && ze(m, 1)) : (m = Ea(b), m.c(), ze(m, 1), m.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, w), w[0] & /*options_open, selected_device*/
      1152 && ze(g, 1)) : (g = Ra(b), g.c(), ze(g, 1), g.m(a.parentNode, a)) : g && (Mi(), Ee(g, 1, 1, () => {
        g = null;
      }), Li());
    },
    i(b) {
      _ || (ze(l), ze(m), ze(g), _ = !0);
    },
    o(b) {
      Ee(l), Ee(m), Ee(g), _ = !1;
    },
    d(b) {
      b && (Pe(e), Pe(r), Pe(a)), d[n].d(), m && m.d(), g && g.d(b), c = !1, u();
    }
  };
}
function Hm(i) {
  let e, t, n, l;
  return t = new km({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = nt("div"), ni(t.$$.fragment), ve(e, "title", "grant webcam access");
    },
    m(o, s) {
      Ke(o, e, s), li(t, e, null), l = !0;
    },
    p: vs,
    i(o) {
      l || (ze(t.$$.fragment, o), o && (n || Bm(() => {
        n = Lm(e, z1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Pe(e), ii(t);
    }
  };
}
function jm(i) {
  let e, t, n;
  return t = new au({}), {
    c() {
      e = nt("div"), ni(t.$$.fragment), ve(e, "class", "icon svelte-8hqvb6"), ve(e, "title", "capture photo");
    },
    m(l, o) {
      Ke(l, e, o), li(t, e, null), n = !0;
    },
    p: vs,
    i(l) {
      n || (ze(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ee(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Pe(e), ii(t);
    }
  };
}
function Tm(i) {
  let e, t, n, l;
  const o = [Om, Fm], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = ws();
    },
    m(a, _) {
      s[e].m(a, _), Ke(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (Mi(), Ee(s[c], 1, 1, () => {
        s[c] = null;
      }), Li(), t = s[e], t || (t = s[e] = o[e](a), t.c()), ze(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ze(t), l = !0);
    },
    o(a) {
      Ee(t), l = !1;
    },
    d(a) {
      a && Pe(n), s[e].d(a);
    }
  };
}
function Fm(i) {
  let e, t, n;
  return t = new mu({}), {
    c() {
      e = nt("div"), ni(t.$$.fragment), ve(e, "class", "icon red svelte-8hqvb6"), ve(e, "title", "start recording");
    },
    m(l, o) {
      Ke(l, e, o), li(t, e, null), n = !0;
    },
    i(l) {
      n || (ze(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ee(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Pe(e), ii(t);
    }
  };
}
function Om(i) {
  let e, t, n;
  return t = new zd({}), {
    c() {
      e = nt("div"), ni(t.$$.fragment), ve(e, "class", "icon red svelte-8hqvb6"), ve(e, "title", "stop recording");
    },
    m(l, o) {
      Ke(l, e, o), li(t, e, null), n = !0;
    },
    i(l) {
      n || (ze(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ee(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Pe(e), ii(t);
    }
  };
}
function Ea(i) {
  let e, t, n, l, o;
  return t = new hs({}), {
    c() {
      e = nt("button"), ni(t.$$.fragment), ve(e, "class", "icon svelte-8hqvb6"), ve(e, "aria-label", "select input source");
    },
    m(s, r) {
      Ke(s, e, r), li(t, e, null), n = !0, l || (o = ql(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: vs,
    i(s) {
      n || (ze(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ee(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Pe(e), ii(t), l = !1, o();
    }
  };
}
function Ra(i) {
  let e, t, n, l, o, s, r;
  n = new hs({});
  function a(u, f) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? xm : $m
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = nt("select"), t = nt("button"), ni(n.$$.fragment), l = Ai(), c.c(), ve(t, "class", "inset-icon svelte-8hqvb6"), ve(e, "class", "select-wrap svelte-8hqvb6"), ve(e, "aria-label", "select source");
    },
    m(u, f) {
      Ke(u, e, f), Ft(e, t), li(n, t, null), Ft(t, l), c.m(e, null), o = !0, s || (r = [
        ql(t, "click", Am(
          /*click_handler_2*/
          i[22]
        )),
        zm(ks.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        ql(
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
      o || (ze(n.$$.fragment, u), o = !0);
    },
    o(u) {
      Ee(n.$$.fragment, u), o = !1;
    },
    d(u) {
      u && Pe(e), ii(n), c.d(), s = !1, Rm(r);
    }
  };
}
function $m(i) {
  let e, t = La(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Wa(Ma(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ws();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Ke(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = La(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Ma(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Wa(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Pe(e), Mm(n, l);
    }
  };
}
function xm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = nt("option"), n = q_(t), e.__value = "", os(e, e.__value), ve(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      Ke(l, e, o), Ft(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && S_(n, t);
    },
    d(l) {
      l && Pe(e);
    }
  };
}
function Wa(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = nt("option"), n = q_(t), l = Ai(), e.__value = o = /*device*/
      i[32].deviceId, os(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ve(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Ke(r, e, a), Ft(e, n), Ft(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && S_(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, os(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Pe(e);
    }
  };
}
function Nm(i) {
  let e, t, n, l, o, s;
  const r = [Hm, Im], a = [];
  function _(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = nt("div"), t = nt("video"), n = Ai(), o.c(), ve(t, "class", "svelte-8hqvb6"), Ki(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Ki(t, "hide", !/*webcam_accessed*/
      i[9]), ve(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Ke(c, e, u), Ft(e, t), i[19](t), Ft(e, n), a[l].m(e, null), s = !0;
    },
    p(c, u) {
      (!s || u[0] & /*mirror_webcam*/
      4) && Ki(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || u[0] & /*webcam_accessed*/
      512) && Ki(t, "hide", !/*webcam_accessed*/
      c[9]);
      let f = l;
      l = _(c), l === f ? a[l].p(c, u) : (Mi(), Ee(a[f], 1, 1, () => {
        a[f] = null;
      }), Li(), o = a[l], o ? o.p(c, u) : (o = a[l] = r[l](c), o.c()), ze(o, 1), o.m(e, null));
    },
    i(c) {
      s || (ze(o), s = !0);
    },
    o(c) {
      Ee(o), s = !1;
    },
    d(c) {
      c && Pe(e), i[19](null), a[l].d();
    }
  };
}
function ks(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Um(i, e, t) {
  var n = this && this.__awaiter || function(R, $, I, O) {
    function _e(Z) {
      return Z instanceof I ? Z : new I(function(re) {
        re(Z);
      });
    }
    return new (I || (I = Promise))(function(Z, re) {
      function j(x) {
        try {
          W(O.next(x));
        } catch (oe) {
          re(oe);
        }
      }
      function ke(x) {
        try {
          W(O.throw(x));
        } catch (oe) {
          re(oe);
        }
      }
      function W(x) {
        x.done ? Z(x.value) : _e(x.value).then(j, ke);
      }
      W((O = O.apply(R, $ || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: f } = e, { include_audio: d } = e, { i18n: h } = e, { upload: m } = e;
  const g = Xm();
  Ym(() => r = document.createElement("canvas"));
  const b = (R) => n(void 0, void 0, void 0, function* () {
    const I = R.target.value;
    yield Da(d, l, I).then((O) => n(void 0, void 0, void 0, function* () {
      D = O, t(7, s = o.find((_e) => _e.deviceId === I) || null), t(10, S = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Da(d, l).then((R) => n(this, void 0, void 0, function* () {
          t(9, B = !0), t(6, o = yield ym()), D = R;
        })).then(() => Sm(o)).then((R) => {
          t(6, o = R);
          const $ = D.getTracks().map((I) => {
            var O;
            return (O = I.getSettings()) === null || O === void 0 ? void 0 : O.deviceId;
          })[0];
          t(7, s = $ && R.find((I) => I.deviceId === $) || o[0]);
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
    (!a || a && q) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, R.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), f && (R.scale(-1, 1), R.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      ($) => {
        g(a ? "stream" : "capture", $);
      },
      "image/png",
      0.8
    ));
  }
  let q = !1, M = [], D, C, k;
  function y() {
    if (q) {
      k.stop();
      let R = new Blob(M, { type: C }), $ = new FileReader();
      $.onload = function(I) {
        return n(this, void 0, void 0, function* () {
          var O;
          if (I.target) {
            let _e = new File([R], "sample." + C.substring(6));
            const Z = yield d_([_e]);
            let re = ((O = yield m(Z, c)) === null || O === void 0 ? void 0 : O.filter(Boolean))[0];
            g("capture", re), g("stop_recording");
          }
        });
      }, $.readAsDataURL(R);
    } else {
      g("start_recording"), M = [];
      let R = ["video/webm", "video/mp4"];
      for (let $ of R)
        if (MediaRecorder.isTypeSupported($)) {
          C = $;
          break;
        }
      if (C === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      k = new MediaRecorder(D, { mimeType: C }), k.addEventListener("dataavailable", function($) {
        M.push($.data);
      }), k.start(200);
    }
    t(8, q = !q);
  }
  let B = !1;
  function A() {
    u === "image" && a && t(8, q = !q), u === "image" ? p() : y(), !q && D && (D.getTracks().forEach((R) => R.stop()), t(5, l.srcObject = null, l), t(9, B = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !_ && p();
    },
    500
  );
  let S = !1;
  function Y(R) {
    R.preventDefault(), R.stopPropagation(), t(10, S = !1);
  }
  function F(R) {
    Dm[R ? "unshift" : "push"](() => {
      l = R, t(5, l);
    });
  }
  const J = async () => w(), z = () => t(10, S = !0), me = () => t(10, S = !1);
  return i.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, _ = R.pending), "root" in R && t(16, c = R.root), "mode" in R && t(1, u = R.mode), "mirror_webcam" in R && t(2, f = R.mirror_webcam), "include_audio" in R && t(17, d = R.include_audio), "i18n" in R && t(3, h = R.i18n), "upload" in R && t(18, m = R.upload);
  }, [
    a,
    u,
    f,
    h,
    ks,
    l,
    o,
    s,
    q,
    B,
    S,
    b,
    w,
    A,
    Y,
    _,
    c,
    d,
    m,
    F,
    J,
    z,
    me
  ];
}
class Vm extends qm {
  constructor(e) {
    super(), Em(
      this,
      e,
      Um,
      Nm,
      Wm,
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
    return ks;
  }
}
const {
  SvelteComponent: O7,
  attr: $7,
  create_component: x7,
  destroy_component: N7,
  detach: U7,
  element: V7,
  init: P7,
  insert: K7,
  mount_component: Z7,
  noop: G7,
  safe_not_equal: J7,
  transition_in: Q7,
  transition_out: e9
} = window.__gradio__svelte__internal, { createEventDispatcher: t9 } = window.__gradio__svelte__internal, {
  SvelteComponent: n9,
  add_flush_callback: i9,
  append: l9,
  attr: o9,
  bind: s9,
  binding_callbacks: a9,
  bubble: r9,
  check_outros: _9,
  create_component: c9,
  create_slot: f9,
  destroy_component: u9,
  detach: d9,
  element: h9,
  empty: m9,
  get_all_dirty_from_scope: g9,
  get_slot_changes: b9,
  group_outros: p9,
  init: w9,
  insert: v9,
  listen: k9,
  mount_component: y9,
  noop: C9,
  safe_not_equal: S9,
  space: q9,
  toggle_class: z9,
  transition_in: B9,
  transition_out: D9,
  update_slot_base: L9
} = window.__gradio__svelte__internal, { createEventDispatcher: M9, tick: E9 } = window.__gradio__svelte__internal, {
  SvelteComponent: R9,
  attr: W9,
  check_outros: A9,
  create_component: X9,
  destroy_component: Y9,
  detach: I9,
  element: H9,
  group_outros: j9,
  init: T9,
  insert: F9,
  mount_component: O9,
  safe_not_equal: $9,
  toggle_class: x9,
  transition_in: N9,
  transition_out: U9
} = window.__gradio__svelte__internal, {
  SvelteComponent: V9,
  add_flush_callback: P9,
  assign: K9,
  bind: Z9,
  binding_callbacks: G9,
  check_outros: J9,
  create_component: Q9,
  destroy_component: ey,
  detach: ty,
  empty: ny,
  flush: iy,
  get_spread_object: ly,
  get_spread_update: oy,
  group_outros: sy,
  init: ay,
  insert: ry,
  mount_component: _y,
  safe_not_equal: cy,
  space: fy,
  transition_in: uy,
  transition_out: dy
} = window.__gradio__svelte__internal, {
  SvelteComponent: hy,
  append: my,
  attr: gy,
  detach: by,
  init: py,
  insert: wy,
  noop: vy,
  safe_not_equal: ky,
  set_style: yy,
  svg_element: Cy
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pm,
  append: Jt,
  attr: T,
  detach: Km,
  init: Zm,
  insert: Gm,
  noop: zo,
  safe_not_equal: Jm,
  set_style: Qt,
  svg_element: Xt
} = window.__gradio__svelte__internal;
function Qm(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = Xt("svg"), t = Xt("rect"), n = Xt("rect"), l = Xt("rect"), o = Xt("rect"), s = Xt("line"), r = Xt("line"), a = Xt("line"), _ = Xt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(l, "x", "2"), T(l, "y", "17"), T(l, "width", "5"), T(l, "height", "5"), T(l, "rx", "1"), T(l, "ry", "1"), T(l, "stroke-width", "2"), T(l, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), Qt(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Qt(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Qt(a, "stroke-width", "2px"), T(_, "x1", "19.5"), T(_, "y1", "8"), T(_, "x2", "19.5"), T(_, "y2", "16"), Qt(_, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Qt(e, "fill-rule", "evenodd"), Qt(e, "clip-rule", "evenodd"), Qt(e, "stroke-linecap", "round"), Qt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      Gm(c, e, u), Jt(e, t), Jt(e, n), Jt(e, l), Jt(e, o), Jt(e, s), Jt(e, r), Jt(e, a), Jt(e, _);
    },
    p: zo,
    i: zo,
    o: zo,
    d(c) {
      c && Km(e);
    }
  };
}
class e0 extends Pm {
  constructor(e) {
    super(), Zm(this, e, null, Qm, Jm, {});
  }
}
const {
  SvelteComponent: t0,
  append: n0,
  attr: bt,
  detach: i0,
  init: l0,
  insert: o0,
  noop: Bo,
  safe_not_equal: s0,
  set_style: Zi,
  svg_element: Aa
} = window.__gradio__svelte__internal;
function a0(i) {
  let e, t;
  return {
    c() {
      e = Aa("svg"), t = Aa("path"), bt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), bt(t, "fill", "none"), bt(t, "stroke-width", "2"), bt(e, "width", "100%"), bt(e, "height", "100%"), bt(e, "viewBox", "0 0 24 24"), bt(e, "version", "1.1"), bt(e, "xmlns", "http://www.w3.org/2000/svg"), bt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), bt(e, "xml:space", "preserve"), bt(e, "stroke", "currentColor"), Zi(e, "fill-rule", "evenodd"), Zi(e, "clip-rule", "evenodd"), Zi(e, "stroke-linecap", "round"), Zi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      o0(n, e, l), n0(e, t);
    },
    p: Bo,
    i: Bo,
    o: Bo,
    d(n) {
      n && i0(e);
    }
  };
}
class r0 extends t0 {
  constructor(e) {
    super(), l0(this, e, null, a0, s0, {});
  }
}
const {
  SvelteComponent: _0,
  append: c0,
  attr: pt,
  detach: f0,
  init: u0,
  insert: d0,
  noop: Do,
  safe_not_equal: h0,
  set_style: Gi,
  svg_element: Xa
} = window.__gradio__svelte__internal;
function m0(i) {
  let e, t;
  return {
    c() {
      e = Xa("svg"), t = Xa("path"), pt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), pt(t, "fill", "none"), pt(t, "stroke-width", "2"), pt(e, "width", "100%"), pt(e, "height", "100%"), pt(e, "viewBox", "0 0 24 24"), pt(e, "version", "1.1"), pt(e, "xmlns", "http://www.w3.org/2000/svg"), pt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), pt(e, "xml:space", "preserve"), pt(e, "stroke", "currentColor"), Gi(e, "fill-rule", "evenodd"), Gi(e, "clip-rule", "evenodd"), Gi(e, "stroke-linecap", "round"), Gi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      d0(n, e, l), c0(e, t);
    },
    p: Do,
    i: Do,
    o: Do,
    d(n) {
      n && f0(e);
    }
  };
}
class g0 extends _0 {
  constructor(e) {
    super(), u0(this, e, null, m0, h0, {});
  }
}
const {
  SvelteComponent: b0,
  append: Ya,
  attr: Yt,
  detach: p0,
  init: w0,
  insert: v0,
  noop: Lo,
  safe_not_equal: k0,
  set_style: Ji,
  svg_element: Mo
} = window.__gradio__svelte__internal;
function y0(i) {
  let e, t, n;
  return {
    c() {
      e = Mo("svg"), t = Mo("path"), n = Mo("path"), Yt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Yt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Yt(e, "width", "100%"), Yt(e, "height", "100%"), Yt(e, "viewBox", "0 0 24 24"), Yt(e, "xmlns", "http://www.w3.org/2000/svg"), Yt(e, "fill", "none"), Yt(e, "stroke", "currentColor"), Yt(e, "stroke-width", "2"), Ji(e, "fill-rule", "evenodd"), Ji(e, "clip-rule", "evenodd"), Ji(e, "stroke-linecap", "round"), Ji(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      v0(l, e, o), Ya(e, t), Ya(e, n);
    },
    p: Lo,
    i: Lo,
    o: Lo,
    d(l) {
      l && p0(e);
    }
  };
}
class C0 extends b0 {
  constructor(e) {
    super(), w0(this, e, null, y0, k0, {});
  }
}
const {
  SvelteComponent: S0,
  append: q0,
  attr: en,
  detach: z0,
  init: B0,
  insert: D0,
  noop: Eo,
  safe_not_equal: L0,
  set_style: Qi,
  svg_element: Ia
} = window.__gradio__svelte__internal;
function M0(i) {
  let e, t;
  return {
    c() {
      e = Ia("svg"), t = Ia("path"), en(t, "d", "M4 6h16M4 12h16M4 18h10"), en(e, "width", "100%"), en(e, "height", "100%"), en(e, "viewBox", "0 0 24 24"), en(e, "xmlns", "http://www.w3.org/2000/svg"), en(e, "fill", "none"), en(e, "stroke", "currentColor"), en(e, "stroke-width", "2"), Qi(e, "fill-rule", "evenodd"), Qi(e, "clip-rule", "evenodd"), Qi(e, "stroke-linecap", "round"), Qi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      D0(n, e, l), q0(e, t);
    },
    p: Eo,
    i: Eo,
    o: Eo,
    d(n) {
      n && z0(e);
    }
  };
}
class E0 extends S0 {
  constructor(e) {
    super(), B0(this, e, null, M0, L0, {});
  }
}
const {
  SvelteComponent: R0,
  append: Ha,
  attr: st,
  detach: W0,
  init: A0,
  insert: X0,
  noop: Ro,
  safe_not_equal: Y0,
  set_style: el,
  svg_element: Wo
} = window.__gradio__svelte__internal;
function I0(i) {
  let e, t, n;
  return {
    c() {
      e = Wo("svg"), t = Wo("path"), n = Wo("line"), st(t, "d", "M4 6h16M4 12h16M4 18h10"), st(n, "x1", "2"), st(n, "y1", "2"), st(n, "x2", "22"), st(n, "y2", "22"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "fill", "none"), st(e, "stroke", "currentColor"), st(e, "stroke-width", "2"), el(e, "fill-rule", "evenodd"), el(e, "clip-rule", "evenodd"), el(e, "stroke-linecap", "round"), el(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      X0(l, e, o), Ha(e, t), Ha(e, n);
    },
    p: Ro,
    i: Ro,
    o: Ro,
    d(l) {
      l && W0(e);
    }
  };
}
class H0 extends R0 {
  constructor(e) {
    super(), A0(this, e, null, I0, Y0, {});
  }
}
const {
  SvelteComponent: j0,
  append: T0,
  attr: tn,
  detach: F0,
  init: O0,
  insert: $0,
  noop: Ao,
  safe_not_equal: x0,
  set_style: tl,
  svg_element: ja
} = window.__gradio__svelte__internal;
function N0(i) {
  let e, t;
  return {
    c() {
      e = ja("svg"), t = ja("path"), tn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), tn(e, "width", "100%"), tn(e, "height", "100%"), tn(e, "viewBox", "0 0 24 24"), tn(e, "fill", "none"), tn(e, "stroke", "currentColor"), tn(e, "stroke-width", "2"), tl(e, "fill-rule", "evenodd"), tl(e, "clip-rule", "evenodd"), tl(e, "stroke-linecap", "round"), tl(e, "stroke-linejoin", "round"), tn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      $0(n, e, l), T0(e, t);
    },
    p: Ao,
    i: Ao,
    o: Ao,
    d(n) {
      n && F0(e);
    }
  };
}
class z_ extends j0 {
  constructor(e) {
    super(), O0(this, e, null, N0, x0, {});
  }
}
const {
  SvelteComponent: U0,
  append: V0,
  attr: nn,
  detach: P0,
  init: K0,
  insert: Z0,
  noop: Xo,
  safe_not_equal: G0,
  set_style: nl,
  svg_element: Ta
} = window.__gradio__svelte__internal;
function J0(i) {
  let e, t;
  return {
    c() {
      e = Ta("svg"), t = Ta("path"), nn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), nn(e, "width", "100%"), nn(e, "height", "100%"), nn(e, "viewBox", "0 0 24 24"), nn(e, "fill", "none"), nn(e, "stroke", "currentColor"), nn(e, "stroke-width", "2"), nl(e, "fill-rule", "evenodd"), nl(e, "clip-rule", "evenodd"), nl(e, "stroke-linecap", "round"), nl(e, "stroke-linejoin", "round"), nn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      Z0(n, e, l), V0(e, t);
    },
    p: Xo,
    i: Xo,
    o: Xo,
    d(n) {
      n && P0(e);
    }
  };
}
class Q0 extends U0 {
  constructor(e) {
    super(), K0(this, e, null, J0, G0, {});
  }
}
const {
  SvelteComponent: eg,
  append: il,
  attr: ue,
  detach: tg,
  init: ng,
  insert: ig,
  noop: Yo,
  safe_not_equal: lg,
  set_style: at,
  svg_element: bi
} = window.__gradio__svelte__internal;
function og(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = bi("svg"), t = bi("circle"), n = bi("line"), l = bi("line"), o = bi("line"), ue(t, "cx", "9"), ue(t, "cy", "9"), ue(t, "r", "6"), at(t, "fill", "none"), at(t, "stroke-width", "2px"), ue(n, "x1", "13"), ue(n, "y1", "13"), ue(n, "x2", "20"), ue(n, "y2", "20"), at(n, "fill", "none"), at(n, "stroke-width", "2px"), ue(l, "x1", "6"), ue(l, "y1", "9"), ue(l, "x2", "12"), ue(l, "y2", "9"), at(l, "fill", "none"), at(l, "stroke-width", "2px"), ue(o, "x1", "9"), ue(o, "y1", "6"), ue(o, "x2", "9"), ue(o, "y2", "12"), at(o, "fill", "none"), at(o, "stroke-width", "2px"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "version", "1.1"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ue(e, "xml:space", "preserve"), ue(e, "stroke", "currentColor"), at(e, "fill-rule", "evenodd"), at(e, "clip-rule", "evenodd"), at(e, "stroke-linecap", "round"), at(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      ig(s, e, r), il(e, t), il(e, n), il(e, l), il(e, o);
    },
    p: Yo,
    i: Yo,
    o: Yo,
    d(s) {
      s && tg(e);
    }
  };
}
class sg extends eg {
  constructor(e) {
    super(), ng(this, e, null, og, lg, {});
  }
}
const {
  SvelteComponent: ag,
  append: Io,
  attr: ye,
  detach: rg,
  init: _g,
  insert: cg,
  noop: Ho,
  safe_not_equal: fg,
  set_style: St,
  svg_element: ll
} = window.__gradio__svelte__internal;
function ug(i) {
  let e, t, n, l;
  return {
    c() {
      e = ll("svg"), t = ll("circle"), n = ll("line"), l = ll("line"), ye(t, "cx", "9"), ye(t, "cy", "9"), ye(t, "r", "6"), St(t, "fill", "none"), St(t, "stroke-width", "2px"), ye(n, "x1", "13"), ye(n, "y1", "13"), ye(n, "x2", "20"), ye(n, "y2", "20"), St(n, "fill", "none"), St(n, "stroke-width", "2px"), ye(l, "x1", "6"), ye(l, "y1", "9"), ye(l, "x2", "12"), ye(l, "y2", "9"), St(l, "fill", "none"), St(l, "stroke-width", "2px"), ye(e, "width", "100%"), ye(e, "height", "100%"), ye(e, "viewBox", "0 0 24 24"), ye(e, "version", "1.1"), ye(e, "xmlns", "http://www.w3.org/2000/svg"), ye(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ye(e, "xml:space", "preserve"), ye(e, "stroke", "currentColor"), St(e, "fill-rule", "evenodd"), St(e, "clip-rule", "evenodd"), St(e, "stroke-linecap", "round"), St(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      cg(o, e, s), Io(e, t), Io(e, n), Io(e, l);
    },
    p: Ho,
    i: Ho,
    o: Ho,
    d(o) {
      o && rg(e);
    }
  };
}
class dg extends ag {
  constructor(e) {
    super(), _g(this, e, null, ug, fg, {});
  }
}
const {
  SvelteComponent: hg,
  append: jo,
  attr: xe,
  detach: mg,
  init: gg,
  insert: bg,
  noop: To,
  safe_not_equal: pg,
  set_style: qt,
  svg_element: ol
} = window.__gradio__svelte__internal;
function wg(i) {
  let e, t, n, l;
  return {
    c() {
      e = ol("svg"), t = ol("rect"), n = ol("path"), l = ol("path"), xe(t, "x", "3"), xe(t, "y", "3"), xe(t, "width", "18"), xe(t, "height", "18"), qt(t, "fill", "none"), qt(t, "stroke-width", "2px"), xe(n, "d", "M 7 7 L 10 10 M 7 10 L 10 7"), qt(n, "fill", "none"), qt(n, "stroke-width", "2px"), xe(l, "d", "M 14 17 L 17 14 M 14 14 L 17 17"), qt(l, "fill", "none"), qt(l, "stroke-width", "2px"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "version", "1.1"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), xe(e, "xml:space", "preserve"), xe(e, "stroke", "currentColor"), qt(e, "fill-rule", "evenodd"), qt(e, "clip-rule", "evenodd"), qt(e, "stroke-linecap", "round"), qt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      bg(o, e, s), jo(e, t), jo(e, n), jo(e, l);
    },
    p: To,
    i: To,
    o: To,
    d(o) {
      o && mg(e);
    }
  };
}
class vg extends hg {
  constructor(e) {
    super(), gg(this, e, null, wg, pg, {});
  }
}
const {
  SvelteComponent: kg,
  append: Fa,
  attr: Fo,
  bubble: Oa,
  create_component: yg,
  destroy_component: Cg,
  detach: B_,
  element: $a,
  init: Sg,
  insert: D_,
  listen: Oo,
  mount_component: qg,
  run_all: zg,
  safe_not_equal: Bg,
  set_data: Dg,
  set_input_value: xa,
  space: Lg,
  text: Mg,
  transition_in: Eg,
  transition_out: Rg
} = window.__gradio__svelte__internal, { createEventDispatcher: Wg, afterUpdate: Ag } = window.__gradio__svelte__internal;
function Xg(i) {
  let e;
  return {
    c() {
      e = Mg(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      D_(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && Dg(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && B_(e);
    }
  };
}
function Yg(i) {
  let e, t, n, l, o, s, r;
  return t = new Ar({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [Xg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = $a("label"), yg(t.$$.fragment), n = Lg(), l = $a("input"), Fo(l, "type", "color"), l.disabled = /*disabled*/
      i[3], Fo(l, "class", "svelte-16l8u73"), Fo(e, "class", "block");
    },
    m(a, _) {
      D_(a, e, _), qg(t, e, null), Fa(e, n), Fa(e, l), xa(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        Oo(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Oo(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Oo(
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
      1 && xa(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (Eg(t.$$.fragment, a), o = !0);
    },
    o(a) {
      Rg(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && B_(e), Cg(t), s = !1, zg(r);
    }
  };
}
function Ig(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = Wg();
  function c() {
    _("change", n), l || _("input");
  }
  Ag(() => {
    t(5, l = !1);
  });
  function u(h) {
    Oa.call(this, i, h);
  }
  function f(h) {
    Oa.call(this, i, h);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return i.$$set = (h) => {
    "value" in h && t(0, n = h.value), "value_is_output" in h && t(5, l = h.value_is_output), "label" in h && t(1, o = h.label), "info" in h && t(2, s = h.info), "disabled" in h && t(3, r = h.disabled), "show_label" in h && t(4, a = h.show_label);
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
class Hg extends kg {
  constructor(e) {
    super(), Sg(this, e, Ig, Yg, Bg, {
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
  SvelteComponent: Sy,
  append: qy,
  attr: zy,
  component_subscribe: By,
  detach: Dy,
  element: Ly,
  init: My,
  insert: Ey,
  noop: Ry,
  safe_not_equal: Wy,
  set_style: Ay,
  svg_element: Xy,
  toggle_class: Yy
} = window.__gradio__svelte__internal, { onMount: Iy } = window.__gradio__svelte__internal, {
  SvelteComponent: Hy,
  append: jy,
  attr: Ty,
  binding_callbacks: Fy,
  check_outros: Oy,
  create_component: $y,
  create_slot: xy,
  destroy_component: Ny,
  destroy_each: Uy,
  detach: Vy,
  element: Py,
  empty: Ky,
  ensure_array_like: Zy,
  get_all_dirty_from_scope: Gy,
  get_slot_changes: Jy,
  group_outros: Qy,
  init: eC,
  insert: tC,
  mount_component: nC,
  noop: iC,
  safe_not_equal: lC,
  set_data: oC,
  set_style: sC,
  space: aC,
  text: rC,
  toggle_class: _C,
  transition_in: cC,
  transition_out: fC,
  update_slot_base: uC
} = window.__gradio__svelte__internal, { tick: dC } = window.__gradio__svelte__internal, { onDestroy: hC } = window.__gradio__svelte__internal, {
  SvelteComponent: mC,
  add_render_callback: gC,
  append: bC,
  attr: pC,
  bubble: wC,
  check_outros: vC,
  create_component: kC,
  create_in_transition: yC,
  create_out_transition: CC,
  destroy_component: SC,
  detach: qC,
  element: zC,
  group_outros: BC,
  init: DC,
  insert: LC,
  listen: MC,
  mount_component: EC,
  run_all: RC,
  safe_not_equal: WC,
  set_data: AC,
  space: XC,
  stop_propagation: YC,
  text: IC,
  transition_in: HC,
  transition_out: jC
} = window.__gradio__svelte__internal, { createEventDispatcher: TC, onMount: FC } = window.__gradio__svelte__internal, {
  SvelteComponent: OC,
  append: $C,
  attr: xC,
  bubble: NC,
  check_outros: UC,
  create_animation: VC,
  create_component: PC,
  destroy_component: KC,
  detach: ZC,
  element: GC,
  ensure_array_like: JC,
  fix_and_outro_and_destroy_block: QC,
  fix_position: eS,
  group_outros: tS,
  init: nS,
  insert: iS,
  mount_component: lS,
  noop: oS,
  safe_not_equal: sS,
  set_style: aS,
  space: rS,
  transition_in: _S,
  transition_out: cS,
  update_keyed_each: fS
} = window.__gradio__svelte__internal, {
  SvelteComponent: uS,
  attr: dS,
  detach: hS,
  element: mS,
  init: gS,
  insert: bS,
  noop: pS,
  safe_not_equal: wS,
  set_style: vS,
  toggle_class: kS
} = window.__gradio__svelte__internal, {
  SvelteComponent: yS,
  add_flush_callback: CS,
  assign: SS,
  bind: qS,
  binding_callbacks: zS,
  create_component: BS,
  destroy_component: DS,
  detach: LS,
  flush: MS,
  get_spread_object: ES,
  get_spread_update: RS,
  init: WS,
  insert: AS,
  mount_component: XS,
  safe_not_equal: YS,
  space: IS,
  transition_in: HS,
  transition_out: jS
} = window.__gradio__svelte__internal;
var L_ = (i) => {
  throw TypeError(i);
}, M_ = (i, e, t) => e.has(i) || L_("Cannot " + t), pi = (i, e, t) => (M_(i, e, "read from private field"), e.get(i)), jg = (i, e, t) => e.has(i) ? L_("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Tg = (i, e, t, n) => (M_(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var sn;
class TS extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = pi(this, sn) + t; ; ) {
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
        Tg(this, sn, t);
      },
      flush: (t) => {
        if (pi(this, sn) === "")
          return;
        const n = e.allowCR && pi(this, sn).endsWith("\r") ? pi(this, sn).slice(0, -1) : pi(this, sn);
        t.enqueue(n);
      }
    }), jg(this, sn, "");
  }
}
sn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Fg,
  append: E_,
  attr: de,
  bubble: Og,
  check_outros: $g,
  create_slot: R_,
  detach: Ii,
  element: Fl,
  empty: xg,
  get_all_dirty_from_scope: W_,
  get_slot_changes: A_,
  group_outros: Ng,
  init: Ug,
  insert: Hi,
  listen: Vg,
  safe_not_equal: Pg,
  set_style: Ue,
  space: X_,
  src_url_equal: zl,
  toggle_class: Kn,
  transition_in: Bl,
  transition_out: Dl,
  update_slot_base: Y_
} = window.__gradio__svelte__internal;
function Kg(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Na(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = R_(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Fl("button"), r && r.c(), t = X_(), _ && _.c(), de(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), de(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Kn(e, "hidden", !/*visible*/
      i[2]), Ue(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ue(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ue(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, u) {
      Hi(c, e, u), r && r.m(e, null), E_(e, t), _ && _.m(e, null), l = !0, o || (s = Vg(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = Na(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || u & /*$$scope*/
      2048) && Y_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? A_(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : W_(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && de(e, "class", n), (!l || u & /*elem_id*/
      1) && de(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && Kn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Ue(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Ue(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Ue(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (Bl(_, c), l = !0);
    },
    o(c) {
      Dl(_, c), l = !1;
    },
    d(c) {
      c && Ii(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function Zg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Ua(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = R_(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Fl("a"), o && o.c(), t = X_(), r && r.c(), de(
        e,
        "href",
        /*link*/
        i[6]
      ), de(e, "rel", "noopener noreferrer"), de(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), de(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), de(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Kn(e, "hidden", !/*visible*/
      i[2]), Kn(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Ue(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ue(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Ue(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ue(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, _) {
      Hi(a, e, _), o && o.m(e, null), E_(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = Ua(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && Y_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? A_(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : W_(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && de(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && de(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && de(e, "class", n), (!l || _ & /*elem_id*/
      1) && de(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && Kn(e, "hidden", !/*visible*/
      a[2]), (!l || _ & /*size, variant, elem_classes, disabled*/
      282) && Kn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), _ & /*scale*/
      512 && Ue(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && Ue(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && Ue(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && Ue(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (Bl(r, a), l = !0);
    },
    o(a) {
      Dl(r, a), l = !1;
    },
    d(a) {
      a && Ii(e), o && o.d(), r && r.d(a);
    }
  };
}
function Na(i) {
  let e, t, n;
  return {
    c() {
      e = Fl("img"), de(e, "class", "button-icon svelte-8huxfn"), zl(e.src, t = /*icon*/
      i[7].url) || de(e, "src", t), de(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Hi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !zl(e.src, t = /*icon*/
      l[7].url) && de(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && de(e, "alt", n);
    },
    d(l) {
      l && Ii(e);
    }
  };
}
function Ua(i) {
  let e, t, n;
  return {
    c() {
      e = Fl("img"), de(e, "class", "button-icon svelte-8huxfn"), zl(e.src, t = /*icon*/
      i[7].url) || de(e, "src", t), de(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Hi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !zl(e.src, t = /*icon*/
      l[7].url) && de(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && de(e, "alt", n);
    },
    d(l) {
      l && Ii(e);
    }
  };
}
function Gg(i) {
  let e, t, n, l;
  const o = [Zg, Kg], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = xg();
    },
    m(a, _) {
      s[e].m(a, _), Hi(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Ng(), Dl(s[c], 1, 1, () => {
        s[c] = null;
      }), $g(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Bl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Bl(t), l = !0);
    },
    o(a) {
      Dl(t), l = !1;
    },
    d(a) {
      a && Ii(n), s[e].d(a);
    }
  };
}
function Jg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: f = null } = e, { disabled: d = !1 } = e, { scale: h = null } = e, { min_width: m = void 0 } = e;
  function g(b) {
    Og.call(this, i, b);
  }
  return i.$$set = (b) => {
    "elem_id" in b && t(0, o = b.elem_id), "elem_classes" in b && t(1, s = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, _ = b.size), "value" in b && t(5, c = b.value), "link" in b && t(6, u = b.link), "icon" in b && t(7, f = b.icon), "disabled" in b && t(8, d = b.disabled), "scale" in b && t(9, h = b.scale), "min_width" in b && t(10, m = b.min_width), "$$scope" in b && t(11, l = b.$$scope);
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
    h,
    m,
    l,
    n,
    g
  ];
}
class ss extends Fg {
  constructor(e) {
    super(), Ug(this, e, Jg, Gg, Pg, {
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
  SvelteComponent: FS,
  create_component: OS,
  destroy_component: $S,
  detach: xS,
  init: NS,
  insert: US,
  mount_component: VS,
  safe_not_equal: PS,
  set_data: KS,
  text: ZS,
  transition_in: GS,
  transition_out: JS
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qg,
  add_render_callback: I_,
  append: sl,
  attr: et,
  binding_callbacks: Va,
  check_outros: eb,
  create_bidirectional_transition: Pa,
  destroy_each: tb,
  detach: Ei,
  element: Ll,
  empty: nb,
  ensure_array_like: Ka,
  group_outros: ib,
  init: lb,
  insert: Ri,
  listen: as,
  prevent_default: ob,
  run_all: sb,
  safe_not_equal: ab,
  set_data: rb,
  set_style: On,
  space: rs,
  text: _b,
  toggle_class: zt,
  transition_in: $o,
  transition_out: Za
} = window.__gradio__svelte__internal, { createEventDispatcher: cb } = window.__gradio__svelte__internal;
function Ga(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Ja(i) {
  let e, t, n, l, o, s = Ka(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Qa(Ga(i, s, a));
  return {
    c() {
      e = Ll("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      et(e, "class", "options svelte-yuohum"), et(e, "role", "listbox"), On(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), On(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), On(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, _) {
      Ri(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = as(e, "mousedown", ob(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Ka(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const u = Ga(a, s, c);
          r[c] ? r[c].p(u, _) : (r[c] = Qa(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && On(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && On(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && On(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && I_(() => {
        n && (t || (t = Pa(e, ea, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Pa(e, ea, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Ei(e), tb(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Qa(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = Ll("li"), t = Ll("span"), t.textContent = "✓", n = rs(), o = _b(l), s = rs(), et(t, "class", "inner-item svelte-yuohum"), zt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), et(e, "class", "item svelte-yuohum"), et(e, "data-index", r = /*index*/
      i[26]), et(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), et(e, "data-testid", "dropdown-option"), et(e, "role", "option"), et(e, "aria-selected", _ = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), zt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), zt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), zt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), zt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      Ri(c, e, u), sl(e, t), sl(e, n), sl(e, o), sl(e, s);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && zt(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && rb(o, l), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && et(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && et(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && et(e, "aria-selected", _), u & /*selected_indices, filtered_indices*/
      18 && zt(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && zt(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && zt(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && zt(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && Ei(e);
    }
  };
}
function fb(i) {
  let e, t, n, l, o;
  I_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Ja(i)
  );
  return {
    c() {
      e = Ll("div"), t = rs(), s && s.c(), n = nb(), et(e, "class", "reference");
    },
    m(r, a) {
      Ri(r, e, a), i[20](e), Ri(r, t, a), s && s.m(r, a), Ri(r, n, a), l || (o = [
        as(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        as(
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
      12 && $o(s, 1)) : (s = Ja(r), s.c(), $o(s, 1), s.m(n.parentNode, n)) : s && (ib(), Za(s, 1, 1, () => {
        s = null;
      }), eb());
    },
    i(r) {
      $o(s);
    },
    o(r) {
      Za(s);
    },
    d(r) {
      r && (Ei(e), Ei(t), Ei(n)), i[20](null), s && s.d(r), l = !1, sb(o);
    }
  };
}
function ub(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, u, f, d, h, m, g, b, w, p;
  function q() {
    const { top: S, bottom: Y } = m.getBoundingClientRect();
    t(16, u = S), t(17, f = p - Y);
  }
  let M = null;
  function D() {
    r && (M !== null && clearTimeout(M), M = setTimeout(
      () => {
        q(), M = null;
      },
      10
    ));
  }
  const C = cb();
  function k() {
    t(11, p = window.innerHeight);
  }
  function y(S) {
    Va[S ? "unshift" : "push"](() => {
      m = S, t(6, m);
    });
  }
  const B = (S) => C("change", S);
  function A(S) {
    Va[S ? "unshift" : "push"](() => {
      g = S, t(7, g);
    });
  }
  return i.$$set = (S) => {
    "choices" in S && t(0, o = S.choices), "filtered_indices" in S && t(1, s = S.filtered_indices), "show_options" in S && t(2, r = S.show_options), "disabled" in S && t(3, a = S.disabled), "selected_indices" in S && t(4, _ = S.selected_indices), "active_index" in S && t(5, c = S.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && m) {
        if (g && _.length > 0) {
          let Y = g.querySelectorAll("li");
          for (const F of Array.from(Y))
            if (F.getAttribute("data-index") === _[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, F.offsetTop);
              break;
            }
        }
        q();
        const S = t(15, l = m.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (S == null ? void 0 : S.height) || 0), t(8, h = (S == null ? void 0 : S.width) || 0);
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
    m,
    g,
    h,
    b,
    w,
    p,
    D,
    C,
    n,
    l,
    u,
    f,
    d,
    k,
    y,
    B,
    A
  ];
}
class db extends Qg {
  constructor(e) {
    super(), lb(this, e, ub, fb, ab, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function hb(i, e) {
  return (i % e + e) % e;
}
function er(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function mb(i, e, t) {
  i("change", e), t || i("input");
}
function gb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[hb(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: QS,
  append: eq,
  attr: tq,
  binding_callbacks: nq,
  check_outros: iq,
  create_component: lq,
  destroy_component: oq,
  destroy_each: sq,
  detach: aq,
  element: rq,
  ensure_array_like: _q,
  group_outros: cq,
  init: fq,
  insert: uq,
  listen: dq,
  mount_component: hq,
  prevent_default: mq,
  run_all: gq,
  safe_not_equal: bq,
  set_data: pq,
  set_input_value: wq,
  space: vq,
  text: kq,
  toggle_class: yq,
  transition_in: Cq,
  transition_out: Sq
} = window.__gradio__svelte__internal, { afterUpdate: qq, createEventDispatcher: zq } = window.__gradio__svelte__internal, {
  SvelteComponent: bb,
  append: hn,
  attr: Qe,
  binding_callbacks: pb,
  check_outros: wb,
  create_component: _s,
  destroy_component: cs,
  detach: ys,
  element: Nn,
  group_outros: vb,
  init: kb,
  insert: Cs,
  listen: wi,
  mount_component: fs,
  run_all: yb,
  safe_not_equal: Cb,
  set_data: Sb,
  set_input_value: tr,
  space: xo,
  text: qb,
  toggle_class: $n,
  transition_in: Un,
  transition_out: Bi
} = window.__gradio__svelte__internal, { onMount: zb } = window.__gradio__svelte__internal, { createEventDispatcher: Bb, afterUpdate: Db } = window.__gradio__svelte__internal;
function Lb(i) {
  let e;
  return {
    c() {
      e = qb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Cs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Sb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && ys(e);
    }
  };
}
function nr(i) {
  let e, t, n;
  return t = new hs({}), {
    c() {
      e = Nn("div"), _s(t.$$.fragment), Qe(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      Cs(l, e, o), fs(t, e, null), n = !0;
    },
    i(l) {
      n || (Un(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Bi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ys(e), cs(t);
    }
  };
}
function Mb(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, h;
  t = new Ar({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Lb] },
      $$scope: { ctx: i }
    }
  });
  let m = !/*disabled*/
  i[3] && nr();
  return u = new db({
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
      e = Nn("div"), _s(t.$$.fragment), n = xo(), l = Nn("div"), o = Nn("div"), s = Nn("div"), r = Nn("input"), _ = xo(), m && m.c(), c = xo(), _s(u.$$.fragment), Qe(r, "role", "listbox"), Qe(r, "aria-controls", "dropdown-options"), Qe(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Qe(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Qe(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Qe(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], $n(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Qe(s, "class", "secondary-wrap svelte-1m1zvyj"), Qe(o, "class", "wrap-inner svelte-1m1zvyj"), $n(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), Qe(l, "class", "wrap svelte-1m1zvyj"), Qe(e, "class", "svelte-1m1zvyj"), $n(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      Cs(g, e, b), fs(t, e, null), hn(e, n), hn(e, l), hn(l, o), hn(o, s), hn(s, r), tr(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), hn(s, _), m && m.m(s, null), hn(l, c), fs(u, l, null), f = !0, d || (h = [
        wi(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        wi(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        wi(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        wi(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        wi(
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
      4096) && Qe(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!f || b[0] & /*label*/
      1) && Qe(
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
      g[9] && tr(
        r,
        /*input_text*/
        g[9]
      ), (!f || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && $n(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? m && (vb(), Bi(m, 1, 1, () => {
        m = null;
      }), wb()) : m ? b[0] & /*disabled*/
      8 && Un(m, 1) : (m = nr(), m.c(), Un(m, 1), m.m(s, null)), (!f || b[0] & /*show_options*/
      4096) && $n(
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
      32) && $n(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      f || (Un(t.$$.fragment, g), Un(m), Un(u.$$.fragment, g), f = !0);
    },
    o(g) {
      Bi(t.$$.fragment, g), Bi(m), Bi(u.$$.fragment, g), f = !1;
    },
    d(g) {
      g && ys(e), cs(t), i[29](null), m && m.d(), cs(u), d = !1, yb(h);
    }
  };
}
function Eb(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: u } = e, { container: f = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: h = !0 } = e, m, g = !1, b, w, p = "", q = "", M = !1, D = [], C = null, k = null, y;
  const B = Bb();
  o ? (y = a.map((I) => I[1]).indexOf(o), k = y, k === -1 ? (s = o, k = null) : ([p, s] = a[k], q = p), S()) : a.length > 0 && (y = 0, k = 0, [p, o] = a[k], s = o, q = p);
  function A() {
    t(13, b = a.map((I) => I[0])), t(24, w = a.map((I) => I[1]));
  }
  function S() {
    A(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, k = null)) : w.includes(o) ? (t(9, p = b[w.indexOf(o)]), t(11, k = w.indexOf(o))) : d ? (t(9, p = o), t(11, k = null)) : (t(9, p = ""), t(11, k = null)), t(27, y = k);
  }
  function Y(I) {
    if (t(11, k = parseInt(I.detail.target.dataset.index)), isNaN(k)) {
      t(11, k = null);
      return;
    }
    t(12, g = !1), t(14, C = null), m.blur();
  }
  function F(I) {
    t(10, D = a.map((O, _e) => _e)), t(12, g = !0), B("focus");
  }
  function J() {
    d ? t(20, o = p) : t(9, p = b[w.indexOf(o)]), t(12, g = !1), t(14, C = null), B("blur");
  }
  function z(I) {
    t(12, [g, C] = gb(I, C, D), g, (t(14, C), t(2, a), t(23, _), t(6, d), t(9, p), t(10, D), t(8, m), t(25, q), t(11, k), t(27, y), t(26, M), t(24, w))), I.key === "Enter" && (C !== null ? (t(11, k = C), t(12, g = !1), m.blur(), t(14, C = null)) : b.includes(p) ? (t(11, k = b.indexOf(p)), t(12, g = !1), t(14, C = null), m.blur()) : d && (t(20, o = p), t(11, k = null), t(12, g = !1), t(14, C = null), m.blur()), B("enter", o));
  }
  Db(() => {
    t(21, r = !1), t(26, M = !0);
  }), zb(() => {
    m.focus();
  });
  function me() {
    p = this.value, t(9, p), t(11, k), t(27, y), t(26, M), t(2, a), t(24, w);
  }
  function R(I) {
    pb[I ? "unshift" : "push"](() => {
      m = I, t(8, m);
    });
  }
  const $ = (I) => B("key_up", { key: I.key, input_value: p });
  return i.$$set = (I) => {
    "label" in I && t(0, n = I.label), "info" in I && t(1, l = I.info), "value" in I && t(20, o = I.value), "value_is_output" in I && t(21, r = I.value_is_output), "choices" in I && t(2, a = I.choices), "disabled" in I && t(3, c = I.disabled), "show_label" in I && t(4, u = I.show_label), "container" in I && t(5, f = I.container), "allow_custom_value" in I && t(6, d = I.allow_custom_value), "filterable" in I && t(7, h = I.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && k !== y && k !== null && M && (t(9, [p, o] = a[k], p, (t(20, o), t(11, k), t(27, y), t(26, M), t(2, a), t(24, w))), t(27, y = k), B("select", {
      index: k,
      value: w[k],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (S(), mb(B, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && A(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (d || S(), t(23, _ = a), t(10, D = er(a, p)), !d && D.length > 0 && t(14, C = D[0]), m == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== q && (t(10, D = er(a, p)), t(25, q = p), !d && D.length > 0 && t(14, C = D[0]));
  }, [
    n,
    l,
    a,
    c,
    u,
    f,
    d,
    h,
    m,
    p,
    D,
    k,
    g,
    b,
    C,
    B,
    Y,
    F,
    J,
    z,
    o,
    r,
    s,
    _,
    w,
    q,
    M,
    y,
    me,
    R,
    $
  ];
}
class Rb extends bb {
  constructor(e) {
    super(), kb(
      this,
      e,
      Eb,
      Mb,
      Cb,
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
  SvelteComponent: Bq,
  attr: Dq,
  detach: Lq,
  element: Mq,
  init: Eq,
  insert: Rq,
  noop: Wq,
  safe_not_equal: Aq,
  toggle_class: Xq
} = window.__gradio__svelte__internal, {
  SvelteComponent: Yq,
  add_flush_callback: Iq,
  assign: Hq,
  bind: jq,
  binding_callbacks: Tq,
  check_outros: Fq,
  create_component: Oq,
  destroy_component: $q,
  detach: xq,
  empty: Nq,
  get_spread_object: Uq,
  get_spread_update: Vq,
  group_outros: Pq,
  init: Kq,
  insert: Zq,
  mount_component: Gq,
  safe_not_equal: Jq,
  space: Qq,
  transition_in: ez,
  transition_out: tz
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wb,
  append: rt,
  attr: Zn,
  check_outros: us,
  create_component: Cn,
  destroy_component: Sn,
  detach: oi,
  element: Bt,
  group_outros: ds,
  init: Ab,
  insert: si,
  listen: Xb,
  mount_component: qn,
  safe_not_equal: Yb,
  set_style: Gn,
  space: vi,
  text: Ss,
  toggle_class: ir,
  transition_in: Re,
  transition_out: tt
} = window.__gradio__svelte__internal, { createEventDispatcher: Ib } = window.__gradio__svelte__internal, { onMount: Hb } = window.__gradio__svelte__internal;
function lr(i) {
  let e, t, n, l, o, s, r;
  const a = [Tb, jb], _ = [];
  function c(u, f) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = Bt("div"), t = Bt("button"), l.c(), Zn(t, "class", "icon svelte-d9x7u0"), Zn(t, "aria-label", "Lock label detail"), ir(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Gn(e, "margin-right", "8px");
    },
    m(u, f) {
      si(u, e, f), rt(e, t), _[n].m(t, null), o = !0, s || (r = Xb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(u, f) {
      let d = n;
      n = c(u), n !== d && (ds(), tt(_[d], 1, 1, () => {
        _[d] = null;
      }), us(), l = _[n], l || (l = _[n] = a[n](u), l.c()), Re(l, 1), l.m(t, null)), (!o || f & /*labelDetailLock*/
      4) && ir(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      o || (Re(l), o = !0);
    },
    o(u) {
      tt(l), o = !1;
    },
    d(u) {
      u && oi(e), _[n].d(), s = !1, r();
    }
  };
}
function jb(i) {
  let e, t;
  return e = new Q0({}), {
    c() {
      Cn(e.$$.fragment);
    },
    m(n, l) {
      qn(e, n, l), t = !0;
    },
    i(n) {
      t || (Re(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sn(e, n);
    }
  };
}
function Tb(i) {
  let e, t;
  return e = new z_({}), {
    c() {
      Cn(e.$$.fragment);
    },
    m(n, l) {
      qn(e, n, l), t = !0;
    },
    i(n) {
      t || (Re(e.$$.fragment, n), t = !0);
    },
    o(n) {
      tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sn(e, n);
    }
  };
}
function Fb(i) {
  let e;
  return {
    c() {
      e = Ss("Cancel");
    },
    m(t, n) {
      si(t, e, n);
    },
    d(t) {
      t && oi(e);
    }
  };
}
function or(i) {
  let e, t, n;
  return t = new ss({
    props: {
      variant: "stop",
      $$slots: { default: [Ob] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = Bt("div"), Cn(t.$$.fragment), Gn(e, "margin-right", "8px");
    },
    m(l, o) {
      si(l, e, o), qn(t, e, null), n = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (Re(t.$$.fragment, l), n = !0);
    },
    o(l) {
      tt(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && oi(e), Sn(t);
    }
  };
}
function Ob(i) {
  let e;
  return {
    c() {
      e = Ss("Remove");
    },
    m(t, n) {
      si(t, e, n);
    },
    d(t) {
      t && oi(e);
    }
  };
}
function $b(i) {
  let e;
  return {
    c() {
      e = Ss("OK");
    },
    m(t, n) {
      si(t, e, n);
    },
    d(t) {
      t && oi(e);
    }
  };
}
function xb(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, h, m, g, b, w = !/*showRemove*/
  i[4] && lr(i);
  s = new Rb({
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
  ), _ = new Hg({
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
  ), f = new ss({
    props: {
      $$slots: { default: [Fb] },
      $$scope: { ctx: i }
    }
  }), f.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && or(i)
  );
  return g = new ss({
    props: {
      variant: "primary",
      $$slots: { default: [$b] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Bt("div"), t = Bt("div"), n = Bt("span"), w && w.c(), l = vi(), o = Bt("div"), Cn(s.$$.fragment), r = vi(), a = Bt("div"), Cn(_.$$.fragment), c = vi(), u = Bt("div"), Cn(f.$$.fragment), d = vi(), p && p.c(), h = vi(), m = Bt("div"), Cn(g.$$.fragment), Gn(o, "margin-right", "10px"), Gn(a, "margin-right", "40px"), Gn(a, "margin-bottom", "8px"), Gn(u, "margin-right", "8px"), Zn(n, "class", "model-content svelte-d9x7u0"), Zn(t, "class", "modal-container svelte-d9x7u0"), Zn(e, "class", "modal svelte-d9x7u0"), Zn(e, "id", "model-box-edit");
    },
    m(q, M) {
      si(q, e, M), rt(e, t), rt(t, n), w && w.m(n, null), rt(n, l), rt(n, o), qn(s, o, null), rt(n, r), rt(n, a), qn(_, a, null), rt(n, c), rt(n, u), qn(f, u, null), rt(n, d), p && p.m(n, null), rt(n, h), rt(n, m), qn(g, m, null), b = !0;
    },
    p(q, [M]) {
      /*showRemove*/
      q[4] ? w && (ds(), tt(w, 1, 1, () => {
        w = null;
      }), us()) : w ? (w.p(q, M), M & /*showRemove*/
      16 && Re(w, 1)) : (w = lr(q), w.c(), Re(w, 1), w.m(n, l));
      const D = {};
      M & /*currentLabel*/
      1 && (D.value = /*currentLabel*/
      q[0]), M & /*choices*/
      8 && (D.choices = /*choices*/
      q[3]), s.$set(D);
      const C = {};
      M & /*currentColor*/
      2 && (C.value = /*currentColor*/
      q[1]), _.$set(C);
      const k = {};
      M & /*$$scope*/
      262144 && (k.$$scope = { dirty: M, ctx: q }), f.$set(k), /*showRemove*/
      q[4] ? p ? (p.p(q, M), M & /*showRemove*/
      16 && Re(p, 1)) : (p = or(q), p.c(), Re(p, 1), p.m(n, h)) : p && (ds(), tt(p, 1, 1, () => {
        p = null;
      }), us());
      const y = {};
      M & /*$$scope*/
      262144 && (y.$$scope = { dirty: M, ctx: q }), g.$set(y);
    },
    i(q) {
      b || (Re(w), Re(s.$$.fragment, q), Re(_.$$.fragment, q), Re(f.$$.fragment, q), Re(p), Re(g.$$.fragment, q), b = !0);
    },
    o(q) {
      tt(w), tt(s.$$.fragment, q), tt(_.$$.fragment, q), tt(f.$$.fragment, q), tt(p), tt(g.$$.fragment, q), b = !1;
    },
    d(q) {
      q && oi(e), w && w.d(), Sn(s), Sn(_), Sn(f), p && p.d(), Sn(g);
    }
  };
}
function Nb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = Ib();
  function f(M) {
    u("change", {
      label: l,
      color: a,
      lock: c,
      ret: M
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(M) {
    const { detail: D } = M;
    let C = D;
    Number.isInteger(C) ? (Array.isArray(s) && C < s.length && t(1, a = s[C]), Array.isArray(o) && C < o.length && t(0, l = o[C][0])) : t(0, l = C);
  }
  function h(M) {
    const { detail: D } = M;
    t(1, a = D);
  }
  function m(M) {
    d(M), f(1);
  }
  function g(M) {
    t(2, c = !c);
  }
  function b(M) {
    switch (M.key.toLowerCase()) {
      case "enter":
        f(1);
        break;
      case "escape":
        f(0);
        break;
    }
  }
  Hb(() => (document.addEventListener("keydown", b), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const w = () => f(0), p = () => f(-1), q = () => f(1);
  return i.$$set = (M) => {
    "label" in M && t(10, n = M.label), "currentLabel" in M && t(0, l = M.currentLabel), "choices" in M && t(3, o = M.choices), "choicesColors" in M && t(11, s = M.choicesColors), "color" in M && t(12, r = M.color), "currentColor" in M && t(1, a = M.currentColor), "showRemove" in M && t(4, _ = M.showRemove), "labelDetailLock" in M && t(2, c = M.labelDetailLock);
  }, [
    l,
    a,
    c,
    o,
    _,
    f,
    d,
    h,
    m,
    g,
    n,
    s,
    r,
    w,
    p,
    q
  ];
}
class qs extends Wb {
  constructor(e) {
    super(), Ab(this, e, Nb, xb, Yb, {
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
const Se = (i, e, t) => Math.min(Math.max(i, e), t);
function No(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class al {
  constructor(e, t, n, l, o, s, r, a, _, c, u, f, d, h = "rgb(255, 255, 255)", m = 0.5, g = 25, b = 8, w = 2, p = 4, q = 1, M = !0) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (D) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let C = (D.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, k = (D.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, B = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        C = Se(C, -this._xmin, y - this._xmax), k = Se(k, -this._ymin, B - this._ymax), this._xmin += C, this._ymin += k, this._xmax += C, this._ymax += k, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (D) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [C, k] = this.toBoxCoordinates(D.clientX, D.clientY);
        C = (C - this.offsetMouseX) / this.canvasWindow.scale, k = (k - this.offsetMouseY) / this.canvasWindow.scale, C > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = C, this.creatingAnchorX = "xmin") : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = C : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = C : C < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = C, this.creatingAnchorX = "xmax"), k > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = k, this.creatingAnchorY = "ymin") : k > this._ymin && k < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = k : k > this._ymin && k < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = k : k < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = k, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (D) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, k = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Se(this._xmin, 0, C - this.minSize), this._ymin = Se(this._ymin, 0, k - this.minSize), this._xmax = Se(this._xmax, this.minSize, C), this._ymax = Se(this._ymax, this.minSize, k), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > C ? (this._xmin -= this._xmax - C, this._xmax = C) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > k ? (this._ymin -= this._ymax - k, this._ymax = k) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (D) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const C = D.clientX, k = D.clientY, y = (C - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, B = (k - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, A = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += y, this._ymin += B, this._xmin = Se(this._xmin, 0, this._xmax - this.minSize), this._ymin = Se(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += y, this._ymin += B, this._xmax = Se(this._xmax, this._xmin + this.minSize, A), this._ymin = Se(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += y, this._ymax += B, this._xmax = Se(this._xmax, this._xmin + this.minSize, A), this._ymax = Se(this._ymax, this._ymin + this.minSize, S);
            break;
          case 3:
            this._xmin += y, this._ymax += B, this._xmin = Se(this._xmin, 0, this._xmax - this.minSize), this._ymax = Se(this._ymax, this._ymin + this.minSize, S);
            break;
          case 4:
            this._ymin += B, this._ymin = Se(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += y, this._xmax = Se(this._xmax, this._xmin + this.minSize, A);
            break;
          case 6:
            this._ymax += B, this._ymax = Se(this._ymax, this._ymin + this.minSize, S);
            break;
          case 7:
            this._xmin += y, this._xmin = Se(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = q, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = u, this._xmax = f, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = w, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = h, this.alpha = m, this.showLabel = M, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = No(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = No(this.color, 1), e.stroke(), e.closePath(), this.showLabel && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = No(this.color, 1);
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
const mn = [
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
], rl = (i, e, t) => Math.min(Math.max(i, e), t);
class Ub {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = rl(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = rl(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = rl(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = rl(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: Vb,
  append: we,
  attr: K,
  binding_callbacks: sr,
  bubble: Uo,
  check_outros: Ht,
  create_component: Ye,
  destroy_component: Ie,
  detach: Ae,
  element: Me,
  empty: H_,
  group_outros: jt,
  init: Pb,
  insert: Xe,
  listen: Be,
  mount_component: He,
  noop: j_,
  run_all: zs,
  safe_not_equal: Kb,
  set_data: Zb,
  set_style: _l,
  space: We,
  text: ar,
  toggle_class: Tt,
  transition_in: P,
  transition_out: ie
} = window.__gradio__svelte__internal, { onMount: Gb, createEventDispatcher: Jb } = window.__gradio__svelte__internal;
function rr(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, h, m, g, b, w, p, q, M, D, C, k, y, B, A, S, Y = !/*readOnlyBoxes*/
  i[8] && _r(i), F = (
    /*readOnlyBoxes*/
    i[8] && ur()
  );
  const J = [e2, Qb], z = [];
  function me(R, $) {
    return (
      /*labelsVisible*/
      R[17] ? 0 : 1
    );
  }
  return o = me(i), s = z[o] = J[o](i), _ = new Wd({}), f = new pd({}), m = new vg({}), w = new dg({}), y = new sg({}), {
    c() {
      e = Me("span"), Y && Y.c(), t = We(), F && F.c(), n = We(), l = Me("button"), s.c(), r = We(), a = Me("button"), Ye(_.$$.fragment), c = We(), u = Me("button"), Ye(f.$$.fragment), d = We(), h = Me("button"), Ye(m.$$.fragment), g = We(), b = Me("button"), Ye(w.$$.fragment), p = We(), q = Me("span"), M = ar(
        /*zoomLevel*/
        i[19]
      ), D = ar("%"), C = We(), k = Me("button"), Ye(y.$$.fragment), K(l, "class", "icon svelte-bbigew"), K(l, "aria-label", "Toggle labels"), K(l, "title", "Toggle labels"), Tt(
        l,
        "active",
        /*labelsVisible*/
        i[17]
      ), K(a, "class", "icon svelte-bbigew"), K(a, "aria-label", "Rotate counterclockwise"), K(a, "title", "Rotate counterclockwise"), K(u, "class", "icon svelte-bbigew"), K(u, "aria-label", "Rotate clockwise"), K(u, "title", "Rotate clockwise"), K(h, "class", "icon svelte-bbigew"), K(h, "aria-label", "Reset zoom"), K(h, "title", "Reset zoom (Space)"), K(b, "class", "icon svelte-bbigew"), K(b, "aria-label", "Zoom out"), K(b, "title", "Zoom out"), K(q, "class", "zoom-level svelte-bbigew"), K(k, "class", "icon svelte-bbigew"), K(k, "aria-label", "Zoom in"), K(k, "title", "Zoom in"), K(e, "class", "canvas-control svelte-bbigew");
    },
    m(R, $) {
      Xe(R, e, $), Y && Y.m(e, null), we(e, t), F && F.m(e, null), we(e, n), we(e, l), z[o].m(l, null), we(e, r), we(e, a), He(_, a, null), we(e, c), we(e, u), He(f, u, null), we(e, d), we(e, h), He(m, h, null), we(e, g), we(e, b), He(w, b, null), we(e, p), we(e, q), we(q, M), we(q, D), we(e, C), we(e, k), He(y, k, null), B = !0, A || (S = [
        Be(
          l,
          "click",
          /*toggleLabels*/
          i[20]
        ),
        Be(
          a,
          "click",
          /*click_handler_4*/
          i[55]
        ),
        Be(
          u,
          "click",
          /*click_handler_5*/
          i[56]
        ),
        Be(
          h,
          "click",
          /*resetView*/
          i[25]
        ),
        Be(
          b,
          "click",
          /*zoomOut*/
          i[27]
        ),
        Be(
          k,
          "click",
          /*zoomIn*/
          i[26]
        )
      ], A = !0);
    },
    p(R, $) {
      /*readOnlyBoxes*/
      R[8] ? Y && (jt(), ie(Y, 1, 1, () => {
        Y = null;
      }), Ht()) : Y ? (Y.p(R, $), $[0] & /*readOnlyBoxes*/
      256 && P(Y, 1)) : (Y = _r(R), Y.c(), P(Y, 1), Y.m(e, t)), /*readOnlyBoxes*/
      R[8] ? F ? $[0] & /*readOnlyBoxes*/
      256 && P(F, 1) : (F = ur(), F.c(), P(F, 1), F.m(e, n)) : F && (jt(), ie(F, 1, 1, () => {
        F = null;
      }), Ht());
      let I = o;
      o = me(R), o !== I && (jt(), ie(z[I], 1, 1, () => {
        z[I] = null;
      }), Ht(), s = z[o], s || (s = z[o] = J[o](R), s.c()), P(s, 1), s.m(l, null)), (!B || $[0] & /*labelsVisible*/
      131072) && Tt(
        l,
        "active",
        /*labelsVisible*/
        R[17]
      ), (!B || $[0] & /*zoomLevel*/
      524288) && Zb(
        M,
        /*zoomLevel*/
        R[19]
      );
    },
    i(R) {
      B || (P(Y), P(F), P(s), P(_.$$.fragment, R), P(f.$$.fragment, R), P(m.$$.fragment, R), P(w.$$.fragment, R), P(y.$$.fragment, R), B = !0);
    },
    o(R) {
      ie(Y), ie(F), ie(s), ie(_.$$.fragment, R), ie(f.$$.fragment, R), ie(m.$$.fragment, R), ie(w.$$.fragment, R), ie(y.$$.fragment, R), B = !1;
    },
    d(R) {
      R && Ae(e), Y && Y.d(), F && F.d(), z[o].d(), Ie(_), Ie(f), Ie(m), Ie(w), Ie(y), A = !1, zs(S);
    }
  };
}
function _r(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  t = new e0({}), o = new r0({});
  let f = (
    /*showRemoveButton*/
    i[1] && cr(i)
  ), d = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[18] && fr(i);
  return {
    c() {
      e = Me("button"), Ye(t.$$.fragment), n = We(), l = Me("button"), Ye(o.$$.fragment), s = We(), f && f.c(), r = We(), d && d.c(), a = H_(), K(e, "class", "icon svelte-bbigew"), K(e, "aria-label", "Create box"), K(e, "title", "Create box (C)"), Tt(
        e,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].creation
      ), K(l, "class", "icon svelte-bbigew"), K(l, "aria-label", "Drag boxes"), K(l, "title", "Drag boxes (D)"), Tt(
        l,
        "selected",
        /*mode*/
        i[13] === /*Mode*/
        i[9].drag
      );
    },
    m(h, m) {
      Xe(h, e, m), He(t, e, null), Xe(h, n, m), Xe(h, l, m), He(o, l, null), Xe(h, s, m), f && f.m(h, m), Xe(h, r, m), d && d.m(h, m), Xe(h, a, m), _ = !0, c || (u = [
        Be(
          e,
          "click",
          /*click_handler*/
          i[51]
        ),
        Be(
          l,
          "click",
          /*click_handler_1*/
          i[52]
        )
      ], c = !0);
    },
    p(h, m) {
      (!_ || m[0] & /*mode, Mode*/
      8704) && Tt(
        e,
        "selected",
        /*mode*/
        h[13] === /*Mode*/
        h[9].creation
      ), (!_ || m[0] & /*mode, Mode*/
      8704) && Tt(
        l,
        "selected",
        /*mode*/
        h[13] === /*Mode*/
        h[9].drag
      ), /*showRemoveButton*/
      h[1] ? f ? (f.p(h, m), m[0] & /*showRemoveButton*/
      2 && P(f, 1)) : (f = cr(h), f.c(), P(f, 1), f.m(r.parentNode, r)) : f && (jt(), ie(f, 1, 1, () => {
        f = null;
      }), Ht()), !/*disableEditBoxes*/
      h[5] && /*labelDetailLock*/
      h[18] ? d ? (d.p(h, m), m[0] & /*disableEditBoxes, labelDetailLock*/
      262176 && P(d, 1)) : (d = fr(h), d.c(), P(d, 1), d.m(a.parentNode, a)) : d && (jt(), ie(d, 1, 1, () => {
        d = null;
      }), Ht());
    },
    i(h) {
      _ || (P(t.$$.fragment, h), P(o.$$.fragment, h), P(f), P(d), _ = !0);
    },
    o(h) {
      ie(t.$$.fragment, h), ie(o.$$.fragment, h), ie(f), ie(d), _ = !1;
    },
    d(h) {
      h && (Ae(e), Ae(n), Ae(l), Ae(s), Ae(r), Ae(a)), Ie(t), Ie(o), f && f.d(h), d && d.d(h), c = !1, zs(u);
    }
  };
}
function cr(i) {
  let e, t, n, l, o;
  return t = new g0({}), {
    c() {
      e = Me("button"), Ye(t.$$.fragment), K(e, "class", "icon svelte-bbigew"), K(e, "aria-label", "Remove box"), K(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      Xe(s, e, r), He(t, e, null), n = !0, l || (o = Be(
        e,
        "click",
        /*click_handler_2*/
        i[53]
      ), l = !0);
    },
    p: j_,
    i(s) {
      n || (P(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ae(e), Ie(t), l = !1, o();
    }
  };
}
function fr(i) {
  let e, t, n, l, o;
  return t = new C0({}), {
    c() {
      e = Me("button"), Ye(t.$$.fragment), K(e, "class", "icon svelte-bbigew"), K(e, "aria-label", "Edit label"), K(e, "title", "Edit label");
    },
    m(s, r) {
      Xe(s, e, r), He(t, e, null), n = !0, l || (o = Be(
        e,
        "click",
        /*click_handler_3*/
        i[54]
      ), l = !0);
    },
    p: j_,
    i(s) {
      n || (P(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ae(e), Ie(t), l = !1, o();
    }
  };
}
function ur(i) {
  let e, t, n;
  return t = new z_({}), {
    c() {
      e = Me("button"), Ye(t.$$.fragment), K(e, "class", "icon svelte-bbigew"), K(e, "aria-label", "Boxes are read-only"), K(e, "title", "Boxes are read-only"), e.disabled = !0, Tt(e, "locked", !0);
    },
    m(l, o) {
      Xe(l, e, o), He(t, e, null), n = !0;
    },
    i(l) {
      n || (P(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ie(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ae(e), Ie(t);
    }
  };
}
function Qb(i) {
  let e, t;
  return e = new H0({}), {
    c() {
      Ye(e.$$.fragment);
    },
    m(n, l) {
      He(e, n, l), t = !0;
    },
    i(n) {
      t || (P(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ie(e, n);
    }
  };
}
function e2(i) {
  let e, t;
  return e = new E0({}), {
    c() {
      Ye(e.$$.fragment);
    },
    m(n, l) {
      He(e, n, l), t = !0;
    },
    i(n) {
      t || (P(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ie(e, n);
    }
  };
}
function dr(i) {
  let e, t;
  return e = new qs({
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
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? En(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[33]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[59]
  ), {
    c() {
      Ye(e.$$.fragment);
    },
    m(n, l) {
      He(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      4097 && (o.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      4097 && (o.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? En(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (P(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ie(e, n);
    }
  };
}
function hr(i) {
  let e, t;
  return e = new qs({
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
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? En(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[18]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[34]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[60]
  ), {
    c() {
      Ye(e.$$.fragment);
    },
    m(n, l) {
      He(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      4097 && (o.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      4097 && (o.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? En(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      262144 && (o.labelDetailLock = /*labelDetailLock*/
      n[18]), e.$set(o);
    },
    i(n) {
      t || (P(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ie(e, n);
    }
  };
}
function mr(i) {
  let e, t;
  return e = new qs({
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
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? (
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        i[12] >= 0 && /*selectedBox*/
        i[12] < /*value*/
        i[0].boxes.length ? En(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[12]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[18]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[35]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[61]
  ), {
    c() {
      Ye(e.$$.fragment);
    },
    m(n, l) {
      He(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedBox, value*/
      4097 && (o.label = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].label
      ) : ""), l[0] & /*selectedBox, value*/
      4097 && (o.color = /*selectedBox*/
      n[12] >= 0 && /*selectedBox*/
      n[12] < /*value*/
      n[0].boxes.length ? En(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[12]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      262144 && (o.labelDetailLock = /*labelDetailLock*/
      n[18]), e.$set(o);
    },
    i(n) {
      t || (P(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ie(e, n);
    }
  };
}
function t2(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f = (
    /*interactive*/
    i[2] && rr(i)
  ), d = (
    /*editModalVisible*/
    i[14] && dr(i)
  ), h = (
    /*newModalVisible*/
    i[15] && hr(i)
  ), m = (
    /*editDefaultLabelVisible*/
    i[16] && mr(i)
  );
  return {
    c() {
      e = Me("div"), t = Me("div"), n = Me("canvas"), l = We(), f && f.c(), o = We(), d && d.c(), s = We(), h && h.c(), r = We(), m && m.c(), a = H_(), _l(
        n,
        "height",
        /*height*/
        i[6]
      ), _l(
        n,
        "width",
        /*width*/
        i[7]
      ), K(n, "class", "canvas-annotator svelte-bbigew"), Tt(
        n,
        "read-only",
        /*readOnlyBoxes*/
        i[8]
      ), K(t, "class", "canvas-container svelte-bbigew"), K(e, "class", "annotator-container"), K(e, "tabindex", "0");
    },
    m(g, b) {
      Xe(g, e, b), we(e, t), we(t, n), i[50](n), we(e, l), f && f.m(e, null), i[57](e), Xe(g, o, b), d && d.m(g, b), Xe(g, s, b), h && h.m(g, b), Xe(g, r, b), m && m.m(g, b), Xe(g, a, b), _ = !0, c || (u = [
        Be(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[21]
        ),
        Be(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[22]
        ),
        Be(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[24]
        ),
        Be(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[23]
        ),
        Be(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[32]
        ),
        Be(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[29]
        ),
        Be(
          e,
          "keydown",
          /*handleKeyPress*/
          i[28]
        ),
        Be(
          e,
          "click",
          /*click_handler_6*/
          i[58]
        )
      ], c = !0);
    },
    p(g, b) {
      (!_ || b[0] & /*height*/
      64) && _l(
        n,
        "height",
        /*height*/
        g[6]
      ), (!_ || b[0] & /*width*/
      128) && _l(
        n,
        "width",
        /*width*/
        g[7]
      ), (!_ || b[0] & /*readOnlyBoxes*/
      256) && Tt(
        n,
        "read-only",
        /*readOnlyBoxes*/
        g[8]
      ), /*interactive*/
      g[2] ? f ? (f.p(g, b), b[0] & /*interactive*/
      4 && P(f, 1)) : (f = rr(g), f.c(), P(f, 1), f.m(e, null)) : f && (jt(), ie(f, 1, 1, () => {
        f = null;
      }), Ht()), /*editModalVisible*/
      g[14] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      16384 && P(d, 1)) : (d = dr(g), d.c(), P(d, 1), d.m(s.parentNode, s)) : d && (jt(), ie(d, 1, 1, () => {
        d = null;
      }), Ht()), /*newModalVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*newModalVisible*/
      32768 && P(h, 1)) : (h = hr(g), h.c(), P(h, 1), h.m(r.parentNode, r)) : h && (jt(), ie(h, 1, 1, () => {
        h = null;
      }), Ht()), /*editDefaultLabelVisible*/
      g[16] ? m ? (m.p(g, b), b[0] & /*editDefaultLabelVisible*/
      65536 && P(m, 1)) : (m = mr(g), m.c(), P(m, 1), m.m(a.parentNode, a)) : m && (jt(), ie(m, 1, 1, () => {
        m = null;
      }), Ht());
    },
    i(g) {
      _ || (P(f), P(d), P(h), P(m), _ = !0);
    },
    o(g) {
      ie(f), ie(d), ie(h), ie(m), _ = !1;
    },
    d(g) {
      g && (Ae(e), Ae(o), Ae(s), Ae(r), Ae(a)), i[50](null), f && f.d(), i[57](null), d && d.d(g), h && h.d(g), m && m.d(g), c = !1, zs(u);
    }
  };
}
const gr = 100;
function cl(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function En(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function n2(i, e, t) {
  let n;
  var l;
  (function(v) {
    v[v.creation = 0] = "creation", v[v.drag = 1] = "drag";
  })(l || (l = {}));
  let { imageUrl: o = null } = e, { interactive: s } = e, { boxAlpha: r = 0.5 } = e, { boxMinSize: a = 10 } = e, { handleSize: _ } = e, { boxThickness: c } = e, { boxSelectedThickness: u } = e, { value: f } = e, { choices: d = [] } = e, { choicesColors: h = [] } = e, { disableEditBoxes: m = !1 } = e, { height: g = "100%" } = e, { width: b = "100%" } = e, { singleBox: w = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: q = !0 } = e, { useDefaultLabel: M = !1 } = e, { enableKeyboardShortcuts: D = !0 } = e, { showBoxLabels: C = !0 } = e, { readOnlyBoxes: k = !1 } = e;
  p === null && (p = m);
  let y, B, A, S = null, Y = -1, F = l.drag, J = /* @__PURE__ */ new Map(), z = new Ub(te, J), me = null;
  f !== null && f.boxes.length == 0 && (F = l.creation);
  let R = 0, $ = 0, I = 0, O = 0, _e = 1, Z = 0, re = 0, j = !1, ke = !1, W = !1, x = C, oe = M, se = { label: "", color: "" }, le = { x: 0, y: 0, distance: 0 };
  const ge = Jb();
  function te() {
    if (A) {
      if (A.clearRect(0, 0, y.width, y.height), A.save(), A.translate(z.offsetX, z.offsetY), A.scale(z.scale, z.scale), S !== null) {
        switch (f.orientation) {
          case 0:
            A.drawImage(S, 0, 0, Z, re);
            break;
          case 1:
            A.translate(Z, 0), A.rotate(Math.PI / 2), A.drawImage(S, 0, 0, re, Z);
            break;
          case 2:
            A.translate(Z, re), A.rotate(Math.PI), A.drawImage(S, 0, 0, Z, re);
            break;
          case 3:
            A.translate(0, re), A.rotate(-Math.PI / 2), A.drawImage(S, 0, 0, re, Z);
            break;
        }
        A.restore();
      }
      for (const v of f.boxes.slice().reverse())
        v.render(A);
    }
  }
  function E(v) {
    k || (t(12, Y = v), f.boxes.forEach((X) => {
      X.setSelected(!1);
    }), v >= 0 && v < f.boxes.length && f.boxes[v].setSelected(!0), te());
  }
  function Ze() {
    t(17, x = !x);
    for (const v of f.boxes)
      v.setShowLabel(x);
    te();
  }
  const it = (v, X) => {
    const H = Math.sqrt(Math.pow(v.clientX - X.clientX, 2) + Math.pow(v.clientY - X.clientY, 2));
    return H < gr ? gr : H;
  };
  function ut(v) {
    if (s) {
      if (v.preventDefault(), y.setPointerCapture(v.pointerId), J.set(v.pointerId, v), J.size == 1) {
        if (k) {
          z.startDrag(v);
          return;
        }
        F === l.creation ? Xn(v) : F === l.drag && cn(v);
      } else if (J.size == 2) {
        t(49, z.isDragging = !1, z), f.boxes.forEach((Te) => {
          Te.isCreating = !1, Te.isDragging = !1, Te.isResizing = !1;
        });
        const X = Array.from(J.values()), H = X[0], V = X[1], G = it(H, V), Q = y.getBoundingClientRect(), ce = (H.clientX + V.clientX) / 2 - Q.left, je = (H.clientY + V.clientY) / 2 - Q.top;
        le.distance = G, le.x = ce, le.y = je;
      }
    }
  }
  function cn(v) {
    if (k) {
      z.startDrag(v);
      return;
    }
    const X = y.getBoundingClientRect(), H = v.clientX - X.left, V = v.clientY - X.top;
    let G = !1;
    for (const [Q, ce] of f.boxes.entries()) {
      const je = ce.indexOfPointInsideHandle(H, V);
      if (je >= 0) {
        G = !0, E(Q), ce.startResize(je, v);
        return;
      }
    }
    for (const [Q, ce] of f.boxes.entries())
      if (ce.isPointInsideBox(H, V)) {
        G = !0, E(Q), ce.startDrag(v);
        return;
      }
    w || E(-1), G || z.startDrag(v);
  }
  function Ol(v) {
    s && (J.delete(v.pointerId), y.releasePointerCapture(v.pointerId), ge("change"));
  }
  function $l(v) {
    s && (J.delete(v.pointerId), y.releasePointerCapture(v.pointerId), ge("change"));
  }
  function xl(v) {
    if (s)
      if (v.preventDefault(), v.pointerType === "mouse") {
        if (!q || f === null || F !== l.drag)
          return;
        const X = y.getBoundingClientRect(), H = v.clientX - X.left, V = v.clientY - X.top;
        for (const [G, Q] of f.boxes.entries()) {
          const ce = Q.indexOfPointInsideHandle(H, V);
          if (ce >= 0) {
            t(10, y.style.cursor = Q.resizeHandles[ce].cursor, y);
            return;
          }
        }
        t(10, y.style.cursor = "default", y);
      } else {
        if (!J.has(v.pointerId))
          return;
        if (J.set(v.pointerId, v), J.size === 2) {
          const X = Array.from(J.values()), H = X[0], V = X[1], G = it(H, V), Q = y.getBoundingClientRect(), ce = (H.clientX + V.clientX) / 2 - Q.left, je = (H.clientY + V.clientY) / 2 - Q.top, Te = parseFloat((z.scale * (G / le.distance)).toFixed(2)), Pt = Te < 1 ? 1 : Te, ui = Pt / z.scale;
          t(49, z.offsetX = le.x - (le.x - z.offsetX) * ui, z), t(49, z.offsetY = le.y - (le.y - z.offsetY) * ui, z);
          const di = ce - le.x, rc = je - le.y;
          t(49, z.offsetX += di, z), t(49, z.offsetY += rc, z), t(49, z.scale = Pt, z), le.x = ce, le.y = je, le.distance = G, te();
        }
      }
  }
  function ai() {
    const v = y.width / Z, X = y.height / re, H = Math.min(v, X);
    t(49, z.scale = H, z), t(49, z.offsetX = (y.width - Z * H) / 2, z), t(49, z.offsetY = (y.height - re * H) / 2, z), te();
  }
  function Nl() {
    const v = parseFloat((z.scale * 1.25).toFixed(2)), X = y.width / 2, H = y.height / 2, V = (X - z.offsetX) / z.scale, G = (H - z.offsetY) / z.scale;
    t(49, z.offsetX = X - V * v, z), t(49, z.offsetY = H - G * v, z), t(49, z.scale = v, z), te();
  }
  function Ul() {
    const v = parseFloat((z.scale * 0.8).toFixed(2)), X = v < 1 ? 1 : v, H = y.width / 2, V = y.height / 2, G = (H - z.offsetX) / z.scale, Q = (V - z.offsetY) / z.scale;
    t(49, z.offsetX = H - G * X, z), t(49, z.offsetY = V - Q * X, z), t(49, z.scale = X, z), te();
  }
  function L(v) {
    if (!D || v.target !== B || !s)
      return;
    const X = v.key.toLowerCase(), H = v.ctrlKey || v.metaKey;
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
    ])).has(X) || H && (X === "c" || X === "v")) && (v.preventDefault(), v.stopPropagation()), k) {
      X === " " && ai();
      return;
    }
    if (H && X === "c") {
      U_();
      return;
    }
    if (H && X === "v") {
      V_();
      return;
    }
    switch (X) {
      case "delete":
      case "q":
        Yn();
        break;
      case " ":
        ai();
        break;
      case "arrowup":
        ji(0, -3);
        break;
      case "arrowdown":
        ji(0, 3);
        break;
      case "arrowleft":
        ji(-3, 0);
        break;
      case "arrowright":
        ji(3, 0);
        break;
    }
  }
  function kt() {
    setTimeout(
      () => {
        B == null || B.focus();
      },
      0
    );
  }
  function Et(v) {
    if (!s)
      return;
    v.preventDefault();
    const X = 1 / (1 + v.deltaY / 1e3 * 0.5), H = parseFloat((z.scale * X).toFixed(2)), V = H < 1 ? 1 : H, G = y.getBoundingClientRect(), Q = v.clientX - G.left, ce = v.clientY - G.top, je = (Q - z.offsetX) / z.scale, Te = (ce - z.offsetY) / z.scale;
    t(49, z.offsetX = Q - je * V, z), t(49, z.offsetY = ce - Te * V, z), t(49, z.scale = V, z), te();
  }
  function Xn(v) {
    const X = y.getBoundingClientRect(), H = (v.clientX - X.left - z.offsetX) / _e / z.scale, V = (v.clientY - X.top - z.offsetY) / _e / z.scale;
    let G;
    h.length > 0 ? G = cl(h[0]) : w ? f.boxes.length > 0 ? G = f.boxes[0].color : G = mn[0] : G = mn[f.boxes.length % mn.length];
    let Q = new al(te, Vt, z, J, R, $, I, O, "", H, V, H, V, G, r, a, _, c, u, _e, C);
    Q.startCreating(v, X.left, X.top), w ? t(0, f.boxes = [Q], f) : t(0, f.boxes = [Q, ...f.boxes], f), E(0), te(), ge("change");
  }
  function ri() {
    t(13, F = l.creation), t(10, y.style.cursor = "crosshair", y);
  }
  function Rt() {
    t(13, F = l.drag), t(10, y.style.cursor = "default", y);
  }
  function Vt() {
    Y >= 0 && Y < f.boxes.length && (f.boxes[Y].getArea() < 1 ? Yn() : (m || (oe ? N_() : t(15, ke = !0)), w && Rt()));
  }
  function Vl() {
    Y >= 0 && Y < f.boxes.length && !m && t(14, j = !0);
  }
  function Pl(v) {
    s && Vl();
  }
  function _i(v) {
    t(14, j = !1), kt();
    const { detail: X } = v;
    let H = X.label, V = X.color, G = X.ret;
    if (Y >= 0 && Y < f.boxes.length) {
      let Q = f.boxes[Y];
      G == 1 ? (Q.label = H, Q.color = cl(V), te(), ge("change")) : G == -1 && Yn();
    }
  }
  function Wt(v) {
    t(15, ke = !1), kt();
    const { detail: X } = v;
    let H = X.label, V = X.color, G = X.ret, Q = X.lock;
    if (Y >= 0 && Y < f.boxes.length) {
      let ce = f.boxes[Y];
      G == 1 ? (t(18, oe = Q), se.label = H, se.color = V, ce.label = H, ce.color = cl(V), te(), ge("change")) : Yn();
    }
  }
  function ci(v) {
    t(16, W = !1), kt();
    const { detail: X } = v;
    let H = X.label, V = X.color, G = X.ret, Q = X.lock;
    G == 1 && (t(18, oe = Q), se.label = H, se.color = V);
  }
  function N_() {
    if (Y >= 0 && Y < f.boxes.length) {
      let v = f.boxes[Y];
      v.label = se.label, se.color !== "" && (v.color = cl(se.color)), te(), ge("change");
    }
  }
  function Yn() {
    Y >= 0 && Y < f.boxes.length && (f.boxes.splice(Y, 1), E(-1), w && ri(), ge("change"));
  }
  function ji(v, X) {
    if (Y < 0 || Y >= f.boxes.length)
      return;
    const H = f.boxes[Y], V = H.canvasWindow.scale, G = v / V, Q = X / V, ce = H.canvasWindow.imageWidth, je = H.canvasWindow.imageHeight, Te = Math.max(-H._xmin, Math.min(G, ce - H._xmax)), Pt = Math.max(-H._ymin, Math.min(Q, je - H._ymax));
    H._xmin += Te, H._ymin += Pt, H._xmax += Te, H._ymax += Pt, H.applyUserScale(), te(), ge("change");
  }
  function U_() {
    Y >= 0 && Y < f.boxes.length && (me = f.boxes[Y].toJSON());
  }
  function V_() {
    if (me === null)
      return;
    const v = me, X = v.scaleFactor || 1, H = 20 / X;
    let V = v.xmin + H, G = v.ymin + H, Q = v.xmax + H, ce = v.ymax + H;
    const je = (I - R) / z.scale, Te = (O - $) / z.scale, Pt = Q - V, ui = ce - G;
    Q > je && (V = Math.max(0, je - Pt), Q = V + Pt), ce > Te && (G = Math.max(0, Te - ui), ce = G + ui);
    const di = new al(te, Vt, z, J, R, $, I, O, v.label, V, G, Q, ce, v.color, r, a, _, c, u, X, C);
    w ? t(0, f.boxes = [di], f) : t(0, f.boxes = [di, ...f.boxes], f), me = di.toJSON(), E(0), te(), ge("change");
  }
  function Kl(v) {
    t(0, f.orientation = ((f.orientation + v) % 4 + 4) % 4, f), t(49, z.orientation = f.orientation, z), fi();
    for (const X of f.boxes)
      X.onRotate(v);
    te();
  }
  function fi() {
    if (y) {
      if (_e = 1, t(10, y.width = y.clientWidth, y), z.setRotatedImage(S), S !== null) {
        if (z.imageRotatedWidth > y.width)
          _e = y.width / z.imageRotatedWidth, Z = Math.round(z.imageRotatedWidth * _e), re = Math.round(z.imageRotatedHeight * _e), R = 0, $ = 0, I = Z, O = re, t(10, y.height = re, y);
        else {
          Z = z.imageRotatedWidth, re = z.imageRotatedHeight;
          var v = (y.width - Z) / 2;
          R = v, $ = 0, I = v + Z, O = re, t(10, y.height = re, y);
        }
        t(49, z.imageWidth = Z, z), t(49, z.imageHeight = re, z);
      } else
        R = 0, $ = 0, I = y.width, O = y.height, t(10, y.height = y.clientHeight, y);
      if (z.resize(y.width, y.height, R, $), I > 0 && O > 0)
        for (const X of f.boxes)
          X.canvasXmin = R, X.canvasYmin = $, X.canvasXmax = I, X.canvasYmax = O, X.setScaleFactor(_e);
      te(), ge("change");
    }
  }
  const P_ = new ResizeObserver(fi);
  function K_() {
    for (let v = 0; v < f.boxes.length; v++) {
      let X = f.boxes[v];
      if (!(X instanceof al)) {
        let H = "", V = "";
        X.hasOwnProperty("color") ? (H = X.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = mn[v % mn.length], X.hasOwnProperty("label") && (V = X.label), X = new al(te, Vt, z, J, R, $, I, O, V, X.xmin, X.ymin, X.xmax, X.ymax, H, r, a, _, c, u, X.scaleFactor || 1, C), t(0, f.boxes[v] = X, f);
      }
    }
  }
  function Bs() {
    o !== null && (S === null || S.src != o) && (S = new Image(), S.src = o, S.onload = function() {
      fi(), te();
    });
  }
  Gb(() => {
    if (Array.isArray(d) && d.length > 0) {
      if (!Array.isArray(h) || h.length == 0)
        for (let v = 0; v < d.length; v++) {
          let X = mn[v % mn.length];
          h.push(En(X));
        }
      se.label = d[0][0], se.color = h[0];
    }
    A = y.getContext("2d"), P_.observe(y), Y < 0 && f !== null && f.boxes.length > 0 && E(0), Bs(), fi(), te();
  });
  function Z_(v) {
    sr[v ? "unshift" : "push"](() => {
      y = v, t(10, y);
    });
  }
  const G_ = () => ri(), J_ = () => Rt(), Q_ = () => Yn(), ec = () => t(16, W = !0), tc = () => Kl(-1), nc = () => Kl(1);
  function ic(v) {
    sr[v ? "unshift" : "push"](() => {
      B = v, t(11, B);
    });
  }
  const lc = () => B.focus();
  function oc(v) {
    Uo.call(this, i, v);
  }
  function sc(v) {
    Uo.call(this, i, v);
  }
  function ac(v) {
    Uo.call(this, i, v);
  }
  return i.$$set = (v) => {
    "imageUrl" in v && t(38, o = v.imageUrl), "interactive" in v && t(2, s = v.interactive), "boxAlpha" in v && t(39, r = v.boxAlpha), "boxMinSize" in v && t(40, a = v.boxMinSize), "handleSize" in v && t(41, _ = v.handleSize), "boxThickness" in v && t(42, c = v.boxThickness), "boxSelectedThickness" in v && t(43, u = v.boxSelectedThickness), "value" in v && t(0, f = v.value), "choices" in v && t(3, d = v.choices), "choicesColors" in v && t(4, h = v.choicesColors), "disableEditBoxes" in v && t(5, m = v.disableEditBoxes), "height" in v && t(6, g = v.height), "width" in v && t(7, b = v.width), "singleBox" in v && t(44, w = v.singleBox), "showRemoveButton" in v && t(1, p = v.showRemoveButton), "handlesCursor" in v && t(45, q = v.handlesCursor), "useDefaultLabel" in v && t(46, M = v.useDefaultLabel), "enableKeyboardShortcuts" in v && t(47, D = v.enableKeyboardShortcuts), "showBoxLabels" in v && t(48, C = v.showBoxLabels), "readOnlyBoxes" in v && t(8, k = v.readOnlyBoxes);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (t(49, z.orientation = f.orientation, z), Bs(), K_(), fi(), te()), i.$$.dirty[1] & /*canvasWindow*/
    262144 && t(19, n = Math.round(z.scale * 100));
  }, [
    f,
    p,
    s,
    d,
    h,
    m,
    g,
    b,
    k,
    l,
    y,
    B,
    Y,
    F,
    j,
    ke,
    W,
    x,
    oe,
    n,
    Ze,
    ut,
    Ol,
    $l,
    xl,
    ai,
    Nl,
    Ul,
    L,
    Et,
    ri,
    Rt,
    Pl,
    _i,
    Wt,
    ci,
    Yn,
    Kl,
    o,
    r,
    a,
    _,
    c,
    u,
    w,
    q,
    M,
    D,
    C,
    z,
    Z_,
    G_,
    J_,
    Q_,
    ec,
    tc,
    nc,
    ic,
    lc,
    oc,
    sc,
    ac
  ];
}
class i2 extends Vb {
  constructor(e) {
    super(), Pb(
      this,
      e,
      n2,
      t2,
      Kb,
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
  SvelteComponent: l2,
  add_flush_callback: o2,
  bind: s2,
  binding_callbacks: a2,
  create_component: r2,
  destroy_component: _2,
  init: c2,
  mount_component: f2,
  safe_not_equal: u2,
  transition_in: d2,
  transition_out: h2
} = window.__gradio__svelte__internal, { createEventDispatcher: m2 } = window.__gradio__svelte__internal;
function g2(i) {
  let e, t, n;
  function l(s) {
    i[23](s);
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
    readOnlyBoxes: (
      /*readOnlyBoxes*/
      i[18]
    ),
    imageUrl: (
      /*resolved_src*/
      i[19]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (o.value = /*value*/
    i[0]), e = new i2({ props: o }), a2.push(() => s2(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[24]
    ), {
      c() {
        r2(e.$$.fragment);
      },
      m(s, r) {
        f2(e, s, r), n = !0;
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
        s[0], o2(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (d2(e.$$.fragment, s), n = !0);
      },
      o(s) {
        h2(e.$$.fragment, s), n = !1;
      },
      d(s) {
        _2(e, s);
      }
    }
  );
}
function b2(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: u } = e, { width: f } = e, { boxSelectedThickness: d } = e, { value: h } = e, { disableEditBoxes: m } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: w } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: q } = e, { showBoxLabels: M } = e, { readOnlyBoxes: D = !1 } = e, C, k;
  const y = m2();
  function B(S) {
    h = S, t(0, h);
  }
  const A = () => y("change");
  return i.$$set = (S) => {
    "src" in S && t(21, n = S.src), "interactive" in S && t(1, l = S.interactive), "boxesAlpha" in S && t(2, o = S.boxesAlpha), "labelList" in S && t(3, s = S.labelList), "labelColors" in S && t(4, r = S.labelColors), "boxMinSize" in S && t(5, a = S.boxMinSize), "handleSize" in S && t(6, _ = S.handleSize), "boxThickness" in S && t(7, c = S.boxThickness), "height" in S && t(8, u = S.height), "width" in S && t(9, f = S.width), "boxSelectedThickness" in S && t(10, d = S.boxSelectedThickness), "value" in S && t(0, h = S.value), "disableEditBoxes" in S && t(11, m = S.disableEditBoxes), "singleBox" in S && t(12, g = S.singleBox), "showRemoveButton" in S && t(13, b = S.showRemoveButton), "handlesCursor" in S && t(14, w = S.handlesCursor), "useDefaultLabel" in S && t(15, p = S.useDefaultLabel), "enableKeyboardShortcuts" in S && t(16, q = S.enableKeyboardShortcuts), "showBoxLabels" in S && t(17, M = S.showBoxLabels), "readOnlyBoxes" in S && t(18, D = S.readOnlyBoxes);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    6291456) {
      t(19, C = n), t(22, k = n);
      const S = n;
      ch(S).then((Y) => {
        k === S && t(19, C = Y);
      });
    }
  }, [
    h,
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
    m,
    g,
    b,
    w,
    p,
    q,
    M,
    D,
    C,
    y,
    n,
    k,
    B,
    A
  ];
}
class p2 extends l2 {
  constructor(e) {
    super(), c2(this, e, b2, g2, u2, {
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
class br {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: w2,
  add_flush_callback: Ml,
  append: xn,
  attr: Di,
  bind: El,
  binding_callbacks: Xi,
  bubble: ki,
  check_outros: bn,
  create_component: Ot,
  create_slot: v2,
  destroy_component: $t,
  detach: zn,
  element: Wi,
  empty: k2,
  get_all_dirty_from_scope: y2,
  get_slot_changes: C2,
  group_outros: pn,
  init: S2,
  insert: Bn,
  mount_component: xt,
  noop: q2,
  safe_not_equal: z2,
  space: gn,
  toggle_class: pr,
  transition_in: ae,
  transition_out: fe,
  update_slot_base: B2
} = window.__gradio__svelte__internal, { createEventDispatcher: D2, tick: L2 } = window.__gradio__svelte__internal;
function wr(i) {
  let e, t;
  return e = new Ch({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [M2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ot(e.$$.fragment);
    },
    m(n, l) {
      xt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), l[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      33554432 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function M2(i) {
  let e, t;
  return e = new Rl({
    props: {
      Icon: Iu,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Ot(e.$$.fragment);
    },
    m(n, l) {
      xt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function vr(i) {
  let e, t;
  return e = new s1({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[41]
      ),
      value: (
        /*value*/
        i[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[42]
  ), e.$on(
    "error",
    /*error_handler*/
    i[43]
  ), {
    c() {
      Ot(e.$$.fragment);
    },
    m(n, l) {
      xt(e, n, l), t = !0;
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
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function kr(i) {
  let e, t, n;
  return t = new Rl({
    props: { Icon: Ir, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[39]
  ), {
    c() {
      e = Wi("div"), Ot(t.$$.fragment);
    },
    m(l, o) {
      Bn(l, e, o), xt(t, e, null), n = !0;
    },
    p: q2,
    i(l) {
      n || (ae(t.$$.fragment, l), n = !0);
    },
    o(l) {
      fe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && zn(e), $t(t);
    }
  };
}
function yr(i) {
  let e;
  const t = (
    /*#slots*/
    i[40].default
  ), n = v2(
    t,
    i,
    /*$$scope*/
    i[56],
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
      33554432) && B2(
        n,
        t,
        l,
        /*$$scope*/
        l[56],
        e ? C2(
          t,
          /*$$scope*/
          l[56],
          o,
          null
        ) : y2(
          /*$$scope*/
          l[56]
        ),
        null
      );
    },
    i(l) {
      e || (ae(n, l), e = !0);
    },
    o(l) {
      fe(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function E2(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && yr(i)
  );
  return {
    c() {
      n && n.c(), e = k2();
    },
    m(l, o) {
      n && n.m(l, o), Bn(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[1] === null ? n ? (n.p(l, o), o[0] & /*value*/
      2 && ae(n, 1)) : (n = yr(l), n.c(), ae(n, 1), n.m(e.parentNode, e)) : n && (pn(), fe(n, 1, 1, () => {
        n = null;
      }), bn());
    },
    i(l) {
      t || (ae(n), t = !0);
    },
    o(l) {
      fe(n), t = !1;
    },
    d(l) {
      l && zn(e), n && n.d(l);
    }
  };
}
function Cr(i) {
  let e, t;
  return e = new Vm({
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
        i[34]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[48]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[49]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[50]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[51]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[52]
  ), {
    c() {
      Ot(e.$$.fragment);
    },
    m(n, l) {
      xt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      8 && (o.upload = /*upload*/
      n[34]), e.$set(o);
    },
    i(n) {
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $t(e, n);
    }
  };
}
function Sr(i) {
  let e, t, n, l;
  function o(r) {
    i[53](r);
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
    readOnlyBoxes: (
      /*readOnlyBoxes*/
      i[31]
    ),
    src: (
      /*value*/
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (s.value = /*value*/
    i[1]), t = new p2({ props: s }), Xi.push(() => El(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      i[54]
    ), {
      c() {
        e = Wi("div"), Ot(t.$$.fragment), Di(e, "class", "image-frame svelte-1gjdske"), pr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Bn(r, e, a), xt(t, e, null), l = !0;
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
        r[1], Ml(() => n = !1)), t.$set(_), (!l || a[0] & /*selectable*/
        32) && pr(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (ae(t.$$.fragment, r), l = !0);
      },
      o(r) {
        fe(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && zn(e), $t(t);
      }
    }
  );
}
function qr(i) {
  let e, t, n;
  function l(s) {
    i[55](s);
  }
  let o = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[39]
    ),
    handle_select: (
      /*handle_select_source*/
      i[38]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (o.active_source = /*active_source*/
    i[0]), e = new y1({ props: o }), Xi.push(() => El(e, "active_source", l)), {
      c() {
        Ot(e.$$.fragment);
      },
      m(s, r) {
        xt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], Ml(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ae(e.$$.fragment, s), n = !0);
      },
      o(s) {
        fe(e.$$.fragment, s), n = !1;
      },
      d(s) {
        $t(e, s);
      }
    }
  );
}
function R2(i) {
  let e, t, n, l, o, s, r, a, _, c, u, f, d, h, m = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new Cf({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Hr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && wr(i)
  ), w = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && vr(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && kr(i)
  );
  function q(B) {
    i[45](B);
  }
  function M(B) {
    i[46](B);
  }
  let D = {
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
    $$slots: { default: [E2] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[32] !== void 0 && (D.uploading = /*uploading*/
  i[32]), /*dragging*/
  i[33] !== void 0 && (D.dragging = /*dragging*/
  i[33]), _ = new nm({ props: D }), i[44](_), Xi.push(() => El(_, "uploading", q)), Xi.push(() => El(_, "dragging", M)), _.$on(
    "load",
    /*handle_upload*/
    i[35]
  ), _.$on(
    "error",
    /*error_handler_1*/
    i[47]
  );
  let C = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && Cr(i)
  ), k = (
    /*value*/
    i[1] !== null && Sr(i)
  ), y = m && qr(i);
  return {
    c() {
      Ot(e.$$.fragment), t = gn(), n = Wi("div"), b && b.c(), l = gn(), w && w.c(), o = gn(), p && p.c(), s = gn(), r = Wi("div"), a = Wi("div"), Ot(_.$$.fragment), f = gn(), C && C.c(), d = gn(), k && k.c(), h = gn(), y && y.c(), Di(n, "class", "icon-buttons svelte-1gjdske"), Di(a, "class", "upload-container svelte-1gjdske"), Di(r, "data-testid", "image"), Di(r, "class", "image-container svelte-1gjdske");
    },
    m(B, A) {
      xt(e, B, A), Bn(B, t, A), Bn(B, n, A), b && b.m(n, null), xn(n, l), w && w.m(n, null), xn(n, o), p && p.m(n, null), Bn(B, s, A), Bn(B, r, A), xn(r, a), xt(_, a, null), xn(a, f), C && C.m(a, null), xn(a, d), k && k.m(a, null), xn(r, h), y && y.m(r, null), g = !0;
    },
    p(B, A) {
      const S = {};
      A[0] & /*show_label*/
      8 && (S.show_label = /*show_label*/
      B[3]), A[0] & /*label*/
      4 && (S.label = /*label*/
      B[2] || "Image Annotator"), e.$set(S), /*showDownloadButton*/
      B[10] && /*value*/
      B[1] !== null ? b ? (b.p(B, A), A[0] & /*showDownloadButton, value*/
      1026 && ae(b, 1)) : (b = wr(B), b.c(), ae(b, 1), b.m(n, l)) : b && (pn(), fe(b, 1, 1, () => {
        b = null;
      }), bn()), /*showShareButton*/
      B[9] && /*value*/
      B[1] !== null ? w ? (w.p(B, A), A[0] & /*showShareButton, value*/
      514 && ae(w, 1)) : (w = vr(B), w.c(), ae(w, 1), w.m(n, o)) : w && (pn(), fe(w, 1, 1, () => {
        w = null;
      }), bn()), /*showClearButton*/
      B[11] && /*value*/
      B[1] !== null && /*interactive*/
      B[7] ? p ? (p.p(B, A), A[0] & /*showClearButton, value, interactive*/
      2178 && ae(p, 1)) : (p = kr(B), p.c(), ae(p, 1), p.m(n, null)) : p && (pn(), fe(p, 1, 1, () => {
        p = null;
      }), bn());
      const Y = {};
      A[0] & /*value, active_source*/
      3 && (Y.hidden = /*value*/
      B[1] !== null || /*active_source*/
      B[0] === "webcam"), A[0] & /*active_source*/
      1 && (Y.filetype = /*active_source*/
      B[0] === "clipboard" ? "clipboard" : "image/*"), A[0] & /*root*/
      64 && (Y.root = /*root*/
      B[6]), A[0] & /*max_file_size*/
      33554432 && (Y.max_file_size = /*max_file_size*/
      B[25]), A[0] & /*sources*/
      16 && (Y.disable_click = !/*sources*/
      B[4].includes("upload")), A[0] & /*cli_upload*/
      67108864 && (Y.upload = /*cli_upload*/
      B[26]), A[0] & /*stream_handler*/
      134217728 && (Y.stream_handler = /*stream_handler*/
      B[27]), A[0] & /*value*/
      2 | A[1] & /*$$scope*/
      33554432 && (Y.$$scope = { dirty: A, ctx: B }), !c && A[1] & /*uploading*/
      2 && (c = !0, Y.uploading = /*uploading*/
      B[32], Ml(() => c = !1)), !u && A[1] & /*dragging*/
      4 && (u = !0, Y.dragging = /*dragging*/
      B[33], Ml(() => u = !1)), _.$set(Y), /*value*/
      B[1] === null && /*active_source*/
      B[0] === "webcam" ? C ? (C.p(B, A), A[0] & /*value, active_source*/
      3 && ae(C, 1)) : (C = Cr(B), C.c(), ae(C, 1), C.m(a, d)) : C && (pn(), fe(C, 1, 1, () => {
        C = null;
      }), bn()), /*value*/
      B[1] !== null ? k ? (k.p(B, A), A[0] & /*value*/
      2 && ae(k, 1)) : (k = Sr(B), k.c(), ae(k, 1), k.m(a, null)) : k && (pn(), fe(k, 1, 1, () => {
        k = null;
      }), bn()), A[0] & /*sources, value, interactive*/
      146 && (m = /*sources*/
      (B[4].length > 1 || /*sources*/
      B[4].includes("clipboard")) && /*value*/
      B[1] === null && /*interactive*/
      B[7]), m ? y ? (y.p(B, A), A[0] & /*sources, value, interactive*/
      146 && ae(y, 1)) : (y = qr(B), y.c(), ae(y, 1), y.m(r, null)) : y && (pn(), fe(y, 1, 1, () => {
        y = null;
      }), bn());
    },
    i(B) {
      g || (ae(e.$$.fragment, B), ae(b), ae(w), ae(p), ae(_.$$.fragment, B), ae(C), ae(k), ae(y), g = !0);
    },
    o(B) {
      fe(e.$$.fragment, B), fe(b), fe(w), fe(p), fe(_.$$.fragment, B), fe(C), fe(k), fe(y), g = !1;
    },
    d(B) {
      B && (zn(t), zn(n), zn(s), zn(r)), $t(e, B), b && b.d(), w && w.d(), p && p.d(), i[44](null), $t(_), C && C.d(), k && k.d(), y && y.d();
    }
  };
}
function W2(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(L, kt, Et, Xn) {
    function ri(Rt) {
      return Rt instanceof Et ? Rt : new Et(function(Vt) {
        Vt(Rt);
      });
    }
    return new (Et || (Et = Promise))(function(Rt, Vt) {
      function Vl(Wt) {
        try {
          _i(Xn.next(Wt));
        } catch (ci) {
          Vt(ci);
        }
      }
      function Pl(Wt) {
        try {
          _i(Xn.throw(Wt));
        } catch (ci) {
          Vt(ci);
        }
      }
      function _i(Wt) {
        Wt.done ? Rt(Wt.value) : ri(Wt.value).then(Vl, Pl);
      }
      _i((Xn = Xn.apply(L, kt || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: f } = e, { i18n: d } = e, { showShareButton: h } = e, { showDownloadButton: m } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: w } = e, { labelColors: p } = e, { boxMinSize: q } = e, { handleSize: M } = e, { height: D } = e, { width: C } = e, { boxThickness: k } = e, { disableEditBoxes: y } = e, { singleBox: B } = e, { showRemoveButton: A } = e, { handlesCursor: S } = e, { boxSelectedThickness: Y } = e, { max_file_size: F = null } = e, { cli_upload: J } = e, { stream_handler: z } = e, { useDefaultLabel: me } = e, { enableKeyboardShortcuts: R } = e, { showBoxLabels: $ } = e, { readOnlyBoxes: I = !1 } = e, O, _e = !1, { active_source: Z = null } = e;
  function re({ detail: L }) {
    t(1, s = new br()), t(1, s.image = L, s), ke("upload");
  }
  function j(L) {
    return o(this, void 0, void 0, function* () {
      const kt = yield O.load_files([new File([L], "webcam.png")]), Et = (kt == null ? void 0 : kt[0]) || null;
      Et ? (t(1, s = new br()), t(1, s.image = Et, s)) : t(1, s = null), yield L2(), ke("change");
    });
  }
  const ke = D2();
  let W = !1;
  function x(L) {
    return o(this, void 0, void 0, function* () {
      switch (L) {
        case "clipboard":
          O.paste_clipboard();
          break;
      }
    });
  }
  function oe() {
    t(1, s = null), ke("clear"), ke("change");
  }
  const se = async (L) => L === null ? "" : `<img src="${await Vd(L.image)}" />`;
  function le(L) {
    ki.call(this, i, L);
  }
  function ge(L) {
    ki.call(this, i, L);
  }
  function te(L) {
    Xi[L ? "unshift" : "push"](() => {
      O = L, t(34, O);
    });
  }
  function E(L) {
    _e = L, t(32, _e);
  }
  function Ze(L) {
    W = L, t(33, W);
  }
  function it(L) {
    ki.call(this, i, L);
  }
  const ut = (L) => j(L.detail), cn = (L) => j(L.detail);
  function Ol(L) {
    ki.call(this, i, L);
  }
  function $l(L) {
    ki.call(this, i, L);
  }
  const xl = (L) => j(L.detail);
  function ai(L) {
    s = L, t(1, s);
  }
  const Nl = () => ke("change");
  function Ul(L) {
    Z = L, t(0, Z), t(4, _);
  }
  return i.$$set = (L) => {
    "value" in L && t(1, s = L.value), "label" in L && t(2, r = L.label), "show_label" in L && t(3, a = L.show_label), "sources" in L && t(4, _ = L.sources), "selectable" in L && t(5, c = L.selectable), "root" in L && t(6, u = L.root), "interactive" in L && t(7, f = L.interactive), "i18n" in L && t(8, d = L.i18n), "showShareButton" in L && t(9, h = L.showShareButton), "showDownloadButton" in L && t(10, m = L.showDownloadButton), "showClearButton" in L && t(11, g = L.showClearButton), "boxesAlpha" in L && t(12, b = L.boxesAlpha), "labelList" in L && t(13, w = L.labelList), "labelColors" in L && t(14, p = L.labelColors), "boxMinSize" in L && t(15, q = L.boxMinSize), "handleSize" in L && t(16, M = L.handleSize), "height" in L && t(17, D = L.height), "width" in L && t(18, C = L.width), "boxThickness" in L && t(19, k = L.boxThickness), "disableEditBoxes" in L && t(20, y = L.disableEditBoxes), "singleBox" in L && t(21, B = L.singleBox), "showRemoveButton" in L && t(22, A = L.showRemoveButton), "handlesCursor" in L && t(23, S = L.handlesCursor), "boxSelectedThickness" in L && t(24, Y = L.boxSelectedThickness), "max_file_size" in L && t(25, F = L.max_file_size), "cli_upload" in L && t(26, J = L.cli_upload), "stream_handler" in L && t(27, z = L.stream_handler), "useDefaultLabel" in L && t(28, me = L.useDefaultLabel), "enableKeyboardShortcuts" in L && t(29, R = L.enableKeyboardShortcuts), "showBoxLabels" in L && t(30, $ = L.showBoxLabels), "readOnlyBoxes" in L && t(31, I = L.readOnlyBoxes), "active_source" in L && t(0, Z = L.active_source), "$$scope" in L && t(56, l = L.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[1] & /*uploading*/
    2 && _e && oe(), i.$$.dirty[1] & /*dragging*/
    4 && ke("drag", W), i.$$.dirty[0] & /*active_source, sources*/
    17 && !Z && _ && t(0, Z = _[0]);
  }, [
    Z,
    s,
    r,
    a,
    _,
    c,
    u,
    f,
    d,
    h,
    m,
    g,
    b,
    w,
    p,
    q,
    M,
    D,
    C,
    k,
    y,
    B,
    A,
    S,
    Y,
    F,
    J,
    z,
    me,
    R,
    $,
    I,
    _e,
    W,
    O,
    re,
    j,
    ke,
    x,
    oe,
    n,
    se,
    le,
    ge,
    te,
    E,
    Ze,
    it,
    ut,
    cn,
    Ol,
    $l,
    xl,
    ai,
    Nl,
    Ul,
    l
  ];
}
class A2 extends w2 {
  constructor(e) {
    super(), S2(
      this,
      e,
      W2,
      R2,
      z2,
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
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: X2,
  attr: pl,
  detach: T_,
  element: F_,
  init: Y2,
  insert: O_,
  noop: zr,
  safe_not_equal: I2,
  src_url_equal: Br,
  toggle_class: ln
} = window.__gradio__svelte__internal;
function Dr(i) {
  let e, t;
  return {
    c() {
      e = F_("img"), Br(e.src, t = /*value*/
      i[0].url) || pl(e, "src", t), pl(e, "alt", "");
    },
    m(n, l) {
      O_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Br(e.src, t = /*value*/
      n[0].url) && pl(e, "src", t);
    },
    d(n) {
      n && T_(e);
    }
  };
}
function H2(i) {
  let e, t = (
    /*value*/
    i[0] && Dr(i)
  );
  return {
    c() {
      e = F_("div"), t && t.c(), pl(e, "class", "container svelte-1sgcyba"), ln(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), ln(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), ln(
        e,
        "selected",
        /*selected*/
        i[2]
      ), ln(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      O_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Dr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && ln(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && ln(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && ln(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && ln(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: zr,
    o: zr,
    d(n) {
      n && T_(e), t && t.d();
    }
  };
}
function j2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class nz extends X2 {
  constructor(e) {
    super(), Y2(this, e, j2, H2, I2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: T2,
  add_flush_callback: Lr,
  assign: F2,
  bind: Mr,
  binding_callbacks: Er,
  check_outros: O2,
  create_component: Rn,
  destroy_component: Wn,
  detach: $_,
  empty: $2,
  flush: ee,
  get_spread_object: x2,
  get_spread_update: N2,
  group_outros: U2,
  init: V2,
  insert: x_,
  mount_component: An,
  safe_not_equal: P2,
  space: K2,
  transition_in: Nt,
  transition_out: Ut
} = window.__gradio__svelte__internal;
function Z2(i) {
  let e, t;
  return e = new eu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Q2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Rn(e.$$.fragment);
    },
    m(n, l) {
      An(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      65536 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ut(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function G2(i) {
  let e, t;
  return e = new Nr({
    props: {
      i18n: (
        /*gradio*/
        i[34].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      Rn(e.$$.fragment);
    },
    m(n, l) {
      An(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      8 && (o.i18n = /*gradio*/
      n[34].i18n), e.$set(o);
    },
    i(n) {
      t || (Nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ut(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function J2(i) {
  let e, t;
  return e = new Nr({
    props: {
      i18n: (
        /*gradio*/
        i[34].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Rn(e.$$.fragment);
    },
    m(n, l) {
      An(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      8 && (o.i18n = /*gradio*/
      n[34].i18n), e.$set(o);
    },
    i(n) {
      t || (Nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ut(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function Q2(i) {
  let e, t;
  return e = new Hr({}), {
    c() {
      Rn(e.$$.fragment);
    },
    m(n, l) {
      An(e, n, l), t = !0;
    },
    i(n) {
      t || (Nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ut(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function ep(i) {
  let e, t, n, l;
  const o = [J2, G2, Z2], s = [];
  function r(a, _) {
    return (
      /*active_source*/
      a[36] === "upload" ? 0 : (
        /*active_source*/
        a[36] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = $2();
    },
    m(a, _) {
      s[e].m(a, _), x_(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (U2(), Ut(s[c], 1, 1, () => {
        s[c] = null;
      }), O2(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Nt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Nt(t), l = !0);
    },
    o(a) {
      Ut(t), l = !1;
    },
    d(a) {
      a && $_(n), s[e].d(a);
    }
  };
}
function tp(i) {
  let e, t, n, l, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        i[34].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      i[34].i18n
    ) },
    /*loading_status*/
    i[1]
  ];
  let a = {};
  for (let f = 0; f < r.length; f += 1)
    a = F2(a, r[f]);
  e = new sh({ props: a });
  function _(f) {
    i[37](f);
  }
  function c(f) {
    i[38](f);
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
      i[34].i18n
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
      i[34].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      i[34].client.upload
    ),
    stream_handler: (
      /*gradio*/
      i[34].client.stream
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
    readOnlyBoxes: (
      /*read_only_boxes*/
      i[33]
    ),
    $$slots: { default: [ep] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[36] !== void 0 && (u.active_source = /*active_source*/
    i[36]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new A2({ props: u }), Er.push(() => Mr(n, "active_source", _)), Er.push(() => Mr(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      i[39]
    ), n.$on(
      "edit",
      /*edit_handler*/
      i[40]
    ), n.$on(
      "clear",
      /*clear_handler*/
      i[41]
    ), n.$on(
      "drag",
      /*drag_handler*/
      i[42]
    ), n.$on(
      "upload",
      /*upload_handler*/
      i[43]
    ), n.$on(
      "select",
      /*select_handler*/
      i[44]
    ), n.$on(
      "share",
      /*share_handler*/
      i[45]
    ), n.$on(
      "error",
      /*error_handler*/
      i[46]
    ), {
      c() {
        Rn(e.$$.fragment), t = K2(), Rn(n.$$.fragment);
      },
      m(f, d) {
        An(e, f, d), x_(f, t, d), An(n, f, d), s = !0;
      },
      p(f, d) {
        const h = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        8 ? N2(r, [
          d[1] & /*gradio*/
          8 && {
            autoscroll: (
              /*gradio*/
              f[34].autoscroll
            )
          },
          d[1] & /*gradio*/
          8 && { i18n: (
            /*gradio*/
            f[34].i18n
          ) },
          d[0] & /*loading_status*/
          2 && x2(
            /*loading_status*/
            f[1]
          )
        ]) : {};
        e.$set(h);
        const m = {};
        d[0] & /*_selectable*/
        1024 && (m.selectable = /*_selectable*/
        f[10]), d[0] & /*root*/
        128 && (m.root = /*root*/
        f[7]), d[0] & /*sources*/
        16384 && (m.sources = /*sources*/
        f[14]), d[0] & /*interactive*/
        262144 && (m.interactive = /*interactive*/
        f[18]), d[0] & /*show_download_button*/
        32768 && (m.showDownloadButton = /*show_download_button*/
        f[15]), d[0] & /*show_share_button*/
        65536 && (m.showShareButton = /*show_share_button*/
        f[16]), d[0] & /*show_clear_button*/
        131072 && (m.showClearButton = /*show_clear_button*/
        f[17]), d[1] & /*gradio*/
        8 && (m.i18n = /*gradio*/
        f[34].i18n), d[0] & /*boxes_alpha*/
        524288 && (m.boxesAlpha = /*boxes_alpha*/
        f[19]), d[0] & /*height*/
        256 && (m.height = /*height*/
        f[8]), d[0] & /*width*/
        512 && (m.width = /*width*/
        f[9]), d[0] & /*label_list*/
        1048576 && (m.labelList = /*label_list*/
        f[20]), d[0] & /*label_colors*/
        2097152 && (m.labelColors = /*label_colors*/
        f[21]), d[0] & /*box_min_size*/
        4194304 && (m.boxMinSize = /*box_min_size*/
        f[22]), d[0] & /*label*/
        32 && (m.label = /*label*/
        f[5]), d[0] & /*show_label*/
        64 && (m.show_label = /*show_label*/
        f[6]), d[1] & /*gradio*/
        8 && (m.max_file_size = /*gradio*/
        f[34].max_file_size), d[1] & /*gradio*/
        8 && (m.cli_upload = /*gradio*/
        f[34].client.upload), d[1] & /*gradio*/
        8 && (m.stream_handler = /*gradio*/
        f[34].client.stream), d[0] & /*handle_size*/
        8388608 && (m.handleSize = /*handle_size*/
        f[23]), d[0] & /*box_thickness*/
        16777216 && (m.boxThickness = /*box_thickness*/
        f[24]), d[0] & /*box_selected_thickness*/
        33554432 && (m.boxSelectedThickness = /*box_selected_thickness*/
        f[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (m.disableEditBoxes = /*disable_edit_boxes*/
        f[26]), d[0] & /*single_box*/
        134217728 && (m.singleBox = /*single_box*/
        f[27]), d[0] & /*show_remove_button*/
        268435456 && (m.showRemoveButton = /*show_remove_button*/
        f[28]), d[0] & /*handles_cursor*/
        536870912 && (m.handlesCursor = /*handles_cursor*/
        f[29]), d[0] & /*use_default_label*/
        1073741824 && (m.useDefaultLabel = /*use_default_label*/
        f[30]), d[1] & /*enable_keyboard_shortcuts*/
        1 && (m.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        f[31]), d[1] & /*show_box_labels*/
        2 && (m.showBoxLabels = /*show_box_labels*/
        f[32]), d[1] & /*read_only_boxes*/
        4 && (m.readOnlyBoxes = /*read_only_boxes*/
        f[33]), d[1] & /*$$scope, gradio, active_source*/
        65576 && (m.$$scope = { dirty: d, ctx: f }), !l && d[1] & /*active_source*/
        32 && (l = !0, m.active_source = /*active_source*/
        f[36], Lr(() => l = !1)), !o && d[0] & /*value*/
        1 && (o = !0, m.value = /*value*/
        f[0], Lr(() => o = !1)), n.$set(m);
      },
      i(f) {
        s || (Nt(e.$$.fragment, f), Nt(n.$$.fragment, f), s = !0);
      },
      o(f) {
        Ut(e.$$.fragment, f), Ut(n.$$.fragment, f), s = !1;
      },
      d(f) {
        f && $_(t), Wn(e, f), Wn(n, f);
      }
    }
  );
}
function np(i) {
  let e, t;
  return e = new Sc({
    props: {
      visible: (
        /*visible*/
        i[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        i[35] ? "focus" : "base"
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
      $$slots: { default: [tp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Rn(e.$$.fragment);
    },
    m(n, l) {
      An(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), l[1] & /*dragging*/
      16 && (o.border_mode = /*dragging*/
      n[35] ? "focus" : "base"), l[0] & /*elem_id*/
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
      2147469283 | l[1] & /*$$scope, gradio, enable_keyboard_shortcuts, show_box_labels, read_only_boxes, active_source, dragging*/
      65599 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Nt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ut(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function ip(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: u } = e, { _selectable: f = !1 } = e, { container: d = !0 } = e, { scale: h = null } = e, { min_width: m = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: p } = e, { show_clear_button: q } = e, { interactive: M } = e, { boxes_alpha: D } = e, { label_list: C } = e, { label_colors: k } = e, { box_min_size: y } = e, { handle_size: B } = e, { box_thickness: A } = e, { box_selected_thickness: S } = e, { disable_edit_boxes: Y } = e, { single_box: F } = e, { show_remove_button: J } = e, { handles_cursor: z } = e, { use_default_label: me } = e, { enable_keyboard_shortcuts: R } = e, { show_box_labels: $ } = e, { read_only_boxes: I = !1 } = e, { gradio: O } = e, _e, Z = null;
  function re(E) {
    Z = E, t(36, Z);
  }
  function j(E) {
    s = E, t(0, s);
  }
  const ke = () => O.dispatch("change"), W = () => O.dispatch("edit"), x = () => {
    O.dispatch("clear");
  }, oe = ({ detail: E }) => t(35, _e = E), se = () => O.dispatch("upload"), le = ({ detail: E }) => O.dispatch("select", E), ge = ({ detail: E }) => O.dispatch("share", E), te = ({ detail: E }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), O.dispatch("error", E);
  };
  return i.$$set = (E) => {
    "elem_id" in E && t(2, n = E.elem_id), "elem_classes" in E && t(3, l = E.elem_classes), "visible" in E && t(4, o = E.visible), "value" in E && t(0, s = E.value), "label" in E && t(5, r = E.label), "show_label" in E && t(6, a = E.show_label), "root" in E && t(7, _ = E.root), "height" in E && t(8, c = E.height), "width" in E && t(9, u = E.width), "_selectable" in E && t(10, f = E._selectable), "container" in E && t(11, d = E.container), "scale" in E && t(12, h = E.scale), "min_width" in E && t(13, m = E.min_width), "loading_status" in E && t(1, g = E.loading_status), "sources" in E && t(14, b = E.sources), "show_download_button" in E && t(15, w = E.show_download_button), "show_share_button" in E && t(16, p = E.show_share_button), "show_clear_button" in E && t(17, q = E.show_clear_button), "interactive" in E && t(18, M = E.interactive), "boxes_alpha" in E && t(19, D = E.boxes_alpha), "label_list" in E && t(20, C = E.label_list), "label_colors" in E && t(21, k = E.label_colors), "box_min_size" in E && t(22, y = E.box_min_size), "handle_size" in E && t(23, B = E.handle_size), "box_thickness" in E && t(24, A = E.box_thickness), "box_selected_thickness" in E && t(25, S = E.box_selected_thickness), "disable_edit_boxes" in E && t(26, Y = E.disable_edit_boxes), "single_box" in E && t(27, F = E.single_box), "show_remove_button" in E && t(28, J = E.show_remove_button), "handles_cursor" in E && t(29, z = E.handles_cursor), "use_default_label" in E && t(30, me = E.use_default_label), "enable_keyboard_shortcuts" in E && t(31, R = E.enable_keyboard_shortcuts), "show_box_labels" in E && t(32, $ = E.show_box_labels), "read_only_boxes" in E && t(33, I = E.read_only_boxes), "gradio" in E && t(34, O = E.gradio);
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
    h,
    m,
    b,
    w,
    p,
    q,
    M,
    D,
    C,
    k,
    y,
    B,
    A,
    S,
    Y,
    F,
    J,
    z,
    me,
    R,
    $,
    I,
    O,
    _e,
    Z,
    re,
    j,
    ke,
    W,
    x,
    oe,
    se,
    le,
    ge,
    te
  ];
}
class iz extends T2 {
  constructor(e) {
    super(), V2(
      this,
      e,
      ip,
      np,
      P2,
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
    this.$$set({ elem_id: e }), ee();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), ee();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), ee();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), ee();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), ee();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), ee();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), ee();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), ee();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), ee();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), ee();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), ee();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), ee();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), ee();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), ee();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), ee();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), ee();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), ee();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), ee();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), ee();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), ee();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), ee();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), ee();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), ee();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), ee();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), ee();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), ee();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), ee();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), ee();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), ee();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), ee();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), ee();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), ee();
  }
  get show_box_labels() {
    return this.$$.ctx[32];
  }
  set show_box_labels(e) {
    this.$$set({ show_box_labels: e }), ee();
  }
  get read_only_boxes() {
    return this.$$.ctx[33];
  }
  set read_only_boxes(e) {
    this.$$set({ read_only_boxes: e }), ee();
  }
  get gradio() {
    return this.$$.ctx[34];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), ee();
  }
}
export {
  nz as BaseExample,
  iz as default
};
