let w: unknown = 1;
w = "string";

w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };

// w.runANonExistentMethod()
if (typeof w === 'object' && w !== null) {
	(w as { runANonExistentMethod: Function }).runANonExistentMethod()
}