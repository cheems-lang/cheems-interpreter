package Lexer;

import java.util.HashMap;
import java.util.Map;

import Token.Token;

public class LexerTest {
  public static void main(String[] args) {
    String input = "=+(){},;";
    Map<String, String> tests = new HashMap<String, String>();

    // populate the tests map
    tests.put(Token.ASSIGN, "=");
    tests.put(Token.PLUS, "+");
    tests.put(Token.LPAREN, "(");
    tests.put(Token.RPAREN, ")");
    tests.put(Token.LBRACE, "{");
    tests.put(Token.RBRACE, "}");
    tests.put(Token.COMMA, ",");
    tests.put(Token.SEMICOLON, ";");
    tests.put(Token.EOF, ";");

    Lexer l = new Lexer(input);

    for (Map.Entry<String, String> tt : tests.entrySet()) {
    }
  }
}
