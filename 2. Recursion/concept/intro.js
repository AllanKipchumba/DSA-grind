/**
 *   ##########################################
 *               RECURSION
 *   #########################################
 * Recursion is a concept where a function or a process continously calls itself untill a base case is reached.
 * The base case is a condition where the recursion ends and a result is returned. Without a proper base case,
 * the recursive function can run indefinately and lead to a stack overflow error - a runtime error that occurs
 * when the call stack becomes too deep or exceeds its allocated memory.
 *
 * ####### call stack #######
 * - The call stack is a built in data structure that manages function calls. When a function is invoked, a new
 * stack frame is created to store local variables, the return address and other relevant information for that
 * function call. The function is pushed on top of the call stack and when javascript sees the return keyword,
 * or the function ends, the compiler pops the stack
 * - When we write recursive functions, we keep pushing new functions onto the call stack.
 *
 * ###### Essential parts of a recursive function:
 *          1) A base case
 *          2) Different input
 *
 * ############################
 * common recursion pitfalls
 * ############################
 * 1)  No base case or ereneous base case - will lead to a stack overflow error
 * 2)  Forgetting to return or returning the wrong thing
 * 3)  Stack overflow error - too many frames on that stack i.e too many functions being called exceeding
 *     the allocated memory
 */
