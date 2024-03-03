import { Expect, Equal } from "../../types";

namespace namespace {
  // expected to be string
  type HelloWorld = string;
  // you should make this work
  type test = Expect<Equal<HelloWorld, string>>;
}
