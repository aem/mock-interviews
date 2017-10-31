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
    return false;
  }
}
