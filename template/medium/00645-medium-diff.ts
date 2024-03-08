namespace namespace {
  type Foo = {
    name: string;
    age: string;
  };
  type Bar = {
    name: string;
    age: string;
    gender: number;
  };
  type Coo = {
    name: string;
    gender: number;
  };

  type Check1 = Diff<Foo, Bar>; // {gender: number}
  type Check2 = Diff<Foo, Coo>; // {age: string,gender: number}
}
