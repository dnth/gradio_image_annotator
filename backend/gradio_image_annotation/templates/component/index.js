const {
  SvelteComponent: P_,
  assign: K_,
  create_slot: x_,
  detach: Z_,
  element: G_,
  get_all_dirty_from_scope: J_,
  get_slot_changes: Q_,
  get_spread_update: ec,
  init: tc,
  insert: nc,
  safe_not_equal: ic,
  set_dynamic_element_data: ps,
  set_style: Oe,
  toggle_class: wt,
  transition_in: pr,
  transition_out: wr,
  update_slot_base: lc
} = window.__gradio__svelte__internal;
function oc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = x_(
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
    r = K_(r, s[a]);
  return {
    c() {
      e = G_(
        /*tag*/
        i[14]
      ), o && o.c(), ps(
        /*tag*/
        i[14]
      )(e, r), wt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), wt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), wt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), wt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), wt(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Oe(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Oe(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Oe(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Oe(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Oe(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Oe(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Oe(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      nc(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && lc(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? Q_(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : J_(
          /*$$scope*/
          a[17]
        ),
        null
      ), ps(
        /*tag*/
        a[14]
      )(e, r = ec(s, [
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
      ])), wt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), wt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), wt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), wt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), wt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), _ & /*height*/
      1 && Oe(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && Oe(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && Oe(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && Oe(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && Oe(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && Oe(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (pr(o, a), n = !0);
    },
    o(a) {
      wr(o, a), n = !1;
    },
    d(a) {
      a && Z_(e), o && o.d(a);
    }
  };
}
function sc(i) {
  let e, t = (
    /*tag*/
    i[14] && oc(i)
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
      e || (pr(t, n), e = !0);
    },
    o(n) {
      wr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function ac(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: f = !0 } = e, { type: u = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: v = null } = e, { min_width: p = 0 } = e, z = u === "fieldset" ? "fieldset" : "div";
  const L = (B) => {
    if (B !== void 0) {
      if (typeof B == "number")
        return B + "px";
      if (typeof B == "string")
        return B;
    }
  };
  return i.$$set = (B) => {
    "height" in B && t(0, o = B.height), "width" in B && t(1, s = B.width), "elem_id" in B && t(2, r = B.elem_id), "elem_classes" in B && t(3, a = B.elem_classes), "variant" in B && t(4, _ = B.variant), "border_mode" in B && t(5, c = B.border_mode), "padding" in B && t(6, f = B.padding), "type" in B && t(16, u = B.type), "test_id" in B && t(7, d = B.test_id), "explicit_call" in B && t(8, m = B.explicit_call), "container" in B && t(9, h = B.container), "visible" in B && t(10, g = B.visible), "allow_overflow" in B && t(11, b = B.allow_overflow), "scale" in B && t(12, v = B.scale), "min_width" in B && t(13, p = B.min_width), "$$scope" in B && t(17, l = B.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    f,
    d,
    m,
    h,
    g,
    b,
    v,
    p,
    z,
    L,
    u,
    l,
    n
  ];
}
class rc extends P_ {
  constructor(e) {
    super(), tc(this, e, ac, sc, ic, {
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
  SvelteComponent: _c,
  attr: cc,
  create_slot: uc,
  detach: fc,
  element: dc,
  get_all_dirty_from_scope: hc,
  get_slot_changes: mc,
  init: gc,
  insert: bc,
  safe_not_equal: pc,
  transition_in: wc,
  transition_out: vc,
  update_slot_base: kc
} = window.__gradio__svelte__internal;
function Cc(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = uc(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = dc("div"), l && l.c(), cc(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      bc(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && kc(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? mc(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : hc(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (wc(l, o), t = !0);
    },
    o(o) {
      vc(l, o), t = !1;
    },
    d(o) {
      o && fc(e), l && l.d(o);
    }
  };
}
function yc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class Sc extends _c {
  constructor(e) {
    super(), gc(this, e, yc, Cc, pc, {});
  }
}
const {
  SvelteComponent: qc,
  attr: ws,
  check_outros: zc,
  create_component: Bc,
  create_slot: Dc,
  destroy_component: Lc,
  detach: al,
  element: Mc,
  empty: Ec,
  get_all_dirty_from_scope: Rc,
  get_slot_changes: Wc,
  group_outros: Ac,
  init: Xc,
  insert: rl,
  mount_component: Yc,
  safe_not_equal: Ic,
  set_data: Hc,
  space: jc,
  text: Tc,
  toggle_class: Rn,
  transition_in: pi,
  transition_out: _l,
  update_slot_base: Fc
} = window.__gradio__svelte__internal;
function vs(i) {
  let e, t;
  return e = new Sc({
    props: {
      $$slots: { default: [Uc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Bc(e.$$.fragment);
    },
    m(n, l) {
      Yc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (pi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _l(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lc(e, n);
    }
  };
}
function Uc(i) {
  let e;
  return {
    c() {
      e = Tc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      rl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Hc(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && al(e);
    }
  };
}
function Vc(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = Dc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && vs(i)
  );
  return {
    c() {
      e = Mc("span"), s && s.c(), t = jc(), r && r.c(), n = Ec(), ws(e, "data-testid", "block-info"), ws(e, "class", "svelte-22c38v"), Rn(e, "sr-only", !/*show_label*/
      i[0]), Rn(e, "hide", !/*show_label*/
      i[0]), Rn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      rl(a, e, _), s && s.m(e, null), rl(a, t, _), r && r.m(a, _), rl(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && Fc(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? Wc(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : Rc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || _ & /*show_label*/
      1) && Rn(e, "sr-only", !/*show_label*/
      a[0]), (!l || _ & /*show_label*/
      1) && Rn(e, "hide", !/*show_label*/
      a[0]), (!l || _ & /*info*/
      2) && Rn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, _), _ & /*info*/
      2 && pi(r, 1)) : (r = vs(a), r.c(), pi(r, 1), r.m(n.parentNode, n)) : r && (Ac(), _l(r, 1, 1, () => {
        r = null;
      }), zc());
    },
    i(a) {
      l || (pi(s, a), pi(r), l = !0);
    },
    o(a) {
      _l(s, a), _l(r), l = !1;
    },
    d(a) {
      a && (al(e), al(t), al(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function Oc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class vr extends qc {
  constructor(e) {
    super(), Xc(this, e, Oc, Vc, Ic, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Nc,
  append: Ol,
  attr: Ii,
  create_component: $c,
  destroy_component: Pc,
  detach: Kc,
  element: ks,
  init: xc,
  insert: Zc,
  mount_component: Gc,
  safe_not_equal: Jc,
  set_data: Qc,
  space: eu,
  text: tu,
  toggle_class: Ot,
  transition_in: nu,
  transition_out: iu
} = window.__gradio__svelte__internal;
function lu(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ks("label"), t = ks("span"), $c(n.$$.fragment), l = eu(), o = tu(
        /*label*/
        i[0]
      ), Ii(t, "class", "svelte-9gxdi0"), Ii(e, "for", ""), Ii(e, "data-testid", "block-label"), Ii(e, "class", "svelte-9gxdi0"), Ot(e, "hide", !/*show_label*/
      i[2]), Ot(e, "sr-only", !/*show_label*/
      i[2]), Ot(
        e,
        "float",
        /*float*/
        i[4]
      ), Ot(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Zc(r, e, a), Ol(e, t), Gc(n, t, null), Ol(e, l), Ol(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Qc(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Ot(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Ot(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Ot(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Ot(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (nu(n.$$.fragment, r), s = !0);
    },
    o(r) {
      iu(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Kc(e), Pc(n);
    }
  };
}
function ou(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class su extends Nc {
  constructor(e) {
    super(), xc(this, e, ou, lu, Jc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: au,
  append: Ho,
  attr: At,
  bubble: ru,
  create_component: _u,
  destroy_component: cu,
  detach: kr,
  element: jo,
  init: uu,
  insert: Cr,
  listen: fu,
  mount_component: du,
  safe_not_equal: hu,
  set_data: mu,
  set_style: Wn,
  space: gu,
  text: bu,
  toggle_class: We,
  transition_in: pu,
  transition_out: wu
} = window.__gradio__svelte__internal;
function Cs(i) {
  let e, t;
  return {
    c() {
      e = jo("span"), t = bu(
        /*label*/
        i[1]
      ), At(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Cr(n, e, l), Ho(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && mu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && kr(e);
    }
  };
}
function vu(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && Cs(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = jo("button"), a && a.c(), t = gu(), n = jo("div"), _u(l.$$.fragment), At(n, "class", "svelte-1lrphxw"), We(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), We(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), We(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], At(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), At(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), At(
        e,
        "title",
        /*label*/
        i[1]
      ), At(e, "class", "svelte-1lrphxw"), We(
        e,
        "pending",
        /*pending*/
        i[3]
      ), We(
        e,
        "padded",
        /*padded*/
        i[5]
      ), We(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), We(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Wn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Wn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Wn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(_, c) {
      Cr(_, e, c), a && a.m(e, null), Ho(e, t), Ho(e, n), du(l, n, null), o = !0, s || (r = fu(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = Cs(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && We(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && We(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && We(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && At(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && At(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && At(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && We(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && We(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && We(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && We(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), c & /*disabled, _color*/
      4224 && Wn(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[12] ? (
        /*_color*/
        _[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Wn(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      )), c & /*offset*/
      2048 && Wn(
        e,
        "margin-left",
        /*offset*/
        _[11] + "px"
      );
    },
    i(_) {
      o || (pu(l.$$.fragment, _), o = !0);
    },
    o(_) {
      wu(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && kr(e), a && a.d(), cu(l), s = !1, r();
    }
  };
}
function ku(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: f = !1 } = e, { hasPopup: u = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(v) {
    ru.call(this, i, v);
  }
  return i.$$set = (v) => {
    "Icon" in v && t(0, l = v.Icon), "label" in v && t(1, o = v.label), "show_label" in v && t(2, s = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, _ = v.padded), "highlight" in v && t(6, c = v.highlight), "disabled" in v && t(7, f = v.disabled), "hasPopup" in v && t(8, u = v.hasPopup), "color" in v && t(13, d = v.color), "transparent" in v && t(9, m = v.transparent), "background" in v && t(10, h = v.background), "offset" in v && t(11, g = v.offset);
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
    f,
    u,
    m,
    h,
    g,
    n,
    d,
    b
  ];
}
class Dl extends au {
  constructor(e) {
    super(), uu(this, e, ku, vu, hu, {
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
  SvelteComponent: Cu,
  append: yu,
  attr: Nl,
  binding_callbacks: Su,
  create_slot: qu,
  detach: zu,
  element: ys,
  get_all_dirty_from_scope: Bu,
  get_slot_changes: Du,
  init: Lu,
  insert: Mu,
  safe_not_equal: Eu,
  toggle_class: Nt,
  transition_in: Ru,
  transition_out: Wu,
  update_slot_base: Au
} = window.__gradio__svelte__internal;
function Xu(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = qu(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ys("div"), t = ys("div"), o && o.c(), Nl(t, "class", "icon svelte-3w3rth"), Nl(e, "class", "empty svelte-3w3rth"), Nl(e, "aria-label", "Empty value"), Nt(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Nt(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Nt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Nt(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      Mu(s, e, r), yu(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Au(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? Du(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Bu(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Nt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Nt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Nt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Nt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (Ru(o, s), n = !0);
    },
    o(s) {
      Wu(o, s), n = !1;
    },
    d(s) {
      s && zu(e), o && o.d(s), i[6](null);
    }
  };
}
function Yu(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(f) {
    var u;
    if (!f) return !1;
    const { height: d } = f.getBoundingClientRect(), { height: m } = ((u = f.parentElement) === null || u === void 0 ? void 0 : u.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(f) {
    Su[f ? "unshift" : "push"](() => {
      a = f, t(2, a);
    });
  }
  return i.$$set = (f) => {
    "size" in f && t(0, s = f.size), "unpadded_box" in f && t(1, r = f.unpadded_box), "$$scope" in f && t(4, o = f.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = _(a));
  }, [s, r, a, n, o, l, c];
}
class Iu extends Cu {
  constructor(e) {
    super(), Lu(this, e, Yu, Xu, Eu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: B2,
  append: D2,
  attr: L2,
  detach: M2,
  init: E2,
  insert: R2,
  noop: W2,
  safe_not_equal: A2,
  svg_element: X2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y2,
  append: I2,
  attr: H2,
  detach: j2,
  init: T2,
  insert: F2,
  noop: U2,
  safe_not_equal: V2,
  svg_element: O2
} = window.__gradio__svelte__internal, {
  SvelteComponent: N2,
  append: $2,
  attr: P2,
  detach: K2,
  init: x2,
  insert: Z2,
  noop: G2,
  safe_not_equal: J2,
  svg_element: Q2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Hu,
  append: Ss,
  attr: Ae,
  detach: ju,
  init: Tu,
  insert: Fu,
  noop: $l,
  safe_not_equal: Uu,
  svg_element: Pl
} = window.__gradio__svelte__internal;
function Vu(i) {
  let e, t, n;
  return {
    c() {
      e = Pl("svg"), t = Pl("path"), n = Pl("circle"), Ae(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ae(n, "cx", "12"), Ae(n, "cy", "13"), Ae(n, "r", "4"), Ae(e, "xmlns", "http://www.w3.org/2000/svg"), Ae(e, "width", "100%"), Ae(e, "height", "100%"), Ae(e, "viewBox", "0 0 24 24"), Ae(e, "fill", "none"), Ae(e, "stroke", "currentColor"), Ae(e, "stroke-width", "1.5"), Ae(e, "stroke-linecap", "round"), Ae(e, "stroke-linejoin", "round"), Ae(e, "class", "feather feather-camera");
    },
    m(l, o) {
      Fu(l, e, o), Ss(e, t), Ss(e, n);
    },
    p: $l,
    i: $l,
    o: $l,
    d(l) {
      l && ju(e);
    }
  };
}
class Ou extends Hu {
  constructor(e) {
    super(), Tu(this, e, null, Vu, Uu, {});
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
  SvelteComponent: Nu,
  append: $u,
  attr: ct,
  detach: Pu,
  init: Ku,
  insert: xu,
  noop: Kl,
  safe_not_equal: Zu,
  svg_element: qs
} = window.__gradio__svelte__internal;
function Gu(i) {
  let e, t;
  return {
    c() {
      e = qs("svg"), t = qs("circle"), ct(t, "cx", "12"), ct(t, "cy", "12"), ct(t, "r", "10"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "100%"), ct(e, "height", "100%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "stroke-width", "1.5"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-circle");
    },
    m(n, l) {
      xu(n, e, l), $u(e, t);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(n) {
      n && Pu(e);
    }
  };
}
class Ju extends Nu {
  constructor(e) {
    super(), Ku(this, e, null, Gu, Zu, {});
  }
}
const {
  SvelteComponent: Qu,
  append: xl,
  attr: ut,
  detach: ef,
  init: tf,
  insert: nf,
  noop: Zl,
  safe_not_equal: lf,
  set_style: vt,
  svg_element: Hi
} = window.__gradio__svelte__internal;
function of(i) {
  let e, t, n, l;
  return {
    c() {
      e = Hi("svg"), t = Hi("g"), n = Hi("path"), l = Hi("path"), ut(n, "d", "M18,6L6.087,17.913"), vt(n, "fill", "none"), vt(n, "fill-rule", "nonzero"), vt(n, "stroke-width", "2px"), ut(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), ut(l, "d", "M4.364,4.364L19.636,19.636"), vt(l, "fill", "none"), vt(l, "fill-rule", "nonzero"), vt(l, "stroke-width", "2px"), ut(e, "width", "100%"), ut(e, "height", "100%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "version", "1.1"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ut(e, "xml:space", "preserve"), ut(e, "stroke", "currentColor"), vt(e, "fill-rule", "evenodd"), vt(e, "clip-rule", "evenodd"), vt(e, "stroke-linecap", "round"), vt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      nf(o, e, s), xl(e, t), xl(t, n), xl(e, l);
    },
    p: Zl,
    i: Zl,
    o: Zl,
    d(o) {
      o && ef(e);
    }
  };
}
class yr extends Qu {
  constructor(e) {
    super(), tf(this, e, null, of, lf, {});
  }
}
const {
  SvelteComponent: Bp,
  append: Dp,
  attr: Lp,
  detach: Mp,
  init: Ep,
  insert: Rp,
  noop: Wp,
  safe_not_equal: Ap,
  svg_element: Xp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Yp,
  append: Ip,
  attr: Hp,
  detach: jp,
  init: Tp,
  insert: Fp,
  noop: Up,
  safe_not_equal: Vp,
  svg_element: Op
} = window.__gradio__svelte__internal, {
  SvelteComponent: sf,
  append: af,
  attr: ci,
  detach: rf,
  init: _f,
  insert: cf,
  noop: Gl,
  safe_not_equal: uf,
  svg_element: zs
} = window.__gradio__svelte__internal;
function ff(i) {
  let e, t;
  return {
    c() {
      e = zs("svg"), t = zs("path"), ci(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), ci(t, "fill", "currentColor"), ci(e, "id", "icon"), ci(e, "xmlns", "http://www.w3.org/2000/svg"), ci(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      cf(n, e, l), af(e, t);
    },
    p: Gl,
    i: Gl,
    o: Gl,
    d(n) {
      n && rf(e);
    }
  };
}
class df extends sf {
  constructor(e) {
    super(), _f(this, e, null, ff, uf, {});
  }
}
const {
  SvelteComponent: Np,
  append: $p,
  attr: Pp,
  detach: Kp,
  init: xp,
  insert: Zp,
  noop: Gp,
  safe_not_equal: Jp,
  svg_element: Qp
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
  SvelteComponent: hf,
  append: mf,
  attr: An,
  detach: gf,
  init: bf,
  insert: pf,
  noop: Jl,
  safe_not_equal: wf,
  svg_element: Bs
} = window.__gradio__svelte__internal;
function vf(i) {
  let e, t;
  return {
    c() {
      e = Bs("svg"), t = Bs("path"), An(t, "fill", "currentColor"), An(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), An(e, "xmlns", "http://www.w3.org/2000/svg"), An(e, "width", "100%"), An(e, "height", "100%"), An(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      pf(n, e, l), mf(e, t);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(n) {
      n && gf(e);
    }
  };
}
class kf extends hf {
  constructor(e) {
    super(), bf(this, e, null, vf, wf, {});
  }
}
const {
  SvelteComponent: Cf,
  append: yf,
  attr: Xn,
  detach: Sf,
  init: qf,
  insert: zf,
  noop: Ql,
  safe_not_equal: Bf,
  svg_element: Ds
} = window.__gradio__svelte__internal;
function Df(i) {
  let e, t;
  return {
    c() {
      e = Ds("svg"), t = Ds("path"), Xn(t, "d", "M5 8l4 4 4-4z"), Xn(e, "class", "dropdown-arrow svelte-145leq6"), Xn(e, "xmlns", "http://www.w3.org/2000/svg"), Xn(e, "width", "100%"), Xn(e, "height", "100%"), Xn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      zf(n, e, l), yf(e, t);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(n) {
      n && Sf(e);
    }
  };
}
class os extends Cf {
  constructor(e) {
    super(), qf(this, e, null, Df, Bf, {});
  }
}
const {
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
  detach: Mw,
  init: Ew,
  insert: Rw,
  noop: Ww,
  safe_not_equal: Aw,
  svg_element: Xw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Yw,
  append: Iw,
  attr: Hw,
  detach: jw,
  init: Tw,
  insert: Fw,
  noop: Uw,
  safe_not_equal: Vw,
  svg_element: Ow
} = window.__gradio__svelte__internal, {
  SvelteComponent: Nw,
  append: $w,
  attr: Pw,
  detach: Kw,
  init: xw,
  insert: Zw,
  noop: Gw,
  safe_not_equal: Jw,
  svg_element: Qw
} = window.__gradio__svelte__internal, {
  SvelteComponent: ev,
  append: tv,
  attr: nv,
  detach: iv,
  init: lv,
  insert: ov,
  noop: sv,
  safe_not_equal: av,
  svg_element: rv
} = window.__gradio__svelte__internal, {
  SvelteComponent: _v,
  append: cv,
  attr: uv,
  detach: fv,
  init: dv,
  insert: hv,
  noop: mv,
  safe_not_equal: gv,
  svg_element: bv
} = window.__gradio__svelte__internal, {
  SvelteComponent: pv,
  append: wv,
  attr: vv,
  detach: kv,
  init: Cv,
  insert: yv,
  noop: Sv,
  safe_not_equal: qv,
  svg_element: zv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Lf,
  append: eo,
  attr: ge,
  detach: Mf,
  init: Ef,
  insert: Rf,
  noop: to,
  safe_not_equal: Wf,
  svg_element: ji
} = window.__gradio__svelte__internal;
function Af(i) {
  let e, t, n, l;
  return {
    c() {
      e = ji("svg"), t = ji("rect"), n = ji("circle"), l = ji("polyline"), ge(t, "x", "3"), ge(t, "y", "3"), ge(t, "width", "18"), ge(t, "height", "18"), ge(t, "rx", "2"), ge(t, "ry", "2"), ge(n, "cx", "8.5"), ge(n, "cy", "8.5"), ge(n, "r", "1.5"), ge(l, "points", "21 15 16 10 5 21"), ge(e, "xmlns", "http://www.w3.org/2000/svg"), ge(e, "width", "100%"), ge(e, "height", "100%"), ge(e, "viewBox", "0 0 24 24"), ge(e, "fill", "none"), ge(e, "stroke", "currentColor"), ge(e, "stroke-width", "1.5"), ge(e, "stroke-linecap", "round"), ge(e, "stroke-linejoin", "round"), ge(e, "class", "feather feather-image");
    },
    m(o, s) {
      Rf(o, e, s), eo(e, t), eo(e, n), eo(e, l);
    },
    p: to,
    i: to,
    o: to,
    d(o) {
      o && Mf(e);
    }
  };
}
let Sr = class extends Lf {
  constructor(e) {
    super(), Ef(this, e, null, Af, Wf, {});
  }
};
const {
  SvelteComponent: Xf,
  append: Yf,
  attr: Ti,
  detach: If,
  init: Hf,
  insert: jf,
  noop: no,
  safe_not_equal: Tf,
  svg_element: Ls
} = window.__gradio__svelte__internal;
function Ff(i) {
  let e, t;
  return {
    c() {
      e = Ls("svg"), t = Ls("path"), Ti(t, "fill", "currentColor"), Ti(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ti(e, "xmlns", "http://www.w3.org/2000/svg"), Ti(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      jf(n, e, l), Yf(e, t);
    },
    p: no,
    i: no,
    o: no,
    d(n) {
      n && If(e);
    }
  };
}
class qr extends Xf {
  constructor(e) {
    super(), Hf(this, e, null, Ff, Tf, {});
  }
}
const {
  SvelteComponent: Dv,
  append: Lv,
  attr: Mv,
  detach: Ev,
  init: Rv,
  insert: Wv,
  noop: Av,
  safe_not_equal: Xv,
  svg_element: Yv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Iv,
  append: Hv,
  attr: jv,
  detach: Tv,
  init: Fv,
  insert: Uv,
  noop: Vv,
  safe_not_equal: Ov,
  svg_element: Nv
} = window.__gradio__svelte__internal, {
  SvelteComponent: $v,
  append: Pv,
  attr: Kv,
  detach: xv,
  init: Zv,
  insert: Gv,
  noop: Jv,
  safe_not_equal: Qv,
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
  SvelteComponent: Uf,
  append: Fi,
  attr: be,
  detach: Vf,
  init: Of,
  insert: Nf,
  noop: io,
  safe_not_equal: $f,
  svg_element: ui
} = window.__gradio__svelte__internal;
function Pf(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = ui("svg"), t = ui("path"), n = ui("path"), l = ui("line"), o = ui("line"), be(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), be(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), be(l, "x1", "12"), be(l, "y1", "19"), be(l, "x2", "12"), be(l, "y2", "23"), be(o, "x1", "8"), be(o, "y1", "23"), be(o, "x2", "16"), be(o, "y2", "23"), be(e, "xmlns", "http://www.w3.org/2000/svg"), be(e, "width", "100%"), be(e, "height", "100%"), be(e, "viewBox", "0 0 24 24"), be(e, "fill", "none"), be(e, "stroke", "currentColor"), be(e, "stroke-width", "2"), be(e, "stroke-linecap", "round"), be(e, "stroke-linejoin", "round"), be(e, "class", "feather feather-mic");
    },
    m(s, r) {
      Nf(s, e, r), Fi(e, t), Fi(e, n), Fi(e, l), Fi(e, o);
    },
    p: io,
    i: io,
    o: io,
    d(s) {
      s && Vf(e);
    }
  };
}
class Kf extends Uf {
  constructor(e) {
    super(), Of(this, e, null, Pf, $f, {});
  }
}
const {
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
  SvelteComponent: D3,
  append: L3,
  attr: M3,
  detach: E3,
  init: R3,
  insert: W3,
  noop: A3,
  safe_not_equal: X3,
  svg_element: Y3
} = window.__gradio__svelte__internal, {
  SvelteComponent: I3,
  append: H3,
  attr: j3,
  detach: T3,
  init: F3,
  insert: U3,
  noop: V3,
  safe_not_equal: O3,
  svg_element: N3
} = window.__gradio__svelte__internal, {
  SvelteComponent: $3,
  append: P3,
  attr: K3,
  detach: x3,
  init: Z3,
  insert: G3,
  noop: J3,
  safe_not_equal: Q3,
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
  SvelteComponent: xf,
  append: Ms,
  attr: Je,
  detach: Zf,
  init: Gf,
  insert: Jf,
  noop: lo,
  safe_not_equal: Qf,
  set_style: ed,
  svg_element: oo
} = window.__gradio__svelte__internal;
function td(i) {
  let e, t, n;
  return {
    c() {
      e = oo("svg"), t = oo("polyline"), n = oo("path"), Je(t, "points", "1 4 1 10 7 10"), Je(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Je(e, "xmlns", "http://www.w3.org/2000/svg"), Je(e, "width", "100%"), Je(e, "height", "100%"), Je(e, "viewBox", "0 0 24 24"), Je(e, "fill", "none"), Je(e, "stroke", "currentColor"), Je(e, "stroke-width", "2"), Je(e, "stroke-linecap", "round"), Je(e, "stroke-linejoin", "round"), Je(e, "class", "feather feather-rotate-ccw"), ed(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      Jf(l, e, o), Ms(e, t), Ms(e, n);
    },
    p: lo,
    i: lo,
    o: lo,
    d(l) {
      l && Zf(e);
    }
  };
}
class nd extends xf {
  constructor(e) {
    super(), Gf(this, e, null, td, Qf, {});
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
  attr: M4,
  detach: E4,
  init: R4,
  insert: W4,
  noop: A4,
  safe_not_equal: X4,
  svg_element: Y4
} = window.__gradio__svelte__internal, {
  SvelteComponent: I4,
  append: H4,
  attr: j4,
  detach: T4,
  init: F4,
  insert: U4,
  noop: V4,
  safe_not_equal: O4,
  svg_element: N4
} = window.__gradio__svelte__internal, {
  SvelteComponent: $4,
  append: P4,
  attr: K4,
  detach: x4,
  init: Z4,
  insert: G4,
  noop: J4,
  safe_not_equal: Q4,
  svg_element: e5
} = window.__gradio__svelte__internal, {
  SvelteComponent: t5,
  append: n5,
  attr: i5,
  detach: l5,
  init: o5,
  insert: s5,
  noop: a5,
  safe_not_equal: r5,
  svg_element: _5
} = window.__gradio__svelte__internal, {
  SvelteComponent: id,
  append: ld,
  attr: Xe,
  detach: od,
  init: sd,
  insert: ad,
  noop: so,
  safe_not_equal: rd,
  svg_element: Es
} = window.__gradio__svelte__internal;
function _d(i) {
  let e, t;
  return {
    c() {
      e = Es("svg"), t = Es("rect"), Xe(t, "x", "3"), Xe(t, "y", "3"), Xe(t, "width", "18"), Xe(t, "height", "18"), Xe(t, "rx", "2"), Xe(t, "ry", "2"), Xe(e, "xmlns", "http://www.w3.org/2000/svg"), Xe(e, "width", "100%"), Xe(e, "height", "100%"), Xe(e, "viewBox", "0 0 24 24"), Xe(e, "stroke-width", "1.5"), Xe(e, "stroke-linecap", "round"), Xe(e, "stroke-linejoin", "round"), Xe(e, "class", "feather feather-square");
    },
    m(n, l) {
      ad(n, e, l), ld(e, t);
    },
    p: so,
    i: so,
    o: so,
    d(n) {
      n && od(e);
    }
  };
}
class cd extends id {
  constructor(e) {
    super(), sd(this, e, null, _d, rd, {});
  }
}
const {
  SvelteComponent: c5,
  append: u5,
  attr: f5,
  detach: d5,
  init: h5,
  insert: m5,
  noop: g5,
  safe_not_equal: b5,
  svg_element: p5
} = window.__gradio__svelte__internal, {
  SvelteComponent: w5,
  append: v5,
  attr: k5,
  detach: C5,
  init: y5,
  insert: S5,
  noop: q5,
  safe_not_equal: z5,
  svg_element: B5
} = window.__gradio__svelte__internal, {
  SvelteComponent: D5,
  append: L5,
  attr: M5,
  detach: E5,
  init: R5,
  insert: W5,
  noop: A5,
  safe_not_equal: X5,
  svg_element: Y5,
  text: I5
} = window.__gradio__svelte__internal, {
  SvelteComponent: H5,
  append: j5,
  attr: T5,
  detach: F5,
  init: U5,
  insert: V5,
  noop: O5,
  safe_not_equal: N5,
  svg_element: $5
} = window.__gradio__svelte__internal, {
  SvelteComponent: P5,
  append: K5,
  attr: x5,
  detach: Z5,
  init: G5,
  insert: J5,
  noop: Q5,
  safe_not_equal: ek,
  svg_element: tk
} = window.__gradio__svelte__internal, {
  SvelteComponent: ud,
  append: Rs,
  attr: Qe,
  detach: fd,
  init: dd,
  insert: hd,
  noop: ao,
  safe_not_equal: md,
  svg_element: ro
} = window.__gradio__svelte__internal;
function gd(i) {
  let e, t, n;
  return {
    c() {
      e = ro("svg"), t = ro("polyline"), n = ro("path"), Qe(t, "points", "1 4 1 10 7 10"), Qe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "fill", "none"), Qe(e, "stroke", "currentColor"), Qe(e, "stroke-width", "2"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      hd(l, e, o), Rs(e, t), Rs(e, n);
    },
    p: ao,
    i: ao,
    o: ao,
    d(l) {
      l && fd(e);
    }
  };
}
class bd extends ud {
  constructor(e) {
    super(), dd(this, e, null, gd, md, {});
  }
}
const {
  SvelteComponent: pd,
  append: _o,
  attr: Be,
  detach: wd,
  init: vd,
  insert: kd,
  noop: co,
  safe_not_equal: Cd,
  svg_element: Ui
} = window.__gradio__svelte__internal;
function yd(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ui("svg"), t = Ui("path"), n = Ui("polyline"), l = Ui("line"), Be(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Be(n, "points", "17 8 12 3 7 8"), Be(l, "x1", "12"), Be(l, "y1", "3"), Be(l, "x2", "12"), Be(l, "y2", "15"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "90%"), Be(e, "height", "90%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "2"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-upload");
    },
    m(o, s) {
      kd(o, e, s), _o(e, t), _o(e, n), _o(e, l);
    },
    p: co,
    i: co,
    o: co,
    d(o) {
      o && wd(e);
    }
  };
}
let zr = class extends pd {
  constructor(e) {
    super(), vd(this, e, null, yd, Cd, {});
  }
};
const {
  SvelteComponent: ik,
  append: lk,
  attr: ok,
  detach: sk,
  init: ak,
  insert: rk,
  noop: _k,
  safe_not_equal: ck,
  svg_element: uk
} = window.__gradio__svelte__internal, {
  SvelteComponent: fk,
  append: dk,
  attr: hk,
  detach: mk,
  init: gk,
  insert: bk,
  noop: pk,
  safe_not_equal: wk,
  svg_element: vk,
  text: kk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ck,
  append: yk,
  attr: Sk,
  detach: qk,
  init: zk,
  insert: Bk,
  noop: Dk,
  safe_not_equal: Lk,
  svg_element: Mk,
  text: Ek
} = window.__gradio__svelte__internal, {
  SvelteComponent: Rk,
  append: Wk,
  attr: Ak,
  detach: Xk,
  init: Yk,
  insert: Ik,
  noop: Hk,
  safe_not_equal: jk,
  svg_element: Tk,
  text: Fk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Uk,
  append: Vk,
  attr: Ok,
  detach: Nk,
  init: $k,
  insert: Pk,
  noop: Kk,
  safe_not_equal: xk,
  svg_element: Zk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Sd,
  append: Ws,
  attr: $t,
  detach: qd,
  init: zd,
  insert: Bd,
  noop: uo,
  safe_not_equal: Dd,
  svg_element: fo
} = window.__gradio__svelte__internal;
function Ld(i) {
  let e, t, n;
  return {
    c() {
      e = fo("svg"), t = fo("path"), n = fo("path"), $t(t, "fill", "currentColor"), $t(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), $t(n, "fill", "currentColor"), $t(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), $t(e, "xmlns", "http://www.w3.org/2000/svg"), $t(e, "width", "100%"), $t(e, "height", "100%"), $t(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      Bd(l, e, o), Ws(e, t), Ws(e, n);
    },
    p: uo,
    i: uo,
    o: uo,
    d(l) {
      l && qd(e);
    }
  };
}
let Br = class extends Sd {
  constructor(e) {
    super(), zd(this, e, null, Ld, Dd, {});
  }
};
const Md = [
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
], As = {
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
Md.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: As[e][t],
    secondary: As[e][n]
  }
}), {});
class cl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Ed(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new cl("Must be on Spaces to share.");
  let t, n, l;
  t = Rd(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new cl(`Upload failed: ${_.error}`);
    }
    throw new cl("Upload failed.");
  }
  return await s.text();
}
function Rd(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Wd,
  create_component: Ad,
  destroy_component: Xd,
  init: Yd,
  mount_component: Id,
  safe_not_equal: Hd,
  transition_in: jd,
  transition_out: Td
} = window.__gradio__svelte__internal, { createEventDispatcher: Fd } = window.__gradio__svelte__internal;
function Ud(i) {
  let e, t;
  return e = new Dl({
    props: {
      Icon: df,
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
      Ad(e.$$.fragment);
    },
    m(n, l) {
      Id(e, n, l), t = !0;
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
      t || (jd(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Td(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xd(e, n);
    }
  };
}
function Vd(i, e, t) {
  const n = Fd();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof cl ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class Od extends Wd {
  constructor(e) {
    super(), Yd(this, e, Vd, Ud, Hd, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Nd,
  append: bn,
  attr: To,
  check_outros: $d,
  create_component: Dr,
  destroy_component: Lr,
  detach: ul,
  element: Fo,
  group_outros: Pd,
  init: Kd,
  insert: fl,
  mount_component: Mr,
  safe_not_equal: xd,
  set_data: Uo,
  space: Vo,
  text: wi,
  toggle_class: Xs,
  transition_in: ml,
  transition_out: gl
} = window.__gradio__svelte__internal;
function Zd(i) {
  let e, t;
  return e = new zr({}), {
    c() {
      Dr(e.$$.fragment);
    },
    m(n, l) {
      Mr(e, n, l), t = !0;
    },
    i(n) {
      t || (ml(e.$$.fragment, n), t = !0);
    },
    o(n) {
      gl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lr(e, n);
    }
  };
}
function Gd(i) {
  let e, t;
  return e = new qr({}), {
    c() {
      Dr(e.$$.fragment);
    },
    m(n, l) {
      Mr(e, n, l), t = !0;
    },
    i(n) {
      t || (ml(e.$$.fragment, n), t = !0);
    },
    o(n) {
      gl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Lr(e, n);
    }
  };
}
function Ys(i) {
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
      e = Fo("span"), t = wi("- "), l = wi(n), o = wi(" -"), s = Vo(), a = wi(r), To(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      fl(_, e, c), bn(e, t), bn(e, l), bn(e, o), fl(_, s, c), fl(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && Uo(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && Uo(a, r);
    },
    d(_) {
      _ && (ul(e), ul(s), ul(a));
    }
  };
}
function Jd(i) {
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
  const c = [Gd, Zd], f = [];
  function u(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = u(i), l = f[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && Ys(i)
  );
  return {
    c() {
      e = Fo("div"), t = Fo("span"), l.c(), o = Vo(), r = wi(s), a = Vo(), d && d.c(), To(t, "class", "icon-wrap svelte-kzcjhc"), Xs(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), To(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      fl(m, e, h), bn(e, t), f[n].m(t, null), bn(e, o), bn(e, r), bn(e, a), d && d.m(e, null), _ = !0;
    },
    p(m, [h]) {
      let g = n;
      n = u(m), n !== g && (Pd(), gl(f[g], 1, 1, () => {
        f[g] = null;
      }), $d(), l = f[n], l || (l = f[n] = c[n](m), l.c()), ml(l, 1), l.m(t, null)), (!_ || h & /*hovered*/
      16) && Xs(
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
      ) + "") && Uo(r, s), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = Ys(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      _ || (ml(l), _ = !0);
    },
    o(m) {
      gl(l), _ = !1;
    },
    d(m) {
      m && ul(e), f[n].d(), d && d.d();
    }
  };
}
function Qd(i, e, t) {
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
class Er extends Nd {
  constructor(e) {
    super(), Kd(this, e, Qd, Jd, xd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Jk,
  attr: Qk,
  create_slot: e6,
  detach: t6,
  element: n6,
  get_all_dirty_from_scope: i6,
  get_slot_changes: l6,
  init: o6,
  insert: s6,
  safe_not_equal: a6,
  toggle_class: r6,
  transition_in: _6,
  transition_out: c6,
  update_slot_base: u6
} = window.__gradio__svelte__internal, {
  SvelteComponent: e1,
  append: ho,
  attr: Bt,
  check_outros: vi,
  create_component: Ll,
  destroy_component: Ml,
  detach: Zn,
  element: Ri,
  empty: t1,
  group_outros: ki,
  init: n1,
  insert: Gn,
  listen: El,
  mount_component: Rl,
  safe_not_equal: i1,
  space: mo,
  toggle_class: on,
  transition_in: ke,
  transition_out: He
} = window.__gradio__svelte__internal;
function Is(i) {
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
  ), _, c = t && Hs(i), f = l && js(i), u = s && Ts(i), d = a && Fs(i);
  return {
    c() {
      e = Ri("span"), c && c.c(), n = mo(), f && f.c(), o = mo(), u && u.c(), r = mo(), d && d.c(), Bt(e, "class", "source-selection svelte-1jp3vgd"), Bt(e, "data-testid", "source-select");
    },
    m(m, h) {
      Gn(m, e, h), c && c.m(e, null), ho(e, n), f && f.m(e, null), ho(e, o), u && u.m(e, null), ho(e, r), d && d.m(e, null), _ = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && ke(c, 1)) : (c = Hs(m), c.c(), ke(c, 1), c.m(e, n)) : c && (ki(), He(c, 1, 1, () => {
        c = null;
      }), vi()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? f ? (f.p(m, h), h & /*sources*/
      2 && ke(f, 1)) : (f = js(m), f.c(), ke(f, 1), f.m(e, o)) : f && (ki(), He(f, 1, 1, () => {
        f = null;
      }), vi()), h & /*sources*/
      2 && (s = /*sources*/
      m[1].includes("webcam")), s ? u ? (u.p(m, h), h & /*sources*/
      2 && ke(u, 1)) : (u = Ts(m), u.c(), ke(u, 1), u.m(e, r)) : u && (ki(), He(u, 1, 1, () => {
        u = null;
      }), vi()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && ke(d, 1)) : (d = Fs(m), d.c(), ke(d, 1), d.m(e, null)) : d && (ki(), He(d, 1, 1, () => {
        d = null;
      }), vi());
    },
    i(m) {
      _ || (ke(c), ke(f), ke(u), ke(d), _ = !0);
    },
    o(m) {
      He(c), He(f), He(u), He(d), _ = !1;
    },
    d(m) {
      m && Zn(e), c && c.d(), f && f.d(), u && u.d(), d && d.d();
    }
  };
}
function Hs(i) {
  let e, t, n, l, o;
  return t = new zr({}), {
    c() {
      e = Ri("button"), Ll(t.$$.fragment), Bt(e, "class", "icon svelte-1jp3vgd"), Bt(e, "aria-label", "Upload file"), on(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      Gn(s, e, r), Rl(t, e, null), n = !0, l || (o = El(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && on(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      He(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Ml(t), l = !1, o();
    }
  };
}
function js(i) {
  let e, t, n, l, o;
  return t = new Kf({}), {
    c() {
      e = Ri("button"), Ll(t.$$.fragment), Bt(e, "class", "icon svelte-1jp3vgd"), Bt(e, "aria-label", "Record audio"), on(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      Gn(s, e, r), Rl(t, e, null), n = !0, l || (o = El(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && on(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      He(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Ml(t), l = !1, o();
    }
  };
}
function Ts(i) {
  let e, t, n, l, o;
  return t = new Br({}), {
    c() {
      e = Ri("button"), Ll(t.$$.fragment), Bt(e, "class", "icon svelte-1jp3vgd"), Bt(e, "aria-label", "Capture from camera"), on(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      Gn(s, e, r), Rl(t, e, null), n = !0, l || (o = El(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && on(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      He(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Ml(t), l = !1, o();
    }
  };
}
function Fs(i) {
  let e, t, n, l, o;
  return t = new qr({}), {
    c() {
      e = Ri("button"), Ll(t.$$.fragment), Bt(e, "class", "icon svelte-1jp3vgd"), Bt(e, "aria-label", "Paste from clipboard"), on(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      Gn(s, e, r), Rl(t, e, null), n = !0, l || (o = El(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && on(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      He(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Ml(t), l = !1, o();
    }
  };
}
function l1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Is(i)
  );
  return {
    c() {
      n && n.c(), e = t1();
    },
    m(l, o) {
      n && n.m(l, o), Gn(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && ke(n, 1)) : (n = Is(l), n.c(), ke(n, 1), n.m(e.parentNode, e)) : n && (ki(), He(n, 1, 1, () => {
        n = null;
      }), vi());
    },
    i(l) {
      t || (ke(n), t = !0);
    },
    o(l) {
      He(n), t = !1;
    },
    d(l) {
      l && Zn(e), n && n.d(l);
    }
  };
}
function o1(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, h, g, b) {
    function v(p) {
      return p instanceof g ? p : new g(function(z) {
        z(p);
      });
    }
    return new (g || (g = Promise))(function(p, z) {
      function L(w) {
        try {
          y(b.next(w));
        } catch (E) {
          z(E);
        }
      }
      function B(w) {
        try {
          y(b.throw(w));
        } catch (E) {
          z(E);
        }
      }
      function y(w) {
        w.done ? p(w.value) : v(w.value).then(L, B);
      }
      y((b = b.apply(m, h || [])).next());
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
  const c = () => _("upload"), f = () => _("microphone"), u = () => _("webcam"), d = () => _("clipboard");
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
    f,
    u,
    d
  ];
}
class s1 extends e1 {
  constructor(e) {
    super(), n1(this, e, o1, l1, i1, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Un(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function dl() {
}
const a1 = (i) => i;
function Us(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Rr = typeof window < "u";
let Vs = Rr ? () => window.performance.now() : () => Date.now(), Wr = Rr ? (i) => requestAnimationFrame(i) : dl;
const xn = /* @__PURE__ */ new Set();
function Ar(i) {
  xn.forEach((e) => {
    e.c(i) || (xn.delete(e), e.f());
  }), xn.size !== 0 && Wr(Ar);
}
function r1(i) {
  let e;
  return xn.size === 0 && Wr(Ar), { promise: new Promise((t) => {
    xn.add(e = { c: i, f: t });
  }), abort() {
    xn.delete(e);
  } };
}
function _1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function c1(i, { delay: e = 0, duration: t = 400, easing: n = a1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function Os(i, { delay: e = 0, duration: t = 400, easing: n = _1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [f, u] = Us(l), [d, m] = Us(o);
  return { delay: e, duration: t, easing: n, css: (h, g) => `
			transform: ${_} translate(${(1 - h) * f}${u}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}` };
}
const Yn = [];
function u1(i, e = dl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const _ = !Yn.length;
      for (const c of n) c[1](), Yn.push(c, i);
      if (_) {
        for (let c = 0; c < Yn.length; c += 2) Yn[c][0](Yn[c + 1]);
        Yn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = dl) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || dl), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function Ns(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Oo(i, e, t, n) {
  if (typeof t == "number" || Ns(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, Ns(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Oo(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Oo(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function $s(i, e = {}) {
  const t = u1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, f = 1, u = 0, d = !1;
  function m(g, b = {}) {
    c = g;
    const v = a = {};
    return i == null || b.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, s = Vs(), _ = g, t.set(i = c), Promise.resolve()) : (b.soft && (u = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), f = 0), r || (s = Vs(), d = !1, r = r1((p) => {
      if (d) return d = !1, r = null, !1;
      f = Math.min(f + u, 1);
      const z = { inv_mass: f, opts: h, settled: !0, dt: 60 * (p - s) / 1e3 }, L = Oo(z, _, i, c);
      return s = p, _ = i, t.set(i = L), z.settled && (r = null), !z.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        v === a && p();
      });
    }));
  }
  const h = { set: m, update: (g, b) => m(g(c, i), b), subscribe: t.subscribe, stiffness: n, damping: l, precision: o };
  return h;
}
const {
  SvelteComponent: f1,
  append: ft,
  attr: ne,
  component_subscribe: Ps,
  detach: d1,
  element: h1,
  init: m1,
  insert: g1,
  noop: Ks,
  safe_not_equal: b1,
  set_style: Vi,
  svg_element: dt,
  toggle_class: xs
} = window.__gradio__svelte__internal, { onMount: p1 } = window.__gradio__svelte__internal;
function w1(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u;
  return {
    c() {
      e = h1("div"), t = dt("svg"), n = dt("g"), l = dt("path"), o = dt("path"), s = dt("path"), r = dt("path"), a = dt("g"), _ = dt("path"), c = dt("path"), f = dt("path"), u = dt("path"), ne(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ne(l, "fill", "#FF7C00"), ne(l, "fill-opacity", "0.4"), ne(l, "class", "svelte-43sxxs"), ne(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ne(o, "fill", "#FF7C00"), ne(o, "class", "svelte-43sxxs"), ne(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ne(s, "fill", "#FF7C00"), ne(s, "fill-opacity", "0.4"), ne(s, "class", "svelte-43sxxs"), ne(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ne(r, "fill", "#FF7C00"), ne(r, "class", "svelte-43sxxs"), Vi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ne(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ne(_, "fill", "#FF7C00"), ne(_, "fill-opacity", "0.4"), ne(_, "class", "svelte-43sxxs"), ne(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ne(c, "fill", "#FF7C00"), ne(c, "class", "svelte-43sxxs"), ne(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ne(f, "fill", "#FF7C00"), ne(f, "fill-opacity", "0.4"), ne(f, "class", "svelte-43sxxs"), ne(u, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ne(u, "fill", "#FF7C00"), ne(u, "class", "svelte-43sxxs"), Vi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ne(t, "viewBox", "-1200 -1200 3000 3000"), ne(t, "fill", "none"), ne(t, "xmlns", "http://www.w3.org/2000/svg"), ne(t, "class", "svelte-43sxxs"), ne(e, "class", "svelte-43sxxs"), xs(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      g1(d, e, m), ft(e, t), ft(t, n), ft(n, l), ft(n, o), ft(n, s), ft(n, r), ft(t, a), ft(a, _), ft(a, c), ft(a, f), ft(a, u);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && Vi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && Vi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && xs(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Ks,
    o: Ks,
    d(d) {
      d && d1(e);
    }
  };
}
function v1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(d, m, h, g) {
    function b(v) {
      return v instanceof h ? v : new h(function(p) {
        p(v);
      });
    }
    return new (h || (h = Promise))(function(v, p) {
      function z(y) {
        try {
          B(g.next(y));
        } catch (w) {
          p(w);
        }
      }
      function L(y) {
        try {
          B(g.throw(y));
        } catch (w) {
          p(w);
        }
      }
      function B(y) {
        y.done ? v(y.value) : b(y.value).then(z, L);
      }
      B((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = $s([0, 0]);
  Ps(i, r, (d) => t(1, n = d));
  const a = $s([0, 0]);
  Ps(i, a, (d) => t(2, l = d));
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
  return p1(() => (u(), () => _ = !0)), i.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, l, r, a];
}
class k1 extends f1 {
  constructor(e) {
    super(), m1(this, e, v1, w1, b1, { margin: 0 });
  }
}
const {
  SvelteComponent: C1,
  append: pn,
  attr: bt,
  binding_callbacks: Zs,
  check_outros: No,
  create_component: Xr,
  create_slot: Yr,
  destroy_component: Ir,
  destroy_each: Hr,
  detach: V,
  element: qt,
  empty: Jn,
  ensure_array_like: bl,
  get_all_dirty_from_scope: jr,
  get_slot_changes: Tr,
  group_outros: $o,
  init: y1,
  insert: O,
  mount_component: Fr,
  noop: Po,
  safe_not_equal: S1,
  set_data: at,
  set_style: nn,
  space: st,
  text: de,
  toggle_class: nt,
  transition_in: gt,
  transition_out: zt,
  update_slot_base: Ur
} = window.__gradio__svelte__internal, { tick: q1 } = window.__gradio__svelte__internal, { onDestroy: z1 } = window.__gradio__svelte__internal, { createEventDispatcher: B1 } = window.__gradio__svelte__internal, D1 = (i) => ({}), Gs = (i) => ({}), L1 = (i) => ({}), Js = (i) => ({});
function Qs(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function ea(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function M1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new Dl({
    props: {
      Icon: yr,
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
  ), c = Yr(
    _,
    i,
    /*$$scope*/
    i[29],
    Gs
  );
  return {
    c() {
      e = qt("div"), Xr(t.$$.fragment), n = st(), l = qt("span"), s = de(o), r = st(), c && c.c(), bt(e, "class", "clear-status svelte-16nch4a"), bt(l, "class", "error svelte-16nch4a");
    },
    m(f, u) {
      O(f, e, u), Fr(t, e, null), O(f, n, u), O(f, l, u), pn(l, s), O(f, r, u), c && c.m(f, u), a = !0;
    },
    p(f, u) {
      const d = {};
      u[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      f[1]("common.clear")), t.$set(d), (!a || u[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      f[1]("common.error") + "") && at(s, o), c && c.p && (!a || u[0] & /*$$scope*/
      536870912) && Ur(
        c,
        _,
        f,
        /*$$scope*/
        f[29],
        a ? Tr(
          _,
          /*$$scope*/
          f[29],
          u,
          D1
        ) : jr(
          /*$$scope*/
          f[29]
        ),
        Gs
      );
    },
    i(f) {
      a || (gt(t.$$.fragment, f), gt(c, f), a = !0);
    },
    o(f) {
      zt(t.$$.fragment, f), zt(c, f), a = !1;
    },
    d(f) {
      f && (V(e), V(n), V(l), V(r)), Ir(t), c && c.d(f);
    }
  };
}
function E1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && ta(i)
  );
  function f(p, z) {
    if (
      /*progress*/
      p[7]
    ) return A1;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return W1;
    if (
      /*queue_position*/
      p[2] === 0
    ) return R1;
  }
  let u = f(i), d = u && u(i), m = (
    /*timer*/
    i[5] && la(i)
  );
  const h = [H1, I1], g = [];
  function b(p, z) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = b(i)) && (s = g[o] = h[o](i));
  let v = !/*timer*/
  i[5] && ua(i);
  return {
    c() {
      c && c.c(), e = st(), t = qt("div"), d && d.c(), n = st(), m && m.c(), l = st(), s && s.c(), r = st(), v && v.c(), a = Jn(), bt(t, "class", "progress-text svelte-16nch4a"), nt(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), nt(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, z) {
      c && c.m(p, z), O(p, e, z), O(p, t, z), d && d.m(t, null), pn(t, n), m && m.m(t, null), O(p, l, z), ~o && g[o].m(p, z), O(p, r, z), v && v.m(p, z), O(p, a, z), _ = !0;
    },
    p(p, z) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? c ? c.p(p, z) : (c = ta(p), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), u === (u = f(p)) && d ? d.p(p, z) : (d && d.d(1), d = u && u(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? m ? m.p(p, z) : (m = la(p), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!_ || z[0] & /*variant*/
      256) && nt(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!_ || z[0] & /*variant*/
      256) && nt(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let L = o;
      o = b(p), o === L ? ~o && g[o].p(p, z) : (s && ($o(), zt(g[L], 1, 1, () => {
        g[L] = null;
      }), No()), ~o ? (s = g[o], s ? s.p(p, z) : (s = g[o] = h[o](p), s.c()), gt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? v && ($o(), zt(v, 1, 1, () => {
        v = null;
      }), No()) : v ? (v.p(p, z), z[0] & /*timer*/
      32 && gt(v, 1)) : (v = ua(p), v.c(), gt(v, 1), v.m(a.parentNode, a));
    },
    i(p) {
      _ || (gt(s), gt(v), _ = !0);
    },
    o(p) {
      zt(s), zt(v), _ = !1;
    },
    d(p) {
      p && (V(e), V(t), V(l), V(r), V(a)), c && c.d(p), d && d.d(), m && m.d(), ~o && g[o].d(p), v && v.d(p);
    }
  };
}
function ta(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = qt("div"), bt(e, "class", "eta-bar svelte-16nch4a"), nn(e, "transform", t);
    },
    m(n, l) {
      O(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && nn(e, "transform", t);
    },
    d(n) {
      n && V(e);
    }
  };
}
function R1(i) {
  let e;
  return {
    c() {
      e = de("processing |");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: Po,
    d(t) {
      t && V(e);
    }
  };
}
function W1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = de("queue: "), n = de(t), l = de("/"), o = de(
        /*queue_size*/
        i[3]
      ), s = de(" |");
    },
    m(r, a) {
      O(r, e, a), O(r, n, a), O(r, l, a), O(r, o, a), O(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && at(n, t), a[0] & /*queue_size*/
      8 && at(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (V(e), V(n), V(l), V(o), V(s));
    }
  };
}
function A1(i) {
  let e, t = bl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ia(ea(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Jn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      O(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = bl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ea(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ia(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && V(e), Hr(n, l);
    }
  };
}
function na(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, f) {
    return (
      /*p*/
      c[41].length != null ? Y1 : X1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = st(), n = de(t), l = de(" | "), s = de(o);
    },
    m(c, f) {
      _.m(c, f), O(c, e, f), O(c, n, f), O(c, l, f), O(c, s, f);
    },
    p(c, f) {
      a === (a = r(c)) && _ ? _.p(c, f) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), f[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && at(n, t);
    },
    d(c) {
      c && (V(e), V(n), V(l), V(s)), _.d(c);
    }
  };
}
function X1(i) {
  let e = Un(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = de(e);
    },
    m(n, l) {
      O(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Un(
        /*p*/
        n[41].index || 0
      ) + "") && at(t, e);
    },
    d(n) {
      n && V(t);
    }
  };
}
function Y1(i) {
  let e = Un(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Un(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = de(e), n = de("/"), o = de(l);
    },
    m(s, r) {
      O(s, t, r), O(s, n, r), O(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Un(
        /*p*/
        s[41].index || 0
      ) + "") && at(t, e), r[0] & /*progress*/
      128 && l !== (l = Un(
        /*p*/
        s[41].length
      ) + "") && at(o, l);
    },
    d(s) {
      s && (V(t), V(n), V(o));
    }
  };
}
function ia(i) {
  let e, t = (
    /*p*/
    i[41].index != null && na(i)
  );
  return {
    c() {
      t && t.c(), e = Jn();
    },
    m(n, l) {
      t && t.m(n, l), O(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = na(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && V(e), t && t.d(n);
    }
  };
}
function la(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = de(
        /*formatted_timer*/
        i[20]
      ), n = de(t), l = de("s");
    },
    m(o, s) {
      O(o, e, s), O(o, n, s), O(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && at(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && at(n, t);
    },
    d(o) {
      o && (V(e), V(n), V(l));
    }
  };
}
function I1(i) {
  let e, t;
  return e = new k1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Xr(e.$$.fragment);
    },
    m(n, l) {
      Fr(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      zt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ir(e, n);
    }
  };
}
function H1(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && oa(i)
  );
  return {
    c() {
      e = qt("div"), t = qt("div"), r && r.c(), n = st(), l = qt("div"), o = qt("div"), bt(t, "class", "progress-level-inner svelte-16nch4a"), bt(o, "class", "progress-bar svelte-16nch4a"), nn(o, "width", s), bt(l, "class", "progress-bar-wrap svelte-16nch4a"), bt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      O(a, e, _), pn(e, t), r && r.m(t, null), pn(e, n), pn(e, l), pn(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = oa(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && nn(o, "width", s);
    },
    i: Po,
    o: Po,
    d(a) {
      a && V(e), r && r.d(), i[31](null);
    }
  };
}
function oa(i) {
  let e, t = bl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ca(Qs(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Jn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      O(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = bl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Qs(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ca(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && V(e), Hr(n, l);
    }
  };
}
function sa(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && j1()
  ), s = (
    /*p*/
    i[41].desc != null && aa(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && ra()
  ), a = (
    /*progress_level*/
    i[14] != null && _a(i)
  );
  return {
    c() {
      o && o.c(), e = st(), s && s.c(), t = st(), r && r.c(), n = st(), a && a.c(), l = Jn();
    },
    m(_, c) {
      o && o.m(_, c), O(_, e, c), s && s.m(_, c), O(_, t, c), r && r.m(_, c), O(_, n, c), a && a.m(_, c), O(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = aa(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = ra(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = _a(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && (V(e), V(t), V(n), V(l)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function j1(i) {
  let e;
  return {
    c() {
      e = de(" /");
    },
    m(t, n) {
      O(t, e, n);
    },
    d(t) {
      t && V(e);
    }
  };
}
function aa(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = de(e);
    },
    m(n, l) {
      O(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && at(t, e);
    },
    d(n) {
      n && V(t);
    }
  };
}
function ra(i) {
  let e;
  return {
    c() {
      e = de("-");
    },
    m(t, n) {
      O(t, e, n);
    },
    d(t) {
      t && V(e);
    }
  };
}
function _a(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = de(e), n = de("%");
    },
    m(l, o) {
      O(l, t, o), O(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && at(t, e);
    },
    d(l) {
      l && (V(t), V(n));
    }
  };
}
function ca(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && sa(i)
  );
  return {
    c() {
      t && t.c(), e = Jn();
    },
    m(n, l) {
      t && t.m(n, l), O(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = sa(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && V(e), t && t.d(n);
    }
  };
}
function ua(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Yr(
    o,
    i,
    /*$$scope*/
    i[29],
    Js
  );
  return {
    c() {
      e = qt("p"), t = de(
        /*loading_text*/
        i[9]
      ), n = st(), s && s.c(), bt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      O(r, e, a), pn(e, t), O(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && at(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && Ur(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? Tr(
          o,
          /*$$scope*/
          r[29],
          a,
          L1
        ) : jr(
          /*$$scope*/
          r[29]
        ),
        Js
      );
    },
    i(r) {
      l || (gt(s, r), l = !0);
    },
    o(r) {
      zt(s, r), l = !1;
    },
    d(r) {
      r && (V(e), V(n)), s && s.d(r);
    }
  };
}
function T1(i) {
  let e, t, n, l, o;
  const s = [E1, M1], r = [];
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
      e = qt("div"), n && n.c(), bt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), nt(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), nt(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), nt(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), nt(
        e,
        "border",
        /*border*/
        i[12]
      ), nn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), nn(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(_, c) {
      O(_, e, c), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(_, c) {
      let f = t;
      t = a(_), t === f ? ~t && r[t].p(_, c) : (n && ($o(), zt(r[f], 1, 1, () => {
        r[f] = null;
      }), No()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), gt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && bt(e, "class", l), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && nt(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && nt(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && nt(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && nt(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && nn(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && nn(
        e,
        "padding",
        /*absolute*/
        _[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(_) {
      o || (gt(n), o = !0);
    },
    o(_) {
      zt(n), o = !1;
    },
    d(_) {
      _ && V(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var F1 = function(i, e, t, n) {
  function l(o) {
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
      c.done ? o(c.value) : l(c.value).then(r, a);
    }
    _((n = n.apply(i, e || [])).next());
  });
};
let Oi = [], go = !1;
function U1(i) {
  return F1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Oi.push(e), !go) go = !0;
      else return;
      yield q1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Oi.length; l++) {
          const s = Oi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), go = !1, Oi = [];
      });
    }
  });
}
function V1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = B1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: f } = e, { scroll_to_output: u = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: z = !1 } = e, { border: L = !1 } = e, { autoscroll: B } = e, y, w = !1, E = 0, C = 0, S = null, M = null, $ = 0, P = null, q, U = null, j = !0;
  const Y = () => {
    t(0, a = t(27, S = t(19, x = null))), t(25, E = performance.now()), t(26, C = 0), w = !0, G();
  };
  function G() {
    requestAnimationFrame(() => {
      t(26, C = (performance.now() - E) / 1e3), w && G();
    });
  }
  function A() {
    t(26, C = 0), t(0, a = t(27, S = t(19, x = null))), w && (w = !1);
  }
  z1(() => {
    w && A();
  });
  let x = null;
  function J(H) {
    Zs[H ? "unshift" : "push"](() => {
      U = H, t(16, U), t(7, g), t(14, P), t(15, q);
    });
  }
  const oe = () => {
    s("clear_status");
  };
  function me(H) {
    Zs[H ? "unshift" : "push"](() => {
      y = H, t(13, y);
    });
  }
  return i.$$set = (H) => {
    "i18n" in H && t(1, r = H.i18n), "eta" in H && t(0, a = H.eta), "queue_position" in H && t(2, _ = H.queue_position), "queue_size" in H && t(3, c = H.queue_size), "status" in H && t(4, f = H.status), "scroll_to_output" in H && t(22, u = H.scroll_to_output), "timer" in H && t(5, d = H.timer), "show_progress" in H && t(6, m = H.show_progress), "message" in H && t(23, h = H.message), "progress" in H && t(7, g = H.progress), "variant" in H && t(8, b = H.variant), "loading_text" in H && t(9, v = H.loading_text), "absolute" in H && t(10, p = H.absolute), "translucent" in H && t(11, z = H.translucent), "border" in H && t(12, L = H.border), "autoscroll" in H && t(24, B = H.autoscroll), "$$scope" in H && t(29, o = H.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = S), a != null && S !== a && (t(28, M = (performance.now() - E) / 1e3 + a), t(19, x = M.toFixed(1)), t(27, S = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, $ = M === null || M <= 0 || !C ? null : Math.min(C / M, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, j = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, P = g.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, P = null), P ? (t(15, q = P[P.length - 1]), U && (q === 0 ? t(16, U.style.transition = "0", U) : t(16, U.style.transition = "150ms", U))) : t(15, q = void 0)), i.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? Y() : A()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && y && u && (f === "pending" || f === "complete") && U1(y, B), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = C.toFixed(1));
  }, [
    a,
    r,
    _,
    c,
    f,
    d,
    m,
    g,
    b,
    v,
    p,
    z,
    L,
    y,
    P,
    q,
    U,
    $,
    j,
    x,
    n,
    s,
    u,
    h,
    B,
    E,
    C,
    S,
    M,
    o,
    l,
    J,
    oe,
    me
  ];
}
class O1 extends C1 {
  constructor(e) {
    super(), y1(
      this,
      e,
      V1,
      T1,
      S1,
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
  SvelteComponent: f6,
  add_render_callback: d6,
  append: h6,
  attr: m6,
  bubble: g6,
  check_outros: b6,
  create_component: p6,
  create_in_transition: w6,
  create_out_transition: v6,
  destroy_component: k6,
  detach: C6,
  element: y6,
  group_outros: S6,
  init: q6,
  insert: z6,
  listen: B6,
  mount_component: D6,
  run_all: L6,
  safe_not_equal: M6,
  set_data: E6,
  space: R6,
  stop_propagation: W6,
  text: A6,
  transition_in: X6,
  transition_out: Y6
} = window.__gradio__svelte__internal, { createEventDispatcher: I6, onMount: H6 } = window.__gradio__svelte__internal, {
  SvelteComponent: j6,
  append: T6,
  attr: F6,
  bubble: U6,
  check_outros: V6,
  create_animation: O6,
  create_component: N6,
  destroy_component: $6,
  detach: P6,
  element: K6,
  ensure_array_like: x6,
  fix_and_outro_and_destroy_block: Z6,
  fix_position: G6,
  group_outros: J6,
  init: Q6,
  insert: e8,
  mount_component: t8,
  noop: n8,
  safe_not_equal: i8,
  set_style: l8,
  space: o8,
  transition_in: s8,
  transition_out: a8,
  update_keyed_each: r8
} = window.__gradio__svelte__internal, { setContext: _8, getContext: N1 } = window.__gradio__svelte__internal, $1 = "WORKER_PROXY_CONTEXT_KEY";
function Vr() {
  return N1($1);
}
function P1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Or(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function Nr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!P1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function K1(i) {
  if (i == null || !Nr(i))
    return i;
  const e = Vr();
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
      type: Or(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: x1,
  assign: pl,
  check_outros: $r,
  compute_rest_props: fa,
  create_slot: ss,
  detach: Wl,
  element: Pr,
  empty: Kr,
  exclude_internal_props: Z1,
  get_all_dirty_from_scope: as,
  get_slot_changes: rs,
  get_spread_update: xr,
  group_outros: Zr,
  init: G1,
  insert: Al,
  listen: Gr,
  prevent_default: J1,
  safe_not_equal: Q1,
  set_attributes: wl,
  transition_in: Sn,
  transition_out: qn,
  update_slot_base: _s
} = window.__gradio__svelte__internal, { createEventDispatcher: eh } = window.__gradio__svelte__internal;
function th(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = ss(
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
    _ = pl(_, a[c]);
  return {
    c() {
      e = Pr("a"), r && r.c(), wl(e, _);
    },
    m(c, f) {
      Al(c, e, f), r && r.m(e, null), n = !0, l || (o = Gr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, f) {
      r && r.p && (!n || f & /*$$scope*/
      128) && _s(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? rs(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : as(
          /*$$scope*/
          c[7]
        ),
        null
      ), wl(e, _ = xr(a, [
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
      n || (Sn(r, c), n = !0);
    },
    o(c) {
      qn(r, c), n = !1;
    },
    d(c) {
      c && Wl(e), r && r.d(c), l = !1, o();
    }
  };
}
function nh(i) {
  let e, t, n, l;
  const o = [lh, ih], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Kr();
    },
    m(a, _) {
      s[e].m(a, _), Al(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Zr(), qn(s[c], 1, 1, () => {
        s[c] = null;
      }), $r(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Sn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Sn(t), l = !0);
    },
    o(a) {
      qn(t), l = !1;
    },
    d(a) {
      a && Wl(n), s[e].d(a);
    }
  };
}
function ih(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = ss(
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
    a = pl(a, r[_]);
  return {
    c() {
      e = Pr("a"), s && s.c(), wl(e, a);
    },
    m(_, c) {
      Al(_, e, c), s && s.m(e, null), t = !0, n || (l = Gr(e, "click", J1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && _s(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? rs(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : as(
          /*$$scope*/
          _[7]
        ),
        null
      ), wl(e, a = xr(r, [
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
      t || (Sn(s, _), t = !0);
    },
    o(_) {
      qn(s, _), t = !1;
    },
    d(_) {
      _ && Wl(e), s && s.d(_), n = !1, l();
    }
  };
}
function lh(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = ss(
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
      128) && _s(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? rs(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : as(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (Sn(n, l), e = !0);
    },
    o(l) {
      qn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function oh(i) {
  let e, t, n, l, o;
  const s = [nh, th], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && Nr(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = Kr();
    },
    m(_, c) {
      r[t].m(_, c), Al(_, l, c), o = !0;
    },
    p(_, [c]) {
      let f = t;
      t = a(_, c), t === f ? r[t].p(_, c) : (Zr(), qn(r[f], 1, 1, () => {
        r[f] = null;
      }), $r(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), Sn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (Sn(n), o = !0);
    },
    o(_) {
      qn(n), o = !1;
    },
    d(_) {
      _ && Wl(l), r[t].d(_);
    }
  };
}
function sh(i, e, t) {
  const n = ["href", "download"];
  let l = fa(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(m, h, g, b) {
    function v(p) {
      return p instanceof g ? p : new g(function(z) {
        z(p);
      });
    }
    return new (g || (g = Promise))(function(p, z) {
      function L(w) {
        try {
          y(b.next(w));
        } catch (E) {
          z(E);
        }
      }
      function B(w) {
        try {
          y(b.throw(w));
        } catch (E) {
          z(E);
        }
      }
      function y(w) {
        w.done ? p(w.value) : v(w.value).then(L, B);
      }
      y((b = b.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = eh();
  let f = !1;
  const u = Vr();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (f)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (u == null)
        throw new Error("Wasm worker proxy is not available.");
      const h = new URL(a, window.location.href).pathname;
      t(2, f = !0), u.httpRequest({
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
            type: Or(g.headers, "content-type")
          }
        ), v = URL.createObjectURL(b), p = document.createElement("a");
        p.href = v, p.download = _, p.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, f = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = pl(pl({}, e), Z1(m)), t(6, l = fa(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, _ = m.download), "$$scope" in m && t(7, s = m.$$scope);
  }, [
    a,
    _,
    f,
    c,
    u,
    d,
    l,
    s,
    o
  ];
}
class ah extends x1 {
  constructor(e) {
    super(), G1(this, e, sh, oh, Q1, { href: 0, download: 1 });
  }
}
var rh = Object.defineProperty, _h = (i, e, t) => e in i ? rh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Et = (i, e, t) => (_h(i, typeof e != "symbol" ? e + "" : e, t), t), Jr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, fi = (i, e, t) => (Jr(i, e, "read from private field"), e.get(i)), ch = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, uh = (i, e, t, n) => (Jr(i, e, "write to private field"), e.set(i, t), t), Jt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Qr(i, e) {
  return i.map(
    (t) => new fh({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class fh {
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
    Et(this, "path"), Et(this, "url"), Et(this, "orig_name"), Et(this, "size"), Et(this, "blob"), Et(this, "is_stream"), Et(this, "mime_type"), Et(this, "alt_text"), Et(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class c8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = fi(this, Jt) + t; ; ) {
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
        uh(this, Jt, t);
      },
      flush: (t) => {
        if (fi(this, Jt) === "")
          return;
        const n = e.allowCR && fi(this, Jt).endsWith("\r") ? fi(this, Jt).slice(0, -1) : fi(this, Jt);
        t.enqueue(n);
      }
    }), ch(this, Jt, "");
  }
}
Jt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: dh,
  append: Te,
  attr: mn,
  detach: e_,
  element: gn,
  init: hh,
  insert: t_,
  noop: da,
  safe_not_equal: mh,
  set_data: vl,
  set_style: bo,
  space: Ko,
  text: Vn,
  toggle_class: ha
} = window.__gradio__svelte__internal, { onMount: gh, createEventDispatcher: bh, onDestroy: ph } = window.__gradio__svelte__internal;
function ma(i) {
  let e, t, n, l, o = Ci(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), f;
  return {
    c() {
      e = gn("div"), t = gn("span"), n = gn("div"), l = gn("progress"), s = Vn(o), a = Ko(), _ = gn("span"), f = Vn(c), bo(l, "visibility", "hidden"), bo(l, "height", "0"), bo(l, "width", "0"), l.value = r = Ci(
        /*file_to_display*/
        i[2]
      ), mn(l, "max", "100"), mn(l, "class", "svelte-cr2edf"), mn(n, "class", "progress-bar svelte-cr2edf"), mn(_, "class", "file-name svelte-cr2edf"), mn(e, "class", "file svelte-cr2edf");
    },
    m(u, d) {
      t_(u, e, d), Te(e, t), Te(t, n), Te(n, l), Te(l, s), Te(e, a), Te(e, _), Te(_, f);
    },
    p(u, d) {
      d & /*file_to_display*/
      4 && o !== (o = Ci(
        /*file_to_display*/
        u[2]
      ) + "") && vl(s, o), d & /*file_to_display*/
      4 && r !== (r = Ci(
        /*file_to_display*/
        u[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      u[2].orig_name + "") && vl(f, c);
    },
    d(u) {
      u && e_(e);
    }
  };
}
function wh(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, f = (
    /*file_to_display*/
    i[2] && ma(i)
  );
  return {
    c() {
      e = gn("div"), t = gn("span"), n = Vn("Uploading "), o = Vn(l), s = Ko(), a = Vn(r), _ = Vn("..."), c = Ko(), f && f.c(), mn(t, "class", "uploading svelte-cr2edf"), mn(e, "class", "wrap svelte-cr2edf"), ha(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(u, d) {
      t_(u, e, d), Te(e, t), Te(t, n), Te(t, o), Te(t, s), Te(t, a), Te(t, _), Te(e, c), f && f.m(e, null);
    },
    p(u, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      u[0].length + "") && vl(o, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      u[0].length > 1 ? "files" : "file") && vl(a, r), /*file_to_display*/
      u[2] ? f ? f.p(u, d) : (f = ma(u), f.c(), f.m(e, null)) : f && (f.d(1), f = null), d & /*progress*/
      2 && ha(
        e,
        "progress",
        /*progress*/
        u[1]
      );
    },
    i: da,
    o: da,
    d(u) {
      u && e_(e), f && f.d();
    }
  };
}
function Ci(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function vh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Ci(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function kh(i, e, t) {
  var n = this && this.__awaiter || function(h, g, b, v) {
    function p(z) {
      return z instanceof b ? z : new b(function(L) {
        L(z);
      });
    }
    return new (b || (b = Promise))(function(z, L) {
      function B(E) {
        try {
          w(v.next(E));
        } catch (C) {
          L(C);
        }
      }
      function y(E) {
        try {
          w(v.throw(E));
        } catch (C) {
          L(C);
        }
      }
      function w(E) {
        E.done ? z(E.value) : p(E.value).then(B, y);
      }
      w((v = v.apply(h, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, f, u = s.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = bh();
  function m(h, g) {
    t(0, u = u.map((b) => (b.orig_name === h && (b.progress += g), b)));
  }
  return gh(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        _ || t(1, _ = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), ph(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, o = h.root), "files" in h && t(5, s = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && vh(u), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, f = c || u[0]);
  }, [
    u,
    _,
    f,
    l,
    o,
    s,
    r,
    c
  ];
}
class Ch extends dh {
  constructor(e) {
    super(), hh(this, e, kh, wh, mh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: yh,
  append: ga,
  attr: De,
  binding_callbacks: Sh,
  bubble: an,
  check_outros: n_,
  create_component: qh,
  create_slot: i_,
  destroy_component: zh,
  detach: Xl,
  element: xo,
  empty: l_,
  get_all_dirty_from_scope: o_,
  get_slot_changes: s_,
  group_outros: a_,
  init: Bh,
  insert: Yl,
  listen: Ne,
  mount_component: Dh,
  prevent_default: rn,
  run_all: Lh,
  safe_not_equal: Mh,
  set_style: r_,
  space: Eh,
  stop_propagation: _n,
  toggle_class: ye,
  transition_in: ln,
  transition_out: zn,
  update_slot_base: __
} = window.__gradio__svelte__internal, { createEventDispatcher: Rh, tick: Wh } = window.__gradio__svelte__internal;
function Ah(i) {
  let e, t, n, l, o, s, r, a, _, c, f;
  const u = (
    /*#slots*/
    i[26].default
  ), d = i_(
    u,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = xo("button"), d && d.c(), t = Eh(), n = xo("input"), De(n, "aria-label", "file upload"), De(n, "data-testid", "file-upload"), De(n, "type", "file"), De(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, De(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), De(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), De(n, "class", "svelte-1s26xmt"), De(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), De(e, "class", "svelte-1s26xmt"), ye(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ye(
        e,
        "center",
        /*center*/
        i[4]
      ), ye(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ye(
        e,
        "flex",
        /*flex*/
        i[5]
      ), ye(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), r_(e, "height", "100%");
    },
    m(m, h) {
      Yl(m, e, h), d && d.m(e, null), ga(e, t), ga(e, n), i[34](n), _ = !0, c || (f = [
        Ne(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Ne(e, "drag", _n(rn(
          /*drag_handler*/
          i[27]
        ))),
        Ne(e, "dragstart", _n(rn(
          /*dragstart_handler*/
          i[28]
        ))),
        Ne(e, "dragend", _n(rn(
          /*dragend_handler*/
          i[29]
        ))),
        Ne(e, "dragover", _n(rn(
          /*dragover_handler*/
          i[30]
        ))),
        Ne(e, "dragenter", _n(rn(
          /*dragenter_handler*/
          i[31]
        ))),
        Ne(e, "dragleave", _n(rn(
          /*dragleave_handler*/
          i[32]
        ))),
        Ne(e, "drop", _n(rn(
          /*drop_handler*/
          i[33]
        ))),
        Ne(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Ne(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Ne(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Ne(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!_ || h[0] & /*$$scope*/
      33554432) && __(
        d,
        u,
        m,
        /*$$scope*/
        m[25],
        _ ? s_(
          u,
          /*$$scope*/
          m[25],
          h,
          null
        ) : o_(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!_ || h[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      m[16] || void 0)) && De(n, "accept", l), (!_ || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = o), (!_ || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "directory" || void 0)) && De(n, "webkitdirectory", s), (!_ || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && De(n, "mozdirectory", r), (!_ || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && De(e, "tabindex", a), (!_ || h[0] & /*hidden*/
      512) && ye(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!_ || h[0] & /*center*/
      16) && ye(
        e,
        "center",
        /*center*/
        m[4]
      ), (!_ || h[0] & /*boundedheight*/
      8) && ye(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!_ || h[0] & /*flex*/
      32) && ye(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!_ || h[0] & /*disable_click*/
      128) && ye(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      _ || (ln(d, m), _ = !0);
    },
    o(m) {
      zn(d, m), _ = !1;
    },
    d(m) {
      m && Xl(e), d && d.d(m), i[34](null), c = !1, Lh(f);
    }
  };
}
function Xh(i) {
  let e, t, n = !/*hidden*/
  i[9] && ba(i);
  return {
    c() {
      n && n.c(), e = l_();
    },
    m(l, o) {
      n && n.m(l, o), Yl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (a_(), zn(n, 1, 1, () => {
        n = null;
      }), n_()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && ln(n, 1)) : (n = ba(l), n.c(), ln(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (ln(n), t = !0);
    },
    o(l) {
      zn(n), t = !1;
    },
    d(l) {
      l && Xl(e), n && n.d(l);
    }
  };
}
function Yh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = i_(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = xo("button"), r && r.c(), De(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), De(e, "class", "svelte-1s26xmt"), ye(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ye(
        e,
        "center",
        /*center*/
        i[4]
      ), ye(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ye(
        e,
        "flex",
        /*flex*/
        i[5]
      ), r_(e, "height", "100%");
    },
    m(a, _) {
      Yl(a, e, _), r && r.m(e, null), n = !0, l || (o = Ne(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && __(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? s_(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : o_(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || _[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && De(e, "tabindex", t), (!n || _[0] & /*hidden*/
      512) && ye(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || _[0] & /*center*/
      16) && ye(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || _[0] & /*boundedheight*/
      8) && ye(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || _[0] & /*flex*/
      32) && ye(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (ln(r, a), n = !0);
    },
    o(a) {
      zn(r, a), n = !1;
    },
    d(a) {
      a && Xl(e), r && r.d(a), l = !1, o();
    }
  };
}
function ba(i) {
  let e, t;
  return e = new Ch({
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
      qh(e.$$.fragment);
    },
    m(n, l) {
      Dh(e, n, l), t = !0;
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
      t || (ln(e.$$.fragment, n), t = !0);
    },
    o(n) {
      zn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zh(e, n);
    }
  };
}
function Ih(i) {
  let e, t, n, l;
  const o = [Yh, Xh, Ah], s = [];
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
      t.c(), n = l_();
    },
    m(a, _) {
      s[e].m(a, _), Yl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (a_(), zn(s[c], 1, 1, () => {
        s[c] = null;
      }), n_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), ln(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ln(t), l = !0);
    },
    o(a) {
      zn(t), l = !1;
    },
    d(a) {
      a && Xl(n), s[e].d(a);
    }
  };
}
function Hh(i, e, t) {
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
function jh(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(R, F, Z, le) {
    function K(we) {
      return we instanceof Z ? we : new Z(function(W) {
        W(we);
      });
    }
    return new (Z || (Z = Promise))(function(we, W) {
      function Dt(_t) {
        try {
          rt(le.next(_t));
        } catch (sn) {
          W(sn);
        }
      }
      function Ve(_t) {
        try {
          rt(le.throw(_t));
        } catch (sn) {
          W(sn);
        }
      }
      function rt(_t) {
        _t.done ? we(_t.value) : K(_t.value).then(Dt, Ve);
      }
      rt((le = le.apply(R, F || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: f = "single" } = e, { disable_click: u = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: v = !0 } = e, { max_file_size: p = null } = e, { upload: z } = e, { stream_handler: L } = e, B, y, w;
  const E = Rh(), C = ["image", "video", "audio", "text", "file"], S = (R) => R.startsWith(".") || R.endsWith("/*") ? R : C.includes(R) ? R + "/*" : "." + R;
  function M() {
    t(20, r = !r);
  }
  function $() {
    navigator.clipboard.read().then((R) => o(this, void 0, void 0, function* () {
      for (let F = 0; F < R.length; F++) {
        const Z = R[F].types.find((le) => le.startsWith("image/"));
        if (Z) {
          R[F].getType(Z).then((le) => o(this, void 0, void 0, function* () {
            const K = new File([le], `clipboard.${Z.replace("image/", "")}`);
            yield U([K]);
          }));
          break;
        }
      }
    }));
  }
  function P() {
    u || b && (t(2, b.value = "", b), b.click());
  }
  function q(R) {
    return o(this, void 0, void 0, function* () {
      yield Wh(), t(14, B = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const F = yield z(R, d, B, p ?? 1 / 0);
        return E("load", f === "single" ? F == null ? void 0 : F[0] : F), t(1, g = !1), F || [];
      } catch (F) {
        return E("error", F.message), t(1, g = !1), [];
      }
    });
  }
  function U(R) {
    return o(this, void 0, void 0, function* () {
      if (!R.length)
        return;
      let F = R.map((Z) => new File([Z], Z instanceof File ? Z.name : "file", { type: Z.type }));
      return t(15, y = yield Qr(F)), yield q(y);
    });
  }
  function j(R) {
    return o(this, void 0, void 0, function* () {
      const F = R.target;
      if (F.files)
        if (h != "blob")
          yield U(Array.from(F.files));
        else {
          if (f === "single") {
            E("load", F.files[0]);
            return;
          }
          E("load", F.files);
        }
    });
  }
  function Y(R) {
    return o(this, void 0, void 0, function* () {
      var F;
      if (t(20, r = !1), !(!((F = R.dataTransfer) === null || F === void 0) && F.files)) return;
      const Z = Array.from(R.dataTransfer.files).filter((le) => {
        const K = "." + le.name.split(".").pop();
        return K && Hh(w, K, le.type) || (K && Array.isArray(s) ? s.includes(K) : K === s) ? !0 : (E("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield U(Z);
    });
  }
  function G(R) {
    an.call(this, i, R);
  }
  function A(R) {
    an.call(this, i, R);
  }
  function x(R) {
    an.call(this, i, R);
  }
  function J(R) {
    an.call(this, i, R);
  }
  function oe(R) {
    an.call(this, i, R);
  }
  function me(R) {
    an.call(this, i, R);
  }
  function H(R) {
    an.call(this, i, R);
  }
  function ze(R) {
    Sh[R ? "unshift" : "push"](() => {
      b = R, t(2, b);
    });
  }
  return i.$$set = (R) => {
    "filetype" in R && t(0, s = R.filetype), "dragging" in R && t(20, r = R.dragging), "boundedheight" in R && t(3, a = R.boundedheight), "center" in R && t(4, _ = R.center), "flex" in R && t(5, c = R.flex), "file_count" in R && t(6, f = R.file_count), "disable_click" in R && t(7, u = R.disable_click), "root" in R && t(8, d = R.root), "hidden" in R && t(9, m = R.hidden), "format" in R && t(21, h = R.format), "uploading" in R && t(1, g = R.uploading), "hidden_upload" in R && t(2, b = R.hidden_upload), "show_progress" in R && t(10, v = R.show_progress), "max_file_size" in R && t(22, p = R.max_file_size), "upload" in R && t(23, z = R.upload), "stream_handler" in R && t(11, L = R.stream_handler), "$$scope" in R && t(25, l = R.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, w = null) : typeof s == "string" ? t(16, w = S(s)) : (t(0, s = s.map(S)), t(16, w = s.join(", "))));
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
    m,
    v,
    L,
    $,
    P,
    B,
    y,
    w,
    M,
    j,
    Y,
    r,
    h,
    p,
    z,
    U,
    l,
    n,
    G,
    A,
    x,
    J,
    oe,
    me,
    H,
    ze
  ];
}
class Th extends yh {
  constructor(e) {
    super(), Bh(
      this,
      e,
      jh,
      Ih,
      Mh,
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
  SvelteComponent: u8,
  append: f8,
  attr: d8,
  check_outros: h8,
  create_component: m8,
  destroy_component: g8,
  detach: b8,
  element: p8,
  group_outros: w8,
  init: v8,
  insert: k8,
  mount_component: C8,
  safe_not_equal: y8,
  set_style: S8,
  space: q8,
  toggle_class: z8,
  transition_in: B8,
  transition_out: D8
} = window.__gradio__svelte__internal, { createEventDispatcher: L8 } = window.__gradio__svelte__internal, {
  SvelteComponent: M8,
  assign: E8,
  compute_rest_props: R8,
  detach: W8,
  element: A8,
  exclude_internal_props: X8,
  get_spread_update: Y8,
  init: I8,
  insert: H8,
  noop: j8,
  safe_not_equal: T8,
  set_attributes: F8,
  src_url_equal: U8,
  toggle_class: V8
} = window.__gradio__svelte__internal, {
  SvelteComponent: O8,
  append: N8,
  attr: $8,
  bubble: P8,
  check_outros: K8,
  create_component: x8,
  destroy_component: Z8,
  detach: G8,
  element: J8,
  empty: Q8,
  group_outros: e7,
  init: t7,
  insert: n7,
  listen: i7,
  mount_component: l7,
  safe_not_equal: o7,
  space: s7,
  toggle_class: a7,
  transition_in: r7,
  transition_out: _7
} = window.__gradio__svelte__internal, { createEventDispatcher: c7 } = window.__gradio__svelte__internal, {
  SvelteComponent: Fh,
  append: Ni,
  attr: po,
  create_component: Uh,
  destroy_component: Vh,
  detach: Oh,
  element: wo,
  init: Nh,
  insert: $h,
  listen: Ph,
  mount_component: Kh,
  noop: xh,
  safe_not_equal: Zh,
  set_style: Gh,
  space: Jh,
  text: Qh,
  transition_in: em,
  transition_out: tm
} = window.__gradio__svelte__internal, { createEventDispatcher: nm } = window.__gradio__svelte__internal;
function im(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new Br({}), {
    c() {
      e = wo("button"), t = wo("div"), n = wo("span"), Uh(l.$$.fragment), o = Jh(), r = Qh(s), po(n, "class", "icon-wrap svelte-fjcd9c"), po(t, "class", "wrap svelte-fjcd9c"), po(e, "class", "svelte-fjcd9c"), Gh(e, "height", "100%");
    },
    m(f, u) {
      $h(f, e, u), Ni(e, t), Ni(t, n), Kh(l, n, null), Ni(t, o), Ni(t, r), a = !0, _ || (c = Ph(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: xh,
    i(f) {
      a || (em(l.$$.fragment, f), a = !0);
    },
    o(f) {
      tm(l.$$.fragment, f), a = !1;
    },
    d(f) {
      f && Oh(e), Vh(l), _ = !1, c();
    }
  };
}
function lm(i) {
  const e = nm();
  return [e, () => e("click")];
}
class om extends Fh {
  constructor(e) {
    super(), Nh(this, e, lm, im, Zh, {});
  }
}
function sm() {
  return navigator.mediaDevices.enumerateDevices();
}
function am(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function pa(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (am(o, e), o));
}
function rm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: _m,
  action_destroyer: cm,
  add_render_callback: um,
  append: Xt,
  attr: pe,
  binding_callbacks: fm,
  check_outros: qi,
  create_component: Qn,
  create_in_transition: dm,
  destroy_component: ei,
  destroy_each: hm,
  detach: Fe,
  element: Ze,
  empty: cs,
  ensure_array_like: wa,
  group_outros: zi,
  init: mm,
  insert: Ue,
  listen: kl,
  mount_component: ti,
  noop: us,
  run_all: gm,
  safe_not_equal: bm,
  set_data: c_,
  set_input_value: Zo,
  space: Mi,
  stop_propagation: pm,
  text: u_,
  toggle_class: $i,
  transition_in: Se,
  transition_out: Le
} = window.__gradio__svelte__internal, { createEventDispatcher: wm, onMount: vm } = window.__gradio__svelte__internal;
function va(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function km(i) {
  let e, t, n, l, o, s, r, a, _, c, f;
  const u = [Sm, ym], d = [];
  function m(b, v) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = u[n](i);
  let h = !/*recording*/
  i[8] && ka(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Ca(i)
  );
  return {
    c() {
      e = Ze("div"), t = Ze("button"), l.c(), s = Mi(), h && h.c(), r = Mi(), g && g.c(), a = cs(), pe(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), pe(t, "class", "svelte-8hqvb6"), pe(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, v) {
      Ue(b, e, v), Xt(e, t), d[n].m(t, null), Xt(e, s), h && h.m(e, null), Ue(b, r, v), g && g.m(b, v), Ue(b, a, v), _ = !0, c || (f = kl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, v) {
      let p = n;
      n = m(b), n === p ? d[n].p(b, v) : (zi(), Le(d[p], 1, 1, () => {
        d[p] = null;
      }), qi(), l = d[n], l ? l.p(b, v) : (l = d[n] = u[n](b), l.c()), Se(l, 1), l.m(t, null)), (!_ || v[0] & /*mode*/
      2 && o !== (o = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && pe(t, "aria-label", o), /*recording*/
      b[8] ? h && (zi(), Le(h, 1, 1, () => {
        h = null;
      }), qi()) : h ? (h.p(b, v), v[0] & /*recording*/
      256 && Se(h, 1)) : (h = ka(b), h.c(), Se(h, 1), h.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, v), v[0] & /*options_open, selected_device*/
      1152 && Se(g, 1)) : (g = Ca(b), g.c(), Se(g, 1), g.m(a.parentNode, a)) : g && (zi(), Le(g, 1, 1, () => {
        g = null;
      }), qi());
    },
    i(b) {
      _ || (Se(l), Se(h), Se(g), _ = !0);
    },
    o(b) {
      Le(l), Le(h), Le(g), _ = !1;
    },
    d(b) {
      b && (Fe(e), Fe(r), Fe(a)), d[n].d(), h && h.d(), g && g.d(b), c = !1, f();
    }
  };
}
function Cm(i) {
  let e, t, n, l;
  return t = new om({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ze("div"), Qn(t.$$.fragment), pe(e, "title", "grant webcam access");
    },
    m(o, s) {
      Ue(o, e, s), ti(t, e, null), l = !0;
    },
    p: us,
    i(o) {
      l || (Se(t.$$.fragment, o), o && (n || um(() => {
        n = dm(e, c1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Fe(e), ei(t);
    }
  };
}
function ym(i) {
  let e, t, n;
  return t = new Ou({}), {
    c() {
      e = Ze("div"), Qn(t.$$.fragment), pe(e, "class", "icon svelte-8hqvb6"), pe(e, "title", "capture photo");
    },
    m(l, o) {
      Ue(l, e, o), ti(t, e, null), n = !0;
    },
    p: us,
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Fe(e), ei(t);
    }
  };
}
function Sm(i) {
  let e, t, n, l;
  const o = [zm, qm], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = cs();
    },
    m(a, _) {
      s[e].m(a, _), Ue(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (zi(), Le(s[c], 1, 1, () => {
        s[c] = null;
      }), qi(), t = s[e], t || (t = s[e] = o[e](a), t.c()), Se(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Se(t), l = !0);
    },
    o(a) {
      Le(t), l = !1;
    },
    d(a) {
      a && Fe(n), s[e].d(a);
    }
  };
}
function qm(i) {
  let e, t, n;
  return t = new Ju({}), {
    c() {
      e = Ze("div"), Qn(t.$$.fragment), pe(e, "class", "icon red svelte-8hqvb6"), pe(e, "title", "start recording");
    },
    m(l, o) {
      Ue(l, e, o), ti(t, e, null), n = !0;
    },
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Fe(e), ei(t);
    }
  };
}
function zm(i) {
  let e, t, n;
  return t = new cd({}), {
    c() {
      e = Ze("div"), Qn(t.$$.fragment), pe(e, "class", "icon red svelte-8hqvb6"), pe(e, "title", "stop recording");
    },
    m(l, o) {
      Ue(l, e, o), ti(t, e, null), n = !0;
    },
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Fe(e), ei(t);
    }
  };
}
function ka(i) {
  let e, t, n, l, o;
  return t = new os({}), {
    c() {
      e = Ze("button"), Qn(t.$$.fragment), pe(e, "class", "icon svelte-8hqvb6"), pe(e, "aria-label", "select input source");
    },
    m(s, r) {
      Ue(s, e, r), ti(t, e, null), n = !0, l || (o = kl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: us,
    i(s) {
      n || (Se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Fe(e), ei(t), l = !1, o();
    }
  };
}
function Ca(i) {
  let e, t, n, l, o, s, r;
  n = new os({});
  function a(f, u) {
    return (
      /*available_video_devices*/
      f[6].length === 0 ? Dm : Bm
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = Ze("select"), t = Ze("button"), Qn(n.$$.fragment), l = Mi(), c.c(), pe(t, "class", "inset-icon svelte-8hqvb6"), pe(e, "class", "select-wrap svelte-8hqvb6"), pe(e, "aria-label", "select source");
    },
    m(f, u) {
      Ue(f, e, u), Xt(e, t), ti(n, t, null), Xt(t, l), c.m(e, null), o = !0, s || (r = [
        kl(t, "click", pm(
          /*click_handler_2*/
          i[22]
        )),
        cm(fs.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        kl(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], s = !0);
    },
    p(f, u) {
      _ === (_ = a(f)) && c ? c.p(f, u) : (c.d(1), c = _(f), c && (c.c(), c.m(e, null)));
    },
    i(f) {
      o || (Se(n.$$.fragment, f), o = !0);
    },
    o(f) {
      Le(n.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Fe(e), ei(n), c.d(), s = !1, gm(r);
    }
  };
}
function Bm(i) {
  let e, t = wa(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ya(va(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = cs();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Ue(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = wa(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = va(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ya(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Fe(e), hm(n, l);
    }
  };
}
function Dm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ze("option"), n = u_(t), e.__value = "", Zo(e, e.__value), pe(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      Ue(l, e, o), Xt(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && c_(n, t);
    },
    d(l) {
      l && Fe(e);
    }
  };
}
function ya(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = Ze("option"), n = u_(t), l = Mi(), e.__value = o = /*device*/
      i[32].deviceId, Zo(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, pe(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Ue(r, e, a), Xt(e, n), Xt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && c_(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, Zo(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Fe(e);
    }
  };
}
function Lm(i) {
  let e, t, n, l, o, s;
  const r = [Cm, km], a = [];
  function _(c, f) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = Ze("div"), t = Ze("video"), n = Mi(), o.c(), pe(t, "class", "svelte-8hqvb6"), $i(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), $i(t, "hide", !/*webcam_accessed*/
      i[9]), pe(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, f) {
      Ue(c, e, f), Xt(e, t), i[19](t), Xt(e, n), a[l].m(e, null), s = !0;
    },
    p(c, f) {
      (!s || f[0] & /*mirror_webcam*/
      4) && $i(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || f[0] & /*webcam_accessed*/
      512) && $i(t, "hide", !/*webcam_accessed*/
      c[9]);
      let u = l;
      l = _(c), l === u ? a[l].p(c, f) : (zi(), Le(a[u], 1, 1, () => {
        a[u] = null;
      }), qi(), o = a[l], o ? o.p(c, f) : (o = a[l] = r[l](c), o.c()), Se(o, 1), o.m(e, null));
    },
    i(c) {
      s || (Se(o), s = !0);
    },
    o(c) {
      Le(o), s = !1;
    },
    d(c) {
      c && Fe(e), i[19](null), a[l].d();
    }
  };
}
function fs(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Mm(i, e, t) {
  var n = this && this.__awaiter || function(Y, G, A, x) {
    function J(oe) {
      return oe instanceof A ? oe : new A(function(me) {
        me(oe);
      });
    }
    return new (A || (A = Promise))(function(oe, me) {
      function H(F) {
        try {
          R(x.next(F));
        } catch (Z) {
          me(Z);
        }
      }
      function ze(F) {
        try {
          R(x.throw(F));
        } catch (Z) {
          me(Z);
        }
      }
      function R(F) {
        F.done ? oe(F.value) : J(F.value).then(H, ze);
      }
      R((x = x.apply(Y, G || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: f = "image" } = e, { mirror_webcam: u } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = wm();
  vm(() => r = document.createElement("canvas"));
  const b = (Y) => n(void 0, void 0, void 0, function* () {
    const A = Y.target.value;
    yield pa(d, l, A).then((x) => n(void 0, void 0, void 0, function* () {
      B = x, t(7, s = o.find((J) => J.deviceId === A) || null), t(10, M = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        pa(d, l).then((Y) => n(this, void 0, void 0, function* () {
          t(9, C = !0), t(6, o = yield sm()), B = Y;
        })).then(() => rm(o)).then((Y) => {
          t(6, o = Y);
          const G = B.getTracks().map((A) => {
            var x;
            return (x = A.getSettings()) === null || x === void 0 ? void 0 : x.deviceId;
          })[0];
          t(7, s = G && Y.find((A) => A.deviceId === G) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (Y) {
        if (Y instanceof DOMException && Y.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw Y;
      }
    });
  }
  function p() {
    var Y = r.getContext("2d");
    (!a || a && z) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, Y.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), u && (Y.scale(-1, 1), Y.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (G) => {
        g(a ? "stream" : "capture", G);
      },
      "image/png",
      0.8
    ));
  }
  let z = !1, L = [], B, y, w;
  function E() {
    if (z) {
      w.stop();
      let Y = new Blob(L, { type: y }), G = new FileReader();
      G.onload = function(A) {
        return n(this, void 0, void 0, function* () {
          var x;
          if (A.target) {
            let J = new File([Y], "sample." + y.substring(6));
            const oe = yield Qr([J]);
            let me = ((x = yield h(oe, c)) === null || x === void 0 ? void 0 : x.filter(Boolean))[0];
            g("capture", me), g("stop_recording");
          }
        });
      }, G.readAsDataURL(Y);
    } else {
      g("start_recording"), L = [];
      let Y = ["video/webm", "video/mp4"];
      for (let G of Y)
        if (MediaRecorder.isTypeSupported(G)) {
          y = G;
          break;
        }
      if (y === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      w = new MediaRecorder(B, { mimeType: y }), w.addEventListener("dataavailable", function(G) {
        L.push(G.data);
      }), w.start(200);
    }
    t(8, z = !z);
  }
  let C = !1;
  function S() {
    f === "image" && a && t(8, z = !z), f === "image" ? p() : E(), !z && B && (B.getTracks().forEach((Y) => Y.stop()), t(5, l.srcObject = null, l), t(9, C = !1));
  }
  a && f === "image" && window.setInterval(
    () => {
      l && !_ && p();
    },
    500
  );
  let M = !1;
  function $(Y) {
    Y.preventDefault(), Y.stopPropagation(), t(10, M = !1);
  }
  function P(Y) {
    fm[Y ? "unshift" : "push"](() => {
      l = Y, t(5, l);
    });
  }
  const q = async () => v(), U = () => t(10, M = !0), j = () => t(10, M = !1);
  return i.$$set = (Y) => {
    "streaming" in Y && t(0, a = Y.streaming), "pending" in Y && t(15, _ = Y.pending), "root" in Y && t(16, c = Y.root), "mode" in Y && t(1, f = Y.mode), "mirror_webcam" in Y && t(2, u = Y.mirror_webcam), "include_audio" in Y && t(17, d = Y.include_audio), "i18n" in Y && t(3, m = Y.i18n), "upload" in Y && t(18, h = Y.upload);
  }, [
    a,
    f,
    u,
    m,
    fs,
    l,
    o,
    s,
    z,
    C,
    M,
    b,
    v,
    S,
    $,
    _,
    c,
    d,
    h,
    P,
    q,
    U,
    j
  ];
}
class Em extends _m {
  constructor(e) {
    super(), mm(
      this,
      e,
      Mm,
      Lm,
      bm,
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
    return fs;
  }
}
const {
  SvelteComponent: u7,
  attr: f7,
  create_component: d7,
  destroy_component: h7,
  detach: m7,
  element: g7,
  init: b7,
  insert: p7,
  mount_component: w7,
  noop: v7,
  safe_not_equal: k7,
  transition_in: C7,
  transition_out: y7
} = window.__gradio__svelte__internal, { createEventDispatcher: S7 } = window.__gradio__svelte__internal, {
  SvelteComponent: q7,
  add_flush_callback: z7,
  append: B7,
  attr: D7,
  bind: L7,
  binding_callbacks: M7,
  bubble: E7,
  check_outros: R7,
  create_component: W7,
  create_slot: A7,
  destroy_component: X7,
  detach: Y7,
  element: I7,
  empty: H7,
  get_all_dirty_from_scope: j7,
  get_slot_changes: T7,
  group_outros: F7,
  init: U7,
  insert: V7,
  listen: O7,
  mount_component: N7,
  noop: $7,
  safe_not_equal: P7,
  space: K7,
  toggle_class: x7,
  transition_in: Z7,
  transition_out: G7,
  update_slot_base: J7
} = window.__gradio__svelte__internal, { createEventDispatcher: Q7, tick: e9 } = window.__gradio__svelte__internal, {
  SvelteComponent: t9,
  attr: n9,
  check_outros: i9,
  create_component: l9,
  destroy_component: o9,
  detach: s9,
  element: a9,
  group_outros: r9,
  init: _9,
  insert: c9,
  mount_component: u9,
  safe_not_equal: f9,
  toggle_class: d9,
  transition_in: h9,
  transition_out: m9
} = window.__gradio__svelte__internal, {
  SvelteComponent: g9,
  add_flush_callback: b9,
  assign: p9,
  bind: w9,
  binding_callbacks: v9,
  check_outros: k9,
  create_component: C9,
  destroy_component: y9,
  detach: S9,
  empty: q9,
  flush: z9,
  get_spread_object: B9,
  get_spread_update: D9,
  group_outros: L9,
  init: M9,
  insert: E9,
  mount_component: R9,
  safe_not_equal: W9,
  space: A9,
  transition_in: X9,
  transition_out: Y9
} = window.__gradio__svelte__internal, {
  SvelteComponent: I9,
  append: H9,
  attr: j9,
  detach: T9,
  init: F9,
  insert: U9,
  noop: V9,
  safe_not_equal: O9,
  set_style: N9,
  svg_element: $9
} = window.__gradio__svelte__internal, {
  SvelteComponent: Rm,
  append: Pt,
  attr: T,
  detach: Wm,
  init: Am,
  insert: Xm,
  noop: vo,
  safe_not_equal: Ym,
  set_style: Kt,
  svg_element: Rt
} = window.__gradio__svelte__internal;
function Im(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = Rt("svg"), t = Rt("rect"), n = Rt("rect"), l = Rt("rect"), o = Rt("rect"), s = Rt("line"), r = Rt("line"), a = Rt("line"), _ = Rt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(l, "x", "2"), T(l, "y", "17"), T(l, "width", "5"), T(l, "height", "5"), T(l, "rx", "1"), T(l, "ry", "1"), T(l, "stroke-width", "2"), T(l, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), Kt(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Kt(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Kt(a, "stroke-width", "2px"), T(_, "x1", "19.5"), T(_, "y1", "8"), T(_, "x2", "19.5"), T(_, "y2", "16"), Kt(_, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Kt(e, "fill-rule", "evenodd"), Kt(e, "clip-rule", "evenodd"), Kt(e, "stroke-linecap", "round"), Kt(e, "stroke-linejoin", "round");
    },
    m(c, f) {
      Xm(c, e, f), Pt(e, t), Pt(e, n), Pt(e, l), Pt(e, o), Pt(e, s), Pt(e, r), Pt(e, a), Pt(e, _);
    },
    p: vo,
    i: vo,
    o: vo,
    d(c) {
      c && Wm(e);
    }
  };
}
class Hm extends Rm {
  constructor(e) {
    super(), Am(this, e, null, Im, Ym, {});
  }
}
const {
  SvelteComponent: jm,
  append: Tm,
  attr: ht,
  detach: Fm,
  init: Um,
  insert: Vm,
  noop: ko,
  safe_not_equal: Om,
  set_style: Pi,
  svg_element: Sa
} = window.__gradio__svelte__internal;
function Nm(i) {
  let e, t;
  return {
    c() {
      e = Sa("svg"), t = Sa("path"), ht(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), ht(t, "fill", "none"), ht(t, "stroke-width", "2"), ht(e, "width", "100%"), ht(e, "height", "100%"), ht(e, "viewBox", "0 0 24 24"), ht(e, "version", "1.1"), ht(e, "xmlns", "http://www.w3.org/2000/svg"), ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ht(e, "xml:space", "preserve"), ht(e, "stroke", "currentColor"), Pi(e, "fill-rule", "evenodd"), Pi(e, "clip-rule", "evenodd"), Pi(e, "stroke-linecap", "round"), Pi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Vm(n, e, l), Tm(e, t);
    },
    p: ko,
    i: ko,
    o: ko,
    d(n) {
      n && Fm(e);
    }
  };
}
class $m extends jm {
  constructor(e) {
    super(), Um(this, e, null, Nm, Om, {});
  }
}
const {
  SvelteComponent: Pm,
  append: Km,
  attr: mt,
  detach: xm,
  init: Zm,
  insert: Gm,
  noop: Co,
  safe_not_equal: Jm,
  set_style: Ki,
  svg_element: qa
} = window.__gradio__svelte__internal;
function Qm(i) {
  let e, t;
  return {
    c() {
      e = qa("svg"), t = qa("path"), mt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), mt(t, "fill", "none"), mt(t, "stroke-width", "2"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "version", "1.1"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), mt(e, "xml:space", "preserve"), mt(e, "stroke", "currentColor"), Ki(e, "fill-rule", "evenodd"), Ki(e, "clip-rule", "evenodd"), Ki(e, "stroke-linecap", "round"), Ki(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Gm(n, e, l), Km(e, t);
    },
    p: Co,
    i: Co,
    o: Co,
    d(n) {
      n && xm(e);
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
  append: za,
  attr: Wt,
  detach: n0,
  init: i0,
  insert: l0,
  noop: yo,
  safe_not_equal: o0,
  set_style: xi,
  svg_element: So
} = window.__gradio__svelte__internal;
function s0(i) {
  let e, t, n;
  return {
    c() {
      e = So("svg"), t = So("path"), n = So("path"), Wt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Wt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Wt(e, "width", "100%"), Wt(e, "height", "100%"), Wt(e, "viewBox", "0 0 24 24"), Wt(e, "xmlns", "http://www.w3.org/2000/svg"), Wt(e, "fill", "none"), Wt(e, "stroke", "currentColor"), Wt(e, "stroke-width", "2"), xi(e, "fill-rule", "evenodd"), xi(e, "clip-rule", "evenodd"), xi(e, "stroke-linecap", "round"), xi(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      l0(l, e, o), za(e, t), za(e, n);
    },
    p: yo,
    i: yo,
    o: yo,
    d(l) {
      l && n0(e);
    }
  };
}
class a0 extends t0 {
  constructor(e) {
    super(), i0(this, e, null, s0, o0, {});
  }
}
const {
  SvelteComponent: r0,
  append: _0,
  attr: xt,
  detach: c0,
  init: u0,
  insert: f0,
  noop: qo,
  safe_not_equal: d0,
  set_style: Zi,
  svg_element: Ba
} = window.__gradio__svelte__internal;
function h0(i) {
  let e, t;
  return {
    c() {
      e = Ba("svg"), t = Ba("path"), xt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), xt(e, "width", "100%"), xt(e, "height", "100%"), xt(e, "viewBox", "0 0 24 24"), xt(e, "fill", "none"), xt(e, "stroke", "currentColor"), xt(e, "stroke-width", "2"), Zi(e, "fill-rule", "evenodd"), Zi(e, "clip-rule", "evenodd"), Zi(e, "stroke-linecap", "round"), Zi(e, "stroke-linejoin", "round"), xt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      f0(n, e, l), _0(e, t);
    },
    p: qo,
    i: qo,
    o: qo,
    d(n) {
      n && c0(e);
    }
  };
}
class m0 extends r0 {
  constructor(e) {
    super(), u0(this, e, null, h0, d0, {});
  }
}
const {
  SvelteComponent: g0,
  append: b0,
  attr: Zt,
  detach: p0,
  init: w0,
  insert: v0,
  noop: zo,
  safe_not_equal: k0,
  set_style: Gi,
  svg_element: Da
} = window.__gradio__svelte__internal;
function C0(i) {
  let e, t;
  return {
    c() {
      e = Da("svg"), t = Da("path"), Zt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Zt(e, "width", "100%"), Zt(e, "height", "100%"), Zt(e, "viewBox", "0 0 24 24"), Zt(e, "fill", "none"), Zt(e, "stroke", "currentColor"), Zt(e, "stroke-width", "2"), Gi(e, "fill-rule", "evenodd"), Gi(e, "clip-rule", "evenodd"), Gi(e, "stroke-linecap", "round"), Gi(e, "stroke-linejoin", "round"), Zt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      v0(n, e, l), b0(e, t);
    },
    p: zo,
    i: zo,
    o: zo,
    d(n) {
      n && p0(e);
    }
  };
}
class y0 extends g0 {
  constructor(e) {
    super(), w0(this, e, null, C0, k0, {});
  }
}
const {
  SvelteComponent: S0,
  append: Ji,
  attr: ue,
  detach: q0,
  init: z0,
  insert: B0,
  noop: Bo,
  safe_not_equal: D0,
  set_style: et,
  svg_element: di
} = window.__gradio__svelte__internal;
function L0(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = di("svg"), t = di("circle"), n = di("line"), l = di("line"), o = di("line"), ue(t, "cx", "9"), ue(t, "cy", "9"), ue(t, "r", "6"), et(t, "fill", "none"), et(t, "stroke-width", "2px"), ue(n, "x1", "13"), ue(n, "y1", "13"), ue(n, "x2", "20"), ue(n, "y2", "20"), et(n, "fill", "none"), et(n, "stroke-width", "2px"), ue(l, "x1", "6"), ue(l, "y1", "9"), ue(l, "x2", "12"), ue(l, "y2", "9"), et(l, "fill", "none"), et(l, "stroke-width", "2px"), ue(o, "x1", "9"), ue(o, "y1", "6"), ue(o, "x2", "9"), ue(o, "y2", "12"), et(o, "fill", "none"), et(o, "stroke-width", "2px"), ue(e, "width", "100%"), ue(e, "height", "100%"), ue(e, "viewBox", "0 0 24 24"), ue(e, "version", "1.1"), ue(e, "xmlns", "http://www.w3.org/2000/svg"), ue(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ue(e, "xml:space", "preserve"), ue(e, "stroke", "currentColor"), et(e, "fill-rule", "evenodd"), et(e, "clip-rule", "evenodd"), et(e, "stroke-linecap", "round"), et(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      B0(s, e, r), Ji(e, t), Ji(e, n), Ji(e, l), Ji(e, o);
    },
    p: Bo,
    i: Bo,
    o: Bo,
    d(s) {
      s && q0(e);
    }
  };
}
class M0 extends S0 {
  constructor(e) {
    super(), z0(this, e, null, L0, D0, {});
  }
}
const {
  SvelteComponent: E0,
  append: Do,
  attr: ve,
  detach: R0,
  init: W0,
  insert: A0,
  noop: Lo,
  safe_not_equal: X0,
  set_style: kt,
  svg_element: Qi
} = window.__gradio__svelte__internal;
function Y0(i) {
  let e, t, n, l;
  return {
    c() {
      e = Qi("svg"), t = Qi("circle"), n = Qi("line"), l = Qi("line"), ve(t, "cx", "9"), ve(t, "cy", "9"), ve(t, "r", "6"), kt(t, "fill", "none"), kt(t, "stroke-width", "2px"), ve(n, "x1", "13"), ve(n, "y1", "13"), ve(n, "x2", "20"), ve(n, "y2", "20"), kt(n, "fill", "none"), kt(n, "stroke-width", "2px"), ve(l, "x1", "6"), ve(l, "y1", "9"), ve(l, "x2", "12"), ve(l, "y2", "9"), kt(l, "fill", "none"), kt(l, "stroke-width", "2px"), ve(e, "width", "100%"), ve(e, "height", "100%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "version", "1.1"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ve(e, "xml:space", "preserve"), ve(e, "stroke", "currentColor"), kt(e, "fill-rule", "evenodd"), kt(e, "clip-rule", "evenodd"), kt(e, "stroke-linecap", "round"), kt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      A0(o, e, s), Do(e, t), Do(e, n), Do(e, l);
    },
    p: Lo,
    i: Lo,
    o: Lo,
    d(o) {
      o && R0(e);
    }
  };
}
class I0 extends E0 {
  constructor(e) {
    super(), W0(this, e, null, Y0, X0, {});
  }
}
const {
  SvelteComponent: H0,
  append: Mo,
  attr: Ye,
  detach: j0,
  init: T0,
  insert: F0,
  noop: Eo,
  safe_not_equal: U0,
  set_style: Ct,
  svg_element: el
} = window.__gradio__svelte__internal;
function V0(i) {
  let e, t, n, l;
  return {
    c() {
      e = el("svg"), t = el("rect"), n = el("path"), l = el("path"), Ye(t, "x", "3"), Ye(t, "y", "3"), Ye(t, "width", "18"), Ye(t, "height", "18"), Ct(t, "fill", "none"), Ct(t, "stroke-width", "2px"), Ye(n, "d", "M 7 7 L 10 10 M 7 10 L 10 7"), Ct(n, "fill", "none"), Ct(n, "stroke-width", "2px"), Ye(l, "d", "M 14 17 L 17 14 M 14 14 L 17 17"), Ct(l, "fill", "none"), Ct(l, "stroke-width", "2px"), Ye(e, "width", "100%"), Ye(e, "height", "100%"), Ye(e, "viewBox", "0 0 24 24"), Ye(e, "version", "1.1"), Ye(e, "xmlns", "http://www.w3.org/2000/svg"), Ye(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ye(e, "xml:space", "preserve"), Ye(e, "stroke", "currentColor"), Ct(e, "fill-rule", "evenodd"), Ct(e, "clip-rule", "evenodd"), Ct(e, "stroke-linecap", "round"), Ct(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      F0(o, e, s), Mo(e, t), Mo(e, n), Mo(e, l);
    },
    p: Eo,
    i: Eo,
    o: Eo,
    d(o) {
      o && j0(e);
    }
  };
}
class O0 extends H0 {
  constructor(e) {
    super(), T0(this, e, null, V0, U0, {});
  }
}
const {
  SvelteComponent: N0,
  append: La,
  attr: Ro,
  bubble: Ma,
  create_component: $0,
  destroy_component: P0,
  detach: f_,
  element: Ea,
  init: K0,
  insert: d_,
  listen: Wo,
  mount_component: x0,
  run_all: Z0,
  safe_not_equal: G0,
  set_data: J0,
  set_input_value: Ra,
  space: Q0,
  text: eg,
  transition_in: tg,
  transition_out: ng
} = window.__gradio__svelte__internal, { createEventDispatcher: ig, afterUpdate: lg } = window.__gradio__svelte__internal;
function og(i) {
  let e;
  return {
    c() {
      e = eg(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      d_(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && J0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && f_(e);
    }
  };
}
function sg(i) {
  let e, t, n, l, o, s, r;
  return t = new vr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [og] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Ea("label"), $0(t.$$.fragment), n = Q0(), l = Ea("input"), Ro(l, "type", "color"), l.disabled = /*disabled*/
      i[3], Ro(l, "class", "svelte-16l8u73"), Ro(e, "class", "block");
    },
    m(a, _) {
      d_(a, e, _), x0(t, e, null), La(e, n), La(e, l), Ra(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        Wo(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Wo(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Wo(
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
      1 && Ra(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (tg(t.$$.fragment, a), o = !0);
    },
    o(a) {
      ng(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && f_(e), P0(t), s = !1, Z0(r);
    }
  };
}
function ag(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = ig();
  function c() {
    _("change", n), l || _("input");
  }
  lg(() => {
    t(5, l = !1);
  });
  function f(m) {
    Ma.call(this, i, m);
  }
  function u(m) {
    Ma.call(this, i, m);
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
    f,
    u,
    d
  ];
}
class rg extends N0 {
  constructor(e) {
    super(), K0(this, e, ag, sg, G0, {
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
  SvelteComponent: P9,
  append: K9,
  attr: x9,
  component_subscribe: Z9,
  detach: G9,
  element: J9,
  init: Q9,
  insert: eC,
  noop: tC,
  safe_not_equal: nC,
  set_style: iC,
  svg_element: lC,
  toggle_class: oC
} = window.__gradio__svelte__internal, { onMount: sC } = window.__gradio__svelte__internal, {
  SvelteComponent: aC,
  append: rC,
  attr: _C,
  binding_callbacks: cC,
  check_outros: uC,
  create_component: fC,
  create_slot: dC,
  destroy_component: hC,
  destroy_each: mC,
  detach: gC,
  element: bC,
  empty: pC,
  ensure_array_like: wC,
  get_all_dirty_from_scope: vC,
  get_slot_changes: kC,
  group_outros: CC,
  init: yC,
  insert: SC,
  mount_component: qC,
  noop: zC,
  safe_not_equal: BC,
  set_data: DC,
  set_style: LC,
  space: MC,
  text: EC,
  toggle_class: RC,
  transition_in: WC,
  transition_out: AC,
  update_slot_base: XC
} = window.__gradio__svelte__internal, { tick: YC } = window.__gradio__svelte__internal, { onDestroy: IC } = window.__gradio__svelte__internal, {
  SvelteComponent: HC,
  add_render_callback: jC,
  append: TC,
  attr: FC,
  bubble: UC,
  check_outros: VC,
  create_component: OC,
  create_in_transition: NC,
  create_out_transition: $C,
  destroy_component: PC,
  detach: KC,
  element: xC,
  group_outros: ZC,
  init: GC,
  insert: JC,
  listen: QC,
  mount_component: ey,
  run_all: ty,
  safe_not_equal: ny,
  set_data: iy,
  space: ly,
  stop_propagation: oy,
  text: sy,
  transition_in: ay,
  transition_out: ry
} = window.__gradio__svelte__internal, { createEventDispatcher: _y, onMount: cy } = window.__gradio__svelte__internal, {
  SvelteComponent: uy,
  append: fy,
  attr: dy,
  bubble: hy,
  check_outros: my,
  create_animation: gy,
  create_component: by,
  destroy_component: py,
  detach: wy,
  element: vy,
  ensure_array_like: ky,
  fix_and_outro_and_destroy_block: Cy,
  fix_position: yy,
  group_outros: Sy,
  init: qy,
  insert: zy,
  mount_component: By,
  noop: Dy,
  safe_not_equal: Ly,
  set_style: My,
  space: Ey,
  transition_in: Ry,
  transition_out: Wy,
  update_keyed_each: Ay
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xy,
  attr: Yy,
  detach: Iy,
  element: Hy,
  init: jy,
  insert: Ty,
  noop: Fy,
  safe_not_equal: Uy,
  set_style: Vy,
  toggle_class: Oy
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ny,
  add_flush_callback: $y,
  assign: Py,
  bind: Ky,
  binding_callbacks: xy,
  create_component: Zy,
  destroy_component: Gy,
  detach: Jy,
  flush: Qy,
  get_spread_object: eS,
  get_spread_update: tS,
  init: nS,
  insert: iS,
  mount_component: lS,
  safe_not_equal: oS,
  space: sS,
  transition_in: aS,
  transition_out: rS
} = window.__gradio__svelte__internal;
var h_ = (i) => {
  throw TypeError(i);
}, m_ = (i, e, t) => e.has(i) || h_("Cannot " + t), hi = (i, e, t) => (m_(i, e, "read from private field"), e.get(i)), _g = (i, e, t) => e.has(i) ? h_("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), cg = (i, e, t, n) => (m_(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var Qt;
class _S extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = hi(this, Qt) + t; ; ) {
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
        cg(this, Qt, t);
      },
      flush: (t) => {
        if (hi(this, Qt) === "")
          return;
        const n = e.allowCR && hi(this, Qt).endsWith("\r") ? hi(this, Qt).slice(0, -1) : hi(this, Qt);
        t.enqueue(n);
      }
    }), _g(this, Qt, "");
  }
}
Qt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: ug,
  append: g_,
  attr: fe,
  bubble: fg,
  check_outros: dg,
  create_slot: b_,
  detach: Wi,
  element: Il,
  empty: hg,
  get_all_dirty_from_scope: p_,
  get_slot_changes: w_,
  group_outros: mg,
  init: gg,
  insert: Ai,
  listen: bg,
  safe_not_equal: pg,
  set_style: je,
  space: v_,
  src_url_equal: Cl,
  toggle_class: On,
  transition_in: yl,
  transition_out: Sl,
  update_slot_base: k_
} = window.__gradio__svelte__internal;
function wg(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Wa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = b_(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Il("button"), r && r.c(), t = v_(), _ && _.c(), fe(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), fe(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], On(e, "hidden", !/*visible*/
      i[2]), je(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), je(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), je(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, f) {
      Ai(c, e, f), r && r.m(e, null), g_(e, t), _ && _.m(e, null), l = !0, o || (s = bg(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, f) {
      /*icon*/
      c[7] ? r ? r.p(c, f) : (r = Wa(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || f & /*$$scope*/
      2048) && k_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? w_(
          a,
          /*$$scope*/
          c[11],
          f,
          null
        ) : p_(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && fe(e, "class", n), (!l || f & /*elem_id*/
      1) && fe(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || f & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || f & /*size, variant, elem_classes, visible*/
      30) && On(e, "hidden", !/*visible*/
      c[2]), f & /*scale*/
      512 && je(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), f & /*scale*/
      512 && je(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && je(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (yl(_, c), l = !0);
    },
    o(c) {
      Sl(_, c), l = !1;
    },
    d(c) {
      c && Wi(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function vg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Aa(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = b_(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Il("a"), o && o.c(), t = v_(), r && r.c(), fe(
        e,
        "href",
        /*link*/
        i[6]
      ), fe(e, "rel", "noopener noreferrer"), fe(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), fe(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), fe(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), On(e, "hidden", !/*visible*/
      i[2]), On(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), je(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), je(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), je(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), je(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, _) {
      Ai(a, e, _), o && o.m(e, null), g_(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = Aa(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && k_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? w_(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : p_(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && fe(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && fe(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && fe(e, "class", n), (!l || _ & /*elem_id*/
      1) && fe(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && On(e, "hidden", !/*visible*/
      a[2]), (!l || _ & /*size, variant, elem_classes, disabled*/
      282) && On(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), _ & /*scale*/
      512 && je(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && je(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && je(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && je(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (yl(r, a), l = !0);
    },
    o(a) {
      Sl(r, a), l = !1;
    },
    d(a) {
      a && Wi(e), o && o.d(), r && r.d(a);
    }
  };
}
function Wa(i) {
  let e, t, n;
  return {
    c() {
      e = Il("img"), fe(e, "class", "button-icon svelte-8huxfn"), Cl(e.src, t = /*icon*/
      i[7].url) || fe(e, "src", t), fe(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ai(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Cl(e.src, t = /*icon*/
      l[7].url) && fe(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && fe(e, "alt", n);
    },
    d(l) {
      l && Wi(e);
    }
  };
}
function Aa(i) {
  let e, t, n;
  return {
    c() {
      e = Il("img"), fe(e, "class", "button-icon svelte-8huxfn"), Cl(e.src, t = /*icon*/
      i[7].url) || fe(e, "src", t), fe(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ai(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Cl(e.src, t = /*icon*/
      l[7].url) && fe(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && fe(e, "alt", n);
    },
    d(l) {
      l && Wi(e);
    }
  };
}
function kg(i) {
  let e, t, n, l;
  const o = [vg, wg], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = hg();
    },
    m(a, _) {
      s[e].m(a, _), Ai(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (mg(), Sl(s[c], 1, 1, () => {
        s[c] = null;
      }), dg(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), yl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (yl(t), l = !0);
    },
    o(a) {
      Sl(t), l = !1;
    },
    d(a) {
      a && Wi(n), s[e].d(a);
    }
  };
}
function Cg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: f = null } = e, { icon: u = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(b) {
    fg.call(this, i, b);
  }
  return i.$$set = (b) => {
    "elem_id" in b && t(0, o = b.elem_id), "elem_classes" in b && t(1, s = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, _ = b.size), "value" in b && t(5, c = b.value), "link" in b && t(6, f = b.link), "icon" in b && t(7, u = b.icon), "disabled" in b && t(8, d = b.disabled), "scale" in b && t(9, m = b.scale), "min_width" in b && t(10, h = b.min_width), "$$scope" in b && t(11, l = b.$$scope);
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
    m,
    h,
    l,
    n,
    g
  ];
}
class Go extends ug {
  constructor(e) {
    super(), gg(this, e, Cg, kg, pg, {
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
  SvelteComponent: cS,
  create_component: uS,
  destroy_component: fS,
  detach: dS,
  init: hS,
  insert: mS,
  mount_component: gS,
  safe_not_equal: bS,
  set_data: pS,
  text: wS,
  transition_in: vS,
  transition_out: kS
} = window.__gradio__svelte__internal, {
  SvelteComponent: yg,
  add_render_callback: C_,
  append: tl,
  attr: Pe,
  binding_callbacks: Xa,
  check_outros: Sg,
  create_bidirectional_transition: Ya,
  destroy_each: qg,
  detach: Bi,
  element: ql,
  empty: zg,
  ensure_array_like: Ia,
  group_outros: Bg,
  init: Dg,
  insert: Di,
  listen: Jo,
  prevent_default: Lg,
  run_all: Mg,
  safe_not_equal: Eg,
  set_data: Rg,
  set_style: In,
  space: Qo,
  text: Wg,
  toggle_class: yt,
  transition_in: Ao,
  transition_out: Ha
} = window.__gradio__svelte__internal, { createEventDispatcher: Ag } = window.__gradio__svelte__internal;
function ja(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Ta(i) {
  let e, t, n, l, o, s = Ia(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Fa(ja(i, s, a));
  return {
    c() {
      e = ql("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Pe(e, "class", "options svelte-yuohum"), Pe(e, "role", "listbox"), In(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), In(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), In(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, _) {
      Di(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = Jo(e, "mousedown", Lg(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Ia(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = ja(a, s, c);
          r[c] ? r[c].p(f, _) : (r[c] = Fa(f), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && In(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && In(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && In(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && C_(() => {
        n && (t || (t = Ya(e, Os, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Ya(e, Os, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Bi(e), qg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Fa(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = ql("li"), t = ql("span"), t.textContent = "✓", n = Qo(), o = Wg(l), s = Qo(), Pe(t, "class", "inner-item svelte-yuohum"), yt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Pe(e, "class", "item svelte-yuohum"), Pe(e, "data-index", r = /*index*/
      i[26]), Pe(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Pe(e, "data-testid", "dropdown-option"), Pe(e, "role", "option"), Pe(e, "aria-selected", _ = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), yt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), yt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), yt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), yt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, f) {
      Di(c, e, f), tl(e, t), tl(e, n), tl(e, o), tl(e, s);
    },
    p(c, f) {
      f & /*selected_indices, filtered_indices*/
      18 && yt(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), f & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Rg(o, l), f & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Pe(e, "data-index", r), f & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Pe(e, "aria-label", a), f & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Pe(e, "aria-selected", _), f & /*selected_indices, filtered_indices*/
      18 && yt(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), f & /*filtered_indices, active_index*/
      34 && yt(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && yt(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && yt(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && Bi(e);
    }
  };
}
function Xg(i) {
  let e, t, n, l, o;
  C_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Ta(i)
  );
  return {
    c() {
      e = ql("div"), t = Qo(), s && s.c(), n = zg(), Pe(e, "class", "reference");
    },
    m(r, a) {
      Di(r, e, a), i[20](e), Di(r, t, a), s && s.m(r, a), Di(r, n, a), l || (o = [
        Jo(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Jo(
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
      12 && Ao(s, 1)) : (s = Ta(r), s.c(), Ao(s, 1), s.m(n.parentNode, n)) : s && (Bg(), Ha(s, 1, 1, () => {
        s = null;
      }), Sg());
    },
    i(r) {
      Ao(s);
    },
    o(r) {
      Ha(s);
    },
    d(r) {
      r && (Bi(e), Bi(t), Bi(n)), i[20](null), s && s.d(r), l = !1, Mg(o);
    }
  };
}
function Yg(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, f, u, d, m, h, g, b, v, p;
  function z() {
    const { top: M, bottom: $ } = h.getBoundingClientRect();
    t(16, f = M), t(17, u = p - $);
  }
  let L = null;
  function B() {
    r && (L !== null && clearTimeout(L), L = setTimeout(
      () => {
        z(), L = null;
      },
      10
    ));
  }
  const y = Ag();
  function w() {
    t(11, p = window.innerHeight);
  }
  function E(M) {
    Xa[M ? "unshift" : "push"](() => {
      h = M, t(6, h);
    });
  }
  const C = (M) => y("change", M);
  function S(M) {
    Xa[M ? "unshift" : "push"](() => {
      g = M, t(7, g);
    });
  }
  return i.$$set = (M) => {
    "choices" in M && t(0, o = M.choices), "filtered_indices" in M && t(1, s = M.filtered_indices), "show_options" in M && t(2, r = M.show_options), "disabled" in M && t(3, a = M.disabled), "selected_indices" in M && t(4, _ = M.selected_indices), "active_index" in M && t(5, c = M.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && _.length > 0) {
          let $ = g.querySelectorAll("li");
          for (const P of Array.from($))
            if (P.getAttribute("data-index") === _[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, P.offsetTop);
              break;
            }
        }
        z();
        const M = t(15, l = h.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (M == null ? void 0 : M.height) || 0), t(8, m = (M == null ? void 0 : M.width) || 0);
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
    h,
    g,
    m,
    b,
    v,
    p,
    B,
    y,
    n,
    l,
    f,
    u,
    d,
    w,
    E,
    C,
    S
  ];
}
class Ig extends yg {
  constructor(e) {
    super(), Dg(this, e, Yg, Xg, Eg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Hg(i, e) {
  return (i % e + e) % e;
}
function Ua(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function jg(i, e, t) {
  i("change", e), t || i("input");
}
function Tg(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[Hg(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: CS,
  append: yS,
  attr: SS,
  binding_callbacks: qS,
  check_outros: zS,
  create_component: BS,
  destroy_component: DS,
  destroy_each: LS,
  detach: MS,
  element: ES,
  ensure_array_like: RS,
  group_outros: WS,
  init: AS,
  insert: XS,
  listen: YS,
  mount_component: IS,
  prevent_default: HS,
  run_all: jS,
  safe_not_equal: TS,
  set_data: FS,
  set_input_value: US,
  space: VS,
  text: OS,
  toggle_class: NS,
  transition_in: $S,
  transition_out: PS
} = window.__gradio__svelte__internal, { afterUpdate: KS, createEventDispatcher: xS } = window.__gradio__svelte__internal, {
  SvelteComponent: Fg,
  append: cn,
  attr: $e,
  binding_callbacks: Ug,
  check_outros: Vg,
  create_component: es,
  destroy_component: ts,
  detach: ds,
  element: Tn,
  group_outros: Og,
  init: Ng,
  insert: hs,
  listen: mi,
  mount_component: ns,
  run_all: $g,
  safe_not_equal: Pg,
  set_data: Kg,
  set_input_value: Va,
  space: Xo,
  text: xg,
  toggle_class: Hn,
  transition_in: Fn,
  transition_out: yi
} = window.__gradio__svelte__internal, { onMount: Zg } = window.__gradio__svelte__internal, { createEventDispatcher: Gg, afterUpdate: Jg } = window.__gradio__svelte__internal;
function Qg(i) {
  let e;
  return {
    c() {
      e = xg(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      hs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Kg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && ds(e);
    }
  };
}
function Oa(i) {
  let e, t, n;
  return t = new os({}), {
    c() {
      e = Tn("div"), es(t.$$.fragment), $e(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      hs(l, e, o), ns(t, e, null), n = !0;
    },
    i(l) {
      n || (Fn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      yi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ds(e), ts(t);
    }
  };
}
function eb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m;
  t = new vr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Qg] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && Oa();
  return f = new Ig({
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
  }), f.$on(
    "change",
    /*handle_option_selected*/
    i[16]
  ), {
    c() {
      e = Tn("div"), es(t.$$.fragment), n = Xo(), l = Tn("div"), o = Tn("div"), s = Tn("div"), r = Tn("input"), _ = Xo(), h && h.c(), c = Xo(), es(f.$$.fragment), $e(r, "role", "listbox"), $e(r, "aria-controls", "dropdown-options"), $e(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), $e(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), $e(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], $e(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Hn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), $e(s, "class", "secondary-wrap svelte-1m1zvyj"), $e(o, "class", "wrap-inner svelte-1m1zvyj"), Hn(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), $e(l, "class", "wrap svelte-1m1zvyj"), $e(e, "class", "svelte-1m1zvyj"), Hn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      hs(g, e, b), ns(t, e, null), cn(e, n), cn(e, l), cn(l, o), cn(o, s), cn(s, r), Va(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), cn(s, _), h && h.m(s, null), cn(l, c), ns(f, l, null), u = !0, d || (m = [
        mi(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        mi(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        mi(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        mi(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        mi(
          r,
          "focus",
          /*handle_focus*/
          i[17]
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
      4096) && $e(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!u || b[0] & /*label*/
      1) && $e(
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
      g[9] && Va(
        r,
        /*input_text*/
        g[9]
      ), (!u || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Hn(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (Og(), yi(h, 1, 1, () => {
        h = null;
      }), Vg()) : h ? b[0] & /*disabled*/
      8 && Fn(h, 1) : (h = Oa(), h.c(), Fn(h, 1), h.m(s, null)), (!u || b[0] & /*show_options*/
      4096) && Hn(
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
      32) && Hn(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      u || (Fn(t.$$.fragment, g), Fn(h), Fn(f.$$.fragment, g), u = !0);
    },
    o(g) {
      yi(t.$$.fragment, g), yi(h), yi(f.$$.fragment, g), u = !1;
    },
    d(g) {
      g && ds(e), ts(t), i[29](null), h && h.d(), ts(f), d = !1, $g(m);
    }
  };
}
function tb(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: f } = e, { container: u = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, b, v, p = "", z = "", L = !1, B = [], y = null, w = null, E;
  const C = Gg();
  o ? (E = a.map((A) => A[1]).indexOf(o), w = E, w === -1 ? (s = o, w = null) : ([p, s] = a[w], z = p), M()) : a.length > 0 && (E = 0, w = 0, [p, o] = a[w], s = o, z = p);
  function S() {
    t(13, b = a.map((A) => A[0])), t(24, v = a.map((A) => A[1]));
  }
  function M() {
    S(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, w = null)) : v.includes(o) ? (t(9, p = b[v.indexOf(o)]), t(11, w = v.indexOf(o))) : d ? (t(9, p = o), t(11, w = null)) : (t(9, p = ""), t(11, w = null)), t(27, E = w);
  }
  function $(A) {
    if (t(11, w = parseInt(A.detail.target.dataset.index)), isNaN(w)) {
      t(11, w = null);
      return;
    }
    t(12, g = !1), t(14, y = null), h.blur();
  }
  function P(A) {
    t(10, B = a.map((x, J) => J)), t(12, g = !0), C("focus");
  }
  function q() {
    d ? t(20, o = p) : t(9, p = b[v.indexOf(o)]), t(12, g = !1), t(14, y = null), C("blur");
  }
  function U(A) {
    t(12, [g, y] = Tg(A, y, B), g, (t(14, y), t(2, a), t(23, _), t(6, d), t(9, p), t(10, B), t(8, h), t(25, z), t(11, w), t(27, E), t(26, L), t(24, v))), A.key === "Enter" && (y !== null ? (t(11, w = y), t(12, g = !1), h.blur(), t(14, y = null)) : b.includes(p) ? (t(11, w = b.indexOf(p)), t(12, g = !1), t(14, y = null), h.blur()) : d && (t(20, o = p), t(11, w = null), t(12, g = !1), t(14, y = null), h.blur()), C("enter", o));
  }
  Jg(() => {
    t(21, r = !1), t(26, L = !0);
  }), Zg(() => {
    h.focus();
  });
  function j() {
    p = this.value, t(9, p), t(11, w), t(27, E), t(26, L), t(2, a), t(24, v);
  }
  function Y(A) {
    Ug[A ? "unshift" : "push"](() => {
      h = A, t(8, h);
    });
  }
  const G = (A) => C("key_up", { key: A.key, input_value: p });
  return i.$$set = (A) => {
    "label" in A && t(0, n = A.label), "info" in A && t(1, l = A.info), "value" in A && t(20, o = A.value), "value_is_output" in A && t(21, r = A.value_is_output), "choices" in A && t(2, a = A.choices), "disabled" in A && t(3, c = A.disabled), "show_label" in A && t(4, f = A.show_label), "container" in A && t(5, u = A.container), "allow_custom_value" in A && t(6, d = A.allow_custom_value), "filterable" in A && t(7, m = A.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && w !== E && w !== null && L && (t(9, [p, o] = a[w], p, (t(20, o), t(11, w), t(27, E), t(26, L), t(2, a), t(24, v))), t(27, E = w), C("select", {
      index: w,
      value: v[w],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (M(), jg(C, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && S(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (d || M(), t(23, _ = a), t(10, B = Ua(a, p)), !d && B.length > 0 && t(14, y = B[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== z && (t(10, B = Ua(a, p)), t(25, z = p), !d && B.length > 0 && t(14, y = B[0]));
  }, [
    n,
    l,
    a,
    c,
    f,
    u,
    d,
    m,
    h,
    p,
    B,
    w,
    g,
    b,
    y,
    C,
    $,
    P,
    q,
    U,
    o,
    r,
    s,
    _,
    v,
    z,
    L,
    E,
    j,
    Y,
    G
  ];
}
class nb extends Fg {
  constructor(e) {
    super(), Ng(
      this,
      e,
      tb,
      eb,
      Pg,
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
  SvelteComponent: ZS,
  attr: GS,
  detach: JS,
  element: QS,
  init: eq,
  insert: tq,
  noop: nq,
  safe_not_equal: iq,
  toggle_class: lq
} = window.__gradio__svelte__internal, {
  SvelteComponent: oq,
  add_flush_callback: sq,
  assign: aq,
  bind: rq,
  binding_callbacks: _q,
  check_outros: cq,
  create_component: uq,
  destroy_component: fq,
  detach: dq,
  empty: hq,
  get_spread_object: mq,
  get_spread_update: gq,
  group_outros: bq,
  init: pq,
  insert: wq,
  mount_component: vq,
  safe_not_equal: kq,
  space: Cq,
  transition_in: yq,
  transition_out: Sq
} = window.__gradio__svelte__internal, {
  SvelteComponent: ib,
  append: tt,
  attr: Nn,
  check_outros: is,
  create_component: wn,
  destroy_component: vn,
  detach: ni,
  element: St,
  group_outros: ls,
  init: lb,
  insert: ii,
  listen: ob,
  mount_component: kn,
  safe_not_equal: sb,
  set_style: $n,
  space: gi,
  text: ms,
  toggle_class: Na,
  transition_in: Me,
  transition_out: xe
} = window.__gradio__svelte__internal, { createEventDispatcher: ab } = window.__gradio__svelte__internal, { onMount: rb } = window.__gradio__svelte__internal;
function $a(i) {
  let e, t, n, l, o, s, r;
  const a = [cb, _b], _ = [];
  function c(f, u) {
    return (
      /*labelDetailLock*/
      f[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = St("div"), t = St("button"), l.c(), Nn(t, "class", "icon svelte-d9x7u0"), Nn(t, "aria-label", "Lock label detail"), Na(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), $n(e, "margin-right", "8px");
    },
    m(f, u) {
      ii(f, e, u), tt(e, t), _[n].m(t, null), o = !0, s || (r = ob(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(f, u) {
      let d = n;
      n = c(f), n !== d && (ls(), xe(_[d], 1, 1, () => {
        _[d] = null;
      }), is(), l = _[n], l || (l = _[n] = a[n](f), l.c()), Me(l, 1), l.m(t, null)), (!o || u & /*labelDetailLock*/
      4) && Na(
        t,
        "selected",
        /*labelDetailLock*/
        f[2] === !0
      );
    },
    i(f) {
      o || (Me(l), o = !0);
    },
    o(f) {
      xe(l), o = !1;
    },
    d(f) {
      f && ni(e), _[n].d(), s = !1, r();
    }
  };
}
function _b(i) {
  let e, t;
  return e = new y0({}), {
    c() {
      wn(e.$$.fragment);
    },
    m(n, l) {
      kn(e, n, l), t = !0;
    },
    i(n) {
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function cb(i) {
  let e, t;
  return e = new m0({}), {
    c() {
      wn(e.$$.fragment);
    },
    m(n, l) {
      kn(e, n, l), t = !0;
    },
    i(n) {
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      vn(e, n);
    }
  };
}
function ub(i) {
  let e;
  return {
    c() {
      e = ms("Cancel");
    },
    m(t, n) {
      ii(t, e, n);
    },
    d(t) {
      t && ni(e);
    }
  };
}
function Pa(i) {
  let e, t, n;
  return t = new Go({
    props: {
      variant: "stop",
      $$slots: { default: [fb] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = St("div"), wn(t.$$.fragment), $n(e, "margin-right", "8px");
    },
    m(l, o) {
      ii(l, e, o), kn(t, e, null), n = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (Me(t.$$.fragment, l), n = !0);
    },
    o(l) {
      xe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ni(e), vn(t);
    }
  };
}
function fb(i) {
  let e;
  return {
    c() {
      e = ms("Remove");
    },
    m(t, n) {
      ii(t, e, n);
    },
    d(t) {
      t && ni(e);
    }
  };
}
function db(i) {
  let e;
  return {
    c() {
      e = ms("OK");
    },
    m(t, n) {
      ii(t, e, n);
    },
    d(t) {
      t && ni(e);
    }
  };
}
function hb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h, g, b, v = !/*showRemove*/
  i[4] && $a(i);
  s = new nb({
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
  ), _ = new rg({
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
  ), u = new Go({
    props: {
      $$slots: { default: [ub] },
      $$scope: { ctx: i }
    }
  }), u.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && Pa(i)
  );
  return g = new Go({
    props: {
      variant: "primary",
      $$slots: { default: [db] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = St("div"), t = St("div"), n = St("span"), v && v.c(), l = gi(), o = St("div"), wn(s.$$.fragment), r = gi(), a = St("div"), wn(_.$$.fragment), c = gi(), f = St("div"), wn(u.$$.fragment), d = gi(), p && p.c(), m = gi(), h = St("div"), wn(g.$$.fragment), $n(o, "margin-right", "10px"), $n(a, "margin-right", "40px"), $n(a, "margin-bottom", "8px"), $n(f, "margin-right", "8px"), Nn(n, "class", "model-content svelte-d9x7u0"), Nn(t, "class", "modal-container svelte-d9x7u0"), Nn(e, "class", "modal svelte-d9x7u0"), Nn(e, "id", "model-box-edit");
    },
    m(z, L) {
      ii(z, e, L), tt(e, t), tt(t, n), v && v.m(n, null), tt(n, l), tt(n, o), kn(s, o, null), tt(n, r), tt(n, a), kn(_, a, null), tt(n, c), tt(n, f), kn(u, f, null), tt(n, d), p && p.m(n, null), tt(n, m), tt(n, h), kn(g, h, null), b = !0;
    },
    p(z, [L]) {
      /*showRemove*/
      z[4] ? v && (ls(), xe(v, 1, 1, () => {
        v = null;
      }), is()) : v ? (v.p(z, L), L & /*showRemove*/
      16 && Me(v, 1)) : (v = $a(z), v.c(), Me(v, 1), v.m(n, l));
      const B = {};
      L & /*currentLabel*/
      1 && (B.value = /*currentLabel*/
      z[0]), L & /*choices*/
      8 && (B.choices = /*choices*/
      z[3]), s.$set(B);
      const y = {};
      L & /*currentColor*/
      2 && (y.value = /*currentColor*/
      z[1]), _.$set(y);
      const w = {};
      L & /*$$scope*/
      262144 && (w.$$scope = { dirty: L, ctx: z }), u.$set(w), /*showRemove*/
      z[4] ? p ? (p.p(z, L), L & /*showRemove*/
      16 && Me(p, 1)) : (p = Pa(z), p.c(), Me(p, 1), p.m(n, m)) : p && (ls(), xe(p, 1, 1, () => {
        p = null;
      }), is());
      const E = {};
      L & /*$$scope*/
      262144 && (E.$$scope = { dirty: L, ctx: z }), g.$set(E);
    },
    i(z) {
      b || (Me(v), Me(s.$$.fragment, z), Me(_.$$.fragment, z), Me(u.$$.fragment, z), Me(p), Me(g.$$.fragment, z), b = !0);
    },
    o(z) {
      xe(v), xe(s.$$.fragment, z), xe(_.$$.fragment, z), xe(u.$$.fragment, z), xe(p), xe(g.$$.fragment, z), b = !1;
    },
    d(z) {
      z && ni(e), v && v.d(), vn(s), vn(_), vn(u), p && p.d(), vn(g);
    }
  };
}
function mb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const f = ab();
  function u(L) {
    f("change", {
      label: l,
      color: a,
      lock: c,
      ret: L
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(L) {
    const { detail: B } = L;
    let y = B;
    Number.isInteger(y) ? (Array.isArray(s) && y < s.length && t(1, a = s[y]), Array.isArray(o) && y < o.length && t(0, l = o[y][0])) : t(0, l = y);
  }
  function m(L) {
    const { detail: B } = L;
    t(1, a = B);
  }
  function h(L) {
    d(L), u(1);
  }
  function g(L) {
    t(2, c = !c);
  }
  function b(L) {
    switch (L.key.toLowerCase()) {
      case "enter":
        u(1);
        break;
      case "escape":
        u(0);
        break;
    }
  }
  rb(() => (document.addEventListener("keydown", b), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const v = () => u(0), p = () => u(-1), z = () => u(1);
  return i.$$set = (L) => {
    "label" in L && t(10, n = L.label), "currentLabel" in L && t(0, l = L.currentLabel), "choices" in L && t(3, o = L.choices), "choicesColors" in L && t(11, s = L.choicesColors), "color" in L && t(12, r = L.color), "currentColor" in L && t(1, a = L.currentColor), "showRemove" in L && t(4, _ = L.showRemove), "labelDetailLock" in L && t(2, c = L.labelDetailLock);
  }, [
    l,
    a,
    c,
    o,
    _,
    u,
    d,
    m,
    h,
    g,
    n,
    s,
    r,
    v,
    p,
    z
  ];
}
class gs extends ib {
  constructor(e) {
    super(), lb(this, e, mb, hb, sb, {
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
const Ce = (i, e, t) => Math.min(Math.max(i, e), t);
function Yo(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class nl {
  constructor(e, t, n, l, o, s, r, a, _, c, f, u, d, m = "rgb(255, 255, 255)", h = 0.5, g = 25, b = 8, v = 2, p = 4, z = 1, L = !0) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (B) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let y = (B.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, w = (B.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const E = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = Ce(y, -this._xmin, E - this._xmax), w = Ce(w, -this._ymin, C - this._ymax), this._xmin += y, this._ymin += w, this._xmax += y, this._ymax += w, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (B) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [y, w] = this.toBoxCoordinates(B.clientX, B.clientY);
        y = (y - this.offsetMouseX) / this.canvasWindow.scale, w = (w - this.offsetMouseY) / this.canvasWindow.scale, y > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = y, this.creatingAnchorX = "xmin") : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = y : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = y : y < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = y, this.creatingAnchorX = "xmax"), w > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = w, this.creatingAnchorY = "ymin") : w > this._ymin && w < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = w : w > this._ymin && w < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = w : w < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = w, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (B) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, w = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Ce(this._xmin, 0, y - this.minSize), this._ymin = Ce(this._ymin, 0, w - this.minSize), this._xmax = Ce(this._xmax, this.minSize, y), this._ymax = Ce(this._ymax, this.minSize, w), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > y ? (this._xmin -= this._xmax - y, this._xmax = y) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > w ? (this._ymin -= this._ymax - w, this._ymax = w) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (B) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const y = B.clientX, w = B.clientY, E = (y - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (w - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, M = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += E, this._ymin += C, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize), this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += E, this._ymin += C, this._xmax = Ce(this._xmax, this._xmin + this.minSize, S), this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += E, this._ymax += C, this._xmax = Ce(this._xmax, this._xmin + this.minSize, S), this._ymax = Ce(this._ymax, this._ymin + this.minSize, M);
            break;
          case 3:
            this._xmin += E, this._ymax += C, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize), this._ymax = Ce(this._ymax, this._ymin + this.minSize, M);
            break;
          case 4:
            this._ymin += C, this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += E, this._xmax = Ce(this._xmax, this._xmin + this.minSize, S);
            break;
          case 6:
            this._ymax += C, this._ymax = Ce(this._ymax, this._ymin + this.minSize, M);
            break;
          case 7:
            this._xmin += E, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = z, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = v, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = h, this.showLabel = L, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Yo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Yo(this.color, 1), e.stroke(), e.closePath(), this.showLabel && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Yo(this.color, 1);
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
const un = [
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
], il = (i, e, t) => Math.min(Math.max(i, e), t);
class gb {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = il(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = il(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = il(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = il(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: bb,
  append: he,
  attr: ie,
  binding_callbacks: Ka,
  bubble: Io,
  check_outros: Pn,
  create_component: it,
  destroy_component: lt,
  detach: en,
  element: Ie,
  empty: pb,
  group_outros: Kn,
  init: wb,
  insert: tn,
  listen: qe,
  mount_component: ot,
  noop: y_,
  run_all: S_,
  safe_not_equal: vb,
  set_data: kb,
  set_style: ll,
  space: Ke,
  text: xa,
  toggle_class: ol,
  transition_in: ae,
  transition_out: ce
} = window.__gradio__svelte__internal, { onMount: Cb, createEventDispatcher: yb } = window.__gradio__svelte__internal;
function Za(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h, g, b, v, p, z, L, B, y, w, E, C, S, M, $, P;
  n = new Hm({}), s = new $m({});
  let q = (
    /*showRemoveButton*/
    i[1] && Ga(i)
  ), U = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && Ja(i);
  return f = new bd({}), m = new nd({}), b = new O0({}), z = new I0({}), S = new M0({}), {
    c() {
      e = Ie("span"), t = Ie("button"), it(n.$$.fragment), l = Ke(), o = Ie("button"), it(s.$$.fragment), r = Ke(), q && q.c(), a = Ke(), U && U.c(), _ = Ke(), c = Ie("button"), it(f.$$.fragment), u = Ke(), d = Ie("button"), it(m.$$.fragment), h = Ke(), g = Ie("button"), it(b.$$.fragment), v = Ke(), p = Ie("button"), it(z.$$.fragment), L = Ke(), B = Ie("span"), y = xa(
        /*zoomLevel*/
        i[17]
      ), w = xa("%"), E = Ke(), C = Ie("button"), it(S.$$.fragment), ie(t, "class", "icon svelte-1qb4mt2"), ie(t, "aria-label", "Create box"), ie(t, "title", "Create box (C)"), ol(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].creation
      ), ie(o, "class", "icon svelte-1qb4mt2"), ie(o, "aria-label", "Drag boxes"), ie(o, "title", "Drag boxes (D)"), ol(
        o,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].drag
      ), ie(c, "class", "icon svelte-1qb4mt2"), ie(c, "aria-label", "Rotate counterclockwise"), ie(c, "title", "Rotate counterclockwise"), ie(d, "class", "icon svelte-1qb4mt2"), ie(d, "aria-label", "Rotate clockwise"), ie(d, "title", "Rotate clockwise"), ie(g, "class", "icon svelte-1qb4mt2"), ie(g, "aria-label", "Reset zoom"), ie(g, "title", "Reset zoom (Space)"), ie(p, "class", "icon svelte-1qb4mt2"), ie(p, "aria-label", "Zoom out"), ie(p, "title", "Zoom out"), ie(B, "class", "zoom-level svelte-1qb4mt2"), ie(C, "class", "icon svelte-1qb4mt2"), ie(C, "aria-label", "Zoom in"), ie(C, "title", "Zoom in"), ie(e, "class", "canvas-control svelte-1qb4mt2");
    },
    m(j, Y) {
      tn(j, e, Y), he(e, t), ot(n, t, null), he(e, l), he(e, o), ot(s, o, null), he(e, r), q && q.m(e, null), he(e, a), U && U.m(e, null), he(e, _), he(e, c), ot(f, c, null), he(e, u), he(e, d), ot(m, d, null), he(e, h), he(e, g), ot(b, g, null), he(e, v), he(e, p), ot(z, p, null), he(e, L), he(e, B), he(B, y), he(B, w), he(e, E), he(e, C), ot(S, C, null), M = !0, $ || (P = [
        qe(
          t,
          "click",
          /*click_handler*/
          i[48]
        ),
        qe(
          o,
          "click",
          /*click_handler_1*/
          i[49]
        ),
        qe(
          c,
          "click",
          /*click_handler_4*/
          i[52]
        ),
        qe(
          d,
          "click",
          /*click_handler_5*/
          i[53]
        ),
        qe(
          g,
          "click",
          /*resetView*/
          i[22]
        ),
        qe(
          p,
          "click",
          /*zoomOut*/
          i[24]
        ),
        qe(
          C,
          "click",
          /*zoomIn*/
          i[23]
        )
      ], $ = !0);
    },
    p(j, Y) {
      (!M || Y[0] & /*mode, Mode*/
      4352) && ol(
        t,
        "selected",
        /*mode*/
        j[12] === /*Mode*/
        j[8].creation
      ), (!M || Y[0] & /*mode, Mode*/
      4352) && ol(
        o,
        "selected",
        /*mode*/
        j[12] === /*Mode*/
        j[8].drag
      ), /*showRemoveButton*/
      j[1] ? q ? (q.p(j, Y), Y[0] & /*showRemoveButton*/
      2 && ae(q, 1)) : (q = Ga(j), q.c(), ae(q, 1), q.m(e, a)) : q && (Kn(), ce(q, 1, 1, () => {
        q = null;
      }), Pn()), !/*disableEditBoxes*/
      j[5] && /*labelDetailLock*/
      j[16] ? U ? (U.p(j, Y), Y[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && ae(U, 1)) : (U = Ja(j), U.c(), ae(U, 1), U.m(e, _)) : U && (Kn(), ce(U, 1, 1, () => {
        U = null;
      }), Pn()), (!M || Y[0] & /*zoomLevel*/
      131072) && kb(
        y,
        /*zoomLevel*/
        j[17]
      );
    },
    i(j) {
      M || (ae(n.$$.fragment, j), ae(s.$$.fragment, j), ae(q), ae(U), ae(f.$$.fragment, j), ae(m.$$.fragment, j), ae(b.$$.fragment, j), ae(z.$$.fragment, j), ae(S.$$.fragment, j), M = !0);
    },
    o(j) {
      ce(n.$$.fragment, j), ce(s.$$.fragment, j), ce(q), ce(U), ce(f.$$.fragment, j), ce(m.$$.fragment, j), ce(b.$$.fragment, j), ce(z.$$.fragment, j), ce(S.$$.fragment, j), M = !1;
    },
    d(j) {
      j && en(e), lt(n), lt(s), q && q.d(), U && U.d(), lt(f), lt(m), lt(b), lt(z), lt(S), $ = !1, S_(P);
    }
  };
}
function Ga(i) {
  let e, t, n, l, o;
  return t = new e0({}), {
    c() {
      e = Ie("button"), it(t.$$.fragment), ie(e, "class", "icon svelte-1qb4mt2"), ie(e, "aria-label", "Remove box"), ie(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      tn(s, e, r), ot(t, e, null), n = !0, l || (o = qe(
        e,
        "click",
        /*click_handler_2*/
        i[50]
      ), l = !0);
    },
    p: y_,
    i(s) {
      n || (ae(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ce(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && en(e), lt(t), l = !1, o();
    }
  };
}
function Ja(i) {
  let e, t, n, l, o;
  return t = new a0({}), {
    c() {
      e = Ie("button"), it(t.$$.fragment), ie(e, "class", "icon svelte-1qb4mt2"), ie(e, "aria-label", "Edit label"), ie(e, "title", "Edit label");
    },
    m(s, r) {
      tn(s, e, r), ot(t, e, null), n = !0, l || (o = qe(
        e,
        "click",
        /*click_handler_3*/
        i[51]
      ), l = !0);
    },
    p: y_,
    i(s) {
      n || (ae(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ce(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && en(e), lt(t), l = !1, o();
    }
  };
}
function Qa(i) {
  let e, t;
  return e = new gs({
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
        i[0].boxes.length ? Bn(
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
    i[30]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[56]
  ), {
    c() {
      it(e.$$.fragment);
    },
    m(n, l) {
      ot(e, n, l), t = !0;
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
      n[0].boxes.length ? Bn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      lt(e, n);
    }
  };
}
function er(i) {
  let e, t;
  return e = new gs({
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
        i[0].boxes.length ? Bn(
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
    i[31]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[57]
  ), {
    c() {
      it(e.$$.fragment);
    },
    m(n, l) {
      ot(e, n, l), t = !0;
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
      n[0].boxes.length ? Bn(
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
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      lt(e, n);
    }
  };
}
function tr(i) {
  let e, t;
  return e = new gs({
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
        i[0].boxes.length ? Bn(
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
    i[32]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[58]
  ), {
    c() {
      it(e.$$.fragment);
    },
    m(n, l) {
      ot(e, n, l), t = !0;
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
      n[0].boxes.length ? Bn(
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
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      lt(e, n);
    }
  };
}
function Sb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u = (
    /*interactive*/
    i[2] && Za(i)
  ), d = (
    /*editModalVisible*/
    i[13] && Qa(i)
  ), m = (
    /*newModalVisible*/
    i[14] && er(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[15] && tr(i)
  );
  return {
    c() {
      e = Ie("div"), t = Ie("div"), n = Ie("canvas"), l = Ke(), u && u.c(), o = Ke(), d && d.c(), s = Ke(), m && m.c(), r = Ke(), h && h.c(), a = pb(), ll(
        n,
        "height",
        /*height*/
        i[6]
      ), ll(
        n,
        "width",
        /*width*/
        i[7]
      ), ie(n, "class", "canvas-annotator svelte-1qb4mt2"), ie(t, "class", "canvas-container svelte-1qb4mt2"), ie(e, "class", "annotator-container"), ie(e, "tabindex", "0");
    },
    m(g, b) {
      tn(g, e, b), he(e, t), he(t, n), i[47](n), he(e, l), u && u.m(e, null), i[54](e), tn(g, o, b), d && d.m(g, b), tn(g, s, b), m && m.m(g, b), tn(g, r, b), h && h.m(g, b), tn(g, a, b), _ = !0, c || (f = [
        qe(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[18]
        ),
        qe(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[19]
        ),
        qe(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[21]
        ),
        qe(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[20]
        ),
        qe(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[29]
        ),
        qe(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[26]
        ),
        qe(
          e,
          "keydown",
          /*handleKeyPress*/
          i[25]
        ),
        qe(
          e,
          "click",
          /*click_handler_6*/
          i[55]
        )
      ], c = !0);
    },
    p(g, b) {
      (!_ || b[0] & /*height*/
      64) && ll(
        n,
        "height",
        /*height*/
        g[6]
      ), (!_ || b[0] & /*width*/
      128) && ll(
        n,
        "width",
        /*width*/
        g[7]
      ), /*interactive*/
      g[2] ? u ? (u.p(g, b), b[0] & /*interactive*/
      4 && ae(u, 1)) : (u = Za(g), u.c(), ae(u, 1), u.m(e, null)) : u && (Kn(), ce(u, 1, 1, () => {
        u = null;
      }), Pn()), /*editModalVisible*/
      g[13] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      8192 && ae(d, 1)) : (d = Qa(g), d.c(), ae(d, 1), d.m(s.parentNode, s)) : d && (Kn(), ce(d, 1, 1, () => {
        d = null;
      }), Pn()), /*newModalVisible*/
      g[14] ? m ? (m.p(g, b), b[0] & /*newModalVisible*/
      16384 && ae(m, 1)) : (m = er(g), m.c(), ae(m, 1), m.m(r.parentNode, r)) : m && (Kn(), ce(m, 1, 1, () => {
        m = null;
      }), Pn()), /*editDefaultLabelVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*editDefaultLabelVisible*/
      32768 && ae(h, 1)) : (h = tr(g), h.c(), ae(h, 1), h.m(a.parentNode, a)) : h && (Kn(), ce(h, 1, 1, () => {
        h = null;
      }), Pn());
    },
    i(g) {
      _ || (ae(u), ae(d), ae(m), ae(h), _ = !0);
    },
    o(g) {
      ce(u), ce(d), ce(m), ce(h), _ = !1;
    },
    d(g) {
      g && (en(e), en(o), en(s), en(r), en(a)), i[47](null), u && u.d(), i[54](null), d && d.d(g), m && m.d(g), h && h.d(g), c = !1, S_(f);
    }
  };
}
const nr = 100;
function sl(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Bn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function qb(i, e, t) {
  let n;
  var l;
  (function(k) {
    k[k.creation = 0] = "creation", k[k.drag = 1] = "drag";
  })(l || (l = {}));
  let { imageUrl: o = null } = e, { interactive: s } = e, { boxAlpha: r = 0.5 } = e, { boxMinSize: a = 10 } = e, { handleSize: _ } = e, { boxThickness: c } = e, { boxSelectedThickness: f } = e, { value: u } = e, { choices: d = [] } = e, { choicesColors: m = [] } = e, { disableEditBoxes: h = !1 } = e, { height: g = "100%" } = e, { width: b = "100%" } = e, { singleBox: v = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: z = !0 } = e, { useDefaultLabel: L = !1 } = e, { enableKeyboardShortcuts: B = !0 } = e, { showBoxLabels: y = !0 } = e;
  p === null && (p = h);
  let w, E, C, S = null, M = -1, $ = l.drag, P = /* @__PURE__ */ new Map(), q = new gb(K, P), U = null;
  u !== null && u.boxes.length == 0 && ($ = l.creation);
  let j = 0, Y = 0, G = 0, A = 0, x = 1, J = 0, oe = 0, me = !1, H = !1, ze = !1, R = L, F = { label: "", color: "" }, Z = { x: 0, y: 0, distance: 0 };
  const le = yb();
  function K() {
    if (C) {
      if (C.clearRect(0, 0, w.width, w.height), C.save(), C.translate(q.offsetX, q.offsetY), C.scale(q.scale, q.scale), S !== null) {
        switch (u.orientation) {
          case 0:
            C.drawImage(S, 0, 0, J, oe);
            break;
          case 1:
            C.translate(J, 0), C.rotate(Math.PI / 2), C.drawImage(S, 0, 0, oe, J);
            break;
          case 2:
            C.translate(J, oe), C.rotate(Math.PI), C.drawImage(S, 0, 0, J, oe);
            break;
          case 3:
            C.translate(0, oe), C.rotate(-Math.PI / 2), C.drawImage(S, 0, 0, oe, J);
            break;
        }
        C.restore();
      }
      for (const k of u.boxes.slice().reverse())
        k.render(C);
    }
  }
  function we(k) {
    t(11, M = k), u.boxes.forEach((X) => {
      X.setSelected(!1);
    }), k >= 0 && k < u.boxes.length && u.boxes[k].setSelected(!0), K();
  }
  const W = (k, X) => {
    const I = Math.sqrt(Math.pow(k.clientX - X.clientX, 2) + Math.pow(k.clientY - X.clientY, 2));
    return I < nr ? nr : I;
  };
  function Dt(k) {
    if (s) {
      if (k.preventDefault(), w.setPointerCapture(k.pointerId), P.set(k.pointerId, k), P.size == 1)
        $ === l.creation ? Ft(k) : $ === l.drag && Ve(k);
      else if (P.size == 2) {
        t(46, q.isDragging = !1, q), u.boxes.forEach((Re) => {
          Re.isCreating = !1, Re.isDragging = !1, Re.isResizing = !1;
        });
        const X = Array.from(P.values()), I = X[0], N = X[1], Q = W(I, N), ee = w.getBoundingClientRect(), re = (I.clientX + N.clientX) / 2 - ee.left, Ee = (I.clientY + N.clientY) / 2 - ee.top;
        Z.distance = Q, Z.x = re, Z.y = Ee;
      }
    }
  }
  function Ve(k) {
    const X = w.getBoundingClientRect(), I = k.clientX - X.left, N = k.clientY - X.top;
    let Q = !1;
    for (const [ee, re] of u.boxes.entries()) {
      const Ee = re.indexOfPointInsideHandle(I, N);
      if (Ee >= 0) {
        Q = !0, we(ee), re.startResize(Ee, k);
        return;
      }
    }
    for (const [ee, re] of u.boxes.entries())
      if (re.isPointInsideBox(I, N)) {
        Q = !0, we(ee), re.startDrag(k);
        return;
      }
    v || we(-1), Q || q.startDrag(k);
  }
  function rt(k) {
    s && (P.delete(k.pointerId), w.releasePointerCapture(k.pointerId), le("change"));
  }
  function _t(k) {
    s && (P.delete(k.pointerId), w.releasePointerCapture(k.pointerId), le("change"));
  }
  function sn(k) {
    if (s)
      if (k.preventDefault(), k.pointerType === "mouse") {
        if (!z || u === null || $ !== l.drag)
          return;
        const X = w.getBoundingClientRect(), I = k.clientX - X.left, N = k.clientY - X.top;
        for (const [Q, ee] of u.boxes.entries()) {
          const re = ee.indexOfPointInsideHandle(I, N);
          if (re >= 0) {
            t(9, w.style.cursor = ee.resizeHandles[re].cursor, w);
            return;
          }
        }
        t(9, w.style.cursor = "default", w);
      } else {
        if (!P.has(k.pointerId))
          return;
        if (P.set(k.pointerId, k), P.size === 2) {
          const X = Array.from(P.values()), I = X[0], N = X[1], Q = W(I, N), ee = w.getBoundingClientRect(), re = (I.clientX + N.clientX) / 2 - ee.left, Ee = (I.clientY + N.clientY) / 2 - ee.top, Re = parseFloat((q.scale * (Q / Z.distance)).toFixed(2)), Vt = Re < 1 ? 1 : Re, ri = Vt / q.scale;
          t(46, q.offsetX = Z.x - (Z.x - q.offsetX) * ri, q), t(46, q.offsetY = Z.y - (Z.y - q.offsetY) * ri, q);
          const _i = re - Z.x, $_ = Ee - Z.y;
          t(46, q.offsetX += _i, q), t(46, q.offsetY += $_, q), t(46, q.scale = Vt, q), Z.x = re, Z.y = Ee, Z.distance = Q, K();
        }
      }
  }
  function Xi() {
    const k = w.width / J, X = w.height / oe, I = Math.min(k, X);
    t(46, q.scale = I, q), t(46, q.offsetX = (w.width - J * I) / 2, q), t(46, q.offsetY = (w.height - oe * I) / 2, q), K();
  }
  function Hl() {
    const k = parseFloat((q.scale * 1.25).toFixed(2)), X = w.width / 2, I = w.height / 2, N = (X - q.offsetX) / q.scale, Q = (I - q.offsetY) / q.scale;
    t(46, q.offsetX = X - N * k, q), t(46, q.offsetY = I - Q * k, q), t(46, q.scale = k, q), K();
  }
  function jl() {
    const k = parseFloat((q.scale * 0.8).toFixed(2)), X = k < 1 ? 1 : k, I = w.width / 2, N = w.height / 2, Q = (I - q.offsetX) / q.scale, ee = (N - q.offsetY) / q.scale;
    t(46, q.offsetX = I - Q * X, q), t(46, q.offsetY = N - ee * X, q), t(46, q.scale = X, q), K();
  }
  function Tl(k) {
    if (!B || k.target !== E || !s)
      return;
    const X = k.key.toLowerCase(), I = k.ctrlKey || k.metaKey;
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
    ])).has(X) || I && (X === "c" || X === "v")) && (k.preventDefault(), k.stopPropagation()), I && X === "c") {
      M_();
      return;
    }
    if (I && X === "v") {
      E_();
      return;
    }
    switch (X) {
      case "delete":
        pt();
        break;
      case "c":
        Ge();
        break;
      case "d":
        Lt();
        break;
      case "e":
        Ut();
        break;
      case " ":
        Xi();
        break;
      case "arrowup":
        Yi(0, -3);
        break;
      case "arrowdown":
        Yi(0, 3);
        break;
      case "arrowleft":
        Yi(-3, 0);
        break;
      case "arrowright":
        Yi(3, 0);
        break;
    }
  }
  function li() {
    setTimeout(
      () => {
        E == null || E.focus();
      },
      0
    );
  }
  function D(k) {
    if (!s)
      return;
    k.preventDefault();
    const X = 1 / (1 + k.deltaY / 1e3 * 0.5), I = parseFloat((q.scale * X).toFixed(2)), N = I < 1 ? 1 : I, Q = w.getBoundingClientRect(), ee = k.clientX - Q.left, re = k.clientY - Q.top, Ee = (ee - q.offsetX) / q.scale, Re = (re - q.offsetY) / q.scale;
    t(46, q.offsetX = ee - Ee * N, q), t(46, q.offsetY = re - Re * N, q), t(46, q.scale = N, q), K();
  }
  function Ft(k) {
    const X = w.getBoundingClientRect(), I = (k.clientX - X.left - q.offsetX) / x / q.scale, N = (k.clientY - X.top - q.offsetY) / x / q.scale;
    let Q;
    m.length > 0 ? Q = sl(m[0]) : v ? u.boxes.length > 0 ? Q = u.boxes[0].color : Q = un[0] : Q = un[u.boxes.length % un.length];
    let ee = new nl(K, oi, q, P, j, Y, G, A, "", I, N, I, N, Q, r, a, _, c, f, x, y);
    ee.startCreating(k, X.left, X.top), v ? t(0, u.boxes = [ee], u) : t(0, u.boxes = [ee, ...u.boxes], u), we(0), K(), le("change");
  }
  function Ge() {
    t(12, $ = l.creation), t(9, w.style.cursor = "crosshair", w);
  }
  function Lt() {
    t(12, $ = l.drag), t(9, w.style.cursor = "default", w);
  }
  function oi() {
    M >= 0 && M < u.boxes.length && (u.boxes[M].getArea() < 1 ? pt() : (h || (R ? Mt() : t(14, H = !0)), v && Lt()));
  }
  function Ut() {
    M >= 0 && M < u.boxes.length && !h && t(13, me = !0);
  }
  function En(k) {
    s && Ut();
  }
  function Fl(k) {
    t(13, me = !1), li();
    const { detail: X } = k;
    let I = X.label, N = X.color, Q = X.ret;
    if (M >= 0 && M < u.boxes.length) {
      let ee = u.boxes[M];
      Q == 1 ? (ee.label = I, ee.color = sl(N), K(), le("change")) : Q == -1 && pt();
    }
  }
  function Ul(k) {
    t(14, H = !1), li();
    const { detail: X } = k;
    let I = X.label, N = X.color, Q = X.ret, ee = X.lock;
    if (M >= 0 && M < u.boxes.length) {
      let re = u.boxes[M];
      Q == 1 ? (t(16, R = ee), F.label = I, F.color = N, re.label = I, re.color = sl(N), K(), le("change")) : pt();
    }
  }
  function si(k) {
    t(15, ze = !1), li();
    const { detail: X } = k;
    let I = X.label, N = X.color, Q = X.ret, ee = X.lock;
    Q == 1 && (t(16, R = ee), F.label = I, F.color = N);
  }
  function Mt() {
    if (M >= 0 && M < u.boxes.length) {
      let k = u.boxes[M];
      k.label = F.label, F.color !== "" && (k.color = sl(F.color)), K(), le("change");
    }
  }
  function pt() {
    M >= 0 && M < u.boxes.length && (u.boxes.splice(M, 1), we(-1), v && Ge(), le("change"));
  }
  function Yi(k, X) {
    if (M < 0 || M >= u.boxes.length)
      return;
    const I = u.boxes[M], N = I.canvasWindow.scale, Q = k / N, ee = X / N, re = I.canvasWindow.imageWidth, Ee = I.canvasWindow.imageHeight, Re = Math.max(-I._xmin, Math.min(Q, re - I._xmax)), Vt = Math.max(-I._ymin, Math.min(ee, Ee - I._ymax));
    I._xmin += Re, I._ymin += Vt, I._xmax += Re, I._ymax += Vt, I.applyUserScale(), K(), le("change");
  }
  function M_() {
    M >= 0 && M < u.boxes.length && (U = u.boxes[M].toJSON());
  }
  function E_() {
    if (U === null)
      return;
    const k = U, X = k.scaleFactor || 1, I = 20 / X;
    let N = k.xmin + I, Q = k.ymin + I, ee = k.xmax + I, re = k.ymax + I;
    const Ee = (G - j) / q.scale, Re = (A - Y) / q.scale, Vt = ee - N, ri = re - Q;
    ee > Ee && (N = Math.max(0, Ee - Vt), ee = N + Vt), re > Re && (Q = Math.max(0, Re - ri), re = Q + ri);
    const _i = new nl(K, oi, q, P, j, Y, G, A, k.label, N, Q, ee, re, k.color, r, a, _, c, f, X, y);
    v ? t(0, u.boxes = [_i], u) : t(0, u.boxes = [_i, ...u.boxes], u), U = _i.toJSON(), we(0), K(), le("change");
  }
  function Vl(k) {
    t(0, u.orientation = ((u.orientation + k) % 4 + 4) % 4, u), t(46, q.orientation = u.orientation, q), ai();
    for (const X of u.boxes)
      X.onRotate(k);
    K();
  }
  function ai() {
    if (w) {
      if (x = 1, t(9, w.width = w.clientWidth, w), q.setRotatedImage(S), S !== null) {
        if (q.imageRotatedWidth > w.width)
          x = w.width / q.imageRotatedWidth, J = Math.round(q.imageRotatedWidth * x), oe = Math.round(q.imageRotatedHeight * x), j = 0, Y = 0, G = J, A = oe, t(9, w.height = oe, w);
        else {
          J = q.imageRotatedWidth, oe = q.imageRotatedHeight;
          var k = (w.width - J) / 2;
          j = k, Y = 0, G = k + J, A = oe, t(9, w.height = oe, w);
        }
        t(46, q.imageWidth = J, q), t(46, q.imageHeight = oe, q);
      } else
        j = 0, Y = 0, G = w.width, A = w.height, t(9, w.height = w.clientHeight, w);
      if (q.resize(w.width, w.height, j, Y), G > 0 && A > 0)
        for (const X of u.boxes)
          X.canvasXmin = j, X.canvasYmin = Y, X.canvasXmax = G, X.canvasYmax = A, X.setScaleFactor(x);
      K(), le("change");
    }
  }
  const R_ = new ResizeObserver(ai);
  function W_() {
    for (let k = 0; k < u.boxes.length; k++) {
      let X = u.boxes[k];
      if (!(X instanceof nl)) {
        let I = "", N = "";
        X.hasOwnProperty("color") ? (I = X.color, Array.isArray(I) && I.length === 3 && (I = `rgb(${I[0]}, ${I[1]}, ${I[2]})`)) : I = un[k % un.length], X.hasOwnProperty("label") && (N = X.label), X = new nl(K, oi, q, P, j, Y, G, A, N, X.xmin, X.ymin, X.xmax, X.ymax, I, r, a, _, c, f, X.scaleFactor || 1, y), t(0, u.boxes[k] = X, u);
      }
    }
  }
  function bs() {
    o !== null && (S === null || S.src != o) && (S = new Image(), S.src = o, S.onload = function() {
      ai(), K();
    });
  }
  Cb(() => {
    if (Array.isArray(d) && d.length > 0) {
      if (!Array.isArray(m) || m.length == 0)
        for (let k = 0; k < d.length; k++) {
          let X = un[k % un.length];
          m.push(Bn(X));
        }
      F.label = d[0][0], F.color = m[0];
    }
    C = w.getContext("2d"), R_.observe(w), M < 0 && u !== null && u.boxes.length > 0 && we(0), bs(), ai(), K();
  });
  function A_(k) {
    Ka[k ? "unshift" : "push"](() => {
      w = k, t(9, w);
    });
  }
  const X_ = () => Ge(), Y_ = () => Lt(), I_ = () => pt(), H_ = () => t(15, ze = !0), j_ = () => Vl(-1), T_ = () => Vl(1);
  function F_(k) {
    Ka[k ? "unshift" : "push"](() => {
      E = k, t(10, E);
    });
  }
  const U_ = () => E.focus();
  function V_(k) {
    Io.call(this, i, k);
  }
  function O_(k) {
    Io.call(this, i, k);
  }
  function N_(k) {
    Io.call(this, i, k);
  }
  return i.$$set = (k) => {
    "imageUrl" in k && t(35, o = k.imageUrl), "interactive" in k && t(2, s = k.interactive), "boxAlpha" in k && t(36, r = k.boxAlpha), "boxMinSize" in k && t(37, a = k.boxMinSize), "handleSize" in k && t(38, _ = k.handleSize), "boxThickness" in k && t(39, c = k.boxThickness), "boxSelectedThickness" in k && t(40, f = k.boxSelectedThickness), "value" in k && t(0, u = k.value), "choices" in k && t(3, d = k.choices), "choicesColors" in k && t(4, m = k.choicesColors), "disableEditBoxes" in k && t(5, h = k.disableEditBoxes), "height" in k && t(6, g = k.height), "width" in k && t(7, b = k.width), "singleBox" in k && t(41, v = k.singleBox), "showRemoveButton" in k && t(1, p = k.showRemoveButton), "handlesCursor" in k && t(42, z = k.handlesCursor), "useDefaultLabel" in k && t(43, L = k.useDefaultLabel), "enableKeyboardShortcuts" in k && t(44, B = k.enableKeyboardShortcuts), "showBoxLabels" in k && t(45, y = k.showBoxLabels);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (t(46, q.orientation = u.orientation, q), bs(), W_(), ai(), K()), i.$$.dirty[1] & /*canvasWindow*/
    32768 && t(17, n = Math.round(q.scale * 100));
  }, [
    u,
    p,
    s,
    d,
    m,
    h,
    g,
    b,
    l,
    w,
    E,
    M,
    $,
    me,
    H,
    ze,
    R,
    n,
    Dt,
    rt,
    _t,
    sn,
    Xi,
    Hl,
    jl,
    Tl,
    D,
    Ge,
    Lt,
    En,
    Fl,
    Ul,
    si,
    pt,
    Vl,
    o,
    r,
    a,
    _,
    c,
    f,
    v,
    z,
    L,
    B,
    y,
    q,
    A_,
    X_,
    Y_,
    I_,
    H_,
    j_,
    T_,
    F_,
    U_,
    V_,
    O_,
    N_
  ];
}
class zb extends bb {
  constructor(e) {
    super(), wb(
      this,
      e,
      qb,
      Sb,
      vb,
      {
        imageUrl: 35,
        interactive: 2,
        boxAlpha: 36,
        boxMinSize: 37,
        handleSize: 38,
        boxThickness: 39,
        boxSelectedThickness: 40,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 41,
        showRemoveButton: 1,
        handlesCursor: 42,
        useDefaultLabel: 43,
        enableKeyboardShortcuts: 44,
        showBoxLabels: 45
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Bb,
  add_flush_callback: Db,
  bind: Lb,
  binding_callbacks: Mb,
  create_component: Eb,
  destroy_component: Rb,
  init: Wb,
  mount_component: Ab,
  safe_not_equal: Xb,
  transition_in: Yb,
  transition_out: Ib
} = window.__gradio__svelte__internal, { createEventDispatcher: Hb } = window.__gradio__svelte__internal;
function jb(i) {
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
    i[0]), e = new zb({ props: o }), Mb.push(() => Lb(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[23]
    ), {
      c() {
        Eb(e.$$.fragment);
      },
      m(s, r) {
        Ab(e, s, r), n = !0;
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
        s[0], Db(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Yb(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Ib(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Rb(e, s);
      }
    }
  );
}
function Tb(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: f } = e, { width: u } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: v } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: z } = e, { showBoxLabels: L } = e, B, y;
  const w = Hb();
  function E(S) {
    m = S, t(0, m);
  }
  const C = () => w("change");
  return i.$$set = (S) => {
    "src" in S && t(20, n = S.src), "interactive" in S && t(1, l = S.interactive), "boxesAlpha" in S && t(2, o = S.boxesAlpha), "labelList" in S && t(3, s = S.labelList), "labelColors" in S && t(4, r = S.labelColors), "boxMinSize" in S && t(5, a = S.boxMinSize), "handleSize" in S && t(6, _ = S.handleSize), "boxThickness" in S && t(7, c = S.boxThickness), "height" in S && t(8, f = S.height), "width" in S && t(9, u = S.width), "boxSelectedThickness" in S && t(10, d = S.boxSelectedThickness), "value" in S && t(0, m = S.value), "disableEditBoxes" in S && t(11, h = S.disableEditBoxes), "singleBox" in S && t(12, g = S.singleBox), "showRemoveButton" in S && t(13, b = S.showRemoveButton), "handlesCursor" in S && t(14, v = S.handlesCursor), "useDefaultLabel" in S && t(15, p = S.useDefaultLabel), "enableKeyboardShortcuts" in S && t(16, z = S.enableKeyboardShortcuts), "showBoxLabels" in S && t(17, L = S.showBoxLabels);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    3145728) {
      t(18, B = n), t(21, y = n);
      const S = n;
      K1(S).then((M) => {
        y === S && t(18, B = M);
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
    f,
    u,
    d,
    h,
    g,
    b,
    v,
    p,
    z,
    L,
    B,
    w,
    n,
    y,
    E,
    C
  ];
}
class Fb extends Bb {
  constructor(e) {
    super(), Wb(this, e, Tb, jb, Xb, {
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
class ir {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Ub,
  add_flush_callback: zl,
  append: jn,
  attr: Si,
  bind: Bl,
  binding_callbacks: Ei,
  bubble: bi,
  check_outros: dn,
  create_component: Yt,
  create_slot: Vb,
  destroy_component: It,
  detach: Cn,
  element: Li,
  empty: Ob,
  get_all_dirty_from_scope: Nb,
  get_slot_changes: $b,
  group_outros: hn,
  init: Pb,
  insert: yn,
  mount_component: Ht,
  noop: Kb,
  safe_not_equal: xb,
  space: fn,
  toggle_class: lr,
  transition_in: se,
  transition_out: _e,
  update_slot_base: Zb
} = window.__gradio__svelte__internal, { createEventDispatcher: Gb, tick: Jb } = window.__gradio__svelte__internal;
function or(i) {
  let e, t;
  return e = new ah({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Qb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Yt(e.$$.fragment);
    },
    m(n, l) {
      Ht(e, n, l), t = !0;
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
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      It(e, n);
    }
  };
}
function Qb(i) {
  let e, t;
  return e = new Dl({
    props: {
      Icon: kf,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Yt(e.$$.fragment);
    },
    m(n, l) {
      Ht(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      It(e, n);
    }
  };
}
function sr(i) {
  let e, t;
  return e = new Od({
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
      Yt(e.$$.fragment);
    },
    m(n, l) {
      Ht(e, n, l), t = !0;
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
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      It(e, n);
    }
  };
}
function ar(i) {
  let e, t, n;
  return t = new Dl({
    props: { Icon: yr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[38]
  ), {
    c() {
      e = Li("div"), Yt(t.$$.fragment);
    },
    m(l, o) {
      yn(l, e, o), Ht(t, e, null), n = !0;
    },
    p: Kb,
    i(l) {
      n || (se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      _e(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Cn(e), It(t);
    }
  };
}
function rr(i) {
  let e;
  const t = (
    /*#slots*/
    i[39].default
  ), n = Vb(
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
      16777216) && Zb(
        n,
        t,
        l,
        /*$$scope*/
        l[55],
        e ? $b(
          t,
          /*$$scope*/
          l[55],
          o,
          null
        ) : Nb(
          /*$$scope*/
          l[55]
        ),
        null
      );
    },
    i(l) {
      e || (se(n, l), e = !0);
    },
    o(l) {
      _e(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function e2(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && rr(i)
  );
  return {
    c() {
      n && n.c(), e = Ob();
    },
    m(l, o) {
      n && n.m(l, o), yn(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[1] === null ? n ? (n.p(l, o), o[0] & /*value*/
      2 && se(n, 1)) : (n = rr(l), n.c(), se(n, 1), n.m(e.parentNode, e)) : n && (hn(), _e(n, 1, 1, () => {
        n = null;
      }), dn());
    },
    i(l) {
      t || (se(n), t = !0);
    },
    o(l) {
      _e(n), t = !1;
    },
    d(l) {
      l && Cn(e), n && n.d(l);
    }
  };
}
function _r(i) {
  let e, t;
  return e = new Em({
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
      Yt(e.$$.fragment);
    },
    m(n, l) {
      Ht(e, n, l), t = !0;
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
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      It(e, n);
    }
  };
}
function cr(i) {
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
    i[1]), t = new Fb({ props: s }), Ei.push(() => Bl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      i[53]
    ), {
      c() {
        e = Li("div"), Yt(t.$$.fragment), Si(e, "class", "image-frame svelte-1gjdske"), lr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        yn(r, e, a), Ht(t, e, null), l = !0;
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
        r[1], zl(() => n = !1)), t.$set(_), (!l || a[0] & /*selectable*/
        32) && lr(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (se(t.$$.fragment, r), l = !0);
      },
      o(r) {
        _e(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && Cn(e), It(t);
      }
    }
  );
}
function ur(i) {
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
    i[0]), e = new s1({ props: o }), Ei.push(() => Bl(e, "active_source", l)), {
      c() {
        Yt(e.$$.fragment);
      },
      m(s, r) {
        Ht(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], zl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (se(e.$$.fragment, s), n = !0);
      },
      o(s) {
        _e(e.$$.fragment, s), n = !1;
      },
      d(s) {
        It(e, s);
      }
    }
  );
}
function t2(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new su({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Sr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && or(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && sr(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && ar(i)
  );
  function z(C) {
    i[44](C);
  }
  function L(C) {
    i[45](C);
  }
  let B = {
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
    $$slots: { default: [e2] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[31] !== void 0 && (B.uploading = /*uploading*/
  i[31]), /*dragging*/
  i[32] !== void 0 && (B.dragging = /*dragging*/
  i[32]), _ = new Th({ props: B }), i[43](_), Ei.push(() => Bl(_, "uploading", z)), Ei.push(() => Bl(_, "dragging", L)), _.$on(
    "load",
    /*handle_upload*/
    i[34]
  ), _.$on(
    "error",
    /*error_handler_1*/
    i[46]
  );
  let y = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && _r(i)
  ), w = (
    /*value*/
    i[1] !== null && cr(i)
  ), E = h && ur(i);
  return {
    c() {
      Yt(e.$$.fragment), t = fn(), n = Li("div"), b && b.c(), l = fn(), v && v.c(), o = fn(), p && p.c(), s = fn(), r = Li("div"), a = Li("div"), Yt(_.$$.fragment), u = fn(), y && y.c(), d = fn(), w && w.c(), m = fn(), E && E.c(), Si(n, "class", "icon-buttons svelte-1gjdske"), Si(a, "class", "upload-container svelte-1gjdske"), Si(r, "data-testid", "image"), Si(r, "class", "image-container svelte-1gjdske");
    },
    m(C, S) {
      Ht(e, C, S), yn(C, t, S), yn(C, n, S), b && b.m(n, null), jn(n, l), v && v.m(n, null), jn(n, o), p && p.m(n, null), yn(C, s, S), yn(C, r, S), jn(r, a), Ht(_, a, null), jn(a, u), y && y.m(a, null), jn(a, d), w && w.m(a, null), jn(r, m), E && E.m(r, null), g = !0;
    },
    p(C, S) {
      const M = {};
      S[0] & /*show_label*/
      8 && (M.show_label = /*show_label*/
      C[3]), S[0] & /*label*/
      4 && (M.label = /*label*/
      C[2] || "Image Annotator"), e.$set(M), /*showDownloadButton*/
      C[10] && /*value*/
      C[1] !== null ? b ? (b.p(C, S), S[0] & /*showDownloadButton, value*/
      1026 && se(b, 1)) : (b = or(C), b.c(), se(b, 1), b.m(n, l)) : b && (hn(), _e(b, 1, 1, () => {
        b = null;
      }), dn()), /*showShareButton*/
      C[9] && /*value*/
      C[1] !== null ? v ? (v.p(C, S), S[0] & /*showShareButton, value*/
      514 && se(v, 1)) : (v = sr(C), v.c(), se(v, 1), v.m(n, o)) : v && (hn(), _e(v, 1, 1, () => {
        v = null;
      }), dn()), /*showClearButton*/
      C[11] && /*value*/
      C[1] !== null && /*interactive*/
      C[7] ? p ? (p.p(C, S), S[0] & /*showClearButton, value, interactive*/
      2178 && se(p, 1)) : (p = ar(C), p.c(), se(p, 1), p.m(n, null)) : p && (hn(), _e(p, 1, 1, () => {
        p = null;
      }), dn());
      const $ = {};
      S[0] & /*value, active_source*/
      3 && ($.hidden = /*value*/
      C[1] !== null || /*active_source*/
      C[0] === "webcam"), S[0] & /*active_source*/
      1 && ($.filetype = /*active_source*/
      C[0] === "clipboard" ? "clipboard" : "image/*"), S[0] & /*root*/
      64 && ($.root = /*root*/
      C[6]), S[0] & /*max_file_size*/
      33554432 && ($.max_file_size = /*max_file_size*/
      C[25]), S[0] & /*sources*/
      16 && ($.disable_click = !/*sources*/
      C[4].includes("upload")), S[0] & /*cli_upload*/
      67108864 && ($.upload = /*cli_upload*/
      C[26]), S[0] & /*stream_handler*/
      134217728 && ($.stream_handler = /*stream_handler*/
      C[27]), S[0] & /*value*/
      2 | S[1] & /*$$scope*/
      16777216 && ($.$$scope = { dirty: S, ctx: C }), !c && S[1] & /*uploading*/
      1 && (c = !0, $.uploading = /*uploading*/
      C[31], zl(() => c = !1)), !f && S[1] & /*dragging*/
      2 && (f = !0, $.dragging = /*dragging*/
      C[32], zl(() => f = !1)), _.$set($), /*value*/
      C[1] === null && /*active_source*/
      C[0] === "webcam" ? y ? (y.p(C, S), S[0] & /*value, active_source*/
      3 && se(y, 1)) : (y = _r(C), y.c(), se(y, 1), y.m(a, d)) : y && (hn(), _e(y, 1, 1, () => {
        y = null;
      }), dn()), /*value*/
      C[1] !== null ? w ? (w.p(C, S), S[0] & /*value*/
      2 && se(w, 1)) : (w = cr(C), w.c(), se(w, 1), w.m(a, null)) : w && (hn(), _e(w, 1, 1, () => {
        w = null;
      }), dn()), S[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (C[4].length > 1 || /*sources*/
      C[4].includes("clipboard")) && /*value*/
      C[1] === null && /*interactive*/
      C[7]), h ? E ? (E.p(C, S), S[0] & /*sources, value, interactive*/
      146 && se(E, 1)) : (E = ur(C), E.c(), se(E, 1), E.m(r, null)) : E && (hn(), _e(E, 1, 1, () => {
        E = null;
      }), dn());
    },
    i(C) {
      g || (se(e.$$.fragment, C), se(b), se(v), se(p), se(_.$$.fragment, C), se(y), se(w), se(E), g = !0);
    },
    o(C) {
      _e(e.$$.fragment, C), _e(b), _e(v), _e(p), _e(_.$$.fragment, C), _e(y), _e(w), _e(E), g = !1;
    },
    d(C) {
      C && (Cn(t), Cn(n), Cn(s), Cn(r)), It(e, C), b && b.d(), v && v.d(), p && p.d(), i[43](null), It(_), y && y.d(), w && w.d(), E && E.d();
    }
  };
}
function n2(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(D, Ft, Ge, Lt) {
    function oi(Ut) {
      return Ut instanceof Ge ? Ut : new Ge(function(En) {
        En(Ut);
      });
    }
    return new (Ge || (Ge = Promise))(function(Ut, En) {
      function Fl(Mt) {
        try {
          si(Lt.next(Mt));
        } catch (pt) {
          En(pt);
        }
      }
      function Ul(Mt) {
        try {
          si(Lt.throw(Mt));
        } catch (pt) {
          En(pt);
        }
      }
      function si(Mt) {
        Mt.done ? Ut(Mt.value) : oi(Mt.value).then(Fl, Ul);
      }
      si((Lt = Lt.apply(D, Ft || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: f } = e, { interactive: u } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: v } = e, { labelColors: p } = e, { boxMinSize: z } = e, { handleSize: L } = e, { height: B } = e, { width: y } = e, { boxThickness: w } = e, { disableEditBoxes: E } = e, { singleBox: C } = e, { showRemoveButton: S } = e, { handlesCursor: M } = e, { boxSelectedThickness: $ } = e, { max_file_size: P = null } = e, { cli_upload: q } = e, { stream_handler: U } = e, { useDefaultLabel: j } = e, { enableKeyboardShortcuts: Y } = e, { showBoxLabels: G } = e, A, x = !1, { active_source: J = null } = e;
  function oe({ detail: D }) {
    t(1, s = new ir()), t(1, s.image = D, s), H("upload");
  }
  function me(D) {
    return o(this, void 0, void 0, function* () {
      const Ft = yield A.load_files([new File([D], "webcam.png")]), Ge = (Ft == null ? void 0 : Ft[0]) || null;
      Ge ? (t(1, s = new ir()), t(1, s.image = Ge, s)) : t(1, s = null), yield Jb(), H("change");
    });
  }
  const H = Gb();
  let ze = !1;
  function R(D) {
    return o(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          A.paste_clipboard();
          break;
      }
    });
  }
  function F() {
    t(1, s = null), H("clear"), H("change");
  }
  const Z = async (D) => D === null ? "" : `<img src="${await Ed(D.image)}" />`;
  function le(D) {
    bi.call(this, i, D);
  }
  function K(D) {
    bi.call(this, i, D);
  }
  function we(D) {
    Ei[D ? "unshift" : "push"](() => {
      A = D, t(33, A);
    });
  }
  function W(D) {
    x = D, t(31, x);
  }
  function Dt(D) {
    ze = D, t(32, ze);
  }
  function Ve(D) {
    bi.call(this, i, D);
  }
  const rt = (D) => me(D.detail), _t = (D) => me(D.detail);
  function sn(D) {
    bi.call(this, i, D);
  }
  function Xi(D) {
    bi.call(this, i, D);
  }
  const Hl = (D) => me(D.detail);
  function jl(D) {
    s = D, t(1, s);
  }
  const Tl = () => H("change");
  function li(D) {
    J = D, t(0, J), t(4, _);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, s = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, _ = D.sources), "selectable" in D && t(5, c = D.selectable), "root" in D && t(6, f = D.root), "interactive" in D && t(7, u = D.interactive), "i18n" in D && t(8, d = D.i18n), "showShareButton" in D && t(9, m = D.showShareButton), "showDownloadButton" in D && t(10, h = D.showDownloadButton), "showClearButton" in D && t(11, g = D.showClearButton), "boxesAlpha" in D && t(12, b = D.boxesAlpha), "labelList" in D && t(13, v = D.labelList), "labelColors" in D && t(14, p = D.labelColors), "boxMinSize" in D && t(15, z = D.boxMinSize), "handleSize" in D && t(16, L = D.handleSize), "height" in D && t(17, B = D.height), "width" in D && t(18, y = D.width), "boxThickness" in D && t(19, w = D.boxThickness), "disableEditBoxes" in D && t(20, E = D.disableEditBoxes), "singleBox" in D && t(21, C = D.singleBox), "showRemoveButton" in D && t(22, S = D.showRemoveButton), "handlesCursor" in D && t(23, M = D.handlesCursor), "boxSelectedThickness" in D && t(24, $ = D.boxSelectedThickness), "max_file_size" in D && t(25, P = D.max_file_size), "cli_upload" in D && t(26, q = D.cli_upload), "stream_handler" in D && t(27, U = D.stream_handler), "useDefaultLabel" in D && t(28, j = D.useDefaultLabel), "enableKeyboardShortcuts" in D && t(29, Y = D.enableKeyboardShortcuts), "showBoxLabels" in D && t(30, G = D.showBoxLabels), "active_source" in D && t(0, J = D.active_source), "$$scope" in D && t(55, l = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[1] & /*uploading*/
    1 && x && F(), i.$$.dirty[1] & /*dragging*/
    2 && H("drag", ze), i.$$.dirty[0] & /*active_source, sources*/
    17 && !J && _ && t(0, J = _[0]);
  }, [
    J,
    s,
    r,
    a,
    _,
    c,
    f,
    u,
    d,
    m,
    h,
    g,
    b,
    v,
    p,
    z,
    L,
    B,
    y,
    w,
    E,
    C,
    S,
    M,
    $,
    P,
    q,
    U,
    j,
    Y,
    G,
    x,
    ze,
    A,
    oe,
    me,
    H,
    R,
    F,
    n,
    Z,
    le,
    K,
    we,
    W,
    Dt,
    Ve,
    rt,
    _t,
    sn,
    Xi,
    Hl,
    jl,
    Tl,
    li,
    l
  ];
}
class i2 extends Ub {
  constructor(e) {
    super(), Pb(
      this,
      e,
      n2,
      t2,
      xb,
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
  SvelteComponent: l2,
  attr: hl,
  detach: q_,
  element: z_,
  init: o2,
  insert: B_,
  noop: fr,
  safe_not_equal: s2,
  src_url_equal: dr,
  toggle_class: Gt
} = window.__gradio__svelte__internal;
function hr(i) {
  let e, t;
  return {
    c() {
      e = z_("img"), dr(e.src, t = /*value*/
      i[0].url) || hl(e, "src", t), hl(e, "alt", "");
    },
    m(n, l) {
      B_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !dr(e.src, t = /*value*/
      n[0].url) && hl(e, "src", t);
    },
    d(n) {
      n && q_(e);
    }
  };
}
function a2(i) {
  let e, t = (
    /*value*/
    i[0] && hr(i)
  );
  return {
    c() {
      e = z_("div"), t && t.c(), hl(e, "class", "container svelte-1sgcyba"), Gt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Gt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Gt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Gt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      B_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = hr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Gt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Gt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Gt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Gt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: fr,
    o: fr,
    d(n) {
      n && q_(e), t && t.d();
    }
  };
}
function r2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class qq extends l2 {
  constructor(e) {
    super(), o2(this, e, r2, a2, s2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: _2,
  add_flush_callback: mr,
  assign: c2,
  bind: gr,
  binding_callbacks: br,
  check_outros: u2,
  create_component: Dn,
  destroy_component: Ln,
  detach: D_,
  empty: f2,
  flush: te,
  get_spread_object: d2,
  get_spread_update: h2,
  group_outros: m2,
  init: g2,
  insert: L_,
  mount_component: Mn,
  safe_not_equal: b2,
  space: p2,
  transition_in: jt,
  transition_out: Tt
} = window.__gradio__svelte__internal;
function w2(i) {
  let e, t;
  return e = new Iu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [C2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Dn(e.$$.fragment);
    },
    m(n, l) {
      Mn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      32768 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ln(e, n);
    }
  };
}
function v2(i) {
  let e, t;
  return e = new Er({
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
      Dn(e.$$.fragment);
    },
    m(n, l) {
      Mn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      4 && (o.i18n = /*gradio*/
      n[33].i18n), e.$set(o);
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ln(e, n);
    }
  };
}
function k2(i) {
  let e, t;
  return e = new Er({
    props: {
      i18n: (
        /*gradio*/
        i[33].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Dn(e.$$.fragment);
    },
    m(n, l) {
      Mn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      4 && (o.i18n = /*gradio*/
      n[33].i18n), e.$set(o);
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ln(e, n);
    }
  };
}
function C2(i) {
  let e, t;
  return e = new Sr({}), {
    c() {
      Dn(e.$$.fragment);
    },
    m(n, l) {
      Mn(e, n, l), t = !0;
    },
    i(n) {
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ln(e, n);
    }
  };
}
function y2(i) {
  let e, t, n, l;
  const o = [k2, v2, w2], s = [];
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
      t.c(), n = f2();
    },
    m(a, _) {
      s[e].m(a, _), L_(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (m2(), Tt(s[c], 1, 1, () => {
        s[c] = null;
      }), u2(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), jt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (jt(t), l = !0);
    },
    o(a) {
      Tt(t), l = !1;
    },
    d(a) {
      a && D_(n), s[e].d(a);
    }
  };
}
function S2(i) {
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
  for (let u = 0; u < r.length; u += 1)
    a = c2(a, r[u]);
  e = new O1({ props: a });
  function _(u) {
    i[36](u);
  }
  function c(u) {
    i[37](u);
  }
  let f = {
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
    $$slots: { default: [y2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[35] !== void 0 && (f.active_source = /*active_source*/
    i[35]), /*value*/
    i[0] !== void 0 && (f.value = /*value*/
    i[0]), n = new i2({ props: f }), br.push(() => gr(n, "active_source", _)), br.push(() => gr(n, "value", c)), n.$on(
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
        Dn(e.$$.fragment), t = p2(), Dn(n.$$.fragment);
      },
      m(u, d) {
        Mn(e, u, d), L_(u, t, d), Mn(n, u, d), s = !0;
      },
      p(u, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        4 ? h2(r, [
          d[1] & /*gradio*/
          4 && {
            autoscroll: (
              /*gradio*/
              u[33].autoscroll
            )
          },
          d[1] & /*gradio*/
          4 && { i18n: (
            /*gradio*/
            u[33].i18n
          ) },
          d[0] & /*loading_status*/
          2 && d2(
            /*loading_status*/
            u[1]
          )
        ]) : {};
        e.$set(m);
        const h = {};
        d[0] & /*_selectable*/
        1024 && (h.selectable = /*_selectable*/
        u[10]), d[0] & /*root*/
        128 && (h.root = /*root*/
        u[7]), d[0] & /*sources*/
        16384 && (h.sources = /*sources*/
        u[14]), d[0] & /*interactive*/
        262144 && (h.interactive = /*interactive*/
        u[18]), d[0] & /*show_download_button*/
        32768 && (h.showDownloadButton = /*show_download_button*/
        u[15]), d[0] & /*show_share_button*/
        65536 && (h.showShareButton = /*show_share_button*/
        u[16]), d[0] & /*show_clear_button*/
        131072 && (h.showClearButton = /*show_clear_button*/
        u[17]), d[1] & /*gradio*/
        4 && (h.i18n = /*gradio*/
        u[33].i18n), d[0] & /*boxes_alpha*/
        524288 && (h.boxesAlpha = /*boxes_alpha*/
        u[19]), d[0] & /*height*/
        256 && (h.height = /*height*/
        u[8]), d[0] & /*width*/
        512 && (h.width = /*width*/
        u[9]), d[0] & /*label_list*/
        1048576 && (h.labelList = /*label_list*/
        u[20]), d[0] & /*label_colors*/
        2097152 && (h.labelColors = /*label_colors*/
        u[21]), d[0] & /*box_min_size*/
        4194304 && (h.boxMinSize = /*box_min_size*/
        u[22]), d[0] & /*label*/
        32 && (h.label = /*label*/
        u[5]), d[0] & /*show_label*/
        64 && (h.show_label = /*show_label*/
        u[6]), d[1] & /*gradio*/
        4 && (h.max_file_size = /*gradio*/
        u[33].max_file_size), d[1] & /*gradio*/
        4 && (h.cli_upload = /*gradio*/
        u[33].client.upload), d[1] & /*gradio*/
        4 && (h.stream_handler = /*gradio*/
        u[33].client.stream), d[0] & /*handle_size*/
        8388608 && (h.handleSize = /*handle_size*/
        u[23]), d[0] & /*box_thickness*/
        16777216 && (h.boxThickness = /*box_thickness*/
        u[24]), d[0] & /*box_selected_thickness*/
        33554432 && (h.boxSelectedThickness = /*box_selected_thickness*/
        u[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (h.disableEditBoxes = /*disable_edit_boxes*/
        u[26]), d[0] & /*single_box*/
        134217728 && (h.singleBox = /*single_box*/
        u[27]), d[0] & /*show_remove_button*/
        268435456 && (h.showRemoveButton = /*show_remove_button*/
        u[28]), d[0] & /*handles_cursor*/
        536870912 && (h.handlesCursor = /*handles_cursor*/
        u[29]), d[0] & /*use_default_label*/
        1073741824 && (h.useDefaultLabel = /*use_default_label*/
        u[30]), d[1] & /*enable_keyboard_shortcuts*/
        1 && (h.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        u[31]), d[1] & /*show_box_labels*/
        2 && (h.showBoxLabels = /*show_box_labels*/
        u[32]), d[1] & /*$$scope, gradio, active_source*/
        32788 && (h.$$scope = { dirty: d, ctx: u }), !l && d[1] & /*active_source*/
        16 && (l = !0, h.active_source = /*active_source*/
        u[35], mr(() => l = !1)), !o && d[0] & /*value*/
        1 && (o = !0, h.value = /*value*/
        u[0], mr(() => o = !1)), n.$set(h);
      },
      i(u) {
        s || (jt(e.$$.fragment, u), jt(n.$$.fragment, u), s = !0);
      },
      o(u) {
        Tt(e.$$.fragment, u), Tt(n.$$.fragment, u), s = !1;
      },
      d(u) {
        u && D_(t), Ln(e, u), Ln(n, u);
      }
    }
  );
}
function q2(i) {
  let e, t;
  return e = new rc({
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
      $$slots: { default: [S2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Dn(e.$$.fragment);
    },
    m(n, l) {
      Mn(e, n, l), t = !0;
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
      t || (jt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ln(e, n);
    }
  };
}
function z2(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: f } = e, { _selectable: u = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: p } = e, { show_clear_button: z } = e, { interactive: L } = e, { boxes_alpha: B } = e, { label_list: y } = e, { label_colors: w } = e, { box_min_size: E } = e, { handle_size: C } = e, { box_thickness: S } = e, { box_selected_thickness: M } = e, { disable_edit_boxes: $ } = e, { single_box: P } = e, { show_remove_button: q } = e, { handles_cursor: U } = e, { use_default_label: j } = e, { enable_keyboard_shortcuts: Y } = e, { show_box_labels: G } = e, { gradio: A } = e, x, J = null;
  function oe(W) {
    J = W, t(35, J);
  }
  function me(W) {
    s = W, t(0, s);
  }
  const H = () => A.dispatch("change"), ze = () => A.dispatch("edit"), R = () => {
    A.dispatch("clear");
  }, F = ({ detail: W }) => t(34, x = W), Z = () => A.dispatch("upload"), le = ({ detail: W }) => A.dispatch("select", W), K = ({ detail: W }) => A.dispatch("share", W), we = ({ detail: W }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), A.dispatch("error", W);
  };
  return i.$$set = (W) => {
    "elem_id" in W && t(2, n = W.elem_id), "elem_classes" in W && t(3, l = W.elem_classes), "visible" in W && t(4, o = W.visible), "value" in W && t(0, s = W.value), "label" in W && t(5, r = W.label), "show_label" in W && t(6, a = W.show_label), "root" in W && t(7, _ = W.root), "height" in W && t(8, c = W.height), "width" in W && t(9, f = W.width), "_selectable" in W && t(10, u = W._selectable), "container" in W && t(11, d = W.container), "scale" in W && t(12, m = W.scale), "min_width" in W && t(13, h = W.min_width), "loading_status" in W && t(1, g = W.loading_status), "sources" in W && t(14, b = W.sources), "show_download_button" in W && t(15, v = W.show_download_button), "show_share_button" in W && t(16, p = W.show_share_button), "show_clear_button" in W && t(17, z = W.show_clear_button), "interactive" in W && t(18, L = W.interactive), "boxes_alpha" in W && t(19, B = W.boxes_alpha), "label_list" in W && t(20, y = W.label_list), "label_colors" in W && t(21, w = W.label_colors), "box_min_size" in W && t(22, E = W.box_min_size), "handle_size" in W && t(23, C = W.handle_size), "box_thickness" in W && t(24, S = W.box_thickness), "box_selected_thickness" in W && t(25, M = W.box_selected_thickness), "disable_edit_boxes" in W && t(26, $ = W.disable_edit_boxes), "single_box" in W && t(27, P = W.single_box), "show_remove_button" in W && t(28, q = W.show_remove_button), "handles_cursor" in W && t(29, U = W.handles_cursor), "use_default_label" in W && t(30, j = W.use_default_label), "enable_keyboard_shortcuts" in W && t(31, Y = W.enable_keyboard_shortcuts), "show_box_labels" in W && t(32, G = W.show_box_labels), "gradio" in W && t(33, A = W.gradio);
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
    f,
    u,
    d,
    m,
    h,
    b,
    v,
    p,
    z,
    L,
    B,
    y,
    w,
    E,
    C,
    S,
    M,
    $,
    P,
    q,
    U,
    j,
    Y,
    G,
    A,
    x,
    J,
    oe,
    me,
    H,
    ze,
    R,
    F,
    Z,
    le,
    K,
    we
  ];
}
class zq extends _2 {
  constructor(e) {
    super(), g2(
      this,
      e,
      z2,
      q2,
      b2,
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
    this.$$set({ elem_id: e }), te();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), te();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), te();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), te();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), te();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), te();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), te();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), te();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), te();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), te();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), te();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), te();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), te();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), te();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), te();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), te();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), te();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), te();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), te();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), te();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), te();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), te();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), te();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), te();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), te();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), te();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), te();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), te();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), te();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), te();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), te();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), te();
  }
  get show_box_labels() {
    return this.$$.ctx[32];
  }
  set show_box_labels(e) {
    this.$$set({ show_box_labels: e }), te();
  }
  get gradio() {
    return this.$$.ctx[33];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), te();
  }
}
export {
  qq as BaseExample,
  zq as default
};
