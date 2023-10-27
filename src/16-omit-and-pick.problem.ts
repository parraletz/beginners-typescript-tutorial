import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */
/*
It could be tempting to use Pick<User, "firstName" | "lastName">, but this would
*/
type MyType = Omit<User, "id">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
