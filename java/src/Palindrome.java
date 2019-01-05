import sun.jvm.hotspot.utilities.AssertionFailure;
public class Palindrome {

  public static void main(String[] args) {
    if (!isPalindrome("")) throw new AssertionError("empty string should validate");
    if (isPalindrome("adam")) throw new AssertionError("adam is not a palindrome");
    if (!isPalindrome("racecar")) throw new AssertionError("racecar is a palindrome");
    if (!isPalindrome("abccba")) throw new AssertionError("abccba is a palindrome");
  }

  /**
   * @param str  the candidate string
   * @return whether or not the given string is a palindrome
   */
  static boolean isPalindrome(String str) {
    return new StringBuilder(str).reverse().equals(str);
 }
}
