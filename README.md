TypeScript provides several utility types that can be extremely helpful in managing and manipulating types in more advanced ways.
### 1. Partial<T>

The Partial utility type constructs a type with all properties of T set to optional. This means that every property of the type created with Partial becomes optional, thus allowing you to not include some properties when creating objects of that type.
Example of Partial:

Suppose you have a type User with mandatory fields. Using Partial, you can create a type where all these fields are optional, which can be useful for functions that might only need to update some fields of the object.

```
type User = {
  id: number;
  name: string;
  age: number;
};

function updateUser(user: Partial<User>) {
  // update logic here
}

// You can call updateUser with any combination of fields:
updateUser({ name: "Alice" }); // Only update the name
updateUser({ age: 25 }); // Only update the age
```

### 2. Omit<T, K>

The Omit utility type constructs a type by picking all properties from T except for those specified in K. This is particularly useful when you want to create a type that should exclude certain properties of another type.
Example of Omit:

Imagine you have a User type again, and you want to create a new type that excludes the id field because it should not be manipulated directly.

```
type User = {
  id: number;
  name: string;
  age: number;
};

type UserWithoutID = Omit<User, 'id'>;

function processUser(user: UserWithoutID) {
  // Processing logic here, no `id` field available
}

// You can use processUser without an id:
processUser({ name: "Bob", age: 30 });
```

### 3. Pick<T, K>

This utility type constructs a type by picking the set of properties K from T. It's useful when you want to create a type that only includes a subset of another type's properties.
Example of Pick:

```
type User = {
  id: number;
  name: string;
  age: number;
};

type UserNameAndAge = Pick<User, 'name' | 'age'>;

function displayUser(user: UserNameAndAge) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}
```

### 4. Readonly<T>

This utility type makes all properties of T read-only, which means they cannot be reassigned after their initial declaration. This is useful for creating immutable objects.
Example of Readonly:

```
type User = {
  name: string;
};

const user: Readonly<User> = { name: "Alice" };
user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
```

### 5. Record<K, T>

This utility type constructs an object type whose property keys are K and property values are T. It's useful for creating dictionary-like objects with known keys.
Example of Record:

```
type UserRole = Record<string, string>;

const roles: UserRole = {
  admin: "Admin",
  user: "User",
  guest: "Guest"
};
```

### 6. Required<T>

The opposite of Partial, this utility type makes all properties of T required, even if they were optionally defined in the original type.
Example of Required:

```
type Props = {
  id?: number;
  name?: string;
};

const props: Required<Props> = {
  id: 1,
  name: "Required name" // Both properties must be provided
};
```

### 7. Exclude<T, U>

This utility type constructs a type by excluding from T all union members that are assignable to U. It's mainly used to manipulate types in union types.
Example of Exclude:

```
type T = string | number | boolean;
type Numeric = Exclude<T, string | boolean>; // Result is 'number'
```

### 8. NonNullable<T>

This utility type constructs a type by excluding null and undefined from T. It's helpful in ensuring that values will definitely not be either null or undefined.
Example of NonNullable:

```
type MaybeNumber = number | null | undefined;
type ValidNumber = NonNullable
```
