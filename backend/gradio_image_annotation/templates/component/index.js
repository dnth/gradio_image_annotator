const {
  SvelteComponent: $_,
  assign: P_,
  create_slot: K_,
  detach: Z_,
  element: x_,
  get_all_dirty_from_scope: G_,
  get_slot_changes: J_,
  get_spread_update: Q_,
  init: ec,
  insert: tc,
  safe_not_equal: nc,
  set_dynamic_element_data: gs,
  set_style: Ue,
  toggle_class: wt,
  transition_in: gr,
  transition_out: br,
  update_slot_base: ic
} = window.__gradio__svelte__internal;
function lc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = K_(
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
    r = P_(r, s[a]);
  return {
    c() {
      e = x_(
        /*tag*/
        i[14]
      ), o && o.c(), gs(
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
      i[9]), Ue(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Ue(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Ue(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Ue(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Ue(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Ue(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Ue(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      tc(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && ic(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? J_(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : G_(
          /*$$scope*/
          a[17]
        ),
        null
      ), gs(
        /*tag*/
        a[14]
      )(e, r = Q_(s, [
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
      1 && Ue(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && Ue(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && Ue(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && Ue(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && Ue(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && Ue(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (gr(o, a), n = !0);
    },
    o(a) {
      br(o, a), n = !1;
    },
    d(a) {
      a && Z_(e), o && o.d(a);
    }
  };
}
function oc(i) {
  let e, t = (
    /*tag*/
    i[14] && lc(i)
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
      e || (gr(t, n), e = !0);
    },
    o(n) {
      br(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function sc(i, e, t) {
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
class ac extends $_ {
  constructor(e) {
    super(), ec(this, e, sc, oc, nc, {
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
  SvelteComponent: rc,
  attr: _c,
  create_slot: cc,
  detach: uc,
  element: fc,
  get_all_dirty_from_scope: dc,
  get_slot_changes: hc,
  init: mc,
  insert: gc,
  safe_not_equal: bc,
  transition_in: pc,
  transition_out: wc,
  update_slot_base: vc
} = window.__gradio__svelte__internal;
function kc(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = cc(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = fc("div"), l && l.c(), _c(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      gc(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && vc(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? hc(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : dc(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (pc(l, o), t = !0);
    },
    o(o) {
      wc(l, o), t = !1;
    },
    d(o) {
      o && uc(e), l && l.d(o);
    }
  };
}
function Cc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class yc extends rc {
  constructor(e) {
    super(), mc(this, e, Cc, kc, bc, {});
  }
}
const {
  SvelteComponent: Sc,
  attr: bs,
  check_outros: qc,
  create_component: zc,
  create_slot: Bc,
  destroy_component: Dc,
  detach: ol,
  element: Lc,
  empty: Mc,
  get_all_dirty_from_scope: Ec,
  get_slot_changes: Rc,
  group_outros: Ac,
  init: Wc,
  insert: sl,
  mount_component: Xc,
  safe_not_equal: Yc,
  set_data: Ic,
  space: jc,
  text: Hc,
  toggle_class: En,
  transition_in: bi,
  transition_out: al,
  update_slot_base: Tc
} = window.__gradio__svelte__internal;
function ps(i) {
  let e, t;
  return e = new yc({
    props: {
      $$slots: { default: [Fc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      zc(e.$$.fragment);
    },
    m(n, l) {
      Xc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (bi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      al(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dc(e, n);
    }
  };
}
function Fc(i) {
  let e;
  return {
    c() {
      e = Hc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      sl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Ic(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && ol(e);
    }
  };
}
function Uc(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = Bc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && ps(i)
  );
  return {
    c() {
      e = Lc("span"), s && s.c(), t = jc(), r && r.c(), n = Mc(), bs(e, "data-testid", "block-info"), bs(e, "class", "svelte-22c38v"), En(e, "sr-only", !/*show_label*/
      i[0]), En(e, "hide", !/*show_label*/
      i[0]), En(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      sl(a, e, _), s && s.m(e, null), sl(a, t, _), r && r.m(a, _), sl(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && Tc(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? Rc(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : Ec(
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
      2 && bi(r, 1)) : (r = ps(a), r.c(), bi(r, 1), r.m(n.parentNode, n)) : r && (Ac(), al(r, 1, 1, () => {
        r = null;
      }), qc());
    },
    i(a) {
      l || (bi(s, a), bi(r), l = !0);
    },
    o(a) {
      al(s, a), al(r), l = !1;
    },
    d(a) {
      a && (ol(e), ol(t), ol(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function Vc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class pr extends Sc {
  constructor(e) {
    super(), Wc(this, e, Vc, Uc, Yc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Oc,
  append: Ul,
  attr: Xi,
  create_component: Nc,
  destroy_component: $c,
  detach: Pc,
  element: ws,
  init: Kc,
  insert: Zc,
  mount_component: xc,
  safe_not_equal: Gc,
  set_data: Jc,
  space: Qc,
  text: eu,
  toggle_class: Vt,
  transition_in: tu,
  transition_out: nu
} = window.__gradio__svelte__internal;
function iu(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ws("label"), t = ws("span"), Nc(n.$$.fragment), l = Qc(), o = eu(
        /*label*/
        i[0]
      ), Xi(t, "class", "svelte-9gxdi0"), Xi(e, "for", ""), Xi(e, "data-testid", "block-label"), Xi(e, "class", "svelte-9gxdi0"), Vt(e, "hide", !/*show_label*/
      i[2]), Vt(e, "sr-only", !/*show_label*/
      i[2]), Vt(
        e,
        "float",
        /*float*/
        i[4]
      ), Vt(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Zc(r, e, a), Ul(e, t), xc(n, t, null), Ul(e, l), Ul(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Jc(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Vt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Vt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Vt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Vt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (tu(n.$$.fragment, r), s = !0);
    },
    o(r) {
      nu(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Pc(e), $c(n);
    }
  };
}
function lu(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class ou extends Oc {
  constructor(e) {
    super(), Kc(this, e, lu, iu, Gc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: su,
  append: Yo,
  attr: Wt,
  bubble: au,
  create_component: ru,
  destroy_component: _u,
  detach: wr,
  element: Io,
  init: cu,
  insert: vr,
  listen: uu,
  mount_component: fu,
  safe_not_equal: du,
  set_data: hu,
  set_style: Rn,
  space: mu,
  text: gu,
  toggle_class: Ee,
  transition_in: bu,
  transition_out: pu
} = window.__gradio__svelte__internal;
function vs(i) {
  let e, t;
  return {
    c() {
      e = Io("span"), t = gu(
        /*label*/
        i[1]
      ), Wt(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      vr(n, e, l), Yo(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && hu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && wr(e);
    }
  };
}
function wu(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && vs(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = Io("button"), a && a.c(), t = mu(), n = Io("div"), ru(l.$$.fragment), Wt(n, "class", "svelte-1lrphxw"), Ee(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Ee(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Ee(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Wt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Wt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Wt(
        e,
        "title",
        /*label*/
        i[1]
      ), Wt(e, "class", "svelte-1lrphxw"), Ee(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Ee(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Ee(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Ee(
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
      vr(_, e, c), a && a.m(e, null), Yo(e, t), Yo(e, n), fu(l, n, null), o = !0, s || (r = uu(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = vs(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Ee(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && Ee(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && Ee(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && Wt(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && Wt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && Wt(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && Ee(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && Ee(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && Ee(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && Ee(
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
      o || (bu(l.$$.fragment, _), o = !0);
    },
    o(_) {
      pu(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && wr(e), a && a.d(), _u(l), s = !1, r();
    }
  };
}
function vu(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: f = !1 } = e, { hasPopup: u = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(v) {
    au.call(this, i, v);
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
class zl extends su {
  constructor(e) {
    super(), cu(this, e, vu, wu, du, {
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
  SvelteComponent: ku,
  append: Cu,
  attr: Vl,
  binding_callbacks: yu,
  create_slot: Su,
  detach: qu,
  element: ks,
  get_all_dirty_from_scope: zu,
  get_slot_changes: Bu,
  init: Du,
  insert: Lu,
  safe_not_equal: Mu,
  toggle_class: Ot,
  transition_in: Eu,
  transition_out: Ru,
  update_slot_base: Au
} = window.__gradio__svelte__internal;
function Wu(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = Su(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ks("div"), t = ks("div"), o && o.c(), Vl(t, "class", "icon svelte-3w3rth"), Vl(e, "class", "empty svelte-3w3rth"), Vl(e, "aria-label", "Empty value"), Ot(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Ot(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Ot(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Ot(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      Lu(s, e, r), Cu(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Au(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? Bu(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : zu(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Ot(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Ot(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Ot(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Ot(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (Eu(o, s), n = !0);
    },
    o(s) {
      Ru(o, s), n = !1;
    },
    d(s) {
      s && qu(e), o && o.d(s), i[6](null);
    }
  };
}
function Xu(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(f) {
    var u;
    if (!f) return !1;
    const { height: d } = f.getBoundingClientRect(), { height: m } = ((u = f.parentElement) === null || u === void 0 ? void 0 : u.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(f) {
    yu[f ? "unshift" : "push"](() => {
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
class Yu extends ku {
  constructor(e) {
    super(), Du(this, e, Xu, Wu, Mu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: z2,
  append: B2,
  attr: D2,
  detach: L2,
  init: M2,
  insert: E2,
  noop: R2,
  safe_not_equal: A2,
  svg_element: W2
} = window.__gradio__svelte__internal, {
  SvelteComponent: X2,
  append: Y2,
  attr: I2,
  detach: j2,
  init: H2,
  insert: T2,
  noop: F2,
  safe_not_equal: U2,
  svg_element: V2
} = window.__gradio__svelte__internal, {
  SvelteComponent: O2,
  append: N2,
  attr: $2,
  detach: P2,
  init: K2,
  insert: Z2,
  noop: x2,
  safe_not_equal: G2,
  svg_element: J2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Iu,
  append: Cs,
  attr: Re,
  detach: ju,
  init: Hu,
  insert: Tu,
  noop: Ol,
  safe_not_equal: Fu,
  svg_element: Nl
} = window.__gradio__svelte__internal;
function Uu(i) {
  let e, t, n;
  return {
    c() {
      e = Nl("svg"), t = Nl("path"), n = Nl("circle"), Re(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Re(n, "cx", "12"), Re(n, "cy", "13"), Re(n, "r", "4"), Re(e, "xmlns", "http://www.w3.org/2000/svg"), Re(e, "width", "100%"), Re(e, "height", "100%"), Re(e, "viewBox", "0 0 24 24"), Re(e, "fill", "none"), Re(e, "stroke", "currentColor"), Re(e, "stroke-width", "1.5"), Re(e, "stroke-linecap", "round"), Re(e, "stroke-linejoin", "round"), Re(e, "class", "feather feather-camera");
    },
    m(l, o) {
      Tu(l, e, o), Cs(e, t), Cs(e, n);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(l) {
      l && ju(e);
    }
  };
}
class Vu extends Iu {
  constructor(e) {
    super(), Hu(this, e, null, Uu, Fu, {});
  }
}
const {
  SvelteComponent: Q2,
  append: ep,
  attr: tp,
  detach: np,
  init: ip,
  insert: lp,
  noop: op,
  safe_not_equal: sp,
  svg_element: ap
} = window.__gradio__svelte__internal, {
  SvelteComponent: rp,
  append: _p,
  attr: cp,
  detach: up,
  init: fp,
  insert: dp,
  noop: hp,
  safe_not_equal: mp,
  svg_element: gp
} = window.__gradio__svelte__internal, {
  SvelteComponent: bp,
  append: pp,
  attr: wp,
  detach: vp,
  init: kp,
  insert: Cp,
  noop: yp,
  safe_not_equal: Sp,
  svg_element: qp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ou,
  append: Nu,
  attr: ct,
  detach: $u,
  init: Pu,
  insert: Ku,
  noop: $l,
  safe_not_equal: Zu,
  svg_element: ys
} = window.__gradio__svelte__internal;
function xu(i) {
  let e, t;
  return {
    c() {
      e = ys("svg"), t = ys("circle"), ct(t, "cx", "12"), ct(t, "cy", "12"), ct(t, "r", "10"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "100%"), ct(e, "height", "100%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "stroke-width", "1.5"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-circle");
    },
    m(n, l) {
      Ku(n, e, l), Nu(e, t);
    },
    p: $l,
    i: $l,
    o: $l,
    d(n) {
      n && $u(e);
    }
  };
}
class Gu extends Ou {
  constructor(e) {
    super(), Pu(this, e, null, xu, Zu, {});
  }
}
const {
  SvelteComponent: Ju,
  append: Pl,
  attr: ut,
  detach: Qu,
  init: ef,
  insert: tf,
  noop: Kl,
  safe_not_equal: nf,
  set_style: vt,
  svg_element: Yi
} = window.__gradio__svelte__internal;
function lf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Yi("svg"), t = Yi("g"), n = Yi("path"), l = Yi("path"), ut(n, "d", "M18,6L6.087,17.913"), vt(n, "fill", "none"), vt(n, "fill-rule", "nonzero"), vt(n, "stroke-width", "2px"), ut(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), ut(l, "d", "M4.364,4.364L19.636,19.636"), vt(l, "fill", "none"), vt(l, "fill-rule", "nonzero"), vt(l, "stroke-width", "2px"), ut(e, "width", "100%"), ut(e, "height", "100%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "version", "1.1"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ut(e, "xml:space", "preserve"), ut(e, "stroke", "currentColor"), vt(e, "fill-rule", "evenodd"), vt(e, "clip-rule", "evenodd"), vt(e, "stroke-linecap", "round"), vt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      tf(o, e, s), Pl(e, t), Pl(t, n), Pl(e, l);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(o) {
      o && Qu(e);
    }
  };
}
class kr extends Ju {
  constructor(e) {
    super(), ef(this, e, null, lf, nf, {});
  }
}
const {
  SvelteComponent: zp,
  append: Bp,
  attr: Dp,
  detach: Lp,
  init: Mp,
  insert: Ep,
  noop: Rp,
  safe_not_equal: Ap,
  svg_element: Wp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xp,
  append: Yp,
  attr: Ip,
  detach: jp,
  init: Hp,
  insert: Tp,
  noop: Fp,
  safe_not_equal: Up,
  svg_element: Vp
} = window.__gradio__svelte__internal, {
  SvelteComponent: of,
  append: sf,
  attr: _i,
  detach: af,
  init: rf,
  insert: _f,
  noop: Zl,
  safe_not_equal: cf,
  svg_element: Ss
} = window.__gradio__svelte__internal;
function uf(i) {
  let e, t;
  return {
    c() {
      e = Ss("svg"), t = Ss("path"), _i(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), _i(t, "fill", "currentColor"), _i(e, "id", "icon"), _i(e, "xmlns", "http://www.w3.org/2000/svg"), _i(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      _f(n, e, l), sf(e, t);
    },
    p: Zl,
    i: Zl,
    o: Zl,
    d(n) {
      n && af(e);
    }
  };
}
class ff extends of {
  constructor(e) {
    super(), rf(this, e, null, uf, cf, {});
  }
}
const {
  SvelteComponent: Op,
  append: Np,
  attr: $p,
  detach: Pp,
  init: Kp,
  insert: Zp,
  noop: xp,
  safe_not_equal: Gp,
  svg_element: Jp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qp,
  append: ew,
  attr: tw,
  detach: nw,
  init: iw,
  insert: lw,
  noop: ow,
  safe_not_equal: sw,
  svg_element: aw
} = window.__gradio__svelte__internal, {
  SvelteComponent: rw,
  append: _w,
  attr: cw,
  detach: uw,
  init: fw,
  insert: dw,
  noop: hw,
  safe_not_equal: mw,
  svg_element: gw
} = window.__gradio__svelte__internal, {
  SvelteComponent: df,
  append: hf,
  attr: An,
  detach: mf,
  init: gf,
  insert: bf,
  noop: xl,
  safe_not_equal: pf,
  svg_element: qs
} = window.__gradio__svelte__internal;
function wf(i) {
  let e, t;
  return {
    c() {
      e = qs("svg"), t = qs("path"), An(t, "fill", "currentColor"), An(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), An(e, "xmlns", "http://www.w3.org/2000/svg"), An(e, "width", "100%"), An(e, "height", "100%"), An(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      bf(n, e, l), hf(e, t);
    },
    p: xl,
    i: xl,
    o: xl,
    d(n) {
      n && mf(e);
    }
  };
}
class vf extends df {
  constructor(e) {
    super(), gf(this, e, null, wf, pf, {});
  }
}
const {
  SvelteComponent: kf,
  append: Cf,
  attr: Wn,
  detach: yf,
  init: Sf,
  insert: qf,
  noop: Gl,
  safe_not_equal: zf,
  svg_element: zs
} = window.__gradio__svelte__internal;
function Bf(i) {
  let e, t;
  return {
    c() {
      e = zs("svg"), t = zs("path"), Wn(t, "d", "M5 8l4 4 4-4z"), Wn(e, "class", "dropdown-arrow svelte-145leq6"), Wn(e, "xmlns", "http://www.w3.org/2000/svg"), Wn(e, "width", "100%"), Wn(e, "height", "100%"), Wn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      qf(n, e, l), Cf(e, t);
    },
    p: Gl,
    i: Gl,
    o: Gl,
    d(n) {
      n && yf(e);
    }
  };
}
class is extends kf {
  constructor(e) {
    super(), Sf(this, e, null, Bf, zf, {});
  }
}
const {
  SvelteComponent: bw,
  append: pw,
  attr: ww,
  detach: vw,
  init: kw,
  insert: Cw,
  noop: yw,
  safe_not_equal: Sw,
  svg_element: qw
} = window.__gradio__svelte__internal, {
  SvelteComponent: zw,
  append: Bw,
  attr: Dw,
  detach: Lw,
  init: Mw,
  insert: Ew,
  noop: Rw,
  safe_not_equal: Aw,
  svg_element: Ww
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xw,
  append: Yw,
  attr: Iw,
  detach: jw,
  init: Hw,
  insert: Tw,
  noop: Fw,
  safe_not_equal: Uw,
  svg_element: Vw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ow,
  append: Nw,
  attr: $w,
  detach: Pw,
  init: Kw,
  insert: Zw,
  noop: xw,
  safe_not_equal: Gw,
  svg_element: Jw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qw,
  append: ev,
  attr: tv,
  detach: nv,
  init: iv,
  insert: lv,
  noop: ov,
  safe_not_equal: sv,
  svg_element: av
} = window.__gradio__svelte__internal, {
  SvelteComponent: rv,
  append: _v,
  attr: cv,
  detach: uv,
  init: fv,
  insert: dv,
  noop: hv,
  safe_not_equal: mv,
  svg_element: gv
} = window.__gradio__svelte__internal, {
  SvelteComponent: bv,
  append: pv,
  attr: wv,
  detach: vv,
  init: kv,
  insert: Cv,
  noop: yv,
  safe_not_equal: Sv,
  svg_element: qv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Df,
  append: Jl,
  attr: ge,
  detach: Lf,
  init: Mf,
  insert: Ef,
  noop: Ql,
  safe_not_equal: Rf,
  svg_element: Ii
} = window.__gradio__svelte__internal;
function Af(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ii("svg"), t = Ii("rect"), n = Ii("circle"), l = Ii("polyline"), ge(t, "x", "3"), ge(t, "y", "3"), ge(t, "width", "18"), ge(t, "height", "18"), ge(t, "rx", "2"), ge(t, "ry", "2"), ge(n, "cx", "8.5"), ge(n, "cy", "8.5"), ge(n, "r", "1.5"), ge(l, "points", "21 15 16 10 5 21"), ge(e, "xmlns", "http://www.w3.org/2000/svg"), ge(e, "width", "100%"), ge(e, "height", "100%"), ge(e, "viewBox", "0 0 24 24"), ge(e, "fill", "none"), ge(e, "stroke", "currentColor"), ge(e, "stroke-width", "1.5"), ge(e, "stroke-linecap", "round"), ge(e, "stroke-linejoin", "round"), ge(e, "class", "feather feather-image");
    },
    m(o, s) {
      Ef(o, e, s), Jl(e, t), Jl(e, n), Jl(e, l);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(o) {
      o && Lf(e);
    }
  };
}
let Cr = class extends Df {
  constructor(e) {
    super(), Mf(this, e, null, Af, Rf, {});
  }
};
const {
  SvelteComponent: Wf,
  append: Xf,
  attr: ji,
  detach: Yf,
  init: If,
  insert: jf,
  noop: eo,
  safe_not_equal: Hf,
  svg_element: Bs
} = window.__gradio__svelte__internal;
function Tf(i) {
  let e, t;
  return {
    c() {
      e = Bs("svg"), t = Bs("path"), ji(t, "fill", "currentColor"), ji(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), ji(e, "xmlns", "http://www.w3.org/2000/svg"), ji(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      jf(n, e, l), Xf(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && Yf(e);
    }
  };
}
class yr extends Wf {
  constructor(e) {
    super(), If(this, e, null, Tf, Hf, {});
  }
}
const {
  SvelteComponent: Bv,
  append: Dv,
  attr: Lv,
  detach: Mv,
  init: Ev,
  insert: Rv,
  noop: Av,
  safe_not_equal: Wv,
  svg_element: Xv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Yv,
  append: Iv,
  attr: jv,
  detach: Hv,
  init: Tv,
  insert: Fv,
  noop: Uv,
  safe_not_equal: Vv,
  svg_element: Ov
} = window.__gradio__svelte__internal, {
  SvelteComponent: Nv,
  append: $v,
  attr: Pv,
  detach: Kv,
  init: Zv,
  insert: xv,
  noop: Gv,
  safe_not_equal: Jv,
  svg_element: Qv
} = window.__gradio__svelte__internal, {
  SvelteComponent: e3,
  append: t3,
  attr: n3,
  detach: i3,
  init: l3,
  insert: o3,
  noop: s3,
  safe_not_equal: a3,
  svg_element: r3
} = window.__gradio__svelte__internal, {
  SvelteComponent: _3,
  append: c3,
  attr: u3,
  detach: f3,
  init: d3,
  insert: h3,
  noop: m3,
  safe_not_equal: g3,
  svg_element: b3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ff,
  append: Hi,
  attr: be,
  detach: Uf,
  init: Vf,
  insert: Of,
  noop: to,
  safe_not_equal: Nf,
  svg_element: ci
} = window.__gradio__svelte__internal;
function $f(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = ci("svg"), t = ci("path"), n = ci("path"), l = ci("line"), o = ci("line"), be(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), be(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), be(l, "x1", "12"), be(l, "y1", "19"), be(l, "x2", "12"), be(l, "y2", "23"), be(o, "x1", "8"), be(o, "y1", "23"), be(o, "x2", "16"), be(o, "y2", "23"), be(e, "xmlns", "http://www.w3.org/2000/svg"), be(e, "width", "100%"), be(e, "height", "100%"), be(e, "viewBox", "0 0 24 24"), be(e, "fill", "none"), be(e, "stroke", "currentColor"), be(e, "stroke-width", "2"), be(e, "stroke-linecap", "round"), be(e, "stroke-linejoin", "round"), be(e, "class", "feather feather-mic");
    },
    m(s, r) {
      Of(s, e, r), Hi(e, t), Hi(e, n), Hi(e, l), Hi(e, o);
    },
    p: to,
    i: to,
    o: to,
    d(s) {
      s && Uf(e);
    }
  };
}
class Pf extends Ff {
  constructor(e) {
    super(), Vf(this, e, null, $f, Nf, {});
  }
}
const {
  SvelteComponent: p3,
  append: w3,
  attr: v3,
  detach: k3,
  init: C3,
  insert: y3,
  noop: S3,
  safe_not_equal: q3,
  svg_element: z3
} = window.__gradio__svelte__internal, {
  SvelteComponent: B3,
  append: D3,
  attr: L3,
  detach: M3,
  init: E3,
  insert: R3,
  noop: A3,
  safe_not_equal: W3,
  svg_element: X3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y3,
  append: I3,
  attr: j3,
  detach: H3,
  init: T3,
  insert: F3,
  noop: U3,
  safe_not_equal: V3,
  svg_element: O3
} = window.__gradio__svelte__internal, {
  SvelteComponent: N3,
  append: $3,
  attr: P3,
  detach: K3,
  init: Z3,
  insert: x3,
  noop: G3,
  safe_not_equal: J3,
  svg_element: Q3
} = window.__gradio__svelte__internal, {
  SvelteComponent: e4,
  append: t4,
  attr: n4,
  detach: i4,
  init: l4,
  insert: o4,
  noop: s4,
  safe_not_equal: a4,
  svg_element: r4
} = window.__gradio__svelte__internal, {
  SvelteComponent: _4,
  append: c4,
  attr: u4,
  detach: f4,
  init: d4,
  insert: h4,
  noop: m4,
  safe_not_equal: g4,
  svg_element: b4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Kf,
  append: Ds,
  attr: Ge,
  detach: Zf,
  init: xf,
  insert: Gf,
  noop: no,
  safe_not_equal: Jf,
  set_style: Qf,
  svg_element: io
} = window.__gradio__svelte__internal;
function ed(i) {
  let e, t, n;
  return {
    c() {
      e = io("svg"), t = io("polyline"), n = io("path"), Ge(t, "points", "1 4 1 10 7 10"), Ge(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ge(e, "xmlns", "http://www.w3.org/2000/svg"), Ge(e, "width", "100%"), Ge(e, "height", "100%"), Ge(e, "viewBox", "0 0 24 24"), Ge(e, "fill", "none"), Ge(e, "stroke", "currentColor"), Ge(e, "stroke-width", "2"), Ge(e, "stroke-linecap", "round"), Ge(e, "stroke-linejoin", "round"), Ge(e, "class", "feather feather-rotate-ccw"), Qf(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      Gf(l, e, o), Ds(e, t), Ds(e, n);
    },
    p: no,
    i: no,
    o: no,
    d(l) {
      l && Zf(e);
    }
  };
}
class td extends Kf {
  constructor(e) {
    super(), xf(this, e, null, ed, Jf, {});
  }
}
const {
  SvelteComponent: p4,
  append: w4,
  attr: v4,
  detach: k4,
  init: C4,
  insert: y4,
  noop: S4,
  safe_not_equal: q4,
  svg_element: z4
} = window.__gradio__svelte__internal, {
  SvelteComponent: B4,
  append: D4,
  attr: L4,
  detach: M4,
  init: E4,
  insert: R4,
  noop: A4,
  safe_not_equal: W4,
  svg_element: X4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y4,
  append: I4,
  attr: j4,
  detach: H4,
  init: T4,
  insert: F4,
  noop: U4,
  safe_not_equal: V4,
  svg_element: O4
} = window.__gradio__svelte__internal, {
  SvelteComponent: N4,
  append: $4,
  attr: P4,
  detach: K4,
  init: Z4,
  insert: x4,
  noop: G4,
  safe_not_equal: J4,
  svg_element: Q4
} = window.__gradio__svelte__internal, {
  SvelteComponent: e5,
  append: t5,
  attr: n5,
  detach: i5,
  init: l5,
  insert: o5,
  noop: s5,
  safe_not_equal: a5,
  svg_element: r5
} = window.__gradio__svelte__internal, {
  SvelteComponent: nd,
  append: id,
  attr: Ae,
  detach: ld,
  init: od,
  insert: sd,
  noop: lo,
  safe_not_equal: ad,
  svg_element: Ls
} = window.__gradio__svelte__internal;
function rd(i) {
  let e, t;
  return {
    c() {
      e = Ls("svg"), t = Ls("rect"), Ae(t, "x", "3"), Ae(t, "y", "3"), Ae(t, "width", "18"), Ae(t, "height", "18"), Ae(t, "rx", "2"), Ae(t, "ry", "2"), Ae(e, "xmlns", "http://www.w3.org/2000/svg"), Ae(e, "width", "100%"), Ae(e, "height", "100%"), Ae(e, "viewBox", "0 0 24 24"), Ae(e, "stroke-width", "1.5"), Ae(e, "stroke-linecap", "round"), Ae(e, "stroke-linejoin", "round"), Ae(e, "class", "feather feather-square");
    },
    m(n, l) {
      sd(n, e, l), id(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
    d(n) {
      n && ld(e);
    }
  };
}
class _d extends nd {
  constructor(e) {
    super(), od(this, e, null, rd, ad, {});
  }
}
const {
  SvelteComponent: _5,
  append: c5,
  attr: u5,
  detach: f5,
  init: d5,
  insert: h5,
  noop: m5,
  safe_not_equal: g5,
  svg_element: b5
} = window.__gradio__svelte__internal, {
  SvelteComponent: p5,
  append: w5,
  attr: v5,
  detach: k5,
  init: C5,
  insert: y5,
  noop: S5,
  safe_not_equal: q5,
  svg_element: z5
} = window.__gradio__svelte__internal, {
  SvelteComponent: B5,
  append: D5,
  attr: L5,
  detach: M5,
  init: E5,
  insert: R5,
  noop: A5,
  safe_not_equal: W5,
  svg_element: X5,
  text: Y5
} = window.__gradio__svelte__internal, {
  SvelteComponent: I5,
  append: j5,
  attr: H5,
  detach: T5,
  init: F5,
  insert: U5,
  noop: V5,
  safe_not_equal: O5,
  svg_element: N5
} = window.__gradio__svelte__internal, {
  SvelteComponent: $5,
  append: P5,
  attr: K5,
  detach: Z5,
  init: x5,
  insert: G5,
  noop: J5,
  safe_not_equal: Q5,
  svg_element: ek
} = window.__gradio__svelte__internal, {
  SvelteComponent: cd,
  append: Ms,
  attr: Je,
  detach: ud,
  init: fd,
  insert: dd,
  noop: oo,
  safe_not_equal: hd,
  svg_element: so
} = window.__gradio__svelte__internal;
function md(i) {
  let e, t, n;
  return {
    c() {
      e = so("svg"), t = so("polyline"), n = so("path"), Je(t, "points", "1 4 1 10 7 10"), Je(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Je(e, "xmlns", "http://www.w3.org/2000/svg"), Je(e, "width", "100%"), Je(e, "height", "100%"), Je(e, "viewBox", "0 0 24 24"), Je(e, "fill", "none"), Je(e, "stroke", "currentColor"), Je(e, "stroke-width", "2"), Je(e, "stroke-linecap", "round"), Je(e, "stroke-linejoin", "round"), Je(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      dd(l, e, o), Ms(e, t), Ms(e, n);
    },
    p: oo,
    i: oo,
    o: oo,
    d(l) {
      l && ud(e);
    }
  };
}
class gd extends cd {
  constructor(e) {
    super(), fd(this, e, null, md, hd, {});
  }
}
const {
  SvelteComponent: bd,
  append: ao,
  attr: Be,
  detach: pd,
  init: wd,
  insert: vd,
  noop: ro,
  safe_not_equal: kd,
  svg_element: Ti
} = window.__gradio__svelte__internal;
function Cd(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ti("svg"), t = Ti("path"), n = Ti("polyline"), l = Ti("line"), Be(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Be(n, "points", "17 8 12 3 7 8"), Be(l, "x1", "12"), Be(l, "y1", "3"), Be(l, "x2", "12"), Be(l, "y2", "15"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "90%"), Be(e, "height", "90%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "2"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-upload");
    },
    m(o, s) {
      vd(o, e, s), ao(e, t), ao(e, n), ao(e, l);
    },
    p: ro,
    i: ro,
    o: ro,
    d(o) {
      o && pd(e);
    }
  };
}
let Sr = class extends bd {
  constructor(e) {
    super(), wd(this, e, null, Cd, kd, {});
  }
};
const {
  SvelteComponent: nk,
  append: ik,
  attr: lk,
  detach: ok,
  init: sk,
  insert: ak,
  noop: rk,
  safe_not_equal: _k,
  svg_element: ck
} = window.__gradio__svelte__internal, {
  SvelteComponent: uk,
  append: fk,
  attr: dk,
  detach: hk,
  init: mk,
  insert: gk,
  noop: bk,
  safe_not_equal: pk,
  svg_element: wk,
  text: vk
} = window.__gradio__svelte__internal, {
  SvelteComponent: kk,
  append: Ck,
  attr: yk,
  detach: Sk,
  init: qk,
  insert: zk,
  noop: Bk,
  safe_not_equal: Dk,
  svg_element: Lk,
  text: Mk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ek,
  append: Rk,
  attr: Ak,
  detach: Wk,
  init: Xk,
  insert: Yk,
  noop: Ik,
  safe_not_equal: jk,
  svg_element: Hk,
  text: Tk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Fk,
  append: Uk,
  attr: Vk,
  detach: Ok,
  init: Nk,
  insert: $k,
  noop: Pk,
  safe_not_equal: Kk,
  svg_element: Zk
} = window.__gradio__svelte__internal, {
  SvelteComponent: yd,
  append: Es,
  attr: Nt,
  detach: Sd,
  init: qd,
  insert: zd,
  noop: _o,
  safe_not_equal: Bd,
  svg_element: co
} = window.__gradio__svelte__internal;
function Dd(i) {
  let e, t, n;
  return {
    c() {
      e = co("svg"), t = co("path"), n = co("path"), Nt(t, "fill", "currentColor"), Nt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Nt(n, "fill", "currentColor"), Nt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Nt(e, "xmlns", "http://www.w3.org/2000/svg"), Nt(e, "width", "100%"), Nt(e, "height", "100%"), Nt(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      zd(l, e, o), Es(e, t), Es(e, n);
    },
    p: _o,
    i: _o,
    o: _o,
    d(l) {
      l && Sd(e);
    }
  };
}
let qr = class extends yd {
  constructor(e) {
    super(), qd(this, e, null, Dd, Bd, {});
  }
};
const Ld = [
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
], Rs = {
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
Ld.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: Rs[e][t],
    secondary: Rs[e][n]
  }
}), {});
class rl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Md(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new rl("Must be on Spaces to share.");
  let t, n, l;
  t = Ed(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new rl(`Upload failed: ${_.error}`);
    }
    throw new rl("Upload failed.");
  }
  return await s.text();
}
function Ed(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Rd,
  create_component: Ad,
  destroy_component: Wd,
  init: Xd,
  mount_component: Yd,
  safe_not_equal: Id,
  transition_in: jd,
  transition_out: Hd
} = window.__gradio__svelte__internal, { createEventDispatcher: Td } = window.__gradio__svelte__internal;
function Fd(i) {
  let e, t;
  return e = new zl({
    props: {
      Icon: ff,
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
      Yd(e, n, l), t = !0;
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
      Hd(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wd(e, n);
    }
  };
}
function Ud(i, e, t) {
  const n = Td();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof rl ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class Vd extends Rd {
  constructor(e) {
    super(), Xd(this, e, Ud, Fd, Id, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Od,
  append: gn,
  attr: jo,
  check_outros: Nd,
  create_component: zr,
  destroy_component: Br,
  detach: _l,
  element: Ho,
  group_outros: $d,
  init: Pd,
  insert: cl,
  mount_component: Dr,
  safe_not_equal: Kd,
  set_data: To,
  space: Fo,
  text: pi,
  toggle_class: As,
  transition_in: dl,
  transition_out: hl
} = window.__gradio__svelte__internal;
function Zd(i) {
  let e, t;
  return e = new Sr({}), {
    c() {
      zr(e.$$.fragment);
    },
    m(n, l) {
      Dr(e, n, l), t = !0;
    },
    i(n) {
      t || (dl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      hl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Br(e, n);
    }
  };
}
function xd(i) {
  let e, t;
  return e = new yr({}), {
    c() {
      zr(e.$$.fragment);
    },
    m(n, l) {
      Dr(e, n, l), t = !0;
    },
    i(n) {
      t || (dl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      hl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Br(e, n);
    }
  };
}
function Ws(i) {
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
      e = Ho("span"), t = pi("- "), l = pi(n), o = pi(" -"), s = Fo(), a = pi(r), jo(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      cl(_, e, c), gn(e, t), gn(e, l), gn(e, o), cl(_, s, c), cl(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && To(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && To(a, r);
    },
    d(_) {
      _ && (_l(e), _l(s), _l(a));
    }
  };
}
function Gd(i) {
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
  const c = [xd, Zd], f = [];
  function u(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = u(i), l = f[n] = c[n](i);
  let d = (
    /*mode*/
    i[3] !== "short" && Ws(i)
  );
  return {
    c() {
      e = Ho("div"), t = Ho("span"), l.c(), o = Fo(), r = pi(s), a = Fo(), d && d.c(), jo(t, "class", "icon-wrap svelte-kzcjhc"), As(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), jo(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      cl(m, e, h), gn(e, t), f[n].m(t, null), gn(e, o), gn(e, r), gn(e, a), d && d.m(e, null), _ = !0;
    },
    p(m, [h]) {
      let g = n;
      n = u(m), n !== g && ($d(), hl(f[g], 1, 1, () => {
        f[g] = null;
      }), Nd(), l = f[n], l || (l = f[n] = c[n](m), l.c()), dl(l, 1), l.m(t, null)), (!_ || h & /*hovered*/
      16) && As(
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
      ) + "") && To(r, s), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = Ws(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      _ || (dl(l), _ = !0);
    },
    o(m) {
      hl(l), _ = !1;
    },
    d(m) {
      m && _l(e), f[n].d(), d && d.d();
    }
  };
}
function Jd(i, e, t) {
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
class Lr extends Od {
  constructor(e) {
    super(), Pd(this, e, Jd, Gd, Kd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Gk,
  attr: Jk,
  create_slot: Qk,
  detach: e6,
  element: t6,
  get_all_dirty_from_scope: n6,
  get_slot_changes: i6,
  init: l6,
  insert: o6,
  safe_not_equal: s6,
  toggle_class: a6,
  transition_in: r6,
  transition_out: _6,
  update_slot_base: c6
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qd,
  append: uo,
  attr: Bt,
  check_outros: wi,
  create_component: Bl,
  destroy_component: Dl,
  detach: Zn,
  element: Ei,
  empty: e1,
  group_outros: vi,
  init: t1,
  insert: xn,
  listen: Ll,
  mount_component: Ml,
  safe_not_equal: n1,
  space: fo,
  toggle_class: ln,
  transition_in: ke,
  transition_out: Ye
} = window.__gradio__svelte__internal;
function Xs(i) {
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
  ), _, c = t && Ys(i), f = l && Is(i), u = s && js(i), d = a && Hs(i);
  return {
    c() {
      e = Ei("span"), c && c.c(), n = fo(), f && f.c(), o = fo(), u && u.c(), r = fo(), d && d.c(), Bt(e, "class", "source-selection svelte-1jp3vgd"), Bt(e, "data-testid", "source-select");
    },
    m(m, h) {
      xn(m, e, h), c && c.m(e, null), uo(e, n), f && f.m(e, null), uo(e, o), u && u.m(e, null), uo(e, r), d && d.m(e, null), _ = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && ke(c, 1)) : (c = Ys(m), c.c(), ke(c, 1), c.m(e, n)) : c && (vi(), Ye(c, 1, 1, () => {
        c = null;
      }), wi()), h & /*sources*/
      2 && (l = /*sources*/
      m[1].includes("microphone")), l ? f ? (f.p(m, h), h & /*sources*/
      2 && ke(f, 1)) : (f = Is(m), f.c(), ke(f, 1), f.m(e, o)) : f && (vi(), Ye(f, 1, 1, () => {
        f = null;
      }), wi()), h & /*sources*/
      2 && (s = /*sources*/
      m[1].includes("webcam")), s ? u ? (u.p(m, h), h & /*sources*/
      2 && ke(u, 1)) : (u = js(m), u.c(), ke(u, 1), u.m(e, r)) : u && (vi(), Ye(u, 1, 1, () => {
        u = null;
      }), wi()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && ke(d, 1)) : (d = Hs(m), d.c(), ke(d, 1), d.m(e, null)) : d && (vi(), Ye(d, 1, 1, () => {
        d = null;
      }), wi());
    },
    i(m) {
      _ || (ke(c), ke(f), ke(u), ke(d), _ = !0);
    },
    o(m) {
      Ye(c), Ye(f), Ye(u), Ye(d), _ = !1;
    },
    d(m) {
      m && Zn(e), c && c.d(), f && f.d(), u && u.d(), d && d.d();
    }
  };
}
function Ys(i) {
  let e, t, n, l, o;
  return t = new Sr({}), {
    c() {
      e = Ei("button"), Bl(t.$$.fragment), Bt(e, "class", "icon svelte-1jp3vgd"), Bt(e, "aria-label", "Upload file"), ln(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      xn(s, e, r), Ml(t, e, null), n = !0, l || (o = Ll(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && ln(
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
      Ye(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Dl(t), l = !1, o();
    }
  };
}
function Is(i) {
  let e, t, n, l, o;
  return t = new Pf({}), {
    c() {
      e = Ei("button"), Bl(t.$$.fragment), Bt(e, "class", "icon svelte-1jp3vgd"), Bt(e, "aria-label", "Record audio"), ln(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      xn(s, e, r), Ml(t, e, null), n = !0, l || (o = Ll(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && ln(
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
      Ye(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Dl(t), l = !1, o();
    }
  };
}
function js(i) {
  let e, t, n, l, o;
  return t = new qr({}), {
    c() {
      e = Ei("button"), Bl(t.$$.fragment), Bt(e, "class", "icon svelte-1jp3vgd"), Bt(e, "aria-label", "Capture from camera"), ln(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      xn(s, e, r), Ml(t, e, null), n = !0, l || (o = Ll(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && ln(
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
      Ye(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Dl(t), l = !1, o();
    }
  };
}
function Hs(i) {
  let e, t, n, l, o;
  return t = new yr({}), {
    c() {
      e = Ei("button"), Bl(t.$$.fragment), Bt(e, "class", "icon svelte-1jp3vgd"), Bt(e, "aria-label", "Paste from clipboard"), ln(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      xn(s, e, r), Ml(t, e, null), n = !0, l || (o = Ll(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && ln(
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
      Ye(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Zn(e), Dl(t), l = !1, o();
    }
  };
}
function i1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Xs(i)
  );
  return {
    c() {
      n && n.c(), e = e1();
    },
    m(l, o) {
      n && n.m(l, o), xn(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && ke(n, 1)) : (n = Xs(l), n.c(), ke(n, 1), n.m(e.parentNode, e)) : n && (vi(), Ye(n, 1, 1, () => {
        n = null;
      }), wi());
    },
    i(l) {
      t || (ke(n), t = !0);
    },
    o(l) {
      Ye(n), t = !1;
    },
    d(l) {
      l && Zn(e), n && n.d(l);
    }
  };
}
function l1(i, e, t) {
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
class o1 extends Qd {
  constructor(e) {
    super(), t1(this, e, l1, i1, n1, {
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
function ul() {
}
const s1 = (i) => i;
function Ts(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Mr = typeof window < "u";
let Fs = Mr ? () => window.performance.now() : () => Date.now(), Er = Mr ? (i) => requestAnimationFrame(i) : ul;
const Kn = /* @__PURE__ */ new Set();
function Rr(i) {
  Kn.forEach((e) => {
    e.c(i) || (Kn.delete(e), e.f());
  }), Kn.size !== 0 && Er(Rr);
}
function a1(i) {
  let e;
  return Kn.size === 0 && Er(Rr), { promise: new Promise((t) => {
    Kn.add(e = { c: i, f: t });
  }), abort() {
    Kn.delete(e);
  } };
}
function r1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function _1(i, { delay: e = 0, duration: t = 400, easing: n = s1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function Us(i, { delay: e = 0, duration: t = 400, easing: n = r1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [f, u] = Ts(l), [d, m] = Ts(o);
  return { delay: e, duration: t, easing: n, css: (h, g) => `
			transform: ${_} translate(${(1 - h) * f}${u}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}` };
}
const Xn = [];
function c1(i, e = ul) {
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
  return { set: l, update: o, subscribe: function(s, r = ul) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || ul), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function Vs(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Uo(i, e, t, n) {
  if (typeof t == "number" || Vs(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, Vs(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Uo(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Uo(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function Os(i, e = {}) {
  const t = c1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, f = 1, u = 0, d = !1;
  function m(g, b = {}) {
    c = g;
    const v = a = {};
    return i == null || b.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, s = Fs(), _ = g, t.set(i = c), Promise.resolve()) : (b.soft && (u = 1 / (60 * (b.soft === !0 ? 0.5 : +b.soft)), f = 0), r || (s = Fs(), d = !1, r = a1((p) => {
      if (d) return d = !1, r = null, !1;
      f = Math.min(f + u, 1);
      const z = { inv_mass: f, opts: h, settled: !0, dt: 60 * (p - s) / 1e3 }, L = Uo(z, _, i, c);
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
  SvelteComponent: u1,
  append: ft,
  attr: ne,
  component_subscribe: Ns,
  detach: f1,
  element: d1,
  init: h1,
  insert: m1,
  noop: $s,
  safe_not_equal: g1,
  set_style: Fi,
  svg_element: dt,
  toggle_class: Ps
} = window.__gradio__svelte__internal, { onMount: b1 } = window.__gradio__svelte__internal;
function p1(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u;
  return {
    c() {
      e = d1("div"), t = dt("svg"), n = dt("g"), l = dt("path"), o = dt("path"), s = dt("path"), r = dt("path"), a = dt("g"), _ = dt("path"), c = dt("path"), f = dt("path"), u = dt("path"), ne(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), ne(l, "fill", "#FF7C00"), ne(l, "fill-opacity", "0.4"), ne(l, "class", "svelte-43sxxs"), ne(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), ne(o, "fill", "#FF7C00"), ne(o, "class", "svelte-43sxxs"), ne(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), ne(s, "fill", "#FF7C00"), ne(s, "fill-opacity", "0.4"), ne(s, "class", "svelte-43sxxs"), ne(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), ne(r, "fill", "#FF7C00"), ne(r, "class", "svelte-43sxxs"), Fi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), ne(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), ne(_, "fill", "#FF7C00"), ne(_, "fill-opacity", "0.4"), ne(_, "class", "svelte-43sxxs"), ne(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), ne(c, "fill", "#FF7C00"), ne(c, "class", "svelte-43sxxs"), ne(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), ne(f, "fill", "#FF7C00"), ne(f, "fill-opacity", "0.4"), ne(f, "class", "svelte-43sxxs"), ne(u, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), ne(u, "fill", "#FF7C00"), ne(u, "class", "svelte-43sxxs"), Fi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), ne(t, "viewBox", "-1200 -1200 3000 3000"), ne(t, "fill", "none"), ne(t, "xmlns", "http://www.w3.org/2000/svg"), ne(t, "class", "svelte-43sxxs"), ne(e, "class", "svelte-43sxxs"), Ps(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(d, m) {
      m1(d, e, m), ft(e, t), ft(t, n), ft(n, l), ft(n, o), ft(n, s), ft(n, r), ft(t, a), ft(a, _), ft(a, c), ft(a, f), ft(a, u);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && Fi(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && Fi(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && Ps(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: $s,
    o: $s,
    d(d) {
      d && f1(e);
    }
  };
}
function w1(i, e, t) {
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
  const r = Os([0, 0]);
  Ns(i, r, (d) => t(1, n = d));
  const a = Os([0, 0]);
  Ns(i, a, (d) => t(2, l = d));
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
  return b1(() => (u(), () => _ = !0)), i.$$set = (d) => {
    "margin" in d && t(0, s = d.margin);
  }, [s, n, l, r, a];
}
class v1 extends u1 {
  constructor(e) {
    super(), h1(this, e, w1, p1, g1, { margin: 0 });
  }
}
const {
  SvelteComponent: k1,
  append: bn,
  attr: bt,
  binding_callbacks: Ks,
  check_outros: Vo,
  create_component: Ar,
  create_slot: Wr,
  destroy_component: Xr,
  destroy_each: Yr,
  detach: V,
  element: qt,
  empty: Gn,
  ensure_array_like: ml,
  get_all_dirty_from_scope: Ir,
  get_slot_changes: jr,
  group_outros: Oo,
  init: C1,
  insert: O,
  mount_component: Hr,
  noop: No,
  safe_not_equal: y1,
  set_data: st,
  set_style: tn,
  space: ot,
  text: fe,
  toggle_class: tt,
  transition_in: gt,
  transition_out: zt,
  update_slot_base: Tr
} = window.__gradio__svelte__internal, { tick: S1 } = window.__gradio__svelte__internal, { onDestroy: q1 } = window.__gradio__svelte__internal, { createEventDispatcher: z1 } = window.__gradio__svelte__internal, B1 = (i) => ({}), Zs = (i) => ({}), D1 = (i) => ({}), xs = (i) => ({});
function Gs(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Js(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function L1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new zl({
    props: {
      Icon: kr,
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
  ), c = Wr(
    _,
    i,
    /*$$scope*/
    i[29],
    Zs
  );
  return {
    c() {
      e = qt("div"), Ar(t.$$.fragment), n = ot(), l = qt("span"), s = fe(o), r = ot(), c && c.c(), bt(e, "class", "clear-status svelte-16nch4a"), bt(l, "class", "error svelte-16nch4a");
    },
    m(f, u) {
      O(f, e, u), Hr(t, e, null), O(f, n, u), O(f, l, u), bn(l, s), O(f, r, u), c && c.m(f, u), a = !0;
    },
    p(f, u) {
      const d = {};
      u[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      f[1]("common.clear")), t.$set(d), (!a || u[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      f[1]("common.error") + "") && st(s, o), c && c.p && (!a || u[0] & /*$$scope*/
      536870912) && Tr(
        c,
        _,
        f,
        /*$$scope*/
        f[29],
        a ? jr(
          _,
          /*$$scope*/
          f[29],
          u,
          B1
        ) : Ir(
          /*$$scope*/
          f[29]
        ),
        Zs
      );
    },
    i(f) {
      a || (gt(t.$$.fragment, f), gt(c, f), a = !0);
    },
    o(f) {
      zt(t.$$.fragment, f), zt(c, f), a = !1;
    },
    d(f) {
      f && (V(e), V(n), V(l), V(r)), Xr(t), c && c.d(f);
    }
  };
}
function M1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Qs(i)
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
    ) return R1;
    if (
      /*queue_position*/
      p[2] === 0
    ) return E1;
  }
  let u = f(i), d = u && u(i), m = (
    /*timer*/
    i[5] && na(i)
  );
  const h = [I1, Y1], g = [];
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
  i[5] && _a(i);
  return {
    c() {
      c && c.c(), e = ot(), t = qt("div"), d && d.c(), n = ot(), m && m.c(), l = ot(), s && s.c(), r = ot(), v && v.c(), a = Gn(), bt(t, "class", "progress-text svelte-16nch4a"), tt(
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
    m(p, z) {
      c && c.m(p, z), O(p, e, z), O(p, t, z), d && d.m(t, null), bn(t, n), m && m.m(t, null), O(p, l, z), ~o && g[o].m(p, z), O(p, r, z), v && v.m(p, z), O(p, a, z), _ = !0;
    },
    p(p, z) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? c ? c.p(p, z) : (c = Qs(p), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), u === (u = f(p)) && d ? d.p(p, z) : (d && d.d(1), d = u && u(p), d && (d.c(), d.m(t, n))), /*timer*/
      p[5] ? m ? m.p(p, z) : (m = na(p), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!_ || z[0] & /*variant*/
      256) && tt(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!_ || z[0] & /*variant*/
      256) && tt(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let L = o;
      o = b(p), o === L ? ~o && g[o].p(p, z) : (s && (Oo(), zt(g[L], 1, 1, () => {
        g[L] = null;
      }), Vo()), ~o ? (s = g[o], s ? s.p(p, z) : (s = g[o] = h[o](p), s.c()), gt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? v && (Oo(), zt(v, 1, 1, () => {
        v = null;
      }), Vo()) : v ? (v.p(p, z), z[0] & /*timer*/
      32 && gt(v, 1)) : (v = _a(p), v.c(), gt(v, 1), v.m(a.parentNode, a));
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
function Qs(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = qt("div"), bt(e, "class", "eta-bar svelte-16nch4a"), tn(e, "transform", t);
    },
    m(n, l) {
      O(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && tn(e, "transform", t);
    },
    d(n) {
      n && V(e);
    }
  };
}
function E1(i) {
  let e;
  return {
    c() {
      e = fe("processing |");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: No,
    d(t) {
      t && V(e);
    }
  };
}
function R1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = fe("queue: "), n = fe(t), l = fe("/"), o = fe(
        /*queue_size*/
        i[3]
      ), s = fe(" |");
    },
    m(r, a) {
      O(r, e, a), O(r, n, a), O(r, l, a), O(r, o, a), O(r, s, a);
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
      r && (V(e), V(n), V(l), V(o), V(s));
    }
  };
}
function A1(i) {
  let e, t = ml(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ta(Js(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Gn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      O(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = ml(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Js(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ta(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && V(e), Yr(n, l);
    }
  };
}
function ea(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, f) {
    return (
      /*p*/
      c[41].length != null ? X1 : W1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = ot(), n = fe(t), l = fe(" | "), s = fe(o);
    },
    m(c, f) {
      _.m(c, f), O(c, e, f), O(c, n, f), O(c, l, f), O(c, s, f);
    },
    p(c, f) {
      a === (a = r(c)) && _ ? _.p(c, f) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), f[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && st(n, t);
    },
    d(c) {
      c && (V(e), V(n), V(l), V(s)), _.d(c);
    }
  };
}
function W1(i) {
  let e = Fn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = fe(e);
    },
    m(n, l) {
      O(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Fn(
        /*p*/
        n[41].index || 0
      ) + "") && st(t, e);
    },
    d(n) {
      n && V(t);
    }
  };
}
function X1(i) {
  let e = Fn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Fn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = fe(e), n = fe("/"), o = fe(l);
    },
    m(s, r) {
      O(s, t, r), O(s, n, r), O(s, o, r);
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
      s && (V(t), V(n), V(o));
    }
  };
}
function ta(i) {
  let e, t = (
    /*p*/
    i[41].index != null && ea(i)
  );
  return {
    c() {
      t && t.c(), e = Gn();
    },
    m(n, l) {
      t && t.m(n, l), O(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = ea(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && V(e), t && t.d(n);
    }
  };
}
function na(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = fe(
        /*formatted_timer*/
        i[20]
      ), n = fe(t), l = fe("s");
    },
    m(o, s) {
      O(o, e, s), O(o, n, s), O(o, l, s);
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
      o && (V(e), V(n), V(l));
    }
  };
}
function Y1(i) {
  let e, t;
  return e = new v1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Ar(e.$$.fragment);
    },
    m(n, l) {
      Hr(e, n, l), t = !0;
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
      Xr(e, n);
    }
  };
}
function I1(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && ia(i)
  );
  return {
    c() {
      e = qt("div"), t = qt("div"), r && r.c(), n = ot(), l = qt("div"), o = qt("div"), bt(t, "class", "progress-level-inner svelte-16nch4a"), bt(o, "class", "progress-bar svelte-16nch4a"), tn(o, "width", s), bt(l, "class", "progress-bar-wrap svelte-16nch4a"), bt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      O(a, e, _), bn(e, t), r && r.m(t, null), bn(e, n), bn(e, l), bn(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = ia(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && tn(o, "width", s);
    },
    i: No,
    o: No,
    d(a) {
      a && V(e), r && r.d(), i[31](null);
    }
  };
}
function ia(i) {
  let e, t = ml(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ra(Gs(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Gn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      O(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = ml(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Gs(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ra(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && V(e), Yr(n, l);
    }
  };
}
function la(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && j1()
  ), s = (
    /*p*/
    i[41].desc != null && oa(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && sa()
  ), a = (
    /*progress_level*/
    i[14] != null && aa(i)
  );
  return {
    c() {
      o && o.c(), e = ot(), s && s.c(), t = ot(), r && r.c(), n = ot(), a && a.c(), l = Gn();
    },
    m(_, c) {
      o && o.m(_, c), O(_, e, c), s && s.m(_, c), O(_, t, c), r && r.m(_, c), O(_, n, c), a && a.m(_, c), O(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = oa(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = sa(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = aa(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
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
      e = fe(" /");
    },
    m(t, n) {
      O(t, e, n);
    },
    d(t) {
      t && V(e);
    }
  };
}
function oa(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = fe(e);
    },
    m(n, l) {
      O(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && st(t, e);
    },
    d(n) {
      n && V(t);
    }
  };
}
function sa(i) {
  let e;
  return {
    c() {
      e = fe("-");
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
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = fe(e), n = fe("%");
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
      ] || 0)).toFixed(1) + "") && st(t, e);
    },
    d(l) {
      l && (V(t), V(n));
    }
  };
}
function ra(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && la(i)
  );
  return {
    c() {
      t && t.c(), e = Gn();
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
      ] != null ? t ? t.p(n, l) : (t = la(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && V(e), t && t.d(n);
    }
  };
}
function _a(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Wr(
    o,
    i,
    /*$$scope*/
    i[29],
    xs
  );
  return {
    c() {
      e = qt("p"), t = fe(
        /*loading_text*/
        i[9]
      ), n = ot(), s && s.c(), bt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      O(r, e, a), bn(e, t), O(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && st(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && Tr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? jr(
          o,
          /*$$scope*/
          r[29],
          a,
          D1
        ) : Ir(
          /*$$scope*/
          r[29]
        ),
        xs
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
function H1(i) {
  let e, t, n, l, o;
  const s = [M1, L1], r = [];
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
      ), tn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), tn(
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
      t = a(_), t === f ? ~t && r[t].p(_, c) : (n && (Oo(), zt(r[f], 1, 1, () => {
        r[f] = null;
      }), Vo()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), gt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
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
      1024 && tn(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && tn(
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
var T1 = function(i, e, t, n) {
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
let Ui = [], ho = !1;
function F1(i) {
  return T1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ui.push(e), !ho) ho = !0;
      else return;
      yield S1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Ui.length; l++) {
          const s = Ui[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), ho = !1, Ui = [];
      });
    }
  });
}
function U1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = z1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: f } = e, { scroll_to_output: u = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: z = !1 } = e, { border: L = !1 } = e, { autoscroll: B } = e, y, w = !1, E = 0, C = 0, S = null, M = null, N = 0, $ = null, q, U = null, j = !0;
  const Y = () => {
    t(0, a = t(27, S = t(19, P = null))), t(25, E = performance.now()), t(26, C = 0), w = !0, G();
  };
  function G() {
    requestAnimationFrame(() => {
      t(26, C = (performance.now() - E) / 1e3), w && G();
    });
  }
  function X() {
    t(26, C = 0), t(0, a = t(27, S = t(19, P = null))), w && (w = !1);
  }
  q1(() => {
    w && X();
  });
  let P = null;
  function J(I) {
    Ks[I ? "unshift" : "push"](() => {
      U = I, t(16, U), t(7, g), t(14, $), t(15, q);
    });
  }
  const le = () => {
    s("clear_status");
  };
  function me(I) {
    Ks[I ? "unshift" : "push"](() => {
      y = I, t(13, y);
    });
  }
  return i.$$set = (I) => {
    "i18n" in I && t(1, r = I.i18n), "eta" in I && t(0, a = I.eta), "queue_position" in I && t(2, _ = I.queue_position), "queue_size" in I && t(3, c = I.queue_size), "status" in I && t(4, f = I.status), "scroll_to_output" in I && t(22, u = I.scroll_to_output), "timer" in I && t(5, d = I.timer), "show_progress" in I && t(6, m = I.show_progress), "message" in I && t(23, h = I.message), "progress" in I && t(7, g = I.progress), "variant" in I && t(8, b = I.variant), "loading_text" in I && t(9, v = I.loading_text), "absolute" in I && t(10, p = I.absolute), "translucent" in I && t(11, z = I.translucent), "border" in I && t(12, L = I.border), "autoscroll" in I && t(24, B = I.autoscroll), "$$scope" in I && t(29, o = I.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = S), a != null && S !== a && (t(28, M = (performance.now() - E) / 1e3 + a), t(19, P = M.toFixed(1)), t(27, S = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, N = M === null || M <= 0 || !C ? null : Math.min(C / M, 1)), i.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, j = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, $ = g.map((I) => {
      if (I.index != null && I.length != null)
        return I.index / I.length;
      if (I.progress != null)
        return I.progress;
    })) : t(14, $ = null), $ ? (t(15, q = $[$.length - 1]), U && (q === 0 ? t(16, U.style.transition = "0", U) : t(16, U.style.transition = "150ms", U))) : t(15, q = void 0)), i.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? Y() : X()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && y && u && (f === "pending" || f === "complete") && F1(y, B), i.$$.dirty[0] & /*status, message*/
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
    $,
    q,
    U,
    N,
    j,
    P,
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
    le,
    me
  ];
}
class V1 extends k1 {
  constructor(e) {
    super(), C1(
      this,
      e,
      U1,
      H1,
      y1,
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
  SvelteComponent: u6,
  add_render_callback: f6,
  append: d6,
  attr: h6,
  bubble: m6,
  check_outros: g6,
  create_component: b6,
  create_in_transition: p6,
  create_out_transition: w6,
  destroy_component: v6,
  detach: k6,
  element: C6,
  group_outros: y6,
  init: S6,
  insert: q6,
  listen: z6,
  mount_component: B6,
  run_all: D6,
  safe_not_equal: L6,
  set_data: M6,
  space: E6,
  stop_propagation: R6,
  text: A6,
  transition_in: W6,
  transition_out: X6
} = window.__gradio__svelte__internal, { createEventDispatcher: Y6, onMount: I6 } = window.__gradio__svelte__internal, {
  SvelteComponent: j6,
  append: H6,
  attr: T6,
  bubble: F6,
  check_outros: U6,
  create_animation: V6,
  create_component: O6,
  destroy_component: N6,
  detach: $6,
  element: P6,
  ensure_array_like: K6,
  fix_and_outro_and_destroy_block: Z6,
  fix_position: x6,
  group_outros: G6,
  init: J6,
  insert: Q6,
  mount_component: e8,
  noop: t8,
  safe_not_equal: n8,
  set_style: i8,
  space: l8,
  transition_in: o8,
  transition_out: s8,
  update_keyed_each: a8
} = window.__gradio__svelte__internal, { setContext: r8, getContext: O1 } = window.__gradio__svelte__internal, N1 = "WORKER_PROXY_CONTEXT_KEY";
function Fr() {
  return O1(N1);
}
function $1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Ur(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function Vr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!$1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function P1(i) {
  if (i == null || !Vr(i))
    return i;
  const e = Fr();
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
      type: Ur(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: K1,
  assign: gl,
  check_outros: Or,
  compute_rest_props: ca,
  create_slot: ls,
  detach: El,
  element: Nr,
  empty: $r,
  exclude_internal_props: Z1,
  get_all_dirty_from_scope: os,
  get_slot_changes: ss,
  get_spread_update: Pr,
  group_outros: Kr,
  init: x1,
  insert: Rl,
  listen: Zr,
  prevent_default: G1,
  safe_not_equal: J1,
  set_attributes: bl,
  transition_in: yn,
  transition_out: Sn,
  update_slot_base: as
} = window.__gradio__svelte__internal, { createEventDispatcher: Q1 } = window.__gradio__svelte__internal;
function eh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = ls(
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
    _ = gl(_, a[c]);
  return {
    c() {
      e = Nr("a"), r && r.c(), bl(e, _);
    },
    m(c, f) {
      Rl(c, e, f), r && r.m(e, null), n = !0, l || (o = Zr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, f) {
      r && r.p && (!n || f & /*$$scope*/
      128) && as(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? ss(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : os(
          /*$$scope*/
          c[7]
        ),
        null
      ), bl(e, _ = Pr(a, [
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
      c && El(e), r && r.d(c), l = !1, o();
    }
  };
}
function th(i) {
  let e, t, n, l;
  const o = [ih, nh], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = $r();
    },
    m(a, _) {
      s[e].m(a, _), Rl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Kr(), Sn(s[c], 1, 1, () => {
        s[c] = null;
      }), Or(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), yn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (yn(t), l = !0);
    },
    o(a) {
      Sn(t), l = !1;
    },
    d(a) {
      a && El(n), s[e].d(a);
    }
  };
}
function nh(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = ls(
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
    a = gl(a, r[_]);
  return {
    c() {
      e = Nr("a"), s && s.c(), bl(e, a);
    },
    m(_, c) {
      Rl(_, e, c), s && s.m(e, null), t = !0, n || (l = Zr(e, "click", G1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && as(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? ss(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : os(
          /*$$scope*/
          _[7]
        ),
        null
      ), bl(e, a = Pr(r, [
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
      _ && El(e), s && s.d(_), n = !1, l();
    }
  };
}
function ih(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = ls(
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
      128) && as(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? ss(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : os(
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
function lh(i) {
  let e, t, n, l, o;
  const s = [th, eh], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && Vr(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = $r();
    },
    m(_, c) {
      r[t].m(_, c), Rl(_, l, c), o = !0;
    },
    p(_, [c]) {
      let f = t;
      t = a(_, c), t === f ? r[t].p(_, c) : (Kr(), Sn(r[f], 1, 1, () => {
        r[f] = null;
      }), Or(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), yn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (yn(n), o = !0);
    },
    o(_) {
      Sn(n), o = !1;
    },
    d(_) {
      _ && El(l), r[t].d(_);
    }
  };
}
function oh(i, e, t) {
  const n = ["href", "download"];
  let l = ca(e, n), { $$slots: o = {}, $$scope: s } = e;
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
  const c = Q1();
  let f = !1;
  const u = Fr();
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
            type: Ur(g.headers, "content-type")
          }
        ), v = URL.createObjectURL(b), p = document.createElement("a");
        p.href = v, p.download = _, p.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, f = !1);
      });
    });
  }
  return i.$$set = (m) => {
    e = gl(gl({}, e), Z1(m)), t(6, l = ca(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, _ = m.download), "$$scope" in m && t(7, s = m.$$scope);
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
class sh extends K1 {
  constructor(e) {
    super(), x1(this, e, oh, lh, J1, { href: 0, download: 1 });
  }
}
var ah = Object.defineProperty, rh = (i, e, t) => e in i ? ah(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Et = (i, e, t) => (rh(i, typeof e != "symbol" ? e + "" : e, t), t), xr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, ui = (i, e, t) => (xr(i, e, "read from private field"), e.get(i)), _h = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, ch = (i, e, t, n) => (xr(i, e, "write to private field"), e.set(i, t), t), Gt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Gr(i, e) {
  return i.map(
    (t) => new uh({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class uh {
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
class _8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ui(this, Gt) + t; ; ) {
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
        ch(this, Gt, t);
      },
      flush: (t) => {
        if (ui(this, Gt) === "")
          return;
        const n = e.allowCR && ui(this, Gt).endsWith("\r") ? ui(this, Gt).slice(0, -1) : ui(this, Gt);
        t.enqueue(n);
      }
    }), _h(this, Gt, "");
  }
}
Gt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: fh,
  append: je,
  attr: hn,
  detach: Jr,
  element: mn,
  init: dh,
  insert: Qr,
  noop: ua,
  safe_not_equal: hh,
  set_data: pl,
  set_style: mo,
  space: $o,
  text: Un,
  toggle_class: fa
} = window.__gradio__svelte__internal, { onMount: mh, createEventDispatcher: gh, onDestroy: bh } = window.__gradio__svelte__internal;
function da(i) {
  let e, t, n, l, o = ki(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), f;
  return {
    c() {
      e = mn("div"), t = mn("span"), n = mn("div"), l = mn("progress"), s = Un(o), a = $o(), _ = mn("span"), f = Un(c), mo(l, "visibility", "hidden"), mo(l, "height", "0"), mo(l, "width", "0"), l.value = r = ki(
        /*file_to_display*/
        i[2]
      ), hn(l, "max", "100"), hn(l, "class", "svelte-cr2edf"), hn(n, "class", "progress-bar svelte-cr2edf"), hn(_, "class", "file-name svelte-cr2edf"), hn(e, "class", "file svelte-cr2edf");
    },
    m(u, d) {
      Qr(u, e, d), je(e, t), je(t, n), je(n, l), je(l, s), je(e, a), je(e, _), je(_, f);
    },
    p(u, d) {
      d & /*file_to_display*/
      4 && o !== (o = ki(
        /*file_to_display*/
        u[2]
      ) + "") && pl(s, o), d & /*file_to_display*/
      4 && r !== (r = ki(
        /*file_to_display*/
        u[2]
      )) && (l.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      u[2].orig_name + "") && pl(f, c);
    },
    d(u) {
      u && Jr(e);
    }
  };
}
function ph(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, f = (
    /*file_to_display*/
    i[2] && da(i)
  );
  return {
    c() {
      e = mn("div"), t = mn("span"), n = Un("Uploading "), o = Un(l), s = $o(), a = Un(r), _ = Un("..."), c = $o(), f && f.c(), hn(t, "class", "uploading svelte-cr2edf"), hn(e, "class", "wrap svelte-cr2edf"), fa(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(u, d) {
      Qr(u, e, d), je(e, t), je(t, n), je(t, o), je(t, s), je(t, a), je(t, _), je(e, c), f && f.m(e, null);
    },
    p(u, [d]) {
      d & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      u[0].length + "") && pl(o, l), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      u[0].length > 1 ? "files" : "file") && pl(a, r), /*file_to_display*/
      u[2] ? f ? f.p(u, d) : (f = da(u), f.c(), f.m(e, null)) : f && (f.d(1), f = null), d & /*progress*/
      2 && fa(
        e,
        "progress",
        /*progress*/
        u[1]
      );
    },
    i: ua,
    o: ua,
    d(u) {
      u && Jr(e), f && f.d();
    }
  };
}
function ki(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function wh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += ki(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function vh(i, e, t) {
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
  const d = gh();
  function m(h, g) {
    t(0, u = u.map((b) => (b.orig_name === h && (b.progress += g), b)));
  }
  return mh(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        _ || t(1, _ = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), bh(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (h) => {
    "upload_id" in h && t(3, l = h.upload_id), "root" in h && t(4, o = h.root), "files" in h && t(5, s = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && wh(u), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class kh extends fh {
  constructor(e) {
    super(), dh(this, e, vh, ph, hh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Ch,
  append: ha,
  attr: De,
  binding_callbacks: yh,
  bubble: sn,
  check_outros: e_,
  create_component: Sh,
  create_slot: t_,
  destroy_component: qh,
  detach: Al,
  element: Po,
  empty: n_,
  get_all_dirty_from_scope: i_,
  get_slot_changes: l_,
  group_outros: o_,
  init: zh,
  insert: Wl,
  listen: Ve,
  mount_component: Bh,
  prevent_default: an,
  run_all: Dh,
  safe_not_equal: Lh,
  set_style: s_,
  space: Mh,
  stop_propagation: rn,
  toggle_class: ye,
  transition_in: nn,
  transition_out: qn,
  update_slot_base: a_
} = window.__gradio__svelte__internal, { createEventDispatcher: Eh, tick: Rh } = window.__gradio__svelte__internal;
function Ah(i) {
  let e, t, n, l, o, s, r, a, _, c, f;
  const u = (
    /*#slots*/
    i[26].default
  ), d = t_(
    u,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Po("button"), d && d.c(), t = Mh(), n = Po("input"), De(n, "aria-label", "file upload"), De(n, "data-testid", "file-upload"), De(n, "type", "file"), De(n, "accept", l = /*accept_file_types*/
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
      ), s_(e, "height", "100%");
    },
    m(m, h) {
      Wl(m, e, h), d && d.m(e, null), ha(e, t), ha(e, n), i[34](n), _ = !0, c || (f = [
        Ve(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Ve(e, "drag", rn(an(
          /*drag_handler*/
          i[27]
        ))),
        Ve(e, "dragstart", rn(an(
          /*dragstart_handler*/
          i[28]
        ))),
        Ve(e, "dragend", rn(an(
          /*dragend_handler*/
          i[29]
        ))),
        Ve(e, "dragover", rn(an(
          /*dragover_handler*/
          i[30]
        ))),
        Ve(e, "dragenter", rn(an(
          /*dragenter_handler*/
          i[31]
        ))),
        Ve(e, "dragleave", rn(an(
          /*dragleave_handler*/
          i[32]
        ))),
        Ve(e, "drop", rn(an(
          /*drop_handler*/
          i[33]
        ))),
        Ve(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Ve(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Ve(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Ve(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!_ || h[0] & /*$$scope*/
      33554432) && a_(
        d,
        u,
        m,
        /*$$scope*/
        m[25],
        _ ? l_(
          u,
          /*$$scope*/
          m[25],
          h,
          null
        ) : i_(
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
      _ || (nn(d, m), _ = !0);
    },
    o(m) {
      qn(d, m), _ = !1;
    },
    d(m) {
      m && Al(e), d && d.d(m), i[34](null), c = !1, Dh(f);
    }
  };
}
function Wh(i) {
  let e, t, n = !/*hidden*/
  i[9] && ma(i);
  return {
    c() {
      n && n.c(), e = n_();
    },
    m(l, o) {
      n && n.m(l, o), Wl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (o_(), qn(n, 1, 1, () => {
        n = null;
      }), e_()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && nn(n, 1)) : (n = ma(l), n.c(), nn(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (nn(n), t = !0);
    },
    o(l) {
      qn(n), t = !1;
    },
    d(l) {
      l && Al(e), n && n.d(l);
    }
  };
}
function Xh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = t_(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Po("button"), r && r.c(), De(e, "tabindex", t = /*hidden*/
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
      ), s_(e, "height", "100%");
    },
    m(a, _) {
      Wl(a, e, _), r && r.m(e, null), n = !0, l || (o = Ve(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && a_(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? l_(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : i_(
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
      n || (nn(r, a), n = !0);
    },
    o(a) {
      qn(r, a), n = !1;
    },
    d(a) {
      a && Al(e), r && r.d(a), l = !1, o();
    }
  };
}
function ma(i) {
  let e, t;
  return e = new kh({
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
      Sh(e.$$.fragment);
    },
    m(n, l) {
      Bh(e, n, l), t = !0;
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
      t || (nn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      qn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qh(e, n);
    }
  };
}
function Yh(i) {
  let e, t, n, l;
  const o = [Xh, Wh, Ah], s = [];
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
      t.c(), n = n_();
    },
    m(a, _) {
      s[e].m(a, _), Wl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (o_(), qn(s[c], 1, 1, () => {
        s[c] = null;
      }), e_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), nn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (nn(t), l = !0);
    },
    o(a) {
      qn(t), l = !1;
    },
    d(a) {
      a && Al(n), s[e].d(a);
    }
  };
}
function Ih(i, e, t) {
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
  var o = this && this.__awaiter || function(R, F, Z, oe) {
    function x(we) {
      return we instanceof Z ? we : new Z(function(A) {
        A(we);
      });
    }
    return new (Z || (Z = Promise))(function(we, A) {
      function Dt(rt) {
        try {
          at(oe.next(rt));
        } catch (on) {
          A(on);
        }
      }
      function Fe(rt) {
        try {
          at(oe.throw(rt));
        } catch (on) {
          A(on);
        }
      }
      function at(rt) {
        rt.done ? we(rt.value) : x(rt.value).then(Dt, Fe);
      }
      at((oe = oe.apply(R, F || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: f = "single" } = e, { disable_click: u = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: v = !0 } = e, { max_file_size: p = null } = e, { upload: z } = e, { stream_handler: L } = e, B, y, w;
  const E = Eh(), C = ["image", "video", "audio", "text", "file"], S = (R) => R.startsWith(".") || R.endsWith("/*") ? R : C.includes(R) ? R + "/*" : "." + R;
  function M() {
    t(20, r = !r);
  }
  function N() {
    navigator.clipboard.read().then((R) => o(this, void 0, void 0, function* () {
      for (let F = 0; F < R.length; F++) {
        const Z = R[F].types.find((oe) => oe.startsWith("image/"));
        if (Z) {
          R[F].getType(Z).then((oe) => o(this, void 0, void 0, function* () {
            const x = new File([oe], `clipboard.${Z.replace("image/", "")}`);
            yield U([x]);
          }));
          break;
        }
      }
    }));
  }
  function $() {
    u || b && (t(2, b.value = "", b), b.click());
  }
  function q(R) {
    return o(this, void 0, void 0, function* () {
      yield Rh(), t(14, B = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
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
      return t(15, y = yield Gr(F)), yield q(y);
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
      const Z = Array.from(R.dataTransfer.files).filter((oe) => {
        const x = "." + oe.name.split(".").pop();
        return x && Ih(w, x, oe.type) || (x && Array.isArray(s) ? s.includes(x) : x === s) ? !0 : (E("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield U(Z);
    });
  }
  function G(R) {
    sn.call(this, i, R);
  }
  function X(R) {
    sn.call(this, i, R);
  }
  function P(R) {
    sn.call(this, i, R);
  }
  function J(R) {
    sn.call(this, i, R);
  }
  function le(R) {
    sn.call(this, i, R);
  }
  function me(R) {
    sn.call(this, i, R);
  }
  function I(R) {
    sn.call(this, i, R);
  }
  function ze(R) {
    yh[R ? "unshift" : "push"](() => {
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
    N,
    $,
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
    X,
    P,
    J,
    le,
    me,
    I,
    ze
  ];
}
class Hh extends Ch {
  constructor(e) {
    super(), zh(
      this,
      e,
      jh,
      Yh,
      Lh,
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
  SvelteComponent: c8,
  append: u8,
  attr: f8,
  check_outros: d8,
  create_component: h8,
  destroy_component: m8,
  detach: g8,
  element: b8,
  group_outros: p8,
  init: w8,
  insert: v8,
  mount_component: k8,
  safe_not_equal: C8,
  set_style: y8,
  space: S8,
  toggle_class: q8,
  transition_in: z8,
  transition_out: B8
} = window.__gradio__svelte__internal, { createEventDispatcher: D8 } = window.__gradio__svelte__internal, {
  SvelteComponent: L8,
  assign: M8,
  compute_rest_props: E8,
  detach: R8,
  element: A8,
  exclude_internal_props: W8,
  get_spread_update: X8,
  init: Y8,
  insert: I8,
  noop: j8,
  safe_not_equal: H8,
  set_attributes: T8,
  src_url_equal: F8,
  toggle_class: U8
} = window.__gradio__svelte__internal, {
  SvelteComponent: V8,
  append: O8,
  attr: N8,
  bubble: $8,
  check_outros: P8,
  create_component: K8,
  destroy_component: Z8,
  detach: x8,
  element: G8,
  empty: J8,
  group_outros: Q8,
  init: e7,
  insert: t7,
  listen: n7,
  mount_component: i7,
  safe_not_equal: l7,
  space: o7,
  toggle_class: s7,
  transition_in: a7,
  transition_out: r7
} = window.__gradio__svelte__internal, { createEventDispatcher: _7 } = window.__gradio__svelte__internal, {
  SvelteComponent: Th,
  append: Vi,
  attr: go,
  create_component: Fh,
  destroy_component: Uh,
  detach: Vh,
  element: bo,
  init: Oh,
  insert: Nh,
  listen: $h,
  mount_component: Ph,
  noop: Kh,
  safe_not_equal: Zh,
  set_style: xh,
  space: Gh,
  text: Jh,
  transition_in: Qh,
  transition_out: em
} = window.__gradio__svelte__internal, { createEventDispatcher: tm } = window.__gradio__svelte__internal;
function nm(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new qr({}), {
    c() {
      e = bo("button"), t = bo("div"), n = bo("span"), Fh(l.$$.fragment), o = Gh(), r = Jh(s), go(n, "class", "icon-wrap svelte-fjcd9c"), go(t, "class", "wrap svelte-fjcd9c"), go(e, "class", "svelte-fjcd9c"), xh(e, "height", "100%");
    },
    m(f, u) {
      Nh(f, e, u), Vi(e, t), Vi(t, n), Ph(l, n, null), Vi(t, o), Vi(t, r), a = !0, _ || (c = $h(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: Kh,
    i(f) {
      a || (Qh(l.$$.fragment, f), a = !0);
    },
    o(f) {
      em(l.$$.fragment, f), a = !1;
    },
    d(f) {
      f && Vh(e), Uh(l), _ = !1, c();
    }
  };
}
function im(i) {
  const e = tm();
  return [e, () => e("click")];
}
class lm extends Th {
  constructor(e) {
    super(), Oh(this, e, im, nm, Zh, {});
  }
}
function om() {
  return navigator.mediaDevices.enumerateDevices();
}
function sm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function ga(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (sm(o, e), o));
}
function am(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: rm,
  action_destroyer: _m,
  add_render_callback: cm,
  append: Xt,
  attr: pe,
  binding_callbacks: um,
  check_outros: Si,
  create_component: Jn,
  create_in_transition: fm,
  destroy_component: Qn,
  destroy_each: dm,
  detach: He,
  element: Ke,
  empty: rs,
  ensure_array_like: ba,
  group_outros: qi,
  init: hm,
  insert: Te,
  listen: wl,
  mount_component: ei,
  noop: _s,
  run_all: mm,
  safe_not_equal: gm,
  set_data: r_,
  set_input_value: Ko,
  space: Li,
  stop_propagation: bm,
  text: __,
  toggle_class: Oi,
  transition_in: Se,
  transition_out: Le
} = window.__gradio__svelte__internal, { createEventDispatcher: pm, onMount: wm } = window.__gradio__svelte__internal;
function pa(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function vm(i) {
  let e, t, n, l, o, s, r, a, _, c, f;
  const u = [ym, Cm], d = [];
  function m(b, v) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(i), l = d[n] = u[n](i);
  let h = !/*recording*/
  i[8] && wa(i), g = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && va(i)
  );
  return {
    c() {
      e = Ke("div"), t = Ke("button"), l.c(), s = Li(), h && h.c(), r = Li(), g && g.c(), a = rs(), pe(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), pe(t, "class", "svelte-8hqvb6"), pe(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, v) {
      Te(b, e, v), Xt(e, t), d[n].m(t, null), Xt(e, s), h && h.m(e, null), Te(b, r, v), g && g.m(b, v), Te(b, a, v), _ = !0, c || (f = wl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(b, v) {
      let p = n;
      n = m(b), n === p ? d[n].p(b, v) : (qi(), Le(d[p], 1, 1, () => {
        d[p] = null;
      }), Si(), l = d[n], l ? l.p(b, v) : (l = d[n] = u[n](b), l.c()), Se(l, 1), l.m(t, null)), (!_ || v[0] & /*mode*/
      2 && o !== (o = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && pe(t, "aria-label", o), /*recording*/
      b[8] ? h && (qi(), Le(h, 1, 1, () => {
        h = null;
      }), Si()) : h ? (h.p(b, v), v[0] & /*recording*/
      256 && Se(h, 1)) : (h = wa(b), h.c(), Se(h, 1), h.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, v), v[0] & /*options_open, selected_device*/
      1152 && Se(g, 1)) : (g = va(b), g.c(), Se(g, 1), g.m(a.parentNode, a)) : g && (qi(), Le(g, 1, 1, () => {
        g = null;
      }), Si());
    },
    i(b) {
      _ || (Se(l), Se(h), Se(g), _ = !0);
    },
    o(b) {
      Le(l), Le(h), Le(g), _ = !1;
    },
    d(b) {
      b && (He(e), He(r), He(a)), d[n].d(), h && h.d(), g && g.d(b), c = !1, f();
    }
  };
}
function km(i) {
  let e, t, n, l;
  return t = new lm({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ke("div"), Jn(t.$$.fragment), pe(e, "title", "grant webcam access");
    },
    m(o, s) {
      Te(o, e, s), ei(t, e, null), l = !0;
    },
    p: _s,
    i(o) {
      l || (Se(t.$$.fragment, o), o && (n || cm(() => {
        n = fm(e, _1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && He(e), Qn(t);
    }
  };
}
function Cm(i) {
  let e, t, n;
  return t = new Vu({}), {
    c() {
      e = Ke("div"), Jn(t.$$.fragment), pe(e, "class", "icon svelte-8hqvb6"), pe(e, "title", "capture photo");
    },
    m(l, o) {
      Te(l, e, o), ei(t, e, null), n = !0;
    },
    p: _s,
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && He(e), Qn(t);
    }
  };
}
function ym(i) {
  let e, t, n, l;
  const o = [qm, Sm], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = rs();
    },
    m(a, _) {
      s[e].m(a, _), Te(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (qi(), Le(s[c], 1, 1, () => {
        s[c] = null;
      }), Si(), t = s[e], t || (t = s[e] = o[e](a), t.c()), Se(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Se(t), l = !0);
    },
    o(a) {
      Le(t), l = !1;
    },
    d(a) {
      a && He(n), s[e].d(a);
    }
  };
}
function Sm(i) {
  let e, t, n;
  return t = new Gu({}), {
    c() {
      e = Ke("div"), Jn(t.$$.fragment), pe(e, "class", "icon red svelte-8hqvb6"), pe(e, "title", "start recording");
    },
    m(l, o) {
      Te(l, e, o), ei(t, e, null), n = !0;
    },
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && He(e), Qn(t);
    }
  };
}
function qm(i) {
  let e, t, n;
  return t = new _d({}), {
    c() {
      e = Ke("div"), Jn(t.$$.fragment), pe(e, "class", "icon red svelte-8hqvb6"), pe(e, "title", "stop recording");
    },
    m(l, o) {
      Te(l, e, o), ei(t, e, null), n = !0;
    },
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Le(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && He(e), Qn(t);
    }
  };
}
function wa(i) {
  let e, t, n, l, o;
  return t = new is({}), {
    c() {
      e = Ke("button"), Jn(t.$$.fragment), pe(e, "class", "icon svelte-8hqvb6"), pe(e, "aria-label", "select input source");
    },
    m(s, r) {
      Te(s, e, r), ei(t, e, null), n = !0, l || (o = wl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: _s,
    i(s) {
      n || (Se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Le(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && He(e), Qn(t), l = !1, o();
    }
  };
}
function va(i) {
  let e, t, n, l, o, s, r;
  n = new is({});
  function a(f, u) {
    return (
      /*available_video_devices*/
      f[6].length === 0 ? Bm : zm
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = Ke("select"), t = Ke("button"), Jn(n.$$.fragment), l = Li(), c.c(), pe(t, "class", "inset-icon svelte-8hqvb6"), pe(e, "class", "select-wrap svelte-8hqvb6"), pe(e, "aria-label", "select source");
    },
    m(f, u) {
      Te(f, e, u), Xt(e, t), ei(n, t, null), Xt(t, l), c.m(e, null), o = !0, s || (r = [
        wl(t, "click", bm(
          /*click_handler_2*/
          i[22]
        )),
        _m(cs.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        wl(
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
      f && He(e), Qn(n), c.d(), s = !1, mm(r);
    }
  };
}
function zm(i) {
  let e, t = ba(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ka(pa(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = rs();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Te(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = ba(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = pa(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ka(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && He(e), dm(n, l);
    }
  };
}
function Bm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ke("option"), n = __(t), e.__value = "", Ko(e, e.__value), pe(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      Te(l, e, o), Xt(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && r_(n, t);
    },
    d(l) {
      l && He(e);
    }
  };
}
function ka(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = Ke("option"), n = __(t), l = Li(), e.__value = o = /*device*/
      i[32].deviceId, Ko(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, pe(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Te(r, e, a), Xt(e, n), Xt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && r_(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, Ko(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && He(e);
    }
  };
}
function Dm(i) {
  let e, t, n, l, o, s;
  const r = [km, vm], a = [];
  function _(c, f) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = Ke("div"), t = Ke("video"), n = Li(), o.c(), pe(t, "class", "svelte-8hqvb6"), Oi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Oi(t, "hide", !/*webcam_accessed*/
      i[9]), pe(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, f) {
      Te(c, e, f), Xt(e, t), i[19](t), Xt(e, n), a[l].m(e, null), s = !0;
    },
    p(c, f) {
      (!s || f[0] & /*mirror_webcam*/
      4) && Oi(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || f[0] & /*webcam_accessed*/
      512) && Oi(t, "hide", !/*webcam_accessed*/
      c[9]);
      let u = l;
      l = _(c), l === u ? a[l].p(c, f) : (qi(), Le(a[u], 1, 1, () => {
        a[u] = null;
      }), Si(), o = a[l], o ? o.p(c, f) : (o = a[l] = r[l](c), o.c()), Se(o, 1), o.m(e, null));
    },
    i(c) {
      s || (Se(o), s = !0);
    },
    o(c) {
      Le(o), s = !1;
    },
    d(c) {
      c && He(e), i[19](null), a[l].d();
    }
  };
}
function cs(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Lm(i, e, t) {
  var n = this && this.__awaiter || function(Y, G, X, P) {
    function J(le) {
      return le instanceof X ? le : new X(function(me) {
        me(le);
      });
    }
    return new (X || (X = Promise))(function(le, me) {
      function I(F) {
        try {
          R(P.next(F));
        } catch (Z) {
          me(Z);
        }
      }
      function ze(F) {
        try {
          R(P.throw(F));
        } catch (Z) {
          me(Z);
        }
      }
      function R(F) {
        F.done ? le(F.value) : J(F.value).then(I, ze);
      }
      R((P = P.apply(Y, G || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: f = "image" } = e, { mirror_webcam: u } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = pm();
  wm(() => r = document.createElement("canvas"));
  const b = (Y) => n(void 0, void 0, void 0, function* () {
    const X = Y.target.value;
    yield ga(d, l, X).then((P) => n(void 0, void 0, void 0, function* () {
      B = P, t(7, s = o.find((J) => J.deviceId === X) || null), t(10, M = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        ga(d, l).then((Y) => n(this, void 0, void 0, function* () {
          t(9, C = !0), t(6, o = yield om()), B = Y;
        })).then(() => am(o)).then((Y) => {
          t(6, o = Y);
          const G = B.getTracks().map((X) => {
            var P;
            return (P = X.getSettings()) === null || P === void 0 ? void 0 : P.deviceId;
          })[0];
          t(7, s = G && Y.find((X) => X.deviceId === G) || o[0]);
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
      G.onload = function(X) {
        return n(this, void 0, void 0, function* () {
          var P;
          if (X.target) {
            let J = new File([Y], "sample." + y.substring(6));
            const le = yield Gr([J]);
            let me = ((P = yield h(le, c)) === null || P === void 0 ? void 0 : P.filter(Boolean))[0];
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
  function N(Y) {
    Y.preventDefault(), Y.stopPropagation(), t(10, M = !1);
  }
  function $(Y) {
    um[Y ? "unshift" : "push"](() => {
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
    cs,
    l,
    o,
    s,
    z,
    C,
    M,
    b,
    v,
    S,
    N,
    _,
    c,
    d,
    h,
    $,
    q,
    U,
    j
  ];
}
class Mm extends rm {
  constructor(e) {
    super(), hm(
      this,
      e,
      Lm,
      Dm,
      gm,
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
    return cs;
  }
}
const {
  SvelteComponent: c7,
  attr: u7,
  create_component: f7,
  destroy_component: d7,
  detach: h7,
  element: m7,
  init: g7,
  insert: b7,
  mount_component: p7,
  noop: w7,
  safe_not_equal: v7,
  transition_in: k7,
  transition_out: C7
} = window.__gradio__svelte__internal, { createEventDispatcher: y7 } = window.__gradio__svelte__internal, {
  SvelteComponent: S7,
  add_flush_callback: q7,
  append: z7,
  attr: B7,
  bind: D7,
  binding_callbacks: L7,
  bubble: M7,
  check_outros: E7,
  create_component: R7,
  create_slot: A7,
  destroy_component: W7,
  detach: X7,
  element: Y7,
  empty: I7,
  get_all_dirty_from_scope: j7,
  get_slot_changes: H7,
  group_outros: T7,
  init: F7,
  insert: U7,
  listen: V7,
  mount_component: O7,
  noop: N7,
  safe_not_equal: $7,
  space: P7,
  toggle_class: K7,
  transition_in: Z7,
  transition_out: x7,
  update_slot_base: G7
} = window.__gradio__svelte__internal, { createEventDispatcher: J7, tick: Q7 } = window.__gradio__svelte__internal, {
  SvelteComponent: e9,
  attr: t9,
  check_outros: n9,
  create_component: i9,
  destroy_component: l9,
  detach: o9,
  element: s9,
  group_outros: a9,
  init: r9,
  insert: _9,
  mount_component: c9,
  safe_not_equal: u9,
  toggle_class: f9,
  transition_in: d9,
  transition_out: h9
} = window.__gradio__svelte__internal, {
  SvelteComponent: m9,
  add_flush_callback: g9,
  assign: b9,
  bind: p9,
  binding_callbacks: w9,
  check_outros: v9,
  create_component: k9,
  destroy_component: C9,
  detach: y9,
  empty: S9,
  flush: q9,
  get_spread_object: z9,
  get_spread_update: B9,
  group_outros: D9,
  init: L9,
  insert: M9,
  mount_component: E9,
  safe_not_equal: R9,
  space: A9,
  transition_in: W9,
  transition_out: X9
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y9,
  append: I9,
  attr: j9,
  detach: H9,
  init: T9,
  insert: F9,
  noop: U9,
  safe_not_equal: V9,
  set_style: O9,
  svg_element: N9
} = window.__gradio__svelte__internal, {
  SvelteComponent: Em,
  append: $t,
  attr: T,
  detach: Rm,
  init: Am,
  insert: Wm,
  noop: po,
  safe_not_equal: Xm,
  set_style: Pt,
  svg_element: Rt
} = window.__gradio__svelte__internal;
function Ym(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = Rt("svg"), t = Rt("rect"), n = Rt("rect"), l = Rt("rect"), o = Rt("rect"), s = Rt("line"), r = Rt("line"), a = Rt("line"), _ = Rt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(l, "x", "2"), T(l, "y", "17"), T(l, "width", "5"), T(l, "height", "5"), T(l, "rx", "1"), T(l, "ry", "1"), T(l, "stroke-width", "2"), T(l, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), Pt(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Pt(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Pt(a, "stroke-width", "2px"), T(_, "x1", "19.5"), T(_, "y1", "8"), T(_, "x2", "19.5"), T(_, "y2", "16"), Pt(_, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Pt(e, "fill-rule", "evenodd"), Pt(e, "clip-rule", "evenodd"), Pt(e, "stroke-linecap", "round"), Pt(e, "stroke-linejoin", "round");
    },
    m(c, f) {
      Wm(c, e, f), $t(e, t), $t(e, n), $t(e, l), $t(e, o), $t(e, s), $t(e, r), $t(e, a), $t(e, _);
    },
    p: po,
    i: po,
    o: po,
    d(c) {
      c && Rm(e);
    }
  };
}
class Im extends Em {
  constructor(e) {
    super(), Am(this, e, null, Ym, Xm, {});
  }
}
const {
  SvelteComponent: jm,
  append: Hm,
  attr: ht,
  detach: Tm,
  init: Fm,
  insert: Um,
  noop: wo,
  safe_not_equal: Vm,
  set_style: Ni,
  svg_element: Ca
} = window.__gradio__svelte__internal;
function Om(i) {
  let e, t;
  return {
    c() {
      e = Ca("svg"), t = Ca("path"), ht(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), ht(t, "fill", "none"), ht(t, "stroke-width", "2"), ht(e, "width", "100%"), ht(e, "height", "100%"), ht(e, "viewBox", "0 0 24 24"), ht(e, "version", "1.1"), ht(e, "xmlns", "http://www.w3.org/2000/svg"), ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ht(e, "xml:space", "preserve"), ht(e, "stroke", "currentColor"), Ni(e, "fill-rule", "evenodd"), Ni(e, "clip-rule", "evenodd"), Ni(e, "stroke-linecap", "round"), Ni(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Um(n, e, l), Hm(e, t);
    },
    p: wo,
    i: wo,
    o: wo,
    d(n) {
      n && Tm(e);
    }
  };
}
class Nm extends jm {
  constructor(e) {
    super(), Fm(this, e, null, Om, Vm, {});
  }
}
const {
  SvelteComponent: $m,
  append: Pm,
  attr: mt,
  detach: Km,
  init: Zm,
  insert: xm,
  noop: vo,
  safe_not_equal: Gm,
  set_style: $i,
  svg_element: ya
} = window.__gradio__svelte__internal;
function Jm(i) {
  let e, t;
  return {
    c() {
      e = ya("svg"), t = ya("path"), mt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), mt(t, "fill", "none"), mt(t, "stroke-width", "2"), mt(e, "width", "100%"), mt(e, "height", "100%"), mt(e, "viewBox", "0 0 24 24"), mt(e, "version", "1.1"), mt(e, "xmlns", "http://www.w3.org/2000/svg"), mt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), mt(e, "xml:space", "preserve"), mt(e, "stroke", "currentColor"), $i(e, "fill-rule", "evenodd"), $i(e, "clip-rule", "evenodd"), $i(e, "stroke-linecap", "round"), $i(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      xm(n, e, l), Pm(e, t);
    },
    p: vo,
    i: vo,
    o: vo,
    d(n) {
      n && Km(e);
    }
  };
}
class Qm extends $m {
  constructor(e) {
    super(), Zm(this, e, null, Jm, Gm, {});
  }
}
const {
  SvelteComponent: e0,
  append: Sa,
  attr: At,
  detach: t0,
  init: n0,
  insert: i0,
  noop: ko,
  safe_not_equal: l0,
  set_style: Pi,
  svg_element: Co
} = window.__gradio__svelte__internal;
function o0(i) {
  let e, t, n;
  return {
    c() {
      e = Co("svg"), t = Co("path"), n = Co("path"), At(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), At(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), At(e, "width", "100%"), At(e, "height", "100%"), At(e, "viewBox", "0 0 24 24"), At(e, "xmlns", "http://www.w3.org/2000/svg"), At(e, "fill", "none"), At(e, "stroke", "currentColor"), At(e, "stroke-width", "2"), Pi(e, "fill-rule", "evenodd"), Pi(e, "clip-rule", "evenodd"), Pi(e, "stroke-linecap", "round"), Pi(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      i0(l, e, o), Sa(e, t), Sa(e, n);
    },
    p: ko,
    i: ko,
    o: ko,
    d(l) {
      l && t0(e);
    }
  };
}
class s0 extends e0 {
  constructor(e) {
    super(), n0(this, e, null, o0, l0, {});
  }
}
const {
  SvelteComponent: a0,
  append: r0,
  attr: Kt,
  detach: _0,
  init: c0,
  insert: u0,
  noop: yo,
  safe_not_equal: f0,
  set_style: Ki,
  svg_element: qa
} = window.__gradio__svelte__internal;
function d0(i) {
  let e, t;
  return {
    c() {
      e = qa("svg"), t = qa("path"), Kt(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Kt(e, "width", "100%"), Kt(e, "height", "100%"), Kt(e, "viewBox", "0 0 24 24"), Kt(e, "fill", "none"), Kt(e, "stroke", "currentColor"), Kt(e, "stroke-width", "2"), Ki(e, "fill-rule", "evenodd"), Ki(e, "clip-rule", "evenodd"), Ki(e, "stroke-linecap", "round"), Ki(e, "stroke-linejoin", "round"), Kt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      u0(n, e, l), r0(e, t);
    },
    p: yo,
    i: yo,
    o: yo,
    d(n) {
      n && _0(e);
    }
  };
}
class h0 extends a0 {
  constructor(e) {
    super(), c0(this, e, null, d0, f0, {});
  }
}
const {
  SvelteComponent: m0,
  append: g0,
  attr: Zt,
  detach: b0,
  init: p0,
  insert: w0,
  noop: So,
  safe_not_equal: v0,
  set_style: Zi,
  svg_element: za
} = window.__gradio__svelte__internal;
function k0(i) {
  let e, t;
  return {
    c() {
      e = za("svg"), t = za("path"), Zt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Zt(e, "width", "100%"), Zt(e, "height", "100%"), Zt(e, "viewBox", "0 0 24 24"), Zt(e, "fill", "none"), Zt(e, "stroke", "currentColor"), Zt(e, "stroke-width", "2"), Zi(e, "fill-rule", "evenodd"), Zi(e, "clip-rule", "evenodd"), Zi(e, "stroke-linecap", "round"), Zi(e, "stroke-linejoin", "round"), Zt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      w0(n, e, l), g0(e, t);
    },
    p: So,
    i: So,
    o: So,
    d(n) {
      n && b0(e);
    }
  };
}
class C0 extends m0 {
  constructor(e) {
    super(), p0(this, e, null, k0, v0, {});
  }
}
const {
  SvelteComponent: y0,
  append: xi,
  attr: ce,
  detach: S0,
  init: q0,
  insert: z0,
  noop: qo,
  safe_not_equal: B0,
  set_style: Qe,
  svg_element: fi
} = window.__gradio__svelte__internal;
function D0(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = fi("svg"), t = fi("circle"), n = fi("line"), l = fi("line"), o = fi("line"), ce(t, "cx", "9"), ce(t, "cy", "9"), ce(t, "r", "6"), Qe(t, "fill", "none"), Qe(t, "stroke-width", "2px"), ce(n, "x1", "13"), ce(n, "y1", "13"), ce(n, "x2", "20"), ce(n, "y2", "20"), Qe(n, "fill", "none"), Qe(n, "stroke-width", "2px"), ce(l, "x1", "6"), ce(l, "y1", "9"), ce(l, "x2", "12"), ce(l, "y2", "9"), Qe(l, "fill", "none"), Qe(l, "stroke-width", "2px"), ce(o, "x1", "9"), ce(o, "y1", "6"), ce(o, "x2", "9"), ce(o, "y2", "12"), Qe(o, "fill", "none"), Qe(o, "stroke-width", "2px"), ce(e, "width", "100%"), ce(e, "height", "100%"), ce(e, "viewBox", "0 0 24 24"), ce(e, "version", "1.1"), ce(e, "xmlns", "http://www.w3.org/2000/svg"), ce(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ce(e, "xml:space", "preserve"), ce(e, "stroke", "currentColor"), Qe(e, "fill-rule", "evenodd"), Qe(e, "clip-rule", "evenodd"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      z0(s, e, r), xi(e, t), xi(e, n), xi(e, l), xi(e, o);
    },
    p: qo,
    i: qo,
    o: qo,
    d(s) {
      s && S0(e);
    }
  };
}
class L0 extends y0 {
  constructor(e) {
    super(), q0(this, e, null, D0, B0, {});
  }
}
const {
  SvelteComponent: M0,
  append: zo,
  attr: ve,
  detach: E0,
  init: R0,
  insert: A0,
  noop: Bo,
  safe_not_equal: W0,
  set_style: kt,
  svg_element: Gi
} = window.__gradio__svelte__internal;
function X0(i) {
  let e, t, n, l;
  return {
    c() {
      e = Gi("svg"), t = Gi("circle"), n = Gi("line"), l = Gi("line"), ve(t, "cx", "9"), ve(t, "cy", "9"), ve(t, "r", "6"), kt(t, "fill", "none"), kt(t, "stroke-width", "2px"), ve(n, "x1", "13"), ve(n, "y1", "13"), ve(n, "x2", "20"), ve(n, "y2", "20"), kt(n, "fill", "none"), kt(n, "stroke-width", "2px"), ve(l, "x1", "6"), ve(l, "y1", "9"), ve(l, "x2", "12"), ve(l, "y2", "9"), kt(l, "fill", "none"), kt(l, "stroke-width", "2px"), ve(e, "width", "100%"), ve(e, "height", "100%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "version", "1.1"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ve(e, "xml:space", "preserve"), ve(e, "stroke", "currentColor"), kt(e, "fill-rule", "evenodd"), kt(e, "clip-rule", "evenodd"), kt(e, "stroke-linecap", "round"), kt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      A0(o, e, s), zo(e, t), zo(e, n), zo(e, l);
    },
    p: Bo,
    i: Bo,
    o: Bo,
    d(o) {
      o && E0(e);
    }
  };
}
class Y0 extends M0 {
  constructor(e) {
    super(), R0(this, e, null, X0, W0, {});
  }
}
const {
  SvelteComponent: I0,
  append: Do,
  attr: We,
  detach: j0,
  init: H0,
  insert: T0,
  noop: Lo,
  safe_not_equal: F0,
  set_style: Ct,
  svg_element: Ji
} = window.__gradio__svelte__internal;
function U0(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ji("svg"), t = Ji("rect"), n = Ji("path"), l = Ji("path"), We(t, "x", "3"), We(t, "y", "3"), We(t, "width", "18"), We(t, "height", "18"), Ct(t, "fill", "none"), Ct(t, "stroke-width", "2px"), We(n, "d", "M 7 7 L 10 10 M 7 10 L 10 7"), Ct(n, "fill", "none"), Ct(n, "stroke-width", "2px"), We(l, "d", "M 14 17 L 17 14 M 14 14 L 17 17"), Ct(l, "fill", "none"), Ct(l, "stroke-width", "2px"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "version", "1.1"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), We(e, "xml:space", "preserve"), We(e, "stroke", "currentColor"), Ct(e, "fill-rule", "evenodd"), Ct(e, "clip-rule", "evenodd"), Ct(e, "stroke-linecap", "round"), Ct(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      T0(o, e, s), Do(e, t), Do(e, n), Do(e, l);
    },
    p: Lo,
    i: Lo,
    o: Lo,
    d(o) {
      o && j0(e);
    }
  };
}
class V0 extends I0 {
  constructor(e) {
    super(), H0(this, e, null, U0, F0, {});
  }
}
const {
  SvelteComponent: O0,
  append: Ba,
  attr: Mo,
  bubble: Da,
  create_component: N0,
  destroy_component: $0,
  detach: c_,
  element: La,
  init: P0,
  insert: u_,
  listen: Eo,
  mount_component: K0,
  run_all: Z0,
  safe_not_equal: x0,
  set_data: G0,
  set_input_value: Ma,
  space: J0,
  text: Q0,
  transition_in: eg,
  transition_out: tg
} = window.__gradio__svelte__internal, { createEventDispatcher: ng, afterUpdate: ig } = window.__gradio__svelte__internal;
function lg(i) {
  let e;
  return {
    c() {
      e = Q0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      u_(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && G0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && c_(e);
    }
  };
}
function og(i) {
  let e, t, n, l, o, s, r;
  return t = new pr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [lg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = La("label"), N0(t.$$.fragment), n = J0(), l = La("input"), Mo(l, "type", "color"), l.disabled = /*disabled*/
      i[3], Mo(l, "class", "svelte-16l8u73"), Mo(e, "class", "block");
    },
    m(a, _) {
      u_(a, e, _), K0(t, e, null), Ba(e, n), Ba(e, l), Ma(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        Eo(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Eo(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Eo(
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
      1 && Ma(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (eg(t.$$.fragment, a), o = !0);
    },
    o(a) {
      tg(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && c_(e), $0(t), s = !1, Z0(r);
    }
  };
}
function sg(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = ng();
  function c() {
    _("change", n), l || _("input");
  }
  ig(() => {
    t(5, l = !1);
  });
  function f(m) {
    Da.call(this, i, m);
  }
  function u(m) {
    Da.call(this, i, m);
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
class ag extends O0 {
  constructor(e) {
    super(), P0(this, e, sg, og, x0, {
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
  SvelteComponent: $9,
  append: P9,
  attr: K9,
  component_subscribe: Z9,
  detach: x9,
  element: G9,
  init: J9,
  insert: Q9,
  noop: eC,
  safe_not_equal: tC,
  set_style: nC,
  svg_element: iC,
  toggle_class: lC
} = window.__gradio__svelte__internal, { onMount: oC } = window.__gradio__svelte__internal, {
  SvelteComponent: sC,
  append: aC,
  attr: rC,
  binding_callbacks: _C,
  check_outros: cC,
  create_component: uC,
  create_slot: fC,
  destroy_component: dC,
  destroy_each: hC,
  detach: mC,
  element: gC,
  empty: bC,
  ensure_array_like: pC,
  get_all_dirty_from_scope: wC,
  get_slot_changes: vC,
  group_outros: kC,
  init: CC,
  insert: yC,
  mount_component: SC,
  noop: qC,
  safe_not_equal: zC,
  set_data: BC,
  set_style: DC,
  space: LC,
  text: MC,
  toggle_class: EC,
  transition_in: RC,
  transition_out: AC,
  update_slot_base: WC
} = window.__gradio__svelte__internal, { tick: XC } = window.__gradio__svelte__internal, { onDestroy: YC } = window.__gradio__svelte__internal, {
  SvelteComponent: IC,
  add_render_callback: jC,
  append: HC,
  attr: TC,
  bubble: FC,
  check_outros: UC,
  create_component: VC,
  create_in_transition: OC,
  create_out_transition: NC,
  destroy_component: $C,
  detach: PC,
  element: KC,
  group_outros: ZC,
  init: xC,
  insert: GC,
  listen: JC,
  mount_component: QC,
  run_all: ey,
  safe_not_equal: ty,
  set_data: ny,
  space: iy,
  stop_propagation: ly,
  text: oy,
  transition_in: sy,
  transition_out: ay
} = window.__gradio__svelte__internal, { createEventDispatcher: ry, onMount: _y } = window.__gradio__svelte__internal, {
  SvelteComponent: cy,
  append: uy,
  attr: fy,
  bubble: dy,
  check_outros: hy,
  create_animation: my,
  create_component: gy,
  destroy_component: by,
  detach: py,
  element: wy,
  ensure_array_like: vy,
  fix_and_outro_and_destroy_block: ky,
  fix_position: Cy,
  group_outros: yy,
  init: Sy,
  insert: qy,
  mount_component: zy,
  noop: By,
  safe_not_equal: Dy,
  set_style: Ly,
  space: My,
  transition_in: Ey,
  transition_out: Ry,
  update_keyed_each: Ay
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wy,
  attr: Xy,
  detach: Yy,
  element: Iy,
  init: jy,
  insert: Hy,
  noop: Ty,
  safe_not_equal: Fy,
  set_style: Uy,
  toggle_class: Vy
} = window.__gradio__svelte__internal, {
  SvelteComponent: Oy,
  add_flush_callback: Ny,
  assign: $y,
  bind: Py,
  binding_callbacks: Ky,
  create_component: Zy,
  destroy_component: xy,
  detach: Gy,
  flush: Jy,
  get_spread_object: Qy,
  get_spread_update: eS,
  init: tS,
  insert: nS,
  mount_component: iS,
  safe_not_equal: lS,
  space: oS,
  transition_in: sS,
  transition_out: aS
} = window.__gradio__svelte__internal;
var f_ = (i) => {
  throw TypeError(i);
}, d_ = (i, e, t) => e.has(i) || f_("Cannot " + t), di = (i, e, t) => (d_(i, e, "read from private field"), e.get(i)), rg = (i, e, t) => e.has(i) ? f_("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), _g = (i, e, t, n) => (d_(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var Jt;
class rS extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = di(this, Jt) + t; ; ) {
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
        _g(this, Jt, t);
      },
      flush: (t) => {
        if (di(this, Jt) === "")
          return;
        const n = e.allowCR && di(this, Jt).endsWith("\r") ? di(this, Jt).slice(0, -1) : di(this, Jt);
        t.enqueue(n);
      }
    }), rg(this, Jt, "");
  }
}
Jt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: cg,
  append: h_,
  attr: ue,
  bubble: ug,
  check_outros: fg,
  create_slot: m_,
  detach: Ri,
  element: Xl,
  empty: dg,
  get_all_dirty_from_scope: g_,
  get_slot_changes: b_,
  group_outros: hg,
  init: mg,
  insert: Ai,
  listen: gg,
  safe_not_equal: bg,
  set_style: Ie,
  space: p_,
  src_url_equal: vl,
  toggle_class: Vn,
  transition_in: kl,
  transition_out: Cl,
  update_slot_base: w_
} = window.__gradio__svelte__internal;
function pg(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Ea(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = m_(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Xl("button"), r && r.c(), t = p_(), _ && _.c(), ue(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ue(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Vn(e, "hidden", !/*visible*/
      i[2]), Ie(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ie(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ie(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, f) {
      Ai(c, e, f), r && r.m(e, null), h_(e, t), _ && _.m(e, null), l = !0, o || (s = gg(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, f) {
      /*icon*/
      c[7] ? r ? r.p(c, f) : (r = Ea(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || f & /*$$scope*/
      2048) && w_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? b_(
          a,
          /*$$scope*/
          c[11],
          f,
          null
        ) : g_(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && ue(e, "class", n), (!l || f & /*elem_id*/
      1) && ue(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || f & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || f & /*size, variant, elem_classes, visible*/
      30) && Vn(e, "hidden", !/*visible*/
      c[2]), f & /*scale*/
      512 && Ie(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), f & /*scale*/
      512 && Ie(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Ie(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (kl(_, c), l = !0);
    },
    o(c) {
      Cl(_, c), l = !1;
    },
    d(c) {
      c && Ri(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function wg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Ra(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = m_(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Xl("a"), o && o.c(), t = p_(), r && r.c(), ue(
        e,
        "href",
        /*link*/
        i[6]
      ), ue(e, "rel", "noopener noreferrer"), ue(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), ue(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ue(
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
      ), Ie(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ie(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Ie(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ie(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, _) {
      Ai(a, e, _), o && o.m(e, null), h_(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = Ra(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && w_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? b_(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : g_(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && ue(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && ue(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ue(e, "class", n), (!l || _ & /*elem_id*/
      1) && ue(
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
      512 && Ie(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && Ie(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && Ie(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && Ie(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (kl(r, a), l = !0);
    },
    o(a) {
      Cl(r, a), l = !1;
    },
    d(a) {
      a && Ri(e), o && o.d(), r && r.d(a);
    }
  };
}
function Ea(i) {
  let e, t, n;
  return {
    c() {
      e = Xl("img"), ue(e, "class", "button-icon svelte-8huxfn"), vl(e.src, t = /*icon*/
      i[7].url) || ue(e, "src", t), ue(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ai(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !vl(e.src, t = /*icon*/
      l[7].url) && ue(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ue(e, "alt", n);
    },
    d(l) {
      l && Ri(e);
    }
  };
}
function Ra(i) {
  let e, t, n;
  return {
    c() {
      e = Xl("img"), ue(e, "class", "button-icon svelte-8huxfn"), vl(e.src, t = /*icon*/
      i[7].url) || ue(e, "src", t), ue(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ai(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !vl(e.src, t = /*icon*/
      l[7].url) && ue(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ue(e, "alt", n);
    },
    d(l) {
      l && Ri(e);
    }
  };
}
function vg(i) {
  let e, t, n, l;
  const o = [wg, pg], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = dg();
    },
    m(a, _) {
      s[e].m(a, _), Ai(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (hg(), Cl(s[c], 1, 1, () => {
        s[c] = null;
      }), fg(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), kl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (kl(t), l = !0);
    },
    o(a) {
      Cl(t), l = !1;
    },
    d(a) {
      a && Ri(n), s[e].d(a);
    }
  };
}
function kg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: f = null } = e, { icon: u = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(b) {
    ug.call(this, i, b);
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
class Zo extends cg {
  constructor(e) {
    super(), mg(this, e, kg, vg, bg, {
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
  SvelteComponent: _S,
  create_component: cS,
  destroy_component: uS,
  detach: fS,
  init: dS,
  insert: hS,
  mount_component: mS,
  safe_not_equal: gS,
  set_data: bS,
  text: pS,
  transition_in: wS,
  transition_out: vS
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cg,
  add_render_callback: v_,
  append: Qi,
  attr: Ne,
  binding_callbacks: Aa,
  check_outros: yg,
  create_bidirectional_transition: Wa,
  destroy_each: Sg,
  detach: zi,
  element: yl,
  empty: qg,
  ensure_array_like: Xa,
  group_outros: zg,
  init: Bg,
  insert: Bi,
  listen: xo,
  prevent_default: Dg,
  run_all: Lg,
  safe_not_equal: Mg,
  set_data: Eg,
  set_style: Yn,
  space: Go,
  text: Rg,
  toggle_class: yt,
  transition_in: Ro,
  transition_out: Ya
} = window.__gradio__svelte__internal, { createEventDispatcher: Ag } = window.__gradio__svelte__internal;
function Ia(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function ja(i) {
  let e, t, n, l, o, s = Xa(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Ha(Ia(i, s, a));
  return {
    c() {
      e = yl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ne(e, "class", "options svelte-yuohum"), Ne(e, "role", "listbox"), Yn(
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
      Bi(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = xo(e, "mousedown", Dg(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Xa(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Ia(a, s, c);
          r[c] ? r[c].p(f, _) : (r[c] = Ha(f), r[c].c(), r[c].m(e, null));
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
      n || (a && v_(() => {
        n && (t || (t = Wa(e, Us, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Wa(e, Us, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && zi(e), Sg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Ha(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = yl("li"), t = yl("span"), t.textContent = "✓", n = Go(), o = Rg(l), s = Go(), Ne(t, "class", "inner-item svelte-yuohum"), yt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Ne(e, "class", "item svelte-yuohum"), Ne(e, "data-index", r = /*index*/
      i[26]), Ne(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Ne(e, "data-testid", "dropdown-option"), Ne(e, "role", "option"), Ne(e, "aria-selected", _ = /*selected_indices*/
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
      Bi(c, e, f), Qi(e, t), Qi(e, n), Qi(e, o), Qi(e, s);
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
      ][0] + "") && Eg(o, l), f & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Ne(e, "data-index", r), f & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Ne(e, "aria-label", a), f & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Ne(e, "aria-selected", _), f & /*selected_indices, filtered_indices*/
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
      c && zi(e);
    }
  };
}
function Wg(i) {
  let e, t, n, l, o;
  v_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && ja(i)
  );
  return {
    c() {
      e = yl("div"), t = Go(), s && s.c(), n = qg(), Ne(e, "class", "reference");
    },
    m(r, a) {
      Bi(r, e, a), i[20](e), Bi(r, t, a), s && s.m(r, a), Bi(r, n, a), l || (o = [
        xo(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        xo(
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
      12 && Ro(s, 1)) : (s = ja(r), s.c(), Ro(s, 1), s.m(n.parentNode, n)) : s && (zg(), Ya(s, 1, 1, () => {
        s = null;
      }), yg());
    },
    i(r) {
      Ro(s);
    },
    o(r) {
      Ya(s);
    },
    d(r) {
      r && (zi(e), zi(t), zi(n)), i[20](null), s && s.d(r), l = !1, Lg(o);
    }
  };
}
function Xg(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, f, u, d, m, h, g, b, v, p;
  function z() {
    const { top: M, bottom: N } = h.getBoundingClientRect();
    t(16, f = M), t(17, u = p - N);
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
    Aa[M ? "unshift" : "push"](() => {
      h = M, t(6, h);
    });
  }
  const C = (M) => y("change", M);
  function S(M) {
    Aa[M ? "unshift" : "push"](() => {
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
          let N = g.querySelectorAll("li");
          for (const $ of Array.from(N))
            if ($.getAttribute("data-index") === _[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, $.offsetTop);
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
class Yg extends Cg {
  constructor(e) {
    super(), Bg(this, e, Xg, Wg, Mg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Ig(i, e) {
  return (i % e + e) % e;
}
function Ta(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function jg(i, e, t) {
  i("change", e), t || i("input");
}
function Hg(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[Ig(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: kS,
  append: CS,
  attr: yS,
  binding_callbacks: SS,
  check_outros: qS,
  create_component: zS,
  destroy_component: BS,
  destroy_each: DS,
  detach: LS,
  element: MS,
  ensure_array_like: ES,
  group_outros: RS,
  init: AS,
  insert: WS,
  listen: XS,
  mount_component: YS,
  prevent_default: IS,
  run_all: jS,
  safe_not_equal: HS,
  set_data: TS,
  set_input_value: FS,
  space: US,
  text: VS,
  toggle_class: OS,
  transition_in: NS,
  transition_out: $S
} = window.__gradio__svelte__internal, { afterUpdate: PS, createEventDispatcher: KS } = window.__gradio__svelte__internal, {
  SvelteComponent: Tg,
  append: _n,
  attr: Oe,
  binding_callbacks: Fg,
  check_outros: Ug,
  create_component: Jo,
  destroy_component: Qo,
  detach: us,
  element: Hn,
  group_outros: Vg,
  init: Og,
  insert: fs,
  listen: hi,
  mount_component: es,
  run_all: Ng,
  safe_not_equal: $g,
  set_data: Pg,
  set_input_value: Fa,
  space: Ao,
  text: Kg,
  toggle_class: In,
  transition_in: Tn,
  transition_out: Ci
} = window.__gradio__svelte__internal, { onMount: Zg } = window.__gradio__svelte__internal, { createEventDispatcher: xg, afterUpdate: Gg } = window.__gradio__svelte__internal;
function Jg(i) {
  let e;
  return {
    c() {
      e = Kg(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      fs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Pg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && us(e);
    }
  };
}
function Ua(i) {
  let e, t, n;
  return t = new is({}), {
    c() {
      e = Hn("div"), Jo(t.$$.fragment), Oe(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      fs(l, e, o), es(t, e, null), n = !0;
    },
    i(l) {
      n || (Tn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ci(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && us(e), Qo(t);
    }
  };
}
function Qg(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m;
  t = new pr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Jg] },
      $$scope: { ctx: i }
    }
  });
  let h = !/*disabled*/
  i[3] && Ua();
  return f = new Yg({
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
      e = Hn("div"), Jo(t.$$.fragment), n = Ao(), l = Hn("div"), o = Hn("div"), s = Hn("div"), r = Hn("input"), _ = Ao(), h && h.c(), c = Ao(), Jo(f.$$.fragment), Oe(r, "role", "listbox"), Oe(r, "aria-controls", "dropdown-options"), Oe(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Oe(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Oe(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Oe(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], In(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Oe(s, "class", "secondary-wrap svelte-1m1zvyj"), Oe(o, "class", "wrap-inner svelte-1m1zvyj"), In(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), Oe(l, "class", "wrap svelte-1m1zvyj"), Oe(e, "class", "svelte-1m1zvyj"), In(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(g, b) {
      fs(g, e, b), es(t, e, null), _n(e, n), _n(e, l), _n(l, o), _n(o, s), _n(s, r), Fa(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), _n(s, _), h && h.m(s, null), _n(l, c), es(f, l, null), u = !0, d || (m = [
        hi(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        hi(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        hi(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        hi(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        hi(
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
      4096) && Oe(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!u || b[0] & /*label*/
      1) && Oe(
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
      g[9] && Fa(
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
      g[3] ? h && (Vg(), Ci(h, 1, 1, () => {
        h = null;
      }), Ug()) : h ? b[0] & /*disabled*/
      8 && Tn(h, 1) : (h = Ua(), h.c(), Tn(h, 1), h.m(s, null)), (!u || b[0] & /*show_options*/
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
      Ci(t.$$.fragment, g), Ci(h), Ci(f.$$.fragment, g), u = !1;
    },
    d(g) {
      g && us(e), Qo(t), i[29](null), h && h.d(), Qo(f), d = !1, Ng(m);
    }
  };
}
function eb(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: f } = e, { container: u = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, b, v, p = "", z = "", L = !1, B = [], y = null, w = null, E;
  const C = xg();
  o ? (E = a.map((X) => X[1]).indexOf(o), w = E, w === -1 ? (s = o, w = null) : ([p, s] = a[w], z = p), M()) : a.length > 0 && (E = 0, w = 0, [p, o] = a[w], s = o, z = p);
  function S() {
    t(13, b = a.map((X) => X[0])), t(24, v = a.map((X) => X[1]));
  }
  function M() {
    S(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, w = null)) : v.includes(o) ? (t(9, p = b[v.indexOf(o)]), t(11, w = v.indexOf(o))) : d ? (t(9, p = o), t(11, w = null)) : (t(9, p = ""), t(11, w = null)), t(27, E = w);
  }
  function N(X) {
    if (t(11, w = parseInt(X.detail.target.dataset.index)), isNaN(w)) {
      t(11, w = null);
      return;
    }
    t(12, g = !1), t(14, y = null), h.blur();
  }
  function $(X) {
    t(10, B = a.map((P, J) => J)), t(12, g = !0), C("focus");
  }
  function q() {
    d ? t(20, o = p) : t(9, p = b[v.indexOf(o)]), t(12, g = !1), t(14, y = null), C("blur");
  }
  function U(X) {
    t(12, [g, y] = Hg(X, y, B), g, (t(14, y), t(2, a), t(23, _), t(6, d), t(9, p), t(10, B), t(8, h), t(25, z), t(11, w), t(27, E), t(26, L), t(24, v))), X.key === "Enter" && (y !== null ? (t(11, w = y), t(12, g = !1), h.blur(), t(14, y = null)) : b.includes(p) ? (t(11, w = b.indexOf(p)), t(12, g = !1), t(14, y = null), h.blur()) : d && (t(20, o = p), t(11, w = null), t(12, g = !1), t(14, y = null), h.blur()), C("enter", o));
  }
  Gg(() => {
    t(21, r = !1), t(26, L = !0);
  }), Zg(() => {
    h.focus();
  });
  function j() {
    p = this.value, t(9, p), t(11, w), t(27, E), t(26, L), t(2, a), t(24, v);
  }
  function Y(X) {
    Fg[X ? "unshift" : "push"](() => {
      h = X, t(8, h);
    });
  }
  const G = (X) => C("key_up", { key: X.key, input_value: p });
  return i.$$set = (X) => {
    "label" in X && t(0, n = X.label), "info" in X && t(1, l = X.info), "value" in X && t(20, o = X.value), "value_is_output" in X && t(21, r = X.value_is_output), "choices" in X && t(2, a = X.choices), "disabled" in X && t(3, c = X.disabled), "show_label" in X && t(4, f = X.show_label), "container" in X && t(5, u = X.container), "allow_custom_value" in X && t(6, d = X.allow_custom_value), "filterable" in X && t(7, m = X.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && w !== E && w !== null && L && (t(9, [p, o] = a[w], p, (t(20, o), t(11, w), t(27, E), t(26, L), t(2, a), t(24, v))), t(27, E = w), C("select", {
      index: w,
      value: v[w],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (M(), jg(C, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && S(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (d || M(), t(23, _ = a), t(10, B = Ta(a, p)), !d && B.length > 0 && t(14, y = B[0]), h == document.activeElement && t(12, g = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== z && (t(10, B = Ta(a, p)), t(25, z = p), !d && B.length > 0 && t(14, y = B[0]));
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
    N,
    $,
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
class tb extends Tg {
  constructor(e) {
    super(), Og(
      this,
      e,
      eb,
      Qg,
      $g,
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
  attr: xS,
  detach: GS,
  element: JS,
  init: QS,
  insert: eq,
  noop: tq,
  safe_not_equal: nq,
  toggle_class: iq
} = window.__gradio__svelte__internal, {
  SvelteComponent: lq,
  add_flush_callback: oq,
  assign: sq,
  bind: aq,
  binding_callbacks: rq,
  check_outros: _q,
  create_component: cq,
  destroy_component: uq,
  detach: fq,
  empty: dq,
  get_spread_object: hq,
  get_spread_update: mq,
  group_outros: gq,
  init: bq,
  insert: pq,
  mount_component: wq,
  safe_not_equal: vq,
  space: kq,
  transition_in: Cq,
  transition_out: yq
} = window.__gradio__svelte__internal, {
  SvelteComponent: nb,
  append: et,
  attr: On,
  check_outros: ts,
  create_component: pn,
  destroy_component: wn,
  detach: ti,
  element: St,
  group_outros: ns,
  init: ib,
  insert: ni,
  listen: lb,
  mount_component: vn,
  safe_not_equal: ob,
  set_style: Nn,
  space: mi,
  text: ds,
  toggle_class: Va,
  transition_in: Me,
  transition_out: Pe
} = window.__gradio__svelte__internal, { createEventDispatcher: sb } = window.__gradio__svelte__internal, { onMount: ab } = window.__gradio__svelte__internal;
function Oa(i) {
  let e, t, n, l, o, s, r;
  const a = [_b, rb], _ = [];
  function c(f, u) {
    return (
      /*labelDetailLock*/
      f[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = St("div"), t = St("button"), l.c(), On(t, "class", "icon svelte-d9x7u0"), On(t, "aria-label", "Lock label detail"), Va(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Nn(e, "margin-right", "8px");
    },
    m(f, u) {
      ni(f, e, u), et(e, t), _[n].m(t, null), o = !0, s || (r = lb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(f, u) {
      let d = n;
      n = c(f), n !== d && (ns(), Pe(_[d], 1, 1, () => {
        _[d] = null;
      }), ts(), l = _[n], l || (l = _[n] = a[n](f), l.c()), Me(l, 1), l.m(t, null)), (!o || u & /*labelDetailLock*/
      4) && Va(
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
      Pe(l), o = !1;
    },
    d(f) {
      f && ti(e), _[n].d(), s = !1, r();
    }
  };
}
function rb(i) {
  let e, t;
  return e = new C0({}), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, l) {
      vn(e, n, l), t = !0;
    },
    i(n) {
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function _b(i) {
  let e, t;
  return e = new h0({}), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, l) {
      vn(e, n, l), t = !0;
    },
    i(n) {
      t || (Me(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      wn(e, n);
    }
  };
}
function cb(i) {
  let e;
  return {
    c() {
      e = ds("Cancel");
    },
    m(t, n) {
      ni(t, e, n);
    },
    d(t) {
      t && ti(e);
    }
  };
}
function Na(i) {
  let e, t, n;
  return t = new Zo({
    props: {
      variant: "stop",
      $$slots: { default: [ub] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = St("div"), pn(t.$$.fragment), Nn(e, "margin-right", "8px");
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
      n || (Me(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Pe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ti(e), wn(t);
    }
  };
}
function ub(i) {
  let e;
  return {
    c() {
      e = ds("Remove");
    },
    m(t, n) {
      ni(t, e, n);
    },
    d(t) {
      t && ti(e);
    }
  };
}
function fb(i) {
  let e;
  return {
    c() {
      e = ds("OK");
    },
    m(t, n) {
      ni(t, e, n);
    },
    d(t) {
      t && ti(e);
    }
  };
}
function db(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h, g, b, v = !/*showRemove*/
  i[4] && Oa(i);
  s = new tb({
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
  ), _ = new ag({
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
  ), u = new Zo({
    props: {
      $$slots: { default: [cb] },
      $$scope: { ctx: i }
    }
  }), u.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && Na(i)
  );
  return g = new Zo({
    props: {
      variant: "primary",
      $$slots: { default: [fb] },
      $$scope: { ctx: i }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = St("div"), t = St("div"), n = St("span"), v && v.c(), l = mi(), o = St("div"), pn(s.$$.fragment), r = mi(), a = St("div"), pn(_.$$.fragment), c = mi(), f = St("div"), pn(u.$$.fragment), d = mi(), p && p.c(), m = mi(), h = St("div"), pn(g.$$.fragment), Nn(o, "margin-right", "10px"), Nn(a, "margin-right", "40px"), Nn(a, "margin-bottom", "8px"), Nn(f, "margin-right", "8px"), On(n, "class", "model-content svelte-d9x7u0"), On(t, "class", "modal-container svelte-d9x7u0"), On(e, "class", "modal svelte-d9x7u0"), On(e, "id", "model-box-edit");
    },
    m(z, L) {
      ni(z, e, L), et(e, t), et(t, n), v && v.m(n, null), et(n, l), et(n, o), vn(s, o, null), et(n, r), et(n, a), vn(_, a, null), et(n, c), et(n, f), vn(u, f, null), et(n, d), p && p.m(n, null), et(n, m), et(n, h), vn(g, h, null), b = !0;
    },
    p(z, [L]) {
      /*showRemove*/
      z[4] ? v && (ns(), Pe(v, 1, 1, () => {
        v = null;
      }), ts()) : v ? (v.p(z, L), L & /*showRemove*/
      16 && Me(v, 1)) : (v = Oa(z), v.c(), Me(v, 1), v.m(n, l));
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
      16 && Me(p, 1)) : (p = Na(z), p.c(), Me(p, 1), p.m(n, m)) : p && (ns(), Pe(p, 1, 1, () => {
        p = null;
      }), ts());
      const E = {};
      L & /*$$scope*/
      262144 && (E.$$scope = { dirty: L, ctx: z }), g.$set(E);
    },
    i(z) {
      b || (Me(v), Me(s.$$.fragment, z), Me(_.$$.fragment, z), Me(u.$$.fragment, z), Me(p), Me(g.$$.fragment, z), b = !0);
    },
    o(z) {
      Pe(v), Pe(s.$$.fragment, z), Pe(_.$$.fragment, z), Pe(u.$$.fragment, z), Pe(p), Pe(g.$$.fragment, z), b = !1;
    },
    d(z) {
      z && ti(e), v && v.d(), wn(s), wn(_), wn(u), p && p.d(), wn(g);
    }
  };
}
function hb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const f = sb();
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
  ab(() => (document.addEventListener("keydown", b), t(0, l = n), t(1, a = r), () => {
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
class hs extends nb {
  constructor(e) {
    super(), ib(this, e, hb, db, ob, {
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
function Wo(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class el {
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Wo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Wo(this.color, 1), e.stroke(), e.closePath(), this.showLabel && this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Wo(this.color, 1);
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
], tl = (i, e, t) => Math.min(Math.max(i, e), t);
class mb {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = tl(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = tl(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = tl(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = tl(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: gb,
  append: he,
  attr: ie,
  binding_callbacks: $a,
  bubble: Xo,
  check_outros: $n,
  create_component: nt,
  destroy_component: it,
  detach: Qt,
  element: Xe,
  empty: bb,
  group_outros: Pn,
  init: pb,
  insert: en,
  listen: qe,
  mount_component: lt,
  noop: k_,
  run_all: C_,
  safe_not_equal: wb,
  set_data: vb,
  set_style: nl,
  space: $e,
  text: Pa,
  toggle_class: il,
  transition_in: ae,
  transition_out: _e
} = window.__gradio__svelte__internal, { onMount: kb, createEventDispatcher: Cb } = window.__gradio__svelte__internal;
function Ka(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h, g, b, v, p, z, L, B, y, w, E, C, S, M, N, $;
  n = new Im({}), s = new Nm({});
  let q = (
    /*showRemoveButton*/
    i[1] && Za(i)
  ), U = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[16] && xa(i);
  return f = new gd({}), m = new td({}), b = new V0({}), z = new Y0({}), S = new L0({}), {
    c() {
      e = Xe("span"), t = Xe("button"), nt(n.$$.fragment), l = $e(), o = Xe("button"), nt(s.$$.fragment), r = $e(), q && q.c(), a = $e(), U && U.c(), _ = $e(), c = Xe("button"), nt(f.$$.fragment), u = $e(), d = Xe("button"), nt(m.$$.fragment), h = $e(), g = Xe("button"), nt(b.$$.fragment), v = $e(), p = Xe("button"), nt(z.$$.fragment), L = $e(), B = Xe("span"), y = Pa(
        /*zoomLevel*/
        i[17]
      ), w = Pa("%"), E = $e(), C = Xe("button"), nt(S.$$.fragment), ie(t, "class", "icon svelte-1qb4mt2"), ie(t, "aria-label", "Create box"), ie(t, "title", "Create box (C)"), il(
        t,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].creation
      ), ie(o, "class", "icon svelte-1qb4mt2"), ie(o, "aria-label", "Drag boxes"), ie(o, "title", "Drag boxes (D)"), il(
        o,
        "selected",
        /*mode*/
        i[12] === /*Mode*/
        i[8].drag
      ), ie(c, "class", "icon svelte-1qb4mt2"), ie(c, "aria-label", "Rotate counterclockwise"), ie(c, "title", "Rotate counterclockwise"), ie(d, "class", "icon svelte-1qb4mt2"), ie(d, "aria-label", "Rotate clockwise"), ie(d, "title", "Rotate clockwise"), ie(g, "class", "icon svelte-1qb4mt2"), ie(g, "aria-label", "Reset zoom"), ie(g, "title", "Reset zoom (Space)"), ie(p, "class", "icon svelte-1qb4mt2"), ie(p, "aria-label", "Zoom out"), ie(p, "title", "Zoom out"), ie(B, "class", "zoom-level svelte-1qb4mt2"), ie(C, "class", "icon svelte-1qb4mt2"), ie(C, "aria-label", "Zoom in"), ie(C, "title", "Zoom in"), ie(e, "class", "canvas-control svelte-1qb4mt2");
    },
    m(j, Y) {
      en(j, e, Y), he(e, t), lt(n, t, null), he(e, l), he(e, o), lt(s, o, null), he(e, r), q && q.m(e, null), he(e, a), U && U.m(e, null), he(e, _), he(e, c), lt(f, c, null), he(e, u), he(e, d), lt(m, d, null), he(e, h), he(e, g), lt(b, g, null), he(e, v), he(e, p), lt(z, p, null), he(e, L), he(e, B), he(B, y), he(B, w), he(e, E), he(e, C), lt(S, C, null), M = !0, N || ($ = [
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
      ], N = !0);
    },
    p(j, Y) {
      (!M || Y[0] & /*mode, Mode*/
      4352) && il(
        t,
        "selected",
        /*mode*/
        j[12] === /*Mode*/
        j[8].creation
      ), (!M || Y[0] & /*mode, Mode*/
      4352) && il(
        o,
        "selected",
        /*mode*/
        j[12] === /*Mode*/
        j[8].drag
      ), /*showRemoveButton*/
      j[1] ? q ? (q.p(j, Y), Y[0] & /*showRemoveButton*/
      2 && ae(q, 1)) : (q = Za(j), q.c(), ae(q, 1), q.m(e, a)) : q && (Pn(), _e(q, 1, 1, () => {
        q = null;
      }), $n()), !/*disableEditBoxes*/
      j[5] && /*labelDetailLock*/
      j[16] ? U ? (U.p(j, Y), Y[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && ae(U, 1)) : (U = xa(j), U.c(), ae(U, 1), U.m(e, _)) : U && (Pn(), _e(U, 1, 1, () => {
        U = null;
      }), $n()), (!M || Y[0] & /*zoomLevel*/
      131072) && vb(
        y,
        /*zoomLevel*/
        j[17]
      );
    },
    i(j) {
      M || (ae(n.$$.fragment, j), ae(s.$$.fragment, j), ae(q), ae(U), ae(f.$$.fragment, j), ae(m.$$.fragment, j), ae(b.$$.fragment, j), ae(z.$$.fragment, j), ae(S.$$.fragment, j), M = !0);
    },
    o(j) {
      _e(n.$$.fragment, j), _e(s.$$.fragment, j), _e(q), _e(U), _e(f.$$.fragment, j), _e(m.$$.fragment, j), _e(b.$$.fragment, j), _e(z.$$.fragment, j), _e(S.$$.fragment, j), M = !1;
    },
    d(j) {
      j && Qt(e), it(n), it(s), q && q.d(), U && U.d(), it(f), it(m), it(b), it(z), it(S), N = !1, C_($);
    }
  };
}
function Za(i) {
  let e, t, n, l, o;
  return t = new Qm({}), {
    c() {
      e = Xe("button"), nt(t.$$.fragment), ie(e, "class", "icon svelte-1qb4mt2"), ie(e, "aria-label", "Remove box"), ie(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      en(s, e, r), lt(t, e, null), n = !0, l || (o = qe(
        e,
        "click",
        /*click_handler_2*/
        i[50]
      ), l = !0);
    },
    p: k_,
    i(s) {
      n || (ae(t.$$.fragment, s), n = !0);
    },
    o(s) {
      _e(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Qt(e), it(t), l = !1, o();
    }
  };
}
function xa(i) {
  let e, t, n, l, o;
  return t = new s0({}), {
    c() {
      e = Xe("button"), nt(t.$$.fragment), ie(e, "class", "icon svelte-1qb4mt2"), ie(e, "aria-label", "Edit label"), ie(e, "title", "Edit label");
    },
    m(s, r) {
      en(s, e, r), lt(t, e, null), n = !0, l || (o = qe(
        e,
        "click",
        /*click_handler_3*/
        i[51]
      ), l = !0);
    },
    p: k_,
    i(s) {
      n || (ae(t.$$.fragment, s), n = !0);
    },
    o(s) {
      _e(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Qt(e), it(t), l = !1, o();
    }
  };
}
function Ga(i) {
  let e, t;
  return e = new hs({
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
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      it(e, n);
    }
  };
}
function Ja(i) {
  let e, t;
  return e = new hs({
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
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      it(e, n);
    }
  };
}
function Qa(i) {
  let e, t;
  return e = new hs({
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
      t || (ae(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      it(e, n);
    }
  };
}
function yb(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u = (
    /*interactive*/
    i[2] && Ka(i)
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
      e = Xe("div"), t = Xe("div"), n = Xe("canvas"), l = $e(), u && u.c(), o = $e(), d && d.c(), s = $e(), m && m.c(), r = $e(), h && h.c(), a = bb(), nl(
        n,
        "height",
        /*height*/
        i[6]
      ), nl(
        n,
        "width",
        /*width*/
        i[7]
      ), ie(n, "class", "canvas-annotator svelte-1qb4mt2"), ie(t, "class", "canvas-container svelte-1qb4mt2"), ie(e, "class", "annotator-container"), ie(e, "tabindex", "0");
    },
    m(g, b) {
      en(g, e, b), he(e, t), he(t, n), i[47](n), he(e, l), u && u.m(e, null), i[54](e), en(g, o, b), d && d.m(g, b), en(g, s, b), m && m.m(g, b), en(g, r, b), h && h.m(g, b), en(g, a, b), _ = !0, c || (f = [
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
      64) && nl(
        n,
        "height",
        /*height*/
        g[6]
      ), (!_ || b[0] & /*width*/
      128) && nl(
        n,
        "width",
        /*width*/
        g[7]
      ), /*interactive*/
      g[2] ? u ? (u.p(g, b), b[0] & /*interactive*/
      4 && ae(u, 1)) : (u = Ka(g), u.c(), ae(u, 1), u.m(e, null)) : u && (Pn(), _e(u, 1, 1, () => {
        u = null;
      }), $n()), /*editModalVisible*/
      g[13] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      8192 && ae(d, 1)) : (d = Ga(g), d.c(), ae(d, 1), d.m(s.parentNode, s)) : d && (Pn(), _e(d, 1, 1, () => {
        d = null;
      }), $n()), /*newModalVisible*/
      g[14] ? m ? (m.p(g, b), b[0] & /*newModalVisible*/
      16384 && ae(m, 1)) : (m = Ja(g), m.c(), ae(m, 1), m.m(r.parentNode, r)) : m && (Pn(), _e(m, 1, 1, () => {
        m = null;
      }), $n()), /*editDefaultLabelVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*editDefaultLabelVisible*/
      32768 && ae(h, 1)) : (h = Qa(g), h.c(), ae(h, 1), h.m(a.parentNode, a)) : h && (Pn(), _e(h, 1, 1, () => {
        h = null;
      }), $n());
    },
    i(g) {
      _ || (ae(u), ae(d), ae(m), ae(h), _ = !0);
    },
    o(g) {
      _e(u), _e(d), _e(m), _e(h), _ = !1;
    },
    d(g) {
      g && (Qt(e), Qt(o), Qt(s), Qt(r), Qt(a)), i[47](null), u && u.d(), i[54](null), d && d.d(g), m && m.d(g), h && h.d(g), c = !1, C_(f);
    }
  };
}
const er = 100;
function ll(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function zn(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function Sb(i, e, t) {
  let n;
  var l;
  (function(k) {
    k[k.creation = 0] = "creation", k[k.drag = 1] = "drag";
  })(l || (l = {}));
  let { imageUrl: o = null } = e, { interactive: s } = e, { boxAlpha: r = 0.5 } = e, { boxMinSize: a = 10 } = e, { handleSize: _ } = e, { boxThickness: c } = e, { boxSelectedThickness: f } = e, { value: u } = e, { choices: d = [] } = e, { choicesColors: m = [] } = e, { disableEditBoxes: h = !1 } = e, { height: g = "100%" } = e, { width: b = "100%" } = e, { singleBox: v = !1 } = e, { showRemoveButton: p = null } = e, { handlesCursor: z = !0 } = e, { useDefaultLabel: L = !1 } = e, { enableKeyboardShortcuts: B = !0 } = e, { showBoxLabels: y = !0 } = e;
  p === null && (p = h);
  let w, E, C, S = null, M = -1, N = l.drag, $ = /* @__PURE__ */ new Map(), q = new mb(x, $), U = null;
  u !== null && u.boxes.length == 0 && (N = l.creation);
  let j = 0, Y = 0, G = 0, X = 0, P = 1, J = 0, le = 0, me = !1, I = !1, ze = !1, R = L, F = { label: "", color: "" }, Z = { x: 0, y: 0, distance: 0 };
  const oe = Cb();
  function x() {
    if (C) {
      if (C.clearRect(0, 0, w.width, w.height), C.save(), C.translate(q.offsetX, q.offsetY), C.scale(q.scale, q.scale), S !== null) {
        switch (u.orientation) {
          case 0:
            C.drawImage(S, 0, 0, J, le);
            break;
          case 1:
            C.translate(J, 0), C.rotate(Math.PI / 2), C.drawImage(S, 0, 0, le, J);
            break;
          case 2:
            C.translate(J, le), C.rotate(Math.PI), C.drawImage(S, 0, 0, J, le);
            break;
          case 3:
            C.translate(0, le), C.rotate(-Math.PI / 2), C.drawImage(S, 0, 0, le, J);
            break;
        }
        C.restore();
      }
      for (const k of u.boxes.slice().reverse())
        k.render(C);
    }
  }
  function we(k) {
    t(11, M = k), u.boxes.forEach((W) => {
      W.setSelected(!1);
    }), k >= 0 && k < u.boxes.length && u.boxes[k].setSelected(!0), x();
  }
  const A = (k, W) => {
    const H = Math.sqrt(Math.pow(k.clientX - W.clientX, 2) + Math.pow(k.clientY - W.clientY, 2));
    return H < er ? er : H;
  };
  function Dt(k) {
    if (s) {
      if (k.preventDefault(), w.setPointerCapture(k.pointerId), $.set(k.pointerId, k), $.size == 1)
        N === l.creation ? Ft(k) : N === l.drag && Fe(k);
      else if ($.size == 2) {
        t(46, q.isDragging = !1, q), u.boxes.forEach((_t) => {
          _t.isCreating = !1, _t.isDragging = !1, _t.isResizing = !1;
        });
        const W = Array.from($.values()), H = W[0], K = W[1], Q = A(H, K), te = w.getBoundingClientRect(), de = (H.clientX + K.clientX) / 2 - te.left, xe = (H.clientY + K.clientY) / 2 - te.top;
        Z.distance = Q, Z.x = de, Z.y = xe;
      }
    }
  }
  function Fe(k) {
    const W = w.getBoundingClientRect(), H = k.clientX - W.left, K = k.clientY - W.top;
    let Q = !1;
    for (const [te, de] of u.boxes.entries()) {
      const xe = de.indexOfPointInsideHandle(H, K);
      if (xe >= 0) {
        Q = !0, we(te), de.startResize(xe, k);
        return;
      }
    }
    for (const [te, de] of u.boxes.entries())
      if (de.isPointInsideBox(H, K)) {
        Q = !0, we(te), de.startDrag(k);
        return;
      }
    v || we(-1), Q || q.startDrag(k);
  }
  function at(k) {
    s && ($.delete(k.pointerId), w.releasePointerCapture(k.pointerId), oe("change"));
  }
  function rt(k) {
    s && ($.delete(k.pointerId), w.releasePointerCapture(k.pointerId), oe("change"));
  }
  function on(k) {
    if (s)
      if (k.preventDefault(), k.pointerType === "mouse") {
        if (!z || u === null || N !== l.drag)
          return;
        const W = w.getBoundingClientRect(), H = k.clientX - W.left, K = k.clientY - W.top;
        for (const [Q, te] of u.boxes.entries()) {
          const de = te.indexOfPointInsideHandle(H, K);
          if (de >= 0) {
            t(9, w.style.cursor = te.resizeHandles[de].cursor, w);
            return;
          }
        }
        t(9, w.style.cursor = "default", w);
      } else {
        if (!$.has(k.pointerId))
          return;
        if ($.set(k.pointerId, k), $.size === 2) {
          const W = Array.from($.values()), H = W[0], K = W[1], Q = A(H, K), te = w.getBoundingClientRect(), de = (H.clientX + K.clientX) / 2 - te.left, xe = (H.clientY + K.clientY) / 2 - te.top, _t = parseFloat((q.scale * (Q / Z.distance)).toFixed(2)), ai = _t < 1 ? 1 : _t, ri = ai / q.scale;
          t(46, q.offsetX = Z.x - (Z.x - q.offsetX) * ri, q), t(46, q.offsetY = Z.y - (Z.y - q.offsetY) * ri, q);
          const O_ = de - Z.x, N_ = xe - Z.y;
          t(46, q.offsetX += O_, q), t(46, q.offsetY += N_, q), t(46, q.scale = ai, q), Z.x = de, Z.y = xe, Z.distance = Q, x();
        }
      }
  }
  function Wi() {
    const k = w.width / J, W = w.height / le, H = Math.min(k, W);
    t(46, q.scale = H, q), t(46, q.offsetX = (w.width - J * H) / 2, q), t(46, q.offsetY = (w.height - le * H) / 2, q), x();
  }
  function Yl() {
    const k = parseFloat((q.scale * 1.25).toFixed(2)), W = w.width / 2, H = w.height / 2, K = (W - q.offsetX) / q.scale, Q = (H - q.offsetY) / q.scale;
    t(46, q.offsetX = W - K * k, q), t(46, q.offsetY = H - Q * k, q), t(46, q.scale = k, q), x();
  }
  function Il() {
    const k = parseFloat((q.scale * 0.8).toFixed(2)), W = k < 1 ? 1 : k, H = w.width / 2, K = w.height / 2, Q = (H - q.offsetX) / q.scale, te = (K - q.offsetY) / q.scale;
    t(46, q.offsetX = H - Q * W, q), t(46, q.offsetY = K - te * W, q), t(46, q.scale = W, q), x();
  }
  function jl(k) {
    if (!B || k.target !== E || !s)
      return;
    const W = k.key.toLowerCase(), H = k.ctrlKey || k.metaKey;
    if (((/* @__PURE__ */ new Set(["delete", "c", "d", "e", " ", "v"])).has(W) || H && (W === "c" || W === "v")) && (k.preventDefault(), k.stopPropagation()), H && W === "c") {
      D_();
      return;
    }
    if (H && W === "v") {
      L_();
      return;
    }
    switch (W) {
      case "delete":
        pt();
        break;
      case "c":
        Ze();
        break;
      case "d":
        Lt();
        break;
      case "e":
        Ut();
        break;
      case " ":
        Wi();
        break;
    }
  }
  function ii() {
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
    const W = 1 / (1 + k.deltaY / 1e3 * 0.5), H = parseFloat((q.scale * W).toFixed(2)), K = H < 1 ? 1 : H, Q = w.getBoundingClientRect(), te = k.clientX - Q.left, de = k.clientY - Q.top, xe = (te - q.offsetX) / q.scale, _t = (de - q.offsetY) / q.scale;
    t(46, q.offsetX = te - xe * K, q), t(46, q.offsetY = de - _t * K, q), t(46, q.scale = K, q), x();
  }
  function Ft(k) {
    const W = w.getBoundingClientRect(), H = (k.clientX - W.left - q.offsetX) / P / q.scale, K = (k.clientY - W.top - q.offsetY) / P / q.scale;
    let Q;
    m.length > 0 ? Q = ll(m[0]) : v ? u.boxes.length > 0 ? Q = u.boxes[0].color : Q = cn[0] : Q = cn[u.boxes.length % cn.length];
    let te = new el(x, li, q, $, j, Y, G, X, "", H, K, H, K, Q, r, a, _, c, f, P, y);
    te.startCreating(k, W.left, W.top), v ? t(0, u.boxes = [te], u) : t(0, u.boxes = [te, ...u.boxes], u), we(0), x(), oe("change");
  }
  function Ze() {
    t(12, N = l.creation), t(9, w.style.cursor = "crosshair", w);
  }
  function Lt() {
    t(12, N = l.drag), t(9, w.style.cursor = "default", w);
  }
  function li() {
    M >= 0 && M < u.boxes.length && (u.boxes[M].getArea() < 1 ? pt() : (h || (R ? Mt() : t(14, I = !0)), v && Lt()));
  }
  function Ut() {
    M >= 0 && M < u.boxes.length && !h && t(13, me = !0);
  }
  function Mn(k) {
    s && Ut();
  }
  function Hl(k) {
    t(13, me = !1), ii();
    const { detail: W } = k;
    let H = W.label, K = W.color, Q = W.ret;
    if (M >= 0 && M < u.boxes.length) {
      let te = u.boxes[M];
      Q == 1 ? (te.label = H, te.color = ll(K), x(), oe("change")) : Q == -1 && pt();
    }
  }
  function Tl(k) {
    t(14, I = !1), ii();
    const { detail: W } = k;
    let H = W.label, K = W.color, Q = W.ret, te = W.lock;
    if (M >= 0 && M < u.boxes.length) {
      let de = u.boxes[M];
      Q == 1 ? (t(16, R = te), F.label = H, F.color = K, de.label = H, de.color = ll(K), x(), oe("change")) : pt();
    }
  }
  function oi(k) {
    t(15, ze = !1), ii();
    const { detail: W } = k;
    let H = W.label, K = W.color, Q = W.ret, te = W.lock;
    Q == 1 && (t(16, R = te), F.label = H, F.color = K);
  }
  function Mt() {
    if (M >= 0 && M < u.boxes.length) {
      let k = u.boxes[M];
      k.label = F.label, F.color !== "" && (k.color = ll(F.color)), x(), oe("change");
    }
  }
  function pt() {
    M >= 0 && M < u.boxes.length && (u.boxes.splice(M, 1), we(-1), v && Ze(), oe("change"));
  }
  function D_() {
    M >= 0 && M < u.boxes.length && (U = u.boxes[M].toJSON());
  }
  function L_() {
    if (U === null)
      return;
    const k = 20, W = U;
    let H = W.xmin + k, K = W.ymin + k, Q = W.xmax + k, te = W.ymax + k;
    const de = (G - j) / q.scale, xe = (X - Y) / q.scale, _t = Q - H, ai = te - K;
    Q > de && (H = Math.max(0, de - _t), Q = H + _t), te > xe && (K = Math.max(0, xe - ai), te = K + ai);
    const ri = new el(x, li, q, $, j, Y, G, X, W.label, H, K, Q, te, W.color, r, a, _, c, f, P, y);
    v ? t(0, u.boxes = [ri], u) : t(0, u.boxes = [ri, ...u.boxes], u), we(0), x(), oe("change");
  }
  function Fl(k) {
    t(0, u.orientation = ((u.orientation + k) % 4 + 4) % 4, u), t(46, q.orientation = u.orientation, q), si();
    for (const W of u.boxes)
      W.onRotate(k);
    x();
  }
  function si() {
    if (w) {
      if (P = 1, t(9, w.width = w.clientWidth, w), q.setRotatedImage(S), S !== null) {
        if (q.imageRotatedWidth > w.width)
          P = w.width / q.imageRotatedWidth, J = Math.round(q.imageRotatedWidth * P), le = Math.round(q.imageRotatedHeight * P), j = 0, Y = 0, G = J, X = le, t(9, w.height = le, w);
        else {
          J = q.imageRotatedWidth, le = q.imageRotatedHeight;
          var k = (w.width - J) / 2;
          j = k, Y = 0, G = k + J, X = le, t(9, w.height = le, w);
        }
        t(46, q.imageWidth = J, q), t(46, q.imageHeight = le, q);
      } else
        j = 0, Y = 0, G = w.width, X = w.height, t(9, w.height = w.clientHeight, w);
      if (q.resize(w.width, w.height, j, Y), G > 0 && X > 0)
        for (const W of u.boxes)
          W.canvasXmin = j, W.canvasYmin = Y, W.canvasXmax = G, W.canvasYmax = X, W.setScaleFactor(P);
      x(), oe("change");
    }
  }
  const M_ = new ResizeObserver(si);
  function E_() {
    for (let k = 0; k < u.boxes.length; k++) {
      let W = u.boxes[k];
      if (!(W instanceof el)) {
        let H = "", K = "";
        W.hasOwnProperty("color") ? (H = W.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = cn[k % cn.length], W.hasOwnProperty("label") && (K = W.label), W = new el(x, li, q, $, j, Y, G, X, K, W.xmin, W.ymin, W.xmax, W.ymax, H, r, a, _, c, f, W.scaleFactor || 1, y), t(0, u.boxes[k] = W, u);
      }
    }
  }
  function ms() {
    o !== null && (S === null || S.src != o) && (S = new Image(), S.src = o, S.onload = function() {
      si(), x();
    });
  }
  kb(() => {
    if (Array.isArray(d) && d.length > 0) {
      if (!Array.isArray(m) || m.length == 0)
        for (let k = 0; k < d.length; k++) {
          let W = cn[k % cn.length];
          m.push(zn(W));
        }
      F.label = d[0][0], F.color = m[0];
    }
    C = w.getContext("2d"), M_.observe(w), M < 0 && u !== null && u.boxes.length > 0 && we(0), ms(), si(), x();
  });
  function R_(k) {
    $a[k ? "unshift" : "push"](() => {
      w = k, t(9, w);
    });
  }
  const A_ = () => Ze(), W_ = () => Lt(), X_ = () => pt(), Y_ = () => t(15, ze = !0), I_ = () => Fl(-1), j_ = () => Fl(1);
  function H_(k) {
    $a[k ? "unshift" : "push"](() => {
      E = k, t(10, E);
    });
  }
  const T_ = () => E.focus();
  function F_(k) {
    Xo.call(this, i, k);
  }
  function U_(k) {
    Xo.call(this, i, k);
  }
  function V_(k) {
    Xo.call(this, i, k);
  }
  return i.$$set = (k) => {
    "imageUrl" in k && t(35, o = k.imageUrl), "interactive" in k && t(2, s = k.interactive), "boxAlpha" in k && t(36, r = k.boxAlpha), "boxMinSize" in k && t(37, a = k.boxMinSize), "handleSize" in k && t(38, _ = k.handleSize), "boxThickness" in k && t(39, c = k.boxThickness), "boxSelectedThickness" in k && t(40, f = k.boxSelectedThickness), "value" in k && t(0, u = k.value), "choices" in k && t(3, d = k.choices), "choicesColors" in k && t(4, m = k.choicesColors), "disableEditBoxes" in k && t(5, h = k.disableEditBoxes), "height" in k && t(6, g = k.height), "width" in k && t(7, b = k.width), "singleBox" in k && t(41, v = k.singleBox), "showRemoveButton" in k && t(1, p = k.showRemoveButton), "handlesCursor" in k && t(42, z = k.handlesCursor), "useDefaultLabel" in k && t(43, L = k.useDefaultLabel), "enableKeyboardShortcuts" in k && t(44, B = k.enableKeyboardShortcuts), "showBoxLabels" in k && t(45, y = k.showBoxLabels);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*value*/
    1 && (t(46, q.orientation = u.orientation, q), ms(), E_(), si(), x()), i.$$.dirty[1] & /*canvasWindow*/
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
    N,
    me,
    I,
    ze,
    R,
    n,
    Dt,
    at,
    rt,
    on,
    Wi,
    Yl,
    Il,
    jl,
    D,
    Ze,
    Lt,
    Mn,
    Hl,
    Tl,
    oi,
    pt,
    Fl,
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
    R_,
    A_,
    W_,
    X_,
    Y_,
    I_,
    j_,
    H_,
    T_,
    F_,
    U_,
    V_
  ];
}
class qb extends gb {
  constructor(e) {
    super(), pb(
      this,
      e,
      Sb,
      yb,
      wb,
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
  SvelteComponent: zb,
  add_flush_callback: Bb,
  bind: Db,
  binding_callbacks: Lb,
  create_component: Mb,
  destroy_component: Eb,
  init: Rb,
  mount_component: Ab,
  safe_not_equal: Wb,
  transition_in: Xb,
  transition_out: Yb
} = window.__gradio__svelte__internal, { createEventDispatcher: Ib } = window.__gradio__svelte__internal;
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
    i[0]), e = new qb({ props: o }), Lb.push(() => Db(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[23]
    ), {
      c() {
        Mb(e.$$.fragment);
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
        s[0], Bb(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Xb(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Yb(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Eb(e, s);
      }
    }
  );
}
function Hb(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: f } = e, { width: u } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: v } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: z } = e, { showBoxLabels: L } = e, B, y;
  const w = Ib();
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
      P1(S).then((M) => {
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
class Tb extends zb {
  constructor(e) {
    super(), Rb(this, e, Hb, jb, Wb, {
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
class tr {
  constructor() {
    this.boxes = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Fb,
  add_flush_callback: Sl,
  append: jn,
  attr: yi,
  bind: ql,
  binding_callbacks: Mi,
  bubble: gi,
  check_outros: fn,
  create_component: Yt,
  create_slot: Ub,
  destroy_component: It,
  detach: kn,
  element: Di,
  empty: Vb,
  get_all_dirty_from_scope: Ob,
  get_slot_changes: Nb,
  group_outros: dn,
  init: $b,
  insert: Cn,
  mount_component: jt,
  noop: Pb,
  safe_not_equal: Kb,
  space: un,
  toggle_class: nr,
  transition_in: se,
  transition_out: re,
  update_slot_base: Zb
} = window.__gradio__svelte__internal, { createEventDispatcher: xb, tick: Gb } = window.__gradio__svelte__internal;
function ir(i) {
  let e, t;
  return e = new sh({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Jb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Yt(e.$$.fragment);
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
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      It(e, n);
    }
  };
}
function Jb(i) {
  let e, t;
  return e = new zl({
    props: {
      Icon: vf,
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
      jt(e, n, l), t = !0;
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
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      It(e, n);
    }
  };
}
function lr(i) {
  let e, t;
  return e = new Vd({
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
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      It(e, n);
    }
  };
}
function or(i) {
  let e, t, n;
  return t = new zl({
    props: { Icon: kr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[38]
  ), {
    c() {
      e = Di("div"), Yt(t.$$.fragment);
    },
    m(l, o) {
      Cn(l, e, o), jt(t, e, null), n = !0;
    },
    p: Pb,
    i(l) {
      n || (se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      re(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && kn(e), It(t);
    }
  };
}
function sr(i) {
  let e;
  const t = (
    /*#slots*/
    i[39].default
  ), n = Ub(
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
        e ? Nb(
          t,
          /*$$scope*/
          l[55],
          o,
          null
        ) : Ob(
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
      re(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Qb(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && sr(i)
  );
  return {
    c() {
      n && n.c(), e = Vb();
    },
    m(l, o) {
      n && n.m(l, o), Cn(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[1] === null ? n ? (n.p(l, o), o[0] & /*value*/
      2 && se(n, 1)) : (n = sr(l), n.c(), se(n, 1), n.m(e.parentNode, e)) : n && (dn(), re(n, 1, 1, () => {
        n = null;
      }), fn());
    },
    i(l) {
      t || (se(n), t = !0);
    },
    o(l) {
      re(n), t = !1;
    },
    d(l) {
      l && kn(e), n && n.d(l);
    }
  };
}
function ar(i) {
  let e, t;
  return e = new Mm({
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
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      re(e.$$.fragment, n), t = !1;
    },
    d(n) {
      It(e, n);
    }
  };
}
function rr(i) {
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
    i[1]), t = new Tb({ props: s }), Mi.push(() => ql(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      i[53]
    ), {
      c() {
        e = Di("div"), Yt(t.$$.fragment), yi(e, "class", "image-frame svelte-1gjdske"), nr(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        Cn(r, e, a), jt(t, e, null), l = !0;
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
        r[1], Sl(() => n = !1)), t.$set(_), (!l || a[0] & /*selectable*/
        32) && nr(
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
        re(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && kn(e), It(t);
      }
    }
  );
}
function _r(i) {
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
    i[0]), e = new o1({ props: o }), Mi.push(() => ql(e, "active_source", l)), {
      c() {
        Yt(e.$$.fragment);
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
        s[0], Sl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (se(e.$$.fragment, s), n = !0);
      },
      o(s) {
        re(e.$$.fragment, s), n = !1;
      },
      d(s) {
        It(e, s);
      }
    }
  );
}
function e2(i) {
  let e, t, n, l, o, s, r, a, _, c, f, u, d, m, h = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), g;
  e = new ou({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Cr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && ir(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && lr(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && or(i)
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
    $$slots: { default: [Qb] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[31] !== void 0 && (B.uploading = /*uploading*/
  i[31]), /*dragging*/
  i[32] !== void 0 && (B.dragging = /*dragging*/
  i[32]), _ = new Hh({ props: B }), i[43](_), Mi.push(() => ql(_, "uploading", z)), Mi.push(() => ql(_, "dragging", L)), _.$on(
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
    i[0] === "webcam" && ar(i)
  ), w = (
    /*value*/
    i[1] !== null && rr(i)
  ), E = h && _r(i);
  return {
    c() {
      Yt(e.$$.fragment), t = un(), n = Di("div"), b && b.c(), l = un(), v && v.c(), o = un(), p && p.c(), s = un(), r = Di("div"), a = Di("div"), Yt(_.$$.fragment), u = un(), y && y.c(), d = un(), w && w.c(), m = un(), E && E.c(), yi(n, "class", "icon-buttons svelte-1gjdske"), yi(a, "class", "upload-container svelte-1gjdske"), yi(r, "data-testid", "image"), yi(r, "class", "image-container svelte-1gjdske");
    },
    m(C, S) {
      jt(e, C, S), Cn(C, t, S), Cn(C, n, S), b && b.m(n, null), jn(n, l), v && v.m(n, null), jn(n, o), p && p.m(n, null), Cn(C, s, S), Cn(C, r, S), jn(r, a), jt(_, a, null), jn(a, u), y && y.m(a, null), jn(a, d), w && w.m(a, null), jn(r, m), E && E.m(r, null), g = !0;
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
      1026 && se(b, 1)) : (b = ir(C), b.c(), se(b, 1), b.m(n, l)) : b && (dn(), re(b, 1, 1, () => {
        b = null;
      }), fn()), /*showShareButton*/
      C[9] && /*value*/
      C[1] !== null ? v ? (v.p(C, S), S[0] & /*showShareButton, value*/
      514 && se(v, 1)) : (v = lr(C), v.c(), se(v, 1), v.m(n, o)) : v && (dn(), re(v, 1, 1, () => {
        v = null;
      }), fn()), /*showClearButton*/
      C[11] && /*value*/
      C[1] !== null && /*interactive*/
      C[7] ? p ? (p.p(C, S), S[0] & /*showClearButton, value, interactive*/
      2178 && se(p, 1)) : (p = or(C), p.c(), se(p, 1), p.m(n, null)) : p && (dn(), re(p, 1, 1, () => {
        p = null;
      }), fn());
      const N = {};
      S[0] & /*value, active_source*/
      3 && (N.hidden = /*value*/
      C[1] !== null || /*active_source*/
      C[0] === "webcam"), S[0] & /*active_source*/
      1 && (N.filetype = /*active_source*/
      C[0] === "clipboard" ? "clipboard" : "image/*"), S[0] & /*root*/
      64 && (N.root = /*root*/
      C[6]), S[0] & /*max_file_size*/
      33554432 && (N.max_file_size = /*max_file_size*/
      C[25]), S[0] & /*sources*/
      16 && (N.disable_click = !/*sources*/
      C[4].includes("upload")), S[0] & /*cli_upload*/
      67108864 && (N.upload = /*cli_upload*/
      C[26]), S[0] & /*stream_handler*/
      134217728 && (N.stream_handler = /*stream_handler*/
      C[27]), S[0] & /*value*/
      2 | S[1] & /*$$scope*/
      16777216 && (N.$$scope = { dirty: S, ctx: C }), !c && S[1] & /*uploading*/
      1 && (c = !0, N.uploading = /*uploading*/
      C[31], Sl(() => c = !1)), !f && S[1] & /*dragging*/
      2 && (f = !0, N.dragging = /*dragging*/
      C[32], Sl(() => f = !1)), _.$set(N), /*value*/
      C[1] === null && /*active_source*/
      C[0] === "webcam" ? y ? (y.p(C, S), S[0] & /*value, active_source*/
      3 && se(y, 1)) : (y = ar(C), y.c(), se(y, 1), y.m(a, d)) : y && (dn(), re(y, 1, 1, () => {
        y = null;
      }), fn()), /*value*/
      C[1] !== null ? w ? (w.p(C, S), S[0] & /*value*/
      2 && se(w, 1)) : (w = rr(C), w.c(), se(w, 1), w.m(a, null)) : w && (dn(), re(w, 1, 1, () => {
        w = null;
      }), fn()), S[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (C[4].length > 1 || /*sources*/
      C[4].includes("clipboard")) && /*value*/
      C[1] === null && /*interactive*/
      C[7]), h ? E ? (E.p(C, S), S[0] & /*sources, value, interactive*/
      146 && se(E, 1)) : (E = _r(C), E.c(), se(E, 1), E.m(r, null)) : E && (dn(), re(E, 1, 1, () => {
        E = null;
      }), fn());
    },
    i(C) {
      g || (se(e.$$.fragment, C), se(b), se(v), se(p), se(_.$$.fragment, C), se(y), se(w), se(E), g = !0);
    },
    o(C) {
      re(e.$$.fragment, C), re(b), re(v), re(p), re(_.$$.fragment, C), re(y), re(w), re(E), g = !1;
    },
    d(C) {
      C && (kn(t), kn(n), kn(s), kn(r)), It(e, C), b && b.d(), v && v.d(), p && p.d(), i[43](null), It(_), y && y.d(), w && w.d(), E && E.d();
    }
  };
}
function t2(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(D, Ft, Ze, Lt) {
    function li(Ut) {
      return Ut instanceof Ze ? Ut : new Ze(function(Mn) {
        Mn(Ut);
      });
    }
    return new (Ze || (Ze = Promise))(function(Ut, Mn) {
      function Hl(Mt) {
        try {
          oi(Lt.next(Mt));
        } catch (pt) {
          Mn(pt);
        }
      }
      function Tl(Mt) {
        try {
          oi(Lt.throw(Mt));
        } catch (pt) {
          Mn(pt);
        }
      }
      function oi(Mt) {
        Mt.done ? Ut(Mt.value) : li(Mt.value).then(Hl, Tl);
      }
      oi((Lt = Lt.apply(D, Ft || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: f } = e, { interactive: u } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: v } = e, { labelColors: p } = e, { boxMinSize: z } = e, { handleSize: L } = e, { height: B } = e, { width: y } = e, { boxThickness: w } = e, { disableEditBoxes: E } = e, { singleBox: C } = e, { showRemoveButton: S } = e, { handlesCursor: M } = e, { boxSelectedThickness: N } = e, { max_file_size: $ = null } = e, { cli_upload: q } = e, { stream_handler: U } = e, { useDefaultLabel: j } = e, { enableKeyboardShortcuts: Y } = e, { showBoxLabels: G } = e, X, P = !1, { active_source: J = null } = e;
  function le({ detail: D }) {
    t(1, s = new tr()), t(1, s.image = D, s), I("upload");
  }
  function me(D) {
    return o(this, void 0, void 0, function* () {
      const Ft = yield X.load_files([new File([D], "webcam.png")]), Ze = (Ft == null ? void 0 : Ft[0]) || null;
      Ze ? (t(1, s = new tr()), t(1, s.image = Ze, s)) : t(1, s = null), yield Gb(), I("change");
    });
  }
  const I = xb();
  let ze = !1;
  function R(D) {
    return o(this, void 0, void 0, function* () {
      switch (D) {
        case "clipboard":
          X.paste_clipboard();
          break;
      }
    });
  }
  function F() {
    t(1, s = null), I("clear"), I("change");
  }
  const Z = async (D) => D === null ? "" : `<img src="${await Md(D.image)}" />`;
  function oe(D) {
    gi.call(this, i, D);
  }
  function x(D) {
    gi.call(this, i, D);
  }
  function we(D) {
    Mi[D ? "unshift" : "push"](() => {
      X = D, t(33, X);
    });
  }
  function A(D) {
    P = D, t(31, P);
  }
  function Dt(D) {
    ze = D, t(32, ze);
  }
  function Fe(D) {
    gi.call(this, i, D);
  }
  const at = (D) => me(D.detail), rt = (D) => me(D.detail);
  function on(D) {
    gi.call(this, i, D);
  }
  function Wi(D) {
    gi.call(this, i, D);
  }
  const Yl = (D) => me(D.detail);
  function Il(D) {
    s = D, t(1, s);
  }
  const jl = () => I("change");
  function ii(D) {
    J = D, t(0, J), t(4, _);
  }
  return i.$$set = (D) => {
    "value" in D && t(1, s = D.value), "label" in D && t(2, r = D.label), "show_label" in D && t(3, a = D.show_label), "sources" in D && t(4, _ = D.sources), "selectable" in D && t(5, c = D.selectable), "root" in D && t(6, f = D.root), "interactive" in D && t(7, u = D.interactive), "i18n" in D && t(8, d = D.i18n), "showShareButton" in D && t(9, m = D.showShareButton), "showDownloadButton" in D && t(10, h = D.showDownloadButton), "showClearButton" in D && t(11, g = D.showClearButton), "boxesAlpha" in D && t(12, b = D.boxesAlpha), "labelList" in D && t(13, v = D.labelList), "labelColors" in D && t(14, p = D.labelColors), "boxMinSize" in D && t(15, z = D.boxMinSize), "handleSize" in D && t(16, L = D.handleSize), "height" in D && t(17, B = D.height), "width" in D && t(18, y = D.width), "boxThickness" in D && t(19, w = D.boxThickness), "disableEditBoxes" in D && t(20, E = D.disableEditBoxes), "singleBox" in D && t(21, C = D.singleBox), "showRemoveButton" in D && t(22, S = D.showRemoveButton), "handlesCursor" in D && t(23, M = D.handlesCursor), "boxSelectedThickness" in D && t(24, N = D.boxSelectedThickness), "max_file_size" in D && t(25, $ = D.max_file_size), "cli_upload" in D && t(26, q = D.cli_upload), "stream_handler" in D && t(27, U = D.stream_handler), "useDefaultLabel" in D && t(28, j = D.useDefaultLabel), "enableKeyboardShortcuts" in D && t(29, Y = D.enableKeyboardShortcuts), "showBoxLabels" in D && t(30, G = D.showBoxLabels), "active_source" in D && t(0, J = D.active_source), "$$scope" in D && t(55, l = D.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[1] & /*uploading*/
    1 && P && F(), i.$$.dirty[1] & /*dragging*/
    2 && I("drag", ze), i.$$.dirty[0] & /*active_source, sources*/
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
    N,
    $,
    q,
    U,
    j,
    Y,
    G,
    P,
    ze,
    X,
    le,
    me,
    I,
    R,
    F,
    n,
    Z,
    oe,
    x,
    we,
    A,
    Dt,
    Fe,
    at,
    rt,
    on,
    Wi,
    Yl,
    Il,
    jl,
    ii,
    l
  ];
}
class n2 extends Fb {
  constructor(e) {
    super(), $b(
      this,
      e,
      t2,
      e2,
      Kb,
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
  SvelteComponent: i2,
  attr: fl,
  detach: y_,
  element: S_,
  init: l2,
  insert: q_,
  noop: cr,
  safe_not_equal: o2,
  src_url_equal: ur,
  toggle_class: xt
} = window.__gradio__svelte__internal;
function fr(i) {
  let e, t;
  return {
    c() {
      e = S_("img"), ur(e.src, t = /*value*/
      i[0].url) || fl(e, "src", t), fl(e, "alt", "");
    },
    m(n, l) {
      q_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !ur(e.src, t = /*value*/
      n[0].url) && fl(e, "src", t);
    },
    d(n) {
      n && y_(e);
    }
  };
}
function s2(i) {
  let e, t = (
    /*value*/
    i[0] && fr(i)
  );
  return {
    c() {
      e = S_("div"), t && t.c(), fl(e, "class", "container svelte-1sgcyba"), xt(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), xt(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), xt(
        e,
        "selected",
        /*selected*/
        i[2]
      ), xt(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      q_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = fr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && xt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && xt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && xt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && xt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: cr,
    o: cr,
    d(n) {
      n && y_(e), t && t.d();
    }
  };
}
function a2(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class Sq extends i2 {
  constructor(e) {
    super(), l2(this, e, a2, s2, o2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: r2,
  add_flush_callback: dr,
  assign: _2,
  bind: hr,
  binding_callbacks: mr,
  check_outros: c2,
  create_component: Bn,
  destroy_component: Dn,
  detach: z_,
  empty: u2,
  flush: ee,
  get_spread_object: f2,
  get_spread_update: d2,
  group_outros: h2,
  init: m2,
  insert: B_,
  mount_component: Ln,
  safe_not_equal: g2,
  space: b2,
  transition_in: Ht,
  transition_out: Tt
} = window.__gradio__svelte__internal;
function p2(i) {
  let e, t;
  return e = new Yu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [k2] },
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
      t || (Ht(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function w2(i) {
  let e, t;
  return e = new Lr({
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
      t || (Ht(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function v2(i) {
  let e, t;
  return e = new Lr({
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
      t || (Ht(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function k2(i) {
  let e, t;
  return e = new Cr({}), {
    c() {
      Bn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    i(n) {
      t || (Ht(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function C2(i) {
  let e, t, n, l;
  const o = [v2, w2, p2], s = [];
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
      t.c(), n = u2();
    },
    m(a, _) {
      s[e].m(a, _), B_(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (h2(), Tt(s[c], 1, 1, () => {
        s[c] = null;
      }), c2(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Ht(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Ht(t), l = !0);
    },
    o(a) {
      Tt(t), l = !1;
    },
    d(a) {
      a && z_(n), s[e].d(a);
    }
  };
}
function y2(i) {
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
    a = _2(a, r[u]);
  e = new V1({ props: a });
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
    $$slots: { default: [C2] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[35] !== void 0 && (f.active_source = /*active_source*/
    i[35]), /*value*/
    i[0] !== void 0 && (f.value = /*value*/
    i[0]), n = new n2({ props: f }), mr.push(() => hr(n, "active_source", _)), mr.push(() => hr(n, "value", c)), n.$on(
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
        Bn(e.$$.fragment), t = b2(), Bn(n.$$.fragment);
      },
      m(u, d) {
        Ln(e, u, d), B_(u, t, d), Ln(n, u, d), s = !0;
      },
      p(u, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        4 ? d2(r, [
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
          2 && f2(
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
        u[35], dr(() => l = !1)), !o && d[0] & /*value*/
        1 && (o = !0, h.value = /*value*/
        u[0], dr(() => o = !1)), n.$set(h);
      },
      i(u) {
        s || (Ht(e.$$.fragment, u), Ht(n.$$.fragment, u), s = !0);
      },
      o(u) {
        Tt(e.$$.fragment, u), Tt(n.$$.fragment, u), s = !1;
      },
      d(u) {
        u && z_(t), Dn(e, u), Dn(n, u);
      }
    }
  );
}
function S2(i) {
  let e, t;
  return e = new ac({
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
      $$slots: { default: [y2] },
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
      t || (Ht(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Tt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dn(e, n);
    }
  };
}
function q2(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: f } = e, { _selectable: u = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: p } = e, { show_clear_button: z } = e, { interactive: L } = e, { boxes_alpha: B } = e, { label_list: y } = e, { label_colors: w } = e, { box_min_size: E } = e, { handle_size: C } = e, { box_thickness: S } = e, { box_selected_thickness: M } = e, { disable_edit_boxes: N } = e, { single_box: $ } = e, { show_remove_button: q } = e, { handles_cursor: U } = e, { use_default_label: j } = e, { enable_keyboard_shortcuts: Y } = e, { show_box_labels: G } = e, { gradio: X } = e, P, J = null;
  function le(A) {
    J = A, t(35, J);
  }
  function me(A) {
    s = A, t(0, s);
  }
  const I = () => X.dispatch("change"), ze = () => X.dispatch("edit"), R = () => {
    X.dispatch("clear");
  }, F = ({ detail: A }) => t(34, P = A), Z = () => X.dispatch("upload"), oe = ({ detail: A }) => X.dispatch("select", A), x = ({ detail: A }) => X.dispatch("share", A), we = ({ detail: A }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), X.dispatch("error", A);
  };
  return i.$$set = (A) => {
    "elem_id" in A && t(2, n = A.elem_id), "elem_classes" in A && t(3, l = A.elem_classes), "visible" in A && t(4, o = A.visible), "value" in A && t(0, s = A.value), "label" in A && t(5, r = A.label), "show_label" in A && t(6, a = A.show_label), "root" in A && t(7, _ = A.root), "height" in A && t(8, c = A.height), "width" in A && t(9, f = A.width), "_selectable" in A && t(10, u = A._selectable), "container" in A && t(11, d = A.container), "scale" in A && t(12, m = A.scale), "min_width" in A && t(13, h = A.min_width), "loading_status" in A && t(1, g = A.loading_status), "sources" in A && t(14, b = A.sources), "show_download_button" in A && t(15, v = A.show_download_button), "show_share_button" in A && t(16, p = A.show_share_button), "show_clear_button" in A && t(17, z = A.show_clear_button), "interactive" in A && t(18, L = A.interactive), "boxes_alpha" in A && t(19, B = A.boxes_alpha), "label_list" in A && t(20, y = A.label_list), "label_colors" in A && t(21, w = A.label_colors), "box_min_size" in A && t(22, E = A.box_min_size), "handle_size" in A && t(23, C = A.handle_size), "box_thickness" in A && t(24, S = A.box_thickness), "box_selected_thickness" in A && t(25, M = A.box_selected_thickness), "disable_edit_boxes" in A && t(26, N = A.disable_edit_boxes), "single_box" in A && t(27, $ = A.single_box), "show_remove_button" in A && t(28, q = A.show_remove_button), "handles_cursor" in A && t(29, U = A.handles_cursor), "use_default_label" in A && t(30, j = A.use_default_label), "enable_keyboard_shortcuts" in A && t(31, Y = A.enable_keyboard_shortcuts), "show_box_labels" in A && t(32, G = A.show_box_labels), "gradio" in A && t(33, X = A.gradio);
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
    N,
    $,
    q,
    U,
    j,
    Y,
    G,
    X,
    P,
    J,
    le,
    me,
    I,
    ze,
    R,
    F,
    Z,
    oe,
    x,
    we
  ];
}
class qq extends r2 {
  constructor(e) {
    super(), m2(
      this,
      e,
      q2,
      S2,
      g2,
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
  get gradio() {
    return this.$$.ctx[33];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), ee();
  }
}
export {
  Sq as BaseExample,
  qq as default
};
