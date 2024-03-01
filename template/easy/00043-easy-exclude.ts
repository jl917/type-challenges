namespace namespace {
  type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
}
