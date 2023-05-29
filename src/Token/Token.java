package Token;

public class Token {
  public static final String ILLEGAL = "ILLEGAL";
  public static final String EOF = "EOF";

  // Identifiers + literals
  public static final String IDENT = "IDENT"; // add, foobar, x, y, ...
  public static final String INT = "INT"; // 432554

  // Operators
  public static final String ASSIGN = "=";
  public static final String PLUS = "+";

  // Delimiters
  public static final String COMMA = ",";
  public static final String SEMICOLON = ";";

  public static final String LPAREN = "(";
  public static final String RPAREN = ")";
  public static final String LBRACE = "{";
  public static final String RBRACE = "}";

  // Keywords
  public static final String FUNCTION = "FUNCTION";
  public static final String LET = "LET";
}
