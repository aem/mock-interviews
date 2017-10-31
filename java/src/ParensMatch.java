public class ParensMatch {

  public static void main(String[] args) {
    if (!parensMatch("")) throw new AssertionError("empty string should validate");
    if (parensMatch("[")) throw new AssertionError("[ doesn't match");
    if (!parensMatch("[()]")) throw new AssertionError("[()] should match");
    if (!parensMatch("[()[]]")) throw new AssertionError("[()[]] should match");
    if (parensMatch("[()]]")) throw new AssertionError("[()]] doesn't match");
  }

  /**
   * @param str  the candidate string
   * @return whether or not the given string has matching parentheses
   */
  static boolean parensMatch(String str) {
    int openSquareCount = 0;
    int openParenCount = 0;
    for (int i = 0; i < str.length(); i++) {
        if (str.charAt(i) == '[') openSquareCount++;
        else if (str.charAt(i) == '(') openParenCount++;
        else if (str.charAt(i) == ']') {
            if (openSquareCount == 0) return false;
            else openSquareCount--;
        } 
        else if (str.charAt(i) == ')') {
            if (openParenCount == 0) return false;
            else openParenCount--;
        }       
    }
    if (openSquareCount == 0 && openParenCount == 0) return true;
    return false;
  }
}
