namespace namespace {
  type Fn = (a: number, b: string) => number;

  type Result = AppendArgument<Fn, boolean>;
  // expected be (a: number, b: string, x: boolean) => number
}
