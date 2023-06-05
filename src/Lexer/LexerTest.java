package Lexer;

import java.text.MessageFormat;
import java.util.LinkedHashMap;
import java.util.Map;

import Token.Token;

public class LexerTest {
  public static void main(String[] args) throws Exception {
    String input = "=+(){},;";
    Map<String, Character> tests = new LinkedHashMap<String, Character>();

    // populate the tests map
    tests.put(Token.ASSIGN, '=');
    tests.put(Token.PLUS, '+');
    tests.put(Token.LPAREN, '(');
    tests.put(Token.RPAREN, ')');
    tests.put(Token.LBRACE, '{');
    tests.put(Token.RBRACE, '}');
    tests.put(Token.COMMA, ',');
    tests.put(Token.SEMICOLON, ';');
    tests.put(Token.EOF, '\0');

    Lexer l = new Lexer(input);

    for (Map.Entry<String, Character> tt : tests.entrySet()) {
      Token tok = l.nextToken();

      if (tok.type != tt.getKey()) {
        throw new Exception("token type wrong");
      }

      if (tok.literal != tt.getValue()) {
        throw new Exception("literal wrong");
      }

      System.out.println(MessageFormat.format("Test for {0} passed", tok.type));
    }
  }
}
