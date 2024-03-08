import { Equal } from "../../types";
namespace namespace {
  type Includes<T extends any[], K> = T extends [infer F, ...infer R]
    ? Equal<F, K> extends true
      ? true
      : Includes<R, K>
    : false;

  type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">; // expected to be `false`
}
