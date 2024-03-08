namespace namespace {
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
}
