namespace namespace {
  type foo = {
    name: string;
    age: string;
  };
  type coo = {
    age: number;
    sex: string;
  };

  type Result = Merge<foo, coo>;
}
