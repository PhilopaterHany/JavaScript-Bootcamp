let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// http
// "http" must exist

// s?
// "s" may exist or not (zero or one)

// :
// ":" must exist

// \/
// escaping the slash and it must exist

// (?:[-\w]+\.)?
// grouping one or more "-" and a word character
// excaping a "."
// all the group may exist or not (zero or one)

// ([-\w]+)
// "-" followed by 1 word character
// all of the set must exist (one or more)

// \.
// escaping a dot "."

// \w+
// one or more word character

// (?:\.\w+)?
// non-capturing group
// escaping a dot "."
// word character must exist (one or more)
// all the group may exist or not (zero or one)

// \/?
// escaping a slash "/" and it may exist or not (zero or one)

// .*
// match any character except new line may exist or not (zero or more)

// i
// case insensitive (maybe capital or small)
