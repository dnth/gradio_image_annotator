const {
  SvelteComponent: V_,
  assign: $_,
  create_slot: N_,
  detach: O_,
  element: P_,
  get_all_dirty_from_scope: K_,
  get_slot_changes: Z_,
  get_spread_update: G_,
  init: J_,
  insert: Q_,
  safe_not_equal: x_,
  set_dynamic_element_data: ms,
  set_style: Ve,
  toggle_class: pt,
  transition_in: mr,
  transition_out: gr,
  update_slot_base: ec
} = window.__gradio__svelte__internal;
function tc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = N_(
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
    r = $_(r, s[a]);
  return {
    c() {
      e = P_(
        /*tag*/
        i[14]
      ), o && o.c(), ms(
        /*tag*/
        i[14]
      )(e, r), pt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), pt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), pt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), pt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), pt(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Ve(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Ve(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Ve(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Ve(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Ve(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Ve(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Ve(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      Q_(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && ec(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? Z_(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : K_(
          /*$$scope*/
          a[17]
        ),
        null
      ), ms(
        /*tag*/
        a[14]
      )(e, r = G_(s, [
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
      ])), pt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), pt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), pt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), pt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), pt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), _ & /*height*/
      1 && Ve(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && Ve(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && Ve(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && Ve(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && Ve(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && Ve(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (mr(o, a), n = !0);
    },
    o(a) {
      gr(o, a), n = !1;
    },
    d(a) {
      a && O_(e), o && o.d(a);
    }
  };
}
function nc(i) {
  let e, t = (
    /*tag*/
    i[14] && tc(i)
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
      e || (mr(t, n), e = !0);
    },
    o(n) {
      gr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function ic(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: f = !0 } = e, { type: u = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: v = null } = e, { min_width: p = 0 } = e, q = u === "fieldset" ? "fieldset" : "div";
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
    q,
    L,
    u,
    l,
    n
  ];
}
class lc extends V_ {
  constructor(e) {
    super(), J_(this, e, ic, nc, x_, {
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
  SvelteComponent: oc,
  attr: sc,
  create_slot: ac,
  detach: rc,
  element: _c,
  get_all_dirty_from_scope: cc,
  get_slot_changes: uc,
  init: fc,
  insert: dc,
  safe_not_equal: hc,
  transition_in: mc,
  transition_out: gc,
  update_slot_base: bc
} = window.__gradio__svelte__internal;
function pc(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = ac(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = _c("div"), l && l.c(), sc(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      dc(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && bc(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? uc(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : cc(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (mc(l, o), t = !0);
    },
    o(o) {
      gc(l, o), t = !1;
    },
    d(o) {
      o && rc(e), l && l.d(o);
    }
  };
}
function wc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class vc extends oc {
  constructor(e) {
    super(), fc(this, e, wc, pc, hc, {});
  }
}
const {
  SvelteComponent: kc,
  attr: gs,
  check_outros: Cc,
  create_component: yc,
  create_slot: Sc,
  destroy_component: qc,
  detach: tl,
  element: zc,
  empty: Bc,
  get_all_dirty_from_scope: Dc,
  get_slot_changes: Lc,
  group_outros: Mc,
  init: Ec,
  insert: nl,
  mount_component: Rc,
  safe_not_equal: Ac,
  set_data: Wc,
  space: Xc,
  text: Yc,
  toggle_class: En,
  transition_in: hi,
  transition_out: il,
  update_slot_base: Ic
} = window.__gradio__svelte__internal;
function bs(i) {
  let e, t;
  return e = new vc({
    props: {
      $$slots: { default: [jc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      yc(e.$$.fragment);
    },
    m(n, l) {
      Rc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (hi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      il(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qc(e, n);
    }
  };
}
function jc(i) {
  let e;
  return {
    c() {
      e = Yc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      nl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Wc(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && tl(e);
    }
  };
}
function Hc(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = Sc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && bs(i)
  );
  return {
    c() {
      e = zc("span"), s && s.c(), t = Xc(), r && r.c(), n = Bc(), gs(e, "data-testid", "block-info"), gs(e, "class", "svelte-22c38v"), En(e, "sr-only", !/*show_label*/
      i[0]), En(e, "hide", !/*show_label*/
      i[0]), En(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      nl(a, e, _), s && s.m(e, null), nl(a, t, _), r && r.m(a, _), nl(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && Ic(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? Lc(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : Dc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || _ & /*show_label*/
      1) && En(e, "sr-only", !/*show_label*/
      a[0]), (!l || _ & /*show_label*/
      1) && En(e, "hide", !/*show_label*/
      a[0]), (!l || _ & /*info*/
      2) && En(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, _), _ & /*info*/
      2 && hi(r, 1)) : (r = bs(a), r.c(), hi(r, 1), r.m(n.parentNode, n)) : r && (Mc(), il(r, 1, 1, () => {
        r = null;
      }), Cc());
    },
    i(a) {
      l || (hi(s, a), hi(r), l = !0);
    },
    o(a) {
      il(s, a), il(r), l = !1;
    },
    d(a) {
      a && (tl(e), tl(t), tl(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function Tc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class br extends kc {
  constructor(e) {
    super(), Ec(this, e, Tc, Hc, Ac, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Fc,
  append: jl,
  attr: Ri,
  create_component: Uc,
  destroy_component: Vc,
  detach: $c,
  element: ps,
  init: Nc,
  insert: Oc,
  mount_component: Pc,
  safe_not_equal: Kc,
  set_data: Zc,
  space: Gc,
  text: Jc,
  toggle_class: Ft,
  transition_in: Qc,
  transition_out: xc
} = window.__gradio__svelte__internal;
function eu(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ps("label"), t = ps("span"), Uc(n.$$.fragment), l = Gc(), o = Jc(
        /*label*/
        i[0]
      ), Ri(t, "class", "svelte-9gxdi0"), Ri(e, "for", ""), Ri(e, "data-testid", "block-label"), Ri(e, "class", "svelte-9gxdi0"), Ft(e, "hide", !/*show_label*/
      i[2]), Ft(e, "sr-only", !/*show_label*/
      i[2]), Ft(
        e,
        "float",
        /*float*/
        i[4]
      ), Ft(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Oc(r, e, a), jl(e, t), Pc(n, t, null), jl(e, l), jl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Zc(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Ft(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Ft(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Ft(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Ft(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (Qc(n.$$.fragment, r), s = !0);
    },
    o(r) {
      xc(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && $c(e), Vc(n);
    }
  };
}
function tu(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class nu extends Fc {
  constructor(e) {
    super(), Nc(this, e, tu, eu, Kc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: iu,
  append: Ao,
  attr: Rt,
  bubble: lu,
  create_component: ou,
  destroy_component: su,
  detach: pr,
  element: Wo,
  init: au,
  insert: wr,
  listen: ru,
  mount_component: _u,
  safe_not_equal: cu,
  set_data: uu,
  set_style: Rn,
  space: fu,
  text: du,
  toggle_class: Re,
  transition_in: hu,
  transition_out: mu
} = window.__gradio__svelte__internal;
function ws(i) {
  let e, t;
  return {
    c() {
      e = Wo("span"), t = du(
        /*label*/
        i[1]
      ), Rt(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      wr(n, e, l), Ao(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && uu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && pr(e);
    }
  };
}
function gu(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && ws(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = Wo("button"), a && a.c(), t = fu(), n = Wo("div"), ou(l.$$.fragment), Rt(n, "class", "svelte-1lrphxw"), Re(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Re(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Re(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Rt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Rt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Rt(
        e,
        "title",
        /*label*/
        i[1]
      ), Rt(e, "class", "svelte-1lrphxw"), Re(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Re(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Re(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Re(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Rn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Rn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Rn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(_, c) {
      wr(_, e, c), a && a.m(e, null), Ao(e, t), Ao(e, n), _u(l, n, null), o = !0, s || (r = ru(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = ws(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Re(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && Re(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && Re(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && Rt(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && Rt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && Rt(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && Re(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && Re(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && Re(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && Re(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), c & /*disabled, _color*/
      4224 && Rn(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[12] ? (
        /*_color*/
        _[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Rn(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      )), c & /*offset*/
      2048 && Rn(
        e,
        "margin-left",
        /*offset*/
        _[11] + "px"
      );
    },
    i(_) {
      o || (hu(l.$$.fragment, _), o = !0);
    },
    o(_) {
      mu(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && pr(e), a && a.d(), su(l), s = !1, r();
    }
  };
}
function bu(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: f = !1 } = e, { hasPopup: u = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(v) {
    lu.call(this, i, v);
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
class Cl extends iu {
  constructor(e) {
    super(), au(this, e, bu, gu, cu, {
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
  SvelteComponent: pu,
  append: wu,
  attr: Hl,
  binding_callbacks: vu,
  create_slot: ku,
  detach: Cu,
  element: vs,
  get_all_dirty_from_scope: yu,
  get_slot_changes: Su,
  init: qu,
  insert: zu,
  safe_not_equal: Bu,
  toggle_class: Ut,
  transition_in: Du,
  transition_out: Lu,
  update_slot_base: Mu
} = window.__gradio__svelte__internal;
function Eu(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = ku(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = vs("div"), t = vs("div"), o && o.c(), Hl(t, "class", "icon svelte-3w3rth"), Hl(e, "class", "empty svelte-3w3rth"), Hl(e, "aria-label", "Empty value"), Ut(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Ut(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Ut(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Ut(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      zu(s, e, r), wu(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Mu(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? Su(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : yu(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Ut(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Ut(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Ut(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Ut(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (Du(o, s), n = !0);
    },
    o(s) {
      Lu(o, s), n = !1;
    },
    d(s) {
      s && Cu(e), o && o.d(s), i[6](null);
    }
  };
}
function Ru(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(f) {
    var u;
    if (!f) return !1;
    const { height: d } = f.getBoundingClientRect(), { height: m } = ((u = f.parentElement) === null || u === void 0 ? void 0 : u.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(f) {
    vu[f ? "unshift" : "push"](() => {
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
class Au extends pu {
  constructor(e) {
    super(), qu(this, e, Ru, Eu, Bu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: y2,
  append: S2,
  attr: q2,
  detach: z2,
  init: B2,
  insert: D2,
  noop: L2,
  safe_not_equal: M2,
  svg_element: E2
} = window.__gradio__svelte__internal, {
  SvelteComponent: R2,
  append: A2,
  attr: W2,
  detach: X2,
  init: Y2,
  insert: I2,
  noop: j2,
  safe_not_equal: H2,
  svg_element: T2
} = window.__gradio__svelte__internal, {
  SvelteComponent: F2,
  append: U2,
  attr: V2,
  detach: $2,
  init: N2,
  insert: O2,
  noop: P2,
  safe_not_equal: K2,
  svg_element: Z2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wu,
  append: ks,
  attr: Ae,
  detach: Xu,
  init: Yu,
  insert: Iu,
  noop: Tl,
  safe_not_equal: ju,
  svg_element: Fl
} = window.__gradio__svelte__internal;
function Hu(i) {
  let e, t, n;
  return {
    c() {
      e = Fl("svg"), t = Fl("path"), n = Fl("circle"), Ae(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ae(n, "cx", "12"), Ae(n, "cy", "13"), Ae(n, "r", "4"), Ae(e, "xmlns", "http://www.w3.org/2000/svg"), Ae(e, "width", "100%"), Ae(e, "height", "100%"), Ae(e, "viewBox", "0 0 24 24"), Ae(e, "fill", "none"), Ae(e, "stroke", "currentColor"), Ae(e, "stroke-width", "1.5"), Ae(e, "stroke-linecap", "round"), Ae(e, "stroke-linejoin", "round"), Ae(e, "class", "feather feather-camera");
    },
    m(l, o) {
      Iu(l, e, o), ks(e, t), ks(e, n);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(l) {
      l && Xu(e);
    }
  };
}
class Tu extends Wu {
  constructor(e) {
    super(), Yu(this, e, null, Hu, ju, {});
  }
}
const {
  SvelteComponent: G2,
  append: J2,
  attr: Q2,
  detach: x2,
  init: ep,
  insert: tp,
  noop: np,
  safe_not_equal: ip,
  svg_element: lp
} = window.__gradio__svelte__internal, {
  SvelteComponent: op,
  append: sp,
  attr: ap,
  detach: rp,
  init: _p,
  insert: cp,
  noop: up,
  safe_not_equal: fp,
  svg_element: dp
} = window.__gradio__svelte__internal, {
  SvelteComponent: hp,
  append: mp,
  attr: gp,
  detach: bp,
  init: pp,
  insert: wp,
  noop: vp,
  safe_not_equal: kp,
  svg_element: Cp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Fu,
  append: Uu,
  attr: ct,
  detach: Vu,
  init: $u,
  insert: Nu,
  noop: Ul,
  safe_not_equal: Ou,
  svg_element: Cs
} = window.__gradio__svelte__internal;
function Pu(i) {
  let e, t;
  return {
    c() {
      e = Cs("svg"), t = Cs("circle"), ct(t, "cx", "12"), ct(t, "cy", "12"), ct(t, "r", "10"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "100%"), ct(e, "height", "100%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "stroke-width", "1.5"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-circle");
    },
    m(n, l) {
      Nu(n, e, l), Uu(e, t);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(n) {
      n && Vu(e);
    }
  };
}
class Ku extends Fu {
  constructor(e) {
    super(), $u(this, e, null, Pu, Ou, {});
  }
}
const {
  SvelteComponent: Zu,
  append: Vl,
  attr: ut,
  detach: Gu,
  init: Ju,
  insert: Qu,
  noop: $l,
  safe_not_equal: xu,
  set_style: wt,
  svg_element: Ai
} = window.__gradio__svelte__internal;
function ef(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ai("svg"), t = Ai("g"), n = Ai("path"), l = Ai("path"), ut(n, "d", "M18,6L6.087,17.913"), wt(n, "fill", "none"), wt(n, "fill-rule", "nonzero"), wt(n, "stroke-width", "2px"), ut(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), ut(l, "d", "M4.364,4.364L19.636,19.636"), wt(l, "fill", "none"), wt(l, "fill-rule", "nonzero"), wt(l, "stroke-width", "2px"), ut(e, "width", "100%"), ut(e, "height", "100%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "version", "1.1"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ut(e, "xml:space", "preserve"), ut(e, "stroke", "currentColor"), wt(e, "fill-rule", "evenodd"), wt(e, "clip-rule", "evenodd"), wt(e, "stroke-linecap", "round"), wt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Qu(o, e, s), Vl(e, t), Vl(t, n), Vl(e, l);
    },
    p: $l,
    i: $l,
    o: $l,
    d(o) {
      o && Gu(e);
    }
  };
}
class vr extends Zu {
  constructor(e) {
    super(), Ju(this, e, null, ef, xu, {});
  }
}
const {
  SvelteComponent: yp,
  append: Sp,
  attr: qp,
  detach: zp,
  init: Bp,
  insert: Dp,
  noop: Lp,
  safe_not_equal: Mp,
  svg_element: Ep
} = window.__gradio__svelte__internal, {
  SvelteComponent: Rp,
  append: Ap,
  attr: Wp,
  detach: Xp,
  init: Yp,
  insert: Ip,
  noop: jp,
  safe_not_equal: Hp,
  svg_element: Tp
} = window.__gradio__svelte__internal, {
  SvelteComponent: tf,
  append: nf,
  attr: si,
  detach: lf,
  init: of,
  insert: sf,
  noop: Nl,
  safe_not_equal: af,
  svg_element: ys
} = window.__gradio__svelte__internal;
function rf(i) {
  let e, t;
  return {
    c() {
      e = ys("svg"), t = ys("path"), si(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), si(t, "fill", "currentColor"), si(e, "id", "icon"), si(e, "xmlns", "http://www.w3.org/2000/svg"), si(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      sf(n, e, l), nf(e, t);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(n) {
      n && lf(e);
    }
  };
}
class _f extends tf {
  constructor(e) {
    super(), of(this, e, null, rf, af, {});
  }
}
const {
  SvelteComponent: Fp,
  append: Up,
  attr: Vp,
  detach: $p,
  init: Np,
  insert: Op,
  noop: Pp,
  safe_not_equal: Kp,
  svg_element: Zp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Gp,
  append: Jp,
  attr: Qp,
  detach: xp,
  init: ew,
  insert: tw,
  noop: nw,
  safe_not_equal: iw,
  svg_element: lw
} = window.__gradio__svelte__internal, {
  SvelteComponent: ow,
  append: sw,
  attr: aw,
  detach: rw,
  init: _w,
  insert: cw,
  noop: uw,
  safe_not_equal: fw,
  svg_element: dw
} = window.__gradio__svelte__internal, {
  SvelteComponent: cf,
  append: uf,
  attr: An,
  detach: ff,
  init: df,
  insert: hf,
  noop: Ol,
  safe_not_equal: mf,
  svg_element: Ss
} = window.__gradio__svelte__internal;
function gf(i) {
  let e, t;
  return {
    c() {
      e = Ss("svg"), t = Ss("path"), An(t, "fill", "currentColor"), An(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), An(e, "xmlns", "http://www.w3.org/2000/svg"), An(e, "width", "100%"), An(e, "height", "100%"), An(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      hf(n, e, l), uf(e, t);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(n) {
      n && ff(e);
    }
  };
}
class bf extends cf {
  constructor(e) {
    super(), df(this, e, null, gf, mf, {});
  }
}
const {
  SvelteComponent: pf,
  append: wf,
  attr: Wn,
  detach: vf,
  init: kf,
  insert: Cf,
  noop: Pl,
  safe_not_equal: yf,
  svg_element: qs
} = window.__gradio__svelte__internal;
function Sf(i) {
  let e, t;
  return {
    c() {
      e = qs("svg"), t = qs("path"), Wn(t, "d", "M5 8l4 4 4-4z"), Wn(e, "class", "dropdown-arrow svelte-145leq6"), Wn(e, "xmlns", "http://www.w3.org/2000/svg"), Wn(e, "width", "100%"), Wn(e, "height", "100%"), Wn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Cf(n, e, l), wf(e, t);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(n) {
      n && vf(e);
    }
  };
}
class es extends pf {
  constructor(e) {
    super(), kf(this, e, null, Sf, yf, {});
  }
}
const {
  SvelteComponent: hw,
  append: mw,
  attr: gw,
  detach: bw,
  init: pw,
  insert: ww,
  noop: vw,
  safe_not_equal: kw,
  svg_element: Cw
} = window.__gradio__svelte__internal, {
  SvelteComponent: yw,
  append: Sw,
  attr: qw,
  detach: zw,
  init: Bw,
  insert: Dw,
  noop: Lw,
  safe_not_equal: Mw,
  svg_element: Ew
} = window.__gradio__svelte__internal, {
  SvelteComponent: Rw,
  append: Aw,
  attr: Ww,
  detach: Xw,
  init: Yw,
  insert: Iw,
  noop: jw,
  safe_not_equal: Hw,
  svg_element: Tw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Fw,
  append: Uw,
  attr: Vw,
  detach: $w,
  init: Nw,
  insert: Ow,
  noop: Pw,
  safe_not_equal: Kw,
  svg_element: Zw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Gw,
  append: Jw,
  attr: Qw,
  detach: xw,
  init: ev,
  insert: tv,
  noop: nv,
  safe_not_equal: iv,
  svg_element: lv
} = window.__gradio__svelte__internal, {
  SvelteComponent: ov,
  append: sv,
  attr: av,
  detach: rv,
  init: _v,
  insert: cv,
  noop: uv,
  safe_not_equal: fv,
  svg_element: dv
} = window.__gradio__svelte__internal, {
  SvelteComponent: hv,
  append: mv,
  attr: gv,
  detach: bv,
  init: pv,
  insert: wv,
  noop: vv,
  safe_not_equal: kv,
  svg_element: Cv
} = window.__gradio__svelte__internal, {
  SvelteComponent: qf,
  append: Kl,
  attr: he,
  detach: zf,
  init: Bf,
  insert: Df,
  noop: Zl,
  safe_not_equal: Lf,
  svg_element: Wi
} = window.__gradio__svelte__internal;
function Mf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Wi("svg"), t = Wi("rect"), n = Wi("circle"), l = Wi("polyline"), he(t, "x", "3"), he(t, "y", "3"), he(t, "width", "18"), he(t, "height", "18"), he(t, "rx", "2"), he(t, "ry", "2"), he(n, "cx", "8.5"), he(n, "cy", "8.5"), he(n, "r", "1.5"), he(l, "points", "21 15 16 10 5 21"), he(e, "xmlns", "http://www.w3.org/2000/svg"), he(e, "width", "100%"), he(e, "height", "100%"), he(e, "viewBox", "0 0 24 24"), he(e, "fill", "none"), he(e, "stroke", "currentColor"), he(e, "stroke-width", "1.5"), he(e, "stroke-linecap", "round"), he(e, "stroke-linejoin", "round"), he(e, "class", "feather feather-image");
    },
    m(o, s) {
      Df(o, e, s), Kl(e, t), Kl(e, n), Kl(e, l);
    },
    p: Zl,
    i: Zl,
    o: Zl,
    d(o) {
      o && zf(e);
    }
  };
}
let kr = class extends qf {
  constructor(e) {
    super(), Bf(this, e, null, Mf, Lf, {});
  }
};
const {
  SvelteComponent: Ef,
  append: Rf,
  attr: Xi,
  detach: Af,
  init: Wf,
  insert: Xf,
  noop: Gl,
  safe_not_equal: Yf,
  svg_element: zs
} = window.__gradio__svelte__internal;
function If(i) {
  let e, t;
  return {
    c() {
      e = zs("svg"), t = zs("path"), Xi(t, "fill", "currentColor"), Xi(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Xi(e, "xmlns", "http://www.w3.org/2000/svg"), Xi(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      Xf(n, e, l), Rf(e, t);
    },
    p: Gl,
    i: Gl,
    o: Gl,
    d(n) {
      n && Af(e);
    }
  };
}
class Cr extends Ef {
  constructor(e) {
    super(), Wf(this, e, null, If, Yf, {});
  }
}
const {
  SvelteComponent: Sv,
  append: qv,
  attr: zv,
  detach: Bv,
  init: Dv,
  insert: Lv,
  noop: Mv,
  safe_not_equal: Ev,
  svg_element: Rv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Av,
  append: Wv,
  attr: Xv,
  detach: Yv,
  init: Iv,
  insert: jv,
  noop: Hv,
  safe_not_equal: Tv,
  svg_element: Fv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Uv,
  append: Vv,
  attr: $v,
  detach: Nv,
  init: Ov,
  insert: Pv,
  noop: Kv,
  safe_not_equal: Zv,
  svg_element: Gv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Jv,
  append: Qv,
  attr: xv,
  detach: e3,
  init: t3,
  insert: n3,
  noop: i3,
  safe_not_equal: l3,
  svg_element: o3
} = window.__gradio__svelte__internal, {
  SvelteComponent: s3,
  append: a3,
  attr: r3,
  detach: _3,
  init: c3,
  insert: u3,
  noop: f3,
  safe_not_equal: d3,
  svg_element: h3
} = window.__gradio__svelte__internal, {
  SvelteComponent: jf,
  append: Yi,
  attr: me,
  detach: Hf,
  init: Tf,
  insert: Ff,
  noop: Jl,
  safe_not_equal: Uf,
  svg_element: ai
} = window.__gradio__svelte__internal;
function Vf(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = ai("svg"), t = ai("path"), n = ai("path"), l = ai("line"), o = ai("line"), me(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), me(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), me(l, "x1", "12"), me(l, "y1", "19"), me(l, "x2", "12"), me(l, "y2", "23"), me(o, "x1", "8"), me(o, "y1", "23"), me(o, "x2", "16"), me(o, "y2", "23"), me(e, "xmlns", "http://www.w3.org/2000/svg"), me(e, "width", "100%"), me(e, "height", "100%"), me(e, "viewBox", "0 0 24 24"), me(e, "fill", "none"), me(e, "stroke", "currentColor"), me(e, "stroke-width", "2"), me(e, "stroke-linecap", "round"), me(e, "stroke-linejoin", "round"), me(e, "class", "feather feather-mic");
    },
    m(s, r) {
      Ff(s, e, r), Yi(e, t), Yi(e, n), Yi(e, l), Yi(e, o);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(s) {
      s && Hf(e);
    }
  };
}
class $f extends jf {
  constructor(e) {
    super(), Tf(this, e, null, Vf, Uf, {});
  }
}
const {
  SvelteComponent: m3,
  append: g3,
  attr: b3,
  detach: p3,
  init: w3,
  insert: v3,
  noop: k3,
  safe_not_equal: C3,
  svg_element: y3
} = window.__gradio__svelte__internal, {
  SvelteComponent: S3,
  append: q3,
  attr: z3,
  detach: B3,
  init: D3,
  insert: L3,
  noop: M3,
  safe_not_equal: E3,
  svg_element: R3
} = window.__gradio__svelte__internal, {
  SvelteComponent: A3,
  append: W3,
  attr: X3,
  detach: Y3,
  init: I3,
  insert: j3,
  noop: H3,
  safe_not_equal: T3,
  svg_element: F3
} = window.__gradio__svelte__internal, {
  SvelteComponent: U3,
  append: V3,
  attr: $3,
  detach: N3,
  init: O3,
  insert: P3,
  noop: K3,
  safe_not_equal: Z3,
  svg_element: G3
} = window.__gradio__svelte__internal, {
  SvelteComponent: J3,
  append: Q3,
  attr: x3,
  detach: e4,
  init: t4,
  insert: n4,
  noop: i4,
  safe_not_equal: l4,
  svg_element: o4
} = window.__gradio__svelte__internal, {
  SvelteComponent: s4,
  append: a4,
  attr: r4,
  detach: _4,
  init: c4,
  insert: u4,
  noop: f4,
  safe_not_equal: d4,
  svg_element: h4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Nf,
  append: Bs,
  attr: Je,
  detach: Of,
  init: Pf,
  insert: Kf,
  noop: Ql,
  safe_not_equal: Zf,
  set_style: Gf,
  svg_element: xl
} = window.__gradio__svelte__internal;
function Jf(i) {
  let e, t, n;
  return {
    c() {
      e = xl("svg"), t = xl("polyline"), n = xl("path"), Je(t, "points", "1 4 1 10 7 10"), Je(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Je(e, "xmlns", "http://www.w3.org/2000/svg"), Je(e, "width", "100%"), Je(e, "height", "100%"), Je(e, "viewBox", "0 0 24 24"), Je(e, "fill", "none"), Je(e, "stroke", "currentColor"), Je(e, "stroke-width", "2"), Je(e, "stroke-linecap", "round"), Je(e, "stroke-linejoin", "round"), Je(e, "class", "feather feather-rotate-ccw"), Gf(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      Kf(l, e, o), Bs(e, t), Bs(e, n);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(l) {
      l && Of(e);
    }
  };
}
class Qf extends Nf {
  constructor(e) {
    super(), Pf(this, e, null, Jf, Zf, {});
  }
}
const {
  SvelteComponent: m4,
  append: g4,
  attr: b4,
  detach: p4,
  init: w4,
  insert: v4,
  noop: k4,
  safe_not_equal: C4,
  svg_element: y4
} = window.__gradio__svelte__internal, {
  SvelteComponent: S4,
  append: q4,
  attr: z4,
  detach: B4,
  init: D4,
  insert: L4,
  noop: M4,
  safe_not_equal: E4,
  svg_element: R4
} = window.__gradio__svelte__internal, {
  SvelteComponent: A4,
  append: W4,
  attr: X4,
  detach: Y4,
  init: I4,
  insert: j4,
  noop: H4,
  safe_not_equal: T4,
  svg_element: F4
} = window.__gradio__svelte__internal, {
  SvelteComponent: U4,
  append: V4,
  attr: $4,
  detach: N4,
  init: O4,
  insert: P4,
  noop: K4,
  safe_not_equal: Z4,
  svg_element: G4
} = window.__gradio__svelte__internal, {
  SvelteComponent: J4,
  append: Q4,
  attr: x4,
  detach: e5,
  init: t5,
  insert: n5,
  noop: i5,
  safe_not_equal: l5,
  svg_element: o5
} = window.__gradio__svelte__internal, {
  SvelteComponent: xf,
  append: ed,
  attr: We,
  detach: td,
  init: nd,
  insert: id,
  noop: eo,
  safe_not_equal: ld,
  svg_element: Ds
} = window.__gradio__svelte__internal;
function od(i) {
  let e, t;
  return {
    c() {
      e = Ds("svg"), t = Ds("rect"), We(t, "x", "3"), We(t, "y", "3"), We(t, "width", "18"), We(t, "height", "18"), We(t, "rx", "2"), We(t, "ry", "2"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "stroke-width", "1.5"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round"), We(e, "class", "feather feather-square");
    },
    m(n, l) {
      id(n, e, l), ed(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && td(e);
    }
  };
}
class sd extends xf {
  constructor(e) {
    super(), nd(this, e, null, od, ld, {});
  }
}
const {
  SvelteComponent: s5,
  append: a5,
  attr: r5,
  detach: _5,
  init: c5,
  insert: u5,
  noop: f5,
  safe_not_equal: d5,
  svg_element: h5
} = window.__gradio__svelte__internal, {
  SvelteComponent: m5,
  append: g5,
  attr: b5,
  detach: p5,
  init: w5,
  insert: v5,
  noop: k5,
  safe_not_equal: C5,
  svg_element: y5
} = window.__gradio__svelte__internal, {
  SvelteComponent: S5,
  append: q5,
  attr: z5,
  detach: B5,
  init: D5,
  insert: L5,
  noop: M5,
  safe_not_equal: E5,
  svg_element: R5,
  text: A5
} = window.__gradio__svelte__internal, {
  SvelteComponent: W5,
  append: X5,
  attr: Y5,
  detach: I5,
  init: j5,
  insert: H5,
  noop: T5,
  safe_not_equal: F5,
  svg_element: U5
} = window.__gradio__svelte__internal, {
  SvelteComponent: V5,
  append: $5,
  attr: N5,
  detach: O5,
  init: P5,
  insert: K5,
  noop: Z5,
  safe_not_equal: G5,
  svg_element: J5
} = window.__gradio__svelte__internal, {
  SvelteComponent: ad,
  append: Ls,
  attr: Qe,
  detach: rd,
  init: _d,
  insert: cd,
  noop: to,
  safe_not_equal: ud,
  svg_element: no
} = window.__gradio__svelte__internal;
function fd(i) {
  let e, t, n;
  return {
    c() {
      e = no("svg"), t = no("polyline"), n = no("path"), Qe(t, "points", "1 4 1 10 7 10"), Qe(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "fill", "none"), Qe(e, "stroke", "currentColor"), Qe(e, "stroke-width", "2"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      cd(l, e, o), Ls(e, t), Ls(e, n);
    },
    p: to,
    i: to,
    o: to,
    d(l) {
      l && rd(e);
    }
  };
}
class dd extends ad {
  constructor(e) {
    super(), _d(this, e, null, fd, ud, {});
  }
}
const {
  SvelteComponent: hd,
  append: io,
  attr: ze,
  detach: md,
  init: gd,
  insert: bd,
  noop: lo,
  safe_not_equal: pd,
  svg_element: Ii
} = window.__gradio__svelte__internal;
function wd(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ii("svg"), t = Ii("path"), n = Ii("polyline"), l = Ii("line"), ze(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ze(n, "points", "17 8 12 3 7 8"), ze(l, "x1", "12"), ze(l, "y1", "3"), ze(l, "x2", "12"), ze(l, "y2", "15"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "width", "90%"), ze(e, "height", "90%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "fill", "none"), ze(e, "stroke", "currentColor"), ze(e, "stroke-width", "2"), ze(e, "stroke-linecap", "round"), ze(e, "stroke-linejoin", "round"), ze(e, "class", "feather feather-upload");
    },
    m(o, s) {
      bd(o, e, s), io(e, t), io(e, n), io(e, l);
    },
    p: lo,
    i: lo,
    o: lo,
    d(o) {
      o && md(e);
    }
  };
}
let yr = class extends hd {
  constructor(e) {
    super(), gd(this, e, null, wd, pd, {});
  }
};
const {
  SvelteComponent: x5,
  append: ek,
  attr: tk,
  detach: nk,
  init: ik,
  insert: lk,
  noop: ok,
  safe_not_equal: sk,
  svg_element: ak
} = window.__gradio__svelte__internal, {
  SvelteComponent: rk,
  append: _k,
  attr: ck,
  detach: uk,
  init: fk,
  insert: dk,
  noop: hk,
  safe_not_equal: mk,
  svg_element: gk,
  text: bk
} = window.__gradio__svelte__internal, {
  SvelteComponent: pk,
  append: wk,
  attr: vk,
  detach: kk,
  init: Ck,
  insert: yk,
  noop: Sk,
  safe_not_equal: qk,
  svg_element: zk,
  text: Bk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Dk,
  append: Lk,
  attr: Mk,
  detach: Ek,
  init: Rk,
  insert: Ak,
  noop: Wk,
  safe_not_equal: Xk,
  svg_element: Yk,
  text: Ik
} = window.__gradio__svelte__internal, {
  SvelteComponent: jk,
  append: Hk,
  attr: Tk,
  detach: Fk,
  init: Uk,
  insert: Vk,
  noop: $k,
  safe_not_equal: Nk,
  svg_element: Ok
} = window.__gradio__svelte__internal, {
  SvelteComponent: vd,
  append: Ms,
  attr: Vt,
  detach: kd,
  init: Cd,
  insert: yd,
  noop: oo,
  safe_not_equal: Sd,
  svg_element: so
} = window.__gradio__svelte__internal;
function qd(i) {
  let e, t, n;
  return {
    c() {
      e = so("svg"), t = so("path"), n = so("path"), Vt(t, "fill", "currentColor"), Vt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Vt(n, "fill", "currentColor"), Vt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Vt(e, "xmlns", "http://www.w3.org/2000/svg"), Vt(e, "width", "100%"), Vt(e, "height", "100%"), Vt(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      yd(l, e, o), Ms(e, t), Ms(e, n);
    },
    p: oo,
    i: oo,
    o: oo,
    d(l) {
      l && kd(e);
    }
  };
}
let Sr = class extends vd {
  constructor(e) {
    super(), Cd(this, e, null, qd, Sd, {});
  }
};
const zd = [
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
], Es = {
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
zd.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: Es[e][t],
    secondary: Es[e][n]
  }
}), {});
class ll extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Bd(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new ll("Must be on Spaces to share.");
  let t, n, l;
  t = Dd(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new ll(`Upload failed: ${_.error}`);
    }
    throw new ll("Upload failed.");
  }
  return await s.text();
}
function Dd(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Ld,
  create_component: Md,
  destroy_component: Ed,
  init: Rd,
  mount_component: Ad,
  safe_not_equal: Wd,
  transition_in: Xd,
  transition_out: Yd
} = window.__gradio__svelte__internal, { createEventDispatcher: Id } = window.__gradio__svelte__internal;
function jd(i) {
  let e, t;
  return e = new Cl({
    props: {
      Icon: _f,
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
      Md(e.$$.fragment);
    },
    m(n, l) {
      Ad(e, n, l), t = !0;
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
      t || (Xd(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yd(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ed(e, n);
    }
  };
}
function Hd(i, e, t) {
  const n = Id();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof ll ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class Td extends Ld {
  constructor(e) {
    super(), Rd(this, e, Hd, jd, Wd, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Fd,
  append: gn,
  attr: Xo,
  check_outros: Ud,
  create_component: qr,
  destroy_component: zr,
  detach: ol,
  element: Yo,
  group_outros: Vd,
  init: $d,
  insert: sl,
  mount_component: Br,
  safe_not_equal: Nd,
  set_data: Io,
  space: jo,
  text: mi,
  toggle_class: Rs,
  transition_in: _l,
  transition_out: cl
} = window.__gradio__svelte__internal;
function Od(i) {
  let e, t;
  return e = new yr({}), {
    c() {
      qr(e.$$.fragment);
    },
    m(n, l) {
      Br(e, n, l), t = !0;
    },
    i(n) {
      t || (_l(e.$$.fragment, n), t = !0);
    },
    o(n) {
      cl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zr(e, n);
    }
  };
}
function Pd(i) {
  let e, t;
  return e = new Cr({}), {
    c() {
      qr(e.$$.fragment);
    },
    m(n, l) {
      Br(e, n, l), t = !0;
    },
    i(n) {
      t || (_l(e.$$.fragment, n), t = !0);
    },
    o(n) {
      cl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zr(e, n);
    }
  };
}
function As(i) {
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
      e = Yo("span"), t = mi("- "), l = mi(n), o = mi(" -"), s = jo(), a = mi(r), Xo(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      sl(_, e, c), gn(e, t), gn(e, l), gn(e, o), sl(_, s, c), sl(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && Io(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && Io(a, r);
    },
    d(_) {
      _ && (ol(e), ol(s), ol(a));
    }
  };
}
function Kd(i) {
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
  const c = [Pd, Od], f = [];
  function u(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = u(i), l = f[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && As(i)
  );
  return {
    c() {
      e = Yo("div"), t = Yo("span"), l.c(), o = jo(), r = mi(s), a = jo(), d && d.c(), Xo(t, "class", "icon-wrap svelte-kzcjhc"), Rs(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Xo(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      sl(m, e, h), gn(e, t), f[n].m(t, null), gn(e, o), gn(e, r), gn(e, a), d && d.m(e, null), _ = !0;
    },
    p(m, [h]) {
      let g = n;
      n = u(m), n !== g && (Vd(), cl(f[g], 1, 1, () => {
        f[g] = null;
      }), Ud(), l = f[n], l || (l = f[n] = c[n](m), l.c()), _l(l, 1), l.m(t, null)), (!_ || h & /*hovered*/
      16) && Rs(
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
      ) + "") && Io(r, s), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = As(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      _ || (_l(l), _ = !0);
    },
    o(m) {
      cl(l), _ = !1;
    },
    d(m) {
      m && ol(e), f[n].d(), d && d.d();
    }
  };
}
function Zd(i, e, t) {
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
class Dr extends Fd {
  constructor(e) {
    super(), $d(this, e, Zd, Kd, Nd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Kk,
  attr: Zk,
  create_slot: Gk,
  detach: Jk,
  element: Qk,
  get_all_dirty_from_scope: xk,
  get_slot_changes: e6,
  init: t6,
  insert: n6,
  safe_not_equal: i6,
  toggle_class: l6,
  transition_in: o6,
  transition_out: s6,
  update_slot_base: a6
} = window.__gradio__svelte__internal, {
  SvelteComponent: Gd,
  append: ao,
  attr: zt,
  check_outros: gi,
  create_component: yl,
  destroy_component: Sl,
  detach: Zn,
  element: Di,
  empty: Jd,
  group_outros: bi,
  init: Qd,
  insert: Gn,
  listen: ql,
  mount_component: zl,
  safe_not_equal: xd,
  space: ro,
  toggle_class: tn,
  transition_in: ve,
  transition_out: Ie
} = window.__gradio__svelte__internal;
function Ws(i) {
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
  ), _, c = t && Xs(i), f = l && Ys(i), u = s && Is(i), d = a && js(i);
  return {
    c() {
      e = Di("span"), c && c.c(), n = ro(), f && f.c(), o = ro(), u && u.c(), r = ro(), d && d.c(), zt(e, "class", "source-selection svelte-1jp3vgd"), zt(e, "data-testid", "source-select");
    },
    m(m, h) {
      Gn(m, e, h), c && c.m(e, null), ao(e, n), f && f.m(e, null), ao(e, o), u && u.m(e, null), ao(e, r), d && d.m(e, null), _ = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && ve(c, 1)) : (c = Xs(m), c.c(), ve(c, 1), c.m(e, n)) : c && (bi(), Ie(c, 1, 1, () => {
        c = null;
      }), gi()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? f ? (f.p(m, h), h & /*sources*/
      2 && ve(f, 1)) : (f = Ys(m), f.c(), ve(f, 1), f.m(e, o)) : f && (bi(), Ie(f, 1, 1, () => {
        f = null;
      }), gi()), h & /*sources*/
      2 && (s = /*sources*/
      m[1].includes("webcam")), s ? u ? (u.p(m, h), h & /*sources*/
      2 && ve(u, 1)) : (u = Is(m), u.c(), ve(u, 1), u.m(e, r)) : u && (bi(), Ie(u, 1, 1, () => {
        u = null;
      }), gi()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && ve(d, 1)) : (d = js(m), d.c(), ve(d, 1), d.m(e, null)) : d && (bi(), Ie(d, 1, 1, () => {
        d = null;
      }), gi());
    },
    i(m) {
      _ || (ve(c), ve(f), ve(u), ve(d), _ = !0);
    },
    o(m) {
      Ie(c), Ie(f), Ie(u), Ie(d), _ = !1;
    },
    d(m) {
      m && Zn(e), c && c.d(), f && f.d(), u && u.d(), d && d.d();
    }
  };
}
function Xs(i) {
  let e, t, n, l, o;
  return t = new yr({}), {
    c() {
      e = Di("button"), yl(t.$$.fragment), zt(e, "class", "icon svelte-1jp3vgd"), zt(e, "aria-label", "Upload file"), tn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      Gn(s, e, r), zl(t, e, null), n = !0, l || (o = ql(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && tn(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (ve(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Sl(t), l = !1, o();
    }
  };
}
function Ys(i) {
  let e, t, n, l, o;
  return t = new $f({}), {
    c() {
      e = Di("button"), yl(t.$$.fragment), zt(e, "class", "icon svelte-1jp3vgd"), zt(e, "aria-label", "Record audio"), tn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      Gn(s, e, r), zl(t, e, null), n = !0, l || (o = ql(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && tn(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (ve(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Sl(t), l = !1, o();
    }
  };
}
function Is(i) {
  let e, t, n, l, o;
  return t = new Sr({}), {
    c() {
      e = Di("button"), yl(t.$$.fragment), zt(e, "class", "icon svelte-1jp3vgd"), zt(e, "aria-label", "Capture from camera"), tn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      Gn(s, e, r), zl(t, e, null), n = !0, l || (o = ql(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && tn(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (ve(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Sl(t), l = !1, o();
    }
  };
}
function js(i) {
  let e, t, n, l, o;
  return t = new Cr({}), {
    c() {
      e = Di("button"), yl(t.$$.fragment), zt(e, "class", "icon svelte-1jp3vgd"), zt(e, "aria-label", "Paste from clipboard"), tn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      Gn(s, e, r), zl(t, e, null), n = !0, l || (o = ql(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && tn(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (ve(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ie(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Sl(t), l = !1, o();
    }
  };
}
function e1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Ws(i)
  );
  return {
    c() {
      n && n.c(), e = Jd();
    },
    m(l, o) {
      n && n.m(l, o), Gn(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && ve(n, 1)) : (n = Ws(l), n.c(), ve(n, 1), n.m(e.parentNode, e)) : n && (bi(), Ie(n, 1, 1, () => {
        n = null;
      }), gi());
    },
    i(l) {
      t || (ve(n), t = !0);
    },
    o(l) {
      Ie(n), t = !1;
    },
    d(l) {
      l && Zn(e), n && n.d(l);
    }
  };
}
function t1(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, h, g, b) {
    function v(p) {
      return p instanceof g ? p : new g(function(q) {
        q(p);
      });
    }
    return new (g || (g = Promise))(function(p, q) {
      function L(w) {
        try {
          y(b.next(w));
        } catch (R) {
          q(R);
        }
      }
      function B(w) {
        try {
          y(b.throw(w));
        } catch (R) {
          q(R);
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
class n1 extends Gd {
  constructor(e) {
    super(), Qd(this, e, t1, e1, xd, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Fn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function al() {
}
const i1 = (i) => i;
function Hs(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Lr = typeof window < "u";
let Ts = Lr ? () => window.performance.now() : () => Date.now(), Mr = Lr ? (i) => requestAnimationFrame(i) : al;
const Kn = /* @__PURE__ */ new Set();
function Er(i) {
  Kn.forEach((e) => {
    e.c(i) || (Kn.delete(e), e.f());
  }), Kn.size !== 0 && Mr(Er);
}
function l1(i) {
  let e;
  return Kn.size === 0 && Mr(Er), { promise: new Promise((t) => {
    Kn.add(e = { c: i, f: t });
  }), abort() {
    Kn.delete(e);
  } };
}
function o1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function s1(i, { delay: e = 0, duration: t = 400, easing: n = i1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function Fs(i, { delay: e = 0, duration: t = 400, easing: n = o1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [f, u] = Hs(l), [d, m] = Hs(o);
  return { delay: e, duration: t, easing: n, css: (h, g) => `
			transform: ${_} translate(${(1 - h) * f}${u}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}` };
}
const Xn = [];
function a1(i, e = al) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const _ = !Xn.length;
      for (const c of n) c[1](), Xn.push(c, i);
      if (_) {
        for (let c = 0; c < Xn.length; c += 2) Xn[c][0](Xn[c + 1]);
        Xn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = al) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || al), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function Us(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Ho(i, e, t, n) {
  if (typeof t == "number" || Us(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, Us(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Ho(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Ho(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function Vs(i, e = {}) {
  const t = a1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, f = 1, u = 0, d = !1;
  function m(g, b = {}) {
    c = g;
    const v = a = {};
    return i == null || b.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, s = Ts(), _ = g, t.set(i = c), Promise.resolve()) : (b.soft && (u = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), f = 0), r || (s = Ts(), d = !1, r = l1((p) => {
      if (d) return d = !1, r = null, !1;
      f = Math.min(f + u, 1);
      const q = { inv_mass: f, opts: h, settled: !0, dt: 60 * (p - s) / 1e3 }, L = Ho(q, _, i, c);
      return s = p, _ = i, t.set(i = L), q.settled && (r = null), !q.settled;
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
  SvelteComponent: r1,
  append: ft,
  attr: ee,
  component_subscribe: $s,
  detach: _1,
  element: c1,
  init: u1,
  insert: f1,
  noop: Ns,
  safe_not_equal: d1,
  set_style: ji,
  svg_element: dt,
  toggle_class: Os
} = window.__gradio__svelte__internal, { onMount: h1 } = window.__gradio__svelte__internal;
function m1(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u;
  return {
    c() {
      e = c1("div"), t = dt("svg"), n = dt("g"), l = dt("path"), o = dt("path"), s = dt("path"), r = dt("path"), a = dt("g"), _ = dt("path"), c = dt("path"), f = dt("path"), u = dt("path"), ee(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ee(l, "fill", "#FF7C00"), ee(l, "fill-opacity", "0.4"), ee(l, "class", "svelte-43sxxs"), ee(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ee(o, "fill", "#FF7C00"), ee(o, "class", "svelte-43sxxs"), ee(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ee(s, "fill", "#FF7C00"), ee(s, "fill-opacity", "0.4"), ee(s, "class", "svelte-43sxxs"), ee(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ee(r, "fill", "#FF7C00"), ee(r, "class", "svelte-43sxxs"), ji(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ee(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ee(_, "fill", "#FF7C00"), ee(_, "fill-opacity", "0.4"), ee(_, "class", "svelte-43sxxs"), ee(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ee(c, "fill", "#FF7C00"), ee(c, "class", "svelte-43sxxs"), ee(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ee(f, "fill", "#FF7C00"), ee(f, "fill-opacity", "0.4"), ee(f, "class", "svelte-43sxxs"), ee(u, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ee(u, "fill", "#FF7C00"), ee(u, "class", "svelte-43sxxs"), ji(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ee(t, "viewBox", "-1200 -1200 3000 3000"), ee(t, "fill", "none"), ee(t, "xmlns", "http://www.w3.org/2000/svg"), ee(t, "class", "svelte-43sxxs"), ee(e, "class", "svelte-43sxxs"), Os(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      f1(d, e, m), ft(e, t), ft(t, n), ft(n, l), ft(n, o), ft(n, s), ft(n, r), ft(t, a), ft(a, _), ft(a, c), ft(a, f), ft(a, u);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && ji(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && ji(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && Os(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Ns,
    o: Ns,
    d(d) {
      d && _1(e);
    }
  };
}
function g1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(d, m, h, g) {
    function b(v) {
      return v instanceof h ? v : new h(function(p) {
        p(v);
      });
    }
    return new (h || (h = Promise))(function(v, p) {
      function q(y) {
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
        y.done ? v(y.value) : b(y.value).then(q, L);
      }
      B((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = Vs([0, 0]);
  $s(i, r, (d) => t(1, n = d));
  const a = Vs([0, 0]);
  $s(i, a, (d) => t(2, l = d));
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
  return h1(() => (u(), () => _ = !0)), i.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, l, r, a];
}
class b1 extends r1 {
  constructor(e) {
    super(), u1(this, e, g1, m1, d1, { margin: 0 });
  }
}
const {
  SvelteComponent: p1,
  append: bn,
  attr: bt,
  binding_callbacks: Ps,
  check_outros: To,
  create_component: Rr,
  create_slot: Ar,
  destroy_component: Wr,
  destroy_each: Xr,
  detach: $,
  element: St,
  empty: Jn,
  ensure_array_like: ul,
  get_all_dirty_from_scope: Yr,
  get_slot_changes: Ir,
  group_outros: Fo,
  init: w1,
  insert: N,
  mount_component: jr,
  noop: Uo,
  safe_not_equal: v1,
  set_data: st,
  set_style: xt,
  space: ot,
  text: ue,
  toggle_class: tt,
  transition_in: gt,
  transition_out: qt,
  update_slot_base: Hr
} = window.__gradio__svelte__internal, { tick: k1 } = window.__gradio__svelte__internal, { onDestroy: C1 } = window.__gradio__svelte__internal, { createEventDispatcher: y1 } = window.__gradio__svelte__internal, S1 = (i) => ({}), Ks = (i) => ({}), q1 = (i) => ({}), Zs = (i) => ({});
function Gs(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Js(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function z1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new Cl({
    props: {
      Icon: vr,
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
  ), c = Ar(
    _,
    i,
    /*$$scope*/
    i[29],
    Ks
  );
  return {
    c() {
      e = St("div"), Rr(t.$$.fragment), n = ot(), l = St("span"), s = ue(o), r = ot(), c && c.c(), bt(e, "class", "clear-status svelte-16nch4a"), bt(l, "class", "error svelte-16nch4a");
    },
    m(f, u) {
      N(f, e, u), jr(t, e, null), N(f, n, u), N(f, l, u), bn(l, s), N(f, r, u), c && c.m(f, u), a = !0;
    },
    p(f, u) {
      const d = {};
      u[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      f[1]("common.clear")), t.$set(d), (!a || u[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      f[1]("common.error") + "") && st(s, o), c && c.p && (!a || u[0] & /*$$scope*/
      536870912) && Hr(
        c,
        _,
        f,
        /*$$scope*/
        f[29],
        a ? Ir(
          _,
          /*$$scope*/
          f[29],
          u,
          S1
        ) : Yr(
          /*$$scope*/
          f[29]
        ),
        Ks
      );
    },
    i(f) {
      a || (gt(t.$$.fragment, f), gt(c, f), a = !0);
    },
    o(f) {
      qt(t.$$.fragment, f), qt(c, f), a = !1;
    },
    d(f) {
      f && ($(e), $(n), $(l), $(r)), Wr(t), c && c.d(f);
    }
  };
}
function B1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Qs(i)
  );
  function f(p, q) {
    if (
      /*progress*/
      p[7]
    ) return M1;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return L1;
    if (
      /*queue_position*/
      p[2] === 0
    ) return D1;
  }
  let u = f(i), d = u && u(i), m = (
    /*timer*/
    i[5] && ta(i)
  );
  const h = [W1, A1], g = [];
  function b(p, q) {
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
  i[5] && ra(i);
  return {
    c() {
      c && c.c(), e = ot(), t = St("div"), d && d.c(), n = ot(), m && m.c(), l = ot(), s && s.c(), r = ot(), v && v.c(), a = Jn(), bt(t, "class", "progress-text svelte-16nch4a"), tt(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), tt(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, q) {
      c && c.m(p, q), N(p, e, q), N(p, t, q), d && d.m(t, null), bn(t, n), m && m.m(t, null), N(p, l, q), ~o && g[o].m(p, q), N(p, r, q), v && v.m(p, q), N(p, a, q), _ = !0;
    },
    p(p, q) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? c ? c.p(p, q) : (c = Qs(p), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), u === (u = f(p)) && d ? d.p(p, q) : (d && d.d(1), d = u && u(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? m ? m.p(p, q) : (m = ta(p), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!_ || q[0] & /*variant*/
      256) && tt(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!_ || q[0] & /*variant*/
      256) && tt(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let L = o;
      o = b(p), o === L ? ~o && g[o].p(p, q) : (s && (Fo(), qt(g[L], 1, 1, () => {
        g[L] = null;
      }), To()), ~o ? (s = g[o], s ? s.p(p, q) : (s = g[o] = h[o](p), s.c()), gt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? v && (Fo(), qt(v, 1, 1, () => {
        v = null;
      }), To()) : v ? (v.p(p, q), q[0] & /*timer*/
      32 && gt(v, 1)) : (v = ra(p), v.c(), gt(v, 1), v.m(a.parentNode, a));
    },
    i(p) {
      _ || (gt(s), gt(v), _ = !0);
    },
    o(p) {
      qt(s), qt(v), _ = !1;
    },
    d(p) {
      p && ($(e), $(t), $(l), $(r), $(a)), c && c.d(p), d && d.d(), m && m.d(), ~o && g[o].d(p), v && v.d(p);
    }
  };
}
function Qs(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = St("div"), bt(e, "class", "eta-bar svelte-16nch4a"), xt(e, "transform", t);
    },
    m(n, l) {
      N(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && xt(e, "transform", t);
    },
    d(n) {
      n && $(e);
    }
  };
}
function D1(i) {
  let e;
  return {
    c() {
      e = ue("processing |");
    },
    m(t, n) {
      N(t, e, n);
    },
    p: Uo,
    d(t) {
      t && $(e);
    }
  };
}
function L1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = ue("queue: "), n = ue(t), l = ue("/"), o = ue(
        /*queue_size*/
        i[3]
      ), s = ue(" |");
    },
    m(r, a) {
      N(r, e, a), N(r, n, a), N(r, l, a), N(r, o, a), N(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && st(n, t), a[0] & /*queue_size*/
      8 && st(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && ($(e), $(n), $(l), $(o), $(s));
    }
  };
}
function M1(i) {
  let e, t = ul(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ea(Js(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Jn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      N(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = ul(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Js(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ea(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && $(e), Xr(n, l);
    }
  };
}
function xs(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, f) {
    return (
      /*p*/
      c[41].length != null ? R1 : E1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = ot(), n = ue(t), l = ue(" | "), s = ue(o);
    },
    m(c, f) {
      _.m(c, f), N(c, e, f), N(c, n, f), N(c, l, f), N(c, s, f);
    },
    p(c, f) {
      a === (a = r(c)) && _ ? _.p(c, f) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), f[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && st(n, t);
    },
    d(c) {
      c && ($(e), $(n), $(l), $(s)), _.d(c);
    }
  };
}
function E1(i) {
  let e = Fn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ue(e);
    },
    m(n, l) {
      N(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Fn(
        /*p*/
        n[41].index || 0
      ) + "") && st(t, e);
    },
    d(n) {
      n && $(t);
    }
  };
}
function R1(i) {
  let e = Fn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Fn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = ue(e), n = ue("/"), o = ue(l);
    },
    m(s, r) {
      N(s, t, r), N(s, n, r), N(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Fn(
        /*p*/
        s[41].index || 0
      ) + "") && st(t, e), r[0] & /*progress*/
      128 && l !== (l = Fn(
        /*p*/
        s[41].length
      ) + "") && st(o, l);
    },
    d(s) {
      s && ($(t), $(n), $(o));
    }
  };
}
function ea(i) {
  let e, t = (
    /*p*/
    i[41].index != null && xs(i)
  );
  return {
    c() {
      t && t.c(), e = Jn();
    },
    m(n, l) {
      t && t.m(n, l), N(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = xs(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && $(e), t && t.d(n);
    }
  };
}
function ta(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = ue(
        /*formatted_timer*/
        i[20]
      ), n = ue(t), l = ue("s");
    },
    m(o, s) {
      N(o, e, s), N(o, n, s), N(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && st(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && st(n, t);
    },
    d(o) {
      o && ($(e), $(n), $(l));
    }
  };
}
function A1(i) {
  let e, t;
  return e = new b1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Rr(e.$$.fragment);
    },
    m(n, l) {
      jr(e, n, l), t = !0;
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
      qt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wr(e, n);
    }
  };
}
function W1(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && na(i)
  );
  return {
    c() {
      e = St("div"), t = St("div"), r && r.c(), n = ot(), l = St("div"), o = St("div"), bt(t, "class", "progress-level-inner svelte-16nch4a"), bt(o, "class", "progress-bar svelte-16nch4a"), xt(o, "width", s), bt(l, "class", "progress-bar-wrap svelte-16nch4a"), bt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      N(a, e, _), bn(e, t), r && r.m(t, null), bn(e, n), bn(e, l), bn(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = na(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && xt(o, "width", s);
    },
    i: Uo,
    o: Uo,
    d(a) {
      a && $(e), r && r.d(), i[31](null);
    }
  };
}
function na(i) {
  let e, t = ul(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = aa(Gs(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Jn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      N(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = ul(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Gs(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = aa(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && $(e), Xr(n, l);
    }
  };
}
function ia(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && X1()
  ), s = (
    /*p*/
    i[41].desc != null && la(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && oa()
  ), a = (
    /*progress_level*/
    i[14] != null && sa(i)
  );
  return {
    c() {
      o && o.c(), e = ot(), s && s.c(), t = ot(), r && r.c(), n = ot(), a && a.c(), l = Jn();
    },
    m(_, c) {
      o && o.m(_, c), N(_, e, c), s && s.m(_, c), N(_, t, c), r && r.m(_, c), N(_, n, c), a && a.m(_, c), N(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = la(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = oa(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = sa(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && ($(e), $(t), $(n), $(l)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function X1(i) {
  let e;
  return {
    c() {
      e = ue(" /");
    },
    m(t, n) {
      N(t, e, n);
    },
    d(t) {
      t && $(e);
    }
  };
}
function la(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = ue(e);
    },
    m(n, l) {
      N(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && st(t, e);
    },
    d(n) {
      n && $(t);
    }
  };
}
function oa(i) {
  let e;
  return {
    c() {
      e = ue("-");
    },
    m(t, n) {
      N(t, e, n);
    },
    d(t) {
      t && $(e);
    }
  };
}
function sa(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ue(e), n = ue("%");
    },
    m(l, o) {
      N(l, t, o), N(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && st(t, e);
    },
    d(l) {
      l && ($(t), $(n));
    }
  };
}
function aa(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && ia(i)
  );
  return {
    c() {
      t && t.c(), e = Jn();
    },
    m(n, l) {
      t && t.m(n, l), N(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = ia(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && $(e), t && t.d(n);
    }
  };
}
function ra(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Ar(
    o,
    i,
    /*$$scope*/
    i[29],
    Zs
  );
  return {
    c() {
      e = St("p"), t = ue(
        /*loading_text*/
        i[9]
      ), n = ot(), s && s.c(), bt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      N(r, e, a), bn(e, t), N(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && st(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && Hr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? Ir(
          o,
          /*$$scope*/
          r[29],
          a,
          q1
        ) : Yr(
          /*$$scope*/
          r[29]
        ),
        Zs
      );
    },
    i(r) {
      l || (gt(s, r), l = !0);
    },
    o(r) {
      qt(s, r), l = !1;
    },
    d(r) {
      r && ($(e), $(n)), s && s.d(r);
    }
  };
}
function Y1(i) {
  let e, t, n, l, o;
  const s = [B1, z1], r = [];
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
      e = St("div"), n && n.c(), bt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), tt(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), tt(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), tt(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), tt(
        e,
        "border",
        /*border*/
        i[12]
      ), xt(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), xt(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(_, c) {
      N(_, e, c), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(_, c) {
      let f = t;
      t = a(_), t === f ? ~t && r[t].p(_, c) : (n && (Fo(), qt(r[f], 1, 1, () => {
        r[f] = null;
      }), To()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), gt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && bt(e, "class", l), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && tt(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && tt(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && tt(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && tt(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && xt(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && xt(
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
      qt(n), o = !1;
    },
    d(_) {
      _ && $(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var I1 = function(i, e, t, n) {
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
let Hi = [], _o = !1;
function j1(i) {
  return I1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Hi.push(e), !_o) _o = !0;
      else return;
      yield k1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Hi.length; l++) {
          const s = Hi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), _o = !1, Hi = [];
      });
    }
  });
}
function H1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = y1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: f } = e, { scroll_to_output: u = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: q = !1 } = e, { border: L = !1 } = e, { autoscroll: B } = e, y, w = !1, R = 0, C = 0, S = null, E = null, O = 0, K = null, z, F = null, T = !0;
  const X = () => {
    t(0, a = t(27, S = t(19, V = null))), t(25, R = performance.now()), t(26, C = 0), w = !0, G();
  };
  function G() {
    requestAnimationFrame(() => {
      t(26, C = (performance.now() - R) / 1e3), w && G();
    });
  }
  function W() {
    t(26, C = 0), t(0, a = t(27, S = t(19, V = null))), w && (w = !1);
  }
  C1(() => {
    w && W();
  });
  let V = null;
  function Z(I) {
    Ps[I ? "unshift" : "push"](() => {
      F = I, t(16, F), t(7, g), t(14, K), t(15, z);
    });
  }
  const be = () => {
    s("clear_status");
  };
  function de(I) {
    Ps[I ? "unshift" : "push"](() => {
      y = I, t(13, y);
    });
  }
  return i.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, _ = I.queue_position), "queue_size" in I && t(3, c = I.queue_size), "status" in I && t(4, f = I.status), "scroll_to_output" in I && t(22, u = I.scroll_to_output), "timer" in I && t(5, d = I.timer), "show_progress" in I && t(6, m = I.show_progress), "message" in I && t(23, h = I.message), "progress" in I && t(7, g = I.progress), "variant" in I && t(8, b = I.variant), "loading_text" in I && t(9, v = I.loading_text), "absolute" in I && t(10, p = I.absolute), "translucent" in I && t(11, q = I.translucent), "border" in I && t(12, L = I.border), "autoscroll" in I && t(24, B = I.autoscroll), "$$scope" in I && t(29, o = I.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = S), a != null && S !== a && (t(28, E = (performance.now() - R) / 1e3 + a), t(19, V = E.toFixed(1)), t(27, S = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, O = E === null || E <= 0 || !C ? null : Math.min(C / E, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, T = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, K = g.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, K = null), K ? (t(15, z = K[K.length - 1]), F && (z === 0 ? t(16, F.style.transition = "0", F) : t(16, F.style.transition = "150ms", F))) : t(15, z = void 0)), i.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? X() : W()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && y && u && (f === "pending" || f === "complete") && j1(y, B), i.$$.dirty[0] & /*status, message*/
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
    q,
    L,
    y,
    K,
    z,
    F,
    O,
    T,
    V,
    n,
    s,
    u,
    h,
    B,
    R,
    C,
    S,
    E,
    o,
    l,
    Z,
    be,
    de
  ];
}
class T1 extends p1 {
  constructor(e) {
    super(), w1(
      this,
      e,
      H1,
      Y1,
      v1,
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
  SvelteComponent: r6,
  add_render_callback: _6,
  append: c6,
  attr: u6,
  bubble: f6,
  check_outros: d6,
  create_component: h6,
  create_in_transition: m6,
  create_out_transition: g6,
  destroy_component: b6,
  detach: p6,
  element: w6,
  group_outros: v6,
  init: k6,
  insert: C6,
  listen: y6,
  mount_component: S6,
  run_all: q6,
  safe_not_equal: z6,
  set_data: B6,
  space: D6,
  stop_propagation: L6,
  text: M6,
  transition_in: E6,
  transition_out: R6
} = window.__gradio__svelte__internal, { createEventDispatcher: A6, onMount: W6 } = window.__gradio__svelte__internal, {
  SvelteComponent: X6,
  append: Y6,
  attr: I6,
  bubble: j6,
  check_outros: H6,
  create_animation: T6,
  create_component: F6,
  destroy_component: U6,
  detach: V6,
  element: $6,
  ensure_array_like: N6,
  fix_and_outro_and_destroy_block: O6,
  fix_position: P6,
  group_outros: K6,
  init: Z6,
  insert: G6,
  mount_component: J6,
  noop: Q6,
  safe_not_equal: x6,
  set_style: e8,
  space: t8,
  transition_in: n8,
  transition_out: i8,
  update_keyed_each: l8
} = window.__gradio__svelte__internal, { setContext: o8, getContext: F1 } = window.__gradio__svelte__internal, U1 = "WORKER_PROXY_CONTEXT_KEY";
function Tr() {
  return F1(U1);
}
function V1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Fr(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function Ur(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!V1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function $1(i) {
  if (i == null || !Ur(i))
    return i;
  const e = Tr();
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
      type: Fr(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: N1,
  assign: fl,
  check_outros: Vr,
  compute_rest_props: _a,
  create_slot: ts,
  detach: Bl,
  element: $r,
  empty: Nr,
  exclude_internal_props: O1,
  get_all_dirty_from_scope: ns,
  get_slot_changes: is,
  get_spread_update: Or,
  group_outros: Pr,
  init: P1,
  insert: Dl,
  listen: Kr,
  prevent_default: K1,
  safe_not_equal: Z1,
  set_attributes: dl,
  transition_in: yn,
  transition_out: Sn,
  update_slot_base: ls
} = window.__gradio__svelte__internal, { createEventDispatcher: G1 } = window.__gradio__svelte__internal;
function J1(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = ts(
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
    _ = fl(_, a[c]);
  return {
    c() {
      e = $r("a"), r && r.c(), dl(e, _);
    },
    m(c, f) {
      Dl(c, e, f), r && r.m(e, null), n = !0, l || (o = Kr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, f) {
      r && r.p && (!n || f & /*$$scope*/
      128) && ls(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? is(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ns(
          /*$$scope*/
          c[7]
        ),
        null
      ), dl(e, _ = Or(a, [
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
      n || (yn(r, c), n = !0);
    },
    o(c) {
      Sn(r, c), n = !1;
    },
    d(c) {
      c && Bl(e), r && r.d(c), l = !1, o();
    }
  };
}
function Q1(i) {
  let e, t, n, l;
  const o = [eh, x1], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Nr();
    },
    m(a, _) {
      s[e].m(a, _), Dl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Pr(), Sn(s[c], 1, 1, () => {
        s[c] = null;
      }), Vr(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), yn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (yn(t), l = !0);
    },
    o(a) {
      Sn(t), l = !1;
    },
    d(a) {
      a && Bl(n), s[e].d(a);
    }
  };
}
function x1(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = ts(
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
    a = fl(a, r[_]);
  return {
    c() {
      e = $r("a"), s && s.c(), dl(e, a);
    },
    m(_, c) {
      Dl(_, e, c), s && s.m(e, null), t = !0, n || (l = Kr(e, "click", K1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && ls(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? is(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : ns(
          /*$$scope*/
          _[7]
        ),
        null
      ), dl(e, a = Or(r, [
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
      t || (yn(s, _), t = !0);
    },
    o(_) {
      Sn(s, _), t = !1;
    },
    d(_) {
      _ && Bl(e), s && s.d(_), n = !1, l();
    }
  };
}
function eh(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = ts(
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
      128) && ls(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? is(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : ns(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (yn(n, l), e = !0);
    },
    o(l) {
      Sn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function th(i) {
  let e, t, n, l, o;
  const s = [Q1, J1], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && Ur(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = Nr();
    },
    m(_, c) {
      r[t].m(_, c), Dl(_, l, c), o = !0;
    },
    p(_, [c]) {
      let f = t;
      t = a(_, c), t === f ? r[t].p(_, c) : (Pr(), Sn(r[f], 1, 1, () => {
        r[f] = null;
      }), Vr(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), yn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (yn(n), o = !0);
    },
    o(_) {
      Sn(n), o = !1;
    },
    d(_) {
      _ && Bl(l), r[t].d(_);
    }
  };
}
function nh(i, e, t) {
  const n = ["href", "download"];
  let l = _a(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(m, h, g, b) {
    function v(p) {
      return p instanceof g ? p : new g(function(q) {
        q(p);
      });
    }
    return new (g || (g = Promise))(function(p, q) {
      function L(w) {
        try {
          y(b.next(w));
        } catch (R) {
          q(R);
        }
      }
      function B(w) {
        try {
          y(b.throw(w));
        } catch (R) {
          q(R);
        }
      }
      function y(w) {
        w.done ? p(w.value) : v(w.value).then(L, B);
      }
      y((b = b.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = G1();
  let f = !1;
  const u = Tr();
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
            type: Fr(g.headers, "content-type")
          }
        ), v = URL.createObjectURL(b), p = document.createElement("a");
        p.href = v, p.download = _, p.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, f = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = fl(fl({}, e), O1(m)), t(6, l = _a(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, _ = m.download), "$$scope" in m && t(7, s = m.$$scope);
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
class ih extends N1 {
  constructor(e) {
    super(), P1(this, e, nh, th, Z1, { href: 0, download: 1 });
  }
}
var lh = Object.defineProperty, oh = (i, e, t) => e in i ? lh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Lt = (i, e, t) => (oh(i, typeof e != "symbol" ? e + "" : e, t), t), Zr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, ri = (i, e, t) => (Zr(i, e, "read from private field"), e.get(i)), sh = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, ah = (i, e, t, n) => (Zr(i, e, "write to private field"), e.set(i, t), t), Zt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Gr(i, e) {
  return i.map(
    (t) => new rh({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class rh {
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
    Lt(this, "path"), Lt(this, "url"), Lt(this, "orig_name"), Lt(this, "size"), Lt(this, "blob"), Lt(this, "is_stream"), Lt(this, "mime_type"), Lt(this, "alt_text"), Lt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class s8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ri(this, Zt) + t; ; ) {
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
        ah(this, Zt, t);
      },
      flush: (t) => {
        if (ri(this, Zt) === "")
          return;
        const n = e.allowCR && ri(this, Zt).endsWith("\r") ? ri(this, Zt).slice(0, -1) : ri(this, Zt);
        t.enqueue(n);
      }
    }), sh(this, Zt, "");
  }
}
Zt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: _h,
  append: He,
  attr: hn,
  detach: Jr,
  element: mn,
  init: ch,
  insert: Qr,
  noop: ca,
  safe_not_equal: uh,
  set_data: hl,
  set_style: co,
  space: Vo,
  text: Un,
  toggle_class: ua
} = window.__gradio__svelte__internal, { onMount: fh, createEventDispatcher: dh, onDestroy: hh } = window.__gradio__svelte__internal;
function fa(i) {
  let e, t, n, l, o = pi(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), f;
  return {
    c() {
      e = mn("div"), t = mn("span"), n = mn("div"), l = mn("progress"), s = Un(o), a = Vo(), _ = mn("span"), f = Un(c), co(l, "visibility", "hidden"), co(l, "height", "0"), co(l, "width", "0"), l.value = r = pi(
        /*file_to_display*/
        i[2]
      ), hn(l, "max", "100"), hn(l, "class", "svelte-cr2edf"), hn(n, "class", "progress-bar svelte-cr2edf"), hn(_, "class", "file-name svelte-cr2edf"), hn(e, "class", "file svelte-cr2edf");
    },
    m(u, d) {
      Qr(u, e, d), He(e, t), He(t, n), He(n, l), He(l, s), He(e, a), He(e, _), He(_, f);
    },
    p(u, d) {
      d & /*file_to_display*/
      4 && o !== (o = pi(
        /*file_to_display*/
        u[2]
      ) + "") && hl(s, o), d & /*file_to_display*/
      4 && r !== (r = pi(
        /*file_to_display*/
        u[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      u[2].orig_name + "") && hl(f, c);
    },
    d(u) {
      u && Jr(e);
    }
  };
}
function mh(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, f = (
    /*file_to_display*/
    i[2] && fa(i)
  );
  return {
    c() {
      e = mn("div"), t = mn("span"), n = Un("Uploading "), o = Un(l), s = Vo(), a = Un(r), _ = Un("..."), c = Vo(), f && f.c(), hn(t, "class", "uploading svelte-cr2edf"), hn(e, "class", "wrap svelte-cr2edf"), ua(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(u, d) {
      Qr(u, e, d), He(e, t), He(t, n), He(t, o), He(t, s), He(t, a), He(t, _), He(e, c), f && f.m(e, null);
    },
    p(u, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      u[0].length + "") && hl(o, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      u[0].length > 1 ? "files" : "file") && hl(a, r), /*file_to_display*/
      u[2] ? f ? f.p(u, d) : (f = fa(u), f.c(), f.m(e, null)) : f && (f.d(1), f = null), d & /*progress*/
      2 && ua(
        e,
        "progress",
        /*progress*/
        u[1]
      );
    },
    i: ca,
    o: ca,
    d(u) {
      u && Jr(e), f && f.d();
    }
  };
}
function pi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function gh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += pi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function bh(i, e, t) {
  var n = this && this.__awaiter || function(h, g, b, v) {
    function p(q) {
      return q instanceof b ? q : new b(function(L) {
        L(q);
      });
    }
    return new (b || (b = Promise))(function(q, L) {
      function B(R) {
        try {
          w(v.next(R));
        } catch (C) {
          L(C);
        }
      }
      function y(R) {
        try {
          w(v.throw(R));
        } catch (C) {
          L(C);
        }
      }
      function w(R) {
        R.done ? q(R.value) : p(R.value).then(B, y);
      }
      w((v = v.apply(h, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, f, u = s.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = dh();
  function m(h, g) {
    t(0, u = u.map((b) => (b.orig_name === h && (b.progress += g), b)));
  }
  return fh(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        _ || t(1, _ = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), hh(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, o = h.root), "files" in h && t(5, s = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && gh(u), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class ph extends _h {
  constructor(e) {
    super(), ch(this, e, bh, mh, uh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: wh,
  append: da,
  attr: Be,
  binding_callbacks: vh,
  bubble: sn,
  check_outros: xr,
  create_component: kh,
  create_slot: e_,
  destroy_component: Ch,
  detach: Ll,
  element: $o,
  empty: t_,
  get_all_dirty_from_scope: n_,
  get_slot_changes: i_,
  group_outros: l_,
  init: yh,
  insert: Ml,
  listen: $e,
  mount_component: Sh,
  prevent_default: an,
  run_all: qh,
  safe_not_equal: zh,
  set_style: o_,
  space: Bh,
  stop_propagation: rn,
  toggle_class: Ce,
  transition_in: en,
  transition_out: qn,
  update_slot_base: s_
} = window.__gradio__svelte__internal, { createEventDispatcher: Dh, tick: Lh } = window.__gradio__svelte__internal;
function Mh(i) {
  let e, t, n, l, o, s, r, a, _, c, f;
  const u = (
    /*#slots*/
    i[26].default
  ), d = e_(
    u,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = $o("button"), d && d.c(), t = Bh(), n = $o("input"), Be(n, "aria-label", "file upload"), Be(n, "data-testid", "file-upload"), Be(n, "type", "file"), Be(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, Be(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), Be(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Be(n, "class", "svelte-1s26xmt"), Be(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Be(e, "class", "svelte-1s26xmt"), Ce(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Ce(
        e,
        "center",
        /*center*/
        i[4]
      ), Ce(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Ce(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Ce(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), o_(e, "height", "100%");
    },
    m(m, h) {
      Ml(m, e, h), d && d.m(e, null), da(e, t), da(e, n), i[34](n), _ = !0, c || (f = [
        $e(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        $e(e, "drag", rn(an(
          /*drag_handler*/
          i[27]
        ))),
        $e(e, "dragstart", rn(an(
          /*dragstart_handler*/
          i[28]
        ))),
        $e(e, "dragend", rn(an(
          /*dragend_handler*/
          i[29]
        ))),
        $e(e, "dragover", rn(an(
          /*dragover_handler*/
          i[30]
        ))),
        $e(e, "dragenter", rn(an(
          /*dragenter_handler*/
          i[31]
        ))),
        $e(e, "dragleave", rn(an(
          /*dragleave_handler*/
          i[32]
        ))),
        $e(e, "drop", rn(an(
          /*drop_handler*/
          i[33]
        ))),
        $e(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        $e(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        $e(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        $e(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!_ || h[0] & /*$$scope*/
      33554432) && s_(
        d,
        u,
        m,
        /*$$scope*/
        m[25],
        _ ? i_(
          u,
          /*$$scope*/
          m[25],
          h,
          null
        ) : n_(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!_ || h[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      m[16] || void 0)) && Be(n, "accept", l), (!_ || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = o), (!_ || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "directory" || void 0)) && Be(n, "webkitdirectory", s), (!_ || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && Be(n, "mozdirectory", r), (!_ || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && Be(e, "tabindex", a), (!_ || h[0] & /*hidden*/
      512) && Ce(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!_ || h[0] & /*center*/
      16) && Ce(
        e,
        "center",
        /*center*/
        m[4]
      ), (!_ || h[0] & /*boundedheight*/
      8) && Ce(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!_ || h[0] & /*flex*/
      32) && Ce(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!_ || h[0] & /*disable_click*/
      128) && Ce(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      _ || (en(d, m), _ = !0);
    },
    o(m) {
      qn(d, m), _ = !1;
    },
    d(m) {
      m && Ll(e), d && d.d(m), i[34](null), c = !1, qh(f);
    }
  };
}
function Eh(i) {
  let e, t, n = !/*hidden*/
  i[9] && ha(i);
  return {
    c() {
      n && n.c(), e = t_();
    },
    m(l, o) {
      n && n.m(l, o), Ml(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (l_(), qn(n, 1, 1, () => {
        n = null;
      }), xr()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && en(n, 1)) : (n = ha(l), n.c(), en(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (en(n), t = !0);
    },
    o(l) {
      qn(n), t = !1;
    },
    d(l) {
      l && Ll(e), n && n.d(l);
    }
  };
}
function Rh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = e_(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = $o("button"), r && r.c(), Be(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Be(e, "class", "svelte-1s26xmt"), Ce(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Ce(
        e,
        "center",
        /*center*/
        i[4]
      ), Ce(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Ce(
        e,
        "flex",
        /*flex*/
        i[5]
      ), o_(e, "height", "100%");
    },
    m(a, _) {
      Ml(a, e, _), r && r.m(e, null), n = !0, l || (o = $e(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && s_(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? i_(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : n_(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || _[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Be(e, "tabindex", t), (!n || _[0] & /*hidden*/
      512) && Ce(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || _[0] & /*center*/
      16) && Ce(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || _[0] & /*boundedheight*/
      8) && Ce(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || _[0] & /*flex*/
      32) && Ce(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (en(r, a), n = !0);
    },
    o(a) {
      qn(r, a), n = !1;
    },
    d(a) {
      a && Ll(e), r && r.d(a), l = !1, o();
    }
  };
}
function ha(i) {
  let e, t;
  return e = new ph({
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
      kh(e.$$.fragment);
    },
    m(n, l) {
      Sh(e, n, l), t = !0;
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
      t || (en(e.$$.fragment, n), t = !0);
    },
    o(n) {
      qn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ch(e, n);
    }
  };
}
function Ah(i) {
  let e, t, n, l;
  const o = [Rh, Eh, Mh], s = [];
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
      t.c(), n = t_();
    },
    m(a, _) {
      s[e].m(a, _), Ml(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (l_(), qn(s[c], 1, 1, () => {
        s[c] = null;
      }), xr(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), en(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (en(t), l = !0);
    },
    o(a) {
      qn(t), l = !1;
    },
    d(a) {
      a && Ll(n), s[e].d(a);
    }
  };
}
function Wh(i, e, t) {
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
function Xh(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(M, j, J, P) {
    function se(Me) {
      return Me instanceof J ? Me : new J(function(A) {
        A(Me);
      });
    }
    return new (J || (J = Promise))(function(Me, A) {
      function Bt(rt) {
        try {
          at(P.next(rt));
        } catch (Ht) {
          A(Ht);
        }
      }
      function Ue(rt) {
        try {
          at(P.throw(rt));
        } catch (Ht) {
          A(Ht);
        }
      }
      function at(rt) {
        rt.done ? Me(rt.value) : se(rt.value).then(Bt, Ue);
      }
      at((P = P.apply(M, j || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: f = "single" } = e, { disable_click: u = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: v = !0 } = e, { max_file_size: p = null } = e, { upload: q } = e, { stream_handler: L } = e, B, y, w;
  const R = Dh(), C = ["image", "video", "audio", "text", "file"], S = (M) => M.startsWith(".") || M.endsWith("/*") ? M : C.includes(M) ? M + "/*" : "." + M;
  function E() {
    t(20, r = !r);
  }
  function O() {
    navigator.clipboard.read().then((M) => o(this, void 0, void 0, function* () {
      for (let j = 0; j < M.length; j++) {
        const J = M[j].types.find((P) => P.startsWith("image/"));
        if (J) {
          M[j].getType(J).then((P) => o(this, void 0, void 0, function* () {
            const se = new File([P], `clipboard.${J.replace("image/", "")}`);
            yield F([se]);
          }));
          break;
        }
      }
    }));
  }
  function K() {
    u || b && (t(2, b.value = "", b), b.click());
  }
  function z(M) {
    return o(this, void 0, void 0, function* () {
      yield Lh(), t(14, B = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const j = yield q(M, d, B, p ?? 1 / 0);
        return R("load", f === "single" ? j == null ? void 0 : j[0] : j), t(1, g = !1), j || [];
      } catch (j) {
        return R("error", j.message), t(1, g = !1), [];
      }
    });
  }
  function F(M) {
    return o(this, void 0, void 0, function* () {
      if (!M.length)
        return;
      let j = M.map((J) => new File([J], J instanceof File ? J.name : "file", { type: J.type }));
      return t(15, y = yield Gr(j)), yield z(y);
    });
  }
  function T(M) {
    return o(this, void 0, void 0, function* () {
      const j = M.target;
      if (j.files)
        if (h != "blob")
          yield F(Array.from(j.files));
        else {
          if (f === "single") {
            R("load", j.files[0]);
            return;
          }
          R("load", j.files);
        }
    });
  }
  function X(M) {
    return o(this, void 0, void 0, function* () {
      var j;
      if (t(20, r = !1), !(!((j = M.dataTransfer) === null || j === void 0) && j.files)) return;
      const J = Array.from(M.dataTransfer.files).filter((P) => {
        const se = "." + P.name.split(".").pop();
        return se && Wh(w, se, P.type) || (se && Array.isArray(s) ? s.includes(se) : se === s) ? !0 : (R("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield F(J);
    });
  }
  function G(M) {
    sn.call(this, i, M);
  }
  function W(M) {
    sn.call(this, i, M);
  }
  function V(M) {
    sn.call(this, i, M);
  }
  function Z(M) {
    sn.call(this, i, M);
  }
  function be(M) {
    sn.call(this, i, M);
  }
  function de(M) {
    sn.call(this, i, M);
  }
  function I(M) {
    sn.call(this, i, M);
  }
  function Se(M) {
    vh[M ? "unshift" : "push"](() => {
      b = M, t(2, b);
    });
  }
  return i.$$set = (M) => {
    "filetype" in M && t(0, s = M.filetype), "dragging" in M && t(20, r = M.dragging), "boundedheight" in M && t(3, a = M.boundedheight), "center" in M && t(4, _ = M.center), "flex" in M && t(5, c = M.flex), "file_count" in M && t(6, f = M.file_count), "disable_click" in M && t(7, u = M.disable_click), "root" in M && t(8, d = M.root), "hidden" in M && t(9, m = M.hidden), "format" in M && t(21, h = M.format), "uploading" in M && t(1, g = M.uploading), "hidden_upload" in M && t(2, b = M.hidden_upload), "show_progress" in M && t(10, v = M.show_progress), "max_file_size" in M && t(22, p = M.max_file_size), "upload" in M && t(23, q = M.upload), "stream_handler" in M && t(11, L = M.stream_handler), "$$scope" in M && t(25, l = M.$$scope);
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
    O,
    K,
    B,
    y,
    w,
    E,
    T,
    X,
    r,
    h,
    p,
    q,
    F,
    l,
    n,
    G,
    W,
    V,
    Z,
    be,
    de,
    I,
    Se
  ];
}
class Yh extends wh {
  constructor(e) {
    super(), yh(
      this,
      e,
      Xh,
      Ah,
      zh,
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
  SvelteComponent: a8,
  append: r8,
  attr: _8,
  check_outros: c8,
  create_component: u8,
  destroy_component: f8,
  detach: d8,
  element: h8,
  group_outros: m8,
  init: g8,
  insert: b8,
  mount_component: p8,
  safe_not_equal: w8,
  set_style: v8,
  space: k8,
  toggle_class: C8,
  transition_in: y8,
  transition_out: S8
} = window.__gradio__svelte__internal, { createEventDispatcher: q8 } = window.__gradio__svelte__internal, {
  SvelteComponent: z8,
  assign: B8,
  compute_rest_props: D8,
  detach: L8,
  element: M8,
  exclude_internal_props: E8,
  get_spread_update: R8,
  init: A8,
  insert: W8,
  noop: X8,
  safe_not_equal: Y8,
  set_attributes: I8,
  src_url_equal: j8,
  toggle_class: H8
} = window.__gradio__svelte__internal, {
  SvelteComponent: T8,
  append: F8,
  attr: U8,
  bubble: V8,
  check_outros: $8,
  create_component: N8,
  destroy_component: O8,
  detach: P8,
  element: K8,
  empty: Z8,
  group_outros: G8,
  init: J8,
  insert: Q8,
  listen: x8,
  mount_component: e7,
  safe_not_equal: t7,
  space: n7,
  toggle_class: i7,
  transition_in: l7,
  transition_out: o7
} = window.__gradio__svelte__internal, { createEventDispatcher: s7 } = window.__gradio__svelte__internal, {
  SvelteComponent: Ih,
  append: Ti,
  attr: uo,
  create_component: jh,
  destroy_component: Hh,
  detach: Th,
  element: fo,
  init: Fh,
  insert: Uh,
  listen: Vh,
  mount_component: $h,
  noop: Nh,
  safe_not_equal: Oh,
  set_style: Ph,
  space: Kh,
  text: Zh,
  transition_in: Gh,
  transition_out: Jh
} = window.__gradio__svelte__internal, { createEventDispatcher: Qh } = window.__gradio__svelte__internal;
function xh(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new Sr({}), {
    c() {
      e = fo("button"), t = fo("div"), n = fo("span"), jh(l.$$.fragment), o = Kh(), r = Zh(s), uo(n, "class", "icon-wrap svelte-fjcd9c"), uo(t, "class", "wrap svelte-fjcd9c"), uo(e, "class", "svelte-fjcd9c"), Ph(e, "height", "100%");
    },
    m(f, u) {
      Uh(f, e, u), Ti(e, t), Ti(t, n), $h(l, n, null), Ti(t, o), Ti(t, r), a = !0, _ || (c = Vh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: Nh,
    i(f) {
      a || (Gh(l.$$.fragment, f), a = !0);
    },
    o(f) {
      Jh(l.$$.fragment, f), a = !1;
    },
    d(f) {
      f && Th(e), Hh(l), _ = !1, c();
    }
  };
}
function em(i) {
  const e = Qh();
  return [e, () => e("click")];
}
class tm extends Ih {
  constructor(e) {
    super(), Fh(this, e, em, xh, Oh, {});
  }
}
function nm() {
  return navigator.mediaDevices.enumerateDevices();
}
function im(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function ma(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (im(o, e), o));
}
function lm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: om,
  action_destroyer: sm,
  add_render_callback: am,
  append: At,
  attr: ge,
  binding_callbacks: rm,
  check_outros: ki,
  create_component: Qn,
  create_in_transition: _m,
  destroy_component: xn,
  destroy_each: cm,
  detach: Te,
  element: Ze,
  empty: os,
  ensure_array_like: ga,
  group_outros: Ci,
  init: um,
  insert: Fe,
  listen: ml,
  mount_component: ei,
  noop: ss,
  run_all: fm,
  safe_not_equal: dm,
  set_data: a_,
  set_input_value: No,
  space: zi,
  stop_propagation: hm,
  text: r_,
  toggle_class: Fi,
  transition_in: ye,
  transition_out: De
} = window.__gradio__svelte__internal, { createEventDispatcher: mm, onMount: gm } = window.__gradio__svelte__internal;
function ba(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function bm(i) {
  let e, t, n, l, o, s, r, a, _, c, f;
  const u = [vm, wm], d = [];
  function m(b, v) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = u[n](i);
  let h = !/*recording*/
  i[8] && pa(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && wa(i)
  );
  return {
    c() {
      e = Ze("div"), t = Ze("button"), l.c(), s = zi(), h && h.c(), r = zi(), g && g.c(), a = os(), ge(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ge(t, "class", "svelte-8hqvb6"), ge(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, v) {
      Fe(b, e, v), At(e, t), d[n].m(t, null), At(e, s), h && h.m(e, null), Fe(b, r, v), g && g.m(b, v), Fe(b, a, v), _ = !0, c || (f = ml(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, v) {
      let p = n;
      n = m(b), n === p ? d[n].p(b, v) : (Ci(), De(d[p], 1, 1, () => {
        d[p] = null;
      }), ki(), l = d[n], l ? l.p(b, v) : (l = d[n] = u[n](b), l.c()), ye(l, 1), l.m(t, null)), (!_ || v[0] & /*mode*/
      2 && o !== (o = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && ge(t, "aria-label", o), /*recording*/
      b[8] ? h && (Ci(), De(h, 1, 1, () => {
        h = null;
      }), ki()) : h ? (h.p(b, v), v[0] & /*recording*/
      256 && ye(h, 1)) : (h = pa(b), h.c(), ye(h, 1), h.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, v), v[0] & /*options_open, selected_device*/
      1152 && ye(g, 1)) : (g = wa(b), g.c(), ye(g, 1), g.m(a.parentNode, a)) : g && (Ci(), De(g, 1, 1, () => {
        g = null;
      }), ki());
    },
    i(b) {
      _ || (ye(l), ye(h), ye(g), _ = !0);
    },
    o(b) {
      De(l), De(h), De(g), _ = !1;
    },
    d(b) {
      b && (Te(e), Te(r), Te(a)), d[n].d(), h && h.d(), g && g.d(b), c = !1, f();
    }
  };
}
function pm(i) {
  let e, t, n, l;
  return t = new tm({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ze("div"), Qn(t.$$.fragment), ge(e, "title", "grant webcam access");
    },
    m(o, s) {
      Fe(o, e, s), ei(t, e, null), l = !0;
    },
    p: ss,
    i(o) {
      l || (ye(t.$$.fragment, o), o && (n || am(() => {
        n = _m(e, s1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      De(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Te(e), xn(t);
    }
  };
}
function wm(i) {
  let e, t, n;
  return t = new Tu({}), {
    c() {
      e = Ze("div"), Qn(t.$$.fragment), ge(e, "class", "icon svelte-8hqvb6"), ge(e, "title", "capture photo");
    },
    m(l, o) {
      Fe(l, e, o), ei(t, e, null), n = !0;
    },
    p: ss,
    i(l) {
      n || (ye(t.$$.fragment, l), n = !0);
    },
    o(l) {
      De(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Te(e), xn(t);
    }
  };
}
function vm(i) {
  let e, t, n, l;
  const o = [Cm, km], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = os();
    },
    m(a, _) {
      s[e].m(a, _), Fe(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (Ci(), De(s[c], 1, 1, () => {
        s[c] = null;
      }), ki(), t = s[e], t || (t = s[e] = o[e](a), t.c()), ye(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ye(t), l = !0);
    },
    o(a) {
      De(t), l = !1;
    },
    d(a) {
      a && Te(n), s[e].d(a);
    }
  };
}
function km(i) {
  let e, t, n;
  return t = new Ku({}), {
    c() {
      e = Ze("div"), Qn(t.$$.fragment), ge(e, "class", "icon red svelte-8hqvb6"), ge(e, "title", "start recording");
    },
    m(l, o) {
      Fe(l, e, o), ei(t, e, null), n = !0;
    },
    i(l) {
      n || (ye(t.$$.fragment, l), n = !0);
    },
    o(l) {
      De(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Te(e), xn(t);
    }
  };
}
function Cm(i) {
  let e, t, n;
  return t = new sd({}), {
    c() {
      e = Ze("div"), Qn(t.$$.fragment), ge(e, "class", "icon red svelte-8hqvb6"), ge(e, "title", "stop recording");
    },
    m(l, o) {
      Fe(l, e, o), ei(t, e, null), n = !0;
    },
    i(l) {
      n || (ye(t.$$.fragment, l), n = !0);
    },
    o(l) {
      De(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Te(e), xn(t);
    }
  };
}
function pa(i) {
  let e, t, n, l, o;
  return t = new es({}), {
    c() {
      e = Ze("button"), Qn(t.$$.fragment), ge(e, "class", "icon svelte-8hqvb6"), ge(e, "aria-label", "select input source");
    },
    m(s, r) {
      Fe(s, e, r), ei(t, e, null), n = !0, l || (o = ml(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: ss,
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      De(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Te(e), xn(t), l = !1, o();
    }
  };
}
function wa(i) {
  let e, t, n, l, o, s, r;
  n = new es({});
  function a(f, u) {
    return (
      /*available_video_devices*/
      f[6].length === 0 ? Sm : ym
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = Ze("select"), t = Ze("button"), Qn(n.$$.fragment), l = zi(), c.c(), ge(t, "class", "inset-icon svelte-8hqvb6"), ge(e, "class", "select-wrap svelte-8hqvb6"), ge(e, "aria-label", "select source");
    },
    m(f, u) {
      Fe(f, e, u), At(e, t), ei(n, t, null), At(t, l), c.m(e, null), o = !0, s || (r = [
        ml(t, "click", hm(
          /*click_handler_2*/
          i[22]
        )),
        sm(as.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        ml(
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
      o || (ye(n.$$.fragment, f), o = !0);
    },
    o(f) {
      De(n.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Te(e), xn(n), c.d(), s = !1, fm(r);
    }
  };
}
function ym(i) {
  let e, t = ga(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = va(ba(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = os();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Fe(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = ga(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ba(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = va(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Te(e), cm(n, l);
    }
  };
}
function Sm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ze("option"), n = r_(t), e.__value = "", No(e, e.__value), ge(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      Fe(l, e, o), At(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && a_(n, t);
    },
    d(l) {
      l && Te(e);
    }
  };
}
function va(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = Ze("option"), n = r_(t), l = zi(), e.__value = o = /*device*/
      i[32].deviceId, No(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ge(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Fe(r, e, a), At(e, n), At(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && a_(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, No(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Te(e);
    }
  };
}
function qm(i) {
  let e, t, n, l, o, s;
  const r = [pm, bm], a = [];
  function _(c, f) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = Ze("div"), t = Ze("video"), n = zi(), o.c(), ge(t, "class", "svelte-8hqvb6"), Fi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Fi(t, "hide", !/*webcam_accessed*/
      i[9]), ge(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, f) {
      Fe(c, e, f), At(e, t), i[19](t), At(e, n), a[l].m(e, null), s = !0;
    },
    p(c, f) {
      (!s || f[0] & /*mirror_webcam*/
      4) && Fi(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || f[0] & /*webcam_accessed*/
      512) && Fi(t, "hide", !/*webcam_accessed*/
      c[9]);
      let u = l;
      l = _(c), l === u ? a[l].p(c, f) : (Ci(), De(a[u], 1, 1, () => {
        a[u] = null;
      }), ki(), o = a[l], o ? o.p(c, f) : (o = a[l] = r[l](c), o.c()), ye(o, 1), o.m(e, null));
    },
    i(c) {
      s || (ye(o), s = !0);
    },
    o(c) {
      De(o), s = !1;
    },
    d(c) {
      c && Te(e), i[19](null), a[l].d();
    }
  };
}
function as(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function zm(i, e, t) {
  var n = this && this.__awaiter || function(X, G, W, V) {
    function Z(be) {
      return be instanceof W ? be : new W(function(de) {
        de(be);
      });
    }
    return new (W || (W = Promise))(function(be, de) {
      function I(j) {
        try {
          M(V.next(j));
        } catch (J) {
          de(J);
        }
      }
      function Se(j) {
        try {
          M(V.throw(j));
        } catch (J) {
          de(J);
        }
      }
      function M(j) {
        j.done ? be(j.value) : Z(j.value).then(I, Se);
      }
      M((V = V.apply(X, G || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: f = "image" } = e, { mirror_webcam: u } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = mm();
  gm(() => r = document.createElement("canvas"));
  const b = (X) => n(void 0, void 0, void 0, function* () {
    const W = X.target.value;
    yield ma(d, l, W).then((V) => n(void 0, void 0, void 0, function* () {
      B = V, t(7, s = o.find((Z) => Z.deviceId === W) || null), t(10, E = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        ma(d, l).then((X) => n(this, void 0, void 0, function* () {
          t(9, C = !0), t(6, o = yield nm()), B = X;
        })).then(() => lm(o)).then((X) => {
          t(6, o = X);
          const G = B.getTracks().map((W) => {
            var V;
            return (V = W.getSettings()) === null || V === void 0 ? void 0 : V.deviceId;
          })[0];
          t(7, s = G && X.find((W) => W.deviceId === G) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (X) {
        if (X instanceof DOMException && X.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw X;
      }
    });
  }
  function p() {
    var X = r.getContext("2d");
    (!a || a && q) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, X.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), u && (X.scale(-1, 1), X.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (G) => {
        g(a ? "stream" : "capture", G);
      },
      "image/png",
      0.8
    ));
  }
  let q = !1, L = [], B, y, w;
  function R() {
    if (q) {
      w.stop();
      let X = new Blob(L, { type: y }), G = new FileReader();
      G.onload = function(W) {
        return n(this, void 0, void 0, function* () {
          var V;
          if (W.target) {
            let Z = new File([X], "sample." + y.substring(6));
            const be = yield Gr([Z]);
            let de = ((V = yield h(be, c)) === null || V === void 0 ? void 0 : V.filter(Boolean))[0];
            g("capture", de), g("stop_recording");
          }
        });
      }, G.readAsDataURL(X);
    } else {
      g("start_recording"), L = [];
      let X = ["video/webm", "video/mp4"];
      for (let G of X)
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
    t(8, q = !q);
  }
  let C = !1;
  function S() {
    f === "image" && a && t(8, q = !q), f === "image" ? p() : R(), !q && B && (B.getTracks().forEach((X) => X.stop()), t(5, l.srcObject = null, l), t(9, C = !1));
  }
  a && f === "image" && window.setInterval(
    () => {
      l && !_ && p();
    },
    500
  );
  let E = !1;
  function O(X) {
    X.preventDefault(), X.stopPropagation(), t(10, E = !1);
  }
  function K(X) {
    rm[X ? "unshift" : "push"](() => {
      l = X, t(5, l);
    });
  }
  const z = async () => v(), F = () => t(10, E = !0), T = () => t(10, E = !1);
  return i.$$set = (X) => {
    "streaming" in X && t(0, a = X.streaming), "pending" in X && t(15, _ = X.pending), "root" in X && t(16, c = X.root), "mode" in X && t(1, f = X.mode), "mirror_webcam" in X && t(2, u = X.mirror_webcam), "include_audio" in X && t(17, d = X.include_audio), "i18n" in X && t(3, m = X.i18n), "upload" in X && t(18, h = X.upload);
  }, [
    a,
    f,
    u,
    m,
    as,
    l,
    o,
    s,
    q,
    C,
    E,
    b,
    v,
    S,
    O,
    _,
    c,
    d,
    h,
    K,
    z,
    F,
    T
  ];
}
class Bm extends om {
  constructor(e) {
    super(), um(
      this,
      e,
      zm,
      qm,
      dm,
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
    return as;
  }
}
const {
  SvelteComponent: a7,
  attr: r7,
  create_component: _7,
  destroy_component: c7,
  detach: u7,
  element: f7,
  init: d7,
  insert: h7,
  mount_component: m7,
  noop: g7,
  safe_not_equal: b7,
  transition_in: p7,
  transition_out: w7
} = window.__gradio__svelte__internal, { createEventDispatcher: v7 } = window.__gradio__svelte__internal, {
  SvelteComponent: k7,
  add_flush_callback: C7,
  append: y7,
  attr: S7,
  bind: q7,
  binding_callbacks: z7,
  bubble: B7,
  check_outros: D7,
  create_component: L7,
  create_slot: M7,
  destroy_component: E7,
  detach: R7,
  element: A7,
  empty: W7,
  get_all_dirty_from_scope: X7,
  get_slot_changes: Y7,
  group_outros: I7,
  init: j7,
  insert: H7,
  listen: T7,
  mount_component: F7,
  noop: U7,
  safe_not_equal: V7,
  space: $7,
  toggle_class: N7,
  transition_in: O7,
  transition_out: P7,
  update_slot_base: K7
} = window.__gradio__svelte__internal, { createEventDispatcher: Z7, tick: G7 } = window.__gradio__svelte__internal, {
  SvelteComponent: J7,
  attr: Q7,
  check_outros: x7,
  create_component: e9,
  destroy_component: t9,
  detach: n9,
  element: i9,
  group_outros: l9,
  init: o9,
  insert: s9,
  mount_component: a9,
  safe_not_equal: r9,
  toggle_class: _9,
  transition_in: c9,
  transition_out: u9
} = window.__gradio__svelte__internal, {
  SvelteComponent: f9,
  add_flush_callback: d9,
  assign: h9,
  bind: m9,
  binding_callbacks: g9,
  check_outros: b9,
  create_component: p9,
  destroy_component: w9,
  detach: v9,
  empty: k9,
  flush: C9,
  get_spread_object: y9,
  get_spread_update: S9,
  group_outros: q9,
  init: z9,
  insert: B9,
  mount_component: D9,
  safe_not_equal: L9,
  space: M9,
  transition_in: E9,
  transition_out: R9
} = window.__gradio__svelte__internal, {
  SvelteComponent: A9,
  append: W9,
  attr: X9,
  detach: Y9,
  init: I9,
  insert: j9,
  noop: H9,
  safe_not_equal: T9,
  set_style: F9,
  svg_element: U9
} = window.__gradio__svelte__internal, {
  SvelteComponent: Dm,
  append: $t,
  attr: H,
  detach: Lm,
  init: Mm,
  insert: Em,
  noop: ho,
  safe_not_equal: Rm,
  set_style: Nt,
  svg_element: Mt
} = window.__gradio__svelte__internal;
function Am(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = Mt("svg"), t = Mt("rect"), n = Mt("rect"), l = Mt("rect"), o = Mt("rect"), s = Mt("line"), r = Mt("line"), a = Mt("line"), _ = Mt("line"), H(t, "x", "2"), H(t, "y", "2"), H(t, "width", "5"), H(t, "height", "5"), H(t, "rx", "1"), H(t, "ry", "1"), H(t, "stroke-width", "2"), H(t, "fill", "none"), H(n, "x", "17"), H(n, "y", "2"), H(n, "width", "5"), H(n, "height", "5"), H(n, "rx", "1"), H(n, "ry", "1"), H(n, "stroke-width", "2"), H(n, "fill", "none"), H(l, "x", "2"), H(l, "y", "17"), H(l, "width", "5"), H(l, "height", "5"), H(l, "rx", "1"), H(l, "ry", "1"), H(l, "stroke-width", "2"), H(l, "fill", "none"), H(o, "x", "17"), H(o, "y", "17"), H(o, "width", "5"), H(o, "height", "5"), H(o, "rx", "1"), H(o, "ry", "1"), H(o, "stroke-width", "2"), H(o, "fill", "none"), H(s, "x1", "7.5"), H(s, "y1", "4.5"), H(s, "x2", "16"), H(s, "y2", "4.5"), Nt(s, "stroke-width", "2px"), H(r, "x1", "7.5"), H(r, "y1", "19.5"), H(r, "x2", "16"), H(r, "y2", "19.5"), Nt(r, "stroke-width", "2px"), H(a, "x1", "4.5"), H(a, "y1", "8"), H(a, "x2", "4.5"), H(a, "y2", "16"), Nt(a, "stroke-width", "2px"), H(_, "x1", "19.5"), H(_, "y1", "8"), H(_, "x2", "19.5"), H(_, "y2", "16"), Nt(_, "stroke-width", "2px"), H(e, "width", "100%"), H(e, "height", "100%"), H(e, "viewBox", "0 0 24 24"), H(e, "version", "1.1"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), H(e, "xml:space", "preserve"), H(e, "stroke", "currentColor"), Nt(e, "fill-rule", "evenodd"), Nt(e, "clip-rule", "evenodd"), Nt(e, "stroke-linecap", "round"), Nt(e, "stroke-linejoin", "round");
    },
    m(c, f) {
      Em(c, e, f), $t(e, t), $t(e, n), $t(e, l), $t(e, o), $t(e, s), $t(e, r), $t(e, a), $t(e, _);
    },
    p: ho,
    i: ho,
    o: ho,
    d(c) {
      c && Lm(e);
    }
  };
}
class Wm extends Dm {
  constructor(e) {
    super(), Mm(this, e, null, Am, Rm, {});
  }
}
const {
  SvelteComponent: Xm,
  append: Ym,
  attr: ht,
  detach: Im,
  init: jm,
  insert: Hm,
  noop: mo,
  safe_not_equal: Tm,
  set_style: Ui,
  svg_element: ka
} = window.__gradio__svelte__internal;
function Fm(i) {
  let e, t;
  return {
    c() {
      e = ka("svg"), t = ka("path"), ht(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), ht(t, "fill", "none"), ht(t, "stroke-width", "2"), ht(e, "width", "100%"), ht(e, "height", "100%"), ht(e, "viewBox", "0 0 24 24"), ht(e, "version", "1.1"), ht(e, "xmlns", "http://www.w3.org/2000/svg"), ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ht(e, "xml:space", "preserve"), ht(e, "stroke", "currentColor"), Ui(e, "fill-rule", "evenodd"), Ui(e, "clip-rule", "evenodd"), Ui(e, "stroke-linecap", "round"), Ui(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Hm(n, e, l), Ym(e, t);
    },
    p: mo,
    i: mo,
    o: mo,
    d(n) {
      n && Im(e);
    }
  };
}
class Um extends Xm {
  constructor(e) {
    super(), jm(this, e, null, Fm, Tm, {});
  }
}
const {
  SvelteComponent: Vm,
  append: $m,
  attr: mt,
  detach: Nm,
  init: Om,
  insert: Pm,
  noop: go,
  safe_not_equal: Km,
  set_style: Vi,
  svg_element: Ca
} = window.__gradio__svelte__internal;
function Zm(i) {
  let e, t;
  return {
    c() {
      e = Ca("svg"), t = Ca("path"), mt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), mt(t, "fill", "none"), mt(t, "stroke-width", "2"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "version", "1.1"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), mt(e, "xml:space", "preserve"), mt(e, "stroke", "currentColor"), Vi(e, "fill-rule", "evenodd"), Vi(e, "clip-rule", "evenodd"), Vi(e, "stroke-linecap", "round"), Vi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Pm(n, e, l), $m(e, t);
    },
    p: go,
    i: go,
    o: go,
    d(n) {
      n && Nm(e);
    }
  };
}
class Gm extends Vm {
  constructor(e) {
    super(), Om(this, e, null, Zm, Km, {});
  }
}
const {
  SvelteComponent: Jm,
  append: ya,
  attr: Et,
  detach: Qm,
  init: xm,
  insert: e0,
  noop: bo,
  safe_not_equal: t0,
  set_style: $i,
  svg_element: po
} = window.__gradio__svelte__internal;
function n0(i) {
  let e, t, n;
  return {
    c() {
      e = po("svg"), t = po("path"), n = po("path"), Et(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Et(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Et(e, "width", "100%"), Et(e, "height", "100%"), Et(e, "viewBox", "0 0 24 24"), Et(e, "xmlns", "http://www.w3.org/2000/svg"), Et(e, "fill", "none"), Et(e, "stroke", "currentColor"), Et(e, "stroke-width", "2"), $i(e, "fill-rule", "evenodd"), $i(e, "clip-rule", "evenodd"), $i(e, "stroke-linecap", "round"), $i(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      e0(l, e, o), ya(e, t), ya(e, n);
    },
    p: bo,
    i: bo,
    o: bo,
    d(l) {
      l && Qm(e);
    }
  };
}
class i0 extends Jm {
  constructor(e) {
    super(), xm(this, e, null, n0, t0, {});
  }
}
const {
  SvelteComponent: l0,
  append: o0,
  attr: Ot,
  detach: s0,
  init: a0,
  insert: r0,
  noop: wo,
  safe_not_equal: _0,
  set_style: Ni,
  svg_element: Sa
} = window.__gradio__svelte__internal;
function c0(i) {
  let e, t;
  return {
    c() {
      e = Sa("svg"), t = Sa("path"), Ot(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "fill", "none"), Ot(e, "stroke", "currentColor"), Ot(e, "stroke-width", "2"), Ni(e, "fill-rule", "evenodd"), Ni(e, "clip-rule", "evenodd"), Ni(e, "stroke-linecap", "round"), Ni(e, "stroke-linejoin", "round"), Ot(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      r0(n, e, l), o0(e, t);
    },
    p: wo,
    i: wo,
    o: wo,
    d(n) {
      n && s0(e);
    }
  };
}
class u0 extends l0 {
  constructor(e) {
    super(), a0(this, e, null, c0, _0, {});
  }
}
const {
  SvelteComponent: f0,
  append: d0,
  attr: Pt,
  detach: h0,
  init: m0,
  insert: g0,
  noop: vo,
  safe_not_equal: b0,
  set_style: Oi,
  svg_element: qa
} = window.__gradio__svelte__internal;
function p0(i) {
  let e, t;
  return {
    c() {
      e = qa("svg"), t = qa("path"), Pt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Pt(e, "width", "100%"), Pt(e, "height", "100%"), Pt(e, "viewBox", "0 0 24 24"), Pt(e, "fill", "none"), Pt(e, "stroke", "currentColor"), Pt(e, "stroke-width", "2"), Oi(e, "fill-rule", "evenodd"), Oi(e, "clip-rule", "evenodd"), Oi(e, "stroke-linecap", "round"), Oi(e, "stroke-linejoin", "round"), Pt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      g0(n, e, l), d0(e, t);
    },
    p: vo,
    i: vo,
    o: vo,
    d(n) {
      n && h0(e);
    }
  };
}
class w0 extends f0 {
  constructor(e) {
    super(), m0(this, e, null, p0, b0, {});
  }
}
const {
  SvelteComponent: v0,
  append: Pi,
  attr: _e,
  detach: k0,
  init: C0,
  insert: y0,
  noop: ko,
  safe_not_equal: S0,
  set_style: xe,
  svg_element: _i
} = window.__gradio__svelte__internal;
function q0(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = _i("svg"), t = _i("circle"), n = _i("line"), l = _i("line"), o = _i("line"), _e(t, "cx", "9"), _e(t, "cy", "9"), _e(t, "r", "6"), xe(t, "fill", "none"), xe(t, "stroke-width", "2px"), _e(n, "x1", "13"), _e(n, "y1", "13"), _e(n, "x2", "20"), _e(n, "y2", "20"), xe(n, "fill", "none"), xe(n, "stroke-width", "2px"), _e(l, "x1", "6"), _e(l, "y1", "9"), _e(l, "x2", "12"), _e(l, "y2", "9"), xe(l, "fill", "none"), xe(l, "stroke-width", "2px"), _e(o, "x1", "9"), _e(o, "y1", "6"), _e(o, "x2", "9"), _e(o, "y2", "12"), xe(o, "fill", "none"), xe(o, "stroke-width", "2px"), _e(e, "width", "100%"), _e(e, "height", "100%"), _e(e, "viewBox", "0 0 24 24"), _e(e, "version", "1.1"), _e(e, "xmlns", "http://www.w3.org/2000/svg"), _e(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), _e(e, "xml:space", "preserve"), _e(e, "stroke", "currentColor"), xe(e, "fill-rule", "evenodd"), xe(e, "clip-rule", "evenodd"), xe(e, "stroke-linecap", "round"), xe(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      y0(s, e, r), Pi(e, t), Pi(e, n), Pi(e, l), Pi(e, o);
    },
    p: ko,
    i: ko,
    o: ko,
    d(s) {
      s && k0(e);
    }
  };
}
class z0 extends v0 {
  constructor(e) {
    super(), C0(this, e, null, q0, S0, {});
  }
}
const {
  SvelteComponent: B0,
  append: Co,
  attr: we,
  detach: D0,
  init: L0,
  insert: M0,
  noop: yo,
  safe_not_equal: E0,
  set_style: vt,
  svg_element: Ki
} = window.__gradio__svelte__internal;
function R0(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ki("svg"), t = Ki("circle"), n = Ki("line"), l = Ki("line"), we(t, "cx", "9"), we(t, "cy", "9"), we(t, "r", "6"), vt(t, "fill", "none"), vt(t, "stroke-width", "2px"), we(n, "x1", "13"), we(n, "y1", "13"), we(n, "x2", "20"), we(n, "y2", "20"), vt(n, "fill", "none"), vt(n, "stroke-width", "2px"), we(l, "x1", "6"), we(l, "y1", "9"), we(l, "x2", "12"), we(l, "y2", "9"), vt(l, "fill", "none"), vt(l, "stroke-width", "2px"), we(e, "width", "100%"), we(e, "height", "100%"), we(e, "viewBox", "0 0 24 24"), we(e, "version", "1.1"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), we(e, "xml:space", "preserve"), we(e, "stroke", "currentColor"), vt(e, "fill-rule", "evenodd"), vt(e, "clip-rule", "evenodd"), vt(e, "stroke-linecap", "round"), vt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      M0(o, e, s), Co(e, t), Co(e, n), Co(e, l);
    },
    p: yo,
    i: yo,
    o: yo,
    d(o) {
      o && D0(e);
    }
  };
}
class A0 extends B0 {
  constructor(e) {
    super(), L0(this, e, null, R0, E0, {});
  }
}
const {
  SvelteComponent: W0,
  append: So,
  attr: Xe,
  detach: X0,
  init: Y0,
  insert: I0,
  noop: qo,
  safe_not_equal: j0,
  set_style: kt,
  svg_element: Zi
} = window.__gradio__svelte__internal;
function H0(i) {
  let e, t, n, l;
  return {
    c() {
      e = Zi("svg"), t = Zi("rect"), n = Zi("path"), l = Zi("path"), Xe(t, "x", "3"), Xe(t, "y", "3"), Xe(t, "width", "18"), Xe(t, "height", "18"), kt(t, "fill", "none"), kt(t, "stroke-width", "2px"), Xe(n, "d", "M 7 7 L 10 10 M 7 10 L 10 7"), kt(n, "fill", "none"), kt(n, "stroke-width", "2px"), Xe(l, "d", "M 14 17 L 17 14 M 14 14 L 17 17"), kt(l, "fill", "none"), kt(l, "stroke-width", "2px"), Xe(e, "width", "100%"), Xe(e, "height", "100%"), Xe(e, "viewBox", "0 0 24 24"), Xe(e, "version", "1.1"), Xe(e, "xmlns", "http://www.w3.org/2000/svg"), Xe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Xe(e, "xml:space", "preserve"), Xe(e, "stroke", "currentColor"), kt(e, "fill-rule", "evenodd"), kt(e, "clip-rule", "evenodd"), kt(e, "stroke-linecap", "round"), kt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      I0(o, e, s), So(e, t), So(e, n), So(e, l);
    },
    p: qo,
    i: qo,
    o: qo,
    d(o) {
      o && X0(e);
    }
  };
}
class T0 extends W0 {
  constructor(e) {
    super(), Y0(this, e, null, H0, j0, {});
  }
}
const {
  SvelteComponent: F0,
  append: za,
  attr: zo,
  bubble: Ba,
  create_component: U0,
  destroy_component: V0,
  detach: __,
  element: Da,
  init: $0,
  insert: c_,
  listen: Bo,
  mount_component: N0,
  run_all: O0,
  safe_not_equal: P0,
  set_data: K0,
  set_input_value: La,
  space: Z0,
  text: G0,
  transition_in: J0,
  transition_out: Q0
} = window.__gradio__svelte__internal, { createEventDispatcher: x0, afterUpdate: eg } = window.__gradio__svelte__internal;
function tg(i) {
  let e;
  return {
    c() {
      e = G0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      c_(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && K0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && __(e);
    }
  };
}
function ng(i) {
  let e, t, n, l, o, s, r;
  return t = new br({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [tg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Da("label"), U0(t.$$.fragment), n = Z0(), l = Da("input"), zo(l, "type", "color"), l.disabled = /*disabled*/
      i[3], zo(l, "class", "svelte-16l8u73"), zo(e, "class", "block");
    },
    m(a, _) {
      c_(a, e, _), N0(t, e, null), za(e, n), za(e, l), La(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        Bo(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Bo(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Bo(
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
      1 && La(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (J0(t.$$.fragment, a), o = !0);
    },
    o(a) {
      Q0(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && __(e), V0(t), s = !1, O0(r);
    }
  };
}
function ig(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = x0();
  function c() {
    _("change", n), l || _("input");
  }
  eg(() => {
    t(5, l = !1);
  });
  function f(m) {
    Ba.call(this, i, m);
  }
  function u(m) {
    Ba.call(this, i, m);
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
class lg extends F0 {
  constructor(e) {
    super(), $0(this, e, ig, ng, P0, {
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
  SvelteComponent: V9,
  append: $9,
  attr: N9,
  component_subscribe: O9,
  detach: P9,
  element: K9,
  init: Z9,
  insert: G9,
  noop: J9,
  safe_not_equal: Q9,
  set_style: x9,
  svg_element: eC,
  toggle_class: tC
} = window.__gradio__svelte__internal, { onMount: nC } = window.__gradio__svelte__internal, {
  SvelteComponent: iC,
  append: lC,
  attr: oC,
  binding_callbacks: sC,
  check_outros: aC,
  create_component: rC,
  create_slot: _C,
  destroy_component: cC,
  destroy_each: uC,
  detach: fC,
  element: dC,
  empty: hC,
  ensure_array_like: mC,
  get_all_dirty_from_scope: gC,
  get_slot_changes: bC,
  group_outros: pC,
  init: wC,
  insert: vC,
  mount_component: kC,
  noop: CC,
  safe_not_equal: yC,
  set_data: SC,
  set_style: qC,
  space: zC,
  text: BC,
  toggle_class: DC,
  transition_in: LC,
  transition_out: MC,
  update_slot_base: EC
} = window.__gradio__svelte__internal, { tick: RC } = window.__gradio__svelte__internal, { onDestroy: AC } = window.__gradio__svelte__internal, {
  SvelteComponent: WC,
  add_render_callback: XC,
  append: YC,
  attr: IC,
  bubble: jC,
  check_outros: HC,
  create_component: TC,
  create_in_transition: FC,
  create_out_transition: UC,
  destroy_component: VC,
  detach: $C,
  element: NC,
  group_outros: OC,
  init: PC,
  insert: KC,
  listen: ZC,
  mount_component: GC,
  run_all: JC,
  safe_not_equal: QC,
  set_data: xC,
  space: ey,
  stop_propagation: ty,
  text: ny,
  transition_in: iy,
  transition_out: ly
} = window.__gradio__svelte__internal, { createEventDispatcher: oy, onMount: sy } = window.__gradio__svelte__internal, {
  SvelteComponent: ay,
  append: ry,
  attr: _y,
  bubble: cy,
  check_outros: uy,
  create_animation: fy,
  create_component: dy,
  destroy_component: hy,
  detach: my,
  element: gy,
  ensure_array_like: by,
  fix_and_outro_and_destroy_block: py,
  fix_position: wy,
  group_outros: vy,
  init: ky,
  insert: Cy,
  mount_component: yy,
  noop: Sy,
  safe_not_equal: qy,
  set_style: zy,
  space: By,
  transition_in: Dy,
  transition_out: Ly,
  update_keyed_each: My
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ey,
  attr: Ry,
  detach: Ay,
  element: Wy,
  init: Xy,
  insert: Yy,
  noop: Iy,
  safe_not_equal: jy,
  set_style: Hy,
  toggle_class: Ty
} = window.__gradio__svelte__internal, {
  SvelteComponent: Fy,
  add_flush_callback: Uy,
  assign: Vy,
  bind: $y,
  binding_callbacks: Ny,
  create_component: Oy,
  destroy_component: Py,
  detach: Ky,
  flush: Zy,
  get_spread_object: Gy,
  get_spread_update: Jy,
  init: Qy,
  insert: xy,
  mount_component: eS,
  safe_not_equal: tS,
  space: nS,
  transition_in: iS,
  transition_out: lS
} = window.__gradio__svelte__internal;
var u_ = (i) => {
  throw TypeError(i);
}, f_ = (i, e, t) => e.has(i) || u_("Cannot " + t), ci = (i, e, t) => (f_(i, e, "read from private field"), e.get(i)), og = (i, e, t) => e.has(i) ? u_("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), sg = (i, e, t, n) => (f_(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var Gt;
class oS extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ci(this, Gt) + t; ; ) {
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
        sg(this, Gt, t);
      },
      flush: (t) => {
        if (ci(this, Gt) === "")
          return;
        const n = e.allowCR && ci(this, Gt).endsWith("\r") ? ci(this, Gt).slice(0, -1) : ci(this, Gt);
        t.enqueue(n);
      }
    }), og(this, Gt, "");
  }
}
Gt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: ag,
  append: d_,
  attr: ce,
  bubble: rg,
  check_outros: _g,
  create_slot: h_,
  detach: Li,
  element: El,
  empty: cg,
  get_all_dirty_from_scope: m_,
  get_slot_changes: g_,
  group_outros: ug,
  init: fg,
  insert: Mi,
  listen: dg,
  safe_not_equal: hg,
  set_style: je,
  space: b_,
  src_url_equal: gl,
  toggle_class: Vn,
  transition_in: bl,
  transition_out: pl,
  update_slot_base: p_
} = window.__gradio__svelte__internal;
function mg(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Ma(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = h_(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = El("button"), r && r.c(), t = b_(), _ && _.c(), ce(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ce(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Vn(e, "hidden", !/*visible*/
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
      Mi(c, e, f), r && r.m(e, null), d_(e, t), _ && _.m(e, null), l = !0, o || (s = dg(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, f) {
      /*icon*/
      c[7] ? r ? r.p(c, f) : (r = Ma(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || f & /*$$scope*/
      2048) && p_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? g_(
          a,
          /*$$scope*/
          c[11],
          f,
          null
        ) : m_(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && ce(e, "class", n), (!l || f & /*elem_id*/
      1) && ce(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || f & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || f & /*size, variant, elem_classes, visible*/
      30) && Vn(e, "hidden", !/*visible*/
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
      l || (bl(_, c), l = !0);
    },
    o(c) {
      pl(_, c), l = !1;
    },
    d(c) {
      c && Li(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function gg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Ea(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = h_(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = El("a"), o && o.c(), t = b_(), r && r.c(), ce(
        e,
        "href",
        /*link*/
        i[6]
      ), ce(e, "rel", "noopener noreferrer"), ce(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), ce(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ce(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Vn(e, "hidden", !/*visible*/
      i[2]), Vn(
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
      Mi(a, e, _), o && o.m(e, null), d_(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = Ea(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && p_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? g_(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : m_(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && ce(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && ce(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ce(e, "class", n), (!l || _ & /*elem_id*/
      1) && ce(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && Vn(e, "hidden", !/*visible*/
      a[2]), (!l || _ & /*size, variant, elem_classes, disabled*/
      282) && Vn(
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
      l || (bl(r, a), l = !0);
    },
    o(a) {
      pl(r, a), l = !1;
    },
    d(a) {
      a && Li(e), o && o.d(), r && r.d(a);
    }
  };
}
function Ma(i) {
  let e, t, n;
  return {
    c() {
      e = El("img"), ce(e, "class", "button-icon svelte-8huxfn"), gl(e.src, t = /*icon*/
      i[7].url) || ce(e, "src", t), ce(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Mi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !gl(e.src, t = /*icon*/
      l[7].url) && ce(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ce(e, "alt", n);
    },
    d(l) {
      l && Li(e);
    }
  };
}
function Ea(i) {
  let e, t, n;
  return {
    c() {
      e = El("img"), ce(e, "class", "button-icon svelte-8huxfn"), gl(e.src, t = /*icon*/
      i[7].url) || ce(e, "src", t), ce(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Mi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !gl(e.src, t = /*icon*/
      l[7].url) && ce(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ce(e, "alt", n);
    },
    d(l) {
      l && Li(e);
    }
  };
}
function bg(i) {
  let e, t, n, l;
  const o = [gg, mg], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = cg();
    },
    m(a, _) {
      s[e].m(a, _), Mi(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (ug(), pl(s[c], 1, 1, () => {
        s[c] = null;
      }), _g(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), bl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (bl(t), l = !0);
    },
    o(a) {
      pl(t), l = !1;
    },
    d(a) {
      a && Li(n), s[e].d(a);
    }
  };
}
function pg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: f = null } = e, { icon: u = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(b) {
    rg.call(this, i, b);
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
class Oo extends ag {
  constructor(e) {
    super(), fg(this, e, pg, bg, hg, {
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
  SvelteComponent: sS,
  create_component: aS,
  destroy_component: rS,
  detach: _S,
  init: cS,
  insert: uS,
  mount_component: fS,
  safe_not_equal: dS,
  set_data: hS,
  text: mS,
  transition_in: gS,
  transition_out: bS
} = window.__gradio__svelte__internal, {
  SvelteComponent: wg,
  add_render_callback: w_,
  append: Gi,
  attr: Oe,
  binding_callbacks: Ra,
  check_outros: vg,
  create_bidirectional_transition: Aa,
  destroy_each: kg,
  detach: yi,
  element: wl,
  empty: Cg,
  ensure_array_like: Wa,
  group_outros: yg,
  init: Sg,
  insert: Si,
  listen: Po,
  prevent_default: qg,
  run_all: zg,
  safe_not_equal: Bg,
  set_data: Dg,
  set_style: Yn,
  space: Ko,
  text: Lg,
  toggle_class: Ct,
  transition_in: Do,
  transition_out: Xa
} = window.__gradio__svelte__internal, { createEventDispatcher: Mg } = window.__gradio__svelte__internal;
function Ya(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Ia(i) {
  let e, t, n, l, o, s = Wa(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = ja(Ya(i, s, a));
  return {
    c() {
      e = wl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Oe(e, "class", "options svelte-yuohum"), Oe(e, "role", "listbox"), Yn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Yn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Yn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, _) {
      Si(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = Po(e, "mousedown", qg(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Wa(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Ya(a, s, c);
          r[c] ? r[c].p(f, _) : (r[c] = ja(f), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && Yn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && Yn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && Yn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && w_(() => {
        n && (t || (t = Aa(e, Fs, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Aa(e, Fs, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && yi(e), kg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function ja(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = wl("li"), t = wl("span"), t.textContent = "✓", n = Ko(), o = Lg(l), s = Ko(), Oe(t, "class", "inner-item svelte-yuohum"), Ct(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Oe(e, "class", "item svelte-yuohum"), Oe(e, "data-index", r = /*index*/
      i[26]), Oe(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Oe(e, "data-testid", "dropdown-option"), Oe(e, "role", "option"), Oe(e, "aria-selected", _ = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Ct(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), Ct(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), Ct(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), Ct(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, f) {
      Si(c, e, f), Gi(e, t), Gi(e, n), Gi(e, o), Gi(e, s);
    },
    p(c, f) {
      f & /*selected_indices, filtered_indices*/
      18 && Ct(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), f & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Dg(o, l), f & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Oe(e, "data-index", r), f & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Oe(e, "aria-label", a), f & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Oe(e, "aria-selected", _), f & /*selected_indices, filtered_indices*/
      18 && Ct(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), f & /*filtered_indices, active_index*/
      34 && Ct(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && Ct(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && Ct(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && yi(e);
    }
  };
}
function Eg(i) {
  let e, t, n, l, o;
  w_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Ia(i)
  );
  return {
    c() {
      e = wl("div"), t = Ko(), s && s.c(), n = Cg(), Oe(e, "class", "reference");
    },
    m(r, a) {
      Si(r, e, a), i[20](e), Si(r, t, a), s && s.m(r, a), Si(r, n, a), l || (o = [
        Po(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Po(
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
      12 && Do(s, 1)) : (s = Ia(r), s.c(), Do(s, 1), s.m(n.parentNode, n)) : s && (yg(), Xa(s, 1, 1, () => {
        s = null;
      }), vg());
    },
    i(r) {
      Do(s);
    },
    o(r) {
      Xa(s);
    },
    d(r) {
      r && (yi(e), yi(t), yi(n)), i[20](null), s && s.d(r), l = !1, zg(o);
    }
  };
}
function Rg(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, f, u, d, m, h, g, b, v, p;
  function q() {
    const { top: E, bottom: O } = h.getBoundingClientRect();
    t(16, f = E), t(17, u = p - O);
  }
  let L = null;
  function B() {
    r && (L !== null && clearTimeout(L), L = setTimeout(
      () => {
        q(), L = null;
      },
      10
    ));
  }
  const y = Mg();
  function w() {
    t(11, p = window.innerHeight);
  }
  function R(E) {
    Ra[E ? "unshift" : "push"](() => {
      h = E, t(6, h);
    });
  }
  const C = (E) => y("change", E);
  function S(E) {
    Ra[E ? "unshift" : "push"](() => {
      g = E, t(7, g);
    });
  }
  return i.$$set = (E) => {
    "choices" in E && t(0, o = E.choices), "filtered_indices" in E && t(1, s = E.filtered_indices), "show_options" in E && t(2, r = E.show_options), "disabled" in E && t(3, a = E.disabled), "selected_indices" in E && t(4, _ = E.selected_indices), "active_index" in E && t(5, c = E.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && _.length > 0) {
          let O = g.querySelectorAll("li");
          for (const K of Array.from(O))
            if (K.getAttribute("data-index") === _[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, K.offsetTop);
              break;
            }
        }
        q();
        const E = t(15, l = h.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (E == null ? void 0 : E.height) || 0), t(8, m = (E == null ? void 0 : E.width) || 0);
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
    R,
    C,
    S
  ];
}
class Ag extends wg {
  constructor(e) {
    super(), Sg(this, e, Rg, Eg, Bg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Wg(i, e) {
  return (i % e + e) % e;
}
function Ha(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function Xg(i, e, t) {
  i("change", e), t || i("input");
}
function Yg(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[Wg(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: pS,
  append: wS,
  attr: vS,
  binding_callbacks: kS,
  check_outros: CS,
  create_component: yS,
  destroy_component: SS,
  destroy_each: qS,
  detach: zS,
  element: BS,
  ensure_array_like: DS,
  group_outros: LS,
  init: MS,
  insert: ES,
  listen: RS,
  mount_component: AS,
  prevent_default: WS,
  run_all: XS,
  safe_not_equal: YS,
  set_data: IS,
  set_input_value: jS,
  space: HS,
  text: TS,
  toggle_class: FS,
  transition_in: US,
  transition_out: VS
} = window.__gradio__svelte__internal, { afterUpdate: $S, createEventDispatcher: NS } = window.__gradio__svelte__internal, {
  SvelteComponent: Ig,
  append: _n,
  attr: Ne,
  binding_callbacks: jg,
  check_outros: Hg,
  create_component: Zo,
  destroy_component: Go,
  detach: rs,
  element: Hn,
  group_outros: Tg,
  init: Fg,
  insert: _s,
  listen: ui,
  mount_component: Jo,
  run_all: Ug,
  safe_not_equal: Vg,
  set_data: $g,
  set_input_value: Ta,
  space: Lo,
  text: Ng,
  toggle_class: In,
  transition_in: Tn,
  transition_out: wi
} = window.__gradio__svelte__internal, { onMount: Og } = window.__gradio__svelte__internal, { createEventDispatcher: Pg, afterUpdate: Kg } = window.__gradio__svelte__internal;
function Zg(i) {
  let e;
  return {
    c() {
      e = Ng(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      _s(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && $g(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && rs(e);
    }
  };
}
function Fa(i) {
  let e, t, n;
  return t = new es({}), {
    c() {
      e = Hn("div"), Zo(t.$$.fragment), Ne(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      _s(l, e, o), Jo(t, e, null), n = !0;
    },
    i(l) {
      n || (Tn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      wi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && rs(e), Go(t);
    }
  };
}
function Gg(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m;
  t = new br({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Zg] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && Fa();
  return f = new Ag({
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
      e = Hn("div"), Zo(t.$$.fragment), n = Lo(), l = Hn("div"), o = Hn("div"), s = Hn("div"), r = Hn("input"), _ = Lo(), h && h.c(), c = Lo(), Zo(f.$$.fragment), Ne(r, "role", "listbox"), Ne(r, "aria-controls", "dropdown-options"), Ne(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Ne(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Ne(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Ne(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], In(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Ne(s, "class", "secondary-wrap svelte-1m1zvyj"), Ne(o, "class", "wrap-inner svelte-1m1zvyj"), In(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), Ne(l, "class", "wrap svelte-1m1zvyj"), Ne(e, "class", "svelte-1m1zvyj"), In(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      _s(g, e, b), Jo(t, e, null), _n(e, n), _n(e, l), _n(l, o), _n(o, s), _n(s, r), Ta(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), _n(s, _), h && h.m(s, null), _n(l, c), Jo(f, l, null), u = !0, d || (m = [
        ui(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        ui(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        ui(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        ui(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        ui(
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
      4096) && Ne(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!u || b[0] & /*label*/
      1) && Ne(
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
      g[9] && Ta(
        r,
        /*input_text*/
        g[9]
      ), (!u || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && In(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (Tg(), wi(h, 1, 1, () => {
        h = null;
      }), Hg()) : h ? b[0] & /*disabled*/
      8 && Tn(h, 1) : (h = Fa(), h.c(), Tn(h, 1), h.m(s, null)), (!u || b[0] & /*show_options*/
      4096) && In(
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
      32) && In(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      u || (Tn(t.$$.fragment, g), Tn(h), Tn(f.$$.fragment, g), u = !0);
    },
    o(g) {
      wi(t.$$.fragment, g), wi(h), wi(f.$$.fragment, g), u = !1;
    },
    d(g) {
      g && rs(e), Go(t), i[29](null), h && h.d(), Go(f), d = !1, Ug(m);
    }
  };
}
function Jg(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: f } = e, { container: u = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, b, v, p = "", q = "", L = !1, B = [], y = null, w = null, R;
  const C = Pg();
  o ? (R = a.map((W) => W[1]).indexOf(o), w = R, w === -1 ? (s = o, w = null) : ([p, s] = a[w], q = p), E()) : a.length > 0 && (R = 0, w = 0, [p, o] = a[w], s = o, q = p);
  function S() {
    t(13, b = a.map((W) => W[0])), t(24, v = a.map((W) => W[1]));
  }
  function E() {
    S(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, w = null)) : v.includes(o) ? (t(9, p = b[v.indexOf(o)]), t(11, w = v.indexOf(o))) : d ? (t(9, p = o), t(11, w = null)) : (t(9, p = ""), t(11, w = null)), t(27, R = w);
  }
  function O(W) {
    if (t(11, w = parseInt(W.detail.target.dataset.index)), isNaN(w)) {
      t(11, w = null);
      return;
    }
    t(12, g = !1), t(14, y = null), h.blur();
  }
  function K(W) {
    t(10, B = a.map((V, Z) => Z)), t(12, g = !0), C("focus");
  }
  function z() {
    d ? t(20, o = p) : t(9, p = b[v.indexOf(o)]), t(12, g = !1), t(14, y = null), C("blur");
  }
  function F(W) {
    t(12, [g, y] = Yg(W, y, B), g, (t(14, y), t(2, a), t(23, _), t(6, d), t(9, p), t(10, B), t(8, h), t(25, q), t(11, w), t(27, R), t(26, L), t(24, v))), W.key === "Enter" && (y !== null ? (t(11, w = y), t(12, g = !1), h.blur(), t(14, y = null)) : b.includes(p) ? (t(11, w = b.indexOf(p)), t(12, g = !1), t(14, y = null), h.blur()) : d && (t(20, o = p), t(11, w = null), t(12, g = !1), t(14, y = null), h.blur()), C("enter", o));
  }
  Kg(() => {
    t(21, r = !1), t(26, L = !0);
  }), Og(() => {
    h.focus();
  });
  function T() {
    p = this.value, t(9, p), t(11, w), t(27, R), t(26, L), t(2, a), t(24, v);
  }
  function X(W) {
    jg[W ? "unshift" : "push"](() => {
      h = W, t(8, h);
    });
  }
  const G = (W) => C("key_up", { key: W.key, input_value: p });
  return i.$$set = (W) => {
    "label" in W && t(0, n = W.label), "info" in W && t(1, l = W.info), "value" in W && t(20, o = W.value), "value_is_output" in W && t(21, r = W.value_is_output), "choices" in W && t(2, a = W.choices), "disabled" in W && t(3, c = W.disabled), "show_label" in W && t(4, f = W.show_label), "container" in W && t(5, u = W.container), "allow_custom_value" in W && t(6, d = W.allow_custom_value), "filterable" in W && t(7, m = W.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && w !== R && w !== null && L && (t(9, [p, o] = a[w], p, (t(20, o), t(11, w), t(27, R), t(26, L), t(2, a), t(24, v))), t(27, R = w), C("select", {
      index: w,
      value: v[w],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (E(), Xg(C, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && S(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (d || E(), t(23, _ = a), t(10, B = Ha(a, p)), !d && B.length > 0 && t(14, y = B[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== q && (t(10, B = Ha(a, p)), t(25, q = p), !d && B.length > 0 && t(14, y = B[0]));
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
    O,
    K,
    z,
    F,
    o,
    r,
    s,
    _,
    v,
    q,
    L,
    R,
    T,
    X,
    G
  ];
}
class Qg extends Ig {
  constructor(e) {
    super(), Fg(
      this,
      e,
      Jg,
      Gg,
      Vg,
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
  SvelteComponent: OS,
  attr: PS,
  detach: KS,
  element: ZS,
  init: GS,
  insert: JS,
  noop: QS,
  safe_not_equal: xS,
  toggle_class: eq
} = window.__gradio__svelte__internal, {
  SvelteComponent: tq,
  add_flush_callback: nq,
  assign: iq,
  bind: lq,
  binding_callbacks: oq,
  check_outros: sq,
  create_component: aq,
  destroy_component: rq,
  detach: _q,
  empty: cq,
  get_spread_object: uq,
  get_spread_update: fq,
  group_outros: dq,
  init: hq,
  insert: mq,
  mount_component: gq,
  safe_not_equal: bq,
  space: pq,
  transition_in: wq,
  transition_out: vq
} = window.__gradio__svelte__internal, {
  SvelteComponent: xg,
  append: et,
  attr: $n,
  check_outros: Qo,
  create_component: pn,
  destroy_component: wn,
  detach: ti,
  element: yt,
  group_outros: xo,
  init: eb,
  insert: ni,
  listen: tb,
  mount_component: vn,
  safe_not_equal: nb,
  set_style: Nn,
  space: fi,
  text: cs,
  toggle_class: Ua,
  transition_in: Le,
  transition_out: Ke
} = window.__gradio__svelte__internal, { createEventDispatcher: ib } = window.__gradio__svelte__internal, { onMount: lb } = window.__gradio__svelte__internal;
function Va(i) {
  let e, t, n, l, o, s, r;
  const a = [sb, ob], _ = [];
  function c(f, u) {
    return (
      /*labelDetailLock*/
      f[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = yt("div"), t = yt("button"), l.c(), $n(t, "class", "icon svelte-d9x7u0"), $n(t, "aria-label", "Lock label detail"), Ua(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Nn(e, "margin-right", "8px");
    },
    m(f, u) {
      ni(f, e, u), et(e, t), _[n].m(t, null), o = !0, s || (r = tb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(f, u) {
      let d = n;
      n = c(f), n !== d && (xo(), Ke(_[d], 1, 1, () => {
        _[d] = null;
      }), Qo(), l = _[n], l || (l = _[n] = a[n](f), l.c()), Le(l, 1), l.m(t, null)), (!o || u & /*labelDetailLock*/
      4) && Ua(
        t,
        "selected",
        /*labelDetailLock*/
        f[2] === !0
      );
    },
    i(f) {
      o || (Le(l), o = !0);
    },
    o(f) {
      Ke(l), o = !1;
    },
    d(f) {
      f && ti(e), _[n].d(), s = !1, r();
    }
  };
}
function ob(i) {
  let e, t;
  return e = new w0({}), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, l) {
      vn(e, n, l), t = !0;
    },
    i(n) {
      t || (Le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ke(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function sb(i) {
  let e, t;
  return e = new u0({}), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, l) {
      vn(e, n, l), t = !0;
    },
    i(n) {
      t || (Le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ke(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function ab(i) {
  let e;
  return {
    c() {
      e = cs("Cancel");
    },
    m(t, n) {
      ni(t, e, n);
    },
    d(t) {
      t && ti(e);
    }
  };
}
function $a(i) {
  let e, t, n;
  return t = new Oo({
    props: {
      variant: "stop",
      $$slots: { default: [rb] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = yt("div"), pn(t.$$.fragment), Nn(e, "margin-right", "8px");
    },
    m(l, o) {
      ni(l, e, o), vn(t, e, null), n = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (Le(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ke(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ti(e), wn(t);
    }
  };
}
function rb(i) {
  let e;
  return {
    c() {
      e = cs("Remove");
    },
    m(t, n) {
      ni(t, e, n);
    },
    d(t) {
      t && ti(e);
    }
  };
}
function _b(i) {
  let e;
  return {
    c() {
      e = cs("OK");
    },
    m(t, n) {
      ni(t, e, n);
    },
    d(t) {
      t && ti(e);
    }
  };
}
function cb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h, g, b, v = !/*showRemove*/
  i[4] && Va(i);
  s = new Qg({
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
  ), _ = new lg({
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
  ), u = new Oo({
    props: {
      $$slots: { default: [ab] },
      $$scope: { ctx: i }
    }
  }), u.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && $a(i)
  );
  return g = new Oo({
    props: {
      variant: "primary",
      $$slots: { default: [_b] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = yt("div"), t = yt("div"), n = yt("span"), v && v.c(), l = fi(), o = yt("div"), pn(s.$$.fragment), r = fi(), a = yt("div"), pn(_.$$.fragment), c = fi(), f = yt("div"), pn(u.$$.fragment), d = fi(), p && p.c(), m = fi(), h = yt("div"), pn(g.$$.fragment), Nn(o, "margin-right", "10px"), Nn(a, "margin-right", "40px"), Nn(a, "margin-bottom", "8px"), Nn(f, "margin-right", "8px"), $n(n, "class", "model-content svelte-d9x7u0"), $n(t, "class", "modal-container svelte-d9x7u0"), $n(e, "class", "modal svelte-d9x7u0"), $n(e, "id", "model-box-edit");
    },
    m(q, L) {
      ni(q, e, L), et(e, t), et(t, n), v && v.m(n, null), et(n, l), et(n, o), vn(s, o, null), et(n, r), et(n, a), vn(_, a, null), et(n, c), et(n, f), vn(u, f, null), et(n, d), p && p.m(n, null), et(n, m), et(n, h), vn(g, h, null), b = !0;
    },
    p(q, [L]) {
      /*showRemove*/
      q[4] ? v && (xo(), Ke(v, 1, 1, () => {
        v = null;
      }), Qo()) : v ? (v.p(q, L), L & /*showRemove*/
      16 && Le(v, 1)) : (v = Va(q), v.c(), Le(v, 1), v.m(n, l));
      const B = {};
      L & /*currentLabel*/
      1 && (B.value = /*currentLabel*/
      q[0]), L & /*choices*/
      8 && (B.choices = /*choices*/
      q[3]), s.$set(B);
      const y = {};
      L & /*currentColor*/
      2 && (y.value = /*currentColor*/
      q[1]), _.$set(y);
      const w = {};
      L & /*$$scope*/
      262144 && (w.$$scope = { dirty: L, ctx: q }), u.$set(w), /*showRemove*/
      q[4] ? p ? (p.p(q, L), L & /*showRemove*/
      16 && Le(p, 1)) : (p = $a(q), p.c(), Le(p, 1), p.m(n, m)) : p && (xo(), Ke(p, 1, 1, () => {
        p = null;
      }), Qo());
      const R = {};
      L & /*$$scope*/
      262144 && (R.$$scope = { dirty: L, ctx: q }), g.$set(R);
    },
    i(q) {
      b || (Le(v), Le(s.$$.fragment, q), Le(_.$$.fragment, q), Le(u.$$.fragment, q), Le(p), Le(g.$$.fragment, q), b = !0);
    },
    o(q) {
      Ke(v), Ke(s.$$.fragment, q), Ke(_.$$.fragment, q), Ke(u.$$.fragment, q), Ke(p), Ke(g.$$.fragment, q), b = !1;
    },
    d(q) {
      q && ti(e), v && v.d(), wn(s), wn(_), wn(u), p && p.d(), wn(g);
    }
  };
}
function ub(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const f = ib();
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
  lb(() => (document.addEventListener("keydown", b), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const v = () => u(0), p = () => u(-1), q = () => u(1);
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
    q
  ];
}
class us extends xg {
  constructor(e) {
    super(), eb(this, e, ub, cb, nb, {
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
const ke = (i, e, t) => Math.min(Math.max(i, e), t);
function Mo(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class Eo {
  constructor(e, t, n, l, o, s, r, a, _, c, f, u, d, m = "rgb(255, 255, 255)", h = 0.5, g = 25, b = 8, v = 2, p = 4, q = 1, L = !0) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (B) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let y = (B.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, w = (B.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const R = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, C = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        y = ke(y, -this._xmin, R - this._xmax), w = ke(w, -this._ymin, C - this._ymax), this._xmin += y, this._ymin += w, this._xmax += y, this._ymax += w, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (B) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [y, w] = this.toBoxCoordinates(B.clientX, B.clientY);
        y = (y - this.offsetMouseX) / this.canvasWindow.scale, w = (w - this.offsetMouseY) / this.canvasWindow.scale, y > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = y, this.creatingAnchorX = "xmin") : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = y : y > this._xmin && y < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = y : y < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = y, this.creatingAnchorX = "xmax"), w > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = w, this.creatingAnchorY = "ymin") : w > this._ymin && w < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = w : w > this._ymin && w < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = w : w < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = w, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (B) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const y = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, w = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ke(this._xmin, 0, y - this.minSize), this._ymin = ke(this._ymin, 0, w - this.minSize), this._xmax = ke(this._xmax, this.minSize, y), this._ymax = ke(this._ymax, this.minSize, w), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > y ? (this._xmin -= this._xmax - y, this._xmax = y) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > w ? (this._ymin -= this._ymax - w, this._ymax = w) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (B) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const y = B.clientX, w = B.clientY, R = (y - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, C = (w - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, E = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += R, this._ymin += C, this._xmin = ke(this._xmin, 0, this._xmax - this.minSize), this._ymin = ke(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += R, this._ymin += C, this._xmax = ke(this._xmax, this._xmin + this.minSize, S), this._ymin = ke(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += R, this._ymax += C, this._xmax = ke(this._xmax, this._xmin + this.minSize, S), this._ymax = ke(this._ymax, this._ymin + this.minSize, E);
            break;
          case 3:
            this._xmin += R, this._ymax += C, this._xmin = ke(this._xmin, 0, this._xmax - this.minSize), this._ymax = ke(this._ymax, this._ymin + this.minSize, E);
            break;
          case 4:
            this._ymin += C, this._ymin = ke(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += R, this._xmax = ke(this._xmax, this._xmin + this.minSize, S);
            break;
          case 6:
            this._ymax += C, this._ymax = ke(this._ymax, this._ymin + this.minSize, E);
            break;
          case 7:
            this._xmin += R, this._xmin = ke(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = q, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = v, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = h, this.showLabel = L, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Mo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Mo(this.color, 1), e.stroke(), e.closePath(), this.showLabel && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Mo(this.color, 1);
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
const cn = [
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
], Ji = (i, e, t) => Math.min(Math.max(i, e), t);
class fb {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = Ji(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = Ji(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = Ji(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = Ji(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: db,
  append: fe,
  attr: te,
  binding_callbacks: Na,
  bubble: Ro,
  check_outros: On,
  create_component: nt,
  destroy_component: it,
  detach: Jt,
  element: Ye,
  empty: hb,
  group_outros: Pn,
  init: mb,
  insert: Qt,
  listen: qe,
  mount_component: lt,
  noop: v_,
  run_all: k_,
  safe_not_equal: gb,
  set_data: bb,
  set_style: Qi,
  space: Pe,
  text: Oa,
  toggle_class: xi,
  transition_in: ie,
  transition_out: re
} = window.__gradio__svelte__internal, { onMount: pb, createEventDispatcher: wb } = window.__gradio__svelte__internal;
function Pa(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h, g, b, v, p, q, L, B, y, w, R, C, S, E, O, K;
  n = new Wm({}), s = new Um({});
  let z = (
    /*showRemoveButton*/
    i[1] && Ka(i)
  ), F = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && Za(i);
  return f = new dd({}), m = new Qf({}), b = new T0({}), q = new A0({}), S = new z0({}), {
    c() {
      e = Ye("span"), t = Ye("button"), nt(n.$$.fragment), l = Pe(), o = Ye("button"), nt(s.$$.fragment), r = Pe(), z && z.c(), a = Pe(), F && F.c(), _ = Pe(), c = Ye("button"), nt(f.$$.fragment), u = Pe(), d = Ye("button"), nt(m.$$.fragment), h = Pe(), g = Ye("button"), nt(b.$$.fragment), v = Pe(), p = Ye("button"), nt(q.$$.fragment), L = Pe(), B = Ye("span"), y = Oa(
        /*zoomLevel*/
        i[17]
      ), w = Oa("%"), R = Pe(), C = Ye("button"), nt(S.$$.fragment), te(t, "class", "icon svelte-1qb4mt2"), te(t, "aria-label", "Create box"), te(t, "title", "Create box (C)"), xi(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].creation
      ), te(o, "class", "icon svelte-1qb4mt2"), te(o, "aria-label", "Drag boxes"), te(o, "title", "Drag boxes (D)"), xi(
        o,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].drag
      ), te(c, "class", "icon svelte-1qb4mt2"), te(c, "aria-label", "Rotate counterclockwise"), te(c, "title", "Rotate counterclockwise"), te(d, "class", "icon svelte-1qb4mt2"), te(d, "aria-label", "Rotate clockwise"), te(d, "title", "Rotate clockwise"), te(g, "class", "icon svelte-1qb4mt2"), te(g, "aria-label", "Reset zoom"), te(g, "title", "Reset zoom (Space)"), te(p, "class", "icon svelte-1qb4mt2"), te(p, "aria-label", "Zoom out"), te(p, "title", "Zoom out"), te(B, "class", "zoom-level svelte-1qb4mt2"), te(C, "class", "icon svelte-1qb4mt2"), te(C, "aria-label", "Zoom in"), te(C, "title", "Zoom in"), te(e, "class", "canvas-control svelte-1qb4mt2");
    },
    m(T, X) {
      Qt(T, e, X), fe(e, t), lt(n, t, null), fe(e, l), fe(e, o), lt(s, o, null), fe(e, r), z && z.m(e, null), fe(e, a), F && F.m(e, null), fe(e, _), fe(e, c), lt(f, c, null), fe(e, u), fe(e, d), lt(m, d, null), fe(e, h), fe(e, g), lt(b, g, null), fe(e, v), fe(e, p), lt(q, p, null), fe(e, L), fe(e, B), fe(B, y), fe(B, w), fe(e, R), fe(e, C), lt(S, C, null), E = !0, O || (K = [
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
      ], O = !0);
    },
    p(T, X) {
      (!E || X[0] & /*mode, Mode*/
      4352) && xi(
        t,
        "selected",
        /*mode*/
        T[12] === /*Mode*/
        T[8].creation
      ), (!E || X[0] & /*mode, Mode*/
      4352) && xi(
        o,
        "selected",
        /*mode*/
        T[12] === /*Mode*/
        T[8].drag
      ), /*showRemoveButton*/
      T[1] ? z ? (z.p(T, X), X[0] & /*showRemoveButton*/
      2 && ie(z, 1)) : (z = Ka(T), z.c(), ie(z, 1), z.m(e, a)) : z && (Pn(), re(z, 1, 1, () => {
        z = null;
      }), On()), !/*disableEditBoxes*/
      T[5] && /*labelDetailLock*/
      T[16] ? F ? (F.p(T, X), X[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && ie(F, 1)) : (F = Za(T), F.c(), ie(F, 1), F.m(e, _)) : F && (Pn(), re(F, 1, 1, () => {
        F = null;
      }), On()), (!E || X[0] & /*zoomLevel*/
      131072) && bb(
        y,
        /*zoomLevel*/
        T[17]
      );
    },
    i(T) {
      E || (ie(n.$$.fragment, T), ie(s.$$.fragment, T), ie(z), ie(F), ie(f.$$.fragment, T), ie(m.$$.fragment, T), ie(b.$$.fragment, T), ie(q.$$.fragment, T), ie(S.$$.fragment, T), E = !0);
    },
    o(T) {
      re(n.$$.fragment, T), re(s.$$.fragment, T), re(z), re(F), re(f.$$.fragment, T), re(m.$$.fragment, T), re(b.$$.fragment, T), re(q.$$.fragment, T), re(S.$$.fragment, T), E = !1;
    },
    d(T) {
      T && Jt(e), it(n), it(s), z && z.d(), F && F.d(), it(f), it(m), it(b), it(q), it(S), O = !1, k_(K);
    }
  };
}
function Ka(i) {
  let e, t, n, l, o;
  return t = new Gm({}), {
    c() {
      e = Ye("button"), nt(t.$$.fragment), te(e, "class", "icon svelte-1qb4mt2"), te(e, "aria-label", "Remove box"), te(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      Qt(s, e, r), lt(t, e, null), n = !0, l || (o = qe(
        e,
        "click",
        /*click_handler_2*/
        i[50]
      ), l = !0);
    },
    p: v_,
    i(s) {
      n || (ie(t.$$.fragment, s), n = !0);
    },
    o(s) {
      re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Jt(e), it(t), l = !1, o();
    }
  };
}
function Za(i) {
  let e, t, n, l, o;
  return t = new i0({}), {
    c() {
      e = Ye("button"), nt(t.$$.fragment), te(e, "class", "icon svelte-1qb4mt2"), te(e, "aria-label", "Edit label"), te(e, "title", "Edit label");
    },
    m(s, r) {
      Qt(s, e, r), lt(t, e, null), n = !0, l || (o = qe(
        e,
        "click",
        /*click_handler_3*/
        i[51]
      ), l = !0);
    },
    p: v_,
    i(s) {
      n || (ie(t.$$.fragment, s), n = !0);
    },
    o(s) {
      re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Jt(e), it(t), l = !1, o();
    }
  };
}
function Ga(i) {
  let e, t;
  return e = new us({
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
        i[0].boxes.length ? zn(
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
      nt(e.$$.fragment);
    },
    m(n, l) {
      lt(e, n, l), t = !0;
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
      n[0].boxes.length ? zn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      it(e, n);
    }
  };
}
function Ja(i) {
  let e, t;
  return e = new us({
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
        i[0].boxes.length ? zn(
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
      nt(e.$$.fragment);
    },
    m(n, l) {
      lt(e, n, l), t = !0;
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
      n[0].boxes.length ? zn(
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
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      it(e, n);
    }
  };
}
function Qa(i) {
  let e, t;
  return e = new us({
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
        i[0].boxes.length ? zn(
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
      nt(e.$$.fragment);
    },
    m(n, l) {
      lt(e, n, l), t = !0;
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
      n[0].boxes.length ? zn(
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
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      it(e, n);
    }
  };
}
function vb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u = (
    /*interactive*/
    i[2] && Pa(i)
  ), d = (
    /*editModalVisible*/
    i[13] && Ga(i)
  ), m = (
    /*newModalVisible*/
    i[14] && Ja(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[15] && Qa(i)
  );
  return {
    c() {
      e = Ye("div"), t = Ye("div"), n = Ye("canvas"), l = Pe(), u && u.c(), o = Pe(), d && d.c(), s = Pe(), m && m.c(), r = Pe(), h && h.c(), a = hb(), Qi(
        n,
        "height",
        /*height*/
        i[6]
      ), Qi(
        n,
        "width",
        /*width*/
        i[7]
      ), te(n, "class", "canvas-annotator svelte-1qb4mt2"), te(t, "class", "canvas-container svelte-1qb4mt2"), te(e, "class", "annotator-container"), te(e, "tabindex", "0");
    },
    m(g, b) {
      Qt(g, e, b), fe(e, t), fe(t, n), i[47](n), fe(e, l), u && u.m(e, null), i[54](e), Qt(g, o, b), d && d.m(g, b), Qt(g, s, b), m && m.m(g, b), Qt(g, r, b), h && h.m(g, b), Qt(g, a, b), _ = !0, c || (f = [
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
      64) && Qi(
        n,
        "height",
        /*height*/
        g[6]
      ), (!_ || b[0] & /*width*/
      128) && Qi(
        n,
        "width",
        /*width*/
        g[7]
      ), /*interactive*/
      g[2] ? u ? (u.p(g, b), b[0] & /*interactive*/
      4 && ie(u, 1)) : (u = Pa(g), u.c(), ie(u, 1), u.m(e, null)) : u && (Pn(), re(u, 1, 1, () => {
        u = null;
      }), On()), /*editModalVisible*/
      g[13] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      8192 && ie(d, 1)) : (d = Ga(g), d.c(), ie(d, 1), d.m(s.parentNode, s)) : d && (Pn(), re(d, 1, 1, () => {
        d = null;
      }), On()), /*newModalVisible*/
      g[14] ? m ? (m.p(g, b), b[0] & /*newModalVisible*/
      16384 && ie(m, 1)) : (m = Ja(g), m.c(), ie(m, 1), m.m(r.parentNode, r)) : m && (Pn(), re(m, 1, 1, () => {
        m = null;
      }), On()), /*editDefaultLabelVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*editDefaultLabelVisible*/
      32768 && ie(h, 1)) : (h = Qa(g), h.c(), ie(h, 1), h.m(a.parentNode, a)) : h && (Pn(), re(h, 1, 1, () => {
        h = null;
      }), On());
    },
    i(g) {
      _ || (ie(u), ie(d), ie(m), ie(h), _ = !0);
    },
    o(g) {
      re(u), re(d), re(m), re(h), _ = !1;
    },
    d(g) {
      g && (Jt(e), Jt(o), Jt(s), Jt(r), Jt(a)), i[47](null), u && u.d(), i[54](null), d && d.d(g), m && m.d(g), h && h.d(g), c = !1, k_(f);
    }
  };
}
const xa = 100;
function el(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function zn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function kb(i, e, t) {
  let n;
  var l;
  (function(k) {
    k[k.creation = 0] = "creation", k[k.drag = 1] = "drag";
  })(l || (l = {}));
  let { imageUrl: o = null } = e, { interactive: s } = e, { boxAlpha: r = 0.5 } = e, { boxMinSize: a = 10 } = e, { handleSize: _ } = e, { boxThickness: c } = e, { boxSelectedThickness: f } = e, { value: u } = e, { choices: d = [] } = e, { choicesColors: m = [] } = e, { disableEditBoxes: h = !1 } = e, { height: g = "100%" } = e, { width: b = "100%" } = e, { singleBox: v = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: q = !0 } = e, { useDefaultLabel: L = !1 } = e, { enableKeyboardShortcuts: B = !0 } = e, { showBoxLabels: y = !0 } = e;
  p === null && (p = h);
  let w, R, C, S = null, E = -1, O = l.drag, K = /* @__PURE__ */ new Map(), z = new fb(P, K);
  u !== null && u.boxes.length == 0 && (O = l.creation);
  let F = 0, T = 0, X = 0, G = 0, W = 1, V = 0, Z = 0, be = !1, de = !1, I = !1, Se = L, M = { label: "", color: "" }, j = { x: 0, y: 0, distance: 0 };
  const J = wb();
  function P() {
    if (C) {
      if (C.clearRect(0, 0, w.width, w.height), C.save(), C.translate(z.offsetX, z.offsetY), C.scale(z.scale, z.scale), S !== null) {
        switch (u.orientation) {
          case 0:
            C.drawImage(S, 0, 0, V, Z);
            break;
          case 1:
            C.translate(V, 0), C.rotate(Math.PI / 2), C.drawImage(S, 0, 0, Z, V);
            break;
          case 2:
            C.translate(V, Z), C.rotate(Math.PI), C.drawImage(S, 0, 0, V, Z);
            break;
          case 3:
            C.translate(0, Z), C.rotate(-Math.PI / 2), C.drawImage(S, 0, 0, Z, V);
            break;
        }
        C.restore();
      }
      for (const k of u.boxes.slice().reverse())
        k.render(C);
    }
  }
  function se(k) {
    t(11, E = k), u.boxes.forEach((Y) => {
      Y.setSelected(!1);
    }), k >= 0 && k < u.boxes.length && u.boxes[k].setSelected(!0), P();
  }
  const Me = (k, Y) => {
    const U = Math.sqrt(Math.pow(k.clientX - Y.clientX, 2) + Math.pow(k.clientY - Y.clientY, 2));
    return U < xa ? xa : U;
  };
  function A(k) {
    if (s) {
      if (k.preventDefault(), w.setPointerCapture(k.pointerId), K.set(k.pointerId, k), K.size == 1)
        O === l.creation ? D(k) : O === l.drag && Bt(k);
      else if (K.size == 2) {
        t(46, z.isDragging = !1, z), u.boxes.forEach((Tt) => {
          Tt.isCreating = !1, Tt.isDragging = !1, Tt.isResizing = !1;
        });
        const Y = Array.from(K.values()), U = Y[0], Q = Y[1], le = Me(U, Q), oe = w.getBoundingClientRect(), pe = (U.clientX + Q.clientX) / 2 - oe.left, Dt = (U.clientY + Q.clientY) / 2 - oe.top;
        j.distance = le, j.x = pe, j.y = Dt;
      }
    }
  }
  function Bt(k) {
    const Y = w.getBoundingClientRect(), U = k.clientX - Y.left, Q = k.clientY - Y.top;
    let le = !1;
    for (const [oe, pe] of u.boxes.entries()) {
      const Dt = pe.indexOfPointInsideHandle(U, Q);
      if (Dt >= 0) {
        le = !0, se(oe), pe.startResize(Dt, k);
        return;
      }
    }
    for (const [oe, pe] of u.boxes.entries())
      if (pe.isPointInsideBox(U, Q)) {
        le = !0, se(oe), pe.startDrag(k);
        return;
      }
    v || se(-1), le || z.startDrag(k);
  }
  function Ue(k) {
    s && (K.delete(k.pointerId), w.releasePointerCapture(k.pointerId), J("change"));
  }
  function at(k) {
    s && (K.delete(k.pointerId), w.releasePointerCapture(k.pointerId), J("change"));
  }
  function rt(k) {
    if (s)
      if (k.preventDefault(), k.pointerType === "mouse") {
        if (!q || u === null || O !== l.drag)
          return;
        const Y = w.getBoundingClientRect(), U = k.clientX - Y.left, Q = k.clientY - Y.top;
        for (const [le, oe] of u.boxes.entries()) {
          const pe = oe.indexOfPointInsideHandle(U, Q);
          if (pe >= 0) {
            t(9, w.style.cursor = oe.resizeHandles[pe].cursor, w);
            return;
          }
        }
        t(9, w.style.cursor = "default", w);
      } else {
        if (!K.has(k.pointerId))
          return;
        if (K.set(k.pointerId, k), K.size === 2) {
          const Y = Array.from(K.values()), U = Y[0], Q = Y[1], le = Me(U, Q), oe = w.getBoundingClientRect(), pe = (U.clientX + Q.clientX) / 2 - oe.left, Dt = (U.clientY + Q.clientY) / 2 - oe.top, Tt = parseFloat((z.scale * (le / j.distance)).toFixed(2)), ds = Tt < 1 ? 1 : Tt, hs = ds / z.scale;
          t(46, z.offsetX = j.x - (j.x - z.offsetX) * hs, z), t(46, z.offsetY = j.y - (j.y - z.offsetY) * hs, z);
          const F_ = pe - j.x, U_ = Dt - j.y;
          t(46, z.offsetX += F_, z), t(46, z.offsetY += U_, z), t(46, z.scale = ds, z), j.x = pe, j.y = Dt, j.distance = le, P();
        }
      }
  }
  function Ht() {
    const k = w.width / V, Y = w.height / Z, U = Math.min(k, Y);
    t(46, z.scale = U, z), t(46, z.offsetX = (w.width - V * U) / 2, z), t(46, z.offsetY = (w.height - Z * U) / 2, z), P();
  }
  function Rl() {
    const k = parseFloat((z.scale * 1.25).toFixed(2)), Y = w.width / 2, U = w.height / 2, Q = (Y - z.offsetX) / z.scale, le = (U - z.offsetY) / z.scale;
    t(46, z.offsetX = Y - Q * k, z), t(46, z.offsetY = U - le * k, z), t(46, z.scale = k, z), P();
  }
  function Al() {
    const k = parseFloat((z.scale * 0.8).toFixed(2)), Y = k < 1 ? 1 : k, U = w.width / 2, Q = w.height / 2, le = (U - z.offsetX) / z.scale, oe = (Q - z.offsetY) / z.scale;
    t(46, z.offsetX = U - le * Y, z), t(46, z.offsetY = Q - oe * Y, z), t(46, z.scale = Y, z), P();
  }
  function Wl(k) {
    if (!B || k.target !== R || !s)
      return;
    const Y = k.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "c", "d", "e", " "])).has(Y) && (k.preventDefault(), k.stopPropagation()), Y) {
      case "delete":
        Ee();
        break;
      case "c":
        _t();
        break;
      case "d":
        Ge();
        break;
      case "e":
        Ei();
        break;
      case " ":
        Ht();
        break;
    }
  }
  function ii() {
    setTimeout(
      () => {
        R == null || R.focus();
      },
      0
    );
  }
  function Xl(k) {
    if (!s)
      return;
    k.preventDefault();
    const Y = 1 / (1 + k.deltaY / 1e3 * 0.5), U = parseFloat((z.scale * Y).toFixed(2)), Q = U < 1 ? 1 : U, le = w.getBoundingClientRect(), oe = k.clientX - le.left, pe = k.clientY - le.top, Dt = (oe - z.offsetX) / z.scale, Tt = (pe - z.offsetY) / z.scale;
    t(46, z.offsetX = oe - Dt * Q, z), t(46, z.offsetY = pe - Tt * Q, z), t(46, z.scale = Q, z), P();
  }
  function D(k) {
    const Y = w.getBoundingClientRect(), U = (k.clientX - Y.left - z.offsetX) / W / z.scale, Q = (k.clientY - Y.top - z.offsetY) / W / z.scale;
    let le;
    m.length > 0 ? le = el(m[0]) : v ? u.boxes.length > 0 ? le = u.boxes[0].color : le = cn[0] : le = cn[u.boxes.length % cn.length];
    let oe = new Eo(P, nn, z, K, F, T, X, G, "", U, Q, U, Q, le, r, a, _, c, f, W, y);
    oe.startCreating(k, Y.left, Y.top), v ? t(0, u.boxes = [oe], u) : t(0, u.boxes = [oe, ...u.boxes], u), se(0), P(), J("change");
  }
  function _t() {
    t(12, O = l.creation), t(9, w.style.cursor = "crosshair", w);
  }
  function Ge() {
    t(12, O = l.drag), t(9, w.style.cursor = "default", w);
  }
  function nn() {
    E >= 0 && E < u.boxes.length && (u.boxes[E].getArea() < 1 ? Ee() : (h || (Se ? li() : t(14, de = !0)), v && Ge()));
  }
  function Ei() {
    E >= 0 && E < u.boxes.length && !h && t(13, be = !0);
  }
  function ln(k) {
    s && Ei();
  }
  function Mn(k) {
    t(13, be = !1), ii();
    const { detail: Y } = k;
    let U = Y.label, Q = Y.color, le = Y.ret;
    if (E >= 0 && E < u.boxes.length) {
      let oe = u.boxes[E];
      le == 1 ? (oe.label = U, oe.color = el(Q), P(), J("change")) : le == -1 && Ee();
    }
  }
  function Yl(k) {
    t(14, de = !1), ii();
    const { detail: Y } = k;
    let U = Y.label, Q = Y.color, le = Y.ret, oe = Y.lock;
    if (E >= 0 && E < u.boxes.length) {
      let pe = u.boxes[E];
      le == 1 ? (t(16, Se = oe), M.label = U, M.color = Q, pe.label = U, pe.color = el(Q), P(), J("change")) : Ee();
    }
  }
  function Il(k) {
    t(15, I = !1), ii();
    const { detail: Y } = k;
    let U = Y.label, Q = Y.color, le = Y.ret, oe = Y.lock;
    le == 1 && (t(16, Se = oe), M.label = U, M.color = Q);
  }
  function li() {
    if (E >= 0 && E < u.boxes.length) {
      let k = u.boxes[E];
      k.label = M.label, M.color !== "" && (k.color = el(M.color)), P(), J("change");
    }
  }
  function Ee() {
    E >= 0 && E < u.boxes.length && (u.boxes.splice(E, 1), se(-1), v && _t(), J("change"));
  }
  function on(k) {
    t(0, u.orientation = ((u.orientation + k) % 4 + 4) % 4, u), t(46, z.orientation = u.orientation, z), oi();
    for (const Y of u.boxes)
      Y.onRotate(k);
    P();
  }
  function oi() {
    if (w) {
      if (W = 1, t(9, w.width = w.clientWidth, w), z.setRotatedImage(S), S !== null) {
        if (z.imageRotatedWidth > w.width)
          W = w.width / z.imageRotatedWidth, V = Math.round(z.imageRotatedWidth * W), Z = Math.round(z.imageRotatedHeight * W), F = 0, T = 0, X = V, G = Z, t(9, w.height = Z, w);
        else {
          V = z.imageRotatedWidth, Z = z.imageRotatedHeight;
          var k = (w.width - V) / 2;
          F = k, T = 0, X = k + V, G = Z, t(9, w.height = Z, w);
        }
        t(46, z.imageWidth = V, z), t(46, z.imageHeight = Z, z);
      } else
        F = 0, T = 0, X = w.width, G = w.height, t(9, w.height = w.clientHeight, w);
      if (z.resize(w.width, w.height, F, T), X > 0 && G > 0)
        for (const Y of u.boxes)
          Y.canvasXmin = F, Y.canvasYmin = T, Y.canvasXmax = X, Y.canvasYmax = G, Y.setScaleFactor(W);
      P(), J("change");
    }
  }
  const B_ = new ResizeObserver(oi);
  function D_() {
    for (let k = 0; k < u.boxes.length; k++) {
      let Y = u.boxes[k];
      if (!(Y instanceof Eo)) {
        let U = "", Q = "";
        Y.hasOwnProperty("color") ? (U = Y.color, Array.isArray(U) && U.length === 3 && (U = `rgb(${U[0]}, ${U[1]}, ${U[2]})`)) : U = cn[k % cn.length], Y.hasOwnProperty("label") && (Q = Y.label), Y = new Eo(P, nn, z, K, F, T, X, G, Q, Y.xmin, Y.ymin, Y.xmax, Y.ymax, U, r, a, _, c, f, Y.scaleFactor || 1, y), t(0, u.boxes[k] = Y, u);
      }
    }
  }
  function fs() {
    o !== null && (S === null || S.src != o) && (S = new Image(), S.src = o, S.onload = function() {
      oi(), P();
    });
  }
  pb(() => {
    if (Array.isArray(d) && d.length > 0) {
      if (!Array.isArray(m) || m.length == 0)
        for (let k = 0; k < d.length; k++) {
          let Y = cn[k % cn.length];
          m.push(zn(Y));
        }
      M.label = d[0][0], M.color = m[0];
    }
    C = w.getContext("2d"), B_.observe(w), E < 0 && u !== null && u.boxes.length > 0 && se(0), fs(), oi(), P();
  });
  function L_(k) {
    Na[k ? "unshift" : "push"](() => {
      w = k, t(9, w);
    });
  }
  const M_ = () => _t(), E_ = () => Ge(), R_ = () => Ee(), A_ = () => t(15, I = !0), W_ = () => on(-1), X_ = () => on(1);
  function Y_(k) {
    Na[k ? "unshift" : "push"](() => {
      R = k, t(10, R);
    });
  }
  const I_ = () => R.focus();
  function j_(k) {
    Ro.call(this, i, k);
  }
  function H_(k) {
    Ro.call(this, i, k);
  }
  function T_(k) {
    Ro.call(this, i, k);
  }
  return i.$$set = (k) => {
    "imageUrl" in k && t(35, o = k.imageUrl), "interactive" in k && t(2, s = k.interactive), "boxAlpha" in k && t(36, r = k.boxAlpha), "boxMinSize" in k && t(37, a = k.boxMinSize), "handleSize" in k && t(38, _ = k.handleSize), "boxThickness" in k && t(39, c = k.boxThickness), "boxSelectedThickness" in k && t(40, f = k.boxSelectedThickness), "value" in k && t(0, u = k.value), "choices" in k && t(3, d = k.choices), "choicesColors" in k && t(4, m = k.choicesColors), "disableEditBoxes" in k && t(5, h = k.disableEditBoxes), "height" in k && t(6, g = k.height), "width" in k && t(7, b = k.width), "singleBox" in k && t(41, v = k.singleBox), "showRemoveButton" in k && t(1, p = k.showRemoveButton), "handlesCursor" in k && t(42, q = k.handlesCursor), "useDefaultLabel" in k && t(43, L = k.useDefaultLabel), "enableKeyboardShortcuts" in k && t(44, B = k.enableKeyboardShortcuts), "showBoxLabels" in k && t(45, y = k.showBoxLabels);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (t(46, z.orientation = u.orientation, z), fs(), D_(), oi(), P()), i.$$.dirty[1] & /*canvasWindow*/
    32768 && t(17, n = Math.round(z.scale * 100));
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
    R,
    E,
    O,
    be,
    de,
    I,
    Se,
    n,
    A,
    Ue,
    at,
    rt,
    Ht,
    Rl,
    Al,
    Wl,
    Xl,
    _t,
    Ge,
    ln,
    Mn,
    Yl,
    Il,
    Ee,
    on,
    o,
    r,
    a,
    _,
    c,
    f,
    v,
    q,
    L,
    B,
    y,
    z,
    L_,
    M_,
    E_,
    R_,
    A_,
    W_,
    X_,
    Y_,
    I_,
    j_,
    H_,
    T_
  ];
}
class Cb extends db {
  constructor(e) {
    super(), mb(
      this,
      e,
      kb,
      vb,
      gb,
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
  SvelteComponent: yb,
  add_flush_callback: Sb,
  bind: qb,
  binding_callbacks: zb,
  create_component: Bb,
  destroy_component: Db,
  init: Lb,
  mount_component: Mb,
  safe_not_equal: Eb,
  transition_in: Rb,
  transition_out: Ab
} = window.__gradio__svelte__internal, { createEventDispatcher: Wb } = window.__gradio__svelte__internal;
function Xb(i) {
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
    i[0]), e = new Cb({ props: o }), zb.push(() => qb(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[23]
    ), {
      c() {
        Bb(e.$$.fragment);
      },
      m(s, r) {
        Mb(e, s, r), n = !0;
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
        s[0], Sb(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Rb(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Ab(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Db(e, s);
      }
    }
  );
}
function Yb(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: f } = e, { width: u } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: v } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: q } = e, { showBoxLabels: L } = e, B, y;
  const w = Wb();
  function R(S) {
    m = S, t(0, m);
  }
  const C = () => w("change");
  return i.$$set = (S) => {
    "src" in S && t(20, n = S.src), "interactive" in S && t(1, l = S.interactive), "boxesAlpha" in S && t(2, o = S.boxesAlpha), "labelList" in S && t(3, s = S.labelList), "labelColors" in S && t(4, r = S.labelColors), "boxMinSize" in S && t(5, a = S.boxMinSize), "handleSize" in S && t(6, _ = S.handleSize), "boxThickness" in S && t(7, c = S.boxThickness), "height" in S && t(8, f = S.height), "width" in S && t(9, u = S.width), "boxSelectedThickness" in S && t(10, d = S.boxSelectedThickness), "value" in S && t(0, m = S.value), "disableEditBoxes" in S && t(11, h = S.disableEditBoxes), "singleBox" in S && t(12, g = S.singleBox), "showRemoveButton" in S && t(13, b = S.showRemoveButton), "handlesCursor" in S && t(14, v = S.handlesCursor), "useDefaultLabel" in S && t(15, p = S.useDefaultLabel), "enableKeyboardShortcuts" in S && t(16, q = S.enableKeyboardShortcuts), "showBoxLabels" in S && t(17, L = S.showBoxLabels);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    3145728) {
      t(18, B = n), t(21, y = n);
      const S = n;
      $1(S).then((E) => {
        y === S && t(18, B = E);
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
    q,
    L,
    B,
    w,
    n,
    y,
    R,
    C
  ];
}
class Ib extends yb {
  constructor(e) {
    super(), Lb(this, e, Yb, Xb, Eb, {
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
class er {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: jb,
  add_flush_callback: vl,
  append: jn,
  attr: vi,
  bind: kl,
  binding_callbacks: Bi,
  bubble: di,
  check_outros: fn,
  create_component: Wt,
  create_slot: Hb,
  destroy_component: Xt,
  detach: kn,
  element: qi,
  empty: Tb,
  get_all_dirty_from_scope: Fb,
  get_slot_changes: Ub,
  group_outros: dn,
  init: Vb,
  insert: Cn,
  mount_component: Yt,
  noop: $b,
  safe_not_equal: Nb,
  space: un,
  toggle_class: tr,
  transition_in: ne,
  transition_out: ae,
  update_slot_base: Ob
} = window.__gradio__svelte__internal, { createEventDispatcher: Pb, tick: Kb } = window.__gradio__svelte__internal;
function nr(i) {
  let e, t;
  return e = new ih({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Zb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, l) {
      Yt(e, n, l), t = !0;
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
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xt(e, n);
    }
  };
}
function Zb(i) {
  let e, t;
  return e = new Cl({
    props: {
      Icon: bf,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, l) {
      Yt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xt(e, n);
    }
  };
}
function ir(i) {
  let e, t;
  return e = new Td({
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
      Wt(e.$$.fragment);
    },
    m(n, l) {
      Yt(e, n, l), t = !0;
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
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xt(e, n);
    }
  };
}
function lr(i) {
  let e, t, n;
  return t = new Cl({
    props: { Icon: vr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[38]
  ), {
    c() {
      e = qi("div"), Wt(t.$$.fragment);
    },
    m(l, o) {
      Cn(l, e, o), Yt(t, e, null), n = !0;
    },
    p: $b,
    i(l) {
      n || (ne(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ae(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && kn(e), Xt(t);
    }
  };
}
function or(i) {
  let e;
  const t = (
    /*#slots*/
    i[39].default
  ), n = Hb(
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
      16777216) && Ob(
        n,
        t,
        l,
        /*$$scope*/
        l[55],
        e ? Ub(
          t,
          /*$$scope*/
          l[55],
          o,
          null
        ) : Fb(
          /*$$scope*/
          l[55]
        ),
        null
      );
    },
    i(l) {
      e || (ne(n, l), e = !0);
    },
    o(l) {
      ae(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Gb(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && or(i)
  );
  return {
    c() {
      n && n.c(), e = Tb();
    },
    m(l, o) {
      n && n.m(l, o), Cn(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[1] === null ? n ? (n.p(l, o), o[0] & /*value*/
      2 && ne(n, 1)) : (n = or(l), n.c(), ne(n, 1), n.m(e.parentNode, e)) : n && (dn(), ae(n, 1, 1, () => {
        n = null;
      }), fn());
    },
    i(l) {
      t || (ne(n), t = !0);
    },
    o(l) {
      ae(n), t = !1;
    },
    d(l) {
      l && kn(e), n && n.d(l);
    }
  };
}
function sr(i) {
  let e, t;
  return e = new Bm({
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
      Wt(e.$$.fragment);
    },
    m(n, l) {
      Yt(e, n, l), t = !0;
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
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xt(e, n);
    }
  };
}
function ar(i) {
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
    i[1]), t = new Ib({ props: s }), Bi.push(() => kl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      i[53]
    ), {
      c() {
        e = qi("div"), Wt(t.$$.fragment), vi(e, "class", "image-frame svelte-1gjdske"), tr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Cn(r, e, a), Yt(t, e, null), l = !0;
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
        r[1], vl(() => n = !1)), t.$set(_), (!l || a[0] & /*selectable*/
        32) && tr(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (ne(t.$$.fragment, r), l = !0);
      },
      o(r) {
        ae(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && kn(e), Xt(t);
      }
    }
  );
}
function rr(i) {
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
    i[0]), e = new n1({ props: o }), Bi.push(() => kl(e, "active_source", l)), {
      c() {
        Wt(e.$$.fragment);
      },
      m(s, r) {
        Yt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], vl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ne(e.$$.fragment, s), n = !0);
      },
      o(s) {
        ae(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Xt(e, s);
      }
    }
  );
}
function Jb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new nu({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: kr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && nr(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && ir(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && lr(i)
  );
  function q(C) {
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
    $$slots: { default: [Gb] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[31] !== void 0 && (B.uploading = /*uploading*/
  i[31]), /*dragging*/
  i[32] !== void 0 && (B.dragging = /*dragging*/
  i[32]), _ = new Yh({ props: B }), i[43](_), Bi.push(() => kl(_, "uploading", q)), Bi.push(() => kl(_, "dragging", L)), _.$on(
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
    i[0] === "webcam" && sr(i)
  ), w = (
    /*value*/
    i[1] !== null && ar(i)
  ), R = h && rr(i);
  return {
    c() {
      Wt(e.$$.fragment), t = un(), n = qi("div"), b && b.c(), l = un(), v && v.c(), o = un(), p && p.c(), s = un(), r = qi("div"), a = qi("div"), Wt(_.$$.fragment), u = un(), y && y.c(), d = un(), w && w.c(), m = un(), R && R.c(), vi(n, "class", "icon-buttons svelte-1gjdske"), vi(a, "class", "upload-container svelte-1gjdske"), vi(r, "data-testid", "image"), vi(r, "class", "image-container svelte-1gjdske");
    },
    m(C, S) {
      Yt(e, C, S), Cn(C, t, S), Cn(C, n, S), b && b.m(n, null), jn(n, l), v && v.m(n, null), jn(n, o), p && p.m(n, null), Cn(C, s, S), Cn(C, r, S), jn(r, a), Yt(_, a, null), jn(a, u), y && y.m(a, null), jn(a, d), w && w.m(a, null), jn(r, m), R && R.m(r, null), g = !0;
    },
    p(C, S) {
      const E = {};
      S[0] & /*show_label*/
      8 && (E.show_label = /*show_label*/
      C[3]), S[0] & /*label*/
      4 && (E.label = /*label*/
      C[2] || "Image Annotator"), e.$set(E), /*showDownloadButton*/
      C[10] && /*value*/
      C[1] !== null ? b ? (b.p(C, S), S[0] & /*showDownloadButton, value*/
      1026 && ne(b, 1)) : (b = nr(C), b.c(), ne(b, 1), b.m(n, l)) : b && (dn(), ae(b, 1, 1, () => {
        b = null;
      }), fn()), /*showShareButton*/
      C[9] && /*value*/
      C[1] !== null ? v ? (v.p(C, S), S[0] & /*showShareButton, value*/
      514 && ne(v, 1)) : (v = ir(C), v.c(), ne(v, 1), v.m(n, o)) : v && (dn(), ae(v, 1, 1, () => {
        v = null;
      }), fn()), /*showClearButton*/
      C[11] && /*value*/
      C[1] !== null && /*interactive*/
      C[7] ? p ? (p.p(C, S), S[0] & /*showClearButton, value, interactive*/
      2178 && ne(p, 1)) : (p = lr(C), p.c(), ne(p, 1), p.m(n, null)) : p && (dn(), ae(p, 1, 1, () => {
        p = null;
      }), fn());
      const O = {};
      S[0] & /*value, active_source*/
      3 && (O.hidden = /*value*/
      C[1] !== null || /*active_source*/
      C[0] === "webcam"), S[0] & /*active_source*/
      1 && (O.filetype = /*active_source*/
      C[0] === "clipboard" ? "clipboard" : "image/*"), S[0] & /*root*/
      64 && (O.root = /*root*/
      C[6]), S[0] & /*max_file_size*/
      33554432 && (O.max_file_size = /*max_file_size*/
      C[25]), S[0] & /*sources*/
      16 && (O.disable_click = !/*sources*/
      C[4].includes("upload")), S[0] & /*cli_upload*/
      67108864 && (O.upload = /*cli_upload*/
      C[26]), S[0] & /*stream_handler*/
      134217728 && (O.stream_handler = /*stream_handler*/
      C[27]), S[0] & /*value*/
      2 | S[1] & /*$$scope*/
      16777216 && (O.$$scope = { dirty: S, ctx: C }), !c && S[1] & /*uploading*/
      1 && (c = !0, O.uploading = /*uploading*/
      C[31], vl(() => c = !1)), !f && S[1] & /*dragging*/
      2 && (f = !0, O.dragging = /*dragging*/
      C[32], vl(() => f = !1)), _.$set(O), /*value*/
      C[1] === null && /*active_source*/
      C[0] === "webcam" ? y ? (y.p(C, S), S[0] & /*value, active_source*/
      3 && ne(y, 1)) : (y = sr(C), y.c(), ne(y, 1), y.m(a, d)) : y && (dn(), ae(y, 1, 1, () => {
        y = null;
      }), fn()), /*value*/
      C[1] !== null ? w ? (w.p(C, S), S[0] & /*value*/
      2 && ne(w, 1)) : (w = ar(C), w.c(), ne(w, 1), w.m(a, null)) : w && (dn(), ae(w, 1, 1, () => {
        w = null;
      }), fn()), S[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (C[4].length > 1 || /*sources*/
      C[4].includes("clipboard")) && /*value*/
      C[1] === null && /*interactive*/
      C[7]), h ? R ? (R.p(C, S), S[0] & /*sources, value, interactive*/
      146 && ne(R, 1)) : (R = rr(C), R.c(), ne(R, 1), R.m(r, null)) : R && (dn(), ae(R, 1, 1, () => {
        R = null;
      }), fn());
    },
    i(C) {
      g || (ne(e.$$.fragment, C), ne(b), ne(v), ne(p), ne(_.$$.fragment, C), ne(y), ne(w), ne(R), g = !0);
    },
    o(C) {
      ae(e.$$.fragment, C), ae(b), ae(v), ae(p), ae(_.$$.fragment, C), ae(y), ae(w), ae(R), g = !1;
    },
    d(C) {
      C && (kn(t), kn(n), kn(s), kn(r)), Xt(e, C), b && b.d(), v && v.d(), p && p.d(), i[43](null), Xt(_), y && y.d(), w && w.d(), R && R.d();
    }
  };
}
function Qb(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(D, _t, Ge, nn) {
    function Ei(ln) {
      return ln instanceof Ge ? ln : new Ge(function(Mn) {
        Mn(ln);
      });
    }
    return new (Ge || (Ge = Promise))(function(ln, Mn) {
      function Yl(Ee) {
        try {
          li(nn.next(Ee));
        } catch (on) {
          Mn(on);
        }
      }
      function Il(Ee) {
        try {
          li(nn.throw(Ee));
        } catch (on) {
          Mn(on);
        }
      }
      function li(Ee) {
        Ee.done ? ln(Ee.value) : Ei(Ee.value).then(Yl, Il);
      }
      li((nn = nn.apply(D, _t || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: f } = e, { interactive: u } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: v } = e, { labelColors: p } = e, { boxMinSize: q } = e, { handleSize: L } = e, { height: B } = e, { width: y } = e, { boxThickness: w } = e, { disableEditBoxes: R } = e, { singleBox: C } = e, { showRemoveButton: S } = e, { handlesCursor: E } = e, { boxSelectedThickness: O } = e, { max_file_size: K = null } = e, { cli_upload: z } = e, { stream_handler: F } = e, { useDefaultLabel: T } = e, { enableKeyboardShortcuts: X } = e, { showBoxLabels: G } = e, W, V = !1, { active_source: Z = null } = e;
  function be({ detail: D }) {
    t(1, s = new er()), t(1, s.image = D, s), I("upload");
  }
  function de(D) {
    return o(this, void 0, void 0, function* () {
      const _t = yield W.load_files([new File([D], "webcam.png")]), Ge = (_t == null ? void 0 : _t[0]) || null;
      Ge ? (t(1, s = new er()), t(1, s.image = Ge, s)) : t(1, s = null), yield Kb(), I("change");
    });
  }
  const I = Pb();
  let Se = !1;
  function M(D) {
    return o(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          W.paste_clipboard();
          break;
      }
    });
  }
  function j() {
    t(1, s = null), I("clear"), I("change");
  }
  const J = async (D) => D === null ? "" : `<img src="${await Bd(D.image)}" />`;
  function P(D) {
    di.call(this, i, D);
  }
  function se(D) {
    di.call(this, i, D);
  }
  function Me(D) {
    Bi[D ? "unshift" : "push"](() => {
      W = D, t(33, W);
    });
  }
  function A(D) {
    V = D, t(31, V);
  }
  function Bt(D) {
    Se = D, t(32, Se);
  }
  function Ue(D) {
    di.call(this, i, D);
  }
  const at = (D) => de(D.detail), rt = (D) => de(D.detail);
  function Ht(D) {
    di.call(this, i, D);
  }
  function Rl(D) {
    di.call(this, i, D);
  }
  const Al = (D) => de(D.detail);
  function Wl(D) {
    s = D, t(1, s);
  }
  const ii = () => I("change");
  function Xl(D) {
    Z = D, t(0, Z), t(4, _);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, s = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, _ = D.sources), "selectable" in D && t(5, c = D.selectable), "root" in D && t(6, f = D.root), "interactive" in D && t(7, u = D.interactive), "i18n" in D && t(8, d = D.i18n), "showShareButton" in D && t(9, m = D.showShareButton), "showDownloadButton" in D && t(10, h = D.showDownloadButton), "showClearButton" in D && t(11, g = D.showClearButton), "boxesAlpha" in D && t(12, b = D.boxesAlpha), "labelList" in D && t(13, v = D.labelList), "labelColors" in D && t(14, p = D.labelColors), "boxMinSize" in D && t(15, q = D.boxMinSize), "handleSize" in D && t(16, L = D.handleSize), "height" in D && t(17, B = D.height), "width" in D && t(18, y = D.width), "boxThickness" in D && t(19, w = D.boxThickness), "disableEditBoxes" in D && t(20, R = D.disableEditBoxes), "singleBox" in D && t(21, C = D.singleBox), "showRemoveButton" in D && t(22, S = D.showRemoveButton), "handlesCursor" in D && t(23, E = D.handlesCursor), "boxSelectedThickness" in D && t(24, O = D.boxSelectedThickness), "max_file_size" in D && t(25, K = D.max_file_size), "cli_upload" in D && t(26, z = D.cli_upload), "stream_handler" in D && t(27, F = D.stream_handler), "useDefaultLabel" in D && t(28, T = D.useDefaultLabel), "enableKeyboardShortcuts" in D && t(29, X = D.enableKeyboardShortcuts), "showBoxLabels" in D && t(30, G = D.showBoxLabels), "active_source" in D && t(0, Z = D.active_source), "$$scope" in D && t(55, l = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[1] & /*uploading*/
    1 && V && j(), i.$$.dirty[1] & /*dragging*/
    2 && I("drag", Se), i.$$.dirty[0] & /*active_source, sources*/
    17 && !Z && _ && t(0, Z = _[0]);
  }, [
    Z,
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
    q,
    L,
    B,
    y,
    w,
    R,
    C,
    S,
    E,
    O,
    K,
    z,
    F,
    T,
    X,
    G,
    V,
    Se,
    W,
    be,
    de,
    I,
    M,
    j,
    n,
    J,
    P,
    se,
    Me,
    A,
    Bt,
    Ue,
    at,
    rt,
    Ht,
    Rl,
    Al,
    Wl,
    ii,
    Xl,
    l
  ];
}
class xb extends jb {
  constructor(e) {
    super(), Vb(
      this,
      e,
      Qb,
      Jb,
      Nb,
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
  SvelteComponent: e2,
  attr: rl,
  detach: C_,
  element: y_,
  init: t2,
  insert: S_,
  noop: _r,
  safe_not_equal: n2,
  src_url_equal: cr,
  toggle_class: Kt
} = window.__gradio__svelte__internal;
function ur(i) {
  let e, t;
  return {
    c() {
      e = y_("img"), cr(e.src, t = /*value*/
      i[0].url) || rl(e, "src", t), rl(e, "alt", "");
    },
    m(n, l) {
      S_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !cr(e.src, t = /*value*/
      n[0].url) && rl(e, "src", t);
    },
    d(n) {
      n && C_(e);
    }
  };
}
function i2(i) {
  let e, t = (
    /*value*/
    i[0] && ur(i)
  );
  return {
    c() {
      e = y_("div"), t && t.c(), rl(e, "class", "container svelte-1sgcyba"), Kt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Kt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Kt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Kt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      S_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = ur(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Kt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Kt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Kt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Kt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: _r,
    o: _r,
    d(n) {
      n && C_(e), t && t.d();
    }
  };
}
function l2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class kq extends e2 {
  constructor(e) {
    super(), t2(this, e, l2, i2, n2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: o2,
  add_flush_callback: fr,
  assign: s2,
  bind: dr,
  binding_callbacks: hr,
  check_outros: a2,
  create_component: Bn,
  destroy_component: Dn,
  detach: q_,
  empty: r2,
  flush: x,
  get_spread_object: _2,
  get_spread_update: c2,
  group_outros: u2,
  init: f2,
  insert: z_,
  mount_component: Ln,
  safe_not_equal: d2,
  space: h2,
  transition_in: It,
  transition_out: jt
} = window.__gradio__svelte__internal;
function m2(i) {
  let e, t;
  return e = new Au({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [p2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Bn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      32768 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (It(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function g2(i) {
  let e, t;
  return e = new Dr({
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
      Bn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      4 && (o.i18n = /*gradio*/
      n[33].i18n), e.$set(o);
    },
    i(n) {
      t || (It(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function b2(i) {
  let e, t;
  return e = new Dr({
    props: {
      i18n: (
        /*gradio*/
        i[33].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Bn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      4 && (o.i18n = /*gradio*/
      n[33].i18n), e.$set(o);
    },
    i(n) {
      t || (It(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function p2(i) {
  let e, t;
  return e = new kr({}), {
    c() {
      Bn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    i(n) {
      t || (It(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function w2(i) {
  let e, t, n, l;
  const o = [b2, g2, m2], s = [];
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
      t.c(), n = r2();
    },
    m(a, _) {
      s[e].m(a, _), z_(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (u2(), jt(s[c], 1, 1, () => {
        s[c] = null;
      }), a2(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), It(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (It(t), l = !0);
    },
    o(a) {
      jt(t), l = !1;
    },
    d(a) {
      a && q_(n), s[e].d(a);
    }
  };
}
function v2(i) {
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
    a = s2(a, r[u]);
  e = new T1({ props: a });
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
    $$slots: { default: [w2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[35] !== void 0 && (f.active_source = /*active_source*/
    i[35]), /*value*/
    i[0] !== void 0 && (f.value = /*value*/
    i[0]), n = new xb({ props: f }), hr.push(() => dr(n, "active_source", _)), hr.push(() => dr(n, "value", c)), n.$on(
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
        Bn(e.$$.fragment), t = h2(), Bn(n.$$.fragment);
      },
      m(u, d) {
        Ln(e, u, d), z_(u, t, d), Ln(n, u, d), s = !0;
      },
      p(u, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        4 ? c2(r, [
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
          2 && _2(
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
        u[35], fr(() => l = !1)), !o && d[0] & /*value*/
        1 && (o = !0, h.value = /*value*/
        u[0], fr(() => o = !1)), n.$set(h);
      },
      i(u) {
        s || (It(e.$$.fragment, u), It(n.$$.fragment, u), s = !0);
      },
      o(u) {
        jt(e.$$.fragment, u), jt(n.$$.fragment, u), s = !1;
      },
      d(u) {
        u && q_(t), Dn(e, u), Dn(n, u);
      }
    }
  );
}
function k2(i) {
  let e, t;
  return e = new lc({
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
      $$slots: { default: [v2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Bn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
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
      t || (It(e.$$.fragment, n), t = !0);
    },
    o(n) {
      jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function C2(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: f } = e, { _selectable: u = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: p } = e, { show_clear_button: q } = e, { interactive: L } = e, { boxes_alpha: B } = e, { label_list: y } = e, { label_colors: w } = e, { box_min_size: R } = e, { handle_size: C } = e, { box_thickness: S } = e, { box_selected_thickness: E } = e, { disable_edit_boxes: O } = e, { single_box: K } = e, { show_remove_button: z } = e, { handles_cursor: F } = e, { use_default_label: T } = e, { enable_keyboard_shortcuts: X } = e, { show_box_labels: G } = e, { gradio: W } = e, V, Z = null;
  function be(A) {
    Z = A, t(35, Z);
  }
  function de(A) {
    s = A, t(0, s);
  }
  const I = () => W.dispatch("change"), Se = () => W.dispatch("edit"), M = () => {
    W.dispatch("clear");
  }, j = ({ detail: A }) => t(34, V = A), J = () => W.dispatch("upload"), P = ({ detail: A }) => W.dispatch("select", A), se = ({ detail: A }) => W.dispatch("share", A), Me = ({ detail: A }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), W.dispatch("error", A);
  };
  return i.$$set = (A) => {
    "elem_id" in A && t(2, n = A.elem_id), "elem_classes" in A && t(3, l = A.elem_classes), "visible" in A && t(4, o = A.visible), "value" in A && t(0, s = A.value), "label" in A && t(5, r = A.label), "show_label" in A && t(6, a = A.show_label), "root" in A && t(7, _ = A.root), "height" in A && t(8, c = A.height), "width" in A && t(9, f = A.width), "_selectable" in A && t(10, u = A._selectable), "container" in A && t(11, d = A.container), "scale" in A && t(12, m = A.scale), "min_width" in A && t(13, h = A.min_width), "loading_status" in A && t(1, g = A.loading_status), "sources" in A && t(14, b = A.sources), "show_download_button" in A && t(15, v = A.show_download_button), "show_share_button" in A && t(16, p = A.show_share_button), "show_clear_button" in A && t(17, q = A.show_clear_button), "interactive" in A && t(18, L = A.interactive), "boxes_alpha" in A && t(19, B = A.boxes_alpha), "label_list" in A && t(20, y = A.label_list), "label_colors" in A && t(21, w = A.label_colors), "box_min_size" in A && t(22, R = A.box_min_size), "handle_size" in A && t(23, C = A.handle_size), "box_thickness" in A && t(24, S = A.box_thickness), "box_selected_thickness" in A && t(25, E = A.box_selected_thickness), "disable_edit_boxes" in A && t(26, O = A.disable_edit_boxes), "single_box" in A && t(27, K = A.single_box), "show_remove_button" in A && t(28, z = A.show_remove_button), "handles_cursor" in A && t(29, F = A.handles_cursor), "use_default_label" in A && t(30, T = A.use_default_label), "enable_keyboard_shortcuts" in A && t(31, X = A.enable_keyboard_shortcuts), "show_box_labels" in A && t(32, G = A.show_box_labels), "gradio" in A && t(33, W = A.gradio);
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
    q,
    L,
    B,
    y,
    w,
    R,
    C,
    S,
    E,
    O,
    K,
    z,
    F,
    T,
    X,
    G,
    W,
    V,
    Z,
    be,
    de,
    I,
    Se,
    M,
    j,
    J,
    P,
    se,
    Me
  ];
}
class Cq extends o2 {
  constructor(e) {
    super(), f2(
      this,
      e,
      C2,
      k2,
      d2,
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
    this.$$set({ elem_id: e }), x();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), x();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), x();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), x();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), x();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), x();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), x();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), x();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), x();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), x();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), x();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), x();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), x();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), x();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), x();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), x();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), x();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), x();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), x();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), x();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), x();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), x();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), x();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), x();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), x();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), x();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), x();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), x();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), x();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), x();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), x();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), x();
  }
  get show_box_labels() {
    return this.$$.ctx[32];
  }
  set show_box_labels(e) {
    this.$$set({ show_box_labels: e }), x();
  }
  get gradio() {
    return this.$$.ctx[33];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), x();
  }
}
export {
  kq as BaseExample,
  Cq as default
};
