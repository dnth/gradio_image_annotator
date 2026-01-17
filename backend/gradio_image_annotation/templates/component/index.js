const {
  SvelteComponent: lc,
  assign: oc,
  create_slot: sc,
  detach: ac,
  element: rc,
  get_all_dirty_from_scope: _c,
  get_slot_changes: cc,
  get_spread_update: uc,
  init: fc,
  insert: dc,
  safe_not_equal: hc,
  set_dynamic_element_data: zs,
  set_style: Pe,
  toggle_class: vt,
  transition_in: Dr,
  transition_out: Lr,
  update_slot_base: mc
} = window.__gradio__svelte__internal;
function gc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = sc(
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
    r = oc(r, s[a]);
  return {
    c() {
      e = rc(
        /*tag*/
        i[14]
      ), o && o.c(), zs(
        /*tag*/
        i[14]
      )(e, r), vt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), vt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), vt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), vt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), vt(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Pe(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Pe(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Pe(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Pe(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Pe(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Pe(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Pe(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      dc(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && mc(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? cc(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : _c(
          /*$$scope*/
          a[17]
        ),
        null
      ), zs(
        /*tag*/
        a[14]
      )(e, r = uc(s, [
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
      ])), vt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), vt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), vt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), vt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), vt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), _ & /*height*/
      1 && Pe(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && Pe(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && Pe(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && Pe(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && Pe(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && Pe(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Dr(o, a), n = !0);
    },
    o(a) {
      Lr(o, a), n = !1;
    },
    d(a) {
      a && ac(e), o && o.d(a);
    }
  };
}
function bc(i) {
  let e, t = (
    /*tag*/
    i[14] && gc(i)
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
      e || (Dr(t, n), e = !0);
    },
    o(n) {
      Lr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function pc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: f = !0 } = e, { type: u = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: v = null } = e, { min_width: p = 0 } = e, S = u === "fieldset" ? "fieldset" : "div";
  const D = (z) => {
    if (z !== void 0) {
      if (typeof z == "number")
        return z + "px";
      if (typeof z == "string")
        return z;
    }
  };
  return i.$$set = (z) => {
    "height" in z && t(0, o = z.height), "width" in z && t(1, s = z.width), "elem_id" in z && t(2, r = z.elem_id), "elem_classes" in z && t(3, a = z.elem_classes), "variant" in z && t(4, _ = z.variant), "border_mode" in z && t(5, c = z.border_mode), "padding" in z && t(6, f = z.padding), "type" in z && t(16, u = z.type), "test_id" in z && t(7, d = z.test_id), "explicit_call" in z && t(8, m = z.explicit_call), "container" in z && t(9, h = z.container), "visible" in z && t(10, g = z.visible), "allow_overflow" in z && t(11, b = z.allow_overflow), "scale" in z && t(12, v = z.scale), "min_width" in z && t(13, p = z.min_width), "$$scope" in z && t(17, l = z.$$scope);
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
    S,
    D,
    u,
    l,
    n
  ];
}
class wc extends lc {
  constructor(e) {
    super(), fc(this, e, pc, bc, hc, {
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
  SvelteComponent: vc,
  attr: kc,
  create_slot: Cc,
  detach: yc,
  element: Sc,
  get_all_dirty_from_scope: qc,
  get_slot_changes: zc,
  init: Bc,
  insert: Dc,
  safe_not_equal: Lc,
  transition_in: Mc,
  transition_out: Ec,
  update_slot_base: Rc
} = window.__gradio__svelte__internal;
function Wc(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = Cc(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = Sc("div"), l && l.c(), kc(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      Dc(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && Rc(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? zc(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : qc(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (Mc(l, o), t = !0);
    },
    o(o) {
      Ec(l, o), t = !1;
    },
    d(o) {
      o && yc(e), l && l.d(o);
    }
  };
}
function Ac(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class Xc extends vc {
  constructor(e) {
    super(), Bc(this, e, Ac, Wc, Lc, {});
  }
}
const {
  SvelteComponent: Yc,
  attr: Bs,
  check_outros: Ic,
  create_component: Hc,
  create_slot: jc,
  destroy_component: Tc,
  detach: fl,
  element: $c,
  empty: Fc,
  get_all_dirty_from_scope: Oc,
  get_slot_changes: Uc,
  group_outros: Vc,
  init: Nc,
  insert: dl,
  mount_component: xc,
  safe_not_equal: Pc,
  set_data: Kc,
  space: Zc,
  text: Gc,
  toggle_class: In,
  transition_in: ki,
  transition_out: hl,
  update_slot_base: Jc
} = window.__gradio__svelte__internal;
function Ds(i) {
  let e, t;
  return e = new Xc({
    props: {
      $$slots: { default: [Qc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Hc(e.$$.fragment);
    },
    m(n, l) {
      xc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (ki(e.$$.fragment, n), t = !0);
    },
    o(n) {
      hl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Tc(e, n);
    }
  };
}
function Qc(i) {
  let e;
  return {
    c() {
      e = Gc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      dl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Kc(
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
function eu(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = jc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Ds(i)
  );
  return {
    c() {
      e = $c("span"), s && s.c(), t = Zc(), r && r.c(), n = Fc(), Bs(e, "data-testid", "block-info"), Bs(e, "class", "svelte-22c38v"), In(e, "sr-only", !/*show_label*/
      i[0]), In(e, "hide", !/*show_label*/
      i[0]), In(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      dl(a, e, _), s && s.m(e, null), dl(a, t, _), r && r.m(a, _), dl(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && Jc(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? Uc(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : Oc(
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
      2 && ki(r, 1)) : (r = Ds(a), r.c(), ki(r, 1), r.m(n.parentNode, n)) : r && (Vc(), hl(r, 1, 1, () => {
        r = null;
      }), Ic());
    },
    i(a) {
      l || (ki(s, a), ki(r), l = !0);
    },
    o(a) {
      hl(s, a), hl(r), l = !1;
    },
    d(a) {
      a && (fl(e), fl(t), fl(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function tu(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class Mr extends Yc {
  constructor(e) {
    super(), Nc(this, e, tu, eu, Pc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: nu,
  append: Kl,
  attr: $i,
  create_component: iu,
  destroy_component: lu,
  detach: ou,
  element: Ls,
  init: su,
  insert: au,
  mount_component: ru,
  safe_not_equal: _u,
  set_data: cu,
  space: uu,
  text: fu,
  toggle_class: Ut,
  transition_in: du,
  transition_out: hu
} = window.__gradio__svelte__internal;
function mu(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Ls("label"), t = Ls("span"), iu(n.$$.fragment), l = uu(), o = fu(
        /*label*/
        i[0]
      ), $i(t, "class", "svelte-9gxdi0"), $i(e, "for", ""), $i(e, "data-testid", "block-label"), $i(e, "class", "svelte-9gxdi0"), Ut(e, "hide", !/*show_label*/
      i[2]), Ut(e, "sr-only", !/*show_label*/
      i[2]), Ut(
        e,
        "float",
        /*float*/
        i[4]
      ), Ut(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      au(r, e, a), Kl(e, t), ru(n, t, null), Kl(e, l), Kl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && cu(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Ut(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Ut(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Ut(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Ut(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (du(n.$$.fragment, r), s = !0);
    },
    o(r) {
      hu(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && ou(e), lu(n);
    }
  };
}
function gu(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class bu extends nu {
  constructor(e) {
    super(), su(this, e, gu, mu, _u, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: pu,
  append: No,
  attr: Xt,
  bubble: wu,
  create_component: vu,
  destroy_component: ku,
  detach: Er,
  element: xo,
  init: Cu,
  insert: Rr,
  listen: yu,
  mount_component: Su,
  safe_not_equal: qu,
  set_data: zu,
  set_style: Hn,
  space: Bu,
  text: Du,
  toggle_class: Xe,
  transition_in: Lu,
  transition_out: Mu
} = window.__gradio__svelte__internal;
function Ms(i) {
  let e, t;
  return {
    c() {
      e = xo("span"), t = Du(
        /*label*/
        i[1]
      ), Xt(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Rr(n, e, l), No(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && zu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Er(e);
    }
  };
}
function Eu(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && Ms(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = xo("button"), a && a.c(), t = Bu(), n = xo("div"), vu(l.$$.fragment), Xt(n, "class", "svelte-1lrphxw"), Xe(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Xe(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Xe(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Xt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Xt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Xt(
        e,
        "title",
        /*label*/
        i[1]
      ), Xt(e, "class", "svelte-1lrphxw"), Xe(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Xe(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Xe(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Xe(
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
      Rr(_, e, c), a && a.m(e, null), No(e, t), No(e, n), Su(l, n, null), o = !0, s || (r = yu(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = Ms(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Xe(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && Xe(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && Xe(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && Xt(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && Xt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && Xt(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && Xe(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && Xe(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && Xe(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && Xe(
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
      o || (Lu(l.$$.fragment, _), o = !0);
    },
    o(_) {
      Mu(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && Er(e), a && a.d(), ku(l), s = !1, r();
    }
  };
}
function Ru(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: f = !1 } = e, { hasPopup: u = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(v) {
    wu.call(this, i, v);
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
class Wl extends pu {
  constructor(e) {
    super(), Cu(this, e, Ru, Eu, qu, {
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
  SvelteComponent: Wu,
  append: Au,
  attr: Zl,
  binding_callbacks: Xu,
  create_slot: Yu,
  detach: Iu,
  element: Es,
  get_all_dirty_from_scope: Hu,
  get_slot_changes: ju,
  init: Tu,
  insert: $u,
  safe_not_equal: Fu,
  toggle_class: Vt,
  transition_in: Ou,
  transition_out: Uu,
  update_slot_base: Vu
} = window.__gradio__svelte__internal;
function Nu(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = Yu(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = Es("div"), t = Es("div"), o && o.c(), Zl(t, "class", "icon svelte-3w3rth"), Zl(e, "class", "empty svelte-3w3rth"), Zl(e, "aria-label", "Empty value"), Vt(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Vt(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Vt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Vt(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      $u(s, e, r), Au(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Vu(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? ju(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Hu(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Vt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Vt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Vt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Vt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (Ou(o, s), n = !0);
    },
    o(s) {
      Uu(o, s), n = !1;
    },
    d(s) {
      s && Iu(e), o && o.d(s), i[6](null);
    }
  };
}
function xu(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(f) {
    var u;
    if (!f) return !1;
    const { height: d } = f.getBoundingClientRect(), { height: m } = ((u = f.parentElement) === null || u === void 0 ? void 0 : u.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(f) {
    Xu[f ? "unshift" : "push"](() => {
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
class Pu extends Wu {
  constructor(e) {
    super(), Tu(this, e, xu, Nu, Fu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: tp,
  append: np,
  attr: ip,
  detach: lp,
  init: op,
  insert: sp,
  noop: ap,
  safe_not_equal: rp,
  svg_element: _p
} = window.__gradio__svelte__internal, {
  SvelteComponent: cp,
  append: up,
  attr: fp,
  detach: dp,
  init: hp,
  insert: mp,
  noop: gp,
  safe_not_equal: bp,
  svg_element: pp
} = window.__gradio__svelte__internal, {
  SvelteComponent: wp,
  append: vp,
  attr: kp,
  detach: Cp,
  init: yp,
  insert: Sp,
  noop: qp,
  safe_not_equal: zp,
  svg_element: Bp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ku,
  append: Rs,
  attr: Ye,
  detach: Zu,
  init: Gu,
  insert: Ju,
  noop: Gl,
  safe_not_equal: Qu,
  svg_element: Jl
} = window.__gradio__svelte__internal;
function ef(i) {
  let e, t, n;
  return {
    c() {
      e = Jl("svg"), t = Jl("path"), n = Jl("circle"), Ye(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ye(n, "cx", "12"), Ye(n, "cy", "13"), Ye(n, "r", "4"), Ye(e, "xmlns", "http://www.w3.org/2000/svg"), Ye(e, "width", "100%"), Ye(e, "height", "100%"), Ye(e, "viewBox", "0 0 24 24"), Ye(e, "fill", "none"), Ye(e, "stroke", "currentColor"), Ye(e, "stroke-width", "1.5"), Ye(e, "stroke-linecap", "round"), Ye(e, "stroke-linejoin", "round"), Ye(e, "class", "feather feather-camera");
    },
    m(l, o) {
      Ju(l, e, o), Rs(e, t), Rs(e, n);
    },
    p: Gl,
    i: Gl,
    o: Gl,
    d(l) {
      l && Zu(e);
    }
  };
}
class tf extends Ku {
  constructor(e) {
    super(), Gu(this, e, null, ef, Qu, {});
  }
}
const {
  SvelteComponent: Dp,
  append: Lp,
  attr: Mp,
  detach: Ep,
  init: Rp,
  insert: Wp,
  noop: Ap,
  safe_not_equal: Xp,
  svg_element: Yp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ip,
  append: Hp,
  attr: jp,
  detach: Tp,
  init: $p,
  insert: Fp,
  noop: Op,
  safe_not_equal: Up,
  svg_element: Vp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Np,
  append: xp,
  attr: Pp,
  detach: Kp,
  init: Zp,
  insert: Gp,
  noop: Jp,
  safe_not_equal: Qp,
  svg_element: ew
} = window.__gradio__svelte__internal, {
  SvelteComponent: nf,
  append: lf,
  attr: ct,
  detach: of,
  init: sf,
  insert: af,
  noop: Ql,
  safe_not_equal: rf,
  svg_element: Ws
} = window.__gradio__svelte__internal;
function _f(i) {
  let e, t;
  return {
    c() {
      e = Ws("svg"), t = Ws("circle"), ct(t, "cx", "12"), ct(t, "cy", "12"), ct(t, "r", "10"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "100%"), ct(e, "height", "100%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "stroke-width", "1.5"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-circle");
    },
    m(n, l) {
      af(n, e, l), lf(e, t);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(n) {
      n && of(e);
    }
  };
}
class cf extends nf {
  constructor(e) {
    super(), sf(this, e, null, _f, rf, {});
  }
}
const {
  SvelteComponent: uf,
  append: eo,
  attr: ut,
  detach: ff,
  init: df,
  insert: hf,
  noop: to,
  safe_not_equal: mf,
  set_style: kt,
  svg_element: Fi
} = window.__gradio__svelte__internal;
function gf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Fi("svg"), t = Fi("g"), n = Fi("path"), l = Fi("path"), ut(n, "d", "M18,6L6.087,17.913"), kt(n, "fill", "none"), kt(n, "fill-rule", "nonzero"), kt(n, "stroke-width", "2px"), ut(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), ut(l, "d", "M4.364,4.364L19.636,19.636"), kt(l, "fill", "none"), kt(l, "fill-rule", "nonzero"), kt(l, "stroke-width", "2px"), ut(e, "width", "100%"), ut(e, "height", "100%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "version", "1.1"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ut(e, "xml:space", "preserve"), ut(e, "stroke", "currentColor"), kt(e, "fill-rule", "evenodd"), kt(e, "clip-rule", "evenodd"), kt(e, "stroke-linecap", "round"), kt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      hf(o, e, s), eo(e, t), eo(t, n), eo(e, l);
    },
    p: to,
    i: to,
    o: to,
    d(o) {
      o && ff(e);
    }
  };
}
class Wr extends uf {
  constructor(e) {
    super(), df(this, e, null, gf, mf, {});
  }
}
const {
  SvelteComponent: tw,
  append: nw,
  attr: iw,
  detach: lw,
  init: ow,
  insert: sw,
  noop: aw,
  safe_not_equal: rw,
  svg_element: _w
} = window.__gradio__svelte__internal, {
  SvelteComponent: cw,
  append: uw,
  attr: fw,
  detach: dw,
  init: hw,
  insert: mw,
  noop: gw,
  safe_not_equal: bw,
  svg_element: pw
} = window.__gradio__svelte__internal, {
  SvelteComponent: bf,
  append: pf,
  attr: di,
  detach: wf,
  init: vf,
  insert: kf,
  noop: no,
  safe_not_equal: Cf,
  svg_element: As
} = window.__gradio__svelte__internal;
function yf(i) {
  let e, t;
  return {
    c() {
      e = As("svg"), t = As("path"), di(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), di(t, "fill", "currentColor"), di(e, "id", "icon"), di(e, "xmlns", "http://www.w3.org/2000/svg"), di(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      kf(n, e, l), pf(e, t);
    },
    p: no,
    i: no,
    o: no,
    d(n) {
      n && wf(e);
    }
  };
}
class Sf extends bf {
  constructor(e) {
    super(), vf(this, e, null, yf, Cf, {});
  }
}
const {
  SvelteComponent: ww,
  append: vw,
  attr: kw,
  detach: Cw,
  init: yw,
  insert: Sw,
  noop: qw,
  safe_not_equal: zw,
  svg_element: Bw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Dw,
  append: Lw,
  attr: Mw,
  detach: Ew,
  init: Rw,
  insert: Ww,
  noop: Aw,
  safe_not_equal: Xw,
  svg_element: Yw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Iw,
  append: Hw,
  attr: jw,
  detach: Tw,
  init: $w,
  insert: Fw,
  noop: Ow,
  safe_not_equal: Uw,
  svg_element: Vw
} = window.__gradio__svelte__internal, {
  SvelteComponent: qf,
  append: zf,
  attr: jn,
  detach: Bf,
  init: Df,
  insert: Lf,
  noop: io,
  safe_not_equal: Mf,
  svg_element: Xs
} = window.__gradio__svelte__internal;
function Ef(i) {
  let e, t;
  return {
    c() {
      e = Xs("svg"), t = Xs("path"), jn(t, "fill", "currentColor"), jn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), jn(e, "xmlns", "http://www.w3.org/2000/svg"), jn(e, "width", "100%"), jn(e, "height", "100%"), jn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Lf(n, e, l), zf(e, t);
    },
    p: io,
    i: io,
    o: io,
    d(n) {
      n && Bf(e);
    }
  };
}
class Rf extends qf {
  constructor(e) {
    super(), Df(this, e, null, Ef, Mf, {});
  }
}
const {
  SvelteComponent: Wf,
  append: Af,
  attr: Tn,
  detach: Xf,
  init: Yf,
  insert: If,
  noop: lo,
  safe_not_equal: Hf,
  svg_element: Ys
} = window.__gradio__svelte__internal;
function jf(i) {
  let e, t;
  return {
    c() {
      e = Ys("svg"), t = Ys("path"), Tn(t, "d", "M5 8l4 4 4-4z"), Tn(e, "class", "dropdown-arrow svelte-145leq6"), Tn(e, "xmlns", "http://www.w3.org/2000/svg"), Tn(e, "width", "100%"), Tn(e, "height", "100%"), Tn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      If(n, e, l), Af(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
    d(n) {
      n && Xf(e);
    }
  };
}
class ds extends Wf {
  constructor(e) {
    super(), Yf(this, e, null, jf, Hf, {});
  }
}
const {
  SvelteComponent: Nw,
  append: xw,
  attr: Pw,
  detach: Kw,
  init: Zw,
  insert: Gw,
  noop: Jw,
  safe_not_equal: Qw,
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
  init: $v,
  insert: Fv,
  noop: Ov,
  safe_not_equal: Uv,
  svg_element: Vv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Nv,
  append: xv,
  attr: Pv,
  detach: Kv,
  init: Zv,
  insert: Gv,
  noop: Jv,
  safe_not_equal: Qv,
  svg_element: e3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Tf,
  append: oo,
  attr: pe,
  detach: $f,
  init: Ff,
  insert: Of,
  noop: so,
  safe_not_equal: Uf,
  svg_element: Oi
} = window.__gradio__svelte__internal;
function Vf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Oi("svg"), t = Oi("rect"), n = Oi("circle"), l = Oi("polyline"), pe(t, "x", "3"), pe(t, "y", "3"), pe(t, "width", "18"), pe(t, "height", "18"), pe(t, "rx", "2"), pe(t, "ry", "2"), pe(n, "cx", "8.5"), pe(n, "cy", "8.5"), pe(n, "r", "1.5"), pe(l, "points", "21 15 16 10 5 21"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "width", "100%"), pe(e, "height", "100%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "fill", "none"), pe(e, "stroke", "currentColor"), pe(e, "stroke-width", "1.5"), pe(e, "stroke-linecap", "round"), pe(e, "stroke-linejoin", "round"), pe(e, "class", "feather feather-image");
    },
    m(o, s) {
      Of(o, e, s), oo(e, t), oo(e, n), oo(e, l);
    },
    p: so,
    i: so,
    o: so,
    d(o) {
      o && $f(e);
    }
  };
}
let Ar = class extends Tf {
  constructor(e) {
    super(), Ff(this, e, null, Vf, Uf, {});
  }
};
const {
  SvelteComponent: Nf,
  append: xf,
  attr: Ui,
  detach: Pf,
  init: Kf,
  insert: Zf,
  noop: ao,
  safe_not_equal: Gf,
  svg_element: Is
} = window.__gradio__svelte__internal;
function Jf(i) {
  let e, t;
  return {
    c() {
      e = Is("svg"), t = Is("path"), Ui(t, "fill", "currentColor"), Ui(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ui(e, "xmlns", "http://www.w3.org/2000/svg"), Ui(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      Zf(n, e, l), xf(e, t);
    },
    p: ao,
    i: ao,
    o: ao,
    d(n) {
      n && Pf(e);
    }
  };
}
class Xr extends Nf {
  constructor(e) {
    super(), Kf(this, e, null, Jf, Gf, {});
  }
}
const {
  SvelteComponent: n3,
  append: i3,
  attr: l3,
  detach: o3,
  init: s3,
  insert: a3,
  noop: r3,
  safe_not_equal: _3,
  svg_element: c3
} = window.__gradio__svelte__internal, {
  SvelteComponent: u3,
  append: f3,
  attr: d3,
  detach: h3,
  init: m3,
  insert: g3,
  noop: b3,
  safe_not_equal: p3,
  svg_element: w3
} = window.__gradio__svelte__internal, {
  SvelteComponent: v3,
  append: k3,
  attr: C3,
  detach: y3,
  init: S3,
  insert: q3,
  noop: z3,
  safe_not_equal: B3,
  svg_element: D3
} = window.__gradio__svelte__internal, {
  SvelteComponent: L3,
  append: M3,
  attr: E3,
  detach: R3,
  init: W3,
  insert: A3,
  noop: X3,
  safe_not_equal: Y3,
  svg_element: I3
} = window.__gradio__svelte__internal, {
  SvelteComponent: H3,
  append: j3,
  attr: T3,
  detach: $3,
  init: F3,
  insert: O3,
  noop: U3,
  safe_not_equal: V3,
  svg_element: N3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qf,
  append: Vi,
  attr: we,
  detach: ed,
  init: td,
  insert: nd,
  noop: ro,
  safe_not_equal: id,
  svg_element: hi
} = window.__gradio__svelte__internal;
function ld(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = hi("svg"), t = hi("path"), n = hi("path"), l = hi("line"), o = hi("line"), we(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), we(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), we(l, "x1", "12"), we(l, "y1", "19"), we(l, "x2", "12"), we(l, "y2", "23"), we(o, "x1", "8"), we(o, "y1", "23"), we(o, "x2", "16"), we(o, "y2", "23"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "width", "100%"), we(e, "height", "100%"), we(e, "viewBox", "0 0 24 24"), we(e, "fill", "none"), we(e, "stroke", "currentColor"), we(e, "stroke-width", "2"), we(e, "stroke-linecap", "round"), we(e, "stroke-linejoin", "round"), we(e, "class", "feather feather-mic");
    },
    m(s, r) {
      nd(s, e, r), Vi(e, t), Vi(e, n), Vi(e, l), Vi(e, o);
    },
    p: ro,
    i: ro,
    o: ro,
    d(s) {
      s && ed(e);
    }
  };
}
class od extends Qf {
  constructor(e) {
    super(), td(this, e, null, ld, id, {});
  }
}
const {
  SvelteComponent: x3,
  append: P3,
  attr: K3,
  detach: Z3,
  init: G3,
  insert: J3,
  noop: Q3,
  safe_not_equal: e4,
  svg_element: t4
} = window.__gradio__svelte__internal, {
  SvelteComponent: n4,
  append: i4,
  attr: l4,
  detach: o4,
  init: s4,
  insert: a4,
  noop: r4,
  safe_not_equal: _4,
  svg_element: c4
} = window.__gradio__svelte__internal, {
  SvelteComponent: u4,
  append: f4,
  attr: d4,
  detach: h4,
  init: m4,
  insert: g4,
  noop: b4,
  safe_not_equal: p4,
  svg_element: w4
} = window.__gradio__svelte__internal, {
  SvelteComponent: v4,
  append: k4,
  attr: C4,
  detach: y4,
  init: S4,
  insert: q4,
  noop: z4,
  safe_not_equal: B4,
  svg_element: D4
} = window.__gradio__svelte__internal, {
  SvelteComponent: L4,
  append: M4,
  attr: E4,
  detach: R4,
  init: W4,
  insert: A4,
  noop: X4,
  safe_not_equal: Y4,
  svg_element: I4
} = window.__gradio__svelte__internal, {
  SvelteComponent: H4,
  append: j4,
  attr: T4,
  detach: $4,
  init: F4,
  insert: O4,
  noop: U4,
  safe_not_equal: V4,
  svg_element: N4
} = window.__gradio__svelte__internal, {
  SvelteComponent: sd,
  append: Hs,
  attr: et,
  detach: ad,
  init: rd,
  insert: _d,
  noop: _o,
  safe_not_equal: cd,
  set_style: ud,
  svg_element: co
} = window.__gradio__svelte__internal;
function fd(i) {
  let e, t, n;
  return {
    c() {
      e = co("svg"), t = co("polyline"), n = co("path"), et(t, "points", "1 4 1 10 7 10"), et(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), et(e, "xmlns", "http://www.w3.org/2000/svg"), et(e, "width", "100%"), et(e, "height", "100%"), et(e, "viewBox", "0 0 24 24"), et(e, "fill", "none"), et(e, "stroke", "currentColor"), et(e, "stroke-width", "2"), et(e, "stroke-linecap", "round"), et(e, "stroke-linejoin", "round"), et(e, "class", "feather feather-rotate-ccw"), ud(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      _d(l, e, o), Hs(e, t), Hs(e, n);
    },
    p: _o,
    i: _o,
    o: _o,
    d(l) {
      l && ad(e);
    }
  };
}
class dd extends sd {
  constructor(e) {
    super(), rd(this, e, null, fd, cd, {});
  }
}
const {
  SvelteComponent: x4,
  append: P4,
  attr: K4,
  detach: Z4,
  init: G4,
  insert: J4,
  noop: Q4,
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
  SvelteComponent: u5,
  append: f5,
  attr: d5,
  detach: h5,
  init: m5,
  insert: g5,
  noop: b5,
  safe_not_equal: p5,
  svg_element: w5
} = window.__gradio__svelte__internal, {
  SvelteComponent: v5,
  append: k5,
  attr: C5,
  detach: y5,
  init: S5,
  insert: q5,
  noop: z5,
  safe_not_equal: B5,
  svg_element: D5
} = window.__gradio__svelte__internal, {
  SvelteComponent: L5,
  append: M5,
  attr: E5,
  detach: R5,
  init: W5,
  insert: A5,
  noop: X5,
  safe_not_equal: Y5,
  svg_element: I5
} = window.__gradio__svelte__internal, {
  SvelteComponent: hd,
  append: md,
  attr: Ie,
  detach: gd,
  init: bd,
  insert: pd,
  noop: uo,
  safe_not_equal: wd,
  svg_element: js
} = window.__gradio__svelte__internal;
function vd(i) {
  let e, t;
  return {
    c() {
      e = js("svg"), t = js("rect"), Ie(t, "x", "3"), Ie(t, "y", "3"), Ie(t, "width", "18"), Ie(t, "height", "18"), Ie(t, "rx", "2"), Ie(t, "ry", "2"), Ie(e, "xmlns", "http://www.w3.org/2000/svg"), Ie(e, "width", "100%"), Ie(e, "height", "100%"), Ie(e, "viewBox", "0 0 24 24"), Ie(e, "stroke-width", "1.5"), Ie(e, "stroke-linecap", "round"), Ie(e, "stroke-linejoin", "round"), Ie(e, "class", "feather feather-square");
    },
    m(n, l) {
      pd(n, e, l), md(e, t);
    },
    p: uo,
    i: uo,
    o: uo,
    d(n) {
      n && gd(e);
    }
  };
}
class kd extends hd {
  constructor(e) {
    super(), bd(this, e, null, vd, wd, {});
  }
}
const {
  SvelteComponent: H5,
  append: j5,
  attr: T5,
  detach: $5,
  init: F5,
  insert: O5,
  noop: U5,
  safe_not_equal: V5,
  svg_element: N5
} = window.__gradio__svelte__internal, {
  SvelteComponent: x5,
  append: P5,
  attr: K5,
  detach: Z5,
  init: G5,
  insert: J5,
  noop: Q5,
  safe_not_equal: ek,
  svg_element: tk
} = window.__gradio__svelte__internal, {
  SvelteComponent: nk,
  append: ik,
  attr: lk,
  detach: ok,
  init: sk,
  insert: ak,
  noop: rk,
  safe_not_equal: _k,
  svg_element: ck,
  text: uk
} = window.__gradio__svelte__internal, {
  SvelteComponent: fk,
  append: dk,
  attr: hk,
  detach: mk,
  init: gk,
  insert: bk,
  noop: pk,
  safe_not_equal: wk,
  svg_element: vk
} = window.__gradio__svelte__internal, {
  SvelteComponent: kk,
  append: Ck,
  attr: yk,
  detach: Sk,
  init: qk,
  insert: zk,
  noop: Bk,
  safe_not_equal: Dk,
  svg_element: Lk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cd,
  append: Ts,
  attr: tt,
  detach: yd,
  init: Sd,
  insert: qd,
  noop: fo,
  safe_not_equal: zd,
  svg_element: ho
} = window.__gradio__svelte__internal;
function Bd(i) {
  let e, t, n;
  return {
    c() {
      e = ho("svg"), t = ho("polyline"), n = ho("path"), tt(t, "points", "1 4 1 10 7 10"), tt(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "width", "100%"), tt(e, "height", "100%"), tt(e, "viewBox", "0 0 24 24"), tt(e, "fill", "none"), tt(e, "stroke", "currentColor"), tt(e, "stroke-width", "2"), tt(e, "stroke-linecap", "round"), tt(e, "stroke-linejoin", "round"), tt(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      qd(l, e, o), Ts(e, t), Ts(e, n);
    },
    p: fo,
    i: fo,
    o: fo,
    d(l) {
      l && yd(e);
    }
  };
}
class Dd extends Cd {
  constructor(e) {
    super(), Sd(this, e, null, Bd, zd, {});
  }
}
const {
  SvelteComponent: Ld,
  append: mo,
  attr: Be,
  detach: Md,
  init: Ed,
  insert: Rd,
  noop: go,
  safe_not_equal: Wd,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function Ad(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ni("svg"), t = Ni("path"), n = Ni("polyline"), l = Ni("line"), Be(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Be(n, "points", "17 8 12 3 7 8"), Be(l, "x1", "12"), Be(l, "y1", "3"), Be(l, "x2", "12"), Be(l, "y2", "15"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "90%"), Be(e, "height", "90%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "2"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Rd(o, e, s), mo(e, t), mo(e, n), mo(e, l);
    },
    p: go,
    i: go,
    o: go,
    d(o) {
      o && Md(e);
    }
  };
}
let Yr = class extends Ld {
  constructor(e) {
    super(), Ed(this, e, null, Ad, Wd, {});
  }
};
const {
  SvelteComponent: Ek,
  append: Rk,
  attr: Wk,
  detach: Ak,
  init: Xk,
  insert: Yk,
  noop: Ik,
  safe_not_equal: Hk,
  svg_element: jk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Tk,
  append: $k,
  attr: Fk,
  detach: Ok,
  init: Uk,
  insert: Vk,
  noop: Nk,
  safe_not_equal: xk,
  svg_element: Pk,
  text: Kk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Zk,
  append: Gk,
  attr: Jk,
  detach: Qk,
  init: e8,
  insert: t8,
  noop: n8,
  safe_not_equal: i8,
  svg_element: l8,
  text: o8
} = window.__gradio__svelte__internal, {
  SvelteComponent: s8,
  append: a8,
  attr: r8,
  detach: _8,
  init: c8,
  insert: u8,
  noop: f8,
  safe_not_equal: d8,
  svg_element: h8,
  text: m8
} = window.__gradio__svelte__internal, {
  SvelteComponent: g8,
  append: b8,
  attr: p8,
  detach: w8,
  init: v8,
  insert: k8,
  noop: C8,
  safe_not_equal: y8,
  svg_element: S8
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xd,
  append: $s,
  attr: Nt,
  detach: Yd,
  init: Id,
  insert: Hd,
  noop: bo,
  safe_not_equal: jd,
  svg_element: po
} = window.__gradio__svelte__internal;
function Td(i) {
  let e, t, n;
  return {
    c() {
      e = po("svg"), t = po("path"), n = po("path"), Nt(t, "fill", "currentColor"), Nt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Nt(n, "fill", "currentColor"), Nt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Nt(e, "xmlns", "http://www.w3.org/2000/svg"), Nt(e, "width", "100%"), Nt(e, "height", "100%"), Nt(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      Hd(l, e, o), $s(e, t), $s(e, n);
    },
    p: bo,
    i: bo,
    o: bo,
    d(l) {
      l && Yd(e);
    }
  };
}
let Ir = class extends Xd {
  constructor(e) {
    super(), Id(this, e, null, Td, jd, {});
  }
};
const $d = [
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
], Fs = {
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
$d.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: Fs[e][t],
    secondary: Fs[e][n]
  }
}), {});
class ml extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Fd(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new ml("Must be on Spaces to share.");
  let t, n, l;
  t = Od(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new ml(`Upload failed: ${_.error}`);
    }
    throw new ml("Upload failed.");
  }
  return await s.text();
}
function Od(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Ud,
  create_component: Vd,
  destroy_component: Nd,
  init: xd,
  mount_component: Pd,
  safe_not_equal: Kd,
  transition_in: Zd,
  transition_out: Gd
} = window.__gradio__svelte__internal, { createEventDispatcher: Jd } = window.__gradio__svelte__internal;
function Qd(i) {
  let e, t;
  return e = new Wl({
    props: {
      Icon: Sf,
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
      Vd(e.$$.fragment);
    },
    m(n, l) {
      Pd(e, n, l), t = !0;
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
      t || (Zd(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Gd(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Nd(e, n);
    }
  };
}
function e1(i, e, t) {
  const n = Jd();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof ml ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class t1 extends Ud {
  constructor(e) {
    super(), xd(this, e, e1, Qd, Kd, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: n1,
  append: pn,
  attr: Po,
  check_outros: i1,
  create_component: Hr,
  destroy_component: jr,
  detach: gl,
  element: Ko,
  group_outros: l1,
  init: o1,
  insert: bl,
  mount_component: Tr,
  safe_not_equal: s1,
  set_data: Zo,
  space: Go,
  text: Ci,
  toggle_class: Os,
  transition_in: vl,
  transition_out: kl
} = window.__gradio__svelte__internal;
function a1(i) {
  let e, t;
  return e = new Yr({}), {
    c() {
      Hr(e.$$.fragment);
    },
    m(n, l) {
      Tr(e, n, l), t = !0;
    },
    i(n) {
      t || (vl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jr(e, n);
    }
  };
}
function r1(i) {
  let e, t;
  return e = new Xr({}), {
    c() {
      Hr(e.$$.fragment);
    },
    m(n, l) {
      Tr(e, n, l), t = !0;
    },
    i(n) {
      t || (vl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      jr(e, n);
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
      e = Ko("span"), t = Ci("- "), l = Ci(n), o = Ci(" -"), s = Go(), a = Ci(r), Po(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      bl(_, e, c), pn(e, t), pn(e, l), pn(e, o), bl(_, s, c), bl(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && Zo(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && Zo(a, r);
    },
    d(_) {
      _ && (gl(e), gl(s), gl(a));
    }
  };
}
function _1(i) {
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
  const c = [r1, a1], f = [];
  function u(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = u(i), l = f[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && Us(i)
  );
  return {
    c() {
      e = Ko("div"), t = Ko("span"), l.c(), o = Go(), r = Ci(s), a = Go(), d && d.c(), Po(t, "class", "icon-wrap svelte-kzcjhc"), Os(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Po(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      bl(m, e, h), pn(e, t), f[n].m(t, null), pn(e, o), pn(e, r), pn(e, a), d && d.m(e, null), _ = !0;
    },
    p(m, [h]) {
      let g = n;
      n = u(m), n !== g && (l1(), kl(f[g], 1, 1, () => {
        f[g] = null;
      }), i1(), l = f[n], l || (l = f[n] = c[n](m), l.c()), vl(l, 1), l.m(t, null)), (!_ || h & /*hovered*/
      16) && Os(
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
      ) + "") && Zo(r, s), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = Us(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      _ || (vl(l), _ = !0);
    },
    o(m) {
      kl(l), _ = !1;
    },
    d(m) {
      m && gl(e), f[n].d(), d && d.d();
    }
  };
}
function c1(i, e, t) {
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
class $r extends n1 {
  constructor(e) {
    super(), o1(this, e, c1, _1, s1, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: z8,
  attr: B8,
  create_slot: D8,
  detach: L8,
  element: M8,
  get_all_dirty_from_scope: E8,
  get_slot_changes: R8,
  init: W8,
  insert: A8,
  safe_not_equal: X8,
  toggle_class: Y8,
  transition_in: I8,
  transition_out: H8,
  update_slot_base: j8
} = window.__gradio__svelte__internal, {
  SvelteComponent: u1,
  append: wo,
  attr: Dt,
  check_outros: yi,
  create_component: Al,
  destroy_component: Xl,
  detach: ei,
  element: Xi,
  empty: f1,
  group_outros: Si,
  init: d1,
  insert: ti,
  listen: Yl,
  mount_component: Il,
  safe_not_equal: h1,
  space: vo,
  toggle_class: sn,
  transition_in: Ce,
  transition_out: Te
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
  ), _, c = t && Ns(i), f = l && xs(i), u = s && Ps(i), d = a && Ks(i);
  return {
    c() {
      e = Xi("span"), c && c.c(), n = vo(), f && f.c(), o = vo(), u && u.c(), r = vo(), d && d.c(), Dt(e, "class", "source-selection svelte-1jp3vgd"), Dt(e, "data-testid", "source-select");
    },
    m(m, h) {
      ti(m, e, h), c && c.m(e, null), wo(e, n), f && f.m(e, null), wo(e, o), u && u.m(e, null), wo(e, r), d && d.m(e, null), _ = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && Ce(c, 1)) : (c = Ns(m), c.c(), Ce(c, 1), c.m(e, n)) : c && (Si(), Te(c, 1, 1, () => {
        c = null;
      }), yi()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? f ? (f.p(m, h), h & /*sources*/
      2 && Ce(f, 1)) : (f = xs(m), f.c(), Ce(f, 1), f.m(e, o)) : f && (Si(), Te(f, 1, 1, () => {
        f = null;
      }), yi()), h & /*sources*/
      2 && (s = /*sources*/
      m[1].includes("webcam")), s ? u ? (u.p(m, h), h & /*sources*/
      2 && Ce(u, 1)) : (u = Ps(m), u.c(), Ce(u, 1), u.m(e, r)) : u && (Si(), Te(u, 1, 1, () => {
        u = null;
      }), yi()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && Ce(d, 1)) : (d = Ks(m), d.c(), Ce(d, 1), d.m(e, null)) : d && (Si(), Te(d, 1, 1, () => {
        d = null;
      }), yi());
    },
    i(m) {
      _ || (Ce(c), Ce(f), Ce(u), Ce(d), _ = !0);
    },
    o(m) {
      Te(c), Te(f), Te(u), Te(d), _ = !1;
    },
    d(m) {
      m && ei(e), c && c.d(), f && f.d(), u && u.d(), d && d.d();
    }
  };
}
function Ns(i) {
  let e, t, n, l, o;
  return t = new Yr({}), {
    c() {
      e = Xi("button"), Al(t.$$.fragment), Dt(e, "class", "icon svelte-1jp3vgd"), Dt(e, "aria-label", "Upload file"), sn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      ti(s, e, r), Il(t, e, null), n = !0, l || (o = Yl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && sn(
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
      Te(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ei(e), Xl(t), l = !1, o();
    }
  };
}
function xs(i) {
  let e, t, n, l, o;
  return t = new od({}), {
    c() {
      e = Xi("button"), Al(t.$$.fragment), Dt(e, "class", "icon svelte-1jp3vgd"), Dt(e, "aria-label", "Record audio"), sn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      ti(s, e, r), Il(t, e, null), n = !0, l || (o = Yl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && sn(
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
      Te(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ei(e), Xl(t), l = !1, o();
    }
  };
}
function Ps(i) {
  let e, t, n, l, o;
  return t = new Ir({}), {
    c() {
      e = Xi("button"), Al(t.$$.fragment), Dt(e, "class", "icon svelte-1jp3vgd"), Dt(e, "aria-label", "Capture from camera"), sn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      ti(s, e, r), Il(t, e, null), n = !0, l || (o = Yl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && sn(
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
      Te(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ei(e), Xl(t), l = !1, o();
    }
  };
}
function Ks(i) {
  let e, t, n, l, o;
  return t = new Xr({}), {
    c() {
      e = Xi("button"), Al(t.$$.fragment), Dt(e, "class", "icon svelte-1jp3vgd"), Dt(e, "aria-label", "Paste from clipboard"), sn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      ti(s, e, r), Il(t, e, null), n = !0, l || (o = Yl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && sn(
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
      Te(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && ei(e), Xl(t), l = !1, o();
    }
  };
}
function m1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Vs(i)
  );
  return {
    c() {
      n && n.c(), e = f1();
    },
    m(l, o) {
      n && n.m(l, o), ti(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && Ce(n, 1)) : (n = Vs(l), n.c(), Ce(n, 1), n.m(e.parentNode, e)) : n && (Si(), Te(n, 1, 1, () => {
        n = null;
      }), yi());
    },
    i(l) {
      t || (Ce(n), t = !0);
    },
    o(l) {
      Te(n), t = !1;
    },
    d(l) {
      l && ei(e), n && n.d(l);
    }
  };
}
function g1(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(m, h, g, b) {
    function v(p) {
      return p instanceof g ? p : new g(function(S) {
        S(p);
      });
    }
    return new (g || (g = Promise))(function(p, S) {
      function D(w) {
        try {
          C(b.next(w));
        } catch (W) {
          S(W);
        }
      }
      function z(w) {
        try {
          C(b.throw(w));
        } catch (W) {
          S(W);
        }
      }
      function C(w) {
        w.done ? p(w.value) : v(w.value).then(D, z);
      }
      C((b = b.apply(m, h || [])).next());
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
class b1 extends u1 {
  constructor(e) {
    super(), d1(this, e, g1, m1, h1, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Pn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function pl() {
}
const p1 = (i) => i;
function Zs(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Fr = typeof window < "u";
let Gs = Fr ? () => window.performance.now() : () => Date.now(), Or = Fr ? (i) => requestAnimationFrame(i) : pl;
const Qn = /* @__PURE__ */ new Set();
function Ur(i) {
  Qn.forEach((e) => {
    e.c(i) || (Qn.delete(e), e.f());
  }), Qn.size !== 0 && Or(Ur);
}
function w1(i) {
  let e;
  return Qn.size === 0 && Or(Ur), { promise: new Promise((t) => {
    Qn.add(e = { c: i, f: t });
  }), abort() {
    Qn.delete(e);
  } };
}
function v1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function k1(i, { delay: e = 0, duration: t = 400, easing: n = p1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function Js(i, { delay: e = 0, duration: t = 400, easing: n = v1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [f, u] = Zs(l), [d, m] = Zs(o);
  return { delay: e, duration: t, easing: n, css: (h, g) => `
			transform: ${_} translate(${(1 - h) * f}${u}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}` };
}
const $n = [];
function C1(i, e = pl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const _ = !$n.length;
      for (const c of n) c[1](), $n.push(c, i);
      if (_) {
        for (let c = 0; c < $n.length; c += 2) $n[c][0]($n[c + 1]);
        $n.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = pl) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || pl), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function Qs(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Jo(i, e, t, n) {
  if (typeof t == "number" || Qs(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, Qs(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Jo(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Jo(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function ea(i, e = {}) {
  const t = C1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, f = 1, u = 0, d = !1;
  function m(g, b = {}) {
    c = g;
    const v = a = {};
    return i == null || b.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, s = Gs(), _ = g, t.set(i = c), Promise.resolve()) : (b.soft && (u = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), f = 0), r || (s = Gs(), d = !1, r = w1((p) => {
      if (d) return d = !1, r = null, !1;
      f = Math.min(f + u, 1);
      const S = { inv_mass: f, opts: h, settled: !0, dt: 60 * (p - s) / 1e3 }, D = Jo(S, _, i, c);
      return s = p, _ = i, t.set(i = D), S.settled && (r = null), !S.settled;
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
  SvelteComponent: y1,
  append: ft,
  attr: se,
  component_subscribe: ta,
  detach: S1,
  element: q1,
  init: z1,
  insert: B1,
  noop: na,
  safe_not_equal: D1,
  set_style: xi,
  svg_element: dt,
  toggle_class: ia
} = window.__gradio__svelte__internal, { onMount: L1 } = window.__gradio__svelte__internal;
function M1(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u;
  return {
    c() {
      e = q1("div"), t = dt("svg"), n = dt("g"), l = dt("path"), o = dt("path"), s = dt("path"), r = dt("path"), a = dt("g"), _ = dt("path"), c = dt("path"), f = dt("path"), u = dt("path"), se(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), se(l, "fill", "#FF7C00"), se(l, "fill-opacity", "0.4"), se(l, "class", "svelte-43sxxs"), se(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), se(o, "fill", "#FF7C00"), se(o, "class", "svelte-43sxxs"), se(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), se(s, "fill", "#FF7C00"), se(s, "fill-opacity", "0.4"), se(s, "class", "svelte-43sxxs"), se(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), se(r, "fill", "#FF7C00"), se(r, "class", "svelte-43sxxs"), xi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), se(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), se(_, "fill", "#FF7C00"), se(_, "fill-opacity", "0.4"), se(_, "class", "svelte-43sxxs"), se(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), se(c, "fill", "#FF7C00"), se(c, "class", "svelte-43sxxs"), se(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), se(f, "fill", "#FF7C00"), se(f, "fill-opacity", "0.4"), se(f, "class", "svelte-43sxxs"), se(u, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), se(u, "fill", "#FF7C00"), se(u, "class", "svelte-43sxxs"), xi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), se(t, "viewBox", "-1200 -1200 3000 3000"), se(t, "fill", "none"), se(t, "xmlns", "http://www.w3.org/2000/svg"), se(t, "class", "svelte-43sxxs"), se(e, "class", "svelte-43sxxs"), ia(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      B1(d, e, m), ft(e, t), ft(t, n), ft(n, l), ft(n, o), ft(n, s), ft(n, r), ft(t, a), ft(a, _), ft(a, c), ft(a, f), ft(a, u);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && xi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && xi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && ia(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: na,
    o: na,
    d(d) {
      d && S1(e);
    }
  };
}
function E1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(d, m, h, g) {
    function b(v) {
      return v instanceof h ? v : new h(function(p) {
        p(v);
      });
    }
    return new (h || (h = Promise))(function(v, p) {
      function S(C) {
        try {
          z(g.next(C));
        } catch (w) {
          p(w);
        }
      }
      function D(C) {
        try {
          z(g.throw(C));
        } catch (w) {
          p(w);
        }
      }
      function z(C) {
        C.done ? v(C.value) : b(C.value).then(S, D);
      }
      z((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = ea([0, 0]);
  ta(i, r, (d) => t(1, n = d));
  const a = ea([0, 0]);
  ta(i, a, (d) => t(2, l = d));
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
  return L1(() => (u(), () => _ = !0)), i.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, l, r, a];
}
class R1 extends y1 {
  constructor(e) {
    super(), z1(this, e, E1, M1, D1, { margin: 0 });
  }
}
const {
  SvelteComponent: W1,
  append: wn,
  attr: bt,
  binding_callbacks: la,
  check_outros: Qo,
  create_component: Vr,
  create_slot: Nr,
  destroy_component: xr,
  destroy_each: Pr,
  detach: V,
  element: zt,
  empty: ni,
  ensure_array_like: Cl,
  get_all_dirty_from_scope: Kr,
  get_slot_changes: Zr,
  group_outros: es,
  init: A1,
  insert: N,
  mount_component: Gr,
  noop: ts,
  safe_not_equal: X1,
  set_data: at,
  set_style: ln,
  space: st,
  text: ge,
  toggle_class: ot,
  transition_in: gt,
  transition_out: Bt,
  update_slot_base: Jr
} = window.__gradio__svelte__internal, { tick: Y1 } = window.__gradio__svelte__internal, { onDestroy: I1 } = window.__gradio__svelte__internal, { createEventDispatcher: H1 } = window.__gradio__svelte__internal, j1 = (i) => ({}), oa = (i) => ({}), T1 = (i) => ({}), sa = (i) => ({});
function aa(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function ra(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function $1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new Wl({
    props: {
      Icon: Wr,
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
  ), c = Nr(
    _,
    i,
    /*$$scope*/
    i[29],
    oa
  );
  return {
    c() {
      e = zt("div"), Vr(t.$$.fragment), n = st(), l = zt("span"), s = ge(o), r = st(), c && c.c(), bt(e, "class", "clear-status svelte-16nch4a"), bt(l, "class", "error svelte-16nch4a");
    },
    m(f, u) {
      N(f, e, u), Gr(t, e, null), N(f, n, u), N(f, l, u), wn(l, s), N(f, r, u), c && c.m(f, u), a = !0;
    },
    p(f, u) {
      const d = {};
      u[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      f[1]("common.clear")), t.$set(d), (!a || u[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      f[1]("common.error") + "") && at(s, o), c && c.p && (!a || u[0] & /*$$scope*/
      536870912) && Jr(
        c,
        _,
        f,
        /*$$scope*/
        f[29],
        a ? Zr(
          _,
          /*$$scope*/
          f[29],
          u,
          j1
        ) : Kr(
          /*$$scope*/
          f[29]
        ),
        oa
      );
    },
    i(f) {
      a || (gt(t.$$.fragment, f), gt(c, f), a = !0);
    },
    o(f) {
      Bt(t.$$.fragment, f), Bt(c, f), a = !1;
    },
    d(f) {
      f && (V(e), V(n), V(l), V(r)), xr(t), c && c.d(f);
    }
  };
}
function F1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && _a(i)
  );
  function f(p, S) {
    if (
      /*progress*/
      p[7]
    ) return V1;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return U1;
    if (
      /*queue_position*/
      p[2] === 0
    ) return O1;
  }
  let u = f(i), d = u && u(i), m = (
    /*timer*/
    i[5] && fa(i)
  );
  const h = [K1, P1], g = [];
  function b(p, S) {
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
  i[5] && wa(i);
  return {
    c() {
      c && c.c(), e = st(), t = zt("div"), d && d.c(), n = st(), m && m.c(), l = st(), s && s.c(), r = st(), v && v.c(), a = ni(), bt(t, "class", "progress-text svelte-16nch4a"), ot(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), ot(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, S) {
      c && c.m(p, S), N(p, e, S), N(p, t, S), d && d.m(t, null), wn(t, n), m && m.m(t, null), N(p, l, S), ~o && g[o].m(p, S), N(p, r, S), v && v.m(p, S), N(p, a, S), _ = !0;
    },
    p(p, S) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? c ? c.p(p, S) : (c = _a(p), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), u === (u = f(p)) && d ? d.p(p, S) : (d && d.d(1), d = u && u(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? m ? m.p(p, S) : (m = fa(p), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!_ || S[0] & /*variant*/
      256) && ot(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!_ || S[0] & /*variant*/
      256) && ot(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let D = o;
      o = b(p), o === D ? ~o && g[o].p(p, S) : (s && (es(), Bt(g[D], 1, 1, () => {
        g[D] = null;
      }), Qo()), ~o ? (s = g[o], s ? s.p(p, S) : (s = g[o] = h[o](p), s.c()), gt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? v && (es(), Bt(v, 1, 1, () => {
        v = null;
      }), Qo()) : v ? (v.p(p, S), S[0] & /*timer*/
      32 && gt(v, 1)) : (v = wa(p), v.c(), gt(v, 1), v.m(a.parentNode, a));
    },
    i(p) {
      _ || (gt(s), gt(v), _ = !0);
    },
    o(p) {
      Bt(s), Bt(v), _ = !1;
    },
    d(p) {
      p && (V(e), V(t), V(l), V(r), V(a)), c && c.d(p), d && d.d(), m && m.d(), ~o && g[o].d(p), v && v.d(p);
    }
  };
}
function _a(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = zt("div"), bt(e, "class", "eta-bar svelte-16nch4a"), ln(e, "transform", t);
    },
    m(n, l) {
      N(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && ln(e, "transform", t);
    },
    d(n) {
      n && V(e);
    }
  };
}
function O1(i) {
  let e;
  return {
    c() {
      e = ge("processing |");
    },
    m(t, n) {
      N(t, e, n);
    },
    p: ts,
    d(t) {
      t && V(e);
    }
  };
}
function U1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = ge("queue: "), n = ge(t), l = ge("/"), o = ge(
        /*queue_size*/
        i[3]
      ), s = ge(" |");
    },
    m(r, a) {
      N(r, e, a), N(r, n, a), N(r, l, a), N(r, o, a), N(r, s, a);
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
function V1(i) {
  let e, t = Cl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ua(ra(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ni();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      N(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = Cl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ra(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ua(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && V(e), Pr(n, l);
    }
  };
}
function ca(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, f) {
    return (
      /*p*/
      c[41].length != null ? x1 : N1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = st(), n = ge(t), l = ge(" | "), s = ge(o);
    },
    m(c, f) {
      _.m(c, f), N(c, e, f), N(c, n, f), N(c, l, f), N(c, s, f);
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
function N1(i) {
  let e = Pn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ge(e);
    },
    m(n, l) {
      N(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Pn(
        /*p*/
        n[41].index || 0
      ) + "") && at(t, e);
    },
    d(n) {
      n && V(t);
    }
  };
}
function x1(i) {
  let e = Pn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Pn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = ge(e), n = ge("/"), o = ge(l);
    },
    m(s, r) {
      N(s, t, r), N(s, n, r), N(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Pn(
        /*p*/
        s[41].index || 0
      ) + "") && at(t, e), r[0] & /*progress*/
      128 && l !== (l = Pn(
        /*p*/
        s[41].length
      ) + "") && at(o, l);
    },
    d(s) {
      s && (V(t), V(n), V(o));
    }
  };
}
function ua(i) {
  let e, t = (
    /*p*/
    i[41].index != null && ca(i)
  );
  return {
    c() {
      t && t.c(), e = ni();
    },
    m(n, l) {
      t && t.m(n, l), N(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = ca(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && V(e), t && t.d(n);
    }
  };
}
function fa(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = ge(
        /*formatted_timer*/
        i[20]
      ), n = ge(t), l = ge("s");
    },
    m(o, s) {
      N(o, e, s), N(o, n, s), N(o, l, s);
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
function P1(i) {
  let e, t;
  return e = new R1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Vr(e.$$.fragment);
    },
    m(n, l) {
      Gr(e, n, l), t = !0;
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
      Bt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      xr(e, n);
    }
  };
}
function K1(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && da(i)
  );
  return {
    c() {
      e = zt("div"), t = zt("div"), r && r.c(), n = st(), l = zt("div"), o = zt("div"), bt(t, "class", "progress-level-inner svelte-16nch4a"), bt(o, "class", "progress-bar svelte-16nch4a"), ln(o, "width", s), bt(l, "class", "progress-bar-wrap svelte-16nch4a"), bt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      N(a, e, _), wn(e, t), r && r.m(t, null), wn(e, n), wn(e, l), wn(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = da(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && ln(o, "width", s);
    },
    i: ts,
    o: ts,
    d(a) {
      a && V(e), r && r.d(), i[31](null);
    }
  };
}
function da(i) {
  let e, t = Cl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = pa(aa(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ni();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      N(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = Cl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = aa(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = pa(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && V(e), Pr(n, l);
    }
  };
}
function ha(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && Z1()
  ), s = (
    /*p*/
    i[41].desc != null && ma(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && ga()
  ), a = (
    /*progress_level*/
    i[14] != null && ba(i)
  );
  return {
    c() {
      o && o.c(), e = st(), s && s.c(), t = st(), r && r.c(), n = st(), a && a.c(), l = ni();
    },
    m(_, c) {
      o && o.m(_, c), N(_, e, c), s && s.m(_, c), N(_, t, c), r && r.m(_, c), N(_, n, c), a && a.m(_, c), N(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = ma(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = ga(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = ba(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && (V(e), V(t), V(n), V(l)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function Z1(i) {
  let e;
  return {
    c() {
      e = ge(" /");
    },
    m(t, n) {
      N(t, e, n);
    },
    d(t) {
      t && V(e);
    }
  };
}
function ma(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = ge(e);
    },
    m(n, l) {
      N(n, t, l);
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
function ga(i) {
  let e;
  return {
    c() {
      e = ge("-");
    },
    m(t, n) {
      N(t, e, n);
    },
    d(t) {
      t && V(e);
    }
  };
}
function ba(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ge(e), n = ge("%");
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
      ] || 0)).toFixed(1) + "") && at(t, e);
    },
    d(l) {
      l && (V(t), V(n));
    }
  };
}
function pa(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && ha(i)
  );
  return {
    c() {
      t && t.c(), e = ni();
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
      ] != null ? t ? t.p(n, l) : (t = ha(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && V(e), t && t.d(n);
    }
  };
}
function wa(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Nr(
    o,
    i,
    /*$$scope*/
    i[29],
    sa
  );
  return {
    c() {
      e = zt("p"), t = ge(
        /*loading_text*/
        i[9]
      ), n = st(), s && s.c(), bt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      N(r, e, a), wn(e, t), N(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && at(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && Jr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? Zr(
          o,
          /*$$scope*/
          r[29],
          a,
          T1
        ) : Kr(
          /*$$scope*/
          r[29]
        ),
        sa
      );
    },
    i(r) {
      l || (gt(s, r), l = !0);
    },
    o(r) {
      Bt(s, r), l = !1;
    },
    d(r) {
      r && (V(e), V(n)), s && s.d(r);
    }
  };
}
function G1(i) {
  let e, t, n, l, o;
  const s = [F1, $1], r = [];
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
      e = zt("div"), n && n.c(), bt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), ot(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), ot(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), ot(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), ot(
        e,
        "border",
        /*border*/
        i[12]
      ), ln(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), ln(
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
      t = a(_), t === f ? ~t && r[t].p(_, c) : (n && (es(), Bt(r[f], 1, 1, () => {
        r[f] = null;
      }), Qo()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), gt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && bt(e, "class", l), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && ot(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && ot(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && ot(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && ot(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && ln(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && ln(
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
      Bt(n), o = !1;
    },
    d(_) {
      _ && V(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var J1 = function(i, e, t, n) {
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
let Pi = [], ko = !1;
function Q1(i) {
  return J1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Pi.push(e), !ko) ko = !0;
      else return;
      yield Y1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Pi.length; l++) {
          const s = Pi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), ko = !1, Pi = [];
      });
    }
  });
}
function eh(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = H1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: f } = e, { scroll_to_output: u = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: S = !1 } = e, { border: D = !1 } = e, { autoscroll: z } = e, C, w = !1, W = 0, y = 0, q = null, R = null, K = 0, O = null, B, Z = null, _e = !0;
  const I = () => {
    t(0, a = t(27, q = t(19, P = null))), t(25, W = performance.now()), t(26, y = 0), w = !0, T();
  };
  function T() {
    requestAnimationFrame(() => {
      t(26, y = (performance.now() - W) / 1e3), w && T();
    });
  }
  function M() {
    t(26, y = 0), t(0, a = t(27, q = t(19, P = null))), w && (w = !1);
  }
  I1(() => {
    w && M();
  });
  let P = null;
  function U(Y) {
    la[Y ? "unshift" : "push"](() => {
      Z = Y, t(16, Z), t(7, g), t(14, O), t(15, B);
    });
  }
  const ne = () => {
    s("clear_status");
  };
  function j(Y) {
    la[Y ? "unshift" : "push"](() => {
      C = Y, t(13, C);
    });
  }
  return i.$$set = (Y) => {
    "i18n" in Y && t(1, r = Y.i18n), "eta" in Y && t(0, a = Y.eta), "queue_position" in Y && t(2, _ = Y.queue_position), "queue_size" in Y && t(3, c = Y.queue_size), "status" in Y && t(4, f = Y.status), "scroll_to_output" in Y && t(22, u = Y.scroll_to_output), "timer" in Y && t(5, d = Y.timer), "show_progress" in Y && t(6, m = Y.show_progress), "message" in Y && t(23, h = Y.message), "progress" in Y && t(7, g = Y.progress), "variant" in Y && t(8, b = Y.variant), "loading_text" in Y && t(9, v = Y.loading_text), "absolute" in Y && t(10, p = Y.absolute), "translucent" in Y && t(11, S = Y.translucent), "border" in Y && t(12, D = Y.border), "autoscroll" in Y && t(24, z = Y.autoscroll), "$$scope" in Y && t(29, o = Y.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = q), a != null && q !== a && (t(28, R = (performance.now() - W) / 1e3 + a), t(19, P = R.toFixed(1)), t(27, q = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, K = R === null || R <= 0 || !y ? null : Math.min(y / R, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, _e = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, O = g.map((Y) => {
      if (Y.index != null && Y.length != null)
        return Y.index / Y.length;
      if (Y.progress != null)
        return Y.progress;
    })) : t(14, O = null), O ? (t(15, B = O[O.length - 1]), Z && (B === 0 ? t(16, Z.style.transition = "0", Z) : t(16, Z.style.transition = "150ms", Z))) : t(15, B = void 0)), i.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? I() : M()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && C && u && (f === "pending" || f === "complete") && Q1(C, z), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = y.toFixed(1));
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
    S,
    D,
    C,
    O,
    B,
    Z,
    K,
    _e,
    P,
    n,
    s,
    u,
    h,
    z,
    W,
    y,
    q,
    R,
    o,
    l,
    U,
    ne,
    j
  ];
}
class th extends W1 {
  constructor(e) {
    super(), A1(
      this,
      e,
      eh,
      G1,
      X1,
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
  SvelteComponent: T8,
  add_render_callback: $8,
  append: F8,
  attr: O8,
  bubble: U8,
  check_outros: V8,
  create_component: N8,
  create_in_transition: x8,
  create_out_transition: P8,
  destroy_component: K8,
  detach: Z8,
  element: G8,
  group_outros: J8,
  init: Q8,
  insert: e6,
  listen: t6,
  mount_component: n6,
  run_all: i6,
  safe_not_equal: l6,
  set_data: o6,
  space: s6,
  stop_propagation: a6,
  text: r6,
  transition_in: _6,
  transition_out: c6
} = window.__gradio__svelte__internal, { createEventDispatcher: u6, onMount: f6 } = window.__gradio__svelte__internal, {
  SvelteComponent: d6,
  append: h6,
  attr: m6,
  bubble: g6,
  check_outros: b6,
  create_animation: p6,
  create_component: w6,
  destroy_component: v6,
  detach: k6,
  element: C6,
  ensure_array_like: y6,
  fix_and_outro_and_destroy_block: S6,
  fix_position: q6,
  group_outros: z6,
  init: B6,
  insert: D6,
  mount_component: L6,
  noop: M6,
  safe_not_equal: E6,
  set_style: R6,
  space: W6,
  transition_in: A6,
  transition_out: X6,
  update_keyed_each: Y6
} = window.__gradio__svelte__internal, { setContext: I6, getContext: nh } = window.__gradio__svelte__internal, ih = "WORKER_PROXY_CONTEXT_KEY";
function Qr() {
  return nh(ih);
}
function lh(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function e_(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function t_(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!lh(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function oh(i) {
  if (i == null || !t_(i))
    return i;
  const e = Qr();
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
      type: e_(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: sh,
  assign: yl,
  check_outros: n_,
  compute_rest_props: va,
  create_slot: hs,
  detach: Hl,
  element: i_,
  empty: l_,
  exclude_internal_props: ah,
  get_all_dirty_from_scope: ms,
  get_slot_changes: gs,
  get_spread_update: o_,
  group_outros: s_,
  init: rh,
  insert: jl,
  listen: a_,
  prevent_default: _h,
  safe_not_equal: ch,
  set_attributes: Sl,
  transition_in: Bn,
  transition_out: Dn,
  update_slot_base: bs
} = window.__gradio__svelte__internal, { createEventDispatcher: uh } = window.__gradio__svelte__internal;
function fh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = hs(
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
      e = i_("a"), r && r.c(), Sl(e, _);
    },
    m(c, f) {
      jl(c, e, f), r && r.m(e, null), n = !0, l || (o = a_(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, f) {
      r && r.p && (!n || f & /*$$scope*/
      128) && bs(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? gs(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ms(
          /*$$scope*/
          c[7]
        ),
        null
      ), Sl(e, _ = o_(a, [
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
      n || (Bn(r, c), n = !0);
    },
    o(c) {
      Dn(r, c), n = !1;
    },
    d(c) {
      c && Hl(e), r && r.d(c), l = !1, o();
    }
  };
}
function dh(i) {
  let e, t, n, l;
  const o = [mh, hh], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = l_();
    },
    m(a, _) {
      s[e].m(a, _), jl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (s_(), Dn(s[c], 1, 1, () => {
        s[c] = null;
      }), n_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Bn(t), l = !0);
    },
    o(a) {
      Dn(t), l = !1;
    },
    d(a) {
      a && Hl(n), s[e].d(a);
    }
  };
}
function hh(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = hs(
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
      e = i_("a"), s && s.c(), Sl(e, a);
    },
    m(_, c) {
      jl(_, e, c), s && s.m(e, null), t = !0, n || (l = a_(e, "click", _h(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && bs(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? gs(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : ms(
          /*$$scope*/
          _[7]
        ),
        null
      ), Sl(e, a = o_(r, [
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
      t || (Bn(s, _), t = !0);
    },
    o(_) {
      Dn(s, _), t = !1;
    },
    d(_) {
      _ && Hl(e), s && s.d(_), n = !1, l();
    }
  };
}
function mh(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = hs(
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
      128) && bs(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? gs(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : ms(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (Bn(n, l), e = !0);
    },
    o(l) {
      Dn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function gh(i) {
  let e, t, n, l, o;
  const s = [dh, fh], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && t_(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = l_();
    },
    m(_, c) {
      r[t].m(_, c), jl(_, l, c), o = !0;
    },
    p(_, [c]) {
      let f = t;
      t = a(_, c), t === f ? r[t].p(_, c) : (s_(), Dn(r[f], 1, 1, () => {
        r[f] = null;
      }), n_(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), Bn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (Bn(n), o = !0);
    },
    o(_) {
      Dn(n), o = !1;
    },
    d(_) {
      _ && Hl(l), r[t].d(_);
    }
  };
}
function bh(i, e, t) {
  const n = ["href", "download"];
  let l = va(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(m, h, g, b) {
    function v(p) {
      return p instanceof g ? p : new g(function(S) {
        S(p);
      });
    }
    return new (g || (g = Promise))(function(p, S) {
      function D(w) {
        try {
          C(b.next(w));
        } catch (W) {
          S(W);
        }
      }
      function z(w) {
        try {
          C(b.throw(w));
        } catch (W) {
          S(W);
        }
      }
      function C(w) {
        w.done ? p(w.value) : v(w.value).then(D, z);
      }
      C((b = b.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = uh();
  let f = !1;
  const u = Qr();
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
            type: e_(g.headers, "content-type")
          }
        ), v = URL.createObjectURL(b), p = document.createElement("a");
        p.href = v, p.download = _, p.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, f = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = yl(yl({}, e), ah(m)), t(6, l = va(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, _ = m.download), "$$scope" in m && t(7, s = m.$$scope);
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
class ph extends sh {
  constructor(e) {
    super(), rh(this, e, bh, gh, ch, { href: 0, download: 1 });
  }
}
var wh = Object.defineProperty, vh = (i, e, t) => e in i ? wh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Rt = (i, e, t) => (vh(i, typeof e != "symbol" ? e + "" : e, t), t), r_ = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, mi = (i, e, t) => (r_(i, e, "read from private field"), e.get(i)), kh = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Ch = (i, e, t, n) => (r_(i, e, "write to private field"), e.set(i, t), t), Qt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function __(i, e) {
  return i.map(
    (t) => new yh({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class yh {
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
    Rt(this, "path"), Rt(this, "url"), Rt(this, "orig_name"), Rt(this, "size"), Rt(this, "blob"), Rt(this, "is_stream"), Rt(this, "mime_type"), Rt(this, "alt_text"), Rt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class H6 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = mi(this, Qt) + t; ; ) {
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
        Ch(this, Qt, t);
      },
      flush: (t) => {
        if (mi(this, Qt) === "")
          return;
        const n = e.allowCR && mi(this, Qt).endsWith("\r") ? mi(this, Qt).slice(0, -1) : mi(this, Qt);
        t.enqueue(n);
      }
    }), kh(this, Qt, "");
  }
}
Qt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Sh,
  append: Fe,
  attr: gn,
  detach: c_,
  element: bn,
  init: qh,
  insert: u_,
  noop: ka,
  safe_not_equal: zh,
  set_data: ql,
  set_style: Co,
  space: ns,
  text: Kn,
  toggle_class: Ca
} = window.__gradio__svelte__internal, { onMount: Bh, createEventDispatcher: Dh, onDestroy: Lh } = window.__gradio__svelte__internal;
function ya(i) {
  let e, t, n, l, o = qi(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), f;
  return {
    c() {
      e = bn("div"), t = bn("span"), n = bn("div"), l = bn("progress"), s = Kn(o), a = ns(), _ = bn("span"), f = Kn(c), Co(l, "visibility", "hidden"), Co(l, "height", "0"), Co(l, "width", "0"), l.value = r = qi(
        /*file_to_display*/
        i[2]
      ), gn(l, "max", "100"), gn(l, "class", "svelte-cr2edf"), gn(n, "class", "progress-bar svelte-cr2edf"), gn(_, "class", "file-name svelte-cr2edf"), gn(e, "class", "file svelte-cr2edf");
    },
    m(u, d) {
      u_(u, e, d), Fe(e, t), Fe(t, n), Fe(n, l), Fe(l, s), Fe(e, a), Fe(e, _), Fe(_, f);
    },
    p(u, d) {
      d & /*file_to_display*/
      4 && o !== (o = qi(
        /*file_to_display*/
        u[2]
      ) + "") && ql(s, o), d & /*file_to_display*/
      4 && r !== (r = qi(
        /*file_to_display*/
        u[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      u[2].orig_name + "") && ql(f, c);
    },
    d(u) {
      u && c_(e);
    }
  };
}
function Mh(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, f = (
    /*file_to_display*/
    i[2] && ya(i)
  );
  return {
    c() {
      e = bn("div"), t = bn("span"), n = Kn("Uploading "), o = Kn(l), s = ns(), a = Kn(r), _ = Kn("..."), c = ns(), f && f.c(), gn(t, "class", "uploading svelte-cr2edf"), gn(e, "class", "wrap svelte-cr2edf"), Ca(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(u, d) {
      u_(u, e, d), Fe(e, t), Fe(t, n), Fe(t, o), Fe(t, s), Fe(t, a), Fe(t, _), Fe(e, c), f && f.m(e, null);
    },
    p(u, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      u[0].length + "") && ql(o, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      u[0].length > 1 ? "files" : "file") && ql(a, r), /*file_to_display*/
      u[2] ? f ? f.p(u, d) : (f = ya(u), f.c(), f.m(e, null)) : f && (f.d(1), f = null), d & /*progress*/
      2 && Ca(
        e,
        "progress",
        /*progress*/
        u[1]
      );
    },
    i: ka,
    o: ka,
    d(u) {
      u && c_(e), f && f.d();
    }
  };
}
function qi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function Eh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += qi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Rh(i, e, t) {
  var n = this && this.__awaiter || function(h, g, b, v) {
    function p(S) {
      return S instanceof b ? S : new b(function(D) {
        D(S);
      });
    }
    return new (b || (b = Promise))(function(S, D) {
      function z(W) {
        try {
          w(v.next(W));
        } catch (y) {
          D(y);
        }
      }
      function C(W) {
        try {
          w(v.throw(W));
        } catch (y) {
          D(y);
        }
      }
      function w(W) {
        W.done ? S(W.value) : p(W.value).then(z, C);
      }
      w((v = v.apply(h, g || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, f, u = s.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = Dh();
  function m(h, g) {
    t(0, u = u.map((b) => (b.orig_name === h && (b.progress += g), b)));
  }
  return Bh(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        _ || t(1, _ = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), Lh(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, o = h.root), "files" in h && t(5, s = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && Eh(u), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class Wh extends Sh {
  constructor(e) {
    super(), qh(this, e, Rh, Mh, zh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Ah,
  append: Sa,
  attr: De,
  binding_callbacks: Xh,
  bubble: rn,
  check_outros: f_,
  create_component: Yh,
  create_slot: d_,
  destroy_component: Ih,
  detach: Tl,
  element: is,
  empty: h_,
  get_all_dirty_from_scope: m_,
  get_slot_changes: g_,
  group_outros: b_,
  init: Hh,
  insert: $l,
  listen: Ke,
  mount_component: jh,
  prevent_default: _n,
  run_all: Th,
  safe_not_equal: $h,
  set_style: p_,
  space: Fh,
  stop_propagation: cn,
  toggle_class: Se,
  transition_in: on,
  transition_out: Ln,
  update_slot_base: w_
} = window.__gradio__svelte__internal, { createEventDispatcher: Oh, tick: Uh } = window.__gradio__svelte__internal;
function Vh(i) {
  let e, t, n, l, o, s, r, a, _, c, f;
  const u = (
    /*#slots*/
    i[26].default
  ), d = d_(
    u,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = is("button"), d && d.c(), t = Fh(), n = is("input"), De(n, "aria-label", "file upload"), De(n, "data-testid", "file-upload"), De(n, "type", "file"), De(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, De(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), De(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), De(n, "class", "svelte-1s26xmt"), De(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), De(e, "class", "svelte-1s26xmt"), Se(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Se(
        e,
        "center",
        /*center*/
        i[4]
      ), Se(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Se(
        e,
        "flex",
        /*flex*/
        i[5]
      ), Se(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), p_(e, "height", "100%");
    },
    m(m, h) {
      $l(m, e, h), d && d.m(e, null), Sa(e, t), Sa(e, n), i[34](n), _ = !0, c || (f = [
        Ke(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Ke(e, "drag", cn(_n(
          /*drag_handler*/
          i[27]
        ))),
        Ke(e, "dragstart", cn(_n(
          /*dragstart_handler*/
          i[28]
        ))),
        Ke(e, "dragend", cn(_n(
          /*dragend_handler*/
          i[29]
        ))),
        Ke(e, "dragover", cn(_n(
          /*dragover_handler*/
          i[30]
        ))),
        Ke(e, "dragenter", cn(_n(
          /*dragenter_handler*/
          i[31]
        ))),
        Ke(e, "dragleave", cn(_n(
          /*dragleave_handler*/
          i[32]
        ))),
        Ke(e, "drop", cn(_n(
          /*drop_handler*/
          i[33]
        ))),
        Ke(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Ke(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Ke(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Ke(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!_ || h[0] & /*$$scope*/
      33554432) && w_(
        d,
        u,
        m,
        /*$$scope*/
        m[25],
        _ ? g_(
          u,
          /*$$scope*/
          m[25],
          h,
          null
        ) : m_(
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
      512) && Se(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!_ || h[0] & /*center*/
      16) && Se(
        e,
        "center",
        /*center*/
        m[4]
      ), (!_ || h[0] & /*boundedheight*/
      8) && Se(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!_ || h[0] & /*flex*/
      32) && Se(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!_ || h[0] & /*disable_click*/
      128) && Se(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      _ || (on(d, m), _ = !0);
    },
    o(m) {
      Ln(d, m), _ = !1;
    },
    d(m) {
      m && Tl(e), d && d.d(m), i[34](null), c = !1, Th(f);
    }
  };
}
function Nh(i) {
  let e, t, n = !/*hidden*/
  i[9] && qa(i);
  return {
    c() {
      n && n.c(), e = h_();
    },
    m(l, o) {
      n && n.m(l, o), $l(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (b_(), Ln(n, 1, 1, () => {
        n = null;
      }), f_()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && on(n, 1)) : (n = qa(l), n.c(), on(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (on(n), t = !0);
    },
    o(l) {
      Ln(n), t = !1;
    },
    d(l) {
      l && Tl(e), n && n.d(l);
    }
  };
}
function xh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = d_(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = is("button"), r && r.c(), De(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), De(e, "class", "svelte-1s26xmt"), Se(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), Se(
        e,
        "center",
        /*center*/
        i[4]
      ), Se(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), Se(
        e,
        "flex",
        /*flex*/
        i[5]
      ), p_(e, "height", "100%");
    },
    m(a, _) {
      $l(a, e, _), r && r.m(e, null), n = !0, l || (o = Ke(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && w_(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? g_(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : m_(
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
      n || (on(r, a), n = !0);
    },
    o(a) {
      Ln(r, a), n = !1;
    },
    d(a) {
      a && Tl(e), r && r.d(a), l = !1, o();
    }
  };
}
function qa(i) {
  let e, t;
  return e = new Wh({
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
      Yh(e.$$.fragment);
    },
    m(n, l) {
      jh(e, n, l), t = !0;
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
      t || (on(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ln(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ih(e, n);
    }
  };
}
function Ph(i) {
  let e, t, n, l;
  const o = [xh, Nh, Vh], s = [];
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
      t.c(), n = h_();
    },
    m(a, _) {
      s[e].m(a, _), $l(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (b_(), Ln(s[c], 1, 1, () => {
        s[c] = null;
      }), f_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), on(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (on(t), l = !0);
    },
    o(a) {
      Ln(t), l = !1;
    },
    d(a) {
      a && Tl(n), s[e].d(a);
    }
  };
}
function Kh(i, e, t) {
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
function Zh(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(A, F, Q, ee) {
    function re(ie) {
      return ie instanceof Q ? ie : new Q(function(E) {
        E(ie);
      });
    }
    return new (Q || (Q = Promise))(function(ie, E) {
      function Lt(_t) {
        try {
          rt(ee.next(_t));
        } catch (an) {
          E(an);
        }
      }
      function Re(_t) {
        try {
          rt(ee.throw(_t));
        } catch (an) {
          E(an);
        }
      }
      function rt(_t) {
        _t.done ? ie(_t.value) : re(_t.value).then(Lt, Re);
      }
      rt((ee = ee.apply(A, F || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: f = "single" } = e, { disable_click: u = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: v = !0 } = e, { max_file_size: p = null } = e, { upload: S } = e, { stream_handler: D } = e, z, C, w;
  const W = Oh(), y = ["image", "video", "audio", "text", "file"], q = (A) => A.startsWith(".") || A.endsWith("/*") ? A : y.includes(A) ? A + "/*" : "." + A;
  function R() {
    t(20, r = !r);
  }
  function K() {
    navigator.clipboard.read().then((A) => o(this, void 0, void 0, function* () {
      for (let F = 0; F < A.length; F++) {
        const Q = A[F].types.find((ee) => ee.startsWith("image/"));
        if (Q) {
          A[F].getType(Q).then((ee) => o(this, void 0, void 0, function* () {
            const re = new File([ee], `clipboard.${Q.replace("image/", "")}`);
            yield Z([re]);
          }));
          break;
        }
      }
    }));
  }
  function O() {
    u || b && (t(2, b.value = "", b), b.click());
  }
  function B(A) {
    return o(this, void 0, void 0, function* () {
      yield Uh(), t(14, z = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const F = yield S(A, d, z, p ?? 1 / 0);
        return W("load", f === "single" ? F == null ? void 0 : F[0] : F), t(1, g = !1), F || [];
      } catch (F) {
        return W("error", F.message), t(1, g = !1), [];
      }
    });
  }
  function Z(A) {
    return o(this, void 0, void 0, function* () {
      if (!A.length)
        return;
      let F = A.map((Q) => new File([Q], Q instanceof File ? Q.name : "file", { type: Q.type }));
      return t(15, C = yield __(F)), yield B(C);
    });
  }
  function _e(A) {
    return o(this, void 0, void 0, function* () {
      const F = A.target;
      if (F.files)
        if (h != "blob")
          yield Z(Array.from(F.files));
        else {
          if (f === "single") {
            W("load", F.files[0]);
            return;
          }
          W("load", F.files);
        }
    });
  }
  function I(A) {
    return o(this, void 0, void 0, function* () {
      var F;
      if (t(20, r = !1), !(!((F = A.dataTransfer) === null || F === void 0) && F.files)) return;
      const Q = Array.from(A.dataTransfer.files).filter((ee) => {
        const re = "." + ee.name.split(".").pop();
        return re && Kh(w, re, ee.type) || (re && Array.isArray(s) ? s.includes(re) : re === s) ? !0 : (W("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield Z(Q);
    });
  }
  function T(A) {
    rn.call(this, i, A);
  }
  function M(A) {
    rn.call(this, i, A);
  }
  function P(A) {
    rn.call(this, i, A);
  }
  function U(A) {
    rn.call(this, i, A);
  }
  function ne(A) {
    rn.call(this, i, A);
  }
  function j(A) {
    rn.call(this, i, A);
  }
  function Y(A) {
    rn.call(this, i, A);
  }
  function be(A) {
    Xh[A ? "unshift" : "push"](() => {
      b = A, t(2, b);
    });
  }
  return i.$$set = (A) => {
    "filetype" in A && t(0, s = A.filetype), "dragging" in A && t(20, r = A.dragging), "boundedheight" in A && t(3, a = A.boundedheight), "center" in A && t(4, _ = A.center), "flex" in A && t(5, c = A.flex), "file_count" in A && t(6, f = A.file_count), "disable_click" in A && t(7, u = A.disable_click), "root" in A && t(8, d = A.root), "hidden" in A && t(9, m = A.hidden), "format" in A && t(21, h = A.format), "uploading" in A && t(1, g = A.uploading), "hidden_upload" in A && t(2, b = A.hidden_upload), "show_progress" in A && t(10, v = A.show_progress), "max_file_size" in A && t(22, p = A.max_file_size), "upload" in A && t(23, S = A.upload), "stream_handler" in A && t(11, D = A.stream_handler), "$$scope" in A && t(25, l = A.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, w = null) : typeof s == "string" ? t(16, w = q(s)) : (t(0, s = s.map(q)), t(16, w = s.join(", "))));
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
    D,
    K,
    O,
    z,
    C,
    w,
    R,
    _e,
    I,
    r,
    h,
    p,
    S,
    Z,
    l,
    n,
    T,
    M,
    P,
    U,
    ne,
    j,
    Y,
    be
  ];
}
class Gh extends Ah {
  constructor(e) {
    super(), Hh(
      this,
      e,
      Zh,
      Ph,
      $h,
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
  SvelteComponent: j6,
  append: T6,
  attr: $6,
  check_outros: F6,
  create_component: O6,
  destroy_component: U6,
  detach: V6,
  element: N6,
  group_outros: x6,
  init: P6,
  insert: K6,
  mount_component: Z6,
  safe_not_equal: G6,
  set_style: J6,
  space: Q6,
  toggle_class: e7,
  transition_in: t7,
  transition_out: n7
} = window.__gradio__svelte__internal, { createEventDispatcher: i7 } = window.__gradio__svelte__internal, {
  SvelteComponent: l7,
  assign: o7,
  compute_rest_props: s7,
  detach: a7,
  element: r7,
  exclude_internal_props: _7,
  get_spread_update: c7,
  init: u7,
  insert: f7,
  noop: d7,
  safe_not_equal: h7,
  set_attributes: m7,
  src_url_equal: g7,
  toggle_class: b7
} = window.__gradio__svelte__internal, {
  SvelteComponent: p7,
  append: w7,
  attr: v7,
  bubble: k7,
  check_outros: C7,
  create_component: y7,
  destroy_component: S7,
  detach: q7,
  element: z7,
  empty: B7,
  group_outros: D7,
  init: L7,
  insert: M7,
  listen: E7,
  mount_component: R7,
  safe_not_equal: W7,
  space: A7,
  toggle_class: X7,
  transition_in: Y7,
  transition_out: I7
} = window.__gradio__svelte__internal, { createEventDispatcher: H7 } = window.__gradio__svelte__internal, {
  SvelteComponent: Jh,
  append: Ki,
  attr: yo,
  create_component: Qh,
  destroy_component: em,
  detach: tm,
  element: So,
  init: nm,
  insert: im,
  listen: lm,
  mount_component: om,
  noop: sm,
  safe_not_equal: am,
  set_style: rm,
  space: _m,
  text: cm,
  transition_in: um,
  transition_out: fm
} = window.__gradio__svelte__internal, { createEventDispatcher: dm } = window.__gradio__svelte__internal;
function hm(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new Ir({}), {
    c() {
      e = So("button"), t = So("div"), n = So("span"), Qh(l.$$.fragment), o = _m(), r = cm(s), yo(n, "class", "icon-wrap svelte-fjcd9c"), yo(t, "class", "wrap svelte-fjcd9c"), yo(e, "class", "svelte-fjcd9c"), rm(e, "height", "100%");
    },
    m(f, u) {
      im(f, e, u), Ki(e, t), Ki(t, n), om(l, n, null), Ki(t, o), Ki(t, r), a = !0, _ || (c = lm(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: sm,
    i(f) {
      a || (um(l.$$.fragment, f), a = !0);
    },
    o(f) {
      fm(l.$$.fragment, f), a = !1;
    },
    d(f) {
      f && tm(e), em(l), _ = !1, c();
    }
  };
}
function mm(i) {
  const e = dm();
  return [e, () => e("click")];
}
class gm extends Jh {
  constructor(e) {
    super(), nm(this, e, mm, hm, am, {});
  }
}
function bm() {
  return navigator.mediaDevices.enumerateDevices();
}
function pm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function za(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (pm(o, e), o));
}
function wm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: vm,
  action_destroyer: km,
  add_render_callback: Cm,
  append: Yt,
  attr: ve,
  binding_callbacks: ym,
  check_outros: Di,
  create_component: ii,
  create_in_transition: Sm,
  destroy_component: li,
  destroy_each: qm,
  detach: Ne,
  element: Qe,
  empty: ps,
  ensure_array_like: Ba,
  group_outros: Li,
  init: zm,
  insert: xe,
  listen: zl,
  mount_component: oi,
  noop: ws,
  run_all: Bm,
  safe_not_equal: Dm,
  set_data: v_,
  set_input_value: ls,
  space: Wi,
  stop_propagation: Lm,
  text: k_,
  toggle_class: Zi,
  transition_in: qe,
  transition_out: Le
} = window.__gradio__svelte__internal, { createEventDispatcher: Mm, onMount: Em } = window.__gradio__svelte__internal;
function Da(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Rm(i) {
  let e, t, n, l, o, s, r, a, _, c, f;
  const u = [Xm, Am], d = [];
  function m(b, v) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = u[n](i);
  let h = !/*recording*/
  i[8] && La(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Ma(i)
  );
  return {
    c() {
      e = Qe("div"), t = Qe("button"), l.c(), s = Wi(), h && h.c(), r = Wi(), g && g.c(), a = ps(), ve(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ve(t, "class", "svelte-8hqvb6"), ve(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, v) {
      xe(b, e, v), Yt(e, t), d[n].m(t, null), Yt(e, s), h && h.m(e, null), xe(b, r, v), g && g.m(b, v), xe(b, a, v), _ = !0, c || (f = zl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, v) {
      let p = n;
      n = m(b), n === p ? d[n].p(b, v) : (Li(), Le(d[p], 1, 1, () => {
        d[p] = null;
      }), Di(), l = d[n], l ? l.p(b, v) : (l = d[n] = u[n](b), l.c()), qe(l, 1), l.m(t, null)), (!_ || v[0] & /*mode*/
      2 && o !== (o = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && ve(t, "aria-label", o), /*recording*/
      b[8] ? h && (Li(), Le(h, 1, 1, () => {
        h = null;
      }), Di()) : h ? (h.p(b, v), v[0] & /*recording*/
      256 && qe(h, 1)) : (h = La(b), h.c(), qe(h, 1), h.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, v), v[0] & /*options_open, selected_device*/
      1152 && qe(g, 1)) : (g = Ma(b), g.c(), qe(g, 1), g.m(a.parentNode, a)) : g && (Li(), Le(g, 1, 1, () => {
        g = null;
      }), Di());
    },
    i(b) {
      _ || (qe(l), qe(h), qe(g), _ = !0);
    },
    o(b) {
      Le(l), Le(h), Le(g), _ = !1;
    },
    d(b) {
      b && (Ne(e), Ne(r), Ne(a)), d[n].d(), h && h.d(), g && g.d(b), c = !1, f();
    }
  };
}
function Wm(i) {
  let e, t, n, l;
  return t = new gm({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Qe("div"), ii(t.$$.fragment), ve(e, "title", "grant webcam access");
    },
    m(o, s) {
      xe(o, e, s), oi(t, e, null), l = !0;
    },
    p: ws,
    i(o) {
      l || (qe(t.$$.fragment, o), o && (n || Cm(() => {
        n = Sm(e, k1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Ne(e), li(t);
    }
  };
}
function Am(i) {
  let e, t, n;
  return t = new tf({}), {
    c() {
      e = Qe("div"), ii(t.$$.fragment), ve(e, "class", "icon svelte-8hqvb6"), ve(e, "title", "capture photo");
    },
    m(l, o) {
      xe(l, e, o), oi(t, e, null), n = !0;
    },
    p: ws,
    i(l) {
      n || (qe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ne(e), li(t);
    }
  };
}
function Xm(i) {
  let e, t, n, l;
  const o = [Im, Ym], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = ps();
    },
    m(a, _) {
      s[e].m(a, _), xe(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (Li(), Le(s[c], 1, 1, () => {
        s[c] = null;
      }), Di(), t = s[e], t || (t = s[e] = o[e](a), t.c()), qe(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (qe(t), l = !0);
    },
    o(a) {
      Le(t), l = !1;
    },
    d(a) {
      a && Ne(n), s[e].d(a);
    }
  };
}
function Ym(i) {
  let e, t, n;
  return t = new cf({}), {
    c() {
      e = Qe("div"), ii(t.$$.fragment), ve(e, "class", "icon red svelte-8hqvb6"), ve(e, "title", "start recording");
    },
    m(l, o) {
      xe(l, e, o), oi(t, e, null), n = !0;
    },
    i(l) {
      n || (qe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ne(e), li(t);
    }
  };
}
function Im(i) {
  let e, t, n;
  return t = new kd({}), {
    c() {
      e = Qe("div"), ii(t.$$.fragment), ve(e, "class", "icon red svelte-8hqvb6"), ve(e, "title", "stop recording");
    },
    m(l, o) {
      xe(l, e, o), oi(t, e, null), n = !0;
    },
    i(l) {
      n || (qe(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ne(e), li(t);
    }
  };
}
function La(i) {
  let e, t, n, l, o;
  return t = new ds({}), {
    c() {
      e = Qe("button"), ii(t.$$.fragment), ve(e, "class", "icon svelte-8hqvb6"), ve(e, "aria-label", "select input source");
    },
    m(s, r) {
      xe(s, e, r), oi(t, e, null), n = !0, l || (o = zl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: ws,
    i(s) {
      n || (qe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ne(e), li(t), l = !1, o();
    }
  };
}
function Ma(i) {
  let e, t, n, l, o, s, r;
  n = new ds({});
  function a(f, u) {
    return (
      /*available_video_devices*/
      f[6].length === 0 ? jm : Hm
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = Qe("select"), t = Qe("button"), ii(n.$$.fragment), l = Wi(), c.c(), ve(t, "class", "inset-icon svelte-8hqvb6"), ve(e, "class", "select-wrap svelte-8hqvb6"), ve(e, "aria-label", "select source");
    },
    m(f, u) {
      xe(f, e, u), Yt(e, t), oi(n, t, null), Yt(t, l), c.m(e, null), o = !0, s || (r = [
        zl(t, "click", Lm(
          /*click_handler_2*/
          i[22]
        )),
        km(vs.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        zl(
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
      o || (qe(n.$$.fragment, f), o = !0);
    },
    o(f) {
      Le(n.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Ne(e), li(n), c.d(), s = !1, Bm(r);
    }
  };
}
function Hm(i) {
  let e, t = Ba(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Ea(Da(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ps();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      xe(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = Ba(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Da(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Ea(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Ne(e), qm(n, l);
    }
  };
}
function jm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Qe("option"), n = k_(t), e.__value = "", ls(e, e.__value), ve(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      xe(l, e, o), Yt(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && v_(n, t);
    },
    d(l) {
      l && Ne(e);
    }
  };
}
function Ea(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = Qe("option"), n = k_(t), l = Wi(), e.__value = o = /*device*/
      i[32].deviceId, ls(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ve(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      xe(r, e, a), Yt(e, n), Yt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && v_(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, ls(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Ne(e);
    }
  };
}
function Tm(i) {
  let e, t, n, l, o, s;
  const r = [Wm, Rm], a = [];
  function _(c, f) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = Qe("div"), t = Qe("video"), n = Wi(), o.c(), ve(t, "class", "svelte-8hqvb6"), Zi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Zi(t, "hide", !/*webcam_accessed*/
      i[9]), ve(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, f) {
      xe(c, e, f), Yt(e, t), i[19](t), Yt(e, n), a[l].m(e, null), s = !0;
    },
    p(c, f) {
      (!s || f[0] & /*mirror_webcam*/
      4) && Zi(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || f[0] & /*webcam_accessed*/
      512) && Zi(t, "hide", !/*webcam_accessed*/
      c[9]);
      let u = l;
      l = _(c), l === u ? a[l].p(c, f) : (Li(), Le(a[u], 1, 1, () => {
        a[u] = null;
      }), Di(), o = a[l], o ? o.p(c, f) : (o = a[l] = r[l](c), o.c()), qe(o, 1), o.m(e, null));
    },
    i(c) {
      s || (qe(o), s = !0);
    },
    o(c) {
      Le(o), s = !1;
    },
    d(c) {
      c && Ne(e), i[19](null), a[l].d();
    }
  };
}
function vs(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function $m(i, e, t) {
  var n = this && this.__awaiter || function(I, T, M, P) {
    function U(ne) {
      return ne instanceof M ? ne : new M(function(j) {
        j(ne);
      });
    }
    return new (M || (M = Promise))(function(ne, j) {
      function Y(F) {
        try {
          A(P.next(F));
        } catch (Q) {
          j(Q);
        }
      }
      function be(F) {
        try {
          A(P.throw(F));
        } catch (Q) {
          j(Q);
        }
      }
      function A(F) {
        F.done ? ne(F.value) : U(F.value).then(Y, be);
      }
      A((P = P.apply(I, T || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: f = "image" } = e, { mirror_webcam: u } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = Mm();
  Em(() => r = document.createElement("canvas"));
  const b = (I) => n(void 0, void 0, void 0, function* () {
    const M = I.target.value;
    yield za(d, l, M).then((P) => n(void 0, void 0, void 0, function* () {
      z = P, t(7, s = o.find((U) => U.deviceId === M) || null), t(10, R = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        za(d, l).then((I) => n(this, void 0, void 0, function* () {
          t(9, y = !0), t(6, o = yield bm()), z = I;
        })).then(() => wm(o)).then((I) => {
          t(6, o = I);
          const T = z.getTracks().map((M) => {
            var P;
            return (P = M.getSettings()) === null || P === void 0 ? void 0 : P.deviceId;
          })[0];
          t(7, s = T && I.find((M) => M.deviceId === T) || o[0]);
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
    (!a || a && S) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, I.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), u && (I.scale(-1, 1), I.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (T) => {
        g(a ? "stream" : "capture", T);
      },
      "image/png",
      0.8
    ));
  }
  let S = !1, D = [], z, C, w;
  function W() {
    if (S) {
      w.stop();
      let I = new Blob(D, { type: C }), T = new FileReader();
      T.onload = function(M) {
        return n(this, void 0, void 0, function* () {
          var P;
          if (M.target) {
            let U = new File([I], "sample." + C.substring(6));
            const ne = yield __([U]);
            let j = ((P = yield h(ne, c)) === null || P === void 0 ? void 0 : P.filter(Boolean))[0];
            g("capture", j), g("stop_recording");
          }
        });
      }, T.readAsDataURL(I);
    } else {
      g("start_recording"), D = [];
      let I = ["video/webm", "video/mp4"];
      for (let T of I)
        if (MediaRecorder.isTypeSupported(T)) {
          C = T;
          break;
        }
      if (C === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      w = new MediaRecorder(z, { mimeType: C }), w.addEventListener("dataavailable", function(T) {
        D.push(T.data);
      }), w.start(200);
    }
    t(8, S = !S);
  }
  let y = !1;
  function q() {
    f === "image" && a && t(8, S = !S), f === "image" ? p() : W(), !S && z && (z.getTracks().forEach((I) => I.stop()), t(5, l.srcObject = null, l), t(9, y = !1));
  }
  a && f === "image" && window.setInterval(
    () => {
      l && !_ && p();
    },
    500
  );
  let R = !1;
  function K(I) {
    I.preventDefault(), I.stopPropagation(), t(10, R = !1);
  }
  function O(I) {
    ym[I ? "unshift" : "push"](() => {
      l = I, t(5, l);
    });
  }
  const B = async () => v(), Z = () => t(10, R = !0), _e = () => t(10, R = !1);
  return i.$$set = (I) => {
    "streaming" in I && t(0, a = I.streaming), "pending" in I && t(15, _ = I.pending), "root" in I && t(16, c = I.root), "mode" in I && t(1, f = I.mode), "mirror_webcam" in I && t(2, u = I.mirror_webcam), "include_audio" in I && t(17, d = I.include_audio), "i18n" in I && t(3, m = I.i18n), "upload" in I && t(18, h = I.upload);
  }, [
    a,
    f,
    u,
    m,
    vs,
    l,
    o,
    s,
    S,
    y,
    R,
    b,
    v,
    q,
    K,
    _,
    c,
    d,
    h,
    O,
    B,
    Z,
    _e
  ];
}
class Fm extends vm {
  constructor(e) {
    super(), zm(
      this,
      e,
      $m,
      Tm,
      Dm,
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
    return vs;
  }
}
const {
  SvelteComponent: j7,
  attr: T7,
  create_component: $7,
  destroy_component: F7,
  detach: O7,
  element: U7,
  init: V7,
  insert: N7,
  mount_component: x7,
  noop: P7,
  safe_not_equal: K7,
  transition_in: Z7,
  transition_out: G7
} = window.__gradio__svelte__internal, { createEventDispatcher: J7 } = window.__gradio__svelte__internal, {
  SvelteComponent: Q7,
  add_flush_callback: e9,
  append: t9,
  attr: n9,
  bind: i9,
  binding_callbacks: l9,
  bubble: o9,
  check_outros: s9,
  create_component: a9,
  create_slot: r9,
  destroy_component: _9,
  detach: c9,
  element: u9,
  empty: f9,
  get_all_dirty_from_scope: d9,
  get_slot_changes: h9,
  group_outros: m9,
  init: g9,
  insert: b9,
  listen: p9,
  mount_component: w9,
  noop: v9,
  safe_not_equal: k9,
  space: C9,
  toggle_class: y9,
  transition_in: S9,
  transition_out: q9,
  update_slot_base: z9
} = window.__gradio__svelte__internal, { createEventDispatcher: B9, tick: D9 } = window.__gradio__svelte__internal, {
  SvelteComponent: L9,
  attr: M9,
  check_outros: E9,
  create_component: R9,
  destroy_component: W9,
  detach: A9,
  element: X9,
  group_outros: Y9,
  init: I9,
  insert: H9,
  mount_component: j9,
  safe_not_equal: T9,
  toggle_class: $9,
  transition_in: F9,
  transition_out: O9
} = window.__gradio__svelte__internal, {
  SvelteComponent: U9,
  add_flush_callback: V9,
  assign: N9,
  bind: x9,
  binding_callbacks: P9,
  check_outros: K9,
  create_component: Z9,
  destroy_component: G9,
  detach: J9,
  empty: Q9,
  flush: eC,
  get_spread_object: tC,
  get_spread_update: nC,
  group_outros: iC,
  init: lC,
  insert: oC,
  mount_component: sC,
  safe_not_equal: aC,
  space: rC,
  transition_in: _C,
  transition_out: cC
} = window.__gradio__svelte__internal, {
  SvelteComponent: uC,
  append: fC,
  attr: dC,
  detach: hC,
  init: mC,
  insert: gC,
  noop: bC,
  safe_not_equal: pC,
  set_style: wC,
  svg_element: vC
} = window.__gradio__svelte__internal, {
  SvelteComponent: Om,
  append: xt,
  attr: $,
  detach: Um,
  init: Vm,
  insert: Nm,
  noop: qo,
  safe_not_equal: xm,
  set_style: Pt,
  svg_element: Wt
} = window.__gradio__svelte__internal;
function Pm(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = Wt("svg"), t = Wt("rect"), n = Wt("rect"), l = Wt("rect"), o = Wt("rect"), s = Wt("line"), r = Wt("line"), a = Wt("line"), _ = Wt("line"), $(t, "x", "2"), $(t, "y", "2"), $(t, "width", "5"), $(t, "height", "5"), $(t, "rx", "1"), $(t, "ry", "1"), $(t, "stroke-width", "2"), $(t, "fill", "none"), $(n, "x", "17"), $(n, "y", "2"), $(n, "width", "5"), $(n, "height", "5"), $(n, "rx", "1"), $(n, "ry", "1"), $(n, "stroke-width", "2"), $(n, "fill", "none"), $(l, "x", "2"), $(l, "y", "17"), $(l, "width", "5"), $(l, "height", "5"), $(l, "rx", "1"), $(l, "ry", "1"), $(l, "stroke-width", "2"), $(l, "fill", "none"), $(o, "x", "17"), $(o, "y", "17"), $(o, "width", "5"), $(o, "height", "5"), $(o, "rx", "1"), $(o, "ry", "1"), $(o, "stroke-width", "2"), $(o, "fill", "none"), $(s, "x1", "7.5"), $(s, "y1", "4.5"), $(s, "x2", "16"), $(s, "y2", "4.5"), Pt(s, "stroke-width", "2px"), $(r, "x1", "7.5"), $(r, "y1", "19.5"), $(r, "x2", "16"), $(r, "y2", "19.5"), Pt(r, "stroke-width", "2px"), $(a, "x1", "4.5"), $(a, "y1", "8"), $(a, "x2", "4.5"), $(a, "y2", "16"), Pt(a, "stroke-width", "2px"), $(_, "x1", "19.5"), $(_, "y1", "8"), $(_, "x2", "19.5"), $(_, "y2", "16"), Pt(_, "stroke-width", "2px"), $(e, "width", "100%"), $(e, "height", "100%"), $(e, "viewBox", "0 0 24 24"), $(e, "version", "1.1"), $(e, "xmlns", "http://www.w3.org/2000/svg"), $(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), $(e, "xml:space", "preserve"), $(e, "stroke", "currentColor"), Pt(e, "fill-rule", "evenodd"), Pt(e, "clip-rule", "evenodd"), Pt(e, "stroke-linecap", "round"), Pt(e, "stroke-linejoin", "round");
    },
    m(c, f) {
      Nm(c, e, f), xt(e, t), xt(e, n), xt(e, l), xt(e, o), xt(e, s), xt(e, r), xt(e, a), xt(e, _);
    },
    p: qo,
    i: qo,
    o: qo,
    d(c) {
      c && Um(e);
    }
  };
}
class Km extends Om {
  constructor(e) {
    super(), Vm(this, e, null, Pm, xm, {});
  }
}
const {
  SvelteComponent: Zm,
  append: Gm,
  attr: ht,
  detach: Jm,
  init: Qm,
  insert: e0,
  noop: zo,
  safe_not_equal: t0,
  set_style: Gi,
  svg_element: Ra
} = window.__gradio__svelte__internal;
function n0(i) {
  let e, t;
  return {
    c() {
      e = Ra("svg"), t = Ra("path"), ht(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), ht(t, "fill", "none"), ht(t, "stroke-width", "2"), ht(e, "width", "100%"), ht(e, "height", "100%"), ht(e, "viewBox", "0 0 24 24"), ht(e, "version", "1.1"), ht(e, "xmlns", "http://www.w3.org/2000/svg"), ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ht(e, "xml:space", "preserve"), ht(e, "stroke", "currentColor"), Gi(e, "fill-rule", "evenodd"), Gi(e, "clip-rule", "evenodd"), Gi(e, "stroke-linecap", "round"), Gi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      e0(n, e, l), Gm(e, t);
    },
    p: zo,
    i: zo,
    o: zo,
    d(n) {
      n && Jm(e);
    }
  };
}
class i0 extends Zm {
  constructor(e) {
    super(), Qm(this, e, null, n0, t0, {});
  }
}
const {
  SvelteComponent: l0,
  append: o0,
  attr: mt,
  detach: s0,
  init: a0,
  insert: r0,
  noop: Bo,
  safe_not_equal: _0,
  set_style: Ji,
  svg_element: Wa
} = window.__gradio__svelte__internal;
function c0(i) {
  let e, t;
  return {
    c() {
      e = Wa("svg"), t = Wa("path"), mt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), mt(t, "fill", "none"), mt(t, "stroke-width", "2"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "version", "1.1"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), mt(e, "xml:space", "preserve"), mt(e, "stroke", "currentColor"), Ji(e, "fill-rule", "evenodd"), Ji(e, "clip-rule", "evenodd"), Ji(e, "stroke-linecap", "round"), Ji(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      r0(n, e, l), o0(e, t);
    },
    p: Bo,
    i: Bo,
    o: Bo,
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
  append: Aa,
  attr: At,
  detach: d0,
  init: h0,
  insert: m0,
  noop: Do,
  safe_not_equal: g0,
  set_style: Qi,
  svg_element: Lo
} = window.__gradio__svelte__internal;
function b0(i) {
  let e, t, n;
  return {
    c() {
      e = Lo("svg"), t = Lo("path"), n = Lo("path"), At(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), At(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), At(e, "width", "100%"), At(e, "height", "100%"), At(e, "viewBox", "0 0 24 24"), At(e, "xmlns", "http://www.w3.org/2000/svg"), At(e, "fill", "none"), At(e, "stroke", "currentColor"), At(e, "stroke-width", "2"), Qi(e, "fill-rule", "evenodd"), Qi(e, "clip-rule", "evenodd"), Qi(e, "stroke-linecap", "round"), Qi(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      m0(l, e, o), Aa(e, t), Aa(e, n);
    },
    p: Do,
    i: Do,
    o: Do,
    d(l) {
      l && d0(e);
    }
  };
}
class p0 extends f0 {
  constructor(e) {
    super(), h0(this, e, null, b0, g0, {});
  }
}
const {
  SvelteComponent: w0,
  append: v0,
  attr: Kt,
  detach: k0,
  init: C0,
  insert: y0,
  noop: Mo,
  safe_not_equal: S0,
  set_style: el,
  svg_element: Xa
} = window.__gradio__svelte__internal;
function q0(i) {
  let e, t;
  return {
    c() {
      e = Xa("svg"), t = Xa("path"), Kt(t, "d", "M4 6h16M4 12h16M4 18h10"), Kt(e, "width", "100%"), Kt(e, "height", "100%"), Kt(e, "viewBox", "0 0 24 24"), Kt(e, "xmlns", "http://www.w3.org/2000/svg"), Kt(e, "fill", "none"), Kt(e, "stroke", "currentColor"), Kt(e, "stroke-width", "2"), el(e, "fill-rule", "evenodd"), el(e, "clip-rule", "evenodd"), el(e, "stroke-linecap", "round"), el(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      y0(n, e, l), v0(e, t);
    },
    p: Mo,
    i: Mo,
    o: Mo,
    d(n) {
      n && k0(e);
    }
  };
}
class z0 extends w0 {
  constructor(e) {
    super(), C0(this, e, null, q0, S0, {});
  }
}
const {
  SvelteComponent: B0,
  append: Ya,
  attr: nt,
  detach: D0,
  init: L0,
  insert: M0,
  noop: Eo,
  safe_not_equal: E0,
  set_style: tl,
  svg_element: Ro
} = window.__gradio__svelte__internal;
function R0(i) {
  let e, t, n;
  return {
    c() {
      e = Ro("svg"), t = Ro("path"), n = Ro("line"), nt(t, "d", "M4 6h16M4 12h16M4 18h10"), nt(n, "x1", "2"), nt(n, "y1", "2"), nt(n, "x2", "22"), nt(n, "y2", "22"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "fill", "none"), nt(e, "stroke", "currentColor"), nt(e, "stroke-width", "2"), tl(e, "fill-rule", "evenodd"), tl(e, "clip-rule", "evenodd"), tl(e, "stroke-linecap", "round"), tl(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      M0(l, e, o), Ya(e, t), Ya(e, n);
    },
    p: Eo,
    i: Eo,
    o: Eo,
    d(l) {
      l && D0(e);
    }
  };
}
class W0 extends B0 {
  constructor(e) {
    super(), L0(this, e, null, R0, E0, {});
  }
}
const {
  SvelteComponent: A0,
  append: X0,
  attr: Zt,
  detach: Y0,
  init: I0,
  insert: H0,
  noop: Wo,
  safe_not_equal: j0,
  set_style: nl,
  svg_element: Ia
} = window.__gradio__svelte__internal;
function T0(i) {
  let e, t;
  return {
    c() {
      e = Ia("svg"), t = Ia("path"), Zt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Zt(e, "width", "100%"), Zt(e, "height", "100%"), Zt(e, "viewBox", "0 0 24 24"), Zt(e, "fill", "none"), Zt(e, "stroke", "currentColor"), Zt(e, "stroke-width", "2"), nl(e, "fill-rule", "evenodd"), nl(e, "clip-rule", "evenodd"), nl(e, "stroke-linecap", "round"), nl(e, "stroke-linejoin", "round"), Zt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      H0(n, e, l), X0(e, t);
    },
    p: Wo,
    i: Wo,
    o: Wo,
    d(n) {
      n && Y0(e);
    }
  };
}
class $0 extends A0 {
  constructor(e) {
    super(), I0(this, e, null, T0, j0, {});
  }
}
const {
  SvelteComponent: F0,
  append: O0,
  attr: Gt,
  detach: U0,
  init: V0,
  insert: N0,
  noop: Ao,
  safe_not_equal: x0,
  set_style: il,
  svg_element: Ha
} = window.__gradio__svelte__internal;
function P0(i) {
  let e, t;
  return {
    c() {
      e = Ha("svg"), t = Ha("path"), Gt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Gt(e, "width", "100%"), Gt(e, "height", "100%"), Gt(e, "viewBox", "0 0 24 24"), Gt(e, "fill", "none"), Gt(e, "stroke", "currentColor"), Gt(e, "stroke-width", "2"), il(e, "fill-rule", "evenodd"), il(e, "clip-rule", "evenodd"), il(e, "stroke-linecap", "round"), il(e, "stroke-linejoin", "round"), Gt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      N0(n, e, l), O0(e, t);
    },
    p: Ao,
    i: Ao,
    o: Ao,
    d(n) {
      n && U0(e);
    }
  };
}
class K0 extends F0 {
  constructor(e) {
    super(), V0(this, e, null, P0, x0, {});
  }
}
const {
  SvelteComponent: Z0,
  append: ll,
  attr: he,
  detach: G0,
  init: J0,
  insert: Q0,
  noop: Xo,
  safe_not_equal: eg,
  set_style: it,
  svg_element: gi
} = window.__gradio__svelte__internal;
function tg(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = gi("svg"), t = gi("circle"), n = gi("line"), l = gi("line"), o = gi("line"), he(t, "cx", "9"), he(t, "cy", "9"), he(t, "r", "6"), it(t, "fill", "none"), it(t, "stroke-width", "2px"), he(n, "x1", "13"), he(n, "y1", "13"), he(n, "x2", "20"), he(n, "y2", "20"), it(n, "fill", "none"), it(n, "stroke-width", "2px"), he(l, "x1", "6"), he(l, "y1", "9"), he(l, "x2", "12"), he(l, "y2", "9"), it(l, "fill", "none"), it(l, "stroke-width", "2px"), he(o, "x1", "9"), he(o, "y1", "6"), he(o, "x2", "9"), he(o, "y2", "12"), it(o, "fill", "none"), it(o, "stroke-width", "2px"), he(e, "width", "100%"), he(e, "height", "100%"), he(e, "viewBox", "0 0 24 24"), he(e, "version", "1.1"), he(e, "xmlns", "http://www.w3.org/2000/svg"), he(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), he(e, "xml:space", "preserve"), he(e, "stroke", "currentColor"), it(e, "fill-rule", "evenodd"), it(e, "clip-rule", "evenodd"), it(e, "stroke-linecap", "round"), it(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      Q0(s, e, r), ll(e, t), ll(e, n), ll(e, l), ll(e, o);
    },
    p: Xo,
    i: Xo,
    o: Xo,
    d(s) {
      s && G0(e);
    }
  };
}
class ng extends Z0 {
  constructor(e) {
    super(), J0(this, e, null, tg, eg, {});
  }
}
const {
  SvelteComponent: ig,
  append: Yo,
  attr: ke,
  detach: lg,
  init: og,
  insert: sg,
  noop: Io,
  safe_not_equal: ag,
  set_style: Ct,
  svg_element: ol
} = window.__gradio__svelte__internal;
function rg(i) {
  let e, t, n, l;
  return {
    c() {
      e = ol("svg"), t = ol("circle"), n = ol("line"), l = ol("line"), ke(t, "cx", "9"), ke(t, "cy", "9"), ke(t, "r", "6"), Ct(t, "fill", "none"), Ct(t, "stroke-width", "2px"), ke(n, "x1", "13"), ke(n, "y1", "13"), ke(n, "x2", "20"), ke(n, "y2", "20"), Ct(n, "fill", "none"), Ct(n, "stroke-width", "2px"), ke(l, "x1", "6"), ke(l, "y1", "9"), ke(l, "x2", "12"), ke(l, "y2", "9"), Ct(l, "fill", "none"), Ct(l, "stroke-width", "2px"), ke(e, "width", "100%"), ke(e, "height", "100%"), ke(e, "viewBox", "0 0 24 24"), ke(e, "version", "1.1"), ke(e, "xmlns", "http://www.w3.org/2000/svg"), ke(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ke(e, "xml:space", "preserve"), ke(e, "stroke", "currentColor"), Ct(e, "fill-rule", "evenodd"), Ct(e, "clip-rule", "evenodd"), Ct(e, "stroke-linecap", "round"), Ct(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      sg(o, e, s), Yo(e, t), Yo(e, n), Yo(e, l);
    },
    p: Io,
    i: Io,
    o: Io,
    d(o) {
      o && lg(e);
    }
  };
}
class _g extends ig {
  constructor(e) {
    super(), og(this, e, null, rg, ag, {});
  }
}
const {
  SvelteComponent: cg,
  append: Ho,
  attr: He,
  detach: ug,
  init: fg,
  insert: dg,
  noop: jo,
  safe_not_equal: hg,
  set_style: yt,
  svg_element: sl
} = window.__gradio__svelte__internal;
function mg(i) {
  let e, t, n, l;
  return {
    c() {
      e = sl("svg"), t = sl("rect"), n = sl("path"), l = sl("path"), He(t, "x", "3"), He(t, "y", "3"), He(t, "width", "18"), He(t, "height", "18"), yt(t, "fill", "none"), yt(t, "stroke-width", "2px"), He(n, "d", "M 7 7 L 10 10 M 7 10 L 10 7"), yt(n, "fill", "none"), yt(n, "stroke-width", "2px"), He(l, "d", "M 14 17 L 17 14 M 14 14 L 17 17"), yt(l, "fill", "none"), yt(l, "stroke-width", "2px"), He(e, "width", "100%"), He(e, "height", "100%"), He(e, "viewBox", "0 0 24 24"), He(e, "version", "1.1"), He(e, "xmlns", "http://www.w3.org/2000/svg"), He(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), He(e, "xml:space", "preserve"), He(e, "stroke", "currentColor"), yt(e, "fill-rule", "evenodd"), yt(e, "clip-rule", "evenodd"), yt(e, "stroke-linecap", "round"), yt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      dg(o, e, s), Ho(e, t), Ho(e, n), Ho(e, l);
    },
    p: jo,
    i: jo,
    o: jo,
    d(o) {
      o && ug(e);
    }
  };
}
class gg extends cg {
  constructor(e) {
    super(), fg(this, e, null, mg, hg, {});
  }
}
const {
  SvelteComponent: bg,
  append: ja,
  attr: To,
  bubble: Ta,
  create_component: pg,
  destroy_component: wg,
  detach: C_,
  element: $a,
  init: vg,
  insert: y_,
  listen: $o,
  mount_component: kg,
  run_all: Cg,
  safe_not_equal: yg,
  set_data: Sg,
  set_input_value: Fa,
  space: qg,
  text: zg,
  transition_in: Bg,
  transition_out: Dg
} = window.__gradio__svelte__internal, { createEventDispatcher: Lg, afterUpdate: Mg } = window.__gradio__svelte__internal;
function Eg(i) {
  let e;
  return {
    c() {
      e = zg(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      y_(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && Sg(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && C_(e);
    }
  };
}
function Rg(i) {
  let e, t, n, l, o, s, r;
  return t = new Mr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [Eg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = $a("label"), pg(t.$$.fragment), n = qg(), l = $a("input"), To(l, "type", "color"), l.disabled = /*disabled*/
      i[3], To(l, "class", "svelte-16l8u73"), To(e, "class", "block");
    },
    m(a, _) {
      y_(a, e, _), kg(t, e, null), ja(e, n), ja(e, l), Fa(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        $o(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        $o(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        $o(
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
      1 && Fa(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (Bg(t.$$.fragment, a), o = !0);
    },
    o(a) {
      Dg(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && C_(e), wg(t), s = !1, Cg(r);
    }
  };
}
function Wg(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = Lg();
  function c() {
    _("change", n), l || _("input");
  }
  Mg(() => {
    t(5, l = !1);
  });
  function f(m) {
    Ta.call(this, i, m);
  }
  function u(m) {
    Ta.call(this, i, m);
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
class Ag extends bg {
  constructor(e) {
    super(), vg(this, e, Wg, Rg, yg, {
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
  SvelteComponent: kC,
  append: CC,
  attr: yC,
  component_subscribe: SC,
  detach: qC,
  element: zC,
  init: BC,
  insert: DC,
  noop: LC,
  safe_not_equal: MC,
  set_style: EC,
  svg_element: RC,
  toggle_class: WC
} = window.__gradio__svelte__internal, { onMount: AC } = window.__gradio__svelte__internal, {
  SvelteComponent: XC,
  append: YC,
  attr: IC,
  binding_callbacks: HC,
  check_outros: jC,
  create_component: TC,
  create_slot: $C,
  destroy_component: FC,
  destroy_each: OC,
  detach: UC,
  element: VC,
  empty: NC,
  ensure_array_like: xC,
  get_all_dirty_from_scope: PC,
  get_slot_changes: KC,
  group_outros: ZC,
  init: GC,
  insert: JC,
  mount_component: QC,
  noop: ey,
  safe_not_equal: ty,
  set_data: ny,
  set_style: iy,
  space: ly,
  text: oy,
  toggle_class: sy,
  transition_in: ay,
  transition_out: ry,
  update_slot_base: _y
} = window.__gradio__svelte__internal, { tick: cy } = window.__gradio__svelte__internal, { onDestroy: uy } = window.__gradio__svelte__internal, {
  SvelteComponent: fy,
  add_render_callback: dy,
  append: hy,
  attr: my,
  bubble: gy,
  check_outros: by,
  create_component: py,
  create_in_transition: wy,
  create_out_transition: vy,
  destroy_component: ky,
  detach: Cy,
  element: yy,
  group_outros: Sy,
  init: qy,
  insert: zy,
  listen: By,
  mount_component: Dy,
  run_all: Ly,
  safe_not_equal: My,
  set_data: Ey,
  space: Ry,
  stop_propagation: Wy,
  text: Ay,
  transition_in: Xy,
  transition_out: Yy
} = window.__gradio__svelte__internal, { createEventDispatcher: Iy, onMount: Hy } = window.__gradio__svelte__internal, {
  SvelteComponent: jy,
  append: Ty,
  attr: $y,
  bubble: Fy,
  check_outros: Oy,
  create_animation: Uy,
  create_component: Vy,
  destroy_component: Ny,
  detach: xy,
  element: Py,
  ensure_array_like: Ky,
  fix_and_outro_and_destroy_block: Zy,
  fix_position: Gy,
  group_outros: Jy,
  init: Qy,
  insert: eS,
  mount_component: tS,
  noop: nS,
  safe_not_equal: iS,
  set_style: lS,
  space: oS,
  transition_in: sS,
  transition_out: aS,
  update_keyed_each: rS
} = window.__gradio__svelte__internal, {
  SvelteComponent: _S,
  attr: cS,
  detach: uS,
  element: fS,
  init: dS,
  insert: hS,
  noop: mS,
  safe_not_equal: gS,
  set_style: bS,
  toggle_class: pS
} = window.__gradio__svelte__internal, {
  SvelteComponent: wS,
  add_flush_callback: vS,
  assign: kS,
  bind: CS,
  binding_callbacks: yS,
  create_component: SS,
  destroy_component: qS,
  detach: zS,
  flush: BS,
  get_spread_object: DS,
  get_spread_update: LS,
  init: MS,
  insert: ES,
  mount_component: RS,
  safe_not_equal: WS,
  space: AS,
  transition_in: XS,
  transition_out: YS
} = window.__gradio__svelte__internal;
var S_ = (i) => {
  throw TypeError(i);
}, q_ = (i, e, t) => e.has(i) || S_("Cannot " + t), bi = (i, e, t) => (q_(i, e, "read from private field"), e.get(i)), Xg = (i, e, t) => e.has(i) ? S_("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Yg = (i, e, t, n) => (q_(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var en;
class IS extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = bi(this, en) + t; ; ) {
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
        Yg(this, en, t);
      },
      flush: (t) => {
        if (bi(this, en) === "")
          return;
        const n = e.allowCR && bi(this, en).endsWith("\r") ? bi(this, en).slice(0, -1) : bi(this, en);
        t.enqueue(n);
      }
    }), Xg(this, en, "");
  }
}
en = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Ig,
  append: z_,
  attr: me,
  bubble: Hg,
  check_outros: jg,
  create_slot: B_,
  detach: Yi,
  element: Fl,
  empty: Tg,
  get_all_dirty_from_scope: D_,
  get_slot_changes: L_,
  group_outros: $g,
  init: Fg,
  insert: Ii,
  listen: Og,
  safe_not_equal: Ug,
  set_style: $e,
  space: M_,
  src_url_equal: Bl,
  toggle_class: Zn,
  transition_in: Dl,
  transition_out: Ll,
  update_slot_base: E_
} = window.__gradio__svelte__internal;
function Vg(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Oa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = B_(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Fl("button"), r && r.c(), t = M_(), _ && _.c(), me(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), me(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Zn(e, "hidden", !/*visible*/
      i[2]), $e(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), $e(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), $e(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, f) {
      Ii(c, e, f), r && r.m(e, null), z_(e, t), _ && _.m(e, null), l = !0, o || (s = Og(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, f) {
      /*icon*/
      c[7] ? r ? r.p(c, f) : (r = Oa(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || f & /*$$scope*/
      2048) && E_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? L_(
          a,
          /*$$scope*/
          c[11],
          f,
          null
        ) : D_(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && me(e, "class", n), (!l || f & /*elem_id*/
      1) && me(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || f & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || f & /*size, variant, elem_classes, visible*/
      30) && Zn(e, "hidden", !/*visible*/
      c[2]), f & /*scale*/
      512 && $e(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), f & /*scale*/
      512 && $e(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && $e(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (Dl(_, c), l = !0);
    },
    o(c) {
      Ll(_, c), l = !1;
    },
    d(c) {
      c && Yi(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function Ng(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Ua(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = B_(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Fl("a"), o && o.c(), t = M_(), r && r.c(), me(
        e,
        "href",
        /*link*/
        i[6]
      ), me(e, "rel", "noopener noreferrer"), me(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), me(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), me(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Zn(e, "hidden", !/*visible*/
      i[2]), Zn(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), $e(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), $e(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), $e(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), $e(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, _) {
      Ii(a, e, _), o && o.m(e, null), z_(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = Ua(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && E_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? L_(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : D_(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && me(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && me(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && me(e, "class", n), (!l || _ & /*elem_id*/
      1) && me(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && Zn(e, "hidden", !/*visible*/
      a[2]), (!l || _ & /*size, variant, elem_classes, disabled*/
      282) && Zn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), _ & /*scale*/
      512 && $e(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && $e(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && $e(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && $e(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (Dl(r, a), l = !0);
    },
    o(a) {
      Ll(r, a), l = !1;
    },
    d(a) {
      a && Yi(e), o && o.d(), r && r.d(a);
    }
  };
}
function Oa(i) {
  let e, t, n;
  return {
    c() {
      e = Fl("img"), me(e, "class", "button-icon svelte-8huxfn"), Bl(e.src, t = /*icon*/
      i[7].url) || me(e, "src", t), me(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ii(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Bl(e.src, t = /*icon*/
      l[7].url) && me(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && me(e, "alt", n);
    },
    d(l) {
      l && Yi(e);
    }
  };
}
function Ua(i) {
  let e, t, n;
  return {
    c() {
      e = Fl("img"), me(e, "class", "button-icon svelte-8huxfn"), Bl(e.src, t = /*icon*/
      i[7].url) || me(e, "src", t), me(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ii(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Bl(e.src, t = /*icon*/
      l[7].url) && me(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && me(e, "alt", n);
    },
    d(l) {
      l && Yi(e);
    }
  };
}
function xg(i) {
  let e, t, n, l;
  const o = [Ng, Vg], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Tg();
    },
    m(a, _) {
      s[e].m(a, _), Ii(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : ($g(), Ll(s[c], 1, 1, () => {
        s[c] = null;
      }), jg(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Dl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Dl(t), l = !0);
    },
    o(a) {
      Ll(t), l = !1;
    },
    d(a) {
      a && Yi(n), s[e].d(a);
    }
  };
}
function Pg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: f = null } = e, { icon: u = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(b) {
    Hg.call(this, i, b);
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
class os extends Ig {
  constructor(e) {
    super(), Fg(this, e, Pg, xg, Ug, {
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
  SvelteComponent: HS,
  create_component: jS,
  destroy_component: TS,
  detach: $S,
  init: FS,
  insert: OS,
  mount_component: US,
  safe_not_equal: VS,
  set_data: NS,
  text: xS,
  transition_in: PS,
  transition_out: KS
} = window.__gradio__svelte__internal, {
  SvelteComponent: Kg,
  add_render_callback: R_,
  append: al,
  attr: Ge,
  binding_callbacks: Va,
  check_outros: Zg,
  create_bidirectional_transition: Na,
  destroy_each: Gg,
  detach: Mi,
  element: Ml,
  empty: Jg,
  ensure_array_like: xa,
  group_outros: Qg,
  init: eb,
  insert: Ei,
  listen: ss,
  prevent_default: tb,
  run_all: nb,
  safe_not_equal: ib,
  set_data: lb,
  set_style: Fn,
  space: as,
  text: ob,
  toggle_class: St,
  transition_in: Fo,
  transition_out: Pa
} = window.__gradio__svelte__internal, { createEventDispatcher: sb } = window.__gradio__svelte__internal;
function Ka(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Za(i) {
  let e, t, n, l, o, s = xa(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Ga(Ka(i, s, a));
  return {
    c() {
      e = Ml("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ge(e, "class", "options svelte-yuohum"), Ge(e, "role", "listbox"), Fn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Fn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Fn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, _) {
      Ei(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = ss(e, "mousedown", tb(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = xa(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Ka(a, s, c);
          r[c] ? r[c].p(f, _) : (r[c] = Ga(f), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && Fn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && Fn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && Fn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && R_(() => {
        n && (t || (t = Na(e, Js, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Na(e, Js, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Mi(e), Gg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Ga(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = Ml("li"), t = Ml("span"), t.textContent = "✓", n = as(), o = ob(l), s = as(), Ge(t, "class", "inner-item svelte-yuohum"), St(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Ge(e, "class", "item svelte-yuohum"), Ge(e, "data-index", r = /*index*/
      i[26]), Ge(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Ge(e, "data-testid", "dropdown-option"), Ge(e, "role", "option"), Ge(e, "aria-selected", _ = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), St(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), St(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), St(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), St(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, f) {
      Ei(c, e, f), al(e, t), al(e, n), al(e, o), al(e, s);
    },
    p(c, f) {
      f & /*selected_indices, filtered_indices*/
      18 && St(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), f & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && lb(o, l), f & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Ge(e, "data-index", r), f & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Ge(e, "aria-label", a), f & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Ge(e, "aria-selected", _), f & /*selected_indices, filtered_indices*/
      18 && St(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), f & /*filtered_indices, active_index*/
      34 && St(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && St(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), f & /*filtered_indices, active_index*/
      34 && St(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && Mi(e);
    }
  };
}
function ab(i) {
  let e, t, n, l, o;
  R_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Za(i)
  );
  return {
    c() {
      e = Ml("div"), t = as(), s && s.c(), n = Jg(), Ge(e, "class", "reference");
    },
    m(r, a) {
      Ei(r, e, a), i[20](e), Ei(r, t, a), s && s.m(r, a), Ei(r, n, a), l || (o = [
        ss(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        ss(
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
      12 && Fo(s, 1)) : (s = Za(r), s.c(), Fo(s, 1), s.m(n.parentNode, n)) : s && (Qg(), Pa(s, 1, 1, () => {
        s = null;
      }), Zg());
    },
    i(r) {
      Fo(s);
    },
    o(r) {
      Pa(s);
    },
    d(r) {
      r && (Mi(e), Mi(t), Mi(n)), i[20](null), s && s.d(r), l = !1, nb(o);
    }
  };
}
function rb(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, f, u, d, m, h, g, b, v, p;
  function S() {
    const { top: R, bottom: K } = h.getBoundingClientRect();
    t(16, f = R), t(17, u = p - K);
  }
  let D = null;
  function z() {
    r && (D !== null && clearTimeout(D), D = setTimeout(
      () => {
        S(), D = null;
      },
      10
    ));
  }
  const C = sb();
  function w() {
    t(11, p = window.innerHeight);
  }
  function W(R) {
    Va[R ? "unshift" : "push"](() => {
      h = R, t(6, h);
    });
  }
  const y = (R) => C("change", R);
  function q(R) {
    Va[R ? "unshift" : "push"](() => {
      g = R, t(7, g);
    });
  }
  return i.$$set = (R) => {
    "choices" in R && t(0, o = R.choices), "filtered_indices" in R && t(1, s = R.filtered_indices), "show_options" in R && t(2, r = R.show_options), "disabled" in R && t(3, a = R.disabled), "selected_indices" in R && t(4, _ = R.selected_indices), "active_index" in R && t(5, c = R.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && _.length > 0) {
          let K = g.querySelectorAll("li");
          for (const O of Array.from(K))
            if (O.getAttribute("data-index") === _[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, O.offsetTop);
              break;
            }
        }
        S();
        const R = t(15, l = h.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, d = (R == null ? void 0 : R.height) || 0), t(8, m = (R == null ? void 0 : R.width) || 0);
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
    z,
    C,
    n,
    l,
    f,
    u,
    d,
    w,
    W,
    y,
    q
  ];
}
class _b extends Kg {
  constructor(e) {
    super(), eb(this, e, rb, ab, ib, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function cb(i, e) {
  return (i % e + e) % e;
}
function Ja(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function ub(i, e, t) {
  i("change", e), t || i("input");
}
function fb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[cb(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: ZS,
  append: GS,
  attr: JS,
  binding_callbacks: QS,
  check_outros: eq,
  create_component: tq,
  destroy_component: nq,
  destroy_each: iq,
  detach: lq,
  element: oq,
  ensure_array_like: sq,
  group_outros: aq,
  init: rq,
  insert: _q,
  listen: cq,
  mount_component: uq,
  prevent_default: fq,
  run_all: dq,
  safe_not_equal: hq,
  set_data: mq,
  set_input_value: gq,
  space: bq,
  text: pq,
  toggle_class: wq,
  transition_in: vq,
  transition_out: kq
} = window.__gradio__svelte__internal, { afterUpdate: Cq, createEventDispatcher: yq } = window.__gradio__svelte__internal, {
  SvelteComponent: db,
  append: un,
  attr: Ze,
  binding_callbacks: hb,
  check_outros: mb,
  create_component: rs,
  destroy_component: _s,
  detach: ks,
  element: Nn,
  group_outros: gb,
  init: bb,
  insert: Cs,
  listen: pi,
  mount_component: cs,
  run_all: pb,
  safe_not_equal: wb,
  set_data: vb,
  set_input_value: Qa,
  space: Oo,
  text: kb,
  toggle_class: On,
  transition_in: xn,
  transition_out: zi
} = window.__gradio__svelte__internal, { onMount: Cb } = window.__gradio__svelte__internal, { createEventDispatcher: yb, afterUpdate: Sb } = window.__gradio__svelte__internal;
function qb(i) {
  let e;
  return {
    c() {
      e = kb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      Cs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && vb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && ks(e);
    }
  };
}
function er(i) {
  let e, t, n;
  return t = new ds({}), {
    c() {
      e = Nn("div"), rs(t.$$.fragment), Ze(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      Cs(l, e, o), cs(t, e, null), n = !0;
    },
    i(l) {
      n || (xn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      zi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ks(e), _s(t);
    }
  };
}
function zb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m;
  t = new Mr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [qb] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && er();
  return f = new _b({
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
      e = Nn("div"), rs(t.$$.fragment), n = Oo(), l = Nn("div"), o = Nn("div"), s = Nn("div"), r = Nn("input"), _ = Oo(), h && h.c(), c = Oo(), rs(f.$$.fragment), Ze(r, "role", "listbox"), Ze(r, "aria-controls", "dropdown-options"), Ze(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Ze(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Ze(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Ze(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], On(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Ze(s, "class", "secondary-wrap svelte-1m1zvyj"), Ze(o, "class", "wrap-inner svelte-1m1zvyj"), On(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), Ze(l, "class", "wrap svelte-1m1zvyj"), Ze(e, "class", "svelte-1m1zvyj"), On(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      Cs(g, e, b), cs(t, e, null), un(e, n), un(e, l), un(l, o), un(o, s), un(s, r), Qa(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), un(s, _), h && h.m(s, null), un(l, c), cs(f, l, null), u = !0, d || (m = [
        pi(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        pi(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        pi(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        pi(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        pi(
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
      4096) && Ze(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!u || b[0] & /*label*/
      1) && Ze(
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
      g[9] && Qa(
        r,
        /*input_text*/
        g[9]
      ), (!u || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && On(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (gb(), zi(h, 1, 1, () => {
        h = null;
      }), mb()) : h ? b[0] & /*disabled*/
      8 && xn(h, 1) : (h = er(), h.c(), xn(h, 1), h.m(s, null)), (!u || b[0] & /*show_options*/
      4096) && On(
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
      32) && On(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      u || (xn(t.$$.fragment, g), xn(h), xn(f.$$.fragment, g), u = !0);
    },
    o(g) {
      zi(t.$$.fragment, g), zi(h), zi(f.$$.fragment, g), u = !1;
    },
    d(g) {
      g && ks(e), _s(t), i[29](null), h && h.d(), _s(f), d = !1, pb(m);
    }
  };
}
function Bb(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: f } = e, { container: u = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, b, v, p = "", S = "", D = !1, z = [], C = null, w = null, W;
  const y = yb();
  o ? (W = a.map((M) => M[1]).indexOf(o), w = W, w === -1 ? (s = o, w = null) : ([p, s] = a[w], S = p), R()) : a.length > 0 && (W = 0, w = 0, [p, o] = a[w], s = o, S = p);
  function q() {
    t(13, b = a.map((M) => M[0])), t(24, v = a.map((M) => M[1]));
  }
  function R() {
    q(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, w = null)) : v.includes(o) ? (t(9, p = b[v.indexOf(o)]), t(11, w = v.indexOf(o))) : d ? (t(9, p = o), t(11, w = null)) : (t(9, p = ""), t(11, w = null)), t(27, W = w);
  }
  function K(M) {
    if (t(11, w = parseInt(M.detail.target.dataset.index)), isNaN(w)) {
      t(11, w = null);
      return;
    }
    t(12, g = !1), t(14, C = null), h.blur();
  }
  function O(M) {
    t(10, z = a.map((P, U) => U)), t(12, g = !0), y("focus");
  }
  function B() {
    d ? t(20, o = p) : t(9, p = b[v.indexOf(o)]), t(12, g = !1), t(14, C = null), y("blur");
  }
  function Z(M) {
    t(12, [g, C] = fb(M, C, z), g, (t(14, C), t(2, a), t(23, _), t(6, d), t(9, p), t(10, z), t(8, h), t(25, S), t(11, w), t(27, W), t(26, D), t(24, v))), M.key === "Enter" && (C !== null ? (t(11, w = C), t(12, g = !1), h.blur(), t(14, C = null)) : b.includes(p) ? (t(11, w = b.indexOf(p)), t(12, g = !1), t(14, C = null), h.blur()) : d && (t(20, o = p), t(11, w = null), t(12, g = !1), t(14, C = null), h.blur()), y("enter", o));
  }
  Sb(() => {
    t(21, r = !1), t(26, D = !0);
  }), Cb(() => {
    h.focus();
  });
  function _e() {
    p = this.value, t(9, p), t(11, w), t(27, W), t(26, D), t(2, a), t(24, v);
  }
  function I(M) {
    hb[M ? "unshift" : "push"](() => {
      h = M, t(8, h);
    });
  }
  const T = (M) => y("key_up", { key: M.key, input_value: p });
  return i.$$set = (M) => {
    "label" in M && t(0, n = M.label), "info" in M && t(1, l = M.info), "value" in M && t(20, o = M.value), "value_is_output" in M && t(21, r = M.value_is_output), "choices" in M && t(2, a = M.choices), "disabled" in M && t(3, c = M.disabled), "show_label" in M && t(4, f = M.show_label), "container" in M && t(5, u = M.container), "allow_custom_value" in M && t(6, d = M.allow_custom_value), "filterable" in M && t(7, m = M.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && w !== W && w !== null && D && (t(9, [p, o] = a[w], p, (t(20, o), t(11, w), t(27, W), t(26, D), t(2, a), t(24, v))), t(27, W = w), y("select", {
      index: w,
      value: v[w],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (R(), ub(y, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && q(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (d || R(), t(23, _ = a), t(10, z = Ja(a, p)), !d && z.length > 0 && t(14, C = z[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== S && (t(10, z = Ja(a, p)), t(25, S = p), !d && z.length > 0 && t(14, C = z[0]));
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
    z,
    w,
    g,
    b,
    C,
    y,
    K,
    O,
    B,
    Z,
    o,
    r,
    s,
    _,
    v,
    S,
    D,
    W,
    _e,
    I,
    T
  ];
}
class Db extends db {
  constructor(e) {
    super(), bb(
      this,
      e,
      Bb,
      zb,
      wb,
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
  SvelteComponent: Sq,
  attr: qq,
  detach: zq,
  element: Bq,
  init: Dq,
  insert: Lq,
  noop: Mq,
  safe_not_equal: Eq,
  toggle_class: Rq
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wq,
  add_flush_callback: Aq,
  assign: Xq,
  bind: Yq,
  binding_callbacks: Iq,
  check_outros: Hq,
  create_component: jq,
  destroy_component: Tq,
  detach: $q,
  empty: Fq,
  get_spread_object: Oq,
  get_spread_update: Uq,
  group_outros: Vq,
  init: Nq,
  insert: xq,
  mount_component: Pq,
  safe_not_equal: Kq,
  space: Zq,
  transition_in: Gq,
  transition_out: Jq
} = window.__gradio__svelte__internal, {
  SvelteComponent: Lb,
  append: lt,
  attr: Gn,
  check_outros: us,
  create_component: vn,
  destroy_component: kn,
  detach: si,
  element: qt,
  group_outros: fs,
  init: Mb,
  insert: ai,
  listen: Eb,
  mount_component: Cn,
  safe_not_equal: Rb,
  set_style: Jn,
  space: wi,
  text: ys,
  toggle_class: tr,
  transition_in: Me,
  transition_out: Je
} = window.__gradio__svelte__internal, { createEventDispatcher: Wb } = window.__gradio__svelte__internal, { onMount: Ab } = window.__gradio__svelte__internal;
function nr(i) {
  let e, t, n, l, o, s, r;
  const a = [Yb, Xb], _ = [];
  function c(f, u) {
    return (
      /*labelDetailLock*/
      f[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = qt("div"), t = qt("button"), l.c(), Gn(t, "class", "icon svelte-d9x7u0"), Gn(t, "aria-label", "Lock label detail"), tr(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Jn(e, "margin-right", "8px");
    },
    m(f, u) {
      ai(f, e, u), lt(e, t), _[n].m(t, null), o = !0, s || (r = Eb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(f, u) {
      let d = n;
      n = c(f), n !== d && (fs(), Je(_[d], 1, 1, () => {
        _[d] = null;
      }), us(), l = _[n], l || (l = _[n] = a[n](f), l.c()), Me(l, 1), l.m(t, null)), (!o || u & /*labelDetailLock*/
      4) && tr(
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
      Je(l), o = !1;
    },
    d(f) {
      f && si(e), _[n].d(), s = !1, r();
    }
  };
}
function Xb(i) {
  let e, t;
  return e = new K0({}), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, l) {
      Cn(e, n, l), t = !0;
    },
    i(n) {
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function Yb(i) {
  let e, t;
  return e = new $0({}), {
    c() {
      vn(e.$$.fragment);
    },
    m(n, l) {
      Cn(e, n, l), t = !0;
    },
    i(n) {
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function Ib(i) {
  let e;
  return {
    c() {
      e = ys("Cancel");
    },
    m(t, n) {
      ai(t, e, n);
    },
    d(t) {
      t && si(e);
    }
  };
}
function ir(i) {
  let e, t, n;
  return t = new os({
    props: {
      variant: "stop",
      $$slots: { default: [Hb] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = qt("div"), vn(t.$$.fragment), Jn(e, "margin-right", "8px");
    },
    m(l, o) {
      ai(l, e, o), Cn(t, e, null), n = !0;
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
      Je(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && si(e), kn(t);
    }
  };
}
function Hb(i) {
  let e;
  return {
    c() {
      e = ys("Remove");
    },
    m(t, n) {
      ai(t, e, n);
    },
    d(t) {
      t && si(e);
    }
  };
}
function jb(i) {
  let e;
  return {
    c() {
      e = ys("OK");
    },
    m(t, n) {
      ai(t, e, n);
    },
    d(t) {
      t && si(e);
    }
  };
}
function Tb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h, g, b, v = !/*showRemove*/
  i[4] && nr(i);
  s = new Db({
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
  ), _ = new Ag({
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
  ), u = new os({
    props: {
      $$slots: { default: [Ib] },
      $$scope: { ctx: i }
    }
  }), u.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && ir(i)
  );
  return g = new os({
    props: {
      variant: "primary",
      $$slots: { default: [jb] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = qt("div"), t = qt("div"), n = qt("span"), v && v.c(), l = wi(), o = qt("div"), vn(s.$$.fragment), r = wi(), a = qt("div"), vn(_.$$.fragment), c = wi(), f = qt("div"), vn(u.$$.fragment), d = wi(), p && p.c(), m = wi(), h = qt("div"), vn(g.$$.fragment), Jn(o, "margin-right", "10px"), Jn(a, "margin-right", "40px"), Jn(a, "margin-bottom", "8px"), Jn(f, "margin-right", "8px"), Gn(n, "class", "model-content svelte-d9x7u0"), Gn(t, "class", "modal-container svelte-d9x7u0"), Gn(e, "class", "modal svelte-d9x7u0"), Gn(e, "id", "model-box-edit");
    },
    m(S, D) {
      ai(S, e, D), lt(e, t), lt(t, n), v && v.m(n, null), lt(n, l), lt(n, o), Cn(s, o, null), lt(n, r), lt(n, a), Cn(_, a, null), lt(n, c), lt(n, f), Cn(u, f, null), lt(n, d), p && p.m(n, null), lt(n, m), lt(n, h), Cn(g, h, null), b = !0;
    },
    p(S, [D]) {
      /*showRemove*/
      S[4] ? v && (fs(), Je(v, 1, 1, () => {
        v = null;
      }), us()) : v ? (v.p(S, D), D & /*showRemove*/
      16 && Me(v, 1)) : (v = nr(S), v.c(), Me(v, 1), v.m(n, l));
      const z = {};
      D & /*currentLabel*/
      1 && (z.value = /*currentLabel*/
      S[0]), D & /*choices*/
      8 && (z.choices = /*choices*/
      S[3]), s.$set(z);
      const C = {};
      D & /*currentColor*/
      2 && (C.value = /*currentColor*/
      S[1]), _.$set(C);
      const w = {};
      D & /*$$scope*/
      262144 && (w.$$scope = { dirty: D, ctx: S }), u.$set(w), /*showRemove*/
      S[4] ? p ? (p.p(S, D), D & /*showRemove*/
      16 && Me(p, 1)) : (p = ir(S), p.c(), Me(p, 1), p.m(n, m)) : p && (fs(), Je(p, 1, 1, () => {
        p = null;
      }), us());
      const W = {};
      D & /*$$scope*/
      262144 && (W.$$scope = { dirty: D, ctx: S }), g.$set(W);
    },
    i(S) {
      b || (Me(v), Me(s.$$.fragment, S), Me(_.$$.fragment, S), Me(u.$$.fragment, S), Me(p), Me(g.$$.fragment, S), b = !0);
    },
    o(S) {
      Je(v), Je(s.$$.fragment, S), Je(_.$$.fragment, S), Je(u.$$.fragment, S), Je(p), Je(g.$$.fragment, S), b = !1;
    },
    d(S) {
      S && si(e), v && v.d(), kn(s), kn(_), kn(u), p && p.d(), kn(g);
    }
  };
}
function $b(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const f = Wb();
  function u(D) {
    f("change", {
      label: l,
      color: a,
      lock: c,
      ret: D
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(D) {
    const { detail: z } = D;
    let C = z;
    Number.isInteger(C) ? (Array.isArray(s) && C < s.length && t(1, a = s[C]), Array.isArray(o) && C < o.length && t(0, l = o[C][0])) : t(0, l = C);
  }
  function m(D) {
    const { detail: z } = D;
    t(1, a = z);
  }
  function h(D) {
    d(D), u(1);
  }
  function g(D) {
    t(2, c = !c);
  }
  function b(D) {
    switch (D.key.toLowerCase()) {
      case "enter":
        u(1);
        break;
      case "escape":
        u(0);
        break;
    }
  }
  Ab(() => (document.addEventListener("keydown", b), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const v = () => u(0), p = () => u(-1), S = () => u(1);
  return i.$$set = (D) => {
    "label" in D && t(10, n = D.label), "currentLabel" in D && t(0, l = D.currentLabel), "choices" in D && t(3, o = D.choices), "choicesColors" in D && t(11, s = D.choicesColors), "color" in D && t(12, r = D.color), "currentColor" in D && t(1, a = D.currentColor), "showRemove" in D && t(4, _ = D.showRemove), "labelDetailLock" in D && t(2, c = D.labelDetailLock);
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
    S
  ];
}
class Ss extends Lb {
  constructor(e) {
    super(), Mb(this, e, $b, Tb, Rb, {
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
const ye = (i, e, t) => Math.min(Math.max(i, e), t);
function Uo(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class rl {
  constructor(e, t, n, l, o, s, r, a, _, c, f, u, d, m = "rgb(255, 255, 255)", h = 0.5, g = 25, b = 8, v = 2, p = 4, S = 1, D = !0) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (z) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let C = (z.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, w = (z.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const W = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        C = ye(C, -this._xmin, W - this._xmax), w = ye(w, -this._ymin, y - this._ymax), this._xmin += C, this._ymin += w, this._xmax += C, this._ymax += w, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (z) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [C, w] = this.toBoxCoordinates(z.clientX, z.clientY);
        C = (C - this.offsetMouseX) / this.canvasWindow.scale, w = (w - this.offsetMouseY) / this.canvasWindow.scale, C > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = C, this.creatingAnchorX = "xmin") : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = C : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = C : C < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = C, this.creatingAnchorX = "xmax"), w > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = w, this.creatingAnchorY = "ymin") : w > this._ymin && w < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = w : w > this._ymin && w < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = w : w < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = w, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (z) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, w = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ye(this._xmin, 0, C - this.minSize), this._ymin = ye(this._ymin, 0, w - this.minSize), this._xmax = ye(this._xmax, this.minSize, C), this._ymax = ye(this._ymax, this.minSize, w), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > C ? (this._xmin -= this._xmax - C, this._xmax = C) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > w ? (this._ymin -= this._ymax - w, this._ymax = w) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (z) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const C = z.clientX, w = z.clientY, W = (C - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, y = (w - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, q = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, R = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += W, this._ymin += y, this._xmin = ye(this._xmin, 0, this._xmax - this.minSize), this._ymin = ye(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += W, this._ymin += y, this._xmax = ye(this._xmax, this._xmin + this.minSize, q), this._ymin = ye(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += W, this._ymax += y, this._xmax = ye(this._xmax, this._xmin + this.minSize, q), this._ymax = ye(this._ymax, this._ymin + this.minSize, R);
            break;
          case 3:
            this._xmin += W, this._ymax += y, this._xmin = ye(this._xmin, 0, this._xmax - this.minSize), this._ymax = ye(this._ymax, this._ymin + this.minSize, R);
            break;
          case 4:
            this._ymin += y, this._ymin = ye(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += W, this._xmax = ye(this._xmax, this._xmin + this.minSize, q);
            break;
          case 6:
            this._ymax += y, this._ymax = ye(this._ymax, this._ymin + this.minSize, R);
            break;
          case 7:
            this._xmin += W, this._xmin = ye(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = S, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = f, this._xmax = u, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = v, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = h, this.showLabel = D, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Uo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Uo(this.color, 1), e.stroke(), e.closePath(), this.showLabel && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Uo(this.color, 1);
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
const fn = [
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
], _l = (i, e, t) => Math.min(Math.max(i, e), t);
class Fb {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = _l(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = _l(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = _l(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = _l(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: Ob,
  append: fe,
  attr: J,
  binding_callbacks: lr,
  bubble: Vo,
  check_outros: yn,
  create_component: Oe,
  destroy_component: Ue,
  detach: tn,
  element: Ee,
  empty: Ub,
  group_outros: Sn,
  init: Vb,
  insert: nn,
  listen: ze,
  mount_component: Ve,
  noop: W_,
  run_all: A_,
  safe_not_equal: Nb,
  set_data: xb,
  set_style: cl,
  space: je,
  text: or,
  toggle_class: Un,
  transition_in: oe,
  transition_out: ce
} = window.__gradio__svelte__internal, { onMount: Pb, createEventDispatcher: Kb } = window.__gradio__svelte__internal;
function sr(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h, g, b, v, p, S, D, z, C, w, W, y, q, R, K, O, B, Z, _e, I;
  n = new Km({}), s = new i0({});
  let T = (
    /*showRemoveButton*/
    i[1] && ar(i)
  ), M = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[17] && rr(i);
  const P = [Gb, Zb], U = [];
  function ne(j, Y) {
    return (
      /*labelsVisible*/
      j[16] ? 0 : 1
    );
  }
  return f = ne(i), u = U[f] = P[f](i), h = new Dd({}), v = new dd({}), D = new gg({}), w = new _g({}), B = new ng({}), {
    c() {
      e = Ee("span"), t = Ee("button"), Oe(n.$$.fragment), l = je(), o = Ee("button"), Oe(s.$$.fragment), r = je(), T && T.c(), a = je(), M && M.c(), _ = je(), c = Ee("button"), u.c(), d = je(), m = Ee("button"), Oe(h.$$.fragment), g = je(), b = Ee("button"), Oe(v.$$.fragment), p = je(), S = Ee("button"), Oe(D.$$.fragment), z = je(), C = Ee("button"), Oe(w.$$.fragment), W = je(), y = Ee("span"), q = or(
        /*zoomLevel*/
        i[18]
      ), R = or("%"), K = je(), O = Ee("button"), Oe(B.$$.fragment), J(t, "class", "icon svelte-vuys3"), J(t, "aria-label", "Create box"), J(t, "title", "Create box (C)"), Un(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].creation
      ), J(o, "class", "icon svelte-vuys3"), J(o, "aria-label", "Drag boxes"), J(o, "title", "Drag boxes (D)"), Un(
        o,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].drag
      ), J(c, "class", "icon svelte-vuys3"), J(c, "aria-label", "Toggle labels"), J(c, "title", "Toggle labels"), Un(
        c,
        "active",
        /*labelsVisible*/
        i[16]
      ), J(m, "class", "icon svelte-vuys3"), J(m, "aria-label", "Rotate counterclockwise"), J(m, "title", "Rotate counterclockwise"), J(b, "class", "icon svelte-vuys3"), J(b, "aria-label", "Rotate clockwise"), J(b, "title", "Rotate clockwise"), J(S, "class", "icon svelte-vuys3"), J(S, "aria-label", "Reset zoom"), J(S, "title", "Reset zoom (Space)"), J(C, "class", "icon svelte-vuys3"), J(C, "aria-label", "Zoom out"), J(C, "title", "Zoom out"), J(y, "class", "zoom-level svelte-vuys3"), J(O, "class", "icon svelte-vuys3"), J(O, "aria-label", "Zoom in"), J(O, "title", "Zoom in"), J(e, "class", "canvas-control svelte-vuys3");
    },
    m(j, Y) {
      nn(j, e, Y), fe(e, t), Ve(n, t, null), fe(e, l), fe(e, o), Ve(s, o, null), fe(e, r), T && T.m(e, null), fe(e, a), M && M.m(e, null), fe(e, _), fe(e, c), U[f].m(c, null), fe(e, d), fe(e, m), Ve(h, m, null), fe(e, g), fe(e, b), Ve(v, b, null), fe(e, p), fe(e, S), Ve(D, S, null), fe(e, z), fe(e, C), Ve(w, C, null), fe(e, W), fe(e, y), fe(y, q), fe(y, R), fe(e, K), fe(e, O), Ve(B, O, null), Z = !0, _e || (I = [
        ze(
          t,
          "click",
          /*click_handler*/
          i[50]
        ),
        ze(
          o,
          "click",
          /*click_handler_1*/
          i[51]
        ),
        ze(
          c,
          "click",
          /*toggleLabels*/
          i[19]
        ),
        ze(
          m,
          "click",
          /*click_handler_4*/
          i[54]
        ),
        ze(
          b,
          "click",
          /*click_handler_5*/
          i[55]
        ),
        ze(
          S,
          "click",
          /*resetView*/
          i[24]
        ),
        ze(
          C,
          "click",
          /*zoomOut*/
          i[26]
        ),
        ze(
          O,
          "click",
          /*zoomIn*/
          i[25]
        )
      ], _e = !0);
    },
    p(j, Y) {
      (!Z || Y[0] & /*mode, Mode*/
      4352) && Un(
        t,
        "selected",
        /*mode*/
        j[12] === /*Mode*/
        j[8].creation
      ), (!Z || Y[0] & /*mode, Mode*/
      4352) && Un(
        o,
        "selected",
        /*mode*/
        j[12] === /*Mode*/
        j[8].drag
      ), /*showRemoveButton*/
      j[1] ? T ? (T.p(j, Y), Y[0] & /*showRemoveButton*/
      2 && oe(T, 1)) : (T = ar(j), T.c(), oe(T, 1), T.m(e, a)) : T && (Sn(), ce(T, 1, 1, () => {
        T = null;
      }), yn()), !/*disableEditBoxes*/
      j[5] && /*labelDetailLock*/
      j[17] ? M ? (M.p(j, Y), Y[0] & /*disableEditBoxes, labelDetailLock*/
      131104 && oe(M, 1)) : (M = rr(j), M.c(), oe(M, 1), M.m(e, _)) : M && (Sn(), ce(M, 1, 1, () => {
        M = null;
      }), yn());
      let be = f;
      f = ne(j), f !== be && (Sn(), ce(U[be], 1, 1, () => {
        U[be] = null;
      }), yn(), u = U[f], u || (u = U[f] = P[f](j), u.c()), oe(u, 1), u.m(c, null)), (!Z || Y[0] & /*labelsVisible*/
      65536) && Un(
        c,
        "active",
        /*labelsVisible*/
        j[16]
      ), (!Z || Y[0] & /*zoomLevel*/
      262144) && xb(
        q,
        /*zoomLevel*/
        j[18]
      );
    },
    i(j) {
      Z || (oe(n.$$.fragment, j), oe(s.$$.fragment, j), oe(T), oe(M), oe(u), oe(h.$$.fragment, j), oe(v.$$.fragment, j), oe(D.$$.fragment, j), oe(w.$$.fragment, j), oe(B.$$.fragment, j), Z = !0);
    },
    o(j) {
      ce(n.$$.fragment, j), ce(s.$$.fragment, j), ce(T), ce(M), ce(u), ce(h.$$.fragment, j), ce(v.$$.fragment, j), ce(D.$$.fragment, j), ce(w.$$.fragment, j), ce(B.$$.fragment, j), Z = !1;
    },
    d(j) {
      j && tn(e), Ue(n), Ue(s), T && T.d(), M && M.d(), U[f].d(), Ue(h), Ue(v), Ue(D), Ue(w), Ue(B), _e = !1, A_(I);
    }
  };
}
function ar(i) {
  let e, t, n, l, o;
  return t = new u0({}), {
    c() {
      e = Ee("button"), Oe(t.$$.fragment), J(e, "class", "icon svelte-vuys3"), J(e, "aria-label", "Remove box"), J(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      nn(s, e, r), Ve(t, e, null), n = !0, l || (o = ze(
        e,
        "click",
        /*click_handler_2*/
        i[52]
      ), l = !0);
    },
    p: W_,
    i(s) {
      n || (oe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ce(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && tn(e), Ue(t), l = !1, o();
    }
  };
}
function rr(i) {
  let e, t, n, l, o;
  return t = new p0({}), {
    c() {
      e = Ee("button"), Oe(t.$$.fragment), J(e, "class", "icon svelte-vuys3"), J(e, "aria-label", "Edit label"), J(e, "title", "Edit label");
    },
    m(s, r) {
      nn(s, e, r), Ve(t, e, null), n = !0, l || (o = ze(
        e,
        "click",
        /*click_handler_3*/
        i[53]
      ), l = !0);
    },
    p: W_,
    i(s) {
      n || (oe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ce(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && tn(e), Ue(t), l = !1, o();
    }
  };
}
function Zb(i) {
  let e, t;
  return e = new W0({}), {
    c() {
      Oe(e.$$.fragment);
    },
    m(n, l) {
      Ve(e, n, l), t = !0;
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ue(e, n);
    }
  };
}
function Gb(i) {
  let e, t;
  return e = new z0({}), {
    c() {
      Oe(e.$$.fragment);
    },
    m(n, l) {
      Ve(e, n, l), t = !0;
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ue(e, n);
    }
  };
}
function _r(i) {
  let e, t;
  return e = new Ss({
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
        i[0].boxes.length ? Mn(
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
    i[32]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[58]
  ), {
    c() {
      Oe(e.$$.fragment);
    },
    m(n, l) {
      Ve(e, n, l), t = !0;
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
      n[0].boxes.length ? Mn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(o);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ue(e, n);
    }
  };
}
function cr(i) {
  let e, t;
  return e = new Ss({
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
        i[0].boxes.length ? Mn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[17]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[33]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[59]
  ), {
    c() {
      Oe(e.$$.fragment);
    },
    m(n, l) {
      Ve(e, n, l), t = !0;
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
      n[0].boxes.length ? Mn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      131072 && (o.labelDetailLock = /*labelDetailLock*/
      n[17]), e.$set(o);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ue(e, n);
    }
  };
}
function ur(i) {
  let e, t;
  return e = new Ss({
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
        i[0].boxes.length ? Mn(
          /*value*/
          i[0].boxes[
            /*selectedBox*/
            i[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[17]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[34]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[60]
  ), {
    c() {
      Oe(e.$$.fragment);
    },
    m(n, l) {
      Ve(e, n, l), t = !0;
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
      n[0].boxes.length ? Mn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), l[0] & /*labelDetailLock*/
      131072 && (o.labelDetailLock = /*labelDetailLock*/
      n[17]), e.$set(o);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ue(e, n);
    }
  };
}
function Jb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u = (
    /*interactive*/
    i[2] && sr(i)
  ), d = (
    /*editModalVisible*/
    i[13] && _r(i)
  ), m = (
    /*newModalVisible*/
    i[14] && cr(i)
  ), h = (
    /*editDefaultLabelVisible*/
    i[15] && ur(i)
  );
  return {
    c() {
      e = Ee("div"), t = Ee("div"), n = Ee("canvas"), l = je(), u && u.c(), o = je(), d && d.c(), s = je(), m && m.c(), r = je(), h && h.c(), a = Ub(), cl(
        n,
        "height",
        /*height*/
        i[6]
      ), cl(
        n,
        "width",
        /*width*/
        i[7]
      ), J(n, "class", "canvas-annotator svelte-vuys3"), J(t, "class", "canvas-container svelte-vuys3"), J(e, "class", "annotator-container"), J(e, "tabindex", "0");
    },
    m(g, b) {
      nn(g, e, b), fe(e, t), fe(t, n), i[49](n), fe(e, l), u && u.m(e, null), i[56](e), nn(g, o, b), d && d.m(g, b), nn(g, s, b), m && m.m(g, b), nn(g, r, b), h && h.m(g, b), nn(g, a, b), _ = !0, c || (f = [
        ze(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[20]
        ),
        ze(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[21]
        ),
        ze(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[23]
        ),
        ze(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[22]
        ),
        ze(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[31]
        ),
        ze(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[28]
        ),
        ze(
          e,
          "keydown",
          /*handleKeyPress*/
          i[27]
        ),
        ze(
          e,
          "click",
          /*click_handler_6*/
          i[57]
        )
      ], c = !0);
    },
    p(g, b) {
      (!_ || b[0] & /*height*/
      64) && cl(
        n,
        "height",
        /*height*/
        g[6]
      ), (!_ || b[0] & /*width*/
      128) && cl(
        n,
        "width",
        /*width*/
        g[7]
      ), /*interactive*/
      g[2] ? u ? (u.p(g, b), b[0] & /*interactive*/
      4 && oe(u, 1)) : (u = sr(g), u.c(), oe(u, 1), u.m(e, null)) : u && (Sn(), ce(u, 1, 1, () => {
        u = null;
      }), yn()), /*editModalVisible*/
      g[13] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      8192 && oe(d, 1)) : (d = _r(g), d.c(), oe(d, 1), d.m(s.parentNode, s)) : d && (Sn(), ce(d, 1, 1, () => {
        d = null;
      }), yn()), /*newModalVisible*/
      g[14] ? m ? (m.p(g, b), b[0] & /*newModalVisible*/
      16384 && oe(m, 1)) : (m = cr(g), m.c(), oe(m, 1), m.m(r.parentNode, r)) : m && (Sn(), ce(m, 1, 1, () => {
        m = null;
      }), yn()), /*editDefaultLabelVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*editDefaultLabelVisible*/
      32768 && oe(h, 1)) : (h = ur(g), h.c(), oe(h, 1), h.m(a.parentNode, a)) : h && (Sn(), ce(h, 1, 1, () => {
        h = null;
      }), yn());
    },
    i(g) {
      _ || (oe(u), oe(d), oe(m), oe(h), _ = !0);
    },
    o(g) {
      ce(u), ce(d), ce(m), ce(h), _ = !1;
    },
    d(g) {
      g && (tn(e), tn(o), tn(s), tn(r), tn(a)), i[49](null), u && u.d(), i[56](null), d && d.d(g), m && m.d(g), h && h.d(g), c = !1, A_(f);
    }
  };
}
const fr = 100;
function ul(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Mn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function Qb(i, e, t) {
  let n;
  var l;
  (function(k) {
    k[k.creation = 0] = "creation", k[k.drag = 1] = "drag";
  })(l || (l = {}));
  let { imageUrl: o = null } = e, { interactive: s } = e, { boxAlpha: r = 0.5 } = e, { boxMinSize: a = 10 } = e, { handleSize: _ } = e, { boxThickness: c } = e, { boxSelectedThickness: f } = e, { value: u } = e, { choices: d = [] } = e, { choicesColors: m = [] } = e, { disableEditBoxes: h = !1 } = e, { height: g = "100%" } = e, { width: b = "100%" } = e, { singleBox: v = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: S = !0 } = e, { useDefaultLabel: D = !1 } = e, { enableKeyboardShortcuts: z = !0 } = e, { showBoxLabels: C = !0 } = e;
  p === null && (p = h);
  let w, W, y, q = null, R = -1, K = l.drag, O = /* @__PURE__ */ new Map(), B = new Fb(ie, O), Z = null;
  u !== null && u.boxes.length == 0 && (K = l.creation);
  let _e = 0, I = 0, T = 0, M = 0, P = 1, U = 0, ne = 0, j = !1, Y = !1, be = !1, A = C, F = D, Q = { label: "", color: "" }, ee = { x: 0, y: 0, distance: 0 };
  const re = Kb();
  function ie() {
    if (y) {
      if (y.clearRect(0, 0, w.width, w.height), y.save(), y.translate(B.offsetX, B.offsetY), y.scale(B.scale, B.scale), q !== null) {
        switch (u.orientation) {
          case 0:
            y.drawImage(q, 0, 0, U, ne);
            break;
          case 1:
            y.translate(U, 0), y.rotate(Math.PI / 2), y.drawImage(q, 0, 0, ne, U);
            break;
          case 2:
            y.translate(U, ne), y.rotate(Math.PI), y.drawImage(q, 0, 0, U, ne);
            break;
          case 3:
            y.translate(0, ne), y.rotate(-Math.PI / 2), y.drawImage(q, 0, 0, ne, U);
            break;
        }
        y.restore();
      }
      for (const k of u.boxes.slice().reverse())
        k.render(y);
    }
  }
  function E(k) {
    t(11, R = k), u.boxes.forEach((X) => {
      X.setSelected(!1);
    }), k >= 0 && k < u.boxes.length && u.boxes[k].setSelected(!0), ie();
  }
  function Lt() {
    t(16, A = !A);
    for (const k of u.boxes)
      k.setShowLabel(A);
    ie();
  }
  const Re = (k, X) => {
    const H = Math.sqrt(Math.pow(k.clientX - X.clientX, 2) + Math.pow(k.clientY - X.clientY, 2));
    return H < fr ? fr : H;
  };
  function rt(k) {
    if (s) {
      if (k.preventDefault(), w.setPointerCapture(k.pointerId), O.set(k.pointerId, k), O.size == 1)
        K === l.creation ? An(k) : K === l.drag && _t(k);
      else if (O.size == 2) {
        t(48, B.isDragging = !1, B), u.boxes.forEach((Ae) => {
          Ae.isCreating = !1, Ae.isDragging = !1, Ae.isResizing = !1;
        });
        const X = Array.from(O.values()), H = X[0], x = X[1], G = Re(H, x), te = w.getBoundingClientRect(), ue = (H.clientX + x.clientX) / 2 - te.left, We = (H.clientY + x.clientY) / 2 - te.top;
        ee.distance = G, ee.x = ue, ee.y = We;
      }
    }
  }
  function _t(k) {
    const X = w.getBoundingClientRect(), H = k.clientX - X.left, x = k.clientY - X.top;
    let G = !1;
    for (const [te, ue] of u.boxes.entries()) {
      const We = ue.indexOfPointInsideHandle(H, x);
      if (We >= 0) {
        G = !0, E(te), ue.startResize(We, k);
        return;
      }
    }
    for (const [te, ue] of u.boxes.entries())
      if (ue.isPointInsideBox(H, x)) {
        G = !0, E(te), ue.startDrag(k);
        return;
      }
    v || E(-1), G || B.startDrag(k);
  }
  function an(k) {
    s && (O.delete(k.pointerId), w.releasePointerCapture(k.pointerId), re("change"));
  }
  function Ol(k) {
    s && (O.delete(k.pointerId), w.releasePointerCapture(k.pointerId), re("change"));
  }
  function Ul(k) {
    if (s)
      if (k.preventDefault(), k.pointerType === "mouse") {
        if (!S || u === null || K !== l.drag)
          return;
        const X = w.getBoundingClientRect(), H = k.clientX - X.left, x = k.clientY - X.top;
        for (const [G, te] of u.boxes.entries()) {
          const ue = te.indexOfPointInsideHandle(H, x);
          if (ue >= 0) {
            t(9, w.style.cursor = te.resizeHandles[ue].cursor, w);
            return;
          }
        }
        t(9, w.style.cursor = "default", w);
      } else {
        if (!O.has(k.pointerId))
          return;
        if (O.set(k.pointerId, k), O.size === 2) {
          const X = Array.from(O.values()), H = X[0], x = X[1], G = Re(H, x), te = w.getBoundingClientRect(), ue = (H.clientX + x.clientX) / 2 - te.left, We = (H.clientY + x.clientY) / 2 - te.top, Ae = parseFloat((B.scale * (G / ee.distance)).toFixed(2)), Ot = Ae < 1 ? 1 : Ae, ui = Ot / B.scale;
          t(48, B.offsetX = ee.x - (ee.x - B.offsetX) * ui, B), t(48, B.offsetY = ee.y - (ee.y - B.offsetY) * ui, B);
          const fi = ue - ee.x, ic = We - ee.y;
          t(48, B.offsetX += fi, B), t(48, B.offsetY += ic, B), t(48, B.scale = Ot, B), ee.x = ue, ee.y = We, ee.distance = G, ie();
        }
      }
  }
  function Hi() {
    const k = w.width / U, X = w.height / ne, H = Math.min(k, X);
    t(48, B.scale = H, B), t(48, B.offsetX = (w.width - U * H) / 2, B), t(48, B.offsetY = (w.height - ne * H) / 2, B), ie();
  }
  function Vl() {
    const k = parseFloat((B.scale * 1.25).toFixed(2)), X = w.width / 2, H = w.height / 2, x = (X - B.offsetX) / B.scale, G = (H - B.offsetY) / B.scale;
    t(48, B.offsetX = X - x * k, B), t(48, B.offsetY = H - G * k, B), t(48, B.scale = k, B), ie();
  }
  function Nl() {
    const k = parseFloat((B.scale * 0.8).toFixed(2)), X = k < 1 ? 1 : k, H = w.width / 2, x = w.height / 2, G = (H - B.offsetX) / B.scale, te = (x - B.offsetY) / B.scale;
    t(48, B.offsetX = H - G * X, B), t(48, B.offsetY = x - te * X, B), t(48, B.scale = X, B), ie();
  }
  function L(k) {
    if (!z || k.target !== W || !s)
      return;
    const X = k.key.toLowerCase(), H = k.ctrlKey || k.metaKey;
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
    ])).has(X) || H && (X === "c" || X === "v")) && (k.preventDefault(), k.stopPropagation()), H && X === "c") {
      $_();
      return;
    }
    if (H && X === "v") {
      F_();
      return;
    }
    switch (X) {
      case "delete":
        Yn();
        break;
      case "c":
        Xn();
        break;
      case "d":
        wt();
        break;
      case "e":
        ji();
        break;
      case " ":
        Hi();
        break;
      case "arrowup":
        Ti(0, -3);
        break;
      case "arrowdown":
        Ti(0, 3);
        break;
      case "arrowleft":
        Ti(-3, 0);
        break;
      case "arrowright":
        Ti(3, 0);
        break;
    }
  }
  function pt() {
    setTimeout(
      () => {
        W == null || W.focus();
      },
      0
    );
  }
  function Mt(k) {
    if (!s)
      return;
    k.preventDefault();
    const X = 1 / (1 + k.deltaY / 1e3 * 0.5), H = parseFloat((B.scale * X).toFixed(2)), x = H < 1 ? 1 : H, G = w.getBoundingClientRect(), te = k.clientX - G.left, ue = k.clientY - G.top, We = (te - B.offsetX) / B.scale, Ae = (ue - B.offsetY) / B.scale;
    t(48, B.offsetX = te - We * x, B), t(48, B.offsetY = ue - Ae * x, B), t(48, B.scale = x, B), ie();
  }
  function An(k) {
    const X = w.getBoundingClientRect(), H = (k.clientX - X.left - B.offsetX) / P / B.scale, x = (k.clientY - X.top - B.offsetY) / P / B.scale;
    let G;
    m.length > 0 ? G = ul(m[0]) : v ? u.boxes.length > 0 ? G = u.boxes[0].color : G = fn[0] : G = fn[u.boxes.length % fn.length];
    let te = new rl(ie, Ft, B, O, _e, I, T, M, "", H, x, H, x, G, r, a, _, c, f, P, C);
    te.startCreating(k, X.left, X.top), v ? t(0, u.boxes = [te], u) : t(0, u.boxes = [te, ...u.boxes], u), E(0), ie(), re("change");
  }
  function Xn() {
    t(12, K = l.creation), t(9, w.style.cursor = "crosshair", w);
  }
  function wt() {
    t(12, K = l.drag), t(9, w.style.cursor = "default", w);
  }
  function Ft() {
    R >= 0 && R < u.boxes.length && (u.boxes[R].getArea() < 1 ? Yn() : (h || (F ? T_() : t(14, Y = !0)), v && wt()));
  }
  function ji() {
    R >= 0 && R < u.boxes.length && !h && t(13, j = !0);
  }
  function xl(k) {
    s && ji();
  }
  function ri(k) {
    t(13, j = !1), pt();
    const { detail: X } = k;
    let H = X.label, x = X.color, G = X.ret;
    if (R >= 0 && R < u.boxes.length) {
      let te = u.boxes[R];
      G == 1 ? (te.label = H, te.color = ul(x), ie(), re("change")) : G == -1 && Yn();
    }
  }
  function Et(k) {
    t(14, Y = !1), pt();
    const { detail: X } = k;
    let H = X.label, x = X.color, G = X.ret, te = X.lock;
    if (R >= 0 && R < u.boxes.length) {
      let ue = u.boxes[R];
      G == 1 ? (t(17, F = te), Q.label = H, Q.color = x, ue.label = H, ue.color = ul(x), ie(), re("change")) : Yn();
    }
  }
  function _i(k) {
    t(15, be = !1), pt();
    const { detail: X } = k;
    let H = X.label, x = X.color, G = X.ret, te = X.lock;
    G == 1 && (t(17, F = te), Q.label = H, Q.color = x);
  }
  function T_() {
    if (R >= 0 && R < u.boxes.length) {
      let k = u.boxes[R];
      k.label = Q.label, Q.color !== "" && (k.color = ul(Q.color)), ie(), re("change");
    }
  }
  function Yn() {
    R >= 0 && R < u.boxes.length && (u.boxes.splice(R, 1), E(-1), v && Xn(), re("change"));
  }
  function Ti(k, X) {
    if (R < 0 || R >= u.boxes.length)
      return;
    const H = u.boxes[R], x = H.canvasWindow.scale, G = k / x, te = X / x, ue = H.canvasWindow.imageWidth, We = H.canvasWindow.imageHeight, Ae = Math.max(-H._xmin, Math.min(G, ue - H._xmax)), Ot = Math.max(-H._ymin, Math.min(te, We - H._ymax));
    H._xmin += Ae, H._ymin += Ot, H._xmax += Ae, H._ymax += Ot, H.applyUserScale(), ie(), re("change");
  }
  function $_() {
    R >= 0 && R < u.boxes.length && (Z = u.boxes[R].toJSON());
  }
  function F_() {
    if (Z === null)
      return;
    const k = Z, X = k.scaleFactor || 1, H = 20 / X;
    let x = k.xmin + H, G = k.ymin + H, te = k.xmax + H, ue = k.ymax + H;
    const We = (T - _e) / B.scale, Ae = (M - I) / B.scale, Ot = te - x, ui = ue - G;
    te > We && (x = Math.max(0, We - Ot), te = x + Ot), ue > Ae && (G = Math.max(0, Ae - ui), ue = G + ui);
    const fi = new rl(ie, Ft, B, O, _e, I, T, M, k.label, x, G, te, ue, k.color, r, a, _, c, f, X, C);
    v ? t(0, u.boxes = [fi], u) : t(0, u.boxes = [fi, ...u.boxes], u), Z = fi.toJSON(), E(0), ie(), re("change");
  }
  function Pl(k) {
    t(0, u.orientation = ((u.orientation + k) % 4 + 4) % 4, u), t(48, B.orientation = u.orientation, B), ci();
    for (const X of u.boxes)
      X.onRotate(k);
    ie();
  }
  function ci() {
    if (w) {
      if (P = 1, t(9, w.width = w.clientWidth, w), B.setRotatedImage(q), q !== null) {
        if (B.imageRotatedWidth > w.width)
          P = w.width / B.imageRotatedWidth, U = Math.round(B.imageRotatedWidth * P), ne = Math.round(B.imageRotatedHeight * P), _e = 0, I = 0, T = U, M = ne, t(9, w.height = ne, w);
        else {
          U = B.imageRotatedWidth, ne = B.imageRotatedHeight;
          var k = (w.width - U) / 2;
          _e = k, I = 0, T = k + U, M = ne, t(9, w.height = ne, w);
        }
        t(48, B.imageWidth = U, B), t(48, B.imageHeight = ne, B);
      } else
        _e = 0, I = 0, T = w.width, M = w.height, t(9, w.height = w.clientHeight, w);
      if (B.resize(w.width, w.height, _e, I), T > 0 && M > 0)
        for (const X of u.boxes)
          X.canvasXmin = _e, X.canvasYmin = I, X.canvasXmax = T, X.canvasYmax = M, X.setScaleFactor(P);
      ie(), re("change");
    }
  }
  const O_ = new ResizeObserver(ci);
  function U_() {
    for (let k = 0; k < u.boxes.length; k++) {
      let X = u.boxes[k];
      if (!(X instanceof rl)) {
        let H = "", x = "";
        X.hasOwnProperty("color") ? (H = X.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = fn[k % fn.length], X.hasOwnProperty("label") && (x = X.label), X = new rl(ie, Ft, B, O, _e, I, T, M, x, X.xmin, X.ymin, X.xmax, X.ymax, H, r, a, _, c, f, X.scaleFactor || 1, C), t(0, u.boxes[k] = X, u);
      }
    }
  }
  function qs() {
    o !== null && (q === null || q.src != o) && (q = new Image(), q.src = o, q.onload = function() {
      ci(), ie();
    });
  }
  Pb(() => {
    if (Array.isArray(d) && d.length > 0) {
      if (!Array.isArray(m) || m.length == 0)
        for (let k = 0; k < d.length; k++) {
          let X = fn[k % fn.length];
          m.push(Mn(X));
        }
      Q.label = d[0][0], Q.color = m[0];
    }
    y = w.getContext("2d"), O_.observe(w), R < 0 && u !== null && u.boxes.length > 0 && E(0), qs(), ci(), ie();
  });
  function V_(k) {
    lr[k ? "unshift" : "push"](() => {
      w = k, t(9, w);
    });
  }
  const N_ = () => Xn(), x_ = () => wt(), P_ = () => Yn(), K_ = () => t(15, be = !0), Z_ = () => Pl(-1), G_ = () => Pl(1);
  function J_(k) {
    lr[k ? "unshift" : "push"](() => {
      W = k, t(10, W);
    });
  }
  const Q_ = () => W.focus();
  function ec(k) {
    Vo.call(this, i, k);
  }
  function tc(k) {
    Vo.call(this, i, k);
  }
  function nc(k) {
    Vo.call(this, i, k);
  }
  return i.$$set = (k) => {
    "imageUrl" in k && t(37, o = k.imageUrl), "interactive" in k && t(2, s = k.interactive), "boxAlpha" in k && t(38, r = k.boxAlpha), "boxMinSize" in k && t(39, a = k.boxMinSize), "handleSize" in k && t(40, _ = k.handleSize), "boxThickness" in k && t(41, c = k.boxThickness), "boxSelectedThickness" in k && t(42, f = k.boxSelectedThickness), "value" in k && t(0, u = k.value), "choices" in k && t(3, d = k.choices), "choicesColors" in k && t(4, m = k.choicesColors), "disableEditBoxes" in k && t(5, h = k.disableEditBoxes), "height" in k && t(6, g = k.height), "width" in k && t(7, b = k.width), "singleBox" in k && t(43, v = k.singleBox), "showRemoveButton" in k && t(1, p = k.showRemoveButton), "handlesCursor" in k && t(44, S = k.handlesCursor), "useDefaultLabel" in k && t(45, D = k.useDefaultLabel), "enableKeyboardShortcuts" in k && t(46, z = k.enableKeyboardShortcuts), "showBoxLabels" in k && t(47, C = k.showBoxLabels);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (t(48, B.orientation = u.orientation, B), qs(), U_(), ci(), ie()), i.$$.dirty[1] & /*canvasWindow*/
    131072 && t(18, n = Math.round(B.scale * 100));
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
    W,
    R,
    K,
    j,
    Y,
    be,
    A,
    F,
    n,
    Lt,
    rt,
    an,
    Ol,
    Ul,
    Hi,
    Vl,
    Nl,
    L,
    Mt,
    Xn,
    wt,
    xl,
    ri,
    Et,
    _i,
    Yn,
    Pl,
    o,
    r,
    a,
    _,
    c,
    f,
    v,
    S,
    D,
    z,
    C,
    B,
    V_,
    N_,
    x_,
    P_,
    K_,
    Z_,
    G_,
    J_,
    Q_,
    ec,
    tc,
    nc
  ];
}
class e2 extends Ob {
  constructor(e) {
    super(), Vb(
      this,
      e,
      Qb,
      Jb,
      Nb,
      {
        imageUrl: 37,
        interactive: 2,
        boxAlpha: 38,
        boxMinSize: 39,
        handleSize: 40,
        boxThickness: 41,
        boxSelectedThickness: 42,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 43,
        showRemoveButton: 1,
        handlesCursor: 44,
        useDefaultLabel: 45,
        enableKeyboardShortcuts: 46,
        showBoxLabels: 47
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: t2,
  add_flush_callback: n2,
  bind: i2,
  binding_callbacks: l2,
  create_component: o2,
  destroy_component: s2,
  init: a2,
  mount_component: r2,
  safe_not_equal: _2,
  transition_in: c2,
  transition_out: u2
} = window.__gradio__svelte__internal, { createEventDispatcher: f2 } = window.__gradio__svelte__internal;
function d2(i) {
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
    i[0]), e = new e2({ props: o }), l2.push(() => i2(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[23]
    ), {
      c() {
        o2(e.$$.fragment);
      },
      m(s, r) {
        r2(e, s, r), n = !0;
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
        s[0], n2(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (c2(e.$$.fragment, s), n = !0);
      },
      o(s) {
        u2(e.$$.fragment, s), n = !1;
      },
      d(s) {
        s2(e, s);
      }
    }
  );
}
function h2(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: f } = e, { width: u } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: v } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: S } = e, { showBoxLabels: D } = e, z, C;
  const w = f2();
  function W(q) {
    m = q, t(0, m);
  }
  const y = () => w("change");
  return i.$$set = (q) => {
    "src" in q && t(20, n = q.src), "interactive" in q && t(1, l = q.interactive), "boxesAlpha" in q && t(2, o = q.boxesAlpha), "labelList" in q && t(3, s = q.labelList), "labelColors" in q && t(4, r = q.labelColors), "boxMinSize" in q && t(5, a = q.boxMinSize), "handleSize" in q && t(6, _ = q.handleSize), "boxThickness" in q && t(7, c = q.boxThickness), "height" in q && t(8, f = q.height), "width" in q && t(9, u = q.width), "boxSelectedThickness" in q && t(10, d = q.boxSelectedThickness), "value" in q && t(0, m = q.value), "disableEditBoxes" in q && t(11, h = q.disableEditBoxes), "singleBox" in q && t(12, g = q.singleBox), "showRemoveButton" in q && t(13, b = q.showRemoveButton), "handlesCursor" in q && t(14, v = q.handlesCursor), "useDefaultLabel" in q && t(15, p = q.useDefaultLabel), "enableKeyboardShortcuts" in q && t(16, S = q.enableKeyboardShortcuts), "showBoxLabels" in q && t(17, D = q.showBoxLabels);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    3145728) {
      t(18, z = n), t(21, C = n);
      const q = n;
      oh(q).then((R) => {
        C === q && t(18, z = R);
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
    S,
    D,
    z,
    w,
    n,
    C,
    W,
    y
  ];
}
class m2 extends t2 {
  constructor(e) {
    super(), a2(this, e, h2, d2, _2, {
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
class dr {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: g2,
  add_flush_callback: El,
  append: Vn,
  attr: Bi,
  bind: Rl,
  binding_callbacks: Ai,
  bubble: vi,
  check_outros: hn,
  create_component: It,
  create_slot: b2,
  destroy_component: Ht,
  detach: qn,
  element: Ri,
  empty: p2,
  get_all_dirty_from_scope: w2,
  get_slot_changes: v2,
  group_outros: mn,
  init: k2,
  insert: zn,
  mount_component: jt,
  noop: C2,
  safe_not_equal: y2,
  space: dn,
  toggle_class: hr,
  transition_in: ae,
  transition_out: de,
  update_slot_base: S2
} = window.__gradio__svelte__internal, { createEventDispatcher: q2, tick: z2 } = window.__gradio__svelte__internal;
function mr(i) {
  let e, t;
  return e = new ph({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [B2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(n, l) {
      jt(e, n, l), t = !0;
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
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function B2(i) {
  let e, t;
  return e = new Wl({
    props: {
      Icon: Rf,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      It(e.$$.fragment);
    },
    m(n, l) {
      jt(e, n, l), t = !0;
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
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function gr(i) {
  let e, t;
  return e = new t1({
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
      It(e.$$.fragment);
    },
    m(n, l) {
      jt(e, n, l), t = !0;
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
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function br(i) {
  let e, t, n;
  return t = new Wl({
    props: { Icon: Wr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[38]
  ), {
    c() {
      e = Ri("div"), It(t.$$.fragment);
    },
    m(l, o) {
      zn(l, e, o), jt(t, e, null), n = !0;
    },
    p: C2,
    i(l) {
      n || (ae(t.$$.fragment, l), n = !0);
    },
    o(l) {
      de(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && qn(e), Ht(t);
    }
  };
}
function pr(i) {
  let e;
  const t = (
    /*#slots*/
    i[39].default
  ), n = b2(
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
      16777216) && S2(
        n,
        t,
        l,
        /*$$scope*/
        l[55],
        e ? v2(
          t,
          /*$$scope*/
          l[55],
          o,
          null
        ) : w2(
          /*$$scope*/
          l[55]
        ),
        null
      );
    },
    i(l) {
      e || (ae(n, l), e = !0);
    },
    o(l) {
      de(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function D2(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && pr(i)
  );
  return {
    c() {
      n && n.c(), e = p2();
    },
    m(l, o) {
      n && n.m(l, o), zn(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[1] === null ? n ? (n.p(l, o), o[0] & /*value*/
      2 && ae(n, 1)) : (n = pr(l), n.c(), ae(n, 1), n.m(e.parentNode, e)) : n && (mn(), de(n, 1, 1, () => {
        n = null;
      }), hn());
    },
    i(l) {
      t || (ae(n), t = !0);
    },
    o(l) {
      de(n), t = !1;
    },
    d(l) {
      l && qn(e), n && n.d(l);
    }
  };
}
function wr(i) {
  let e, t;
  return e = new Fm({
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
      It(e.$$.fragment);
    },
    m(n, l) {
      jt(e, n, l), t = !0;
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
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ht(e, n);
    }
  };
}
function vr(i) {
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
    i[1]), t = new m2({ props: s }), Ai.push(() => Rl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      i[53]
    ), {
      c() {
        e = Ri("div"), It(t.$$.fragment), Bi(e, "class", "image-frame svelte-1gjdske"), hr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        zn(r, e, a), jt(t, e, null), l = !0;
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
        r[1], El(() => n = !1)), t.$set(_), (!l || a[0] & /*selectable*/
        32) && hr(
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
        de(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && qn(e), Ht(t);
      }
    }
  );
}
function kr(i) {
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
    i[0]), e = new b1({ props: o }), Ai.push(() => Rl(e, "active_source", l)), {
      c() {
        It(e.$$.fragment);
      },
      m(s, r) {
        jt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], El(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ae(e.$$.fragment, s), n = !0);
      },
      o(s) {
        de(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Ht(e, s);
      }
    }
  );
}
function L2(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new bu({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Ar,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && mr(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && gr(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && br(i)
  );
  function S(y) {
    i[44](y);
  }
  function D(y) {
    i[45](y);
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
    $$slots: { default: [D2] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[31] !== void 0 && (z.uploading = /*uploading*/
  i[31]), /*dragging*/
  i[32] !== void 0 && (z.dragging = /*dragging*/
  i[32]), _ = new Gh({ props: z }), i[43](_), Ai.push(() => Rl(_, "uploading", S)), Ai.push(() => Rl(_, "dragging", D)), _.$on(
    "load",
    /*handle_upload*/
    i[34]
  ), _.$on(
    "error",
    /*error_handler_1*/
    i[46]
  );
  let C = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && wr(i)
  ), w = (
    /*value*/
    i[1] !== null && vr(i)
  ), W = h && kr(i);
  return {
    c() {
      It(e.$$.fragment), t = dn(), n = Ri("div"), b && b.c(), l = dn(), v && v.c(), o = dn(), p && p.c(), s = dn(), r = Ri("div"), a = Ri("div"), It(_.$$.fragment), u = dn(), C && C.c(), d = dn(), w && w.c(), m = dn(), W && W.c(), Bi(n, "class", "icon-buttons svelte-1gjdske"), Bi(a, "class", "upload-container svelte-1gjdske"), Bi(r, "data-testid", "image"), Bi(r, "class", "image-container svelte-1gjdske");
    },
    m(y, q) {
      jt(e, y, q), zn(y, t, q), zn(y, n, q), b && b.m(n, null), Vn(n, l), v && v.m(n, null), Vn(n, o), p && p.m(n, null), zn(y, s, q), zn(y, r, q), Vn(r, a), jt(_, a, null), Vn(a, u), C && C.m(a, null), Vn(a, d), w && w.m(a, null), Vn(r, m), W && W.m(r, null), g = !0;
    },
    p(y, q) {
      const R = {};
      q[0] & /*show_label*/
      8 && (R.show_label = /*show_label*/
      y[3]), q[0] & /*label*/
      4 && (R.label = /*label*/
      y[2] || "Image Annotator"), e.$set(R), /*showDownloadButton*/
      y[10] && /*value*/
      y[1] !== null ? b ? (b.p(y, q), q[0] & /*showDownloadButton, value*/
      1026 && ae(b, 1)) : (b = mr(y), b.c(), ae(b, 1), b.m(n, l)) : b && (mn(), de(b, 1, 1, () => {
        b = null;
      }), hn()), /*showShareButton*/
      y[9] && /*value*/
      y[1] !== null ? v ? (v.p(y, q), q[0] & /*showShareButton, value*/
      514 && ae(v, 1)) : (v = gr(y), v.c(), ae(v, 1), v.m(n, o)) : v && (mn(), de(v, 1, 1, () => {
        v = null;
      }), hn()), /*showClearButton*/
      y[11] && /*value*/
      y[1] !== null && /*interactive*/
      y[7] ? p ? (p.p(y, q), q[0] & /*showClearButton, value, interactive*/
      2178 && ae(p, 1)) : (p = br(y), p.c(), ae(p, 1), p.m(n, null)) : p && (mn(), de(p, 1, 1, () => {
        p = null;
      }), hn());
      const K = {};
      q[0] & /*value, active_source*/
      3 && (K.hidden = /*value*/
      y[1] !== null || /*active_source*/
      y[0] === "webcam"), q[0] & /*active_source*/
      1 && (K.filetype = /*active_source*/
      y[0] === "clipboard" ? "clipboard" : "image/*"), q[0] & /*root*/
      64 && (K.root = /*root*/
      y[6]), q[0] & /*max_file_size*/
      33554432 && (K.max_file_size = /*max_file_size*/
      y[25]), q[0] & /*sources*/
      16 && (K.disable_click = !/*sources*/
      y[4].includes("upload")), q[0] & /*cli_upload*/
      67108864 && (K.upload = /*cli_upload*/
      y[26]), q[0] & /*stream_handler*/
      134217728 && (K.stream_handler = /*stream_handler*/
      y[27]), q[0] & /*value*/
      2 | q[1] & /*$$scope*/
      16777216 && (K.$$scope = { dirty: q, ctx: y }), !c && q[1] & /*uploading*/
      1 && (c = !0, K.uploading = /*uploading*/
      y[31], El(() => c = !1)), !f && q[1] & /*dragging*/
      2 && (f = !0, K.dragging = /*dragging*/
      y[32], El(() => f = !1)), _.$set(K), /*value*/
      y[1] === null && /*active_source*/
      y[0] === "webcam" ? C ? (C.p(y, q), q[0] & /*value, active_source*/
      3 && ae(C, 1)) : (C = wr(y), C.c(), ae(C, 1), C.m(a, d)) : C && (mn(), de(C, 1, 1, () => {
        C = null;
      }), hn()), /*value*/
      y[1] !== null ? w ? (w.p(y, q), q[0] & /*value*/
      2 && ae(w, 1)) : (w = vr(y), w.c(), ae(w, 1), w.m(a, null)) : w && (mn(), de(w, 1, 1, () => {
        w = null;
      }), hn()), q[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (y[4].length > 1 || /*sources*/
      y[4].includes("clipboard")) && /*value*/
      y[1] === null && /*interactive*/
      y[7]), h ? W ? (W.p(y, q), q[0] & /*sources, value, interactive*/
      146 && ae(W, 1)) : (W = kr(y), W.c(), ae(W, 1), W.m(r, null)) : W && (mn(), de(W, 1, 1, () => {
        W = null;
      }), hn());
    },
    i(y) {
      g || (ae(e.$$.fragment, y), ae(b), ae(v), ae(p), ae(_.$$.fragment, y), ae(C), ae(w), ae(W), g = !0);
    },
    o(y) {
      de(e.$$.fragment, y), de(b), de(v), de(p), de(_.$$.fragment, y), de(C), de(w), de(W), g = !1;
    },
    d(y) {
      y && (qn(t), qn(n), qn(s), qn(r)), Ht(e, y), b && b.d(), v && v.d(), p && p.d(), i[43](null), Ht(_), C && C.d(), w && w.d(), W && W.d();
    }
  };
}
function M2(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(L, pt, Mt, An) {
    function Xn(wt) {
      return wt instanceof Mt ? wt : new Mt(function(Ft) {
        Ft(wt);
      });
    }
    return new (Mt || (Mt = Promise))(function(wt, Ft) {
      function ji(Et) {
        try {
          ri(An.next(Et));
        } catch (_i) {
          Ft(_i);
        }
      }
      function xl(Et) {
        try {
          ri(An.throw(Et));
        } catch (_i) {
          Ft(_i);
        }
      }
      function ri(Et) {
        Et.done ? wt(Et.value) : Xn(Et.value).then(ji, xl);
      }
      ri((An = An.apply(L, pt || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: f } = e, { interactive: u } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: v } = e, { labelColors: p } = e, { boxMinSize: S } = e, { handleSize: D } = e, { height: z } = e, { width: C } = e, { boxThickness: w } = e, { disableEditBoxes: W } = e, { singleBox: y } = e, { showRemoveButton: q } = e, { handlesCursor: R } = e, { boxSelectedThickness: K } = e, { max_file_size: O = null } = e, { cli_upload: B } = e, { stream_handler: Z } = e, { useDefaultLabel: _e } = e, { enableKeyboardShortcuts: I } = e, { showBoxLabels: T } = e, M, P = !1, { active_source: U = null } = e;
  function ne({ detail: L }) {
    t(1, s = new dr()), t(1, s.image = L, s), Y("upload");
  }
  function j(L) {
    return o(this, void 0, void 0, function* () {
      const pt = yield M.load_files([new File([L], "webcam.png")]), Mt = (pt == null ? void 0 : pt[0]) || null;
      Mt ? (t(1, s = new dr()), t(1, s.image = Mt, s)) : t(1, s = null), yield z2(), Y("change");
    });
  }
  const Y = q2();
  let be = !1;
  function A(L) {
    return o(this, void 0, void 0, function* () {
      switch (L) {
        case "clipboard":
          M.paste_clipboard();
          break;
      }
    });
  }
  function F() {
    t(1, s = null), Y("clear"), Y("change");
  }
  const Q = async (L) => L === null ? "" : `<img src="${await Fd(L.image)}" />`;
  function ee(L) {
    vi.call(this, i, L);
  }
  function re(L) {
    vi.call(this, i, L);
  }
  function ie(L) {
    Ai[L ? "unshift" : "push"](() => {
      M = L, t(33, M);
    });
  }
  function E(L) {
    P = L, t(31, P);
  }
  function Lt(L) {
    be = L, t(32, be);
  }
  function Re(L) {
    vi.call(this, i, L);
  }
  const rt = (L) => j(L.detail), _t = (L) => j(L.detail);
  function an(L) {
    vi.call(this, i, L);
  }
  function Ol(L) {
    vi.call(this, i, L);
  }
  const Ul = (L) => j(L.detail);
  function Hi(L) {
    s = L, t(1, s);
  }
  const Vl = () => Y("change");
  function Nl(L) {
    U = L, t(0, U), t(4, _);
  }
  return i.$$set = (L) => {
    "value" in L && t(1, s = L.value), "label" in L && t(2, r = L.label), "show_label" in L && t(3, a = L.show_label), "sources" in L && t(4, _ = L.sources), "selectable" in L && t(5, c = L.selectable), "root" in L && t(6, f = L.root), "interactive" in L && t(7, u = L.interactive), "i18n" in L && t(8, d = L.i18n), "showShareButton" in L && t(9, m = L.showShareButton), "showDownloadButton" in L && t(10, h = L.showDownloadButton), "showClearButton" in L && t(11, g = L.showClearButton), "boxesAlpha" in L && t(12, b = L.boxesAlpha), "labelList" in L && t(13, v = L.labelList), "labelColors" in L && t(14, p = L.labelColors), "boxMinSize" in L && t(15, S = L.boxMinSize), "handleSize" in L && t(16, D = L.handleSize), "height" in L && t(17, z = L.height), "width" in L && t(18, C = L.width), "boxThickness" in L && t(19, w = L.boxThickness), "disableEditBoxes" in L && t(20, W = L.disableEditBoxes), "singleBox" in L && t(21, y = L.singleBox), "showRemoveButton" in L && t(22, q = L.showRemoveButton), "handlesCursor" in L && t(23, R = L.handlesCursor), "boxSelectedThickness" in L && t(24, K = L.boxSelectedThickness), "max_file_size" in L && t(25, O = L.max_file_size), "cli_upload" in L && t(26, B = L.cli_upload), "stream_handler" in L && t(27, Z = L.stream_handler), "useDefaultLabel" in L && t(28, _e = L.useDefaultLabel), "enableKeyboardShortcuts" in L && t(29, I = L.enableKeyboardShortcuts), "showBoxLabels" in L && t(30, T = L.showBoxLabels), "active_source" in L && t(0, U = L.active_source), "$$scope" in L && t(55, l = L.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[1] & /*uploading*/
    1 && P && F(), i.$$.dirty[1] & /*dragging*/
    2 && Y("drag", be), i.$$.dirty[0] & /*active_source, sources*/
    17 && !U && _ && t(0, U = _[0]);
  }, [
    U,
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
    S,
    D,
    z,
    C,
    w,
    W,
    y,
    q,
    R,
    K,
    O,
    B,
    Z,
    _e,
    I,
    T,
    P,
    be,
    M,
    ne,
    j,
    Y,
    A,
    F,
    n,
    Q,
    ee,
    re,
    ie,
    E,
    Lt,
    Re,
    rt,
    _t,
    an,
    Ol,
    Ul,
    Hi,
    Vl,
    Nl,
    l
  ];
}
class E2 extends g2 {
  constructor(e) {
    super(), k2(
      this,
      e,
      M2,
      L2,
      y2,
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
  SvelteComponent: R2,
  attr: wl,
  detach: X_,
  element: Y_,
  init: W2,
  insert: I_,
  noop: Cr,
  safe_not_equal: A2,
  src_url_equal: yr,
  toggle_class: Jt
} = window.__gradio__svelte__internal;
function Sr(i) {
  let e, t;
  return {
    c() {
      e = Y_("img"), yr(e.src, t = /*value*/
      i[0].url) || wl(e, "src", t), wl(e, "alt", "");
    },
    m(n, l) {
      I_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !yr(e.src, t = /*value*/
      n[0].url) && wl(e, "src", t);
    },
    d(n) {
      n && X_(e);
    }
  };
}
function X2(i) {
  let e, t = (
    /*value*/
    i[0] && Sr(i)
  );
  return {
    c() {
      e = Y_("div"), t && t.c(), wl(e, "class", "container svelte-1sgcyba"), Jt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), Jt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), Jt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), Jt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      I_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Sr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && Jt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && Jt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && Jt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && Jt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Cr,
    o: Cr,
    d(n) {
      n && X_(e), t && t.d();
    }
  };
}
function Y2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class Qq extends R2 {
  constructor(e) {
    super(), W2(this, e, Y2, X2, A2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: I2,
  add_flush_callback: qr,
  assign: H2,
  bind: zr,
  binding_callbacks: Br,
  check_outros: j2,
  create_component: En,
  destroy_component: Rn,
  detach: H_,
  empty: T2,
  flush: le,
  get_spread_object: $2,
  get_spread_update: F2,
  group_outros: O2,
  init: U2,
  insert: j_,
  mount_component: Wn,
  safe_not_equal: V2,
  space: N2,
  transition_in: Tt,
  transition_out: $t
} = window.__gradio__svelte__internal;
function x2(i) {
  let e, t;
  return e = new Pu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Z2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      En(e.$$.fragment);
    },
    m(n, l) {
      Wn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      32768 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Tt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rn(e, n);
    }
  };
}
function P2(i) {
  let e, t;
  return e = new $r({
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
      En(e.$$.fragment);
    },
    m(n, l) {
      Wn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      4 && (o.i18n = /*gradio*/
      n[33].i18n), e.$set(o);
    },
    i(n) {
      t || (Tt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rn(e, n);
    }
  };
}
function K2(i) {
  let e, t;
  return e = new $r({
    props: {
      i18n: (
        /*gradio*/
        i[33].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      En(e.$$.fragment);
    },
    m(n, l) {
      Wn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      4 && (o.i18n = /*gradio*/
      n[33].i18n), e.$set(o);
    },
    i(n) {
      t || (Tt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rn(e, n);
    }
  };
}
function Z2(i) {
  let e, t;
  return e = new Ar({}), {
    c() {
      En(e.$$.fragment);
    },
    m(n, l) {
      Wn(e, n, l), t = !0;
    },
    i(n) {
      t || (Tt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rn(e, n);
    }
  };
}
function G2(i) {
  let e, t, n, l;
  const o = [K2, P2, x2], s = [];
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
      t.c(), n = T2();
    },
    m(a, _) {
      s[e].m(a, _), j_(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (O2(), $t(s[c], 1, 1, () => {
        s[c] = null;
      }), j2(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Tt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Tt(t), l = !0);
    },
    o(a) {
      $t(t), l = !1;
    },
    d(a) {
      a && H_(n), s[e].d(a);
    }
  };
}
function J2(i) {
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
    a = H2(a, r[u]);
  e = new th({ props: a });
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
    $$slots: { default: [G2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[35] !== void 0 && (f.active_source = /*active_source*/
    i[35]), /*value*/
    i[0] !== void 0 && (f.value = /*value*/
    i[0]), n = new E2({ props: f }), Br.push(() => zr(n, "active_source", _)), Br.push(() => zr(n, "value", c)), n.$on(
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
        En(e.$$.fragment), t = N2(), En(n.$$.fragment);
      },
      m(u, d) {
        Wn(e, u, d), j_(u, t, d), Wn(n, u, d), s = !0;
      },
      p(u, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        4 ? F2(r, [
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
          2 && $2(
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
        u[35], qr(() => l = !1)), !o && d[0] & /*value*/
        1 && (o = !0, h.value = /*value*/
        u[0], qr(() => o = !1)), n.$set(h);
      },
      i(u) {
        s || (Tt(e.$$.fragment, u), Tt(n.$$.fragment, u), s = !0);
      },
      o(u) {
        $t(e.$$.fragment, u), $t(n.$$.fragment, u), s = !1;
      },
      d(u) {
        u && H_(t), Rn(e, u), Rn(n, u);
      }
    }
  );
}
function Q2(i) {
  let e, t;
  return e = new wc({
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
      $$slots: { default: [J2] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      En(e.$$.fragment);
    },
    m(n, l) {
      Wn(e, n, l), t = !0;
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
      t || (Tt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rn(e, n);
    }
  };
}
function ep(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: f } = e, { _selectable: u = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: p } = e, { show_clear_button: S } = e, { interactive: D } = e, { boxes_alpha: z } = e, { label_list: C } = e, { label_colors: w } = e, { box_min_size: W } = e, { handle_size: y } = e, { box_thickness: q } = e, { box_selected_thickness: R } = e, { disable_edit_boxes: K } = e, { single_box: O } = e, { show_remove_button: B } = e, { handles_cursor: Z } = e, { use_default_label: _e } = e, { enable_keyboard_shortcuts: I } = e, { show_box_labels: T } = e, { gradio: M } = e, P, U = null;
  function ne(E) {
    U = E, t(35, U);
  }
  function j(E) {
    s = E, t(0, s);
  }
  const Y = () => M.dispatch("change"), be = () => M.dispatch("edit"), A = () => {
    M.dispatch("clear");
  }, F = ({ detail: E }) => t(34, P = E), Q = () => M.dispatch("upload"), ee = ({ detail: E }) => M.dispatch("select", E), re = ({ detail: E }) => M.dispatch("share", E), ie = ({ detail: E }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), M.dispatch("error", E);
  };
  return i.$$set = (E) => {
    "elem_id" in E && t(2, n = E.elem_id), "elem_classes" in E && t(3, l = E.elem_classes), "visible" in E && t(4, o = E.visible), "value" in E && t(0, s = E.value), "label" in E && t(5, r = E.label), "show_label" in E && t(6, a = E.show_label), "root" in E && t(7, _ = E.root), "height" in E && t(8, c = E.height), "width" in E && t(9, f = E.width), "_selectable" in E && t(10, u = E._selectable), "container" in E && t(11, d = E.container), "scale" in E && t(12, m = E.scale), "min_width" in E && t(13, h = E.min_width), "loading_status" in E && t(1, g = E.loading_status), "sources" in E && t(14, b = E.sources), "show_download_button" in E && t(15, v = E.show_download_button), "show_share_button" in E && t(16, p = E.show_share_button), "show_clear_button" in E && t(17, S = E.show_clear_button), "interactive" in E && t(18, D = E.interactive), "boxes_alpha" in E && t(19, z = E.boxes_alpha), "label_list" in E && t(20, C = E.label_list), "label_colors" in E && t(21, w = E.label_colors), "box_min_size" in E && t(22, W = E.box_min_size), "handle_size" in E && t(23, y = E.handle_size), "box_thickness" in E && t(24, q = E.box_thickness), "box_selected_thickness" in E && t(25, R = E.box_selected_thickness), "disable_edit_boxes" in E && t(26, K = E.disable_edit_boxes), "single_box" in E && t(27, O = E.single_box), "show_remove_button" in E && t(28, B = E.show_remove_button), "handles_cursor" in E && t(29, Z = E.handles_cursor), "use_default_label" in E && t(30, _e = E.use_default_label), "enable_keyboard_shortcuts" in E && t(31, I = E.enable_keyboard_shortcuts), "show_box_labels" in E && t(32, T = E.show_box_labels), "gradio" in E && t(33, M = E.gradio);
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
    S,
    D,
    z,
    C,
    w,
    W,
    y,
    q,
    R,
    K,
    O,
    B,
    Z,
    _e,
    I,
    T,
    M,
    P,
    U,
    ne,
    j,
    Y,
    be,
    A,
    F,
    Q,
    ee,
    re,
    ie
  ];
}
class ez extends I2 {
  constructor(e) {
    super(), U2(
      this,
      e,
      ep,
      Q2,
      V2,
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
    this.$$set({ elem_id: e }), le();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), le();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), le();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), le();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), le();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), le();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), le();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), le();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), le();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), le();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), le();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), le();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), le();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), le();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), le();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), le();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), le();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), le();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), le();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), le();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), le();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), le();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), le();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), le();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), le();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), le();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), le();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), le();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), le();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), le();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), le();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), le();
  }
  get show_box_labels() {
    return this.$$.ctx[32];
  }
  set show_box_labels(e) {
    this.$$set({ show_box_labels: e }), le();
  }
  get gradio() {
    return this.$$.ctx[33];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), le();
  }
}
export {
  Qq as BaseExample,
  ez as default
};
