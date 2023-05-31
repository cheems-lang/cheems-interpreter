package Lexer;

import Token.Token;

public class Lexer {
  public String input;
  public int position;
  public int readPosition;
  public char ch;

  public Lexer(String input) {
    this.input = input;
  }

  public void readChar() {
    if (this.readPosition >= input.length()) {
      this.ch = 0;
    } else {
      this.ch = this.input.charAt(this.readPosition);
    }

    this.position = this.readPosition;
    this.readPosition++;
  }

  public Token nextToken() {
    Token tok;

    switch (this.ch) {
      case '=':
        tok = new Token(Token.ASSIGN, this.ch);
        break;

      default:
        break;
    }
  }
}
