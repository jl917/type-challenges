namespace namespace {
  type Test = "123";
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
}
