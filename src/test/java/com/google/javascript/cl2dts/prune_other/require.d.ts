//!! a.b.ShouldNotAppear must be absent here, it is provide'd in a non-root
declare namespace ಠ_ಠ.cl2dts_internal.a.b {
  class Thing {
  }
}
declare module 'goog:a.b' {
  import alias = ಠ_ಠ.cl2dts_internal.a.b;
  export = alias;
}
